---
shortTitle: Aerobatic Biplane
category: Aircraft & fluids
order: 2
featured: true
hero: /images/biplane-isometric.webp
role: CAD development and analysis adaptation
period: Fall 2026 · In development
tools:
- SolidWorks
- MATLAB
- Aircraft geometry
facts:
- value: 2 seats
  label: Concept configuration
- value: 127.5 ft²
  label: Total wing reference area
- value: 10 + 1
  label: MATLAB functions + data file
figures:
- src: /images/biplane-side.webp
  alt: Actual side view of the SolidWorks biplane concept.
  caption: Side view extracted from the supplied CAD screenshot. Geometry remains in development.
- src: /images/biplane-front.webp
  alt: Actual front view of the SolidWorks biplane concept.
  caption: Front view showing the biplane configuration. No structural or aerodynamic validation is implied.
document: /documents/Biplane_Model_Notes.pdf
courses:
- mech-438
title: Aerobatic Biplane
summary: I am developing a two-person aerobatic biplane concept through SolidWorks modeling and a modular MATLAB analysis. The project connects geometry with lift, drag, fuel use, power requirements and longitudinal trim so I can examine how a design choice affects the rest of the aircraft.
status: In development
concept: false
heroAlt: Actual SolidWorks views of my aircraft model in development. Wing, fuselage and tail geometry are being refined alongside the analysis.
heroCaption: Actual SolidWorks views of my aircraft model in development. Wing, fuselage and tail geometry are being refined alongside the analysis.
---

## My work and modeling approach

I am adapting an earlier aircraft-analysis workflow for a biplane configuration and developing the associated CAD geometry. The modules share dimensions, weights and mission assumptions.

- **Geometry:** Two lifting wings, rounded tips, horizontal and vertical tails, and fuselage cross-sectional stations.
- **Aerodynamics:** Representative NACA 0012 geometry, finite-wing lift slopes, component parasite drag and a parabolic aircraft drag model.
- **Mission and performance:** Phase-by-phase fuel and weight accounting, wing-loading constraints, shaft-power requirements and preliminary takeoff/landing estimates.
- **Longitudinal trim:** An assumed mass budget, center-of-gravity movement, stick-fixed neutral point and elevator trim.

## Selected model inputs

| Input | Value | Basis |
| --- | --- | --- |
| Wingspan | 20 ft | Aircraft-class reference |
| Total wing reference area | 127.5 ft² | Both wings combined; equal split assumed |
| Overall reference length | 17 ft 9 in | Aircraft-class reference |
| Sizing engine power | 260 hp | Aircraft-class reference |
| Wing gap | 45 in | Project geometry assumption |

These are documented analysis inputs, not measured prototype results or a structural qualification of the proposed geometry.

## Keeping the analysis consistent

A central challenge is using the same reference definitions throughout the model. Total wing reference area includes both wings, while each wing has its own chord and aspect ratio. Fuel burn changes weight and center of gravity during the mission; the workflow carries those changes into the aerodynamic, power and trim calculations.

## Current stage and next steps

The project has produced a developing CAD model and an organized analysis workflow with explicit assumptions and internal consistency checks. Next, I will reconcile CAD geometry with the analytical model and replace estimated mass stations and surface areas with CAD properties.

The section polar is analytical teaching data. The calculations are preliminary estimates without wind-tunnel or flight-test validation. Structural substantiation, detailed biplane interference and dynamic flight behavior remain outside the current scope.

## Reference configuration

Span, total wing area, length and power are based on the [Aviat Pitts S-2C](https://aviataircraft.com/fusion_element/pitts-specs/). The CAD concept includes project-specific geometry and is not an exact production-aircraft model.

## Source package

[Download the MATLAB analysis package](../../documents/Biplane_MATLAB.zip). The archive contains ten MATLAB functions and one representative NACA 0012 data file. Its internal checks are part of the model, not evidence of experimental validation. The available source review did not execute the complete program.
