---
code: PHYS 211
title: Classical and Modern Physics I
summary: Surveys mechanics, gravity, relativity, thermodynamics and statistical mechanics in the first introductory physics course.
category: Engineering foundations
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/physicsandastronomy/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- Newtonian mechanics
- relativity
- thermodynamics
- statistical mechanics
- gravity
equations:
- title: Constant-mass Newtonian motion
  latex: \sum\mathbf F=m\mathbf a
  note: '**Variables and units:** F external force vectors [N]; m mass [kg]; a acceleration vector [m/s^2].


    **Assumptions and limitations:** Constant mass; inertial frame; nonrelativistic classical body model.


    **Engineering use:** Estimate net force for a required acceleration or deceleration.

    **Reference:** '
- title: Work-energy relation
  latex: W_{net}=\Delta K=\frac12m(v_2^2-v_1^2)
  note: '**Variables and units:** W_net net work [J]; K translational kinetic energy [J]; m [kg]; v_1,v_2 speeds [m/s].


    **Assumptions and limitations:** Classical constant-mass particle model; force work includes all relevant contributors. For constant collinear force, W=F_parallel d.


    **Engineering use:** Find braking force or speed change from a known distance.

    **Reference:** '
- title: Gravitational-force magnitude
  latex: F_g=G\frac{m_1m_2}{r^2}
  note: '**Variables and units:** F_g attractive force magnitude [N]; G gravitational constant [m^3/(kg s^2)]; m_1,m_2 [kg]; r separation [m].


    **Assumptions and limitations:** Point masses or external fields of spherical distributions; Newtonian regime.


    **Engineering use:** Compare gravity at two distances or establish an orbit-force balance.

    **Reference:** '
- title: Ideal gas state
  latex: PV=Nk_BT=nRT
  note: '**Variables and units:** P absolute pressure [Pa]; V [m^3]; N molecule count [dimensionless]; k_B=1.380649e-23 J/K; T [K]; n [mol]; R=N_A k_B [J/(mol K)].


    **Assumptions and limitations:** Dilute classical equilibrium ideal gas; negligible molecular volume and interactions in the model.


    **Engineering use:** Estimate gas pressure or inventory from a specified state.

    **Reference:** '
- title: Average translational molecular energy
  latex: \langle K_{trans}\rangle=\frac32k_BT
  note: '**Variables and units:** Mean translational energy per molecule [J]; k_B [J/K]; T absolute temperature [K].


    **Assumptions and limitations:** Classical equilibrium gas with three translational degrees of freedom; this is not total molecular internal energy when other modes contribute.


    **Engineering use:** Connect a macroscopic gas temperature with microscopic translational motion.

    **Reference:** '
- title: Time dilation
  latex: \Delta t=\gamma\Delta\tau,\qquad \gamma=\frac{1}{\sqrt{1-v^2/c^2}}
  note: '**Variables and units:** Delta tau proper interval [s] between events at one place in the clock frame; delta t interval in another inertial frame [s]; v relative speed [m/s]; c light speed [m/s]; gamma dimensionless.


    **Assumptions and limitations:** Uniform relative inertial motion in special relativity, 0 <= v < c; correctly identified event pair and proper frame.


    **Engineering use:** Compare timing of a moving clock and demonstrate the low-speed limit.

    **Reference:** '
figures:
- src: /images/phys-211-PHYS_211_illustrative_Lorentz_factor.png
  alt: Original theoretical Lorentz factor versus relative speed divided by light speed. Assumed inertial-frame model; not experimental data or student project output.
  caption: Original theoretical Lorentz factor versus relative speed divided by light speed. Assumed inertial-frame model; not experimental data or student project output.
sources:
- title: Bucknell 2025-2026 catalog - Physics & Astronomy
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/physicsandastronomy/
- title: OpenStax University Physics Vol. 1 - Newton Second Law
  url: https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law
- title: OpenStax University Physics Vol. 1 - Work-Energy Theorem
  url: https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem
- title: OpenStax University Physics Vol. 1 - Universal Gravitation
  url: https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation
