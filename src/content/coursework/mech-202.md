---
code: MECH 202
title: Graphics for Design and Manufacture
summary: Covers engineering graphics, production drawings, three-dimensional digital geometry and introductory rapid-prototyping fabrication.
category: Design & mechanics
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- graphical communication of mechanical designs
- production drawings
- 3-D geometric representations
- software-based geometric modeling
- rapid prototyping
equations:
- title: Parametric ellipse
  latex: x(\theta)=a\cos\theta,\qquad y(\theta)=b\sin\theta,\quad0\le\theta<2\pi.
  note: Here a,b are positive semi-axis lengths in m or mm; theta is an angle conventionally evaluated in radians. The ellipse lies in its chosen local plane and is centered at that plane's origin before any transform. Use it to define a closed section or check imported coordinates. It does not prescribe a full aerodynamic surface or guarantee a loft connection. This expression follows directly from the ellipse equation;  provides the underlying parametric-curve context.
- title: Rigid coordinate transformation
  latex: \mathbf p=\mathbf R\mathbf p_{local}+\mathbf t,\qquad\mathbf R^T\mathbf R=\mathbf I,\quad\det\mathbf R=+1.
  note: 'p and p_local are 3-component position vectors with a common length unit; t is translation in that unit; R is a dimensionless proper rotation. A rotation is not a scale operation. Use it to place section coordinates into a global model, especially when a curve''s source plane differs from its required station. Axis order and handedness must be explicit. '
- title: Worst-case clearance
  latex: C_{min}=D_{min}-d_{max},\qquad C_{max}=D_{max}-d_{min}.
  note: 'D is hole diameter and d is shaft diameter; all dimensions and clearances are lengths. Positive minimum diametral clearance establishes clearance across these size limits under ideal concentric round geometry. Form, surface and temperature effects need separate treatment. Negative clearance indicates size interference, not necessarily the force required for assembly. '
- title: Uniform-density mass
  latex: m=\rho V.
  note: m is kg, rho kg/m³, V m³. For a nonuniform body use the volume integral of density instead. Use the equation to check CAD mass properties or compare design variants; the actual material and geometry must be known. It is a mass estimate, not a strength assessment. Basic definition of density; .
figures:
- src: /images/mech-202-MECH_202_Illustrative_Fit_Range.svg
  alt: Original illustrative limiting-size diagram; 0.03-0.08mm diametral clearance for D1 assumptions. Not a class assignment result.
  caption: Original illustrative limiting-size diagram; 0.03-0.08mm diametral clearance for D1 assumptions. Not a class assignment result.
sources:
- title: 'Bucknell 2025-2026 catalog: Mechanical Engineering'
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: 'MIT OCW: Engineering Drawing and Sketching'
  url: https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/pages/related-resources/drawing_and_sketching/
- title: 'SOLIDWORKS Help: Recommendations for Lofts with Guide Curves'
  url: https://help.solidworks.com/2022/english/SolidWorks/sldworks/c_recommendations_lofts_guide_curves.htm?format=P&value=
- title: 'SOLIDWORKS Help: Boundary Surface'
  url: https://help.solidworks.com/2023/english/SolidWorks/sldworks/c_boundary_surface.htm?format=P&value=
officialTitle: Graphics for Design and Manufacture
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MECH_202_Graphics_for_Design_and_Manufacture/TECHNICAL_REFERENCE.md
---

## Course overview

CAD translates a physical idea into geometry that someone else can understand, manufacture and inspect. The important question is whether the model explains the intended part: where its features belong, how mating components fit, and which dimensions control its function. That work proceeds through sketches, reference geometry, solid features and production drawings. Applications in automotive parts, aircraft geometry and mechanical products make the connection between shape and manufacturing especially useful. A convincing model also needs a clear coordinate system and a feature history that can survive design changes. This course provides a framework for explaining those decisions alongside the finished shape, rather than relying on a rendered view alone.

Bucknell's 2025-2026 catalog covers graphical design communication, production drawings, digital three-dimensional geometry and rapid prototyping. [Official catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Principles behind the model

**Design intent:** dimensions and geometric relations should describe why features belong together. A bolt circle driven by one diameter is easier to revise consistently than several independently positioned holes.

**Geometric communication:** orthographic views, sections and an isometric overview answer different questions. Hidden interfaces often require a section view, while a shaded image helps a reader recognize the overall part.

**Feature choice:** an extrusion suits a constant section, a revolve suits rotational geometry, and a loft connects changing profiles. Guide curves and boundary conditions control the transition; adding complexity without a clear purpose can make the model harder to diagnose.

**Fit and manufacture:** nominal shape does not establish actual clearance. Tolerances, tooling access, internal radii and assembly sequence need to agree with how the part will be made and used. These are standard engineering extensions of the catalog subjects, not a recovered assignment list.

## Core equations

Two useful checks connect geometry to function:

$$C_{min}=D_{hole,min}-d_{shaft,max},\qquad m=\rho V.$$

Clearance uses matching length units. Mass requires the material density and the modeled material volume. Parametric curves and coordinate transformations provide additional ways to describe changing sections and align geometry between reference frames. Their definitions and assumptions matter when a profile must intersect several planes or remain attached to another feature.

## Representative engineering problem

Consider a hypothetical shaft of 9.98-10.00 mm and a mating hole of 10.03-10.06 mm. The minimum diametral clearance is 0.03 mm and the maximum is 0.08 mm. The nominal CAD fit alone would conceal this range. Checking the limiting dimensions before producing a drawing makes the intended assembly behavior visible. This is an illustrative calculation, not a documented class submission or a wheel-interface specification.

## Related independent work

My supplied résumé reports SOLIDWORKS CSWA and structural-modeling experience. The independent outdoor chair and the biplane CAD views provide actual examples of my modeling work. Their course association is not established, so they belong primarily on their project pages. The current wheel work is another application of these modeling methods. Its status remains concept development, separate from a manufactured or qualified wheel.

## Technical challenge in progress

I have identified complex nonplanar curves and transitions as an area I want to improve. My recent wheel and aircraft questions concern guide-curve intersections, reference planes and joining geometry. This remains a learning goal rather than a documented, completed correction. A useful troubleshooting sequence is to inspect the original profiles, check the guide-curve and plane intersections, then rebuild after one justified constraint or feature change. Comparing the before-and-after geometry helps explain whether that change addressed the intended problem.

## Skills and applications

The technical competencies represented here are sketch constraints, reference geometry, feature selection, production-drawing communication, fit calculations and basic model-property checks. Their applications include documenting a machined bracket, coordinating an aircraft surface model, and preparing a small mechanical part for prototyping. Pairing a drawing with its corresponding CAD model and physical part makes it possible to compare design intent with the result. Highlighting a functional dimension connects the geometry to an inspection question.

The fit diagram is an explanatory illustration of limiting dimensions and assembly clearance. It is separate from my independent project results. The equation notes and sources below identify the technical definitions and their scope.
