# MATH 202 | Detailed technical reference

## A. Verified course scope

**Official title:** Calculus II

**Department:** Mathematics & Statistics. **Catalog:** 2025-2026.

**Description, paraphrased:** Extends integration, numerical approximation, series and parametric or polar models, with elementary differential equations.

**Documented topic labels:** integration by parts; numerical integration; improper integrals; sequences and series; Taylor series; polar coordinates; parametric functions; differential equations.

**Public course-specific objectives:** No separate course learning-objective list was located in the retrieved records. Catalog subject coverage is verified; supplementary sources do not establish Bucknell-specific teaching.

The mathematical material and worked examples below are standard subject explanations, not evidence that these exact examples were taught or assigned at Bucknell.

## B. Core principles

### P1. Integration by parts

**Explanation:** Rearranging the product-rule integral trades one product integral for another.

**Physical or mathematical significance:** A structured choice can simplify a model containing polynomial and exponential factors.

**Assumptions and limits:** Choose differentiable u and an integrable dv; evaluate boundary terms in definite integrals.

**Engineering use:** Integrating weighted response functions.

### P2. Quadrature and error

**Explanation:** Numerical integration approximates area using a finite representation of the integrand.

**Physical or mathematical significance:** Sampling resolution influences accumulated quantities such as work.

**Assumptions and limits:** Spacing and regularity assumptions must match the chosen formula; a benchmark is not experimental validation.

**Engineering use:** Force-displacement integration.

### P3. Convergence before evaluation

**Explanation:** An infinite sequence of contributions represents a finite function only under suitable convergence conditions.

**Physical or mathematical significance:** More terms are not automatically more useful outside a series convergence region.

**Assumptions and limits:** Determine the applicable interval and check endpoints separately when required.

**Engineering use:** Power-series models and repeated evaluation.

### P4. Local polynomial models

**Explanation:** Taylor coefficients match function derivatives at an expansion point.

**Physical or mathematical significance:** The resulting polynomial expresses local behavior and offers a controllable approximation.

**Assumptions and limits:** Sufficient derivatives and a justified remainder bound over the stated interval.

**Engineering use:** Small-angle and near-operating-point calculations.

### P5. Geometry through a parameter

**Explanation:** A curve can be represented by coordinates that each depend on a parameter.

**Physical or mathematical significance:** Closed outlines and multivalued Cartesian shapes become manageable.

**Assumptions and limits:** The parameter need not be time; avoid singular derivative ratios where dx/dt=0.

**Engineering use:** CAD profile length and rotating contours.

## C. Core equations

### E1. Integration by parts

$$
\int_a^b u\, dv=[uv]_a^b-\int_a^b v\, du
$$

**Variables and units:** u, v: chosen functions; du, dv: differentials; a, b: limits. Both sides have the units of uv.

**Assumptions:** Differentiable factors and existing integrals.

**When and why:** Reduce a product integral such as a polynomial times an exponential.

### E2. Composite trapezoidal rule

$$
\int_a^b f(x)\, dx\approx h\left[\tfrac12 f(x_0)+\sum_{i=1}^{n-1}f(x_i)+\tfrac12 f(x_n)\right],\quad h=(b-a)/n
$$

**Variables and units:** x_i=a+ih; n: positive integer interval count; h: input spacing. Integral units are [f][x].

**Assumptions:** Uniform spacing; a meaningful piecewise-linear approximation.

**When and why:** Compute work [J] from force [N] versus position [m].

### E3. Taylor polynomial with remainder

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)
$$

**Variables and units:** a: expansion point; n: order; k: index; R_n: error with the same units as f.

**Assumptions:** Required derivatives exist; a valid remainder estimate is needed for accuracy claims.

**When and why:** Approximate a smooth nonlinear relation over a stated small interval.

### E4. Parametric arc length

$$
L=\int_{t_0}^{t_1}\sqrt{[x\,^{\prime}(t)]^2+[y\,^{\prime}(t)]^2}\, dt
$$

**Variables and units:** x, y: length coordinates [m]; t: defined parameter; L: arc length [m].

**Assumptions:** Piecewise-smooth curve; count any repeated tracing intentionally.

**When and why:** Measure the outline of a planar CAD profile.

### E5. Area enclosed by a polar sweep

$$
A=\frac12\int_{\alpha}^{\beta}r(\theta)^2\, d\theta
$$

**Variables and units:** r: radial length [m]; theta: angle in radians; alpha, beta: angular limits; A: area [m²].

**Assumptions:** Choose limits that trace the desired region once; handle negative radius and overlap carefully.

**When and why:** Evaluate area of a radially described profile.

## D. Representative engineering problems

All numbers are original assumed benchmarks for this research package. They are not claimed to be Brewster's assignments or project results.

### D1. Integrate sampled force

**Given:** x=[0, 0.1, 0.2] m; F=[0, 10, 20] N.

