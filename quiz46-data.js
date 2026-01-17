const quizData = {
  quizNumber: 46,
  title: "Alarms, Immobilisers & Wiper/Locking Systems",
  pageNumbers: "229-233",
  questions: [
    {
      question: "What backup feature do some alarm sirens contain to ensure continued operation?",
      options: [
        "Solar panels for charging",
        "Their own battery backup",
        "Capacitor storage system",
        "Connection to spare vehicle battery"
      ],
      correctAnswer: 1,
      explanation: "Alarm systems may have a dedicated siren or speakers that can give audible warnings, or they may be directly connected to the vehicle horn. Some sirens contain their own battery backup so that if the wiring to the alarm is cut, the alarm continues to sound. This prevents thieves from disabling the alarm by cutting wires."
    },
    {
      question: "What visual deterrent feature do many alarm systems use in addition to sirens?",
      options: [
        "Strobe lights on the roof",
        "Flashing external lights",
        "Rotating beacon lights",
        "Interior courtesy light flashing"
      ],
      correctAnswer: 1,
      explanation: "When the alarm sounds, many systems also flash external lights as an added deterrent. Lights often also flash to show that the system has been armed, and LEDs can blink to show that the security system is operational. These visual indicators serve as both deterrents and status indicators."
    },
    {
      question: "What are the five ways that immobilisers can disable a vehicle?",
      options: [
        "Ignition cut off, fuel cut off, starter cut off, ignition/fuel/starter ECU, and engine ECU code lock",
        "Battery disconnect, fuel pump disable, spark plug disable, starter solenoid disable, and ECU shutdown",
        "Key disable, door lock, steering lock, brake lock, and transmission lock",
        "Ignition relay, fuel relay, starter relay, ECU relay, and alarm relay"
      ],
      correctAnswer: 0,
      explanation: "Immobilisers are a passive anti-theft system designed to prevent the vehicle from being started and driven away. There are a number of ways to disable the vehicle, including: ignition circuit cut off, fuel system cut off, starter circuit cut off, ignition, fuel, starter ECU, and engine ECU code lock. Some engine management ECUs require programming with dedicated equipment before they are compatible with the vehicle."
    },
    {
      question: "How is an immobiliser/alarm system typically armed and disarmed?",
      options: [
        "By pressing the brake pedal three times",
        "By using a separate switch or transmitter mounted in the vehicle's key fob",
        "By entering a PIN code on the dashboard",
        "By inserting the key and turning it twice"
      ],
      correctAnswer: 1,
      explanation: "To set the immobiliser/alarm, a separate switch or transmitter can be used. This switching mechanism is often mounted in the vehicle's key fob. When a button is pressed on the key fob the system is armed and by pressing another it can be disarmed. The key fob will send out an infrared beam or more likely a short range radio signal that can be picked up by the car's security system."
    },
    {
      question: "What coded signal does the key fob send to the security system?",
      options: [
        "A fixed infrared beam",
        "A magnetic pulse sequence",
        "An infrared or radio signal that can be picked up by the security system",
        "An ultrasonic frequency code"
      ],
      correctAnswer: 2,
      explanation: "The key fob will send out an infrared beam or more likely a short range radio signal that can be picked up by the car's security system. This coded signal is then used to enable or disable the system. To diagnose faults with a key fob specialist tools are available that will flash an LED if they pick up an infrared or radio signal when the button is pressed."
    },
    {
      question: "What happens to many modern alarms and immobilisers after a short delay when the ignition is switched off or doors are locked?",
      options: [
        "They deactivate completely",
        "They enter low-power mode",
        "They are set automatically",
        "They sound a confirmation beep"
      ],
      correctAnswer: 2,
      explanation: "Many modern alarms and immobilisers are set automatically after a short delay once the ignition is switched off or when the doors are locked. This automatic arming feature ensures the vehicle is protected even if the owner forgets to manually activate the security system."
    },
    {
      question: "Under the Road Vehicles (Construction and Use) Regulations 1986, what is the maximum time a vehicle alarm can sound?",
      options: [
        "Three minutes",
        "Five minutes",
        "Ten minutes",
        "Fifteen minutes"
      ],
      correctAnswer: 1,
      explanation: "It is a requirement under the Road Vehicles (Construction and Use) Regulations 1986 to fit a five-minute cut out device to all vehicle alarms. It is also an actionable nuisance for the registered keeper to allow an alarm to sound frequently or for a prolonged period so as to cause a nuisance to local residents and people working in the immediate vicinity."
    },
    {
      question: "According to the Noise and Statutory Nuisance Act 1993, what can councils do if an alarm has been sounding for more than five minutes?",
      options: [
        "Issue a fine to the owner immediately",
        "Serve a Noise Abatement Notice on the owner, or if owner cannot be found, place notice on car",
        "Tow the vehicle to an impound lot",
        "Disconnect the battery themselves"
      ],
      correctAnswer: 1,
      explanation: "The Noise and Statutory Nuisance Act 1993 allows councils to turn off vehicle alarms if they are causing a nuisance. An alarm which has been sounding for more than five minutes and is affecting residents is considered to be a nuisance. Once a nuisance has been established, the council can serve a Noise Abatement Notice on the owner or, if the owner cannot be found, they can place the notice on the car."
    },
    {
      question: "If the owner fails to deactivate a nuisance alarm within one hour after being notified, what can the council do?",
      options: [
        "Issue a court summons",
        "Call out a specialist engineer who may break a window to access the vehicle",
        "Place a wheel clamp on the vehicle",
        "Report it to the police only"
      ],
      correctAnswer: 1,
      explanation: "The notice requires the owner to deactivate the alarm within one hour. If after one hour an alarm is still sounding and the owner has not been found, the law allows the council to deactivate the alarm by calling out a specialist engineer to do so. They may try to open a door but, if necessary, they can break a window. Some vehicles have sophisticated alarms that cannot be deactivated by alarm specialists."
    },
    {
      question: "What do diagnostic scan tools sometimes retrieve that can help locate faulty security system components?",
      options: [
        "Battery voltage readings",
        "Fault codes",
        "Temperature data",
        "GPS coordinates"
      ],
      correctAnswer: 1,
      explanation: "Diagnostic scan tools are sometimes able to retrieve fault codes, which can help locate faulty system components. Due to the nature of vehicle alarms and immobilisers, you will need to have manufacturer's technical information available in order to undertake any system repairs. This specialized information is essential for proper diagnosis and repair."
    },
    {
      question: "What are the two main types of electrical auxiliary comfort and convenience systems mentioned for wipers, washers, and central locking?",
      options: [
        "Manual and automatic systems",
        "Windscreen wipers and washers, and central locking",
        "Front and rear systems",
        "Standard and premium systems"
      ],
      correctAnswer: 1,
      explanation: "Other electrical auxiliary comfort and convenience systems include: windscreen wipers and washers to ensure that the windscreens stay clean and clear during wet conditions, and central locking to assist with security. These systems work together to provide both safety and convenience for the driver."
    },
    {
      question: "How do most windscreen wiper motors rotate when supplied with electricity?",
      options: [
        "Bidirectionally on command",
        "In one direction only",
        "Clockwise only",
        "Counter-clockwise only"
      ],
      correctAnswer: 1,
      explanation: "Most windscreen wiper motors, front and rear, consist of a standard direct current permanent magnet motor. When supplied with electricity, they rotate in one direction only. To provide the reciprocating motion required to move the windscreen wiper arms backwards and forwards across the windscreen, the motor is attached to a crank arm which operates a linkage to control the wipers."
    },
    {
      question: "What is the term for the backwards and forwards motion of windscreen wipers?",
      options: [
        "Oscillating motion",
        "Reciprocating motion",
        "Rotational motion",
        "Linear motion"
      ],
      correctAnswer: 1,
      explanation: "Reciprocating is defined as moving backwards and forwards or up and down. To provide the reciprocating motion required to move the windscreen wiper arms backwards and forwards across the windscreen, the motor is attached to a crank arm which operates a linkage to control the wipers."
    },
    {
      question: "What is a crank in mechanical terms?",
      options: [
        "A type of electric motor",
        "A shaft that is bent at a right angle",
        "A straight connecting rod",
        "A pivot point for rotation"
      ],
      correctAnswer: 1,
      explanation: "A crank is a shaft that is bent at a right angle. This mechanical component is essential in converting the rotational motion of the motor into the reciprocating motion needed for wiper operation. The crank arm operates the linkage that controls the wipers' movement across the windscreen."
    },
    {
      question: "Why is a wiper motor normally connected to a gear mechanism?",
      options: [
        "To increase the motor's voltage",
        "To increase torque but reduce speed",
        "To reduce electrical consumption",
        "To prevent motor overheating"
      ],
      correctAnswer: 1,
      explanation: "A large amount of effort or torque is required to move the windscreen wiper blades, so the motor is normally connected to a gear mechanism which increases torque but reduces speed. This gearing allows the relatively small motor to generate enough force to move the wiper blades effectively across the windscreen."
    },
    {
      question: "In a three-brush, two-speed wiper motor, how is high speed operation achieved?",
      options: [
        "By increasing the voltage to 24V",
        "By supplying power to a third brush mounted closer to the earth brush",
        "By engaging a high-speed gear",
        "By reversing the motor direction"
      ],
      correctAnswer: 1,
      explanation: "To achieve two-speed wiper operation, a three-brush connection can be applied to the wiper motor's commutator (two feed and one earth). The feed and earth brushes are placed opposite each other and, when powered, they drive the motor at standard speed with high torque output. When switched to high speed operation, power is supplied to a third brush which is mounted closer to the earth brush. This means the electric current takes a shorter path through the windings of the electric motor."
    },
    {
      question: "What happens to torque output when a windscreen wiper motor operates at high speed?",
      options: [
        "Torque increases significantly",
        "Torque remains the same",
        "Torque is reduced",
        "Torque doubles"
      ],
      correctAnswer: 2,
      explanation: "The reduced resistance created by taking a short cut increases the current flowing in the motor, which makes it run faster but with a reduced torque output. This trade-off between speed and torque is a fundamental principle in the two-speed wiper motor design."
    },
    {
      question: "What is 'parking' in the context of windscreen wipers?",
      options: [
        "Storing the wiper blades in the service position",
        "Moving the wiper blades completely out of the driver's field of vision when switched off",
        "Setting the wipers to intermittent mode",
        "Locking the wipers in the center position"
      ],
      correctAnswer: 1,
      explanation: "When the windscreen wipers are switched off, a limit switch is often used to stop the arms at the bottom of the screen. Power is cut to the motor and any momentum created by the wiper arms turns the motor into a basic electric generator. The motor now generates electricity moving in the opposite direction to the supplied current flow. This places resistance on the motor and immediately stops the wipers moving. Some advanced wiper systems are then able to reverse the direction of the motor and move the wiper blades completely out of the driver's field of vision; this is known as parking."
    },
    {
      question: "What do some manufacturers provide for electronic control of windscreen wiper delay?",
      options: [
        "A manual timer knob",
        "Systems which allow the time delay to be increased or decreased",
        "Fixed delay intervals only",
        "Voice-activated controls"
      ],
      correctAnswer: 1,
      explanation: "If incorporated with a basic timer circuit, a system of intermittent wipe can be achieved. Some manufacturers are now providing electronic control of windscreen wiper systems, which allows the time delay of the wipers to be increased or decreased depending on how wet the screen is."
    },
    {
      question: "How do rain-sensing wipers determine the necessary wiper frequency and speed?",
      options: [
        "By measuring humidity in the cabin",
        "By using an optical sensor that monitors the amount of light reflected back from the windscreen",
        "By detecting water droplets with electrical sensors",
        "By measuring outside temperature"
      ],
      correctAnswer: 1,
      explanation: "Some cars are now being produced with rain-sensing windscreen wiper operation. A small area of the front windscreen glass, usually located on the outside of the vehicle opposite the rear-view mirror, is monitored by an optical sensor. The sensor is designed to project infrared light at the windshield at an angle and then read the amount of light that is reflected back. A clean windscreen will reflect nearly all of the infrared light back, while a wet or dirty windscreen will cause the light to scatter. The optical sensor can determine the necessary frequency and speed of the windscreen wipers by monitoring the amount of light reflected back into the sensor."
    },
    {
      question: "What type of motor drives the windscreen washer pump?",
      options: [
        "AC motor",
        "Stepper motor",
        "Small permanent magnet DC motor",
        "Servo motor"
      ],
      correctAnswer: 2,
      explanation: "To help clean the windscreen when it becomes dirty, a washer system is used. A small permanent magnet DC motor drives a pump submerged in a reservoir of washer fluid. The washer fluid is pumped through pipes to jets, which spray our across the windscreen."
    },
    {
      question: "Why is a one-way valve often incorporated in windscreen washer pipes?",
      options: [
        "To increase water pressure",
        "To prevent fluid from draining back to the reservoir after each use",
        "To filter the washer fluid",
        "To regulate fluid temperature"
      ],
      correctAnswer: 1,
      explanation: "A one-way valve is often incorporated in the windscreen washer pipes so that fluid doesn't drain back to the reservoir after each use. In this way, the pipes are already full, making washer fluid instantly available next time it is required. This ensures immediate spray when the washer is activated."
    },
    {
      question: "What is important to mark before removing windscreen wiper arms for maintenance?",
      options: [
        "The wiper blade brand",
        "The position of the arms and linkages to ensure they're refitted in the same place",
        "The motor serial number",
        "The electrical connections only"
      ],
      correctAnswer: 1,
      explanation: "If you have to remove the windscreen wipers, arms or linkages for maintenance and repair, it is important that they are in their normal rest/park position before you begin work. You should mark the position of the arms and linkages to ensure that you put them back in the same place when refitted. If you don't do this, the arms may strike, collide and become entangled the first time they are used."
    },
    {
      question: "What is central locking designed to do?",
      options: [
        "Lock only the driver's door",
        "Lock and unlock all doors in one operation",
        "Lock the steering wheel",
        "Activate the alarm system only"
      ],
      correctAnswer: 1,
      explanation: "Central locking is a method for locking and unlocking all doors in one operation, and it is common on most cars. It can be done manually by turning a key in the door lock or remotely using a key fob with infrared or radio signal capabilities. This provides convenience and security by allowing all doors to be secured simultaneously."
    },
    {
      question: "How does central locking operate the door locks or unlock mechanisms?",
      options: [
        "Using hydraulic pressure",
        "Using mechanical cables only",
        "When operated from the key fob, a coded signal is broadcast and picked up by the central locking ECU, which then operates solenoids or actuator motors",
        "Using vacuum pressure from the engine"
      ],
      correctAnswer: 2,
      explanation: "When operated from the key fob, a coded signal is broadcast and is picked up by the central locking ECU, which then operates solenoids or actuator motors in each door to lock or unlock the car. As added security, many systems incorporate a 'rolling code' system so that the broadcast signal is different every time, making it hard for potential thieves to copy key remotes. Most systems also immobilise the door locking system if the incorrect code is received more than three times."
    }
  ]
};
