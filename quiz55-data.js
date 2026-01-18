const quizData = {
  quizNumber: 55,
  title: "Automatic Transmission: Epicyclic Gears & Control",
  pageNumbers: "275-279",
  questions: [
    {
      question: "What type of gearing method do many automatic transmission systems use?",
      options: [
        "Spur gears only",
        "An epicyclic gear train instead of spur or helical gears that are engaged and disengaged",
        "Belt drives",
        "Chain drives"
      ],
      correctAnswer: 1,
      explanation: "Many automatic transmission systems use a different type of gearing method from that of manual transmission systems. Automatic transmissions still need to achieve the appropriate ratios required for the multiplication of torque. In a standard automatic transmission, instead of spur or helical gears that are engaged and disengaged, a system called an epicyclic gear train is used."
    },
    {
      question: "What are the main components of an epicyclic gear train?",
      options: [
        "Input shaft, output shaft, and clutch only",
        "A large outer ring gear (annulus), a central gear (sun gear), and a series of intermediate gears called planet gears supported on spindles attached to a planet carrier",
        "Two parallel shafts with helical gears",
        "A single shaft with spur gears"
      ],
      correctAnswer: 1,
      explanation: "An epicyclic gear train uses gears that are constantly in mesh and consist of: a large outer ring gear, often called the 'annulus'; a central gear, often called the 'sun gear'; and a series of intermediate gears (that sit between the sun gear and the annulus) called the 'planet gears'. These are supported on spindles attached to a planet carrier."
    },
    {
      question: "How is an appropriate gear ratio selected in an epicyclic gearing system?",
      options: [
        "By sliding gears in and out of mesh",
        "One section of the epicyclic gearing will be locked to another part of the transmission; this section of gearing then becomes an idler gear with no direct effect on the gear ratio",
        "By changing the speed of the engine",
        "By using a clutch pedal"
      ],
      correctAnswer: 1,
      explanation: "To select an appropriate gear ratio, one section of the epicyclic gearing will be locked to another part of the transmission. This section of gearing then becomes an idler gear with no direct effect on the gear ratio, meaning the remaining two gears become input and output. The ratio, meaning the remaining two gears become input and output are now able to provide various gear ratios, including reverse."
    },
    {
      question: "How are gear ratios calculated in an epicyclic gear train?",
      options: [
        "Using a different formula than manual gearboxes",
        "In the same way as for a manual gearbox: Ratio = Driven ÷ Driver",
        "By multiplying all gear teeth together",
        "Using only the planet gear teeth"
      ],
      correctAnswer: 1,
      explanation: "Gear ratios are calculated in the same way as for a manual gearbox: Ratio = Driven ÷ Driver. (Since one component of the epicyclic gear mechanism is operating as an idler, this can be ignored during your calculation of gear ratio.)"
    },
    {
      question: "How many forward gear ratios and reverse gears can a single epicyclic gear mechanism provide?",
      options: [
        "Five forward and two reverse",
        "Three forward gear ratios and one reverse, as shown in Table 5.4",
        "Two forward and one reverse",
        "Six forward and two reverse"
      ],
      correctAnswer: 1,
      explanation: "A single epicyclic gear mechanism is able to provide three forward gear ratios and one reverse, as shown in Table 5.4. These gear ratios are not suitable for all driving conditions, so many systems use at least two epicyclic gear sets joined together to form a compound gear train."
    },
    {
      question: "What is a Simpson gear set?",
      options: [
        "A gear set with two sun gears",
        "A single long sun gear is used between the two epicyclic gear sets to join the gear sets together",
        "A gear set with multiple annuli",
        "A gear set with no planet carrier"
      ],
      correctAnswer: 1,
      explanation: "Two main types of compound gear set are common: Simpson gear set - A single long sun gear is used between the two epicyclic gear sets to join the gear sets together."
    },
    {
      question: "What is a Ravigneaux gear set?",
      options: [
        "A gear set with a single planet carrier",
        "In this design, it is the planet carriers that are connected to join the gear sets together",
        "A gear set with two sun gears",
        "A gear set with multiple ring gears"
      ],
      correctAnswer: 1,
      explanation: "Ravigneaux gear set - In this design, it is the planet carriers that are connected to join the gear sets together. This is an alternative configuration to the Simpson gear set for creating compound epicyclic gear trains."
    },
    {
      question: "What do most automatic gearboxes use to control the operation and selection of gears?",
      options: [
        "Manual cables",
        "Hydraulic fluid pressure; automatic transmission fluid (ATF) under pressure is directed through a series of channels and galleries by valves",
        "Electric motors only",
        "Pneumatic pressure"
      ],
      correctAnswer: 1,
      explanation: "Most automatic gearboxes use hydraulic fluid pressure to control the operation and selection of gears. Automatic transmission fluid (ATF) under pressure is directed through a series of channels and galleries by valves. The hydraulic fluid will then operate brake bands or multiplate clutches and provide engagement of a particular gear ratio."
    },
    {
      question: "What are the three main processes involved in the management of transmission gear selection in electronic control systems?",
      options: [
        "Start, run, and stop",
        "Input (from various sensors related to load and speed), Processing (ECU calculates best gear ratios), Output (signals sent to actuators, servos and solenoids)",
        "Engage, hold, and release",
        "Accelerate, cruise, and brake"
      ],
      correctAnswer: 1,
      explanation: "As with all electronic control systems, the management of transmission gear selection involves three main processes: Input - This comes from various sensors, normally related to load and speed. Processing - The ECU takes the sensor information and calculates the best gear ratios for a given driving situation, pre-programmed into its memory. Output - Signals are sent from the ECU to various actuators, servos and solenoids which control the operation of clutches and brake bands and allow gear change to take place."
    },
    {
      question: "What is a servo in automatic transmission systems?",
      options: [
        "A type of sensor",
        "A mechanism that converts a small mechanical motion into a larger movement with greater force",
        "A type of gear",
        "A hydraulic pump"
      ],
      correctAnswer: 1,
      explanation: "Servo – a mechanism that converts a small mechanical motion into a larger movement with greater force. Servos are used to actuate brake bands and clutches in automatic transmissions."
    },
    {
      question: "What are the three main methods used to control the selection of gearing inside an automatic transmission system?",
      options: [
        "Cables, chains, and belts",
        "Brake bands, multi-plate clutch packs, and unidirectional clutches",
        "Solenoids, valves, and pumps",
        "Gears, shafts, and bearings"
      ],
      correctAnswer: 1,
      explanation: "Three main methods are used to control the selection of gearing inside an automatic transmission system: brake bands, multi-plate clutch packs, and unidirectional clutches."
    },
    {
      question: "What is the purpose of brake bands in an automatic transmission?",
      options: [
        "To stop the vehicle",
        "An actuator system that hold a section of the epicyclic gearing stationary by anchoring it against the transmission casing",
        "To cool the transmission",
        "To lubricate the gears"
      ],
      correctAnswer: 1,
      explanation: "Brake bands are an actuator system that hold a section of the epicyclic gearing stationary by anchoring it against the transmission casing. A brake band is similar to a belt that is wrapped around the outside of one of the gearing components. One end of the brake band is fixed to the transmission casing by an adjustable mounting. The other end of that brake band is connected to a hydraulic servo, which when operated will try to squeeze the ends of brake band together."
    },
    {
      question: "What happens to the friction material on brake bands over time?",
      options: [
        "It gets stronger",
        "Over time the friction material will wear and grip on the gear set will be reduced; you can usually access the fixed end of the brake band from outside the gearbox casing to adjust it during maintenance",
        "It remains unchanged",
        "It becomes harder"
      ],
      correctAnswer: 1,
      explanation: "The inside of the brake band usually has a friction material attached, so that when it is pinched together it provides grip and stops part of the gear set rotating. Over time the friction material will wear and grip on the gear set will be reduced. You can usually access the fixed end of the brake band from the outside of the gearbox casing to adjust it during maintenance procedures."
    },
    {
      question: "How do multi-plate clutch packs work in an epicyclic gear train?",
      options: [
        "They use magnetic forces",
        "A hydraulically operated multi-plate clutch pack with friction plates interspaced with plain plates housed in a clutch basket; hydraulic pressure acts on the pressure plate, squashing components together to create friction",
        "They use electric motors",
        "They use cable operation"
      ],
      correctAnswer: 1,
      explanation: "To connect two rotating gear sets in an epicyclic gear train, a hydraulically operated multi-plate clutch pack can be used. A number of friction plates, interspaced with plain plates, are housed in a clutch basket. A pressure plate is mounted on the outside end of the clutch basket. Hydraulic pressure acts on the pressure plate, squashing the component parts together to create friction. The friction provides the grip that locks parts of the rotating gear set together."
    },
    {
      question: "What is the purpose of unidirectional (one-way) clutches in epicyclic gear systems?",
      options: [
        "To increase speed",
        "To prevent parts of an epicyclic gear set rotating in the wrong direction",
        "To reduce noise",
        "To improve fuel economy"
      ],
      correctAnswer: 1,
      explanation: "To prevent parts of an epicyclic gear set rotating in the wrong direction, a unidirectional (one-way) clutch can be used. This is similar in construction to ball bearing race, but instead of balls a set of sprags are used."
    },
    {
      question: "How does a sprag clutch work?",
      options: [
        "It uses magnetic locking",
        "A sprag is a small 'S'-shaped wedge held between inner and outer bearing races; when rotated in one direction, the sprag tilts allowing free rotation; when rotated in opposite direction, the sprag wedges tightly, stopping rotation",
        "It uses hydraulic pressure",
        "It uses electric solenoids"
      ],
      correctAnswer: 1,
      explanation: "A sprag is a small 'S'-shaped wedge held between an inner and outer bearing race. When rotated in one direction, the 'S'-shaped sprag tilts to one side, allowing the two bearing races to turn freely. When rotated in the opposite direction, the 'S'-shaped sprag wedges itself tightly between the two bearing surfaces and stops it from turning."
    },
    {
      question: "According to Table 5.5, which components are active when the transmission is in Park?",
      options: [
        "All clutches and brake bands",
        "Only C0 (multi-plate clutch pack) is active",
        "No components are active",
        "Only brake bands are active"
      ],
      correctAnswer: 1,
      explanation: "Table 5.5 shows that in Park, only C0 (multi-plate clutch pack) is active. This locks the transmission to prevent the vehicle from rolling."
    },
    {
      question: "When diagnosing an automatic transmission fault, what should the mechanical system diagnostic routine include?",
      options: [
        "Only checking fluid levels",
        "Thoroughly road test the car, using all of the gear settings and positions under different driving conditions",
        "Only visual inspection",
        "Only checking for fault codes"
      ],
      correctAnswer: 1,
      explanation: "Mechanical system: Thoroughly road test the car, using all of the gear settings and positions under different driving conditions. Depending on the symptoms produced and the gear operation available, you can use Table 5.5 above to help you identify which clutch or brake band may be at fault."
    },
    {
      question: "What should you assess when checking the hydraulic system in an automatic transmission?",
      options: [
        "Only the fluid color",
        "Thoroughly assess the level and condition of the hydraulic fluid in the automatic gearbox; a low fluid level will give incorrect shift patterns or may not allow correct operation of brake bands and clutches",
        "Only the fluid smell",
        "Only the transmission temperature"
      ],
      correctAnswer: 1,
      explanation: "Hydraulic system: Thoroughly assess the level and condition of the hydraulic fluid in the automatic gearbox. A low fluid level will give incorrect shift patterns or may not allow the correct operation of brake bands and clutches. If the fluid is dirty or discoloured, and sometimes has a slightly burnt smell, this can be an indication that the clutches have worn out."
    },
    {
      question: "What is important to check before performing a road test on an automatic transmission?",
      options: [
        "Only the tire pressure",
        "You must always check the fluid level and condition of an automatic transmission system before you carry out a road test; a level that is too high or too low could cause unnecessary damage to the gearbox during your road test",
        "Only the engine oil level",
        "Only the brake fluid level"
      ],
      correctAnswer: 1,
      explanation: "Safe working: You must always check the fluid level and condition of an automatic transmission system before you carry out a road test. A level that is too high or too low could cause unnecessary damage to the gearbox during your road test."
    },
    {
      question: "What should you do when diagnosing the electrical and electronic system of an automatic transmission?",
      options: [
        "Replace all sensors immediately",
        "Many automatic transmission systems incorporate a self-diagnostic facility; you should attach a suitable scan tool then record and clear any stored fault codes, then conduct a full road test and focus your diagnostic routine around any returned codes",
        "Only check the battery voltage",
        "Only inspect wiring visually"
      ],
      correctAnswer: 1,
      explanation: "Electrical and electronic system: Many automatic transmission systems incorporate a self-diagnostic facility. You should attach a suitable scan tool then record and clear any stored fault codes. Next, take the car for a full road test, re-scan and focus your diagnostic routine around any codes that have returned. If a code indicates a problem in an electrical part, you should test the component and circuit to confirm the fault before replacing it."
    },
    {
      question: "Why might many garages not have the resources to undertake repairs to automatic transmission systems?",
      options: [
        "The repairs are too simple",
        "The overhaul and repair of many automatic transmission systems may require specialist knowledge and tooling",
        "Automatic transmissions never fail",
        "The parts are too cheap"
      ],
      correctAnswer: 1,
      explanation: "The overhaul and repair of many automatic transmission systems may require specialist knowledge and tooling. Many garages simply do not have the resources available to undertake repairs to these systems. However, general maintenance procedures, such as fluid levels and brake band adjustment, should be possible if you follow the manufacturer's guidelines."
    },
    {
      question: "What main components are shown in Figure 5.30 of the automatic gearbox system?",
      options: [
        "Only mechanical components",
        "Mechanical components (planetary gear unit, torque converter), Hydraulic system (hydraulic control unit, shift valves, solenoid valves), and Electronic system (speed sensor, throttle position sensor, accelerator pedal, ECT ECU)",
        "Only the torque converter",
        "Only electronic sensors"
      ],
      correctAnswer: 1,
      explanation: "Figure 5.30 shows the automatic gearbox systems with three main categories: Mechanical components (planetary gear unit, torque converter, differential, throttle cable), Hydraulic system (hydraulic control unit, shift valves, solenoid valves), and Electronic system (speed sensor/vehicle speed, throttle position sensor, accelerator cable, accelerator pedal, ECT ECU)."
    },
    {
      question: "In Table 5.4, when the annulus is stationary and the sun gear is the input, what is the output and gear ratio?",
      options: [
        "Ring gear, 1:1",
        "Planet carrier, 3.4:1 (forward)",
        "Sun gear, 2:1",
        "Annulus, 0.71:1"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.4, when the annulus is stationary and the sun gear is the input, the output is the planet carrier with a ratio of 3.4:1 (forward). This provides a high gear reduction ratio suitable for low gears."
    },
    {
      question: "What gear ratio is achieved when the planet carrier is stationary and the sun gear is the input according to Table 5.4?",
      options: [
        "3.4:1 forward",
        "2.4:1 (reverse)",
        "1:1 forward",
        "0.71:1 forward"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.4, when the planet carrier is stationary and the sun gear is the input, the output is the ring gear with a ratio of 2.4:1 (reverse). This configuration is used for reverse gear."
    }
  ]
};
