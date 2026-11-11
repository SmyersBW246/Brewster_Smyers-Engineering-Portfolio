---
code: MECH 355
title: Manufacturing Processes
summary: Surveys shaping and processing methods, supported by fabrication laboratories and introductory numerical control and CAD/CAM.
category: Materials & manufacturing
tier: featured
term: In progress · Fall 2026
skills: Casting, CNC machining, Mastercam CAM, welding, composites
keyEquations:
- Milling peripheral cutting speed
- Table feed and removal rate
- Casting solidification scaling
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 1
documented: true
connection: Cast a bronze rook and machined an aluminum injection mold from my own G-code.
relatedProjects:
- ack-coaster-mold
- bronze-cast-rook
- micro-drone-chassis
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
enrollmentStatus: In progress · Fall 2026
evidenceStatus: Documented project or laboratory connection
contentStatus: Private review draft
technicalReference: research/coursework/MECH_355_Manufacturing_Processes/TECHNICAL_REFERENCE.md
---

## The course

Bucknell's manufacturing processes course: casting, forming, machining, joining, plastics and additive manufacturing, taught through fabrication labs and an introduction to CAD/CAM.

## What I did

- **Bronze casting.** Designed a chess rook in SolidWorks, 3D printed it as a pattern, built the wax gating system and cast it in bronze by lost-PLA investment casting. Then I measured the finished piece against the CAD.
- **Injection mold.** Designed a Nantucket coaster and the aluminum mold that makes it, wrote the process plan and Mastercam toolpaths, and machined the mold from my own G-code on the lab's Haas mill.
- **Shop labs.** Welding, pressing and bonding carbon fiber, and forming a ring from a quarter.
- **Industry visits.** Lycoming Engines and a metalworking facility with large forging hammers.

## What I learned

The process shapes the design. Draft on the mold walls decided which cutters I could use, every flaw on the printed pattern carried straight into the bronze, and the order of machining operations set how long the mold took to cut.

## Skills and tools

SolidWorks · Mastercam 2026 · CNC process planning and G-code · Lost-PLA investment casting · Welding · Composite pressing
