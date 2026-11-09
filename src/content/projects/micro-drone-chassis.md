---
shortTitle: Micro-Drone Chassis
category: Composite concepts
order: 5
featured: false
hero: /images/drone-mold-assembly.webp
role: Personal project, with the mold developed alongside MECH 355
period: Fall 2026 · Ready for production
tools:
- SolidWorks part + assembly modeling
- Compression mold design
- SolidWorks Simulation
- Electronics packaging
facts:
- value: 102 × 102 mm
  label: Frame footprint, 3 mm thick
- value: ~19 g
  label: Estimated bare frame in chopped carbon
- value: 3 parts
  label: Two cavity halves and a top press plate
- value: Planned
  label: Molding, structural tests and flight
figures:
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
summary: I am designing a compact quadcopter chassis and the compression mold to make it from chopped carbon fiber. The goal is to compare the molded frame with a 3D-printed one of the same shape and find out whether the composite is stiffer, lighter or more durable enough to justify the extra manufacturing work.
status: Ready for production
concept: false
heroAlt: SolidWorks assembly of the split compression mold for the drone chassis, with an X-shaped cavity across two blocks.
heroCaption: The full press mold assembly in SolidWorks. Two blocks meet along a split line and together form the X-shaped cavity for the frame.
---

## The idea

Most small racing and freestyle drones use frames cut from carbon plate. I wanted to try a different route that ties into my manufacturing coursework: pressing chopped carbon fiber in a mold so the frame comes out near its final shape. To judge whether that is worth it, I am also planning an identical frame printed in polymer, so the two can be tested side by side with the same electronics.

## Chassis design

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

From the CAD volume of about 13.3 cm³, the bare frame works out to roughly 19 g in chopped carbon and 17 g in PETG, using assumed densities of 1.45 and 1.25 g/cm³. Those are estimates, not weighed parts.

I keep two versions of the part. The blank is the clean molded shape. The drilled version adds motor and flight controller holes and is placed in an assembly with vendor models of the flight controller and 1104 brushless motors. That assembly is where I check that the bolt patterns line up and the props clear the arms.

## Mold design

The mold is a SolidWorks assembly built around the chassis blank.

- **Split cavity.** The X-shaped pocket is divided between two blocks that meet along a split line. Separating the blocks frees the thin frame instead of prying it out of a single pocket.
- **Motor pads and hub.** Each block forms two arms, their round motor pads and half of the hub, so the halves together make the full part.
- **Alignment and clamping.** Holes on the top faces line up with the press plate, and cross holes through the sides take hardware that pulls the two halves together while the press closes.
- **Top press plate.** A flat plate covers the cavity and spreads the press load evenly over the carbon charge.

## Analysis so far

I set up initial static studies of the chassis in SolidWorks Simulation using PLA+ material properties, along with chopped carbon and alternate material versions of the part. I am still checking the load cases and units, so I am not reporting stress or deflection numbers yet. The next studies will use realistic thrust and crash loads.

## What is still open

- The lab press size limit. A 6 in limit has been mentioned but not confirmed, and it decides whether the mold footprint works.
- Resin, fiber length, cure temperature, pressure and release method for the actual process.
- Draft angles and corner radii on the cavity, which depend on the process.
- Whether a printed mold could survive the process or the tool has to be machined from metal.
- Final fit of the purchased motors and flight controller against the CAD hole patterns.

## Plan for testing

The chassis and mold design are finished and ready for production. Next, I plan to make coupons, then matched carbon and printed frames. Both get the same electronics, and I will compare mass, stiffness under load, vibration and how well the screw holes hold up. That carbon is better is a hypothesis to test. No frame has been molded, measured or flown yet.
