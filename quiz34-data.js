const quizData = [
    {
        question: "What is the approximate volumetric efficiency of a naturally aspirated engine?",
        options: [
            "50%",
            "80%",
            "100%",
            "120%"
        ],
        correct: 1,
        explanation: "The approximate volumetric efficiency of a naturally aspirated engine is 80%."
    },
    {
        question: "Which of the following valve control systems can vary how far the valve opens?",
        options: [
            "VVTi",
            "VANOS",
            "VTEC",
            "VVC"
        ],
        correct: 3,
        explanation: "VVC (Variable Valve Control) can vary how far the valve opens."
    },
    {
        question: "A timing belt has broken after 30,000 miles. Which is the LEAST likely to have caused the failure?",
        options: [
            "Belt too loose",
            "Belt manufacturing fault",
            "Oil contamination",
            "Worn tensioner pulley bearing"
        ],
        correct: 0,
        explanation: "Belt too loose is the least likely cause of failure after 30,000 miles. Manufacturing faults, oil contamination, and worn tensioner pulley bearings are more likely causes."
    },
    {
        question: "When conducting a leakdown test, the most likely cause of air leaking from the dipstick tube is:",
        options: [
            "Damaged piston rings",
            "Damaged exhaust valve",
            "Damaged inlet valve",
            "Damaged head gasket"
        ],
        correct: 0,
        explanation: "Air leaking from the dipstick tube during a leakdown test indicates damaged piston rings."
    },
    {
        question: "Which is the most appropriate tool for measuring crankshaft bearing clearance?",
        options: [
            "Internal micrometer",
            "Bore gauge",
            "Vernier gauge",
            "Plastigauge"
        ],
        correct: 3,
        explanation: "Plastigauge is the most appropriate tool for measuring crankshaft bearing clearance."
    },
    {
        question: "Which is the most appropriate tool for checking the correct operation of an inductive engine speed sensor?",
        options: [
            "Test lamp",
            "Noid light",
            "Laser thermometer",
            "Oscilloscope"
        ],
        correct: 3,
        explanation: "An oscilloscope is the most appropriate tool for checking the correct operation of an inductive engine speed sensor."
    },
    {
        question: "Which of the following is NOT a type of waveform display for secondary ignition?",
        options: [
            "Overview",
            "Parade",
            "Raster",
            "Superimposed"
        ],
        correct: 0,
        explanation: "Overview is not a type of waveform display for secondary ignition. The three types are parade, raster, and superimposed."
    },
    {
        question: "Which of the following terms only relates to the combustion of diesel fuel?",
        options: [
            "Flame travel",
            "Detonation",
            "Flash point",
            "Cetane value"
        ],
        correct: 3,
        explanation: "Cetane value is a term that only relates to the combustion of diesel fuel."
    },
    {
        question: "At approximately what temperature does a standard lambda sensor begin to operate correctly?",
        options: [
            "300°C",
            "100°C",
            "20°C",
            "600°C"
        ],
        correct: 0,
        explanation: "A standard lambda sensor begins to operate correctly at approximately 300°C."
    },
    {
        question: "Which of the following is NOT a phase of injection on a high pressure common rail diesel engine?",
        options: [
            "Post injection",
            "Common injection",
            "Pilot injection",
            "Main injection"
        ],
        correct: 1,
        explanation: "Common injection is not a phase of injection. The three phases are pilot injection, main injection, and post injection."
    },
    {
        question: "What areas should you be familiar with to prepare for assessment?",
        options: [
            "Only diagnostic tooling",
            "Diagnostic tooling, electrical and electronic principles, diagnostic planning and preparation, SI fuel systems (petrol), CI fuel systems (diesel), ignition systems, engine management, valve mechanisms, pressure-charged induction systems, exhaust emission reduction systems, alternative fuel vehicles, and heating, ventilation and cooling",
            "Only engine management",
            "Only fuel systems"
        ],
        correct: 1,
        explanation: "You need to be familiar with all the listed areas including diagnostic tooling, electrical principles, fuel systems, ignition systems, engine management, valve mechanisms, induction systems, emission systems, alternative fuels, and climate control."
    },
    {
        question: "What type of evidence is 'carrying out a two-stage diagnosis on an engine mechanical system'?",
        options: [
            "Witness testimony",
            "Workplace observation by a qualified assessor",
            "Computer-based",
            "Audio recording"
        ],
        correct: 1,
        explanation: "Carrying out a two-stage diagnosis on an engine mechanical system is an example of workplace observation by a qualified assessor."
    },
    {
        question: "What type of evidence is 'a signed statement from a suitably qualified/approved witness stating that you have correctly tested and reset a turbocharger wastegate mechanism'?",
        options: [
            "Workplace observation",
            "Witness testimony",
            "Computer-based",
            "Personal statement"
        ],
        correct: 1,
        explanation: "A signed statement from a qualified witness is an example of witness testimony evidence."
    },
    {
        question: "What type of evidence is 'a printout from a diagnostic scan tool showing the results from a system test to check the function of an electronic fuel injection system'?",
        options: [
            "Witness testimony",
            "Video recording",
            "Computer-based",
            "Professional discussion"
        ],
        correct: 2,
        explanation: "A printout from a diagnostic scan tool is an example of computer-based evidence."
    },
    {
        question: "What type of evidence is 'a timed and dated audio recording of you describing the process involved when checking the pressures found in an air-conditioning system'?",
        options: [
            "Video recording",
            "Audio recording",
            "Oral questioning",
            "Personal statement"
        ],
        correct: 1,
        explanation: "A timed and dated audio recording describing a process is audio recording evidence."
    },
    {
        question: "What type of evidence is 'short video clips showing you carrying out the various stages involved in an exhaust gas analysis to check for correct and legal engine operation'?",
        options: [
            "Photographic recording",
            "Audio recording",
            "Video recording",
            "Computer-based"
        ],
        correct: 2,
        explanation: "Short video clips showing work stages are video recording evidence."
    },
    {
        question: "What type of evidence is 'photographs showing you carrying out the stages of an engine mechanical system strip down and overhaul'?",
        options: [
            "Video recording",
            "Photographic recording",
            "Computer-based",
            "Workplace observation"
        ],
        correct: 1,
        explanation: "Photographs showing work stages are photographic recording evidence. These are particularly useful when the assessor cannot be present for the entire observation as the process may take several days to complete."
    },
    {
        question: "What type of evidence is 'a written answer to an end-of-unit test to check your knowledge and understanding of light vehicle engine systems'?",
        options: [
            "Multiple-choice tests",
            "Written tests",
            "Oral questioning",
            "Personal statement"
        ],
        correct: 1,
        explanation: "A written answer to an end-of-unit test is written tests evidence."
    },
    {
        question: "What should you do before attempting a theory end-of-unit or multiple-choice test?",
        options: [
            "Skip reviewing",
            "Review and revise key terms, read all questions carefully, take time to digest the information, and read all answers carefully as two may be very similar",
            "Rush through it",
            "Only read the first answer"
        ],
        correct: 1,
        explanation: "Before attempting a theory test, you should review and revise key terms, read all questions carefully, take time to digest the information, and read all answers carefully as it is common for two answers to be very similar, which may lead to confusion."
    },
    {
        question: "What safety precautions should you take when undertaking practical assessments on light vehicle engine systems?",
        options: [
            "Work quickly without checking",
            "Ignore safety requirements",
            "Always check that the engine is cold where possible and remove all sources of ignition, observe all health and safety requirements, use recommended PPE and vehicle protective equipment (VPE), and use tools correctly and safely",
            "Only wear PPE"
        ],
        correct: 2,
        explanation: "When undertaking practical assessments, light vehicle engine systems are dangerous and pose a potential risk of fire. Precautions include: always check that the engine is cold where possible and remove all sources of ignition, observe all health and safety requirements, use the recommended personal protective equipment (PPE) and vehicle protective equipment (VPE), and use tools correctly and safely."
    }
];
