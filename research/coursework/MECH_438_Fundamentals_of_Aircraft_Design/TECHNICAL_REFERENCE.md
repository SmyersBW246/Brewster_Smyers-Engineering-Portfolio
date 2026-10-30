# MECH 438 | Fundamentals of Aircraft Design: technical reference

## Evidence boundary

**Bucknell-verified:** Introduces aircraft configuration and performance through computational models and a small-aircraft design, construction and flight component. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 438.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except any explicitly attributed personal source quantities.

**Personal coursework:** Direct user statement links MECH 438 to Spitfire and biplane mathematical models/reports. Supplied latest archive statically inspected:10.m functions+1.mat; no original separate Spitfire code/report or final MATLAB execution log available. Actual biplane screenshot shows concept geometry. Code methods/assumptions are documented; personal authorship of every line, successful execution, physical validation, and course completion remain unverified.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. Coupled configuration and mass sizing

**Technical explanation:** Total mass combines empty aircraft, payload and fuel. A configuration change affects weight, lift demand, drag and mission fuel.

**Physical significance:** Makes a closed mass/fuel loop necessary rather than changing one input in isolation.

**Assumptions and limits:** Conceptual masses and fuel rates are assumptions until sourced or measured; a bookkeeping closure does not prove physical feasibility.

**Engineering application:** Two-seat aircraft mission sizing.

**Source:** STD-MECH438-01; full URL in [Sources](SOURCES.md).

### P2. Lift and reference conventions

**Technical explanation:** Aerodynamic force is dynamic pressure times declared area and a coefficient dependent on configuration and flow state.

**Physical significance:** Explains why area and coefficient definitions must travel together across scripts.

**Assumptions and limits:** Steady representative conditions; finite-wing/biplane interference and Reynolds effects require suitable models/data.

**Engineering application:** Wing loading and lift requirements.

**Source:** STD-MECH438-02; full URL in [Sources](SOURCES.md).

### P3. Drag buildup and induced effects

**Technical explanation:** A preliminary drag model may combine a zero-lift term with a lift-dependent term. Interference and detailed geometry can change both.

**Physical significance:** Relates configuration and loading to propulsion demand.

**Assumptions and limits:** Parabolic polar is a limited approximation; lifting-line k for an isolated wing is not a complete biplane-interference model; calibration is not validation.

**Engineering application:** Power-required estimate.

**Source:** STD-MECH438-03; full URL in [Sources](SOURCES.md).

### P4. Propulsive power and climb

**Technical explanation:** Available propulsive power minus drag power can increase potential energy during a steady climb.

**Physical significance:** Separates engine shaft output from power that actually propels the aircraft.

**Assumptions and limits:** Steady speed and prescribed altitude/propeller performance; if speed changes, energy must also enter kinetic energy.

**Engineering application:** Screen climb feasibility.

**Source:** STD-MECH438-04; full URL in [Sources](SOURCES.md).

### P5. Trim and longitudinal static stability

**Technical explanation:** A steady condition requires pitching-moment balance in addition to force balance. Static margin measures longitudinal CG position relative to a neutral point under a declared convention.

**Physical significance:** An aircraft can have enough lift yet be untrimmable or statically unstable.

**Assumptions and limits:** Linearized small-disturbance model; static margin alone does not establish dynamic stability, handling qualities or control authority.

**Engineering application:** Tail sizing and CG trade study.

**Source:** STD-MECH438-05; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Dynamic pressure and lift

\[
q=\tfrac12\rho V^2,\quad L=qSC_L,\quad C_{L,\rm level}=\frac{W}{qS}
\]

**Variables and units:** q [Pa]; rho [kg/m³]; V true airspeed [m/s]; S declared aerodynamic reference area [m²]; L, W [N]; CL [1].

**Assumptions:** The last relation is steady unbanked level flight with lift balancing weight; aerobatics and turns require different load factors.

**When and why used / application:** Calculate the lift coefficient needed at a stated mass and speed.

**Source:** STD-MECH438-02; equations are standard technical content.

### E2. Preliminary drag polar

