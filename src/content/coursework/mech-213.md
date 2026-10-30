---
code: MECH 213
title: Thermodynamics
summary: Applies thermodynamic laws and substance properties to efficiency and to power-generation and refrigeration cycles.
category: Fluids & energy
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- properties of substances
- first law of thermodynamics
- second law of thermodynamics
- efficiencies
- power cycles
- refrigeration cycles
equations:
- title: Closed-system first law
  latex: \Delta E=Q-W,\quad E=U+KE+PE
  note: '**Variables and units:** E, U, KE, PE, Q, W [J]; Q positive into system and W positive done by system.


    **Assumptions:** Closed system; sum all heat and work over the process. Changes in kinetic or potential energy may be neglected only with justification.


    **When and why used / application:** Evaluate the energy change of a piston-cylinder or insulated container.'
- title: Steady-flow energy balance
  latex: \dot Q-\dot W_s=\dot m\left[(h_2-h_1)+\frac{V_2^2-V_1^2}{2}+g(z_2-z_1)\right]
  note: '**Variables and units:** Qdot, Wdot_s [W]; mdot [kg/s]; h [J/kg]; V [m/s]; g [m/s²]; z [m]; inlet 1 and outlet 2.


    **Assumptions:** Steady single inlet/outlet; shaft work out positive; enthalpy already includes flow work. Convert kJ/kg to J/kg when evaluating SI watts.


    **When and why used / application:** Estimate turbine output or compressor power.'
- title: Ideal-gas state and enthalpy change
  latex: pv=RT,\qquad \Delta h\simeq c_p(T_2-T_1)
  note: '**Variables and units:** p absolute [Pa]; v specific volume [m³/kg]; R specific gas constant [J/(kg·K)]; T [K]; cp [J/(kg·K)]; h [J/kg].


    **Assumptions:** Ideal gas; the enthalpy approximation additionally treats cp as constant over the interval. Not a saturated-mixture formula.


    **When and why used / application:** Air-cycle or preliminary compressor/turbine analysis.'
- title: Closed-system entropy balance
  latex: \Delta S=\int\frac{\delta Q}{T_b}+S_{\rm gen},\qquad S_{\rm gen}\geq0
  note: '**Variables and units:** S, Sgen [J/K]; Q [J] positive into system; Tb [K] local boundary temperature of heat transfer.


    **Assumptions:** Closed system; the actual boundary temperature enters entropy transfer; entropy generation vanishes only for an internally reversible process.


    **When and why used / application:** Check an insulated process: system entropy cannot decrease.'
- title: Heat-engine efficiency and reversible limit
  latex: \eta_{\rm th}=\frac{W_{\rm net, out}}{Q_H}=1-\frac{Q_L}{Q_H},\qquad\eta_{\rm Carnot}=1-\frac{T_L}{T_H}
  note: '**Variables and units:** eta [1]; QH, QL positive heat magnitudes and Wnet, out [J/cycle]; TH, TL [K].


    **Assumptions:** Engine operating in a cycle; Carnot expression is the reversible maximum between two constant-temperature reservoirs, not every engine cycle efficiency.


    **When and why used / application:** Benchmark a proposed heat-engine result.'
- title: Refrigerator and heat-pump COP
  latex: \mathrm{COP}_R=\frac{Q_L}{W_{\rm net, in}},\quad\mathrm{COP}_{HP}=\frac{Q_H}{W_{\rm net, in}}=\mathrm{COP}_R+1
  note: '**Variables and units:** COP [1]; QL heat removed from cold reservoir, QH heat delivered to hot reservoir, Wnet, in work supplied, all [J/cycle] or all rates [W].


    **Assumptions:** Cyclic device with QH=QL+Win; compare the same boundary and operating condition.


    **When and why used / application:** Convert a cooling load into required input power.'
figures:
- src: /images/mech-213-MECH_213_Illustrative_Energy_Flow.png
  alt: Original illustrative turbine energy-flow diagram for 0.20 kg/s air cooling from 600 K to 450 K, with constant cp=1005 J/(kg·K). Calculated shaft power 30.15 kW; not a student test result.
  caption: Original illustrative turbine energy-flow diagram for 0.20 kg/s air cooling from 600 K to 450 K, with constant cp=1005 J/(kg·K). Calculated shaft power 30.15 kW; not a student test result.
sources:
- title: Bucknell Mechanical Engineering catalog
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/
- title: OpenStax/Rice University, University Physics Volume2,3.3 First Law of Thermodynamics
  url: https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics
