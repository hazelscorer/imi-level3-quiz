const quizData = [
    {
        question: "What are the main components of the common rail diesel fuel supply circuit?",
        options: [
            "Only fuel tank and pump",
            "Fuel tank, low pressure fuel pump, fuel filter, high pressure fuel pump, fuel rail, fuel pressure regulator and return system, and fuel injectors",
            "Fuel tank, carburetor, and distributor",
            "Only fuel injectors and ECU"
        ],
        correct: 1,
        explanation: "The main components making up the fuel supply circuit are: fuel tank, low pressure fuel pump, fuel filter, high pressure fuel pump, fuel rail, fuel pressure regulator and return system, and fuel injectors."
    },
    {
        question: "What is the purpose of the fuel tank in a common rail injection system?",
        options: [
            "To filter the fuel",
            "The main reservoir used for supply of clean fuel for the common rail injection system",
            "To pressurize the fuel",
            "To cool the engine"
        ],
        correct: 1,
        explanation: "The fuel tank is the main reservoir used for supply of clean fuel for the common rail injection system."
    },
    {
        question: "What is the job of the low pressure fuel pump in a common rail system?",
        options: [
            "To atomise the fuel",
            "To transfer fuel from the tank to the engine",
            "To filter contaminants",
            "To regulate fuel temperature"
        ],
        correct: 1,
        explanation: "A common rail fuel injection system needs a method of transferring fuel from the tank to the engine. This is the job of the low pressure fuel pump."
    },
    {
        question: "What type of pump is commonly used for low pressure fuel delivery in common rail systems?",
        options: [
            "Centrifugal pump",
            "Roller cell type, operating similarly to those found on petrol fuel injection systems",
            "Gear pump only",
            "Diaphragm pump"
        ],
        correct: 1,
        explanation: "Many fuel pumps are of the roller cell type and operate in a similar manner to those found on petrol fuel injection systems."
    },
    {
        question: "Why is a fuel filter fitted between the low pressure pump and high pressure pump?",
        options: [
            "To increase fuel pressure",
            "Because small amounts of dirt would easily block fuel injectors or damage high pressure pumps due to very small tolerances",
            "To cool the fuel",
            "To add additives"
        ],
        correct: 1,
        explanation: "Due to the very small tolerances found within a common rail fuel injection system, small amounts of dirt would easily block fuel injectors or damage high pressure pumps. As a result a fuel filter is fitted between the low pressure pump and the high pressure pump."
    },
    {
        question: "What pressure can a mechanically driven high pressure fuel pump raise the system to?",
        options: [
            "Around 500 bar",
            "Around 1800 bar",
            "Around 200 bar",
            "Around 3000 bar"
        ],
        correct: 1,
        explanation: "A common rail fuel injection system needs extremely high fuel pressures in order to correctly atomise the fuel from the injectors in the combustion chamber. A mechanically driven pump is operated by the engine that is able to raise system pressure to around 1800 bar, regardless of engine speed."
    },
    {
        question: "What is the fuel rail in a common rail diesel system?",
        options: [
            "A fuel line only",
            "A common reservoir of diesel held at a constant high pressure from which all the injectors are fed",
            "A pressure regulator",
            "A filter housing"
        ],
        correct: 1,
        explanation: "The fuel rail is a common reservoir of diesel held at a constant high pressure from which all the injectors are fed. The pressure in the rail is monitored from an electronic sensor and a solenoid valve is able to allow any excess pressure and fuel to return to the tank."
    },
    {
        question: "What are the two main types of fuel injector used with common rail systems?",
        options: [
            "Mechanical and hydraulic",
            "Solenoid type and piezoelectric",
            "Direct and indirect",
            "Single and dual spray"
        ],
        correct: 1,
        explanation: "There are two main types of fuel injector used with common rail systems: solenoid type and piezoelectric."
    },
    {
        question: "How do piezoelectric injectors operate?",
        options: [
            "Using hydraulic pressure only",
            "A series of piezoelectric crystals are stacked above the needle. When supplied with electric current from the ECU, the crystals expand in the electric field causing the injector to open",
            "Through mechanical springs",
            "Using magnetic fields only"
        ],
        correct: 1,
        explanation: "To improve the speed and accuracy of fuel injectors many manufacturers now use piezoelectric injectors. Instead of using solenoids to open the injectors, a series of piezoelectric crystals are stacked above the needle. When supplied with an electric current from the ECU the crystals expand in the electric field. As the crystals expand, the injector is opened extremely fast and with accurate control."
    },
    {
        question: "Why do piezoelectric injectors need calibration?",
        options: [
            "They all function identically",
            "The amount of expansion of the crystals in each fuel injector may be slightly different due to construction",
            "To increase fuel pressure",
            "To reduce emissions only"
        ],
        correct: 1,
        explanation: "As the amount of expansion of the crystals in each fuel injector may be slightly different due to its construction, each injector will often have to be calibrated."
    },
    {
        question: "What is injector coding?",
        options: [
            "A color coding system",
            "A method where each injector has a serial number marked on the body which must be programmed into the systems ECU using a scan tool",
            "A mechanical adjustment",
            "A fuel pressure setting"
        ],
        correct: 1,
        explanation: "To calibrate the injectors, a method known as injector coding is often used. Each injector will have a serial number marked on the body, which must be programmed into the systems ECU using a scan tool. The serial number contains information about the function of the individual injector and allows the engine management system to operate it accurately."
    },
    {
        question: "What is pilot injection in common rail diesel fuel delivery?",
        options: [
            "The main fuel injection event",
            "A small amount of fuel injected prior to the main injection to initiate combustion and reduce the delay period normally associated with compression ignition",
            "Post-combustion injection",
            "Fuel return to tank"
        ],
        correct: 1,
        explanation: "Pilot injection: A small amount of fuel is injected prior to the main injection. The purpose of this is to initiate combustion and reduce the delay period normally associated with compression ignition. As a small amount of combustion is already underway when the main injection takes place, the flame spread is much more controlled. Detonation is reduced, performance is improved and diesel knock noise is lessened."
    },
    {
        question: "What happens during the main injection stage?",
        options: [
            "Only a small amount of fuel is injected",
            "Most of the fuel is atomised in the combustion chamber for power delivery, with the fuel igniting after the delay period",
            "Fuel returns to the tank",
            "The engine stops"
        ],
        correct: 1,
        explanation: "Main injection: Most of the fuel is atomised in the combustion chamber for power delivery. As the fuel is initially injected, the combustion chamber temperature and pressure falls slightly, leading to a pause before the fuel begins to burn. This is known as the delay period. As the fuel ignites, pressure and temperature rapidly rise as the flame spreads out in the combustion chamber, forcing the piston down on its power stroke."
    },
    {
        question: "What is the purpose of post injection?",
        options: [
            "To increase power output",
            "To help complete the combustion process, reduce hydrocarbon emissions, and increase DPF inlet temperature during soot regeneration",
            "To cool the engine",
            "To clean the injectors"
        ],
        correct: 1,
        explanation: "Post injection: A small amount of fuel is injected into the combustion chamber after the main injection. The purpose of this is to help complete the combustion process and reduce the amount of hydrocarbon emissions. If the emission control system also incorporates a diesel oxidation catalyst and a catalysed soot filter DPF, the additional fuel injected into the cylinder is used for the purpose of increasing the DPF inlet temperature during the soot regeneration."
    },
    {
        question: "Which sensors are used in common rail direct injection systems?",
        options: [
            "Only temperature sensors",
            "Mass air flow sensor, throttle/pedal position sensor, intake air temperature sensor, engine coolant temperature sensor, camshaft position sensor, and crankshaft position sensor",
            "Only pressure sensors",
            "Just one universal sensor"
        ],
        correct: 1,
        explanation: "The common rail direct injection system uses many of the same sensors found in petrol electronic fuel injection, including: mass air flow sensor, throttle/pedal position sensor, intake air temperature sensor, engine coolant temperature sensor, camshaft position sensor, and crankshaft position sensor."
    },
    {
        question: "What is the purpose of glow plugs in common rail diesel systems?",
        options: [
            "To ignite the fuel directly",
            "To pre-heat the air in the combustion chamber to assist with cold starting",
            "To measure temperature",
            "To filter exhaust gases"
        ],
        correct: 1,
        explanation: "As with standard diesel engines, glow plugs are often used to pre-heat the air in the combustion chamber to assist with cold starting."
    },
    {
        question: "What is 'post glow' in glow plug operation?",
        options: [
            "The initial heating phase",
            "When glow plugs are left on for a short period after the engine has started, running at reduced current to help prevent burning out",
            "Maximum power output",
            "Cooling down phase"
        ],
        correct: 1,
        explanation: "Many plugs are left on for a short period after the engine has started and this is normally referred to as 'post glow'. They run at a reduced current to help prevent them from burning out, and the additional heat supplied helps to lower start-up emissions."
    },
    {
        question: "What could cause cold or hot starting problems in fuel injection systems?",
        options: [
            "Only low fuel level",
            "Coolant temperature sensor signal incorrect affecting fuel injection quantity, or faulty glow plugs on a diesel engine",
            "Only air filter issues",
            "Battery voltage alone"
        ],
        correct: 1,
        explanation: "Cold or hot starting problems can be caused by coolant temperature sensor signal incorrect, affecting fuel injection quantity, or faulty glow plugs on a diesel engine."
    },
    {
        question: "What could cause poor performance in a fuel injection system?",
        options: [
            "Clean air filter",
            "EGR valve stuck open, reducing volumetric efficiency and performance",
            "High fuel pressure",
            "Working oxygen sensor"
        ],
        correct: 1,
        explanation: "Poor performance can be caused by EGR valve stuck open, reducing volumetric efficiency and performance."
    },
    {
        question: "What could cause excessive exhaust emissions?",
        options: [
            "Low fuel pressure",
            "Fuel pressure regulator stuck closed, raising injection pressure and making the engine run rich",
            "Clean fuel filter",
            "Working MAF sensor"
        ],
        correct: 1,
        explanation: "Excessive exhaust emissions can be caused by fuel pressure regulator stuck closed, raising injection pressure and making the engine run rich."
    },
    {
        question: "What could cause high fuel consumption?",
        options: [
            "Accurate sensors",
            "Incorrectly adjusted throttle position sensor, meaning that engine load is miscalculated and the engine is over-fuelled",
            "Clean injectors",
            "Low fuel pressure"
        ],
        correct: 1,
        explanation: "High fuel consumption can be caused by incorrectly adjusted throttle position sensor, meaning that engine load is miscalculated and the engine is over-fuelled."
    },
    {
        question: "What could cause erratic running?",
        options: [
            "Stable fuel pressure",
            "Open circuit mass airflow sensor, leading to incorrect air quantity measurement",
            "Clean fuel system",
            "Working ECU"
        ],
        correct: 1,
        explanation: "Erratic running can be caused by open circuit mass airflow sensor, leading to incorrect air quantity measurement."
    },
    {
        question: "What could cause low power due to fuel starvation?",
        options: [
            "High fuel pressure",
            "Blocked fuel filter, reducing the amount of fuel available for injection and reducing power",
            "Clean injectors",
            "Working fuel pump"
        ],
        correct: 1,
        explanation: "Low power can be caused by blocked fuel filter, reducing the amount of fuel available for injection and reducing power because of starvation."
    },
    {
        question: "What are the different names for the engine control computer?",
        options: [
            "Only ECU",
            "Electronic control unit (ECU), electronic control module (ECM), and powertrain control module (PCM)",
            "Only PCM",
            "Only ECM"
        ],
        correct: 1,
        explanation: "Electronic control is achieved using computers. Different manufacturers call these computers different things: electronic control unit (ECU), electronic control module (ECM), powertrain control module (PCM). Despite their different names, essentially they all function in a very similar manner."
    },
    {
        question: "What is the basic principle of ignition control in engine management?",
        options: [
            "Random spark timing",
            "To ensure a spark arrives at the correct spark plug at precisely the right time, regardless of speed and load",
            "Fixed timing only",
            "Mechanical advance only"
        ],
        correct: 1,
        explanation: "To ensure a spark arrives at the correct spark plug at precisely the right time, regardless of speed and load, an ignition management system can be used."
    }
];
