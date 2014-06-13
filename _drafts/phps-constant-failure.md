---
layout: post
author: Chad Minick
title: PHP's Constant Failure
tags:
- PHP
- Coding
---

PHP has it's share of features that ended up being bad ideas, and then being deprecated and removed. Some notable examples
are [Magic Quotes](http://www.php.net//manual/en/security.magicquotes.php) and [Register Globals](http://www.php.net//manual/en/security.globals.php).
However, they were removed because their flavor of bad practice introduced security vulnerabilities into unsuspecting user's apps.

There is one feature that causes dangerous headaches that plagues PHP to this day.  I'm talking about undefined global constants. (Now you get the wordplay in the title)
It doesn't quite cause major security vulnerabilities, but it can cause state corruption, which could end up in data loss.

<!--MORE-->

What am I talking about? The 'feature' that takes undefined constants, and automatically converts them into strings. example:

{% highlight php startinline %}
  echo UNDEFINED_CONSTANT;
{% endhighlight %}

will output:

    UNDEFINED_CONSTANT

with the following notice:

    Notice: Use of undefined constant UNDEFINED_CONSTANT - assumed 'UNDEFINED_CONSTANT' in /in/966aq on line 3


So what happened here?  PHP couldn't find the constant, so it ended up automatically converting it to a string.  At least it has the
courtesy of throwing you a notice.  However, this is still really really bad news.  Because of this feature, you should never use global constants
in your own code.  Because of this feature, global constants usage is bad practice.

Why?  Simply, it can cause unexpected state changes to occur in your program flow.  Say if there was some sort of issue, and your global constants were defined in
another file, if that file didn't become loaded  Or say if an intern removed the constants and didn't find all the usages. In those cases, you might what seems to be
a perfectly running site.  Thanks to PHP's type juggling system, you might have situations where code matches against a string
just as well as an int.

{% highlight php startinline %}
  $case = 0;

  if(UNDEFINED_CONSTANT == $case) {
  		echo "constant is undefined this shouldn't have matched";
  }
{% endhighlight %}

In the following example, lets say before intern accidentally deleted <kbd>define(UNDEFINED\_CONSTANT, 1)</kbd>.
So really <kbd>$case</kbd> would have never have matched there.  But since PHP changes <kbd>UNDEFINED\_CONSTANT</kbd> to <kbd>"UNDEFINED\_CONSTANT"</kbd>
which type juggles as an int to 0.  Now, the state of the program is off course, if that state gets persisted, now we have a huge problem.  That's right kids!
Your data is corrupted!  However, without looking at notices, the program will seem to run fine.  The subtle state change that's slowly corrupting your data
might not become apparent until much later.  Then you have a huge problem.

So what should it do instead?  PHP throws a fatal error with undefined classes, methods, and functions. Why not with constants?
If a constant is undefined, your program execution stops, making it quite obvious that something isn't going the way you expect, which can get fixed immediately.

What can you do instead of use global constants?  Use class constants. Undefined class constants do result in a fatal error as expected. Make sure you pay attention to
notices, especially on production machines (this is the reason why I tell people that NOTICES should be enabled everywhere, don't silence them, code cleanly).

Probably the biggest thing you can do to help spread awareness. Hopefully, we can get the community to create a php RFC and a patch so we can get rid of this blight
on PHP, so it can go the way of Magic Quotes and Register Globals, allowing global constants to be useful again.



