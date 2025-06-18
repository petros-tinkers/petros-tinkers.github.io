---
layout: project
title: Korg SAS-20 Synth Restoration
tags:
  - Electronics
  - Restoration
  - Music
description: >
  I was cleaning out my girlfriends room and found an old Korg SAS-20 vintage synth. It belonged to her father. It had great sentimental value to him as it was a gift from an ex relationship of his. He wanted to restore it and learn to play but he never got around to it. He was a very busy person and I was looking up to him. He was basically a genius to me and others. He used to have a company that designed and built cellphones for rich bussinessmen before mobile phones were a thing in Greece. Enough about the backstory though, lets get to the project.

images: # These show up on the homepage. The 1st one on the project page.
  - url: /assets/projects/korg-sas-20-synth-restoration/korg-sas-20.png
    alt: Reassembled Korg SAS-20 vintage synth
  - url: /assets/projects/korg-sas-20-synth-restoration/korg-sas-20-repair-dissasembled-test.png
    alt: Dissasembled Korg SAS-20 vintage synth
  - url: /assets/projects/korg-sas-20-synth-restoration/synth-repair-preperation.jpg
    alt: Synth repair preperation and materials
---

### The issue

The synth was in great shape overall. The only issue was that many keys were not working. When pressed they would not make a sound or they would work intermittently.

### The repair

I dissasembled the synth and cleaned it thorougly. It has accumulated a lot of dust over the years it has been sitting idle. I suspected that the keys were not completing the circuit to register the key press. I removed the membranes and cleaned the pcb. After reassembling the synth I tested the keys and the issue persisted. So cleaning it didn't fix it now what?

![PCB Cleaning]()

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pcb-cleaning.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

I took it apart once more and this time used a small copper piece to manually complete the circuit. All the keys worked except for a few that belonged to the same column. I dug deeper and found two problem areas. The first was a wire that had beed severed, and the second was that the carbon pads were degraded.

I ordered a product from aliexpress that claimed to fix the pads. It was a kit of conductive stickers that you can stick on to the pads. I cleaned the pads thorougly using some cotton swabs and some isopropyl alcohol to ensure the best adhesion. Then I applied the product while wearing gloves to avoid contamination that could compromise adhesion.

<!-- ![Repair Preparation](/assets/projects/korg-sas-20-synth-restoration/repair-preparation.jpg) -->

Pad cleaning:

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pad-cleaning.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

After reassembling the synth I tested the keys again and most of them worked (with the exception of two keys that work intermittently. Reapplying another sticker fixed it!). I was really pleased with the result and have been using it for a month now.

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pad-replacement.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-initial-test.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

First test of the synth after reassembling (and some mediocre playing at best :) ):

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-reasembly-test.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

### Some additional info about the synth:

I mentioned the word column earlier. I realised that not everyone reading about this is familiar with synths or electronics in general. A key is acting as a switch. When the key is pressed, it completes the circuit (like a switch) in the sound board and a note is registered. This synth has 61 keys. That means 61 switches or 122 poles (contact points). If it were wired this way it would have more failute points, it would cost more unnecesarilly, be larger and more difficult to repair. Luckily there is a better way.

Enter the Matrix. This specific synth uses a 6X8 matrix (at least that's what I remember it is). This means that the synth has 6 rows and 8 columns. When a key is pressed, it completes the circuit in the row and column it belongs to. This way the circuit is much more reliable, compact and efficient. The ones that watched the video and noticed the small cylindrical components on the pcb and are wandering what they are, those are simple diodes. They are used to prevent ghosting. Ghosting is when a note is registered when a key is not being pressed or an adjacent key is pressed.

![Here is a simple schematic diagram of a generic matrix I found online](/assets/projects/korg-sas-20-synth-restoration/working-with-matrix-keypad-Fig2.webp)

---
