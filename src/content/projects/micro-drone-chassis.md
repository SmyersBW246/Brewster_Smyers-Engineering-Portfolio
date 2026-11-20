---
shortTitle: Micro-Drone Chassis
category: Composite concepts
order: 5
featured: false
hero: /images/drone-chassis-in-mold.webp
role: Personal project, with the mold developed alongside MECH 355
period: Fall 2026 · Molded, now building
tools:
- SolidWorks part + assembly modeling
- Compression mold design
- SolidWorks Simulation
facts:
- value: 102 × 102 mm
  label: Frame footprint, 3 mm thick
- value: 1st part
  label: Chassis molded in chopped carbon, Nov 2026
- value: 3 parts
  label: Mold with two cavity halves and a top press plate
figures:
- src: /images/drone-chassis-in-mold.webp
  alt: Photo of the black chopped-carbon X-frame still sitting in the opened blue printed mold.
  caption: The first molded chassis, still in the split mold after pressing. The forged-carbon pattern shows on the face; the edges carry flash where resin and fiber squeezed into the parting lines.
- src: /images/drone-chassis-demolded-mold.webp
  alt: Photo of the opened mold halves with the demolded carbon chassis lying between them.
  caption: Demolding. The four-piece mold split cleanly and survived, so it can press the next part.
- src: /images/drone-chassis-demolded.webp
  alt: Photo of the demolded black carbon X-frame with ragged fiber flash around its edges.
  caption: The raw part before finishing. Next it gets trimmed and sanded, the one resin-starved arm tip gets filled, and it gets one more epoxy coat before drilling.
- src: /images/drone-mold-open-photo.webp
  alt: Photo of the 3D-printed blue compression mold opened up, showing the X-shaped frame cavity on one side and the matching plug on the other.
  caption: The printed mold, opened. The X-shaped cavity is on the left and the matching plug that presses the charge is on the right.
- src: /images/drone-mold-closed-photo.webp
  alt: Photo of the 3D-printed blue compression mold bolted closed on a table, with screws through the top plate.
  caption: The same printed mold bolted closed, the way it sits in the press.
- src: /images/drone-chassis-assembly.webp
  alt: SolidWorks assembly of the drilled X-frame chassis with four 1104 brushless motors mounted on the arm pads.
  caption: Chassis assembly with vendor CAD models of the 1104 motors placed on the pads. I use this model to check the motor bolt pattern, flight controller holes and clearances before any material is pressed.
- src: /images/drone-chassis-blank.webp
  alt: SolidWorks model of the undrilled 3 mm carbon chassis blank.
  caption: The undrilled chassis blank. This is the shape the mold produces. Motor and flight controller holes are planned as drilled features after molding.
- src: /images/drone-mold-half.webp
  alt: One half of the split compression mold, showing the cavity for two drone arms and the hub.
  caption: One of the two cavity halves. The pocket forms two arms, their motor pads and half of the hub. Side holes take clamping hardware across the split, and the top holes line up with the press plate.
- src: /images/drone-mold-top-press.webp
  alt: Flat top press plate for the drone chassis mold with four alignment holes.
  caption: The top press plate closes the cavity and spreads the press load across the charge. Its four holes match the guide holes in the two halves.
courses:
- mech-355
title: Compression-Molded Micro-Drone Chassis
summary: I designed a compact quadcopter chassis and the compression mold to make it from chopped carbon fiber. The goal is to compare the molded frame with 3D-printed ones of the same shape and find out whether the composite is worth the extra manufacturing work. The first carbon chassis came out of the mold in November 2026.
status: Chassis molded · Build in progress
concept: false
heroAlt: Photo of the first chopped-carbon X-frame chassis sitting in the opened blue printed compression mold.
heroCaption: The first chassis pressed in chopped carbon fiber, still in the printed split mold (November 2026).
---

## Problem

Most small racing and freestyle drones use frames cut from carbon plate. I wanted to try a different route that ties into my manufacturing coursework: pressing chopped carbon fiber in a mold so the frame comes out near its final shape.

