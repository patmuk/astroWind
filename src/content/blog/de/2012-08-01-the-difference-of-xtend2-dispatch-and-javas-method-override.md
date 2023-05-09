---
title: The difference of xtend(2) dispatch and Java's method override
publishDate: 2012-08-01 15:18:32.000000000 +02:00
published: true
categories:
- Programming
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
exerpt: "Theoretisch gesprochen liegt der Unterschied darin, dass Javas Methoden-Überladung ein 'single dispatch'
  und xtends 'dispatch' ein 'polymorphisches dispatch' ist. Diese theoretische Aussage wird am Beispiel viel
  klarer:"
---
<p>Theoretisch gesprochen liegt der Unterschied darin, dass Javas Methoden-Überladung ein "single dispatch"
  und xtends "dispatch" ein "polymorphisches dispatch" ist. Diese theoretische Aussage wird am Beispiel viel
  klarer:<br />
<br />
  Nehmen wir an, wir haben folgende <code>print</code>-Methode, die den Typ und Inhalt eines Parameters ausgibt:
</p>
<p><code><br />
    public class Printer {<br />
        public void print(String str) {<br />
            System.out.println("String: "+str);<br />
        }<br />
        public void print(Object obj) {<br />
            System.out.println("Object: "+obj);<br />
        }<br />
        public static void main(String[] args) {<br />
            Object obj = new String("abc");<br />
            new Printer().print(obj);<br />
        }<br />
    }<br />
</code></p>
<p>Das Ergebnis dieser Methode ist "Object abc"! Dazu kommt es, weil der Typ statisch aufgelöst wird, Java also nur die
  <code>print(Object)</code>-Methode nutzen kann.
</p>
<p>Spezifiziert man das Selbe mit xtend(2) kann man <em>polymorphisches dispatch</em> nutzen:<br />
  <code><br />
class Printer {<br />
    def dispatch print(String str) {<br />
        "String: "+str<br />
    }</p>
<p>    def dispatch print(Object obj) {<br />
        "Object: "+obj<br />
    }</p>
<p>    def static void main(String[] args) {<br />
        val Object obj = new String("abc");<br />
        new Printer().print(obj);<br />
    }<br />
}<br />
</code><br />
  Jetzt ist die Ausgabe tatsächlich "String: abc".<br />
  Der generierte Code enthält eine Kaskade von <code>if instanceof else </code> Aufrufen. Der obige xtend Beispielcode
  ergibt folgenden Javacode::<br />
  <code><br />
import java.util.Arrays;<br />
import org.eclipse.xtext.xbase.lib.StringExtensions;</p>
<p>@SuppressWarnings("all")<br />
public class Printer {<br />
  protected String _print(final String str) {<br />
    String _operator_plus = StringExtensions.operator_plus("String: ", str);<br />
    return _operator_plus;<br />
  }</p>
<p>  protected String _print(final Object obj) {<br />
    String _operator_plus = StringExtensions.operator_plus("Object: ", obj);<br />
    return _operator_plus;<br />
  }</p>
<p>  public static void main(final String[] args) {<br />
      String _string = new String("abc");<br />
      final Object obj = _string;<br />
      Printer _printer = new Printer();<br />
      _printer.print(obj);<br />
  }</p>
<p>  public String print(final Object str) {<br />
<strong>    if (str instanceof String) {<br />
      return _print((String)str);<br />
    } else if (str != null) {<br />
      return _print(str);</strong><br />
    } else {<br />
      throw new IllegalArgumentException("Unhandled parameter types: " +<br />
        Arrays.<object>asList(str).toString());<br />
    }<br />
  }<br />
}<br />
<code><br />
Es wird immer die Methode mit dem speziefischeren Parameter aufgerufen. Mit der Methoden-Überladung von Java wird immer die Methode aufgerufen, die exact der Signatur entspricht.</p>
<p>Quellen & Kudos:<br />
http://www.2ality.com/2009_05_01_archive.html<br />
and<br />
http://www.eclipse.org/xtend/documentation/index.html#polymorphicDispatch<br />
