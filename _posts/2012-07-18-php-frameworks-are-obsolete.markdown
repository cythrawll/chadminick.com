---
layout: post
status: publish
published: true
title: PHP frameworks are obsolete
author: Chad Emrys Minick
author_login: admin
author_email: cythrawll@codeangel.org
author_url: http://
wordpress_id: 85
wordpress_url: http://codeangel.org/?p=85
date: '2012-07-18 19:19:14 -0400'
date_gmt: '2012-07-19 01:19:14 -0400'
categories:
- Uncategorized
tags:
- PHP
- Frameworks
- Scala
- Java
- Play Framework
comments:
- id: 7742
  author: PHP frameworks are obsolete | hakre on wordpress
  author_email: ''
  author_url: http://hakre.wordpress.com/2012/08/11/php-frameworks-are-obsolete/
  date: '2012-08-11 16:55:15 -0400'
  date_gmt: '2012-08-11 22:55:15 -0400'
  content: "[...] PHP frameworks are obsolete; July 18th, 2012 TwitterRedditDiggEmailPrintMoreFacebook
    \  This entry was posted in Linked, Pressed and tagged Framework, PHP. Bookmark
    the permalink.    &larr; Continued Thoughts on a Websites’&nbsp;Environment [...]"
- id: 7760
  author: Tom B
  author_email: tom@r.je
  author_url: http://r.je
  date: '2012-08-12 15:37:21 -0400'
  date_gmt: '2012-08-12 21:37:21 -0400'
  content: "Attention grabbing headline, but I think your conclusion was really \"None
    of the PHP frameworks are good enough\". I agree with that sentiment entirely.
    They're not obsolete, but the state of frameworks in PHP is a bit of a mess. \r\n\r\nThat
    said, the fact that things aren't integrated into frameworks can be a positive:
    It does make the framework losely coupled. I can use a consistent set of code
    irrelevant of framework. I can use memcached with any framework and not have to
    learn a bespoke API. I'm assuming Play has it's own API for everything. As a developer,
    being able to use existing code regardless of framework can be beneficial. Sometimes
    it is like trying to put a square peg in a round hole, but I'm not sure your argument
    for including them in the framework itself is really valid as it's just one more
    thing to learn: How that particular framework handles each task.\r\n\r\nI do agree
    though, there are so many frameworks which are essentially clones of other frameworks
    and offer no real USP. What we need in the PHP world is someone to do for PHP
    what jQuery did for javascript."
- id: 7826
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-16 11:54:02 -0400'
  date_gmt: '2012-08-16 17:54:02 -0400'
  content: Frameworks can support features without being tightly coupled to them.
    You can use the built in cache api if you want, but it's not coupled in such a
    way you *have* to use it. You can replace it with any framework or api you desire.
- id: 7892
  author: Franckm
  author_email: marin.franck@gmail.com
  author_url: http://www.barbu-du-web.fr
  date: '2012-08-21 07:53:22 -0400'
  date_gmt: '2012-08-21 13:53:22 -0400'
  content: You seem to never have test symfony2. I recommend this framework to you
    because He is the one.
- id: 7909
  author: Luis Milanese
  author_email: luis.milanese@gmail.com
  author_url: ''
  date: '2012-08-22 08:55:55 -0400'
  date_gmt: '2012-08-22 14:55:55 -0400'
  content: I'd definitely love to see some bigger projects you have worked on. I have
    a feeling about them I can't expose here for I might be wrong... ;)
- id: 7910
  author: cyqui
  author_email: cyril.quintin@gmail.com
  author_url: ''
  date: '2012-08-22 09:56:28 -0400'
  date_gmt: '2012-08-22 15:56:28 -0400'
  content: "Maybe you should update the title to \"There is no play in PHP\" or 'PHP
    frameworks are differents' or 'Play is differents than other frameworks.'\r\n\r\nPlay
    just have a different philosophy (embed as much things as possible) while usually
    a standard Java web application would use far more tools than a PHP one (Junit,
    Maven, Tomcat, Apache, etc...)\r\n\r\nFrequently Asked QuestionsHow Play compares
    to framework X?:\r\nhttp://www.playframework.org/documentation/1.0.2.1/faq\r\n\r\n\"However
    Play is a very unique Java framework. It does not really rely on the so-called
    Java Enterprise standards. It uses Java but tries to push all the good things
    from the frameworks based on scripting languages like Ruby On Rails, Django, Pylons,
    Symfony, Grails, Cake PHP, etc. to the Java world. We really tried to get the
    best out of the Java platform without getting the pain of traditional Java web
    development: slow development cycle, too much abstraction, too much configuration…\"\r\n\r\nDifferents
    philosophy, that's all."
