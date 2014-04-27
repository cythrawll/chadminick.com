---
layout: post
status: publish
published: true
title: XSL Transformation with JAXB
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
excerpt: 'The goal here is to take the output of a JAXB Marshaller and pass it straight
  to an xslt processor like JAXP.  The issue with this is that JAXP takes it''s input
  from various sorts of input streams and JAXB marshaller outputs usually in some
  sort of output stream.  I saw some (bad) solutions about changing an output stream
  into an input stream and then pass it to JAXP.  eww.  The cool thing about JAXB
  is that it can marshall into a SAX <a href ="http://java.sun.com/webservices/docs/1.6/api/org/xml/sax/ContentHandler.html">ContentHandler</a>.
  And there is an implementation of ContentHandler that handles XSL transformations
  for us! Here is an example of a http servlet that will do an xslt transformation
  on a JAXB marshalled POJO and dump the results right into into the servlet''s output
  stream:'
wordpress_id: 24
wordpress_url: http://codeangel.org/?p=24
date: '2009-11-17 22:53:44 -0500'
date_gmt: '2009-11-18 04:53:44 -0500'
categories:
- Java
tags:
- Java
- XSL
- XSLT
- Servlets
- JAXB
- JAXP
comments:
- id: 577
  author: a guy
  author_email: fakeEmail@iToldU.com
  author_url: ''
  date: '2010-08-26 14:41:18 -0400'
  date_gmt: '2010-08-26 20:41:18 -0400'
  content: Thanks :D, just what i was looking for
- id: 3688
  author: Zajaczkowski
  author_email: mathias.zajaczkowski@ubik.ch
  author_url: http://www.ubik.ch
  date: '2011-10-12 04:27:08 -0400'
  date_gmt: '2011-10-12 10:27:08 -0400'
  content: "That's what I'm looking for too.\r\nHowever I can't have your sample work
    (in Eclipse Indigo).\r\nCould you provide a link to any concrete example.\r\nThanks"
- id: 3704
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2011-10-13 23:19:35 -0400'
  date_gmt: '2011-10-14 05:19:35 -0400'
  content: |-
    I don't have any links to concrete examples.  Could you let me know exactly what troubles you are having?

    The only thing really here to keep this from being concrete is MyClass, which can be any bean, annotated with jaxb @XmlRootElement on the class at minimal.
    <code>
    @XmlRootElement
    public class MyClass { ...
    </code>

    The way I created myObject here you can ignore, really can just create a new MyClass object and populate it however, as long as the object ends up in marshal() method.
- id: 6021
  author: Mattias J
  author_email: mj-lists@expertsystems.se
  author_url: ''
  date: '2012-04-23 01:41:06 -0400'
  date_gmt: '2012-04-23 07:41:06 -0400'
  content: Why not use http://docs.oracle.com/javaee/5/api/javax/xml/bind/util/JAXBSource.html
    ?
- id: 6033
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-04-23 21:41:04 -0400'
  date_gmt: '2012-04-24 03:41:04 -0400'
  content: "<a href=\"#comment-6021\" rel=\"nofollow\">@Mattias J</a> \r\nGreat find!"
- id: 10232
  author: Jesper Møller
  author_email: jesper@selskabet.org
  author_url: ''
  date: '2012-12-27 09:44:27 -0500'
  date_gmt: '2012-12-27 15:44:27 -0500'
  content: "Note that this example will leak the JAXBContext (or rather, the perm-gen
    data under it) which is a bad thing. Only get it once, and reuse it -- it is threadsafe.\r\n\r\nSee
    also http://stackoverflow.com/questions/7400422/jaxb-creating-context-and-marshallers-cost"
- id: 10294
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-12-31 01:23:12 -0500'
  date_gmt: '2012-12-31 07:23:12 -0500'
  content: "<a href=\"#comment-10232\" rel=\"nofollow\">@Jesper Møller </a> \r\nThanks
    Jesper, I have fixed this in my production code years ago, but forgot to update
    my post!"
---
<p>The goal here is to take the output of a JAXB Marshaller and pass it straight to an xslt processor like JAXP.  The issue with this is that JAXP takes it's input from various sorts of input streams and JAXB marshaller outputs usually in some sort of output stream.  I saw some (bad) solutions about changing an output stream into an input stream and then pass it to JAXP.  eww.  The cool thing about JAXB is that it can marshall into a SAX <a href ="http://java.sun.com/webservices/docs/1.6/api/org/xml/sax/ContentHandler.html">ContentHandler</a>. And there is an implementation of ContentHandler that handles XSL transformations for us! Here is an example of a http servlet that will do an xslt transformation on a JAXB marshalled POJO and dump the results right into into the servlet's output stream:</p>
<pre lang="java">
package org.codeangel.awesome;

import java.io.IOException;
import java.io.OutputStream;
import java.net.MalformedURLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.transform.*;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.*;

public class DisplayServlet extends HttpServlet {

  private Templates displayTemplate;
  private TransformerFactory transFact;
  private static JAXBContext jaxbc;

  static {
    try {
      jaxbc = JAXBContext.newInstance(MyClass.class);
    } catch (JAXBException e) {
      e.printStackTrace();
    }
  }
	
  @Override
  public void init() throws ServletException {
    //We are going to compile the xslt stylesheet on init and cache the result. 
    //(in this example display.xsl is in the root of the webapp)
    transFact = TransformerFactory.newInstance();
    try {
      displayTemplate = transFact.newTemplates(
        new StreamSource(getServletContext()
              .getResource("/display.xsl").toExternalForm())
      );
    } catch (TransformerConfigurationException e) {
      e.printStackTrace();
    } catch (MalformedURLException e) {
      e.printStackTrace();
    }

  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException {
    //In this example I'm fetching an object from the servlet context, I could
    //just as easily got the object from hibernate, or any other datasource
    MyClass myObject = (MyClass)getServletContext().getAttribute("MyObject");

    //I just happen to be tranforming to html, you can change this as needed
    resp.setContentType("text/html");
			
    try {
      Marshaller marshaller = jaxbc.createMarshaller();
      OutputStream out = resp.getOutputStream();

      TransformerFactory transFact = TransformerFactory.newInstance();
      Result outputResult = new StreamResult(out);
			
      TransformerHandler handler = 
      ((SAXTransformerFactory) transFact).newTransformerHandler(displayTemplate);
      handler.setResult(outputResult);

      //this is where everything happens!
      marshaller.marshal(myObject, handler);
				
    }  catch (TransformerConfigurationException e) {
       e.printStackTrace();
    } catch (JAXBException e) {
      e.printStackTrace();
    }
  }
}
</pre>
<p>Edit: as Jesper has pointed out, you really should only create one JaxBContext, as it's pretty heavy.  I moved the creation to a static block for simplification... You could also use a singleton pattern here as well.</p>
