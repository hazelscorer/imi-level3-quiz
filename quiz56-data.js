const quizData = {
  quizNumber: 56,
  title: "CVT Systems & Driveline Components",
  pageNumbers: "280-284",
  questions: [
    {
      question: "In the case study, what was Mr Simpson's complaint about his automatic transmission?",
      options: [
        "It was making strange noises",
        "It has stopped changing gear",
        "It was leaking fluid",
        "The clutch was slipping"
      ],
      correctAnswer: 1,
      explanation: "Mr Simpson brings his car into your garage and complains that his automatic transmission has stopped changing gear. Your boss asks you to check it out."
    },
    {
      question: "According to the case study, what fault code was stored in the diagnostic trouble codes?",
      options: [
        "P0500 Wheel Speed Sensor",
        "P0721 Output Speed Sensor Circuit Range/Performance",
        "P0300 Engine Misfire",
        "P0420 Catalyst System"
      ],
      correctAnswer: 1,
      explanation: "In the case study diagnostic process, after using a scan tool to check for diagnostic trouble codes, the fault code P0721 Output Speed Sensor Circuit Range/Performance was found to be stored, indicating an issue with the output speed sensor."
    },
    {
      question: "What is a continuously variable transmission (CVT)?",
      options: [
        "A manual transmission with many gears",
        "A form of automatic transmission that instead of using a fixed set of five or six gear ratios is able to offer a stepless ratio between an upper and lower limit",
        "A transmission that only works in one gear",
        "A transmission that uses chains instead of gears"
      ],
      correctAnswer: 1,
      explanation: "A continuously variable transmission (CVT) gearbox is a form of automatic transmission. Instead of using a fixed set of five or six gear ratios, it is able to offer a stepless ratio between an upper and lower limit. This means that, when coupled to an engine, a CVT gearbox is always able to run within its optimum range."
    },
    {
      question: "What are the two main types of CVT?",
      options: [
        "Manual and automatic",
        "Variable diameter pulley (VDP) and toroidal CVT",
        "Belt drive and chain drive",
        "Hydraulic and electric"
      ],
      correctAnswer: 1,
      explanation: "Two main types of CVT are used: variable diameter pulley (VDP) and toroidal CVT. Each type uses different mechanisms to achieve continuously variable gear ratios."
    },
    {
      question: "How does a variable diameter pulley (VDP) CVT work?",
      options: [
        "Using planetary gears",
        "VDP uses a drive belt held between two pulleys similar to the chain and sprockets on a bicycle; by changing the size of the drive pulleys, different gear ratios can be created",
        "Using hydraulic pressure only",
        "Using electric motors"
      ],
      correctAnswer: 1,
      explanation: "Instead of using mechanical gear sets, as in an epicyclic gear train, VDP uses a drive belt held between two pulleys similar to the chain and sprockets on a bicycle. Originally this belt was made of rubber, but as technology has developed, a steel drive belt has replaced the original design. A bicycle is able to vary its gearing by changing the size of the sprocket on which the drive chain runs. VDP operates by changing the size of the drive pulleys, which allows different gear ratios to be created."
    },
    {
      question: "How do the pulleys in a VDP system change the gear ratio?",
      options: [
        "They spin at different speeds",
        "The drive pulleys expand and contract; in this way, the drive belt is able to ride up and down within the pulleys, varying their size and therefore the gear ratio",
        "They slide along a shaft",
        "They use magnetic forces"
      ],
      correctAnswer: 1,
      explanation: "To do this, the drive pulleys expand and contract. In this way, the drive belt is able to ride up and down within the pulleys, varying their size and therefore the gear ratio. As one pulley expands, the other will contract equally."
    },
    {
      question: "What is the steel drive belt in a VDP system made of?",
      options: [
        "A solid steel cable",
        "Many small links held together on a metal band",
        "A rubber belt with steel reinforcement",
        "A chain"
      ],
      correctAnswer: 1,
      explanation: "The steel drive belt is made up of many small links held together on a metal band. As the drive pulleys rotate, the metal links are forced into compression, causing the belt to push rather than pull. This design allows for more efficient power transmission and durability."
    },
    {
      question: "Why must the output from the drive pulleys in a VDP be transmitted through a further reduction gear?",
      options: [
        "To increase speed",
        "Because these pulleys do not rely on fixed gear sizes, a stepless gear ratio can be achieved that maintains optimum efficiency for any engine speed or load; the output is normally transmitted through a further reduction gear, which can be of epicyclic design to allow reverse gear to also be included",
        "To reduce noise",
        "To improve fuel economy only"
      ],
      correctAnswer: 1,
      explanation: "Because these pulleys do not rely on fixed gear sizes, a stepless gear ratio can be achieved that maintains optimum efficiency for any engine speed or load. The output from the drive pulleys is normally transmitted through a further reduction gear, which can be of epicyclic design. This allows a reverse gear to also be included."
    },
    {
      question: "What is a concave surface in the context of toroidal CVT?",
      options: [
        "A flat surface",
        "Curved inwards",
        "Curved outwards",
        "A square surface"
      ],
      correctAnswer: 1,
      explanation: "Concave – curved inwards. In a toroidal CVT, the input and output discs are placed face to face to form a concave driving surface, which is essential for the operation of the torus-shaped rollers."
    },
    {
      question: "What is a torus in the context of toroidal CVT?",
      options: [
        "A square shape",
        "Ring-shaped like a doughnut",
        "A triangle",
        "A cylinder"
      ],
      correctAnswer: 1,
      explanation: "Torus – ring-shaped like a doughnut. The toroidal CVT uses torus-shaped rollers that ride against the concave surfaces of the input and output discs to transfer turning effort between them."
    },
    {
      question: "How does a toroidal CVT work?",
      options: [
        "Using belts and pulleys",
        "A toroidal CVT has a tapered input disc and output disc placed face to face to form a concave driving surface; the discs are able to turn independently using torus-shaped rollers connected by one another, able to ride up and down against the concave surface transferring turning effort between the two",
        "Using chains and sprockets",
        "Using hydraulic pressure only"
      ],
      correctAnswer: 1,
      explanation: "A toroidal CVT has a tapered input disc and output disc, which are placed face to face to form a concave driving surface. The input and output discs are able to turn independently of one another and are connected using torus-shaped rollers. The rollers are able to ride up and down against the concave surface of the input and output drive discs and transfer turning effort between the two."
    },
    {
      question: "How is a low gear ratio achieved in a toroidal CVT?",
      options: [
        "When the roller touches a high point on both discs",
        "When the roller is touching a low point on the input disc curve and a high point on the output disc curve",
        "When the roller is stationary",
        "When the roller touches the center of both discs"
      ],
      correctAnswer: 1,
      explanation: "When the roller is touching a low point on the input disc curve and a high point on the output disc curve, a low gear ratio is achieved. This configuration provides maximum torque multiplication."
    },
    {
      question: "How is a high gear ratio achieved in a toroidal CVT?",
      options: [
        "When the roller touches a low point on both discs",
        "When the roller is touching a high point on the input disc curve and a low point on the output disc curve",
        "When the roller is removed",
        "When additional rollers are added"
      ],
      correctAnswer: 1,
      explanation: "When the roller is touching a high point on the input disc curve and a low point on the output disc curve, a high gear ratio is achieved. This configuration is used for higher speeds with less torque multiplication."
    },
    {
      question: "What happens by moving the rollers across the surfaces of the input and output discs in a toroidal CVT?",
      options: [
        "The transmission locks up",
        "A continuously variable transmission (CVT) ratio can be achieved",
        "The transmission goes into neutral",
        "The engine stalls"
      ],
      correctAnswer: 1,
      explanation: "By moving the rollers across the surfaces of the input and output discs, a continuously variable transmission (CVT) ratio can be achieved. The output from the drive disc is normally transmitted through a further reduction gear, which can be of epicyclic design. This allows a reverse gear to also be included."
    },
    {
      question: "What are the three main methods used to achieve drive connection to a CVT system?",
      options: [
        "Manual clutch, automatic clutch, and hydraulic clutch",
        "Torque converter, centrifugal clutch, and electromagnetic clutch",
        "Belt drive, chain drive, and gear drive",
        "Direct drive, overdrive, and reverse drive"
      ],
      correctAnswer: 1,
      explanation: "To join the engine to a continuously variable transmission system and allow a smooth take-up of drive and a temporary position of neutral, some form of clutch or torque converter is required. Three main methods are used to achieve this: torque converter, centrifugal clutch, and electromagnetic clutch."
    },
    {
      question: "What is a disadvantage of using a torque converter with CVT?",
      options: [
        "It's too expensive",
        "If a CVT is connected to the engine via a standard torque converter, some efficiency can be lost due to the drag created by the automatic transmission fluid and its overall weight",
        "It's too small",
        "It makes too much noise"
      ],
      correctAnswer: 1,
      explanation: "Torque converter: If a CVT is connected to the engine via a standard torque converter, some efficiency can be lost due to the drag created by the automatic transmission fluid and its overall weight. However, torque converters provide smooth engagement and are well-proven technology."
    },
    {
      question: "How does a centrifugal clutch work in CVT systems?",
      options: [
        "It uses hydraulic pressure",
        "Early systems used a centrifugal clutch in which a set of clutch shoes, similar in construction to brake shoes, were rotated by the engine; centrifugal force acting on the shoes moved them outwards until they contacted a drive drum, transmitting drive to the CVT",
        "It uses electric motors",
        "It uses magnetic forces"
      ],
      correctAnswer: 1,
      explanation: "Centrifugal clutch: Early systems used a centrifugal clutch in which a set of clutch shoes, similar in construction to brake shoes, were rotated by the engine. Centrifugal force acting on the shoes moved them outwards until they contacted a drive drum. This drive was then transmitted to the CVT system. This was also a very inefficient drive connection between the engine and the gearbox."
    },
    {
      question: "How does an electromagnetic clutch work in CVT systems?",
      options: [
        "Using only mechanical springs",
        "A housing of similar size and shape to a standard clutch is mounted on the end of the engine crankshaft; the housing contains a metallic powder, which when energised by an electromagnet, bonds together to provide drive to the CVT",
        "Using hydraulic fluid",
        "Using belt tension"
      ],
      correctAnswer: 1,
      explanation: "Electromagnetic clutch: In this system, a housing of similar size and shape to a standard clutch is mounted on the end of the engine crankshaft. The housing contains a metallic powder, which when energised by an electromagnet, bonds together to provide drive to the CVT. The electromagnet is managed by a transmission ECU, which is able to vary the strength of the magnetic field and therefore control the take-up of drive."
    },
    {
      question: "What is a propeller shaft used for?",
      options: [
        "To drive the front wheels only",
        "Usually called the prop shaft; it is used on front engine rear-wheel drive vehicles and four-wheel drive vehicles; simply a metal tube, strong enough to transmit the full power of the engine and the torque multiplied by the gearbox",
        "To drive the steering system",
        "To operate the brakes"
      ],
      correctAnswer: 1,
      explanation: "The propeller shaft is usually called the prop shaft. It is used on front engine rear-wheel drive vehicles and four-wheel drive vehicles. It is simply a metal tube, strong enough to transmit the full power of the engine and the torque multiplied by the gearbox. The prop shaft is connected to the back end of the gearbox and runs underneath the floor to join it to the back axle."
    },
    {
      question: "What is a universal joint (UJ)?",
      options: [
        "A fixed connection",
        "A mechanism that allows drive to be transmitted through an angle",
        "A type of gear",
        "A hydraulic coupling"
      ],
      correctAnswer: 1,
      explanation: "Universal joint (UJ) – a mechanism that allows drive to be transmitted through an angle. At each end of the prop shaft, a universal joint (UJ) is needed. As the suspension moves up and down, a difference in height occurs between the rear axle and the gearbox."
    },
    {
      question: "Why are universal joints needed at each end of the prop shaft?",
      options: [
        "To increase torque",
        "As the suspension moves up and down, a difference in height occurs between the rear axle and the gearbox; using universal joints allows the drive to be transmitted without bending the prop shaft",
        "To reduce noise",
        "To improve fuel economy"
      ],
      correctAnswer: 1,
      explanation: "At each end of the prop shaft, a universal joint (UJ) is needed. As the suspension moves up and down, a difference in height occurs between the rear axle and the gearbox. Using universal joints allows the drive to be transmitted without bending the prop shaft. (Some prop shafts are split in two with an additional universal joint mounted in the middle.)"
    },
    {
      question: "What is a yoke in the context of universal joints?",
      options: [
        "A type of spring",
        "A connection between two components so that they move together",
        "A hydraulic pump",
        "An electric motor"
      ],
      correctAnswer: 1,
      explanation: "Yoke – a connection between two components so that they move together. In a universal joint, yokes are pivoted on a central crosspiece to allow the transmission of drive through an angle."
    },
    {
      question: "What is the most common type of universal joint?",
      options: [
        "Ball joint",
        "Hooke's UJ made up of two yokes pivoted on a central crosspiece, sometimes called a spider",
        "Constant velocity joint",
        "Flexible coupling"
      ],
      correctAnswer: 1,
      explanation: "The most common type of universal joint is Hooke's UJ. This is made up of two yokes pivoted on a central crosspiece, sometimes called a spider. The spider is formed by two pins crossing over each other at right angles. The yokes, one on the input shaft and the other on the output shaft, are connected to the spider so they are at right angles to each other."
    },
    {
      question: "How does Hooke's UJ arrangement allow the shafts to rotate?",
      options: [
        "Only when perfectly aligned",
        "This arrangement allows the input and output shafts to rotate together even when their axes are at different angles",
        "Only in one direction",
        "Only at the same speed"
      ],
      correctAnswer: 1,
      explanation: "The yokes, one on the input shaft and the other on the output shaft, are connected to the spider so they are at right angles to each other. This arrangement allows the input and output shafts to rotate together even when their axes are at different angles. This is essential for handling suspension movement while maintaining drive."
    },
    {
      question: "According to the case study, what was done after connecting an oscilloscope to the output speed sensor?",
      options: [
        "The sensor was immediately replaced",
        "A check was performed for correct function; no wave form was produced, meaning the sensor is faulty",
        "The transmission was rebuilt",
        "The fluid was changed"
      ],
      correctAnswer: 1,
      explanation: "In the case study, after connecting an oscilloscope to the output speed sensor and checking for correct function, no wave form was produced, meaning that the sensor is faulty. This confirmed the diagnostic trouble code and led to the decision to strip out and replace the faulty speed sensor."
    }
  ]
};
