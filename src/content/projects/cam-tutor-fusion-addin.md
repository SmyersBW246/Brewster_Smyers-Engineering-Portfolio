---
shortTitle: CAM Tutor (Fusion add-in)
category: Materials & manufacturing
order: 1.5
featured: false
hero: /images/cam-tutor-5axis-toolpaths.webp
heroGallery:
- src: /images/cam-tutor-5axis-toolpaths.webp
  alt: Fusion view of a test block with toolpaths from five directions drawn on it, including holes drilled into two sides and a hole square to a 30 degree face.
- src: /images/cam-tutor-panel.webp
  alt: The CAM Tutor side panel listing each toolpath as a card with its tool, speeds, feeds and step-downs.
- src: /images/cam-tutor-coaster-sim.webp
  alt: Fusion stock simulation of a coaster mold being cut from a 4 by 4 inch aluminum block.
- src: /images/cam-tutor-test-block.webp
  alt: The five-sided aluminum test block used to check 4- and 5-axis planning.
tileImage:
  src: /images/cam-tutor-coaster-sim.webp
  alt: Fusion stock simulation of a coaster mold being cut from a 4 by 4 inch aluminum block.
tileLine: "A Fusion add-in that plans CNC toolpaths and explains every choice with a rule a student can check."
role: "Personal project. I set the rules and tested every run in Fusion; the code was written with Claude Code (AI)"
period: Fall 2026 · In progress
tools:
- Autodesk Fusion CAM + Fusion Python API
- Python (rule-based planner, 76 unit tests)
- Haas post-processing (NGC), CAMotics G-code check
- Claude Code (AI coding assistant)
facts:
- value: "3 → 5 axes"
  label: Plans for a Haas VF-2, VF-2 + 4th axis, or UMC-750
- value: "2 vs 5"
  label: Setups for a 5-sided test part on the 5-axis vs a 3-axis mill
- value: "Every choice"
  label: "Cites a rule: tool, speed, feed, stepdown, sequence, setup"
figures:
- src: /images/cam-tutor-5axis-toolpaths.webp
  alt: Fusion view of a test block with toolpaths from five directions drawn on it.
  caption: A five-sided test block planned for the Haas UMC-750. CAM Tutor found the features on each side, chose the machine (2 setups instead of 5 on a 3-axis mill), and built every toolpath with the tool tilted to the right side. Posted G-code moves the table to B 0, 30 and 90 degrees with Haas's dynamic work offset (G254).
- src: /images/cam-tutor-panel.webp
  alt: CAM Tutor side panel inside Fusion with toolpath cards.
  caption: The side panel reads like a script. Each toolpath card lists the menu path, what to select and every value in Fusion's dialog order. Change a number, rebuild that toolpath, and simulate it.
- src: /images/cam-tutor-coaster-sim.webp
  alt: Stock simulation of the coaster mold toolpaths.
  caption: Where it started. On my coaster mold, CAM Tutor sized the blank to the part (4 × 4 × 0.5 in), planned 5 toolpaths with 3 tools, and Fusion's simulation cuts the cavity and the Nantucket outline from the block.
courses:
- mech-355
title: CAM Tutor, a Fusion Add-in That Plans and Explains CNC Toolpaths
summary: A Fusion add-in that reads a part, picks the blank, tools, speeds and feeds, builds the toolpaths in Fusion, and explains every choice with a rule a student can check. It started with 3-axis coaster molds and now plans 4- and 5-axis work on Haas machines.
status: Working in Fusion · Not yet cut on a machine
concept: false
heroAlt: Fusion view of a test block with toolpaths from five directions.
heroCaption: A five-sided test part planned and built by CAM Tutor for a Haas UMC-750 5-axis mill.
---

## Problem

Programming a CNC part in CAM is a long list of decisions: which blank, which tools, in what order, how fast, how deep. New programmers make those choices by copying a classmate or guessing, and Fusion doesn't say *why* a number is right. After machining my coaster mold in MECH 355, I wanted a tool that makes those decisions **and explains each one**, so a student learns the reasoning instead of just getting G-code.

## My role

This is a personal project. I set what the tool must do and the machining rules it follows, chose every trade-off (few tools, shortest machining time, no blank bigger than needed), and tested every run in Fusion against my own coaster mold. I built it with **Claude Code**, an AI coding assistant, which wrote most of the code. I checked the results in Fusion's simulation, in the posted G-code and in CAMotics, and every rule is written out so I can defend it.

## What I built

### How it works

1. **Reads the part.** The add-in scans the solid model: pockets, mold cavities (floors, raised areas, sloped walls, the narrowest gaps), holes and whether the outside is already a plain block. As of November it scans **every side**, not just the top.
2. **Chooses the blank.** If the outside is already a block, the blank is a block of exactly that size (no saw allowance, no facing).
3. **Plans the operations.** Each choice cites a rule from its catalog: biggest tool that fits, chip load and surface speed for the material, chip thinning, roughing before finishing, rest machining after a big tool, spot-drill-drill-tap. Every rule names its source (feeds and speeds guides, beam deflection, common shop practice) and how sure it is.
4. **Builds it in Fusion.** One card per toolpath, added to Fusion with real parameters, generated and timed by Fusion. A **Save script** button writes the same steps for typing them in by hand.
5. **Learns from each run.** After a run, it tries leaner versions (fewer tools, thinner bar, heavier roughing) in Fusion and keeps whichever is faster without hurting the finish.

### 4- and 5-axis

The newest version plans parts with features on several sides, for three Haas machines: a **VF-2** (3-axis), a **VF-2 with an HRT210 rotary** (4th axis) and a **UMC-750** (5-axis trunnion).

- **Which machine and how many setups.** For each side it works out the rotary angles (B/C on the trunnion, A on the 4th axis) and whether the machine can reach that side at all. On the five-sided test block that's **2 setups on the UMC-750, 3 on the 4th axis and 5 on the 3-axis mill**, about an hour of re-clamping saved and one datum for every side.
- **Workholding.** A dovetail on a riser for the trunnion (with the extra stock it needs), or a grip tab and tailstock on the 4th axis.
- **Tilt to shorten the tool.** Tipping the tool away from a tall wall lets the holder swing clear, so a shorter tool reaches. Deflection goes with stick-out cubed, so that's a much stiffer cut.
- **When it has to be simultaneous.** Drafted walls cut with the side of the tool, undercuts, freeform surfaces and wraps around a round part need the rotaries moving while cutting. CAM Tutor names the Fusion strategy for each, and when the license can't generate it, it builds the closest fixed-angle version and says what that gives up.

## Evidence

- **Coaster mold (3-axis):** 5 toolpaths, 3 tools, about 12.8 min of Fusion time, all generating.
- **Five-sided test block (5-axis):** 17 toolpaths in 2 setups, 15 generate cleanly and 2 with warnings (one empty finishing pass, one partial floor), about 7.8 min of Fusion time. The Haas post outputs the table angles (B 0/30/90) and G254.
- **76 automated tests** cover the physics, tool choices, sequencing, blank sizing and the 4/5-axis planning.

## Status

- Nothing from CAM Tutor has been cut on a machine yet. Speeds and feeds are starting values from published guides, and a machinist hasn't reviewed the rules.
- The tool library is assumed until I get the shop's real tool list. The Haas machine numbers come from spec sheets and need checking against the lab's actual machines.
- Simultaneous 5-axis toolpaths are planned but not generated: they need Fusion's Manufacturing Extension.
