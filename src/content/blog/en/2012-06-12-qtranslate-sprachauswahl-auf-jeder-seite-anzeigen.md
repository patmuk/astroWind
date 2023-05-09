---
title: show qTranslate on every page
publishDate: 2012-06-12 10:03:09.000000000 +02:00
published: true
categories:
- Wordpress
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
---
If I open a post using the theme 'Twenty Eleven' no sidebar is shown.<br />
  So the 'qTranslate choose language'-widged is not shown either.<br />
  The solution:<br />
  Add in the header.php-file of the theme<br />
  just above:<br />
  <code><br />
&lt;/header>&lt;!-- #branding --&gt;<br />
</code><br />
  the following lines:<br />
  <code><br />
  &lt;div id="access-language" class="access-language"&gt;<br />
       &lt;?php qtrans_generateLanguageSelectCode('image'); ?&gt;<br />
  &lt;/div&gt;<br />
</code><br />
  'image' displays only Flaggs,<br />
  'text' only the textual representation and<br />
  'both' shows the flaggs along with the text.
</p>