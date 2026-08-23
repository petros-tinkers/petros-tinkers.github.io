---
layout: project
title: Manual → Power Window Conversion
subtitle: Adding modern comforts to a classic car
tags:
  - Automotive
  - Electronics
description: >
  This car came with factory manual windows. Someone later converted the passenger side to power, then botched the install. Mounting, wiring, and how the control electronics work when you do it properly.
images: # These show up on the homepage. The 1st one on the project page.
  - url: /assets/projects/power-window-conversion/power-windows-working.gif
    alt: Power windows functioning
  - url: /assets/projects/power-window-conversion/old-regulator.png
    alt: failed regulator (old installation)
  - url: /assets/projects/power-window-conversion/new-regulator-installed.jpg
    alt: New regulator installation
  - url: /assets/projects/power-window-conversion/power-window-panel-cad.gif
    alt: CAD model of custom switch panel
---

## TL;DR

The old power window kit kept failing on trips. Windows stuck open or shut, no AC, no way to crank it by hand. I tore it out on the roadside and went back to a manual regulator. Fine until I drove alone and couldn't adjust the glass without taking a hand off the wheel.

The previous install was garbage: speaker wire, a 20 A fuse on a 7–10 A load, power straight off ignition, cable angles steep enough to crack the PTFE sheaths, and mounting that shook itself loose. I rebuilt it with M4 rivnuts, proper gauge wire, crimps, heatshrink, an isolating relay, a resettable fuse, and fabric tape on the harness. The old DPDT switch ran the motor directly with no current sensing, so holding too long blew fuses. The new kit uses a control module with one-touch, current sensing, and a relay H-bridge. Switches only signal the module. Transistors and flyback diodes keep the relay drive safe.

Prefer video? [Watch the short](https://youtube.com/shorts/bVmr3LBrW28).

## Context

### Stuck on the roadside

The previous conversion died on me more than once, usually in summer, usually with the window jammed open or shut and no manual override. No AC. Miserable. Eventually I pulled over, tore the door apart, yanked the kit, and put the crank back in.

That fixed reliability and created a new problem. With a passenger I could ask them to crank. Alone, I was stuck: sweat it out, or try to drive and operate the window at the same time.

### The previous installation

Whoever did this ignored the instructions. Extra unused mounting holes turned the passenger door into Swiss cheese. The chain cables ran at too steep an angle, cracked the PTFE sheaths, and let road grit and moisture into the mechanism until it bound up.

Power came straight from ignition. The "wiring" was speaker wire. The only overcurrent protection was a fuse, and it was oversized: 20 A for a motor that draws maybe 7–10 A at the high end.

## Rebuilding it

Proper wire gauge and a correctly rated fuse are table stakes. A few other choices matter just as much.

### Mounting with rivnuts

Instead of self-tapping M3 screws into the door skin, I used M4 rivnuts. Self-tappers cut their own threads in thin sheet, then vibration wears those threads until the screws rattle free. That's what happened here.

Rivnuts give more thread engagement and clamp better than the one or two threads a screw can form in sheet metal. If you overtorque one, you can replace it. The cost is time and hole size: 6 mm instead of 3 mm. Worth it.

### Wiring that lasts

1. Size the wire and fuse for the actual load
2. Crimp or solder. Twisted copper is not a joint
3. Heatshrink over the joints. Vinyl tape unwraps in heat and age
4. An automotive relay so the windows aren't a permanent drain path off the battery
5. A resettable fuse you can reach, rated below the hard fuse
6. Automotive fabric tape over the finished harness so sheet-metal edges don't chew it

Wiring loom on top of that if you want to go further.

## How the electronics work

### The old switch-only circuit

The old setup was a 5-pin DPDT switch, two motor leads, and ignition power. 12 V fed the normally open contacts, ground the normally closed. Motor leads sat on the commons. At rest, nothing reached the motor. Press one way and one lead gets 12 V while the other is grounded. Press the other way and polarity flips, so the motor reverses.

Reliable, and too dumb. You hold the switch the whole time, which is a bad idea while driving. Hold past the end of travel and the stalled motor pulls hard current, the fuse pops, and you're hunting for a spare with a stuck window.

![Wiring diagram of previous installation](/assets/projects/power-window-conversion/old-powerwindow-installation.png)

### The new control module

The new kit includes a control module with one-touch operation (and auto-up on lock, which I didn't use). You can set the motor current limit, which is useful if you value your fingers.

The switches are 4-pin SPDT. They don't carry motor current. They tell the module what you want. The module decides up or down from there.

![Wiring diagram of new installation](/assets/projects/power-window-conversion/new-powerwindow-installation.png)

![Image of power window contol unit pcb](/assets/projects/power-window-conversion/control-module-pcb.png)

A microcontroller watches two inputs: switch position and motor current. Press up and it drives the motor until current hits the stop threshold, then cuts power. If the glass is already up, current spikes immediately and it stops. That keeps the motor and the fuse alive.

### Current sensing

I haven't probed this board, but the usual approach is a shunt (or similar) into an ADC that maps current onto a logic-level voltage, say 0–5 V. If the module tops out around 10 A, 0 V is 0 A, 5 V is 10 A, and values in between scale linearly.

### Relay H-bridge

The module doesn't flip a fat switch under your thumb. It uses a relay H-bridge: relays arranged so you can put 12 V and ground on the motor leads in either polarity.

Other designs use a power relay plus a direction relay per side. This one is the H-bridge layout. With neither relay on, both motor leads see the same potential and nothing moves. Energize one relay and you get forward. Energize the other and you get reverse. Both on is also a no-current state.

![Wiring diagram of half h bridge relay configuration](/assets/projects/power-window-conversion/half-relay-h-bridge.png)

### Driving 12 V relays from logic

Automotive relay coils want about 12 V (they often won't pull in below ~9 V). Microcontrollers speak 3.3 V or 5 V, and they will happily destroy themselves if you ask them to sink coil current directly. So the MCU drives a transistor through a saturation resistor; the transistor grounds one side of the coil while the other side sits at 12 V.

Leave it at that and the transistors die. When you cut coil current, the inductance dumps a voltage spike. A diode across the coil (flyback diode) gives that energy a safe path.

## Custom switch panel

I modeled the panel in Fusion 360: a flat rectangle, the switch outline as a cutting tool, a cutout for the coin sorter sized to its rear latches, bolt holes, a lip for the switches to catch, and some rounding.

I trimmed the original trim piece with a blade and a torch, pressed in M3 heat-set inserts, and fastened the panel with countersunk M3 screws.

![CAD model of switch panel](/assets/projects/power-window-conversion/power-window-panel-cad.gif)

Fitted to the center trim:

![Center trim piece with mounted panel](/assets/projects/power-window-conversion/fitted-panel.png)

Close-up:

![Center console with mounted panel close-up](/assets/projects/power-window-conversion/fitted-panel-closeup.png)

## First summer trip

![Celica in Sifnos Island, Cyclades, Greece](/assets/projects/power-window-conversion/celica-sifnos.png)

A few days after the install, my partner, some friends, and I drove to Sifnos. The windows got a workout on those narrow island roads. I was skeptical of one-touch at first. One press and the glass moves while your eyes stay on the road and your hands stay on the wheel. I came around fast.
