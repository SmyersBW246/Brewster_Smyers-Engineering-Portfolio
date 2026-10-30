# MATH 212 | Detailed technical reference

## A. Verified course scope

**Official title:** Differential Equations

**Department:** Mathematics & Statistics. **Catalog:** 2025-2026.

**Description, paraphrased:** Develops ordinary differential-equation methods, coupled linear systems and Laplace transforms with applications.

**Documented topic labels:** ordinary differential equation solution methods; linear differential equation systems; Laplace transform; applications; selected topics.

**Public course-specific objectives:** No separate course learning-objective list was located in the retrieved records. Catalog subject coverage is verified; supplementary sources do not establish Bucknell-specific teaching.

The mathematical material and worked examples below are standard subject explanations, not evidence that these exact examples were taught or assigned at Bucknell.

## B. Core principles

### P1. Initial conditions select a response

**Explanation:** A differential equation describes a family of trajectories; initial values select the physically relevant member.

**Physical or mathematical significance:** Initial displacement and velocity can affect the transient even under the same forcing.

**Assumptions and limits:** Enough compatible initial conditions and a locally well-posed equation.

**Engineering use:** Predicting motion after a known release.

### P2. Time constants and equilibria

**Explanation:** A stable first-order linear response approaches its equilibrium exponentially when the input is constant.

**Physical or mathematical significance:** The time constant sets the decay rate of the initial deviation.

**Assumptions and limits:** Constant positive time constant and a lumped linear model.

**Engineering use:** A simple cooling or sensor-lag model.

### P3. Homogeneous and particular solutions

**Explanation:** For linear equations, a general response is the sum of complementary and particular terms.

**Physical or mathematical significance:** The initial state and persistent input play different roles.

**Assumptions and limits:** Linearity and the appropriate solution interval; superposition is not a universal nonlinear rule.

**Engineering use:** Forced mechanical vibration.

### P4. Transforms preserve initial information

**Explanation:** The Laplace derivative rule includes the starting value and converts a suitable ODE into algebra.

**Physical or mathematical significance:** Forgetting the initial term changes the physical problem.

**Assumptions and limits:** Signals admit the transform; use the appropriate convergence region and transform convention.

**Engineering use:** Step inputs and linear initial-value problems.

### P5. Coupled-state representation

**Explanation:** A higher-order ODE can be expressed as a system of first-order state equations.

**Physical or mathematical significance:** A matrix organizes interacting positions, velocities or other stored quantities.

**Assumptions and limits:** State definitions and dimensions must be consistent; matrix eigenvalues describe the homogeneous linear system.

**Engineering use:** Vehicle or robotic subsystem models.

## C. Core equations

### E1. Stable first-order step response

$$
\tau\dot y+y=u_0,\qquad y(t)=u_0+[y(0)-u_0]e^{-t/\tau}
$$

**Variables and units:** tau: time constant [s]; t: time [s]; y, u0: same response units; dot y:[y]/s.

**Assumptions:** Constant input u0, constant tau>0, and initial-value model valid for t≥0.

**When and why:** Predict a sensor output or normalized thermal response.

### E2. Mass-spring-damper equation

$$
m\ddot x+c\dot x+kx=F(t)
$$

**Variables and units:** m: mass [kg]; c: damping [N·s/m]; k: stiffness [N/m]; x: displacement [m]; F: force [N].

**Assumptions:** Linear spring and viscous damper; single translational degree of freedom; motion about equilibrium.

**When and why:** Study an idealized mechanical vibration response.

### E3. Natural frequency and damping ratio

$$
\omega_n=\sqrt{k/m},\qquad \zeta=\frac{c}{2\sqrt{km}}
$$

**Variables and units:** omega_n: undamped natural angular frequency [rad/s]; zeta: dimensionless damping ratio; other terms as E2.

**Assumptions:** m>0, k>0; linear constant coefficients.

**When and why:** Classify an ideal oscillator before computing its motion.

### E4. Laplace derivative rule

$$
\mathcal L\{\dot y\}=sY(s)-y(0)
$$

**Variables and units:** Y: Laplace transform of y, units [y]·s for time in seconds; s: transform variable [s^-1].

**Assumptions:** Unilateral transform; required growth/regularity conditions hold.

**When and why:** Carry an initial value into an algebraic transformed model.

### E5. Linear state model

$$
\dot{\mathbf z}=A\mathbf z+B\mathbf u,\qquad \mathbf z(t)=e^{At}\mathbf z(0)\ \text{if}\ \mathbf u=0
$$

**Variables and units:** z: defined state vector; u: input vector; A, B: coefficients with units matching each state equation. If all z share units, A entries have s^-1.

**Assumptions:** Constant matrices and a linear model; exponential expression shown only for zero input.

**When and why:** Organize coupled first-order equations.

## D. Representative engineering problems

All numbers are original assumed benchmarks for this research package. They are not claimed to be Brewster's assignments or project results.

### D1. Compute a cooling transient

**Given:** T0=80°C, Tinfinity=20°C, tau=30 s.

