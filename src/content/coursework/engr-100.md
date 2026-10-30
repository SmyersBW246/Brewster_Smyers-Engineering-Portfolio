---
code: ENGR 100
title: Engineering Design Experience
summary: Introduces engineering through themed design projects, with attention to design methods, teamwork, ethics and professional practice.
category: Engineering foundations
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- engineering design process
- authentic design projects
- teamwork fundamentals
- engineering ethics
- technical and professional skills
equations:
- title: Weighted concept score
  latex: S_j=\sum_{i=1}^{n}w_i r_{ij},\qquad \sum_i w_i=1
  note: S_j is the dimensionless score of concept j; w_i is a dimensionless criterion weight; r_ij is a rating on a declared common scale. Requires feasible concepts and consistent direction of preference. It summarizes stated preferences and does not prove a concept is objectively best.
- title: Relative requirement margin
  latex: M=\frac{L_{\rm allowed}-L_{\rm predicted}}{L_{\rm allowed}}
  note: L_allowed and L_predicted are the allowed and predicted values in the same unit for an upper-limit requirement. M is dimensionless. A positive margin meets this one requirement under the stated model; it does not validate all requirements.
- title: Prototype cost estimate
  latex: C_{\mathrm{prototype}}=\sum_{i=1}^{m}q_i c_i+C_{\mathrm{process}}
  note: q_i is the required quantity of item i; c_i is currency per corresponding unit; C_process and C_prototype are currency. Labor, scrap, taxes and process scope must be declared. This bookkeeping estimate omits any cost not entered and is not a supplier quote.
figures:
- src: /images/engr-100-illustrative_design_trade_study.svg
  alt: Original illustrative engineering design trade study with hypothetical scores; not a student test or assignment result.
  caption: Original illustrative engineering design trade study with hypothetical scores; not a student test or assignment result.
sources:
- title: Engineering
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/engineeringsciencesengr/
- title: NASA Systems Engineering Handbook
  url: https://www.nasa.gov/reference/4-2-technical-requirements-definition/
- title: NASA Systems Engineering Handbook
  url: https://www.nasa.gov/reference/6-8-decision-analysis/
- title: NASA Systems Engineering Handbook
  url: https://www.nasa.gov/reference/system-engineering-handbook-appendix/
officialTitle: Engineering Design Experience
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/ENGR_100_Engineering_Design_Experience/TECHNICAL_REFERENCE.md
---

## Course overview

Bucknell describes ENGR 100 as an introduction to engineering through design projects, including design methods, teamwork and ethics. The catalog verifies that scope; the technical framework below adds standard engineering practice.

Engineering design is the connection between a useful idea and evidence that it works. A designer would begin with the user, the intended task and the limits on a solution before choosing a mechanism or material. A design explanation should show why alternatives were considered, how a concept was selected and what a test can establish. A designer would also separate predictions from measurements and identify each contributor’s role when work involves a team. That structure is useful for a small product, a manufacturing fixture or a robot attachment because it keeps decisions traceable to the problem being solved. It gives the reader a way to assess the reasoning, rather than only the appearance of a finished object.

## Core engineering principles

**Define the need.** Describe the function and operating conditions before specifying a solution. A useful requirement contains a measurable acceptance condition.

**Separate constraints from preferences.** A mandatory envelope or load limit determines feasibility. Preferences such as low cost or easy assembly help compare feasible concepts.

**Explore alternatives.** Different mechanisms can satisfy the same function. Early sketches and simple models allow comparison before detail work commits time and materials.

**Match the model to the decision.** A quick estimate can screen an idea; it cannot replace the detailed evidence needed to release a finished component.

**Plan verification and validation.** A dimensional inspection can establish conformance to a drawing. User trials address whether the product serves its intended purpose. Each answers a different design question.

## Quantifying a design decision

A weighted comparison can make preferences visible:

$$S_j=\sum_{i=1}^{n}w_i r_{ij},\qquad \sum_i w_i=1.$$

Here the weights and preference ratings are dimensionless, chosen assumptions. A rating is not measured physical performance. Mandatory requirements must be checked before scoring.

In an illustrative comparison, three feasible concepts receive performance, manufacturability and cost ratings on a common 1-5 scale. Weights of 0.50, 0.30 and 0.20 produce scores of 3.9, 4.1 and 3.8. Concept B leads under those preferences. A sensitivity check should examine whether different weights change that ranking. These invented values demonstrate a method and are not measured student project results.

## Representative design problems

A **compact accessory bracket** requires a mounting interface, size limit and load case. The method is to define interfaces, screen concepts, estimate performance and test a prototype.

A **simple assembly fixture** requires repeatable positioning without obstructing the assembly operation. The method is to identify locating features, check access and evaluate repeatability with a defined measurement procedure.

A **prototype that misses its target** requires diagnosis before redesign. The method is to reproduce the failure, compare the test conditions with assumptions, change one justified feature and repeat the relevant check. None of these examples is claimed as an actual ENGR 100 assignment.

## Evidence, skills and applications

A design decision record connects the original need to the selected solution. It identifies the alternatives, the assumptions behind a comparison and the evidence used to accept a prototype. When several people contribute, the record also distinguishes individual responsibilities from the team outcome. This note presents representative methods rather than a documented ENGR 100 project.

The technical competencies associated with this subject are requirements writing, concept comparison, basic modeling, prototype evaluation and design documentation. They apply to automotive fixtures, mechanical product development and robotics integration. A clear account of the reasoning lets another engineer understand why a concept was chosen and what remains uncertain. Keeping the test conditions, measurements and acceptance criteria together makes a later design change easier to assess.


The trade-study diagram uses hypothetical, dimensionless ratings to explain concept comparison. It does not represent measured student work.