\[
D=qSC_D,\quad C_D=C_{D0}+kC_L^2,\quad k\simeq\frac{1}{\pi eAR}
\]

**Variables and units:** D [N]; q [Pa]; S [m²]; CD, CD0, k, e, AR [1]; AR=b²/S with b [m].

**Assumptions:** Parabolic subsonic polar; isolated-wing lifting-line expression for k is an approximation, not a complete biplane model. Maintain the same area convention in coefficients and aspect ratio.

**When and why used / application:** Explore drag sensitivity to speed and loading.

**Source:** STD-MECH438-03; equations are standard technical content.

### E3. One-g stall-speed model

\[
V_s=\sqrt{\frac{2W}{\rho SC_{L,\max}}}
\]

**Variables and units:** Vs [m/s]; W [N]; rho [kg/m³]; S [m²]; CLmax [1] for the whole configuration/reference convention.

**Assumptions:** Quasi-steady unbanked one-g condition; assumes an appropriate CLmax and no significant thrust vertical component. Manoeuvre stall speed differs with load factor.

**When and why used / application:** Screen a loading/wing-area combination.

**Source:** STD-MECH438-02; equations are standard technical content.

### E4. Required power and steady rate of climb

\[
P_{\rm req}=DV,\quad P_{\rm avail}=\eta_pP_{\rm shaft},\quad\mathrm{ROC}=\frac{P_{\rm avail}-P_{\rm req}}{W}
\]

**Variables and units:** P [W]; D, W [N]; V, ROC [m/s]; eta_p propeller efficiency [1].

**Assumptions:** Steady climb at constant airspeed with thrust aligned approximately with flight path; use actual altitude-dependent available power and suitable drag. No acceleration-energy term.

**When and why used / application:** Determine whether power surplus permits the scheduled climb.

**Source:** STD-MECH438-04; equations are standard technical content.

### E5. Discrete mission fuel and mass accounting

\[
m_{f,\rm trip}=\sum_i\dot m_{f, i}\Delta t_i,\quad m_{i+1}=m_i-\dot m_{f, i}\Delta t_i,\quad m_{f,\rm dispatch}=m_{f,\rm trip}+m_{f,\rm reserve}+m_{f,\rm contingency}
\]

**Variables and units:** mf, m [kg]; mdotf [kg/s]; deltat [s]; phase i; use fuel volume only with an explicit density conversion.

**Assumptions:** Phase-average rates assumed; reserve is retained rather than treated as an already-flown phase. This is a modeling budget, not a declaration of legal flight-planning compliance.

**When and why used / application:** Preserve mass, fuel-capacity and reserve consistency across a mission.

**Source:** STD-MECH438-01; equations are standard technical content.

### E6. Pitch trim and static margin

\[
\sum M_{CG}=0,\qquad SM=\frac{x_{NP}-x_{CG}}{\bar c}
\]

**Variables and units:** M [N·m]; xNP, xCG [m] measured aft from one common longitudinal datum; cbar mean aerodynamic chord [m]; SM [1].

**Assumptions:** Trim requires forces and moments at the same flight condition. Positive SM under the stated aft-positive convention indicates longitudinal static stability in the applicable linear model; dynamic stability/control limits need separate checks.

**When and why used / application:** Compare tail/CG configurations and solve a representative trim condition.

**Source:** STD-MECH438-05; STD-MECH438-07; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Required lift and drag power

**Given:** Illustrative W=7000N, S=12m²,rho=1.225kg/m³,V=45m/s; assumed CD=0.047.

**Required:** Level-flight lift coefficient, drag and required propulsive power.

**Principles:** Force balance and dynamic-pressure force definitions.

**Equations:** E1, E2, E4.

**Solution methodology:** Compute q, then CL=W/(qS). With stated CD compute D=qSCD and multiply by V. Retain actual airspeed rather than ground speed.

**Assumptions:** Steady level unbanked flight; assumed CD appropriate only for this illustration; not the supplied biplane.

**Common mistakes:** Using mass kilograms as weight newtons; substituting knots directly into SI; reporting shaft and propulsive power as identical.

