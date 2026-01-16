const quizData = [
    {
        question: "What hazardous chemicals are found in HID light bulbs and SRS crash sensors?",
        options: [
            "Lead",
            "Mercury",
            "Arsenic",
            "Cadmium"
        ],
        correct: 1,
        explanation: "Many high intensity discharge (HID) light bulbs and SRS crash sensors contain mercury. Always take precautions when handling these components and treat old units as hazardous waste when disposing of them."
    },
    {
        question: "Why should you use insulated tooling when working with electrical systems?",
        options: [
            "For better grip",
            "Because when connecting and disconnecting electrical system components, there is a risk of an unintended short circuit; electrical discharge can be turned into heat, and insulated tooling is designed for use with electrical systems wherever possible",
            "For corrosion resistance",
            "To prevent tool damage"
        ],
        correct: 1,
        explanation: "When you are connecting and disconnecting electrical system components, there is a risk of an unintended short circuit. As electrical discharge is created, the energy can be turned into heat. It is recommended that you use insulated tooling that is designed for use with electrical systems wherever possible."
    },
    {
        question: "What is the main hazard when working with light vehicle electrical and electronic systems?",
        options: [
            "Chemical burns",
            "The possible risk of electric shock",
            "Mechanical injury",
            "Noise pollution"
        ],
        correct: 1,
        explanation: "Working with any electrical system has its hazards, and you must take safety seriously. When you are working with light vehicle electrical and electronic systems, the main hazard is the possible risk of electric shock."
    },
    {
        question: "What voltage can cause an accidental electrical circuit connection to be enough to cause severe burns?",
        options: [
            "5V",
            "Around 12V",
            "24V",
            "48V"
        ],
        correct: 1,
        explanation: "Although most systems operate with low voltages of around 12V, an accidental electrical circuit connection can be enough to cause severe burns. Where possible, isolate electrical systems before repairing or replacing components."
    },
    {
        question: "What special care must be taken when working on hybrid vehicles?",
        options: [
            "No special care needed",
            "Take care not to disturb the high voltage system; these systems carry voltages that can cause severe injury or death. Always follow the manufacturer's recommendations",
            "Only wear gloves",
            "Work quickly",
        ],
        correct: 1,
        explanation: "If you are working on hybrid vehicles, take care not to disturb the high voltage system. You can normally identify the high voltage system by its reinforced insulation and shielding, which is often brightly colored. These systems carry voltages that can cause severe injury or death. If you carry out repairs to hybrid vehicles, always follow the manufacturer's recommendations."
    },
    {
        question: "What should you do before using measuring equipment?",
        options: [
            "Use it immediately",
            "Always check that it is accurate and calibrated before you take any readings",
            "Only check the battery",
            "Clean it only"
        ],
        correct: 1,
        explanation: "If you are using measuring equipment, always check that it is accurate and calibrated before you take any readings."
    },
    {
        question: "What should you check when replacing electrical or electronic components?",
        options: [
            "Only the price",
            "Always check that the quality meets the original equipment manufacturer (OEM) specifications. If the vehicle is under warranty, inferior parts or deliberate modifications might make the warranty invalid",
            "Only the color",
            "Only the weight"
        ],
        correct: 1,
        explanation: "If you need to replace any electrical or electronic components, always check that the quality meets the original equipment manufacturer (OEM) specifications. (If the vehicle is under warranty, inferior quality are fitted, this might affect the vehicle's performance and safety.) If parts of an inferior quality are fitted or deliberate modifications might make the warranty invalid. Also, if parts of an inferior replacement of electrical components if the parts comply with the legal requirements for road use."
    },
    {
        question: "What information source would you use to get a description of symptoms that occur when an electrical system is operated?",
        options: [
            "Technical data manuals",
            "Verbal information from the driver",
            "Workshop manuals",
            "Parts catalogues"
        ],
        correct: 1,
        explanation: "Verbal information from the driver provides a description of the symptoms that occur on the car when an electrical system is operated."
    },
    {
        question: "What information source would you use to find the recommended amperage for replacement circuit fuses?",
        options: [
            "Vehicle handbook",
            "Technical data manuals",
            "Service history",
            "Internet forums"
        ],
        correct: 1,
        explanation: "Technical data manuals are used to find the recommended amperage for replacement circuit fuses."
    },
    {
        question: "What information source would you use to find the recommended procedures for isolating the SRS system for airbag removal?",
        options: [
            "Vehicle handbook",
            "Workshop manuals",
            "Warranty information",
            "Parts catalogues"
        ],
        correct: 1,
        explanation: "Workshop manuals are used to find the recommended procedures for isolating the SRS system for airbag removal."
    },
    {
        question: "What information source would you use to trace the electrical circuit used for powering the brake light system?",
        options: [
            "Job cards",
            "Wiring diagrams",
            "Service history",
            "Internet forums"
        ],
        correct: 1,
        explanation: "Wiring diagrams are used to trace the electrical circuit used for powering the brake light system."
    },
    {
        question: "What information source would you use to confirm which components need to be replaced for safe operation of an HID lighting system?",
        options: [
            "Internet forums",
            "Safety recall sheets",
            "Parts catalogues",
            "Job cards"
        ],
        correct: 1,
        explanation: "Safety recall sheets are used to confirm which components need to be replaced for safe operation of an HID lighting system."
    },
    {
        question: "What is the purpose of the ECU in light vehicle auxiliary systems?",
        options: [
            "Only to store data",
            "The electronic control unit (ECU) is designed to monitor and control the operation of light vehicle electrical systems. It processes the information received and operates actuators that control auxiliary systems for comfort and convenience",
            "Only to measure voltage",
            "Only to control the engine"
        ],
        correct: 1,
        explanation: "The electronic control unit (ECU) is designed to monitor and control the operation of light vehicle electrical systems. It processes the information received and operates actuators that control auxiliary systems for comfort and convenience."
    },
    {
        question: "What is the purpose of sensors in auxiliary electrical systems?",
        options: [
            "To provide power",
            "The sensors monitor various vehicle auxiliary components against set parameters. As the driver makes demands on vehicle systems, dynamic operation creates signals in the form of resistance changes (voltage) which are relayed to the ECU for processing",
            "To store information",
            "To display warnings only"
        ],
        correct: 1,
        explanation: "The sensors monitor various vehicle auxiliary components against set parameters. As the driver makes demands on vehicle systems, dynamic operation creates signals in the form of resistance changes (voltage) which are relayed to the ECU for processing."
    },
    {
        question: "What are actuators used for in auxiliary systems?",
        options: [
            "To measure temperature",
            "The actuators are used to control auxiliary systems operation. Motors, solenoids, valves, transformers, etc., are operated by the ECU to help control the action of comfort and convenience systems, which also assist with dynamic safety",
            "To generate electricity",
            "To sense movement only"
        ],
        correct: 1,
        explanation: "The actuators are used to control auxiliary systems operation. Motors, solenoids, valves, transformers, etc., are operated by the ECU to help control the action of comfort and convenience systems, which also assist with dynamic safety."
    },
    {
        question: "Why do sensors normally operate with a stabilized 5-volt supply?",
        options: [
            "It's cheaper",
            "The ECU needs reliable sensor information to correctly determine the action of the auxiliary systems. If battery voltage was used to power sensors, its unstable nature would create issues (battery voltage constantly rises and falls during normal vehicle operation). Because of this, sensors normally operate with a stabilized 5-volt supply",
            "It's faster",
            "It uses less power"
        ],
        correct: 1,
        explanation: "The ECU needs reliable sensor information in order to correctly determine the action of the auxiliary systems. If battery voltage was used to power sensors, its unstable nature would create issues (battery voltage constantly rises and falls during normal vehicle operation). Because of this, sensors normally operate with a stabilized 5-volt supply."
    },
    {
        question: "What is the purpose of digital principles in vehicle sensors?",
        options: [
            "To create heat",
            "Many vehicle sensors create analogue signals (a rising or falling voltage). The ECU is a computer and needs to have these signals converted into digital (on and off) before they can be processed. This can be done using a component called a pulse shaper or Schmitt trigger",
            "To store data",
            "To measure distance"
        ],
        correct: 1,
        explanation: "Many vehicle sensors create analogue signals (a rising or falling voltage). The ECU is a computer and needs to have these signals converted into digital (on and off) before they can be processed. This can be done using a component called a pulse shaper or Schmitt trigger."
    },
    {
        question: "What is PWM (Pulse Width Modulation) used for?",
        options: [
            "To increase voltage",
            "Lots of electrical equipment and electronic actuators can be controlled by duty cycle or pulse width modulation (PWM). This works by switching components on and off very quickly so that they only receive part of the current/voltage available",
            "To measure resistance",
            "To store energy"
        ],
        correct: 1,
        explanation: "Lots of electrical equipment and electronic actuators can be controlled by duty cycle or pulse width modulation (PWM). This works by switching components on and off very quickly so that they only receive part of the current/voltage available. Depending on the reaction time of the component being switched and how long power is supplied, variable control is achieved. This is more efficient than using resistors to control the current/voltage in a circuit. Resistors waste electrical energy as heat, whereas duty cycle and PWM operate with almost no loss of power."
    },
    {
        question: "What are fibre optic principles used for in vehicles?",
        options: [
            "Power transmission",
            "The introduction of in-car entertainment (ICE) and information systems such as satellite navigation has increased the need for very fast transmission of data. Fibre optics use light signals transmitted along thin strands of glass to provide digital data transmission",
            "Fuel delivery",
            "Mechanical linkage"
        ],
        correct: 1,
        explanation: "The introduction of in-car entertainment (ICE) and information systems such as satellite navigation has increased the need for very fast transmission of data. Fibre optics use light signals transmitted along thin strands of glass to provide digital data transmission. (The light source is switched on and off.) In this way, information is transmitted essentially at the speed of light."
    },
    {
        question: "What is an oscilloscope used for in electrical diagnostics?",
        options: [
            "To measure weight",
            "To test the signal produced by a multiplex network system",
            "To measure temperature",
            "To check tire pressure"
        ],
        correct: 1,
        explanation: "An oscilloscope is used to test the signal produced by a multiplex network system."
    },
    {
        question: "What is a multimeter used for?",
        options: [
            "To measure distance",
            "To test the voltage output of an alternator",
            "To measure weight",
            "To check compression"
        ],
        correct: 1,
        explanation: "A multimeter is used to test the voltage output of an alternator."
    },
    {
        question: "What caution should be taken when using a test lamp/logic probe?",
        options: [
            "No caution needed",
            "Always use test lamps with extreme caution on electronic systems, as the current draw created can severely damage components",
            "Use maximum voltage",
            "Connect directly to the ECU"
        ],
        correct: 1,
        explanation: "Test lamp/logic probe is used to test the existence of system voltage at a windscreen wiper motor. (Always use test lamps with extreme caution on electronic systems, as the current draw created can severely damage components.)"
    },
    {
        question: "What is a power probe used for?",
        options: [
            "To measure resistance",
            "To power the motor of an electric window system and check its operation",
            "To check fuel pressure",
            "To test compression"
        ],
        correct: 1,
        explanation: "A power probe is used to power the motor of an electric window system and check its operation."
    },
    {
        question: "What is a vacuum gauge/pump used for?",
        options: [
            "To measure electrical current",
            "To test the function and operation of a pneumatic central locking system",
            "To check tire pressure",
            "To test battery voltage"
        ],
        correct: 1,
        explanation: "A vacuum gauge/pump is used to test the function and operation of a pneumatic central locking system."
    },
    {
        question: "What is a code reader/scan tool used for?",
        options: [
            "To measure voltage",
            "To retrieve diagnostic trouble codes (DTCs) related to the supplementary restraint system (SRS), to clear trouble codes, reset the malfunction indicator lamp, and evaluate the effectiveness of repairs",
            "To test tire pressure",
            "To measure resistance only"
        ],
        correct: 1,
        explanation: "A code reader/scan tool is used to retrieve diagnostic trouble codes (DTCs) related to the supplementary restraint system (SRS). To clear trouble codes, reset the malfunction indicator lamp, and evaluate the effectiveness of repairs."
    }
];
