---
code: MECH 313
title: Fluid Dynamics
summary: Develops conservation-based fluid models, dimensional reasoning and analysis of inviscid and viscous internal and external flows.
category: Fluids & energy
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 3
documented: true
connection: My individual AUV study applies literature review, hull idealization, hydrostatics and buoyancy reasoning. The team phase is in progress in Fall 2026.
relatedProjects:
- autonomous-underwater-vehicle
topics:
- integral control-volume analysis
- differential control-volume analysis
- conservation equations
- dimensional analysis
- incompressible inviscid flows
- internal viscous flows
equations:
- title: Constant-density hydrostatics and buoyancy
  latex: p_g=\rho gh,\quad F_B=\rho gV_{\rm disp},\quad m_{\rm neutral}=\rho V_{\rm disp}
  note: '**Variables and units:** pg [Pa]; rho [kg/m³]; g [m/s²]; h depth [m]; FB [N]; Vdisp [m³]; mneutral [kg].


    **Assumptions:** Stationary liquid; constant rho and g; gauge pressure measured relative to free-surface pressure. Neutral buoyancy equates total mass weight to buoyancy, not a stability guarantee.


    **When and why used / application:** Pressure and ballast estimate for an immersed sealed hull.'
- title: Integral mass conservation
  latex: \frac{d}{dt}\int_{CV}\rho\,dV+\int_{CS}\rho\mathbf u\cdot\mathbf n\,dA=0
  note: '**Variables and units:** rho [kg/m³]; u [m/s]; outward unit normal n [1]; dV [m³]; dA [m²]; each term [kg/s].


    **Assumptions:** Fixed control volume; for steady incompressible one-inlet/one-outlet flow this reduces to A1U1=A2U2.


    **When and why used / application:** Relate average duct velocities to flow rate.'
- title: Integral linear momentum conservation
  latex: \sum\mathbf F_{\rm ext}=\frac{d}{dt}\int_{CV}\rho\mathbf u\,dV+\int_{CS}\rho\mathbf u(\mathbf u\cdot\mathbf n)\,dA
  note: '**Variables and units:** External forces [N]; rho, u, n, dV, dA as E2; momentum-rate terms [kg·m/s²].


    **Assumptions:** Fixed control volume in an inertial frame. Include pressure, weight and wall/support forces consistently; selected plug-flow examples neglect profile correction.


    **When and why used / application:** Find nozzle force or fluid reaction in a bend.'
- title: Ideal Bernoulli equation
  latex: p+\tfrac12\rho U^2+\rho gz=\text{constant along a streamline}
  note: '**Variables and units:** p [Pa]; rho [kg/m³]; U [m/s]; z [m]; each term [Pa]=[J/m³].


    **Assumptions:** Steady, incompressible, negligibly viscous flow; no pump/turbine between points; common streamline unless irrotational extension justified.


    **When and why used / application:** Estimate an ideal contraction pressure difference.'
- title: Reynolds number and drag estimate
  latex: \mathrm{Re}=\frac{\rho UL}{\mu},\qquad D=\tfrac12\rho U^2C_DA_{\rm ref}
  note: '**Variables and units:** Re, CD [1]; rho [kg/m³]; U [m/s]; L [m]; mu [Pa·s]; D [N]; Aref [m²].


    **Assumptions:** Declare L and Aref. CD must be appropriate to geometry and actual flow conditions; a coefficient from a different area convention cannot be copied without conversion.


    **When and why used / application:** Define a preliminary external-drag model and its data needs.'
- title: Darcy-Weisbach pipe-friction head loss
  latex: h_f=f_D\frac{L_p}{D_p}\frac{U^2}{2g},\qquad\Delta p_f=\rho gh_f
  note: '**Variables and units:** hf [m]; fD Darcy friction factor [1]; Lp, Dp [m]; U mean pipe speed [m/s]; g [m/s²]; deltapf [Pa].


    **Assumptions:** Steady fully developed circular-pipe flow with a suitable friction-factor correlation; excludes separate minor losses. Darcy factor is four times Fanning factor.


    **When and why used / application:** Estimate pump pressure needed to overcome straight-pipe friction.'
figures:
- src: /images/mech-313-MECH_313_Illustrative_Pressure_Depth.png
  alt: Original illustrative freshwater gauge-pressure profile with density 1000 kg/m³ and g=9.81 m/s², giving 49.05 kPa at 5 m. A hydrostatic model, not measured AUV test data.
  caption: Original illustrative freshwater gauge-pressure profile with density 1000 kg/m³ and g=9.81 m/s², giving 49.05 kPa at 5 m. A hydrostatic model, not measured AUV test data.
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: OpenStax/Rice University, University Physics Volume1,14.4 Archimedes Principle and Buoyancy
  url: https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy
