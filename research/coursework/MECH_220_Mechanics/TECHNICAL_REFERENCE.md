# MECH 220 | Mechanics: technical reference

## Evidence boundary

**Bucknell-verified:** Analyzes rigid-body equilibrium, structural force systems, friction, distributed loading and internal forces. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 220.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except any explicitly attributed personal source quantities.

**Personal coursework:** Audit code crop image.png lists MECH 220, but the supplied crop does not establish term, grade, transfer status, or completion. No course-specific submitted calculation or laboratory artifact was reviewed. The chair is documented in the September portfolio as independent work; it is a relevant cross-link, not evidence of enrollment or a MECH 220 assignment.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. Free-body diagrams

**Technical explanation:** Replace the surroundings of a selected body by external forces and couples. Reactions must match the degrees of freedom restrained by each support.

**Physical significance:** Reveals how a load reaches the supports.

**Assumptions and limits:** Rigid-body idealization; distributed contact may require a richer model.

**Engineering application:** Fixture support modeling.

**Source:** STD-MECH220-01; full URL in [Sources](SOURCES.md).

### P2. Equilibrium of force and moment

**Technical explanation:** A stationary rigid body has zero resultant external force and zero resultant external moment. In a plane this supplies three independent scalar equations.

**Physical significance:** Separates resistance to translation from resistance to rotation.

**Assumptions and limits:** Inertial frame; static loading; insufficient alone for statically indeterminate systems.

**Engineering application:** Brackets and mounting frames.

**Source:** STD-MECH220-01; full URL in [Sources](SOURCES.md).

### P3. Resultants of distributed loads

**Technical explanation:** Integrate the loading to preserve its net force and first moment. Resultant equivalence preserves external equilibrium, not the local stress field.

**Physical significance:** Connects pressure or weight distributions to support forces.

**Assumptions and limits:** Loading direction and geometry must be consistent; zero-resultant systems may leave a pure couple.

**Engineering application:** A distributed payload on a support beam.

**Source:** STD-MECH220-02; full URL in [Sources](SOURCES.md).

### P4. Structural idealization

**Technical explanation:** An unloaded, ideal pin-jointed truss member is a two-force member and carries axial force. Frames generally also transmit shear and bending.

**Physical significance:** Explains why a diagonal brace can change load paths.

**Assumptions and limits:** Truss joints idealized as frictionless pins; joint-only loads and negligible member weight where used.

**Engineering application:** Lightweight equipment frames.

**Source:** STD-MECH220-02; full URL in [Sources](SOURCES.md).

### P5. Friction and unilateral contact

**Technical explanation:** Static friction adjusts within a bound while contact normal force cannot pull the surfaces together. Sliding and tipping are competing limits.

**Physical significance:** Prevents treating every contact as an adhesive support.

**Assumptions and limits:** Coulomb model with an assumed coefficient; no adhesion or rolling resistance unless separately modeled.

**Engineering application:** Clamping and freestanding equipment stability.

**Source:** STD-MECH220-03; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Rigid-body equilibrium

\[
\sum\mathbf F=\mathbf0,\quad\sum\mathbf M_O=\mathbf0
\]

**Variables and units:** F: external force [N]; M_O: external moment about fixed point O [N·m].

**Assumptions:** Static rigid body in an inertial frame. Use all external forces and couples once.

**When and why used / application:** Solve mount reactions or truss joint forces.

**Source:** STD-MECH220-01; equations are standard technical content.

### E2. Moment of a force

\[
\mathbf M_O=\mathbf r_{O\to P}\times\mathbf F
\]

**Variables and units:** r: vector from O to force application point P [m]; F [N]; M_O [N·m].

**Assumptions:** Point-force representation; equivalent couple must accompany any transverse shift of the force.

**When and why used / application:** Assess the leverage of an off-center load.

**Source:** STD-MECH220-01; equations are standard technical content.

### E3. Distributed-load resultant

\[
R=\int_a^b w(x)\,dx,\quad x_R=\frac{\int_a^b xw(x)\,dx}{R}
\]

**Variables and units:** w: signed parallel load intensity [N/m]; x, a, b, x_R [m]; R [N].

**Assumptions:** Parallel loading, nonzero R. This preserves reactions, not local bending distribution.