- id: 7912
  author: Ed
  author_email: maggot05@gmail.com
  author_url: ''
  date: '2012-08-22 10:04:04 -0400'
  date_gmt: '2012-08-22 16:04:04 -0400'
  content: "I don't think frameworks are obsolete, they just try to cater to different
    needs. For example, Zend framework is rather large and mainly used by enterprise
    applications while CodeIgniter is a smaller fish that's designed for those who
    want a loose MVC framework.\r\n\r\nI personally love the choices, that is what
    makes PHP such an awesome language to work with. Honestly everything in PHP has
    100+ versions of it, each with their own demographic.\r\n\r\nI've worked with
    other languages and I often feel they settle on one \"de facto\" framework and
    anything else is junk and not worth trying.\r\n\r\nJquery for example is a great
    JavaScript framework, but you have a lot more to choose from and they suit other
    needs as does jQuery.\r\n\r\nFrameworks no matter what language all do one simple
    thing, it makes the developer's jobs easier by reducing the redundant work that
    takes too much time and lets us focus on building the meat  &amp; potatoes of
    the application faster.\r\n\r\nthat's my opinion on that, take it for whats its
    worth."
- id: 7913
  author: Roman Marintšenko
  author_email: inoryy@gmail.com
  author_url: http://inoryy.com
  date: '2012-08-22 10:39:34 -0400'
  date_gmt: '2012-08-22 16:39:34 -0400'
  content: "Dependency Management — Play uses homemade system instead of globally
    accepted Maven. Not sure how that's a plus.\r\n\r\nCaching — Play uses same old
    memcached as you listed for PHP. As for APC - it's op-code cache, something that's
    required due to language limitations. Not related to PHP frameworks.\r\n\r\nBuilding/Deployment
    - Uses Ant?\r\n\r\nWeb Server - Yes, PHP frameworks are obsolete because they're
    unable to integrate a web server into them. Seriously?\r\n\r\nUnit testing - jUnit,
    nothing is integrated.\r\n\r\nDebugging - xdebug is pretty much also \"integrated\".\r\n\r\nMessaging
    - nothing is integrated, most popular is same old RabbitMQ. Btw AMQP is a standard,
    not MQ implementation.\r\n\r\nWebsockets - PHP is terrible at this,  so everyone's
    using node.js. How is that related to PHP frameworks?\r\n\r\nVersion Control -
    Are you serious? This wouldn't even make sense if you were comparing languages,
    not explaining why PHP frameworks are obsolete.\r\n\r\nDatabases - What? Seriously?
    Why not compare ORMs at least?\r\n\r\nTo sum it up: no offense but you sound like
    mid level PHP developer who recently switched to Java and knowing neither."
- id: 7914
  author: Hector Benitez
  author_email: hector.benitez.fletes@gmail.com
  author_url: http://www.hectorbenitez.com
  date: '2012-08-22 10:52:13 -0400'
  date_gmt: '2012-08-22 16:52:13 -0400'
  content: +1 <a href="#comment-7760" rel="nofollow">@Tom B </a>
- id: 7935
  author: Chris O'Connell
  author_email: chris@chrisoconnell.info
  author_url: http://chrisoconnell.info
  date: '2012-08-23 13:47:23 -0400'
  date_gmt: '2012-08-23 19:47:23 -0400'
  content: "Have you looked at Zend Framework 2 at all? Currently in Release Candidate
    stage so not officially ready for prime-time yet. But it does integrate almost
    every thing you advocate and will definitely be finalized before one could finish
    building a large web app with it. \r\n\r\nIt is advertised as being loosely coupled,
    has Depenency Management, Caching, Service/Event Management. It incorporates lots
    of ideas borrowed from the Java, Ruby, and Python worlds. \r\n\r\nWhen complete,
    ZF2 will stand head and shoulders above the other PHP frameworks out there. IMHO."
