# ENGR 100 :  Technical reference

This document expands the concise portfolio draft. **Bucknell-verified** means stated in the official catalog. **Standard engineering** means a transferable framework supported by external engineering references. **Representative** means invented for explanation. None of the calculations or cases below is an original student assignment.

## A. Verified academic scope

- Course: ENGR 100, Engineering Design Experience.
- Department/program: Engineering, College of Engineering; interdisciplinary.
- Catalog: 2025-2026.
- Verified coverage: engineering design through themed projects, teamwork, professional skills and ethics.
- Separate course-specific public objectives: not located. Program-wide outcomes are not substituted.
- Student status: course code in audit; completion, term and project identity unknown.

The official description is summarized in the portfolio page. [BU_ENGR_2025] verifies academic scope. Other sections below are standard practice rather than a reconstructed Bucknell syllabus.

## B. Core principles

| Principle | Technical explanation and significance | Assumptions or limits | Application |
|---|---|---|---|
| Functional requirements and interfaces | State the job to be done and the physical or information interfaces before selecting hardware. A requirement becomes useful when conformance can be checked. | Stakeholder needs must be elicited; the initial problem statement may be incomplete. | Define the allowed attachment envelope and supported accessory on a bracket. |
| Feasibility before preference | Screen mandatory constraints first, then compare remaining alternatives using criteria that distinguish them. | A high preference score cannot compensate for failure of a mandatory limit. | Reject an oversized concept even if it is inexpensive. |
| Concept exploration | Compare distinct ways to provide the required function. Separate a function from the mechanism first imagined. | Novelty is not evidence of performance. The search should remain proportional to the decision. | Compare a clamp, a bolted interface and a sliding attachment. |
| Modeling with explicit assumptions | Use a representation of the relevant behavior to guide the next decision. Record loads, constraints and omitted effects. | A model is valid only for its intended use. Early screening assumptions need later checks. | Estimate a fixture's deflection before fabrication. |
| Verification and validation | Verification checks stated specifications; validation examines suitability for the user's intended task. | A passing bench test does not necessarily establish field suitability. | Gauge interface fit, then assess actual assembly access. |
| Iterative evidence | Use test observations to identify a justified change, then repeat checks affected by the change. | A single successful trial is limited evidence. Simultaneous undocumented changes obscure causes. | Revise a slipping interface and retest at the same applied load. |

Sources: NASA_REQUIREMENTS supports requirements/interfaces; NASA_DECISIONS supports feasibility and comparison; NASA_JPL_DESIGN supports iteration; NASA_SE_APPENDIX supports verification/validation. The examples are original representative applications.

## C. Useful design calculations

These are general analytical tools, not a catalog-prescribed equation list.

### C1. Weighted additive preference score

$$S_j=\sum_{i=1}^{n}w_i r_{ij},\quad w_i\geq 0,\quad \sum_{i=1}^{n}w_i=1.$$

- (S_j): aggregate preference score of concept (j), dimensionless.
- (w_i): criterion (i)'s preference weight, dimensionless.
- (r_{ij}): concept (j)'s rating on criterion (i), dimensionless.
- (n): number of criteria, a count.
- Use: compare concepts after mandatory requirements are met.
- Assumptions: rating scales are operationally defined, oriented so higher means preferred, and treated as having comparable score intervals; double counting is avoided. Weights express stakeholder judgments, not physical constants.
- Limitation: ordinal labels alone do not justify arithmetic. This simplified method assumes the team accepts the numerical scale; the ranking needs sensitivity analysis.
- Application: balance accessory-bracket performance, manufacturability and prototype cost.

NASA_DECISIONS documents weighted trade matrices and normalization. The displayed additive expression is the elementary mathematical realization used for this package's illustration; NASA is not claimed to prescribe these exact values or this scale.

### C2. Relative margin to a one-sided requirement

For a positive minimum-performance requirement:

$$M_{\min}=\frac{p-p_{\min}}{p_{\min}}.$$

For a positive maximum-allowable quantity:

$$M_{\max}=\frac{p_{\max}-p}{p_{\max}}.$$

- (p): predicted or measured quantity; (p_{\min}) or (p_{\max}): applicable requirement, in the same physical units.
- (M): dimensionless. Multiply by 100 for percent.
- Use: show distance from a specified threshold. Positive means the stated inequality is met.
- Assumptions: the threshold is nonzero and positive, and its direction is correctly stated. Uncertainty is reported separately.
- Example: a 90 mm envelope against a 100 mm maximum has (M_{\max}=0.10), or 10% of the allowable size remaining.
- Limitation: margin to an envelope is not a structural factor of safety, a probability of success or certification evidence.

The equations are direct arithmetic definitions introduced here. NASA_REQUIREMENTS supports measurable limits; it does not prescribe this particular margin convention.

### C3. Prototype cost estimate

$$C_{\mathrm{prototype}}=\sum_{i=1}^{m}q_i c_i+C_{\mathrm{process}}.$$

- (q_i): required number of item (i), in units/items as appropriate.
- (c_i): unit cost, currency per corresponding unit/item.
- (C_{\mathrm{process}}): estimated fabrication, machine or other process cost, currency.
- (C_{\mathrm{prototype}}): estimated total, currency.
- Use: compare candidate prototype bills of material on a consistent scope.
- Assumptions: cost bases, included labor, scrap and taxes are explicitly stated. This simple sum omits costs not entered.
- Representative arithmetic: 2 parts at an assumed $5 each, 3 parts at $4 each and $8 process cost total $30. These are invented prices, not purchase recommendations.
- Application: decide whether a prototype can be fabricated within a project allocation.

