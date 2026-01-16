const quiz20Data = {
  quizTitle: "Quiz 20: Engine Diagnostic Testing & Measurement Procedures",
  quizSubtitle: "Pages 100-104: Compression Testing, Leakdown Testing, Smoke Testing & Engine Measurement",
  questions: [
    {
      question: "What is a tachometer?",
      options: [
        "A tool for measuring oil pressure",
        "A piece of diagnostic equipment that measures engine speed",
        "A device for checking coolant temperature",
        "A gauge for measuring fuel pressure"
      ],
      correct: 1,
      explanation: "A tachometer is a piece of diagnostic equipment that measures engine speed."
    },
    {
      question: "In compression testing, what is a wet test?",
      options: [
        "Testing in rainy conditions",
        "Where oil is used during a compression test",
        "Testing with coolant present",
        "Testing with the engine running"
      ],
      correct: 1,
      explanation: "A wet test is where oil is used during a compression test."
    },
    {
      question: "What is a dry test in compression testing?",
      options: [
        "Testing in hot weather",
        "Where no oil is used during a compression test",
        "Testing without coolant",
        "Testing with compressed air"
      ],
      correct: 1,
      explanation: "A dry test is where no oil is used during a compression test."
    },
    {
      question: "When conducting a compression test, what should you do once the gauge is attached to a cylinder?",
      options: [
        "Start the engine and let it idle",
        "Crank the engine with the throttle held wide open, continue to crank for a short period until maximum reading is shown on the gauge",
        "Rev the engine to maximum RPM",
        "Turn off all electrical systems"
      ],
      correct: 1,
      explanation: "Once the gauge is attached to a cylinder, crank the engine with the throttle held wide open. Continue to crank the engine for a short period, until the maximum reading is shown on the gauge. Record the reading and compare the figure with the manufacturer's specifications. Repeat the procedure for the remaining cylinders. This is known as a dry test."
    },
    {
      question: "What does introducing oil during a wet compression test help diagnose?",
      options: [
        "Valve timing issues",
        "Whether leakage is occurring down past the piston and rings",
        "Fuel system problems",
        "Ignition timing"
      ],
      correct: 1,
      explanation: "Using an oil can, introduce a small amount of oil to the cylinder down the plug hole and repeat the compression test. Record the results and compare with the original readings. This is known as a wet test. During a wet compression test, the oil can often sit on top of the piston crown and form a temporary compression seal around the top piston ring."
    },
    {
      question: "What does it indicate if the wet test shows an increase in compression pressure over a dry test?",
      options: [
        "The head gasket is leaking",
        "The leakage is occurring down past the piston and rings",
        "The valves are burnt",
        "The timing chain has failed"
      ],
      correct: 1,
      explanation: "If the wet test shows an increase in compression pressure over a dry test, this can indicate that the leakage is occurring down past the piston and rings."
    },
    {
      question: "What does it indicate if the compression pressure stays low during both wet and dry tests?",
      options: [
        "The piston rings are worn",
        "The leakage may be coming from the cylinder head or valve area",
        "The oil pump has failed",
        "The fuel injectors are faulty"
      ],
      correct: 1,
      explanation: "If the compression pressure stays low, this can indicate that the leakage may be coming from the cylinder head or valve area."
    },
    {
      question: "What is a cylinder leakdown tester?",
      options: [
        "A tool for measuring oil consumption",
        "A tool consisting of a pressure gauge, regulator and adapter which is screwed into the spark plug or injector hole to help diagnose compression leakage within a cylinder",
        "A device for testing fuel pressure",
        "Equipment for checking coolant flow"
      ],
      correct: 1,
      explanation: "A cylinder leakdown tester is a tool that you can use to help diagnose compression leakage within a cylinder. It consists of a pressure gauge, regulator and adapter which is screwed into the spark plug or injector hole in the engine."
    },
    {
      question: "Before conducting a leakdown test, what must be done with the engine?",
      options: [
        "The engine should be running at idle",
        "Rotate the engine until the cylinder to be tested is on its compression stroke and the inlet and exhaust valve are both closed",
        "The engine should be at maximum RPM",
        "Remove all spark plugs except one"
      ],
      correct: 1,
      explanation: "Rotate the engine until the cylinder to be tested is on its compression stroke and the inlet and exhaust valve are both closed."
    },
    {
      question: "How can you lock the crankshaft to prevent it turning during a leakdown test?",
      options: [
        "By removing the battery",
        "You can do this physically or by placing the car in gear and applying the handbrake",
        "By disconnecting the starter motor",
        "By draining the oil"
      ],
      correct: 1,
      explanation: "Lock the crankshaft to prevent it turning. You can do this physically or by placing the car in gear and applying the handbrake."
    },
    {
      question: "What does the leakdown tester gauge indicate?",
      options: [
        "The engine oil temperature",
        "If a significant difference in pressure exists in the cylinder when compared with the pressure introduced by the compressed air; if there is a pressure difference, then cylinder leakage may have occurred",
        "The fuel pressure level",
        "The coolant temperature"
      ],
      correct: 1,
      explanation: "The gauge can indicate if a significant difference in pressure exists in the cylinder when compared with the pressure introduced by the compressed air. If there is a pressure difference, then cylinder leakage may have occurred."
    },
    {
      question: "If you hear air leaking from the exhaust pipe during a leakdown test, what does this indicate?",
      options: [
        "The piston rings are worn",
        "The exhaust valve is leaking",
        "The head gasket is blown",
        "The intake manifold is cracked"
      ],
      correct: 1,
      explanation: "Listen for air leaking from the exhaust pipe: this is an indication that the exhaust valve is leaking."
    },
    {
      question: "What does air leaking from the intake manifold during a leakdown test indicate?",
      options: [
        "The exhaust valve is leaking",
        "The inlet valve is leaking",
        "The piston is cracked",
        "The oil pump has failed"
      ],
      correct: 1,
      explanation: "Listen for air leaking from the intake manifold (remove the air filter housing): this is an indication that the inlet valve is leaking."
    },
    {
      question: "What does air leaking from the dipstick tube or cam/rocker cover indicate?",
      options: [
        "The valves are leaking",
        "Pressure is leaking down past the piston",
        "The head gasket has failed",
        "The timing belt is broken"
      ],
      correct: 1,
      explanation: "Listen for air leaking from the dipstick tube or the cam/rocker cover: this is an indication that pressure is leaking down past the piston."
    },
    {
      question: "How can you check for leakage past the head gasket or cylinder head during a leakdown test?",
      options: [
        "By checking the oil level",
        "Remove the cooling system pressure cap, and check for bubbles in the engine coolant: this is an indication that pressure is leaking past the head gasket or cylinder head",
        "By measuring exhaust emissions",
        "By checking spark plug condition"
      ],
      correct: 1,
      explanation: "Remove the cooling system pressure cap, and check for bubbles in the engine coolant: this is an indication that pressure is leaking past the head gasket or cylinder head."
    },
    {
      question: "What is a smoke generator used for in engine diagnostics?",
      options: [
        "To test exhaust emissions",
        "A tool to help diagnose engine system leakage by heating a chemical or oil in the smoke generator to produce pressurised smoke that can be connected to various engine systems",
        "To clean the intake system",
        "To test turbocharger operation"
      ],
      correct: 1,
      explanation: "A smoke generator is a tool that you can use to help diagnose engine system leakage. A chemical or oil is heated in the smoke generator, which then produces pressurised smoke from a pipe that can be connected to various engine systems."
    },
    {
      question: "How do you check for an inlet system leak using a smoke generator?",
      options: [
        "Connect it to the exhaust system",
        "Remove a vacuum pipe from the inlet manifold and connect the smoke generator, then block the air inlet using special bungs and look for signs of leakage",
        "Spray it on the outside of the engine",
        "Connect it to the cooling system"
      ],
      correct: 1,
      explanation: "To check for an inlet system leak, remove a vacuum pipe from the inlet manifold and connect the smoke generator. Then block the air inlet using special bungs. Once the smoke has been introduced to the inlet system, you can then look for any signs of leakage that may cause engine running problems."
    },
    {
      question: "What is a cylinder block tester used to diagnose?",
      options: [
        "Fuel system leaks",
        "Compression leakage past the cylinder head gasket into the cooling system",
        "Electrical faults",
        "Transmission problems"
      ],
      correct: 1,
      explanation: "A cylinder block tester is a tool which you can use to help diagnose compression leakage past the cylinder head gasket into the cooling system."
    },
    {
      question: "What happens to the chemical liquid in a cylinder block tester if hydrocarbons from exhaust gases are present?",
      options: [
        "It turns red",
        "If the chemical liquid changes colour, it indicates the existence of hydrocarbons from exhaust gases",
        "It becomes warm",
        "It evaporates"
      ],
      correct: 1,
      explanation: "You will need to fill a container with a special chemical and place it in the neck of the cooling system radiator or expansion tank. Once the engine has reached its normal operating temperature, use a hand pump to draw the fumes given off in the cooling system through the liquid. If the chemical liquid changes colour, it indicates the existence of hydrocarbons from exhaust gases. These hydrocarbons will normally have leaked from the combustion process inside an engine cylinder past the head gasket."
    },
    {
      question: "What is endoscopy used for in engine diagnostics?",
      options: [
        "To measure oil pressure",
        "To visually inspect for damage inside an engine before the engine is stripped down by inserting a small camera",
        "To test electrical systems",
        "To measure compression"
      ],
      correct: 1,
      explanation: "Endoscopy normally involves inserting a small camera inside an engine to visually inspect for damage before the engine is stripped down. For example, you can put an illuminated probe with the camera attached down a spark plug hole, and use the image shown on the computer screen to check for physical engine damage."
    },
    {
      question: "In the case study, what should be the first step when a customer brings in a car with engine problems?",
      options: [
        "Start stripping down the engine immediately",
        "Listen to the customer's description of the fault",
        "Replace all spark plugs",
        "Change the oil"
      ],
      correct: 1,
      explanation: "The case study shows the systematic diagnostic process starts with: Listen to the customer's description of the fault, Question the customer carefully to find out the symptoms, Carry out a visual inspection and check fluid levels, etc."
    },
    {
      question: "According to the case study, what is the '10-minute rule' in diagnostics?",
      options: [
        "Complete all repairs in 10 minutes",
        "Check the quick things first and conduct a visual inspection of engine components",
        "Run the engine for exactly 10 minutes",
        "Take a 10-minute break before starting"
      ],
      correct: 1,
      explanation: "The case study checklist includes: Check the quick things first (10-minute rule) and conduct a visual inspection of engine components."
    },
    {
      question: "What is 'up-stand' in relation to engine measurement?",
      options: [
        "The height of the engine block",
        "The amount that a cylinder liner protrudes above the level of the block",
        "The distance between cylinders",
        "The piston stroke length"
      ],
      correct: 1,
      explanation: "Up-stand is the amount that a cylinder liner protrudes above the level of the block."
    },
    {
      question: "What tool is used to measure piston/liner up-stand at TDC?",
      options: [
        "Vernier gauge",
        "Depth micrometer",
        "Bore gauge",
        "Feeler gauge"
      ],
      correct: 1,
      explanation: "According to Table 3.5, a depth micrometer is used for measuring piston/liner up-stand at TDC."
    },
    {
      question: "What tool is used to measure crankshaft shell bearing clearance?",
      options: [
        "Bore gauge",
        "Plastigauge",
        "Dial test indicator",
        "Feeler gauge"
      ],
      correct: 1,
      explanation: "According to Table 3.5, Plastigauge is used to measure crankshaft shell bearing clearance."
    }
  ]
};
