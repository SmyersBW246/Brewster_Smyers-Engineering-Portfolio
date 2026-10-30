# MECH 213 | Thermodynamics: technical reference

## Evidence boundary

**Bucknell-verified:** Applies thermodynamic laws and substance properties to efficiency and to power-generation and refrigeration cycles. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 213.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except any explicitly attributed personal source quantities.

**Personal coursework:** MECH 213 is listed in image.png and Thermodynamics is named in the supplied résumé. These establish relevance/listing but not term, grade, or completion. No original thermal-storage mockup report or course assignment was reviewed; its class association remains unresolved.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. System and control-volume definition

**Technical explanation:** Draw the boundary and list which heat, work and mass transfers cross it before simplifying an energy balance.

**Physical significance:** Changes the accounting required for a piston versus a turbine.

**Assumptions and limits:** Steady and closed are distinct assumptions; storage terms cannot be dropped merely because equipment operates continuously.

**Engineering application:** Turbine or compressor component model.

**Source:** STD-MECH213-01; full URL in [Sources](SOURCES.md).

### P2. State properties and substance models

**Technical explanation:** Use thermodynamic properties to characterize equilibrium states, selecting an ideal-gas model or appropriate property data according to the region.

**Physical significance:** Relates measured state variables to stored and flowing energy.

**Assumptions and limits:** Ideal-gas behavior is an approximation; constant heat capacity is an additional approximation; phase-change regions require suitable data.

**Engineering application:** Air-cycle calculations or refrigerant state selection.

**Source:** STD-MECH213-02; full URL in [Sources](SOURCES.md).

### P3. First law and enthalpy transport

**Technical explanation:** Conserve energy across the chosen boundary. Flowing mass carries internal energy plus the pressure-related flow work summarized in enthalpy.

**Physical significance:** Connects temperature or enthalpy changes to shaft power.

**Assumptions and limits:** Use a consistent heat/work sign convention and include kinetic/potential-energy terms if significant.

**Engineering application:** Power from an adiabatic turbine.

**Source:** STD-MECH213-03; full URL in [Sources](SOURCES.md).

### P4. Entropy and irreversibility

**Technical explanation:** Entropy transfer and entropy generation distinguish reversible reference processes from irreversible actual processes.

**Physical significance:** Explains why conserving energy alone cannot determine feasibility or best performance.

**Assumptions and limits:** A reversible heat-transfer path is used when evaluating entropy change; actual heat divided by a guessed temperature is not generally a system entropy change.

**Engineering application:** Assessing loss mechanisms and ideal limits.

**Source:** STD-MECH213-04; full URL in [Sources](SOURCES.md).

### P5. Cycles and performance measures

**Technical explanation:** A complete cycle returns the working substance to its initial state while exchanging heat and work. Define the desired output before forming an efficiency or COP.

**Physical significance:** Distinguishes power generation from refrigeration.

**Assumptions and limits:** Reservoir temperatures for the Carnot limit must be absolute; actual devices include additional losses.

**Engineering application:** Engine and heat-pump comparisons.

**Source:** STD-MECH213-05; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Closed-system first law

\[
\Delta E=Q-W,\quad E=U+KE+PE
\]

**Variables and units:** E, U, KE, PE, Q, W [J]; Q positive into system and W positive done by system.

**Assumptions:** Closed system; sum all heat and work over the process. Changes in kinetic or potential energy may be neglected only with justification.

**When and why used / application:** Evaluate the energy change of a piston-cylinder or insulated container.

**Source:** STD-MECH213-01; equations are standard technical content.

### E2. Steady-flow energy balance

\[
\dot Q-\dot W_s=\dot m\left[(h_2-h_1)+\frac{V_2^2-V_1^2}{2}+g(z_2-z_1)\right]
\]

**Variables and units:** Qdot, Wdot_s [W]; mdot [kg/s]; h [J/kg]; V [m/s]; g [m/s²]; z [m]; inlet 1 and outlet 2.

**Assumptions:** Steady single inlet/outlet; shaft work out positive; enthalpy already includes flow work. Convert kJ/kg to J/kg when evaluating SI watts.

**When and why used / application:** Estimate turbine output or compressor power.

**Source:** STD-MECH213-03; equations are standard technical content.

### E3. Ideal-gas state and enthalpy change

\[
pv=RT,\qquad \Delta h\simeq c_p(T_2-T_1)
\]

**Variables and units:** p absolute [Pa]; v specific volume [m³/kg]; R specific gas constant [J/(kg·K)]; T [K]; cp [J/(kg·K)]; h [J/kg].

**Assumptions:** Ideal gas; the enthalpy approximation additionally treats cp as constant over the interval. Not a saturated-mixture formula.

**When and why used / application:** Air-cycle or preliminary compressor/turbine analysis.

**Source:** STD-MECH213-02; equations are standard technical content.

### E4. Closed-system entropy balance

\[
\Delta S=\int\frac{\delta Q}{T_b}+S_{\rm gen},\qquad S_{\rm gen}\geq0
\]

**Variables and units:** S, Sgen [J/K]; Q [J] positive into system; Tb [K] local boundary temperature of heat transfer.

**Assumptions:** Closed system; the actual boundary temperature enters entropy transfer; entropy generation vanishes only for an internally reversible process.

**When and why used / application:** Check an insulated process: system entropy cannot decrease.

**Source:** STD-MECH213-04; STD-MECH213-08; equations are standard technical content.

