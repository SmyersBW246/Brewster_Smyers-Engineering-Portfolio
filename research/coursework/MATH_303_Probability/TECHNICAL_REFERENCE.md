# MATH 303 | Detailed technical reference

## A. Verified course scope

**Official title:** Probability

**Department:** Mathematics & Statistics. **Catalog:** 2025-2026.

**Description, paraphrased:** Develops probability models, moments, conditioning and limiting behavior, with simulation, history and applications.

**Documented topic labels:** elementary probability; random variables; moments; central limit theorem; conditional expectation; distributions derived from normal distribution; history of probability; probability simulation; applications.

**Public course-specific objectives:** No separate course learning-objective list was located in the retrieved records. Catalog subject coverage is verified; supplementary sources do not establish Bucknell-specific teaching.

The mathematical material and worked examples below are standard subject explanations, not evidence that these exact examples were taught or assigned at Bucknell.

## B. Core principles

### P1. Events and dependence

**Explanation:** A model assigns probabilities to events in a defined sample space and specifies how events interact.

**Physical or mathematical significance:** Shared causes can invalidate a product-of-probabilities calculation.

**Assumptions and limits:** State the sample space and any independence assumption explicitly.

**Engineering use:** A batch fault count or redundant sensing model.

### P2. Conditioning and base rates

**Explanation:** Conditional probability restricts the information set; Bayes inverts a conditional statement with prior weighting.

**Physical or mathematical significance:** A detector alert has a different interpretation when faults are rare.

**Assumptions and limits:** The conditioning event has positive probability; likelihoods and priors refer to the same population.

**Engineering use:** Inspection or diagnostic reasoning.

### P3. Moments summarize different features

**Explanation:** Expectation weights values by probability; variance measures squared spread about the mean.

**Physical or mathematical significance:** A likely average response can coexist with substantial variability.

**Assumptions and limits:** Required moments must be finite; mean and variance do not uniquely determine every distribution.

**Engineering use:** Input variability and repeatability models.

### P4. Conditional expectation organizes a hierarchy

**Explanation:** A subgroup conditional mean becomes a random quantity when the subgroup is unknown.

**Physical or mathematical significance:** The overall expected response can be reconstructed by weighting subgroup means.

**Assumptions and limits:** Integrability and a well-defined conditioning variable.

**Engineering use:** Combining two suppliers or operating modes.

### P5. Limit behavior supports simulation checks

**Explanation:** For independent identically distributed observations with finite variance, the standardized mean approaches a normal distribution.

**Physical or mathematical significance:** Averages can concentrate even if individual values are nonnormal.

**Assumptions and limits:** Adequate sample size depends on the distribution; CLT does not correct bias or prove independence.

**Engineering use:** Monte Carlo estimates and uncertainty of averages.

### P6. Normal-derived distributions retain assumptions

**Explanation:** Independent standard-normal squares generate a chi-square variable; Student-t behavior is used for standardized mean inference with an estimated variance.

**Physical or mathematical significance:** Using an estimated scale changes tail behavior compared with a known scale.

**Assumptions and limits:** Normality and independence conditions must be stated; the degrees of freedom depend on the construction.

**Engineering use:** Connecting probability models to subsequent engineering inference.

## C. Core equations

### E1. Conditional probability and Bayes

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}
$$

**Variables and units:** A, B: events; P: dimensionless probability; P(B)>0.

**Assumptions:** Events and probabilities belong to the same model; use total probability for P(B) if needed.

**When and why:** Interpret a defect alert with the actual assumed base rate.

### E2. Expected value and variance

$$
\mu=E[X]=\sum_x x p(x)\ \text{or}\ \int x f(x)\, dx,\qquad \operatorname{Var}(X)=E[(X-\mu)^2]
$$

**Variables and units:** X: random variable; p: probability mass; f: probability density with inverse-X units; mu: X units; variance: X units squared.

**Assumptions:** Use the applicable discrete or continuous model; moments must exist.

**When and why:** Summarize a dimension or force distribution.

### E3. Binomial probability

$$
P(K=k)=\binom nk p^k(1-p)^{n-k},\quad k=0,\ldots, n
$$

**Variables and units:** K: number of designated outcomes; n: fixed trial count; p: constant trial probability; all counts/probabilities dimensionless.

**Assumptions:** Independent Bernoulli trials with common p.

**When and why:** Calculate assumed defect counts in a batch.

### E4. Law of total expectation

$$
E[X]=E[E[X\mid Y]]
$$

**Variables and units:** Y: conditioning variable; inner conditional expectation: X units; outer expectation: same units.

**Assumptions:** X integrable; conditioning and joint model specified.

**When and why:** Weight expected output across suppliers or operating modes.

### E5. Variance of a sum

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X, Y)
$$

**Variables and units:** X, Y: quantities with compatible units; variance and covariance have squared units.

**Assumptions:** Finite second moments; covariance vanishes for independent X, Y but zero covariance alone does not imply independence generally.

**When and why:** Propagate two additive dimensional variations.

### E6. Central limit theorem scaling

$$
\frac{\bar X_n-\mu}{\sigma/\sqrt n}\ \xrightarrow{d}\ N(0, 1)
$$

