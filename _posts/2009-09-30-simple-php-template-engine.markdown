---
layout: post
status: publish
published: true
title: Simple PHP Template Engine
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
excerpt: PHP is a bit of a rare language as it can already template into text in markup
  with zero modifications or libraries.  It is probably one of the big contributing
  factors why PHP is one of the most popular languages on the web today.  (Can't be
  the only factor, it didn't work for ColdFusion)  Most other web languages have a
  one or more templating languages with a different syntax that need to be learned
  on top of the implementing language.  PHP lowers the bar to entry by allowing you
  to put your PHP code right into your html.  But as we all know, sometime in your
  PHP tour, you will realize the need to separate presentation logic and the application
  logic.  Some developers go running to some other solution that provides a different
  syntax.  I am a bit puzzled on why this seems to be common practice, PHP can provide
  the same features without throwing another template syntax on top of what PHP already
  does.  You can still achieve the separation needed with a simple class (shown at
  the end of this article).
wordpress_id: 14
wordpress_url: http://codeangel.org/?p=14
date: '2009-09-30 22:11:28 -0400'
date_gmt: '2009-10-01 04:11:28 -0400'
categories:
- Coding
- PHP
tags:
- PHP
- Templating
- HTML
- Coding
comments:
- id: 81
  author: Daniel Campbell
  author_email: danny@sporkbox.us
  author_url: http://sporkbox.us
  date: '2009-10-27 17:40:08 -0400'
  date_gmt: '2009-10-27 23:40:08 -0400'
  content: This example gave me the necessary foundation to understand the concept
    behind template engines. It's very simple and easy to approach. I plan on using
    something similar to it in my backend's next version. Are there any stipulations
    on using this code?
- id: 82
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2009-10-27 17:42:41 -0400'
  date_gmt: '2009-10-27 23:42:41 -0400'
  content: |-
    I officially license this code with WTFPL:
    http://en.wikipedia.org/wiki/WTFPL
- id: 155
  author: Frank Munch
  author_email: sm_codeangel@u5.com
  author_url: ''
  date: '2009-12-12 01:49:46 -0500'
  date_gmt: '2009-12-12 07:49:46 -0500'
  content: "You don't mention the most important problem with Smarty - that some syntax
    is very clumsy, it is not object-oriented, and parametrization is difficult.\r\nBut
    the value of it is that it is easier to learn than PHP, and definitely less dangerous."
- id: 158
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2009-12-13 12:47:04 -0500'
  date_gmt: '2009-12-13 18:47:04 -0500'
  content: "<a href=\"#comment-155\" rel=\"nofollow\">@Frank Munch</a> \r\nI don't
    think it's easier to learn than PHP at all. There is no evidence towards that.
    \ And I think I covered the less dangerous part in the article."
- id: 272
  author: Tomas Arribas
  author_email: tomas@psycle.com
  author_url: http://www.psycle.com
  date: '2010-02-01 09:41:12 -0500'
  date_gmt: '2010-02-01 15:41:12 -0500'
  content: "There is a small problem with your Template class when using arrays. \r\n\r\nTry
    this:\r\n\r\n[code]\r\n$view-&gt;a = array('foo');\r\nvar_dump($view-&gt;a); //foo
    is there, all fine\r\n\r\n$view-&gt;a[] = 'bar';\r\nvar_dump($view-&gt;a); //bar
    is not there!\r\n[/code]\r\n\r\nTo solve this, you need to return the __get by
    reference, like this:\r\n\r\n[code]\r\npublic function &amp;__get($name){\r\n
    \ if (isset($this-&gt;vars[$name])) return $this-&gt;vars[$name]; \r\n  else return
    null;\r\n}\t\r\n[/code]\r\n\r\nIt's also advisable to overload isset and unset\r\n\r\n[code]\r\npublic
    function __isset($name) {        \r\n  return isset($this-&gt;vars[$name]);\r\n}\r\n\r\npublic
    function __unset($name) {\r\n  unset($this-&gt;vars[$name]);\r\n}\r\n[/code]\r\n\r\nCheers!"
- id: 318
  author: AntonioCS
  author_email: antoniocs@gmail.com
  author_url: http://antoniocs.org
  date: '2010-03-03 11:56:09 -0500'
  date_gmt: '2010-03-03 17:56:09 -0500'
  content: Why not just use title ?&gt; since you are including in the class code
    and you already have the __set method so it should be simple to change to using
    $this in the template :)
