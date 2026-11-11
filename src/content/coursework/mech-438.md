---
code: MECH 438
title: Fundamentals of Aircraft Design
summary: Introduces aircraft configuration and performance through computational models and a small-aircraft design, construction and flight component.
category: Aircraft design
tier: featured
term: In progress · Fall 2026
skills: Aircraft sizing, performance and trim modeling in MATLAB, SolidWorks
keyEquations:
- Dynamic pressure and lift
- Preliminary drag polar
- Required power and steady rate of climb
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 2
documented: true
connection: Built a SolidWorks biplane concept and a MATLAB model of its lift, drag, fuel and trim.
relatedProjects:
- aerobatic-biplane
topics:
- aircraft design elements and theory
- computer modeling
- commercial and electric aircraft
- aircraft performance evaluation
- small-scale aircraft design build and fly
equations:
- title: Dynamic pressure and lift
  latex: q=\tfrac12\rho V^2,\quad L=qSC_L,\quad C_{L,\rm level}=\frac{W}{qS}
  note: '**Variables and units:** q [Pa]; rho [kg/m³]; V true airspeed [m/s]; S declared aerodynamic reference area [m²]; L, W [N]; CL [1].


    **Assumptions:** The last relation is steady unbanked level flight with lift balancing weight; aerobatics and turns require different load factors.


    **When and why used / application:** Calculate the lift coefficient needed at a stated mass and speed.'
- title: Preliminary drag polar
  latex: D=qSC_D,\quad C_D=C_{D0}+kC_L^2,\quad k\simeq\frac{1}{\pi eAR}
  note: '**Variables and units:** D [N]; q [Pa]; S [m²]; CD, CD0, k, e, AR [1]; AR=b²/S with b [m].


    **Assumptions:** Parabolic subsonic polar; isolated-wing lifting-line expression for k is an approximation, not a complete biplane model. Maintain the same area convention in coefficients and aspect ratio.


    **When and why used / application:** Explore drag sensitivity to speed and loading.'
- title: One-g stall-speed model
  latex: V_s=\sqrt{\frac{2W}{\rho SC_{L,\max}}}
  note: '**Variables and units:** Vs [m/s]; W [N]; rho [kg/m³]; S [m²]; CLmax [1] for the whole configuration/reference convention.


    **Assumptions:** Quasi-steady unbanked one-g condition; assumes an appropriate CLmax and no significant thrust vertical component. Manoeuvre stall speed differs with load factor.


    **When and why used / application:** Screen a loading/wing-area combination.'
- title: Required power and steady rate of climb
  latex: P_{\rm req}=DV,\quad P_{\rm avail}=\eta_pP_{\rm shaft},\quad\mathrm{ROC}=\frac{P_{\rm avail}-P_{\rm req}}{W}
  note: '**Variables and units:** P [W]; D, W [N]; V, ROC [m/s]; eta_p propeller efficiency [1].


    **Assumptions:** Steady climb at constant airspeed with thrust aligned approximately with flight path; use actual altitude-dependent available power and suitable drag. No acceleration-energy term.


    **When and why used / application:** Determine whether power surplus permits the scheduled climb.'
- title: Discrete mission fuel and mass accounting
  latex: m_{f,\rm trip}=\sum_i\dot m_{f, i}\Delta t_i,\quad m_{i+1}=m_i-\dot m_{f, i}\Delta t_i,\quad m_{f,\rm dispatch}=m_{f,\rm trip}+m_{f,\rm reserve}+m_{f,\rm contingency}
  note: '**Variables and units:** mf, m [kg]; mdotf [kg/s]; deltat [s]; phase i; use fuel volume only with an explicit density conversion.


    **Assumptions:** Phase-average rates assumed; reserve is retained rather than treated as an already-flown phase. This is a modeling budget, not a declaration of legal flight-planning compliance.


    **When and why used / application:** Preserve mass, fuel-capacity and reserve consistency across a mission.'
- title: Pitch trim and static margin
  latex: \sum M_{CG}=0,\qquad SM=\frac{x_{NP}-x_{CG}}{\bar c}
  note: '**Variables and units:** M [N·m]; xNP, xCG [m] measured aft from one common longitudinal datum; cbar mean aerodynamic chord [m]; SM [1].


    **Assumptions:** Trim requires forces and moments at the same flight condition. Positive SM under the stated aft-positive convention indicates longitudinal static stability in the applicable linear model; dynamic stability/control limits need separate checks.


    **When and why used / application:** Compare tail/CG configurations and solve a representative trim condition.'
figures:
- src: /images/mech-438-MECH_438_Illustrative_Drag_Power.png
  alt: Original illustrative drag/power curves for an assumed 7000 N aircraft, S=12 m², CD0=0.035, k=0.055, and density 1.225 kg/m³. Not the biplane MATLAB output or a validated aircraft design.
  caption: Original illustrative drag/power curves for an assumed 7000 N aircraft, S=12 m², CD0=0.035, k=0.055, and density 1.225 kg/m³. Not the biplane MATLAB output or a validated aircraft design.
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: NASA Glenn Research Center, Range Summary
  url: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/range-summary/
- title: NASA Glenn Research Center, Lift Equation
  url: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/lift-equation/
- title: NASA Glenn Research Center, Induced Drag Coefficient
  url: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/induced-drag-coefficient/
officialTitle: Fundamentals of Aircraft Dsgn
enrollmentStatus: In progress · Fall 2026
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_438_Fundamentals_of_Aircraft_Design/TECHNICAL_REFERENCE.md
---

## The course

Bucknell's aircraft design course: configuration, performance and computational modeling, with a small-aircraft design, build and fly component.

## What I did

- **Spitfire model.** A mathematical model and report of the Supermarine Spitfire.
- **Aerobatic biplane.** A two-seat aerobatic biplane concept in SolidWorks, sized from the span, wing area and power of an Aviat Pitts S-2C.
- **MATLAB analysis.** Adapted an earlier aircraft workflow into four modules that share one set of inputs: geometry, aerodynamics, mission fuel and performance, and longitudinal trim. Fuel burn updates the weight and center of gravity through every phase of the mission.

## What I learned

On an aircraft, one change moves everything else. The hard part was consistency: every module has to work from the same dimensions, weights and mission, or the answers stop agreeing with each other.

## Skills and tools

MATLAB · SolidWorks · Lift, drag and power estimates · Mission fuel accounting · Trim and static margin