### E5. Heat-engine efficiency and reversible limit

\[
\eta_{\rm th}=\frac{W_{\rm net, out}}{Q_H}=1-\frac{Q_L}{Q_H},\qquad\eta_{\rm Carnot}=1-\frac{T_L}{T_H}
\]

**Variables and units:** eta [1]; QH, QL positive heat magnitudes and Wnet, out [J/cycle]; TH, TL [K].

**Assumptions:** Engine operating in a cycle; Carnot expression is the reversible maximum between two constant-temperature reservoirs, not every engine cycle efficiency.

**When and why used / application:** Benchmark a proposed heat-engine result.

**Source:** STD-MECH213-05; STD-MECH213-07; equations are standard technical content.

### E6. Refrigerator and heat-pump COP

\[
\mathrm{COP}_R=\frac{Q_L}{W_{\rm net, in}},\quad\mathrm{COP}_{HP}=\frac{Q_H}{W_{\rm net, in}}=\mathrm{COP}_R+1
\]

**Variables and units:** COP [1]; QL heat removed from cold reservoir, QH heat delivered to hot reservoir, Wnet, in work supplied, all [J/cycle] or all rates [W].

**Assumptions:** Cyclic device with QH=QL+Win; compare the same boundary and operating condition.

**When and why used / application:** Convert a cooling load into required input power.

**Source:** STD-MECH213-06; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Insulated air turbine

**Given:** Steady mdot=0.20 kg/s, T1=600 K, T2=450 K, cp=1005 J/(kg·K); negligible velocity/elevation changes.

**Required:** Shaft power output.

**Principles:** Steady-flow first law and ideal-gas enthalpy model.

**Equations:** E2-E3.

**Solution methodology:** Draw inlet/outlet and heat/work arrows. Set Qdot=0; calculate h1−h2; multiply by mass flow; compare magnitude and sign with the direction of temperature change.

**Assumptions:** Adiabatic operation; ideal gas with constant cp; no accumulation.

**Common mistakes:** Reporting kJ/s as watts without conversion; claiming efficiency from power alone.

**Worked result:** Wdot_out=0.20(1005)(600−450)=30150 W=30.15 kW.

### D2. Engine cycle and upper limit

**Given:** QH=500 kJ/cycle, QL=320 kJ/cycle; reservoir temperatures TH=600 K, TL=300 K.

**Required:** Net work, thermal efficiency, and consistency with reversible bound.

**Principles:** Cyclic first law and second-law limit.

**Equations:** E5.

**Solution methodology:** Find net work as heat input minus rejection. Divide by heat input. Separately calculate Carnot efficiency from reservoir temperatures.

**Assumptions:** Two ideal reservoirs; Q values are positive magnitudes; energy storage returns to zero over cycle.

**Common mistakes:** Using Celsius in Carnot expression; interpreting below-Carnot efficiency as proof every detail is feasible.

**Worked result:** Wnet=180 kJ/cycle; eta=0.36; Carnot bound=0.50. Passing this bound alone does not validate the engine.

### D3. Cooling power requirement

**Given:** Cooling load Qdot_L=2.0 kW; actual COP_R=3.0.

**Required:** Electrical/mechanical input and rejected heat rates under the chosen system boundary.

**Principles:** Refrigerator COP and cyclic energy balance.

**Equations:** E6.

**Solution methodology:** Use Win=QL/COP; calculate QH=QL+Win; state whether auxiliary loads are included in given COP.

**Assumptions:** Steady average cooling; stated COP applies at this operating point; no separate auxiliary loads in example.

**Common mistakes:** Subtracting input work from rejected heat or treating COP above one as an energy violation.

**Worked result:** Wdot_in=0.6667 kW; Qdot_H=2.6667 kW.

### D4. Entropy generation during heat transfer

**Given:** 1000 J passes from a reservoir at600 K to one at300 K; composite boundary includes both.

**Required:** Combined entropy change and generation.

**Principles:** Entropy changes of constant-temperature reservoirs.

**Equations:** E4 with deltaS_reservoir=Q/T.

**Solution methodology:** Calculate hot reservoir change−Q/TH and cold change+Q/TL. Add; with no external entropy transfer, the total is generated entropy.

**Assumptions:** Constant reservoir temperatures; no work or mass transfer; negligible storage in the connecting interface.

**Common mistakes:** Using the hot temperature for both changes; setting entropy generation to zero merely because energy is conserved.

**Worked result:** DeltaS_total=−1000/600+1000/300=1.667 J/K>0.

## E. Personal project evidence

MECH 213 is listed in image.png and Thermodynamics is named in the supplied résumé. These establish relevance/listing but not term, grade, or completion. No original thermal-storage mockup report or course assignment was reviewed; its class association remains unresolved.

## F. Challenges and evidence limits

No personal Thermodynamics difficulty or resolution was documented. Boundary selection, sign checks, property checks and reversible-limit checks are standard methods, not a record of errors Brewster made or corrected.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_213_Illustrative_Energy_Flow.png).

**Caption:** Original illustrative turbine energy-flow diagram for 0.20 kg/s air cooling from 600 K to 450 K, with constant cp=1005 J/(kg·K). Calculated shaft power 30.15 kW; not a student test result.

**Best authentic addition:** One actual component energy balance or cycle calculation with a labeled system boundary, property values and interpretation; a thermal-storage mockup only if course association and work records are confirmed.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
