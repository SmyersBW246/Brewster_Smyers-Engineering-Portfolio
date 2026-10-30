---
code: MECH 355
title: Manufacturing Processes
summary: Surveys shaping and processing methods, supported by fabrication laboratories and introductory numerical control and CAD/CAM.
category: Materials & manufacturing
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 1
documented: true
connection: My lab activities include bronze casting, a ring formed from a quarter, composite pressing and bonding, welding, and CNC work for injection-molding tooling. Visits to Lycoming Engines and a metalworking facility added industrial context.
relatedProjects:
- micro-drone-chassis
- bicycle-computer-mount
topics:
- deformation processing
- solidification
- material removal
- plastics forming
- additive manufacturing
- laboratory fabrication
equations:
- title: Milling peripheral cutting speed
  latex: N=\frac{1000v_c}{\pi D}.
  note: 'N is rev/min, vc is m/min and D is mm; 1000 converts m to mm. The circumference is pi D. Use for a basic speed conversion with the actual effective diameter. A radius, inch diameter or surface speed in another unit needs a different conversion. Tool and material guidance still sets suitable vc. '
- title: Table feed and removal rate
  latex: v_f=f_z zN,\qquad Q=a_e a_p v_f.
  note: 'fz is mm/tooth, z is tooth count (dimensionless), vf is mm/min, ae and ap are width/depth in mm, Q is mm³/min. Use for a steady-engagement estimate. It omits entry/exit transients and varies with actual radial engagement and path. A cutting-only duration is removed volume divided by Q. These quantities are not measured lab data. '
- title: Casting solidification scaling
  latex: t_s=C_m\left(\frac{V}{A}\right)^2.
  note: 'ts is time; V is volume; A is effective mold-contact cooling area. If dimensions use mm and time min, Cm has units min/mm². The exponent two is a common heat-transfer-limited casting approximation, not a universal law for all molds. Compare similar mold/metal conditions or use an experimentally supported constant. Application: relative cooling-time estimates.'
- title: Magnitude of uniform compressive true strain
  latex: \epsilon_{c}=\ln\left(\frac{h_0}{h_f}\right).
  note: 'h0,hf are positive initial/final thicknesses in the same unit; epsilon_c is a dimensionless positive compression magnitude. Signed axial logarithmic strain is instead ln(hf/h0), negative in compression. Uniform deformation is an idealization; this expression does not determine forging force. Application: compare reduction magnitudes consistently. '
- title: First-pass mold opening force
  latex: F=p_c A_{proj}.
  note: 'F is N when representative cavity pressure pc is Pa and projected area Aproj m². Uniform pc is assumed; otherwise integrate local pressure over projected area. A production machine requirement includes process uncertainty and tooling/machine practice. This first estimate is not a rated clamp-force recommendation. '
- title: Simplified unit-cost comparison
  latex: C_u(n)=\frac{C_{tool}}{n}+C_{var}.
  note: 'Cu is currency/part, Ctool total one-time tool cost, n positive accepted-part quantity, Cvar variable cost per accepted part. Assumes fixed unit cost and all tool cost allocated to this batch. Scrap, capital, maintenance, lead time and financing must be added when material. Application: determine where a tool-intensive route could become economical. This is original basic cost allocation, not a supplied lab result or quoted vendor model.'
figures:
- src: /images/mech-355-MECH_355_Illustrative_Casting_Size.svg
  alt: Original illustrative casting-size scaling for hypothetical cubes and constant; not measured bronze-lab data.
  caption: Original illustrative casting-size scaling for hypothetical cubes and constant; not measured bronze-lab data.
sources:
- title: 'Bucknell 2025-2026 catalog: Mechanical Engineering'
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: 'MIT OCW 2.008: Metal Casting, Lecture21'
  url: https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2025/mit2_008_s25_lec21.pdf
- title: 'MIT OCW 2.008: Solidification and Cooling, Lecture21a'
  url: https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2025/mit2_008_s25_lec21a.pdf