- id: 7951
  author: Robert Frunzke
  author_email: r.frunzke@manjadigital.de
  author_url: ''
  date: '2012-08-24 13:27:17 -0400'
  date_gmt: '2012-08-24 19:27:17 -0400'
  content: "What really is your point? Besides doing advertisement for \"play!\"?\r\n\r\nIf
    someone would write a framework which comes packaged with all the things like
    dependency mgmt, caching, deployment, scheduled jobs and so on and so on, then
    that one will rule them all?\r\n\r\nYou state that a highly-integrated framework
    is better than one with rather abstract interfaces to external tools. So, after
    all, play also just USES external tools (libraries). Other frameworks are not
    much different.\r\n\r\nSo whats the point?"
- id: 7966
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-25 17:36:55 -0400'
  date_gmt: '2012-08-25 23:36:55 -0400'
  content: I don't really want to advertise for Play, but something like it.  What
    I'm saying is a framework that has all of the above built in so one doesn't have
    to set up separate systems.  They just work out of the box.  Play may use external
    libraries, but libraries don't work like external system.  With a library, you
    drop in a .jar, and you program, the functionality is added.  It just works.  With
    external system it's a whole other system and runtime and documentation you have
    to understand and deal with.  Sometimes on a completely different platform or
    all built in 10 different languages.
- id: 7967
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-25 18:09:44 -0400'
  date_gmt: '2012-08-26 00:09:44 -0400'
  content: "Dependency Management — It uses SBT which uses ivy for Dependency management,
    both have been out for awhile. Maven is hardly \"globally accepted\" and has spawned
    a quite a few more modern challengers (SBT being one of them, and is Scala's answer
    to the Maven insult).  The only thing globally accepted about maven is it's repositories,
    which ivy, therefore sbt, therefore play use by default.\n\nCaching — Actually
    it does not.  It uses EHCache which is integrates the cache with the JVM and agents
    exist to allow the JVM caches to scale horizontally.  Don't know where you got
    memcached idea from, maybe a module or an older version?\n\nBuilding/Deployment
    – Uses SBT\n\nWeb Server – Because it's a separate system that has to be set up,
    documentation understood, configuration understood in order to even get started.
    Even all in one packages have made it extremely clumsy for people to get started
    with these things, and as I do PHP support almost every day this is one of the
    biggest things I have to help new developers with.\n\nUnit testing – specs2 actually,
    and it has integration as it can mock the entire server.  Nothing to set up here.
    just start writing unit tests, and sbt will run them.\n\nDebugging – actually
    it's not.  It's a separate tool that most PHP developers I have to talk to never
    heard of it. You have to go download it, install, and learn how to hook it up
    with whatever ide/editor you are using.  With the JVM, it just sort of just works.\n\nMessaging
    – Akka does messaging, integrated into Play.\n\nWebsockets – Yes it's a PHP problem
    not a Framework problem.  Point was that it's a separate platform you have to
    set up, understand, configure etc.. even a different language than all the rest
    of your work.. I'm sure you'd agree it'd be nice if the PHP platform was good
    at this, and you could avoid a separate system altogether.  \n\nVersion Control
    – Just pointing out another separate system that has to be understood, set up
    and used.\n\nDatabases – Same as above.\n\nTo sum it up: You didn't understand
    the point of the article.  And you sound like you spent 2 minutes investigating
    the fact I mentioned Play to disprove the points I was making (and failed).  You
    didn't look at any of it objectively as I would hoped. In the end you just added
    a petty insult.  You just seem like you are just a developer who's in their comfort
    zone with their platform and is afraid to look around to see what else is out
    there.  And when someone points to the better things out there, you get defensive.
    \ For the record I still do PHP everyday, and do lots of support for the PHP community.
    \ And for the record I despise the Java language.  (Ask me about Scala though
    :p)"
