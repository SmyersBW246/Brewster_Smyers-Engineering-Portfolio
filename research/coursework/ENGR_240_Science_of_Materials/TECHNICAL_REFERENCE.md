# ENGR 240: detailed technical reference

## Evidence boundary

Official Bucknell coverage: atomic structure and observable properties, metallic materials, ceramic materials, polymeric materials, engineering material selection, property measurement and modification, experimental laboratory. [BU_ENGR_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. Structure-property relationships

Bonding, atomic arrangement, phases and microstructure contribute to macroscopic properties. The connection explains why nominal material families are insufficient for selection. Structure alone does not replace property data at the relevant temperature and condition. Use it to compare material families and identify needed characterization. [STD-ENGR240-01]

### P2. Elasticity versus permanent deformation

Engineering stress and strain normalize force and extension to original geometry. The slope over a suitable linear elastic region describes stiffness, not yield strength. Large strain, necking, anisotropy and viscoelasticity limit simple linear interpretation. Use a valid measured interval when estimating modulus. [STD-ENGR240-02]

### P3. Defects and processing history

Dislocations, grain boundaries and other features affect deformation. Working and thermal processes can modify microstructure and properties, often with tradeoffs. Do not assume every strengthening process increases toughness or stiffness. Use process history when comparing two specimens with the same nominal alloy designation. [STD-ENGR240-01]

### P4. Diffusion and temperature

Diffusion transports atoms down a chemical driving force, and a concentration gradient gives the simple Fickian form under suitable assumptions. Temperature can change diffusivity strongly. Constant-coefficient and simple-gradient approximations have limits. Use the model to reason about time and length scales in a heat treatment. [STD-ENGR240-03]

### P5. Phase balance and selection

A phase diagram describes equilibrium phases, while conservation determines their relative amounts in a two-phase region. Cooling rate and kinetic barriers can prevent equilibrium predictions from describing the actual microstructure. Use phase balance to interpret an equilibrium alloy example and then ask whether processing allowed equilibration. [STD-ENGR240-04]

## C. Core equations

### E1. Engineering tensile quantities

\[
\sigma=\frac{F}{A_0},\quad \epsilon=\frac{\Delta L}{L_0},\quad E=\frac{\sigma}{\epsilon}
\]

**Variables and units:** sigma engineering normal stress [Pa]; F axial force [N]; A_0 original cross-section [m^2]; epsilon strain [dimensionless]; delta L extension [m]; L_0 original gauge length [m]; E Young modulus [Pa].

**Assumptions and limitations:** Uniform uniaxial test and appropriately measured specimen strain. E is a slope or ratio only in a justified linear elastic interval; not a yield or fracture model.

**Engineering use:** Normalize a tensile record and estimate elastic stiffness.
**Reference:** [STD-ENGR240-02]

### E2. Free thermal strain

\[
\epsilon_{th}=\alpha\Delta T
\]

**Variables and units:** epsilon_th free thermal strain [dimensionless]; alpha linear expansion coefficient [1/K]; delta T temperature change [K].

**Assumptions and limitations:** Uniform free expansion, small strain and approximately constant alpha over the interval; restraint changes the stress state.

**Engineering use:** Estimate a free dimensional change before assessing a constrained assembly.
**Reference:** [STD-ENGR240-05]

### E3. Fickian steady diffusion flux

\[
J=-D\frac{dc}{dx}
\]

**Variables and units:** J amount flux [mol/(m^2 s)] if c is mol/m^3; D diffusivity [m^2/s]; dc/dx concentration gradient [mol/m^4].

**Assumptions and limitations:** One-dimensional Fickian transport; stated temperature/composition; simple constant-D interpretation where appropriate.

**Engineering use:** Estimate atomic-transport flux across a known concentration gradient.
**Reference:** [STD-ENGR240-03]

### E4. Arrhenius diffusivity

\[
D=D_0\exp\!\left(-\frac{Q_d}{RT}\right)
\]

**Variables and units:** D,D_0 [m^2/s]; Q_d molar activation energy [J/mol]; R gas constant [J/(mol K)]; T [K].

**Assumptions and limitations:** One dominant mechanism over a fitted temperature range; correct molar energy convention, not per-atom energy with R.

**Engineering use:** Compare diffusion rates at two processing temperatures using fitted constants.
**Reference:** [STD-ENGR240-03]

### E5. Two-phase lever rule

\[
w_\alpha=\frac{C_\beta-C_0}{C_\beta-C_\alpha},\qquad w_\beta=1-w_\alpha
\]

**Variables and units:** w_alpha,w_beta phase mass fractions [dimensionless]; C_0 overall composition and C_alpha,C_beta endpoint compositions on one common mass-fraction basis.

**Assumptions and limitations:** Equilibrium two-phase tie line at fixed temperature; compositions ordered C_alpha <= C_0 <= C_beta. Atomic-fraction axes instead produce atomic-fraction balances.

**Engineering use:** Calculate equilibrium phase amounts from an alloy tie line.
**Reference:** [STD-ENGR240-04]

## D. Representative problems

### D1. Interpret an assumed tensile reading (illustrative, not personal coursework)

**Given:** F=1000 N, A_0=100 mm^2, L_0=100 mm, delta L=0.0200 mm in an assumed elastic interval.

**Required:** Engineering stress, strain and modulus.

**Relevant physical or mathematical principles:** Force normalization, gauge strain and linear elasticity.

**Governing equations:** E1 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Convert area to 1.00e-4 m^2. Calculate sigma=1000/1e-4=10.0 MPa. Calculate epsilon=0.0200/100=0.000200. Divide stress by strain: E=50.0 GPa. Check repeat measurements before identifying any real material.

**Assumptions:** Uniform uniaxial elastic extension; specimen strain excludes machine compliance.

**Common mistakes:** Confusing MPa and Pa, using crosshead travel as exact gauge extension without correction, or identifying yield strength from this ratio.

**Worked result or expected output:** sigma=10.0 MPa; epsilon=0.000200; E=50.0 GPa for the assumed readings.

### D2. Compare diffusion temperature sensitivity (illustrative, not personal coursework)

**Given:** D_0=1.0e-5 m^2/s, Q_d=100000 J/mol; T_1=800 K and T_2=1000 K.

**Required:** Diffusivities and their ratio.

**Relevant physical or mathematical principles:** Thermally activated Arrhenius transport.

**Governing equations:** E4 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Use the same R convention at both temperatures. Calculate D_1=2.957e-12 m^2/s and D_2=5.979e-11 m^2/s. Take the ratio or evaluate exp[(Q_d/R)(1/T_1-1/T_2)].

**Assumptions:** Illustrative fitted constants and one unchanged diffusion mechanism; not a treatment recipe or measured alloy.

**Common mistakes:** Using Celsius in the exponential or pairing kJ/mol with R expressed in J/(mol K).

**Worked result or expected output:** D_2/D_1 approximately 20.22; the assumed higher temperature gives faster diffusion.

### D3. Apply a phase balance (illustrative, not personal coursework)

**Given:** Assumed equilibrium tie line C_alpha=0.10,C_beta=0.50; overall C_0=0.30, all mass fractions of the same species.

**Required:** Mass fractions of each phase and composition check.

**Relevant physical or mathematical principles:** Conservation and lever rule.

**Governing equations:** E5 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Compute w_alpha=(0.50-0.30)/(0.50-0.10)=0.50, w_beta=0.50. Reconstruct C_0=w_alpha C_alpha+w_beta C_beta=0.30.

**Assumptions:** Two equilibrium phases at one temperature; all composition measures share a basis.

**Common mistakes:** Using the near tie-line segment for the same phase, or confusing phase composition with phase amount.

**Worked result or expected output:** Each phase has mass fraction 0.50; reconstructed overall composition is 0.30.

### D4. Check an expansion allowance (illustrative, not personal coursework)

**Given:** Unrestrained L_0=0.200 m element, assumed alpha=20e-6 /K, temperature rise 50 K.

**Required:** Free extension and a note about restraint.

**Relevant physical or mathematical principles:** Small uniform thermal strain.

**Governing equations:** E2 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Calculate epsilon_th=0.00100, then delta L=L_0 epsilon_th=0.000200 m. State that this is free expansion; a constrained assembly needs a separate compatibility/stress model.

**Assumptions:** Constant alpha and uniform temperature; no mechanical load or restraint.

**Common mistakes:** Reporting free expansion as thermal stress, or omitting the length multiplier.

**Worked result or expected output:** Free extension is 0.200 mm; no constrained stress is claimed.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image.png and image(5).png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/ENGR_240_illustrative_elastic_slopes.svg). Caption: Original comparison of two assumed linear elastic moduli, 50 and 100 GPa. Curves show a model only and do not identify tested materials or student data.

Recommended authentic artifact: If an original tensile specimen, fracture surface or metallography image exists from ENGR 240, pair its photograph with the actual test graph or microscopy scale. This is one of the few recommended additional physical deliverables; no new specimen is required.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.