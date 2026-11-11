---
code: MECH 313
title: Fluid Dynamics
summary: Develops conservation-based fluid models, dimensional reasoning and analysis of inviscid and viscous internal and external flows.
category: Fluids & energy
tier: featured
term: In progress · Fall 2026
skills: Control volumes, buoyancy, similarity scaling, test design
keyEquations:
- Constant-density hydrostatics and buoyancy
- Ideal Bernoulli equation
- Reynolds number and drag estimate
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 3
documented: true
connection: Leading a team designing an underwater vehicle hull and the water tunnel to test it.
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
enrollmentStatus: In progress · Fall 2026
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_313_Fluid_Dynamics/TECHNICAL_REFERENCE.md
---

## The course

Bucknell's fluid dynamics course: control-volume conservation laws, dimensional analysis, and inviscid and viscous flows, both internal and external.

## What I did

- **Team lead.** I lead a team designing the hull of an unmanned underwater vehicle and a small water tunnel to test it in. I own the tunnel design.
- **Hull concept.** Compared torpedo hulls, multi-thruster vehicles and gliders, then proposed a 1.10 m by 0.20 m torpedo hull: a rounded nose, a cylindrical middle for equipment and a long tapered tail to delay flow separation.
- **Hand calculations.** About 267 N of buoyancy and 49 kPa of gauge pressure at 5 m depth, with the center of gravity below the center of buoyancy so the hull rights itself.
- **Water tunnel.** An acrylic open-channel flume in SolidWorks, no longer than 400 mm and holding under 2 L of water, fed by a variable-speed pump. We will test a model no longer than 100 mm and scale the results up.

Status: design phase, Fall 2026. No tunnel test results yet.

## What I learned

A small model only predicts the full-size hull if the scaling holds, so the tunnel is built around what we need to see: where the flow stays attached to the hull and where the wake starts.

## Skills and tools

SolidWorks · Hydrostatics and buoyancy · Similarity scaling · Test rig design · Team leadership
