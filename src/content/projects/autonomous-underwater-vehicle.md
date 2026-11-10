---
shortTitle: Underwater Vehicle + Water Tunnel
category: Aircraft & fluids
order: 3
featured: true
hero: /images/auv-hull.webp
heroGallery:
- src: /images/auv-hull.webp
  alt: Side profile of my proposed underwater-vehicle hull, with a rounded nose, cylindrical middle and tapered tail.
- src: /images/auv-flow.webp
  alt: Qualitative predicted streamlines around the underwater hull.
- src: /images/auv-flow-channel-front.webp
  alt: Isometric SolidWorks view of the water tunnel flow channel, a narrow inlet widening into a wider test section.
- src: /images/auv-flow-channel-rear.webp
  alt: Isometric SolidWorks view of the flow channel from the back, showing the test section dividers and a round port in the end wall.
role: Hull concept and water tunnel design, then team testing
period: Fall 2026 · In progress
tools:
- SolidWorks
- Hand calculations
- Similarity scaling
- Hydrostatics
facts:
- value: 1.10 m
  label: Full-size hull length
- value: ≤ 100 mm
  label: Test model length
- value: ≤ 400 × 200 mm
  label: Water tunnel footprint, 2 L max
- value: 267 N
  label: Buoyant force on the full-size hull
figures:
- src: /images/auv-matlab-geometry.webp
  alt: Four MATLAB panels of the proposed underwater-vehicle hull. Side view with nose, body and tail sections, circular front view, predicted flow pattern, and a summary giving length 1.10 m, diameter 0.20 m, L/D 5.5, frontal area 0.0314 square meters and wetted area 0.616 square meters.
  caption: MATLAB geometry sheet for my hull. The side view, front view and predicted streamlines all come from one set of hull dimensions. The flow pattern is a prediction, not CFD or a measurement.
- src: /images/auv-flow.webp
  alt: Qualitative predicted streamlines around the underwater hull.
  caption: My predicted flow pattern around the hull, drawn from the hull outline. It is a prediction to check against the tunnel, not CFD or a measurement.
- src: /images/auv-flow-channel-front.webp
  alt: Isometric SolidWorks view of the water tunnel flow channel, a long narrow inlet channel that widens into a wider test section with a hooked bracket hanging over it.
  caption: My SolidWorks model of the water tunnel flow channel. The narrow inlet runs into the wider test section where the model sits.
- src: /images/auv-flow-channel-rear.webp
  alt: Second isometric SolidWorks view of the flow channel from the opposite side, showing the test section dividers and a round port in the end wall.
  caption: The same channel from the other side, with the dividers in the test section and a round port in the end wall.
- src: /images/auv-flow-channel-top.webp
  alt: Top view of the flow channel in SolidWorks, a narrow inlet channel that flares out into a wide test section, with a round port near the inlet end.
  caption: Top view of the channel, showing the narrow inlet flaring out into the test section.
document: /documents/AUV_Project_Brief.pdf
courses:
- mech-313
title: Underwater Vehicle and Miniature Water Tunnel
summary: For Fluid Dynamics, I designed the hull of an unmanned underwater vehicle (UUV) and a small open-channel water tunnel to test it in. The idea is to test a model no longer than 100 mm, then scale what we see up to a full-size vehicle about 1.1 m long.
status: In progress
concept: false
heroAlt: Side profile of my proposed underwater-vehicle hull, with a rounded nose, cylindrical middle and tapered tail.
heroCaption: My hull concept (top left) and its predicted flow pattern, then two isometric SolidWorks views of the water tunnel flow channel, from the front and from the back. Click any panel for full size.
---

## The project

Underwater vehicles that map the seafloor or inspect pipes and tunnels often move very slowly, around 0.1 m/s when cruising and 0.5 m/s at most, so their cameras stay steady. Our class project asks for a hull that works at those speeds and can fit through narrow channels.

