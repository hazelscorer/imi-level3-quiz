const quiz23Data = {
  quizTitle: "Quiz 23: Advanced Ignition Systems & Oscilloscope Diagnostics",
  quizSubtitle: "Pages 115-119: Secondary Circuit Testing, Knock Sensors, DIS, Coil on Plug & CDI Systems",
  questions: [
    {
      question: "What display modes do most oscilloscopes offer for viewing multiple cylinders?",
      options: [
        "Forward and reverse only",
        "Single, Parade (one after another), Superimposed (laid over the top of each other), and Raster (displayed one above another)",
        "Only single cylinder view",
        "Split screen only"
      ],
      correct: 1,
      explanation: "Most oscilloscopes give the option of displaying a single cylinder or multiple cylinders on the screen at any one time. These options are described as: Single, Parade (one after another), Superimposed (laid over the top of each other), and Raster (displayed one above another)."
    },
    {
      question: "When using parade mode on an oscilloscope, in what order will the cylinders be displayed?",
      options: [
        "Random order",
        "In firing order from left to right",
        "In reverse firing order",
        "Alphabetically"
      ],
      correct: 1,
      explanation: "If used in parade mode, the cylinders will be displayed in the firing order from left to right."
    },
    {
      question: "When using raster mode on an oscilloscope, in what order will the cylinders normally be displayed?",
      options: [
        "Left to right",
        "In firing order from bottom to top",
        "Top to bottom in reverse order",
        "Random placement"
      ],
      correct: 1,
      explanation: "If used in raster mode, the cylinders will normally be displayed in firing order from bottom to top."
    },
    {
      question: "What does a high firing voltage spike at the start of the firing pattern indicate?",
      options: [
        "The engine is running too cold",
        "A very good indication of cylinder comparison, showing the voltage needed for the spark to jump the gap of the plug",
        "The battery is failing",
        "The fuel mixture is too lean"
      ],
      correct: 1,
      explanation: "A high voltage spike will be produced at the start of the firing pattern (measured in kilovolts on the vertical scale). This is a very good indication of cylinder comparison, showing the voltage needed for the spark to jump the gap of the plug."
    },
    {
      question: "What may high firing voltage indicate?",
      options: [
        "Perfect engine condition",
        "Wide spark plug gaps, large rotor arm to distributor cap gap, break in a plug lead, break in the king lead, worn spark plugs, large reluctor air gap (on inductive pickups), high cylinder compression, or a weak air/fuel mixture",
        "Low fuel pressure only",
        "Battery overcharge"
      ],
      correct: 1,
      explanation: "If cylinders are compared, a high firing voltage may indicate such issues as: wide spark plug gaps, large rotor arm to distributor cap gap, break in a plug lead, break in the king lead, worn spark plugs, large reluctor air gap (on the inductive pickups), high cylinder compression, a weak air/fuel mixture."
    },
    {
      question: "What may low firing voltage indicate when comparing cylinders?",
      options: [
        "Perfect combustion",
        "Small spark plug gap, incorrect ignition timing, voltage tracking to earth, fouled spark plugs, low compression, or a rich air/fuel mixture",
        "High compression only",
        "Wide spark plug gaps"
      ],
      correct: 1,
      explanation: "If the cylinders are compared, a low firing voltage may indicate such issues as: small spark plug gap, incorrect ignition timing, voltage tracking to earth, fouled spark plugs, low compression, a rich air/fuel mixture."
    },
    {
      question: "What is pinking in an engine?",
      options: [
        "A cooling system noise",
        "A small metallic tapping sound created in the engine by over-advanced ignition timing",
        "A fuel pump noise",
        "An alternator whine"
      ],
      correct: 1,
      explanation: "Pinking is a small metallic tapping sound created in the engine by over-advanced ignition timing."
    },
    {
      question: "What can prolonged pinking lead to?",
      options: [
        "Improved fuel economy",
        "Engine damage",
        "Better performance",
        "Reduced emissions"
      ],
      correct: 1,
      explanation: "If the air/fuel mixture inside the combustion chamber ignites early, power will be lost and a small knocking noise called pinking may occur. Over long periods, this can lead to engine damage."
    },
    {
      question: "Where is the knock sensor typically mounted?",
      options: [
        "On the exhaust manifold",
        "High in the cylinder block or on the cylinder head, normally between two cylinders",
        "On the intake manifold",
        "On the valve cover"
      ],
      correct: 1,
      explanation: "To overcome this problem, many engines are fitted with knock sensors. The knock sensor will be mounted high in the cylinder block or on the cylinder head, normally between two cylinders."
    },
    {
      question: "What are piezoelectric crystals in a knock sensor?",
      options: [
        "Decorative elements",
        "A type of crystal that creates a small electrical current when flexed",
        "Cooling elements",
        "Fuel filters"
      ],
      correct: 1,
      explanation: "Piezoelectric crystals are a type of crystal that creates a small electrical current when flexed."
    },
    {
      question: "How does the ECU respond when pinking is detected by the knock sensor?",
      options: [
        "It increases fuel delivery",
        "It will normally retard ignition timing by two degrees. If pinking continues, it will be retarded a further two degrees, and so on until pinking stops",
        "It shuts down the engine",
        "It advances timing further"
      ],
      correct: 1,
      explanation: "If the burn begins too early and pinking occurs, the knocking noise can be interpreted as a small vibration from the engine. Piezoelectric crystals are contained inside the knock sensor, and when pinking occurs, the corresponding voltage output can be translated by the ECU. The ECU will then normally retard ignition timing by two degrees. If pinking continues, it will be retarded a further two degrees, and so on until pinking stops."
    },
    {
      question: "What does DIS stand for?",
      options: [
        "Direct Injection System",
        "Distributorless Ignition System",
        "Diesel Ignition Spark",
        "Digital Interface Sensor"
      ],
      correct: 1,
      explanation: "DIS stands for Distributorless Ignition System. A distributorless ignition system, as the name suggests, is one that no longer requires a distributor in order to send the spark to the correct spark plug at the appropriate time."
    },
    {
      question: "What are the advantages of a distributorless ignition system?",
      options: [
        "Lower cost only",
        "Fewer moving parts, no mechanical timing, less maintenance, no mechanical load on the engine, and increased coil saturation (charge)",
        "Uses less electricity",
        "Produces lower voltages"
      ],
      correct: 1,
      explanation: "The advantages of the system are: fewer moving parts, no mechanical timing, less maintenance, no mechanical load on the engine, increased coil saturation (charge)."
    },
    {
      question: "In a wasted spark system, how many cylinders normally operate in pairs?",
      options: [
        "Three cylinders",
        "Two cylinders (go up and down together)",
        "Four cylinders",
        "All cylinders independently"
      ],
      correct: 1,
      explanation: "As most engines have an even number of cylinders, two cylinders normally operate in pairs (go up and down together). As the pair of companion cylinders move upwards, one will be on its compression stroke while the other will be on its exhaust stroke."
    },
    {
      question: "What is the principle behind wasted spark ignition?",
      options: [
        "Only one cylinder fires at a time",
        "If a spark is provided to both companion cylinders at the same time, one will ignite the fuel and start the power stroke, while the other on the exhaust stroke will be wasted",
        "All cylinders fire simultaneously",
        "Sparks alternate between cylinders"
      ],
      correct: 1,
      explanation: "Wasted spark works on the principle that if a spark is provided to both companion cylinders at the same time, the one on its compression stroke will ignite the fuel and start the power stroke, while the one on the exhaust stroke will be wasted. The next time around, after 360° of crankshaft revolution, the other cylinder will be on its compression stroke and ignite the air/fuel mixture, while its companion will be on its exhaust stroke and the spark will be wasted."
    },
    {
      question: "What type of ignition coil is normally used in a wasted spark system?",
      options: [
        "Single coil for all cylinders",
        "A paired ignition coil to fire a set of companion cylinders",
        "One coil per cylinder",
        "No coils are used"
      ],
      correct: 1,
      explanation: "Normally in this type of system, a paired ignition coil is used to fire a set of companion cylinders."
    },
    {
      question: "What is COP in ignition systems?",
      options: [
        "Computer Operating Program",
        "Coil on plug - a direct ignition system that uses individual coils on top of each spark plug",
        "Compression Operating Pressure",
        "Camshaft Operation Point"
      ],
      correct: 1,
      explanation: "A direct ignition system uses individual coils on the top of each spark plug, often known as 'coil on plug' (COP)."
    },
    {
      question: "In a coil on plug system, what happens if one spark plug fails?",
      options: [
        "The entire system shuts down",
        "Its companion should continue to operate as normal",
        "All spark plugs fail",
        "The engine stops immediately"
      ],
      correct: 1,
      explanation: "Although normally triggered in a wasted spark pattern, as each spark plug has its own ignition coil, if one spark plug fails, its companion should continue to operate as normal."
    },
    {
      question: "What advantage does producing high tension voltage right on top of the spark plug provide in a COP system?",
      options: [
        "Uses less electricity",
        "There is no need for spark plug leads, etc. This reduces overall circuit resistance and creates far less radio interference",
        "Makes the engine quieter",
        "Improves fuel economy"
      ],
      correct: 1,
      explanation: "As the high tension voltage is produced right on top of the spark plug, there is no need for spark plug leads, etc. This reduces overall circuit resistance and creates far less radio interference. (As high voltage travels along a plug lead, it gives off an electromagnetic wave that will affect radio reception.)"
    },
    {
      question: "What does CDI stand for?",
      options: [
        "Computer Direct Injection",
        "Capacitor Discharge Ignition",
        "Cylinder Diagnostic Interface",
        "Combustion Detection Indicator"
      ],
      correct: 1,
      explanation: "CDI stands for Capacitor Discharge Ignition."
    },
    {
      question: "What is a capacitor in electrical terms?",
      options: [
        "A device that produces electricity",
        "A temporary storage for electric charge",
        "A type of spark plug",
        "A fuel injector"
      ],
      correct: 1,
      explanation: "A capacitor is a temporary storage for electric charge."
    },
    {
      question: "What voltage is 12V stepped up to in a CDI system to charge the capacitor?",
      options: [
        "240V",
        "Around 400V",
        "1000V",
        "24V"
      ],
      correct: 1,
      explanation: "In a CDI system, 12V is initially stepped up to around 400V and this is used to charge a capacitor."
    },
    {
      question: "In a wasted spark system, which cylinder is known as the 'event' cylinder?",
      options: [
        "The cylinder with the highest compression",
        "The cylinder on the compression stroke (as it is under compression, has air/fuel mixture, etc., its firing voltage will be high)",
        "The cylinder nearest the front of the engine",
        "The cylinder with the lowest temperature"
      ],
      correct: 1,
      explanation: "The cylinder on the compression stroke is known as the 'event' cylinder. As it is under compression, has air/fuel mixture, etc., its firing voltage will be high."
    },
    {
      question: "In a wasted spark system, which cylinder is known as the 'wasted' cylinder?",
      options: [
        "The cylinder with a faulty spark plug",
        "The cylinder on its exhaust stroke (as it is not under compression, and is expelling exhaust gas through the exhaust valve, its firing voltage will be low)",
        "The cylinder with low compression",
        "The last cylinder in the firing order"
      ],
      correct: 1,
      explanation: "The cylinder on its exhaust stroke is known as the 'wasted' cylinder. As it is not under compression, and is expelling exhaust gas through the exhaust valve, its firing voltage will be low."
    },
    {
      question: "After 360° of crankshaft revolution in a wasted spark system, what happens to the event and waste cylinders?",
      options: [
        "They remain the same",
        "The event and waste will swap over, and so will the firing voltages",
        "The engine stops",
        "Both cylinders fire simultaneously"
      ],
      correct: 1,
      explanation: "After 360° of crankshaft revolution, the event and waste will swap over, and so will the firing voltages. Although the firing voltages will be constantly rising and falling, you can analyse the patterns in the same way as described for secondary wave forms (see page 116)."
    }
  ]
};
