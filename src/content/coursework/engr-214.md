---
code: ENGR 214
title: Computational Analysis
summary: Uses programming and algorithms for engineering calculations involving matrices, data analysis and introductory numerical methods.
category: Computing & data
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- modern computer language
- structured programming
- algorithm design
- linear algebra
- statistical data analysis
- elementary numerical analysis
equations:
- title: Coupled linear system
  latex: A\mathbf{x}=\mathbf{b}
  note: '**Variables and units:** A coefficient matrix [row-dependent units]; x vector of unknowns [declared per component]; b right-hand-side vector [same units as each row of A x].


    **Assumptions and limitations:** Square nonsingular A for a unique solution; scaling and conditioning affect sensitivity.


    **Engineering use:** Solve coupled static, circuit or balance relationships with a numerical linear solver.

    **Reference:** '
- title: Linear least-squares fit
  latex: \mathbf{x}^*=\arg\min_{\mathbf{x}}\|A\mathbf{x}-\mathbf{b}\|_2^2
  note: '**Variables and units:** A design matrix; x fitted coefficients; b measured responses; residual components share consistent output units.


    **Assumptions and limitations:** A full-column-rank matrix gives unique coefficients; uncertainty inference needs an error model.


    **Engineering use:** Fit a line to measurement data; QR or SVD avoids the conditioning penalty of normal equations.

    **Reference:** '
- title: Bisection midpoint
  latex: c_k=\frac{a_k+b_k}{2}
  note: '**Variables and units:** a_k,b_k current bracket endpoints [input unit]; c_k next midpoint [same unit]; f has declared output unit.


    **Assumptions and limitations:** f continuous on the bracket and endpoint values of opposite sign; preserve a sign-changing bracket. After N halvings, midpoint error of the remaining interval is <= (b_0-a_0)/2^(N+1).


    **Engineering use:** Find an operating input where a continuous engineering residual is zero.

    **Reference:** '
- title: Composite trapezoidal rule
  latex: \int_{t_0}^{t_n}v(t)\,dt\approx\sum_{i=0}^{n-1}\frac{v_i+v_{i+1}}{2}(t_{i+1}-t_i)
  note: '**Variables and units:** t_i sample times [s]; v_i velocity [m/s]; integral displacement [m]; n number of subintervals.


    **Assumptions and limitations:** Ordered samples; adequate temporal resolution; smoothness supports convergence estimates.


    **Engineering use:** Estimate displacement from sampled velocity or energy from sampled power.

    **Reference:** '
- title: Forward Euler step
  latex: y_{n+1}=y_n+h f(t_n,y_n)
  note: '**Variables and units:** y modeled state [state unit]; h time step [s]; f=dy/dt [state unit/s].


    **Assumptions and limitations:** An initial value is known; sufficiently smooth solution; explicit method must meet stability and accuracy requirements.


    **Engineering use:** Introduce time integration for a simple first-order dynamic model and compare with its exact solution.

    **Reference:** '
figures:
- src: /images/engr-214-ENGR_214_illustrative_trapezoidal_integration.png
  alt: Original illustrative trapezoidal integration of assumed velocity samples. The 4 m area is a benchmark, not output from Brewster coursework.
  caption: Original illustrative trapezoidal integration of assumed velocity samples. The 4 m area is a benchmark, not output from Brewster coursework.
sources:
- title: Bucknell 2025-2026 catalog - Engineering (College of Engineering, interdisciplinary)
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
- title: 'University of Illinois :  Scientific Computing educational modules'
  url: https://heath.cs.illinois.edu/iem/
- title: 'University of Illinois CS 357 :  Rounding'
  url: https://cs357.cs.illinois.edu/textbook/notes/rounding.html
- title: University of Illinois CS 357 - LU Decomposition for Solving Linear Equations
  url: https://cs357.cs.illinois.edu/textbook/notes/linsys.html
