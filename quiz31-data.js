const quizData = [
    {
        question: "What information can airflow meters (AFM), mass airflow meters (MAF), or manifold absolute pressure sensors (MAP) provide?",
        options: [
            "Engine temperature only",
            "Information on the volume of airflow in the intake manifold so the correct amount of fuel can be injected for stoichiometric operation",
            "Fuel pressure only",
            "Battery voltage"
        ],
        correct: 1,
        explanation: "Airflow meters (AFM), mass airflow meters (MAF) or manifold absolute pressure sensors (MAP) can be used to provide information on the volume of airflow in the intake manifold. This means that the correct amount of fuel can be injected for stoichiometric operation."
    },
    {
        question: "What is sequential fuel injection?",
        options: [
            "All injectors fire simultaneously",
            "When fuel is injected in the same sequence as engine firing order",
            "Random injection timing",
            "Grouped injection in pairs"
        ],
        correct: 1,
        explanation: "Sequential fuel injection is when fuel is injected in the same sequence as engine firing order."
    },
    {
        question: "How does battery voltage affect fuel injector operation?",
        options: [
            "It has no effect",
            "The pulse width of the fuel injector can be altered in accordance with the rising and falling voltage found when an engine is running",
            "It only affects ignition timing",
            "It controls fuel pressure only"
        ],
        correct: 1,
        explanation: "Battery voltage is often sensed so that the pulse width of the fuel injector can be altered in accordance with the rising and falling voltage found when an engine is running."
    },
    {
        question: "What happens if voltage is high in terms of fuel injector operation?",
        options: [
            "The fuel injector will open late and close early",
            "The fuel injector will open early and close late",
            "No change occurs",
            "The injector stops working"
        ],
        correct: 1,
        explanation: "If voltage is high, the fuel injector will open early and close late. If voltage is low, the fuel injector will open late and close early. This will have an effect on the amount of fuel injected."
    },
    {
        question: "What is the purpose of networked engine management systems?",
        options: [
            "To separate ignition and injection completely",
            "To bring ignition and injection systems under one umbrella, combining them to provide lowest emission output, better fuel economy and strong all-round performance",
            "To increase fuel consumption",
            "To simplify wiring only"
        ],
        correct: 1,
        explanation: "Engine management is designed to bring these two separate systems (ignition and injection) under one umbrella, combining them to provide a system with the lowest emission output, better fuel economy and strong all-round performance."
    },
    {
        question: "How do modern networked engine management systems operate?",
        options: [
            "With a single ECU controlling everything",
            "Separate processing systems have been developed to work in harmony with each other, with many ECUs able to share information",
            "Mechanically without electronics",
            "With independent non-communicating systems"
        ],
        correct: 1,
        explanation: "With the introduction of network systems, many ECUs are able to share information. This means that separate processing systems have been developed to work in harmony with each other in order to provide overall engine control."
    },
    {
        question: "What sensors and actuators can a modern engine management system use?",
        options: [
            "Only basic sensors",
            "Engine temperature sensors (ECT), oxygen sensors, knock sensors, airflow sensors, MAF, MAP, EVAP vacuum controllers, EGR valve, canister purge valve, canister air valve, TPS, air temperature sensors, idle actuators, fuel pressure regulators, camshaft/crankshaft position sensors, ignition coils, fuel injectors, and MIL",
            "Only temperature sensors",
            "Just one universal sensor"
        ],
        correct: 1,
        explanation: "A modern engine management system can use many sensors and actuators to provide overall control, including all the listed components working together."
    },
    {
        question: "Why do ECUs rely on voltage and frequency patterns from sensors?",
        options: [
            "For simplicity only",
            "Because vehicle system voltages are unstable and battery voltage rises and falls in accordance with engine operating conditions",
            "To increase power",
            "For fuel economy only"
        ],
        correct: 1,
        explanation: "In order to process information coming from engine sensors, ECUs rely on voltage and frequency patterns. Unfortunately, vehicle system voltages are unstable and battery voltage rises and falls in accordance with engine operating conditions."
    },
    {
        question: "What voltage range is maintained for sensor signals regardless of engine operation?",
        options: [
            "Between 0V and 12V",
            "Between 0V and 5V at all times",
            "Between 5V and 14.5V",
            "Between 12V and 24V"
        ],
        correct: 1,
        explanation: "Many systems use a resistor to reduce the processing voltages from the sensors to around 5V. This means that, regardless of engine operation, cranking or charging, signal voltages will be stabilised to between 0V and 5V at all times. This ensures correct interpretation under all engine running conditions."
    },
    {
        question: "What does ROM (Read Only Memory) contain in an ECU?",
        options: [
            "Temporary data",
            "A program to control the ECU and therefore engine management; the program is vehicle generic and not restricted to one vehicle type",
            "User settings",
            "Diagnostic codes only"
        ],
        correct: 1,
        explanation: "The read only memory contains a program to control the ECU, and therefore engine management. The program is vehicle generic and not restricted to one vehicle type. The information in this part of the ECU cannot be changed."
    },
    {
        question: "What is RAM (Random Access Memory) used for in an ECU?",
        options: [
            "Permanent storage",
            "Temporary memory used by the central processing unit to store and retrieve information; information is lost when power is disconnected",
            "Program storage",
            "Long-term data retention"
        ],
        correct: 1,
        explanation: "RAM is a temporary memory inside the ECU. It is used by the central processing unit to store and retrieve information. With random access memory, information is lost when power is disconnected."
    },
    {
        question: "What is PROM/EPROM (Programmable Read Only Memory)?",
        options: [
            "Temporary memory",
            "Memory containing vehicle-specific information (engine management map) that is updateable via remapping or data link connection",
            "Battery backup memory",
            "Diagnostic memory only"
        ],
        correct: 1,
        explanation: "The programmable read only memory contains information which is vehicle specific, and is sometimes known as the engine management map. This information is updateable; this is sometimes called remapping. Some systems allow remapping to be done via the serial port or data link connection, where a new program or map is substituted for the original. This information tends to be read only."
    },
    {
        question: "What is KAM (Keep Alive Memory)?",
        options: [
            "Short-term memory only",
            "Memory that allows the ECU to adapt to different running conditions via adaptive strategy, maintaining stable engine operation as conditions change",
            "ROM backup",
            "Temporary diagnostic storage"
        ],
        correct: 1,
        explanation: "The keep alive memory system of a vehicle's ECU allows it to adapt to different running conditions. This is known as adaptive strategy, or adaptation. As engine operation changes from that found in the ECU map (due to wear, faults or driving style), changes are substituted to the calculations carried out by the central processing unit. This allows fuel injection and ignition systems to adapt. Because of this, a stable engine operation is achieved, and driveability remains constant regardless of the situation (within reasonable limits)."
    },
    {
        question: "What is LOS (Limited Operating Strategy)?",
        options: [
            "Maximum performance mode",
            "When a fault occurs in a sensor or actuator, default information is supplied and the engine runs on pre-programmed values, maintaining relatively stable operation ('limp home')",
            "Normal operating mode",
            "Diagnostic mode only"
        ],
        correct: 1,
        explanation: "If a fault occurs in a sensor or actuator, default information is supplied and may bypass incoming and outgoing data to the ECU. The engine is now running on pre-programmed values and maintains a relatively stable engine operation. This is known as limited operating strategy (LOS), or sometimes 'limp home'."
    },
    {
        question: "What is the difference between open loop and closed loop operation?",
        options: [
            "They are the same thing",
            "Open loop: ECU controls engine using pre-programmed values and ignores sensor inputs; Closed loop: operating conditions are met and sensor information is used to monitor and control engine operation",
            "Open loop uses sensors, closed loop doesn't",
            "Only closed loop exists in modern engines"
        ],
        correct: 1,
        explanation: "For the ECU to accurately measure and control the engine, certain operating conditions must be met (e.g., normal operating temperature). Until these conditions have been met, the ECU controls the engine using pre-programmed values and ignores sensor inputs - this is known as open loop. When the operating conditions have been achieved, sensor information is used to monitor and control engine operation - this is known as closed loop."
    },
    {
        question: "What is LPG (Liquefied Petroleum Gas)?",
        options: [
            "Compressed natural gas",
            "A low pressure liquefied gas mixture made up of mainly propane and butane that can be burned in a conventional internal combustion engine",
            "Pure methane",
            "Biodiesel fuel"
        ],
        correct: 1,
        explanation: "Liquefied petroleum gas (LPG) is a low pressure liquefied gas mixture made up of mainly propane and butane. This fuel can be burned in a conventional internal combustion engine and produces less CO₂ than petrol."
    },
    {
        question: "What is retrofitting in the context of alternative fuel vehicles?",
        options: [
            "Installing new tires",
            "Aftermarket vehicle conversion to run on alternative fuels",
            "Engine replacement",
            "Transmission upgrade"
        ],
        correct: 1,
        explanation: "Retrofitting refers to aftermarket vehicle conversion to alternative fuels. A standard petrol car can often be converted to run on LPG by adding a second tank and fuel system for the LPG, making the car 'dual fuel'."
    },
    {
        question: "What is CNG (Compressed Natural Gas) mainly composed of?",
        options: [
            "Propane and butane",
            "Methane",
            "Hydrogen",
            "Ethanol"
        ],
        correct: 1,
        explanation: "High pressure compressed natural gas (CNG) is mainly composed of methane. It can be used to fuel normal internal combustion engines instead of petrol."
    },
    {
        question: "What produces the least amount of CO₂ among fossil fuels?",
        options: [
            "Diesel",
            "Petrol",
            "The combustion of methane",
            "Heavy fuel oil"
        ],
        correct: 2,
        explanation: "The combustion of methane produces the least amount of CO₂ of all fossil fuels."
    },
    {
        question: "What is biogas?",
        options: [
            "Compressed natural gas",
            "A gas produced by the biological breakdown of organic matter in the absence of oxygen",
            "Liquefied petroleum gas",
            "Hydrogen fuel"
        ],
        correct: 1,
        explanation: "Biogas normally refers to a gas produced by the biological breakdown of organic matter in the absence of oxygen. Biogas normally comes from biogenic material, such as plant matter, and is a type of biofuel."
    },
    {
        question: "What is biodiesel (fatty acid methyl ester)?",
        options: [
            "Conventional diesel with additives",
            "A way of making a form of diesel fuel from a very wide range of oils produced from plants",
            "Compressed natural gas",
            "Ethanol-based fuel"
        ],
        correct: 1,
        explanation: "Biodiesel (fatty acid methyl ester) is a way of making a form of diesel fuel from a very wide range of oils produced from plants, including algae oil, canola oil, coconut oil, and many others."
    },
    {
        question: "How does biodiesel compare to fossil diesel fuel in terms of energy density?",
        options: [
            "Higher energy density",
            "Same energy density",
            "Lower energy density, meaning biodiesel vehicles cannot keep up with the fuel economy of normal fossil-fuelled diesel vehicles",
            "Much higher efficiency"
        ],
        correct: 2,
        explanation: "Biodiesel has a lower energy density than fossil diesel fuel. This means that biodiesel vehicles are not quite able to keep up with the fuel economy of a normal fossil-fuelled diesel vehicle."
    },
    {
        question: "What is bioalcohol/ethanol considered to be?",
        options: [
            "A fossil fuel",
            "A renewable energy source because it can be made from sugar or starch in crops",
            "A petroleum product",
            "A synthetic fuel only"
        ],
        correct: 1,
        explanation: "Many internal combustion engines can be easily converted to run on alcohol or ethanol. While alcohol and ethanol can be made from petroleum or natural gas, they can also be easily obtained from sugar or starch in crops. This type of fuel is therefore considered to be a renewable energy source."
    },
    {
        question: "What was the first car to use ethanol as fuel?",
        options: [
            "Ford Model A",
            "The Model T Ford, produced from 1908 until 1927, fitted with a carburettor with adjustable jetting",
            "Chevrolet Corvette",
            "Mercedes-Benz 300SL"
        ],
        correct: 1,
        explanation: "The first car that used ethanol as a fuel was the Model T Ford, produced from 1908 until 1927. It was fitted with a carburettor with adjustable jetting, allowing use of petrol or ethanol, or a combination of the two."
    },
    {
        question: "What are the advantages of ammonia (NH₃) as a vehicle fuel?",
        options: [
            "Lower cost only",
            "Can run in spark ignition or compression ignition engines with minor modifications, can be made from renewable electricity, has half the density of petrol/diesel so can be easily carried in sufficient quantities, and produces no emissions other than nitrogen and water vapour",
            "Higher energy density than petrol",
            "Easier to refuel than petrol"
        ],
        correct: 1,
        explanation: "Ammonia Green (NH₃) is being used with success by some vehicle manufacturers because it can run in spark ignition or compression ignition engines with only minor modifications. Ammonia is considered to be very toxic, but if stored and handled correctly it is no more dangerous than petrol or LPG. It can be made from renewable electricity (solar, wind or hydro-electricity) and has half the density of petrol or diesel. This means that it can be easily carried in sufficient quantities in vehicles, unlike some other alternative fuels. On combustion it produces no emissions other than nitrogen and water vapour, making the exhaust non-polluting."
    }
];
