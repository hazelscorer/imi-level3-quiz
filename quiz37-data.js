const quizData = [
    {
        question: "What is continuity in an electrical circuit?",
        options: [
            "High resistance",
            "When an electrical circuit conducts current easily and is unbroken (i.e. continuous)",
            "Open circuit",
            "Short circuit"
        ],
        correct: 1,
        explanation: "Continuity is when an electrical circuit conducts current easily and is unbroken (i.e. continuous)."
    },
    {
        question: "What is an auxiliary ground wire on a power probe?",
        options: [
            "The main power cable",
            "Something that functions in a supporting capacity - the auxiliary ground wire connects to one end of the conductor, wire or component",
            "The test lamp",
            "The battery terminal"
        ],
        correct: 1,
        explanation: "Auxiliary means something that functions in a supporting capacity. The power probe has an auxiliary ground wire – connect this to one end of the conductor, wire or component. Then connect the tip of the power probe to the other end. If continuity exists, the LED on the power probe will illuminate."
    },
    {
        question: "What should you always do before disconnecting a wire component on a vehicle's electrical circuit?",
        options: [
            "Start the engine",
            "Always remember to turn off power first",
            "Increase voltage",
            "Connect a test lamp"
        ],
        correct: 1,
        explanation: "Always remember to turn off power first before disconnecting a wire component on the vehicle's electrical circuit."
    },
    {
        question: "What is step 1 when conducting functional tests with a power probe?",
        options: [
            "Rock the power switch",
            "It is recommended that you disconnect the component from the vehicle's electrical system when conducting this test",
            "Check continuity",
            "Measure voltage"
        ],
        correct: 1,
        explanation: "Step 1: It is recommended that you disconnect the component from the vehicle's electrical system when conducting this test."
    },
    {
        question: "During a power probe functional test, what does it mean if the LED indicator changes momentarily from green to red?",
        options: [
            "The component has failed",
            "You may proceed with the test",
            "There is no power",
            "Voltage is too high"
        ],
        correct: 1,
        explanation: "If the LED indicator changed momentarily from green to red, you may proceed with the test."
    },
    {
        question: "What does it indicate if the LED turns off during the initial rocking of the power switch?",
        options: [
            "Perfect operation",
            "This normally indicates that the current being drawn by the component is too high for the power probe and the internal circuit breaker has tripped. This may require a manual reset",
            "Low voltage",
            "High resistance"
        ],
        correct: 1,
        explanation: "If during the initial rocking of the power switch the LED turned off, this normally indicates that the current being drawn by the component is too high for the power probe and the internal circuit breaker has tripped. This may require a manual reset and you will need to check the manufacturer's instructions."
    },
    {
        question: "What should power probes never be used to test?",
        options: [
            "Light bulbs",
            "Starter motors, power winches, etc. - they are only designed to test components which draw relatively small amounts of current",
            "Switches",
            "Relays"
        ],
        correct: 1,
        explanation: "Power probes are only designed to test components which draw relatively small amounts of current. Never use them to test starter motors, power winches, etc."
    },
    {
        question: "What is a multimeter designed to measure?",
        options: [
            "Only voltage",
            "A number of different units within an electrical circuit",
            "Only resistance",
            "Only current"
        ],
        correct: 1,
        explanation: "The multimeter is a piece of electrical test equipment designed to measure a number of different units within an electrical circuit."
    },
    {
        question: "What are the two types of multimeter?",
        options: [
            "Large and small",
            "Analogue and digital",
            "Manual and automatic",
            "Portable and fixed"
        ],
        correct: 1,
        explanation: "There are two types of multimeter: analogue and digital."
    },
    {
        question: "What was the old-fashioned name for an analogue multimeter?",
        options: [
            "Digital meter",
            "AVO meter, which stood for amps, volts and ohms",
            "Power meter",
            "Test meter"
        ],
        correct: 1,
        explanation: "Analogue multimeters use a needle that moves across a graduated scale to record electrical readings within a circuit. The old-fashioned name for this type of unit was an 'AVO meter', which stood for amps, volts and ohms."
    },
    {
        question: "What is the problem with analogue multimeters?",
        options: [
            "They are too expensive",
            "They are only as good as the operator. The graduated scale can be difficult to read and may result in inaccurate readings. The needle lying between two units could be reading any fraction available. Also have an upper range limit - if the needle flicks all the way to the end of the scale, this is known as full-scale deflection (FSD)",
            "They are too heavy",
            "They break easily"
        ],
        correct: 1,
        explanation: "The problem with analogue meters is that they are only as good as the operator. The graduated scale can be difficult to read and this may result in inaccurate readings. Depending on the range of the scale provided by the manufacturer, a needle that lies somewhere between two units could be reading any fraction available. Analogue multimeters also have an upper range limit. If the needle flicks all the way to the end of this scale, this is known as full-scale deflection (FSD)."
    },
    {
        question: "What display do digital multimeters use?",
        options: [
            "Analogue needle",
            "Liquid crystal display (LCD) screen that displays numbers clearly and is easy to read accurately",
            "LED lights",
            "Mechanical dial"
        ],
        correct: 1,
        explanation: "Digital multimeters display digits (numbers) on a liquid crystal display (LCD) screen. These numbers are clearly displayed and are easy to read accurately."
    },
    {
        question: "What are the two types of digital multimeter?",
        options: [
            "Large and small",
            "Manually operated and autoranging",
            "Expensive and cheap",
            "AC and DC only"
        ],
        correct: 1,
        explanation: "Two types of digital multimeter are common: manually operated and autoranging."
    },
    {
        question: "How does a manual multimeter work?",
        options: [
            "Automatically selects scale",
            "The operator selects the unit and the scale to be measured, normally by turning a dial on the front of the unit",
            "Uses voice commands",
            "No selection needed"
        ],
        correct: 1,
        explanation: "With a manual multimeter, the operator selects the unit and the scale to be measured, normally by turning a dial on the front of the unit."
    },
    {
        question: "How does an autoranging multimeter work?",
        options: [
            "Requires manual scale selection",
            "The operator selects the unit but the scale of that unit is automatically selected by the multimeter",
            "Measures only one unit",
            "Cannot measure volts"
        ],
        correct: 1,
        explanation: "With an autoranging multimeter, the operator selects the unit but the scale of that unit is automatically selected by the multimeter."
    },
    {
        question: "When using an autoranging multimeter to measure voltage, what scales might be used?",
        options: [
            "Only volts",
            "Millivolts, volts, kilovolts, or megavolts",
            "Only kilovolts",
            "Only millivolts"
        ],
        correct: 1,
        explanation: "When using an autoranging multimeter, you must take care that your reading is accurate by taking note of the scale of the unit being used. For example, if voltage is measured, the scale might be in: millivolts, volts, kilovolts, megavolts."
    },
    {
        question: "What are the three sockets on a digital multimeter?",
        options: [
            "All the same",
            "Socket 1 marked 'common' or 'ground' (black probe), Socket 2 marked 'volts, ohms and milliamps' (red probe), Socket 3 marked '10 amps' (red probe only for amperage, separate to protect multimeter)",
            "Only two sockets",
            "Four sockets"
        ],
        correct: 1,
        explanation: "When connecting the test leads to a digital multimeter make sure that they are plugged into the correct sockets for the type of measurement you will be taking. There are normally three sockets: Socket 1, marked 'common' or 'ground' (used with the black test probe), Socket 2, marked 'volts, ohms and milliamps' (used with the red probe), Socket 3, marked '10 amps' (also used with the red test probe, but only when measuring amperage. It is separate from the others to help protect the multimeter from damage if you connected it wrongly to a circuit)."
    },
    {
        question: "How should a multimeter be connected when checking volts?",
        options: [
            "In series",
            "In parallel (across the circuit)",
            "To ground only",
            "To positive only"
        ],
        correct: 1,
        explanation: "For checking volts – it should be connected in parallel (across the circuit)."
    },
    {
        question: "How should a multimeter be connected when checking amps?",
        options: [
            "In parallel",
            "In series (circuit opened and the ammeter connected in line)",
            "Across the battery",
            "To ground only"
        ],
        correct: 1,
        explanation: "For checking amps – it should be connected in series (circuit opened and the ammeter connected in line)."
    },
    {
        question: "How should a multimeter be connected when checking resistance/ohms?",
        options: [
            "With power on",
            "The power should be switched off, the component disconnected and connected in parallel (across the component)",
            "In series with power on",
            "To the battery"
        ],
        correct: 1,
        explanation: "For checking resistance/ohms – the power should be switched off, the component disconnected and connected in parallel (across the component)."
    },
    {
        question: "When using a manual multimeter for testing volts and amps, what should you do if you don't know the scale?",
        options: [
            "Start with the lowest scale",
            "First select the highest scale on the dial, then rotate the dial slowly down through the scales until you obtain an accurate reading",
            "Guess the scale",
            "Start in the middle"
        ],
        correct: 1,
        explanation: "When you use a manual multimeter, if you do not know the scale to be used, always follow this procedure: For testing volts and amps, first select the highest scale on the dial, then rotate the dial slowly down through the scales until you obtain an accurate reading."
    },
    {
        question: "When testing ohms with a manual multimeter, what scale should you start with?",
        options: [
            "Highest scale",
            "First select the lowest scale on the dial and then rotate the dial slowly up until you obtain an accurate reading",
            "Middle scale",
            "Any scale"
        ],
        correct: 1,
        explanation: "For testing ohms, first select the lowest scale on the dial and then rotate the dial slowly up until you obtain an accurate reading."
    },
    {
        question: "What does the DC scale symbol look like on a multimeter?",
        options: [
            "Wavy line",
            "A straight line with a number of dots underneath it (===). This symbol prevents confusion - if just a single line was used, it might be mistaken for a minus sign; if two lines were used, it might be mistaken for an equals sign",
            "Greek omega",
            "Curved arrow"
        ],
        correct: 1,
        explanation: "The DC scale is normally shown on the meter as a straight line with a number of dots underneath it: === This symbol is designed to prevent confusion. If just a single line was used, it might be mistaken for a minus sign; if two lines were used, it might be mistaken for an equals sign."
    },
    {
        question: "What symbol represents the AC scale on a multimeter?",
        options: [
            "Straight line with dots",
            "A wavy line: ~~~",
            "Greek letter omega",
            "Plus sign"
        ],
        correct: 1,
        explanation: "The AC scale is normally shown on the meter as a wavy line: ~~~"
    },
    {
        question: "What symbol represents the ohms scale on a multimeter?",
        options: [
            "Straight line",
            "The Greek letter omega (Ω) - if the letter 'O' was used, it might be confused with zero",
            "Wavy line",
            "Dotted line"
        ],
        correct: 1,
        explanation: "The ohms scale on a multimeter is normally represented by the Greek letter omega (Ω) (if the letter 'O' was used, it might be confused with zero)."
    }
];