- title: MIT Unified Engineering, Fluid Mechanics F6 Control Volume, Mass Conservation
  url: https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/pages/fluid-mechanics/
- title: MIT OCW1.060, lecture9 Reynolds Transport Theorem
  url: https://ocw.mit.edu/courses/1-060-engineering-mechanics-ii-spring-2006/resources/lecture9/
officialTitle: Fluid Dynamics
enrollmentStatus: In progress · Fall 2026, as documented
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_313_Fluid_Dynamics/TECHNICAL_REFERENCE.md
---

## Course overview

I connect fluid mechanics to the design of an underwater vehicle, where pressure, buoyancy, motion, and available equipment space all interact. My individual Phase 1 work included a literature review, a preliminary hull concept, hydrostatics calculations, and a qualitative prediction of the flow. The broader subject gives me a framework for extending that early design: conservation of mass constrains flow rates, momentum relates flow changes to forces, and energy balances distinguish useful pressure changes from losses. I separate a physically reasonable prediction from a validated result. A streamlined shape may be a useful starting point, but propulsion demand and maneuvering performance need supporting calculations or tests. The supplied portfolio identifies the project as continuing into a team phase in Fall 2026.

**Bucknell scope:** Conservation-based control-volume models, dimensional analysis, inviscid flow and viscous internal/external flow. [2025-2026 catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **Hydrostatics and buoyancy:** Pressure increases with depth in a stationary liquid. The displaced fluid determines the upward buoyant force, while the relative locations of mass and buoyancy affect restoring moments.
- **Conservation of mass:** A flow model must account for material crossing its boundary and any accumulation inside it.
- **Momentum balance:** Pressure, weight, and other external forces produce changes in the fluid's momentum. A control-volume diagram makes the force directions explicit.
- **Energy and losses:** Bernoulli's ideal relation is useful within its assumptions. Viscous losses and pumps need additional terms rather than an unexplained pressure discrepancy.
- **Similarity and viscous effects:** Reynolds number compares inertia and viscosity. Matching a shape alone does not guarantee that a small model reproduces full-scale flow behavior.

These technical principles extend beyond the preliminary personal work below.

## Core equations

$$
p_g=\rho gh,\qquad F_B=\rho gV_{\rm disp},\qquad
\mathrm{Re}=\frac{\rho UL}{\mu}
$$

Gauge pressure (p_g) is in pascals and buoyant force (F_B) in newtons. Density (\rho) is in kg/m³; submerged volume (V_{\rm disp}) is in m³. Reynolds number is dimensionless, with speed (U), characteristic length (L), and dynamic viscosity (\mu) defined for the modeled flow.

## My preliminary AUV work

I compared streamlined underwater vehicles, multi-thruster concepts, and underwater gliders before proposing a symmetric hull 1.10 m long and 0.20 m in maximum diameter. My portfolio records an idealized displaced volume of 27.2 L in fresh water. At a density of 1,000 kg/m³, that corresponds to approximately 267 N of buoyant force and a 27.2 kg total mass for neutral buoyancy.

The preliminary report also lists 49.1 kPa external gauge pressure at 5 m depth and a longitudinal center of buoyancy 0.501 m aft of the nose. The pressure and buoyancy arithmetic is consistent with the stated assumptions. The original geometry integration is still needed to verify volume and buoyancy-center location. These are reported preliminary analytical quantities, rather than measurements from a completed vehicle.

I proposed keeping the center of gravity below the center of buoyancy to provide a passive restoring tendency. That is a design intention, not proof of stability in every direction. The supplied flow figure is a qualitative prediction, separate from CFD or an experimental measurement.

## Representative problems and technical judgment

Common problems include determining external pressure at depth, finding the ballast needed for neutral buoyancy, estimating the pressure change through a contraction, and calculating thrust from a changing flow momentum. For an illustrative level pipe contraction carrying 0.001 m³/s, areas of 0.001 m² and 0.0005 m² give average speeds of 1 and 2 m/s. An ideal incompressible energy balance predicts a 1.50 kPa pressure drop before losses. This example is separate from my AUV calculations.

The documented project tradeoff is between a compact, efficient shape and enough space and maneuverability for equipment. No specific failed test or completed troubleshooting sequence is established by the available records. The next useful evidence is a checked geometry worksheet and the team-phase results, when available.

## Engineering skills and applications

The supported personal work includes literature comparison, hull idealization, hydrostatic calculation, buoyancy reasoning, and communicating a qualitative flow prediction. The wider subject adds control-volume balances and dimensionless analysis. Underwater robotics uses these methods for buoyancy and propulsion estimates; automotive ducts use them for pressure and flow management; pumps and piping use them to connect required flow with energy demand.

**Visuals:** Use the two authentic Phase 1 figures with their preliminary captions, and link to the main AUV project for the full case study.
