---
code: ECEG 205
title: Electrical and Computer Engineering Fundamentals
summary: Introduces electrical quantities and measurement, sensor behavior and signal filtering.
category: Computing & data
catalog: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/computerengineeringcpeg/
catalogYear: 2025-2026
order: 10
documented: false
connection: ''
relatedProjects: []
topics:
- electrical measurement
- physical quantities
- sensors
- sensor dynamics
- filters
equations:
- title: Local linear calibration
  latex: V=Sq+b,\qquad q=\frac{V-b}{S}
  note: '**Variables and units:** V output [V]; q measurand [its physical unit]; S sensitivity [V per measurand unit]; b offset [V].


    **Assumptions and limitations:** Nonzero sensitivity and a supported calibration interval; no extrapolation beyond evidence.


    **Engineering use:** Convert a measured sensor voltage to temperature, force or position.

    **Reference:** '
- title: Ohmic circuit relation
  latex: V=IR
  note: '**Variables and units:** V potential difference [V]; I current [A]; R resistance [ohm].


    **Assumptions and limitations:** Ohmic element at stated conditions; R may vary with temperature.


    **Engineering use:** Determine current and voltage drops in a sensor excitation circuit.

    **Reference:** '
- title: Resistive loading
  latex: V_m=V_s\frac{R_{in}}{R_s+R_{in}}
  note: '**Variables and units:** V_m measured voltage [V]; V_s unloaded source voltage [V]; R_s source resistance [ohm]; R_in instrument input resistance [ohm].


    **Assumptions and limitations:** Source can be modeled as ideal V_s in series with R_s; DC resistive circuit.


    **Engineering use:** Check whether a voltmeter changes the sensor signal materially.

    **Reference:** '
- title: First-order step response
  latex: q_m(t)=q_1+(q_0-q_1)e^{-t/\tau}
  note: '**Variables and units:** q_m indicated quantity [measurand unit]; q_0 initial equilibrium indication; q_1 final equilibrium indication; t time [s]; tau time constant [s].


    **Assumptions and limitations:** Stable linear first-order response, initial equilibrium, ideal step and fixed tau.


    **Engineering use:** Estimate settling time or transient measurement lag.

    **Reference:** '
- title: Ideal RC low-pass response
  latex: H(j\omega)=\frac{1}{1+j\omega RC},\quad f_c=\frac{1}{2\pi RC}
  note: '**Variables and units:** H output/input voltage ratio [dimensionless]; j imaginary unit; omega angular frequency [rad/s]; R [ohm]; C capacitance [F]; f_c [Hz].


    **Assumptions and limitations:** Ideal series R and shunt C; output across C; negligible source and load effects.


    **Engineering use:** Choose a cutoff and predict attenuation of a sinusoidal component.

    **Reference:** '
figures:
- src: /images/eceg-205-ECEG_205_illustrative_RC_response.png
  alt: Original theoretical RC low-pass magnitude response for R=1.00 kΩ, C=10.0 μF. Illustrative model; not a student measurement.
  caption: Original theoretical RC low-pass magnitude response for R=1.00 kΩ, C=10.0 μF. Illustrative model; not a student measurement.
sources:
- title: Bucknell 2025-2026 catalog - Electrical and Computer Engineering
  url: https://coursecatalog.bucknell.edu/archive/2025-2026/collegeofengineeringcurricula/areasofstudy/computerengineeringcpeg/
- title: 'NIST :  Calibration'
  url: https://www.nist.gov/publications/calibration
- title: 'OpenStax University Physics Vol. 2 :  Resistors in Series and Parallel'
  url: https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel
- title: 'OpenStax University Physics Vol. 2 :  RC Circuits'
  url: https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits
officialTitle: Electrical and Computer Engineering Fundamentals
enrollmentStatus: Course status requires confirmation
evidenceStatus: Catalog scope and illustrative technical examples
contentStatus: Private review draft
technicalReference: research/coursework/ECEG_205_Electrical_and_Computer_Engineering_Fundamentals/TECHNICAL_REFERENCE.md
---

