---
shortTitle: ACK Coaster Mold
category: Materials & manufacturing
order: 6
featured: false
hero: /images/coaster-mold-photo-top.webp
heroGallery:
- src: /images/coaster-mold-photo-top.webp
  alt: Photo of the machined aluminum coaster mold from above, with the Nantucket outline raised inside the circular cavity.
- src: /images/coaster-toolpath.webp
  alt: Top-view plot of every cutting move in the coaster mold G-code, colored by tool.
- src: /images/coaster-mold-photo-side.webp
  alt: Photo of the machined aluminum mold block from the side, showing the cavity and a vent slot.
- src: /images/coaster-mold-model.webp
  alt: Top view of the finished coaster mold model with the island outline, lip groove and four vent slots.
role: Coaster + mold CAD, process plan, Mastercam toolpaths and G-code
period: MECH 355 · October 2026
tools:
- SolidWorks
- Mastercam 2026
- CNC process planning
facts:
- value: 4 × 4 × 0.5 in
  label: Aluminum mold block
- value: 5 tools
  label: 880 lines of G-code, 1/2 in down to 1/16 in cutters
- value: Machined
  label: Mold complete; coasters not yet molded
figures:
- src: /images/coaster-section.webp
  alt: SolidWorks drawing of the coaster mold showing the mirrored Nantucket outline in a circular cavity and a section view with depths.
  caption: Mold drawing. The island is mirrored so it reads correctly on the molded coaster. Section B-B shows the stepped depths for the base, the island and the outer lip.
- src: /images/coaster-mold-drawing.webp
  alt: SolidWorks drawing sheet titled ACK Coaster Die Cast with top, section and isometric views of the mold block.
  caption: Drawing sheet with the section through the lip and vents, plus an isometric view of the finished mold block.
- src: /images/coaster-mold-model.webp
  alt: Top view of the finished coaster mold model with the island outline, circular lip groove and four vent slots.
  caption: The finished mold model. The four slots running out to the edge of the block are air vents, only 0.004 in deep.
courses:
- mech-355
title: Nantucket Coaster Injection Mold
summary: I designed a drink coaster with an outline of Nantucket, modeled the aluminum injection mold that makes it, and programmed the CNC toolpaths in Mastercam. The mold has been machined from my G-code on the lab's Haas mill. Injection molding the coasters comes next.
status: Mold machined · Coasters next
concept: false
heroAlt: Photo of the machined aluminum coaster mold from above, with the Nantucket outline raised inside the circular cavity.
heroCaption: The machined aluminum mold (left, from above and from the side) next to the toolpath plot from my G-code and the SolidWorks mold model. In the plot, the horizontal raster is the 1/8 in bull nose clearing the base around the island, and the outer ring is the 1/4 in ball cutting the lip. Click any panel for full size.
---

## Problem

In MECH 355 lab, each of us designs a custom coaster, machines an aluminum mold for it and uses that mold to injection mold a set of plastic coasters. The rules were specific.

- **The mold** is a 4 × 4 × 0.5 in block, with the CAM origin on the top surface at the front-left corner to match the Haas setup.
- **The coaster** has a base 0.10 in thick and a drafted lip 0.15 in thick.
- **Any image** recesses 0.02 in into the coaster, so it stands up 0.02 in from the floor of the mold, mirrored.

I put Nantucket on mine. ACK is the island's airport code, and it's a place I've spent a lot of time.

## My role

I did the coaster and mold CAD, the process plan, the Mastercam toolpaths and the G-code. The instructor and lab staff approved my process plan and my toolpaths before anything ran on the machine.

## What I built

I modeled the coaster first, then built the mold as its negative. Designing a mold means designing the empty space instead of the part: the island is mirrored, raised features become recesses, and every wall needs draft so the plastic releases. The drafted walls meant the cutter at the wall-to-floor transition had to be a bull nose or ball end mill instead of a flat one.

The process plan had to be approved before I started in Mastercam. The order of operations was the main design decision: take out the most material with the biggest cutter, and only bring in small tools where the big ones can't reach.

| Op | Purpose | Tool | Planned depth |
|---|---|---|---|
| 1 | Rough the circular cavity | 1/2 in flat end mill | Z −0.080 in, 0.010 in left on walls |
| 2 | Finish the cavity and drafted wall | 1/4 in bull nose, 0.030 in radius | Z −0.080 in |
| 3 | Lower the base around the island | 1/4 in bull nose | Z −0.100 in |
| 4 | Rest-machine the island detail | 1/8 in bull nose | Z −0.100 in |
| 5 | Cut the outer lip groove | 1/4 in tool, stepped passes | Z −0.150 in |
| 6 | Air vents out to the block edge | 1/2 in flat end mill | Z −0.004 in |

Op 4 is where the plan saves the most time. Instead of re-running the whole pocket with the 1/8 in cutter, I used Mastercam's remachining pocket. It only cuts where the 1/4 in tool couldn't fit, mainly the harbor and the narrow neck of the island. The tool list is effectively a cost list, so a good plan reaches each feature with the largest tool that fits.

## Evidence

- **The program.** The finished program uses five tools and runs to 880 lines of G-code. The toolpath plot at the top of this page is every cutting move in that file.
- **The check.** I verified every operation in Mastercam's Backplot and Verify before handing it off, because the instructor and lab staff approve toolpaths from those simulations.
- **The part.** Once the toolpaths were approved, the mold was cut from my G-code on the Haas. The two photos at the top of this page are the finished block.

<video controls muted playsinline preload="metadata" src="../../videos/coaster-mastercam-verify.mp4" aria-label="Mastercam Verify simulation of the coaster mold toolpaths cutting the aluminum block"></video>

*Mastercam Verify running my toolpaths on the 4 × 4 in block.*

## Status

The aluminum mold is machined and ready to use. The next step in the course is shooting plastic into it to make a set of coasters. That run will show whether the 0.004 in vents let the air out, whether the drafted lip releases cleanly, and how well the island detail survives at 0.02 in deep.
