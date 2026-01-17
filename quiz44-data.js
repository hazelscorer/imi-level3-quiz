const quizData = {
  quizNumber: 44,
  title: "In-Car Entertainment & Navigation Systems",
  pageNumbers: "219-223",
  questions: [
    {
      question: "What is the primary safety benefit of a rear view camera system when connected to the reversing light system?",
      options: [
        "It provides additional vision when backing up",
        "It records footage for insurance purposes",
        "It automatically steers the vehicle",
        "It alerts pedestrians behind the vehicle"
      ],
      correctAnswer: 0,
      explanation: "A rear view camera can be mounted at the rear of the car and connected to a visual display unit such as a TV or DVD player. It can be linked to the reversing light system so that when backing up, additional vision is available for safety, helping the driver see obstacles or pedestrians that might not be visible in mirrors."
    },
    {
      question: "How does a lane change control system alert the driver if they begin to drift across lanes by mistake?",
      options: [
        "By flashing the dashboard lights",
        "By applying the brakes automatically",
        "By using a vibration or buzzer",
        "By honking the horn"
      ],
      correctAnswer: 2,
      explanation: "A series of sensors can be used that identify road lane markings. The information supplied to an ECU can inform the driver if they begin to drift across lanes by mistake. A vibration or buzzer can be used to alert the driver, while some systems may make small corrections to the steering via the electronic power-assisted steering (EPS)."
    },
    {
      question: "What technology enables manufacturers to combine engine, transmission and electronic power steering control for self-parking systems?",
      options: [
        "Ultrasonic sensors",
        "Doppler parking radar",
        "Infrared cameras",
        "Magnetic field detection"
      ],
      correctAnswer: 1,
      explanation: "The addition of a Doppler parking radar means that manufacturers are able to combine engine, transmission and electronic power steering control to allow a car to park in a parallel parking place. The driver just needs to find a parking space of suitable size, press a button and the car will automatically reverse into the space."
    },
    {
      question: "What factors typically determine how active safety systems operate to apply brakes and avoid a collision?",
      options: [
        "Only vehicle speed",
        "Only steering angle",
        "Speed and direction",
        "Weather conditions and road surface"
      ],
      correctAnswer: 2,
      explanation: "Many manufacturers are now beginning to include active safety systems that use sensor information to apply the brakes and avoid a collision. How the system operates normally depends on a number of parameters, including speed and direction. These parameters help the system determine when intervention is necessary."
    },
    {
      question: "What does the term 'infotainment' refer to in automotive systems?",
      options: [
        "Only entertainment features like radio and CD",
        "In-car entertainment and information systems grouped together",
        "Information displays on the dashboard",
        "Entertainment systems for rear passengers only"
      ],
      correctAnswer: 1,
      explanation: "In-car entertainment and information systems are often grouped under the title 'infotainment'. They include speakers, radio and aerial systems, amplifiers, cassette tape players, CD players and multi disc systems, DVD players, MP3, television, and satellite navigation and GPS - all working together as an integrated system."
    },
    {
      question: "How does sound initially travel from a speaker before being converted into audible sound?",
      options: [
        "As electrical signals through wires",
        "As an air pressure wave",
        "As magnetic pulses",
        "As light vibrations"
      ],
      correctAnswer: 1,
      explanation: "Sound normally travels as an air pressure wave which is directed into your ear, where it vibrates the ear drum. This vibration is transmitted through three small bones to the cochlea and auditory nerve. Your brain then interprets the electrical signals from the auditory nerve as sound. In order for infotainment systems to work, a method of transmitting sound waves is required."
    },
    {
      question: "What component in a speaker creates air pressure waves that represent sound?",
      options: [
        "The magnet",
        "The voice coil",
        "The diaphragm",
        "The spider"
      ],
      correctAnswer: 2,
      explanation: "A speaker consists of a diaphragm which can be vibrated to create air pressure waves that represent sound. An electromagnet is attached to the centre of the diaphragm. When it is switched on and off, the electromagnet is attracted to or moved away from a permanent magnet attached to the frame of the speaker, producing a sound wave."
    },
    {
      question: "What are very small speakers sometimes called, and what frequency range do they produce?",
      options: [
        "Squawkers - mid-range tones",
        "Woofers - deep bass tones",
        "Tweeters - high-pitched treble range",
        "Subwoofers - ultra-low bass"
      ],
      correctAnswer: 2,
      explanation: "Very small speakers (sometimes called 'tweeters') produce sound in the high-pitched treble range. The size of the diaphragm used determines the tonal range of the speaker. Different speaker sizes are used to cover different frequency ranges in a quality sound system."
    },
    {
      question: "What type of speakers are sometimes called 'woofers'?",
      options: [
        "Very small speakers",
        "Medium-sized speakers",
        "Large speakers",
        "External speakers"
      ],
      correctAnswer: 2,
      explanation: "Large speakers (sometimes called 'woofers') produce sound in the deep bass tonal range. A combination of speaker sizes is often used with in-car entertainment systems to produce high-quality sound output across the full frequency spectrum."
    },
    {
      question: "What does RDS stand for in radio systems?",
      options: [
        "Radio Detection System",
        "Radio Data System",
        "Remote Display System",
        "Radio Direction Signal"
      ],
      correctAnswer: 1,
      explanation: "Radio data system (RDS) is a method of embedding small amounts of digital information in conventional FM broadcast signals. The RDS system is a standard that covers several types of information, including: time, station identification and programme information. If you have in-car entertainment equipment which is capable of interpreting this information, details may be displayed on the radio head unit screen."
    },
    {
      question: "In AM radio transmission, what characteristic of the wave is varied?",
      options: [
        "The frequency (width)",
        "The amplitude (height)",
        "The wavelength",
        "The speed of transmission"
      ],
      correctAnswer: 1,
      explanation: "Radio signals created at the broadcasting centre are imprinted on an electromagnetic carrier wave with a set frequency. Early carrier waves varied the amplitude (height) of the wave and this was known as amplitude modulation (AM). The height of the wave form varies while the frequency remains constant."
    },
    {
      question: "In FM radio transmission, what characteristic of the wave is varied?",
      options: [
        "The amplitude (height)",
        "The frequency (width)",
        "The wavelength only",
        "The transmission power"
      ],
      correctAnswer: 1,
      explanation: "Later carrier waves varied the frequency (width) of the wave and this is known as frequency modulation (FM). An FM wave form varies in speed (frequency) while the amplitude remains relatively constant. This method generally provides better sound quality than AM."
    },
    {
      question: "What type of radio waves can only travel a short distance and easily pass through the Earth's ionosphere?",
      options: [
        "Long waves",
        "Medium waves",
        "Short waves",
        "Ultra waves"
      ],
      correctAnswer: 2,
      explanation: "Short waves have a very close frequency and can only travel a short distance. They will easily pass through the Earth's ionosphere and out into space. The wavelength of a radio signal allows the car radio to be tuned in to a particular station based on these transmission characteristics."
    },
    {
      question: "What happens to long wave radio signals as distance increases?",
      options: [
        "Signal quality increases",
        "Signal quality is lost",
        "Signal frequency changes",
        "Signal becomes digital"
      ],
      correctAnswer: 1,
      explanation: "Long waves have a frequency which is spread out. Long waves are reflected off the Earth's ionosphere, trapping them and sending them round the world. A long wave is able to travel around the world but as distance increases, signal quality is lost. This makes long waves suitable for very long distance transmission but with reduced quality."
    },
    {
      question: "Why are broadcasting organisations slowly switching from analogue to digital radio signals?",
      options: [
        "Digital signals are cheaper to broadcast",
        "Analogue signals are subject to external interference",
        "Digital signals require less power",
        "Analogue signals cannot carry music"
      ],
      correctAnswer: 1,
      explanation: "Analogue radio signals are subject to external interference and as a result many broadcasting organisations are slowly switching to digital signals. This means that to continue to receive radio in cars manufacturers will have to fit radio equipment that is able to operate and interpret the digital signals broadcast. From 2013, vehicle manufacturers have been fitting digital radios as standard to new cars."
    },
    {
      question: "In an amplifier, what are the three connections of a transistor?",
      options: [
        "Input, output, and ground",
        "Collector, emitter, and base",
        "Positive, negative, and neutral",
        "Power, signal, and speaker"
      ],
      correctAnswer: 1,
      explanation: "The transistor is a small electronic semi-conductor component which is able to act as a switch with no moving parts. It has three connections: the collector, the emitter and the base. The collector terminal is connected to a large stabilised source of power, the emitter terminal is connected to the speaker circuit, and the base terminal is connected to the output of the radio."
    },
    {
      question: "How does the base terminal control the transistor in an amplifier?",
      options: [
        "It directly amplifies the signal",
        "Small electrical current switches the large power source on and off",
        "It connects to the speaker only",
        "It stores electrical energy"
      ],
      correctAnswer: 1,
      explanation: "As the radio operates, the small electrical output pulses are transmitted to the base of the transistor inside the amplifier unit. The large stabilised power source is unable to pass to the emitter until it receives a small electrical current at the base. As the base is switched on and off by the radio, the large stabilised power source is also switched on and off; this controls the electromagnet in the speaker."
    },
    {
      question: "What is the main UK legislation regulating radio spectrum?",
      options: [
        "The Radio Act 2000",
        "The Broadcast Regulations 2006",
        "The Wireless Telegraphy Act 2006",
        "The Communications Act 2006"
      ],
      correctAnswer: 2,
      explanation: "Because radio signals do not stop at borders, international laws have been created to ensure that interference is not caused by two radio signals being broadcast on the same frequency. Some radio frequencies are restricted, for example those designed to be used by the emergency services. In order to broadcast on certain frequencies, a licence may be required. The Wireless Telegraphy Act 2006 is the main legislation on the regulation of radio spectrum in the UK."
    },
    {
      question: "How do cassette tapes record and play back sound?",
      options: [
        "Using digital encoding",
        "Using magnetised recording on a plastic tape",
        "Using optical laser reading",
        "Using electronic memory chips"
      ],
      correctAnswer: 1,
      explanation: "Some older in-car entertainment systems use cassette tapes. These consist of a thin plastic tape covered with a magnetisable coating, which can be used to record music. When the tape is moved against a playing head, the magnetised recording can be converted back into sound by the cassette system and played over the car's speaker system."
    },
    {
      question: "What is MP3 and why is it useful for in-car entertainment?",
      options: [
        "A type of speaker system",
        "A patented digital audio encoding format using data compression",
        "A type of radio frequency",
        "A cassette replacement system"
      ],
      correctAnswer: 1,
      explanation: "A popular form of music storage for playback through an in-car entertainment system is MP3. This is a patented digital audio encoding format which uses a form of data compression. The computerised recording of music as digital information takes up an extremely large amount of storage space. The use of MP3 compression is designed to greatly reduce the amount of data required to represent the audio recording, while still sounding like a faithful reproduction of the original uncompressed audio for most listeners."
    },
    {
      question: "How is data arranged on a compact disc (CD)?",
      options: [
        "In parallel tracks like a hard drive",
        "In concentric circles",
        "As a single, continuous, extremely long spiral track",
        "In rectangular blocks"
      ],
      correctAnswer: 2,
      explanation: "The microscopic pits and bumps on a CD are arranged as a single, continuous, extremely long spiral track of data. A disc made of nickel is then produced from the master glass disc to form a template. The nickel disc is used to stamp the reproduction copies that are made from transparent plastic. Each plastic disc is then coated with a thin reflective metallic layer and a protective coating of plastic."
    },
    {
      question: "If the data spiral track on a CD was stretched out into a straight line, approximately how long would it be?",
      options: [
        "500 metres",
        "1 kilometre",
        "5 kilometres",
        "10 kilometres"
      ],
      correctAnswer: 2,
      explanation: "A CD has a single spiral track of data, circling from the inside of the disc to the outside. The fact that the spiral track starts at the centre means that holes can be made smaller if needed. The incredibly small dimensions of the bumps make the spiral track on a CD extremely long. If you could lift the data off a CD and stretch it out into a straight line, it would be 5 kilometres long!"
    },
    {
      question: "At what speed does a CD player drive motor rotate the disc?",
      options: [
        "100-300 rpm",
        "200-500 rpm",
        "500-1000 rpm",
        "1000-1500 rpm"
      ],
      correctAnswer: 1,
      explanation: "A drive motor in the CD player spins the disc. It is precisely controlled to rotate between 200 and 500 rpm, depending on which track is being read. A laser and a lens system focus in on and read the bumps/pits. The laser beam passes through the clear plastic layer, reflects off the metallic layer and hits a lens that detects changes in light."
    },
    {
      question: "What is the main difference between DVDs and CDs in terms of construction?",
      options: [
        "DVDs are made of different plastic",
        "DVDs are normally dual layer",
        "DVDs spin faster",
        "DVDs use magnetic storage"
      ],
      correctAnswer: 1,
      explanation: "Digitally versatile discs (DVDs) work in fundamentally the same way as compact discs. They are normally dual layer and require dedicated equipment for data reading and playback. Because of their increased capacity, DVDs are often used to store video data, which can be played back through a visual display screen inside the car."
    },
    {
      question: "What is dead reckoning in vehicle navigation systems?",
      options: [
        "A backup battery system",
        "A system using vehicle sensor data like speed and steering angle matched to pre-programmed maps",
        "A satellite tracking system",
        "A manual map reading system"
      ],
      correctAnswer: 1,
      explanation: "Dead reckoning is a system that makes use of vehicle sensor data such as vehicle speed, steering angle and wheel speed, and matches this to maps that are pre-programmed into the navigation system. If dead reckoning is used without GPS combination, it has to be calibrated by setting a start position. As the car is driven along a road, its location is then calculated from the information supplied by the vehicle sensors."
    }
  ]
};
