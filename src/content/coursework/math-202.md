---
code: MATH 202
title: Calculus II
summary: Extends integration techniques and approximation, then develops series, polar and parametric representations, and elementary differential equations.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- integration by parts
- numerical integration
- improper integrals
- sequences and series
- Taylor series
- polar coordinates
equations:
- title: Integration by parts
  latex: \int_a^b u\, dv=[uv]_a^b-\int_a^b v\, du
  note: '**Variables and units:** u, v: chosen functions; du, dv: differentials; a, b: limits. Both sides have the units of uv.


    **Assumptions:** Differentiable factors and existing integrals.


    **When and why:** Reduce a product integral such as a polynomial times an exponential.'
- title: Composite trapezoidal rule
  latex: \int_a^b f(x)\, dx\approx h\left[\tfrac12 f(x_0)+\sum_{i=1}^{n-1}f(x_i)+\tfrac12 f(x_n)\right],\quad h=(b-a)/n
  note: '**Variables and units:** x_i=a+ih; n: positive integer interval count; h: input spacing. Integral units are [f][x].


    **Assumptions:** Uniform spacing; a meaningful piecewise-linear approximation.


    **When and why:** Compute work [J] from force [N] versus position [m].'
- title: Taylor polynomial with remainder
  latex: f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)
  note: '**Variables and units:** a: expansion point; n: order; k: index; R_n: error with the same units as f.


    **Assumptions:** Required derivatives exist; a valid remainder estimate is needed for accuracy claims.


    **When and why:** Approximate a smooth nonlinear relation over a stated small interval.'
- title: Parametric arc length
  latex: L=\int_{t_0}^{t_1}\sqrt{[x\,^{\prime}(t)]^2+[y\,^{\prime}(t)]^2}\, dt
  note: '**Variables and units:** x, y: length coordinates [m]; t: defined parameter; L: arc length [m].


    **Assumptions:** Piecewise-smooth curve; count any repeated tracing intentionally.


    **When and why:** Measure the outline of a planar CAD profile.'
- title: Area enclosed by a polar sweep
  latex: A=\frac12\int_{\alpha}^{\beta}r(\theta)^2\, d\theta
  note: '**Variables and units:** r: radial length [m]; theta: angle in radians; alpha, beta: angular limits; A: area [m²].


    **Assumptions:** Choose limits that trace the desired region once; handle negative radius and overlap carefully.


    **When and why:** Evaluate area of a radially described profile.'
figures:
- src: /images/math-202-MATH_202_illustrative_small_angle_error.png
  alt: Illustrative errors of theta and theta-theta³/6 as approximations to sin(theta), with theta in radians. Assumed mathematical benchmark, not student experimental data.
  caption: Illustrative errors of theta and theta-theta³/6 as approximations to sin(theta), with theta in radians. Assumed mathematical benchmark, not student experimental data.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: 'OpenStax/Rice University, Calculus Volume 2: Integration by Parts'
  url: https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts
- title: 'OpenStax/Rice University, Calculus Volume 2: Numerical Integration'
  url: https://openstax.org/books/calculus-volume-2/pages/3-6-numerical-integration
- title: 'OpenStax/Rice University, Calculus Volume 2: Taylor and Maclaurin Series'
  url: https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series
officialTitle: Calculus II
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_202_Calculus_II/TECHNICAL_REFERENCE.md
---

## Overview

Calculus II is useful when a useful engineering quantity cannot be obtained from a simple derivative or a convenient closed-form integral. A realistic geometry may be described parametrically, a measured response may be available only as sampled values, or a nonlinear relation may need a local approximation. The aim is to make the approximation and its limitations visible. That means choosing an integration method for a reason, stating the interval, checking convergence when a series is involved, and keeping geometric parameters separate from physical time. These habits connect mathematical technique to CAD, numerical analysis and mechanical modeling. A strong portfolio artifact can be a short computational comparison that explains why a method was selected and how its error was assessed.

## Core ideas

Integration by parts follows the product rule in reverse and is useful when one factor becomes simpler after differentiation. Selecting the factors deliberately keeps a calculation from becoming more complicated than the original integral.

Numerical integration turns discrete or difficult-to-integrate information into an approximate total. The trapezoidal rule replaces each short curve segment with a straight line. The result depends on spacing and curvature, so a smaller step or an independent benchmark is an essential part of the explanation.

Series represent functions through a sequence of terms. A Taylor polynomial is especially useful near its expansion point, but its accuracy is not uniform over every possible input. A stated remainder estimate or comparison with the full function gives the approximation a meaningful operating range.

Parametric and polar descriptions provide alternatives to a single-valued Cartesian graph. They are useful for closed contours, rotating geometry and paths that double back. The parameter must be defined, and derivatives must account for how both coordinates change.

## Representative problem-solving

Representative problems include integrating a product that arises in a mathematical model, estimating work from force samples, and checking a small-angle approximation before using it in a mechanical calculation. The supporting reference also treats polar area and parametric arc length. All supplied examples use assumed inputs and are labeled as demonstrations rather than original coursework.

For illustrative force samples of zero, ten and twenty newtons at positions zero, one tenth and two tenths of a metre, the trapezoidal estimate of work is two joules. It is exact for the assumed linear force law. That agreement would not establish comparable accuracy for a strongly curved or sparsely sampled experimental response.

## Engineering applications

In mechanical design, integrating a parametric contour gives a perimeter or a geometric quantity needed downstream in CAD or manufacturing. In simulation, a polynomial approximation can simplify a repeated calculation, provided its input range remains controlled. In testing, numerical quadrature converts a recorded force-displacement trace into work and keeps the physical meaning of the area clear.

## Technical capabilities and evidence

The technical capabilities represented are selecting integration methods, using sampled data with explicit spacing, comparing approximation error, examining series convergence, and working with non-Cartesian geometry. A suitable authentic addition would be an original notebook that compares an approximation with a more accurate reference and explains the observed difference. No particular lab, submitted notebook or personal troubleshooting outcome has been verified for this course.

## Selected equations

**Integration by parts.**

$$
\int_a^b u\, dv=[uv]_a^b-\int_a^b v\, du
$$

u, v: chosen functions; du, dv: differentials; a, b: limits. Both sides have the units of uv.

**Composite trapezoidal rule.**

$$
\int_a^b f(x)\, dx\approx h\left[\tfrac12 f(x_0)+\sum_{i=1}^{n-1}f(x_i)+\tfrac12 f(x_n)\right],\quad h=(b-a)/n
$$

x_i=a+ih; n: positive integer interval count; h: input spacing. Integral units are [f][x].

**Taylor polynomial with remainder.**

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)
$$

a: expansion point; n: order; k: index; R_n: error with the same units as f.

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 202, Calculus II**, Department of Mathematics & Statistics. Brief description: Extends integration, numerical approximation, series and parametric or polar models, with elementary differential equations. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
