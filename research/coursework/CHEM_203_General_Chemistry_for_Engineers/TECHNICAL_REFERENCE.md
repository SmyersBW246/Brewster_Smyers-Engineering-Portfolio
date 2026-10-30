# CHEM 203: detailed technical reference

## Evidence boundary

Official Bucknell coverage: aqueous reactions, atomic structure, molecular structure, coordination compounds, solids liquids and gases, basic equilibrium, qualitative laboratory experiments, quantitative laboratory experiments. [BU_CHEM_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. Bonding and structure

Chemical bonding and arrangement connect composition with material behavior. Bond polarity, coordination and structure matter alongside temperature and environment. A simple bonding category cannot predict every bulk property. Use the connection to frame why candidate engineering materials differ before consulting measured properties. [STD-CHEM203-01]

### P2. Stoichiometric conservation

A balanced equation conserves atoms and charge and defines molar proportions. Identify the limiting reactant by comparing supplied moles with their coefficients. The calculation predicts a theoretical extent, not conversion efficiency or practical yield. Use it in a material-balance estimate. [STD-CHEM203-02]

### P3. Amount and concentration

Moles link measured mass to numbers of entities. Molarity then relates amount to final solution volume. Temperature-dependent volume and reaction or loss during dilution can limit a simple conservation calculation. Use it to document a solution-preparation calculation. [STD-CHEM203-04]

### P4. Gas-state modeling

The ideal gas law connects absolute pressure, volume, temperature and chemical amount. It represents a dilute-gas approximation, with molecular size and interactions neglected. Use it for an initial gas inventory while checking whether a real-gas model is warranted. [STD-CHEM203-05]

### P5. Chemical equilibrium

For a specified balanced reaction at a fixed temperature, equilibrium constrains the activity ratios. Dynamic equilibrium is different from a stopped reaction and does not specify reaction speed. Use it when interpreting whether a mixture composition is consistent with a known equilibrium constant. [STD-CHEM203-06]

## C. Core equations

### E1. Mass to amount

\[
n=\frac{m}{M}
\]

**Variables and units:** n amount [mol]; m mass [g or kg]; M molar mass [matching g/mol or kg/mol].

**Assumptions and limitations:** Known chemical identity, composition and purity; consistent mass units.

**Engineering use:** Convert a measured reactant mass before applying reaction coefficients.
**Reference:** [STD-CHEM203-03]

### E2. Stoichiometric amount ratio

\[
\frac{n_A}{\nu_A}=\frac{n_B}{\nu_B}
\]

**Variables and units:** n_A,n_B amounts consumed or produced [mol]; nu_A,nu_B positive stoichiometric coefficients [dimensionless] for the balanced reaction.

**Assumptions and limitations:** Amounts correspond to the same reaction extent; limiting reagent restricts achievable product.

**Engineering use:** Find theoretical product from the limiting reactant, then distinguish it from actual yield.
**Reference:** [STD-CHEM203-02]

### E3. Molarity and dilution

\[
c=\frac{n}{V},\qquad c_1V_1=c_2V_2
\]

**Variables and units:** c concentration [mol/L or mol/m^3]; n solute amount [mol]; V final solution volume [matching L or m^3].

**Assumptions and limitations:** Dilution relation conserves the selected solute, with no reaction or loss; solution volumes use the same units.

**Engineering use:** Calculate stock aliquot and final concentration for a solution.
**Reference:** [STD-CHEM203-04]

### E4. Ideal gas law

\[
PV=nRT
\]

**Variables and units:** P absolute pressure [Pa]; V volume [m^3]; n [mol]; R=8.314462618 J/(mol K); T absolute temperature [K].

**Assumptions and limitations:** Dilute ideal-gas approximation; thermodynamic equilibrium and a defined gas amount.

**Engineering use:** Estimate gas inventory or compare a gas-state change.
**Reference:** [STD-CHEM203-05]

### E5. Equilibrium activity expression

\[
K=\frac{a_C^{\nu_C}a_D^{\nu_D}}{a_A^{\nu_A}a_B^{\nu_B}}
\]

**Variables and units:** K thermodynamic equilibrium constant [dimensionless]; a_i species activity relative to its standard state [dimensionless]; nu_i reaction coefficient.

**Assumptions and limitations:** Reaction nu_A A+nu_B B <=> nu_C C+nu_D D at a specified temperature. Pure-solid and pure-liquid activities are unity in their standard-state approximation. Dilute solution activities may be approximated by c_i/c°; ideal gas activities by P_i/P°.

**Engineering use:** Check an equilibrium composition without treating a concentration ratio with arbitrary units as a universal thermodynamic constant.
**Reference:** [STD-CHEM203-06]

## D. Representative problems

### D1. Plan an illustrative dilution (illustrative, not personal coursework)

**Given:** Stock c_1=0.200 mol/L; V_1=0.0250 L; final V_2=0.100 L.

**Required:** Final concentration and solute conservation check.

**Relevant physical or mathematical principles:** Conservation of solute amount and molarity.

**Governing equations:** E3 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Compute n=c_1 V_1=0.00500 mol. Divide by final solution volume: c_2=0.00500/0.100=0.0500 mol/L. Recalculate c_2 V_2 to check the amount.

**Assumptions:** No reaction, evaporation or solute loss; final solution volume is known.

**Common mistakes:** Using the added solvent volume as final solution volume; mixing mL and L.

**Worked result or expected output:** c_2=0.0500 mol/L; the conserved solute amount is 0.00500 mol.

### D2. Identify a limiting reactant (illustrative, not personal coursework)

**Given:** Hypothetical balanced reaction 2A+B -> C, with 0.300 mol A and 0.100 mol B.

**Required:** Maximum C and remaining excess reactant.

**Relevant physical or mathematical principles:** Balanced reaction and limiting stoichiometric extent.

**Governing equations:** E2 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Calculate n_A/2=0.150 mol extent and n_B/1=0.100 mol extent. B limits the reaction. The 0.100 mol extent produces 0.100 mol C and consumes 0.200 mol A.

**Assumptions:** One complete reaction; no competing pathways; theoretical conversion.

**Common mistakes:** Comparing the raw mole amounts without coefficients; calling the theoretical product a measured yield.

**Worked result or expected output:** Maximum C=0.100 mol; A remaining=0.100 mol; B exhausted in this ideal calculation.

### D3. Estimate a gas inventory (illustrative, not personal coursework)

**Given:** Ideal gas at P=100000 Pa absolute, V=0.0100 m^3 and T=300 K.

**Required:** Amount in moles; interpretation limits.

**Relevant physical or mathematical principles:** Ideal gas state equation.

**Governing equations:** E4 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Use n=PV/(RT)=1000/(8.314462618*300). Check that Pa*m^3 is J. State why an ideal approximation is being used and what operating conditions would require reassessment.

**Assumptions:** Dilute equilibrium ideal gas; uniform temperature; no leaks.

**Common mistakes:** Using Celsius directly or gauge pressure; confusing n with number of molecules.

**Worked result or expected output:** n=0.4009 mol.

### D4. Test an equilibrium ratio (illustrative, not personal coursework)

**Given:** Hypothetical A <=> B at a stated fixed temperature with equilibrium a_A=0.20 and a_B=0.60, each dimensionless.

**Required:** K and meaning of the result.

**Relevant physical or mathematical principles:** Reaction activity ratio and equilibrium, not kinetics.

**Governing equations:** E5 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Use K=a_B/a_A=3.0. State that B has the larger activity for these equilibrium conditions; the ratio says nothing about time to reach this state.

**Assumptions:** Both activities refer to the same standard-state convention and equilibrium state.

**Common mistakes:** Interpreting K as a reaction rate, or asserting equal forward/backward concentrations.

**Worked result or expected output:** K=3.0, dimensionless, for the stated reaction and temperature.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image(5).png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/CHEM_203_illustrative_dilution.svg). Caption: Original illustrative dilution calculation with fixed solute amount 0.00500 mol. Final solution concentration varies with final solution volume. Not student laboratory data.

Recommended authentic artifact: One actual CHEM 203 laboratory graph or report excerpt with measured quantities and a caption identifying the experiment. A digital record is sufficient; no new physical build is recommended.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.