**Variables and units:** Xbar_n: mean ofn observations; mu: population mean; sigma: population standard deviation, all X units; ratio dimensionless.

**Assumptions:** IID observations with finite mean and positive finite variance; the approximation accuracy for finite n is distribution-dependent.

**When and why:** Estimate the spread of an average under a justified sampling model.

## D. Representative engineering problems

All numbers are original assumed benchmarks for this research package. They are not claimed to be Brewster's assignments or project results.

### D1. Calculate at least one assumed defect

**Given:** n=10 independent items; p(defect)=0.01 for every item.

**Required:** Probability of one or more defects.

**Relevant principles:** Complement event under a binomial model.

**Governing equations:** E3.

**Solution method:** Calculate P(K=0)=(1-p)^n; subtract from 1; compare with the rough np approximation without substituting it for the exact result.

**Assumptions:** Fixedn, constantp, and independence; these are assumed values.

**Common mistakes:** Adding probabilities as though disjoint or applying independence to a shared-cause failure.

**Worked result:** P(K≥1)=1-0.99^10=0.0956179, about 9.562%; np=0.10 is only a rough approximation.

### D2. Interpret an inspection alert

**Given:** Defect base rate0.02; P(alert|defect)=0.95; P(alert|no defect)=0.05.

**Required:** Probability of a defect after an alert.

**Relevant principles:** Bayes and total probability.

**Governing equations:** E1.

**Solution method:** Compute true-alert contribution0.95*0.02; compute false-alert contribution0.05*0.98; divide true alerts by all alerts.

**Assumptions:** The given likelihoods apply to the same inspected population; not a measured student test.

**Common mistakes:** Confusing detector sensitivity with probability of defect after alert or ignoring the base rate.

**Worked result:** P(alert)=0.019+0.049=0.068; P(defect|alert)=0.019/0.068=0.279412, about 27.94%.

### D3. Find uncertainty of a modeled average

**Given:** IID component dimensions have mean20 mm and standard deviation0.06 mm; n=36.

**Required:** Mean and standard deviation of the sample mean, and whether normality is exact.

**Relevant principles:** Expectation, independent-sum variance and CLT.

**Governing equations:** E2, E5-E6.

**Solution method:** Use linearity of expectation; variance of average is sigma²/n; take the square root; state the distinction between exact moments and approximate distribution.

**Assumptions:** Finite variance and independence; underlying shape unspecified.

**Common mistakes:** Calling individual parts more uniform because the mean is more precise or declaring normality exact without a normal population.

**Worked result:** E[Xbar]=20 mm; SD(Xbar)=0.010 mm exactly under the assumptions; approximate normality is a separate finite-sample judgment.

### D4. Combine operating modes

**Given:** A machine operates in modeA with probability0.70 andB with0.30; conditional expected completion times are4 s and7 s.

**Required:** Overall expected completion time.

**Relevant principles:** Law of total expectation.

**Governing equations:** E4.

**Solution method:** Weight each mode conditional mean by its probability; sum; distinguish the expected time from a guaranteed or most likely time.

**Assumptions:** Modes exhaustive and disjoint; conditional means finite; assumed operating mix.

**Common mistakes:** Averaging4 and7 equally despite unequal use, or reporting a mean as a maximum.

**Worked result:** E[T]=0.70*4+0.30*7=4.9 s.

## E. Personal coursework evidence

The supplied degree-audit crops list MATH 303. They do not show a completion flag, grade, semester, section or transfer-credit label. No original course assignment, lab dataset or submitted report was reviewed for this class. General engineering projects may use related mathematics, but are not assigned to this course by inference.

## F. Challenges and resolutions

No course-specific autobiographical challenge and successful resolution is established. The common mistakes above are representative failure modes, not Brewster's experiences. A personal reflection can be added only after an original calculation, iteration or student account identifies what went wrong, what changed, and what evidence supports the result.

## G. Technical capabilities represented

The capabilities represented are constructing events, using conditional probabilities, calculating moments, examining dependence, and checking a model through reproducible simulation. An authentic addition would be an original probability simulation accompanied by an analytic prediction and an explanation of the assumptions. Available evidence does not establish a submitted simulation, experimentally measured reliability result, or personal probability misconception that was demonstrably overcome.

## H. Applications

In manufacturing, probability models can describe counts of inspection outcomes and the information provided by a screening step. In mechanical analysis, random-variable models help explain how variation in inputs affects an output. In robotics, conditional reasoning clarifies why a sensor alert should be interpreted together with the prevalence of the condition being detected.

## I. Visual and authentic-artifact plan

Included:[MATH_303_illustrative_binomial_probability.png](assets/MATH_303_illustrative_binomial_probability.png). Caption: Illustrative binomial model: 10 independent trials with assumed defect probability0.01. Bar heights are analytic probabilities, not observed defect counts or product reliability results. Place after the representative example.

Recommended authentic replacement/addition: An original probability simulation with seed, analytic benchmark, convergence plot and explicit dependence assumptions. This is a request for an existing artifact, not a claim that the artifact exists or an instruction to fabricate data. Keep it separate from the illustrative plot.

## J. Traceable references

See [SOURCES.md](SOURCES.md), whose P/E/D labels map principles, equations and problems to primary sources. Original numerical arithmetic is reproduced in the source script and independently checked in the package workflow.
