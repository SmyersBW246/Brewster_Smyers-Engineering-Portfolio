---
code: MECH 353
title: Solid Mechanics
summary: Evaluates stress, deformation and failure across load types, with compression-member stability, energy approaches and computational connections.
category: Design & mechanics
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- stress strain and failure
- axial loading
- torsional loading
- flexural loading
- combined loading
- compression-member stability
equations:
- title: Axial stress and elastic extension
  latex: \sigma=\frac{N}{A},\quad\varepsilon=\frac{\delta}{L},\quad\delta=\frac{NL}{AE}
  note: '**Variables and units:** sigma [Pa]; N [N]; A [m²]; epsilon [1]; delta, L [m]; E [Pa].


    **Assumptions:** Uniform prismatic bar, centered axial load, constant elastic E and small strain away from local end effects.


    **When and why used / application:** Estimate tie-rod stress and extension.'
- title: Elementary bending
  latex: \sigma_x=-\frac{My}{I},\qquad I_{\rm rectangle}=\frac{bh^3}{12}
  note: '**Variables and units:** sigma_x [Pa]; M [N·m] with stated section sign convention; y [m] from neutral axis; I [m⁴]; b, h [m].


    **Assumptions:** Linear elastic homogeneous beam in bending about a centroidal principal axis; appropriate slender-beam assumptions.


    **When and why used / application:** Compare stress when a rectangular section is rotated.'
- title: Cantilever tip deflection
  latex: '|\delta_{\rm tip}|=\frac{PL^3}{3EI}'
  note: '**Variables and units:** P [N]; L [m]; E [Pa]; I [m⁴]; deflection [m].


    **Assumptions:** Prismatic Euler-Bernoulli cantilever with point tip load, small deflection; transverse shear deformation neglected.


    **When and why used / application:** Check whether a bracket maintains alignment.'
- title: Circular-shaft torsion
  latex: \tau(r)=\frac{Tr}{J},\quad\phi=\frac{TL}{GJ},\quad J_{\rm solid}=\frac{\pi d^4}{32}
  note: '**Variables and units:** tau [Pa]; T [N·m]; r, L, d [m]; J [m⁴]; G [Pa]; phi [rad].


    **Assumptions:** Circular, prismatic shaft in linear elasticity; uniform T, G, J for the twist form.


    **When and why used / application:** Estimate stress and twist of a drive shaft.'
- title: Plane-stress von Mises equivalent stress
  latex: \sigma_{\rm vm}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}
  note: '**Variables and units:** All stress components and sigma_vm [Pa]; components evaluated at one material point.


    **Assumptions:** Plane stress, isotropic ductile material; comparison with yield stress concerns initial yielding only, not fatigue or brittle failure.


    **When and why used / application:** Screen a metal bracket under combined normal and shear stress.'
- title: Ideal elastic column buckling
  latex: P_{\rm cr}=\frac{\pi^2EI}{(KL)^2}
  note: '**Variables and units:** P_cr [N]; E [Pa]; I [m⁴] about buckling axis; L [m]; K [1] effective-length factor.


    **Assumptions:** Slender, straight, ideal elastic column, centered compression and ideal end restraints.


    **When and why used / application:** Compare sensitivity to unsupported length and end restraint.'
figures:
- src: /images/mech-353-MECH_353_Illustrative_Cantilever.png
  alt: 'Original illustrative elastic cantilever: 0.30 m length, 20×40 mm section, 100 N tip load and E=70 GPa. Deflection is exaggerated for visibility; calculated tip displacement is 0.1205 mm. Not a student simulation.'
  caption: 'Original illustrative elastic cantilever: 0.30 m length, 20×40 mm section, 100 N tip load and E=70 GPa. Deflection is exaggerated for visibility; calculated tip displacement is 0.1205 mm. Not a student simulation.'
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: MIT Mechanical Engineering  |  Mechanics and Materials I
  url: https://meche.mit.edu/featured-classes/mechanics-and-materials-i
- title: Louis Bucciarelli, MIT OCW  |  Engineering Mechanics for Structures, chapter 9
  url: https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/resources/emech9_04/
