---
code: MATH 227
title: Statistics and Engineering
summary: Builds probability and random-variable foundations for inference, regression and analysis of variance using software.
category: Mathematics & analysis
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- probability theory
- discrete random variables
- continuous random variables
- sampling distributions
- statistical inference
- regression
equations:
- title: Sample mean and variance
  latex: \bar x=\frac1n\sum_{i=1}^n x_i,\qquad s^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2
  note: '**Variables and units:** xi: measurements in stated units; n: sample count; mean: same units; s²: squared units; s: same units.


    **Assumptions:** n≥2 for variance; independent same-population sample for the usual unbiased interpretation.


    **When and why:** Summarize a set of measured dimensions.'
- title: t interval for a population mean
  latex: \bar x\pm t_{1-\alpha/2, n-1}\frac{s}{\sqrt n}
  note: '**Variables and units:** alpha: noncoverage level; t: Student-t quantile; n-1: degrees of freedom; other terms asE1. Interval shares measurement units.


    **Assumptions:** Independent normal observations for exact small-sample coverage; unknown population variance.


    **When and why:** State uncertainty about a mean, not individual-part limits.'
- title: Simple linear response model
  latex: y_i=\beta_0+\beta_1x_i+\varepsilon_i
  note: '**Variables and units:** yi: response; xi: predictor; beta0: response units; beta1:[y]/[x]; epsilon: response-unit error.


    **Assumptions:** A linear mean relation in the stated range; error assumptions depend on the intended inference.


    **When and why:** Model a calibration trend.'
- title: Least-squares slope and intercept
  latex: b_1=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2},\qquad b_0=\bar y-b_1\bar x
  note: '**Variables and units:** b0, b1: estimated coefficients; sample means and data asE3. Slope has response units per predictor unit.


    **Assumptions:** Predictor values not all identical; ordinary least-squares objective.


    **When and why:** Estimate the calibration line and then inspect residuals.'
- title: One-way ANOVA model
  latex: y_{ij}=\mu+\tau_i+\varepsilon_{ij}
  note: '**Variables and units:** yij: observationj in groupi; mu: grand mean; taui: group effect; epsilon: error, all response units.


    **Assumptions:** Fixed group effects; choose an identifiability constraint such as weighted effects summing tozero.


    **When and why:** Separate a group mean shift from residual variability.'
- title: One-way ANOVA F ratio
  latex: F=\frac{SS_B/(g-1)}{SS_W/(N-g)}
  note: '**Variables and units:** SSB=sum_i ni(yi_bar-ybar)²; SSW=sum_i sum_j(yij-yi_bar)²; g: group count; N: total count. F is dimensionless.


    **Assumptions:** Classical null distribution assumes independent normal equal-variance errors and equal group population means.


    **When and why:** Compare between-group variation against a within-group noise estimate.'
figures:
- src: /images/math-227-MATH_227_illustrative_calibration_regression.png
  alt: Illustrative least-squares calibration for four assumed force-deflection pairs. Line:y=0.100+2.000x in mm andN. Synthetic benchmark,not Brewster test data.
  caption: Illustrative least-squares calibration for four assumed force-deflection pairs. Line:y=0.100+2.000x in mm andN. Synthetic benchmark,not Brewster test data.
sources:
- title: Bucknell University 2025-2026 Mathematics & Statistics catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/
- title: 'NIST/SEMATECH e-Handbook: Confidence Limits for the Mean'
  url: https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm
- title: 'NIST/SEMATECH e-Handbook: Linear Least Squares Regression'
  url: https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm
- title: 'NIST/SEMATECH e-Handbook: One-way ANOVA model and assumptions'
  url: https://www.itl.nist.gov/div898/handbook/prc/section4/prc432.htm
officialTitle: Statistics and Engineering
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MATH_227_Statistics_and_Engineering/TECHNICAL_REFERENCE.md
---

## Overview

Statistics asks what engineering measurements support and how much uncertainty remains in a conclusion. A collection of dimensions, loads or response times contains variation that a single average cannot explain. The focus is on defining the population, understanding how samples were obtained, and matching an analysis to the question being asked. An estimate of an average, a prediction for one future part and a comparison between processes require different reasoning. This subject provides tools for turning experimental data into an engineering decision while preserving the limits of the evidence. A useful portfolio artifact should retain the underlying data and show the analysis steps, units, diagnostic plots and the practical meaning of any statistical result.

## Core ideas

Sampling connects a measured dataset to a larger population. Independence and representativeness are properties of the measurement process; software cannot create them after the fact. Repeated readings of one part answer a different question from independent measurements of many parts.

Uncertainty in an estimated mean decreases as more independent information is collected. A confidence interval describes the performance of an interval-building procedure. It is different from the spread of individual parts and cannot certify that every item meets a dimensional limit.

Regression describes how a response changes with selected inputs. A fitted slope has units, and the residual pattern helps assess whether the chosen model is adequate. A visually straight trend alone does not establish causation or justify prediction far outside the measured range.

Analysis of variance compares group-to-group variation with variation within groups. The interpretation depends on a defensible design and model assumptions. A statistically detectable difference also needs an engineering interpretation of its size and consequences.

## Representative problem-solving

Representative tasks include estimating a mean dimension with an uncertainty interval, fitting a force-displacement calibration, and comparing several manufacturing conditions. The reference supplies assumed numerical data and shows the governing calculations. Those datasets demonstrate methods; they are not presented as measured student data.

For an illustrative sample of ten independent dimensions with a mean of twenty point zero two millimetres and a sample standard deviation of three hundredths of a millimetre, a two-sided ninety-five percent t interval for the process mean is approximately nineteen point nine nine nine to twenty point zero four one millimetres. This says nothing by itself about the tolerance compliance of every part.

## Engineering applications

In manufacturing, these methods support comparison of process settings and evidence-based quality decisions. In product testing, regression can summarize calibration or response trends while residuals expose model limitations. In vehicle or robotic experiments, repeated trials can separate measurement scatter from a reproducible effect, provided the experimental design actually supports that distinction.

## Technical capabilities and evidence

The capabilities represented are summarizing data with units, estimating uncertainty, stating statistical hypotheses, fitting and checking a simple model, and interpreting a controlled group comparison. An authentic future artifact would be a measured dataset with a reproducible analysis and a concise decision memo. The available records identify the course code but do not establish an original dataset, completed lab, statistical software package or a personal analysis challenge that was resolved.

## Selected equations

**Sample mean and variance.**

$$
\bar x=\frac1n\sum_{i=1}^n x_i,\qquad s^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2
$$

xi: measurements in stated units; n: sample count; mean: same units; s²: squared units; s: same units.

**t interval for a population mean.**

$$
\bar x\pm t_{1-\alpha/2, n-1}\frac{s}{\sqrt n}
$$

alpha: noncoverage level; t: Student-t quantile; n-1: degrees of freedom; other terms asE1. Interval shares measurement units.

**Simple linear response model.**

$$
y_i=\beta_0+\beta_1x_i+\varepsilon_i
$$

yi: response; xi: predictor; beta0: response units; beta1:[y]/[x]; epsilon: response-unit error.

## Visual

## Course reference

Bucknell 2025-2026 catalog: **MATH 227, Statistics and Engineering**, Department of Mathematics & Statistics. Brief description: Connects probability and random variables to inference, regression, analysis of variance and software-based analysis. [Official course record](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/mathematicsmath/).
