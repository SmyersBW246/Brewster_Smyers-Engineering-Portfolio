# MATH 211 | Detailed technical reference

## A. Verified course scope

**Official title:** Calculus III

**Department:** Mathematics & Statistics. **Catalog:** 2025-2026.

**Description, paraphrased:** Extends calculus to vectors, multiple variables, optimization and multidimensional integration, including major vector-calculus theorems.

**Documented topic labels:** vector-valued functions; functions of several variables; multiple integrals; line integrals; surface integrals; extrema; Green’s theorem; Stokes’ theorem; Divergence theorem.

**Public course-specific objectives:** No separate course learning-objective list was located in the retrieved records. Catalog subject coverage is verified; supplementary sources do not establish Bucknell-specific teaching.

The mathematical material and worked examples below are standard subject explanations, not evidence that these exact examples were taught or assigned at Bucknell.

## B. Core principles

### P1. Partial derivatives and gradients

**Explanation:** Partial derivatives measure one-input sensitivity; their coordinate components form the gradient.

**Physical or mathematical significance:** A spatial scalar field has a local direction of fastest increase.

**Assumptions and limits:** A differentiable field and a defined coordinate basis; physical interpretation needs compatible coordinate scales.

**Engineering use:** Thermal-gradient interpretation or dimensional sensitivity.

### P2. Domain and measure

**Explanation:** An integral requires both the local quantity and the geometry over which it is accumulated.

**Physical or mathematical significance:** Density becomes mass only after integration over the correct volume.

**Assumptions and limits:** A physically meaningful density and domain, with consistent integration bounds.

**Engineering use:** Mass of a tapered or graded-density body.

### P3. Coordinate transformations

**Explanation:** Changing variables changes the integration measure through a Jacobian.

**Physical or mathematical significance:** A polar wedge area grows with radius.

**Assumptions and limits:** A valid transformation and appropriate domain partition; account for singularities and overlap.

**Engineering use:** Circular cross-sections and axisymmetric geometry.

### P4. Directed line and surface integrals

**Explanation:** A vector field contributes through the component along a path or normal to a surface.

**Physical or mathematical significance:** Orientation changes the sign of work or flux.

**Assumptions and limits:** Piecewise-smooth path or surface and adequate field regularity.

**Engineering use:** Work along a mechanism path and flow through a section.

### P5. Boundary-region equivalence

**Explanation:** Green, Stokes and Divergence theorems connect compatible boundary and region integrals.

**Physical or mathematical significance:** An alternate formulation can simplify or independently check a field calculation.

**Assumptions and limits:** Use the theorem matching dimension, orientation and boundary; required smoothness must hold.

**Engineering use:** Checking total outward flux against integrated divergence.

## C. Core equations

### E1. Gradient and directional derivative

$$
\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right),\qquad D_{\mathbf u}f=\nabla f\cdot\mathbf u
$$

**Variables and units:** f: scalar field; x, y, z: position [m] for a spatial field; u: unit direction vector. For temperature, gradient units are K/m.

**Assumptions:** Differentiable f; u must have unit magnitude.

**When and why:** Calculate the temperature change per unit distance in a specified direction.

### E2. Mass from density

$$
m=\iiint_V\rho(x, y, z)\, dV
$$

**Variables and units:** m: mass [kg]; rho: density [kg/m³]; V: body volume [m³].

**Assumptions:** Specified density over the true body domain.

**When and why:** Compute total mass of a nonuniform component.

### E3. Polar area element

$$
dA=r\, dr\, d\theta
$$

**Variables and units:** r: radial distance [m]; theta: angle [rad, dimensionless]; dA: area [m²].

**Assumptions:** A valid polar representation of the integration region.

**When and why:** Integrate a field over a circular plate.

### E4. Work along a path

$$
W=\int_C\mathbf F\cdot d\mathbf r
$$

**Variables and units:** F: force vector [N]; dr: oriented displacement [m]; C: path; W: work [J].

**Assumptions:** Defined force field and path; orientation explicitly stated.

**When and why:** Evaluate work along a curved guide or linkage path.

### E5. Divergence theorem

$$
\iint_{\partial V}\mathbf F\cdot\mathbf n\, dS=\iiint_V\nabla\cdot\mathbf F\, dV
$$

**Variables and units:** F: vector field; n: outward unit normal; dS: surface area; V: enclosed volume. For velocity F [m/s], both sides have m³/s.

**Assumptions:** Closed, piecewise-smooth boundary and continuously differentiable field in an appropriate volume neighborhood.

