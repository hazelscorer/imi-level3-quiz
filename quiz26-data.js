const quizData = [
    {
        question: "In multipoint fuel injection, where is each fuel injector mounted?",
        options: [
            "In the throttle body",
            "Just before the intake valve of each cylinder",
            "In the exhaust manifold",
            "In the fuel tank"
        ],
        correct: 1,
        explanation: "Multipoint fuel injection has each cylinder with its own fuel injector mounted just before the intake valve, allowing precise fuel metering for each cylinder."
    },
    {
        question: "What is the advantage of multipoint fuel injection regarding fuel delivery timing?",
        options: [
            "Fuel is always injected during exhaust stroke",
            "All cylinders receive fuel simultaneously",
            "Fuel is injected at the last moment before entering the cylinder",
            "Fuel is stored in the intake manifold"
        ],
        correct: 2,
        explanation: "In multipoint EFI, the air intake tract only draws air, and fuel is injected at the last moment before it enters the cylinder, allowing accurate fuel metering control."
    },
    {
        question: "In simultaneous multipoint injection, how are the injectors controlled?",
        options: [
            "Each injector operates independently",
            "Injectors are grouped in pairs",
            "All injectors operate at the same time via a common electronic driver circuit",
            "Injectors fire based on cylinder temperature"
        ],
        correct: 2,
        explanation: "Simultaneous injection means the injectors are not timed to any particular cylinder and all injectors operate at the same time, controlled by a common electronic driver circuit."
    },
    {
        question: "In grouped multipoint injection, how are the injectors typically arranged?",
        options: [
            "All injectors fire together",
            "Injectors are grouped in combinations (normally pairs) operated by a common driver circuit",
            "Each injector has its own individual timing",
            "Front and rear cylinders are grouped separately"
        ],
        correct: 1,
        explanation: "Grouped injection means the injectors are grouped in combinations (normally pairs) and the grouped injectors are operated at the same time by a common electronic driver circuit for each pair."
    },
    {
        question: "What is sequential multipoint fuel injection?",
        options: [
            "All injectors fire simultaneously",
            "Injectors fire in pairs",
            "Each individual injector works independently and is timed to operate with the cylinder's induction stroke in the same pattern as the engine firing order",
            "Injectors operate randomly based on load"
        ],
        correct: 2,
        explanation: "Sequential injection means each individual injector works independently of the others and is timed to operate with the cylinder's induction stroke in the same pattern as the engine firing order."
    },
    {
        question: "What are the main components of the fuel supply circuit?",
        options: [
            "Only fuel tank and fuel pump",
            "Fuel tank, fuel pump, fuel filter, fuel rail, fuel injectors, fuel pressure regulator, and overflow return to tank",
            "Fuel tank, carburetor, and fuel lines",
            "Fuel pump, air filter, and spark plugs"
        ],
        correct: 1,
        explanation: "The main components of the fuel supply circuit are: fuel tank, fuel pump, fuel filter, fuel rail, fuel injectors, fuel pressure regulator, and overflow return to tank."
    },
    {
        question: "What is the purpose of sealing the fuel tank to the atmosphere?",
        options: [
            "To increase fuel pressure",
            "To reduce the possibility of hydrocarbon emission due to evaporation",
            "To prevent fuel contamination",
            "To improve fuel economy"
        ],
        correct: 1,
        explanation: "Fuel tanks are sealed to the atmosphere to reduce the possibility of hydrocarbon emission due to evaporation."
    },
    {
        question: "What components are shown inside the fuel tank diagram?",
        options: [
            "Only fuel and a drain plug",
            "HC gas, fuel, baffles, strainer, sub tank, drain plug, and fuel gauge sender unit",
            "Just the fuel pump and filter",
            "Only the fuel inlet tube"
        ],
        correct: 1,
        explanation: "The fuel tank diagram shows HC gas, fuel, baffles, strainer, sub tank, drain plug, and fuel gauge sender unit as internal components."
    },
    {
        question: "What is the primary job of the fuel pump in an EFI system?",
        options: [
            "To filter the fuel",
            "To supply a large quantity of fuel under pressure to function correctly",
            "To cool the engine",
            "To measure fuel consumption"
        ],
        correct: 1,
        explanation: "An electronic fuel injection system needs a large quantity of fuel, supplied under pressure to function correctly. This is the job of the fuel pump."
    },
    {
        question: "What type of fuel pump is commonly used in EFI systems?",
        options: [
            "Mechanical diaphragm pump",
            "Roller cell type electric pump",
            "Hand-operated pump",
            "Gravity-feed pump"
        ],
        correct: 1,
        explanation: "Many fuel pumps used in EFI systems are of the roller cell type, which is an electric pump design."
    },
    {
        question: "Where can the fuel pump be mounted in modern vehicles?",
        options: [
            "Only in the fuel line under the vehicle",
            "Only attached to the engine",
            "In the fuel line under the vehicle or submerged within the fuel tank itself",
            "In the air filter housing"
        ],
        correct: 2,
        explanation: "The fuel pump can be mounted in the fuel line under the vehicle, or submerged within the fuel tank itself. Many modern manufacturers choose to submerge it inside the tank."
    },
    {
        question: "Why do many manufacturers choose to submerge the fuel pump inside the fuel tank?",
        options: [
            "It's cheaper to install",
            "It assists with cooling and noise suppression",
            "It's easier to replace",
            "It increases fuel pressure"
        ],
        correct: 1,
        explanation: "Many modern vehicle manufacturers are choosing to submerge the fuel pump inside the tank, as this assists with cooling and noise suppression."
    },
    {
        question: "How does fuel flowing through the electric motor help the in-tank fuel pump?",
        options: [
            "It increases voltage to the motor",
            "It will flow through the middle of the electric motor, which will assist with cooling",
            "It improves fuel filtration",
            "It reduces electrical resistance"
        ],
        correct: 1,
        explanation: "Even if the fuel pump is mounted in line under the vehicle, fuel will flow through the middle of the electric motor, and this will assist with cooling."
    },
    {
        question: "Why is the risk of ignition very low in electric fuel pumps despite creating sparks?",
        options: [
            "The pumps are explosion-proof",
            "Fuel vapour is minimal and any liquid fuel passing through will quench sparks; also no air means no fumes can be produced",
            "The sparks are too weak to ignite fuel",
            "Special non-flammable fuel is used"
        ],
        correct: 1,
        explanation: "The risk of ignition is very low because fuel vapour (which burns) is minimal. Also, any liquid fuel passing through the pump will quench any sparks. Because of the lack of air, no fumes can be produced and therefore fuel should not ignite."
    },
    {
        question: "What is the typical fuel delivery capacity of a standard EFI fuel pump?",
        options: [
            "1 to 2 litres per minute at 4 bar",
            "4 to 5 litres per minute at approximately 8 bar (120psi)",
            "10 to 15 litres per minute at 2 bar",
            "0.5 litres per minute at 10 bar"
        ],
        correct: 1,
        explanation: "A standard electronic fuel injection fuel pump is capable of supplying 4 to 5 litres of fuel per minute at a pressure of approximately 8 bar (120psi)."
    },
    {
        question: "What is the function of the pressure relief valve inside the fuel pump?",
        options: [
            "To increase fuel flow",
            "To filter contaminants",
            "To lift off its seat if system pressure exceeds 8 bar in case of blockage",
            "To regulate engine temperature"
        ],
        correct: 2,
        explanation: "Inside the fuel pump, there is a pressure relief valve which is designed to lift off its seat if system pressure exceeds 8 bar. This is in case a blockage occurs (e.g., of the fuel filter)."
    },
    {
        question: "What does the non-return valve at the fuel pump outlet do?",
        options: [
            "Increases fuel pressure during operation",
            "Filters fuel before it enters the system",
            "Closes and maintains pressure within the system when the fuel pump is switched off",
            "Regulates fuel temperature"
        ],
        correct: 2,
        explanation: "On the outlet end of the fuel pump there is a non-return valve, so that when the fuel pump is switched off, it closes and maintains pressure within the system."
    },
    {
        question: "What are the vital factors to check regarding fuel system performance?",
        options: [
            "Only fuel tank capacity",
            "Fuel pressure and volume",
            "Only fuel color and smell",
            "Engine oil level"
        ],
        correct: 1,
        explanation: "Fuel pressure and volume are vital to vehicle performance and must be checked during testing."
    },
    {
        question: "Where should you check fuel pressure in the system?",
        options: [
            "At the fuel tank",
            "At the air filter",
            "Using a suitable pressure gauge, as close as possible to the fuel rail",
            "At the exhaust manifold"
        ],
        correct: 2,
        explanation: "You need to check fuel pressure using a suitable pressure gauge, as close as possible to the fuel rail."
    },
    {
        question: "What should you check after verifying fuel pressure with the engine running?",
        options: [
            "Oil pressure",
            "System holding pressure to diagnose leaking fuel injectors",
            "Battery voltage",
            "Tire pressure"
        ],
        correct: 1,
        explanation: "You should also check system holding pressure, as this will help diagnose leaking fuel injectors. After checking engine running pressure and switching off the vehicle, record the holding pressure for a certain time (normally about 10 minutes)."
    },
    {
        question: "What could cause pressure to fall during the holding pressure test?",
        options: [
            "Normal system operation",
            "A leaky injector, faulty fuel rail pressure regulator, or faulty fuel pump non-return valve",
            "Low battery voltage",
            "Dirty air filter"
        ],
        correct: 1,
        explanation: "If pressure falls during the holding time, something in the system is allowing pressure to leak away. This could be a leaky injector, a faulty fuel rail pressure regulator, or a faulty fuel pump non-return valve."
    },
    {
        question: "How can you calculate fuel delivery rate per minute?",
        options: [
            "Divide the 10-second measurement by ten",
            "Measure quantity delivered over 10 seconds and multiply by six",
            "Measure for one minute directly",
            "Use the fuel gauge reading"
        ],
        correct: 1,
        explanation: "You can calculate the fuel delivery rate per minute by measuring the quantity of fuel delivered over a 10-second period and multiplying this figure by six."
    },
    {
        question: "What safety precautions must be taken when testing fuel pressure and volume?",
        options: [
            "Wear sunglasses",
            "Always inform others, work in well-ventilated area, ensure engine is cold, remove ignition sources, have fire extinguisher handy, and clear spills immediately",
            "Only work outdoors",
            "Test with engine at full operating temperature"
        ],
        correct: 1,
        explanation: "Safety precautions include: always inform others of what you're doing, work in a well-ventilated area, make sure engine is cold, remove all sources of ignition, have a suitable fire extinguisher handy, and clear up any spills immediately."
    },
    {
        question: "How can you test a fuel pump in situ without removing it?",
        options: [
            "By visual inspection only",
            "By measuring amperage or current draw using an inductive amps clamp or connecting an ammeter in series on the fuel pump feed wire",
            "By checking fuel tank level",
            "By listening for pump noise only"
        ],
        correct: 1,
        explanation: "It is not always necessary to remove the fuel pump to test its operation. Amperage or current draw can give a good indication of fuel pump function and condition. By using an inductive amps clamp or connecting an ammeter in series on the fuel pump feed wire, you can record an amperage reading."
    },
    {
        question: "What is the normal operating current for a fuel pump under normal pressure?",
        options: [
            "1 to 2 amps",
            "Around 3 to 5 amps (around 2 bar/30psi), with Bosch KE-Jetronic systems around 8 amps",
            "10 to 15 amps",
            "Less than 1 amp"
        ],
        correct: 1,
        explanation: "Under a normal operating pressure of around 2 bar (30psi), current flow will be around 3 to 5 amps. Bosch KE-Jetronic systems may be around 8 amps."
    }
];
