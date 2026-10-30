---
code: ANOP 102
title: Spreadsheet Modeling & Data Analysis
summary: Introduces quantitative spreadsheet models and basic statistics for managerial decisions.
category: Computing & data
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofmanagementcurricula/areasofstudy/businessanalytics/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- quantitative modeling
- basic statistical analysis
- spreadsheet environment
- managerial decision making
equations:
- title: Fixed and variable cost
  latex: C=F+vq
  note: '**Variables and units:** C total cost [currency]; F fixed setup cost [currency]; v variable cost [currency/part]; q quantity [parts].


    **Assumptions and limitations:** Constant v and F within the relevant production range; excludes unmodeled scrap and capacity steps.


    **Engineering use:** Compare manufacturing routes or estimate a prototype batch cost.

    **Reference:** '
- title: Crossover quantity
  latex: q^*=\frac{F_B-F_A}{v_A-v_B}
  note: '**Variables and units:** q* crossover [parts]; F_A,F_B fixed costs [currency]; v_A,v_B variable costs [currency/part].


    **Assumptions and limitations:** v_A differs from v_B; examine q* >= 0 and feasible integer quantities; equal costs do not establish equal quality.


    **Engineering use:** Find the production volume at which two cost models give the same total.

    **Reference:** '
- title: Sample mean
  latex: \bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
  note: '**Variables and units:** x_i observation [same measurement unit throughout]; n sample count [dimensionless]; x-bar sample mean [same unit as x].


    **Assumptions and limitations:** Meaningful, comparable observations; outliers and systematic effects require investigation.


    **Engineering use:** Summarize measured dimensions or cycle times.

    **Reference:** '
- title: Sample standard deviation
  latex: s=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}}
  note: '**Variables and units:** s sample spread [same unit as x]; n > 1.


    **Assumptions and limitations:** An independent sample from a stable process supports population-spread interpretation; s is not the standard uncertainty of the mean.


    **Engineering use:** Describe repeatability of measured cycle time.

    **Reference:** '
- title: Least-squares criterion
  latex: \min_{a,b}\sum_{i=1}^{n}\left[y_i-(a+bx_i)\right]^2
  note: '**Variables and units:** x_i predictor [input unit]; y_i response [output unit]; a intercept [output unit]; b slope [output/input]; objective [output unit squared].


    **Assumptions and limitations:** A linear functional model; statistical inference needs further assumptions about errors and independence.


    **Engineering use:** Estimate a calibration trend, then inspect residuals and avoid unsupported extrapolation.

    **Reference:** '
figures:
- src: /images/anop-102-ANOP_102_illustrative_cost_crossover.png
  alt: Original illustrative process-cost comparison. Assumed setup and per-part costs; not supplier quotes or Brewster project results.
  caption: Original illustrative process-cost comparison. Assumed setup and per-part costs; not supplier quotes or Brewster project results.
sources:
- title: Bucknell 2025-2026 catalog - Analytics and Operations Management (Freeman College of Management)
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofmanagementcurricula/areasofstudy/businessanalytics/
- title: 'Microsoft Support :  relative, absolute and mixed references'
  url: https://support.microsoft.com/en-us/excel/switch-between-relative-absolute-and-mixed-references
- title: 'NIST IR 6969 (2019) :  statistical techniques in mass calibration'
  url: https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.6969-2019.pdf
- title: 'OpenStax :  cost behavior and break-even relationships'
  url: https://openstax.org/books/principles-managerial-accounting/pages/3-2-calculate-a-break-even-point-in-units-and-dollars
officialTitle: Spreadsheet Modeling & Data Analysis
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/ANOP_102_Spreadsheet_Modeling_and_Data_Analysis/TECHNICAL_REFERENCE.md
---

**Official identity:** Spreadsheet Modeling & Data Analysis | Analytics and Operations Management (Freeman College of Management) | Catalog 2025-2026.

**Bucknell description, paraphrased:** Builds spreadsheet models and applies introductory statistics to quantitative managerial decisions. [BU_ANOP_2025]

## Course overview

Spreadsheet modeling is a way to make engineering decisions traceable. A useful workbook shows where inputs came from, how assumptions affect calculations, and why a recommendation follows from the result. That perspective connects business analytics with mechanical engineering: manufacturing cost, production volume, test measurements, and resource limits all need a model before they can support a decision. This subject can compare alternatives without hiding the calculation behind a polished chart. The goal is a workbook another person can inspect, change, and check. The same habits matter when evaluating a fabrication method, planning a prototype budget, or summarizing measurements from a mechanical test.

## Principles that matter

**Separate the model from its inputs.** A clear spreadsheet distinguishes supplied data, assumptions, formulas, and outputs. This makes an engineering estimate easier to revise when a supplier quote or production quantity changes. Cell references should express that structure: fixed parameters need stable references, while row-level calculations should update consistently when copied. This is a modeling convention rather than a claim about a particular submitted workbook.

**Match the statistic to the decision.** An average describes the center of a dataset; variation describes how dispersed the observations are. Neither alone establishes whether a process is acceptable. Units, sample size, measurement conditions, and unusual observations all affect the interpretation. A chart should reveal those conditions rather than compress them into an unexplained performance score.

**Test the assumptions.** A single estimate can be misleading when its inputs are uncertain. A sensitivity study changes one input over a stated range, while a scenario combines several assumptions into a coherent case. The useful result is the point at which the preferred alternative changes, together with the practical limits of the comparison.

## Core relationships

For a simple manufacturing comparison, total cost combines setup cost with a cost per part:

$$
C=F+vq
$$

Here, $C$ and $F$ are currency, $v$ is currency per part, and $q$ is part count. A sample mean and sample standard deviation summarize repeated measurements; a fitted line can describe a trend, provided residuals and the data range support that model. The expanded reference defines these quantities and their assumptions.

## Representative engineering decision

Consider two hypothetical fabrication routes. Route A has a setup cost of $300 and costs $12 per part; route B requires $900 of setup and costs $6 per part. Setting the cost expressions equal gives a crossover at 100 parts. At 50 parts, A costs $900 and B costs $1,200. At 150 parts, A costs $2,100 and B costs $1,800. These are original illustrative values, not quotes or results from student manufacturing projects. Quality, lead time, rework, and capacity would still need consideration before selecting a real process.

## Applications and technical focus

In manufacturing, the same structure supports make-or-buy and process comparisons. In product development, it supports a bill of materials whose quantities and unit costs can be checked independently. In test engineering, it supports measurement summaries with clear definitions, consistent units, and plots that retain the underlying observations.

The technical focus is formula construction, appropriate use of relative and absolute references, data organization, descriptive statistics, chart selection, and sensitivity analysis. These capabilities complement CAD and simulation because engineering decisions also depend on budgets, repeatability, and tradeoffs. A compact model can expose which uncertain input deserves better evidence before further analysis is useful.

## Reasoning and evidence

A useful checking sequence is to calculate one row by hand, examine an extreme input, verify the copied formulas, and compare the plotted trend with the governing relationship. A spreadsheet returning a number does not establish that the model is correct. These are standard review methods; no personal spreadsheet error or resolved difficulty is claimed here. The included plot demonstrates the cost crossover only. An authentic workbook with visible formulas would provide the strongest supporting artifact once its course association is confirmed.

## Further technical detail and visuals

Technical reference contains the complete equation definitions, assumptions, and representative solution methods. References identify official course information and standard technical sources.
