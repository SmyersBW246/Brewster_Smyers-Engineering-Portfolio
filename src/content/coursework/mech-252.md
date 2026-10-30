---
code: MECH 252
title: Dynamics
summary: Studies planar rigid-body motion using kinematics, force, energy and momentum approaches, including vibration and computational solutions.
category: Design & mechanics
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- planar rigid-body kinematics and kinetics
- absolute and relative displacement velocity acceleration
- force methods
- energy methods
- momentum methods
- mechanical vibrations
equations:
- title: Planar Newton-Euler equations
  latex: \sum\mathbf F=m\mathbf a_G,\qquad\sum M_G=I_G\alpha
  note: '**Variables and units:** F [N]; m [kg]; a_G [m/s²]; M_G [N·m]; I_G [kg·m²]; alpha [rad/s²].


    **Assumptions:** Constant mass and inertia; inertial frame; planar rigid body. Do not substitute an arbitrary moving pivot into the simple moment equation.


    **When and why used / application:** Calculate drive torque and support forces.'
- title: Rigid-body relative motion
  latex: \mathbf v_B=\mathbf v_A+\boldsymbol\omega\times\mathbf r_{B/A},\quad\mathbf a_B=\mathbf a_A+\boldsymbol\alpha\times\mathbf r_{B/A}+\boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r_{B/A})
  note: '**Variables and units:** v [m/s]; a [m/s²]; r [m]; omega [rad/s]; alpha [rad/s²]; A and B are fixed material points on one rigid body.


    **Assumptions:** Inertial vector description for two points fixed in a rigid body; no relative sliding term.


    **When and why used / application:** Linkage endpoint velocity and acceleration.'
- title: Rigid-body work and kinetic energy
  latex: T=\frac12mv_G^2+\frac12I_G\omega^2,\qquad T_2-T_1=W_{1\to2}
  note: '**Variables and units:** T, W [J]; m [kg]; v_G [m/s]; I_G [kg·m²]; omega [rad/s].


    **Assumptions:** Planar rigid body; W is net work of all relevant external forces/couples, including gravity if not separately represented as potential energy.


    **When and why used / application:** Estimate flywheel speed after known drive work.'
- title: Linear impulse-momentum
  latex: \int_{t_1}^{t_2}\sum\mathbf F\,dt=m(\mathbf v_{G,2}-\mathbf v_{G,1})
  note: '**Variables and units:** Force [N]; time [s]; impulse [N·s]; m [kg]; velocity [m/s].


    **Assumptions:** Constant mass and inertial frame. Include all external impulses significant over the interval.


    **When and why used / application:** Estimate average end-stop force from a known stopping time.'
- title: Linear mass-spring-damper
  latex: m\ddot x+c\dot x+kx=F(t),\quad\omega_n=\sqrt{k/m},\quad\zeta=\frac{c}{2\sqrt{km}}
  note: '**Variables and units:** x [m] measured from static equilibrium; m [kg]; c [N·s/m]; k [N/m]; F [N]; omega_n [rad/s]; zeta [1].


    **Assumptions:** Linear one-degree-of-freedom model; viscous damping; constant parameters.


    **When and why used / application:** Estimate vibration response of a sensor support or machine mount.'
figures:
- src: /images/mech-252-MECH_252_Illustrative_Damped_Response.png
  alt: Original illustrative linear vibration response for m=0.50 kg, k=200 N/m and c=1.0 N·s/m, released from 10 mm with zero initial velocity. Analytical model, not measured student data.
  caption: Original illustrative linear vibration response for m=0.50 kg, k=200 N/m and c=1.0 N·s/m, released from 10 mm with zero initial velocity. Analytical model, not measured student data.
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: MIT OCW 2.003SC  |  Velocity, Acceleration, and Rotational Motion
  url: https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/velocity-acceleration-and-rotational-motion/
- title: MIT OCW 2.003SC  |  Finding Equations of Motion for Rigid Body Rotation
  url: https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/finding-equations-of-motion-for-rigid-body-rotation/
