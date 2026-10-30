---
code: CHEM 203
title: General Chemistry for Engineers
summary: Introduces inorganic chemical principles, matter structure, reactions and equilibrium, supported by qualitative and quantitative laboratory experiments.
category: Engineering foundations
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/chemistrychem/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- aqueous reactions
- atomic structure
- molecular structure
- coordination compounds
- solids liquids and gases
- basic equilibrium
equations:
- title: Mass to amount
  latex: n=\frac{m}{M}
  note: '**Variables and units:** n amount [mol]; m mass [g or kg]; M molar mass [matching g/mol or kg/mol].


    **Assumptions and limitations:** Known chemical identity, composition and purity; consistent mass units.


    **Engineering use:** Convert a measured reactant mass before applying reaction coefficients.

    **Reference:** '
- title: Stoichiometric amount ratio
  latex: \frac{n_A}{\nu_A}=\frac{n_B}{\nu_B}
  note: '**Variables and units:** n_A,n_B amounts consumed or produced [mol]; nu_A,nu_B positive stoichiometric coefficients [dimensionless] for the balanced reaction.


    **Assumptions and limitations:** Amounts correspond to the same reaction extent; limiting reagent restricts achievable product.


    **Engineering use:** Find theoretical product from the limiting reactant, then distinguish it from actual yield.

    **Reference:** '
- title: Molarity and dilution
  latex: c=\frac{n}{V},\qquad c_1V_1=c_2V_2
  note: '**Variables and units:** c concentration [mol/L or mol/m^3]; n solute amount [mol]; V final solution volume [matching L or m^3].


    **Assumptions and limitations:** Dilution relation conserves the selected solute, with no reaction or loss; solution volumes use the same units.


    **Engineering use:** Calculate stock aliquot and final concentration for a solution.

    **Reference:** '
- title: Ideal gas law
  latex: PV=nRT
  note: '**Variables and units:** P absolute pressure [Pa]; V volume [m^3]; n [mol]; R=8.314462618 J/(mol K); T absolute temperature [K].


    **Assumptions and limitations:** Dilute ideal-gas approximation; thermodynamic equilibrium and a defined gas amount.


    **Engineering use:** Estimate gas inventory or compare a gas-state change.

    **Reference:** '
- title: Equilibrium activity expression
  latex: K=\frac{a_C^{\nu_C}a_D^{\nu_D}}{a_A^{\nu_A}a_B^{\nu_B}}
  note: '**Variables and units:** K thermodynamic equilibrium constant [dimensionless]; a_i species activity relative to its standard state [dimensionless]; nu_i reaction coefficient.


    **Assumptions and limitations:** Reaction nu_A A+nu_B B <=> nu_C C+nu_D D at a specified temperature. Pure-solid and pure-liquid activities are unity in their standard-state approximation. Dilute solution activities may be approximated by c_i/c°; ideal gas activities by P_i/P°.


    **Engineering use:** Check an equilibrium composition without treating a concentration ratio with arbitrary units as a universal thermodynamic constant.

    **Reference:** '
figures:
- src: /images/chem-203-CHEM_203_illustrative_dilution.png
  alt: Original illustrative dilution calculation with fixed solute amount 0.00500 mol. Final solution concentration varies with final solution volume. Not student laboratory data.
  caption: Original illustrative dilution calculation with fixed solute amount 0.00500 mol. Final solution concentration varies with final solution volume. Not student laboratory data.
sources:
- title: Bucknell 2025-2026 catalog - Chemistry
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofartsandsciencescurricula/areasofstudy/chemistrychem/
- title: OpenStax Chemistry 2e - Covalent Bonding
  url: https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding
- title: OpenStax Chemistry 2e - Reaction Stoichiometry
  url: https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry
- title: OpenStax Chemistry 2e - Formula Mass and the Mole Concept
  url: https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept
officialTitle: General Chemistry for Engineers
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/CHEM_203_General_Chemistry_for_Engineers/TECHNICAL_REFERENCE.md
---

