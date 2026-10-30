---
code: MATH 303
title: Probability
summary: Develops probability models, moments, conditioning and limiting behavior, with simulation, historical context and applications.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- elementary probability
- random variables
- moments
- central limit theorem
- conditional expectation
- distributions derived from normal distribution
equations:
- title: Conditional probability and Bayes
  latex: P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}
  note: '**Variables and units:** A, B: events; P: dimensionless probability; P(B)>0.


    **Assumptions:** Events and probabilities belong to the same model; use total probability for P(B) if needed.


    **When and why:** Interpret a defect alert with the actual assumed base rate.'
- title: Expected value and variance
  latex: \mu=E[X]=\sum_x x p(x)\ \text{or}\ \int x f(x)\, dx,\qquad \operatorname{Var}(X)=E[(X-\mu)^2]
  note: '**Variables and units:** X: random variable; p: probability mass; f: probability density with inverse-X units; mu: X units; variance: X units squared.


    **Assumptions:** Use the applicable discrete or continuous model; moments must exist.


    **When and why:** Summarize a dimension or force distribution.'
- title: Binomial probability
  latex: P(K=k)=\binom nk p^k(1-p)^{n-k},\quad k=0,\ldots, n
  note: '**Variables and units:** K: number of designated outcomes; n: fixed trial count; p: constant trial probability; all counts/probabilities dimensionless.


    **Assumptions:** Independent Bernoulli trials with common p.


    **When and why:** Calculate assumed defect counts in a batch.'
- title: Law of total expectation
  latex: E[X]=E[E[X\mid Y]]
  note: '**Variables and units:** Y: conditioning variable; inner conditional expectation: X units; outer expectation: same units.


    **Assumptions:** X integrable; conditioning and joint model specified.


    **When and why:** Weight expected output across suppliers or operating modes.'
- title: Variance of a sum
  latex: \operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X, Y)
  note: '**Variables and units:** X, Y: quantities with compatible units; variance and covariance have squared units.


    **Assumptions:** Finite second moments; covariance vanishes for independent X, Y but zero covariance alone does not imply independence generally.


    **When and why:** Propagate two additive dimensional variations.'
- title: Central limit theorem scaling
  latex: \frac{\bar X_n-\mu}{\sigma/\sqrt n}\ \xrightarrow{d}\ N(0, 1)
  note: '**Variables and units:** Xbar_n: mean ofn observations; mu: population mean; sigma: population standard deviation, all X units; ratio dimensionless.


    **Assumptions:** IID observations with finite mean and positive finite variance; the approximation accuracy for finite n is distribution-dependent.


    **When and why:** Estimate the spread of an average under a justified sampling model.'
figures:
- src: /images/math-303-MATH_303_illustrative_binomial_probability.png
  alt: Illustrative binomial model:10 independent trials with assumed defect probability0.01. Bar heights are analytic probabilities,not observed defect counts or product reliability results.
  caption: Illustrative binomial model:10 independent trials with assumed defect probability0.01. Bar heights are analytic probabilities,not observed defect counts or product reliability results.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: MIT OCW 18.05 Reading3:Conditional Probability,Independence and Bayes
  url: https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class03-prep.pdf
- title: MIT OCW 18.05 Reading4b:Expected Value
  url: https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class04-prep-b.pdf
- title: MIT OCW 18.05 Reading5a:Variance
  url: https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class05-prep-a.pdf
officialTitle: Probability
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_303_Probability/TECHNICAL_REFERENCE.md
---

## Overview

Probability states uncertainty as a mathematical model rather than an unsupported guess. A component either passes or fails an inspection, a measured dimension varies across parts, and a diagnostic alert changes what is known about a fault. Each question requires a clear sample space and assumptions about dependence. The focus is on understanding what a distribution describes, distinguishing an expected value from a guaranteed outcome, and updating a probability when new information becomes available. These tools support engineering reliability, uncertainty propagation and simulation. A useful portfolio example should make the assumed model explicit and compare an analytic prediction with a reproducible numerical experiment, while keeping both separate from evidence about the reliability of a real product.

## Core ideas

A probability model begins with the possible outcomes and the event of interest. Independence is an assumption about joint behavior; it cannot be inferred merely because two components have different names. Shared power, environment or manufacturing history can create dependence in engineering systems.

Conditioning updates the event calculation when information is available. Bayes' theorem also requires the background rate of the event. An accurate-looking detector can still produce many false alerts when the underlying fault is uncommon.

Random variables convert outcomes into numerical quantities. Expected value describes a distribution-weighted average, while variance describes spread. When quantities are combined, covariance determines whether their uncertainties reinforce or partly cancel one another.

Limit theorems explain why averages can become stable and approximately normal under stated conditions. They do not make individual observations normal or remove bias. Simulation is a useful comparison with analytic results, provided sampling assumptions and random seeds are recorded.

## Representative problem-solving

Representative tasks include calculating the probability of at least one fault in a small independent batch, updating the probability of a defect after an alert, and estimating the spread of an average. The detailed reference also treats conditional expectation and the role of distributions derived from normal random variables. All example probabilities are assumed rather than inferred from student projects.

With an assumed independent one-percent defect probability for each of ten items, the chance of at least one defect is about nine point five six percent. The calculation uses the complement of the no-defect event. It is not a measured defect rate or a reliability claim for a drone, wheel or other designed component.

## Engineering applications

In manufacturing, probability models can describe counts of inspection outcomes and the information provided by a screening step. In mechanical analysis, random-variable models help explain how variation in inputs affects an output. In robotics, conditional reasoning clarifies why a sensor alert should be interpreted together with the prevalence of the condition being detected.

## Technical capabilities and evidence

The capabilities represented are constructing events, using conditional probabilities, calculating moments, examining dependence, and checking a model through reproducible simulation. An authentic addition would be an original probability simulation accompanied by an analytic prediction and an explanation of the assumptions. Available evidence does not establish a submitted simulation, experimentally measured reliability result, or personal probability misconception that was demonstrably overcome.

## Selected equations

**Conditional probability and Bayes.**

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}
$$

A, B: events; P: dimensionless probability; P(B)>0.

**Expected value and variance.**

$$
\mu=E[X]=\sum_x x p(x)\ \text{or}\ \int x f(x)\, dx,\qquad \operatorname{Var}(X)=E[(X-\mu)^2]
$$

X: random variable; p: probability mass; f: probability density with inverse-X units; mu: X units; variance: X units squared.

**Binomial probability.**

$$
P(K=k)=\binom nk p^k(1-p)^{n-k},\quad k=0,\ldots, n
$$

K: number of designated outcomes; n: fixed trial count; p: constant trial probability; all counts/probabilities dimensionless.

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 303, Probability**, Department of Mathematics & Statistics. Brief description: Develops probability models, moments, conditioning and limiting behavior, with simulation, history and applications. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
