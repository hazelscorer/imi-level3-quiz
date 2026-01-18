const quizData = {
  quizNumber: 47,
  title: "Airbags & Supplementary Restraint Systems (SRS)",
  pageNumbers: "234-238",
  questions: [
    {
      question: "What are the two types of vehicle safety that modern cars use to protect occupants?",
      options: [
        "Primary and secondary safety",
        "Active and passive safety",
        "Mechanical and electronic safety",
        "Internal and external safety"
      ],
      correctAnswer: 1,
      explanation: "Modern cars come equipped with advanced systems to try to protect the occupants in the event of an accident. There are two types of vehicle safety: active and passive. Active safety attempts to prevent an accident occurring in the first place, while passive safety attempts to protect the occupants of a car in the event of an accident or impact."
    },
    {
      question: "Which of the following is an example of active safety?",
      options: [
        "Airbags and seatbelts",
        "Anti-lock brakes and traction control",
        "Crumple zones and safety cells",
        "Head rests and pre-tensioners"
      ],
      correctAnswer: 1,
      explanation: "Active safety attempts to prevent an accident occurring in the first place and includes systems such as: anti-lock brakes, traction control, electronic stability programs, and emergency brake assist. These systems help the driver maintain control and avoid accidents."
    },
    {
      question: "Which of the following is an example of passive safety?",
      options: [
        "Electronic stability programs",
        "Traction control systems",
        "Safety cells and airbags",
        "Anti-lock braking systems"
      ],
      correctAnswer: 2,
      explanation: "Passive safety attempts to protect the occupants of a car in the event of an accident or impact and includes such systems as: safety cells, side impact protection, crumple zones, head rests, airbags, seatbelts, and pre-tensioner systems. These systems protect occupants after an accident has occurred."
    },
    {
      question: "What does the term SRS stand for?",
      options: [
        "Safety Restraint Sensors",
        "Supplementary Restraint Systems",
        "Secondary Response Systems",
        "Seatbelt Restraint Sensors"
      ],
      correctAnswer: 1,
      explanation: "The term supplementary restraint systems (SRS) is applied to one or more individual systems that provide additional protection in the event of an accident. The most important of these systems are airbags and seatbelt pre-tensioners, which work together to protect occupants."
    },
    {
      question: "How did early mechanical airbag systems activate the airbag or pre-tensioner?",
      options: [
        "Using electronic crash sensors",
        "Using a triggering mechanism similar to a gun with metal weights",
        "Using hydraulic pressure",
        "Using spring tension"
      ],
      correctAnswer: 1,
      explanation: "Early systems for activating airbags and pre-tensioners were mechanical and used a triggering mechanism similar to a gun. In the event of an impact, metal weights were used to activate the airbag or pre-tensioner by either igniting a small explosive which started a chemical reaction in the airbag, creating a gas to inflate it, or operating a piston in the pre-tensioner unit of the seat belt."
    },
    {
      question: "Why were mechanical airbags and pre-tensioners considered unstable and prone to accidental deployment?",
      options: [
        "They were too sensitive to minor vibrations",
        "They were mechanical and used triggering mechanisms with metal weights that could be set off by sudden shocks",
        "They had weak springs that could fail",
        "They relied on electronic sensors that malfunctioned"
      ],
      correctAnswer: 1,
      explanation: "According to the safe working notice, mechanical airbags and pre-tensioners were unstable and prone to accidental deployment. For this reason, you must take care when working around a mechanical airbag as sudden shocks could cause the firing mechanism to go off. This is why they were replaced by more reliable electronic systems."
    },
    {
      question: "What are the main components of electronic SRS systems?",
      options: [
        "Battery, alternator, and starter motor",
        "Driver's airbags, passenger's airbags, door-mounted airbags, seat-mounted airbags, curtain shield airbags, roll over airbags, lower dash airbags, and seatbelt pre-tensioners",
        "Steering wheel, dashboard, and doors",
        "ECU, wiring, and switches only"
      ],
      correctAnswer: 1,
      explanation: "Electronic SRS systems are now the most common, as they give precise control and increased levels of safety. Electronic SRS components include: Driver's airbags (steering wheel), Passenger's airbags (dashboard), Door-mounted airbags (door panel), Seat-mounted airbags (seat), Curtain shield airbags (roof edges/windows), Roll over airbags (headlining), Lower dash airbags (dashboard bottom section), and Seatbelt pre-tensioners and force limiters."
    },
    {
      question: "Where are driver's airbags mounted?",
      options: [
        "In the dashboard",
        "On the steering wheel",
        "In the door panel",
        "In the seat"
      ],
      correctAnswer: 1,
      explanation: "Driver's airbags are mounted on the steering wheel to protect the head and face in the event of a frontal impact. This strategic positioning ensures the airbag deploys directly in front of the driver during a collision."
    },
    {
      question: "What is the purpose of curtain shield airbags?",
      options: [
        "To protect occupants during a frontal impact",
        "To protect occupants from broken glass in the event of a side impact",
        "To protect the driver's legs",
        "To protect occupants during a rear impact"
      ],
      correctAnswer: 1,
      explanation: "Curtain shield airbags are mounted at the edges of the roof headlining and deploy across the windows to help protect occupants from broken glass in the event of a side impact. They create a protective barrier between the occupants and the side windows."
    },
    {
      question: "What do seatbelt pre-tensioners and force limiters do?",
      options: [
        "They loosen the seatbelt during an impact",
        "They work in conjunction with airbags to put occupants in the correct position for safest contact",
        "They lock the seatbelt permanently",
        "They automatically adjust seatbelt length for different drivers"
      ],
      correctAnswer: 1,
      explanation: "Seatbelt pre-tensioners and force limiters work in conjunction with the airbags and are designed to put occupants in the correct position for safest contact with the airbags. Pre-tensioners tighten the seatbelt rapidly at the start of an impact, while force limiters then allow controlled movement to prevent injury from the belt itself."
    },
    {
      question: "What is the job of crash sensors mounted around the car?",
      options: [
        "To monitor vehicle speed",
        "To send a signal to the SRS ECU in the event of an impact",
        "To control the steering system",
        "To activate the braking system"
      ],
      correctAnswer: 1,
      explanation: "Mounted around the car in strategic positions are a number of crash sensors. It is their job to send a signal to the SRS ECU in the event of an impact. These sensors detect the collision and provide the critical information needed for the ECU to determine whether to deploy the airbags."
    },
    {
      question: "What additional sensing mechanism does the SRS ECU contain?",
      options: [
        "A speed sensor",
        "A temperature sensor",
        "A second sensing mechanism called the safing sensor that detects rate of deceleration and angle of impact",
        "A proximity sensor"
      ],
      correctAnswer: 2,
      explanation: "An ECU, usually mounted centrally to the floor of the car, contains a second sensing mechanism that detects the rate of deceleration and the angle of impact. This second sensor is often referred to as the safing sensor. It provides additional verification that deployment is necessary, preventing false deployments."
    },
    {
      question: "At approximately what angle do front airbags often need an impact to activate?",
      options: [
        "10 degrees",
        "30 degrees",
        "60 degrees",
        "90 degrees"
      ],
      correctAnswer: 1,
      explanation: "Front airbags often need an impact of around 30 degrees to the centre line of the vehicle against an immovable object in order to activate. Many airbags are designed not to deploy if the impact occurs below a set speed, typically around 10-20 mph. This ensures airbags only deploy when truly necessary."
    },
    {
      question: "What does the safing sensor determine before triggering airbag deployment?",
      options: [
        "Vehicle color and model",
        "Whether the impact is happening at above a predetermined speed and within a certain impact angle",
        "Whether the doors are locked",
        "Whether passengers are present"
      ],
      correctAnswer: 1,
      explanation: "In the event of an accident, the crash sensor sends a signal to the ECU. If the safing sensor determines that the impact is happening at above a predetermined speed and within a certain impact angle, it will trigger the seatbelt pre-tensioners and deploy one or more airbags. This dual-sensor system prevents unnecessary deployments."
    },
    {
      question: "What is a squib in an airbag system?",
      options: [
        "A type of sensor",
        "A small explosive detonator used to start the deployment of an airbag",
        "A safety lock mechanism",
        "A gas storage container"
      ],
      correctAnswer: 1,
      explanation: "When an impact occurs which meets the predetermined criteria, the ECU will actuate a small igniter device in the airbag unit called a squib. The squib is an explosive detonator which heats up chemicals stored in a gas generator unit. A chemical reaction creates a large quantity of nitrogen and carbon dioxide gas, which is used to inflate the airbag."
    },
    {
      question: "To what pressure does an airbag typically inflate?",
      options: [
        "0.1 bar",
        "0.5 bar",
        "1.5 bar",
        "2.5 bar"
      ],
      correctAnswer: 1,
      explanation: "The airbag will inflate to a pressure of around 0.5 bar and help cushion the impact on the occupant. As soon as the individual has collided with the airbag, large holes in the rear of the bag are designed to allow the gas to escape, and the bag rapidly deflates. This controlled deflation is essential for occupant safety."
    },
    {
      question: "At what speed does the nylon airbag burst out from its cover?",
      options: [
        "50 mph",
        "100 mph",
        "Over 200 mph",
        "300 mph"
      ],
      correctAnswer: 2,
      explanation: "The nylon airbag will then burst out from its cover at over 200 mph. This extremely rapid deployment is necessary to ensure the airbag is fully inflated before the occupant makes contact with it during the collision."
    },
    {
      question: "Why are passenger airbags generally much larger than driver's airbags?",
      options: [
        "Because passengers are typically larger than drivers",
        "Because they need to have a capacity up to five times that of a driver's airbag",
        "Because they contain more gas",
        "Because passengers sit further from the dashboard"
      ],
      correctAnswer: 1,
      explanation: "Passenger airbags normally function in a similar manner to the driver's airbag, although they are generally much larger, having a capacity up to five times that found on a steering wheel airbag. Frontal airbags are designed to work in conjunction with seatbelt mechanisms so that the occupant is in the correct position for their face to impact the bag in the middle."
    },
    {
      question: "How are curtain shield and roll over airbags deployed?",
      options: [
        "Using mechanical springs",
        "Using a pre-pressurised gas container",
        "Using hydraulic pressure",
        "Using compressed air from the tires"
      ],
      correctAnswer: 1,
      explanation: "Additional airbags, such as curtain shield and roll over, may be deployed using a pre-pressurised gas container. In the event of an impact of sufficient speed and direction, a signal from the ECU ignites a squib which punctures a gas container. The pressurised gas is allowed to escape into the nylon airbags, deploying them at high speed."
    },
    {
      question: "What is Mylar and how is it used in airbag systems?",
      options: [
        "A metal used for sensors",
        "A form of polyester resin used to make heat-resistant plastic films and sheet",
        "A type of explosive for the squib",
        "A gas used to inflate airbags"
      ],
      correctAnswer: 1,
      explanation: "Mylar is a form of polyester resin used to make heat-resistant plastic films and sheet. In airbag systems, a Mylar tape is wound in a similar manner to the spring found inside a clock, and is able to wind up and unwind with steering wheel rotation. One end of the Mylar tape is connected to the fixed wiring on the steering column, and the other end is connected to the steering wheel, allowing a constant electrical connection to be maintained with the airbag unit at all times."
    },
    {
      question: "What is the purpose of clock springs in SRS systems?",
      options: [
        "To measure time for deployment",
        "To provide a reliable electrical connection that can rotate with steering wheel operation",
        "To store energy for the airbag",
        "To detect crash impacts"
      ],
      correctAnswer: 1,
      explanation: "In order to work correctly, the driver's airbag needs a reliable electrical connection that is able to rotate with steering wheel operation. Conventional wiring and connectors could create a possible problem with premature wear or breakage caused by the constant turning of the steering wheel. To overcome these issues, a special component called a clock spring is fitted between the wiring harness and the airbag module behind the steering wheel."
    },
    {
      question: "Why does the SRS system usually have its own wiring loom separate from the main vehicle wiring?",
      options: [
        "To save money on installation",
        "To help prevent accidental deployment and reduce the possibility of stray electrical signals from other systems activating airbag squibs",
        "To make repairs easier",
        "To increase voltage to the airbags"
      ],
      correctAnswer: 1,
      explanation: "To help prevent accidental deployment of airbags and pyrotechnic pre-tensioners, the SRS system usually has its own wiring loom that is separate from the main vehicle wiring. It is connected in parallel to the main wiring and reduces the possibility of stray electrical signals from other systems activating airbag squibs."
    },
    {
      question: "What color is SRS wiring insulation typically, and why?",
      options: [
        "Red, to indicate high voltage",
        "Black, to match other wiring",
        "Bright yellow, to differentiate it from other vehicle wiring and as a warning that it should be handled/tested with caution",
        "Blue, to indicate low voltage"
      ],
      correctAnswer: 2,
      explanation: "The SRS wiring is usually covered in bright yellow insulation (see Figure 4.71) in order to differentiate it from other vehicle wiring and to act as a warning that it should be handled/tested with caution. This distinctive color helps technicians immediately identify SRS components and take appropriate safety precautions."
    },
    {
      question: "What safety feature do SRS ECUs have regarding stored codes after an accident?",
      options: [
        "Codes are automatically deleted",
        "Codes are stored in memory that cannot be erased, meaning a new unit must be fitted when repairing/resetting the system",
        "Codes can be cleared with a scan tool",
        "Codes are stored on removable memory cards"
      ],
      correctAnswer: 1,
      explanation: "SRS ECUs are designed so that in the event of an accident and airbag deployment, codes are stored in the memory that cannot be erased. This safety feature means that a new unit must be fitted when repairing/resetting the system after an accident. This ensures complete system integrity after deployment."
    },
    {
      question: "What are the two types of mechanical sensors used in SRS systems?",
      options: [
        "Electronic and digital sensors",
        "Mass/inertia sensor and mercury sensor",
        "Optical and acoustic sensors",
        "Thermal and pressure sensors"
      ],
      correctAnswer: 1,
      explanation: "There are a number of different crash and safing sensor types used in the construction of an SRS system. Although mechanical sensors are sometimes used, the most common type in modern SRS is electronic. The two mechanical sensor types mentioned are: Mass/inertia sensor (which has a small weight in the form of a roller or ball housed inside an enclosure that causes the ball or roller to move against a contact spring during impact), and Mercury sensor (which has mercury in a tube that rises up and bridges two electrical contacts when the vehicle decelerates rapidly)."
    }
  ]
};
