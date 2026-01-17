const quizData = [
    {
        question: "When should you adjust the headlamp aim/alignment?",
        options: [
            "Never necessary",
            "The vehicle has been involved in a collision to the front, a headlamp unit is replaced, a suspension component has been replaced, new wheels/tyres have been fitted, the headlamp bulb has been replaced",
            "Only after collisions",
            "Every year regardless"
        ],
        correct: 1,
        explanation: "To ensure that headlights operate efficiently without dazzling oncoming drivers, the headlamp aim/alignment must be correct. You need to adjust the headlamp aim if: the vehicle has been involved in a collision to the front, a headlamp unit is replaced, a suspension component has been replaced, new wheels/tyres have been fitted, the headlamp bulb has been replaced."
    },
    {
        question: "What are freeform headlamps designed to do?",
        options: [
            "Save power only",
            "Complex reflectors have been developed to accurately focus and scatter light beams to improve night-time vision. The reflectors are divided into segments to illuminate sections of the road. All of the surface area is used to provide a beam pattern",
            "Look better cosmetically",
            "Reduce weight"
        ],
        correct: 1,
        explanation: "Freeform headlamps: Complex reflectors have been developed to accurately focus and scatter light beams to improve night-time vision. The reflectors are divided into segments to illuminate sections of the road. All of the surface area is used to provide a beam pattern."
    },
    {
        question: "What do freeform headlamps no longer use?",
        options: [
            "Electricity",
            "Prisms etched into the headlamp lens to bend the light output. They are known as freeform headlamps",
            "Reflectors",
            "Bulbs"
        ],
        correct: 1,
        explanation: "These headlamps no longer use prisms etched into the headlamp lens to bend the light output. They are known as freeform headlamps."
    },
    {
        question: "What do projection headlamps use?",
        options: [
            "Standard reflectors only",
            "Projection headlamps are small in diameter, but produce high output. They use an ellipsoidal reflector that reflects light onto a lens. The convex lens acts like a magnifying glass and projects light in the required pattern. Shields are used to cut off any unwanted light",
            "Large lenses only",
            "Multiple bulbs"
        ],
        correct: 1,
        explanation: "Projection headlamps are small in diameter, but produce high output. They use an ellipsoidal reflector that reflects light onto a lens. The convex lens acts like a magnifying glass and projects light in the required pattern. Shields are used to cut off any unwanted light."
    },
    {
        question: "What happens to light colour as the temperature of the light source increases?",
        options: [
            "Stays the same",
            "As the temperature of the light source increases, its colour begins to change from white to blue and then to purple and violet. As the lighting colour approaches the blue part of the spectrum, it begins to represent natural daylight more closely",
            "Becomes red",
            "Becomes dimmer"
        ],
        correct: 1,
        explanation: "As the temperature of the light source increases, its colour begins to change from white to blue and then to purple and violet. As the lighting colour approaches the blue part of the spectrum, it begins to represent natural daylight more closely. This means that your eyes are able to function better at night when a headlight system with a blue/white light is used."
    },
    {
        question: "What does HID stand for?",
        options: [
            "High Illumination Device",
            "High Intensity Discharge",
            "Hybrid Internal Diode",
            "Halogen Intensity Diffuser"
        ],
        correct: 1,
        explanation: "High intensity discharge (HID) is a system that uses an electric arc to produce light rather than a filament."
    },
    {
        question: "What are electrodes in an HID bulb?",
        options: [
            "Battery terminals",
            "A conductor through which electricity enters or leaves an object",
            "Glass components",
            "Reflective surfaces"
        ],
        correct: 1,
        explanation: "Electrode is a conductor through which electricity enters or leaves an object."
    },
    {
        question: "What is xenon?",
        options: [
            "A type of metal",
            "A specialised gas used in some headlamp bulbs",
            "A type of filament",
            "A coating material"
        ],
        correct: 1,
        explanation: "Xenon is a specialised gas used in some headlamp bulbs."
    },
    {
        question: "What is an arc in HID systems?",
        options: [
            "A curved reflector",
            "The visible spark seen between two electrodes",
            "The bulb shape",
            "The light pattern"
        ],
        correct: 1,
        explanation: "Arc is the visible spark seen between two electrodes."
    },
    {
        question: "What does an HID system produce more light than?",
        options: [
            "All other lights",
            "A standard tungsten filament or tungsten halogen headlamp bulb, for the same level of power consumption",
            "LED lights always",
            "Sunlight"
        ],
        correct: 1,
        explanation: "They produce more light for the same level of power consumption than a standard tungsten filament or tungsten halogen headlamp bulb."
    },
    {
        question: "How do HID bulbs produce light?",
        options: [
            "Using a heated filament",
            "Enclosed inside a glass bulb are electrodes capable of producing a spark across an air gap. The high intensity arc comes from metallic salts that are vaporised inside the bulb, which also usually contains xenon gas",
            "Through chemical reaction",
            "Using mirrors only"
        ],
        correct: 1,
        explanation: "Enclosed inside a glass bulb are electrodes capable of producing a spark across an air gap. The high intensity arc comes from metallic salts that are vaporised inside the bulb, which also usually contains xenon gas."
    },
    {
        question: "What are the three main stages of HID light operation?",
        options: [
            "On, off, standby",
            "Ignition (high voltage pulse produces spark, ionises xenon gas), Warm-up (controlled overload, arc operated at high power, metallic salts vaporise, resistance falls, ballast switches to continuous), Continuous operation (metal salts in vapour phase, arc reaches steady shape, stable power, no flicker)",
            "Start, run, stop",
            "Charge, discharge, reset"
        ],
        correct: 1,
        explanation: "The three stages are: Ignition - A high voltage pulse from the igniter is used to produce a spark. This is similar to spark plug operation. The spark ionises the xenon gas, creating a conducting tunnel between the tungsten electrodes. Warm-up - The bulb is supplied with a controlled overload, whereby extra current is delivered for a short period. Because the arc is operated at high power, the temperature in the arc chamber rises quickly. The metallic salts vaporise, and the arc is intensified. The resistance between the electrodes now falls. The electronic ballast control unit senses this and automatically switches to continuous operation. Continuous operation - All the metal salts are now in the vapour phase. The arc will have reached its steady shape. The ballast now supplies stable electrical power so the arc will not flicker and the high intensity light is given off."
    },
    {
        question: "What does ionise mean?",
        options: [
            "To freeze",
            "To change a chemical substance by adding or removing charged particles",
            "To heat up",
            "To reflect"
        ],
        correct: 1,
        explanation: "Ionise means to change a chemical substance by adding or removing charged particles."
    },
    {
        question: "What are the advantages of HID-xenon lights?",
        options: [
            "Only that they're cheaper",
            "Provide around three times more light than a standard halogen headlight bulb, last for around 3000 hours compared to around 350 hours for a halogen bulb (no filament to be heated), use less power which contributes to greater fuel economy and reduced emissions from the engine",
            "Only longer lifespan",
            "Only better color"
        ],
        correct: 1,
        explanation: "Advantages of HID: HID-xenon lights provide around three times more light than a standard halogen headlight bulb. They last for around 3000 hours compared to around 350 hours for a halogen bulb. This is because there is no filament to be heated. They use less power, which contributes to greater fuel economy and reduced emissions from the engine."
    },
    {
        question: "What is a disadvantage of HID systems if not kept clean and correctly adjusted?",
        options: [
            "They use more power",
            "Can produce glare that will dazzle oncoming drivers",
            "They are too dim",
            "They overheat"
        ],
        correct: 1,
        explanation: "Disadvantages of HID: If not kept clean and correctly adjusted, HID-xenson systems can produce glare that will dazzle oncoming drivers."
    },
    {
        question: "What is a major disadvantage regarding HID bulb contents?",
        options: [
            "They're too heavy",
            "HID bulbs may contain mercury, which is extremely toxic, so must be treated as hazardous waste",
            "They're too large",
            "They're fragile"
        ],
        correct: 1,
        explanation: "HID bulbs may contain mercury, which is extremely toxic, so must be treated as hazardous waste."
    },
    {
        question: "What happens if an HID component fails?",
        options: [
            "Easy to replace individual parts",
            "The failure of an HID component (bulb, igniter or ballast) often results in damage to at least one of the other components. For this reason, it is common for ballasts, bulbs and igniters to be replaced at the same time at great expense",
            "Nothing else is affected",
            "Warranty covers all"
        ],
        correct: 1,
        explanation: "HID headlamps are significantly more costly to produce, install, purchase and repair. The failure of an HID component (bulb, igniter or ballast) often results in damage to at least one of the other components. For this reason, it is common for ballasts, bulbs and igniters to be replaced at the same time at great expense."
    },
    {
        question: "How is light measured in lumens?",
        options: [
            "Voltage only",
            "Light can be measured in lumens (lm), which is a measurement of candlelight power. HID-xenon lights produce 100 lm per watt. Halogen lights produced around 25 lm per watt",
            "Amps only",
            "Temperature only"
        ],
        correct: 1,
        explanation: "Light can be measured in lumens (lm), which is a measurement of candlelight power. HID-xenon lights produce 100 lm per watt. Halogen lights produced around 25 lm per watt."
    },
    {
        question: "What is an LED?",
        options: [
            "A type of battery",
            "A light emitting diode (LED) is a form of bulb with no filament. It is made of electronic semi-conductor material that gives off light when current moves electrons across it",
            "A reflector type",
            "A gas type"
        ],
        correct: 1,
        explanation: "A light emitting diode (LED) is a form of bulb with no filament. It is made of electronic semi-conductor material that gives off light when current moves electrons across it."
    },
    {
        question: "Why do LEDs draw very little current?",
        options: [
            "They have high resistance",
            "As there is no filament to create resistance and get hot, a standard LED draws very little current. This makes LEDs efficient and low power-consuming devices",
            "They use batteries",
            "They reflect light"
        ],
        correct: 1,
        explanation: "As there is no filament to create resistance and get hot, a standard LED draws very little current. This makes LEDs efficient and low power-consuming devices."
    },
    {
        question: "Why must LEDs be connected with the correct polarity?",
        options: [
            "To save power",
            "Because these components are diodes, they only accept current in one direction. This means that they must be connected to an electric circuit with the correct polarity in order to work",
            "To last longer",
            "To be brighter"
        ],
        correct: 1,
        explanation: "Because these components are diodes, they only accept current in one direction. This means that they must be connected to an electric circuit with the correct polarity in order to work."
    },
    {
        question: "Why are LEDs ideal for high level brake light systems?",
        options: [
            "They're cheaper",
            "The movement of electrons is instantaneous, so an LED illuminates very quickly. This makes them ideal for use in high level brake light systems, as they can be seen by others as soon as the brake light switch is operated",
            "They're red",
            "They're waterproof"
        ],
        correct: 1,
        explanation: "The movement of electrons is instantaneous, so an LED illuminates very quickly. This makes them ideal for use in high level brake light systems, as they can be seen by others as soon as the brake light switch is operated."
    },
    {
        question: "What does AFS stand for?",
        options: [
            "Automatic Fuel System",
            "Advanced Front-lighting Systems",
            "Anti-lock Friction System",
            "Automated Fan System"
        ],
        correct: 1,
        explanation: "A recent development in lighting systems is the ability to move the headlight beam in response not only to vehicle steering and suspension dynamics but also to weather and visibility conditions, vehicle speed, and road curvature and contour. This development is known as advanced front-lighting systems (AFS)."
    },
    {
        question: "How do modern AFS systems determine headlamp aim?",
        options: [
            "Manually only",
            "AFS uses dynamic vehicle information from various chassis, speed and acceleration sensors that is available on the vehicle communication network to determine the most effective use of headlamp aim and angle",
            "Random adjustment",
            "Driver input only"
        ],
        correct: 1,
        explanation: "This system of moving headlamps has been around for many years, but early operation relied on mechanical rods and linkages. In contrast, AFS uses dynamic vehicle information from various chassis, speed and acceleration sensors that is available on the vehicle communication network to determine the most effective use of headlamp aim and angle."
    },
    {
        question: "What is fibre optics?",
        options: [
            "A type of wire",
            "A system that allows a light source produced in one area of a vehicle to be directed to other points on the car by thin glass fibres",
            "A battery type",
            "A reflector system"
        ],
        correct: 1,
        explanation: "Fibre optics is a system that allows a light source produced in one area of a vehicle to be directed to other points on the car by thin glass fibres."
    }
];
