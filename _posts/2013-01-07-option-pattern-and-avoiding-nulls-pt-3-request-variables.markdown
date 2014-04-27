---
layout: post
status: publish
published: true
title: 'Option Pattern and avoiding Nulls pt. 3: Request Variables'
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 143
wordpress_url: http://codeangel.org/?p=143
date: '2013-01-07 19:00:44 -0500'
date_gmt: '2013-01-08 01:00:44 -0500'
categories:
- Coding
- PHP
tags: []
comments:
- id: 10433
  author: 'CodeAngel.org &raquo; Option Pattern and avoiding Nulls pt. 2: Method Chaining'
  author_email: ''
  author_url: http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-2-method-chaining.html
  date: '2013-01-07 19:02:19 -0500'
  date_gmt: '2013-01-08 01:02:19 -0500'
  content: "[...] Option github poject: https://github.com/cythrawll/Option Part 1
    Part 3 [...]"
- id: 10434
  author: 'CodeAngel.org &raquo; Option Pattern and avoiding Nulls pt. 1: Introduction'
  author_email: ''
  author_url: http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html
  date: '2013-01-07 19:06:05 -0500'
  date_gmt: '2013-01-08 01:06:05 -0500'
  content: "[...] Option github poject: https://github.com/cythrawll/Option Part 2
    Part 3 [...]"
- id: 16811
  author: John Hayes
  author_email: john@codeangel.co.uk
  author_url: http://www.codeangel.co.uk
  date: '2013-07-11 12:58:24 -0400'
  date_gmt: '2013-07-11 18:58:24 -0400'
  content: try catch
---
<p>In <a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html">Part 1</a> I introduced the Option pattern as a pattern to avoid using nulls.  In <a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-2-method-chaining.html">Part 2</a> I showed an example of how this can be handy in method chaining. In this part I'll introduce how to use Option for request variables.</p>
<p>Request variables are supplied by the user. You can't rely on them to be there all the time. Something as simple as <tt>echo $_GET['search']</tt> throws something like this:</p>
<pre>
PHP Notice:  Undefined index: search in ...
</pre>
<p>Doing naive echos like that can really fill your logs on a server quick. You can either turn Notices off (which you shouldn't), or you can find another safe way to get request variables.  Here is an approach that works.</p>
<pre lang="php">
  echo isset($_GET['term']) ? $_GET['term'] : 'default';
</pre>
<p>Having to repeat <tt>$_GET['term']</tt> twice is extremely ugly. In php 5.3, we have a short ternary like ?:, however that will not suppress the Notice, <tt>isset()</tt> is needed.  This is another case where Option pattern can help.</p>
<pre lang="php">
  echo Option::create($_GET['term'])->getOrElse('default');
</pre>
<p>Much easier to read and flows much better.  But since this is a very common use case to use Option for request variables, in my implementation I made a few static helpers.</p>
<pre lang="php">
  echo Option::_get('term')->getOrElse('default');
  echo Option::_post('username')->getOrElse('anonymous');
  
  //this works like $_REQUEST but without $_COOKIE,
  //$_GET always gets priority first
  //use _requestp($key) if $_POST needs priority
  echo Option::_request('term')->getOrElse('No Search Term Entered');

  header('Location: '.Option::_server('HTTP_REFERER')->getOrElse('http://example.org/'));

  //All these methods work with multidim arrays, for example: take $_GET['foo'][0];
  echo Option::_get('foo', 0)->getOrElse('default');

  //Don't forget you can map too!
  echo Option::_get('term')->map('htmlentities');
</pre>
<p>You can use Option during your form validation as well!  Remember <tt>isEmpty()</tt> and <tt>isDefined()</tt> only care if the value is defined or not null. Empty strings, false and empty arrays are considered values here.  I added another method <tt>hasLength()</tt> which returns false if the value <tt>isEmpty()</tt>, empty array, empty string.  Personally I never agreed things like 0, false, '0' in php's <tt>empty</tt> function should return true on empty.</p>
<pre lang="php">
  $term = Option::_get('term');
  if($term->hasLength()) {
    //use it!
  } 
</pre>
<p>I hope you find this Option pattern useful! Happy coding!</p>
<h4>Links</h4>
<p>Option github poject: <a href="https://github.com/cythrawll/Option" target="_blank">https://github.com/cythrawll/Option</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html">Part 1</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-2-method-chaining.html">Part 2</a></p>
