const quizData = {
  quizNumber: 58,
  title: "Limited Slip Differentials & 4WD Systems",
  pageNumbers: "290-294",
  questions: [
    {
      question: "What is the disadvantage of a standard differential that limited slip differentials address?",
      options: [
        "It's too expensive",
        "A disadvantage of a standard differential is that if one wheel loses traction, nearly all of the turning effort will be directed away from the wheel with grip; this means that one wheel will spin uncontrollably and no drive will be transmitted",
        "It's too heavy",
        "It uses too much oil"
      ],
      correctAnswer: 1,
      explanation: "A disadvantage of a standard differential is that if one wheel loses traction, nearly all of the turning effort will be directed away from the wheel with grip. This means that one wheel will spin uncontrollably and no drive will be transmitted. A limited slip differential (LSD) is designed to address this problem."
    },
    {
      question: "What is a limited slip differential (LSD) designed to do?",
      options: [
        "Increase fuel economy",
        "Transmit an equal torque to both driving wheels when the car is travelling in a straight ahead direction while continuing to allow standard differential action when going round a corner",
        "Reduce engine power",
        "Improve steering response"
      ],
      correctAnswer: 1,
      explanation: "A limited slip differential (LSD) is designed to transmit an equal torque to both driving wheels when the car is travelling in a straight ahead direction while continuing to allow standard differential action when going round a corner. Because of this, if one wheel loses traction, the other will still have some drive transmitted, and this will give greater vehicle control."
    },
    {
      question: "What are the three main methods of limited slip differential in common use?",
      options: [
        "Hydraulic, pneumatic, and electric",
        "Clutch type LSD, viscous coupling type LSD, and torsion wheel type LSD",
        "Belt drive, chain drive, and gear drive",
        "Manual, automatic, and CVT"
      ],
      correctAnswer: 1,
      explanation: "Three main methods of limited slip differential are in common use: clutch type LSD, viscous coupling type LSD, and torsion wheel type LSD. Each uses a different mechanism to limit wheel slip while maintaining differential action."
    },
    {
      question: "How does a clutch type LSD work?",
      options: [
        "Using hydraulic pressure only",
        "A series of multi-plate clutches are included in the design; four planet gears are mounted on two drive pins; the ends of the drive pins are tapered and sit in corresponding tapered grooves in the differential casing",
        "Using magnetic forces",
        "Using electronic sensors"
      ],
      correctAnswer: 1,
      explanation: "In a clutch type limited differential unit, four planet gears are mounted on two drive pins. The ends of the drive pins are tapered and sit in corresponding tapered grooves in the differential casing. A series of multi-plate clutches are included in the design to limit slip."
    },
    {
      question: "What happens when travelling in a straight ahead direction with a clutch type LSD?",
      options: [
        "The clutches disengage",
        "Forces acting on the planet gears cause the drive pins to move up and outwards in the tapered grooves of the casing; this movement creates pressure on the clutches, clamping them together to create friction and transmit drive to both road wheels",
        "Only one wheel receives drive",
        "The differential locks solid"
      ],
      correctAnswer: 1,
      explanation: "When travelling in a straight ahead direction, forces acting on the planet gears cause the drive pins to move up and outwards in the tapered grooves of the casing. This movement creates pressure on the clutches, clamping them together to create friction and transmit drive to both road wheels."
    },
    {
      question: "What happens as the vehicle turns a bend with a clutch type LSD?",
      options: [
        "The clutches lock permanently",
        "The load on the clutches is reduced as the drive pins move back down into the grooves; pressure is reduced on the clutches, allowing them to slip; this lets normal differential action take place",
        "Both wheels stop rotating",
        "The differential fails"
      ],
      correctAnswer: 1,
      explanation: "As the vehicle turns a bend, the load on the clutches is reduced as the drive pins move back down into the grooves. Pressure is reduced on the clutches, allowing them to slip; this lets normal differential action take place."
    },
    {
      question: "What does 'tapered' mean in the context of LSD?",
      options: [
        "Perfectly straight",
        "Angled inwards slightly",
        "Curved outwards",
        "Square shaped"
      ],
      correctAnswer: 1,
      explanation: "Tapered – angled inwards slightly. The tapered ends of the drive pins fit into corresponding tapered grooves in the differential casing, creating the wedging action that applies pressure to the clutches."
    },
    {
      question: "What does 'viscous' mean?",
      options: [
        "Thin and watery",
        "Describes a liquid with a high resistance to flow (a thick liquid)",
        "A solid material",
        "A gas"
      ],
      correctAnswer: 1,
      explanation: "Viscous – describes a liquid with a high resistance to flow (a thick liquid). This property is essential for the operation of viscous coupling type LSDs."
    },
    {
      question: "What is 'drag' in fluid mechanics?",
      options: [
        "Forward motion",
        "Force on an object that resists its movement through a fluid",
        "Acceleration",
        "Weight"
      ],
      correctAnswer: 1,
      explanation: "Drag – force on an object that resists its movement through a fluid. In a viscous coupling, the drag created by the thick liquid helps transmit torque."
    },
    {
      question: "What does 'shear' mean in the context of viscous coupling?",
      options: [
        "To crush something",
        "To slice through something with a similar action to scissors",
        "To twist something",
        "To stretch something"
      ],
      correctAnswer: 1,
      explanation: "Shear – to slice through something with a similar action to scissors. The rotor blades in a viscous coupling shear through the viscous liquid to allow differential action."
    },
    {
      question: "How does a viscous coupling type LSD work?",
      options: [
        "Using clutch plates only",
        "A chamber inside the differential contains a viscous (thick) liquid and a series of rotor blades; when travelling straight ahead, the viscous liquid creates drag, reducing slip in the differential gears and transmitting even torque to both drive shafts",
        "Using worm gears only",
        "Using belt drives"
      ],
      correctAnswer: 1,
      explanation: "A chamber inside the differential contains a viscous (thick) liquid and a series of rotor blades. When travelling in a straight ahead direction, the viscous liquid creates drag. This reduces slip in the differential gears and transmits an even torque to both drive shafts."
    },
    {
      question: "How does the viscous coupling allow normal differential action when turning?",
      options: [
        "The liquid drains out",
        "As the car turns a bend, normal differential action can take place because the rotor blades are able to shear through the viscous liquid, creating an acceptable amount of slip",
        "The rotor blades stop rotating",
        "The chamber opens"
      ],
      correctAnswer: 1,
      explanation: "As the car turns a bend, normal differential action can take place because the rotor blades are able to shear through the viscous liquid, creating an acceptable amount of slip. This allows one wheel to rotate faster than the other."
    },
    {
      question: "What is a worm gear?",
      options: [
        "A standard spur gear",
        "A gear consisting of a spiral threaded shaft and a wheel with teeth that mesh into it",
        "A belt drive system",
        "A chain drive system"
      ],
      correctAnswer: 1,
      explanation: "Worm gear – a gear consisting of a spiral threaded shaft and a wheel with teeth that mesh into it. This type of gear has unique properties useful for torsion wheel type LSDs."
    },
    {
      question: "What is the key characteristic of a worm and wheel gear set?",
      options: [
        "Both directions work equally",
        "In a worm and wheel gear set up, the worm can easily drive the gear, but the gear is unable to drive the worm (this allows drive in one direction only)",
        "Neither can drive the other",
        "They rotate at the same speed"
      ],
      correctAnswer: 1,
      explanation: "A series of worm gears are included in the design of this differential unit. In a worm and wheel gear set up, the worm can easily drive the gear, but the gear is unable to drive the worm (this allows drive in one direction only). This property is essential for the torsion wheel LSD operation."
    },
    {
      question: "How does a torsion wheel type LSD work when travelling straight ahead?",
      options: [
        "The gears disengage",
        "When travelling in a straight ahead direction, gear teeth lock against the worm drive, providing equal torque to both wheels at the same time",
        "Only one wheel receives power",
        "The worm gears spin freely"
      ],
      correctAnswer: 1,
      explanation: "When travelling in a straight ahead direction, gear teeth lock against the worm drive, providing equal torque to both wheels at the same time. The worm gears are locked into the drive shafts and create equal torque to both wheels."
    },
    {
      question: "What happens when turning a corner with a torsion wheel type LSD?",
      options: [
        "Both wheels lock together",
        "As the car turns a bend, one wheel slows down while the other speeds up; when this happens, the worm turns the gear, allowing one wheel to travel faster than the other and provide normal differential action",
        "The differential fails",
        "Power is cut to both wheels"
      ],
      correctAnswer: 1,
      explanation: "As the car turns a bend, one wheel slows down while the other speeds up. When this happens, the worm turns the gear, allowing one wheel to travel faster than the other and provide normal differential action."
    },
    {
      question: "Why is it not advisable to test the brakes of a vehicle with a limited slip differential in a brake rolling road?",
      options: [
        "The LSD will overheat",
        "If you are operating or testing wheels individually, you may obtain inaccurate readings or damage the LSD",
        "The brake rolling road will break",
        "The tires will wear out"
      ],
      correctAnswer: 1,
      explanation: "Safe working: It is advisable not to test the brakes of a vehicle with a limited slip differential in a brake rolling road. If you are operating or testing wheels individually, you may obtain inaccurate readings or damage the LSD."
    },
    {
      question: "What is an automatic brake differential (ABD)?",
      options: [
        "A purely mechanical system",
        "A method of creating the operating characteristics of a limited slip differential, but with the ability to add electronic control",
        "A type of brake pad",
        "A hydraulic brake booster"
      ],
      correctAnswer: 1,
      explanation: "An automatic brake differential (ABD) is a method of creating the operating characteristics of a limited slip differential, but with the ability to add electronic control. A series of multi-plate clutches are mounted in a similar position to those found in a clutch type limited slip differential."
    },
    {
      question: "How is pressure created to activate the clutches in an ABD system?",
      options: [
        "Mechanically only",
        "Pressure to activate the clutches in an ABD system is normally created by an electromagnet; the current flowing in the electromagnet can be varied by an ECU to manage the amount of slip needed at the clutches",
        "Hydraulically only",
        "Pneumatically"
      ],
      correctAnswer: 1,
      explanation: "Pressure to activate the clutches in an ABD system is normally created by an electromagnet. The current flowing in the electromagnet can be varied by an ECU to manage the amount of slip needed at the clutches and provide the best delivery of torque to the most appropriate wheel."
    },
    {
      question: "What is an advantage of ABD compared to a standard limited slip differential?",
      options: [
        "It's cheaper to manufacture",
        "An advantage of this type of system, when compared to a standard limited slip differential, is that it can work in harmony with other active safety systems to provide dynamic vehicle control",
        "It weighs less",
        "It requires no maintenance"
      ],
      correctAnswer: 1,
      explanation: "An advantage of this type of system, when compared to a standard limited slip differential, is that it can work in harmony with other active safety systems to provide dynamic vehicle control. This integration allows for more sophisticated traction and stability management."
    },
    {
      question: "What systems can ABD interact with?",
      options: [
        "Only the braking system",
        "Anti-lock braking systems (ABS), traction control systems (TCS), electronic stability programs (ESP), electronic brake force distribution (EBD), and active yaw control (AYC)",
        "Only the steering system",
        "Only the suspension system"
      ],
      correctAnswer: 1,
      explanation: "Other systems that ABD is able to interact with include: anti-lock braking systems (ABS), traction control systems (TCS), electronic stability programs (ESP), electronic brake force distribution (EBD), and active yaw control (AYC)."
    },
    {
      question: "How is lubrication of final drive systems usually achieved?",
      options: [
        "Pressure feed only",
        "Using splash feed",
        "Dry lubrication",
        "Grease only"
      ],
      correctAnswer: 1,
      explanation: "Lubrication of final drive systems is usually achieved using splash feed. To stop the oil being squashed out from between the gear teeth, you need to use a special type of oil."
    },
    {
      question: "What type of oil is needed for final drive lubrication?",
      options: [
        "Standard engine oil",
        "These specialist transmission and final drive oils are often known as extreme pressure (EP) oils and they usually have a high viscosity grade",
        "Thin hydraulic fluid",
        "Water-based coolant"
      ],
      correctAnswer: 1,
      explanation: "These specialist transmission and final drive oils are often known as extreme pressure (EP) oils and they usually have a high viscosity grade. This is necessary to handle the extreme pressures between gear teeth."
    },
    {
      question: "What is a transfer box?",
      options: [
        "A type of storage compartment",
        "A mechanism used on four-wheel drive vehicles to split the drive between the front and rear axles",
        "A type of gearbox",
        "A fuel tank"
      ],
      correctAnswer: 1,
      explanation: "Transfer box – a mechanism used on four-wheel drive vehicles to split the drive between the front and rear axles. In a four-wheel drive vehicle, the engine can be mounted transversely (sideways) or longitudinally (in a straight line) depending on the manufacturer's design. As drive exits the gearbox, an extra unit called a transfer box is often used."
    },
    {
      question: "Why do vehicles with permanent four-wheel drive often have a central differential?",
      options: [
        "To increase power",
        "When a vehicle is travelling with forward motion, the front axle reaches a bend first; because of this, the front axle needs to be travelling at a different speed from the rear axle; a central differential operates in the same way as a standard differential, but instead of allowing a difference in speed between the right and left wheels, it allows a difference in speed between the front and rear axles",
        "To reduce fuel consumption",
        "To improve steering"
      ],
      correctAnswer: 1,
      explanation: "When a vehicle is travelling with forward motion, the front axle reaches a bend first. Because of this, the front axle needs to be travelling at a different speed from the rear axle. A central differential is sometimes used. This operates in the same way as a standard differential, but instead of allowing a difference in speed between the right and left wheels, it allows a difference in speed between the front and rear axles."
    }
  ]
};
