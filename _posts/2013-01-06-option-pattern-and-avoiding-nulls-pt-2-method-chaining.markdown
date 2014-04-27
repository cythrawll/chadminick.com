---
layout: post
status: publish
published: true
title: 'Option Pattern and avoiding Nulls pt. 2: Method Chaining'
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 129
wordpress_url: http://codeangel.org/?p=129
date: '2013-01-06 21:27:03 -0500'
date_gmt: '2013-01-07 03:27:03 -0500'
categories:
- Coding
- PHP
tags: []
comments:
- id: 10417
  author: 'CodeAngel.org &raquo; Option Pattern and avoiding Nulls pt. 1: Introduction'
  author_email: ''
  author_url: http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html
  date: '2013-01-06 21:29:04 -0500'
  date_gmt: '2013-01-07 03:29:04 -0500'
  content: "[...] github poject: https://github.com/cythrawll/Option Part 2 Part 3
    coming [...]"
---
<p>In <a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html" title="Pt. 1">Pt. 1</a>. I introduced <tt>Option</tt> as a way to avoid running into problems using null.  Now to show you one of those problems.  Consider the following method:</p>
<pre lang="php">
function isPass($student, $course) {
  $grade = StudentRegistry::getStudent($student)->getCourse($course)->getGrade();
  if($grade > 60) {
    return true;
  }
  return false;
}
</pre>
<p>This method may look good to an untrained eye.  However, this method has some serious problems that are not obvious when first looking at it.  StudentRegistry returns a Student object, getCourse off the Student object returns a Course object which has a getGrade method.  However, what happens when say a student doesn't exist, maybe someone mistyped the name, or a student left the school.  What happens if we mistype the course name and the course doesn't exist?  What happens if there is no grade for the student in the course?  Most people I've seen opt to return null or false when these things happen.  This causes an issue for the next chained call down the line:</p>
<pre>
PHP Fatal error:  Call to a member function getCourse() on a non-object in ...
</pre>
<p>Well what can we do to fix this?  One approach is to keep the existing null or false interface and just stop chaining. Let's say if the developer chose to return null when things are not found:</p>
<pre lang="php">
function isPass($student, $course) {
   $student = StudentRegistry::getStudent($student);

   if($student == null) {
     return false;
   }

   $course = $student->getCourse($course);

   if($course == null) { 
     return false;
   }

   $grade = $course->getGrade();

   if($grade > 60) {
        return true;
   }

   return false;
}
</pre>
<p>That is UGLY, but it's safe.  We avoid the dangers of chaining.  </p>
<p>Another approach to keep the method chaining is instead of returning null or false, you return an object of say Student or Course. However, you come up with a way to represent these objects as an empty instance, so they keep the same expectations within a method chain.  </p>
<p>The other way is to use <tt>Option</tt></p>
<p>Instead of having your methods return null, false, or some odd class instance that represents an empty Student or Course,  make each method return an Option type.</p>
<pre lang="php">
static function getStudent($student) {
    $student = $dao->getStudent($student);
    return Option::create($student);
}
</pre>
<p>or</p>
<pre lang="php">
 static function getStudent($student) {
    $student = $dao->getStudent($student);
    if($student == null) {
      return new None;
    }
    return new Some($student);
}
</pre>
<p>Do the same for getCourse and getGrade.  Now you can safely chain without annoying sanity checks at every step with map:</p>
<pre lang="php">
function isPass($student, $course) {
  return StudentRegistry::getStudent($student)
    ->map(function($student) { return $student->getCourse($course); })
    ->map(function($course) { return $course->getGrade(); })
    ->map(function($grade) {return new Some($grade > 60);})->getOrElse(false);
}
</pre>
<p>This may not be as pretty as the first chaining method we had before, but it's safe, and it avoids a lot of sanity checks.  Yet another appraoch I should mention, make your own specific class that is similar to <tt>Option</tt> with no methods but __call, and use magic methods to do what map() does.  In my personal opinion, however, that's too much implicit magic going on. I like to make it obvious what the methods return, and I still think the Option pattern may not be as brief as that approach. This is much cleaner as it's more obvious what is going on. I'll leave it up to the reader to decide.</p>
<p>In part 3 I'll talk about request variables and Option patterns.</p>
<h4>Links</h4>
<p>Option github poject: <a href="https://github.com/cythrawll/Option" target="_blank">https://github.com/cythrawll/Option</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-1-introduction.html">Part 1</a><br />
<a href="http://codeangel.org/articles/option-pattern-and-avoiding-nulls-pt-3-request-variables.html">Part 3</a></p>
