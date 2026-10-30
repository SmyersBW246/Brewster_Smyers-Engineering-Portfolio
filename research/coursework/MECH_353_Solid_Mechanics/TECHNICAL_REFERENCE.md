# MECH 353 | Solid Mechanics: technical reference

## Evidence boundary

**Bucknell-verified:** Evaluates stress, deformation and failure across load types, with compression-member stability, energy approaches and computational connections. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 353.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except any explicitly attributed personal source quantities.

**Personal coursework:** MECH 353 appears in image.png and image(3).png. Completion and term are unknown. The September portfolio page 2 documents an independent chair with SOLIDWORKS simulation and reports approximately 1.78 MPa maximum von Mises stress for its modeled case. This is a reported source-image result, not independently validated load capacity. Timber is direction-dependent and connections can govern; no course-specific assignment is established by that project.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. Equilibrium, compatibility and constitutive behavior

**Technical explanation:** A deformable-body model combines force balance, permitted displacements and a material stress-strain relation.

**Physical significance:** Explains why support conditions and modulus both matter.

**Assumptions and limits:** Small-deformation linear elasticity is a chosen approximation, not universal behavior.

**Engineering application:** Restrained bars and assemblies.

**Source:** STD-MECH353-01; full URL in [Sources](SOURCES.md).

### P2. Axial and flexural response

**Technical explanation:** Axial force distributes through area; bending creates a normal-stress gradient across a section and produces curvature.

**Physical significance:** Connects section shape to stress and displacement.

**Assumptions and limits:** Elementary flexure assumes slender, initially straight, prismatic beams and small elastic strains; effects near load introduction need extra care.

**Engineering application:** Lightweight mounting brackets.

**Source:** STD-MECH353-02; full URL in [Sources](SOURCES.md).

### P3. Elastic torsion

**Technical explanation:** A circular shaft carries torque through shear stress that grows with radius, and twists according to its torsional stiffness.

**Physical significance:** Material at large radius has high torque-carrying leverage.

**Assumptions and limits:** Linear elasticity; circular section; noncircular sections warp and require a different model.

**Engineering application:** Vehicle drive shafts.

**Source:** STD-MECH353-03; full URL in [Sources](SOURCES.md).

### P4. Combined loading and failure criterion

**Technical explanation:** Combine stress components at the same material point, then select a criterion appropriate to material and failure mode.

**Physical significance:** Prevents comparing unrelated peak stresses or applying a scalar criterion indiscriminately.

**Assumptions and limits:** The plane-stress von Mises expression here targets initial yielding in isotropic ductile material; it is not a wood or composite criterion.

**Engineering application:** A shaft under bending and torsion.

**Source:** STD-MECH353-04; full URL in [Sources](SOURCES.md).

### P5. Elastic buckling

**Technical explanation:** Compression can cause a lateral instability that depends on stiffness, length and supports.

**Physical significance:** Separates stability from crushing/yield strength.

**Assumptions and limits:** Euler model assumes an initially straight, slender, ideal elastic column with centered load; imperfections reduce practical capability.

**Engineering application:** Slender struts and tooling supports.

**Source:** STD-MECH353-05; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Axial stress and elastic extension

\[
\sigma=\frac{N}{A},\quad\varepsilon=\frac{\delta}{L},\quad\delta=\frac{NL}{AE}
\]

**Variables and units:** sigma [Pa]; N [N]; A [m²]; epsilon [1]; delta, L [m]; E [Pa].

**Assumptions:** Uniform prismatic bar, centered axial load, constant elastic E and small strain away from local end effects.

**When and why used / application:** Estimate tie-rod stress and extension.

**Source:** STD-MECH353-01; equations are standard technical content.

### E2. Elementary bending

\[
\sigma_x=-\frac{My}{I},\qquad I_{\rm rectangle}=\frac{bh^3}{12}
\]

**Variables and units:** sigma_x [Pa]; M [N·m] with stated section sign convention; y [m] from neutral axis; I [m⁴]; b, h [m].

**Assumptions:** Linear elastic homogeneous beam in bending about a centroidal principal axis; appropriate slender-beam assumptions.

**When and why used / application:** Compare stress when a rectangular section is rotated.

**Source:** STD-MECH353-02; equations are standard technical content.

### E3. Cantilever tip deflection

\[
|\delta_{\rm tip}|=\frac{PL^3}{3EI}
\]

**Variables and units:** P [N]; L [m]; E [Pa]; I [m⁴]; deflection [m].

**Assumptions:** Prismatic Euler-Bernoulli cantilever with point tip load, small deflection; transverse shear deformation neglected.

**When and why used / application:** Check whether a bracket maintains alignment.

**Source:** STD-MECH353-05; equations are standard technical content.

### E4. Circular-shaft torsion

\[
\tau(r)=\frac{Tr}{J},\quad\phi=\frac{TL}{GJ},\quad J_{\rm solid}=\frac{\pi d^4}{32}
\]

**Variables and units:** tau [Pa]; T [N·m]; r, L, d [m]; J [m⁴]; G [Pa]; phi [rad].

**Assumptions:** Circular, prismatic shaft in linear elasticity; uniform T, G, J for the twist form.

**When and why used / application:** Estimate stress and twist of a drive shaft.