The question is whether that is worth it. Is the molded frame stiffer, lighter or more durable than a 3D-printed one of the same shape, by enough to justify the extra manufacturing work?

## My role

This is a personal project. I designed the chassis and the compression mold in SolidWorks, and I developed the mold alongside MECH 355.

## What I built

### Chassis

The frame is a single-piece X layout with broad, tapered arms. It sits on a 102 × 102 mm footprint at a nominal 3 mm thickness.

| Feature | Current CAD value |
|---|---|
| Central hub | 44 mm, carries the flight controller |
| Arm width | 16 mm at the root, 12 mm at the tip |
| Motor pads | 22 mm diameter |
| Motor spacing | 80 mm between adjacent motors, about 113 mm diagonal |
| Motor mounts | Four M2 holes on a 9 mm circle per pad, plus a shaft relief |
| Flight controller | 26 × 26 mm M2 pattern on the hub |
| Propellers | 2.2 in, about 136 mm total swept width |

I keep two versions of the part. The blank is the clean molded shape. The drilled version adds the motor and flight controller holes and sits in an assembly with vendor models of the flight controller and 1104 brushless motors.

### Mold

The mold is a three-part SolidWorks assembly built around the chassis blank.

- **Split cavity.** The X-shaped pocket is divided between two blocks that meet along a split line. Each block forms two arms, their motor pads and half of the hub. Separating the blocks frees the thin frame instead of prying it out of a single pocket.
- **Alignment and clamping.** Holes on the top faces line up with the press plate, and cross holes through the sides take hardware that pulls the two halves together while the press closes.
- **Top press plate.** A flat plate covers the cavity and spreads the press load evenly over the carbon charge.

## Evidence

Everything so far is CAD and calculation. No frame has been molded, measured or flown.

- **Fit.** The assembly is where I check that the bolt patterns line up and the props clear the arms.
- **Mass.** From the CAD volume of about 13.3 cm³, the bare frame works out to roughly 19 g in chopped carbon and 17 g in PETG, using assumed densities of 1.45 and 1.25 g/cm³. Those are estimates, not weighed parts.
- **Thrust budget.** Four BETAFPV LAVA 1104 7200KV motors, 2.2 in three-blade props and a 3S 580 mAh battery put the drone at about 112 g on paper. With a 15% margin for wiring and small parts, I plan around 129 g.

A common rule for a small quad that still flies with control is a thrust-to-weight ratio of at least 2 to 1.

| Step | Value |
|---|---|
| Planning weight | 129 g |
| Total thrust needed at 2:1 | 258 g |
| Thrust needed per motor | about 65 g |
| Extra thrust per motor for every 10 g of payload | 5 g |

Put another way, the most payload I can carry is **2T − 129 g**, where T is the measured thrust of one motor in grams. I have not measured T yet. The vendor only lists current draw for these motors, not a thrust I can trust.

I also set up initial static studies of the chassis in SolidWorks Simulation. I am still checking the load cases and units, so I am not reporting stress or deflection numbers yet.

## Status

**November 2026: the first chopped-carbon chassis is molded** in the printed split mold, and the electronics have arrived (BETAFPV F4 AIO flight controller, four LAVA 1104 motors, 3S 580 mAh battery, RadioMaster Pocket ELRS radio). The part came out whole, with flash on the edges and one resin-starved arm tip. The build plan, in order:

1. **Finish:** trim the flash, sand the edges round, fill the dry tip, one more thin epoxy coat.
2. **Drill:** motor and flight controller holes from a 1:1 template printed from the CAD plan, carbide bits, backed and taped to stop fraying.
3. **Motors, then solder** the flight controller (battery lead, capacitor, motor phases), **then install** it on insulated standoffs, because carbon conducts.
4. **Program** in Betaflight with ExpressLRS, then a first hover in self-level mode.
5. **Compare** the carbon frame with matching PLA+ and PETG frames: mass, hover throttle, flight time, arm stiffness and a drop test. These will be the first measured numbers. Everything above this section is still CAD and calculation.