- title: 'MIT OCW 2.008: Deforming, Lecture20a'
  url: https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2025/mit2_008_s25_lec20a.pdf
officialTitle: Manufacturing Processes
enrollmentStatus: Course status requires confirmation
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_355_Manufacturing_Processes/TECHNICAL_REFERENCE.md
---

## Course overview

My manufacturing coursework connects a part's design to the physical process used to make it. The activities I have described include casting bronze from wax and clay/plaster work, forming a ring from a quarter, pressing and bonding carbon fiber, welding, and CNC work associated with plastic injection-molding tooling. Seeing several processes together makes material behavior, geometry and production method part of the same engineering decision. A shape that works well in CAD may require different allowances, tooling or finishing when it is cast, formed or machined. I also visited Lycoming Engines and a separate metalworking facility with large forging hammers. These experiences give me concrete examples for discussing manufacturing choices without claiming measured performance that the available records do not establish.

Bucknell's catalog covers deformation, solidification, material removal, plastics and additive processes, with fabrication laboratories and introductory CAD/CAM. [Official catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Principles that connect the processes

**Process and geometry:** the production route affects attainable shape, surface condition, dimensional control and tooling needs. Process selection begins with requirements and material behavior.

**Solidification:** casting introduces heat flow and shrinkage considerations. Changes in section size can alter cooling behavior, so the pattern and mold are part of the design problem.

**Plastic deformation:** forming changes shape through permanent strain. Thickness reduction and material flow must be considered together; a visually successful shape alone does not measure residual stress or strength.

**Material removal:** CNC machining links tool motion with cutting speed, feed and engagement. A toolpath must be feasible for both the cutting tool and the workholding arrangement.

**Joining and composites:** welding and bonding create interfaces with process-dependent behavior. Surface preparation, heat input or resin conditions can matter as much as the visible joint. These are standard engineering principles associated with the processes; no undocumented inspection or material test is claimed.

## Core equations and a representative problem

For a hypothetical milling calculation:

$$N=\frac{1000v_c}{\pi D},\qquad v_f=f_z zN,\qquad Q=a_e a_p v_f.$$

With cutting speed 80 m/min, a 6 mm cutter, two teeth and 0.03 mm/tooth feed, the nominal spindle speed is about 4,244 rpm and table feed 255 mm/min. A 3 mm width and 1 mm depth give approximately 764 mm³/min removal. These assumed values illustrate consistent units; they are not a recommended machine setup or my measured production result. Tool, material, rigidity and shop limits must determine an actual operation.

Additional standard models include casting-time scaling, compression strain, projected-area clamp force and production-cost comparisons. Each model identifies its assumptions and the information it cannot establish.

## Laboratories and practical experience

The bronze and quarter-ring activities provide direct physical examples of process choice. Comparing starting material or pattern with the finished part explains the material transformation. Welding, carbon-fiber pressing and CNC tooling can be presented as concise process examples once original photographs or records are supplied. The Lycoming and forging-facility visits add industrial context, but the second facility's identity and hammer specification remain unverified. No quantitative hammer specification is established here.

## Technical challenges and evidence

The available notes confirm the activities, not a specific casting defect, welding problem or machining correction. No specific process failure or corrective action has been established from the current records. A process-improvement record connects an observed difficulty to the parameter or method changed, then compares the resulting part with the original requirement. Common troubleshooting questions help organize that reasoning without assuming a defect or corrective action occurred in these activities.

## Skills and engineering applications

The work supports practical exposure to casting, forming, composite pressing/bonding, welding, CNC tooling and comparing manufacturing routes. It does not establish independent machine qualification or a measured tolerance capability. These subjects apply to aircraft component production, automotive cast or formed parts, and injection-molded product tooling. My carbon-drone and bicycle-mount documents provide related preliminary design ideas; their class assignment and physical completion are unconfirmed, so they are identified as separate developing projects.

The cooling-size plot uses an idealized casting model to explain size effects. It is a teaching illustration, separate from the reported laboratory activities.
