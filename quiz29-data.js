const quizData = [
    {
        question: "What should the resistance be between the two heater wires of a lambda sensor?",
        options: [
            "Between 50 and 100 ohms",
            "Between 1 and 20 ohms depending on type of lambda sensor",
            "Between 100 and 200 ohms",
            "Less than 1 ohm"
        ],
        correct: 1,
        explanation: "The resistance should be between 1 and 20 ohms depending on type of lambda sensor."
    },
    {
        question: "What indicates a normal failure condition in a lambda sensor heater circuit?",
        options: [
            "Low resistance reading",
            "A burnt-out heater leading to a very high or open-circuit reading",
            "Fluctuating resistance",
            "Negative resistance"
        ],
        correct: 1,
        explanation: "Normal failure condition is a burnt-out heater leading to a very high or open-circuit reading."
    },
    {
        question: "At what engine speed should you raise and hold the revs when testing a lambda sensor with an oscilloscope?",
        options: [
            "Around 1000 rpm",
            "Around 3000 rpm",
            "Around 2000 rpm",
            "Around 4000 rpm"
        ],
        correct: 2,
        explanation: "Raise and hold the engine revs to around 2000 rpm and, if the lambda sensor is working correctly, a rising and falling waveform should be seen."
    },
    {
        question: "What do specialist lambda sensor testers consist of?",
        options: [
            "A single LED indicator",
            "A row of eight or ten LEDs which light up progressively according to the sensor voltage output",
            "A digital display screen",
            "An analog meter"
        ],
        correct: 1,
        explanation: "Specialist lambda sensor testers consist of a row of eight or ten LEDs which, when connected to an operating sensor, will light up progressively according to the sensor voltage output."
    },
    {
        question: "How do wideband oxygen sensors differ from standard lambda sensors?",
        options: [
            "They use mechanical components",
            "Two chambers are created: one containing exhaust gas and the other open to air for reference, with an oxygen pump maintaining stable oxygen quantity",
            "They only measure temperature",
            "They have no heating element"
        ],
        correct: 1,
        explanation: "Wideband oxygen sensors do not rely solely on resistance change in zirconia ceramic. Instead, two chambers are created: one containing exhaust gas and the other open to air for reference. An oxygen pump is embedded in the wideband sensor to maintain stable oxygen quantity in one chamber."
    },
    {
        question: "What does GDI stand for?",
        options: [
            "General Diesel Injection",
            "Gasoline Direct Injection",
            "Gas Distribution Interface",
            "Guided Delivery Input"
        ],
        correct: 1,
        explanation: "GDI stands for Gasoline Direct Injection."
    },
    {
        question: "Where are fuel injectors located in a GDI system?",
        options: [
            "In the intake manifold",
            "In the fuel tank",
            "In the cylinder head, with injector tips inside the combustion chamber",
            "In the throttle body"
        ],
        correct: 2,
        explanation: "In GDI systems, fuel is delivered to a common fuel rail from an engine-driven high pressure pump. Instead of being mounted in the intake manifold, the solenoid type fuel injectors are located in the cylinder head, with the injector tips inside the combustion chamber."
    },
    {
        question: "What is the advantage of GDI homogeneous mode?",
        options: [
            "Maximum fuel economy",
            "The air and fuel are evenly mixed in the cylinder to provide smooth delivery of power with an air fuel ratio of 14.7:1 by mass",
            "Lowest emissions",
            "Highest power output"
        ],
        correct: 1,
        explanation: "In homogeneous mode, the air and fuel are evenly mixed in the cylinder to provide a smooth even delivery of power when required with an air fuel ratio of 14.7:1 by mass."
    },
    {
        question: "What is the purpose of GDI stratified mode?",
        options: [
            "Maximum power delivery",
            "To provide a very lean mixture of around 40:1 by mass for driving situations where performance is not required and economy and emissions are desirable",
            "For cold starting only",
            "For high speed operation"
        ],
        correct: 1,
        explanation: "In stratified mode, small quantities of petrol are injected in a concentrated layer around the area of the spark plug. This will provide a very lean mixture of around 40:1 by mass for driving situations where performance is not required and economy and emissions are desirable."
    },
    {
        question: "What are actuators in an engine management system?",
        options: [
            "Input sensors only",
            "Controlling components known as actuators that receive output signals from the ECU",
            "Diagnostic tools",
            "Fuel filters"
        ],
        correct: 1,
        explanation: "Once sensor information has been processed by the engine management system, signals will be sent out to operate controlling components known as actuators."
    },
    {
        question: "What type of valve is an electronic fuel injector?",
        options: [
            "A hydraulic valve",
            "A solenoid operated valve",
            "A mechanical spring valve",
            "A pneumatic valve"
        ],
        correct: 1,
        explanation: "An electronic fuel injector is a solenoid operated valve. Depending on design, fuel may enter at the top of the injector or around the body, normally through a small mesh gauze filter."
    },
    {
        question: "What happens when a fuel injector is atomised?",
        options: [
            "It increases fuel pressure",
            "Fuel from the rail is broken up into very small particles or a fine spray into the inlet manifold",
            "It closes completely",
            "It reduces fuel flow"
        ],
        correct: 1,
        explanation: "When the solenoid coil is energised, it draws an armature needle from its seat, allowing the high pressure fuel from the rail to be atomised (broken up into very small particles or a fine spray) into the inlet manifold."
    },
    {
        question: "What are noid lights used for?",
        options: [
            "Checking fuel pressure",
            "Testing a wide range of fuel injectors by connecting to the wiring harness and flashing if an operating signal is being correctly produced",
            "Measuring air flow",
            "Testing spark plugs"
        ],
        correct: 1,
        explanation: "Noid lights are small light emitting diode (LED) testers. They are normally specific to manufacturers and can be purchased in sets to enable testing of a wide range of fuel injectors. When connected to the wiring harness at the fuel injectors, with the engine cranking or running, they will flash if an operating signal is being correctly produced."
    },
    {
        question: "When testing fuel injector resistance with a multimeter, what should you do before connecting the probes?",
        options: [
            "Start the engine",
            "Switch off the fuel injector and disconnect the wiring harness, then calibrate the ohmmeter",
            "Increase fuel pressure",
            "Remove the fuel rail"
        ],
        correct: 1,
        explanation: "Switch off the fuel injector and disconnect the wiring harness. Connect the multimeter probes to the appropriate sockets and select a low ohms scale setting. Calibrate the ohmmeter by holding the two wires together; a reading of 0 ohms resistance should be recorded."
    },
    {
        question: "What is the pulse width in fuel injector operation?",
        options: [
            "The frequency of injection",
            "The period when the injector is switched on",
            "The fuel pressure",
            "The injector temperature"
        ],
        correct: 1,
        explanation: "Pulse width is the period when the injector is switched on."
    },
    {
        question: "What happens to the waveform when the injector is switched on by the ECU?",
        options: [
            "It rises to maximum voltage",
            "The wave form should drop to zero and be held open for a period; this is called the pulse width",
            "It remains constant",
            "It fluctuates randomly"
        ],
        correct: 1,
        explanation: "When the injector is switched on by the ECU (earthed), the wave form should drop to zero and be held open for a period; this is called the pulse width."
    },
    {
        question: "What causes the high voltage spike (back EMF) when the injector is switched off?",
        options: [
            "Fuel pressure increase",
            "When the earth circuit is broken, the magnetic field created in the solenoid coil collapses, inducing a high voltage back electromotive force (EMF)",
            "Battery discharge",
            "ECU malfunction"
        ],
        correct: 1,
        explanation: "When the injector is switched off (the earth circuit is broken), the magnetic field created in the solenoid coil will collapse. This induces a high voltage back electromotive force (EMF), which will produce a large voltage spike, somewhere in the region of 50V."
    },
    {
        question: "What should the amperage curve look like when testing fuel injector amperage?",
        options: [
            "A flat horizontal line",
            "A rising curve as amperage builds up within the solenoid coil, relatively smooth and not too sharp",
            "A series of spikes",
            "A falling curve only"
        ],
        correct: 1,
        explanation: "With the engine running, a wave form will be produced showing a rising curve as amperage builds up within the solenoid coil of the fuel injector. This curve should be relatively smooth and not too sharp, and when switched off should drop rapidly back to zero."
    },
    {
        question: "If the amperage rises too quickly in a fuel injector, what does this indicate?",
        options: [
            "Normal operation",
            "Resistance in the solenoid coil is too low",
            "The injector is working perfectly",
            "Fuel pressure is too high"
        ],
        correct: 1,
        explanation: "If the amperage rises too quickly, resistance in the solenoid coil is too low."
    },
    {
        question: "What problem exists in standard petrol fuel injection systems that returnless systems address?",
        options: [
            "Low fuel pressure",
            "Heat created by the running engine is transferred to the fuel rail by conduction, causing evaporation and inaccurate injection",
            "Injector clogging",
            "Air leaks"
        ],
        correct: 1,
        explanation: "In a standard petrol fuel injection system, heat created by the running engine is transferred to the fuel rail by conduction. This heat creates pollution as petrol returns to the tank. Both of these conditions lead to inaccurate injection and unacceptable emissions."
    },
    {
        question: "How do returnless fuel injection systems work?",
        options: [
            "With higher fuel pressure",
            "The pressure regulator and filter have been moved inside the fuel tank and a pressure sensor is mounted on the fuel rail",
            "By using mechanical pumps",
            "With larger fuel injectors"
        ],
        correct: 1,
        explanation: "Manufacturers are now producing returnless fuel injection systems. In this type of fuel injection system, the pressure regulator and filter have been moved inside the fuel tank and a pressure sensor is mounted on the fuel rail instead."
    },
    {
        question: "What advantages does Electronic Diesel Control (EDC) have over purely mechanical systems?",
        options: [
            "Lower cost only",
            "Better control over the amount of fuel injected, stable idle speed control, easy addition of cruise control, electronic data gathering, and EGR control",
            "Simpler maintenance",
            "Longer service intervals"
        ],
        correct: 1,
        explanation: "EDC has a number of advantages over a purely mechanical system: better control over the amount of fuel injected, stable idle speed control, the easy addition of cruise control, electronic data gathering, and EGR control."
    },
    {
        question: "In common rail direct injection diesel systems, what pressure is the fuel stored at?",
        options: [
            "Around 200 bar",
            "Around 1800 bar",
            "Around 500 bar",
            "Around 100 bar"
        ],
        correct: 1,
        explanation: "An engine-driven high pressure pump is then used to raise the pressure of the fuel to around 1800 bar, at which point it is stored in a pressure accumulator or fuel rail that feeds all fuel injectors."
    },
    {
        question: "How do electronic solenoid or piezoelectric fuel injectors atomise diesel?",
        options: [
            "Through mechanical pressure only",
            "They atomise diesel directly into the superheated compressed air of the combustion chamber",
            "Using gravity feed",
            "With hydraulic pressure"
        ],
        correct: 1,
        explanation: "The ECU is used to control electronic solenoid or piezoelectric fuel injectors, which atomise diesel directly into the superheated compressed air of the combustion chamber."
    },
    {
        question: "What safety precaution must be taken when working on common rail diesel systems?",
        options: [
            "Wear sunglasses",
            "Due to extremely high pressures, precautions need to be taken when working on these components. The fuel system must be correctly depressurised before work is started",
            "Work only in daylight",
            "Use only hand tools"
        ],
        correct: 1,
        explanation: "Due to the extremely high pressures involved in common rail diesel injections systems, precautions need to be taken when working on these components. If the fuel system is not correctly depressurised before work is started, diesel can be released at high pressure causing severe injury or death. Always follow the manufacturer's instructions and recommendations."
    }
];
