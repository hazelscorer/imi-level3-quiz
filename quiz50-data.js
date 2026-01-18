const quizData = {
  quizNumber: 50,
  title: "Transmission & Driveline: Safety, Information & Tooling",
  pageNumbers: "249-254",
  questions: [
    {
      question: "What does Chapter 5 cover?",
      options: [
        "Engine diagnosis and repair",
        "Diagnosis and rectification of light vehicle transmission and driveline faults",
        "Brake system diagnosis",
        "Suspension system diagnosis"
      ],
      correctAnswer: 1,
      explanation: "Chapter 5 covers Diagnosis & rectification of light vehicle transmission & driveline faults. This chapter will help you gain an understanding of light vehicle advanced transmission technology and develop a systematic approach to light vehicle transmission system diagnosis."
    },
    {
      question: "Why do automatic transmissions have a tendency to move or creep when the engine is running?",
      options: [
        "Due to hydraulic pressure buildup",
        "When the vehicle is in gear (a drive range is selected)",
        "Because of worn clutch plates",
        "Due to low transmission fluid"
      ],
      correctAnswer: 1,
      explanation: "Uncontrolled vehicle movement: Automatic transmissions have a tendency to move or creep when the engine is running and the vehicle is in gear (a drive range is selected). Always make sure that you select neutral or park if you need to run the vehicle while it is stationary during your diagnostic routine."
    },
    {
      question: "What health hazard is associated with waste transmission lubrication oils?",
      options: [
        "Respiratory problems",
        "Dermatitis or cancer - contact with these oils should be kept to a minimum to reduce risk of skin irritation and disease",
        "Hearing damage",
        "Eye strain"
      ],
      correctAnswer: 1,
      explanation: "Dermatitis or cancer: During maintenance and repair procedures, there is the possibility that you will come into contact with waste transmission lubrication oils. Contact with these oils should be kept to a minimum to reduce the risk of skin irritation and disease. Always use appropriate PPE when working on these systems."
    },
    {
      question: "What is the main hazard when working with light vehicle electrical and electronic systems?",
      options: [
        "High temperature components",
        "The possible risk of electric shock",
        "Toxic fumes",
        "Noise levels"
      ],
      correctAnswer: 1,
      explanation: "Working with any electrical system has its hazards, and you must take safety seriously. When you are working with light vehicle electrical and electronic systems, the main hazard is the possible risk of electric shock. For more information on basic first aid for electrical injuries, see Table 1.3 in Chapter 1, page 18."
    },
    {
      question: "What voltage do most light vehicle electrical systems operate at?",
      options: [
        "6V",
        "Low voltages of around 12V",
        "24V",
        "48V"
      ],
      correctAnswer: 1,
      explanation: "Although most systems operate with low voltages of around 12V, an accidental electrical discharge caused by incorrect circuit connection can be enough to cause severe burns. You should always isolate electrical systems before conducting the repair or replacement of components."
    },
    {
      question: "How can you normally identify the high voltage system in hybrid vehicles?",
      options: [
        "By the vehicle's color",
        "By its reinforced insulation and shielding, which is often brightly coloured",
        "By the manufacturer's logo",
        "By the engine size"
      ],
      correctAnswer: 1,
      explanation: "If you are working on hybrid vehicles, take care not to disturb the high voltage system. You can normally identify the high voltage system by its reinforced insulation and shielding, which is often brightly coloured. These systems carry voltages that can cause severe injury or death. If you carry out repairs to hybrid vehicles, always follow the manufacturer's recommendations."
    },
    {
      question: "What should you always check before using measuring equipment?",
      options: [
        "The manufacturer's warranty",
        "That it is accurate and calibrated before you take any readings",
        "The battery level only",
        "The color of the display"
      ],
      correctAnswer: 1,
      explanation: "Always use the correct tools and equipment. Damage to components, tools or personal injury could occur if the wrong tool is used or a tool is misused. Check tools and equipment before each use. If you are using measuring equipment, always check that it is accurate and calibrated before you take any readings."
    },
    {
      question: "What should you check when replacing electrical or electronic components?",
      options: [
        "Only the price",
        "That the quality meets the original equipment manufacturer (OEM) specifications",
        "Only the color",
        "Only the weight"
      ],
      correctAnswer: 1,
      explanation: "If you need to replace any electrical or electronic components, always check that the quality meets the original equipment manufacturer (OEM) specifications. (If the vehicle is under warranty, inferior parts or deliberate modification might make the warranty invalid. Also, if parts of an inferior quality are fitted, this might affect vehicle performance and safety.) You should only carry out the replacement of electrical components if the parts comply with the legal requirements for road use."
    },
    {
      question: "According to the information sources table, what is an example of information from verbal communication with the driver?",
      options: [
        "The VIN number",
        "A description of the symptoms that occur when driving the car",
        "The service history dates",
        "The warranty expiration date"
      ],
      correctAnswer: 1,
      explanation: "Verbal information from the driver provides a description of the symptoms that occur when driving the car. This initial customer description is crucial for beginning the diagnostic process and understanding what problems the vehicle is experiencing."
    },
    {
      question: "What information can vehicle identification numbers provide?",
      options: [
        "The driver's address",
        "Model year taken from VIN plate",
        "The fuel level",
        "The tire pressure"
      ],
      correctAnswer: 1,
      explanation: "Vehicle identification numbers can provide the model year taken from VIN plate. This information is essential for ensuring you have the correct technical data, parts specifications, and diagnostic procedures for the specific vehicle."
    },
    {
      question: "What can service and repair history tell you?",
      options: [
        "The driver's preferences",
        "A check of the service history that shows when the clutch was last replaced",
        "The fuel economy",
        "The insurance premium"
      ],
      correctAnswer: 1,
      explanation: "Service and repair history provides information such as a check of the service history that shows when the clutch was last replaced. This historical data can help identify patterns, determine if maintenance has been followed, and inform diagnostic decisions."
    },
    {
      question: "What information can the vehicle handbook provide?",
      options: [
        "The insurance company details",
        "How to correctly choose an automatic gearbox drive range for a certain speed and load (e.g. when towing)",
        "The driver's license number",
        "The fuel station locations"
      ],
      correctAnswer: 1,
      explanation: "The vehicle handbook can confirm how to correctly choose an automatic gearbox drive range for a certain speed and load (e.g. when towing). This official manufacturer information ensures proper vehicle operation and prevents damage from incorrect usage."
    },
    {
      question: "What information can wiring diagrams provide?",
      options: [
        "Fluid capacity information",
        "To trace the electrical circuit used for powering the solenoids of a dual clutch system",
        "Torque specifications",
        "Wheel alignment settings"
      ],
      correctAnswer: 1,
      explanation: "Wiring diagrams allow you to trace the electrical circuit used for powering the solenoids of a dual clutch system. These detailed electrical schematics are essential for diagnosing electrical faults in transmission systems."
    },
    {
      question: "What is the purpose of the ECU in light vehicle transmission systems?",
      options: [
        "To filter the transmission fluid",
        "The ECU is designed to monitor and control the operation of light vehicle electrical systems; it processes information received and operates actuators that control gearbox and driveline systems",
        "To lubricate the gears",
        "To cool the transmission"
      ],
      correctAnswer: 1,
      explanation: "The electronic control unit (ECU) is designed to monitor and control the operation of light vehicle electrical systems. It processes the information received and operates actuators that control gearbox and driveline systems for effective transmission of power to the road wheels."
    },
    {
      question: "What do sensors in transmission systems monitor?",
      options: [
        "Only the fuel level",
        "Various vehicle speed and load conditions against set parameters; these loads create signals in the form of resistance changes (voltage)",
        "Only the tire pressure",
        "Only the engine temperature"
      ],
      correctAnswer: 1,
      explanation: "The sensors monitor various vehicle speed and load conditions against set parameters. As the driver and road conditions make demands on the engine and drive, these loads create signals in the form of resistance changes (voltage), which are relayed to the ECU for processing."
    },
    {
      question: "What do actuators in transmission systems do?",
      options: [
        "Monitor sensor signals",
        "Control transmission system operation; motors, solenoids, valves, servos, etc., are operated by the ECU to control the action of gearboxes and driveline",
        "Store diagnostic codes",
        "Display information to the driver"
      ],
      correctAnswer: 1,
      explanation: "The actuators are used to control transmission system operation. Motors, solenoids, valves, servos, etc., are operated by the ECU to help control the action of gearboxes and driveline and provide the most appropriate gear range for effective vehicle performance."
    },
    {
      question: "Why do sensors normally operate with a stabilised 5-volt supply?",
      options: [
        "To save battery power",
        "Because battery voltage constantly rises and falls during normal vehicle operation; sensors need a stable reference voltage",
        "To reduce heat generation",
        "To comply with emissions regulations"
      ],
      correctAnswer: 1,
      explanation: "The ECU needs reliable sensor information in order to correctly determine the needs of the transmission system. If battery voltage was used to power sensors, its unstable nature would create issues (battery voltage constantly rises and falls during normal vehicle operation). Because of this, sensors normally operate with a stabilised 5-volt supply."
    },
    {
      question: "What do digital principles involve in vehicle transmission systems?",
      options: [
        "Analog voltage measurement",
        "Converting analogue signals (rising or falling voltage) into digital (on and off) signals using a pulse shaper or Schmitt trigger",
        "Mechanical switching only",
        "Hydraulic pressure conversion"
      ],
      correctAnswer: 1,
      explanation: "Many vehicle sensors create analogue signals (a rising or falling voltage). The ECU is a computer and needs to have these signals converted into digital (on and off) before they can be processed. This can be done using a component called a pulse shaper or Schmitt trigger."
    },
    {
      question: "What is PWM and how does it work?",
      options: [
        "Power Wiring Module - a fuse box system",
        "Pulse Width Modulation - switching components on and off very quickly so they only receive part of the current/voltage available",
        "Pressure Wave Measurement - for hydraulic systems",
        "Permanent Wire Management - cable routing"
      ],
      correctAnswer: 1,
      explanation: "Lots of electrical equipment and electronic actuators can be controlled by duty cycle or pulse width modulation (PWM). This works by switching components on and off very quickly so that they only receive part of the current/voltage available. Depending on the reaction time of the component being switched and how long power is supplied, variable control is achieved. This is more efficient than using resistors to control the current/voltage in a circuit."
    },
    {
      question: "Why are fibre optics used in vehicle transmission technology?",
      options: [
        "To reduce weight only",
        "To keep up with developments in vehicle transmission technology; the demand for high speed communication of information and data has increased; light signals transmitted along thin strands of glass provide digital data transmission",
        "To improve fuel economy",
        "To reduce manufacturing costs"
      ],
      correctAnswer: 1,
      explanation: "To keep up with developments in vehicle transmission technology, the demand for high speed communication of information and data has increased. Fibre optics use light signals transmitted along thin strands of glass to provide digital data transmission. (The light source is switched on and off.) In this way, information is transmitted essentially at the speed of light."
    },
    {
      question: "What is the possible use of an oscilloscope in transmission diagnosis?",
      options: [
        "To measure fuel pressure",
        "To test the signal produced by a vehicle speed sensor (VSS)",
        "To check tire pressure",
        "To measure engine compression"
      ],
      correctAnswer: 1,
      explanation: "An oscilloscope can be used to test the signal produced by a vehicle speed sensor (VSS). This allows technicians to visualize the waveform and identify issues with sensor operation, signal quality, or timing."
    },
    {
      question: "What is a multimeter used for in transmission diagnosis?",
      options: [
        "To measure hydraulic pressure",
        "To conduct a volt drop test on a clutch actuator",
        "To check fluid levels",
        "To measure torque"
      ],
      correctAnswer: 1,
      explanation: "A multimeter can be used to conduct a volt drop test on a clutch actuator. This helps identify resistance problems in circuits, poor connections, or failing components by measuring the voltage loss across a circuit or component."
    },
    {
      question: "What important caution should be observed when using test lamps on electronic systems?",
      options: [
        "They should be used frequently",
        "Always use test lamps with extreme caution on electronic systems, as the current draw created can severely damage components",
        "They are safer than multimeters",
        "They should be connected to the battery directly"
      ],
      correctAnswer: 1,
      explanation: "Test lamps/logic probes can be used to test the existence of system voltage at the automatic transmission inhibitor switch. However, always use test lamps with extreme caution on electronic systems, as the current draw created can severely damage components. Modern electronic systems require low-current test equipment."
    },
    {
      question: "What is a power probe used for in transmission systems?",
      options: [
        "To measure fluid temperature",
        "To power an automatic transmission shift solenoid",
        "To check gear ratios",
        "To measure engine speed"
      ],
      correctAnswer: 1,
      explanation: "A power probe can be used to power an automatic transmission shift solenoid. This allows technicians to test whether a solenoid operates correctly when power is applied, helping to isolate electrical faults from mechanical failures."
    },
    {
      question: "What can a code reader/scan tool do for transmission diagnosis?",
      options: [
        "Only display the VIN number",
        "Retrieve diagnostic trouble codes (DTCs) related to the transmission system, clear trouble codes, reset the malfunction indicator lamp, and evaluate the effectiveness of repairs",
        "Only check tire pressure",
        "Only measure fuel consumption"
      ],
      correctAnswer: 1,
      explanation: "A code reader/scan tool can retrieve diagnostic trouble codes (DTCs) related to the transmission system. It can also clear trouble codes, reset the malfunction indicator lamp, and evaluate the effectiveness of repairs. This is essential for modern electronic transmission diagnosis."
    }
  ]
};
