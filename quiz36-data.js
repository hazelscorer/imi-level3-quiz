const quizData = [
    {
        question: "How is electrical energy created in cars?",
        options: [
            "Only by solar panels",
            "By a chemical reaction (in a battery) or by the disruption of magnetic fields near electrical conductors (such as in a generator)",
            "Only by friction",
            "Only by heat"
        ],
        correct: 1,
        explanation: "In cars, electrical energy is created by a chemical reaction (in a battery, for example) or by the disruption of magnetic fields near electrical conductors (such as in a generator)."
    },
    {
        question: "What is voltage (volts)?",
        options: [
            "The amount of electricity flowing",
            "Voltage is electrical pressure. It is the potential force in any part of an electrical circuit",
            "The resistance to flow",
            "The power consumed"
        ],
        correct: 1,
        explanation: "Voltage is electrical pressure. It is the potential force in any part of an electrical circuit."
    },
    {
        question: "What is EMF (Electromotive Force)?",
        options: [
            "The resistance in a circuit",
            "Potential pressure, usually considered to be the open circuit voltage when all electrical consumers are switched off and no current is flowing. It should be higher than electrical system voltage when current is flowing",
            "The current flow",
            "The power output"
        ],
        correct: 1,
        explanation: "Electromotive force (EMF) is potential pressure, and is usually considered to be the open circuit voltage when all electrical consumers are switched off and no current is flowing. It should be higher than electrical system voltage when current is flowing."
    },
    {
        question: "What is Potential Difference (Pd)?",
        options: [
            "The battery voltage",
            "A circuit voltage measurement when components are switched on and current is able to flow. It is a measurement of voltage drop compared to the EMF at different positions within a circuit",
            "The alternator output",
            "The ground resistance"
        ],
        correct: 1,
        explanation: "Potential difference (Pd) is a circuit voltage measurement when components are switched on and current is able to flow. It is a measurement of voltage drop compared to the EMF at different positions within a circuit."
    },
    {
        question: "What are amps used to measure?",
        options: [
            "Voltage",
            "The amount of electricity in any part of an electrical circuit. Amps are measured when electricity is allowed to flow in an electrical circuit - this is known as current",
            "Resistance",
            "Power"
        ],
        correct: 1,
        explanation: "Amps are the units used to measure the amount of electricity in any part of an electrical circuit. Amps are measured when electricity is allowed to flow in an electrical circuit – this is known as current."
    },
    {
        question: "What is Direct Current (DC)?",
        options: [
            "Electricity that changes direction",
            "Electricity that flows in one direction only",
            "Electricity that pulses",
            "Electricity that alternates"
        ],
        correct: 1,
        explanation: "Direct current (DC) is electricity that flows in one direction only."
    },
    {
        question: "What is Alternating Current (AC)?",
        options: [
            "Current that flows in one direction",
            "Electricity that moves backwards and forwards in an electric circuit. Amperage is the same wherever you measure it in the circuit (at the beginning, in the middle or at the end)",
            "Current that is blocked",
            "Current that is stored"
        ],
        correct: 1,
        explanation: "Alternating current (AC) is electricity that moves backwards and forwards in an electric circuit. Amperage is the same wherever you measure it in the circuit (at the beginning, in the middle or at the end)."
    },
    {
        question: "What are ohms used to measure?",
        options: [
            "Voltage",
            "The resistance to electrical flow. Resistance has a direct effect on the operation of any electrical circuit. As resistance rises in a circuit, current and voltage fall, which can restrict the operation of electrical components",
            "Current",
            "Power"
        ],
        correct: 1,
        explanation: "Ohms are the units used to measure the resistance to electrical flow. Resistance has a direct effect on the operation of any electrical circuit. As resistance rises in a circuit, current and voltage fall, which can restrict the operation of electrical components."
    },
    {
        question: "What are watts used to measure?",
        options: [
            "Voltage only",
            "Electrical power made or consumed. Power is defined as the rate at which work is done. When referring to electrical components, the higher the wattage, the more powerful the component will be and the more electrical energy it will use",
            "Current only",
            "Resistance only"
        ],
        correct: 1,
        explanation: "Watts are the units used to measure electrical power made or consumed. Power is defined as the rate at which work is done. When referring to electrical components, the higher the wattage, the more powerful the component will be and the more electrical energy it will use."
    },
    {
        question: "In a series circuit, how are consumers connected?",
        options: [
            "Side by side",
            "In a line, one after another. Because they are all in the same circuit, they share the electricity provided depending on the amount of power that they use",
            "In parallel branches",
            "Randomly"
        ],
        correct: 1,
        explanation: "In a series circuit the consumers are connected in a line, one after another. Because they are all in the same circuit, they share the electricity provided depending on the amount of power that they use."
    },
    {
        question: "What happens if one consumer fails in a series circuit?",
        options: [
            "Other consumers keep working",
            "The circuit is broken and no electricity can flow. The rest of the consumers stop working",
            "Voltage increases",
            "Current doubles"
        ],
        correct: 1,
        explanation: "If any one of the consumers fails, the circuit is broken and no electricity can flow. The rest of the consumers stop working. This makes series circuits unsuitable for many systems on cars."
    },
    {
        question: "In a parallel circuit, how are consumers connected?",
        options: [
            "In a line, one after another",
            "Next to each other. Each has its own power supply and earth return back to the battery",
            "In series",
            "Through a single switch"
        ],
        correct: 1,
        explanation: "In a parallel circuit the consumers are connected next to each other. Each has its own power supply and earth return back to the battery."
    },
    {
        question: "What happens if one consumer fails in a parallel circuit?",
        options: [
            "All consumers stop working",
            "The others keep working. For example, in a headlight circuit each bulb has its own 12-volt supply and earth return to the battery. If one bulb breaks, the other will keep working",
            "Voltage drops to zero",
            "Circuit opens completely"
        ],
        correct: 1,
        explanation: "If one consumer in the circuit fails, the others keep working. For example, in a headlight circuit each bulb has its own 12-volt supply and earth return to the battery. If one bulb breaks, the other will keep working."
    },
    {
        question: "What does Ohm's law state?",
        options: [
            "Voltage is constant",
            "The current flowing in an electric circuit is in direct proportion to the voltage applied and inversely proportionate to the resistance",
            "Power equals voltage",
            "Resistance equals current"
        ],
        correct: 1,
        explanation: "Ohm's law states that the current flowing in an electric circuit is in direct proportion to the voltage applied and inversely proportionate to the resistance."
    },
    {
        question: "According to Ohm's law, what happens if you double the voltage?",
        options: [
            "Current stays the same",
            "You double the quantity of current (amps) flowing",
            "Resistance doubles",
            "Power is halved"
        ],
        correct: 1,
        explanation: "If you double the pressure (voltage), you double the quantity of current (amps) flowing."
    },
    {
        question: "What is the formula for calculating amps using Ohm's law?",
        options: [
            "amps = volts × resistance",
            "amps = volts ÷ resistance",
            "amps = resistance ÷ volts",
            "amps = volts + resistance"
        ],
        correct: 1,
        explanation: "The formula is amps = volts ÷ resistance."
    },
    {
        question: "In Ohm's law triangle, what letter represents volts?",
        options: [
            "I",
            "V (sometimes shown as E to represent EMF)",
            "R",
            "P"
        ],
        correct: 1,
        explanation: "V = volts (This is sometimes shown as the letter E to represent EMF, but still means volts.)"
    },
    {
        question: "What does the letter I represent in Ohm's law triangle?",
        options: [
            "Voltage",
            "Amps (The letter I is used to represent instantaneous current flow)",
            "Resistance",
            "Power"
        ],
        correct: 1,
        explanation: "I = amps (The letter I is used to represent instantaneous current flow.)"
    },
    {
        question: "What is the formula for calculating watts (power)?",
        options: [
            "watts = volts ÷ amps",
            "watts = amps × volts",
            "watts = amps ÷ volts",
            "watts = volts - amps"
        ],
        correct: 1,
        explanation: "watts = amps × volts"
    },
    {
        question: "If pressure (volts) is lower than expected during fault diagnosis, what does this indicate?",
        options: [
            "Too much current",
            "Component performance is reduced",
            "Too much resistance",
            "Perfect operation"
        ],
        correct: 1,
        explanation: "Pressure (volts): If this is lower than expected, component performance is reduced."
    },
    {
        question: "What does it mean if resistance (ohms) is lower than expected during fault diagnosis?",
        options: [
            "Perfect operation",
            "Current may be taking an alternative path to earth (short circuit)",
            "Component is open circuit",
            "Voltage is too high"
        ],
        correct: 1,
        explanation: "Resistance (ohms): If this is lower than expected, current may be taking an alternative path to earth (short circuit)."
    },
    {
        question: "What is the purpose of a test lamp in electrical diagnostics?",
        options: [
            "To measure exact voltage",
            "To check whether the circuit has power",
            "To measure resistance",
            "To calculate wattage"
        ],
        correct: 1,
        explanation: "One of the simplest diagnostic tools you can use is a test lamp. Its purpose is to check whether the circuit has power."
    },
    {
        question: "Why must you not use a test lamp on electronic systems?",
        options: [
            "It's too expensive",
            "It can cause severe damage to circuits and components. A test lamp contains a bulb and this is a consumer. A standard test lamp has a low resistance (around 6 ohms), meaning 2 to 3 amps of current may be drawn. If used on an electronic circuit, severe damage can be caused",
            "It's too slow",
            "It doesn't illuminate"
        ],
        correct: 1,
        explanation: "You must not use a test lamp on electronic systems as it can cause severe damage to circuits and components. A test lamp contains a bulb and this is a consumer. A standard test lamp has a low resistance, usually around 6 ohms. This means that when testing an electrical circuit, 2 to 3 amps of electrical current may be drawn. If a test lamp is used on an electronic circuit, severe damage can be caused as this high amperage moves through the components."
    },
    {
        question: "What is oxidation in the context of electrical wiring?",
        options: [
            "The cleaning of wires",
            "The effect of oxygen on metal, which can cause corrosion",
            "The insulation of wires",
            "The testing of circuits"
        ],
        correct: 1,
        explanation: "Oxidation is the effect of oxygen on metal, which can cause corrosion."
    },
    {
        question: "What do the LED colors indicate on a power probe?",
        options: [
            "Temperature readings",
            "Power probes are fitted with LEDs that illuminate in different colours when connected to either a powered circuit (LED glows red) or an earth circuit (LED glows green)",
            "Voltage levels only",
            "Resistance values"
        ],
        correct: 1,
        explanation: "Power probes are usually fitted with LEDs that are able to illuminate in different colours when connected to either a powered circuit (LED glows red) or an earth circuit (LED glows green). The LED should illuminate red when touched to the positive terminal, and the LED should illuminate green when touched to the negative terminal."
    }
];
