# MECH 313 | Fluid Dynamics: technical reference

## Evidence boundary

**Bucknell-verified:** Develops conservation-based fluid models, dimensional reasoning and analysis of inviscid and viscous internal and external flows. Source: [BU_MECH_2025](https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/mechanicalengineeringmech/), 2025-2026, Courses  |  MECH 313.

**Standard engineering:** The principles, equations and representative problems below are technical explanations consistent with the subject. They are not verified as particular lectures or graded assignments. All illustrative values are explicitly assumed, except the stated reproduction of reported AUV hydrostatics.

**Personal coursework:** Supplied portfolio page3 explicitly names MECH 313, individual Phase1 AUV literature review, hull concept, hydrostatics and qualitative flow prediction; it labels work in progress through Fall2026. It reports1.10m length,0.20m max diameter,27.2L volume,267N buoyancy,49.1kPa gauge pressure at5m, and CB0.501m aft of nose. Arithmetic for pressure and buoyancy is reproducible; original shape integration is absent. No built vehicle, CFD, measured drag or completed team phase is established.

**Learning-objective status:** No separate course-specific public objective list was found in the reviewed catalog. Do not substitute department/program outcomes.

## B. Core principles

### P1. Hydrostatic pressure and buoyancy

**Technical explanation:** A stationary fluid supports pressure gradients balancing its weight. Integrating pressure over an immersed body gives buoyancy equal to the displaced-fluid weight.

**Physical significance:** Sets external pressure and neutral-buoyancy targets.

**Assumptions and limits:** Constant density and gravity for pg=rho gh; full immersion for Vdisp equal to sealed external volume. Stability also depends on force application locations.

**Engineering application:** AUV hydrostatics.

**Source:** STD-MECH313-01; full URL in [Sources](SOURCES.md).

### P2. Control-volume mass conservation

**Technical explanation:** Track accumulation within a boundary and the net mass flux crossing its outward-facing surface.

**Physical significance:** Constrains inlet/outlet rates independently of energy or force models.

**Assumptions and limits:** Velocity must be relative to the control surface for a moving boundary; the displayed form uses a fixed control volume.

**Engineering application:** Duct or pump inlet/outlet balance.

**Source:** STD-MECH313-02; full URL in [Sources](SOURCES.md).

### P3. Momentum balance

**Technical explanation:** External forces on the fluid equal momentum accumulation plus net outward transport. Pressure forces act on the control surface and require consistent normals.

**Physical significance:** Converts redirected or accelerated flow into an equipment reaction.

**Assumptions and limits:** Fixed inertial control volume shown; steady one-dimensional reductions use appropriate mean-flow assumptions.

**Engineering application:** Nozzle thrust and pipe-bend reactions.

**Source:** STD-MECH313-03; full URL in [Sources](SOURCES.md).

### P4. Mechanical energy and losses

**Technical explanation:** Pressure, kinetic and potential energy can exchange along a flow. Pumps add and friction removes usable mechanical energy.

**Physical significance:** Explains why a pressure difference need not be caused solely by a velocity change.

**Assumptions and limits:** Simple Bernoulli applies along a streamline to steady incompressible flow with negligible viscous effects and no shaft energy addition between points.

**Engineering application:** Contractions, piping and pump selection.

**Source:** STD-MECH313-04; full URL in [Sources](SOURCES.md).

### P5. Dimensionless similarity and drag

**Technical explanation:** Reynolds number compares inertia with viscosity. Drag coefficient depends on geometry, flow regime, roughness and the declared reference area.

**Physical significance:** Makes flow-condition matching central to model-to-full-scale comparisons.

**Assumptions and limits:** A guessed coefficient is not a validated prediction. Matching Reynolds number alone is insufficient when gravity, compressibility or free surfaces matter.

**Engineering application:** Underwater vehicle drag estimates.

**Source:** STD-MECH313-05; full URL in [Sources](SOURCES.md).

## C. Core equations

### E1. Constant-density hydrostatics and buoyancy

\[
p_g=\rho gh,\quad F_B=\rho gV_{\rm disp},\quad m_{\rm neutral}=\rho V_{\rm disp}
\]

**Variables and units:** pg [Pa]; rho [kg/m³]; g [m/s²]; h depth [m]; FB [N]; Vdisp [m³]; mneutral [kg].

**Assumptions:** Stationary liquid; constant rho and g; gauge pressure measured relative to free-surface pressure. Neutral buoyancy equates total mass weight to buoyancy, not a stability guarantee.

