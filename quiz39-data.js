const quizData = [
    {
        question: "Why is an oscilloscope needed instead of a multimeter for modern electronic systems on motor vehicles?",
        options: [
            "It's cheaper",
            "A multimeter's measurement readout can't change fast enough to deal with modern electronic systems on motor vehicles – the numbers on the screen can't keep up. The answer is to use an oscilloscope",
            "It's easier to use",
            "It measures temperature"
        ],
        correct: 1,
        explanation: "An oscilloscope is a piece of electrical test equipment designed to act like a voltmeter or an ammeter. A multimeter's measurement readout can't change fast enough to deal with modern electronic systems on motor vehicles – the numbers on the screen can't keep up. The answer to this is to use an oscilloscope."
    },
    {
        question: "What is amplitude on an oscilloscope?",
        options: [
            "The time measurement",
            "The height of a wave form, measured in volts or amps",
            "The frequency",
            "The resistance"
        ],
        correct: 1,
        explanation: "Amplitude is the height of a wave form, measured in volts or amps."
    },
    {
        question: "How do oscilloscopes display results unlike voltmeters?",
        options: [
            "As numbers only",
            "Oscilloscopes not only show volts or amps, they also show time. Instead of a digital readout, the results are shown as a graph of volts or amps against time on a screen",
            "As resistance",
            "As temperature"
        ],
        correct: 1,
        explanation: "Unlike a voltmeter, oscilloscopes not only show volts or amps, they also show time. Instead of a digital readout, the results are shown as a graph of volts or amps against time on a screen."
    },
    {
        question: "What axis on an oscilloscope graph shows voltage or amperage?",
        options: [
            "X-axis (horizontal)",
            "Y-axis (vertical) - this axis is often called amplitude",
            "Z-axis",
            "No axis shows this"
        ],
        correct: 1,
        explanation: "The graph normally shows voltage or amperage at the side of the screen (on the y-axis) – this axis is often called amplitude. Use the scale setting switch in a similar way to the dial on a manual multimeter to choose the amount of volts or amps that are shown on the screen."
    },
    {
        question: "What axis on an oscilloscope graph shows time?",
        options: [
            "Y-axis (vertical)",
            "X-axis (horizontal) - this axis is often called frequency",
            "Z-axis",
            "No axis shows this"
        ],
        correct: 1,
        explanation: "The graph normally shows time across the bottom of the screen (on the x-axis). This axis is often called frequency. Use the timescale switch in a similar way to the dial that is used to choose the amount of volts on a multimeter."
    },
    {
        question: "What is a simple way to remember which axis is which on an oscilloscope graph?",
        options: [
            "Y is time",
            "X is across (a cross)",
            "Z is voltage",
            "There is no easy way"
        ],
        correct: 1,
        explanation: "An easy way to remember which axis is which on a graph is to say 'X is across' (a cross)."
    },
    {
        question: "For simple electrical testing with an oscilloscope, what do you need?",
        options: [
            "Ten probes and special equipment",
            "Only two probes – a common and voltage wire – just like with a multimeter. To measure amperage, you may need an inductive clamp",
            "Only voltage measurement capability",
            "A computer connection"
        ],
        correct: 1,
        explanation: "For simple electrical testing, you only need two probes – a common and voltage wire – just like with a multimeter. To measure amperage, you may need an inductive clamp."
    },
    {
        question: "What should you do if you don't know what voltage or timescale to use on an oscilloscope?",
        options: [
            "Start with the lowest setting",
            "Find out in the same way as you would with a multimeter. Start with the highest setting available and work downwards until you can see an image on the screen",
            "Guess randomly",
            "Always use the middle setting"
        ],
        correct: 1,
        explanation: "If you don't know what voltage or timescale to use on an oscilloscope, find out in the same way as you would with a multimeter. Start with the highest setting available and work downwards until you can see an image on the screen."
    },
    {
        question: "What does OBD stand for?",
        options: [
            "Original Board Diagnostic",
            "On-Board Diagnostic",
            "Operational Battery Device",
            "Overload Breaking Device"
        ],
        correct: 1,
        explanation: "Since the 1980s, manufacturers have been including on-board diagnostic (OBD) systems as part of their vehicle design."
    },
    {
        question: "What does a fault code reader actually tell you?",
        options: [
            "Exactly what the fault is",
            "It actually only points you in the direction of the fault. You must test the system and components to find the fault",
            "How to fix the problem",
            "The cost of repairs"
        ],
        correct: 1,
        explanation: "It is a common misunderstanding to think that plugging a fault code reader into the vehicle's OBD system will tell you what the fault is. It actually only points you in the direction of the fault. You must test the system and components to find the fault."
    },
    {
        question: "Where is the diagnostic socket (DLC) typically located since year 2000?",
        options: [
            "Under the hood",
            "A 16-pin socket should be located inside the vehicle, within reach of the driver, somewhere between the centre line of the car and the driver's seat",
            "In the trunk",
            "Under the rear seat"
        ],
        correct: 1,
        explanation: "To use a scan tool you will need to locate the diagnostic socket. Since the year 2000 the type and position of the diagnostic socket, also known as the data link connector (DLC), has been standardised. A 16-pin socket should be located inside the vehicle, within reach of the driver, somewhere between the centre line of the car and the driver's seat."
    },
    {
        question: "What are the two main types of diagnostic information available on many systems?",
        options: [
            "Old and new",
            "OEM and E-OBD",
            "Digital and analogue",
            "Manual and automatic"
        ],
        correct: 1,
        explanation: "There are two main types of diagnostic information available on many systems: OEM and E-OBD."
    },
    {
        question: "What does OEM diagnostic information require?",
        options: [
            "No special information",
            "To gain access you will need to enter vehicle specific information such as make, model, engine type and vehicle identification number (VIN)",
            "Only the year",
            "Just the color"
        ],
        correct: 1,
        explanation: "OEM is information from the original equipment manufacturer. To gain access to this information, you will need to enter vehicle specific information such as make, model, engine type and vehicle identification number (VIN)."
    },
    {
        question: "What do OEM diagnostic trouble codes beginning with 'P' relate to?",
        options: [
            "Parking systems",
            "Powertrain faults",
            "Pneumatic systems",
            "Power windows"
        ],
        correct: 1,
        explanation: "Many of the diagnostic trouble codes (DTCs) have been standardised so that: codes beginning with P relate to powertrain faults."
    },
    {
        question: "What is E-OBD designed to detect?",
        options: [
            "All vehicle faults",
            "Emission-related faults only and should not be confused with original equipment manufacturer (OEM) serial data or diagnostic trouble codes (DTCs)",
            "Electrical faults only",
            "Mechanical failures"
        ],
        correct: 1,
        explanation: "E-OBD is designed to detect emission-related faults only and should not be confused with original equipment manufacturer (OEM) serial data or diagnostic trouble codes (DTCs)."
    },
    {
        question: "When did European legislation require E-OBD for petrol engine vehicles (type approved)?",
        options: [
            "1990",
            "From January 2000",
            "2010",
            "2015"
        ],
        correct: 1,
        explanation: "Vehicle types which are E-OBD compliant include: petrol engine vehicles: vehicles type approved from January 2000."
    },
    {
        question: "What is one typical feature of scan tools?",
        options: [
            "Only reads codes",
            "Retrieval of electronic control unit (ECU) fault codes, erasing of system ECU fault codes, displaying serial data/live data, displaying readiness monitors, resetting of ECU adaptions, displaying freeze frame data, coding of new components such as fuel injectors, access to information on various vehicle electronic systems, resetting of service reminder lights, vehicle key coding",
            "Only displays voltage",
            "Only tests batteries"
        ],
        correct: 1,
        explanation: "Typical features of scan tools include: retrieval of electronic control unit (ECU) fault codes, erasing of system ECU fault codes, displaying serial data/live data, displaying readiness monitors, resetting of ECU adaptions, displaying freeze frame data, coding of new components such as fuel injectors, access to information on various vehicle electronic systems, resetting of service reminder lights, vehicle key coding."
    },
    {
        question: "What is multiplexing?",
        options: [
            "A type of engine",
            "A method of carrying out more than one operation at a time (for example, a multiplex cinema has more than one screen, and is able to show more than one film at once)",
            "A battery system",
            "A lighting system"
        ],
        correct: 1,
        explanation: "Multiplexing is a method of carrying out more than one operation at a time (for example, a multiplex cinema has more than one screen, and is able to show more than one film at once)."
    },
    {
        question: "What are nodes in a vehicle network system?",
        options: [
            "Battery terminals",
            "ECUs connected to a computer network (from the Latin word nodus, which means knot)",
            "Wiring connectors",
            "Fuse boxes"
        ],
        correct: 1,
        explanation: "Instead of a single large ECU in a vehicle, smaller ECUs were developed that managed individual systems. These single ECUs became known as nodes. The nodes are connected to each other by a communication wire, which allows information to be shared in a network."
    },
    {
        question: "Why was multiplexing introduced in vehicles?",
        options: [
            "To increase cost",
            "To reduce the amount of sensors and wiring needed for system operation. ECUs had to become bigger and large amounts of wiring were needed, leading to complication, extra weight and increased cost",
            "To make cars heavier",
            "To reduce performance"
        ],
        correct: 1,
        explanation: "To reduce the amount of sensors and wiring needed for system operation, multiplexing was introduced. ECUs had to become bigger to cope with system requirements, and large amounts of wiring were needed to distribute electrical power around the car. These demands also generated a rise in the number of sensors required, leading to complication, extra weight and increased cost of manufacture."
    },
    {
        question: "What does CAN bus stand for?",
        options: [
            "Computer Area Network",
            "Controller Area Network",
            "Central Area Network",
            "Component Area Network"
        ],
        correct: 1,
        explanation: "Controller area network (CAN) was introduced by Robert Bosch in the 1980s."
    },
    {
        question: "Why is the word 'bus' used in CAN bus terminology?",
        options: [
            "It's shaped like a bus",
            "One meaning of bus is a vehicle that collects you from one place and delivers you to another. This is very similar to its meaning in a communication network. Information is picked up from one point on the communication line; it then takes a route around the system and stops at various ECUs (like bus stops)",
            "It was invented on a bus",
            "It's painted yellow"
        ],
        correct: 1,
        explanation: "The word 'bus' is used in various situations. One meaning of bus is a vehicle that collects you from one place and delivers you to another. This is very similar to its meaning in a communication network. Information is picked up from one point on the communication line; it then takes a route around the system and stops at various ECUs (like bus stops)."
    },
    {
        question: "What is a daisy chain network layout?",
        options: [
            "A star pattern",
            "A large loop, often used for body systems",
            "A parallel connection",
            "A single line"
        ],
        correct: 1,
        explanation: "The nodes are connected by a single communication line, which allows the exchange of multiple pieces of data. The communication line can link these ECUs in the following layouts: a large loop, known as a daisy chain, often used for body systems."
    },
    {
        question: "What is a server system network layout?",
        options: [
            "A loop pattern",
            "A star pattern, often used for infotainment systems",
            "A bus line",
            "Random connections"
        ],
        correct: 1,
        explanation: "A star pattern, known as a server system, often used for infotainment systems."
    },
    {
        question: "What is a bus line network layout?",
        options: [
            "A star pattern",
            "Connected in parallel to a single bus line, often used for powertrain control systems",
            "A loop pattern",
            "Multiple independent lines"
        ],
        correct: 1,
        explanation: "Connected in parallel to a single bus line, often used for powertrain control systems."
    }
];
