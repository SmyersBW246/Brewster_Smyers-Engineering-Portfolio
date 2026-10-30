# MECH 355: Technical reference

## A. Verified scope

Official course: Manufacturing Processes, Mechanical Engineering, Bucknell 2025-2026 catalog. Public coverage includes deformation, solidification, removal, plastics forming, additive methods, fabrication laboratories, numerical control and CAD/CAM. No separate public course-level learning-objective list was located. Everything below is standard technical explanation or a labeled illustrative problem. Personal process activities are supported only to the extent listed in EVIDENCE_NOTES.md.

## B. Core principles

### P1. Process selection follows the requirements

Part geometry, material, quantity and dimensional requirements constrain feasible routes. A cheaper-looking operation can require costly tooling or finishing. Compare complete routes, not isolated machine cycle times. The principle applies when choosing a one-off machined prototype versus a molded production part. A simple cost model omits capacity, risk and quality unless they are explicitly included. E6 and D4 are original accounting examples; no actual shop quotation is implied.

### P2. Solidification is a heat-transfer problem

Material must release sensible and latent heat before a casting is solid. Geometry influences cooling through volume relative to cooling area. Chvorinov-type scaling helps compare similar castings under comparable mold/material conditions. It does not alone predict porosity, fill success or local hot spots, and a constant fitted for one mold/metal combination is not universal. Application: recognize a thick region that may cool later than a thin region. [STD-MECH355-01,02]

### P3. Forming conserves material approximately while changing shape

Plastic deformation can redistribute volume while changing thickness and area. True strain tracks relative dimension change, making successive changes additive along a consistent deformation path. Approximate constant volume requires negligible material loss and density change; friction, anisotropy and nonuniform deformation complicate loads and final shape. Application: interpret a ring-forming or compression operation without assuming that external appearance establishes strain uniformity. [STD-MECH355-03]

### P4. Cutting couples kinematics and loading

The spindle sets cutting-edge speed; tooth count and feed per tooth set table feed; engagement controls removed volume. Tool force, power, wear, chip evacuation and workholding remain necessary checks. The simple removal-rate relation assumes a steady rectangular engagement volume. It is not a complete toolpath simulation. Application: estimate the ideal cutting-only time of a cavity before including approach, retract, changes and finishing. [STD-MECH355-04]

### P5. Joining quality depends on the interface and process

Welds involve local thermal/material changes; adhesive or composite bonds depend on interface preparation and process control. Similar-looking joints may have different strength or defects. This principle motivates inspection and testing rather than assumptions from appearance. Application: identify the joint, substrate, process record and load case needed before claiming a structural bond. The reviewed personal material does not specify welding process, bronze alloy, resin system or cure history. [STD-MECH355-05]

### P6. Mold loading and repeatability matter beyond nominal shape

Projected cavity pressure produces a mold-opening load. Machine clamping must meet a justified process requirement, while flow, packing, cooling and ejection affect the finished part. Projected area includes relevant cavity/runner contributions; actual pressure distribution may be nonuniform. Application: a first-pass mold-force calculation followed by qualified machine/tooling review. No university machine capacity is established here. [STD-MECH355-06]

## C. Core equations

### E1. Milling peripheral cutting speed

$$N=\frac{1000v_c}{\pi D}.$$

N is rev/min, vc is m/min and D is mm; 1000 converts m to mm. The circumference is pi D. Use for a basic speed conversion with the actual effective diameter. A radius, inch diameter or surface speed in another unit needs a different conversion. Tool and material guidance still sets suitable vc. [STD-MECH355-04]

### E2. Table feed and removal rate

$$v_f=f_z zN,\qquad Q=a_e a_p v_f.$$

fz is mm/tooth, z is tooth count (dimensionless), vf is mm/min, ae and ap are width/depth in mm, Q is mm³/min. Use for a steady-engagement estimate. It omits entry/exit transients and varies with actual radial engagement and path. A cutting-only duration is removed volume divided by Q. These quantities are not measured lab data. [STD-MECH355-04]

### E3. Casting solidification scaling

$$t_s=C_m\left(\frac{V}{A}\right)^2.$$

ts is time; V is volume; A is effective mold-contact cooling area. If dimensions use mm and time min, Cm has units min/mm². The exponent two is a common heat-transfer-limited casting approximation, not a universal law for all molds. Compare similar mold/metal conditions or use an experimentally supported constant. Application: relative cooling-time estimates. [STD-MECH355-01,02]

### E4. Magnitude of uniform compressive true strain

$$\epsilon_{c}=\ln\left(\frac{h_0}{h_f}\right).$$

h0,hf are positive initial/final thicknesses in the same unit; epsilon_c is a dimensionless positive compression magnitude. Signed axial logarithmic strain is instead ln(hf/h0), negative in compression. Uniform deformation is an idealization; this expression does not determine forging force. Application: compare reduction magnitudes consistently. [STD-MECH355-03]

### E5. First-pass mold opening force

$$F=p_c A_{proj}.$$

