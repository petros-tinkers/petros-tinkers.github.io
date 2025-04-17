---
layout: project
title: Coil Winder Tool
tags:
  - 3D Printing
  - 3D Modeling
  - Custom Tool

description: >
  This is a quick tool I whiped up in cad. I was trying to repair the seatbelt winding springs on the Celica when one got unwound. I tried to wind it by hand and was rewarder with cuts on my hands and no results. I have been trying to wind it manualy for half an hour (unsuccessfully). With this tool I was able to do it in 5min without feeling I am defusing a timed bomb.
images: # These show up on the homepage. The 1st one on the project page.
  - url: /assets/projects/coil-spring-winder/coil-spring-winder.png
    alt: Render of assembled winder tool
  - url: /assets/projects/coil-spring-winder/coil-spring-winder-side.png
    alt: Render of assembled winder tool (Side View)
  - url: /assets/projects/coil-spring-winder/coil-spring-winder-internals.png
    alt: Render of assembled winder tool (internals)
---

## The issue:

I wanted to wind the spring safely and quickly.

## V1:

The early design allowed me to wind the spring successfully. However I quickly realized its biggest flaw. There was no way for me to safely tie the spring with zip ties. I have designed a push block that would raise the coil up a few milimeters. That (in theory) would allow me to tie a zip tie all over the perimeter of the spring. Theory is one thing though, and as with all things in this world it differs greatly from reality.

![Early Version of the tool](/assets/projects/coil-spring-winder/coil-winder-v1.jpg)

When I tried this method I failed to tie it and the spring exploded on me twice. It was time for a redesign.

## V2:

<video width="100%" height="auto" autoplay loop muted playsinline>
  <source src="/assets/projects/coil-spring-winder/coil-winder-animation.mp4">
Your browser does not support video playback.
</video>

The base design and working principle are the same as with the previous version. The tool is basically a 3 part constraining mould, with a cutout slit and a crank. The middle tang of the spring is secured in the crank slit, then the rest of the coil is passed through the slit, and the whole assembly gets bolted together with some M3 hardware.

What is different is the inclusion of the 5 slot cutouts. These allow for zip ties to be inserted through the mould, securing only the coil.

![Winder V2 internals](/assets/projects/coil-spring-winder/coil-spring-winder-internals.png)

## Operation

Place the crank through the top piece and through the middle piece.
Then insert the coil center tang in the crank slit.
Pass the steel ribbon through the slit.
Place the bottom part and screw the mould together.
Start cranking and occassionally pushing material in (if needed).

## Video of the device in action

<video width="100%" height="auto" autoplay controls loop muted playsinline>
  <source src="/assets/projects/coil-spring-winder/coil-winder.mp4">
Your browser does not support video playback.
</video>
