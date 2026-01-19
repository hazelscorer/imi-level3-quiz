const quizData = {
  quizNumber: 60,
  title: "Transmission Systems Review & Assessment",
  pageNumbers: "300-302",
  questions: [
    {
      question: "A CBW (clutch by wire) system operates using:",
      options: [
        "Cables",
        "Rods",
        "Electronics",
        "Pneumatics"
      ],
      correctAnswer: 2,
      explanation: "A CBW (clutch by wire) system operates using electronics. In this system, the physical connection between the pedal and clutch components has been removed and replaced with electronic control via sensors and an ECU."
    },
    {
      question: "Which of the following is NOT a function of a dual mass flywheel (DMF)?",
      options: [
        "Eliminates gear shift rattle",
        "Reduces gear change frequency",
        "Lower tickovers can be used",
        "A clutch is no longer needed"
      ],
      correctAnswer: 3,
      explanation: "A clutch is still needed with a dual mass flywheel. The DMF's functions include: eliminating gear shift rattle, reducing gear change frequency, and allowing lower tickovers to be used. It does not eliminate the need for a clutch."
    },
    {
      question: "The maximum torque multiplication in a torque converter is around:",
      options: [
        "2.2:1",
        "1:1",
        "4:1",
        "14.7:1"
      ],
      correctAnswer: 0,
      explanation: "The maximum torque multiplication in a torque converter is around 2.2:1. This occurs at stall, when there is the greatest difference in speed between the impeller and the turbine, typically when the vehicle is starting to pull away."
    },
    {
      question: "In a manual gearbox, as speed increases:",
      options: [
        "Torque increases",
        "Torque reduces",
        "Torque remains the same",
        "There is no torque"
      ],
      correctAnswer: 1,
      explanation: "In a manual gearbox, as speed increases, torque reduces. This is because higher gears have lower gear ratios, which multiply torque less but increase speed more."
    },
    {
      question: "In a hybrid vehicle, the greatest amount of torque from the electric motor occurs:",
      options: [
        "Starting from rest",
        "At top speed",
        "At the same time as in a petrol engine",
        "At the same time as in a diesel engine"
      ],
      correctAnswer: 0,
      explanation: "In a hybrid vehicle, the greatest amount of torque from the electric motor occurs starting from rest. Electric motors deliver maximum torque immediately from zero RPM, which complements the petrol engine that gives its greatest amount of torque at speed."
    },
    {
      question: "In a sequential gearbox, what prevents two gears being selected at once?",
      options: [
        "Detent mechanism",
        "Hydraulics",
        "Interlock mechanism",
        "Selector drum"
      ],
      correctAnswer: 3,
      explanation: "In a sequential gearbox, the selector drum prevents two gears being selected at once. The grooves on the surface of the selector drum are designed so that as one gear is disengaged, another is engaged, removing the need for a separate interlock device."
    },
    {
      question: "A DCS (dual clutch seamless shift) system has:",
      options: [
        "One clutch pack",
        "Two clutch packs",
        "Three clutch packs",
        "Four clutch packs"
      ],
      correctAnswer: 1,
      explanation: "A DCS (dual clutch seamless shift) system has two clutch packs. The gearbox has two different shafts with odd-numbered gears on one shaft and even-numbered gears on the other, each with its own multi-plate clutch pack."
    },
    {
      question: "When working out gear ratios, to calculate the number of teeth on the planet gears of an epicyclic gear train, you use the formula:",
      options: [
        "Annulus − Sun gear = Planet gear",
        "Annulus + Sun gear = Planet gear",
        "Annulus ÷ Sun gear = Planet gear",
        "Annulus × Sun gear = Planet gear"
      ],
      correctAnswer: 0,
      explanation: "When working out gear ratios for an epicyclic gear train, to calculate the number of teeth on the planet gears, you use the formula: Annulus − Sun gear = Planet gear. This is because the planet gears sit between the sun gear and the annulus."
    },
    {
      question: "Which of the following are used in an automatic transmission to select a gear ratio?",
      options: [
        "Brake bands",
        "Multi-plate clutch packs",
        "Unidirectional sprag clutches",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All of the above are used in an automatic transmission to select a gear ratio. Brake bands hold sections of epicyclic gearing stationary, multi-plate clutch packs connect rotating gear sets, and unidirectional sprag clutches prevent parts from rotating in the wrong direction."
    },
    {
      question: "Which of the following is NOT a type of LSD?",
      options: [
        "Clutch type",
        "Viscous coupling type",
        "Haldex type",
        "Torsion type"
      ],
      correctAnswer: 2,
      explanation: "Haldex type is not a type of LSD. The three main types of limited slip differential are: clutch type, viscous coupling type, and torsion wheel type. Haldex is a coupling system used in four-wheel drive vehicles to control torque distribution."
    },
    {
      question: "What topics should you be familiar with to prepare for assessment?",
      options: [
        "Only diagnostic tooling",
        "Only clutch systems",
        "Diagnostic tooling, electrical and electronic principles, diagnostic planning and preparation, clutch systems, manual gear change systems, automatic gear change systems, torque converters, epicyclic gear trains, CVT, DCT, and final drive and limited slip differentials",
        "Only manual gearboxes"
      ],
      correctAnswer: 2,
      explanation: "You will need to be familiar with: diagnostic tooling, electrical and electronic principles, diagnostic planning and preparation, clutch systems, manual gear change systems, automatic gear change systems, torque converters, epicyclic gear trains, continuously variable transmission (CVT), dual clutch seamless shift transmission (DCT), and final drive and limited slip differentials."
    },
    {
      question: "What type of evidence example is 'carrying out the replacement of a baulk ring synchromesh component'?",
      options: [
        "Witness testimony",
        "Computer-based",
        "Workplace observation by a qualified assessor",
        "Audio recording"
      ],
      correctAnswer: 2,
      explanation: "Carrying out the replacement of a baulk ring synchromesh component is an example of workplace observation by a qualified assessor. This involves direct observation of practical work being performed."
    },
    {
      question: "What is an example of witness testimony evidence?",
      options: [
        "A video recording",
        "A signed statement or job card from a suitably qualified/approved witness, stating that you have correctly overhauled a manual gearbox",
        "A diagnostic scan tool printout",
        "Photographs of completed work"
      ],
      correctAnswer: 1,
      explanation: "Witness testimony is a signed statement or job card from a suitably qualified/approved witness, stating that you have correctly overhauled a manual gearbox or performed other work to standard."
    },
    {
      question: "What is an example of computer-based evidence?",
      options: [
        "A handwritten report",
        "A printout from a diagnostic scan tool showing the results from a test to check the function of an automatic transmission gear shift map/timing",
        "A signed job card",
        "A verbal explanation"
      ],
      correctAnswer: 1,
      explanation: "Computer-based evidence is exemplified by a printout from a diagnostic scan tool showing the results from a test to check the function of an automatic transmission gear shift map/timing."
    },
    {
      question: "What is an example of audio recording evidence?",
      options: [
        "Photographs of work",
        "A timed and dated audio recording of you describing the process involved in road testing a car to check for symptoms produced by a transmission fault",
        "A written statement",
        "A video clip"
      ],
      correctAnswer: 1,
      explanation: "Audio recording evidence is a timed and dated audio recording of you describing the process involved in road testing a car to check for symptoms produced by a transmission fault."
    },
    {
      question: "What is an example of video recording evidence?",
      options: [
        "Written notes",
        "Short video clips showing you carrying out the various stages involved in the electrical diagnosis of an automatic clutch system",
        "Photographs only",
        "A signed statement"
      ],
      correctAnswer: 1,
      explanation: "Video recording evidence consists of short video clips showing you carrying out the various stages involved in the electrical diagnosis of an automatic clutch system or other procedures."
    },
    {
      question: "What is an example of photographic recording evidence?",
      options: [
        "A verbal explanation",
        "Photographs showing you carrying out the stages of a final drive set up and adjustment, when the assessor is unable to be present for the entire observation",
        "A written report",
        "An audio recording"
      ],
      correctAnswer: 1,
      explanation: "Photographic recording evidence includes photographs showing you carrying out the stages of a final drive set up and adjustment, when the assessor is unable to be present for the entire observation (this process may take considerable time to complete). The photos should be used as supporting evidence alongside a job card."
    },
    {
      question: "What is an example of professional discussion evidence?",
      options: [
        "A multiple-choice test",
        "A recorded discussion with your assessor about how you diagnosed and repaired a vehicle with transmission whine",
        "A written essay",
        "A practical demonstration only"
      ],
      correctAnswer: 1,
      explanation: "Professional discussion evidence is a recorded discussion with your assessor about how you diagnosed and repaired a vehicle with transmission whine or other technical issues."
    },
    {
      question: "What is an example of oral questioning evidence?",
      options: [
        "A written test",
        "Recorded answers to questions asked by your assessor, in which you explain how you safely isolated a high voltage hybrid system in order to work on the vehicle's CVT transmission",
        "Photographs of work",
        "A job card"
      ],
      correctAnswer: 1,
      explanation: "Oral questioning evidence consists of recorded answers to questions asked by your assessor, in which you explain how you safely isolated a high voltage hybrid system in order to work on the vehicle's CVT transmission."
    },
    {
      question: "What is an example of a personal statement?",
      options: [
        "A scan tool printout",
        "A written statement describing how you accomplished the repair of a vehicle clutch system",
        "A photograph",
        "A video recording"
      ],
      correctAnswer: 1,
      explanation: "A personal statement is a written statement describing how you accomplished the repair of a vehicle clutch system or other work you have completed."
    },
    {
      question: "What is an example of competence/skills tests evidence?",
      options: [
        "A written essay",
        "A practical task arranged by your training organisation, asking you to use a multimeter correctly to conduct a volts drop test on an inhibitor switch",
        "A video recording",
        "An oral discussion"
      ],
      correctAnswer: 1,
      explanation: "Competence/skills tests evidence is a practical task arranged by your training organisation, asking you to use a multimeter correctly to conduct a volts drop test on an inhibitor switch or demonstrate other practical skills."
    },
    {
      question: "What is an example of written tests evidence?",
      options: [
        "A practical demonstration",
        "A written answer to an end-of-unit test to check your knowledge and understanding of light vehicle transmission and driveline systems",
        "A video recording",
        "An oral examination"
      ],
      correctAnswer: 1,
      explanation: "Written tests evidence is a written answer to an end-of-unit test to check your knowledge and understanding of light vehicle transmission and driveline systems."
    },
    {
      question: "What is an example of multiple-choice tests evidence?",
      options: [
        "A practical task",
        "A multiple-choice test set by your awarding body to check your knowledge and understanding of light vehicle transmission and driveline systems",
        "A written essay",
        "A professional discussion"
      ],
      correctAnswer: 1,
      explanation: "Multiple-choice tests evidence is a multiple-choice test set by your awarding body to check your knowledge and understanding of light vehicle transmission and driveline systems."
    },
    {
      question: "What is an example of assignments/projects evidence?",
      options: [
        "A practical demonstration only",
        "A written assignment arranged by your training organisation requiring you to show an in-depth knowledge and understanding of a particular driveline system (e.g. limited slip differentials)",
        "A multiple-choice test",
        "An oral examination"
      ],
      correctAnswer: 1,
      explanation: "Assignments/projects evidence is a written assignment arranged by your training organisation requiring you to show an in-depth knowledge and understanding of a particular driveline system (e.g. limited slip differentials)."
    },
    {
      question: "What safety precaution should be taken when undertaking practical assessments on transmission systems?",
      options: [
        "Work as quickly as possible",
        "The vehicle you are working on is not in gear before the engine is started, and that park is selected when running an automatic in the workshop; observe all health and safety requirements; use the recommended personal protective equipment (PPE) and vehicle protective equipment (VPE); use tools correctly and safely",
        "Ignore safety requirements to save time",
        "Work alone without supervision"
      ],
      correctAnswer: 1,
      explanation: "When undertaking any practical assessment, always take care to work safely throughout the test. Light vehicle transmission systems are dangerous and precautions should include making sure that: the vehicle you are working on is not in gear before the engine is started, and that park is selected when running an automatic in the workshop; you observe all health and safety requirements; you use the recommended personal protective equipment (PPE) and vehicle protective equipment (VPE); you use tools correctly and safely."
    }
  ]
};
