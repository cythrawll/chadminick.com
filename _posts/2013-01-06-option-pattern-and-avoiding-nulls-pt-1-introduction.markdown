---
layout: post
status: publish
published: true
title: 'Option Pattern and avoiding Nulls pt. 1: Introduction'
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 120
wordpress_url: http://codeangel.org/?p=120
date: '2013-01-06 21:22:17 -0500'
date_gmt: '2013-01-07 03:22:17 -0500'
categories:
- Coding
- PHP
tags: []
comments:
- id: 10416
  author: 'CodeAngel.org &raquo; Option Pattern and avoiding Nulls pt. 2: Method Chaining'
  author_email: ''
  author_url: http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-2-method-chaining.html
  date: '2013-01-06 21:27:15 -0500'
  date_gmt: '2013-01-07 03:27:15 -0500'
  content: "[...] Pt. 1. I introduced Option as a way to avoid running into problems
    using null. Now to show you one of [...]"
- id: 10432
  author: 'CodeAngel.org &raquo; Option Pattern and avoiding Nulls pt. 3: Request
    Variables'
  author_email: ''
  author_url: http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-3-request-variables.html
  date: '2013-01-07 19:00:56 -0500'
  date_gmt: '2013-01-08 01:00:56 -0500'
  content: "[...] Part 1 I introduced the Option pattern as a pattern to avoid using
    nulls. In Part 2 I showed an example of [...]"
---
<p>I imagine in the PHP community, the idea of avoiding nulls in your code might be something new to think about.  Because PHP is a dynamically typed language, nulls are handled much better compared to other languages.  However, they do still cause a lot of issues.  Two of the main places I see issues with nulls in PHP is method chaining and request variables.  I'll make two more parts to this series to cover each.  This is part 1: introduction to the Option pattern.</p>
<p>Nulls have been a headache for development ever since they started. I always tend to see new code in Java that hasn't been tested well and is full of NullPointerExceptions.  Null's invention is attributed to C. A. R. Hoare, which he calls his "billion dollar mistake".  Many new languages have looked into encouraging methods to avoid using null types.</p>
<p>With the rise of popularity of functional programming languages, Haskell has an interesting approach called a "Maybe Monad", which is a great way to represent something that could or could not be there.  When Scala, a functional/object oriented hybrid language came across the same problem, they created an object oriented/functional approach of the Maybe Monad and called it an '<a href="http://www.scala-lang.org/api/current/index.html#scala.Option" title="Option" target="_blank">Option</a>'.  Option is an abstract type with two concrete implementations: <a href="http://www.scala-lang.org/api/current/index.html#scala.Some" title="Some" target="_blank">Some</a> and <a href="http://www.scala-lang.org/api/current/index.html#scala.None$" title="None" target="_blank">None</a>.  'Some' naturally represents an option that has a value, while 'None' obviously represents an option without a value. Think of 'None' as a Null on steroids.</p>
<p>Google apparently likes this idea and added it to their <a href="http://code.google.com/p/guava-libraries/wiki/UsingAndAvoidingNullExplained" title="Guava" target="_blank">Guava</a> library for Java.  I loved the pattern and now I've made one for PHP: <a href="https://github.com/cythrawll/Option" target="_blank">https://github.com/cythrawll/Option</a>.</p>
<p>Option Pattern in PHP is less needed than in languages like Scala and Java who try to have a high degree of type safety. Null is a really difficult bugger when it comes to type safety, however, like I said, PHP has a few places where Option Pattern could come in handy.</p>
<p>Here is some basic usage:</p>
<p>Let's say you have a function that sometimes may return null, there is a static method <tt>create($arg)</tt> on Option that will create either a 'Some' or 'None' instance.</p>
<pre lang="php">
$maybe = mightReturnNullOrSomething();
$option = Option::create($maybe);
</pre>
<p>Options can also let you handle undefined variables.</p>
<pre lang="php">
$option = Option::create($nonexistingvariable);
</pre>
<p>Note that <tt>create($arg)</tt> considers only unset variables or null as empty. Things like an empty array, or an empty string, 0, etc. are all considered to have a value.</p>
<pre lang="php">
$maybe = "";
$option = Option::create($maybe);
$option->isEmpty(); //returns false!
$option->isDefined(); //returns true!
</pre>
<p>You <em>could</em> use the <tt>get()</tt> method to get the actual value out.</p>
<pre lang="php">
echo $option->get();
</pre>
<p>This will work if $option has a value, however if it's empty, it will throw an Exception!  So you should avoid using get() yourself unless you test it first with <tt>isEmpty()</tt> or <tt>isDefined()</tt>.</p>
<p>Probably the most used method here is <tt>getOrElse</tt>. This allows you to pass a default in case there is no value:</p>
<pre lang="php">
echo $option->getOrElse("default");
</pre>
<p>Sometimes you might need to pass something you're carrying around as an <tt>Option</tt> as a null, because that's what a function you are using expects!  PHP sometimes wants a null when you mean nothing. <tt>getOrNull()</tt> helps with that.</p>
<pre lang="php">
functionThatMightNeedNull($option->getOrNull());
</pre>
<p>Last but not least, we have <tt>map()</tt>. <tt>map()</tt> takes in a callable type such as a callback or an anonymous function, and returns the result of applying that to the option's value, or None if there is no value.</p>
<pre lang="php">
$string = "hello";
$option = Option::create($string);
echo $option->map('strtoupper'); //outputs 'HELLO';
echo $option->map(function($s) { return strtoupper($s); }); //does same thing
</pre>
<p>We will show the cool things you can do with <tt>map();</tt> in part two!</p>
<p>Note: Option project on github uses namespaces, so make sure you use the namespace before trying these examples!:</p>
<pre lang="php">
use org\codeangel\option\Option;
</pre>
<h4>Links</h4>
<p>Option github poject: <a href="https://github.com/cythrawll/Option" target="_blank">https://github.com/cythrawll/Option</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-2-method-chaining.html">Part 2</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-3-request-variables.html">Part 3</a></p>