- title: OpenStax/Rice University  |  University Physics Volume 1, Rolling Motion
  url: https://openstax.org/books/university-physics-volume-1/pages/11-1-rolling-motion
officialTitle: Dynamics
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MECH_252_Dynamics/TECHNICAL_REFERENCE.md
---

## Course overview

Dynamics connects how a mechanism moves with the forces and energy that make that motion possible. Geometry determines the relationships among moving parts, while mass and rotational inertia determine the effort needed to accelerate them. The analysis separates those questions before choosing a solution method: kinematics describes motion, force and moment balances explain acceleration, and energy or momentum can simplify selected parts of a problem. This framework is relevant to vehicle components, rotating machinery, and robotic mechanisms. It also provides a way to question a simulation result: the motion should respect the constraints, the energy changes should have a physical cause, and the calculated forces should match the assumed model.

**Bucknell scope:** Planar rigid-body motion, force, energy and momentum methods, vibration and computational solutions. [2025-2026 catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **Kinematic constraints:** Connected points cannot move independently. A rigid link preserves separation, while a rolling constraint applies only when slipping is absent.
- **Translation and rotation:** Force governs center-of-mass acceleration; moment about the center of mass governs planar angular acceleration.
- **Work and energy:** A mechanism stores energy in translation, rotation, springs, and height. Dissipation must be accounted for explicitly.
- **Impulse and momentum:** Short-duration force histories can be analyzed through their accumulated effect, especially when detailed acceleration is unnecessary.
- **Vibration:** Mass, stiffness, and damping control oscillatory response. A steady load estimate alone cannot describe resonance.

These are standard engineering principles selected to explain the documented subject, rather than claims about particular class exercises.

## Core equations

$$
\sum\mathbf F=m\mathbf a_G,\qquad\sum M_G=I_G\alpha
$$

Here $m$ is mass in kilograms, $\mathbf a_G$ is center-of-mass acceleration in m/s², $I_G$ is mass moment of inertia in kg·m², and $\alpha$ is angular acceleration in rad/s². The rotational form shown applies to planar motion.

$$
T=\frac12mv_G^2+\frac12I_G\omega^2,\qquad
\omega_n=\sqrt{\frac{k}{m}}
$$

Kinetic energy $T$ is measured in joules. The undamped natural angular frequency $\omega_n$ is in rad/s for a linear, single-degree-of-freedom model with stiffness $k$ in N/m.

## Representative problem

An ideal solid disk has mass 4.0 kg and radius 0.15 m. A motor applies 1.2 N·m while a constant resisting torque is 0.2 N·m. Its inertia is 0.045 kg·m², so the net torque produces 22.2 rad/s² of angular acceleration. Starting from rest, the disk reaches 44.4 rad/s after two seconds. This original illustrative calculation assumes constant torques, a fixed axis, and negligible flexibility; it is not a measured result from student work.

Other common tasks include finding a linkage endpoint's velocity, estimating an impact impulse, and predicting the response of a spring-supported assembly. Choosing the method depends on the requested output: energy is efficient for a speed change, but support forces usually need a force balance.

## Practical connections and problem solving

My independent backyard ski-jump project involved adjustments to jump angle and approach speed, as documented in my earlier portfolio. That experience provides a physical connection to trajectories and energy, but the supplied records do not contain instrumented motion data or establish it as a Dynamics assignment. The project page documents the actual build and iterations.

For a calculated mechanism, a useful check is that velocity and acceleration directions agree with the geometry before solving the force equations. It is also necessary to distinguish mass moment of inertia from area moment of inertia: they share similar notation but describe different quantities. These are technical checking methods, not a claim that a specific documented mistake occurred in this course.

## Engineering skills and applications

The subject develops a foundation for constrained-motion analysis, rotational inertia calculations, force-and-moment equations, energy accounting, impulse analysis, and simple vibration models. Vehicle drivetrains use these tools to connect torque, acceleration, and rotating mass. Robotics uses them to estimate actuator demand through a motion cycle. Manufacturing equipment uses vibration models to examine whether operating speeds may excite excessive motion.