- title: University of Illinois, Introductory Solid Mechanics  |  Torsion
  url: https://mechref.engr.illinois.edu/sol/torsion.html
officialTitle: Solid Mechanics
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MECH_353_Solid_Mechanics/TECHNICAL_REFERENCE.md
---

## Course overview

Solid mechanics examines what happens inside a component after the external loads have been identified. A part can satisfy equilibrium and still deform too much, yield locally, or become unstable. The analysis therefore needs geometry, loading, material behavior, and boundary conditions together. The analysis distinguishes stiffness from strength and consider how bending, torsion, and axial loading combine at a critical location. This reasoning is relevant to mechanical components and structures, because a useful shape must carry loads while maintaining its function. It also provides a basis for reviewing simulation plots: a colored stress contour needs a physical load case and a credible material model before its values can support a decision.

**Bucknell scope:** Stress, deformation, failure, combined loading, compression-member stability, energy methods and computational connections. [2025-2026 catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **Stress and strain:** Internal force intensity and deformation describe different aspects of the same loaded body. Their relationship depends on the material model.
- **Compatibility:** Deforming parts must remain geometrically connected. Equilibrium alone cannot solve every restrained assembly.
- **Bending and torsion:** Section geometry strongly affects stress and stiffness; moving material away from an axis can have a large effect.
- **Combined loading and failure:** The most relevant stress measure depends on whether the material is ductile, brittle, isotropic, or direction-dependent.
- **Stability:** A slender compression member can buckle before reaching a simple compressive strength limit.

These standard explanations expand the catalog subject areas; they are not an assertion that a particular specimen or test was part of a particular class.

## Core equations

$$
\sigma=\frac{N}{A},\qquad \sigma_x=-\frac{My}{I},\qquad \tau=\frac{Tr}{J}
$$

Normal and shear stresses are in pascals. Axial force $N$, bending moment $M$, and torque $T$ must be matched to the correct section properties: area $A$, second moment of area $I$, and polar second moment $J$. These elementary forms assume appropriate elastic member models.

$$
P_{\mathrm{cr}}=\frac{\pi^2EI}{(KL)^2}
$$

Euler's ideal buckling load depends on elastic modulus $E$, unsupported length $L$, and the end-condition factor $K$. It is not a general allowable load for an imperfect column.

## Representative problem

An illustrative aluminum cantilever is 0.30 m long, 20 mm wide, and 40 mm deep, with a 100 N transverse tip load. Using $E=70$ GPa, its section second moment is $1.067\times10^{-7}$ m⁴. The elementary beam model predicts a 5.63 MPa maximum bending-stress magnitude and a 0.121 mm tip deflection. These are calculated values for an ideal educational example, not test results or dimensions from student projects.

Common related problems include sizing a shaft under combined bending and torque, finding thermal stress in a restrained bar, and comparing buckling limits for different column supports. A design must check the relevant displacement limit as well as the failure limit.

## Practical evidence and analytical judgment

My independent outdoor landmark chair was modeled in SOLIDWORKS and analyzed with a structural simulation. The earlier portfolio reports a maximum von Mises stress of approximately 1.78 MPa for the modeled load case. That number belongs to the supplied simulation image; it does not establish a verified load rating or demonstrate that the timber, connections, restraints, and load cases were fully validated. This simulation is presented as independent work; the project page retains the original evidence and limitations.

A useful review method is to compare a simulation's reaction forces and approximate deformation with a simpler hand calculation before interpreting local stress concentrations. Mesh refinement, contact assumptions, and material directionality can change the result. In particular, isotropic ductile-metal failure measures should not automatically be treated as wood acceptance criteria. This approach connects a detailed computational result with its underlying mechanics.

## Engineering skills and applications

The relevant technical foundation includes stress calculation, section-property evaluation, elastic deformation, combined-load assessment, stability analysis, and simulation interpretation. Automotive shafts require attention to torque and bending together. Aerospace brackets balance stiffness, weight, and local loads. Product enclosures and support structures require deflection checks so that alignment and fit remain acceptable even when the material is far from its strength limit.
