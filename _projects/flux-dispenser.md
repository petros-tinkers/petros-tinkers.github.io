---
layout: project
title: Flux Dispenser Project
tags:
  - 3D Design
  - 3D Printing
description: >
  I solder PCBs regularly. Every time I try to use flux, it's awkward.
  I push the syringe to get a certain amount, but it keeps feeding flux
  even after I stop pressing, wasting product and making a mess.
  I am also cheap and don't like the liquid flux option. Therefore,
  I designed this mechanical dispenser.
images: # These show up on the homepage. The 1st one on the project page.
  - url: /images/projects/flux/disp4.webp
    alt:
  - url: /images/projects/flux/disp3.webp
    alt:
  - url: /images/projects/flux/disp1.webp
    alt:
---

### Problem

I solder PCBs regularly. Everytime I try to use flux it's awkward. I push the syringe to get a certain ammount it keeps feeding flux even after I stop pressing wasting product and making a mess. I am also cheap and don't like the liquid flux option. Therefore I designed this mechanical dispenser.

### Idea

The design is relatively simple. It's a gear driven syringe assembly. The device consists of 8 printed parts and 2 taken from a 10ml syringe.

### BOM

- 1× 10ml syringe
- 1× M3 heated insert
- 1× M3×12mm countersank bolt
- 2× M3×30mm countersank bolt

---

### Version 1

![flux dispenser V1](/images/projects/flux/disp1.webp)

![flux dispenser V1 in Hand](/images/projects/flux/disp2.webp)

#### What didn't work

The design was bulky and floppy. I didn't think about stabilizing the geared plunger. This meant that the gear didn't have enough contact to advance the plunger and feed flux.

I wasn't a particular fan of the square casing design. It was akward to hold in my hand and the plunger was too long.

---

### Version 2

![flux dispenser V2 model in Fusion 360](/images/projects/disp4.webp)

![flux dispenser V2 Model Section View](/images/projects/flux/disp3.webp)

In this version I re-evaluated almost everything while keeping the working principle intact.

As you can see in the section view I added 2 gears. This solves the gear contact issue (the plunger is always in contact with the plunger at a fixed set distance) and simultaneously makes the device easier to use. There are 2 cutouts in the case enabling the user to feed the plunger with either gear. This way I do not have to fiddle with the tool to find the right orientation in order to use it.

#### The chalenge

This version is tighter and it took some thinking to make it easy to use and especially recharge. Most of the time was spent figuring out how to make the recharging procedure easier while maintaining a small form factor.

The way I accomplished this was by utilizing threads and splitting the casing in half. Two nuts are used to keep the structure connected and some locating pins to help with alignment.

#### Recharging procedure

Loosen the two nuts. Slide the syringe/plunger assembly up towards the rack gear side that is not blocked with a wall.

Refill as with any syringe. Assemble in the reverse order.

### Slicer Settings

- Layer Height: 0.2
- Support type: Tree
- Infill Type: Adaptive Cubic
- Infill %: 30-40
- No of Walls: 4
- Top/Bottom Layers: 5
- Walls Printing Order: Outter/Inner
- Other: Mouse ears
- Brim width: 5
- Brim Gap: 0.2