A 1.1 m vehicle is too big to test in a lab, so the project works at small scale:

- **Design** a full-size hull that has low drag and fits through tight spaces.
- **Build** a model no longer than 100 mm, 3D printed so it can go in both a wind tunnel and our own water tunnel.
- **Build** a miniature water tunnel to watch the flow around the model.
- **Scale** the results back up to the full-size vehicle using similarity.

All of the modeling is done in SolidWorks and all of the math is done by hand.

## My hull design

I compared three common types of underwater vehicles before picking a shape: streamlined torpedo hulls, multi-thruster vehicles that can hover and turn in place, and underwater gliders that move by changing buoyancy. Torpedo hulls have the lowest drag going forward, which fits a vehicle that has to save battery, so I started there.

My hull is 1.10 m long with a 0.20 m maximum diameter. It has three sections:

| Section | Length | Why |
|---|---|---|
| Rounded nose | 0.20 m | Slows the water gradually instead of hitting a flat face |
| Cylindrical middle | 0.65 m | Space for batteries, sensors and electronics |
| Tapered tail | 0.25 m | Lets the flow leave smoothly and keeps the wake small |

The tapered tail matters most for drag. A short, blunt tail makes the flow separate early and leaves a big wake behind the vehicle. Spreading the taper over 0.25 m should delay that separation. For steering in tight spaces, I proposed small side thrusters and a forward sonar sensor. I also placed the center of gravity just below the center of buoyancy so the hull rights itself if it rolls.

## Hydrostatics by hand

I split the hull into a rounded half-ellipsoid nose, a cylinder and a cone, then worked out the volume, buoyancy and pressure for fresh water at a 5 m operating depth.

| Quantity | Result |
|---|---|
| Water pressure at 5 m (p = ρgh) | 49.1 kPa |
| Displaced volume | 27.2 L |
| Buoyant force | 267 N |
| Mass for neutral buoyancy | 27.2 kg |
| Center of buoyancy | 0.501 m back from the nose |

So to hover without sinking or floating up, the full-size vehicle has to weigh about 27 kg. The center of buoyancy sits just ahead of the middle of the hull because the nose is fuller than the tapered tail.

## Scaling down and back up

The test model can be no longer than 100 mm, so it is a small version of the full 1.1 m hull. Making a model the right shape is the easy part. For what we see in the tunnel to tell us anything about the real vehicle, the flow around the model has to behave like the flow around the full-size hull.

Next, we are going to work out the Reynolds number for the full-size vehicle at its cruising and top speeds. Then we will use similarity to find the flow speeds the model needs in our water tunnel and in the wind tunnel. Once we test the model, we will scale the drag and flow results back up to the full-size vehicle. The goal set for the class is a drag coefficient near the best benchmark of 0.65 to 0.70.

## The water tunnel

The tunnel is a small open-channel flume I designed in SolidWorks. It has to fit tight limits:

- **No longer than 400 mm** and no wider than 200 mm.
- **No more than 2 L** of water in the tunnel.
- **Leak-free**, with a clear test section where the model sits in steady, even flow.
- **Easy to fill and drain**, with 1/2 in fittings that connect to a variable-speed pump rated up to 90 L/min.

It is built from 5 mm (0.2 in) acrylic sheet bonded with solvent. The whole tunnel sits inside a lab bench tank, which catches any spills and holds the pump. Dye or small seeding particles in the water make the flow visible, so we can see where it stays attached to the hull and where the wake starts.

The test section also sets how "narrow" the channel is. The class defines a narrow space as one where the vehicle blocks more than 10% of the channel's cross-section, so the tunnel width and water depth have to be sized around the model.

## Where it stands

My individual research, hull concept and hand calculations are done. Our team of six is now refining one final hull for model testing and building the water tunnel. Wind tunnel and water tunnel tests are scheduled for late November, with the final report due in December. Nothing has been tested yet, so the flow prediction and drag target above are still predictions.