**When and why used / application:** Replace distributed equipment weight for support equilibrium.

**Source:** STD-MECH220-02; equations are standard technical content.

### E4. Static-friction bound

\[
|F_t|\leq\mu_sN,\quad N\geq0
\]

**Variables and units:** F_t: contact tangential force [N]; N: compressive normal force [N]; mu_s: static-friction coefficient [1].

**Assumptions:** Dry, nonadhesive Coulomb contact. Equality only at impending slip.

**When and why used / application:** Check whether a clamped or resting component can remain stationary.

**Source:** STD-MECH220-03; equations are standard technical content.

### E5. Area centroid

\[
\bar x=\frac{\int_A x\,dA}{A}
\]

**Variables and units:** x and xbar [m]; dA, A [m²].

**Assumptions:** Uniform thickness/density when using area centroid for weight location; otherwise use mass weighting.

**When and why used / application:** Locate the resultant of uniform loading on a plate.

**Source:** STD-MECH220-02; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Support reactions in a fixture beam

**Given:** L = 0.80 m; downward P = 300 N at a = 0.30 m from a pin; roller at x = L; no beam self-weight.

**Required:** Pin and roller reaction components; maximum moment magnitude.

**Principles:** Rigid-body equilibrium and section cuts.

**Equations:** E1-E2.

**Solution methodology:** Draw Ax, Ay and By. Sum moments about A: By L − Pa = 0. Then sum vertical forces and cut the beam on either side of P.

**Assumptions:** Ideal pin/roller; static, planar loading.

**Common mistakes:** Using full span as the point-load lever arm; introducing a roller moment reaction.

**Worked result:** By = 300(0.30)/0.80 = 112.5 N; Ay = 187.5 N; Ax = 0. Peak |M| = Ay(0.30) = 56.25 N·m. Force and moment residuals are zero.

### D2. Triangular distributed loading

**Given:** Beam span L = 1.2 m; downward w(x) = w0 x/L; w0 = 600 N/m; pin and roller supports.

**Required:** Resultant location and reactions.

**Principles:** Load equivalence and moment equilibrium.

**Equations:** E1-E3.

**Solution methodology:** Integrate w and xw; draw R at x_R; solve support reactions; retain original distribution for internal loads.

**Assumptions:** Parallel loading; negligible self-weight.

**Common mistakes:** Locating the resultant at midspan or confusing N/m with N.

**Worked result:** R = w0L/2 = 360 N at 2L/3 = 0.80 m from the zero-intensity end; By = 240 N and Ay = 120 N.

### D3. Sliding versus tipping of a machine stand

**Given:** Weight W = 400 N; horizontal push at h = 0.75 m; base width in push direction b = 0.60 m; centered center of gravity; mu_s = 0.40.

**Required:** First instability and limiting push.

**Principles:** Friction bound and moments about the impending pivot.

**Equations:** E1, E2, E4.

**Solution methodology:** Find sliding threshold mu_s W. Find tipping threshold W(b/2)/h. Compare while confirming nonnegative contact reactions.

**Assumptions:** Level floor; rigid stand; slow push; no anchorage.

**Common mistakes:** Checking sliding alone; allowing negative normal force.

**Worked result:** Sliding: 160 N. Tipping: 160 N. The ideal model predicts coincident thresholds; actual tolerances and friction uncertainty determine which occurs first.

## E. Personal project evidence

Audit code crop image.png lists MECH 220, but the supplied crop does not establish term, grade, transfer status, or completion. No course-specific submitted calculation or laboratory artifact was reviewed. The chair is documented in the September portfolio as independent work; it is a relevant cross-link, not evidence of enrollment or a MECH 220 assignment.

## F. Challenges and evidence limits

No personal challenge-and-resolution claim is supported for MECH 220. Do not turn the recommended equilibrium checks into a story about an error Brewster made or fixed. Ask for one authentic marked free-body diagram/calculation only in the consolidated student verification step.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_220_Illustrative_Beam_Reactions.png).

**Caption:** Original explanatory diagram: ideal 0.80 m fixture beam, 300 N point load and computed support reactions. Representative calculation, not a student assignment or chair load test.

**Best authentic addition:** One actual free-body diagram and reaction calculation from a submitted assignment, with the original geometry and units visible.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
