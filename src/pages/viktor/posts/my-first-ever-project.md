---
layout: ../../../layouts/BlogLayout.astro
title: My first ever site
timestamp: 1670159700820
author: Viktor
---

It was year 2008, I was a 13 year old boy fascinated by the web, I would
learn HTML and CSS between the classes and messing with the code at the evenings. 

Trying to fit everything at once wasn't easy, I had to attend everything my ballet school 
wanted me to attend, as well as my dancing classes on the side. It's fair to 
say I got maybe an hour or less, because a) I had to share the same PC 
with my brother b) I wanted to play games and do silly boy things as well.

All in all, I started maybe a year prior, by the time I was 13 I felt confident in
that I would be able to create something for someone. According to the _Dunning–Kruger effect curve_
I just arrived at the Peak of "Mount Stupid". 

How do you find a client when you are just 13? The social media, of course!

Having no way to receive or send money (not that I would need the latter anyway)
I've decided that it would be fair for me to receive my payment in the _"votes"_.
"Votes" is local currency in the [vk.com (wiki)](https://en.wikipedia.org/wiki/VK_(service))
which was one of the most popular social media platforms amongst pretty much everybody in 
my school and around me. _vk.com_ was pretty new back then, not a lot of users were even on 
the platform, but there were lots of business groups and by using one of them to promote 
myself as a "web developer" (at 13, haha!) creating web pages for "votes" I got my first 
opportunity to make a site for local Salsa studio in Mariupol, Ukraine.

I was given an image, a design, how this site is expected to look like and a week of time,
and so my journey began.

It looked like your average site, not a lot of CSS was expected to be used, most of the design
elements were done in photoshop. I don't have the design saved, but I somewhat remember how it
looked like: the entire site was aligned in the center with margin around, it had fixed width.
It had a header with a photo of the studio and some title, it had 3 columns in the body, 
with the main content being in the middle and some information blocks to the right and left. Maybe
it had some footer, but I don't remember.

I used Windows XP, notepad++ (still being used by some, by the way) with light theme and lots 
of time. I've spent most of my holiday week building this one page, I wanted everything to be 
perfect. At the end, I shipped my HTML and CSS code and was given my first payment of 50 "votes" of 
the _vk.com_ for my troubles.

I didn't know it at the time, but this would mark the start of my journey in the web development. 
This project was also the one that looked easy (remember, I was very confident), but having 
finished it I realized how many things I have yet to learn and understand.

### A few techincal issues I was facing at the time:

#### building your layouts with `<div>`'s was considered edgy

I knew that `<div>`'s and positioning with CSS is the future. With tables you could build your pages
really fast, however you couldn't customize it very well, CSS even back then felt very strong while
composing a page.

I have learnt how to use both however: tables and divs, although I tried to use div's as much as possible and
would only use tables if I didn't know how to do a given layout with them or if it just wouldn't work
properly in IE and firefox (I didn't know clearfix hack at the time, even if it existed).

#### rounded borders (corners)

What is nowadays achieved by the simple `border-radius` back then was something different: a rather 
useless trick in its functionality, however in the world of sites built with `<table>`'s it was quite 
impressive at the time.

It was achieved by cutting small images of corners from the original "design" and
creating a table with images of these rounded borders in places where I needed them (so
top left, top right, bottom left, bottom right) and in between them I would also cut images
of the regular border and try to `background-repeat` it or just shamlessly insert the entire
border image into the appropriate table cell (so top-bottom borders and left-right borders are the same, or
flipped).

#### desktop only

The term smartphone was quite new, an iphone just got out, no one really knew what to do 
with it and honestly I don't think many cared.

What was, however, an important thing that many cared about is to make your site work with IE, firefox and 
whatever else is coming out. And it wasn't exactly easy.
