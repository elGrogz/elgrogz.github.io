+++
title = "How to automatically tweet a new article with IFTTT: Part 2"
description = ""
tags = [
"Automation",
"IFTTT",
"Blog",
"Twitter"
]
date = 2022-01-31
author = "Gregor Gilchrist"
featured_image = "https://grogz.blog/images/grogz-logo.png"
+++

So it turns out I messed up the IFTTT step a bit in my [previous](https://grogz.blog/using-ifttt-to-post-on-twitter/) post.

The action took longer than expected to trigger and I was worried that it had failed on the RSS side, but fortunately RSS just takes a bit of time to update. When I checked Twitter, the tweet was there!

However, it wasn't quite right....

{{< figure src="/post/images/twitter-ifttt/tweet-1.png" height="400px" >}}

So I've done the following: changed the variable from the featured image one (maybe featured images don't work the way I thought with Hugo blogs) to hardcoded address where my logo is.

{{< figure src="/post/images/twitter-ifttt/twitter-image-2.png" height="400px" >}}

Hopefully it will work!
