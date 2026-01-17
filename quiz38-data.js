const quizData = [
    {
        question: "Why should you take care when using an ammeter?",
        options: [
            "It's expensive",
            "It can be damaged if it is connected incorrectly",
            "It's heavy",
            "It requires calibration daily"
        ],
        correct: 1,
        explanation: "When measuring the electrical current in a circuit, use the amps setting on the multimeter so that it is used as an ammeter. Take care when using an ammeter because it can be damaged if it is connected incorrectly."
    },
    {
        question: "Why should you never connect an ammeter in parallel (across a circuit)?",
        options: [
            "It won't read accurately",
            "A good ammeter has a very low internal resistance, so if the ammeter is connected in parallel, excessive current will flow and the ammeter will be damaged. The amount of current that you can measure may be restricted to around 10 amps",
            "It will drain the battery",
            "It's too complicated"
        ],
        correct: 1,
        explanation: "Never connect an ammeter in parallel (across a circuit). A good ammeter has a very low internal resistance, so if the ammeter is connected in parallel, excessive current will flow and the ammeter will be damaged. Also remember that, depending on the quality of your ammeter, the amount of current that you can measure may be restricted to around 10 amps."
    },
    {
        question: "What does audible continuity testing allow you to do?",
        options: [
            "Measure voltage",
            "Test the continuity of an electrical component without having to look at the screen",
            "Measure resistance",
            "Check battery charge"
        ],
        correct: 1,
        explanation: "Some multimeters include an audible continuity tester. This allows you to test the continuity of an electrical component without having to look at the screen."
    },
    {
        question: "How do you calibrate an audible continuity meter to check correct operation?",
        options: [
            "Leave it disconnected",
            "Touch the probes together. You should hear an audible tone",
            "Connect to battery",
            "Turn it off and on"
        ],
        correct: 1,
        explanation: "To calibrate the meter and check correct operation, touch the probes together. You should hear an audible tone."
    },
    {
        question: "What is a diode?",
        options: [
            "A type of battery",
            "A one-way valve for electricity",
            "A resistor",
            "A capacitor"
        ],
        correct: 1,
        explanation: "A diode is a one-way valve for electricity."
    },
    {
        question: "During diode testing, what should the display show when the diode is removed and probes are connected to terminals (correct operation)?",
        options: [
            "Zero",
            "A low ohms reading",
            "Maximum voltage",
            "Infinity"
        ],
        correct: 1,
        explanation: "With the diode removed, connect the probes to the terminals. If the diode is operating correctly, the display should show a low ohms reading."
    },
    {
        question: "What does it indicate if the diode shows zero in both directions during testing?",
        options: [
            "Perfect operation",
            "The diode has become short circuited",
            "The diode is open circuit",
            "Normal resistance"
        ],
        correct: 1,
        explanation: "If it shows zero in both directions, the diode has become short circuited."
    },
    {
        question: "What is frequency in electrical terms?",
        options: [
            "The voltage level",
            "A measurement of how quickly a circuit switches. The reading is normally measured in hertz (Hz). 1Hz is equal to one complete cycle of operation (for example on and off) occurring in one second",
            "The current flow",
            "The resistance value"
        ],
        correct: 1,
        explanation: "Frequency is a measurement of how quickly a circuit switches. The reading is normally measured in hertz (Hz). 1Hz is equal to one complete cycle of operation (for example on and off) occurring in one second."
    },
    {
        question: "What is a transistor?",
        options: [
            "A power source",
            "An electronic component with no moving parts that can operate as a switch or an amplifier",
            "A type of battery",
            "A measuring device"
        ],
        correct: 1,
        explanation: "A transistor is an electronic component with no moving parts that can operate as a switch or an amplifier."
    },
    {
        question: "What are the two types of transistor in common use?",
        options: [
            "Large and small",
            "Positive negative positive (PNP) and negative positive negative (NPN)",
            "AC and DC",
            "Digital and analogue"
        ],
        correct: 1,
        explanation: "There are two types of transistor in common use: positive negative positive (PNP) and negative positive negative (NPN)."
    },
    {
        question: "How many connections does a transistor have?",
        options: [
            "Two",
            "Three: collector, emitter, and base",
            "Four",
            "One"
        ],
        correct: 1,
        explanation: "Transistors are small electronic switches with no moving parts. They are normally soldered to an electrical circuit board and have three connections: collector, emitter, and base."
    },
    {
        question: "What does an inductive amps clamp use to measure current?",
        options: [
            "Direct connection",
            "Electromagnetic interference (EMI) - it does not require connection in series but is simply clamped around the wire to be tested",
            "Resistance",
            "Voltage drop"
        ],
        correct: 1,
        explanation: "The amps clamp uses electromagnetic interference (EMI) to measure current flow within a circuit. It does not require connection in series but is simply clamped around the wire to be tested. When the circuit is switched on and current flows, you can read the amperage measurement from the display."
    },
    {
        question: "How accurate is the inductive amps clamp compared to connecting an ammeter in series?",
        options: [
            "More accurate",
            "The amps clamp is not always as accurate as connecting an ammeter in series, but it is quicker and should not cause damage if connected incorrectly",
            "Exactly the same",
            "Cannot measure amps"
        ],
        correct: 1,
        explanation: "The amps clamp is not always as accurate as connecting an ammeter in series, but it is quicker and should not cause damage if connected incorrectly. It is also capable of taking much higher amperage readings than a standard multimeter."
    },
    {
        question: "When diagnosing slow cranking, what does a low current draw indicate?",
        options: [
            "Starter motor struggling",
            "The starter motor is not struggling and it is the battery that is unable to supply the correct amount of amperage required to turn the engine over at speed",
            "Perfect operation",
            "High resistance in wiring"
        ],
        correct: 1,
        explanation: "When diagnosing slow cranking: If the current draw is low, then the starter motor is not struggling and it is the battery that is unable to supply the correct amount of amperage required to turn the engine over at speed. This can indicate that the battery needs replacing."
    },
    {
        question: "What is a typical peak amperage for a high current draw on a four-cylinder petrol engine during starting?",
        options: [
            "50 amps",
            "Around 140 amps (this should not be exceeded)",
            "200 amps",
            "300 amps"
        ],
        correct: 1,
        explanation: "If the current draw is high, then you should suspect the wiring or starter motor and test them. An example of a high current draw on a four-cylinder petrol engine is a peak amperage of around 140 amps; this should not be exceeded."
    },
    {
        question: "Why is testing glow plugs with an inductive amps clamp safer than traditional methods?",
        options: [
            "It's faster",
            "The glow plugs do not have to be removed, saving time and cost; there is less danger of personal injury from incorrect test methods; the vehicle does not have to be left overnight to confirm symptoms. If tip contaminated, it may explode when tested; excessive heat from testing across battery may ignite hydrogen sulphide gas",
            "It's more accurate",
            "It requires less equipment"
        ],
        correct: 1,
        explanation: "The advantages of testing glow plugs with an inductive amps clamp are: the glow plugs do not have to be removed, saving time and cost; there is less danger of personal injury from incorrect test methods; the vehicle does not have to be left overnight to confirm the symptoms. The normal way of testing the glow plugs would be to leave the car to go cold, sometimes overnight, before confirming the symptoms. If the glow plugs are suspected, they are normally removed and tested across a battery. Not only is this time-consuming, it can also be very dangerous. (If the tip of a glow plug is contaminated, it may explode when tested. Excessive heat caused by testing a glow plug across a battery may also ignite hydrogen sulphide gas produced within the battery, leading to an explosion.)"
    },
    {
        question: "What is the expected current draw for glow plugs on a four-cylinder diesel engine?",
        options: [
            "10 amps per plug",
            "Approximately 20 amps per plug (around 80 amps total for four plugs working correctly)",
            "5 amps per plug",
            "50 amps per plug"
        ],
        correct: 1,
        explanation: "The inductive amps clamp allows you to test the glow plugs more quickly and safely. Allow the engine to cool for around an hour, connect the amps clamp around the feed wire to the glow plugs and turn on the ignition. As a general rule of thumb, each glow plug will draw approximately 20 amps of current. With a four-cylinder engine this means that you are looking for around 80 amps of current in total if the glow plugs are working correctly."
    },
    {
        question: "When testing alternator output with an inductive amps clamp, what voltage should be obtained at around 2000 rpm?",
        options: [
            "12V",
            "Approximately 14.2V",
            "16V",
            "10V"
        ],
        correct: 1,
        explanation: "When testing an alternator for correct operation, amperage output is often overlooked. A voltmeter is connected across the battery, the engine is started and a load is placed on the system by switching on the headlights. The engine idle is normally raised to around 2000 rpm and, if a voltage of approximately 14.2V is obtained, it is assumed that the alternator is charging correctly."
    },
    {
        question: "Why might an alternator that shows correct voltage still be at fault?",
        options: [
            "Voltage is always the only indicator",
            "Voltage is electrical pressure, and a pressure higher than that which is coming from the battery is required to push electrons back into the battery for charging. Electrical pressure is not the same as electrical quantity. The pressure or voltage may be high enough to charge the battery, but if the quantity is not available, the electrical components may be using it up quicker than it is going in, resulting in the battery running down over time",
            "The battery is always the problem",
            "Alternators never fail"
        ],
        correct: 1,
        explanation: "However, the alternator may still be at fault. Voltage is electrical pressure, and a pressure higher than that which is coming from the battery is required to push electrons back into the battery for charging. Electrical pressure is not the same as electrical quantity. The pressure or voltage may be high enough to charge the battery, but if the quantity is not available, the electrical components may be using it up quicker than it is going in, resulting in the battery running down over time."
    },
    {
        question: "What is parasitic drain?",
        options: [
            "Normal battery discharge",
            "A common fault where the battery goes flat over a period of time due to a component using electrical energy when all consumers are switched off",
            "Alternator output",
            "Starter motor draw"
        ],
        correct: 1,
        explanation: "A common fault with a car's electrical system is parasitic drain. The symptoms normally include the battery going flat over a period of time. An inductive amps clamp can be used to assist with diagnosis. It should be connected around one of the battery leads. With all electrical consumers switched off, current draw should be almost zero."
    },
    {
        question: "How do you diagnose which circuit is causing parasitic drain?",
        options: [
            "Replace the battery",
            "Gain access to the fuse box and systematically remove fuses until the current draw disappears. Once the current draw disappears, the circuit causing the problem can be identified based on the fuse that has been removed",
            "Test the alternator",
            "Check the starter motor"
        ],
        correct: 1,
        explanation: "If a current draw exists, then something is using the electrical energy; this component is considered to be a parasite on the battery. Gain access to the fuse box and systematically remove fuses until the current draw disappears. Once the current draw disappears, the circuit causing the problem can be identified based on the fuse that has been removed. With the fuse reconnected, and the current draw reinstated, you can now isolate or disconnect consumers within that circuit until the fault has been found."
    },
    {
        question: "What does a high current draw indicate when testing a fuel pump?",
        options: [
            "Pump is finding it too easy",
            "The pump is struggling",
            "Perfect operation",
            "Low pressure"
        ],
        correct: 1,
        explanation: "The current draw on a fuel pump can give an indication of its operation. A high current draw indicates that the pump is struggling, and a low current draw indicates that the pump is finding it too easy."
    },
    {
        question: "What is the expected current draw for a standard petrol fuel pump?",
        options: [
            "1-2 amps",
            "Between 3 and 5 amps",
            "10-15 amps",
            "20-30 amps"
        ],
        correct: 1,
        explanation: "You should expect a current draw of between 3 and 5 amps for a standard petrol pump."
    },
    {
        question: "What tests can dedicated battery testing equipment perform?",
        options: [
            "Only voltage",
            "Capacity, voltage, heavy discharge (drop testing), charge system voltage/amperage, cold cranking amps (CCA)",
            "Only resistance",
            "Only temperature"
        ],
        correct: 1,
        explanation: "Tooling manufacturers are now producing specialist battery testers. These run fully automated checks that help show the condition of lead-acid batteries and charging circuits. Tests can include: capacity, voltage, heavy discharge (drop testing), charge system voltage/amperage, cold cranking amps (CCA)."
    },
    {
        question: "What do dedicated battery testers include to prepare the battery before testing?",
        options: [
            "A cooling system",
            "An internal charger which brings the battery up to the required state of charge before any checks on the battery are made",
            "A replacement battery",
            "A voltmeter only"
        ],
        correct: 1,
        explanation: "The testers can include an internal charger which brings the battery up to the required state of charge before any checks on the battery are made."
    }
];
