---
code: MECH 438
title: Fundamentals of Aircraft Design
summary: Introduces aircraft configuration and performance through computational models and a small-aircraft design, construction and flight component.
category: Aircraft design
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 2
documented: true
connection: My course work includes Spitfire and aerobatic-biplane mathematical models and reports. The biplane connects my SolidWorks geometry with a developing MATLAB analysis.
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
enrollmentStatus: Course status requires confirmation
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_438_Fundamentals_of_Aircraft_Design/TECHNICAL_REFERENCE.md
---

## Course overview

My aircraft-design work includes a Supermarine Spitfire mathematical model and report, followed by a two-person aerobatic biplane model and report. I connect aircraft geometry to mass, aerodynamic forces, propulsion, and the mission the airplane is expected to perform. Changing the configuration means more than changing dimensions: reference area, wing loading, fuel accounting, and available power must remain consistent across the calculation. The supplied biplane files bring these relationships together in MATLAB, alongside CAD development of the concept. I treat their outputs as model predictions that depend on assumptions and verification. A useful aircraft study should explain both why a configuration may work and which uncertainties still prevent it from being considered a validated design.

**Bucknell scope:** Aircraft configuration and performance, computational modeling, and a small-aircraft design/build/fly component. The catalog's official abbreviated title is **Fundamentals of Aircraft Dsgn**; the page heading expands it for readability. [2025-2026 catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **Coupled sizing:** Payload, fuel, structure, and propulsion contribute to total mass, which then changes the lift and power required.
- **Aerodynamic reference conventions:** A coefficient is meaningful only with its declared area and flight condition. A biplane's interference and geometry require care when using simplified finite-wing models.
- **Lift and speed:** Lift depends on dynamic pressure and coefficient. A stall estimate also requires an appropriate maximum lift coefficient and loading condition.
- **Drag and power:** Both parasite and lift-related drag affect required propulsive power. Engine shaft power must be converted through propeller efficiency before comparison.
- **Mission and trim:** Fuel changes mass through the mission, while force balance and pitching-moment balance both matter at each flight condition.

These are standard technical principles; the evidence supports computational and CAD work, not a built or flown aircraft.

## Core equations

$$
L=\tfrac12\rho V^2SC_L,\qquad
C_D\simeq C_{D0}+kC_L^2,\qquad
P_{\rm req}=DV
$$

Lift and drag are in newtons, airspeed in m/s, area in m², and power in watts. Lift and drag coefficients are dimensionless. The simplified drag polar requires a suitable model for (k); an isolated-wing formula is not automatic validation for a biplane.

## My models and development evidence

The supplied MATLAB package contains aircraft sizing, phase-by-phase mission fuel accounting, wing and tail geometry, lift, drag, and longitudinal trim calculations. It also separates protected reserve from trip burn and includes explicit checks of fuel capacity, loading, lift, and power. The current wrapper describes a local sortie with 30 nautical miles outbound and return, 15 minutes of aerobatics, and a 3,000 ft operating altitude. These are modeling assumptions, not flight-test results.

The original development problem was keeping lift and fuel sufficient after converting the earlier aircraft model. The supplied revision documents a technical response through phase-specific fuel rates and weight updates. Final output verification remains part of the work in progress, so earlier performance summaries should not be treated as results of the current version. A calibration adjustment in the code also needs to remain identified as calibration, rather than independent validation.

CAD development adds another consistency question: airfoil coordinates, station planes, guide curves, and tail location must describe the same geometry used by the aerodynamic model. The supplied exterior views show the concept, but do not prove every geometric constraint is solved. The main biplane project brings the code, assumptions, and revisions together.

## Representative problems and applications

For an original illustrative aircraft with weight 7,000 N, area 12 m², speed 45 m/s, and density 1.225 kg/m³, level flight requires (C_L=0.470). With an assumed (C_D=0.047), drag is approximately 700 N and required propulsive power is 31.5 kW. This calculation is separate from my biplane model and does not establish stall margin, structural adequacy, or achievable engine power.

Other common tasks include estimating stall speed, comparing phase fuel budgets, checking excess power for climb, and solving trim at a stated center-of-gravity position. These methods support preliminary aircraft configuration studies, small UAV sizing, and propulsion matching.

## Technical skills and next evidence

The documented work connects MATLAB modeling, configuration definition, mass/fuel accounting, aerodynamic calculations, CAD reference geometry, and explicit constraint checking. The strongest next addition is a final execution log with a checked output table and an explanation of which assumptions I changed or verified myself.