officialTitle: Computational Analysis
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/ENGR_214_Computational_Analysis/TECHNICAL_REFERENCE.md
---

**Official identity:** Computational Analysis | Engineering (College of Engineering, interdisciplinary) | Catalog 2025-2026.

**Bucknell description, paraphrased:** Uses structured programming and numerical methods for engineering matrices, data analysis and calculations. [BU_ENGR_2025]

## Course overview

Computational analysis is the connection between an engineering model and a reproducible calculation. A program should make the inputs, assumptions, algorithm, and outputs visible enough that another person can understand why the answer changes. This subject is relevant whenever a mechanical problem involves repeated calculations, coupled equations, measured data, or a result that cannot be obtained conveniently by hand. A central question is how to use computation to explore a design while retaining physical judgment about the result. That means checking units, recognizing numerical error, and comparing a calculation with a simpler case. The value of the code is the analysis it supports, rather than the number of lines it contains.

## Principles that matter

**Formulate before programming.** A calculation begins with the unknowns, governing relationships, inputs, and required output. Structured code keeps those responsibilities clear. Repeated operations belong in reusable functions, while physical constants and design parameters should remain explicit. The Bucknell catalog documents programming and numerical analysis, but does not identify a particular language for this course.

**Choose a method that fits the problem.** Linear systems, data fitting, root finding, numerical integration, and time stepping solve different mathematical tasks. A method that runs successfully may still be inappropriate for the equation or data. For example, fitting a noisy dataset is different from forcing a curve through every observation.

**Distinguish model error from numerical error.** Smaller numerical error does not repair an incorrect governing assumption. Conversely, a sound model can give an inaccurate result if the algorithm is unstable, poorly conditioned, or used with an unsuitable step size. Sensitivity and convergence checks help identify which issue requires attention.

## Core relationships

A coupled linear engineering model can be written as

$$
A\mathbf{x}=\mathbf{b}
$$

A root-finding problem seeks an input where a residual changes to zero, while numerical integration approximates an accumulated quantity from a function or sampled values. The detailed reference includes least squares, bisection, the composite trapezoidal rule, and forward Euler time stepping. Each relationship is paired with its assumptions and an engineering use.

## Representative numerical example

Consider a hypothetical velocity history, in metres per second, of 0, 2, and 4 at times 0, 1, and 2 seconds. The trapezoidal rule gives an accumulated displacement of 4 m. Because this particular history is linear, the result agrees with the exact area under the line. That agreement checks this simple case; it does not establish that the same time spacing is adequate for an arbitrary transient. The supplied plot makes the relationship between samples and accumulated displacement visible. It is an original instructional example rather than output from an aircraft project model.

## Engineering applications and technical focus

In aircraft analysis, repeated parameter calculations allow a configuration to be examined across operating conditions. In mechanical testing, numerical integration can convert sampled rate data into an accumulated quantity, with attention to units and sampling. In product design, solving coupled equations can support a parameter study before a more detailed simulation is justified.

My résumé identifies MATLAB, Python, and Java as technical tools, and separate aircraft materials document a MATLAB modeling project. Those records establish programming activity, but do not prove which language or assignments belonged to ENGR 214. The course-level technical focus is structured algorithms, matrix calculations, numerical approximation, data analysis, and interpretable plotting. The aircraft project page contains that modeling work.

## Reasoning and evidence

A practical review compares a program with a hand calculation, checks limiting cases, examines residuals, and repeats an approximation with a refined step or tolerance. It also records which input values produced the displayed output. These are standard verification methods; they are not presented as a personal debugging success without evidence. A short genuine script paired with its actual plot would provide stronger course evidence than a screenshot of code alone. The numerical examples in this draft demonstrate methods and do not certify an existing program or claim that any supplied MATLAB package was executed.

## Further technical detail and visuals

Technical reference contains the complete equation definitions, assumptions, and representative solution methods. References identify official course information and standard technical sources.
