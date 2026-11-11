---
shortTitle: Aerobatic Biplane
category: Aircraft & fluids
order: 2
featured: true
hero: /images/biplane-isometric-v2.webp
heroGallery:
- src: /images/biplane-isometric-v2.webp
  alt: Isometric view of my SolidWorks model of the two-seat aerobatic biplane, with landing gear and interplane struts.
- src: /images/biplane-matlab-geometry.webp
  alt: MATLAB top, front and side views of the biplane geometry, 17.75 ft long with a 20 ft span.
- src: /images/biplane-matlab-drag.webp
  alt: MATLAB plot of parasite, induced and total drag against airspeed, with 75 percent power thrust crossing total drag at 153 knots.
- src: /images/biplane-matlab-mission.webp
  alt: MATLAB mission profile of altitude and aircraft weight over an upset-recovery lesson flight.
role: CAD development and analysis adaptation
period: Fall 2026 · MATLAB analysis complete
tools:
- SolidWorks
- MATLAB
- Aircraft geometry
facts:
- value: 2 seats
  label: Concept configuration
- value: '7.2'
  label: Best lift-to-drag ratio, from the model
- value: 153 knots
  label: Modeled cruise at 75% power, 6,000 ft
figures:
- src: /images/biplane-drawing.webp
  alt: SolidWorks drawing sheet titled 2Pax Aerobatic BiPlane, with dimensioned top, front and side views in inches and an isometric view.
  caption: SolidWorks drawing of the current model, with top, front and side views dimensioned in inches. The 240-inch span matches the 20 ft span used in the MATLAB model.
- src: /images/biplane-side-v2.webp
  alt: Side view of the SolidWorks biplane model showing the fuselage, both wings, the tail, landing gear and interplane and cabane struts.
  caption: Side view of my SolidWorks model, now with landing gear and cabane struts. The geometry is still in development.
- src: /images/biplane-front-v2.webp
  alt: Front view of the SolidWorks biplane model showing the two wings, interplane struts, propeller and main landing gear.
  caption: Front view showing the biplane configuration and main gear. The CAD has not been structurally or aerodynamically validated.
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
summary: I developed a two-seat aerobatic biplane concept in SolidWorks and a modular MATLAB analysis of it. The model ties geometry to lift, drag, fuel use, power and trim, so I can see how one design choice affects the rest of the aircraft.
status: MATLAB analysis complete
concept: false
heroAlt: Actual SolidWorks views of my aircraft model in development. The model now includes landing gear and strut geometry, and is being refined alongside the analysis.
heroCaption: My SolidWorks model (top left) next to three outputs from my MATLAB analysis, the geometry the model works from, drag against thrust at 6,000 ft and the design mission profile. Click any panel for full size.
---

## Problem

On an aircraft, one design choice changes everything else. I wanted a model of a two-seat aerobatic biplane where I could change the geometry and see what happens to lift, drag, fuel use, power and trim. The design mission is an upset-recovery lesson flight.

The hard part is consistency. Every module has to work from the same dimensions, weights and mission assumptions.

## My role

I developed the SolidWorks geometry and adapted an earlier aircraft-analysis workflow in MATLAB for a biplane configuration. Span, total wing area, length and power are based on a reference aircraft, the [Aviat Pitts S-2C](https://aviataircraft.com/fusion_element/pitts-specs/). The CAD concept has its own geometry and is not a model of the production aircraft.

## What I built

The MATLAB model has four modules that share one set of inputs.

- **Geometry:** Two lifting wings, rounded tips, horizontal and vertical tails, and fuselage cross-sectional stations.
- **Aerodynamics:** Representative NACA 0012 geometry, finite-wing lift slopes, component parasite drag and a parabolic aircraft drag model.
- **Mission and performance:** Phase-by-phase fuel and weight accounting, wing-loading constraints, shaft-power requirements and preliminary takeoff and landing estimates.
- **Longitudinal trim:** An assumed mass budget, center-of-gravity movement, stick-fixed neutral point and elevator trim.

| Input | Value | Basis |
| --- | --- | --- |
| Wingspan | 20 ft | Aircraft-class reference |
| Total wing reference area | 127.5 ft² | Both wings combined; equal split assumed |
| Overall reference length | 17 ft 9 in | Aircraft-class reference |
| Sizing engine power | 260 hp | Aircraft-class reference |
| Wing gap | 45 in | Project geometry assumption |

Total wing reference area includes both wings, while each wing has its own chord and aspect ratio. Fuel burn changes weight and center of gravity during the mission, and the workflow carries those changes into the aerodynamic, power and trim calculations.

## Evidence

The finished model runs the full mission and passes all 12 of its internal checks.

- **Aerodynamics.** Best lift-to-drag ratio is 7.2. Minimum drag is 222 lb at 97 knots.
- **Cruise.** 75% power gives a 153-knot cruise at 6,000 ft.
- **Mission.** The upset-recovery lesson burns about 96 lb of fuel, taking the aircraft from 1,611 lb to 1,515 lb. It stays under the 1,625 lb aerobatic limit throughout.

The plots are in the figures below. You can also [download the MATLAB analysis package](../../documents/Biplane_MATLAB.zip), which contains ten MATLAB functions and one representative NACA 0012 data file.

These are model outputs from documented inputs. They are not measurements from a prototype, and the internal checks are not experimental validation.

## Status

The MATLAB analysis is complete as of Fall 2026. The SolidWorks geometry is still being refined alongside it.
