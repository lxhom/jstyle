# JStyle

Reimagining the failed CSS-in-JS feature by Netscape for all modern browsers as a JS library. <sup>(Please, for the love of god, don't use this. It's a terrible idea.)</sup>

## What on god's green earth is this?

JStyle is a modern implementation of JSSS. I added and removed a few bits, but it's mostly the same, just with some more advanced features (because the old standard was written in ***1996***).

## What even is JSSS?

I was looking on a WWW-related Wikipedia page when the [W3C standards template](https://en.wikipedia.org/wiki/Template:W3C_standards) sparked my interest. There is one section that caught my eye:

> Products and standards: Deprecated
> 
> - [C-HTML](https://en.wikipedia.org/wiki/C-HTML)
> - [HDML](https://en.wikipedia.org/wiki/Handheld_Device_Markup_Language)
> - [***JSSS***](https://en.wikipedia.org/wiki/JavaScript_Style_Sheets)
> - [PGML](https://en.wikipedia.org/wiki/Precision_Graphics_Markup_Language)
> - [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
> - [XHTML+MathML+SVG](https://en.wikipedia.org/wiki/XHTML%2BMathML%2BSVG)

Most of them were just failed markup languages, but JSSS stood out. I thought "Does that mean JavaScript Style Sheets?" and immediately dismissed it as a joke. Then I clicked the link and found out that I have guessed exactly the right thing. It was a real thing. I was shocked. I had to know more. You're probably as curious as I am, so I'll just let [the original proposal](https://www.w3.org/Submission/1996/1/WD-jsss-960822) speak for itself:

> This document specifies a method to attach styles to HTML documents using the existing property-based language JavaScript.
> [...]
> 
> Designing simple style sheets is easy. One only needs to know a little HTML and some simple JavaScript assignment statements. For example, to set the text color of 'H1' elements to blue, one can say:
> ```js
> document.tags.H1.color = "blue"
> ```
> The example above is a simple example of using JavaScript to set the color property of all 'H1' tags to "blue".

This is so cursed, I love it! No wonder only Netscape implemented it, and it luckily never caught on. They even removed it themselves in 2000 with the release of Netscape 6!

## Why???

I have brain worms. I just have to. I'm so sorry.

## Why the name JStyle?

- JSSS is already taken by Netscape. I do *not* want their lawyers on my doorstep. (Also, if someone revived my terrible ideas under my name, I'd sue them too.)
- JSSS is a terrible name. It's not descriptive at all. JStyle is exactly what it says on the tin: JS Style.
- The name was inspired by JScript, and I mean that in the worst way possible.

## How on earth does it even work? Isn't this something that a browser *vendor* has to implement?

Sure, a browser vendor (like Google for Chromium) *could* add that, but they are not as insane as I am. And with the power of modern JS APIs, I can do it myself!

[Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) are a powerful tool that allow you to intercept and modify the behavior of objects. As with any good tool, you can use this like a regular person or go apeshit with it and implement a 20-year-old standard that no one has ever heard of. I chose the latter.

## Is it done yet?

This is just an early prototype, I am still working on it :)

This is what works so far:

```html
<HTML>
<HEAD>
  <TITLE>title</TITLE>
  <SCRIPT SRC="/jstyle.js"></SCRIPT>
  <STYLE TYPE="text/javascript">
    tags.H1.color = "blue"
  </STYLE>
</HEAD>
<BODY>
<H1>Headline is blue</H1>
<P JSTYLE="color = 'green'">While the paragraph is green.
</BODY>
</HTML>
```

This is slightly modified code from the [original proposal from 1996](https://www.w3.org/Submission/1996/1/WD-jsss-960822), and can be found under [jstyle.js.org/demo.html](/demo.html). It does exactly what you'd expect: a blue `h1` and a green `p` element. It is very hacky at the moment though, I'll write it properly later.
