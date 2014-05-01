---
layout: post
status: publish
published: true
title: Shift Right Zero-fill in PHP
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 10
wordpress_url: http://codeangel.org/?p=10
date: '2009-09-29 08:21:11 -0400'
date_gmt: '2009-09-29 14:21:11 -0400'
categories:
- Uncategorized
tags:
- PHP
comments: []
---
I found this on the internet, might come in handy.

{% highlight php %}
<?php
function zeroFill($a, $b) 
{ 
    $z = hexdec(80000000); 
        if ($z & $a) 
        { 
            $a = ($a>>1); 
            $a &= (~$z); 
            $a |= 0x40000000; 
            $a = ($a>>($b-1)); 
        } 
        else 
        { 
            $a = ($a>>$b); 
        } 
        return $a; 
} 
{% endhighlight %}

<p>credits to: Alex Stapleton, Andy Doctorow, Tarakan, Bill Zeller, Vijay "Cyberax" Bhatter, and traB.</p>
