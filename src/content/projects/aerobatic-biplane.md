---
shortTitle: Aerobatic Biplane
category: Aircraft & fluids
order: 2
featured: true
hero: /images/biplane-isometric.webp
role: CAD development and analysis adaptation
period: Fall 2026 · MATLAB analysis complete
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
- src: /images/biplane-matlab-geometry.webp
  alt: MATLAB plot of the Bison UT-2 conceptual geometry in top, front and side views, with length 17.75 ft, span 20 ft, total wing area 127.5 square feet, wing gap 3.75 ft and stagger 0.5 ft.
  caption: Geometry the MATLAB model works from. Both wings, the tail surfaces and the fuselage share one set of reference dimensions.
- src: /images/biplane-matlab-aero.webp
  alt: Four MATLAB plots showing the NACA 0012 airfoil, the finite-biplane lift curve, the drag polar CD = 0.033 + 0.145 CL squared with the cruise point marked, and lift-to-drag ratio peaking at 7.2.
  caption: Aerodynamic model. The drag polar is CD = 0.033 + 0.145 CL², and the best lift-to-drag ratio is 7.2.
- src: /images/biplane-matlab-drag.webp
  alt: MATLAB plot of parasite, induced and total drag against true airspeed at 6,000 ft, with thrust available at 75 percent power crossing total drag at 153 knots.
  caption: Drag and 75%-power thrust at 6,000 ft. Minimum drag is 222 lb at 97 knots, and thrust meets drag at a 153-knot cruise.
- src: /images/biplane-matlab-mission.webp
  alt: MATLAB mission profile of altitude and aircraft weight against time for an upset-recovery lesson, with climb, cruise, a 15-minute aerobatic block between 2,500 and 5,000 ft, reserve loiter and landing.
  caption: Design mission, an upset-recovery lesson. Weight drops from 1,611 lb at takeoff to 1,515 lb at landing, staying under the 1,625 lb aerobatic limit.
- src: /images/biplane-matlab-stages.webp
  alt: Four MATLAB bar charts comparing lift coefficient, parasite and induced drag, required and available thrust-to-weight, and wing loading for each mission stage.
  caption: Each mission stage checked. Lift coefficient stays below CLmax = 1.26, and climb, cruise and loiter have thrust to spare. The aerobatic sequence needs more thrust than the engine gives, so it trades speed and altitude during maneuvers.

document: /documents/Biplane_Model_Notes.pdf
courses:
- mech-438
title: Aerobatic Biplane
summary: I am developing a two-person aerobatic biplane concept through SolidWorks modeling and a modular MATLAB analysis. The project connects geometry with lift, drag, fuel use, power requirements and longitudinal trim so I can examine how a design choice affects the rest of the aircraft.
status: MATLAB analysis complete
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

## Results

The finished MATLAB model runs the full mission and passes all 12 of its internal checks. Best lift-to-drag ratio is 7.2. Minimum drag is 222 lb at 97 knots, and 75% power gives a 153-knot cruise at 6,000 ft. The upset-recovery mission burns about 96 lb of fuel, taking the aircraft from 1,611 lb to 1,515 lb, under the 1,625 lb aerobatic limit throughout. The plots are under Design evidence below.

## Current stage and next steps

The MATLAB analysis is complete, with explicit assumptions and internal consistency checks, alongside a developing CAD model. Next, I will reconcile CAD geometry with the analytical model and replace estimated mass stations and surface areas with CAD properties.

The section polar is analytical teaching data. The calculations are preliminary estimates without wind-tunnel or flight-test validation. Structural substantiation, detailed biplane interference and dynamic flight behavior remain outside the current scope.

## Reference configuration

Span, total wing area, length and power are based on the [Aviat Pitts S-2C](https://aviataircraft.com/fusion_element/pitts-specs/). The CAD concept includes project-specific geometry and is not an exact production-aircraft model.

## Source package

[Download the MATLAB analysis package](../../documents/Biplane_MATLAB.zip). The archive contains ten MATLAB functions and one representative NACA 0012 data file. Its internal checks are part of the model, not evidence of experimental validation.
