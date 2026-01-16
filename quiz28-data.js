const quizData = [
    {
        question: "What is a hot wire mass airflow (MAF) sensor used for?",
        options: [
            "Measuring fuel pressure",
            "Measuring the amount of air entering an engine very accurately",
            "Measuring engine temperature",
            "Measuring throttle position"
        ],
        correct: 1,
        explanation: "A hot wire mass airflow sensor is a very accurate way of measuring the amount of air entering an engine."
    },
    {
        question: "Where is the mass airflow sensor normally mounted?",
        options: [
            "In the exhaust system",
            "On the engine block",
            "Before the throttle butterfly",
            "After the catalytic converter"
        ],
        correct: 2,
        explanation: "Normally mounted before the throttle butterfly, the mass airflow sensor contains wires or heating elements, sometimes called hot film."
    },
    {
        question: "How does a hot wire MAF sensor maintain constant temperature?",
        options: [
            "Using a cooling fan",
            "When intake air passes over the wires/elements they are cooled, so the ECU must supply more electric current to maintain constant heat",
            "By reducing airflow",
            "Using a thermostat"
        ],
        correct: 1,
        explanation: "When supplied with an electric current, the wires/elements will get hot. As the intake air passes over these wires or elements, they are cooled. To maintain a constant heat, the ECU must supply more electric current. As a result, the amount of current required to keep the wires at a constant temperature is proportional to the mass of air entering the engine."
    },
    {
        question: "How many wires should a MAF sensor have for testing with an oscilloscope?",
        options: [
            "Two wires",
            "Four wires",
            "Three wires",
            "Five wires"
        ],
        correct: 2,
        explanation: "As with flap type airflow sensors and MAP sensors, an MAF should have three wires for testing."
    },
    {
        question: "What does the signal wire from a hot wire MAF sensor produce on an oscilloscope?",
        options: [
            "A flat line at 0V",
            "A flat line at 12V",
            "A trace on the screen that rises and falls with airflow",
            "A constant 5V signal"
        ],
        correct: 2,
        explanation: "The signal wire will produce a trace on the screen that rises and falls with airflow."
    },
    {
        question: "What do barometric pressure sensors measure?",
        options: [
            "Only engine oil pressure",
            "Air pressure due to weather conditions and altitude, allowing the ECU to calculate the density of oxygen in the air",
            "Fuel pressure",
            "Hydraulic pressure"
        ],
        correct: 1,
        explanation: "Some engine management systems make allowances for air pressure due to weather conditions and altitude. In this way, the density of the oxygen in the air can be calculated. A small pressure transducer can be mounted in the air intake system."
    },
    {
        question: "Where is a barometric pressure sensor normally mounted?",
        options: [
            "In the fuel tank",
            "On the exhaust manifold",
            "In the air intake system, normally before the throttle butterfly",
            "Inside the ECU only"
        ],
        correct: 2,
        explanation: "A small pressure transducer can be mounted in the air intake system, normally before the throttle butterfly, and works in a similar way to a manifold absolute pressure sensor."
    },
    {
        question: "What did early electronic fuel injection systems use throttle position switches for?",
        options: [
            "To control fuel pump speed",
            "To help provide the ECU with information, normally having three connections: feed in, feed out at idle, and feed out at a wide open throttle",
            "To measure air temperature",
            "To control ignition timing only"
        ],
        correct: 1,
        explanation: "Early electronic fuel injection systems used throttle position switches to help provide the ECU with information. They normally have three connections, which should include: feed in, feed out at idle, and feed out at a wide open throttle."
    },
    {
        question: "How can you detect voltage at the throttle position switch feed out wires?",
        options: [
            "Using an ammeter",
            "Voltages applied at the feed out wires can be detected by the ECU when the throttle is closed (making the idle circuit live) or wide open (making that circuit live)",
            "Using a pressure gauge",
            "By listening for a clicking sound"
        ],
        correct: 1,
        explanation: "Voltages applied at the feed out wires can be detected by the ECU when the throttle is closed, as the switch will make the idle circuit live. It can also detect when the throttle is wide open, as this circuit then becomes live."
    },
    {
        question: "What component do throttle position sensors use to measure position?",
        options: [
            "Capacitor",
            "Potentiometer (variable resistor)",
            "Diode",
            "Transformer"
        ],
        correct: 1,
        explanation: "Throttle position sensors use potentiometers (variable resistors). A sliding contact moves along a variable resistor inside the potentiometer and sends the ECU information about throttle position."
    },
    {
        question: "What does 'drive by wire' mean in modern engine management systems?",
        options: [
            "The throttle cable is steel wire",
            "There is no throttle cable; potentiometers are used to sense and dictate the position of the throttle butterfly",
            "The accelerator pedal is connected by wire to the fuel pump",
            "The engine is controlled by wireless signals"
        ],
        correct: 1,
        explanation: "Many engine management systems are now 'drive by wire', which means that there is no throttle cable. Potentiometers are used to sense and dictate the position of the throttle butterfly."
    },
    {
        question: "How many wires do throttle position sensors normally have?",
        options: [
            "Two wires",
            "Three wires: a feed in (usually around 5V), an earth wire, and a signal wire",
            "Four wires",
            "Five wires"
        ],
        correct: 1,
        explanation: "Throttle position sensors are passive. They normally have three wires (unless this is a multiple track potentiometer): a feed in (usually around 5V), an earth wire, and a signal wire (there may be more than one)."
    },
    {
        question: "What should the oscilloscope trace show as the throttle is operated on a TPS?",
        options: [
            "A flat horizontal line",
            "A pattern that rises and falls smoothly in relation to throttle operation",
            "Random spikes and drops",
            "A constant 12V signal"
        ],
        correct: 1,
        explanation: "As the throttle is operated, you should see a pattern on the screen that rises and falls smoothly in relation to throttle operation."
    },
    {
        question: "What is an engine coolant temperature (ECT) sensor also called?",
        options: [
            "A pressure switch",
            "A thermistor",
            "A potentiometer",
            "A capacitor"
        ],
        correct: 1,
        explanation: "The engine coolant temperature sensor (ECT) is a heat sensitive variable resistor called a thermistor."
    },
    {
        question: "What are the two types of ECT sensors in common use?",
        options: [
            "Active and passive",
            "Negative temperature coefficient (NTC) and positive temperature coefficient (PTC)",
            "Digital and analog",
            "Single-wire and dual-wire"
        ],
        correct: 1,
        explanation: "Two types of ECT are in common use: negative temperature coefficient NTC and positive temperature coefficient PTC."
    },
    {
        question: "How does an NTC thermistor behave as temperature rises?",
        options: [
            "Resistance increases",
            "Resistance stays constant",
            "Resistance should fall as temperature rises",
            "Resistance fluctuates randomly"
        ],
        correct: 2,
        explanation: "NTC thermistor: as temperature rises, resistance should fall."
    },
    {
        question: "How does a PTC thermistor behave as temperature rises?",
        options: [
            "Resistance should fall",
            "Resistance should increase as temperature rises",
            "Resistance stays constant",
            "Resistance drops to zero"
        ],
        correct: 1,
        explanation: "PTC thermistor: as temperature rises, resistance should increase."
    },
    {
        question: "Why does the ECU need to measure engine temperature?",
        options: [
            "To control the radiator fan only",
            "As fuelling demands vary according to engine temperature (a cold engine requires more fuel), the ECU needs to measure temperature to control fuelling as required",
            "To adjust oil pressure",
            "To control the alternator"
        ],
        correct: 1,
        explanation: "As fuelling demands vary according to engine temperature (for example, a cold engine requires more fuel, similar to applying a choke on a carburetor), the engine's ECU needs to measure temperature in order to control fuelling as required."
    },
    {
        question: "How can you test voltage change on an ECT using a voltmeter?",
        options: [
            "Only when the engine is running",
            "Probe the signal wire of the thermistor and start the engine; as the engine warms up, voltage will either rise or fall depending on type",
            "Test only when engine is cold",
            "Use AC voltage setting"
        ],
        correct: 1,
        explanation: "With the wiring harness still connected, probe the signal wire of the thermistor and start the engine. As the engine warms up, voltage will either rise or fall depending on the type of thermistor fitted: NTC thermistor: voltage should fall as the engine warms up. PTC thermistor: voltage should rise as the engine warms up."
    },
    {
        question: "When testing an ECT with an oscilloscope, what should happen to the wave form as the engine warms up?",
        options: [
            "It stays flat",
            "When the engine is started and run, the wave form on the screen should rise or fall as the engine warms up: NTC wave form will fall, PTC wave form will rise",
            "It should show random spikes",
            "It should remain constant at 5V"
        ],
        correct: 1,
        explanation: "When the engine is started and run, the wave form on the screen should rise or fall as the engine warms up: NTC wave form will fall, PTC wave form will rise."
    },
    {
        question: "Why must the ECU be able to measure air temperature?",
        options: [
            "To control the heater system",
            "As the density of oxygen changes due to air temperature, the ECU must be able to measure this so it can adjust the amount of fuel injected",
            "To adjust ignition timing only",
            "To control air conditioning"
        ],
        correct: 1,
        explanation: "As the density of oxygen changes due to air temperature, the ECU must be able to measure this so that it can adjust the amount of fuel injected. On a cold day, the air charge will be denser and contain more oxygen. If this is not compensated for, stoichiometric values may be inaccurate."
    },
    {
        question: "How are engine speed signals detected and converted for the ECU?",
        options: [
            "By measuring fuel pressure",
            "The ignition pulses or analogue waves produced by sensors can be converted into digital frequency signals that are translated into engine speed at the ECU",
            "By monitoring oil temperature",
            "Through the alternator output"
        ],
        correct: 1,
        explanation: "A number of methods are used to sense engine speed, but they are mainly confined to crankshaft position sensing or ignition primary trigger signals. The ignition pulses or analogue waves produced by the sensors can be converted into digital frequency signals that are translated into engine speed at the ECU."
    },
    {
        question: "What is the purpose of a lambda sensor (oxygen sensor)?",
        options: [
            "To measure fuel pressure",
            "To make sure that the correct air/fuel ratio is achieved from the engine management system by measuring oxygen content of exhaust gases",
            "To control engine temperature",
            "To measure throttle position"
        ],
        correct: 1,
        explanation: "To make sure that the correct air/fuel ratio is achieved from the engine management system, an oxygen sensor (also called a lambda sensor) is fitted in the exhaust system before the catalytic converter. The lambda sensor measures the oxygen content of the exhaust gases and instructs the ECU if the engine is running too rich or too weak."
    },
    {
        question: "What do the oxygen levels in exhaust gas indicate about engine running?",
        options: [
            "Oil consumption rate",
            "Too much oxygen means the engine is running weak; too little oxygen means the engine is running rich",
            "Coolant temperature",
            "Battery charge level"
        ],
        correct: 1,
        explanation: "Too much oxygen in the exhaust gas means the engine is running weak. Too little oxygen in the exhaust gas means the engine is running rich."
    },
    {
        question: "At what temperature does a lambda sensor begin to operate correctly?",
        options: [
            "Above 100°C",
            "Above 300°C, normally containing an additional heating element to get it up to operating temperature quickly",
            "Above 500°C",
            "Any temperature"
        ],
        correct: 1,
        explanation: "A lambda sensor will only begin to operate correctly once it has reached an operating temperature above 300°C. Because of this, it normally contains an additional heating element to get it up to operating temperature as quickly as possible. This additional heating will also help prolong the lifespan of the sensor."
    }
];
