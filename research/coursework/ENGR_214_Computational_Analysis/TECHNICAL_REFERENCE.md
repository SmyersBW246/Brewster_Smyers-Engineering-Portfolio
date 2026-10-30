# ENGR 214: detailed technical reference

## Evidence boundary

Official Bucknell coverage: modern computer language, structured programming, algorithm design, linear algebra, statistical data analysis, elementary numerical analysis, scientific application package. [BU_ENGR_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. Algorithmic decomposition

Define inputs, physical model, numerical algorithm and output separately. Functions and explicit parameters make a calculation easier to reproduce and check. A structured program cannot guarantee a correct engineering model. Use the approach for a family of operating-point calculations. [STD-ENGR214-01]

### P2. Finite precision and error

Floating-point arithmetic represents numbers approximately; truncation also arises when replacing a continuous operation by discrete steps. Smaller steps can reduce truncation while exposing roundoff. Use scale-aware tolerances and a simple benchmark when evaluating a computed design quantity. [STD-ENGR214-02]

### P3. Linear algebra and conditioning

A matrix expresses coupled relationships compactly. Conditioning describes the sensitivity of the solution to changes in inputs; it is different from the stability of the chosen solver. Use a factorization or library solver, rather than forming an explicit inverse as a routine method, for engineering balance equations. [STD-ENGR214-03]

### P4. Approximation and fitting

Least squares finds coefficients that minimize residuals when a model need not pass through each observation. Interpolation instead honors data values exactly. The distinction matters for noisy measurements and parameter estimation. A low residual alone does not verify a model outside the measured range. [STD-ENGR214-04]

### P5. Convergence and algorithm choice

Bracketed root finding, quadrature and time stepping each require mathematical conditions. Refine a tolerance or step and inspect the change in the result, while retaining a physical check. Convergence to a numerical answer is evidence about the discretization, not validation against a real experiment. [STD-ENGR214-05,STD-ENGR214-06,STD-ENGR214-07]

## C. Core equations

### E1. Coupled linear system

\[
A\mathbf{x}=\mathbf{b}
\]

**Variables and units:** A coefficient matrix [row-dependent units]; x vector of unknowns [declared per component]; b right-hand-side vector [same units as each row of A x].

**Assumptions and limitations:** Square nonsingular A for a unique solution; scaling and conditioning affect sensitivity.

**Engineering use:** Solve coupled static, circuit or balance relationships with a numerical linear solver.
**Reference:** [STD-ENGR214-03]

### E2. Linear least-squares fit

\[
\mathbf{x}^*=\arg\min_{\mathbf{x}}\|A\mathbf{x}-\mathbf{b}\|_2^2
\]

**Variables and units:** A design matrix; x fitted coefficients; b measured responses; residual components share consistent output units.

**Assumptions and limitations:** A full-column-rank matrix gives unique coefficients; uncertainty inference needs an error model.

**Engineering use:** Fit a line to measurement data; QR or SVD avoids the conditioning penalty of normal equations.
**Reference:** [STD-ENGR214-04]

### E3. Bisection midpoint

\[
c_k=\frac{a_k+b_k}{2}
\]

**Variables and units:** a_k,b_k current bracket endpoints [input unit]; c_k next midpoint [same unit]; f has declared output unit.

**Assumptions and limitations:** f continuous on the bracket and endpoint values of opposite sign; preserve a sign-changing bracket. After N halvings, midpoint error of the remaining interval is <= (b_0-a_0)/2^(N+1).

**Engineering use:** Find an operating input where a continuous engineering residual is zero.
**Reference:** [STD-ENGR214-06]

### E4. Composite trapezoidal rule

\[
\int_{t_0}^{t_n}v(t)\,dt\approx\sum_{i=0}^{n-1}\frac{v_i+v_{i+1}}{2}(t_{i+1}-t_i)
\]

**Variables and units:** t_i sample times [s]; v_i velocity [m/s]; integral displacement [m]; n number of subintervals.

**Assumptions and limitations:** Ordered samples; adequate temporal resolution; smoothness supports convergence estimates.

**Engineering use:** Estimate displacement from sampled velocity or energy from sampled power.
**Reference:** [STD-ENGR214-05]

### E5. Forward Euler step

\[
y_{n+1}=y_n+h f(t_n,y_n)
\]

**Variables and units:** y modeled state [state unit]; h time step [s]; f=dy/dt [state unit/s].

**Assumptions and limitations:** An initial value is known; sufficiently smooth solution; explicit method must meet stability and accuracy requirements.

**Engineering use:** Introduce time integration for a simple first-order dynamic model and compare with its exact solution.
**Reference:** [STD-ENGR214-07]

## D. Representative problems

### D1. Integrate sampled motion (illustrative, not personal coursework)

**Given:** Illustrative t=[0,1,2] s and v=[0,2,4] m/s.

**Required:** Displacement from 0 to 2 s and a consistency check.

**Relevant physical or mathematical principles:** Area under a velocity curve; composite trapezoidal rule.

**Governing equations:** E4 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** For each interval average the endpoint velocities, multiply by interval duration, then sum: (0+2)/2*1+(2+4)/2*1=1+3=4 m. Compare with the exact area of the linear velocity history.

**Assumptions:** Linear velocity between samples for this benchmark; no unobserved oscillation.

**Common mistakes:** Omitting interval widths, using speed when signed displacement is required, or treating exact agreement for a line as general accuracy.

**Worked result or expected output:** Displacement 4.00 m; exact for this chosen linear history.

### D2. Check a linear solve (illustrative, not personal coursework)

**Given:** Illustrative equations 2x+y=5 and x+3y=5; x,y expressed in the same chosen displacement unit.

**Required:** Both unknowns and residual vector.

**Relevant physical or mathematical principles:** Coupled linear equations and substitution/residual verification.

**Governing equations:** E1 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Assemble A=[[2,1],[1,3]], b=[5,5]. Solve by elimination or a library factorization: y=1 and x=2. Substitute in both equations; calculate A x-b. Retain consistent dimensions for the coefficients.

**Assumptions:** Nonsingular coefficient matrix; illustrative exact values.

**Common mistakes:** Swapping column order without updating variable labels, transposing an input vector unexpectedly, or relying only on a printed solution.

**Worked result or expected output:** x=2, y=1; residual vector is [0,0] in exact arithmetic.

### D3. Recognize time-step error (illustrative, not personal coursework)

**Given:** dy/dt=-lambda*y with lambda=1.00 s^-1, y(0)=1 in a stated state unit; h=0.5 s for two steps.

**Required:** Euler estimate at 1 s and comparison with the exact solution.

**Relevant physical or mathematical principles:** First-order decay and explicit time stepping.

**Governing equations:** E5 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Apply y_next=y(1-lambda*h): estimates 0.5 then 0.25. Exact y(1 s)=exp(-lambda*1 s)=0.367879. Repeat with a smaller step to inspect convergence before trusting a transient.

**Assumptions:** Fixed positive decay constant, fixed step and ideal scalar model; no real test data.

**Common mistakes:** Using an unstable step, mixing decay-rate units, or interpreting convergence as experimental validation.

**Worked result or expected output:** Euler 0.2500 versus exact 0.3679; absolute error 0.1179 state unit, relative error 32.04%.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image.png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/ENGR_214_illustrative_trapezoidal_integration.svg). Caption: Original illustrative trapezoidal integration of assumed velocity samples. The 4 m area is a benchmark, not output from Brewster coursework.

Recommended authentic artifact: One actual ENGR 214 script or notebook with inputs, a plotted result and a brief verification against a hand calculation. Link aircraft MATLAB work only as a separately documented project unless the class association is confirmed.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.