**Official identity:** General Chemistry for Engineers | Chemistry | Catalog 2025-2026.

**Bucknell description, paraphrased:** Introduces matter structure, aqueous reactions, gases and equilibrium through chemical principles and laboratory study. [BU_CHEM_2025]

## Course overview

This subject connects chemistry with the materials and working fluids that make a mechanical design possible. The composition of a metal, the behavior of a polymer, and the concentration of a solution all depend on an atomic and molecular description before they become engineering properties. This subject provides a way to move between that small-scale description and quantities that can be measured: mass, amount of substance, concentration, pressure, and temperature. A central question is how to choose a model that explains the material or process without hiding its assumptions. A balanced reaction or a concentration calculation is useful when it supports a clear engineering question, such as how much reactant is needed or whether a fluid condition is physically reasonable.

## Principles that matter

**Structure affects behavior.** Bonding and molecular arrangement help explain why substances have different properties. A useful comparison considers the type of bonding and the surrounding conditions, rather than treating a chemical name as a complete property specification. This connects the course with later study of metallic, ceramic, and polymeric engineering materials.

**A reaction must conserve atoms and charge.** A balanced equation defines ratios of reacting amounts. Those ratios apply to moles, not automatically to masses. Converting each supplied amount into moles makes the limiting reactant visible and gives a defensible theoretical product amount. A theoretical amount is still different from a measured yield.

**Concentration needs a defined basis.** Molarity describes amount of solute per volume of solution. The distinction between solution volume and solvent volume matters when preparing or interpreting a mixture. Dilution conserves the amount of the selected solute only when that solute is not reacting or being lost.

**Equilibrium is a dynamic condition.** Equal forward and reverse reaction rates can maintain a constant composition even while reactions continue. An equilibrium expression describes a specified reaction at a stated temperature. It does not imply equal concentrations of every species, and it does not establish how quickly equilibrium will be reached.

## Core relationships

The conversion between measured mass and chemical amount is

$$
n=\frac{m}{M}
$$

Here, $n$ is amount in moles, $m$ is mass, and $M$ is molar mass in compatible mass-per-mole units. Concentration, gas-state relations, stoichiometric ratios, and equilibrium expressions build on this conversion. The technical reference identifies the model limits and the units for each relationship.

## Representative calculation

Consider a hypothetical solution containing 0.0500 mol of a nonreacting solute in a final solution volume of 0.250 L. Its molarity is 0.200 mol/L. Taking 0.0250 L of that stock and diluting it to 0.100 L gives 0.0500 mol/L. The retained solute amount is 0.00500 mol in both the withdrawn stock portion and the diluted sample. This example demonstrates a conservation check; it is not a record of an actual laboratory preparation. The included plot shows the inverse relation between final volume and concentration for that fixed amount of solute.

## Engineering applications and technical focus

For manufacturing, chemistry supports interpretation of material composition and processing environments. For mechanical systems containing gases, it provides a molecular foundation for pressure and temperature relations, with real-gas limitations kept in view. For product testing, it supports preparation and documentation of solutions with a clear concentration basis.

The technical focus is converting mass to chemical amount, balancing and interpreting reactions, identifying a limiting reagent, calculating solution concentration, interpreting ideal-gas states, and distinguishing equilibrium from reaction rate. These are standard subject-level methods. The catalog documents laboratory study, but the available records do not identify specific experiments or their outcomes.

## Reasoning and evidence

A defensible solution starts by writing the species, quantities, units, and reaction before entering numbers. The result can then be checked by atom balance, limiting cases, and conservation of the relevant amount. No specific laboratory difficulty or successful correction is claimed without a report. An authentic laboratory graph, calculation sheet, or short report would provide a useful visual record once its course association is confirmed. Photographs of an unrelated manufacturing project should remain with that project rather than imply chemistry-laboratory evidence.

## Further technical detail and visuals

Technical reference contains the complete equation definitions, assumptions, and representative solution methods. References identify official course information and standard technical sources.