- id: 7968
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-25 18:12:43 -0400'
  date_gmt: '2012-08-26 00:12:43 -0400'
  content: I think the point I was trying to make is that lately the typical framework
    philosophy for most PHP frameworks is currently in need of refactoring.
- id: 7969
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-25 18:14:41 -0400'
  date_gmt: '2012-08-26 00:14:41 -0400'
  content: Now I'm curious as to what you mean by that.  I don't want to toot my own
    horn here.  But the bigger projects I've worked on are known world wide, you just
    might use some of them daily and not realize it.  Drop me line so I can determine
    your motives. :)
- id: 7970
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-25 18:16:04 -0400'
  date_gmt: '2012-08-26 00:16:04 -0400'
  content: I have looked into symfony2.  I do admit it's one of the better ones and
    is not stuck in the same philosophy mud as some other PHP frameworks.  But I still
    think it's still guilty of *some* of the things I've mentioned.
- id: 8020
  author: Quora
  author_email: ''
  author_url: http://www.quora.com/Web-Development/What-helpful-information-about-PHP-should-I-not-miss-to-impart-to-university-students-in-a-1-5-hour-talk#ans1486065
  date: '2012-08-28 14:31:38 -0400'
  date_gmt: '2012-08-28 20:31:38 -0400'
  content: |-
    <strong>What helpful information about PHP should I not miss to impart to university students in a 1.5-hour talk?...</strong>

    Here's a good article titled "PHP frameworks are obsolete" that will be useful. The article compares PHP frameworks to Java/Scala Play framework and looks at things like package managers, unit testings, DB options, version control and web servers. I...
- id: 8029
  author: Damien
  author_email: damienrch@gmail.com
  author_url: ''
  date: '2012-08-28 21:59:08 -0400'
  date_gmt: '2012-08-29 03:59:08 -0400'
  content: "I don't think it is necessarily a good thing for a framework to package
    as much as it can. What happens if you are forced to work in another framework
    and you suddenly have no idea where to start? A good developer should know almost
    all of those tools you mentioned in the PHP section.\r\n\r\nI also don't think
    frameworks should take things such as dependency into their circle of responsibility.
    These are system level tools and should stay that way. Again, what happens if
    you move away from PLAY! onto a framework which doesn't have dependency management?"
- id: 8039
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-08-29 07:14:00 -0400'
  date_gmt: '2012-08-29 13:14:00 -0400'
  content: I don't think the abilities of one framework should determine the abilities
    of another.  What happens when? well you just deal with what the other framework
    has.  Same for dependency management, you can add a build system that has DM to
    any framework.  The point is you don't have to go through the trouble of figuring
    out how to add one yourself.
- id: 10127
  author: dc
  author_email: dc@invalid.ma
  author_url: ''
  date: '2012-12-20 22:48:32 -0500'
  date_gmt: '2012-12-21 04:48:32 -0500'
  content: "You are mixing up two notions: the notion of development framework and
    the notion of development &amp; production environments, the former is a part
    of the later, but it's not the job of framework developers to provide a complete
    environment. Tell me that Play, Lift, or any other Java  based framework take
    care of installing a RDBMS or a web server (not jetty or another toy like web
    server, but a real one) for its users, and I will say that they crossed the line.
    \r\nWhy not throwing emacs, netbeans or eclipse in while we're at it? After all,
    programmers need that tool too to get their code out. \r\n\r\nThat said, it's
    a fact that PHP and Java (and even more Scala) have different intended audiences.
    PHP programmers are *in average* less knowledgable than the java crowd, probably
    because of the differences in the ways these languages can be approached. PHP
    is more newbie friendly, more permissive, and because of this, doesn't push its
    userbase in them getting more educated. When starting with a java stack, paradoxally
    to your touting arguments in favour of Play, programmers are often confronted
    with a huge amount of information to understand and remember in order to make
    use of their framework, as opposed to the easiness of getting started with many
    PHP framework.\r\nInteresringly, I found that Symfony2, for a PHP framework, had
    some similarities with java frameworks. \r\n\r\nThe grass being greener elsewhere
    is really a subjective matter. Maybe you are just getting more mature in your
    approach of web development, and you discover that the PHP world is more limited
    than its counterparts (but it's not as bad as it sounds, things are evolving,
    this is obvious when one compares the state of things 5 years ago to what they
    are now)."
