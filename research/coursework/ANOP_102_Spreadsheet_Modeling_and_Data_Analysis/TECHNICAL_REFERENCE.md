# ANOP 102: detailed technical reference

## Evidence boundary

Official Bucknell coverage: quantitative modeling, basic statistical analysis, spreadsheet environment, managerial decision making. [BU_ANOP_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. Model structure and reference integrity

Keep editable inputs separate from derived outputs and identify each quantity with units. Relative references move with copied formulas; absolute references remain fixed. This supports transparent updates and prevents a constant from silently becoming a different cell. The convention cannot establish correctness of the physical model. Use it in a bill-of-materials or process-cost workbook. [STD-ANOP102-01]

### P2. Descriptive statistics

Compute the mean and sample standard deviation only after deciding which observations are comparable. Their physical significance depends on the measurement unit and stable sampling conditions. A small spread can coexist with a calibration bias. Use center and spread together when summarizing repeated part dimensions. [STD-ANOP102-02]

### P3. Linear decision models

A fixed-plus-variable cost model expresses setup cost separately from incremental production cost. It is useful for identifying a production-volume crossover. Constant unit cost and unchanged capacity are assumptions over a stated range; bulk discounts, scrap and overtime require extensions. [STD-ANOP102-03]

### P4. Sensitivity and scenarios

Varying inputs reveals how strongly the recommendation depends on uncertain assumptions. A one-variable study isolates sensitivity, whereas a scenario changes a coherent set of inputs. This does not assign probabilities unless a justified probability model is supplied. Use it for uncertain material cost and production demand. [STD-ANOP102-04]

### P5. Trend fitting and residual review

Least squares estimates model parameters by minimizing squared response deviations. A fitted trend is a compact description, not proof of a causal relationship or permission to extrapolate. Inspect residuals and units; use a simple calibration or cost trend only over a supported range. [STD-ANOP102-05]

## C. Core equations

### E1. Fixed and variable cost

\[
C=F+vq
\]

**Variables and units:** C total cost [currency]; F fixed setup cost [currency]; v variable cost [currency/part]; q quantity [parts].

**Assumptions and limitations:** Constant v and F within the relevant production range; excludes unmodeled scrap and capacity steps.

**Engineering use:** Compare manufacturing routes or estimate a prototype batch cost.
**Reference:** [STD-ANOP102-03]

### E2. Crossover quantity

\[
q^*=\frac{F_B-F_A}{v_A-v_B}
\]

**Variables and units:** q* crossover [parts]; F_A,F_B fixed costs [currency]; v_A,v_B variable costs [currency/part].

**Assumptions and limitations:** v_A differs from v_B; examine q* >= 0 and feasible integer quantities; equal costs do not establish equal quality.

**Engineering use:** Find the production volume at which two cost models give the same total.
**Reference:** [STD-ANOP102-03]

### E3. Sample mean

\[
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
\]

**Variables and units:** x_i observation [same measurement unit throughout]; n sample count [dimensionless]; x-bar sample mean [same unit as x].

**Assumptions and limitations:** Meaningful, comparable observations; outliers and systematic effects require investigation.

**Engineering use:** Summarize measured dimensions or cycle times.
**Reference:** [STD-ANOP102-02]

### E4. Sample standard deviation

\[
s=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}}
\]

**Variables and units:** s sample spread [same unit as x]; n > 1.

**Assumptions and limitations:** An independent sample from a stable process supports population-spread interpretation; s is not the standard uncertainty of the mean.

**Engineering use:** Describe repeatability of measured cycle time.
**Reference:** [STD-ANOP102-02]

### E5. Least-squares criterion

\[
\min_{a,b}\sum_{i=1}^{n}\left[y_i-(a+bx_i)\right]^2
\]

**Variables and units:** x_i predictor [input unit]; y_i response [output unit]; a intercept [output unit]; b slope [output/input]; objective [output unit squared].

**Assumptions and limitations:** A linear functional model; statistical inference needs further assumptions about errors and independence.

**Engineering use:** Estimate a calibration trend, then inspect residuals and avoid unsupported extrapolation.
**Reference:** [STD-ANOP102-05]

## D. Representative problems

### D1. Fabrication-route crossover (illustrative, not personal coursework)

**Given:** F_A=$300, v_A=$12/part; F_B=$900, v_B=$6/part; candidate demand 50 to 150 parts.

**Required:** Crossover quantity and preferred direct-cost route at the endpoints.

**Relevant physical or mathematical principles:** Fixed-plus-variable costs; equal-cost intersection.

**Governing equations:** E1-E2 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Write both cost expressions; set them equal; solve q*=(900-300)/(12-6)=100 parts. Evaluate both alternatives at 50 and 150; state the scope of the recommendation.

**Assumptions:** No quality difference, scrap, financing, lead-time penalty or capacity step in this illustration.

**Common mistakes:** Comparing unit variable costs alone; confusing setup cost per batch with cost per part; treating a negative crossover as feasible.

**Worked result or expected output:** At 50: A $900, B $1200. At 150: A $2100, B $1800. At 100 both cost $1500.

### D2. Summarize repeatability (illustrative, not personal coursework)

**Given:** Illustrative cycle times 9, 10 and 11 s from independent nominally comparable runs.

**Required:** Mean and sample standard deviation; an appropriate chart.

**Relevant physical or mathematical principles:** Descriptive statistics and units.

**Governing equations:** E3-E4 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Retain the raw data; compute mean 10 s; deviations -1,0,1 s; squared sum 2 s²; divide by n-1=2 and take square root. Show points rather than a bar of the mean alone.

**Assumptions:** Three observations illustrate arithmetic and do not characterize a production process adequately.

**Common mistakes:** Using population denominator n for a sample estimate; labeling s as accuracy or proof of process capability.

**Worked result or expected output:** Mean 10 s; sample standard deviation 1 s.

### D3. Check a model under uncertainty (illustrative, not personal coursework)

**Given:** A quoted material unit cost may change by ±20%; planned batch quantity is supplied.

**Required:** A sensitivity table and whether the preferred route changes.

**Relevant physical or mathematical principles:** Input/output model structure and scenario analysis.

**Governing equations:** E1-E2 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Identify the uncertain input; create low/base/high values; recompute costs using unchanged formulas; plot the cost difference; identify any crossover and which assumptions are held fixed.

**Assumptions:** The chosen range is an assumption, not a confidence interval; all other costs are constant unless a scenario says otherwise.

**Common mistakes:** Hard-coding outputs, copying stale values, or combining contradictory best-case assumptions.

**Worked result or expected output:** Report the sensitivity and the decision threshold; no project-specific answer is claimed.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image(1).png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/ANOP_102_illustrative_cost_crossover.svg). Caption: Original illustrative process-cost comparison. Assumed setup and per-part costs; not supplier quotes or Brewster project results.

Recommended authentic artifact: A real ANOP 102 workbook, with one formula-view screenshot and a sensitivity chart. Remove personal or proprietary data. A digital artifact is preferable to a new physical build.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.