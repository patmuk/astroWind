---
title: xtend pass functions as parameters to other functions
publishDate: 2012-08-09 11:21:01.000000000 +02:00
published: true
categories:
- programming
- xtend
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
excerpt: " In xtend everything is an <em>expression</em>. Thus you can pass a method to another method as a
  parameter in the following way:"
---
  In xtend everything is an <em>expression</em>. Thus you can pass a method to another method as a
  parameter in the following way:<br />
<p>Wir brauchen dafür die folgenden Methoden:<br />
  (1) Die <strong><em>calledFunction</em></strong>, welche als Argument übergeben wird,<br />
  (2) die <strong><em>callingFunction</em></strong>, welche die calledFunction übergibt<br />
  (3) und die <strong><em>genericFunction</em></strong>, welche die calledFunction empfängt.</p>
<p>Die (3) <em>genericFunction</em> wird immer wie folgt implementiert:</p>
<p><code>def Type genericFunction((Type)=&gt;Type calledFunction){<br />
Type parameter = new Type()<br />
   val result = calledFunction.apply(parameter)<br />
}</code></p>
<p>Um (1) und (2) zu implementieren haben wir die zwei Möglichkeiten (A) und (B):</p>
<p>A: (1) und (2) können als Methoden implementiert werden:</p>
<p>(1) <em>calledFunction</em>:<br />
  <code>def Type calledFunction(Type parameter){<br />
parameter.foobar<br />
}</code>
</p>
<p>(2) <em>callingFunction</em>:<br />
  <code>def Type callingFunction(){<br />
genericFunction([Type parameter | parameter.calledFunction])<br />
}<br />
</code>oder, noch besser lesbar (da wir nur einen Parameter haben):<br />
  (2) callingFunction:<br />
  <code>def Type callingFunction(){<br />
genericFunction([calledFunction])<br />
}</code>
</p>
<hr />
<p>B: (1) kann als Variable implementiert werden:</p>
<p>(1) <em>calledFunction</em>:<br />
  (Type)=&gt;Type calledFunction = [parameter | parameter.foobar]</p>
<p>(2) callingFunction:<br />
  <code>def Type callingFunction(){<br />
genericFunction(calledFunction)<br />
}</code>
</p>
<p>Ich bevorzuge A, da (1) und (3) wie immer implementiert werden und in (2) die Übergabe einer Funktion als Parameter
  deutlich erkennbar ist.</p>
<p>We need the players:<br />
  (1) The <strong><em>calledFunction</em></strong>, which is passed as an argument,<br />
  (2) the <strong><em>callingFunction</em></strong>, which hands over the calledFunction,<br />
  (3) and the <strong><em>genericFunction</em></strong>, which receives the calledFunction.</p>
<p>The (3) <em>genericFunction</em> is always implemented like this:</p>
<p><code><br />
def Type genericFunction((Type)=&gt;Type calledFunction){<br />
Type parameter = new Type()<br />
val result = calledFunction.apply(parameter)<br />
}<br />
</code></p>
<p>To implement (1) and (2) we have the alternatives (A) and (B):</p>
<p>A: (1) and (2) can be implemented as methods:</p>
<p>(1) <em>calledFunction</em>:<br />
  <code>def Type calledFunction(Type parameter){<br />
parameter.foobar<br />
}<br />
</code>
</p>
<p>(2) <em>callingFunction</em>:<br />
  <code>def Type callingFunction(){<br />
genericFunction([Type parameter | parameter.calledFunction])<br />
}<br />
</code>or , even better, in the case of only one parameter:<br />
  (2) callingFunction:<br />
  <code>def Type callingFunction(){<br />
genericFunction([calledFunction])<br />
}<br />
</code>
</p>
<hr />
<p>B: (1) can be implemented as a variable</p>
<p>(1) <em>calledFunction</em>:<code><br />
(Type)=&gt;Type calledFunction = [parameter | parameter.foobar]<br />
</code></p>
<p>(2) callingFunction:<code><br />
def Type callingFunction(){<br />
genericFunction(calledFunction)<br />
}<br />
</code></p>
<p>I prefer A, as (1) and (3) are used normally and in (2) it is visible, that a function is given as a
  parameter.</p>