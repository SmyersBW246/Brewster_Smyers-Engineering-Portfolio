# MECH 202: Technical reference

## Scope and evidence categories

**Bucknell-verified:** graphical communication, production drawings, digital 3-D modeling and introductory rapid prototyping. **Standard engineering elaboration:** the principles, equations and original problems below. They are not proof that a specific technique or software release was taught. **Personal:** resume-reported SOLIDWORKS CSWA and project CAD; actual MECH 202 assignments were not available. Course-level public learning objectives were not located.

## B. Core principles

### P1. Design intent and sketch constraints

Constraints encode relationships such as concentricity, symmetry and equal spacing. Their significance is that a controlled edit can propagate consistently. A stable model constrains the intended degrees of freedom without redundant conflicting constraints. A fully constrained sketch can still embody the wrong design intent; inspect behavior after changing a governing dimension. Application: revise a flange diameter while preserving its bolt-circle organization. Vendor feature documentation and standard geometric reasoning support this principle; no particular class exercise is claimed.

### P2. Coordinate systems and reference geometry

Coordinates depend on origin and axis orientation. A reference plane is a construction aid; it does not automatically become the physical attachment face. The engineer must establish actual geometric intersection, contact or a valid connecting feature. Rigid transforms preserve lengths but change coordinate representations. Units and handedness must stay consistent. Application: locating an aircraft tail profile at the required station while keeping its chord and incidence distinct.

### P3. Appropriate feature and continuity

Extrusions, revolutions and lofts represent different geometric structures. For guide-driven lofts, the guides must meet the relevant profiles and connectors should follow corresponding points. Positional continuity G0 joins locations; tangent continuity G1 aligns tangent directions; curvature continuity G2 also matches the local curvature behavior. Equal position alone does not ensure smooth reflection or a robust solid. Boundary surfaces can impose tangent or curvature conditions in two directions. This is an advanced modeling extension, not a verified MECH 202 lesson. Application: controlling a transition between a hub region and a changing section.

### P4. Production drawings communicate inspectable requirements

Choose views that reveal functional geometry, add sections where interfaces would otherwise be hidden, and avoid redundant dimensions that can contradict each other. A drawing must define units and tolerances sufficiently for its purpose. A dimensional tolerance is not a complete geometric tolerance or an automatic process capability guarantee. Application: show an internal shoulder and its locating dimension in section. [STD-MECH202-01]

### P5. Tolerances connect geometry to assembly

Use limiting dimensions when all conforming parts must fit. Worst-case clearance is appropriate for a bounded assembly check; it is not a prediction of a population's probability distribution. A diametral clearance is twice the corresponding radial gap for concentric circles. Surface texture, form error, thermal change and alignment may also matter. Application: evaluating a hypothetical sliding shaft. [STD-MECH202-04]

### P6. Manufacturing-aware volume and mass

CAD volume is geometrical; physical mass also depends on material, internal structure and fabrication. Density times full solid volume is appropriate only for a uniform fully dense body. Infill, inserts, porosity and missing features can invalidate that approximation. Application: estimate a solid prototype's material quantity before comparing it with measured mass. Do not confuse a model-property output with a measured result.

## C. Core equations

### E1. Parametric ellipse

$$x(\theta)=a\cos\theta,\qquad y(\theta)=b\sin\theta,\quad0\le\theta<2\pi.$$

Here a,b are positive semi-axis lengths in m or mm; theta is an angle conventionally evaluated in radians. The ellipse lies in its chosen local plane and is centered at that plane's origin before any transform. Use it to define a closed section or check imported coordinates. It does not prescribe a full aerodynamic surface or guarantee a loft connection. This expression follows directly from the ellipse equation; [STD-MECH202-05] provides the underlying parametric-curve context.

### E2. Rigid coordinate transformation

$$\mathbf p=\mathbf R\mathbf p_{local}+\mathbf t,\qquad\mathbf R^T\mathbf R=\mathbf I,\quad\det\mathbf R=+1.$$

p and p_local are 3-component position vectors with a common length unit; t is translation in that unit; R is a dimensionless proper rotation. A rotation is not a scale operation. Use it to place section coordinates into a global model, especially when a curve's source plane differs from its required station. Axis order and handedness must be explicit. [STD-MECH202-06]

### E3. Worst-case clearance

$$C_{min}=D_{min}-d_{max},\qquad C_{max}=D_{max}-d_{min}.$$

