---
shortTitle: 90° Pipe Brace Bracket
category: Design & build
order: 7
featured: false
hero: /images/pipe-brace-stress.webp
role: Independent CAD, FEA setup and hand verification
period: November 2026 · Completed
tools:
- SolidWorks
- SolidWorks Simulation
- Hand calculations
facts:
- value: 1,000 N
  label: Applied load (225 lbf)
- value: 140 MPa
  label: Nominal bend stress, hand-checked
- value: 4.26 mm
  label: Maximum deflection
figures:
- src: /images/pipe-brace-setup.webp
  alt: SolidWorks model of the bent pipe bracket with fixtures on the base plate and load arrows on the end plate.
  caption: Study setup. Base plate fixed at its four bolt holes with a roller on its underside; 1,000 N applied to the end plate.
- src: /images/pipe-brace-displacement.webp
  alt: SolidWorks resultant displacement plot of the pipe bracket.
  caption: Resultant displacement, 11× exaggerated. Maximum 4.26 mm at the free end plate.
document: /documents/Pipe_Brace_Bracket_FEA_Report.pdf
courses:
- mech-353
- mech-220
title: 90° Pipe Brace Bracket
summary: I modeled a welded steel pipe brace in SolidWorks and ran a static FEA study. Then I checked the results by hand and wrote a short engineering report with assumptions, a load rating and design changes.
status: Completed
concept: false
heroAlt: SolidWorks von Mises stress plot of the 90 degree pipe brace bracket.
heroCaption: von Mises stress under a 1,000 N load. The bend carries smooth bending stress that rises toward the base.
---

## What it is

The bracket is a metal support. A 90° bent pipe connects two bolted plates, so a load on one plate travels back into a floor, wall or frame.

| Feature | Dimension |
| --- | --- |
| Pipe | 1 in NPS Schedule 40 (1.315 in OD, 0.133 in wall), 90° bend on a 12 in centerline radius |
| Plates | Two 4 × 4 × 3/8 in plates with 0.10 in corner radii |
| Bolt holes | Ø0.531 in (17/32 in), four per plate on a 2.5 in square, for 1/2 in bolts |
| Pipe bore | Ø1.330 in through the end plate |
| Material and mass | Plain carbon steel (yield 220.6 MPa), 2.54 kg total |

## Study setup

I fixed the four base-plate bolt holes, put a roller on the plate's bearing face and applied 1,000 N to the end plate. The mesh was a high-quality, curvature-based solid mesh: 41,720 nodes and 23,845 elements, with 93.5% of elements under an aspect ratio of 3. The reactions summed to 999.999 N, which confirms the model is in equilibrium.

## Results and hand check

The FEA shows 110 to 190 MPa along the bend. My hand calculation (M = F·R, S = 0.1328 in³) gives 140 MPa at the base. That puts the factor of safety on yield at about 1.6 for the pipe itself. The 376 MPa peak is a small hot spot at the sharp pipe-to-plate corner. It is a stress concentration rather than the nominal stress, but it marks the weld toe as the critical location.

## Conclusion

The plates and 1/2 in bolts have large margin; the bend governs. I recommended rating this version at 700 N or less for a safety factor of at least 1.67. To keep 1,000 N, the options are Schedule 80 pipe (FOS about 1.9) or 1-1/4 in Schedule 40 (FOS about 2.8), plus a full fillet weld or gusset at the base. The full report lists the modeling assumptions: idealized welds, no bolts modeled, and linear static behavior.