F is N when representative cavity pressure pc is Pa and projected area Aproj m². Uniform pc is assumed; otherwise integrate local pressure over projected area. A production machine requirement includes process uncertainty and tooling/machine practice. This first estimate is not a rated clamp-force recommendation. [STD-MECH355-06]

### E6. Simplified unit-cost comparison

$$C_u(n)=\frac{C_{tool}}{n}+C_{var}.$$

Cu is currency/part, Ctool total one-time tool cost, n positive accepted-part quantity, Cvar variable cost per accepted part. Assumes fixed unit cost and all tool cost allocated to this batch. Scrap, capital, maintenance, lead time and financing must be added when material. Application: determine where a tool-intensive route could become economical. This is original basic cost allocation, not a supplied lab result or quoted vendor model.

## D. Representative engineering problems

### D1. Estimate a hypothetical milling operation

**Given:** vc=80 m/min,D=6mm,z=2,fz=0.03mm/tooth,ae=3mm,ap=1mm; target removal10,000mm³. **Required:** nominal spindle speed, feed, MRR and ideal cutting time. **Principles/equations:** P4;E1-E2. **Method:** N=80,000/(pi*6)=4244.13rev/min;vf=0.03*2*N=254.648mm/min;Q=3*1*vf=763.944mm³/min;time=10000/Q=13.09min. **Assumptions:** constant full specified engagement, continuous removal, no speed limitation, roughing/finishing distinctions or noncutting motion. Values are chosen for arithmetic only, not a safe machining recipe. **Common mistakes:** confusing feed per tooth and feed per revolution, using D in metres with the1000factor, or reporting this as full production time.

### D2. Compare two idealized castings

**Given:** cubes with edges20mm and40mm,all six faces cooling; assume same mold conditions,Cm=0.20min/mm². **Required:** relative and absolute model times. **Principles/equations:** P2;E3. **Method:** cube V/A=L/6. Small:3.333mm,ts=2.222min. Large:6.667mm,ts=8.889min. Doubling linear size doubles V/A and quadruples time in this model. **Assumptions:** uniform mold condition, geometric similarity, no cores/chills/feeding complications; Cm invented for the example. **Common mistakes:** doubling time only, confusing total volume with modulus, or treating square-law estimates as proof of defect-free casting. These are not the bronze-object geometry or actual cooling times.

### D3. Relate compression to material flow

**Given:** ideal uniform specimen thickness changes1.50mm to1.00mm without loss/density change. **Required:** compressive logarithmic-strain magnitude and area ratio. **Principles:** P3 and approximate volume conservation;E4. **Method:**epsilon_c=ln(1.5)=0.4055. Since A0h0=Afhf,Af/A0=1.5. **Assumptions:** uniform flat deformation, negligible elastic recovery and loss. **Common mistakes:** calling33.3percent thickness reduction the logarithmic strain, reversing the sign without defining compression, or applying this uniform model to every region of an actual formed ring. No quarter alloy or actual forming strain is inferred.

### D4. Compare a mold-force estimate and production cost

**Given:** hypothetical pc=30MPa,Aproj=1200mm²;tool cost600currency units,variable molded cost2/part,alternative machining12/part. **Required:** ideal opening load and cost crossover. **Principles/equations:**P1/P6;E5/E6. **Method:**A=0.0012m²;F=30e6*0.0012=36,000N=36kN. Equate600/n+2=12 to get n=60parts. At100parts modeled unit cost8 versus12. **Assumptions:** uniform pressure;all relevant projected area included;no additional clamp margin assigned;identical acceptable quality;costs hypothetical;no scrap or capacity effects. **Common mistakes:** using injection-machine hydraulic pressure as cavity pressure without evidence, mixing mm² with m², or selecting a machine solely from this simplified load. Actual tooling review remains separate from arithmetic.

## E-F. Personal experience and challenges

User-confirmed activities include bronze using wax/clay/plaster, quarter ring forming, carbon-fiber pressing/bonding,welding,CNC/injection-tooling and two facility visits. No measured process outcomes or specific personal defect correction were supplied. For a truthful reflection, ask what actually went wrong, what changed,and what inspection or observation demonstrated the result. Possible porosity,chatter,bond voids or weld defects are discussion prompts only; none is attributed to Brewster.

## G-H. Skills and applications

Supported exposure includes comparing process families and participating in the named physical activities. Standard technical competencies are speed/feed unit checking,cooling scaling,strain interpretation,tool-load estimates and cost tradeoffs. Relevant applications include aircraft manufacturing,automotive castings/forgings,and consumer-product molds. The carbon-drone/mount documents are preliminary related design work; course attribution and physical completion remain unconfirmed.

## I. Visual guidance

Included assets/MECH_355_Illustrative_Casting_Size.svg uses D2's assumed Cm and cube geometry. It is not a student experiment. Prefer actual bronze and ring photographs,pattern-to-part sequence,and one CNC/tooling photograph or drawing. Caption exactly what each image establishes. The forging facility identity/hammer specification remains a question,not a factual diagram label.

## J. References

See [SOURCES.md](SOURCES.md). Primary MIT instructional references support the process principles; original numerical choices are clearly labeled above. No source figures were copied.