**Required:** Temperature after 30 s and asymptotic limit.

**Relevant principles:** First-order decay of a temperature difference.

**Governing equations:** E1 with y=T-Tinfinity and u0=0.

**Solution method:** Write the equation for temperature difference; apply the initial deviation60 K; evaluate the exponential; check the long-time limit.

**Assumptions:** Lumped constant-property body in a constant environment; no heat generation.

**Common mistakes:** Using Celsius temperature itself in an absolute-temperature law or omitting the environment offset.

**Worked result:** T(30)=20+60/e=42.0728°C; T approaches20°C.

### D2. Classify and solve free vibration

**Given:** m=1 kg, c=2 N·s/m, k=5 N/m; F=0; x0=0.010 m, v0=0.

**Required:** Damping class and displacement function.

**Relevant principles:** Homogeneous second-order linear ODE and initial conditions.

**Governing equations:** E2-E3.

**Solution method:** Compute omega_n and zeta; solve roots r²+2r+5=0; use x=e^-t(A cos2t+B sin2t); apply x0 and v0.

**Assumptions:** Ideal linear one-degree-of-freedom system; time measured in seconds.

**Common mistakes:** Confusing angular frequency with cycles per second or forgetting velocity initial condition.

**Worked result:** omega_n=sqrt5=2.2361 rad/s; zeta=1/sqrt5=0.4472; underdamped. x(t)=0.010e^[-(1/s)t]{cos[(2/s)t]+0.5sin[(2/s)t]} m.

### D3. Track two uncoupled normalized states

**Given:** zdot1=-(1 s^-1)z1; zdot2=-(2 s^-1)z2; z(0)=(1, 2), dimensionless.

**Required:** State vector at t=1 s and stability interpretation.

**Relevant principles:** Matrix exponential and negative real eigenvalues.

**Governing equations:** E5.

**Solution method:** Form diagonal A; exponentiate each diagonal rate; apply initial state; check both states tend tozero.

**Assumptions:** Constant diagonal linear system with zero input.

**Common mistakes:** Exchanging the two rates or using a matrix inverse instead of a matrix exponential.

**Worked result:** z(1 s)=(e^-1, 2e^-2)=(0.367879, 0.270671); both decay.

### D4. Solve an initial-value problem by transform

**Given:** ydot+(1 s^-1)y=1 s^-1; y(0)=0; y dimensionless.

**Required:** y(t).

**Relevant principles:** Laplace derivative and partial fractions.

**Governing equations:** E4.

**Solution method:** Define nondimensional time theta=t/(1 s). The equation becomes dy/dtheta+y=1. With transform variable p, the derivative rule gives(p+1)Ytheta=1/p, so Ytheta=1/[p(p+1)]=1/p-1/(p+1). Invert as1-exp(-theta).

**Assumptions:** Constant step from t=0; transform exists for suitable real part.

**Common mistakes:** Treating a dimensional Laplace variable as dimensionless or dropping the input step.

**Worked result:** y(t)=1-exp[-t/(1 s)]; initial value 0, asymptotic value 1.

## E. Personal coursework evidence

The supplied degree-audit crops list MATH 212. They do not show a completion flag, grade, semester, section or transfer-credit label. No original course assignment, lab dataset or submitted report was reviewed for this class. General engineering projects may use related mathematics, but are not assigned to this course by inference.

## F. Challenges and resolutions

No course-specific autobiographical challenge and successful resolution is established. The common mistakes above are representative failure modes, not Brewster's experiences. A personal reflection can be added only after an original calculation, iteration or student account identifies what went wrong, what changed, and what evidence supports the result.

## G. Technical capabilities represented

The capabilities represented are formulating initial-value problems, classifying linear responses, separating homogeneous and forced terms, using transforms, and converting a higher-order equation into a first-order system. An authentic addition would be one original transient model with code, a plotted result and a documented hand-check. Available records do not yet establish a particular course assignment or a personal modeling error that was successfully corrected.

## H. Applications

In vehicle dynamics, linear differential equations provide a starting point for studying suspension vibration and damping. In mechanical product development, transient models describe how a temperature, sensor or actuator response approaches an operating state. In robotics, coupled equations organize several states and reveal whether a predicted response decays or grows, before a more detailed model is introduced.

## I. Visual and authentic-artifact plan

Included:[MATH_212_illustrative_cooling_transient.png](assets/MATH_212_illustrative_cooling_transient.png). Caption: Illustrative first-order cooling model: 80°C initially, 20°C environment, tau=30 s. At30 s the prediction is42.073°C. Assumed model, not measured student thermal data. Place after the representative example.

Recommended authentic replacement/addition: An actual transient-model notebook or MATLAB script with equation, parameter units, initial conditions, response plot and independent check. This is a request for an existing artifact, not a claim that the artifact exists or an instruction to fabricate data. Keep it separate from the illustrative plot.

## J. Traceable references

See [SOURCES.md](SOURCES.md), whose P/E/D labels map principles, equations and problems to primary sources. Original numerical arithmetic is reproduced in the source script and independently checked in the package workflow.
