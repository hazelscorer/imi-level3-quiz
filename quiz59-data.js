const quizData = {
  quizNumber: 59,
  title: "Transmission Diagnosis & Fault Finding",
  pageNumbers: "295-299",
  questions: [
    {
      question: "How does the Haldex coupling control the amount of torque delivered to the rear axle?",
      options: [
        "Using mechanical linkages only",
        "It is a multi-plate clutch unit able to control the amount of torque delivered to the rear axle by managing slip or drag created at the clutch plates",
        "Using belt drives",
        "Using chain drives"
      ],
      correctAnswer: 1,
      explanation: "Normally mounted on or near the rear axle, the Haldex coupling is a multi-plate clutch unit that is able to control the amount of torque delivered to the rear axle by managing slip or drag created at the clutch plates."
    },
    {
      question: "How is pressure created to engage the clutches in a Haldex coupling?",
      options: [
        "By the driver using a pedal",
        "Pressure to engage the clutches relies on hydraulic forces created by the Haldex coupling's own internal oil pump",
        "By engine vacuum",
        "By electric motors only"
      ],
      correctAnswer: 1,
      explanation: "Pressure to engage the clutches relies on hydraulic forces created by the Haldex coupling's own internal oil pump. During vehicle operation, fluid pressure is controlled by a series of electronic valves activated by an ECU that processes dynamic information from various chassis and drive sensors."
    },
    {
      question: "Why should a differential lock not be used when driving on a normal road surface?",
      options: [
        "It uses too much fuel",
        "Grip created at the road wheels can cause transmission 'wind-up' as a car goes round a bend; a reverse torque is created in the transmission, which places undesirable stress on shafts and gears and may cause components to break",
        "It damages the tires",
        "It makes steering too heavy"
      ],
      correctAnswer: 1,
      explanation: "Safe working: A differential lock should not be used when driving on a normal road surface. Grip created at the road wheels can cause transmission 'wind-up' as a car goes round a bend. A reverse torque is created in the transmission, which places undesirable stress on shafts and gears and may cause components to break."
    },
    {
      question: "What should be the first step when diagnosing transmission-related faults?",
      options: [
        "Start replacing parts immediately",
        "Fully question the driver about the symptoms relating to the fault; the driver will know their vehicle better than anybody else, so allow them to explain the problems",
        "Remove the transmission",
        "Check the fluid level only"
      ],
      correctAnswer: 1,
      explanation: "The first step in the diagnostic routine should be to fully question the driver about the symptoms relating to the fault. The driver will know their vehicle better than anybody else, so allow them to explain the problems."
    },
    {
      question: "What should be done after the initial visual inspection when diagnosing transmission faults?",
      options: [
        "Dismantle the transmission immediately",
        "Following an initial visual inspection to ensure that the vehicle is safe to drive, fully road test the vehicle to confirm the symptoms",
        "Order all new parts",
        "Clean the transmission only"
      ],
      correctAnswer: 1,
      explanation: "Following an initial visual inspection to ensure that the vehicle is safe to drive, fully road test the vehicle to confirm the symptoms. It is sometimes advisable to take the driver with you on a road test so they can point out problems as the vehicle is driven, or answer questions relating to issues created during the investigation."
    },
    {
      question: "What information should be gathered about the vehicle and transmission system during diagnosis?",
      options: [
        "Only the VIN number",
        "Vehicle details, service history, warranty period, manufacturer recall information, system information and technical data, diagnostic trouble codes (if applicable), and technical advice from manufacturers, helplines or master technicians",
        "Only the owner's name",
        "Only the mileage"
      ],
      correctAnswer: 1,
      explanation: "Once the symptoms have been confirmed, gather information relating to the vehicle and transmission system, including: vehicle details, service history, warranty period, manufacturer recall information, system information and technical data, diagnostic trouble codes (if applicable), technical advice (from manufacturers, helplines or master technicians)."
    },
    {
      question: "What systems should be examined during transmission diagnosis?",
      options: [
        "Only the mechanical system",
        "Mechanical systems and components, hydraulic and pneumatic systems and components, and electrical systems and components",
        "Only the electrical system",
        "Only the hydraulic system"
      ],
      correctAnswer: 1,
      explanation: "Examine the systems and undertake as much diagnosis as possible before you dismantle components, so that you do not restrict the tests available to you. Check: mechanical systems and components, hydraulic and pneumatic systems and components, electrical systems and components."
    },
    {
      question: "According to Table 5.6, what could cause abnormal noises (rattle from dual mass flywheel)?",
      options: [
        "Low oil level",
        "Worn damping springs in dual mass flywheel",
        "Worn tires",
        "Faulty alternator"
      ],
      correctAnswer: 1,
      explanation: "Table 5.6 shows that abnormal noises presenting as rattle from dual mass flywheel are caused by worn damping springs in dual mass flywheel, with the recommendation to replace flywheel."
    },
    {
      question: "What causes vibrations from crankshaft pulsations transferred to transmission according to Table 5.6?",
      options: [
        "Worn brake pads",
        "Seized dual mass flywheel",
        "Low fuel pressure",
        "Faulty spark plugs"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.6, vibrations caused by crankshaft pulsations transferred to transmission are due to a seized dual mass flywheel. The recommendation is to replace the flywheel."
    },
    {
      question: "What causes clutch slip according to Table 5.6?",
      options: [
        "Too much clutch cable free play",
        "Worn clutch friction material",
        "Seized release bearing",
        "Broken pressure plate springs"
      ],
      correctAnswer: 1,
      explanation: "Table 5.6 shows that clutch slip is caused by poor transmission of torque on acceleration due to worn clutch friction material. The recommendation is to replace the clutch."
    },
    {
      question: "According to Table 5.6, what causes clutch judder (vibration as clutch is engaged)?",
      options: [
        "Low transmission fluid",
        "Worn clutch pressure plate springs",
        "Incorrect tire pressure",
        "Faulty fuel pump"
      ],
      correctAnswer: 1,
      explanation: "Table 5.6 indicates that clutch judder, presenting as vibration as clutch is engaged, is caused by worn clutch pressure plate springs. The recommendation is to replace the clutch."
    },
    {
      question: "What causes a sudden snatch as the clutch is engaged in an automatic clutch system according to Table 5.6?",
      options: [
        "Low battery voltage",
        "Incorrect information from clutch position sensor",
        "Worn brake pads",
        "Low coolant level"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.6, a 'grab' symptom (sudden snatch as clutch is engaged in automatic clutch system) is caused by incorrect information from the clutch position sensor. The recommendation is to re-program clutch position with scan tool/specialist equipment."
    },
    {
      question: "According to Table 5.7, what causes abnormal noises (rumbling noise) in a manual gearbox?",
      options: [
        "Low oil level",
        "Worn main shaft support bearings",
        "Worn clutch",
        "Faulty differential"
      ],
      correctAnswer: 1,
      explanation: "Table 5.7 shows that abnormal noises presenting as rumbling noise as the vehicle is driven are caused by worn main shaft support bearings. The recommendation is to overhaul gearbox bearings."
    },
    {
      question: "What causes vibration when driving in third gear in a manual gearbox according to Table 5.7?",
      options: [
        "Low transmission fluid",
        "Broken gear teeth on third driven gear",
        "Worn clutch cable",
        "Faulty engine mounts"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.7, vibrations when driving in third gear are caused by broken gear teeth on third driven gear. The recommendation is to replace third gear."
    },
    {
      question: "What causes loss of drive with a jammed gearbox according to Table 5.7?",
      options: [
        "Low oil level",
        "Interlock failure, allowing two gears to be engaged at the same time",
        "Worn clutch",
        "Broken drive shaft"
      ],
      correctAnswer: 1,
      explanation: "Table 5.7 shows that loss of drive with the symptom 'car will not move, gearbox jammed' is caused by interlock failure, allowing two gears to be engaged at the same time. The recommendation is to strip out gearbox and disengage jammed gears, then replace interlock mechanism."
    },
    {
      question: "According to Table 5.8, what causes abnormal noises (rumbling) in an automatic gearbox?",
      options: [
        "Low ATF level",
        "Worn planet gear support bearings",
        "Worn brake pads",
        "Faulty torque converter"
      ],
      correctAnswer: 1,
      explanation: "Table 5.8 indicates that abnormal noises presenting as rumbling noise as the vehicle is driven are caused by worn planet gear support bearings. The recommendation is to replace epicyclic gearing."
    },
    {
      question: "What causes vibration created on overrun/deceleration in an automatic gearbox according to Table 5.8?",
      options: [
        "Worn engine mounts",
        "Damaged sprag in one-way clutch",
        "Low oil pressure",
        "Faulty fuel injector"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.8, vibrations created on overrun/deceleration are caused by damaged sprag in one-way clutch. The recommendation is to replace one-way clutch unit."
    },
    {
      question: "What causes loss of drive when the car will not move in gear in an automatic transmission according to Table 5.8?",
      options: [
        "Faulty brake switch",
        "Low automatic transmission fluid level",
        "Worn tires",
        "Low fuel level"
      ],
      correctAnswer: 1,
      explanation: "Table 5.8 shows that loss of drive with the symptom 'car will not move when placed in gear' is caused by low automatic transmission fluid level. The recommendation is to check for repair leaks, top up ATF and test."
    },
    {
      question: "According to Table 5.8, what causes failure to engage gear properly?",
      options: [
        "Low battery voltage",
        "Worn brake band",
        "Faulty speedometer",
        "Worn tires"
      ],
      correctAnswer: 1,
      explanation: "Table 5.8 indicates that failure to engage gear, with the symptom 'gearbox will not change up properly', is caused by worn brake band. The recommendation is to adjust brake bands and test."
    },
    {
      question: "What causes ATF dripping from the bottom of the gearbox according to Table 5.8?",
      options: [
        "Overfilled transmission",
        "Gearbox sump pan gasket failure",
        "Worn clutch",
        "Faulty water pump"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.8, leaks presenting as ATF dripping from the bottom of the gearbox are caused by gearbox sump pan gasket failure. The recommendation is to replace sump gasket."
    },
    {
      question: "According to Table 5.9, what causes abnormal noises (whine on overrun/deceleration) in the final drive?",
      options: [
        "Low oil level",
        "Incorrect tooth contact between crown wheel and pinion",
        "Worn CV joints",
        "Faulty wheel bearings"
      ],
      correctAnswer: 1,
      explanation: "Table 5.9 shows that abnormal noises presenting as whine on overrun/deceleration are caused by incorrect tooth contact between crown wheel and pinion. The recommendation is to adjust final drive."
    },
    {
      question: "What causes vibrations from a seized LSD clutch pack according to Table 5.9?",
      options: [
        "Low oil level",
        "Differential action ineffective, making road wheels slip when cornering",
        "Worn brake pads",
        "Faulty suspension"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.9, vibrations from a seized LSD clutch pack are caused by differential action being ineffective, making road wheels slip when cornering. The recommendation is to overhaul limited slip differential."
    },
    {
      question: "According to Table 5.10, what causes abnormal noises (clicking noise when cornering)?",
      options: [
        "Low oil level",
        "Worn CV joint",
        "Faulty wheel bearing",
        "Worn brake pads"
      ],
      correctAnswer: 1,
      explanation: "Table 5.10 shows that abnormal noises presenting as clicking noise when cornering are caused by worn CV joint. The recommendation is to replace CV joint."
    },
    {
      question: "What causes vibration when moving at speeds above 20 mph according to Table 5.10?",
      options: [
        "Unbalanced wheels",
        "Bent drive shaft",
        "Worn clutch",
        "Low tire pressure"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.10, vibrations when moving at speeds above 20 mph are caused by bent drive shaft. The recommendation is to measure drive shaft run-out and replace."
    },
    {
      question: "What should be done at all stages of a diagnostic routine, maintenance or repair?",
      options: [
        "Only record the final result",
        "Record information and make suitable recommendations",
        "Only write down the cost",
        "Nothing needs to be recorded"
      ],
      correctAnswer: 1,
      explanation: "At all stages of a diagnostic routine, maintenance or repair, you should record information and make suitable recommendations. This ensures proper documentation and customer communication throughout the repair process."
    }
  ]
};
