---
shortTitle: Underwater Vehicle
category: Aircraft & fluids
order: 3
featured: true
hero: /images/auv-hull.webp
role: Individual Phase 1, followed by team development
period: Fall 2026 · In progress
tools:
- Hull idealization
- Hydrostatics
- Technical research
facts:
- value: 1.10 m
  label: Concept hull length
- value: 27.2 L
  label: Reported idealized displacement
- value: 267 N
  label: Preliminary buoyant force
figures:
- src: /images/auv-flow.webp
  alt: Qualitative predicted streamlines around the underwater hull.
  caption: Qualitative flow prediction from the original portfolio. This is an engineering sketch, not CFD or an experimental measurement.
document: /documents/AUV_Project_Brief.pdf
courses:
- mech-313
title: Autonomous Underwater Vehicle
summary: For Fluid Dynamics, I developed an underwater-vehicle hull concept for navigating narrow passages. My individual Phase 1 work covered vehicle precedents, preliminary geometry, hydrostatics, buoyancy and a qualitative prediction of flow around the hull.
status: In progress
concept: false
heroAlt: Preliminary hull profile from my individual Phase 1 study.
heroCaption: Preliminary hull profile from my individual Phase 1 study.
---

## Design problem and my contribution

I compared streamlined vehicles, multi-thruster designs and underwater gliders to examine efficiency, maneuverability and internal-space tradeoffs. I proposed a symmetric 1.10 m-long hull with a 0.20 m maximum diameter, a rounded nose, cylindrical center and tapered tail.

Rear propulsion, auxiliary thrusters and forward obstacle sensing are proposed for confined navigation. Placing the center of gravity below the center of buoyancy is intended to provide a passive restoring tendency; that arrangement has not been demonstrated in a built vehicle.

## Preliminary hydrostatics

The following archived calculations assume an idealized, fully submerged hull in freshwater at 1,000 kg/m³ and a proposed operating depth of 5 m.

| Quantity | Preliminary result |
| --- | --- |
| External gauge pressure at 5 m | 49.1 kPa |
| Displaced volume | 27.2 L |
| Buoyant force | 267 N |
| Total mass for neutral buoyancy | 27.2 kg |
| Longitudinal center of buoyancy | 0.501 m aft of the nose tip |

For the pressure estimate, p = ρgh gives 1,000 × 9.81 × 5 = 49,050 Pa. The stated displacement gives a buoyant force of 1,000 × 9.81 × 0.0272 = 266.8 N, consistent with the rounded result above.

These are analytical estimates for the idealized hull, not measured vehicle performance. The detailed hull definition and integration files are needed to reproduce the volume and center-of-buoyancy results.

## Flow prediction and its limits

I used the hull outline to illustrate an expected flow pattern. The streamlines are a qualitative prediction, not validated CFD, a measured flow field or evidence of a drag coefficient.

## Current stage and next steps

My individual literature review, concept and preliminary calculations are complete. I am continuing into the team portion of the course project, where we will refine the geometry and document the final analysis, development decisions and individual responsibilities. Fabrication, underwater testing and autonomous navigation are not yet claimed.
