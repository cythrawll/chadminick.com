---
layout: post
status: publish
published: true
title: Reading Files in Reverse in PHP
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 40
wordpress_url: http://codeangel.org/?p=40
date: '2010-08-12 07:05:35 -0400'
date_gmt: '2010-08-12 13:05:35 -0400'
categories:
- Coding
- PHP
tags: []
comments:
- id: 11564
  author: ''
  author_email: ''
  author_url: http://www.php-resource.de/forum/php-developer-forum/103855-csv-datei-rueckwaerts-lesen.html#post665313
  date: '2013-03-14 17:01:24 -0400'
  date_gmt: '2013-03-14 23:01:24 -0400'
  content: "[...]  [...]"
- id: 66007
  author: Murali
  author_email: harish118@hotmail.com
  author_url: http://Personal
  date: '2014-04-01 10:04:39 -0400'
  date_gmt: '2014-04-01 16:04:39 -0400'
  content: "hi,\r\n\r\nThanks a ton for the nice snippet. I am new to PHP. Does this
    \r\n$file = new ReverseFileReader('somefile.log'); return an array or an object?
    Is it possible that I can just print it with the foreach loop?\r\n\r\nThanks &amp;
    Regards,\r\nMurali"
- id: 66008
  author: Murali
  author_email: harish118@hotmail.com
  author_url: http://Personal
  date: '2014-04-01 10:05:50 -0400'
  date_gmt: '2014-04-01 16:05:50 -0400'
  content: "<a href=\"#comment-66007\" rel=\"nofollow\">@Murali </a> \r\n\r\nSorry,
    what I meant was is it possible to print the contents without using the foreach
    loop?\r\n\r\nThanks,\r\nMurali"
---
<p>Every once in awhile I get someone asking me in ##php on freenode how to prepend entries to a file.  Usually it's because it's a log file of some sort and they want to read the latest entries first. This is usually for someone (not necessarily the developer) who isn't used to the whole habit of reading log files from the bottom up.  Years of using <em>tail</em> to read log files has lead me to have different expectations than a typical Joe (not you, Chance), and wanting new entries first is a reasonable request.  However, one has to remember that viewing data and storing data are two completely different things. The most efficient way to view data isn't always the most efficient way to store it.</p>
<p>Prepending data to a file isn't that easy, hence, why log files traditionally are appended to. There really is no safe way to do it in PHP. I kind of doubt there are safe ways to do it in any language that will handle concurrent operations well. It's far easier to append data to your file, then read it backwards.  I've seen some pretty awful solutions to this problem in PHP, mostly involving reading the whole file in memory using <em>file()</em> and then calling <em>array_reverse()</em> on the result. Fortunately, PHP's SPL makes reading a file in reverse pretty easy without loading the whole file into memory at once.  Here is the class:</p>
<pre lang="php">
< ?php
class ReverseFileReader extends SplFileObject {
  private $lineCount;
  private $loc;
  public function __construct($filename, $use_include_path=true) {
        parent::__construct($filename, 'r', $use_include_path);
        $this->lineCount = 0;
        while(!$this->eof()) {
          $this->seek($this->lineCount);
          ++$this->lineCount;
        }
        $this->rewind();
  }

  public function next() {
    $this->loc--;
    if(!$this->valid()) {
        return;
    }
    $this->seek($this->loc);
  }

  public function key() {
     return $this->loc;
  }

  public function valid() {
    return !($this->loc < 0 || $this->loc > $this->lineCount);
  }

  public function rewind() {
     $this->seek($this->lineCount);
     $this->loc = $this->lineCount;
  }
}
</pre>
<p>Once you have this class in your toolbox, using it is pretty easy:</p>
<pre lang="php">
$file = new ReverseFileReader('somefile.log');
foreach($file as $line) {
  echo $line;
}
</pre>