**When and why:** Replace a closed-surface flux calculation with a volume integral.

## D. Representative engineering problems

All numbers are original assumed benchmarks for this research package. They are not claimed to be Brewster's assignments or project results.

### D1. Interpret a thermal gradient

**Given:** T(x, y)=300 K+(2 K/m²)x²+(3 K/m²)y²; point(1 m, 2 m).

**Required:** Gradient and largest local temperature rise per metre.

**Relevant principles:** Partial differentiation and gradient geometry.

**Governing equations:** E1.

**Solution method:** Differentiate each coordinate; evaluate at the point; take the vector norm; normalize the gradient for its direction.

**Assumptions:** Smooth prescribed two-dimensional temperature field.

**Common mistakes:** Omitting coefficient units or using a nonunit direction vector.

**Worked result:** Gradient=(4, 12) K/m; magnitude=sqrt160=12.649 K/m; unit direction=(0.3162, 0.9487).

### D2. Check circular plate mass

**Given:** Uniform circular plate R=0.10 m, thickness h=0.005 m, rho=2700 kg/m³.

**Required:** Mass using polar integration.

**Relevant principles:** Density accumulation and polar area element.

**Governing equations:** E2-E3.

**Solution method:** Integrate rho*h*r over r=0 toR and theta=0 to 2pi; compare with rho*pi*R²*h.

**Assumptions:** Constant density and thickness; ideal disk with no holes.

**Common mistakes:** Forgetting r in the polar area element or mixing millimetres and metres.

**Worked result:** Volume=0.000157080 m³; mass=0.424115 kg.

### D3. Evaluate outward velocity flux

**Given:** Velocity field F=(k x, k y, k z), k=1 s^-1, inside sphere R=0.10 m.

**Required:** Net outward volumetric flux.

**Relevant principles:** Divergence theorem.

**Governing equations:** E5.

**Solution method:** Compute divergence=3k; integrate over sphere volume; check directly using normal velocity kR times sphere area.

**Assumptions:** Prescribed mathematical velocity field; not a claim of incompressible flow or a CFD solution.

**Common mistakes:** Assuming every velocity field is divergence-free or choosing an inward normal.

**Worked result:** Q=3k*(4piR³/3)=4pi kR³=0.0125664 m³/s; direct surface calculation agrees.

## E. Personal coursework evidence

The supplied degree-audit crops list MATH 211. They do not show a completion flag, grade, semester, section or transfer-credit label. No original course assignment, lab dataset or submitted report was reviewed for this class. General engineering projects may use related mathematics, but are not assigned to this course by inference.

## F. Challenges and resolutions

No course-specific autobiographical challenge and successful resolution is established. The common mistakes above are representative failure modes, not Brewster's experiences. A personal reflection can be added only after an original calculation, iteration or student account identifies what went wrong, what changed, and what evidence supports the result.

## G. Technical capabilities represented

The capabilities represented are defining coordinate systems, differentiating multivariable functions, setting area and volume bounds, integrating along oriented paths or surfaces, and checking results through alternate formulations. An authentic addition could pair a CAD cross-section or an original field calculation with the corresponding integral. Existing course-specific calculations and a personal challenge/resolution record have not yet been established, so the draft does not claim a completed experiment or simulation.

## H. Applications

In automotive and aerospace work, integrated distributions support mass-property calculations and spatial fields describe pressure or temperature. In fluid analysis, flux integrals quantify how much of a flow field crosses a surface. For mechanical design, multivariable sensitivity helps explain how simultaneous dimension changes affect a response before a detailed simulation is attempted.

## I. Visual and authentic-artifact plan

Included:[MATH_211_illustrative_temperature_gradient.png](assets/MATH_211_illustrative_temperature_gradient.png). Caption: Illustrative prescribed field T=300+2x²+3y² in SI units, with gradient at(1 m, 2 m). The arrow indicates direction and is scaled for visibility; no student thermal-test data or simulation is represented. Place after the representative example.

Recommended authentic replacement/addition: An actual original multivariable field, mass-property or CAD-domain integration study, with domain, bounds and a plot. This is a request for an existing artifact, not a claim that the artifact exists or an instruction to fabricate data. Keep it separate from the illustrative plot.

## J. Traceable references

See [SOURCES.md](SOURCES.md), whose P/E/D labels map principles, equations and problems to primary sources. Original numerical arithmetic is reproduced in the source script and independently checked in the package workflow.
