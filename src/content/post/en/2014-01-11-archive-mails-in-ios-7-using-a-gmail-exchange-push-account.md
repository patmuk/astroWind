---
title: archive mails in iOS 7 using a gmail exchange push account
publishDate: 2014-01-11 12:22:17.000000000 +01:00
published: true
categories: []
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
excerpt: "The behavior of the <em>delete button</em> changed in iOS 7: It no longer archives gmails but moves
  them to trash.<br />
  Follow this to restore the old behavior:"
---
  The behavior of the <em>delete button</em> changed in iOS 7: It no longer archives gmails but moves
  them to trash.<br />
  Follow this to restore the old behavior:
</p>
<p>I set up my gmail account on my iPhone to use the exchange protocol, as this enables push mails. Google no longer
  supports this service (ExchangeAccountSync), you can only continue to use it if you did so in the past.<br />
  It will remain usable no matter if you upgrade your iPhone to a later iOS version (I did it running iOS 7 at the time
  of this writing).<br />
  However, if you replace your phone rumors say the service will be deactivated for you as well ...<br />
  http://gigaom.com/2013/07/05/push-alternatives-for-your-gmail-messages-on-ios/ backs up this info and points to
  alternative ways if you happen to not have set up gmail using the exchange protocol.</p>
<p>Setting it to 'archive' in iOS's settings got me the error message (when archiving an email) "Unable to Move Message
  The message could not be moved to the mailbox Archive."</p>
<p>To fix this, set it to 'Deleted Mailbox':<br />
  In the iOS's 'Settings' -> 'Mail, Contacts, Calendars' -> tab on your Account -> tab on the word 'Account' ->
  'Advanced Settings' -> choose 'Deleted Mailbox' under the label 'Move discarded message into'</p>
<p>Then point your mobile browser to http://m.google.com/sync/settings (and make sure your iPhone is set to English
  (U.S.) as otherwise you can not access this page!).<br />
  Here choose your device and remove the hook from 'Enable "Delete Email As Trash" for this device.'</p>
<p>Voilà! Although it is labeled "trash mail" in iOS's Mail app the behavior is to archive the mail.<br />
  Check out the instructions in https://support.google.com/a/users/answer/138740?hl=en<br />
  should you ran into problems.<br />
  <!--:sr--><strong></strong><strong></strong><strong></strong><strong></strong>
</p>