- id: 359
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2010-03-11 12:23:29 -0500'
  date_gmt: '2010-03-11 18:23:29 -0500'
  content: I am not sure I understand the question.
- id: 508
  author: Refactoring PHP &laquo; Dan Bernardic
  author_email: ''
  author_url: http://dan.bernardic.ca/blog/refactoring-php/
  date: '2010-06-15 00:07:16 -0400'
  date_gmt: '2010-06-15 06:07:16 -0400'
  content: "[...] purpose of most PHP code is to output HTML that the web server will
    send back to the browser. If you have a table that has 20 rows, and all [...]"
- id: 589
  author: Kim N. Lesmer
  author_email: knl@bitflop.com
  author_url: http://bitflop.com
  date: '2010-09-07 20:58:48 -0400'
  date_gmt: '2010-09-08 02:58:48 -0400'
  content: Beautiful article! Could not agree more!
- id: 1163
  author: Christian South
  author_email: csouth@xistins.com
  author_url: http://www.christiansouth.com/
  date: '2011-02-15 12:20:09 -0500'
  date_gmt: '2011-02-15 18:20:09 -0500'
  content: "<a href=\"#comment-318\" rel=\"nofollow\">@AntonioCS</a> \r\n<a href=\"#comment-359\"
    rel=\"nofollow\">@Chad Emrys Minick</a> \r\n\r\nI believe what he is referring
    to is dropping the extract($this-&gt;vars);\r\nWithout your template acts as part
    of the view class. In that way all your vars are $this-&gt;title and $this-&gt;foo
    but you also have access to functions (@see view helpers like Zend_View_Helper)
    through the __call magic function inside of your Template class.\r\n\r\nAll and
    All nice work."
- id: 1925
  author: Richard
  author_email: willis.rh@gmail.com
  author_url: ''
  date: '2011-04-17 13:56:00 -0400'
  date_gmt: '2011-04-17 19:56:00 -0400'
  content: A similar article was written in 2003 http://www.massassi.com/php/articles/template_engines/
    :)
- id: 1992
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2011-04-22 08:00:25 -0400'
  date_gmt: '2011-04-22 14:00:25 -0400'
  content: really you still have access to class methods, even with extract().  The
    example I provided was the simplest template engine to show off how to do it.  I
    really suggest that people do add in view helper support as well.  Maybe I'll
    write another article sometime showing how to do it.
