---
code: MATH 201
title: Calculus I
summary: Introduces derivatives and their applications, followed by basic integration and the relationship between differentiation and integration.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- algebraic trigonometric and transcendental functions
- meaning and calculation of derivatives
- derivative applications
- introductory integration
- Fundamental Theorem of Calculus
- substitution
equations:
- title: Derivative
  latex: f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
  note: '**Variables and units:** x and h have the input units; f has output units. The derivative has output units divided by input units.


    **Assumptions:** The limit exists.


    **When and why:** Quantify a local slope or physical sensitivity.'
- title: Kinematics from a position function
  latex: v(t)=\frac{dx}{dt},\qquad a(t)=\frac{d^2x}{dt^2}
  note: '**Variables and units:** x: position [m]; t: time [s]; v: velocity [m/s]; a: acceleration [m/s²].


    **Assumptions:** One-dimensional differentiable motion in a fixed coordinate.


    **When and why:** Evaluate velocity and acceleration for a prescribed cart path.'
- title: Chain rule
  latex: \frac{d}{dt}f(g(t))=f\,^{\prime}(g(t))g\,^{\prime}(t)
  note: '**Variables and units:** g: inner variable; f: outer response; t: independent variable. Units multiply through the two derivatives.


    **Assumptions:** f and g differentiable at the required point.


    **When and why:** Combine a sensor calibration and a changing displacement.'
- title: Definite integral evaluation
  latex: \int_a^b f(x)\, dx=F(b)-F(a),\qquad F\,^{\prime}=f
  note: '**Variables and units:** a, b: input limits; f: rate or distributed quantity; F: accumulated quantity. Integral units are [f][x].


    **Assumptions:** f continuous on the interval for the elementary theorem.


    **When and why:** Calculate a net displacement from velocity.'
- title: Interior optimum check
  latex: J'(x_*)=0;\qquad J''(x_*)<0\ \Rightarrow\ \text{strict local maximum}
  note: '**Variables and units:** J: objective; x*: interior candidate; J prime has [J]/[x]; J double prime has [J]/[x]².


    **Assumptions:** Twice differentiable near an interior candidate; also evaluate feasible boundaries.


    **When and why:** Select a candidate enclosure dimension without mistaking a local condition for global feasibility.'
figures:
- src: /images/math-201-MATH_201_illustrative_position_tangent.png
  alt: Illustrative prescribed motion x=3t² in SI units, with the tangent at t=2 s. Its slope is 12 m/s. Original explanatory plot, not a student assignment result.
  caption: Illustrative prescribed motion x=3t² in SI units, with the tangent at t=2 s. Its slope is 12 m/s. Original explanatory plot, not a student assignment result.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: 'OpenStax/Rice University, Calculus Volume 1: Defining the Derivative'
  url: https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative
- title: 'OpenStax/Rice University, Calculus Volume 1: The Chain Rule'
  url: https://openstax.org/books/calculus-volume-1/pages/3-6-the-chain-rule
- title: 'OpenStax/Rice University, Calculus Volume 1: Applied Optimization Problems'
  url: https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems
officialTitle: Calculus I
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_201_Calculus_I/TECHNICAL_REFERENCE.md
---

## Overview

Calculus connects a changing quantity to the rate at which it changes. In mechanical engineering, a position curve becomes velocity, a force history becomes accumulated impulse, and a geometric constraint becomes an optimization problem. The focus is on making the mathematical model interpretable: identifying the independent variable, keeping units attached to derivatives and integrals, and deciding whether a result describes a local trend or a total change. This foundation supports the mechanics, simulation and design work used in engineering design. A useful calculation should show more than a final number. It should explain the relationship being modeled, the interval over which the model applies, and a check that the result makes physical sense.

## Core ideas

A derivative describes local sensitivity. For a displacement history, its sign distinguishes direction of motion and its magnitude gives velocity. Differentiating again gives acceleration. Smoothness matters: a sharp corner in a plotted function can represent a point where the derivative is not defined, rather than a very large but valid slope.

The chain rule connects nested relationships. If a sensor output depends on displacement and displacement depends on time, the total time rate includes both dependencies. Treating the inner function as a constant loses part of the physical model.

Optimization starts with a defined objective and a feasible domain. A zero derivative identifies a candidate, but the boundaries and physical constraints must also be checked. The best algebraic value is useful only when the geometry, material or operating restrictions allow it.

Integration accumulates many small contributions. Its units follow from multiplying the integrand by the variable of integration. The Fundamental Theorem connects this accumulation to differentiation and provides a practical way to evaluate definite integrals.

## Representative problem-solving

Representative engineering questions include finding peak velocity from a motion law, maximizing a constrained enclosure volume, and calculating displacement from a velocity history. A useful presentation is a compact sequence: sketch the quantity, define the domain, select the derivative or integral, calculate, then interpret the sign and units. The examples supplied here illustrate that workflow; they are not identified as student assignments.

For an assumed cart motion, position is three times the square of time in SI units. At two seconds, the corresponding velocity is twelve metres per second and the constant acceleration is six metres per second squared. The tangent in the accompanying plot shows why velocity is a local property of a position curve.

## Engineering applications

For vehicle engineering, these tools describe motion and turn measured rates into changes in speed or position. In mechanical product design, derivatives reveal how a dimension changes volume or clearance, while constraints prevent an attractive mathematical optimum from becoming an impossible part. These applications make the mathematical reasoning visible without requiring a large physical build.

## Technical capabilities and evidence

The technical capabilities represented are defining single-variable models, differentiating composed functions, identifying candidate extrema, evaluating definite integrals, and checking dimensions. An authentic future artifact would be one original calculation or notebook that includes the model, plot and interpretation. The course-specific assignment and personal challenge have not yet been established from the available records.

## Selected equations

**Derivative.**

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

x and h have the input units; f has output units. The derivative has output units divided by input units.

**Kinematics from a position function.**

$$
v(t)=\frac{dx}{dt},\qquad a(t)=\frac{d^2x}{dt^2}
$$

x: position [m]; t: time [s]; v: velocity [m/s]; a: acceleration [m/s²].

**Chain rule.**

$$
\frac{d}{dt}f(g(t))=f\,^{\prime}(g(t))g\,^{\prime}(t)
$$

g: inner variable; f: outer response; t: independent variable. Units multiply through the two derivatives.

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 201, Calculus I**, Department of Mathematics & Statistics. Brief description: Introduces derivatives, engineering applications, basic integration and the connection between rates and accumulation. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
