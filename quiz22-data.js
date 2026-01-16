const quiz22Data = {
  quizTitle: "Quiz 22: Electronic Ignition Systems & Sensor Technology",
  quizSubtitle: "Pages 110-114: Electronic Ignition, Inductive & Hall Effect Sensors, Amplifiers & Secondary Circuits",
  questions: [
    {
      question: "What is back EMF in an ignition system?",
      options: [
        "A type of battery failure",
        "A high voltage discharge produced when the primary circuit is broken and the magnetic field collapses through the primary and secondary circuit",
        "The voltage supplied by the alternator",
        "A safety feature in the ECU"
      ],
      correct: 1,
      explanation: "As the primary circuit is broken and the magnetic field collapses through the primary and secondary circuit, a high voltage discharge is produced. This is known as a back EMF."
    },
    {
      question: "What is spark duration?",
      options: [
        "The time it takes to start the engine",
        "After the initial spike, voltage will fall rapidly until it reaches a level where it can maintain a spark across the spark plug",
        "The dwell period",
        "The time between ignition events"
      ],
      correct: 1,
      explanation: "After the initial spike, voltage will fall rapidly until it reaches a level where it can maintain a spark across the spark plug. This is known as the spark duration."
    },
    {
      question: "What advantages does an electronic ignition system have over a conventional ignition system with contact breakers?",
      options: [
        "It uses less fuel",
        "No mechanical wear is produced at the switching mechanism, reaction time is far quicker, greater accuracy is available in the ignition timing, and the system is more reliable",
        "It is cheaper to manufacture",
        "It produces lower voltages"
      ],
      correct: 1,
      explanation: "The advantages of using an electronic system to switch the primary circuit of the ignition coil are: No mechanical wear is produced at the switching mechanism, reaction time is far quicker than a conventional ignition system that uses contact breakers, greater accuracy is available in the ignition timing, and the system is more reliable."
    },
    {
      question: "What does a transistor in an ignition system allow?",
      options: [
        "It stores electrical energy",
        "It allows the large current to flow through the primary circuit of the ignition coil when triggered by a low voltage signal from engine position sensors",
        "It measures engine temperature",
        "It filters fuel"
      ],
      correct: 1,
      explanation: "Many modern ignition systems use a low voltage signal, triggered by engine position, to switch the base of a transistor unit. This allows the large current to flow through the primary circuit of the ignition coil."
    },
    {
      question: "What is a contact breaker?",
      options: [
        "A tool for breaking glass",
        "A mechanical switch used on early ignition systems to control current flow in the primary circuit. Contact breakers are also sometimes called 'points'",
        "A battery disconnect switch",
        "A fuse"
      ],
      correct: 1,
      explanation: "Contact breakers are a mechanical switch used on early ignition systems to control current flow in the primary circuit. Contact breakers are also sometimes called 'points'."
    },
    {
      question: "What is a transistor?",
      options: [
        "A mechanical switch",
        "An electronic component made from semi-conductive material. It can operate like a switch with no moving parts",
        "A type of spark plug",
        "A fuel injector"
      ],
      correct: 1,
      explanation: "A transistor is an electronic component made from semi-conductive material. It can operate like a switch with no moving parts."
    },
    {
      question: "What is a reluctor?",
      options: [
        "A type of spark plug",
        "A small toothed wheel used in conjunction with an inductive pickup",
        "An oil filter",
        "A cooling fan"
      ],
      correct: 1,
      explanation: "A reluctor is a small toothed wheel used in conjunction with an inductive pickup."
    },
    {
      question: "What is an inductive sensor used to create?",
      options: [
        "Hydraulic pressure",
        "Signals that show engine position by generating a small electric current when its internal magnetic field is disrupted",
        "Fuel pressure",
        "Vacuum"
      ],
      correct: 1,
      explanation: "An inductive sensor is a component that generates a small electric current when its internal magnetic field is disrupted. This small electric current can be used to create signals that show engine position."
    },
    {
      question: "What speed does a reluctor ring normally turn at?",
      options: [
        "Engine speed",
        "Half crankshaft speed",
        "Twice engine speed",
        "Camshaft speed only"
      ],
      correct: 1,
      explanation: "A reluctor ring is a rotating shaft (normally turning at half crankshaft speed) with a number of protrusions or fingers corresponding to the number of cylinders in an engine."
    },
    {
      question: "What happens when a reluctor finger moves away from the pickup in an inductive sensor?",
      options: [
        "The engine stops",
        "Disruption to the magnetic field falls and voltage within the coil of wire also falls to zero. When the reluctor finger moves away from the pickup, the magnetic field is once again disrupted, but this time in the opposite direction so a negative voltage is produced, creating a small alternating current",
        "The fuel pump activates",
        "The cooling fan turns on"
      ],
      correct: 1,
      explanation: "As the reluctor ring rotates, and one of the fingers moves towards the pickup, the magnetic field produced by the permanent magnet is disrupted. When this magnetic field moves across the coil winding of the pickup, it creates a small voltage. As the reluctor finger comes level with the pickup, disruption to the magnetic field falls and voltage within the coil of wire also falls to zero. When the reluctor finger moves away from the pickup, the magnetic field is once again disrupted, but this time in the opposite direction so a negative voltage is produced. This creates a small alternating current within the pickup."
    },
    {
      question: "Why is it far better to use an oscilloscope when testing an inductive sensor rather than a digital multimeter?",
      options: [
        "Oscilloscopes are cheaper",
        "A digital multimeter is too slow to give an accurate indication of correct operation. The display screen will not refresh quickly enough to show the alternating current",
        "Multimeters damage the sensor",
        "Oscilloscopes are easier to read"
      ],
      correct: 1,
      explanation: "A digital multimeter is too slow to give an accurate indication of correct operation when testing an inductive sensor. The display screen will not refresh quickly enough to show the alternating current. It is far better to use an oscilloscope."
    },
    {
      question: "What should you see on an oscilloscope when testing an inductive sensor with the engine being cranked or running?",
      options: [
        "A flat line",
        "An alternating wave form on the screen",
        "A constant 12V trace",
        "Random spikes only"
      ],
      correct: 1,
      explanation: "With the engine being cranked or running, you should see an alternating wave form on the screen."
    },
    {
      question: "What does a Hall effect sensor produce?",
      options: [
        "Hydraulic pressure",
        "A magnetic field when supplied with electric current, which is sensed by a small integrated circuit and produces a signal",
        "Compressed air",
        "Heat"
      ],
      correct: 1,
      explanation: "The Hall effect sensor is a small unit that produces a magnetic field when supplied with electric current. This magnetic field is sensed by a small integrated circuit and a signal is produced."
    },
    {
      question: "How many wires does a Hall effect sensor normally have?",
      options: [
        "Two wires",
        "Three wires: a positive feed, a negative earth, and a signal wire",
        "Four wires",
        "One wire"
      ],
      correct: 1,
      explanation: "As a Hall effect sensor is a passive unit, it relies on the ECU to generate it current. It will normally have three wires: a positive feed, a negative earth, and a signal wire."
    },
    {
      question: "What should you see on an oscilloscope when testing a Hall effect sensor with the engine cranked or running?",
      options: [
        "A sine wave",
        "One wire will produce a flat line at 0V, another will produce a flat line at 5V, and the third should produce an on and off square wave form (digital signal)",
        "Random voltage spikes",
        "A decreasing voltage pattern"
      ],
      correct: 1,
      explanation: "With the engine being cranked or running, one wire will produce a flat line at 0V, another will produce a flat line at 5V, and the third should produce an on and off square wave form (digital signal)."
    },
    {
      question: "What is an integrated circuit?",
      options: [
        "A hydraulic system",
        "A small self-contained electronic circuit on the surface of a microchip",
        "A mechanical linkage",
        "A wiring harness"
      ],
      correct: 1,
      explanation: "An integrated circuit is a small self-contained electronic circuit on the surface of a microchip."
    },
    {
      question: "What is an amplifier in ignition systems?",
      options: [
        "A speaker system",
        "An electronic device that increases the signals passing through it",
        "A fuel pump",
        "A cooling fan"
      ],
      correct: 1,
      explanation: "An amplifier is an electronic device that increases the signals passing through it."
    },
    {
      question: "What is another name for an ignition amplifier?",
      options: [
        "Distributor",
        "Ignition module",
        "Spark plug",
        "Alternator"
      ],
      correct: 1,
      explanation: "Ignition module is another name for an ignition amplifier."
    },
    {
      question: "Why should you never attempt to open ignition amplifiers that are sealed in the factory?",
      options: [
        "They contain valuable metals",
        "During the manufacturing process, dangerous chemicals such as hydrofluoric acid are used, which have the potential to cause serious harm",
        "They are too complex",
        "They are under high pressure"
      ],
      correct: 1,
      explanation: "Many ignition amplifiers are sealed in the factory during production, and you should never attempt to open these up. During the manufacturing process, dangerous chemicals such as hydrofluoric acid are used, which have the potential to cause serious harm."
    },
    {
      question: "What does variable dwell angle mean in electronic ignition systems?",
      options: [
        "The spark plug gap changes",
        "Dwell variation will be minimal when the engine is running, meaning the manufacturer can set an average dwell angle for overall average ignition coil performance",
        "The timing advances rapidly",
        "The fuel mixture changes"
      ],
      correct: 1,
      explanation: "With mechanical contact breakers, the dwell period of the ignition coil is set by the manufacturer's prescribed points gap. Once the engine is running, dwell variation will be minimal. This means that when designing a system, the manufacturer will set an average dwell angle so that, overall, the ignition coil performance is also average."
    },
    {
      question: "What is impedance in electrical terms?",
      options: [
        "Electrical current",
        "A form of electrical resistance",
        "Voltage",
        "Power"
      ],
      correct: 1,
      explanation: "Impedance is a form of electrical resistance."
    },
    {
      question: "What is a constant energy ignition system?",
      options: [
        "A system with fixed timing",
        "A system where the ignition amplifier can limit the current passing through the primary circuit, allowing a low impedance primary winding to give a short charge time but with current limited by the ignition module",
        "A system that uses AC current",
        "A mechanical ignition system"
      ],
      correct: 1,
      explanation: "The ignition amplifier can limit the current passing through the primary circuit of the ignition coil. This means that a low impedance (low resistance) primary winding may be used. This gives a short charge time of the ignition coil, but because current is limited by the ignition module, short or long dwell periods are no longer a problem. Having this ability allows a good-quality spark to be produced at any engine speed. It is commonly known as a constant energy ignition system."
    },
    {
      question: "In computer-controlled electronic ignition, where is the switching mechanism for the primary circuit normally contained?",
      options: [
        "In the distributor",
        "Within the engine management control unit, where it is transistorised and engine position is calculated from crankshaft or camshaft sensors",
        "In the spark plugs",
        "In the fuel pump"
      ],
      correct: 1,
      explanation: "The entire process that operates the primary circuit of the ignition coil may be contained within an engine management control unit. The switching mechanism for the primary circuit is normally still transistorised and engine position is calculated from crankshaft or camshaft sensors."
    },
    {
      question: "What is the secondary circuit in an ignition system?",
      options: [
        "The low voltage circuit",
        "The part of the ignition system that contains very high voltage. It is often referred to as the HT (high tension) circuit",
        "The fuel system",
        "The cooling system"
      ],
      correct: 1,
      explanation: "The secondary circuit is the part of the ignition system that contains very high voltage. It is often referred to as the HT (high tension) circuit."
    },
    {
      question: "How much voltage is normally required to overcome resistances within the high tension circuit?",
      options: [
        "100-500 volts",
        "Voltages in excess of 10,000 volts",
        "12-24 volts",
        "1,000-2,000 volts"
      ],
      correct: 1,
      explanation: "Voltages in excess of 10,000 volts are normally required to overcome resistances within the high tension circuit, including the air gap at the plug."
    }
  ]
};
