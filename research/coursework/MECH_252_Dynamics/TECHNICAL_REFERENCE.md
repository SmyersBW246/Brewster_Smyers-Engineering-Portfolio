# MECH 252 | Dynamics: technical reference

## Evidence boundary

**Bucknell-verified:** Studies planar rigid-body motion using kinematics, force, energy and momentum approaches, including vibration and computational solutions. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 252.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except any explicitly attributed personal source quantities.

**Personal coursework:** MECH 252 appears in image.png and Dynamics is listed in the résumé. Neither establishes the term or completion date. No course assignment, motion trace or vibration measurement was reviewed. The ski-jump page documents an independent March 2020 build with practical adjustments; it cannot be presented as university coursework or quantitative dynamics testing.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. Kinematics and constraints

**Technical explanation:** Relate the positions, velocities and accelerations of connected bodies before calculating forces. Rigid-body points have equal angular velocity but generally different linear velocities.

**Physical significance:** Prevents impossible mechanism motion.

**Assumptions and limits:** Rigid links; joints and rolling constraints must match the actual device.

**Engineering application:** Robot linkage motion.

**Source:** STD-MECH252-01; full URL in [Sources](SOURCES.md).

### P2. Newton-Euler kinetics

**Technical explanation:** Sum external forces for center-of-mass translation and external moments about the mass center for planar rotation.

**Physical significance:** Converts desired acceleration into actuator and support loads.

**Assumptions and limits:** Constant mass; inertial reference frame; planar rotational equation.

**Engineering application:** Motor-driven disk acceleration.

**Source:** STD-MECH252-02; full URL in [Sources](SOURCES.md).

### P3. Work and energy

**Technical explanation:** Use the net work of external actions to track changes in translational and rotational kinetic energy; include potential-energy changes consistently.

**Physical significance:** Offers a direct route to speed without solving time history.

**Assumptions and limits:** Account for friction, spring energy and constraints; energy alone may not determine reactions.

**Engineering application:** A flywheel or lifting mechanism.

**Source:** STD-MECH252-03; full URL in [Sources](SOURCES.md).

### P4. Impulse and momentum

**Technical explanation:** Integrating external force over time changes linear momentum; angular impulse changes angular momentum about an appropriate reference.

**Physical significance:** Connects brief force histories to velocity changes.

**Assumptions and limits:** Choose a fixed inertial point or mass center carefully; collision losses need an additional model.

**Engineering application:** Robot end-stop impact.

**Source:** STD-MECH252-04; full URL in [Sources](SOURCES.md).

### P5. Linear vibration

**Technical explanation:** A mass, spring and viscous damper form a simple dynamic model with characteristic frequency and decay. Forcing near a natural frequency can amplify motion.

**Physical significance:** Relates component compliance to time-dependent response.

**Assumptions and limits:** Small motion, linear stiffness, viscous damping and lumped mass; many real systems need multiple modes.

**Engineering application:** Isolation mounts for machinery.

**Source:** STD-MECH252-05; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Planar Newton-Euler equations

\[
\sum\mathbf F=m\mathbf a_G,\qquad\sum M_G=I_G\alpha
\]

**Variables and units:** F [N]; m [kg]; a_G [m/s²]; M_G [N·m]; I_G [kg·m²]; alpha [rad/s²].

**Assumptions:** Constant mass and inertia; inertial frame; planar rigid body. Do not substitute an arbitrary moving pivot into the simple moment equation.

**When and why used / application:** Calculate drive torque and support forces.

**Source:** STD-MECH252-02; equations are standard technical content.

### E2. Rigid-body relative motion

\[
\mathbf v_B=\mathbf v_A+\boldsymbol\omega\times\mathbf r_{B/A},\quad\mathbf a_B=\mathbf a_A+\boldsymbol\alpha\times\mathbf r_{B/A}+\boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r_{B/A})
\]

**Variables and units:** v [m/s]; a [m/s²]; r [m]; omega [rad/s]; alpha [rad/s²]; A and B are fixed material points on one rigid body.

**Assumptions:** Inertial vector description for two points fixed in a rigid body; no relative sliding term.

**When and why used / application:** Linkage endpoint velocity and acceleration.

**Source:** STD-MECH252-01; equations are standard technical content.

### E3. Rigid-body work and kinetic energy

\[
T=\frac12mv_G^2+\frac12I_G\omega^2,\qquad T_2-T_1=W_{1\to2}
\]

**Variables and units:** T, W [J]; m [kg]; v_G [m/s]; I_G [kg·m²]; omega [rad/s].

**Assumptions:** Planar rigid body; W is net work of all relevant external forces/couples, including gravity if not separately represented as potential energy.

**When and why used / application:** Estimate flywheel speed after known drive work.

**Source:** STD-MECH252-03; equations are standard technical content.

### E4. Linear impulse-momentum

\[
\int_{t_1}^{t_2}\sum\mathbf F\,dt=m(\mathbf v_{G,2}-\mathbf v_{G,1})
\]