- title: MIT Unified Engineering, Thermodynamics chapter4
  url: https://ocw.mit.edu/ans7870/16/16.unified/thermoF03/chapter_4.htm
- title: MIT Unified Engineering, Thermodynamics chapter6
  url: https://ocw.mit.edu/ans7870/16/16.unified/thermoF03/chapter_6.htm
officialTitle: Thermodynamics
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/MECH_213_Thermodynamics/TECHNICAL_REFERENCE.md
---

## Course overview

Thermodynamics follows energy through a mechanical system and evaluates what a proposed process can achieve. The first step is choosing a boundary: a sealed cylinder stores energy, while a turbine also transfers energy with flowing material. From there the analysis distinguishes heat, work, and properties such as internal energy and enthalpy. A balanced energy equation is necessary, but the second law adds another test by limiting how energy can be converted into useful work. This perspective connects the subject to engines, compressors, refrigeration, and thermal management. A useful approach treats an ideal cycle as a reference model with explicit assumptions, then considers which losses and operating conditions would make a real device behave differently.

**Bucknell scope:** Substance properties, thermodynamic laws, efficiency, power cycles and refrigeration. [Official 2025-2026 catalog](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/).

## Core principles

- **System boundaries:** A closed system and an open control volume need different energy accounting. Choosing the boundary also determines which work and mass-flow terms belong in the balance.
- **State properties:** Pressure and temperature do not always determine phase or energy through a simple gas equation. The property model must suit the substance and operating region.
- **Energy conservation:** Heat and work change stored energy or the energy carried by a flow. Sign conventions and units must stay consistent across components.
- **Entropy and irreversibility:** Energy conservation does not make every process possible. Friction, mixing, and finite temperature differences can limit useful conversion.
- **Cycles and performance:** Engine efficiency and refrigerator coefficient of performance measure different useful outputs. An ideal limit provides context for a proposed result.

These are standard engineering explanations of the documented subject. They do not identify particular assignments, experiments, or equipment used in a particular class.

## Core equations

$$
\Delta E=Q-W,\qquad
\dot Q-\dot W_s=\dot m\left[(h_2-h_1)+\frac{V_2^2-V_1^2}{2}+g(z_2-z_1)\right]
$$

The first expression uses heat into and work out of a closed system as positive. The second describes steady one-inlet, one-outlet flow, with shaft work out positive. Energy is measured in joules, power in watts, and specific enthalpy in J/kg.

$$
\eta_{\rm th}=\frac{W_{\rm net, out}}{Q_{\rm in}},\qquad
\mathrm{COP}_R=\frac{Q_L}{W_{\rm net, in}}
$$

Both ratios are dimensionless, but they serve different purposes. A refrigerator moves existing heat, so a coefficient of performance greater than one is physically reasonable.

## Representative engineering problem

An illustrative steady, insulated air turbine carries 0.20 kg/s. Its inlet and outlet temperatures are 600 K and 450 K. With an assumed constant specific heat of 1.005 kJ/(kg·K) and negligible kinetic and potential-energy changes, the predicted shaft power is 30.15 kW. The calculation uses the enthalpy decrease; it does not establish turbine efficiency without an appropriate ideal reference. These assumed values are an educational example, not results from student work.

Other typical tasks include balancing an engine cycle, selecting suitable property data near a phase change, and calculating the input power for a cooling load. In each case, a component diagram and a defined sign convention help prevent a physically inconsistent answer from looking correct numerically.

## Practical reasoning and evidence

A component model becomes more useful when its assumptions are recorded with its answer. A turbine calculation needs a clear distinction between shaft power and heat transfer, while a refrigeration model needs a defined cooling duty and operating condition. Reporting the boundary and property model makes the result reviewable and helps identify which additional data would improve it.

A useful analytical check is to compare the result with its physical limits. A heat engine operating between two fixed reservoirs must remain below the reversible efficiency limit. A negative calculated power may instead mean that the chosen work direction was reversed. A property-table state also needs a phase check before interpolation. These are checking methods, rather than personal mistakes or successful fixes established by the records.

## Engineering skills and applications

The technical foundation includes control-volume selection, energy balances, property evaluation, cycle analysis, efficiency interpretation, and second-law checks. Vehicle powertrains connect fuel energy with useful mechanical output and rejected heat. Aircraft propulsion combines flowing-gas energy changes with compressor and turbine work. Product thermal systems use refrigeration and heat-pump models to compare cooling demand with electrical input.
