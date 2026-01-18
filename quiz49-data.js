const quizData = {
  quizNumber: 49,
  title: "SRS Diagnosis Case Study & Assessment Preparation",
  pageNumbers: "244-248",
  questions: [
    {
      question: "In the case study, what is Mr Khan's complaint about his car?",
      options: [
        "The engine won't start",
        "The SRS warning light on the dashboard stays on and has been like that for six days",
        "The brakes are not working",
        "The steering is loose"
      ],
      correctAnswer: 1,
      explanation: "Mr Khan brings his car into your garage and complains that the SRS warning light on the dashboard stays on. He says it's been like that for six days and he's never had a problem before. This indicates a fault in the supplementary restraint system that needs diagnosis."
    },
    {
      question: "What is the first step in diagnosing Mr Khan's SRS problem?",
      options: [
        "Replace the airbag immediately",
        "Listen to the customer's description of the fault",
        "Disconnect the battery",
        "Order new parts"
      ],
      correctAnswer: 1,
      explanation: "The first step listed in the case study is to listen to the customer's description of the fault. This initial information gathering is crucial for effective diagnosis and helps establish what symptoms are present."
    },
    {
      question: "According to the case study, what should you do after gathering information from technical manuals?",
      options: [
        "Start replacing parts",
        "Devise a diagnostic strategy",
        "Call the manufacturer",
        "Close the job"
      ],
      correctAnswer: 1,
      explanation: "After gathering information from technical manuals (including how to retrieve fault codes), you should devise a diagnostic strategy. This systematic approach ensures efficient and effective diagnosis."
    },
    {
      question: "What is the '10-minute rule' mentioned in the case study?",
      options: [
        "Complete the repair in 10 minutes",
        "Check the quick things first and carry out a visual inspection of airbag components and connections",
        "Wait 10 minutes before starting work",
        "Test drive for 10 minutes"
      ],
      correctAnswer: 1,
      explanation: "Check the quick things first (10-minute rule) and carry out a visual inspection of airbag components and connections. This efficient approach can often identify obvious problems before conducting more complex diagnostic procedures."
    },
    {
      question: "What fault code does the scan tool reveal in the case study?",
      options: [
        "P0420 Catalyst efficiency",
        "001C Airbag driver's side, resistance too high",
        "P0300 Random misfire",
        "B1234 Door module fault"
      ],
      correctAnswer: 1,
      explanation: "Using a scan tool, read the diagnostic trouble codes (001C Airbag driver's side, resistance too high). This specific code indicates a problem with the driver's side airbag circuit having excessive resistance."
    },
    {
      question: "After recording and clearing the fault codes, what should you do to confirm the diagnosis?",
      options: [
        "Immediately replace the airbag",
        "Road test the car and re-scan to check that the code has returned",
        "Return the car to the customer",
        "Reset the entire system"
      ],
      correctAnswer: 1,
      explanation: "Road test the car and re-scan to check that the code has returned. (Code 001C Airbag driver's side, resistance too high, has returned.) This verification step confirms the fault is persistent and not a one-time error."
    },
    {
      question: "What should be done after installing a diagnostic resistor in place of the airbag?",
      options: [
        "Start the engine",
        "Test the circuit by installing a diagnostic resistor in place of the airbag and clearing the trouble code; if the code clears and the warning light switches off, this confirms the diagnosis",
        "Remove the steering wheel",
        "Disconnect the battery permanently"
      ],
      correctAnswer: 1,
      explanation: "Test the circuit by installing a diagnostic resistor in place of the airbag and clearing the trouble code. (The code clears and the warning light switches off.) This confirms the diagnosis that the airbag itself is faulty, not the wiring or other components."
    },
    {
      question: "What safety procedure must be followed before removing the driver's airbag?",
      options: [
        "Start the engine",
        "Wearing appropriate PPE, remove the driver's airbag and store it face up in your company's explosives cabinet",
        "Honk the horn",
        "Turn on all the lights"
      ],
      correctAnswer: 1,
      explanation: "Wearing appropriate PPE, remove the driver's airbag and store it face up in your company's explosives cabinet. Inform others that there is an undeployed airbag in the cabinet. This ensures safety when handling the pyrotechnic device."
    },
    {
      question: "According to the recording information table, what should you do before you start work?",
      options: [
        "Order all parts immediately",
        "Record customer/vehicle details on the job card, make a note of the customer's repair request and any issues/symptoms, and locate any service or repair history",
        "Complete the repair first",
        "Test drive the vehicle"
      ],
      correctAnswer: 1,
      explanation: "Before you start: Record customer/vehicle details on the job card. Make a note of the customer's repair request and any issues/symptoms. Locate any service or repair history. This documentation is essential for proper record keeping and efficient diagnosis."
    },
    {
      question: "What recommendations should be made to the customer before starting work?",
      options: [
        "Come back next month",
        "Advise the customer how long you will require the car and describe any legal, environmental or warranty requirements",
        "Buy a new car",
        "Ignore the problem"
      ],
      correctAnswer: 1,
      explanation: "Before starting, recommendations include: Advise the customer how long you will require the car. Describe any legal, environmental or warranty requirements. This sets clear expectations and ensures compliance."
    },
    {
      question: "During diagnosis and repair, what should you record on the job card?",
      options: [
        "Only the final result",
        "Carry out diagnostic checks and record the results on the job card or as a printout from specialist equipment; list the parts required to conduct a repair; note down any other non-critical faults found during diagnosis",
        "Nothing until the job is complete",
        "Only the customer's contact information"
      ],
      correctAnswer: 1,
      explanation: "During diagnosis and repair: Carry out diagnostic checks and record the results on the job card or as a printout from specialist equipment. List the parts required to conduct a repair. Note down any other non-critical faults found during your diagnosis. This comprehensive documentation ensures proper record keeping."
    },
    {
      question: "What recommendation should be made to your supervisor during diagnosis and repair?",
      options: [
        "Skip the repair",
        "Inform your supervisor of the required repair procedures so that they can contact the customer and gain authorisation for the work to be conducted",
        "Complete the work without authorization",
        "Order parts without approval"
      ],
      correctAnswer: 1,
      explanation: "Inform your supervisor of the required repair procedures so that they can contact the customer and gain authorisation for the work to be conducted. This ensures proper communication and customer approval before proceeding."
    },
    {
      question: "When the task is complete, what should be recorded on the job card?",
      options: [
        "Only the customer's signature",
        "Write a brief description of the work undertaken; record your time spent and the parts used during the diagnosis and repair; complete any service history as required",
        "Nothing - just hand back the keys",
        "Only the total cost"
      ],
      correctAnswer: 1,
      explanation: "When the task is complete: Write a brief description of the work undertaken. Record your time spent and the parts used during the diagnosis and repair on the job card. (This information should be as comprehensive as possible because it will be used to produce the customer's invoice.) Complete any service history as required."
    },
    {
      question: "What recommendations should be made to the customer when the task is complete?",
      options: [
        "Come back if problems persist",
        "Inform the customer if the vehicle will need to be returned for any further work and advise the customer of any other issues you noticed during the repair",
        "No recommendations needed",
        "Sell them a new vehicle"
      ],
      correctAnswer: 1,
      explanation: "When complete, recommendations include: Inform the customer if the vehicle will need to be returned for any further work. Advise the customer of any other issues you noticed during the repair. This ensures customer satisfaction and addresses all concerns."
    },
    {
      question: "According to the Final Check, an inductive ammeter is NOT suitable for conducting which type of test?",
      options: [
        "Slow cranking",
        "Parasitic drain",
        "Alternator voltage output",
        "Glow plug operation"
      ],
      correctAnswer: 1,
      explanation: "An inductive ammeter is not suitable for conducting parasitic drain tests. Parasitic drain testing requires measuring very small currents (often milliamps), which an inductive ammeter cannot accurately measure. A multimeter in series is better suited for this test."
    },
    {
      question: "In which year did diesel cars have to be E-OBD compliant?",
      options: [
        "2000",
        "2001",
        "2003",
        "2005"
      ],
      correctAnswer: 2,
      explanation: "Diesel cars had to be E-OBD compliant from 2003. (Petrol cars had to be compliant from 2001.) E-OBD (European On-Board Diagnostics) standardized diagnostic systems across vehicles."
    },
    {
      question: "Which of the following is NOT a multiplex network type?",
      options: [
        "Delta",
        "Star",
        "Daisy chain",
        "Bus"
      ],
      correctAnswer: 3,
      explanation: "Bus is not a multiplex network type. The main multiplex network types are: delta, star, and daisy chain. Bus refers to the communication line itself (like CAN bus), not the network topology."
    },
    {
      question: "What does the acronym CAN stand for?",
      options: [
        "Controller area network",
        "Combined area network",
        "Composite area network",
        "Common area network"
      ],
      correctAnswer: 0,
      explanation: "CAN stands for controller area network. This is a robust vehicle bus standard designed to allow microcontrollers and devices to communicate with each other without a host computer."
    },
    {
      question: "Which type of gas is commonly found in an HID bulb?",
      options: [
        "Argon",
        "Hydrogen",
        "Nitrogen",
        "Xenon"
      ],
      correctAnswer: 3,
      explanation: "Xenon is the gas commonly found in an HID (High Intensity Discharge) bulb. Xenon gas produces a bright, white light when electricity arcs through it, making these bulbs much brighter than traditional halogen bulbs."
    },
    {
      question: "How many satellites are used for worldwide GPS coverage?",
      options: [
        "36",
        "24",
        "12",
        "6"
      ],
      correctAnswer: 1,
      explanation: "24 satellites are used for worldwide GPS coverage. These satellites orbit at approximately 12,000 miles (19,300 km) altitude and complete two orbits per day, ensuring global coverage at all times."
    },
    {
      question: "Which of the following is NOT a type of electronic security device?",
      options: [
        "Steering lock",
        "Immobiliser",
        "Siren/alarm",
        "Doppler radar"
      ],
      correctAnswer: 0,
      explanation: "Steering lock is not an electronic security device - it is a physical/mechanical security device. Electronic security devices include immobilisers, sirens/alarms, and Doppler radar systems which all use electronic components to provide security."
    },
    {
      question: "Which of the following is an active safety system?",
      options: [
        "Airbags",
        "Seatbelt pre-tensioners",
        "ABS (Anti-lock Braking System)",
        "Crumple zones"
      ],
      correctAnswer: 2,
      explanation: "ABS (Anti-lock Braking System) is an active safety system. Active safety systems attempt to prevent an accident occurring in the first place. Airbags, seatbelt pre-tensioners, and crumple zones are passive safety systems that protect occupants during an accident."
    },
    {
      question: "Which tool is safe to use for SRS diagnosis?",
      options: [
        "Oscilloscope",
        "Scan tool",
        "Ohmmeter",
        "Power probe"
      ],
      correctAnswer: 1,
      explanation: "Scan tool is safe to use for SRS diagnosis. Oscilloscopes, ohmmeters, and power probes should not be used as they can produce small electric currents which could accidentally deploy the SRS system. Specialized diagnostic scan tools are designed specifically for safe SRS diagnosis."
    },
    {
      question: "What is the normal operating voltage of a hybrid vehicle electrical drive system?",
      options: [
        "0 to 12 volts",
        "24 to 48 volts",
        "100 to 300 volts",
        "500 to 1000 volts"
      ],
      correctAnswer: 2,
      explanation: "The normal operating voltage of a hybrid vehicle electrical drive system is 100 to 300 volts. This high voltage system powers the electric motor and is completely separate from the conventional 12-volt electrical system. Special safety precautions must be taken when working on hybrid systems."
    },
    {
      question: "According to the assessment preparation section, what is an example of workplace observation evidence?",
      options: [
        "A written test result",
        "Carrying out a two-stage diagnosis on an electrical auxiliary system",
        "A photograph of the repair",
        "A customer invoice"
      ],
      correctAnswer: 1,
      explanation: "Workplace observation by a qualified assessor involves carrying out a two-stage diagnosis on an electrical auxiliary system. This demonstrates practical competence in real working conditions under direct observation by a qualified assessor."
    }
  ]
};