**When and why used / application:** Pressure and ballast estimate for an immersed sealed hull.

**Source:** STD-MECH313-01; equations are standard technical content.

### E2. Integral mass conservation

\[
\frac{d}{dt}\int_{CV}\rho\,dV+\int_{CS}\rho\mathbf u\cdot\mathbf n\,dA=0
\]

**Variables and units:** rho [kg/m³]; u [m/s]; outward unit normal n [1]; dV [m³]; dA [m²]; each term [kg/s].

**Assumptions:** Fixed control volume; for steady incompressible one-inlet/one-outlet flow this reduces to A1U1=A2U2.

**When and why used / application:** Relate average duct velocities to flow rate.

**Source:** STD-MECH313-02; equations are standard technical content.

### E3. Integral linear momentum conservation

\[
\sum\mathbf F_{\rm ext}=\frac{d}{dt}\int_{CV}\rho\mathbf u\,dV+\int_{CS}\rho\mathbf u(\mathbf u\cdot\mathbf n)\,dA
\]

**Variables and units:** External forces [N]; rho, u, n, dV, dA as E2; momentum-rate terms [kg·m/s²].

**Assumptions:** Fixed control volume in an inertial frame. Include pressure, weight and wall/support forces consistently; selected plug-flow examples neglect profile correction.

**When and why used / application:** Find nozzle force or fluid reaction in a bend.

**Source:** STD-MECH313-03; equations are standard technical content.

### E4. Ideal Bernoulli equation

\[
p+\tfrac12\rho U^2+\rho gz=\text{constant along a streamline}
\]

**Variables and units:** p [Pa]; rho [kg/m³]; U [m/s]; z [m]; each term [Pa]=[J/m³].

**Assumptions:** Steady, incompressible, negligibly viscous flow; no pump/turbine between points; common streamline unless irrotational extension justified.

**When and why used / application:** Estimate an ideal contraction pressure difference.

**Source:** STD-MECH313-04; equations are standard technical content.

### E5. Reynolds number and drag estimate

\[
\mathrm{Re}=\frac{\rho UL}{\mu},\qquad D=\tfrac12\rho U^2C_DA_{\rm ref}
\]

**Variables and units:** Re, CD [1]; rho [kg/m³]; U [m/s]; L [m]; mu [Pa·s]; D [N]; Aref [m²].

**Assumptions:** Declare L and Aref. CD must be appropriate to geometry and actual flow conditions; a coefficient from a different area convention cannot be copied without conversion.

**When and why used / application:** Define a preliminary external-drag model and its data needs.

**Source:** STD-MECH313-05; equations are standard technical content.

### E6. Darcy-Weisbach pipe-friction head loss

\[
h_f=f_D\frac{L_p}{D_p}\frac{U^2}{2g},\qquad\Delta p_f=\rho gh_f
\]

**Variables and units:** hf [m]; fD Darcy friction factor [1]; Lp, Dp [m]; U mean pipe speed [m/s]; g [m/s²]; deltapf [Pa].

**Assumptions:** Steady fully developed circular-pipe flow with a suitable friction-factor correlation; excludes separate minor losses. Darcy factor is four times Fanning factor.

**When and why used / application:** Estimate pump pressure needed to overcome straight-pipe friction.

**Source:** STD-MECH313-06; equations are standard technical content.

## D. Representative problems and methods

These are original educational examples. They are not claimed as Brewster's actual assignments. Where a supplied preliminary report is reproduced, its provenance and missing geometry checks are stated.

### D1. Pressure and neutral buoyancy

**Given:** Fresh water rho=1000 kg/m³,g=9.81 m/s²,depth5.0m; sealed displaced volume27.2L from supplied AUV preliminary report.

**Required:** Gauge pressure, buoyant force and total neutral mass; distinguish reproduced arithmetic from geometry validation.

**Principles:** Hydrostatics and Archimedes principle.

**Equations:** E1.

**Solution methodology:** Convert liters to m³. Calculate pressure at stated depth. Multiply displaced volume by density and g. Compare total installed mass with neutral target if an actual mass budget is supplied.

**Assumptions:** Ideal fully submerged sealed volume; constant freshwater density; original geometry integration not provided.

**Common mistakes:** Using liters directly as m³; adding atmospheric pressure when gauge pressure requested; treating neutral buoyancy as stable attitude.

**Worked result:** V=0.0272m³; pg=49050Pa=49.05kPa; FB=266.832N; mneutral=27.2kg. This reproduces the report arithmetic, not an independent volume/CB validation.