officialTitle: Classical and Modern Physics I
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/PHYS_211_Classical_and_Modern_Physics_I/TECHNICAL_REFERENCE.md
---

**Official identity:** Classical and Modern Physics I | Physics & Astronomy | Catalog 2025-2026.

**Bucknell description, paraphrased:** Introduces mechanics, gravitation, relativity, thermodynamics and statistical mechanics. [BU_PHYS_2025]

## Course overview

Physics helps decide which model applies before making an engineering calculation. A force balance, an energy argument, and a thermal description can address different aspects of the same physical system. This subject connects observable motion with the interactions that cause it, while also introducing the limits of a purely classical picture. A central task is moving between a physical explanation, a diagram, and an equation with units that can be checked. That foundation supports later mechanical engineering work because even a detailed computational model depends on basic choices about the system boundary, reference frame, forces, and assumptions. The course's documented scope also includes gravity, relativity, thermodynamics, and statistical mechanics, rather than mechanics alone.

## Principles that matter

**Define the system and frame.** Newton's laws connect net external force with momentum change. In the constant-mass classical form, acceleration follows from the vector sum of forces. Choosing the body and inertial frame first makes a free-body diagram meaningful. An internal force in a larger system may be external when one component is analyzed separately.

**Conservation offers another route.** Work and kinetic energy connect force acting through displacement with a change in motion. The method is useful when speed or stopping distance is needed without calculating every instant of the motion. Friction and other energy transfers must remain in the balance; a convenient conservation statement cannot omit the mechanism that matters.

**Gravity changes with separation.** A near-surface constant-gravity approximation is useful for many mechanical problems, but the inverse-square model explains how gravitational interaction changes over larger distances. Distance is measured between mass centers in the point-mass or spherical approximation. The appropriate scale determines which simplification is reasonable.

**Thermal behavior has a microscopic basis.** Gas pressure and temperature can be connected with molecular motion in an idealized model. A macroscopic state relation and a molecular energy description offer complementary views. Their assumptions matter: a dilute classical gas differs from a dense fluid, and translational molecular energy does not include every possible internal energy contribution.

**Classical models have limits.** Special relativity distinguishes time intervals measured in different inertial frames. At ordinary mechanical speeds the corrections are very small, while they become important as speed approaches that of light. Knowing the limit explains why a simpler equation can be adequate without treating it as universally exact.

## Core relationships

For a constant-mass body in an inertial frame at nonrelativistic speed,

$$
\sum\mathbf F=m\mathbf a
$$

The expanded reference adds work-energy, gravity, ideal-gas and molecular-energy relations, and time dilation. Each is paired with units, a model boundary, and an example. These are standard physics explanations supporting the verified catalog scope, not a claim that a recovered class syllabus specifies this particular equation selection.

## Representative calculation

Suppose a hypothetical 2.00 kg cart moving at 3.00 m/s stops over 1.50 m under a constant opposing net force. Its initial kinetic energy is 9.00 J. Removing that energy over the stated distance requires a force of magnitude 6.00 N, directed opposite its displacement. The corresponding acceleration is -3.00 m/s² when forward is positive. This is an original illustration of agreement between energy and force methods, not a measured student test.

## Applications, technical focus and evidence

Mechanics supports vehicle-motion and actuator estimates; thermal and molecular models support interpretation of gases and energy transport; gravity and frame-dependent physics provide context for aerospace systems. The technical focus is constructing free-body diagrams, selecting conservation laws, resolving vectors, maintaining unit consistency, interpreting model assumptions, and checking an answer through a second method.

No PHYS 211 laboratory record is available to establish a personal experiment or an overcome difficulty. A genuine motion-analysis graph, force measurement, or thermal laboratory excerpt would be a suitable digital deliverable. The included relativity plot is explicitly theoretical. It illustrates where the classical approximation changes; it is not an experimental measurement or a claim of personal research.

## Further technical detail and visuals

Technical reference contains the complete equation definitions, assumptions, and representative solution methods. References identify official course information and standard technical sources.
