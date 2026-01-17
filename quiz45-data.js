const quizData = {
  quizNumber: 45,
  title: "GPS Navigation, Communication & Security Systems",
  pageNumbers: "224-228",
  questions: [
    {
      question: "How does a gyroscope in a navigation system determine direction of travel?",
      options: [
        "By measuring magnetic fields",
        "By being sensitive to the Coriolis force created by Earth's rotation",
        "By tracking satellite signals",
        "By measuring vehicle speed"
      ],
      correctAnswer: 1,
      explanation: "Direction of travel can be determined by a gyroscope mounted inside the navigation unit. The gyroscope is sensitive enough to be aware of the Coriolis force created by the rotation of the Earth. As long as the navigation system knows whether it is being used in the northern or southern hemisphere, the gyroscope is able to sense its position in relation to the Earth's rotation and establish north, south, east and west."
    },
    {
      question: "How many satellites are used for GPS at any one time?",
      options: [
        "12 satellites",
        "18 satellites",
        "24 satellites",
        "30 satellites"
      ],
      correctAnswer: 2,
      explanation: "At any one time, 24 satellites are used for GPS, with a number of spares also in orbit in case one goes wrong. Each of these solar-powered satellites circles the Earth at a distance of about 12,000 miles (19,300 km), making two complete rotations every day."
    },
    {
      question: "What is the minimum number of satellites a GPS receiver must locate to establish its position?",
      options: [
        "Two satellites",
        "Three satellites",
        "Four satellites",
        "Six satellites"
      ],
      correctAnswer: 2,
      explanation: "The job of the GPS receiver, mounted in the car, is to locate four satellites and work out its distance from them. It can then use this information to establish its own position and map this against information in its memory. This process is called trilateration."
    },
    {
      question: "What is the process called when a GPS receiver determines its position by calculating distances from multiple satellites?",
      options: [
        "Triangulation",
        "Trilateration",
        "Satellite mapping",
        "Position fixing"
      ],
      correctAnswer: 1,
      explanation: "The process is called trilateration. Once the position of the GPS receiver has been determined, software programmed into the unit is able to calculate the route to a desired destination. The GPS receiver locates four satellites, works out its distance from them, and uses this information to establish its own position."
    },
    {
      question: "At what speed do radio signals from GPS satellites travel?",
      options: [
        "Speed of sound: 343 metres per second",
        "Half the speed of light: 150,000 kilometres per second",
        "Speed of light: 299,792,458 metres per second",
        "100,000 kilometres per hour"
      ],
      correctAnswer: 2,
      explanation: "Each satellite sends out radio signals containing time, position and climate information. When the GPS unit in the car receives a signal from a satellite, it can work out its distance from the satellite by the length of time it has taken the time signal to travel. Radio signals sent per second travel at the speed of light: 299,792,458 metres per second, which equals 1,079,251,985 kilometres per hour or 186,282 miles per second."
    },
    {
      question: "What is one key disadvantage of satellite navigation systems?",
      options: [
        "They require constant internet connection",
        "May take driver down unsuitable roads",
        "They cannot calculate routes over 100 miles",
        "They only work in urban areas"
      ],
      correctAnswer: 1,
      explanation: "According to Table 4.9, one disadvantage of satellite navigation is that it may take the driver down unsuitable roads. Other disadvantages include limited use for the majority of journeys and that some systems may not be aware of current traffic problems. However, advantages include guiding the user to unfamiliar destinations, avoiding the use of maps when driving, and giving accurate and timely instructions."
    },
    {
      question: "What are the two safe working rules for satellite navigation receivers?",
      options: [
        "Keep the screen clean and update software regularly",
        "Do not mount where it obscures road view and do not update while vehicle is moving",
        "Use only manufacturer-approved mounts and avoid direct sunlight",
        "Charge regularly and store at room temperature"
      ],
      correctAnswer: 1,
      explanation: "The safe working rules state: 1) You must not mount the sat nav receiver where it will obscure the view of the road ahead, and 2) You must not update the sat nav system while the vehicle is moving. These safety requirements ensure the driver maintains proper visibility and attention while driving."
    },
    {
      question: "Why has legislation been introduced to restrict the use of mobile phones while driving?",
      options: [
        "Because phones interfere with vehicle electronics",
        "Because phone use is considered a distraction",
        "Because it drains the vehicle battery",
        "Because it affects fuel consumption"
      ],
      correctAnswer: 1,
      explanation: "The use of mobile phones when driving is considered a distraction and so legislation has been introduced to restrict the use of handheld phones while driving. A number of methods now facilitate the use of mobile telephone systems while driving to maintain safety while allowing necessary communication."
    },
    {
      question: "In a built-in infotainment system, where is the telephone system directly integrated?",
      options: [
        "In the dashboard display only",
        "In the entertainment and information system",
        "In the steering wheel only",
        "In a separate phone cradle"
      ],
      correctAnswer: 1,
      explanation: "With built-in systems, car manufacturers design a telephone system that is directly integrated with the entertainment and information system. No external telephone is required as the microphone and speaker are mounted inside the passenger compartment. Many systems have a method for placing or receiving a call by voice control or buttons mounted on the steering wheel."
    },
    {
      question: "How do auxiliary phone connections typically allow mobile phones to connect to the car's entertainment system?",
      options: [
        "Through Wi-Fi connection only",
        "Using a cradle system that connects to the in-car entertainment system",
        "By plugging directly into the dashboard",
        "Through satellite connection"
      ],
      correctAnswer: 1,
      explanation: "Usually a cradle system is mounted inside the car, in which the telephone is attached to while in use. The cradle may be connected to the in-car entertainment system to make and receive calls, or can have its own speaker and microphone system. This allows hands-free operation while driving."
    },
    {
      question: "What technology does Bluetooth use to connect devices?",
      options: [
        "Long range radio communication",
        "Infrared signals",
        "Standardised short range radio communication",
        "Cellular network signals"
      ],
      correctAnswer: 2,
      explanation: "Many mobile phones have a Bluetooth capability. Bluetooth uses standardised short range radio communication to connect two devices. With the Bluetooth switched on, the phone is able to act as a remote transmitter and receiver for telecommunication. An appropriate Bluetooth speaker and microphone device is required to use this system, which can be stand-alone or built into the in-car entertainment system."
    },
    {
      question: "What are the four main electrical faults that cause different symptoms with equipment operation in infotainment systems?",
      options: [
        "Corrosion, wear, overheating, and moisture",
        "Open circuit, high resistance, short circuit, and parasitic drain",
        "Low voltage, high voltage, reverse polarity, and ground faults",
        "Software errors, hardware failures, connection issues, and power surges"
      ],
      correctAnswer: 1,
      explanation: "As with all other electrical devices, the supply and use of electrical power is vital to the way the in-car entertainment and information system works. The four main electrical faults (open circuit, high resistance, short circuit and parasitic drain) cause different symptoms with equipment operation."
    },
    {
      question: "If an infotainment system uses fibre optics for transmission, what should be checked if signal faults are suspected?",
      options: [
        "The power supply voltage",
        "The cabling for damage, routing and correct connection",
        "The software version",
        "The speaker impedance"
      ],
      correctAnswer: 1,
      explanation: "If the infotainment system uses fibre optics for the transmission of audio and video media between different units, the cabling should be checked for damage, routing and correct connection. If signal faults are suspected, you will need to use a scan tool to retrieve live data and fault codes."
    },
    {
      question: "What issue should you consider when dealing with faulty DVD, CD and cassette tape players?",
      options: [
        "Software updates needed",
        "Mechanical failure of the playing mechanisms",
        "Battery voltage too low",
        "Radio interference"
      ],
      correctAnswer: 1,
      explanation: "Another issue you should consider when dealing with faulty DVD, CD and cassette tape players is mechanical failure of the playing mechanisms. While electrical faults affect the power supply and electronics, mechanical issues with the physical components that move and read the media are also common failure points."
    },
    {
      question: "What can cause interference that disrupts the playback operation of in-car entertainment systems?",
      options: [
        "Only internal electrical system components",
        "Only external broadcast signals",
        "External radio waves from the car's electrical system, electronic components, or external broadcast signals",
        "Only mobile phone transmitter masts"
      ],
      correctAnswer: 2,
      explanation: "Interference caused by external radio waves can disrupt the playback operation of all in-car entertainment and information systems. These radio waves may be created by the car's own electrical system, as electrical and electronic components switch on and off, or may be caused by external broadcast signals. The use of mobile phones and telephone transmitter masts can sometimes prevent the operation of entire light vehicle electronic systems, causing complete failure."
    },
    {
      question: "Why should professionally installed aftermarket security systems be connected to the immobiliser and at least two different electrical systems?",
      options: [
        "To increase the alarm volume",
        "To provide redundancy and may slow down a determined thief enough to give up",
        "To meet insurance requirements only",
        "To reduce battery drain"
      ],
      correctAnswer: 1,
      explanation: "If you fit an aftermarket security system, you should attach the immobiliser to at least two different electrical systems. This may not stop a determined thief, but it might slow them down enough that they give up. Systems integrated with the original design prove to be the most effective, though professionally installed aftermarket systems may also provide acceptable protection."
    },
    {
      question: "Why must security components be fused when fitting aftermarket security devices?",
      options: [
        "To meet legal requirements",
        "To prevent electrical short circuits which could damage the car's electronics",
        "To increase the alarm sensitivity",
        "To reduce power consumption"
      ],
      correctAnswer: 1,
      explanation: "When fitting an aftermarket security/warning device, you must make sure that it will not affect the operation of the original vehicle systems or electrics. The security components should be fused to prevent electrical short circuits, which could damage the car's original electrics/electronics. This protection is essential for safe installation."
    },
    {
      question: "What type of vehicle requires special consideration when fitting voltage-drop activated alarms?",
      options: [
        "Hybrid vehicles only",
        "Vehicles with diesel engines",
        "Vehicles where electrical systems operate independently after being switched off (e.g., electric cooling fan)",
        "Vehicles with manual transmissions"
      ],
      correctAnswer: 2,
      explanation: "Ensure that the security devices are suitable for the type of car to which they will be fitted. A warning device that senses voltage drop to activate an alarm may not be suitable for a vehicle where electrical systems operate independently after the car has been switched off. An electric cooling fan cutting in once the vehicle has been left can cause an alarm to sound, creating false triggers."
    },
    {
      question: "According to Table 4.10, which of the following is an example of electronic security rather than physical security?",
      options: [
        "Steering locks",
        "Wheel clamps",
        "Immobilisers",
        "Security marking"
      ],
      correctAnswer: 2,
      explanation: "According to Table 4.10, security devices can be broken down into physical and electronic types. Physical security includes chassis/VIN numbers, security marking, steering locks, dead locks, wheel clamps, steering wheel/handbrake clamps, complex key/lock design, and tamper-proof nuts and bolts. Electronic security includes alarms/sirens, immobilisers, volumetric sensing, Doppler radar, lazy locking, transponder key codes, ECU coding, and keyless entry/starting."
    },
    {
      question: "What do vehicle tracking systems use to trace the location of stolen cars?",
      options: [
        "Mobile phone networks",
        "Radio frequency identification",
        "Global Positioning System (GPS)",
        "Infrared tracking"
      ],
      correctAnswer: 2,
      explanation: "Some manufacturers are now fitting their vehicles with tracking systems to help recover stolen cars. The tracker uses Global Positioning System (GPS) to trace the location of the stolen car and relay this information to security organisations. This technology enables real-time location tracking of stolen vehicles."
    },
    {
      question: "What is an 'active' security device designed to do?",
      options: [
        "Prevent the car from being taken away",
        "Includes systems such as alarms which try to prevent the car from being broken into in the first place",
        "Track the vehicle after theft",
        "Lock all doors automatically"
      ],
      correctAnswer: 1,
      explanation: "Security devices can be split into four further categories: Active includes systems such as alarms which try to prevent the car from being broken into in the first place. This is different from passive systems (which try to prevent the car from being taken away) and hardware/software systems."
    },
    {
      question: "What is a 'passive' security device designed to do?",
      options: [
        "Sound an alarm when triggered",
        "Includes immobilisers which don't stop the car from being broken into, but try to prevent it being taken away",
        "Track the vehicle location",
        "Lock the steering wheel"
      ],
      correctAnswer: 1,
      explanation: "Passive security includes immobilisers, which don't stop the car from being broken into, but try to prevent it being taken away. This differs from active systems that try to prevent break-ins in the first place. Passive systems focus on preventing vehicle operation even if entry is gained."
    },
    {
      question: "How does a shock sensing alarm system detect intrusion?",
      options: [
        "By monitoring door switches",
        "Contains a device sensitive to vibration; movement sets off the alarm",
        "By measuring voltage drops",
        "Using ultrasonic sensors"
      ],
      correctAnswer: 1,
      explanation: "According to Table 4.11, shock sensing alarm systems contain a device which is sensitive to vibration, and when doors are opened and the movement is enough to set off the alarm. This type of sensor can be prone to false triggers, which means that the alarm can sound when not required, but it provides an effective way to detect physical intrusion attempts."
    },
    {
      question: "How do entry point switches operate in a security system?",
      options: [
        "They detect voltage changes in the electrical system",
        "They measure air pressure changes",
        "Doors, tailgates, boot lids and bonnets have a switch mechanism that activates a siren when an entry point is opened",
        "They use motion sensors to detect movement"
      ],
      correctAnswer: 2,
      explanation: "Doors, tailgates, boot lids and bonnets normally have a switch mechanism fitted to allow a courtesy light to illuminate when opened. These switches can be wired to the alarm system to activate a siren when an entry point is opened. This provides a reliable method of detecting unauthorized access to the vehicle."
    },
    {
      question: "How does volumetric sensing detect intrusion into the passenger compartment?",
      options: [
        "By monitoring door locks",
        "Using a small microphone that measures variations in air pressure or a pressure sensor that detects door opening/closing",
        "By tracking movement with cameras",
        "Using heat sensors to detect body temperature"
      ],
      correctAnswer: 1,
      explanation: "Volumetric sensing is normally designed to detect intrusion into the passenger compartment. This can be achieved using a small microphone that measures the variations in air pressure or a dedicated pressure sensor which detects the opening and closing of doors, for example, and triggers the alarm. This provides interior protection even if entry points are bypassed."
    }
  ]
};
