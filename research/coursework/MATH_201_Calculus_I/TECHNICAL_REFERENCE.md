# MATH 201 | Detailed technical reference

## A. Verified course scope

**Official title:** Calculus I

**Department:** Mathematics & Statistics. **Catalog:** 2025-2026.

**Description, paraphrased:** Introduces derivatives, derivative applications, basic integration and the connection between rates and accumulation.

**Documented topic labels:** algebraic trigonometric and transcendental functions; meaning and calculation of derivatives; derivative applications; introductory integration; Fundamental Theorem of Calculus; substitution.

**Public course-specific objectives:** No separate course learning-objective list was located in the retrieved records. Catalog subject coverage is verified; supplementary sources do not establish Bucknell-specific teaching.

The mathematical material and worked examples below are standard subject explanations, not evidence that these exact examples were taught or assigned at Bucknell.

## B. Core principles

### P1. Limits and local rate

**Explanation:** The derivative is the limiting slope of secants as the input interval approaches zero.

**Physical or mathematical significance:** It separates instantaneous velocity or sensitivity from an average over a finite interval.

**Assumptions and limits:** The relevant limit must exist; jumps and corners require separate treatment.

**Engineering use:** Motion analysis and local dimensional sensitivity.

### P2. Composition and the chain rule

**Explanation:** A composed dependency carries a derivative contribution from each stage.

**Physical or mathematical significance:** A geometry-to-sensor-to-time relationship must preserve all rates.

**Assumptions and limits:** Both component functions must be differentiable at the relevant values.

**Engineering use:** Converting measured displacement into sensor-voltage rate.

### P3. Extrema and constraints

**Explanation:** Stationary points, nondifferentiable points and domain boundaries are candidates for extrema.

**Physical or mathematical significance:** A design optimum must be compared across the entire feasible set.

**Assumptions and limits:** A stationary point alone does not establish a minimum or maximum; the feasible interval must be justified.

**Engineering use:** Volume, packaging and simple material-use tradeoffs.

### P4. Signed accumulation

**Explanation:** A definite integral sums signed small contributions over an interval.

**Physical or mathematical significance:** Velocity integrated over time yields displacement, while speed integrated yields distance.

**Assumptions and limits:** Use an integrable model and correct bounds; signs cannot be discarded without changing the question.

**Engineering use:** Reconstructing cart travel from a motion profile.

### P5. Derivative-integral connection

**Explanation:** Antiderivatives evaluate accumulated changes and the derivative of an accumulation recovers the local input.

**Physical or mathematical significance:** It connects a rate law to a finite physical change.

**Assumptions and limits:** The standard continuous-integrand version is sufficient for these examples; discontinuities require care.

**Engineering use:** Relating a prescribed rate history to a total change.

## C. Core equations

### E1. Derivative

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

**Variables and units:** x and h have the input units; f has output units. The derivative has output units divided by input units.

**Assumptions:** The limit exists.

**When and why:** Quantify a local slope or physical sensitivity.

### E2. Kinematics from a position function

$$
v(t)=\frac{dx}{dt},\qquad a(t)=\frac{d^2x}{dt^2}
$$

**Variables and units:** x: position [m]; t: time [s]; v: velocity [m/s]; a: acceleration [m/s²].

**Assumptions:** One-dimensional differentiable motion in a fixed coordinate.

**When and why:** Evaluate velocity and acceleration for a prescribed cart path.

### E3. Chain rule

$$
\frac{d}{dt}f(g(t))=f\,^{\prime}(g(t))g\,^{\prime}(t)
$$

**Variables and units:** g: inner variable; f: outer response; t: independent variable. Units multiply through the two derivatives.

**Assumptions:** f and g differentiable at the required point.

**When and why:** Combine a sensor calibration and a changing displacement.

### E4. Definite integral evaluation

$$
\int_a^b f(x)\, dx=F(b)-F(a),\qquad F\,^{\prime}=f
$$

**Variables and units:** a, b: input limits; f: rate or distributed quantity; F: accumulated quantity. Integral units are [f][x].

**Assumptions:** f continuous on the interval for the elementary theorem.

**When and why:** Calculate a net displacement from velocity.

### E5. Interior optimum check

$$
J'(x_*)=0;\qquad J''(x_*)<0\ \Rightarrow\ \text{strict local maximum}
$$

