---
shortTitle: 90° Pipe Brace Bracket
category: Design & build
order: 7
featured: false
hero: /images/pipe-brace-stress.webp
role: Independent CAD, FEA and hand calculations
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
summary: I modeled a bent steel pipe bracket in SolidWorks, ran a static FEA study on it and checked the numbers by hand. The write-up covers my assumptions, where the part is weakest and what I would change.
status: Completed
concept: false
heroAlt: SolidWorks von Mises stress plot of the 90 degree pipe brace bracket.
heroCaption: von Mises stress under a 1,000 N load. Stress builds along the bend and peaks near the base plate.
---
## What it is

The part is a simple metal support: a 90° bent pipe welded between two bolted plates. Whatever bolts to the end plate gets its load carried back into the floor, wall or frame the base is bolted to. I wanted to know how much load it could actually take and where it would fail first.

| Feature | Dimension |
| --- | --- |
| Pipe | 1 in NPS Schedule 40 (1.315 in OD, 0.133 in wall), 90° bend on a 12 in centerline radius |
| Plates | Two 4 × 4 × 3/8 in plates with 0.10 in corner radii |
| Bolt holes | Ø0.531 in (17/32 in), four per plate on a 2.5 in square, sized for 1/2 in bolts |
| Pipe bore | Ø1.330 in through the end plate |
| Material and mass | Plain carbon steel (yield 220.6 MPa), 2.54 kg total |

## How I set it up

I fixed the four bolt holes in the base plate, added a roller on its underside so it could bear against the surface, and put 1,000 N on the end plate. The mesh came out to 41,720 nodes and 23,845 elements, with 93.5% of elements under an aspect ratio of 3. The reactions added up to 999.999 N, so the model was in equilibrium.

## What I found

The FEA shows 110 to 190 MPa along the bend. To check it, I treated the bend as a curved cantilever with a 12 in moment arm and got 140 MPa at the base, which lands right in that range. That works out to a factor of safety of about 1.6 against yield.

The plot also shows a 376 MPa peak, but it is a tiny spot at the sharp corner where the pipe meets the plate. Sharp corners in FEA create artificially high stress, so I did not take that number at face value. It still told me something useful: in a real welded part, that weld is where it would crack first.

## What I would change

The plates and bolts have plenty of margin, so the pipe is the weak link. At 1,000 N the safety factor is lower than I would want, so I would either keep this version under about 700 N or move to Schedule 80 or 1-1/4 in pipe. I would also add a proper fillet weld or a gusset at the base. The full report lists my assumptions. The biggest ones are that the welds are idealized and the bolts are not modeled.