**Worked result:** q=1240.3125Pa; CL=0.470312; D=699.536N; Preq=31.479kW.

### D2. Stall estimate and weight sensitivity

**Given:** Same W=7000N, S=12m²,rho=1.225kg/m³;assumed CLmax=1.5. Compare10%weight increase.

**Required:** One-g stall speed and percentage change.

**Principles:** Lift balance at maximum coefficient.

**Equations:** E3.

**Solution methodology:** Evaluate baseline square root. Scale weight by1.10 with other inputs held constant. Check whether the assumed CLmax is configuration-specific before using in a project.

**Assumptions:** Quasi-steady one-g; stated CLmax is illustrative, not measured.

**Common mistakes:** Treating CLmax as a universal airfoil value for a biplane; claiming structural load limits from a stall calculation.

**Worked result:** Vs=25.198m/s; heavier case26.428m/s; ratio sqrt1.10=1.04881, or4.88%increase.

### D3. Fuel budget and retained reserve

**Given:** Illustrative three-phase sortie:10min at0.004kg/s;20min at0.003kg/s;10min at0.004kg/s. Reserve4kg; contingency5%of trip burn.

**Required:** Trip fuel, dispatch fuel and expected fuel remaining after scheduled phases.

**Principles:** Phase fuel integration and mass balance.

**Equations:** E5.

**Solution methodology:** Convert minutes to seconds. Sum each rate-times-duration. Add reserve and contingency once for dispatch. Subtract trip burn from dispatch for final remaining fuel.

**Assumptions:** Rates constant within each phase; no separate unusable fuel included; not a real aircraft dispatch instruction.

**Common mistakes:** Using minutes with kg/s; consuming reserve as a normal phase; applying5%to dispatch recursively without declaring convention.

**Worked result:** Trip=2.4+3.6+2.4=8.4kg; contingency0.42kg; dispatch12.82kg; final4.42kg.

### D4. Climb surplus and static-margin check

**Given:** Illustrative shaft power60kW, propeller efficiency0.75, drag power31.5kW, weight7000N; xNP=1.50m, xCG=1.42m, cbar=1.0m.

**Required:** Steady climb rate and longitudinal static margin under stated convention.

**Principles:** Mechanical energy and linear static-stability geometry.

**Equations:** E4, E6.

**Solution methodology:** Convert shaft power to propulsive power. Subtract drag power and divide by weight. Separately subtract CG position from neutral-point position and normalize by MAC; do not infer trim or dynamic stability from the margin alone.

**Assumptions:** Constant-speed ideal steady climb; stated available power at this condition; neutral point assumed appropriate to configuration.

**Common mistakes:** Omitting propeller efficiency; reporting8%SM as proof of trim, handling or flight safety.

**Worked result:** Pavail45kW; excess13.5kW; ROC1.929m/s; SM0.080=8%. Trim/control and dynamic checks remain separate.

## E. Personal project evidence

Direct user statement links MECH 438 to Spitfire and biplane mathematical models/reports. Supplied latest archive statically inspected:10.m functions+1.mat; no original separate Spitfire code/report or final MATLAB execution log available. Actual biplane screenshot shows concept geometry. Code methods/assumptions are documented; personal authorship of every line, successful execution, physical validation, and course completion remain unverified.

## F. Challenges and evidence limits

User-confirmed earlier model lacked lift/fuel. Supplied revision includes phase fuel accounting, protected reserve, flight-phase weight updates and explicit feasibility checks. This is a documented computational response, not proven student-confirmed resolution. CAD coordinate/reference-plane/guide-curve constraints were discussed; no completed constraint verification was inspected. Retain open status; do not write mastered/solved/proved.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_438_Illustrative_Drag_Power.png).

**Caption:** Original illustrative drag/power curves for an assumed 7000 N aircraft, S=12 m², CD0=0.035, k=0.055, and density 1.225 kg/m³. Not the biplane MATLAB output or a validated aircraft design.

**Best authentic addition:** Existing authentic biplane CAD views are supplied. Request one final MATLAB run output/report with input version and a short explanation of the checks personally performed; use original Spitfire plot/report only if made available.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