**Variables and units:** J: objective; x*: interior candidate; J prime has [J]/[x]; J double prime has [J]/[x]².

**Assumptions:** Twice differentiable near an interior candidate; also evaluate feasible boundaries.

**When and why:** Select a candidate enclosure dimension without mistaking a local condition for global feasibility.

## D. Representative engineering problems

All numbers are original assumed benchmarks for this research package. They are not claimed to be Brewster's assignments or project results.

### D1. Read motion from a position law

**Given:** x(t)=(3 m/s²)t² for 0≤t≤3 s.

**Required:** Position, velocity and acceleration at t=2 s.

**Relevant principles:** Local rates and units.

**Governing equations:** E2.

**Solution method:** Differentiate once and twice; substitute only after differentiation; compare tangent direction with the position curve.

**Assumptions:** Prescribed smooth one-dimensional motion, not a measured vehicle record.

**Common mistakes:** Substituting time before differentiating, or using position/time as instantaneous velocity.

**Worked result:** x=12 m; v=(6 m/s²)t=12 m/s; a=6 m/s².

### D2. Find a feasible maximum area

**Given:** A rectangular test enclosure has perimeter 4 m and sides x and y.

**Required:** Dimensions that maximize area.

**Relevant principles:** Constrained single-variable optimization.

**Governing equations:** E5 and A=x(2 m-x).

**Solution method:** Use y=2 m-x; domain 0<x<2 m; differentiate A; evaluate the stationary point and limiting boundary areas.

**Assumptions:** Thin boundary of fixed perimeter; no thickness or access constraints.

**Common mistakes:** Ignoring the feasible domain or reporting only the zero of the derivative.

**Worked result:** A prime=2 m-2x=0 gives x=y=1 m; A double prime=-2; maximum area=1 m².

### D3. Accumulate a velocity history

**Given:** v(t)=2 m/s+(1 m/s²)t on 0≤t≤4 s.

**Required:** Net displacement over the interval.

**Relevant principles:** Signed accumulation and the Fundamental Theorem.

**Governing equations:** E4.

**Solution method:** Integrate velocity with respect to time; evaluate the antiderivative at both bounds; check units and velocity sign.

**Assumptions:** The prescribed velocity model applies throughout the interval.

**Common mistakes:** Omitting the lower-bound value or interpreting an integral as an average.

**Worked result:** Displacement=[(2 m/s)t+(0.5 m/s²)t²]0^4=8 m+8 m=16 m.

## E. Personal coursework evidence

The supplied degree-audit crops list MATH 201. They do not show a completion flag, grade, semester, section or transfer-credit label. No original course assignment, lab dataset or submitted report was reviewed for this class. General engineering projects may use related mathematics, but are not assigned to this course by inference.

## F. Challenges and resolutions

No course-specific autobiographical challenge and successful resolution is established. The common mistakes above are representative failure modes, not Brewster's experiences. A personal reflection can be added only after an original calculation, iteration or student account identifies what went wrong, what changed, and what evidence supports the result.

## G. Technical capabilities represented

The technical capabilities represented are defining single-variable models, differentiating composed functions, identifying candidate extrema, evaluating definite integrals, and checking dimensions. An authentic future artifact would be one original calculation or notebook that includes the model, plot and interpretation. The course-specific assignment and personal challenge have not yet been established from the available records.

## H. Applications

For vehicle engineering, these tools describe motion and turn measured rates into changes in speed or position. In mechanical product design, derivatives reveal how a dimension changes volume or clearance, while constraints prevent an attractive mathematical optimum from becoming an impossible part. These applications make the mathematical reasoning visible without requiring a large physical build.

## I. Visual and authentic-artifact plan

Included:[MATH_201_illustrative_position_tangent.png](assets/MATH_201_illustrative_position_tangent.png). Caption: Illustrative prescribed motion x=3t² in SI units, with the tangent at t=2 s. Its slope is 12 m/s. Original explanatory plot, not a student assignment result. Place after the representative example.

Recommended authentic replacement/addition: An actual original motion or constrained-optimization calculation with its graph, assumptions and interpretation. This is a request for an existing artifact, not a claim that the artifact exists or an instruction to fabricate data. Keep it separate from the illustrative plot.

## J. Traceable references

See [SOURCES.md](SOURCES.md), whose P/E/D labels map principles, equations and problems to primary sources. Original numerical arithmetic is reproduced in the source script and independently checked in the package workflow.
