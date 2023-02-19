+++
title = "How to automatically tweet a new article with IFTTT"
description = ""
tags = [
"Automation",
"IFTTT",
"Blog",
"Twitter"
]
date = 2022-01-30
author = "Gregor Gilchrist"
featured_image = "https://grogz.blog/images/grogz-logo.png"
+++

In order to make my posts more visible I want to automatically tweet them when they are posted. I had a look around for solutions to this to avoid writing some custom code or messing about with Github (what I use for source control for this blog) and Netlify (which hosts grogz.blog and automatically updates the site when I push code to the blog's master branch). In the end I decided to give If This Then That (IFTTT) a try. Here's what I did.

### IFTTT

After [signing up](https://ifttt.com/) and going through the onboarding, I realised the best way to pick up new posts was to set up RSS for this blog, and any new posts would in turn get tweeted by the IFTTT applet. Luckily Hugo automatically has RSS enabled by default (check the file at `public/index.xml` - if it's not there then the RSS feed won't work) and I was able to see all my previous posts in an RSS reader!

![](/post/images/twitter-ifttt/ifttt-rss-reader.png)

### The trigger

Next I needed to set up a trigger, which is basically what IFTTT looks for to know that it has to take an action. In this case the trigger is a new post arriving on the RSS feed for http://grogz.blog. This was really easy: on the main dashboard of IFTTT, choose 'Create' to start making your custom automation and click 'Add' next to 'If this':

{{< figure src="/post/images/twitter-ifttt/ifttt-create-new.png" height="400px" >}}

And search for RSS:

{{< figure src="/post/images/twitter-ifttt/ifttt-choose-rss.png" width="500px" >}}

Now you just need to enter the URL of the feed you want to subscribe.

{{< figure src="/post/images/twitter-ifttt/ifttt-trigger-url.png" width="500px" >}}

Super easy.

### The action

The next step is the action, which is the instructions you give when the automation is trigger. IFTTT will now show a big 'Then That' banner. Click 'Add' and search for 'Twitter' and select 'Post a tweet with image'.

{{< figure src="/post/images/twitter-ifttt/ifttt-then-that.png" width="500px" >}}

I made a free logo [here](https://studio.tailorbrands.com/) that I'll use as the image every time a tweet goes out. I then hosted this image in the static folder of my site so it is accessible under `images/grogz-logo.png`.

{{< figure src="/post/images/twitter-ifttt/grogz-logo.png" width="300px" >}}

Next I just need to set up the custom message I want in the tweet:

{{< figure src="/post/images/twitter-ifttt/ifttt-post-tweet.png" width="500px" >}}

I also want to make sure that I have the image I want set in the markdown under `featured_image`.

{{< figure src="/post/images/twitter-ifttt/ifttt-featured-image.png" width="400px" >}}

That way IFTTT will know what image to use from the RSS feed. Note that you don't have to edit the `EntryImageUrl`. Save the action and you are done.

### Testing it out

This blog post is the official test, so if you see a tweet about it at [@gregorgilchrist](https://twitter.com/gregorgilchrist) then this has worked!