This is bookkeeping arithmetic. It requires no claim that the catalog mandates a particular cost model.

## D. Representative problems and solution methods

### D1. Select an accessory-bracket concept :  worked example

**Statement:** Choose among three concepts after all meet mandatory interface, envelope and static-load screening requirements.

**Given:** Hypothetical dimensionless ratings below. Performance, manufacturability and cost preference all use the same assumed interval scale: 1 least preferred, 5 most preferred. Higher cost-preference rating means less expensive under the assumed assessment, not a larger dollar cost.

| Criterion | Weight | A | B | C |
|---|---:|---:|---:|---:|
| Performance preference | 0.50 | 4 | 5 | 3 |
| Manufacturability preference | 0.30 | 3 | 4 | 5 |
| Cost preference | 0.20 | 5 | 2 | 4 |

**Required:** preference ranking and whether it is robust to the stated weight change.

**Principles/equation:** feasibility screen; C1 weighted score; sensitivity analysis.

**Method and result:**

1. Verify that no mandatory constraint is violated; otherwise remove the concept before scoring.
2. Compute (S_A=0.50(4)+0.30(3)+0.20(5)=3.9).
3. Compute (S_B=0.50(5)+0.30(4)+0.20(2)=4.1).
4. Compute (S_C=0.50(3)+0.30(5)+0.20(4)=3.8).
5. B leads under the baseline preferences.
6. Move 0.10 weight from performance to cost, giving weights (0.40, 0.30, 0.30). Scores become A=4.0, B=3.8 and C=3.9. A now leads.
7. Report the ranking reversal. Clarify stakeholder preferences or improve uncertain ratings before calling the choice robust.

**Assumptions:** ratings and weights are illustrative subjective inputs; the assessment is not a product qualification. All mandatory checks are assumed passed for the example only.

**Common mistakes:** scoring infeasible concepts; mixing dollar cost directly with unitless ratings; treating a numerical score as objective truth; silently changing weights to favor a preferred design.

### D2. Define a repeatable assembly fixture

**Given:** a representative workpiece envelope, mating features, a permitted positioning-error limit and an assembly operation. Specific numerical values must come from the actual design brief.

**Required:** a locating concept and a testable positioning requirement.

**Principles:** functional decomposition, interfaces, verifiable requirements.

**Governing relations:** geometric compatibility and the applicable one-sided error limit; use C2 only after defining a positive allowable error.

**Method:** identify surfaces or features that locate the workpiece; identify which motion must be restrained; check tool and hand access; define the measurement reference; perform repeated placement measurements; compare measured positioning error and uncertainty with the allowed value.

**Assumptions:** the fixture and workpiece stay within the chosen operating conditions; the test setup represents use.

**Common mistakes:** equating ease of clamping with good location; measuring against an inconsistent datum; reporting only the best repeated trial; omitting measurement uncertainty.

### D3. Diagnose a prototype that slips

**Given:** a representative attachment that moves under the intended test load, with recorded setup conditions and design revision.

**Required:** an evidence-based redesign and a repeat-test plan.

**Principles:** model validation, controlled iteration, requirements traceability.

**Governing relations:** use a mechanical load model appropriate to the actual interface. No friction coefficient, preload or material value can be assumed from appearance alone. The design-process course entry does not verify a particular friction formula or fastener model.

**Method:** preserve the failed test record; confirm applied load and measurement method; inspect likely slip interfaces; compare test conditions with the model; propose a change tied to the identified cause; repeat the same relevant test and assess affected interfaces.

**Assumptions:** fixture movement, measurement artifacts and environmental changes are ruled out or recorded.

**Common mistakes:** increasing tightening force without checking allowable limits; changing several features at once; using an uncalibrated load estimate; reporting an improved appearance as evidence of function.

## E. Projects and practical experience

The audit lists ENGR 100. No reviewed course-specific design brief, submission, prototype record or assessment establishes a named personal project. In particular, the independent chair, aircraft models and line-following robot must not be assigned to this course solely because they involve design.

## F. Personal challenges

No confirmed ENGR 100 challenge-and-resolution narrative is available. Typical difficulties in requirements or concept selection are not autobiographical facts. Collect a real before/after decision record rather than inventing an account of overcoming a problem.

## G. Competencies supported by the subject

Requirements writing; identifying constraints and interfaces; concept comparison; documenting modeling assumptions; planning prototype checks; communicating design rationale. These are subject competencies, not verified individual achievements.

## H. Meaningful applications

- Automotive manufacturing: comparing fixture concepts against access and positioning requirements.
- Mechanical product development: evaluating accessory interfaces and user needs.
- Robotics: integrating a tool or sensor attachment while respecting envelope and connection constraints.

These are transfer applications, not claims of an automotive or robotics project in ENGR 100.

## I. Visual asset

`assets/illustrative_design_trade_study.svg` is an original code-drawn figure of the D1 baseline scores. Caption: “Illustrative concept comparison using invented, dimensionless ratings and stated subjective weights; not student coursework.” Place beside the corresponding example, not in a gallery of personal project results. The figure reproduces none of NASA's published artwork.

## J. Recommended authentic deliverable

Choose one real ENGR 100 design project after confirming which project belongs to the course. Produce a compact decision record: need and requirements, two or more concepts, reason for selection, model or test evidence, revision and individual contribution. Link its existing project page once its actual URL is available. No URL has been invented.

References, source boundaries and claim mapping are in [SOURCES.md](SOURCES.md).
