const quizData = [
    {
        question: "What are the four main faults associated with lighting systems?",
        options: [
            "Battery, alternator, starter, wiring",
            "Open circuit, high resistance, short circuit, parasitic drain",
            "Voltage, current, power, resistance",
            "Bulb, fuse, relay, switch"
        ],
        correct: 1,
        explanation: "The main faults associated with lighting systems can be separated into four areas: open circuit, high resistance, short circuit, parasitic drain."
    },
    {
        question: "What is a symptom and possible cause of an open circuit in a lighting system?",
        options: [
            "Bright lights",
            "Symptom: Sidelight not working. Possible cause: Filament burnt out in the bulb, breaking the circuit and stopping current flow",
            "Flashing lights",
            "Dimming over time"
        ],
        correct: 1,
        explanation: "Open circuit: Symptom - Sidelight not working. Possible cause - Filament burnt out in the bulb, breaking the circuit and stopping current flow."
    },
    {
        question: "What is a symptom and possible cause of high resistance in a lighting system?",
        options: [
            "Light too bright",
            "Symptom: Nearside dip beam headlamp is dim. Possible cause: Corroded earth connection on nearside dip beam circuit that shares the voltage with the bulb and reduces its performance",
            "Light flashing",
            "Fuse blowing"
        ],
        correct: 1,
        explanation: "High resistance: Symptom - Nearside dip beam headlamp is dim. Possible cause - Corroded earth connection on nearside dip beam circuit that shares the voltage with the bulb and reduces its performance."
    },
    {
        question: "What is a symptom and possible cause of a short circuit in a lighting system?",
        options: [
            "Dim lights",
            "Symptom: Brake light circuit fuse blows when brakes are pressed. Possible cause: Brake light wire chafed on bodywork before the bulb, creating a short cut to earth",
            "Lights stay on",
            "Lights flicker"
        ],
        correct: 1,
        explanation: "Short circuit: Symptom - Brake light circuit fuse blows when brakes are pressed. Possible cause - Brake light wire chafed on bodywork before the bulb, creating a short cut to earth."
    },
    {
        question: "What is a symptom and possible cause of parasitic drain in a lighting system?",
        options: [
            "Lights dim when driving",
            "Symptom: Car battery goes flat overnight. Possible cause: Boot light switch incorrectly adjusted so that the bulb stays illuminated even when the boot is closed",
            "Lights too bright",
            "Headlights flicker"
        ],
        correct: 1,
        explanation: "Parasitic drain: Symptom - Car battery goes flat overnight. Possible cause - Boot light switch incorrectly adjusted so that the bulb stays illuminated even when the boot is closed."
    },
    {
        question: "What are electric windows and mirrors sometimes referred to as?",
        options: [
            "Auto glass systems",
            "Power windows and power mirrors",
            "Smart glass",
            "Automated panels"
        ],
        correct: 1,
        explanation: "The operation of nearly all opening windows and wing mirrors is now controlled by electric motors and regulator mechanisms. These are sometimes referred to as 'power windows' and 'power mirrors'."
    },
    {
        question: "What is a window regulator?",
        options: [
            "A voltage controller",
            "A mechanical gearing mechanism that is used to turn the rotational movement of a motor into an up and down movement of the window glass while multiplying the effort produced by the motor",
            "A safety switch",
            "A timer"
        ],
        correct: 1,
        explanation: "The side window glass is attached to a mechanical gearing mechanism known as a window regulator. This regulator mechanism is used to turn the rotational movement of a motor into an up and down movement of the window glass while multiplying the effort produced by the motor."
    },
    {
        question: "What is one touch operation in electric windows?",
        options: [
            "Manual override",
            "An electric window operating system that allows the window to fully open or fully close with a single press of the switch and without keeping the switch depressed",
            "Emergency stop",
            "Speed control"
        ],
        correct: 1,
        explanation: "One touch is an electric window operating system that allows the window to fully open or fully close with a single press of the switch and without keeping the switch depressed."
    },
    {
        question: "What is inch back in electric windows?",
        options: [
            "Reverse polarity",
            "An electric window safety system that opens the window slightly if it senses something has become trapped in the mechanism",
            "Manual adjustment",
            "Speed limiter"
        ],
        correct: 1,
        explanation: "Inch back is an electric window safety system that opens the window slightly if it senses something has become trapped in the mechanism."
    },
    {
        question: "How do one touch electric window systems know how far the window has moved?",
        options: [
            "Timer only",
            "A method is needed to sense how far it has moved. The rotations of the motor can be counted between fully open and fully closed using a Hall effect sensor or by measuring output from the commutator",
            "Visual sensors",
            "Manual input"
        ],
        correct: 1,
        explanation: "Many electric window systems now incorporate one touch operation: if the rocker switch is pressed firmly once, the window will fully open or fully close. To ensure the window knows that it has reached the fully open or closed position, a method is needed to sense how far it has moved. The rotations of the motor can be counted between fully open and fully closed using a Hall effect sensor or by measuring output from the commutator."
    },
    {
        question: "What is a micro-switch?",
        options: [
            "A large switch",
            "A very small on/off switch used in controlling mechanisms",
            "A digital switch",
            "A timer switch"
        ],
        correct: 1,
        explanation: "Micro-switch is a very small on/off switch used in controlling mechanisms."
    },
    {
        question: "How do electric mirrors adjust position?",
        options: [
            "Single motor only",
            "The position and angle of the rear view mirrors mounted on the driver's and passenger's doors can often be adjusted electronically from the driver's seat. Each mirror has two motors mounted in the mirror housing behind the glass. Each motor is attached to a small rack and pinion gearing system: one controlling the mirror glass up and down, and one controlling the mirror glass left and right",
            "Manual cables",
            "Hydraulic system"
        ],
        correct: 1,
        explanation: "The position and angle of the rear view mirrors mounted on the driver's and passenger's doors can often be adjusted electronically from the driver's seat. Each mirror has two motors mounted in the mirror housing behind the glass. Each motor is attached to a small rack and pinion gearing system: one controlling the mirror glass up and down, and one controlling the mirror glass left and right. When operated by the driver via a switch mechanism the electric motors rotate the pinion gears along the rack mechanisms, pulling and pushing the mirror glass backwards and forwards. A combination of up, down, left and right allows the driver to set the desired angle of the mirror glass."
    },
    {
        question: "What is a symptom and possible cause of an open circuit in electric window/mirror systems?",
        options: [
            "Window too slow",
            "Symptom: Electric mirror adjustment not working. Possible cause: Electric feed wire to the drive motor broken at the door hinge as it is flexed backwards and forwards as the door is opened and closed",
            "Window too fast",
            "Mirror vibrates"
        ],
        correct: 1,
        explanation: "Open circuit: Symptom - Electric mirror adjustment not working. Possible cause - Electric feed wire to the drive motor broken at the door hinge as it is flexed backwards and forwards as the door is opened and closed."
    },
    {
        question: "What is a symptom and possible cause of high resistance in electric window/mirror systems?",
        options: [
            "Complete failure",
            "Symptom: Electric window slow to operate. Possible cause: Poor connection at the window motor creates a resistance which shares the voltage with the window motor and reduces its performance",
            "Window too fast",
            "Sparking occurs"
        ],
        correct: 1,
        explanation: "High resistance: Symptom - Electric window slow to operate. Possible cause - Poor connection at the window motor creates a resistance which shares the voltage with the window motor and reduces its performance."
    },
    {
        question: "What is a symptom and possible cause of a short circuit in electric window/mirror systems?",
        options: [
            "Slow operation",
            "Symptom: Wiring to offside electric mirror damaged (burnt/melted). Possible cause: Wire trapped against the metal bodywork where the mirror is bolted to the frame, creating a short cut to earth",
            "Intermittent operation",
            "Window jams"
        ],
        correct: 1,
        explanation: "Short circuit: Symptom - Wiring to offside electric mirror damaged (burnt/melted). Possible cause - Wire trapped against the metal bodywork where the mirror is bolted to the frame, creating a short cut to earth."
    },
    {
        question: "What is a symptom and possible cause of parasitic drain in electric window/mirror systems?",
        options: [
            "Window operates normally",
            "Symptom: Car battery goes flat overnight. Possible cause: Faulty electric window switch, causing power to be transmitted to the motor in the up direction even when it is not pressed",
            "Mirror adjustment works",
            "Lights are bright"
        ],
        correct: 1,
        explanation: "Parasitic drain: Symptom - Car battery goes flat overnight. Possible cause - Faulty electric window switch, causing power to be transmitted to the motor in the up direction even when it is not pressed."
    },
    {
        question: "What should you check before suspecting electrical faults in electric window systems?",
        options: [
            "Battery voltage only",
            "Assess mechanical issues such as tight glass runners and guides or partially seized regulators before suspecting electrical faults",
            "Fuse condition only",
            "Switch operation only"
        ],
        correct: 1,
        explanation: "If faults occur in an electric window system, you should assess mechanical issues such as tight glass runners and guides or partially seized regulators before suspecting electrical faults."
    },
    {
        question: "What is a relay?",
        options: [
            "A fuse",
            "An electromagnetic switch that is used to control current in some electric circuits",
            "A resistor",
            "A capacitor"
        ],
        correct: 1,
        explanation: "Relay is an electromagnetic switch that is used to control current in some electric circuits."
    },
    {
        question: "How do screen heating systems work?",
        options: [
            "Using hot air only",
            "During the manufacture of front and rear windscreens, a thin electrical element can be embedded or etched onto the surface of the glass. During cold or damp weather, electrical current can be applied to these elements, which convert the energy into heat, thereby helping to demist the windscreens",
            "Chemical reaction",
            "Solar power"
        ],
        correct: 1,
        explanation: "During the manufacture of front and rear windscreens, a thin electrical element can be embedded or etched onto the surface of the glass. During cold or damp weather, electrical current can be applied to these elements, which convert the energy into heat, thereby helping to demist the windscreens."
    },
    {
        question: "Why is a relay normally fitted to heated screen circuits?",
        options: [
            "To save power",
            "Large amounts of electric current are required by the screen elements, a relay is normally fitted to the circuit. Many systems also incorporate a timer to cut power to the demister after a preset period, to reduce the possibility of overheating and excessive current draw",
            "To increase voltage",
            "For safety only"
        ],
        correct: 1,
        explanation: "The operation of these screen demisters is controlled by the driver via a switch on the dashboard, but as large amounts of electric current are required by the screen elements, a relay is normally fitted to the circuit. Many systems also incorporate a timer to cut power to the demister after a preset period, to reduce the possibility of overheating and excessive current draw."
    },
    {
        question: "What is one difference between front and rear screen demisters?",
        options: [
            "They use different voltages",
            "The element used in the front screen is much thinner than the one on the rear screen. This is so that it doesn't affect forward visibility",
            "Front is faster",
            "Rear uses more power"
        ],
        correct: 1,
        explanation: "One difference between front and rear screen demisters is that the element used in the front screen is much thinner than the one on the rear screen. This is so that it doesn't affect forward visibility."
    },
    {
        question: "What is a symptom and possible cause of an open circuit in heated windscreen systems?",
        options: [
            "Works too well",
            "Symptom: Heated rear windscreen not working. Possible cause: Window element broken/damaged at the mid-point of the windscreen, caused by load/luggage rubbing against it",
            "Too hot",
            "Timer fails"
        ],
        correct: 1,
        explanation: "Open circuit: Symptom - Heated rear windscreen not working. Possible cause - Window element broken/damaged at the mid-point of the windscreen, caused by load/luggage rubbing against it."
    },
    {
        question: "What is a symptom and possible cause of high resistance in heated windscreen systems?",
        options: [
            "Complete failure",
            "Symptom: Demister slow to operate. Possible cause: Burnt contact in the circuit relay, creating a resistance which shares the voltage with the heater element and reduces its performance",
            "Too fast",
            "Overheats"
        ],
        correct: 1,
        explanation: "High resistance: Symptom - Demister slow to operate. Possible cause - Burnt contact in the circuit relay, creating a resistance which shares the voltage with the heater element and reduces its performance."
    },
    {
        question: "What is a symptom and possible cause of a short circuit in heated windscreen systems?",
        options: [
            "Slow heating",
            "Symptom: Heated rear screen fuse blown/burnt out. Possible cause: Wire rubbed against the bodywork before the front screen element, creating a short cut to earth",
            "Intermittent operation",
            "Cold spots"
        ],
        correct: 1,
        explanation: "Short circuit: Symptom - Heated rear screen fuse blown/burnt out. Possible cause - Wire rubbed against the bodywork before the front screen element, creating a short cut to earth."
    },
    {
        question: "What is a symptom and possible cause of parasitic drain in heated windscreen systems?",
        options: [
            "Works normally",
            "Symptom: Car battery goes flat overnight. Possible cause: Circuit timer failure, causing the screen not to switch off after a predetermined timescale",
            "Too hot",
            "Fuse blows"
        ],
        correct: 1,
        explanation: "Parasitic drain: Symptom - Car battery goes flat overnight. Possible cause - Circuit timer failure, causing the screen not to switch off after a predetermined timescale."
    }
];