- id: 10196
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2012-12-24 12:06:24 -0500'
  date_gmt: '2012-12-24 18:06:24 -0500'
  content: |-
    I don't know what you mean by a real webserver.. jetty and the server in Play 2, are real webservers.  They are well tested, and based on stable well tested technology.  They're extremely fast for dynamic content... no problem passing 10k r/s.  They won't beat nginx on static content, but that is why everyone uses frontend servers (people even use front end servers for PHP all the time for the same reason).  As for the IDE, sbt does a plenty good job of generating project files for you for the main IDEs and that's as good as you need.  People can still use their favorite editor, but starting up a well configured project for an IDE takes seconds, not the half hour it takes for me to get my PHP projects up and going with composer, unit testing, and all that supported by my IDE.

    I agree with your second paragraph just fine.  On the third, I think I conceded in the article that it's subjective.  I know PHP is evolving, but it's evolving slowly... newer languages that don't have to work around such horrible legacy as the PHP code base are evolving at much faster speeds... and they have every feature I've been hearing PHP developers want for years.  Some languages slow down as they age as they are not designed for modern programming features in mind, and adding them takes much longer and tend to be implemented far worse than their modern counterparts.  Don't think I'm just ripping on PHP, many other languages have the same issue: Java, C/C++, Perl.  My point is by the time PHP catches up to something like Scala as far as features Scala will already be light years ahead (or perhaps another language will take the spotlight).
- id: 10200
  author: dc
  author_email: dc@invalid.mail
  author_url: ''
  date: '2012-12-24 21:03:29 -0500'
  date_gmt: '2012-12-25 03:03:29 -0500'
  content: "I admit that my words regarding jetty were very harsh, for the simple
    reason that I didn't know better. My only experience with jetty was when I started
    learning to use lift, and jetty was the test server used in the tutorial. I wrongly
    assumed that it was made for that sole pupose. Since then, I learned that it is
    used as a production server in many places.\r\n\r\nThat said, I don't think that
    it is the role of a framework to decide which RDBMs or which web server one should
    use. A production setup may have more constraints than just supporting a given
    web framework (it could be more than one, for instance), and therefore, just like
    a good web server must show flexibility, a good framework should display adaptability.
    It is as simple as that and that's what I should have brought forth in my previous
    post, instead of bashing the fine work done by the people of jetty.\r\nI would
    like to add a small precision to that paragraph about PHP programmers. I used
    the expression \"less knowledgeable\", and I didn't mean to put the PHP people
    under a bad light. My point was that compared to other (more academic in some
    sense) languages, PHP wasn't as focused on certain aspects of programming (I am
    thinking mainly about type theory - scala has a lot of that)  and in that respect
    didn't push its users into studying these aspects as strongly as they could. That
    doesn't mean in any way that PHP programmers are potentially less capable. I picked
    the word knowledgeable because it seemed to best convey that idea. Maybe I should
    have said that programmers in other languages are in average more knowledgeable.\r\n\r\nPHP
    remains in my eyes an excellent language to learn the basics (I think pretty much
    that it is today's BASIC- no wonder Microsoft used that very language for its
    own first step web developement platform), and get things quickly wrapped up without
    too much headaches. Bu it might require a bit more self-discipline when things
    start getting complicated."