**Required:** Work from x=0 to 0.2 m.

**Relevant principles:** Quadrature and force-displacement work.

**Governing equations:** E2.

**Solution method:** Set h=0.1 m; apply half-weight at the endpoints; compare with the triangle under the assumed linear curve.

**Assumptions:** Assumed piecewise-linear force; no experimental noise.

**Common mistakes:** Using interval count as sample count or forgetting length units.

**Worked result:** W=0.1(0+10+10)=2.00 N·m=2.00 J.

### D2. Assess the small-angle approximation

**Given:** A dimensionless angle theta=0.2 rad; compare sin(theta) with theta and theta-theta³/6.

**Required:** Absolute errors and a cubic error bound.

**Relevant principles:** Taylor expansion around zero.

**Governing equations:** E3.

**Solution method:** Calculate the linear and cubic values; compare with sin(0.2); use |R3|≤|theta|5/120 for this expansion.

**Assumptions:** Radians; smooth sine function; the displayed bound uses a derivative magnitude no greater than 1.

**Common mistakes:** Using degrees directly or calling a local approximation exact.

**Worked result:** sin(0.2)=0.198669331; linear error=0.001330669; cubic value=0.198666667, error=0.000002664; bound=0.000002667.

### D3. Calculate a circular profile length

**Given:** x=R cos(t), y=R sin(t), R=0.05 m; 0≤t≤2pi.

**Required:** Perimeter of one full contour.

**Relevant principles:** Parametric differentiation and arc length.

**Governing equations:** E4.

**Solution method:** Differentiate both coordinates; the speed magnitude in parameter space is R; integrate over one complete revolution.

**Assumptions:** A perfect planar circle traced once.

**Common mistakes:** Treating the parameter as physical time without a time law or tracing twice.

**Worked result:** L=2piR=0.314159 m.

### D4. Integrate a dimensionless product

**Given:** I=integral from 0 to 1 of z exp(z) dz; z dimensionless.

**Required:** Exact value of I.

**Relevant principles:** Integration by parts.

**Governing equations:** E1.

**Solution method:** Choose u=z, dv=exp(z)dz; then du=dz and v=exp(z); evaluate [(z-1)exp(z)] from 0 to 1.

**Assumptions:** Pure mathematical benchmark; no real dimensional time inside an exponential.

**Common mistakes:** Dropping the boundary term or omitting the lower limit.

**Worked result:** I=1, dimensionless.

## E. Personal coursework evidence

The supplied degree-audit crops list MATH 202. They do not show a completion flag, grade, semester, section or transfer-credit label. No original course assignment, lab dataset or submitted report was reviewed for this class. General engineering projects may use related mathematics, but are not assigned to this course by inference.

## F. Challenges and resolutions

No course-specific autobiographical challenge and successful resolution is established. The common mistakes above are representative failure modes, not Brewster's experiences. A personal reflection can be added only after an original calculation, iteration or student account identifies what went wrong, what changed, and what evidence supports the result.

## G. Technical capabilities represented

The technical capabilities represented are selecting integration methods, using sampled data with explicit spacing, comparing approximation error, examining series convergence, and working with non-Cartesian geometry. A suitable authentic addition would be an original notebook that compares an approximation with a more accurate reference and explains the observed difference. No particular lab, submitted notebook or personal troubleshooting outcome has been verified for this course.

## H. Applications

In mechanical design, integrating a parametric contour gives a perimeter or a geometric quantity needed downstream in CAD or manufacturing. In simulation, a polynomial approximation can simplify a repeated calculation, provided its input range remains controlled. In testing, numerical quadrature converts a recorded force-displacement trace into work and keeps the physical meaning of the area clear.

## I. Visual and authentic-artifact plan

Included:[MATH_202_illustrative_small_angle_error.png](assets/MATH_202_illustrative_small_angle_error.png). Caption: Illustrative errors of theta and theta-theta³/6 as approximations to sin(theta), with theta in radians. Assumed mathematical benchmark, not student experimental data. Place after the representative example.

Recommended authentic replacement/addition: An original integration or approximation notebook showing a chosen method, convergence or error comparison, and a plotted result. This is a request for an existing artifact, not a claim that the artifact exists or an instruction to fabricate data. Keep it separate from the illustrative plot.

## J. Traceable references

See [SOURCES.md](SOURCES.md), whose P/E/D labels map principles, equations and problems to primary sources. Original numerical arithmetic is reproduced in the source script and independently checked in the package workflow.

### Additional clarification for the sine approximation

For the D2 small-angle sine example, the fourth-degree Taylor coefficient at zero is zero, so T4 equals T3. Taylor's theorem through degree four therefore gives the fifth-order bound |theta|^5/120 when the fifth derivative is bounded by1 on the stated interval. The same bound follows from the alternating sine series for the small positive angle used in the example.
