# PHYS 211: detailed technical reference

## Evidence boundary

Official Bucknell coverage: Newtonian mechanics, relativity, thermodynamics, statistical mechanics, gravity. [BU_PHYS_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. System boundary and Newtonian dynamics

Net external force changes a system momentum. The simple m a form requires constant mass and an inertial frame in a classical regime. Vectors and force directions are essential. Use it for a first estimate of a vehicle or actuator load before introducing detailed effects. [STD-PHYS211-01]

### P2. Work and energy

Net work on a classical particle equals its kinetic-energy change. This connects force through displacement with speed change and avoids time integration in suitable problems. Define all forces and transfers; mechanical-energy conservation is not valid when unaccounted dissipative work matters. Use it for stopping-distance estimates. [STD-PHYS211-02]

### P3. Gravitational interaction

Inverse-square gravity applies to point masses and to external fields of spherically symmetric masses. Near a surface, an approximately constant g can simplify modest altitude changes. Use the center-to-center distance and distinguish mass from weight when selecting the approximation. [STD-PHYS211-03]

### P4. Macroscopic and microscopic thermal models

The ideal gas equation relates state variables, while classical molecular kinetic energy connects temperature with translational motion. Diluteness, equilibrium and the classical regime are assumptions. Rotational and vibrational modes can add to internal energy. Use these models to estimate a gas state without claiming a complete real-fluid description. [STD-PHYS211-04]

### P5. Relativistic frame dependence

Proper time is measured between events at one location in that clock frame. Another inertial frame can measure a longer interval by the Lorentz factor. The expression concerns specified events and frames, not a generic statement that every time interval grows. Use it to understand high-speed physical phenomena and the low-speed classical limit. [STD-PHYS211-05]

## C. Core equations

### E1. Constant-mass Newtonian motion

\[
\sum\mathbf F=m\mathbf a
\]

**Variables and units:** F external force vectors [N]; m mass [kg]; a acceleration vector [m/s^2].

**Assumptions and limitations:** Constant mass; inertial frame; nonrelativistic classical body model.

**Engineering use:** Estimate net force for a required acceleration or deceleration.
**Reference:** [STD-PHYS211-01]

### E2. Work-energy relation

\[
W_{net}=\Delta K=\frac12m(v_2^2-v_1^2)
\]

**Variables and units:** W_net net work [J]; K translational kinetic energy [J]; m [kg]; v_1,v_2 speeds [m/s].

**Assumptions and limitations:** Classical constant-mass particle model; force work includes all relevant contributors. For constant collinear force, W=F_parallel d.

**Engineering use:** Find braking force or speed change from a known distance.
**Reference:** [STD-PHYS211-02]

### E3. Gravitational-force magnitude

\[
F_g=G\frac{m_1m_2}{r^2}
\]

**Variables and units:** F_g attractive force magnitude [N]; G gravitational constant [m^3/(kg s^2)]; m_1,m_2 [kg]; r separation [m].

**Assumptions and limitations:** Point masses or external fields of spherical distributions; Newtonian regime.

**Engineering use:** Compare gravity at two distances or establish an orbit-force balance.
**Reference:** [STD-PHYS211-03]

### E4. Ideal gas state

\[
PV=Nk_BT=nRT
\]

**Variables and units:** P absolute pressure [Pa]; V [m^3]; N molecule count [dimensionless]; k_B=1.380649e-23 J/K; T [K]; n [mol]; R=N_A k_B [J/(mol K)].

**Assumptions and limitations:** Dilute classical equilibrium ideal gas; negligible molecular volume and interactions in the model.

**Engineering use:** Estimate gas pressure or inventory from a specified state.
**Reference:** [STD-PHYS211-04]

### E5. Average translational molecular energy

\[
\langle K_{trans}\rangle=\frac32k_BT
\]

**Variables and units:** Mean translational energy per molecule [J]; k_B [J/K]; T absolute temperature [K].

**Assumptions and limitations:** Classical equilibrium gas with three translational degrees of freedom; this is not total molecular internal energy when other modes contribute.

**Engineering use:** Connect a macroscopic gas temperature with microscopic translational motion.
**Reference:** [STD-PHYS211-06]

### E6. Time dilation

\[
\Delta t=\gamma\Delta\tau,\qquad \gamma=\frac{1}{\sqrt{1-v^2/c^2}}
\]

**Variables and units:** Delta tau proper interval [s] between events at one place in the clock frame; delta t interval in another inertial frame [s]; v relative speed [m/s]; c light speed [m/s]; gamma dimensionless.

**Assumptions and limitations:** Uniform relative inertial motion in special relativity, 0 <= v < c; correctly identified event pair and proper frame.

**Engineering use:** Compare timing of a moving clock and demonstrate the low-speed limit.
**Reference:** [STD-PHYS211-05]

## D. Representative problems

### D1. Stop an illustrative cart (illustrative, not personal coursework)

**Given:** m=2.00 kg, initial speed 3.00 m/s, final speed zero, stopping displacement 1.50 m.

**Required:** Constant opposing net force and acceleration.

**Relevant physical or mathematical principles:** Work-energy and Newton second law.

**Governing equations:** E1-E2 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Compute initial K=0.5*2*3^2=9.00 J. Net work is -9.00 J. Divide by positive stopping distance: F_parallel=-6.00 N. Then a=F/m=-3.00 m/s^2. Check v_f^2=v_i^2+2 a d=0.

**Assumptions:** Constant mass, constant net force and straight motion; no separate force decomposition or test record.

**Common mistakes:** Dropping the sign of work, treating mass as weight, or adding friction twice after net force is already specified.

**Worked result or expected output:** Opposing force magnitude 6.00 N; acceleration -3.00 m/s^2 with forward positive.

### D2. Connect thermal scales (illustrative, not personal coursework)

**Given:** One mole ideal gas at T=300 K in V=0.0250 m^3.

**Required:** Pressure and mean translational energy per molecule.

**Relevant physical or mathematical principles:** Ideal-gas state and classical molecular kinetic theory.

**Governing equations:** E4-E5 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Compute P=nRT/V=8.314462618*300/0.0250. Independently calculate 1.5*k_B*T. Distinguish a per-molecule energy from total gas internal energy.

**Assumptions:** Dilute equilibrium gas; translational energy only.

**Common mistakes:** Using Celsius, mixing one mole with one molecule, or claiming the translational value includes all molecular modes.

**Worked result or expected output:** P=99.77 kPa absolute; mean translational molecular energy=6.213e-21 J.

### D3. Compare clock intervals (illustrative, not personal coursework)

**Given:** A clock measures proper interval 2.00 microseconds between two ticks; another inertial frame sees it moving at 0.600c.

**Required:** Lorentz factor and coordinate-frame interval.

**Relevant physical or mathematical principles:** Special-relativistic time dilation.

**Governing equations:** E6 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Calculate gamma=1/sqrt(1-0.600^2)=1.25. Multiply the proper interval by gamma. Name which clock and frame define each interval.

**Assumptions:** Uniform relative motion and events at the same place in the clock rest frame.

**Common mistakes:** Multiplying by 0.600 directly, interchanging proper and coordinate time, or applying the expression without defining events.

**Worked result or expected output:** gamma=1.25; other-frame interval=2.50 microseconds.

### D4. Check gravitational scaling (illustrative, not personal coursework)

**Given:** The center-to-center separation of two fixed masses doubles; masses unchanged.

**Required:** Ratio of gravitational-force magnitudes.

**Relevant physical or mathematical principles:** Inverse-square gravitation.

**Governing equations:** E3 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Write F_2/F_1=(r_1/r_2)^2. Substitute r_2=2r_1. State that the actual force direction remains attractive.

**Assumptions:** Point-mass or spherical external-field model and unchanged masses.

**Common mistakes:** Using surface gap instead of center separation, or assuming force halves when distance doubles.

**Worked result or expected output:** F_2/F_1=1/4.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image(5).png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/PHYS_211_illustrative_Lorentz_factor.svg). Caption: Original theoretical Lorentz factor versus relative speed divided by light speed. Assumed inertial-frame model; not experimental data or student project output.

Recommended authentic artifact: One genuine motion-analysis plot, force measurement or thermal laboratory report from PHYS 211, with its actual setup and units. A digital excerpt is enough; no additional physical build is recommended.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.