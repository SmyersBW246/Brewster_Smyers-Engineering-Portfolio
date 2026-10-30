---
code: MECH 220
title: Mechanics
summary: Analyzes rigid-body equilibrium, structural force systems, friction, distributed loading and internal forces.
category: Design & mechanics
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- 2-D and 3-D rigid-body equilibrium
- trusses
- frames and machines
- friction
- distributed forces and equivalent systems
- internal loads
equations:
- title: Rigid-body equilibrium
  latex: \sum\mathbf F=\mathbf0,\quad\sum\mathbf M_O=\mathbf0
  note: '**Variables and units:** F: external force [N]; M_O: external moment about fixed point O [N·m].


    **Assumptions:** Static rigid body in an inertial frame. Use all external forces and couples once.


    **When and why used / application:** Solve mount reactions or truss joint forces.'
- title: Moment of a force
  latex: \mathbf M_O=\mathbf r_{O\to P}\times\mathbf F
  note: '**Variables and units:** r: vector from O to force application point P [m]; F [N]; M_O [N·m].


    **Assumptions:** Point-force representation; equivalent couple must accompany any transverse shift of the force.


    **When and why used / application:** Assess the leverage of an off-center load.'
- title: Distributed-load resultant
  latex: R=\int_a^b w(x)\,dx,\quad x_R=\frac{\int_a^b xw(x)\,dx}{R}
  note: '**Variables and units:** w: signed parallel load intensity [N/m]; x, a, b, x_R [m]; R [N].


    **Assumptions:** Parallel loading, nonzero R. This preserves reactions, not local bending distribution.


    **When and why used / application:** Replace distributed equipment weight for support equilibrium.'
- title: Static-friction bound
  latex: '|F_t|\leq\mu_sN,\quad N\geq0'
  note: '**Variables and units:** F_t: contact tangential force [N]; N: compressive normal force [N]; mu_s: static-friction coefficient [1].


    **Assumptions:** Dry, nonadhesive Coulomb contact. Equality only at impending slip.


    **When and why used / application:** Check whether a clamped or resting component can remain stationary.'
- title: Area centroid
  latex: \bar x=\frac{\int_A x\,dA}{A}
  note: '**Variables and units:** x and xbar [m]; dA, A [m²].


    **Assumptions:** Uniform thickness/density when using area centroid for weight location; otherwise use mass weighting.


    **When and why used / application:** Locate the resultant of uniform loading on a plate.'
figures:
- src: /images/mech-220-MECH_220_Illustrative_Beam_Reactions.png
  alt: 'Original explanatory diagram: ideal 0.80 m fixture beam, 300 N point load and computed support reactions. Representative calculation, not a student assignment or chair load test.'
  caption: 'Original explanatory diagram: ideal 0.80 m fixture beam, 300 N point load and computed support reactions. Representative calculation, not a student assignment or chair load test.'
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: Jacob Moore et al., Mechanics Map  |  Equilibrium Analysis for a Rigid Body
  url: https://mechanicsmap.org/websites/3_equilibrium_rigid_body/3-6_equilibrium_analysis_rigid_body/equilibrium_analysis_rigid_body.html
- title: Louis Bucciarelli, MIT OCW 1.050  |  Engineering Mechanics for Structures, chapters 2-3 and moment/centroid context
  url: https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/pages/readings/
- title: OpenStax/Rice University | University Physics Volume 1,6.2 Friction
  url: https://openstax.org/books/university-physics-volume-1/pages/6-2-friction
officialTitle: Mechanics
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MECH_220_Mechanics/TECHNICAL_REFERENCE.md
---

## Course overview

Mechanics turns a physical assembly into a model that can be checked. Before calculating, the model identifies the body, the external loads, the supports, and the dimensions that control the load path. That approach connects a sketch or CAD model to meaningful reactions and internal forces. A support that looks fixed in a drawing may actually behave like a pin, while a force applied off-center also produces a moment. The analysis treats these modeling choices as part of the engineering, because a correct calculation based on the wrong support condition still gives an unreliable answer. This foundation is relevant to the brackets, frames, fixtures, and outdoor structures used in mechanical design.

**Bucknell scope:** Rigid-body equilibrium, structural forces, friction, distributed loading and internal loads. The official title is **Mechanics**; statics describes its subject area. [Bucknell catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **Free-body diagrams:** Isolating a body makes the load path explicit. Replacing a support with its permitted reactions prevents hidden constraints from entering the calculation.
- **Force and moment equilibrium:** Preventing translation and preventing rotation are separate requirements. A balanced force total alone does not establish equilibrium.
- **Equivalent loading:** A distributed load can be replaced by a resultant at its load-weighted location when calculating external reactions.
- **Structural idealization:** Pin-connected, two-force truss members differ from bending-carrying frames. The joint model determines which internal actions are possible.
- **Contact and friction:** Static friction supplies the force needed to resist sliding up to a limit; it does not automatically act at that limit.

These explanations are standard engineering content consistent with the documented subject, rather than a reconstruction of a particular assignment.

## Equations that connect geometry to loads

$$
\sum \mathbf F=\mathbf0,\qquad \sum \mathbf M_O=\mathbf0
$$

Forces are measured in newtons and moments in newton-metres. The chosen point $O$ changes the moment calculation, but does not change the physical reactions.

$$
\mathbf M_O=\mathbf r\times\mathbf F,\qquad
R=\int w(x)\,dx
$$

The position vector $\mathbf r$ locates the force relative to $O$; $w$ is load per length. These expressions make force placement as important as force magnitude.

## Representative engineering problem

Consider an ideal, simply supported fixture beam spanning 0.80 m, with a 300 N downward load 0.30 m from its left support. Taking moments about that support gives a right reaction of 112.5 N; vertical equilibrium then gives a left reaction of 187.5 N. Both are upward and add to the applied load. The maximum bending-moment magnitude is 56.25 N·m at the load location. This original illustrative example assumes negligible beam weight and ideal supports; it is not one of student assignments.

Other common problems include finding the tension in a support cable, determining axial forces in a truss, and checking whether a loaded object slides or tips first. Each begins with a different physical model, even when the equilibrium equations look similar.

## Connection to student work and problem solving

My outdoor landmark chair is an independent design-and-build project documented separately in my portfolio. Its braced frame makes load paths, support reactions, and resistance to overturning relevant questions. It provides a practical connection to equilibrium without being a MECH 220 assignment. A simplified statics model does not establish its load rating.

For analytical work, a useful check is to draw the reactions back onto the original geometry and test the moment balance about a second point. Negative reaction values require interpretation: they can indicate an assumed direction is reversed or that a contact would lift away.

## Engineering skills and applications

The technical foundation includes free-body diagrams, vector resolution, support modeling, resultant loads, member-force analysis, and equilibrium checks. Automotive component mounting, manufacturing fixtures, and robotic support frames all need this reasoning before a detailed stress calculation is useful. A free-body diagram also gives a simulation model a traceable starting point: loads and constraints should come from mechanics, rather than from convenient software selections.
