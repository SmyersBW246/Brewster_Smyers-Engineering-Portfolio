---
code: ENGR 240
title: Science of Materials
summary: Connects material structure, properties, selection and modification through study of metals, ceramics and polymers with laboratory work.
category: Materials & manufacturing
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- atomic structure and observable properties
- metallic materials
- ceramic materials
- polymeric materials
- engineering material selection
- property measurement and modification
equations:
- title: Engineering tensile quantities
  latex: \sigma=\frac{F}{A_0},\quad \epsilon=\frac{\Delta L}{L_0},\quad E=\frac{\sigma}{\epsilon}
  note: '**Variables and units:** sigma engineering normal stress [Pa]; F axial force [N]; A_0 original cross-section [m^2]; epsilon strain [dimensionless]; delta L extension [m]; L_0 original gauge length [m]; E Young modulus [Pa].


    **Assumptions and limitations:** Uniform uniaxial test and appropriately measured specimen strain. E is a slope or ratio only in a justified linear elastic interval; not a yield or fracture model.


    **Engineering use:** Normalize a tensile record and estimate elastic stiffness.

    **Reference:** '
- title: Free thermal strain
  latex: \epsilon_{th}=\alpha\Delta T
  note: '**Variables and units:** epsilon_th free thermal strain [dimensionless]; alpha linear expansion coefficient [1/K]; delta T temperature change [K].


    **Assumptions and limitations:** Uniform free expansion, small strain and approximately constant alpha over the interval; restraint changes the stress state.


    **Engineering use:** Estimate a free dimensional change before assessing a constrained assembly.

    **Reference:** '
- title: Fickian steady diffusion flux
  latex: J=-D\frac{dc}{dx}
  note: '**Variables and units:** J amount flux [mol/(m^2 s)] if c is mol/m^3; D diffusivity [m^2/s]; dc/dx concentration gradient [mol/m^4].


    **Assumptions and limitations:** One-dimensional Fickian transport; stated temperature/composition; simple constant-D interpretation where appropriate.


    **Engineering use:** Estimate atomic-transport flux across a known concentration gradient.

    **Reference:** '
- title: Arrhenius diffusivity
  latex: D=D_0\exp\!\left(-\frac{Q_d}{RT}\right)
  note: '**Variables and units:** D,D_0 [m^2/s]; Q_d molar activation energy [J/mol]; R gas constant [J/(mol K)]; T [K].


    **Assumptions and limitations:** One dominant mechanism over a fitted temperature range; correct molar energy convention, not per-atom energy with R.


    **Engineering use:** Compare diffusion rates at two processing temperatures using fitted constants.

    **Reference:** '
- title: Two-phase lever rule
  latex: w_\alpha=\frac{C_\beta-C_0}{C_\beta-C_\alpha},\qquad w_\beta=1-w_\alpha
  note: '**Variables and units:** w_alpha,w_beta phase mass fractions [dimensionless]; C_0 overall composition and C_alpha,C_beta endpoint compositions on one common mass-fraction basis.


    **Assumptions and limitations:** Equilibrium two-phase tie line at fixed temperature; compositions ordered C_alpha <= C_0 <= C_beta. Atomic-fraction axes instead produce atomic-fraction balances.


    **Engineering use:** Calculate equilibrium phase amounts from an alloy tie line.

    **Reference:** '
figures:
- src: /images/engr-240-ENGR_240_illustrative_elastic_slopes.png
  alt: Original comparison of two assumed linear elastic moduli, 50 and 100 GPa. Curves show a model only and do not identify tested materials or student data.
  caption: Original comparison of two assumed linear elastic moduli, 50 and 100 GPa. Curves show a model only and do not identify tested materials or student data.
sources:
- title: Bucknell 2025-2026 catalog - Engineering (College of Engineering, interdisciplinary)
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
- title: MIT OCW 3.091SC - Line, Interface and Bulk Defects
  url: https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/crystalline-materials/20-line-interface-and-bulk-defects/
- title: OpenStax University Physics Vol. 1 - Stress, Strain, and Elastic Modulus
  url: https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus
- title: MIT OCW 3.091SC - Diffusion
  url: https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/reactions-and-kinetics/24-diffusion/
