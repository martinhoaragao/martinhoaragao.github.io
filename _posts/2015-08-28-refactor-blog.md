---
layout: post
title: "Making a template my own"
description: "As many before, I have decided to make my own blog, picking a template was not easy, but it took longer to make it my own."
modified: 2015-08-28
tags:
- blog
imagefeature: posts/refactor.png
comments: true
mathjax:
---

As I was structuring my website, I came upon many Jekyll templates, some of which I forked.
One of them, was [Will Koehler's](http://willkoehler.net) a simplistic, intuitive but most importantly neatly coded.
In fact, he refactored one of the blogs in Jekyll's list, and wrote a [post](http://willkoehler.net/2014/08/26/save-50-hours-setting-up-your-jekyll-blog.html) about what he did.

So, in the same fashion, I took the long approach and this post is about what I have done to [HMFAYSAL omega theme](https://github.com/hmfaysal/hmfaysal-omega-theme).

To begin with, I chose to personalise my blog, for the opportunity to get to know Jekyll and by extension Ruby and Javascript.
For that reason, even if I had found the perfect theme I would still most likely want to edit a few things just to learn and make it my own.
As it is, it is also functions as my sandbox to try out new things.
Though, this last argument is only fully achieved as I do not intend to mass advertise this website at least as of now, instead I have other goals, as I have explained over [here]({% post_url 2015-07-29-hello-world %}).

Back to HMFAYSAL's theme, I was impressed when I saw its design, clearly one that I would never be able to achieve on my own.
Well, it's true that I lack talent in that area, but that would be another story.
Yet what I noticed was that despite how phenomenal the theme was, the code that built it was messier than what I was used to.
This can be easily explained by its author background, which you may read more about in the link I provided above.

So, in no particular order here is what I did thus far:

#### Update
+ Font Awesome
+ Bootstrap

Changed a few classes in order to keep the same style.


---

#### Simplify design
+ Navbar
+ Footer
+ Overall details

Reduced clutter, instead of clicking to access a menu, placed the buttons I needed on top, and removed the navbar on the footer.
Also decreased the size of the social buttons along with other small things such as changed fonts and their size.

---

#### Remove Categories

Considering this is a tiny blog about what I do, I had no need for both tags and categories.
For that reason,and because tags are more versatil, more than one allowed per post, I removed categories.

---

#### Fix
+ 404 Error page
+ Rake new posts

As far as I recall the links for the error page were outdated.
Regarding the Rake new posts, changed it to accept arguments in the command-line through spaces.

---

#### Add
+ Rake deploy by command by Will Koehler and adjusted to master instead of gh-pages.
+ Search by tag, quit with esc or click outside
+ SEO
  + Minify
  + Add robots.txt
+ Code
  + Organise into assets pipeline
    + Change css to sass, and split by sections
  + Javascript in separate files

So this is mostly the section where I learnt, changing to the assets pipeline required me to go through almost every single file, removing unneeded lines and adjusting some to my style.

---

### What's next?

Focus on posting for a while, hopefully adjust quickly to that routine.
Afterwards get more feedback, and perhaps even review the code again to ensure nothing was left behind.


