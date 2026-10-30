# ECEG 205: detailed technical reference

## Evidence boundary

Official Bucknell coverage: electrical measurement, physical quantities, sensors, sensor dynamics, filters. [BU_ECEG_2025]

The following equations, examples and methods are standard technical content, selected to explain the subject. No representative problem is asserted to be an actual Bucknell assignment. All numerical inputs are original illustrative assumptions. Specific public course-level learning objectives were not located; catalog subject coverage is not an outcomes list.

## B. Core principles

### P1. Measurand and calibration

Define the physical quantity and its reference conditions before converting an electrical output. A local linear calibration separates sensitivity and offset. It provides interpretable units but is limited by range, nonlinearity, drift and the reference standard. Use it to convert a load-cell amplifier voltage to force. [STD-ECEG205-01]

### P2. Circuit loading

A sensor and instrument form one circuit. Finite instrument input resistance draws current and can change the output being measured. A simple Thevenin resistance model makes the effect quantifiable. The model is static and resistive unless frequency-dependent impedance is included. Use it when a sensor output feeds a voltmeter or analog input. [STD-ECEG205-02]

### P3. First-order sensor dynamics

A single time constant predicts a gradual exponential response to a step. Its physical significance is the time required to reach about 63.2% of the change. A single-pole model may fail for higher-order, resonant or nonlinear sensors. Use it to evaluate whether a temperature sensor can resolve a transient. [STD-ECEG205-03]

### P4. Frequency-selective filtering

An RC low-pass network retains slow variation while attenuating faster components, with accompanying phase lag. Its cutoff is not a sharp boundary. The simple transfer function assumes ideal components and an unloaded output. Use it to plan a measurement bandwidth before a test. [STD-ECEG205-04]

### P5. Measurement uncertainty

A reported result needs a defensible uncertainty estimate, considering repeated observations and other information such as calibration and instrument specifications. Type A and Type B describe evaluation methods, not a simple random/systematic split. Use an uncertainty budget before deciding that two tests differ meaningfully. [STD-ECEG205-05]

## C. Core equations

### E1. Local linear calibration

\[
V=Sq+b,\qquad q=\frac{V-b}{S}
\]

**Variables and units:** V output [V]; q measurand [its physical unit]; S sensitivity [V per measurand unit]; b offset [V].

**Assumptions and limitations:** Nonzero sensitivity and a supported calibration interval; no extrapolation beyond evidence.

**Engineering use:** Convert a measured sensor voltage to temperature, force or position.
**Reference:** [STD-ECEG205-01]

### E2. Ohmic circuit relation

\[
V=IR
\]

**Variables and units:** V potential difference [V]; I current [A]; R resistance [ohm].

**Assumptions and limitations:** Ohmic element at stated conditions; R may vary with temperature.

**Engineering use:** Determine current and voltage drops in a sensor excitation circuit.
**Reference:** [STD-ECEG205-02]

### E3. Resistive loading

\[
V_m=V_s\frac{R_{in}}{R_s+R_{in}}
\]

**Variables and units:** V_m measured voltage [V]; V_s unloaded source voltage [V]; R_s source resistance [ohm]; R_in instrument input resistance [ohm].

**Assumptions and limitations:** Source can be modeled as ideal V_s in series with R_s; DC resistive circuit.

**Engineering use:** Check whether a voltmeter changes the sensor signal materially.
**Reference:** [STD-ECEG205-02]

### E4. First-order step response

\[
q_m(t)=q_1+(q_0-q_1)e^{-t/\tau}
\]

**Variables and units:** q_m indicated quantity [measurand unit]; q_0 initial equilibrium indication; q_1 final equilibrium indication; t time [s]; tau time constant [s].

**Assumptions and limitations:** Stable linear first-order response, initial equilibrium, ideal step and fixed tau.

**Engineering use:** Estimate settling time or transient measurement lag.
**Reference:** [STD-ECEG205-03]

### E5. Ideal RC low-pass response

\[
H(j\omega)=\frac{1}{1+j\omega RC},\quad f_c=\frac{1}{2\pi RC}
\]

**Variables and units:** H output/input voltage ratio [dimensionless]; j imaginary unit; omega angular frequency [rad/s]; R [ohm]; C capacitance [F]; f_c [Hz].