**Variables and units:** Force [N]; time [s]; impulse [N·s]; m [kg]; velocity [m/s].

**Assumptions:** Constant mass and inertial frame. Include all external impulses significant over the interval.

**When and why used / application:** Estimate average end-stop force from a known stopping time.

**Source:** STD-MECH252-04; equations are standard technical content.

### E5. Linear mass-spring-damper

\[
m\ddot x+c\dot x+kx=F(t),\quad\omega_n=\sqrt{k/m},\quad\zeta=\frac{c}{2\sqrt{km}}
\]

**Variables and units:** x [m] measured from static equilibrium; m [kg]; c [N·s/m]; k [N/m]; F [N]; omega_n [rad/s]; zeta [1].

**Assumptions:** Linear one-degree-of-freedom model; viscous damping; constant parameters.

**When and why used / application:** Estimate vibration response of a sensor support or machine mount.

**Source:** STD-MECH252-05; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Accelerating a motor-driven disk

**Given:** Uniform disk m=4.0 kg, R=0.15 m, motor torque 1.2 N·m, resistance 0.2 N·m; rest initial state, 2.0 s drive.

**Required:** Angular acceleration and final angular speed.

**Principles:** Fixed-axis kinetics; mass moment of inertia.

**Equations:** E1; I= mR²/2; omega=omega0+alpha t.

**Solution methodology:** Draw the applied and resisting torques; calculate I, net torque, alpha, and speed. Check net work against kinetic energy.

**Assumptions:** Fixed axis; constant net torque; negligible compliance.

**Common mistakes:** Using area moment of inertia or omitting resistance.

**Worked result:** I=0.045 kg·m²; alpha=(1.2−0.2)/0.045=22.22 rad/s²; omega=44.44 rad/s. Rotation is 44.44 rad, so net work=44.44 J equals the final kinetic energy.

### D2. Instantaneous motion of a link

**Given:** Link AB horizontal, length 0.25 m, A instantaneously fixed; omega=4 rad/s counterclockwise; alpha=3 rad/s² counterclockwise.

**Required:** Velocity and acceleration of B.

**Principles:** Relative rigid-body kinematics.

**Equations:** E2.

**Solution methodology:** Set r_B/A=0.25 i; evaluate both cross products; preserve normal and tangential acceleration components.

**Assumptions:** A fixed in the inertial frame; rigid link.

**Common mistakes:** Treating zero endpoint velocity as zero endpoint acceleration or omitting centripetal acceleration.

**Worked result:** v_B=1.00 j m/s; a_B=−4.00 i+0.75 j m/s².

### D3. Stopping an actuator carriage

**Given:** Carriage mass 2.0 kg, initial speed 0.60 m/s, stop time 0.020 s; horizontal motion; negligible other horizontal impulse.

**Required:** Average stopping-force magnitude.

**Principles:** Impulse-momentum.

**Equations:** E4.

**Solution methodology:** Choose positive initial motion; integrate force as average force times stop time; solve the signed momentum change.

**Assumptions:** Constant mass; average force requested, not peak force.

**Common mistakes:** Reporting average force as measured peak load; mixing milliseconds and seconds.

**Worked result:** Average signed force=2(0−0.60)/0.020=−60 N; magnitude 60 N.

### D4. Free vibration of a light mount

**Given:** m=0.50 kg, k=200 N/m, c=1.0 N·s/m, initial displacement 0.010 m, initial velocity zero.

**Required:** Natural frequency, damping ratio and response type.

**Principles:** Linear vibration.

**Equations:** E5.

**Solution methodology:** Calculate omega_n and zeta; determine whether underdamped; apply initial conditions for x(t); compare settling behavior across c.

**Assumptions:** Single mode and linear parameters.

**Common mistakes:** Confusing rad/s with Hz; measuring displacement from an unloaded rather than equilibrium position.

**Worked result:** omega_n=20 rad/s; f_n=3.183 Hz; zeta=0.050; underdamped. With omega_d=19.975 rad/s, x=exp(−t)[0.010 cos(omega_d t)+0.0005006 sin(omega_d t)] m.

## E. Personal project evidence

MECH 252 appears in image.png and Dynamics is listed in the résumé. Neither establishes the term or completion date. No course assignment, motion trace or vibration measurement was reviewed. The ski-jump page documents an independent March 2020 build with practical adjustments; it cannot be presented as university coursework or quantitative dynamics testing.

## F. Challenges and evidence limits

No personal class-specific struggle or proven resolution was found. Do not claim that Brewster fixed a rotational-inertia, constraint, or vibration error. These are representative risks only.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_252_Illustrative_Damped_Response.png).

**Caption:** Original illustrative linear vibration response for m=0.50 kg, k=200 N/m and c=1.0 N·s/m, released from 10 mm with zero initial velocity. Analytical model, not measured student data.

**Best authentic addition:** An actual linkage velocity/acceleration diagram, a rotating-system calculation, or an original motion/vibration trace with its measurement method.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