**Source:** STD-MECH353-03; equations are standard technical content.

### E5. Plane-stress von Mises equivalent stress

\[
\sigma_{\rm vm}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}
\]

**Variables and units:** All stress components and sigma_vm [Pa]; components evaluated at one material point.

**Assumptions:** Plane stress, isotropic ductile material; comparison with yield stress concerns initial yielding only, not fatigue or brittle failure.

**When and why used / application:** Screen a metal bracket under combined normal and shear stress.

**Source:** STD-MECH353-04; equations are standard technical content.

### E6. Ideal elastic column buckling

\[
P_{\rm cr}=\frac{\pi^2EI}{(KL)^2}
\]

**Variables and units:** P_cr [N]; E [Pa]; I [m⁴] about buckling axis; L [m]; K [1] effective-length factor.

**Assumptions:** Slender, straight, ideal elastic column, centered compression and ideal end restraints.

**When and why used / application:** Compare sensitivity to unsupported length and end restraint.

**Source:** STD-MECH353-05; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Stress and deflection of a cantilever

**Given:** P=100 N, L=0.30 m, rectangular b=0.020 m, h=0.040 m, E=70 GPa.

**Required:** Peak bending-stress magnitude and tip deflection.

**Principles:** Beam equilibrium, elastic bending and deformation.

**Equations:** E2-E3.

**Solution methodology:** Compute I; find fixed-end moment PL; use c=h/2 for peak stress; calculate deflection; compare separately to stated limits if limits are later supplied.

**Assumptions:** Ideal clamp; small deflection; shear deformation and self-weight neglected.

**Common mistakes:** Using mm dimensions directly with Pa; confusing I in m⁴ with mass moment in kg·m².

**Worked result:** I=1.0667×10⁻⁷ m⁴; |sigma|max=PL(h/2)/I=5.625 MPa; |delta_tip|=0.00012054 m=0.1205 mm. No pass/fail conclusion is possible without material and displacement limits.

### D2. Solid shaft in pure torsion

**Given:** d=0.020 m, L=0.40 m, T=20 N·m, G=80 GPa.

**Required:** Surface shear stress and twist.

**Principles:** Circular-shaft elasticity.

**Equations:** E4.

**Solution methodology:** Find J; evaluate stress at r=d/2; compute twist and convert to degrees only after solving in radians.

**Assumptions:** Solid circular uniform shaft; static elastic torque.

**Common mistakes:** Using I instead of J, radius instead of diameter in the d⁴ formula, or applying the formula to a noncircular shaft.

**Worked result:** J=1.5708×10⁻⁸ m⁴; tau_max=12.73 MPa; phi=0.006366 rad=0.3648°.

### D3. Combined stress at one point

**Given:** Ductile isotropic metal under plane stress: sigma_x=60 MPa, sigma_y=0, tau_xy=20 MPa.

**Required:** Equivalent von Mises stress for a later yield comparison.

**Principles:** Combined loading and material-appropriate failure criterion.

**Equations:** E5.

**Solution methodology:** Use components at the same point; calculate sigma_vm; compare with a documented yield stress only if one is supplied.

**Assumptions:** Plane stress; static initial yielding question.

**Common mistakes:** Combining maximum normal and shear values from different locations; applying metal criterion to timber.

**Worked result:** sigma_vm=sqrt(60²+3×20²)=69.28 MPa; strength margin remains unspecified.

### D4. Length sensitivity of an ideal strut

**Given:** Pinned-pinned E=200 GPa, I=2.0×10⁻⁸ m⁴,L=1.0 m, K=1; compare L=0.50 m.

**Required:** Euler buckling loads and length ratio effect.

**Principles:** Elastic stability.

**Equations:** E6.

**Solution methodology:** Select weakest-axis I; verify the member is slender enough for the model; calculate both ideal loads; distinguish ideal prediction from allowable load.

**Assumptions:** Straight, centered, ideal elastic strut; no material yield before ideal buckling assumed.

**Common mistakes:** Reporting Euler load as a tested safe load; choosing strong-axis I.

**Worked result:** At 1.0 m: P_cr=39.48 kN. At 0.50 m: 157.9 kN, four times higher. Cross-section/yield checks are still needed.

## E. Personal project evidence

MECH 353 appears in image.png and image(3).png. Completion and term are unknown. The September portfolio page 2 documents an independent chair with SOLIDWORKS simulation and reports approximately 1.78 MPa maximum von Mises stress for its modeled case. This is a reported source-image result, not independently validated load capacity. Timber is direction-dependent and connections can govern; no course-specific assignment is established by that project.

## F. Challenges and evidence limits

No supported personal MECH 353 challenge/resolution was found. Hand-calculation checks, mesh study and material-model review are recommended methods, not completed activities established by the supplied evidence.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_353_Illustrative_Cantilever.png).

**Caption:** Original illustrative elastic cantilever: 0.30 m length, 20×40 mm section, 100 N tip load and E=70 GPa. Deflection is exaggerated for visibility; calculated tip displacement is 0.1205 mm. Not a student simulation.

**Best authentic addition:** One actual stress/deflection calculation with its load case, cross-section, material values and, if available, a matching original simulation setup.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
