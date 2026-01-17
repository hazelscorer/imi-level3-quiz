const quizData = [
    {
        question: "What does Amp hours (Ah) measure?",
        options: [
            "Voltage only",
            "The electrical current that a battery can deliver. This quantity is one indicator of the total amount of charge that a battery is able to store and deliver at its rated voltage. The amp hours value is the total of the discharge current (in amps) multiplied by the duration (in hours) for which this discharge current can be sustained by the battery",
            "Temperature",
            "Resistance"
        ],
        correct: 1,
        explanation: "Amp hours (Ah) are a measurement of the electrical current that a battery can deliver. This quantity is one indicator of the total amount of charge that a battery is able to store and deliver at its rated voltage. The amp hours value is the total of the discharge current (in amps) multiplied by the duration (in hours) for which this discharge current can be sustained by the battery."
    },
    {
        question: "What are some examples of amp hour combinations for a 100 Ah battery?",
        options: [
            "Only 100 amps for one hour",
            "100 amps for one hour, 1 amp for 100 hours, 10 amps for 10 hours, or any other combination that multiply together to make 100 (e.g. 25 amps for 4 hours)",
            "50 amps for 1 hour only",
            "200 amps for 0.5 hours only"
        ],
        correct: 1,
        explanation: "For example, a car battery could be rated as 100 Ah, which should be enough electricity to provide: 100 amps for one hour, 1 amp for 100 hours, 10 amps for 10 hours, any other combination that multiply together to make 100 (e.g. 25 amps for 4 hours)."
    },
    {
        question: "What does Cranking amps (CA) represent?",
        options: [
            "Battery voltage",
            "A number that represents the amount of current a lead-acid battery can provide at 0°C (32°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery)",
            "Battery weight",
            "Battery capacity at high temperature"
        ],
        correct: 1,
        explanation: "Cranking amps (CA): A number that represents the amount of current a lead-acid battery can provide at 0°C (32°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery)."
    },
    {
        question: "What does Cold cranking amps (CCA) represent?",
        options: [
            "Battery performance at room temperature",
            "A number that represents the amount of current a lead-acid battery can provide at -18°C (0°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery). This test is more demanding than those conducted at higher temperatures",
            "Maximum voltage output",
            "Battery charging rate"
        ],
        correct: 1,
        explanation: "Cold cranking amps (CCA): A number that represents the amount of current a lead-acid battery can provide at -18°C (0°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery). This test is more demanding than those conducted at higher temperatures."
    },
    {
        question: "What does Hot cranking amps (HCA) represent?",
        options: [
            "Battery cold start ability",
            "A number that represents the amount of current a lead-acid battery can provide at 27°C (80°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery)",
            "Battery charging speed",
            "Battery storage capacity"
        ],
        correct: 1,
        explanation: "Hot cranking amps (HCA): A number that represents the amount of current a lead-acid battery can provide at 27°C (80°F) for 30 seconds while maintaining at least 1.2 volts per cell (7.2 volts for a 12-volt battery)."
    },
    {
        question: "What is Reserve capacity minutes (RCM), also known as reserve capacity (RC)?",
        options: [
            "Battery charging time",
            "A lead-acid battery's ability to sustain a minimum stated electrical load. It is defined as the time (in minutes) that the battery at 27°C (80°F) will continuously deliver 25 amperes before its voltage drops below 10.5 volts",
            "Maximum voltage",
            "Battery weight"
        ],
        correct: 1,
        explanation: "Reserve capacity minutes (RCM), also known as reserve capacity (RC): A lead-acid battery's ability to sustain a minimum stated electrical load. It is defined as the time (in minutes) that the battery at 27°C (80°F) will continuously deliver 25 amperes before its voltage drops below 10.5 volts."
    },
    {
        question: "What materials are nickel cadmium batteries made of?",
        options: [
            "Lead and acid",
            "Positive plates: nickel hydrate, Negative plates: cadmium, Electrolyte: potassium hydroxide and water",
            "Lithium only",
            "Carbon and zinc"
        ],
        correct: 1,
        explanation: "This type of battery is made of the following materials: positive plates: nickel hydrate, negative plates: cadmium, electrolyte: potassium hydroxide and water."
    },
    {
        question: "What are the advantages of metal hydride batteries for hybrid vehicles?",
        options: [
            "They are cheapest",
            "High electrolyte conductivity (can be used in high power applications such as hybrid drive vehicles), battery system can be sealed (minimises maintenance and leakage issues), operate over a very wide temperature range, very long life characteristics, higher energy density and lower cost per watt than other battery types",
            "They never need replacement",
            "They work without charging"
        ],
        correct: 1,
        explanation: "Metal hydride batteries have the following advantages: They have a high electrolyte conductivity which allows them to be used in high power applications (such as hybrid drive vehicles). The battery system can be sealed, which minimises maintenance and leakage issues. They operate over a very wide temperature range. They have very long life characteristics when compared with other battery types – this offsets their higher initial cost. They have a higher energy density and lower cost per watt than other battery types."
    },
    {
        question: "What voltage potential do current hybrid drive systems use?",
        options: [
            "12V only",
            "Somewhere between 100V and 300V",
            "48V only",
            "500V"
        ],
        correct: 1,
        explanation: "Current hybrid drive systems (depending on manufacturer) are using batteries with a high voltage potential somewhere between 100V and 300V."
    },
    {
        question: "What does an alternator do?",
        options: [
            "Starts the engine",
            "An engine-driven electrical generator used to charge batteries and supply electricity for vehicle systems",
            "Controls fuel injection",
            "Operates the brakes"
        ],
        correct: 1,
        explanation: "Alternator is an engine-driven electrical generator used to charge batteries and supply electricity for vehicle systems."
    },
    {
        question: "What are phases in an alternator?",
        options: [
            "Battery types",
            "The separate electrical windings used in an alternator to generate electricity. (Most systems operate three phases.)",
            "Voltage levels",
            "Charging stages"
        ],
        correct: 1,
        explanation: "Phases are the separate electrical windings used in an alternator to generate electricity. (Most systems operate three phases.)"
    },
    {
        question: "What does a rectifier do in an alternator?",
        options: [
            "Increases voltage",
            "The unit inside an alternator that converts alternating current (AC) to direct current (DC)",
            "Stores electricity",
            "Reduces resistance"
        ],
        correct: 1,
        explanation: "Rectifier is the unit inside an alternator that converts alternating current (AC) to direct current (DC)."
    },
    {
        question: "What does a regulator do in an alternator?",
        options: [
            "Starts the engine",
            "The unit inside an alternator that controls the output voltage",
            "Measures current",
            "Cools the battery"
        ],
        correct: 1,
        explanation: "Regulator is the unit inside an alternator that controls the output voltage."
    },
    {
        question: "How does an alternator work?",
        options: [
            "Uses chemical reactions",
            "Works on the principle of rotating an electromagnet inside a number of copper windings. As the North and South poles of the electromagnet pass the windings (known as phases), an electric current is induced in one direction and then the other. This alternating current (AC) must be converted into direct current (DC) before it can charge the battery; this is done by the rectifier",
            "Uses solar panels",
            "Burns fuel"
        ],
        correct: 1,
        explanation: "Most modern cars use an alternator for this purpose. An alternator works on the principle of rotating an electromagnet inside a number of copper windings. As the North and South poles of the electromagnet pass the windings (known as phases), an electric current is induced in one direction and then the other. This alternating current (AC) must be converted into direct current (DC) before it can charge the battery; this is done by the rectifier."
    },
    {
        question: "What are the benefits of smart charging systems?",
        options: [
            "Only charges faster",
            "Reduced battery charge times, increase in battery service life, battery temperature regulation, improved idle stability, increased vehicle performance, better fuel economy, a self-diagnosis ability is often available",
            "Only increases voltage",
            "Only saves fuel"
        ],
        correct: 1,
        explanation: "Smart charging controlled alternator output has benefits, including: reduced battery charge times, increase in battery service life, battery temperature regulation, improved idle stability, increased vehicle performance, better fuel economy, a self-diagnosis ability is often available."
    },
    {
        question: "In smart charging systems, what is kept below 14.2V to help prevent overheating and gassing?",
        options: [
            "Battery voltage",
            "Regulated alternator output voltage",
            "Starter current",
            "Light bulb voltage"
        ],
        correct: 1,
        explanation: "On a standard system, the regulated alternator output voltage is kept below 14.2V to help prevent overheating and gassing of the battery."
    },
    {
        question: "How do hybrid vehicles generate electricity to recharge their high voltage battery system?",
        options: [
            "Using an external charger only",
            "In many models, the electric motors used to drive the road wheels can be converted into generators. They operate when power is being provided by the internal-combustion engine or regenerative braking is occurring",
            "Solar panels on roof",
            "Wind turbines"
        ],
        correct: 1,
        explanation: "Not all hybrid vehicles use an alternator to charge the 12V battery system. In many models, the electric motors used to drive the road wheels can be converted into generators. They operate when power is being provided by the internal-combustion engine or regenerative braking is occurring. These motors are able to generate the electricity required to recharge the high voltage system on a hybrid car (somewhere between 100V and 300V)."
    },
    {
        question: "What speed must the crankshaft be rotated at to start the engine?",
        options: [
            "50 rpm",
            "Higher than 180 rpm to initiate combustion",
            "10 rpm",
            "500 rpm"
        ],
        correct: 1,
        explanation: "To start the engine, the crankshaft must be rotated at speeds higher than 180 rpm to initiate combustion. This is the job of the starter motor."
    },
    {
        question: "What components make up a pre-engaged starter motor?",
        options: [
            "Only a motor",
            "Plunger, low winding, high winding, ignition switch set to start, heavy duty terminals, shift lever, pinion, armature, field coils",
            "Just a battery",
            "Only gears"
        ],
        correct: 1,
        explanation: "The internal components of a pre-engaged starter motor include: Plunger, Low winding, High winding, Ignition switch set to start, Heavy duty terminals, Shift lever, Pinion, Armature, Field coils."
    },
    {
        question: "Why do some hybrid vehicles often only have a starter motor for emergency purposes?",
        options: [
            "They don't need starting",
            "Although some hybrid vehicles are fitted with a starter motor, they are often only there for emergency purposes. If the high voltage battery system becomes discharged, the 12-volt starter motor cuts in to get the engine running. Now electricity can be generated to operate the charging system",
            "They use hand cranks",
            "They have unlimited battery life"
        ],
        correct: 1,
        explanation: "Although some hybrid vehicles are fitted with a starter motor, they are often only there for emergency purposes. If the high voltage battery system becomes discharged, the 12-volt starter motor cuts in to get the engine running. Now electricity can be generated to operate the charging system."
    },
    {
        question: "How do hybrid vehicles typically start the internal combustion engine?",
        options: [
            "Using a traditional starter motor",
            "During normal operation, the starter motor is no longer needed. Hybrid vehicles often use a combination electric motor/generator as part of their drive operation. When the internal combustion engine needs to be started to provide the appropriate power delivery, the hybrid electric motor can be used instead of the starter motor",
            "Push starting",
            "Compressed air"
        ],
        correct: 1,
        explanation: "During normal operation, the starter motor is no longer needed. This is because hybrid vehicles often use a combination electric motor/generator as part of their drive operation. When the internal combustion engine needs to be started to provide the appropriate power delivery, the hybrid electric motor can be used instead of the starter motor. The instant and powerful rotation of the crankshaft created by this motor ensures that the 'stop-start' operation of the internal combustion engine is smooth and precise."
    },
    {
        question: "What does legislation state about external vehicle lighting?",
        options: [
            "It's optional",
            "In order to be used on a public highway, legislation states that the vehicle must have an external lighting system that shows presence, position and direction of travel",
            "Only headlights required",
            "Color doesn't matter"
        ],
        correct: 1,
        explanation: "In order to be used on a public highway, legislation states that the vehicle must have an external lighting system that shows presence, position and direction of travel."
    },
    {
        question: "What is tungsten?",
        options: [
            "A type of battery",
            "A metal with a very high melting point (3410°C) that is used to make electric light filaments",
            "A type of glass",
            "A coolant"
        ],
        correct: 1,
        explanation: "Tungsten is a metal with a very high melting point (3410°C) that is used to make electric light filaments."
    },
    {
        question: "What is incandescently in the context of light bulbs?",
        options: [
            "Cold light emission",
            "Emitting visible light as a result of being heated",
            "Reflected light",
            "Fluorescent glow"
        ],
        correct: 1,
        explanation: "Incandescently means emitting visible light as a result of being heated."
    },
    {
        question: "What temperature does a tungsten filament reach to give off white light?",
        options: [
            "1000°C",
            "2300°C",
            "500°C",
            "4000°C"
        ],
        correct: 1,
        explanation: "Many external lighting systems use standard light bulbs, where electricity is forced through a tungsten filament. The resistance created causes the tungsten filament to get hot and glow incandescently. When it reaches a temperature of 2300°C, the filament gives off white light."
    }
];