officialTitle: Science of Materials
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/ENGR_240_Science_of_Materials/TECHNICAL_REFERENCE.md
---

**Official identity:** Science of Materials | Engineering (College of Engineering, interdisciplinary) | Catalog 2025-2026.

**Bucknell description, paraphrased:** Relates material structure and properties to selection, modification and measurement of metals, ceramics and polymers.

## Course overview

This subject connects materials science with the question of why two parts of the same shape can behave differently. Composition, bonding, internal structure, processing history, and service conditions all affect what a material can do. This subject provides a way to evaluate a material beyond its name or a single strength value. A central question is the connection between an engineering requirement and the evidence needed to choose a material: stiffness for deflection, strength for permanent deformation, toughness for damage tolerance, and environmental behavior for service life. Those distinctions matter in a vehicle component, an aircraft structure, or a manufactured product. A useful material choice also considers how the part will be made and how its properties will be measured.

## Principles that matter

**Structure influences properties.** Atomic bonding, crystal arrangement, and larger-scale features affect material behavior. Metals, ceramics, and polymers offer different combinations of properties. Within a single family, changes in composition or processing can produce large differences. A material category is therefore a starting point for analysis, not a complete design specification.

**Stiffness and strength answer different questions.** Elastic modulus relates stress to recoverable strain in an appropriate linear range. Yield strength concerns the onset of significant permanent deformation under a stated definition. Toughness concerns energy absorption before fracture. A component may satisfy a stress limit and still deflect too much, so these checks should remain separate.

**Processing changes the internal structure.** Defects and interfaces are not simply imperfections to eliminate. Their density and arrangement can affect deformation and other properties. Heat treatment and working history can change a material's response. The useful question is which structure supports the required behavior under the intended conditions.

**Time and temperature matter.** Atomic diffusion and temperature-dependent behavior help explain why a property measured under one condition may not apply under another. A short room-temperature test does not describe every long-duration or high-temperature application. Polymers also require attention to loading rate and time-dependent deformation.

## Core relationships

For a uniform tensile specimen, engineering stress and strain use the original geometry:

$$
\sigma=\frac{F}{A_0},\qquad \epsilon=\frac{\Delta L}{L_0}
$$

Within an appropriate linear elastic interval, their ratio is Young's modulus. The detailed reference also includes thermal strain, diffusion flux, a temperature-dependent diffusion coefficient, and phase-fraction balance. These relationships are standard technical extensions of the catalog subject and are not claimed as a recovered list of the equations taught in a particular class.

## Representative material comparison

Take an illustrative specimen with original area 100 mm² and gauge length 100 mm. Under a 1,000 N tensile force, the measured extension is assumed to be 0.0200 mm. The engineering stress is 10.0 MPa, strain is 0.000200, and apparent linear elastic modulus is 50.0 GPa. The assumed measurements demonstrate the calculation; they do not identify a tested material or report a student laboratory result. Multiple measurements, instrumentation checks, and confirmation of an elastic interval would be needed for a defensible modulus estimate. The included plot compares two assumed elastic slopes without representing experimental data.

## Applications and technical focus

In automotive design, material selection affects mass, stiffness, durability, corrosion behavior, and manufacturing route. In aerospace, a material assessment must consider operating conditions and the consequences of damage alongside weight. In manufacturing, processing history can be as important as nominal composition when explaining measured properties.

The technical focus is distinguishing material-property measures, converting a load-extension record into stress-strain quantities, interpreting structure-property links, recognizing processing effects, selecting relevant property data, and identifying the limits of a laboratory comparison. The illustrative specimen and plot in this note are teaching examples, separate from personal laboratory results.

## Reasoning and evidence

A useful assessment starts with the required behavior and service conditions, then chooses the property and test that address that requirement. It keeps stiffness, yielding, fracture, and environmental effects distinct. An observation becomes useful engineering evidence when its test conditions and measurement method are known. A tensile-coupon photograph can show specimen geometry, while its load-extension record supports a property calculation. A fracture image or micrograph likewise needs scale and context. An image alone cannot establish strength, toughness or a processing effect; the interpretation must follow from the relevant observations and measurements.

The equations below give the variable definitions and assumptions for these models. The sources distinguish Bucknell’s official course scope from the broader engineering references used for the explanations.
