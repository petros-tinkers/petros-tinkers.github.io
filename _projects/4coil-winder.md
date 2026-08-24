---
layout: project
title: Coil Spring Winder Tool
subtitle: Custom tool to wind a seatbelt spring safely.
tags:
  - 3D
  - Automotive
image:
  url: /assets/projects/coil-spring-winder/finger-un-remover-3000.webp
  alt: Render of the assembled Finger Un-remover 3000 coil winder
video: /assets/projects/coil-spring-winder/coil-winder-animation.mp4
hero_contain: true
---

## TL;DR

I was repairing the seatbelt rewind springs on the Celica when one fully unwound. Winding it back by hand cut up my hands and got me nowhere after half an hour. I modeled a small 3-part mould with a crank in CAD, printed it, and finished the job in about five minutes.

---

## Loose seatbelt spring

Seatbelt springs store a lot of energy in a thin steel ribbon. Once one is loose, you need to coil it tight again and lock it before you put the retractor back together. Doing that with bare hands is slow, and the ribbon edges are sharp. I wanted something that held the coil in place while I cranked, then let me zip-tie it so it couldn't spring open on the bench.

## First attempt

The first version could wind the spring, but it couldn't let me tie the coil safely afterward. I added a push block meant to raise the coil a few millimeters so a zip tie could go around the outside. On the desk that sounded fine. In practice I couldn't get a tie around it, and the spring blew open on me twice.

![Early Version of the tool](/assets/projects/coil-spring-winder/coil-winder-v1.jpg)

Time for a redesign.

## Second try: zip-tie slots

<video width="100%" height="auto" autoplay loop muted playsinline>
  <source src="/assets/projects/coil-spring-winder/coil-winder-animation.mp4">
Your browser does not support video playback.
</video>

Same basic idea: a three-part constraining mould, a slit for the ribbon, and a crank. The middle tang of the spring sits in the crank slit, the rest of the coil feeds through the mould slit, and the whole stack bolts together with M3 hardware.

The useful change is five slot cutouts through the mould. You push zip ties through those slots so they grab only the coil, not the tool. Five is probably overkill. Two might be enough. I value my fingers more than three zip ties.

![Winder V2 internals](/assets/projects/coil-spring-winder/coil-spring-winder-internals.png)

## How to use it

1. Put the crank through the top piece and the middle piece
2. Seat the coil's center tang in the crank slit
3. Pass the steel ribbon through the mould slit
4. Add the bottom piece and screw the mould together
5. Crank, and push ribbon in as needed when it bunches

## In action

<video width="100%" height="auto" autoplay controls loop muted playsinline>
  <source src="/assets/projects/coil-spring-winder/coil-winder.mp4">
Your browser does not support video playback.
</video>

The seatbelt went back together in a few minutes of cranking. The tool is still in the box for the next spring that gets away from me.