- id: 10231
  author: foo
  author_email: foo@bar.baz
  author_url: ''
  date: '2012-12-27 07:03:43 -0500'
  date_gmt: '2012-12-27 13:03:43 -0500'
  content: "@dc How can you say something like that?\r\nPHP programmers are usually
    not just PHP programmers  but also site admins, designers, javascript coders,
    shell script programmers, database admins. There's many things to learn and know
    in the PHP world than just PHP (that's why people talk about LAMP stacks). \r\nBut
    maybe you never had to learn all this stuff by yourself, and now you complain
    about being limited? Get of your high horses!\r\n@Chad: making a sql join statement
    is certainly not the end of the world, but learning scala is not it either.\r\nIt's
    easy to diminish the abilities of a community just by criticizing the difficulties
    of some of its members. \r\nYou've got at least one thing left to learn: RESPECT."
- id: 11781
  author: Frank
  author_email: frank.p@gmail.com
  author_url: ''
  date: '2013-03-20 15:13:58 -0400'
  date_gmt: '2013-03-20 21:13:58 -0400'
  content: "I think you are over complicating things. Not all of this is needed to
    be a 'good web developer'.\r\nIn fact if you are really good you need to know
    about a webserver of your choice, a database (and it's theory) and how to design
    the UI. All the rest is just management and if it is required to have all those
    subsystems in place something may run wrong ;)\r\n\r\nHave a look at this little
    newcomer: https://github.com/ScavixSoftware/WebFramework\r\nSlim and powerful
    without all the overload you mentioned focusing to the real work."
- id: 12349
  author: Chad Emrys Minick
  author_email: cythrawll@codeangel.org
  author_url: http://
  date: '2013-04-03 10:50:29 -0400'
  date_gmt: '2013-04-03 16:50:29 -0400'
  content: |-
    I think I included your type in my article for those who just need to use simple CRUD applications.  What we're discussing here is the necessity above those requirements you mention which is quickly becoming common place if your site has high enough traffic and you need your site to preform well with real time data, asynchronous long-running jobs, talking to third party services, etc... you'll find those frameworks wanting... and you'll find yourself looking at disparate platforms to reach your goals without sacrificing your web server throughput.  Keep in mind that frameworks like what you linked are extremely common place now, with no advantage over the other.  The problem is they don't offer anything that I couldn't do myself in a day, but make doing difficult things so much harder.   More features in a framework does not equal overhead.  Unused features, at most, take up negligible disk space until they are needed.

    If you are the kind of person that can get away with using PHP as a simple skin on top of a database, than this article wasn't for you, and I made I thought I made that clear in the article.
---
As a person who works with the PHP support community quite a bit, I'm often asked "What PHP framework do you recommend?". I answer this as honestly as I can: "None of them". It does pain me to say this, but as someone who's been to the other side, and not only seeing that the grass is greener, it's like <span style="color: #009000;">REALLY FREAKING GREEN</span>. Now before I start getting hate mail, let me explain that I still think there is a market for PHP frameworks.  I think if you have a moderately low traffic site that's going to live on shared hosting, and is basically a CRUD application on top of MySQL, disregard this article, it probably isn't for you. However, I've seen so many projects start out with that scope. They either grow or the developer/client wants to add more fancy new features they are starting to see elsewhere on the web. Then I see all these PHP developers hacking things that the PHP stack really isn't meant to do. Of course there are add-on systems you can put on your stack to tackle these problems but they don't have full control over the systems and people seem to be reluctant to add a new system if they could JUST hack this ONE thing into their web app (that will summarily destroy their throughput of their web server). I will go over these add-on systems in a bit.

<!--MORE-->

<p>The other thing that bothers me is that PHP frameworks are stuck in a rut. They seem to be pushing the same marketing that they've been pushing for years arguing over who has the most "lightweight" framework and claiming to be "fast" and other completely useless metrics like who can do web MVC the best. I feel "lightweight" is a completely useless metric, "Fast" is completely subjective especially since these days the greatest optimizations are done on the client and developers still don't know how to do JOIN SQL queries or how to index their databases correctly... When comparing those things to the speed of how fast a controller can be called, speed of the framework is just not that important or impressive. As for who can do MVC the best, that topic is tired and old.  I think it's a solved problem now. How about exploring different architectural patterns? Really what I'd like to see (besides the features I am going to mention after this paragraph) is to see frameworks start to advertise, for example, how loosely coupled they are.</p>
<p>So what makes a good framework then? Let me list all the things that are being used to make a well put together modern professional web application, and summarily the add-ons to the PHP stack that are needed to tackle each. Note: not all of these are required but they will sneak in the more the project grows.</p>
<ul>
<li>Depenency Management — <a href="https://github.com/composer/composer">Composer</a></li>
<li>Caching — <a href="http://memcached.org/">memcached</a>, <a href="http://php.net/manual/en/book.apc.php">APC</a></li>
<li>Building/Deployment — <a href="http://www.phing.info/trac/">Phing</a>, ant, make, etc</li>
<li>Continous Integration — <a href="http://jenkins-ci.org/">Jenkins</a></li>
<li>Version Control &mdash; <a href="http://git-scm.com/">git</a>, <a href="http://mercurial.selenic.com/">mercurial</a>, <a href="http://subversion.tigris.org/">Subversion</a>, etc..</li>
<li>Scheduled jobs — chrond, Windows' scheduled tasks</li>
<li>Async job execution — <a href="http://kr.github.com/beanstalkd/">beanstalkd</a>, <a href="http://gearman.org/">gearman</a>, at</li>
<li>Web Server — <a href="http://httpd.apache.org/">Apache Httpd Server</a>, <a href="http://nginx.org/">Nginx</a>, <a href="http://www.lighttpd.net/">lighttpd</a>, (Not to mention if you do run lighttpd or nginx, or even apache with fcgi, need pretty good knowledge of FPM)</li>
<li>Unit Testing — <a href="http://www.phpunit.de">PHP Unit</a>, <a href="http://www.simpletest.org/">Simple Test</a></li>
<li>Debugging &mdash; <a href="http://xdebug.org">XDebug</a></li>
<li>Database Storage Systems (RDBMS and/or NOSQL) — (I won't even attempt to link all these) MySQL, Postgres, MS SQL, SQLite, Oracle, Couchdb, Riak, Redis, Cassandra, Mongo DB, Neo4j, and more</li>
<li>Messaging — AMQP, RabbitMQ</li>
<li>Websockets/cometd etc... — <a href="http://nodejs.org">Node.js</a></li>
<li>Client side langauge and frameworks — JavaScript + jquery</li>
<li>Serverside langauge and framework — PHP + 100s of frameworks here</li>
</ul>
<p>That's a lot of systems that a good web developer needs to be familiar with. What's even worse is it's a lot of systems that need to be maintained and juggled all at once. That's quite the infastructure there. Very expensive for training, maintaining and using. Too bad web frameworks aren't trying to trim that list down.. oh wait, they have already started!<br />
Ladies and Gentlemen I give you the Java/Scala based <a href="http://www.playframework.org/">Play Framework</a>. Lets take a look at that list again...</p>
<ul>
<li>Depenency Management — Integrated in Play</li>
<li>Caching — Integrated in Play</li>
<li>Building/Deployment — Integrated in Play</li>
<li>Continous Integration — <a href="http://jenkins-ci.org/">Jenkins</a></li>
<li>Scheduled jobs — Integrated in Play</li>
<li>Async job execution — Integrated in Play</li>
<li>Web Server — Integrated in Play</li>
<li>Unit Testing — Integrated in Play</li>
<li>Debugging &mdash; Integrated with the jvm</li>
<li>Version Control &mdash; <a href="http://git-scm.com/">git</a>, <a href="http://mercurial.selenic.com/">mercurial</a>, <a href="http://subversion.tigris.org/">Subversion</a>, etc..</li>
<li>Database Storage Systems (RDBMS and/or NOSQL) — (I won't even attempt to link all these) MySQL, Postgres, MS SQL, SQLite, Oracle, Couchdb, Riak, Redis, Cassandra, Mongo DB, Neo4j, and more (but there is a good development database (HSQL) that is Integrated in Play to get your RAD on.</li>
<li>Messaging — Integrated in Play</li>
<li>Websockets/cometd etc... — Integrated in Play</li>
<li>Client side langauge and frameworks — JavaScript + jquery</li>
<li>Serverside langauge and framework — Scala or Java + Play!</li>
</ul>
<p>So there you have it, why I see PHP frameworks as obsolete. Finally people ask me, "If play has all this, isn't it really heavy?" No.  It's surprisingly small. It builds off the shoulders of giants and integrates mature industry-tested libraries to achieve all this in one small integrated package. So if you have time to play with a new language and framework I suggest you look around. My only gripe with Play right now is that it is not really that mature yet, but it's getting there. This kind of framework is the road modern web frameworks need to travel.</p>
