---
title: qTranslate horizontal flaggs
publishDate: 2012-06-12 00:39:33.000000000 +02:00
published: true

categories:
- Wordpress
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
exerpt: 'The language-choise flags can be presented in a nicer way, with horizontally aligned flags:<br />
! update from 2/4/2014 !<br />
It is best to first <a href="http://codex.wordpress.org/Child_Themes" title="how to create a child theme">create a "Child Theme"</a>.<br />
Next, add the following lines to your Style.css (in "Design" -> "Editor"):<br />'
---
The language-choise flags can be presented in a nicer way, with horizontally aligned flags:<br />
! update from 2/4/2014 !<br />
It is best to first <a href="http://codex.wordpress.org/Child_Themes" title="how to create a child theme">create a "Child Theme"</a>.<br />
Next, add the following lines to your Style.css (in 'Design' -> 'Editor'):<br />
<br />
<code><br />
/*--------------------------------*/<br />
/** flags horizontal */<br />
ul.qtrans_language_chooser { list-style: none; margin: 0; padding: 0; }<br />
ul.qtrans_language_chooser li { display: inline-block; float: left; position: relative; margin: 0; padding: 0; }<br />
a.qtrans_flag { margin-left: 10px; margin-top: 0px }<br />
/*-----------------------------------*/<br />
</code><br />
<em>ul.qtrans_language_chooser</em> is the List of flags itself. <em>list-style: none</em> hides the enumeration point in front of each flag, <em>margin</em> and <em>padding</em> move the position. It is not needed here, because the enumeration points are invisible.<br />
<em>ul.qtrans_language_chooser li</em> stands for each list entry. <em>display: inline</em> tells that  the flags are displayed within the list, <em>float: left</em> that they are positions left-bound and <em>position: relative</em> that the following position settings are to be interpreted relative to the other page elements.<br />
<em>a.qtrans_flag</em> is the flag itself (actually the link),  <em>margin-left: 10px</em> adds 10 pixel of space left of each flag, while <em>margin-top: 0px</em> removes all pixels above the flags.</p>
<p>You can use any of the usual <a href="http://www.w3schools.com/css/css_list.asp">CSS List attributes</a>.<br />
</p>