**Official identity:** Electrical and Computer Engineering Fundamentals | Electrical and Computer Engineering | Catalog 2025-2026.

**Bucknell description, paraphrased:** Introduces electrical measurement, physical quantities, sensors, dynamic response and filters. [BU_ECEG_2025]

## Course overview

This subject connects electrical fundamentals with the task of measuring a mechanical system. A sensor does not directly deliver force, temperature, or position as a perfectly reliable number: it produces a signal that must be interpreted through its calibration, response time, and measurement circuit. That perspective is useful for robotics, product testing, and any mechanical design that depends on experimental feedback. The focus is the complete measurement chain, from the physical quantity to the recorded result. The key questions are what the instrument actually measures, how its electronics change the signal, and which limitations matter before using that result in a model or a design decision.

## Principles that matter

**A signal needs a calibration.** A voltage becomes a physical measurement only through a defined relationship and units. Sensitivity describes the output change per input change; offset describes the output at the chosen zero. A linear fit is useful over a supported range, while nonlinearity and drift can limit the conversion. Calibration is different from simply making the display read zero.

**The instrument can change the circuit.** Voltage measurement assumes that the measuring device draws little current compared with the source circuit. A finite input resistance loads the signal and changes the voltage being measured. Sensor and instrument impedances therefore belong in the model. This is especially relevant when a resistive sensor feeds another electronic device.

**Response time changes the result.** A first-order sensor cannot follow an instantaneous physical change immediately. Its time constant describes the lag in a simplified dynamic model. The same behavior can attenuate a rapidly varying measurement. A sensor that works for a slowly changing condition may be inadequate for a faster test.

**Filtering trades bandwidth for noise reduction.** A low-pass filter suppresses high-frequency content, including unwanted interference and potentially useful signal. The cutoff should follow the measurement purpose and expected dynamics. Smooth-looking data alone do not show that an engineering quantity has been measured accurately.

## Core relationships

A simple linear calibration is

$$
V=Sq+b
$$

where $V$ is voltage, $q$ is the physical quantity, $S$ is sensitivity, and $b$ is offset. For an ideal unloaded RC low-pass network, the time constant is $RC$ and the cutoff is $1/(2\pi RC)$. The technical reference also covers loading and first-order step response, with units and explicit assumptions.

## Representative measurement problem

Take an illustrative RC filter with a 1.00 kΩ resistor and a 10.0 μF capacitor. Its time constant is 0.0100 s and its cutoff is approximately 15.9 Hz. A one-hertz signal passes with little amplitude change, while a 100-hertz component is strongly attenuated. The supplied frequency-response diagram plots this ideal model. These values are a teaching example, not actual robot or drone component measurements. A real circuit would also require checking tolerance, loading, sensor dynamics, and the required signal bandwidth.

## Applications and technical focus

In robotics, these principles help interpret distance, light, or position sensing before a control decision is made. In automotive testing, the response of a measurement chain matters when recording vibration or temperature changes. In mechanical product development, calibration and uncertainty help distinguish a design change from an apparent change caused by instrumentation.

The technical focus is unit conversion through calibration, electrical measurement, resistive-network interpretation, first-order sensor modeling, bandwidth selection, and documentation of measurement limits. These are subject-level competencies. No specific laboratory circuit, programming language, or line-following robot is attributed to this course without an assignment record.

## Reasoning and evidence

A useful analysis starts by defining the measurand, writing the signal path, and checking the static and dynamic limits separately. If a recorded value differs from a prediction, possible causes include model assumptions, calibration, loading, lag, and the physical system itself. A controlled check changes one cause at a time. This is a representative troubleshooting method; no personal failure or successful repair is claimed. An authentic calibration sheet, oscilloscope trace, or sensor test record would make this course more concrete once the course connection is verified.

## Further technical detail and visuals

Technical reference contains the complete equation definitions, assumptions, and representative solution methods. References identify official course information and standard technical sources.