### D2. Level contraction in a water line

**Given:** Q=0.001m³/s, A1=0.001m²,A2=0.0005m²,rho=1000kg/m³; equal elevation.

**Required:** Average velocities and ideal pressure drop p1−p2.

**Principles:** Continuity and Bernoulli.

**Equations:** E2, E4.

**Solution methodology:** Use U=Q/A at each section. Subtract Bernoulli expressions at equal elevation. Add losses if measured/correlated values become available.

**Assumptions:** Steady, incompressible, ideal flow; uniform mean velocities; no pump between sections.

**Common mistakes:** Using diameter ratio as area ratio; adding a pressure gain where speed increases; treating ideal lossless prediction as measured drop.

**Worked result:** U1=1m/s, U2=2m/s; p1−p2=0.5(1000)(4−1)=1500Pa=1.50kPa.

### D3. Momentum thrust of a horizontal jet

**Given:** Water mdot=0.20kg/s; inlet speed2m/s, outlet speed8m/s in same direction; both boundary pressures ambient; weight has no axial component.

**Required:** Net axial force on fluid and equal opposite axial fluid reaction on device.

**Principles:** Steady linear momentum.

**Equations:** E3.

**Solution methodology:** Take positive along flow. Cancel ambient-pressure contributions consistently on complete chosen control surface. Calculate mdot(Uout−Uin); reverse sign for fluid-on-device reaction.

**Assumptions:** Uniform profiles, steady flow, no other axial fluid forces left unaccounted.

**Common mistakes:** Confusing fluid force with device reaction or dropping nonambient pressure forces in a different nozzle problem.

**Worked result:** Net external axial force on fluid=0.20(8−2)=1.20N; corresponding fluid reaction on device is1.20N opposite flow.

### D4. Straight-pipe friction demand

**Given:** Water rho=1000kg/m³; Dp=0.020m, Lp=2m, U=1m/s, g=9.81m/s²; assumed Darcy fD=0.030.

**Required:** Friction head and pressure loss.

**Principles:** Viscous mechanical-energy loss.

**Equations:** E6.

**Solution methodology:** Calculate L/D and velocity head. Multiply by assumed fD. Convert head to pressure; verify fD separately with Reynolds number and roughness if a predictive design is needed.

**Assumptions:** Given fD is illustrative, not inferred from measured flow; fully developed pipe segment; minor losses omitted.

**Common mistakes:** Using a Fanning factor in the Darcy formula; ignoring fittings when later estimating a complete system.

**Worked result:** hf=0.030(100)(1/19.62)=0.1529m; delta_pf=1500Pa.

## E. Personal project evidence

Supplied portfolio page3 explicitly names MECH 313, individual Phase1 AUV literature review, hull concept, hydrostatics and qualitative flow prediction; it labels work in progress through Fall2026. It reports1.10m length,0.20m max diameter,27.2L volume,267N buoyancy,49.1kPa gauge pressure at5m, and CB0.501m aft of nose. Arithmetic for pressure and buoyancy is reproducible; original shape integration is absent. No built vehicle, CFD, measured drag or completed team phase is established.

## F. Challenges and evidence limits

The tradeoff among compact geometry, equipment volume, efficiency and maneuverability is documented. No failed prototype, test inconsistency or completed fix is supported. The preliminary passive-stability concept is a proposal, not a verified stable vehicle.

## G-H. Skills and industrial applications

See the public page for the concise skill/application synthesis. Treat subject foundations as academic coverage, not proof of a demonstrated proficiency level. A proposed application or checking method is not an accomplishment.

## I. Visuals and recommended authentic artifact

**Included illustrative asset:** [Diagram or plot](assets/MECH_313_Illustrative_Pressure_Depth.png).

**Caption:** Original illustrative freshwater gauge-pressure profile with density 1000 kg/m³ and g=9.81 m/s², giving 49.05 kPa at 5 m. A hydrostatic model, not measured AUV test data.

**Best authentic addition:** Existing authentic AUV hull and qualitative flow figures are supplied. Best next addition is the original checked volume/center-of-buoyancy worksheet or newer team report; do not request files already packaged.

Do not request this addition until the consolidated final artifact review. Do not replace an absent assignment with a generated project photo.

## J. References and traceability

[Sources and claim map](SOURCES.md) identifies the academic description, standard principles/equations, and personal source records separately. Equations can be transferred as LaTeX using the blocks above; retain assumptions and variable definitions beside them.
