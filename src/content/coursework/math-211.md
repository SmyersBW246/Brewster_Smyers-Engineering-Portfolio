---
code: MATH 211
title: Calculus III
summary: Extends calculus to vectors and multiple variables, with optimization, multidimensional integration and major vector-calculus theorems.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- vector-valued functions
- functions of several variables
- multiple integrals
- line integrals
- surface integrals
- extrema
equations:
- title: Gradient and directional derivative
  latex: \nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right),\qquad D_{\mathbf u}f=\nabla f\cdot\mathbf u
  note: '**Variables and units:** f: scalar field; x, y, z: position [m] for a spatial field; u: unit direction vector. For temperature, gradient units are K/m.


    **Assumptions:** Differentiable f; u must have unit magnitude.


    **When and why:** Calculate the temperature change per unit distance in a specified direction.'
- title: Mass from density
  latex: m=\iiint_V\rho(x, y, z)\, dV
  note: '**Variables and units:** m: mass [kg]; rho: density [kg/m³]; V: body volume [m³].


    **Assumptions:** Specified density over the true body domain.


    **When and why:** Compute total mass of a nonuniform component.'
- title: Polar area element
  latex: dA=r\, dr\, d\theta
  note: '**Variables and units:** r: radial distance [m]; theta: angle [rad, dimensionless]; dA: area [m²].


    **Assumptions:** A valid polar representation of the integration region.


    **When and why:** Integrate a field over a circular plate.'
- title: Work along a path
  latex: W=\int_C\mathbf F\cdot d\mathbf r
  note: '**Variables and units:** F: force vector [N]; dr: oriented displacement [m]; C: path; W: work [J].


    **Assumptions:** Defined force field and path; orientation explicitly stated.


    **When and why:** Evaluate work along a curved guide or linkage path.'
- title: Divergence theorem
  latex: \iint_{\partial V}\mathbf F\cdot\mathbf n\, dS=\iiint_V\nabla\cdot\mathbf F\, dV
  note: '**Variables and units:** F: vector field; n: outward unit normal; dS: surface area; V: enclosed volume. For velocity F [m/s], both sides have m³/s.


    **Assumptions:** Closed, piecewise-smooth boundary and continuously differentiable field in an appropriate volume neighborhood.


    **When and why:** Replace a closed-surface flux calculation with a volume integral.'
figures:
- src: /images/math-211-MATH_211_illustrative_temperature_gradient.png
  alt: Illustrative prescribed field T=300+2x²+3y² in SI units, with gradient at(1 m,2 m). The arrow indicates direction and is scaled for visibility; no student thermal-test data or simulation is represented.
  caption: Illustrative prescribed field T=300+2x²+3y² in SI units, with gradient at(1 m,2 m). The arrow indicates direction and is scaled for visibility; no student thermal-test data or simulation is represented.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: 'OpenStax/Rice University, Calculus Volume 3: Directional Derivatives and the Gradient'
  url: https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient
- title: 'OpenStax/Rice University, Calculus Volume 3: Double Integrals in Polar Coordinates'
  url: https://openstax.org/books/calculus-volume-3/pages/5-3-double-integrals-in-polar-coordinates
- title: 'OpenStax/Rice University, Calculus Volume 3: Line Integrals'
  url: https://openstax.org/books/calculus-volume-3/pages/6-2-line-integrals
officialTitle: Calculus III
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_211_Calculus_III/TECHNICAL_REFERENCE.md
---

## Overview

Multivariable calculus describes engineering quantities that change across space or depend on several design variables at once. A temperature field has a direction of steepest increase, a body contains a distributed mass, and a force acting along a curved path performs work that cannot always be reduced to force times straight-line distance. The focus is on connecting the geometric picture to the integral or derivative being used. Choosing coordinates, setting bounds and defining an orientation often matter as much as carrying out the algebra. This subject provides mathematical tools for fluid mechanics, material and structural analysis, and CAD-based geometry. A useful portfolio example should make the domain visible and explain which physical quantity the final integral represents.

## Core ideas

Partial derivatives isolate how one input affects a response while the other inputs remain fixed. The gradient combines those sensitivities into a vector. Its direction and magnitude must be interpreted in the coordinates and units of the underlying field.

Multiple integrals accumulate a distributed quantity over an area or volume. A coordinate change can simplify the region, but it also changes the integration element. The radial factor in polar coordinates records how a small angular interval spans more area farther from the origin.

Line integrals distinguish a path from its endpoints. Work depends on the component of force along the displacement direction. Surface flux similarly depends on the normal component of a field and on the chosen orientation.

Vector-calculus theorems connect a boundary calculation to a calculation over the enclosed region. They are powerful checks and simplifications, provided the field, boundary and smoothness conditions satisfy the theorem being used.

## Representative problem-solving

Representative tasks include determining the local directional change of temperature, computing mass from a spatial density model, and evaluating outward flux through a closed surface. The detailed reference includes the geometry, assumptions and units for each. These are illustrative mathematical problems rather than claims about a particular Bucknell laboratory or report.

For an assumed temperature field, the gradient at a selected point has components four and twelve kelvins per metre. Its magnitude is about twelve point six kelvins per metre, directed mainly along the second coordinate. The contour plot shows the field and the local gradient together, so the numerical result can be read geometrically.

## Engineering applications

In automotive and aerospace work, integrated distributions support mass-property calculations and spatial fields describe pressure or temperature. In fluid analysis, flux integrals quantify how much of a flow field crosses a surface. For mechanical design, multivariable sensitivity helps explain how simultaneous dimension changes affect a response before a detailed simulation is attempted.

## Technical capabilities and evidence

The capabilities represented are defining coordinate systems, differentiating multivariable functions, setting area and volume bounds, integrating along oriented paths or surfaces, and checking results through alternate formulations. An authentic addition could pair a CAD cross-section or an original field calculation with the corresponding integral. Existing course-specific calculations and a personal challenge/resolution record have not yet been established, so the draft does not claim a completed experiment or simulation.

## Selected equations

**Gradient and directional derivative.**

$$
\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right),\qquad D_{\mathbf u}f=\nabla f\cdot\mathbf u
$$

f: scalar field; x, y, z: position [m] for a spatial field; u: unit direction vector. For temperature, gradient units are K/m.

**Mass from density.**

$$
m=\iiint_V\rho(x, y, z)\, dV
$$

m: mass [kg]; rho: density [kg/m³]; V: body volume [m³].

**Polar area element.**

$$
dA=r\, dr\, d\theta
$$

r: radial distance [m]; theta: angle [rad, dimensionless]; dA: area [m²].

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 211, Calculus III**, Department of Mathematics & Statistics. Brief description: Extends calculus to vectors, multiple variables, optimization and multidimensional integration, including major vector-calculus theorems. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
