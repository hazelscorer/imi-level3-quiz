const quizData = [
    {
        question: "Why are electric motors considered effective for vehicle propulsion?",
        options: [
            "They are the cheapest option",
            "They are a very effective method of providing a source of propulsion for cars and they produce no emissions",
            "They are the fastest option",
            "They require no maintenance"
        ],
        correct: 1,
        explanation: "Electric motors are a very effective method of providing a source of propulsion for cars and they produce no emissions."
    },
    {
        question: "What are the main methods used to create electricity for powering electric vehicles?",
        options: [
            "Only fossil fuels",
            "Solar power, mains supply, hydrogen fuel cells, and hybrid drive",
            "Nuclear power only",
            "Wind power only"
        ],
        correct: 1,
        explanation: "Methods used to create electricity for powering electric vehicles mainly come from: solar power, mains supply, hydrogen fuel cells, and hybrid drive."
    },
    {
        question: "What is a solar car?",
        options: [
            "A car painted with reflective paint",
            "An electric vehicle powered by energy from the sun, obtained from solar panels on the car",
            "A car with tinted windows",
            "A hybrid vehicle"
        ],
        correct: 1,
        explanation: "A solar car is an electric vehicle powered by energy from the sun, which is obtained from solar panels on the car. A solar panel converts light energy into electricity that can be used as a source of power."
    },
    {
        question: "Can solar panels currently be used to directly supply a car with enough power for drive?",
        options: [
            "Yes, easily",
            "No, they cannot currently be used to directly supply a car with enough power to provide drive to electric motors, but they can be used to extend the range of 'plug in' electric vehicles",
            "Only in summer",
            "Only with special modifications"
        ],
        correct: 1,
        explanation: "Solar panels cannot currently be used to directly supply a car with enough power to provide drive to electric motors, but they can be used to extend the range of 'plug in' electric vehicles."
    },
    {
        question: "What are 'plug in' electric vehicles?",
        options: [
            "Vehicles with external power outlets",
            "Vehicles powered from high capacity batteries that drive electric motors, charged using mains electricity",
            "Vehicles that only run on solar power",
            "Vehicles with auxiliary generators"
        ],
        correct: 1,
        explanation: "A number of manufacturers are producing a range of mains electricity charged electric cars. Instead of an internal combustion engine, these vehicles (often known as 'plug in') are powered from high capacity batteries that drive electric motors."
    },
    {
        question: "What are the main limitations of 'plug in' electric vehicles?",
        options: [
            "High cost only",
            "The distance they can travel on a single charge (known as range) and the amount of time it takes to recharge the batteries, which can be many hours",
            "Low top speed only",
            "Poor acceleration only"
        ],
        correct: 1,
        explanation: "The main limitations of 'plug in' electric vehicles are the distance they can travel on a single charge (known as range) and the amount of time it takes to recharge the batteries, which can be many hours."
    },
    {
        question: "How does a hydrogen fuel cell create electricity?",
        options: [
            "By burning hydrogen",
            "Through combustion only",
            "It creates electricity that can be used to power electric motors, similar to a battery but doesn't store its own internal electricity; instead, it uses hydrogen as a fuel source",
            "By chemical explosion"
        ],
        correct: 2,
        explanation: "Some manufacturers are producing cars with a hydrogen fuel cell. The fuel cell creates electricity that can be used to power electric motors. A fuel cell is similar to a battery but it doesn't store its own internal electricity. Instead, it uses hydrogen as a fuel source to create electricity."
    },
    {
        question: "What keeps running in a hydrogen fuel cell vehicle?",
        options: [
            "The engine",
            "The transmission",
            "The fuel tank of hydrogen is kept topped up; the fuel cell, unlike a battery, will keep running and not go flat",
            "The alternator"
        ],
        correct: 2,
        explanation: "This means that if a fuel tank of hydrogen is kept topped up, the fuel cell, unlike a battery, will keep running and not go flat."
    },
    {
        question: "What is used in the most common type of hydrogen fuel cell construction?",
        options: [
            "A catalyst",
            "A proton exchange membrane (PEM) that separates the two sides of the fuel cell",
            "A copper wire",
            "A silicon chip"
        ],
        correct: 1,
        explanation: "The most common type of hydrogen fuel cell is created using a component called a proton exchange membrane (PEM). This is material that separates the two sides of the fuel cell."
    },
    {
        question: "How is the fuel cell fed in a PEM fuel cell?",
        options: [
            "With electricity from the battery",
            "One side of the fuel cell is fed with oxygen from the surrounding air; the other side is fed with hydrogen from a fuel tank",
            "With compressed air only",
            "With liquid hydrogen only"
        ],
        correct: 1,
        explanation: "One side of the fuel cell is fed with oxygen from the surrounding air; the other side is fed with hydrogen from a fuel tank."
    },
    {
        question: "What happens to protons in fuel cell operation?",
        options: [
            "They remain in the hydrogen atoms",
            "As hydrogen enters the fuel cell, a reaction takes place that strips the protons from the atom and moves them through the membrane towards the oxygen on the other side",
            "They are destroyed",
            "They combine with nitrogen"
        ],
        correct: 1,
        explanation: "As hydrogen enters the fuel cell, a reaction takes place that strips the protons from the atom and moves them through the membrane towards the oxygen on the other side."
    },
    {
        question: "What is the only emission from a hydrogen fuel cell?",
        options: [
            "Carbon dioxide",
            "Nitrogen oxides",
            "Water (H₂O), making it clean and non-polluting",
            "Carbon monoxide"
        ],
        correct: 2,
        explanation: "After the energy has been created in the electric circuit, the electrons reattach themselves to the protons and the hydrogen atom combines with the oxygen to create H₂O. This means that the only emission from the fuel cell is water, making it clean and non-polluting."
    },
    {
        question: "What is the typical output from a single hydrogen fuel cell?",
        options: [
            "12V",
            "Approximately 0.8V, so a number of fuel cells have to be combined (fuel cell stack) to create a usable amount of voltage to drive electric motors",
            "5V",
            "24V"
        ],
        correct: 1,
        explanation: "The typical output from a single fuel cell is approximately 0.8V, so a number of fuel cells have to be combined (known as a fuel cell stack) to create a usable amount of voltage to drive electric motors."
    },
    {
        question: "What is a hybrid vehicle?",
        options: [
            "A vehicle with two fuel tanks",
            "One which combines an internal combustion engine with an electric motor to provide drive, giving the flexibility of a petrol or diesel engine with the fuel economy and low pollution characteristics of electric motors",
            "A vehicle with four-wheel drive",
            "A vehicle with two engines of the same type"
        ],
        correct: 1,
        explanation: "A hybrid vehicle is one which combines an internal combustion engine with an electric motor to provide drive. This gives the flexibility of a petrol or diesel engine with the fuel economy and low pollution characteristics of electric motors."
    },
    {
        question: "In a series hybrid drive, what is the role of the internal combustion engine?",
        options: [
            "To directly drive the wheels",
            "A small capacity internal combustion engine is used to act as a generator, charging batteries that power the electric motors that drive the wheels. There is no direct connection between the engine and the wheels",
            "To provide power steering",
            "To charge the air conditioning"
        ],
        correct: 1,
        explanation: "Series hybrid: A small capacity internal combustion engine is used to act as a generator. This then charges batteries that are used to power the electric motors that drive the wheels. There is no direct connection between the engine and the wheels, meaning that a gearbox is not required."
    },
    {
        question: "What is the advantage of a series hybrid system?",
        options: [
            "Higher top speed",
            "No driving loads are placed on the engine and it can run at a constant speed, reducing fuel consumption, emission output and engine wear",
            "Lower cost",
            "Simpler maintenance"
        ],
        correct: 1,
        explanation: "The advantage of this system is that no driving loads are placed on the engine and it can run at a constant speed. This reduces fuel consumption, emission output and engine wear."
    },
    {
        question: "In a parallel hybrid drive, how is the electric motor used?",
        options: [
            "To replace the engine completely",
            "An integrated electric motor is used to support or boost the performance of a small capacity internal combustion engine; when not required, the electric motor can be converted into a generator to recharge the high voltage electric batteries",
            "Only for starting",
            "Only for reverse gear"
        ],
        correct: 1,
        explanation: "Parallel hybrid: An integrated electric motor is used to support or boost the performance of a small capacity internal combustion engine. When not required, the electric motor can be converted into a generator to recharge the high voltage electric batteries."
    },
    {
        question: "What is a combination hybrid?",
        options: [
            "A vehicle with two engines",
            "A type of hybrid that uses the properties of both series and parallel hybrids; the car can operate on electric motors alone, internal combustion engines alone or a combination of both",
            "A three-wheeled vehicle",
            "A diesel-electric train"
        ],
        correct: 1,
        explanation: "Combination hybrid: This type of hybrid uses the properties of both series and parallel hybrids. The car can operate on electric motors alone, internal combustion engines alone or a combination of both."
    },
    {
        question: "What happens in a collaborative motor drive system when pulling away?",
        options: [
            "Only the engine provides power",
            "The petrol engine is not used and the electric motor provides the drive",
            "Both systems work at maximum",
            "The vehicle cannot move"
        ],
        correct: 1,
        explanation: "In a collaborative motor drive system, when pulling away, the petrol engine is not used and the electric motor provides the drive."
    },
    {
        question: "What happens in a collaborative hybrid when decelerating or braking?",
        options: [
            "Energy is wasted as heat only",
            "The system recycles the kinetic energy to recharge the batteries",
            "The engine speeds up",
            "The generator stops"
        ],
        correct: 1,
        explanation: "When decelerating or braking, the system recycles the kinetic energy to recharge the batteries."
    },
    {
        question: "Where is the electric motor positioned in an integrated motor system?",
        options: [
            "In the trunk",
            "Sandwiched between an internal combustion engine and the gearbox, in a similar position to the flywheel",
            "On the roof",
            "Under the seats"
        ],
        correct: 1,
        explanation: "An integrated motor system has a compact electric motor, sandwiched between an internal combustion engine and the gearbox, in a similar position to the flywheel. When needed, this electric motor is able to boost the performance from the engine."
    },
    {
        question: "What voltage range do many hybrid vehicles operate at?",
        options: [
            "12V only",
            "Between 100V and 300V, requiring special care when working on them as high voltage systems can cause severe injury or death",
            "24V only",
            "48V only"
        ],
        correct: 1,
        explanation: "Many hybrid vehicles operate with high voltages of between 100V and 300V. Special care must be taken when working on hybrid vehicles as the high voltage systems can cause severe injury or death."
    },
    {
        question: "What benefits does heating, ventilation, air-conditioning and climate control bring?",
        options: [
            "Only cooling benefits",
            "Warmth, cooling, dehumidifying, and air purification",
            "Only heating benefits",
            "Only fresh air circulation"
        ],
        correct: 1,
        explanation: "Certain convenience systems can be constructed and powered by the engine in order to make the passenger compartment a comfortable and ambient environment. Heating, ventilation, air-conditioning and climate control bring added benefits; these include: warmth, cooling, dehumidifying, and air purification."
    },
    {
        question: "How is a vehicle heater created?",
        options: [
            "Using an electric heating element only",
            "By including a second radiator called a heater matrix inside the vehicle, which is connected to the cooling system; coolant from the engine is directed through the heater matrix and an electric fan circulates air through it to warm the passenger compartment",
            "By burning fuel in the cabin",
            "Using exhaust heat only"
        ],
        correct: 1,
        explanation: "A vehicle heater is created by including a second radiator called a heater matrix, which is connected to the cooling system inside the vehicle. Coolant from the engine is directed by a series of valves or control passes through the heater matrix. An electric fan circulates air through the heater matrix - the air warms up and is used to heat the passenger compartment."
    },
    {
        question: "What are the three main methods of heat transfer?",
        options: [
            "Burning, freezing, and melting",
            "Conduction, convection, and radiation",
            "Compression, expansion, and contraction",
            "Absorption, reflection, and transmission"
        ],
        correct: 1,
        explanation: "Heat transfer is achieved through three main methods: conduction (transfer of heat energy through a solid), convection (transfer of heat energy through a liquid or gas), and radiation (movement of heat energy through a vacuum or space as electromagnetic radiation). Heat will always move from hot to cold."
        }
];
