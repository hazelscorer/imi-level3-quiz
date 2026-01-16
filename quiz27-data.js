const quizData = [
    {
        question: "What should you check if the fuel pump fails to operate?",
        options: [
            "Only the fuel tank level",
            "The fuel pump fuse, fuel pump relay, fuel pump feed connection, and fuel pump earth connection",
            "Only the battery voltage",
            "The air filter condition"
        ],
        correct: 1,
        explanation: "If the fuel pump fails to operate, you should check the system supply voltage at: the fuel pump fuse, the fuel pump relay, the fuel pump feed connection, and the fuel pump earth connection."
    },
    {
        question: "When testing the fuel pump electrical circuit, where should you start?",
        options: [
            "At the fuel pump itself",
            "At the battery terminals",
            "With the parts of the circuit that are easiest to access first",
            "At the ECU connections"
        ],
        correct: 2,
        explanation: "When testing, always start with the parts of the circuit that are easiest to access first. Voltage should be available all the way to the fuel pump feed connection but should not be seen on the earth connection."
    },
    {
        question: "Why should an inline fuel filter be fitted in an electronic fuel injection system?",
        options: [
            "To increase fuel pressure",
            "Because small amounts of dirt would easily block fuel injectors due to very small tolerances",
            "To cool the fuel",
            "To add additives to the fuel"
        ],
        correct: 1,
        explanation: "Because of the very small tolerances within an electronic fuel injection system, small amounts of dirt would easily block fuel injectors. As a result, an inline fuel filter should be fitted."
    },
    {
        question: "What happens if fuel filter services are missed?",
        options: [
            "Fuel economy improves",
            "Engine power increases",
            "Fuel filters may not be replaced for some considerable time and may become blocked, causing high current draw on the fuel pump",
            "Nothing significant occurs"
        ],
        correct: 2,
        explanation: "Fuel filters are service items but are often overlooked when diagnosing fuel starvation problems. If services are missed, these fuel filters may not be replaced for some considerable time and may become blocked. If current draw on the fuel pump is high, you should suspect the condition of the fuel filter."
    },
    {
        question: "In returnless fuel systems, where are fuel flow and pressure regulated?",
        options: [
            "At the fuel rail",
            "At the fuel pump",
            "In the tank",
            "At the throttle body"
        ],
        correct: 2,
        explanation: "Some fuel injection systems are returnless, which means fuel flow and pressure are regulated in the tank. If a vehicle uses a returnless system, you will not see a pressure regulator at the fuel rail."
    },
    {
        question: "What is the primary job of the fuel pressure regulator?",
        options: [
            "To filter fuel contaminants",
            "To maintain a known pressure in the fuel rail",
            "To increase fuel temperature",
            "To measure fuel consumption"
        ],
        correct: 1,
        explanation: "A known pressure in the fuel pressure rail is vital to the ECU's calculation of how much fuel is being delivered to the engine. Maintaining a known pressure in the fuel rail is the job of the fuel pressure regulator."
    },
    {
        question: "If a known pressure exists in the fuel rail, what does the ECU NOT need to measure?",
        options: [
            "Air temperature",
            "Engine speed",
            "The flow or quantity of petrol",
            "Throttle position"
        ],
        correct: 2,
        explanation: "If a known pressure of fuel exists in the rail, then the ECU does not have to measure the flow or quantity of petrol, but merely needs to know how long to hold the fuel injector open to calculate the amount of fuel being delivered."
    },
    {
        question: "Why do fuel pumps deliver fuel at a higher pressure than required?",
        options: [
            "To heat the fuel",
            "So that a surplus of fuel should always be available under all engine running conditions",
            "To clean the injectors",
            "To reduce pump wear"
        ],
        correct: 1,
        explanation: "Fuel pumps are designed to deliver high volumes of fuel, at a far higher pressure than required by the fuel injection system. In this way, a surplus of fuel should always be available under all engine running conditions."
    },
    {
        question: "In the pressure regulator operation, at what pressure does the spring-loaded valve lift off its seat?",
        options: [
            "1 bar",
            "Approximately 3 bar",
            "10 bar",
            "5 bar"
        ],
        correct: 1,
        explanation: "A spring-loaded valve is fitted inside the fuel pressure regulator that will lift off its seat when a predetermined pressure is reached (approximately 3 bar)."
    },
    {
        question: "If 10 bar of fuel pressure is delivered to the rail and the regulator maintains 3 bar, how much returns to the tank?",
        options: [
            "3 bar",
            "10 bar",
            "7 bar",
            "5 bar"
        ],
        correct: 2,
        explanation: "If, for example, 10 bar of fuel pressure was delivered to the rail, the regulator would maintain 3 bar in the rail and allow 7 bar to return to the tank."
    },
    {
        question: "Why is atmospheric pressure outside the fuel injection system not always the same as manifold pressure?",
        options: [
            "Due to temperature differences",
            "Because at low speeds with throttle butterfly restricting airflow, manifold pressure is usually negative, affecting fuel delivery",
            "Due to altitude changes only",
            "Because of fuel quality"
        ],
        correct: 1,
        explanation: "Atmospheric pressure outside the fuel injection system is not always the same as the pressure inside the intake manifold. For example, at low speeds with the throttle butterfly restricting the airflow, manifold pressure is usually negative. This will have an effect on the amount of fuel being delivered into the intake manifold."
    },
    {
        question: "What happens at low engine speeds regarding fuel delivery?",
        options: [
            "Less fuel is needed",
            "Large vacuums exist inside the manifold, effectively sucking extra fuel through the injector and delivering a rich mixture",
            "Fuel pressure increases automatically",
            "The fuel pump stops"
        ],
        correct: 1,
        explanation: "At low engine speeds, large vacuums exist inside the manifold, effectively sucking extra fuel through the injector and delivering a rich mixture."
    },
    {
        question: "What happens at high engine speeds regarding manifold pressure and fuel delivery?",
        options: [
            "Manifold vacuum increases",
            "Fuel delivery increases automatically",
            "Manifold pressure is almost atmospheric, so less fuel is being sucked from the nozzle and the system may deliver a weak mixture",
            "The regulator closes completely"
        ],
        correct: 2,
        explanation: "At high engine speeds, manifold pressure is almost atmospheric, so less fuel is being sucked from the nozzle of the injector and the system may deliver a weak mixture."
    },
    {
        question: "How do many fuel pressure regulators adapt to engine speed and load changes?",
        options: [
            "They use electronic sensors",
            "A spring-loaded valve inside the pressure regulator is connected to a diaphragm, with one side connected to the intake manifold via a vacuum pipe",
            "They monitor fuel temperature",
            "They adjust pump speed"
        ],
        correct: 1,
        explanation: "To overcome these problems, many fuel pressure regulators are adaptable to engine speed and load. A spring-loaded valve inside the pressure regulator is connected to a diaphragm. One side of the diaphragm is connected to the intake manifold via a vacuum pipe."
    },
    {
        question: "At low engine speed with large vacuum, what does the vacuum-operated regulator do?",
        options: [
            "Increases rail pressure",
            "Draws down on the spring-loaded valve, allowing it to lift off its seat earlier so pressure in the fuel rail is reduced",
            "Shuts off fuel flow",
            "Increases vacuum further"
        ],
        correct: 1,
        explanation: "At low engine speed, with a large vacuum in the manifold, this draws down on the spring-loaded valve, allowing it to lift off its seat earlier so pressure in the fuel rail is reduced. A low pressure in the fuel rail will help to cancel out the vacuum at the tip of the fuel injector and maintain the correct quantity of fuel delivered."
    },
    {
        question: "What type of fuel injector is commonly used in EFI systems?",
        options: [
            "Mechanical injector",
            "Solenoid type",
            "Gravity-fed injector",
            "Pressure-actuated injector"
        ],
        correct: 1,
        explanation: "Fuel injectors are of the solenoid type. A small coil of wire is wound around a movable armature."
    },
    {
        question: "How does a solenoid fuel injector operate?",
        options: [
            "By mechanical spring pressure only",
            "When current is applied to the coil, a magnetic field is created, drawing the armature through the middle of the winding",
            "By fuel pressure alone",
            "By vacuum operation"
        ],
        correct: 1,
        explanation: "When current is applied to the solenoid coil, a magnetic field is created, drawing the armature through the middle of the winding. When current is removed from the coil, the magnetic field collapses, and a return spring is used to move the armature back to its original position."
    },
    {
        question: "What does the armature of a fuel injector form?",
        options: [
            "A fuel filter",
            "A needle valve at one end",
            "A pressure sensor",
            "An electrical connector"
        ],
        correct: 1,
        explanation: "The armature forms a needle valve at one end and fuel pressure is supplied to the needle valve. When the winding of the solenoid is supplied with current and the needle of the armature lifts from its seat, fuel can be sprayed under high pressure into the intake manifold."
    },
    {
        question: "How are speed and load controlled in a petrol engine?",
        options: [
            "By fuel pressure alone",
            "By the position of the throttle butterfly",
            "By engine temperature",
            "By battery voltage"
        ],
        correct: 1,
        explanation: "In a petrol engine, speed and load are controlled by the position of the throttle butterfly. As the throttle butterfly is opened, more air is allowed into the engine, and so the engine speeds up."
    },
    {
        question: "How can the throttle butterfly be operated in modern vehicles?",
        options: [
            "Only mechanically by cable",
            "Only by hydraulic pressure",
            "Mechanically by accelerator cable or, more usually, electronically controlled",
            "Only by vacuum"
        ],
        correct: 2,
        explanation: "The throttle butterfly can be mechanically operated by an accelerator cable or, more usually on modern vehicles, it can be electronically controlled. A sensor picks up the position of the accelerator pedal, and motors drive the throttle butterfly into the correct position with no direct connection."
    },
    {
        question: "What type of sensor is used to measure throttle butterfly position?",
        options: [
            "Temperature sensor",
            "A potentiometer (variable resistor) mounted on the throttle body",
            "Pressure sensor",
            "Flow meter"
        ],
        correct: 1,
        explanation: "A potentiometer (variable resistor) can be mounted on the throttle body. The potentiometer is able to accurately measure the position of the throttle butterfly (how far the butterfly is open)."
    },
    {
        question: "What is the purpose of auxiliary air valves (idle air control - IAC)?",
        options: [
            "To increase maximum engine speed",
            "To allow small quantities of air to bypass the throttle butterfly so tickover speed can be increased when needed, controlling idle speed",
            "To filter intake air",
            "To cool the engine"
        ],
        correct: 1,
        explanation: "Engine demands can vary, even at a tickover. As electrical loads, power steering and air-conditioning are operated, idle speed can fall to a level where it can't be maintained and the engine will stall. If small quantities of air are allowed to bypass the throttle butterfly, tickover speed can be increased when needed. This air bypass is controlled by a small valve or solenoid actuated by the engine management ECU, controlling correct idle."
    },
    {
        question: "What is a plenum chamber in an intake system?",
        options: [
            "A fuel storage tank",
            "A chamber that can be used as a reservoir of air from which the cylinders can draw, so intake air does not have to travel the entire length of the intake tract",
            "An exhaust component",
            "A cooling chamber"
        ],
        correct: 1,
        explanation: "To help overcome pulsing induction issues, some manufacturers use a plenum chamber in the design of their intake manifold. This is a chamber that can be used as a reservoir of air from which the cylinders can draw. This means the intake air does not have to travel the entire length of the intake tract."
    },
    {
        question: "What did early electronic fuel injection systems use to measure air quantity?",
        options: [
            "Temperature sensors",
            "Airflow meters",
            "Pressure gauges only",
            "Oxygen sensors"
        ],
        correct: 1,
        explanation: "Early electronic fuel injection systems used airflow meters to measure the quantity of air entering the engine."
    },
    {
        question: "How does a flap-type airflow meter work?",
        options: [
            "It measures air temperature only",
            "It consists of a small spring-loaded flap pushed open by incoming air, with a potentiometer on top measuring position",
            "It uses electronic sensors only",
            "It measures fuel pressure"
        ],
        correct: 1,
        explanation: "An airflow meter consists of a small spring-loaded flap that is pushed open by the incoming air. On top of the spring-loaded flap is a potentiometer (variable resistor) that can accurately measure position, giving an indication of the amount of air entering. Another flap is attached at right angles to the first, and during operation it is moved within a damping chamber. Induction pulses act evenly on both flaps at the same time, reducing fluctuation and preventing incorrect signals being sent to the ECU."
    }
];
