const quizData = {
  quizNumber: 48,
  title: "SRS Sensors, Pre-tensioners & Safety Procedures",
  pageNumbers: "239-243",
  questions: [
    {
      question: "What principle can electronic sensors work on in SRS systems?",
      options: [
        "Magnetic field detection",
        "Accelerometers or strain gauge type devices",
        "Ultrasonic wave detection",
        "Infrared light detection"
      ],
      correctAnswer: 1,
      explanation: "Electronic sensors can work on the principle of accelerometers, or can be a strain gauge type device. The sensor is a small plate which has a weighted flap that moves slightly when force is applied to it. A strain gauge and a small integrated circuit are also mounted on the plate."
    },
    {
      question: "How does a strain gauge sensor create a signal during rapid deceleration?",
      options: [
        "By measuring temperature changes",
        "During rapid deceleration in an accident, the flap is forced to move, creating a signal in the integrated circuit which can be transmitted to the ECU",
        "By detecting changes in magnetic fields",
        "By measuring voltage drops"
      ],
      correctAnswer: 1,
      explanation: "During the rapid deceleration created in an accident, the flap is forced to move. This creates a signal in the integrated circuit, which can be transmitted to the ECU. This type of sensor is very accurate and it also produces a signal that is proportional to the force of deceleration. Because of this, the ECU is able to calculate the severity of the impact and apply the appropriate safety measures."
    },
    {
      question: "What is the primary purpose of seatbelt pre-tensioners?",
      options: [
        "To make the seatbelt more comfortable",
        "To cinch up the belt components to remove any slack and bring the body and face into line with the airbag",
        "To automatically adjust belt length for different sized occupants",
        "To lock the seatbelt in position permanently"
      ],
      correctAnswer: 1,
      explanation: "During an accident, if the people involved are not in the correct position when airbags are deployed, injury or death may occur. Seatbelt pre-tensioners are designed to work in conjunction with the airbags by cinching up the belt components to remove any slack and bring the body and face into line with the airbag."
    },
    {
      question: "Where can the pre-tensioner mechanism be located?",
      options: [
        "Only in the steering wheel",
        "Only in the dashboard",
        "In the inertia reel or the seatbelt stalk buckle mechanism",
        "Only in the door panels"
      ],
      correctAnswer: 2,
      explanation: "The pre-tensioner mechanism can be in the inertia reel or the seatbelt stalk buckle mechanism. In a similar manner to airbags, many pre-tensioners use a squib and a gas generator to create pressure on a type of piston that is able to retract the seatbelt slightly when an accident occurs."
    },
    {
      question: "Why are pre-tensioners often called 'pyrotechnic' pre-tensioners?",
      options: [
        "Because they use hydraulic pressure",
        "Because they use small explosive charges",
        "Because they use electric motors",
        "Because they use magnetic forces"
      ],
      correctAnswer: 1,
      explanation: "Because these systems use small explosive charges, they are often called pyrotechnic pre-tensioners. The term 'pyrotechnic' involves the use of explosives, in a similar manner to fireworks. These explosive charges rapidly activate the pre-tensioner mechanism."
    },
    {
      question: "What happens to the gas pressure in seatbelts after deployment has occurred?",
      options: [
        "It remains constant throughout the impact",
        "It increases continuously",
        "The force tightening the belts is released as gas pressure is exhausted",
        "It converts to hydraulic pressure"
      ],
      correctAnswer: 2,
      explanation: "In the moments after deployment has occurred, the force tightening the belts is released as gas pressure is exhausted, in a similar manner to an airbag deflating after an accident. This force limiting reduces the pressures on internal organs, which can rise rapidly following an impact."
    },
    {
      question: "What do many pre-tensioner systems include to alert occupants that components must be replaced?",
      options: [
        "An audible alarm",
        "An indicator device that appears after the belt mechanism deploys",
        "A text message to the owner",
        "An automatic notification to the dealer"
      ],
      correctAnswer: 1,
      explanation: "Seatbelt pre-tensioners are designed to be used only once. Many pre-tensioner systems include an indicator device that appears after the belt mechanism deploys. This makes the occupants aware that the components must be replaced."
    },
    {
      question: "According to Table 4.12, what happens in the first 0 to 10 milliseconds of SRS operation?",
      options: [
        "The airbag deploys",
        "Crash sensors and safing sensors detect the impact and signal the SRS ECU",
        "The seatbelt tightens",
        "The airbag deflates"
      ],
      correctAnswer: 1,
      explanation: "According to Table 4.12 showing approximate timings of SRS operation, in the first 0 to 10 milliseconds: Crash sensors and safing sensors detect the impact and signal the SRS ECU. This is the initial detection phase of the deployment sequence."
    },
    {
      question: "According to Table 4.12, what happens between 10 to 15 milliseconds?",
      options: [
        "The crash is detected",
        "The airbag is activated and starts to inflate; the seatbelt pre-tensioners are deployed, taking up slack and pulling the occupant into an appropriate position",
        "The airbag fully deflates",
        "The vehicle comes to a complete stop"
      ],
      correctAnswer: 1,
      explanation: "Between 10 to 15 milliseconds, the airbag is activated and starts to inflate. The seatbelt pre-tensioners are deployed, taking up the slack in the belt and pulling the occupant into an appropriate position. This rapid sequence ensures proper positioning before airbag contact."
    },
    {
      question: "According to Table 4.12, what is the state of the SRS system at 20 to 30 milliseconds?",
      options: [
        "The system is just beginning to activate",
        "Seatbelt tensioning is complete and the airbag is fully inflated; inertia keeps the person moving and they come into contact with the airbag, cushioning the impact",
        "The airbag has completely deflated",
        "The sensors are still detecting the crash"
      ],
      correctAnswer: 1,
      explanation: "At 20 to 30 milliseconds, seatbelt tensioning is complete and the airbag is fully inflated. Inertia keeps the person moving and they come into contact with the airbag, cushioning the impact. This is when the SRS provides maximum protection."
    },
    {
      question: "What happens to the airbag between 70 to 90 milliseconds after impact?",
      options: [
        "It continues to inflate",
        "The main impact is over and force limiters on the seatbelt slacken; gas inside is released through holes in the back of the bag and it begins to deflate",
        "It remains fully inflated",
        "It explodes"
      ],
      correctAnswer: 1,
      explanation: "Between 70 to 90 milliseconds, the main impact is over and the force limiters on the seatbelt slacken. As the occupant moves against the airbag, the pressure of gas inside is released through the holes in the back of the bag and it begins to deflate."
    },
    {
      question: "At what time does the airbag fully collapse and the inertia reel action return the occupant to an upright position?",
      options: [
        "30 to 50 milliseconds",
        "70 to 90 milliseconds",
        "120 to 150 milliseconds",
        "200 to 250 milliseconds"
      ],
      correctAnswer: 2,
      explanation: "At 120 to 150 milliseconds, the airbag fully collapses and the inertia reel action of the seatbelt returns the occupant to an upright position. The entire SRS deployment sequence is complete in less than one-sixth of a second."
    },
    {
      question: "What should the SRS malfunction warning light do when the ignition is first switched on if no fault exists?",
      options: [
        "It should never illuminate",
        "It should light up for around 5 to 10 seconds and then go out",
        "It should flash continuously",
        "It should remain on permanently"
      ],
      correctAnswer: 1,
      explanation: "If a fault occurs with a supplementary restraint system, the malfunction warning light should illuminate on the dashboard. This warning light has a self-check procedure: when the ignition is first switched on, it should light up for around 5 to 10 seconds; if no fault exists, it should then go out."
    },
    {
      question: "What does it indicate if the SRS warning light remains illuminated or flashes after the initial self-check?",
      options: [
        "The system is working normally",
        "The system has detected a fault and the airbags and pre-tensioners are disabled and will not deploy in the event of an accident",
        "The battery needs charging",
        "The vehicle needs servicing"
      ],
      correctAnswer: 1,
      explanation: "If the light remains illuminated or flashes, this indicates that the system has detected a fault and the airbags and pre-tensioners are disabled and will not deploy in the event of an accident. This should not affect normal seatbelt operation."
    },
    {
      question: "What is the first step in diagnosing an SRS fault?",
      options: [
        "Replace all components",
        "Disconnect the battery",
        "Connect the fault code reader to the vehicle's diagnostic socket",
        "Remove the airbags"
      ],
      correctAnswer: 2,
      explanation: "In order to diagnose the system, you need to have access to an appropriate fault code reader. The first step is: Connect the fault code reader to the vehicle's diagnostic socket. This is followed by reading all fault codes and recording them."
    },
    {
      question: "What is important to remember about some SRS ECU memory facilities?",
      options: [
        "They can store unlimited fault codes",
        "Some have no memory facility and only display faults present at the time of testing; others can log fault codes that remain in memory until cleared",
        "They automatically clear all codes daily",
        "They only work when the engine is running"
      ],
      correctAnswer: 1,
      explanation: "Some SRS ECUs have no memory facility and only display faults that are present at the time of testing. Other ECUs are able to log fault codes, and these will remain in the memory until cleared. To ensure that these codes have not been created during connection and disconnection or testing processes involved with your diagnosis, clear the memory using the code reader and then recheck."
    },
    {
      question: "Why should you not use conventional electronic test equipment to check SRS components?",
      options: [
        "Because it's too expensive",
        "Because they sometimes produce small electric currents which could make the SRS system deploy accidentally",
        "Because it will damage the battery",
        "Because it won't give accurate readings"
      ],
      correctAnswer: 1,
      explanation: "You should not use conventional electronic test equipment to check SRS components, as they sometimes produce small electric currents which could make the SRS system deploy accidentally. For example, ohmmeters create current flow in the circuits they measure, power probes are designed to supply electric current for test purposes, and test lights connected in parallel draw extra electric current through a circuit."
    },
    {
      question: "What must you always do before undertaking any repairs to a vehicle with SRS?",
      options: [
        "Drain all fluids",
        "Remove the airbag and pre-tensioner sensors if any shocks are to be applied to the sensors or in the vicinity",
        "Replace all fuses",
        "Disconnect the alternator"
      ],
      correctAnswer: 1,
      explanation: "According to Table 4.13 (SRS dos and don'ts), before undertaking any repairs to a vehicle, remove the airbag and pre-tensioner sensors if any shocks are to be applied to the sensors or in the vicinity. These shocks may not deploy the SRS, but they can damage the sensors so that they don't work in the event of an accident."
    },
    {
      question: "Why should you never use memory keepers when working on SRS airbag systems?",
      options: [
        "They drain the battery too quickly",
        "These special tools keep electrical components powered when the battery has been disconnected, meaning the SRS system will remain 'live' and could deploy accidentally during repair work",
        "They are too expensive to use",
        "They interfere with the scan tool"
      ],
      correctAnswer: 1,
      explanation: "Never use memory keepers when working on SRS airbag systems. These special tools are designed to keep electrical components powered when the battery has been disconnected, so that radio codes, etc., are not lost during repair procedures. Using memory keepers means that the SRS system will remain 'live' and could deploy accidentally during repair work."
    },
    {
      question: "What should you do if you are undertaking any electric welding on a vehicle?",
      options: [
        "Increase the welding current",
        "Always disconnect the airbags and seatbelt pre-tensioners",
        "Work faster to minimize exposure",
        "Use lower voltage"
      ],
      correctAnswer: 1,
      explanation: "If you are undertaking any electric welding on a vehicle, always disconnect the airbags and seatbelt pre-tensioners. Electrical welding uses the vehicle body to conduct the welding current. The action of welding may cause accidental deployment of airbags and pre-tensioners."
    },
    {
      question: "What should you always check after completing SRS repair work?",
      options: [
        "Oil level",
        "That all fault codes are clear; fault codes that remain in the memory can mean the system is disabled and will not deploy in the event of an accident",
        "Tire pressure",
        "Coolant level"
      ],
      correctAnswer: 1,
      explanation: "Always check that all fault codes are clear after you have completed the repair work. Fault codes that remain in the memory can mean that the system is disabled and will not deploy in the event of an accident. This verification is essential for ensuring the system is operational."
    },
    {
      question: "How should SRS ECUs be disposed of if they contain a mercury switch type safing sensor?",
      options: [
        "Throw them in regular trash",
        "Always treat them as toxic waste; mercury is toxic and special controls are needed to ensure safe disposal",
        "Recycle them at any recycling center",
        "Burn them"
      ],
      correctAnswer: 1,
      explanation: "Always treat SRS ECUs as toxic waste when disposing of them if they are known to contain the mercury switch type safing sensor. Mercury is toxic and special controls are needed to ensure safe disposal."
    },
    {
      question: "What must be done before disposing of airbag or pre-tensioner assemblies?",
      options: [
        "They should be recycled immediately",
        "They must always be deployed first; special service tools are available to enable safe deployment",
        "They should be stored indefinitely",
        "They should be donated to schools"
      ],
      correctAnswer: 1,
      explanation: "When disposing of airbag or pre-tensioner assemblies, they must always be deployed first. This includes scrapping a vehicle – end of life (ELV) – with these assemblies still in place. You should only deploy airbags and pre-tensioners if you have been trained in how to do so safely. Special service tools are available to enable safe deployment, and you should always follow the manufacturer's recommended procedures."
    },
    {
      question: "Why should you never use second-hand SRS components from a donor vehicle?",
      options: [
        "They are too expensive",
        "They may be faulty, incompatible or beyond their service life and may not function correctly in the event of an accident; always use new parts",
        "They are illegal to use",
        "They won't fit properly"
      ],
      correctAnswer: 1,
      explanation: "Never use second-hand SRS components from a donor vehicle. They may be faulty, incompatible or beyond their service life and may not function correctly in the event of an accident. Always use new parts."
    },
    {
      question: "What should you never do with removed airbags regarding their placement?",
      options: [
        "Never place them in the vehicle",
        "Never place removed airbags deployment side down; if they deploy, they will take off like a rocket and this can be very dangerous",
        "Never place them in storage",
        "Never transport them"
      ],
      correctAnswer: 1,
      explanation: "Never place removed airbags deployment side down. If they deploy, they will take off like a rocket and this can be very dangerous. Always handle airbags with the deployment side facing upward or away from people and equipment."
    }
  ]
};
