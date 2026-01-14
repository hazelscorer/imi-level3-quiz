const quiz7Data = {
  questions: [
    {
      question: "What is used to convert kinetic movement energy into heat in a braking system?",
      options: [
        "Hydraulic pressure",
        "Friction between brake pads and discs or brake shoes and drums",
        "Electronic control units",
        "Wheel speed sensors"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a normal component of a braking system?",
      options: [
        "Brake pedal",
        "Brake master cylinder",
        "Turbocharger",
        "Brake pipes and hoses"
      ],
      correct: 2
    },
    {
      question: "What assists the brake servo in forcing brake fluid through pipes and hoses to wheel assemblies?",
      options: [
        "The brake pedal",
        "The master cylinder",
        "The wheel speed sensors",
        "The ABS modulator"
      ],
      correct: 1
    },
    {
      question: "When tyre grip is lost and the tyres skid, what happens to vehicle control?",
      options: [
        "It improves",
        "It remains the same",
        "Steering, braking and acceleration are no longer possible",
        "Only steering is affected"
      ],
      correct: 2
    },
    {
      question: "What does it mean when the efficiency of the braking system is 'compromised'?",
      options: [
        "The braking system is improved",
        "The braking system is lower than the desirable standard",
        "The braking system is working perfectly",
        "The braking system needs no maintenance"
      ],
      correct: 1
    },
    {
      question: "What is the primary purpose of an anti-lock braking system (ABS)?",
      options: [
        "To make brakes last longer",
        "To regulate hydraulic pressure so tyres are prevented from skidding",
        "To increase fuel efficiency",
        "To reduce brake noise"
      ],
      correct: 1
    },
    {
      question: "What form of braking does anti-lock braking use?",
      options: [
        "Mechanical braking",
        "Pneumatic braking",
        "Cadence braking - an artificial form of cadence braking",
        "Regenerative braking"
      ],
      correct: 2
    },
    {
      question: "What is 'slip tolerance' in ABS systems?",
      options: [
        "The distance the car slides before stopping",
        "A measurement of brake wear",
        "A measurement of tyre traction during braking where 0% means rolling and 100% means fully locked up",
        "The time taken for brakes to activate"
      ],
      correct: 2
    },
    {
      question: "On an ABS system, what is the slip tolerance range where maximum brake force is applied?",
      options: [
        "0 to 5 per cent",
        "10 and 30 per cent",
        "50 to 75 per cent",
        "80 to 100 per cent"
      ],
      correct: 1
    },
    {
      question: "How many extra components are needed for a vehicle with anti-lock brakes compared to a standard hydraulic disc brake system?",
      options: [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      correct: 2
    },
    {
      question: "Which THREE components are needed for anti-lock braking to be achieved?",
      options: [
        "Brake pedal, master cylinder, and brake pads",
        "Wheel speed sensors, ECU, and ABS modulator valve block",
        "Brake servo, brake pipes, and wheel cylinders",
        "Brake discs, calipers, and brake fluid"
      ],
      correct: 1
    },
    {
      question: "What is 'cadence braking'?",
      options: [
        "Applying brakes continuously without releasing",
        "A form of braking where the pedal is rapidly pressed and released by the driver",
        "Braking only with the handbrake",
        "Using engine braking only"
      ],
      correct: 1
    },
    {
      question: "What are the two main components of wheel speed sensors?",
      options: [
        "A disc and a pad",
        "A toothed wheel called a reluctor and an inductive magnetic sensor unit",
        "A rotor and a caliper",
        "A piston and a cylinder"
      ],
      correct: 1
    },
    {
      question: "Where is the toothed reluctor mounted in a wheel speed sensor system?",
      options: [
        "On the brake caliper",
        "On the hub so that it rotates with the wheel",
        "On the suspension strut",
        "On the brake master cylinder"
      ],
      correct: 1
    },
    {
      question: "How does an inductive magnetic sensor generate an electric current?",
      options: [
        "By using battery power directly",
        "As a reluctor tooth disrupts the magnetic field, the movement generates a small electric current in the copper winding",
        "By heating up the sensor",
        "By mechanical pressure"
      ],
      correct: 1
    },
    {
      question: "What type of wave form does a wheel speed sensor produce when connected to an oscilloscope?",
      options: [
        "A square wave",
        "A triangular wave",
        "An AC sine wave",
        "A flat line"
      ],
      correct: 2
    },
    {
      question: "What happens to the sine wave signal from a wheel speed sensor as wheel speed increases?",
      options: [
        "The amplitude and frequency both decrease",
        "The amplitude stays the same but frequency decreases",
        "The amplitude (voltage) and frequency (time signal) both increase",
        "Nothing changes"
      ],
      correct: 2
    },
    {
      question: "Why is the analogue sine wave from a wheel speed sensor converted into a digital signal?",
      options: [
        "To save battery power",
        "So it can be processed by the electronic control unit",
        "To make it visible to the driver",
        "To reduce sensor wear"
      ],
      correct: 1
    },
    {
      question: "What type of wave form output does a Hall effect wheel speed sensor produce?",
      options: [
        "An AC sine wave",
        "A triangular wave",
        "A digital or square wave form",
        "A cosine wave"
      ],
      correct: 2
    },
    {
      question: "What is an advantage of Hall effect sensors over inductive sensors?",
      options: [
        "They are cheaper to manufacture",
        "The signal does not have to be converted before being processed by the ECU",
        "They are easier to install",
        "They work without magnets"
      ],
      correct: 1
    },
    {
      question: "What does the ABS modulator unit contain?",
      options: [
        "Brake pads and discs",
        "A series of electrically controlled valves that regulate the hydraulic pressure in each part of the car's braking system",
        "The brake master cylinder",
        "Wheel speed sensors"
      ],
      correct: 1
    },
    {
      question: "What type of valve is used in ABS modulator units?",
      options: [
        "Ball valves",
        "Gate valves",
        "Solenoid type valves",
        "Butterfly valves"
      ],
      correct: 2
    },
    {
      question: "What happens when a solenoid valve in the ABS system is switched off?",
      options: [
        "The valve opens fully",
        "A return spring moves the valve back to the open position meaning the system is failsafe",
        "The brakes lock up",
        "The brake fluid drains out"
      ],
      correct: 1
    },
    {
      question: "What component is used to return fluid to the master cylinder via an accumulator in many ABS modulators?",
      options: [
        "A brake servo",
        "An electric motor and pump",
        "A wheel cylinder",
        "A pressure sensor"
      ],
      correct: 1
    },
    {
      question: "What are the THREE phases of ABS operation?",
      options: [
        "Starting, stopping, and reversing",
        "Pressure holding phase, pressure reduction phase, and pressure increase phase",
        "Acceleration, cruising, and deceleration",
        "Charging, discharging, and resting"
      ],
      correct: 1
    }
  ]
};