D is hole diameter and d is shaft diameter; all dimensions and clearances are lengths. Positive minimum diametral clearance establishes clearance across these size limits under ideal concentric round geometry. Form, surface and temperature effects need separate treatment. Negative clearance indicates size interference, not necessarily the force required for assembly. [STD-MECH202-04]

### E4. Uniform-density mass

$$m=\rho V.$$

m is kg, rho kg/m³, V m³. For a nonuniform body use the volume integral of density instead. Use the equation to check CAD mass properties or compare design variants; the actual material and geometry must be known. It is a mass estimate, not a strength assessment. Basic definition of density; [STD-MECH202-07].

## D. Representative problems and methods

### D1. Check a sliding fit: worked numerical example

**Given:** hypothetical shaft diameter 9.98-10.00 mm; hole 10.03-10.06 mm. **Required:** minimum and maximum diametral clearance. **Principle/equation:** limiting sizes, E3. **Method:** use the smallest hole with the largest shaft for the minimum: 10.03-10.00=0.03 mm. Use the largest hole with the smallest shaft for the maximum:10.06-9.98=0.08 mm. **Assumptions:** round concentric features, size bounds achieved at the same reference temperature, no coatings or deformation. **Common mistakes:** subtract nominal sizes only, swap min/max combinations, or call diametral clearance the radial gap. Radial gaps would be 0.015-0.040 mm here. No particular ISO fit designation is asserted.

### D2. Diagnose a failed loft

**Given:** three closed section sketches at known stations; one guide is rejected after a section is moved. **Required:** a reproducible model that meets all intended sections. **Principles:** P1-P3; coordinate consistency E2. **Method:** verify units and sketch planes; inspect every guide/profile intersection; add an appropriate explicit relation where geometrically valid; check section correspondence and connector order; rebuild a minimal two-section loft before restoring other guides and transitions; inspect body count and the intended solid connection. **Assumptions:** sections and guides describe compatible, non-self-intersecting geometry. **Common mistakes:** treating a screen projection as a true 3-D intersection, adding many splines before checking placement, or assuming a reference plane is itself material. This is a recommended workflow, not evidence Brewster solved a particular model. [STD-MECH202-02,03]

### D3. Estimate a solid prototype mass

**Given:** hypothetical fully solid polymer part V=18.0 cm³ and measured/assumed uniform density rho=1.20 g/cm³. **Required:** ideal mass. **Principle/equation:** E4. **Method:** multiply consistent units:1.20*18.0=21.6 g=0.0216 kg. If printed with infill, model actual material volume or weigh the prototype instead. **Assumptions:** fully dense single material, no support material or hardware. **Common mistakes:** treating 18cm³ as18m³, assuming a slicer's infill percentage directly scales the whole outer volume including shells, or presenting estimated mass as measured. No polymer brand or class specimen is implied.

### D4. Select views for an internal shoulder

**Given:** a part with an external flange, stepped internal bore and a functional axial locating face. **Required:** enough drawing information to make and inspect that face. **Principles:** P4-P5; E3 only if a mating fit is specified. **Method:** identify the datum/functional references; choose a longitudinal section showing the step; place a direct locating dimension and bore size limits; add a recognisable external view; remove redundant conflicting dimensions; check drawing and model revision agreement. **Assumptions:** intended process and inspection access are known. **Common mistakes:** hiding the step in an isometric view, omitting units or implying a rendered picture defines a tolerance. [STD-MECH202-01]

## E-H. Personal work, challenges, skills and applications

Actual CAD projects are the independent chair and biplane geometry. They demonstrate related tools without proving an MECH202 assignment. Wheel curve modeling is a documented development difficulty; a completed solution was not reviewed. Useful skills include constraint design, coordinate checking, feature selection, section drawings, tolerance reasoning and model-property verification. Applications include automotive part interfaces, aircraft surface placement and mechanical-product prototypes. Do not describe suggested troubleshooting or the worked fit as completed personal coursework.

## I. Visual and artifact recommendation

Included assets/MECH_202_Illustrative_Fit_Range.svg shows only the D1 hypothetical dimensional ranges. Caption it as illustrative. Prefer an original class part drawing plus its CAD/physical prototype when Brewster confirms the assignment. One project image and a functional drawing will usually communicate more than a gallery of similar renders.

## J. References

See [SOURCES.md](SOURCES.md) for URLs, locators, category labels and claim mappings. No external illustration has been copied. The mathematical examples are independently constructed for this package.
