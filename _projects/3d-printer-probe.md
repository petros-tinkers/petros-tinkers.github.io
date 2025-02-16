<!-- ---
layout: project
title: 3D Printer Probe (WIP)
tags:
  - 3D Printing
  - 3D Modeling

description: >
  I wanted to have a probe for my printer that is fixed on the carriage. I didn't find any option other than the Voron Tap. I thought to myself: Why buy a 40€ part and retrofit it onto my printer when I can spend close to that and several hours of my time to design and make my own "Cheap" one. All jokes aside the probe I designed costs <10€ in parts and performs the same.
images: # These show up on the homepage. The 1st one on the project page.
  - url: /assets/projects/3d-printer-probe/3d-printer-probe-right-iso.png
    alt: Render of assembled probe
  - url: /assets/projects/3d-printer-probe/3d-printer-probe-right.png
    alt: Render of assembled Probe (Side View)
  - url: /assets/projects/3d-printer-probe/3d-printer-probe-left-iso-no-top.png
    alt: Render of the sliding carriage components
--- -->

### Concept

I wanted to have a probe for my printer that is fixed on the carriage. I didn't find any option other than the Voron Tap. I thought to myself: Why buy a 40€ part and retrofit it onto my printer when I can spend close to that and several hours of my time to design and make my own "Cheap" one. All jokes aside the probe I designed costs <10€ in parts and performs the same.

<video width="100%" height="auto" autoplay loop muted playsinline>
  <source src="/assets/projects/3d-printer-probe/3d-probe-animation.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

### How other ABL probes work

There are generally 4 styles of probes.

1. Induction/capacitive/proximity probes (standard CNC Probes)
2. Lidar Probes (Bamboo lab Printers or Beacon Probe)
3. Servo operated (BL Touch)
4. Magnetic sled click probes (Klicky or KlackEnder Probes)
5. Nozzle probes (Voron Tap or Creality CR-10)

**Category 1** works by sensing a the metallic surface of the buildplate. This has the obvious con that you cannot use it on non metallic buildplates.

![Image of Induction style probes](/assets/projects/3d-printer-probe/prox-cap-probes.png)

**Category 2** works with magic. No, in reality a lidar is a laser. Well not quite. It's a whole assembly of a laser transmitter and a laser receiver, that you spin very fast. It works on the principle of the Doppler effect. Depending on the frequency that the laser beam reflects it creates a point cloud that represents the distances of objects from the sensor. In 3d printing we don't need to make a point cloud but rather a mesh. The working principle is still the same though. The benefit of this sensor is that it is blazing fast but very expensive.

![Image of beacon Probe](/assets/projects/3d-printer-probe/image-of-beacon-probe.jpg)

**Category 3** works by coupling a servo actuator and a hall effect or optical sensor. The printer is configured by the firmware to deploy the probe (after the according g code command). In the case of the BL Touch it drops the plunger down. Once the plunger is down the printer lowers the Z axis and the plunger retracts into the assembly. This triggers the sensor inside and refgisters the points distance. This is a very good option but it can be slow and people have all sorts of issues making this work (especially clones).

![Image of a BL Touch probe](/assets/projects/3d-printer-probe/bltouch.webp)

**Category 4** works by coupling a mini limit switch and magnets. Usually the design involves 3 components: a magnetic sled, a dock, and a printhead mount. The probe attaches magnetically to the carriage and lowers the Z just like the BL Touch. The difference is that its cheaper, there are no extra electronics involved, no wiring tweaks are required and its lighter. The major con is increased wear on the printer. Each time you dock or undock, the printer has to move to a specific location and pick up or drop the sled. Also a lot of initial trial and error is required to figgure out the cordinates for successfull dockings/undockings.

![Image of Klackender probe by KevinAkaSam](/assets/projects/3d-printer-probe/klackeender-probe.webp)

**Category 5** works by using the hotend as a strain gauge. A strain guage is a sensor whose resistance varies with applied force. This resistance reading is then translated into usable data. These Probes do not work like that! They mimic the action though. Instead of a strain sensor they use a switch, a hall effect or an optical sensor. The printer lowers the printhead and when it reaches the bed it deflects a little and triggers the sensor. This registers a point in the mesh. The obvious pro is that it is eliminating all the issues found in categories 1,3 and 4. Notice the Lidar is still supperior mostly in terms of speed and reliabillity (Wear immune). The main con is that this option adds weight to the buisness end of the printer increasing inertia and introducing extra harmonics. The user has to be mindfull of the hotend temperature during probing too, as probing hot can damage the build surface.

![Image of Voron Tap probe](/assets/projects/3d-printer-probe/voron-tap.webp)

### My design

My probe works similar to the Voron Tap. It utilizes a mini limit switch and linear components. Instead of a linear rail I opted to use two 4mm linear shafts allong with 4 brass bushings for the sliding action. This reduces both the weight and the cost.

![Probe components](/assets/projects/3d-printer-probe/3d-printer-probe-front-slider-components.png)

As you can see in the image bellow the bushing are encapsulated in two printed mounts. I designed them to have a tight fit, in order to keep the design minimal and lightweight without the use of unnecessary fasteners or glue.

![Probe components](/assets/projects/3d-printer-probe/3d-printer-probe-left-iso-no-top.png)

The black part holds the v wheels the linear rods and the microswitch. The red part holds the slider blocks and the hotend assembly along with the adjuster M3 Bolt.

This arrangement makes the design super compact.

![Probe components](/assets/projects/3d-printer-probe/3d-probe-left.png)

Heres is a little animation simulating the probe's movement.

<video width="100%" height="auto" autoplay loop muted playsinline>
  <source src="/assets/projects/3d-printer-probe/probe-in-action.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

### Waiting for parts

I ended up ordering some brass bushings from aliexpress. I couldn't possibly wait 2-4 weeks for them to be delivered so I made my own. I have no access to a lathe so I "imporvised". I became the lathe. I cut pieces of brass and chucked them in my drill. Then I spun the piece and filed its diameter down to size. I had already driller a 4mm hole in the middle. Then I hand filed and champhered the pieces to perfection. This resulted in these smooth low tolerance linear bearings!

<video width="100%" height="auto" autoplay loop muted playsinline>
  <source src="/assets/projects/3d-printer-probe/probe-in-action.mp4" type="video/mp4">
Your browser does not support video playback.
</video>

### BOM

- 2x 4mm Linear Rods
- 4x 4*6*5mm Brass Bushings (d*D*L)
- 4x M3\*15mm Countersank Bolts (For mounts and sliders)
- 4x M3 Nuts (For mounts and sliders)
- 1x Mini Limit Switch
- 2x M2\*8mm Bolts (For the switch)
- 1x M3 Heated Insert (For the adjuster)
- 1x M3 Bolt (Adjuster bolt)

### Tools

- Soldering Iron: Heat insert pressing and switch soldering
- Allen wrenches

---

**Only if the holes are tight**

- 3mm & 4mm drill bits
- Drill

---

### Files

You can find all my 3d models on Printables.com!