**Assumptions and limitations:** Ideal series R and shunt C; output across C; negligible source and load effects.

**Engineering use:** Choose a cutoff and predict attenuation of a sinusoidal component.
**Reference:** [STD-ECEG205-04]

## D. Representative problems

### D1. Choose an RC bandwidth (illustrative, not personal coursework)

**Given:** R=1.00 kΩ, C=10.0 μF; useful signal near 1 Hz and unwanted component at 100 Hz.

**Required:** Time constant, cutoff and ideal magnitude at both frequencies.

**Relevant physical or mathematical principles:** First-order low-pass filtering.

**Governing equations:** E5 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Convert capacitance to farads; calculate RC=0.0100 s and f_c=15.915 Hz. Evaluate |H|=1/sqrt(1+(f/f_c)^2) at each frequency. Compare attenuation to the measurement requirement.

**Assumptions:** Ideal unloaded RC filter, steady sinusoidal components, exact nominal values; no claim of anti-aliasing adequacy.

**Common mistakes:** Mixing hertz with radians/second, using the resistor voltage as a low-pass output, or treating f_c as zero transmission.

**Worked result or expected output:** At 1 Hz |H|=0.9980 (-0.017 dB). At 100 Hz |H|=0.1572 (-16.07 dB).

### D2. Quantify measurement loading (illustrative, not personal coursework)

**Given:** An illustrative 5.00 V Thevenin source has R_s=10.0 kΩ. The instrument has R_in=100 kΩ.

**Required:** Measured voltage and loading error relative to the unloaded source.

**Relevant physical or mathematical principles:** Voltage divider and instrument impedance.

**Governing equations:** E2-E3 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Draw R_s and R_in in series; calculate 5*(100/110)=4.545 V. Compute the signed relative difference (4.545-5)/5=-9.09%. Consider a larger input resistance or buffer if needed.

**Assumptions:** DC resistive equivalent; no other loading paths or source nonlinearity.

**Common mistakes:** Calling the unloaded 5 V the measured value; omitting units; treating a calibration offset as a cure for all loading conditions.

**Worked result or expected output:** Measured 4.545 V; loading error -9.09%.

### D3. Interpret sensor settling (illustrative, not personal coursework)

**Given:** A first-order sensor changes from 20 to 80 °C with tau=2.00 s after an ideal input step.

**Required:** Indication after 2 s and time to 95% of the change.

**Relevant physical or mathematical principles:** Exponential step response.

**Governing equations:** E4 in Section C. The solution below identifies the substituted expression.

**Solution methodology:** Use q_m=80-60 exp(-t/2); at t=2, q_m=57.93 °C. Set exp(-t/tau)=0.05 and solve t=-tau ln(0.05). Compare to the test duration.

**Assumptions:** Single time constant and unchanged operating conditions; degree Celsius differences are appropriate here.

**Common mistakes:** Using 95% of the final absolute reading instead of 95% of the change; assuming the sensor has reached equilibrium at one tau.

**Worked result or expected output:** At 2 s the indication is 57.93 °C; 95% settling requires 5.991 s.

## E-F. Personal projects and challenges

Only course-code listing is supported by the degree-audit crop image.png. Course completion, actual assignment content and a personal challenge/resolution are unverified. The subject-level methods above must not become autobiographical claims. See [evidence notes](EVIDENCE_NOTES.md).

## G-H. Technical skills and applications

The public page identifies the subject-level skills and industrial applications. They are technical competencies to illustrate with real evidence, not a certification that every listed method was used in a personal assignment.

## I. Available and suggested visuals

Included: [illustrative technical plot](assets/ECEG_205_illustrative_RC_response.svg). Caption: Original theoretical RC low-pass magnitude response for R=1.00 kΩ, C=10.0 μF. Illustrative model; not a student measurement.

Recommended authentic artifact: An actual sensor-calibration graph, circuit diagram, and one measured trace from ECEG 205. A line-following robot may be linked only after Brewster confirms the course; no robot assignment is established now.

## J. References

See [SOURCES.md](SOURCES.md) for claim-to-source mappings and URLs.