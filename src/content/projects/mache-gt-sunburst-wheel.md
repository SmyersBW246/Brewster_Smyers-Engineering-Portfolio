---
shortTitle: Mach-E GT Sunburst Wheel
category: Design & build
order: 10
featured: false
hero: /images/mache-gt-render.webp
role: Styling concept, requirements, SolidWorks modeling and design checks
period: November 2026 · Version 2 in CAD
tools:
- SolidWorks
- ISO 4000-2 rim standard
- Beam FEA, cornering fatigue
facts:
- value: 72 rays
  label: One every 5°, widest at the hub
- value: 20 × 8.0J ET47.5
  label: Same fitment as the factory wheel
- value: 81 MPa
  label: Peak ray stress vs. 96.5 MPa endurance
figures:
- src: /images/mache-gt-render.webp
  alt: Rendering of a black Mustang Mach-E GT in a dark concrete tunnel fitted with the 72-ray sunburst wheels, with red brake calipers visible behind the rays.
  caption: Rendering of my sunburst wheel design on a black Mach-E GT. It is a visualization of the design, not a photo of a finished wheel on the car.
- src: /images/wheel-iterations.webp
  alt: Side-by-side CAD renders of the two wheel versions. On the left, version 1 with five lofted spokes, labeled 12.9 kg. On the right, version 2 with a 72-ray sunburst face, labeled 17.4 kg.
  caption: Version 1 and version 2 on the same rim and hub. The 5-spoke version is lighter, but the sunburst is the look I was after.
- src: /images/wheel-5spoke-iso.webp
  alt: Shaded CAD render of version 1, a 20 inch wheel with five lofted spokes placed between the lug holes.
  caption: Version 1, five lofted spokes placed between the lug holes. It passed every check I could run in CAD at 12.85 kg.
- src: /images/wheel-sunburst-front.webp
  alt: Face-on CAD render of version 2, showing 72 thin rays radiating from the five-lug hub to the rim, with open windows between them in the outer half.
  caption: Version 2 from the front. Inside a 160 mm radius the rays are 60° ridges on a closed face. Outside it they open into windows a 6 mm end mill can cut.
- src: /images/wheel-sunburst-iso.webp
  alt: Angled CAD render of version 2 showing the depth of the sunburst rays and the full rim profile.
  caption: Version 2 at an angle. Each ray tapers from 7.2 mm wide at the window root to 4.8 mm where it meets the rim lip.
- src: /images/wheel-sunburst-back.webp
  alt: CAD render of the back of version 2, showing ten hidden lightening pockets behind the closed face and the flat hub mounting ring.
  caption: The back of version 2. Ten hidden pockets with ribs on the lug lines take weight out without showing from the front.
- src: /images/wheel-ray-section.webp
  alt: Half cross-section through one ray, showing the hub mounting face, the 47.5 mm offset, the open windows beginning at a 160 mm radius and the assumed brake caliper keep-out zone.
  caption: Section through a ray. The dashed box is the brake caliper keep-out. It is still an assumption until I measure the car.
- src: /images/wheel-rim-contour.webp
  alt: Close-up cross-section of the rim contour with callouts for the J flange, round safety hump, 5 degree bead seat, drop-centre well and 203 mm rim width.
  caption: Rim contour checked against ISO 4000-2 for a 20 × 8.0J rim. Every dimension measured off the CAD falls inside the standard.
courses: []
title: Back to the Future Sunburst Wheel for My Mach-E GT
summary: I designed a one-piece, CNC-machinable 20 inch wheel for my black 2023 Mustang Mach-E GT to give it a Back to the Future feel. It has a 72-ray sunburst face on a rim and hub that match the factory fitment. It is a CAD design, and nothing has been machined yet.
status: Version 2 in CAD · Car measurements next
concept: true
heroAlt: Rendering of a black Mustang Mach-E GT in a dark concrete tunnel fitted with the 72-ray sunburst wheels, with red brake calipers visible behind the rays.
heroCaption: Rendering of my sunburst wheel design on a black Mach-E GT. It is a visualization of the design, not a photo of a finished wheel on the car.
---
## Problem

The Mach-E GT is a modern EV, but I wanted mine to feel like it just came back from 1985. The look I was after is Back to the Future: brushed stainless steel that catches the light against a dark body. My car is black, so a bright metal wheel is the one detail you notice first.

The wheel had to do three things. It had to get that look, fit my car exactly like the factory wheel, and be something one CNC workpiece can make.

## My role

This is a personal project. I set the styling concept, wrote the requirements, modeled both versions and ran the design checks.

## What I built

**Fitment first.** The wheel is 20 × 8.0J with ET47.5 offset, the 5 × 108 bolt pattern, a 63.4 mm hub-centric bore, 60° conical lug seats and room for the OE 245/45R20 tire and TPMS valve. Steering, fenders and tire stay the same, and only the face changes.

**A model I can rebuild.** Every key dimension is driven by a named parameter, so I can rebuild and recheck the whole wheel quickly. The rim is a revolve that follows ISO 4000-2 for a 20 × 8.0J rim, including the bead seats, safety humps and drop-centre well.

**Two versions.** Version 1 used five lofted spokes placed between the lug holes. It looked like a good aftermarket wheel, not like Back to the Future. For version 2 I kept the rim and hub and replaced the spokes with 72 pyramid-shaped rays, one every 5°, each widest at the hub and thinnest at the rim.

The challenge in version 2 was making it machinable. Near the hub the rays sit so close together that no cutter fits between them. So inside a 160 mm radius the face is closed, and the rays are 60° ridges cut with a chamfer tool. Outside that radius the gaps open into windows 6.76 mm wide at the root, which a 6 mm end mill can cut. Ten hidden pockets on the back take out weight where nobody sees them.

The wheel is designed in forged 6061-T6 aluminum, the standard wheel alloy. I would get the stainless look with a brushed, clear-coated finish, not by making the wheel out of steel.

## Evidence

I wrote 18 requirements and checked each one by measuring the CAD directly. They cover fitment, rim contour, brake clearance, clamp face, cornering fatigue, mass and whether one CNC workpiece can make it.

| | Version 1 (5-spoke) | Version 2 (sunburst) |
|---|---|---|
| Face | 5 lofted spokes | 72 rays, 5° pitch |
| Mass | 12.85 kg | 17.44 kg |
| Peak stress (with Kt) | 81 MPa at spoke root | 81 MPa rays, 78 MPa closed face |
| Endurance limit | 96.5 MPa | 96.5 MPa |
| Brake clearance | 6.0 mm (assumed caliper) | 6.0 mm (assumed caliper) |

Both versions build as one valid solid and export to STEP. The peak stress sits under the 96.5 MPa fatigue endurance limit for 6061-T6, but the margin is thin. The rim contour falls inside ISO 4000-2 at every dimension I measured.

All of this is CAD and calculation. The brake caliper envelope is an assumption, the stress numbers come from a beam model, and the image of the wheel on the car is a rendering.

## Status

Version 2 is my current design, in CAD. Nothing has been machined or physically tested. Three things come next.

- **Measure the car.** I need the brake caliper envelope and how far the studs stick out.
- **Run a full solid FEA.** The beam check needs to be confirmed on the real geometry.
- **Take weight out.** That analysis should let me thin the closed face and win back some of the 4.6 kg version 2 added.
