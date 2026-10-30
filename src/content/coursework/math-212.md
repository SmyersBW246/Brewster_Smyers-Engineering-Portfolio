---
code: MATH 212
title: Differential Equations
summary: Develops methods for ordinary differential equations, coupled linear systems and Laplace transforms with applications.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- ordinary differential equation solution methods
- linear differential equation systems
- Laplace transform
- applications
- selected topics
equations:
- title: Stable first-order step response
  latex: \tau\dot y+y=u_0,\qquad y(t)=u_0+[y(0)-u_0]e^{-t/\tau}
  note: '**Variables and units:** tau: time constant [s]; t: time [s]; y, u0: same response units; dot y:[y]/s.


    **Assumptions:** Constant input u0, constant tau>0, and initial-value model valid for t≥0.


    **When and why:** Predict a sensor output or normalized thermal response.'
- title: Mass-spring-damper equation
  latex: m\ddot x+c\dot x+kx=F(t)
  note: '**Variables and units:** m: mass [kg]; c: damping [N·s/m]; k: stiffness [N/m]; x: displacement [m]; F: force [N].


    **Assumptions:** Linear spring and viscous damper; single translational degree of freedom; motion about equilibrium.


    **When and why:** Study an idealized mechanical vibration response.'
- title: Natural frequency and damping ratio
  latex: \omega_n=\sqrt{k/m},\qquad \zeta=\frac{c}{2\sqrt{km}}
  note: '**Variables and units:** omega_n: undamped natural angular frequency [rad/s]; zeta: dimensionless damping ratio; other terms as E2.


    **Assumptions:** m>0, k>0; linear constant coefficients.


    **When and why:** Classify an ideal oscillator before computing its motion.'
- title: Laplace derivative rule
  latex: \mathcal L\{\dot y\}=sY(s)-y(0)
  note: '**Variables and units:** Y: Laplace transform of y, units [y]·s for time in seconds; s: transform variable [s^-1].


    **Assumptions:** Unilateral transform; required growth/regularity conditions hold.


    **When and why:** Carry an initial value into an algebraic transformed model.'
- title: Linear state model
  latex: \dot{\mathbf z}=A\mathbf z+B\mathbf u,\qquad \mathbf z(t)=e^{At}\mathbf z(0)\ \text{if}\ \mathbf u=0
  note: '**Variables and units:** z: defined state vector; u: input vector; A, B: coefficients with units matching each state equation. If all z share units, A entries have s^-1.


    **Assumptions:** Constant matrices and a linear model; exponential expression shown only for zero input.


    **When and why:** Organize coupled first-order equations.'
figures:
- src: /images/math-212-MATH_212_illustrative_cooling_transient.png
  alt: Illustrative first-order cooling model:80°C initially,20°C environment,tau=30 s. At30 s the prediction is42.073°C. Assumed model,not measured student thermal data.
  caption: Illustrative first-order cooling model:80°C initially,20°C environment,tau=30 s. At30 s the prediction is42.073°C. Assumed model,not measured student thermal data.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: 'Arthur Mattuck, MIT OCW 18.03: Input-response models'
  url: https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/6ac0b540ff46236e2df89da85acd6685_MIT18_03S10_ir.pdf
- title: 'Arthur Mattuck, MIT OCW 18.03: Linear Differential Operators'
  url: https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/3222ee53a6cb307dec118bf9311c522d_MIT18_03S10_o.pdf
- title: 'Arthur Mattuck, MIT OCW 18.03: Laplace transform'
  url: https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/f8dba7fcfcc4c745e1ff88c6658b17b7_MIT18_03S10_lt.pdf
officialTitle: Differential Equations
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_212_Differential_Equations/TECHNICAL_REFERENCE.md
---

## Overview

Differential equations turn a rate relationship into a prediction of how a system evolves. A cooling component, a vibrating assembly and a coupled set of moving parts all require more than a static balance. The mathematical model must describe the governing rates and include enough initial information to select the relevant response. The focus is on understanding what a solution represents: the effect of the input, the transient created by the initial state, and the long-term behavior allowed by the model. These ideas support the simulation and mechanical analysis used in engineering practice. A useful computational result should therefore be accompanied by the equation, parameter units, initial conditions and a check against a known limit or an independent solution.

## Core ideas

An initial-value problem combines a governing equation with a starting state. The same physical system can have different motion histories when its initial displacement or velocity changes. Checking the solution against both the equation and its initial conditions is therefore a necessary step.

First-order models describe responses controlled by a single dominant storage and transfer mechanism. A time constant provides an interpretable measure of response speed, while the assumed forcing determines the eventual equilibrium.

Second-order linear models represent oscillatory systems with inertia, damping and stiffness. The characteristic roots distinguish decaying oscillation, nonoscillatory decay and instability. A forced response also needs a particular solution; solving only the homogeneous equation can omit the continuing effect of the input.

Laplace transforms convert suitable linear initial-value problems into algebraic equations, and state-space representations organize coupled variables. Both methods preserve the original physical question only when coefficients, signs, inputs and initial conditions are carried consistently through the calculation.

## Representative problem-solving

Representative tasks include predicting an assumed cooling curve, classifying a damped mass-spring response, and solving two coupled first-order equations. The supporting reference also shows a simple Laplace-transform calculation. These examples demonstrate solution and verification methods without claiming they were assigned or tested in a particular class.

For an illustrative first-order thermal response starting at eighty degrees Celsius in a twenty-degree environment with a thirty-second time constant, the model predicts about forty-two point one degrees Celsius after thirty seconds. The plotted response approaches the environment monotonically. It illustrates the equation's behavior; it is not a measured thermal experiment.

## Engineering applications

In vehicle dynamics, linear differential equations provide a starting point for studying suspension vibration and damping. In mechanical product development, transient models describe how a temperature, sensor or actuator response approaches an operating state. In robotics, coupled equations organize several states and reveal whether a predicted response decays or grows, before a more detailed model is introduced.

## Technical capabilities and evidence

The capabilities represented are formulating initial-value problems, classifying linear responses, separating homogeneous and forced terms, using transforms, and converting a higher-order equation into a first-order system. An authentic addition would be one original transient model with code, a plotted result and a documented hand-check. Available records do not yet establish a particular course assignment or a personal modeling error that was successfully corrected.

## Selected equations

**Stable first-order step response.**

$$
\tau\dot y+y=u_0,\qquad y(t)=u_0+[y(0)-u_0]e^{-t/\tau}
$$

tau: time constant [s]; t: time [s]; y, u0: same response units; dot y:[y]/s.

**Mass-spring-damper equation.**

$$
m\ddot x+c\dot x+kx=F(t)
$$

m: mass [kg]; c: damping [N·s/m]; k: stiffness [N/m]; x: displacement [m]; F: force [N].

**Natural frequency and damping ratio.**

$$
\omega_n=\sqrt{k/m},\qquad \zeta=\frac{c}{2\sqrt{km}}
$$

omega_n: undamped natural angular frequency [rad/s]; zeta: dimensionless damping ratio; other terms as E2.

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 212, Differential Equations**, Department of Mathematics & Statistics. Brief description: Develops ordinary differential-equation methods, coupled linear systems and Laplace transforms with applications. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
