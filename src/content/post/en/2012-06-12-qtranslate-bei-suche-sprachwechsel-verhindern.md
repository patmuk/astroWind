---
title: "avoid switch to default language when searching with qTranslate"
description: "wordpress i18n tweak"
publishDate: 2012-06-12 01:14:17.000000000 +02:00
published: false
categories:
- Wordpress
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
---
When using the query-mode (the language is noted as an attached '?lang=en' in the URL) a performed search shows the results in the default language (which could be the one selected in the browser settings, not the one chosen by a user).
The Solution:<br />
Add the following to 'Searchform.php' in 'design' -&gt; 'Editor'<br />
just in front of the '<\form>' tag:
<code>&lt;input type="hidden" name="lang" value="&lt;?php echo qtrans_getLanguage(); ?&gt;"&gt;</code>
... this way the language-parameter will be added to the URL as a hidden field.
Source: http://stackoverflow.com/questions/8435113/wordpress-qtranslate-keep-dont-keep-lang-on-word-search