- id: 3727
  author: Strategies for migrating live site to MVC structure? | SeekPHP.com
  author_email: ''
  author_url: http://www.seekphp.com/strategies-for-migrating-live-site-to-mvc-structure/
  date: '2011-10-18 03:33:57 -0400'
  date_gmt: '2011-10-18 09:33:57 -0400'
  content: "[...] definite thing you might want to look at are the ways of using templates
    in php. Examine the code, and see what you has to change to fit your needs (it
    is more of a direction, not [...]"
- id: 5543
  author: Oscar
  author_email: oscar@oscarm.org
  author_url: http://oscarm.org/
  date: '2012-03-12 12:07:22 -0400'
  date_gmt: '2012-03-12 18:07:22 -0400'
  content: You woudln't need the Exception inside __set if you defined a property
    named 'view_template_file'
- id: 5851
  author: Gerome
  author_email: gerome@googleadmin.com
  author_url: http://api.google.com
  date: '2012-04-07 09:24:21 -0400'
  date_gmt: '2012-04-07 15:24:21 -0400'
  content: i also love the kiss princip. your words are completely right. template
    engines are so redundant. Lol they even have great disadvantages. learning a bit
    php is cool since it can be used on many fields. a kiss tut about using plugins
    prerendering data would be cool.
- id: 8488
  author: Ben
  author_email: b3n.ji@gmx.net
  author_url: ''
  date: '2012-09-26 07:01:42 -0400'
  date_gmt: '2012-09-26 13:01:42 -0400'
  content: "Thanks for this simple template class, but I have a question regarding
    multidimensonial arrays.\r\nHow can I achieve to get these filled?\r\nBackground:\r\nI
    have a while loop in which some more variables need to be filled in.\r\nI would
    appreciate any help on this!\r\nThanks in advance!"
- id: 8865
  author: "Что такое модель в MVC | Заметки web программиста"
  author_email: ''
  author_url: http://blog.superk.ru/misc/chto-takoe-model-v-mvc/
  date: '2012-10-20 18:08:06 -0400'
  date_gmt: '2012-10-21 00:08:06 -0400'
  content: "[...] can either use either native PHP templates or use some third-party
    templating engine. There also might be some third-party libraries, which [...]"
- id: 9301
  author: Ivo
  author_email: ivoreali@gmail.com
  author_url: ''
  date: '2012-11-09 04:36:05 -0500'
  date_gmt: '2012-11-09 10:36:05 -0500'
  content: Very good reading, thanks! I agree with everything you said but couldn't
    agree more with your clarification on Smarty templating engine. A car on top of
    another car, and most people just mention the advantages of the car on the top,
    forgetting the overload you are causing on the bottom car. I would even mention
    further, the car on the top would need you to learn how to drive in a different
    way!
- id: 9311
  author: Jonathan
  author_email: tornadojon@hotmail.com
  author_url: ''
  date: '2012-11-09 15:53:12 -0500'
  date_gmt: '2012-11-09 21:53:12 -0500'
  content: I tend to disagree firstly because this breaks the OO, I always try to
    avoid to usage of magic methods __get and __set. Secondly how would you use this
    with more complicated structure like a table of results.
- id: 9524
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-11-14 05:06:08 -0500'
  date_gmt: '2012-11-14 11:06:08 -0500'
  content: "<a href=\"#comment-9311\" rel=\"nofollow\">@Jonathan </a> \r\nI am curious
    to why you think that assigning into properties \"breaks the OO\".   A complicated
    structure like a table of results doesn't really add, or take away any complexity
    in the template.  You can still assign the value into the scope of the template,
    and then loop over it the same way you would in PHP.  Even do nested looping!"
- id: 9526
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-11-14 05:11:05 -0500'
  date_gmt: '2012-11-14 11:11:05 -0500'
  content: "<a href=\"#comment-8488\" rel=\"nofollow\">@Ben </a> \r\nThere's several
    ways you can do this.  You can just assign a multi dimensional array into the
    template and loop over it like you normally would.\r\n\r\nThe other way I've been
    thinking about doing a blog about... Using the SPL to make a sort of \"lazy iterator\"
    so that the values of the array aren't filled out until you loop over them.  You
    can simply just assign the object into the view.  As you loop over object, it
    will get the data you need."
- id: 10290
  author: Dejan
  author_email: dejan.marjanovic@gmail.com
  author_url: http://webarto.com
  date: '2012-12-30 15:56:32 -0500'
  date_gmt: '2012-12-30 21:56:32 -0500'
  content: "extract($this-&gt;vars, EXTR_SKIP);\r\n\r\nWould prevent overwrite of
    $view_template_file."
- id: 10293
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-12-31 01:08:03 -0500'
  date_gmt: '2012-12-31 07:08:03 -0500'
  content: great tip! thanks.
- id: 16139
  author: Richie
  author_email: ric96003131@hotmail.com
  author_url: ''
  date: '2013-06-20 06:01:24 -0400'
  date_gmt: '2013-06-20 12:01:24 -0400'
  content: "Faith is knowledge ... and in the wrong hands it can be very painful.\r\n\r\nOne
    of the major drawbacks to your argument (which I understand being - the use of
    Smarty is redundant) Is without a different template language, or rules in place
    to stop biz logic seeping into presentation code - your asking for trouble.\r\n\r\nYou
    can cache/compile any of these so-called \"redundant\" layers without affecting
    other layers of your code. If your building a little percy website, by all means
    use PHP for both templates and backend code, but if you don't have rules and enough
    discipline in place to prevent application seepage between these layers on a large
    scale project - your asking for trouble!\r\n\r\nAnother point about OO in front
    end code. Ask yourself, what tools do you really need for the presentation layer?
    Repeating groups ... conditional statements ... That's actually about it. If your
    thinking of something more complicated, you probably have your biz logic in the
    wrong place. The only exception to this I would suggest are view helpers.\r\n\r\nSo
    KISS in this case is adding layers to your apps - NO KISS are for people who us
    a sledgehammer for everything."
- id: 18440
  author: How should a model be structured in MVC? | Northwind Traders Documentation
  author_email: ''
  author_url: http://documentation.northwind-traders.com/?p=2385
  date: '2013-08-07 11:29:53 -0400'
  date_gmt: '2013-08-07 17:29:53 -0400'
  content: "[...] can either use either native PHP templates or use some third-party
    templating engine. There also might be some third-party libraries, which [...]"
- id: 19845
  author: Firgas
  author_email: firgas@gmail.com
  author_url: ''
  date: '2013-08-25 14:43:52 -0400'
  date_gmt: '2013-08-25 20:43:52 -0400'
  content: "Hello,\r\n\r\nthis article has really persuaded me that PHP is a good
    choice for templating! Thanks!\r\n\r\nWhat do you say on the example bellow.\r\nI
    have tried to improve the security of the template php.\r\nInstead of \"include($view_template_file);\"
    I am first reading from the file and do some operations with it:\r\n- possibility
    of tag change (nobody will know this is PHP)\r\n- no use of $this variable in
    the template (Now you even can't see Parser class methods!!!)\r\n- only one expression
    per tag\r\nThan I simply run it by the eval() function.\r\nIntroducing preg_replace
    is maybe step backwards but how to do it in a different way?\r\nAnyway, I still
    don't have to write my own parser for statements!\r\n\r\n\"\" ?&gt;\")); //&lt;?\r\n
    \     \r\n      // do some additional\r\n      $patterns = array(\r\n        &#039;//',
    \ // remove php with $this variable and multiline code\r\n        '/&lt;\\?\\s/&#039;,
    \                                // add &quot;php&quot; after each &quot;&lt;?&quot;\r\n
    \       &#039;/&lt;\\?(\\=|php\\=|php)?\\s?\\$/&#039;,  // automaticly echo variables\r\n
    \     );\r\n      $replace = array(\r\n        &#039;&#039;,\r\n        &#039;&lt;?php
    &#039;,\r\n        &#039;do_parse($file,$values);\r\n    \r\n  }\r\n  \r\n  private
    function run_parsing($template_code,$template_values) {\r\n    extract($template_values,EXTR_SKIP);\r\n
    \   ob_start();\r\n    eval(\"?&gt;\".$template_code.\""
- id: 19846
  author: Firgas
  author_email: firgas@gmail.com
  author_url: ''
  date: '2013-08-25 14:48:11 -0400'
  date_gmt: '2013-08-25 20:48:11 -0400'
  content: "Sry for spamming, but code in the previous post was somehow srewed because
    of the PHP opening tags! Hope this time it will be good\r\n\r\n  public function
    parse($file,$values) {\r\n  \r\n      $file = file_get_contents($file);\r\n      \r\n
    \     // change tags if you want\r\n      $file = strtr($file,array(\"{%\"=&gt;\"\"
    ?&gt;\")); //&lt;?\r\n      \r\n      // do some additional\r\n      $patterns
    = array(\r\n        &#039;//', // remove php with $this variable and multiline
    code\r\n        '/&lt;\\?\\s/&#039;,                     // add &quot;php&quot;
    after each &quot;&lt;?&quot;\r\n        &#039;/&lt;\\?(\\=|php\\=|php)?\\s?\\$/&#039;,
    \  // automaticly echo variables\r\n      );\r\n      $replace = array(\r\n        &#039;&#039;,\r\n
    \       &#039;&lt;\\?php &#039;,\r\n        &#039;do_parse($file,$values);\r\n
    \   \r\n  }\r\n  \r\n  private function run_parsing($template_code,$template_values)
    {\r\n    extract($template_values,EXTR_SKIP);\r\n    ob_start();\r\n    eval(\"?&gt;\".$template_code.\"&lt;?php
    &quot;); //&quot;\r\n    return ob_get_clean();\r\n  }"
- id: 19847
  author: Firgas
  author_email: firgas@gmail.com
  author_url: ''
  date: '2013-08-25 14:56:20 -0400'
  date_gmt: '2013-08-25 20:56:20 -0400'
  content: "Hopefully now... I have substituted all \"[?php \",\"%}\"=&gt;\" ?&gt;\"));\r\n
    \     \r\n      // do some additional\r\n      $patterns = array(\r\n        '/[\\?.*(\\$this\\W+|\\;).*\\?\\&gt;/',
    // remove php with $this variable and multiline code\r\n        '/[\\?\\s/',                     //
    add \"php\" after each \"[?\"\r\n        '/[\\?(\\=|php\\=|php)?\\s?\\$/',   //
    automaticly echo variables\r\n      );\r\n      $replace = array(\r\n        '',\r\n
    \       '[?php ',\r\n        '[?php echo $',\r\n      );\r\n      $file = preg_replace($patterns,$replace,$file);\r\n
    \     \r\n      return $this-&gt;do_parse($file,$values);\r\n    \r\n  }\r\n  \r\n
    \ private function run_parsing($template_code,$template_values) {\r\n    extract($template_values,EXTR_SKIP);\r\n
    \   ob_start();\r\n    eval(\"?&gt;\".$template_code.\"[?php \");\r\n    return
    ob_get_clean();\r\n  }\r\n  \r\n}"
- id: 20727
  author: PHP MVC - Template / Loading variables Issue - PHP Solutions - Developers
    Q &amp; A
  author_email: ''
  author_url: http://www.ggkf.com/php/php-mvc-template-loading-variables-issue
  date: '2013-09-10 05:49:17 -0400'
  date_gmt: '2013-09-10 11:49:17 -0400'
  content: "[...] P.P.S. For how to implement pure php templates, read this article.
    [...]"
---
<h3>PHP for templating?</h3>

PHP is a bit of a rare language as it can already template into text in markup with zero modifications or libraries.  It is probably one of the big contributing factors why PHP is one of the most popular languages on the web today.  (Can't be the only factor, it didn't work for ColdFusion)  Most other web languages have a one or more templating languages with a different syntax that need to be learned on top of the implementing language.  PHP lowers the bar to entry by allowing you to put your PHP code right into your html.  But as we all know, sometime in your PHP tour, you will realize the need to separate presentation logic and the application logic.  Some developers go running to some other solution that provides a different syntax.  I am a bit puzzled on why this seems to be common practice, PHP can provide the same features without throwing another template syntax on top of what PHP already does.  You can still achieve the separation needed with a simple class (shown at the end of this article).

<!--MORE-->

<p>I mainly see two solutions that people tend to use over PHP.  One solution is to use a premade template engine like Smarty on top of PHP.  The other is to use string replacement techniques on a template file.</p>
<h3>String replacement... sucks</h3>
<p>If you wrote your own template engine most likely using a <i>str_replace</i> or perhaps <i>preg_replace</i> to implement the embedding of dynamic parts of the code.  There are two problems with this:  One, it's slow;  Secondly it's difficult to implement all the features needed to provide a robust templating language.  Things like formatting functions, control structures etc are a bit clumsy to add to a solution like this.  The other option is to implement very simple variable replacement, and then doing your formatting functions, control structures, etc. in your controller and just assign the result to variable replacement, however, that is completely against the point of having a template engine. The separation of presentation logic and app logic gets pretty blurry when you do some of the presentation logic outside of the template.</p>
<p>Did I mention it's a pretty slow solution?</p>
<h3>Smarty and other template engines</h3>
<p>Smarty and similar template engines are pretty darn redundant.  Here is an example of the workflow for Smarty:</p>
<ul>
<li>Smarty language is parsed</li>
<li>Compiled to PHP</li>
<li>PHP code is cached</li>
<li>PHP code is parsed</li>
<li>PHP code is compiled to opcodes</li>
<li>If you have a opcode cache, opcodes are cached</li>
<li>opcodes are ran</li>
</ul>
<p>If you don't see the redundancy there, I'm not doing my job very well.  The whole idea of Smarty is like having a car on top of a car and believing it improves your gas mileage. Most people complain that the Smarty syntax is better than PHP's for templating. Bull.  There is nothing really gained in Smarty's syntax, it only looks more concise, but in reality there is not enough gains to support having the bloat on top of PHP. You save a couple of keystrokes, big deal.  {$var} vs. < ?=$var?>.  That is micro-optimization if I ever saw it.  PHP control structres and formatting are much more concise and cleaner looking than Smarty's.  Smarty doesn't work with most IDE's, so with PHP you gain everything you get with your IDE (or editor), code completion, highlighting, syntax linting, and more!</p>
<h3>common (lame) excuses</h3>
<h4>My designers don't know PHP</h4>
<p>They also don't know the templating language you pick for them.  If they are going to learn something, have them just learn enough PHP to do their templating.  The syntax of something like smarty isn't really easier to learn at all.</p>
<h4>I can't use PHP! that's not separating the presentation logic!</h4>
<p>Actually you can achieve clear separation.  See the class code below.</p>
<h4>PHP syntax sucks for Templating</h4>
<p>No, it's just fine.  Really.</p>
<h4>I don't trust my designers with PHP</h4>
<p>You are using a templating engine to solve the wrong problem.  Template engines are meant to achieve higher maintainability through separation of logic.  What you are trying to solve is a flaw in your job culture.  These days, designers don't need to write bad server side code to cause a lot of hurt, they can write some horrid client side code that can be just as bad.  Also your templating engine should be flexible in case you run into a wall in implementation.  You don't want to paint yourself in a architectural corner because you don't do code review. (if you really don't trust your designers, only let them make static html mockups, have a jr. developer make them into templates.)</p>
<h4>I don't like PHP</h4>
<p>Me either, that's why I work with Java and JSP.</p>
<h2>The Code:</h2>

{%  highlight php %}
<?php
class Template {
  private $vars  = array();

  public function __get($name) {
    return $this->vars[$name];
  }

  public function __set($name, $value) {
    if($name == 'view_template_file') {
      throw new Exception("Cannot bind variable named 'view_template_file'");
    }
    $this->vars[$name] = $value;
  }

  public function render($view_template_file) {
    if(array_key_exists('view_template_file', $this->vars)) {
      throw new Exception("Cannot bind variable called 'view_template_file'");
    }
    extract($this->vars);
    ob_start();
    include($view_template_file);
    return ob_get_clean();
  }
}
{% endhighlight %}

<p>Usage:</p>
<p>main.php template:</p>

{% highlight html+php %}
<html>
<head>
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1><?php echo $title; ?></h1>
    <div>
        <?php echo $content; ?>
    </div>
</body>
</html>
{% endhighlight %}

<p>content.php:</p>

{% highlight html+php %}
<ul>
    <?php foreach($links as $link): ?>
        <li><?php echo $link; ?></li>
    <?php endforeach; ?>
</ul>
<div>
    <?php echo $body; ?>
</div>
{% endhighlight %}

<p>controller.php:</p>

{% highlight php startinline %}
$view = new Template();

$view->title = "hello, world";
$view->links = array("one", "two", "three");
$view->body = "Hi, sup";

$view->content = $view->render('content.php');
echo $view->render('main.php');
{% endhighlight %}

<h3>Other PHP templating solutions you may want to check out</h3>
<p><a href="http://phpsavant.com/">PHP Savant</a><br />
<a href="http://framework.zend.com/manual/en/zend.view.html">Zend View, Part of the Zend Framework</a></p>
<p><b>*EDIT*</b> Added checks to make sure that no one tries to binding a variable named view_template_file to prevent somone doing something silly and bind the whole request to the function overriding the variable. Causing a nasty vulnerability</p>
