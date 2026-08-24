---
layout: project
title: Korg SAS-20 Synth Restoration
subtitle: Dead keys, carbon pads, and AliExpress stickers.
tags:
  - Electronics
image:
  url: /assets/projects/korg-sas-20-synth-restoration/korg-sas-20.png
  alt: Reassembled Korg SAS-20 vintage synth
---

## TL;DR

I found an old Korg SAS-20 while cleaning my girlfriend's room. It belonged to her father. Cosmetically fine, but a bunch of keys were silent or flaky. Cleaning the dust and membranes didn't help. Probing with a scrap of copper showed most contacts still worked, except a few in the same column. That led to a severed wire and degraded carbon pads. AliExpress conductive stickers fixed the pads. Two keys needed a second sticker. It's been getting played for a month.

---

## Her dad's synth

The synth sat unused for years. It was a gift from an old relationship of her dad's, so it meant something to him. He wanted to restore it and learn to play, then life got in the way. He used to run a company that designed and built cellphones for businessmen before mobiles were common in Greece. I looked up to him a lot, so fixing the thing felt like the least I could do.

## Silent keys

Overall the SAS-20 looked good. The problem was the keyboard: press a key and nothing, or something sometimes. I figured years of sitting idle had left enough dust that the contacts weren't closing.

I took it apart, cleaned thoroughly, pulled the membranes, and cleaned the PCB. Put it back together. Same dead and intermittent keys, so dust wasn't the whole story.

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pcb-cleaning.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

## Copper as a continuity tester

Apart again. This time I used a small piece of copper to bridge each contact by hand. Almost every key registered. A few that shared a column stayed dead. Digging into that column turned up two faults: a severed wire, and carbon pads that had worn past usefulness.

## Stickers on the pads

I ordered a conductive-sticker kit from AliExpress that claimed to resurface worn pads. Cleaned the pads with cotton swabs and isopropyl alcohol so the stickers would actually stick, then applied them wearing gloves so skin oil wouldn't kill adhesion.

![Repair preparation and materials](/assets/projects/korg-sas-20-synth-restoration/synth-repair-preperation.jpg)

Pad cleaning:

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pad-cleaning.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-pad-replacement.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

After reassembly most keys worked. Two were still intermittent. Another sticker on each of those fixed it.

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-initial-test.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

First test after putting it back together (and some mediocre playing at best):

<video width="100%" height="auto" controls playsinline>
  <source src="/assets/projects/korg-sas-20-synth-restoration/synth-reasembly-test.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

## Rows, columns, diodes

I mentioned a column earlier. Each key is just a switch: press it and it closes a circuit on the sound board so a note registers. This synth has 61 keys. Wiring each as its own pair of poles would mean 122 contact points, more failure points, more cost, a bigger board, and a worse repair job.

Instead it uses a matrix. From memory this one is 6×8: press a key and you close the row and column that key sits on. Compact, fewer traces, easier to reason about once you know the layout.

The little cylindrical parts on the PCB are diodes. They stop ghosting: a note that shows up when you didn't press that key, or when you press a neighbor. Here's a generic matrix diagram I found online:

![Simple schematic of a generic keypad matrix](/assets/projects/korg-sas-20-synth-restoration/working-with-matrix-keypad-Fig2.webp)

## A month later

It's been getting played for about a month since the repair. Keys register, and the stickers are holding.
