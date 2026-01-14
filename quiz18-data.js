const quiz18Data = {
  quizTitle: "Quiz 18: Variable Valve Control Systems & Forced Induction",
  quizSubtitle: "Pages 90-94: VVT-I, VANOS, VTEC, VVC, Valvetronic & Turbocharger Diagnosis",
  questions: [
    {
      question: "What is the most common cause of loss of boost in a turbocharged engine?",
      options: [
        "A restriction in the air intake system or a wastegate seized in the open position",
        "A faulty ECU sensor",
        "Low engine oil pressure",
        "Worn spark plugs"
      ],
      correct: 0,
      explanation: "Loss of boost may be caused by a restriction in the air intake system, leakage on the pressure side of the engine intake system, or a wastegate seized in the open position. If a loss of boost occurs on a vehicle, it is important to check these areas carefully before assuming there is a fault with the turbine or supercharger itself."
    },
    {
      question: "How can you confirm that overboost is caused by a seized wastegate?",
      options: [
        "By checking the turbocharger bearings",
        "By examining the wastegate and operating it with the aid of a pressure or vacuum pump to confirm correct operation",
        "By measuring exhaust gas temperature",
        "By testing the fuel pressure"
      ],
      correct: 1,
      explanation: "Overboost is normally created by a wastegate that is seized in the closed position. You should carefully examine the wastegate and operate it with the aid of a pressure or vacuum pump to confirm correct operation."
    },
    {
      question: "If the boost provided by a forced air induction system is lower than expected, what should be tested?",
      options: [
        "The cooling system thermostat",
        "The intake pressure using specialist gauges and connection pipes",
        "The battery voltage",
        "The transmission fluid level"
      ],
      correct: 1,
      explanation: "If the boost provided by a forced air induction system is lower than expected, the intake pressure will need to be tested. Specialist gauges and connection pipes are available, which when joined to the intake, are able to measure the amount of pressure provided by the turbo or supercharger and this can be compared to the manufacturer's specification."
    },
    {
      question: "When diagnosing low performance in a turbocharged engine, what should you check for in the air intake system?",
      options: [
        "Oil contamination",
        "Restriction in the air intake",
        "Excessive heat",
        "Water condensation"
      ],
      correct: 1,
      explanation: "If performance is low you should check for restriction in the air intake, if the turbo/supercharger rotates freely, that the wastegate or drive system is operating correctly, and that there are no induction air leaks."
    },
    {
      question: "What is the primary restriction that intake and exhaust valves cause in an internal combustion engine?",
      options: [
        "They increase fuel consumption",
        "They are one of the largest restrictions to the movement of air, fuel and exhaust gases inside an engine, leading to a reduction in performance",
        "They cause excessive engine noise",
        "They reduce oil pressure"
      ],
      correct: 1,
      explanation: "Intake and exhaust valves are one of the largest restrictions to the movement of air, fuel and exhaust gases inside an internal-combustion engine. This restriction leads to a reduction in performance."
    },
    {
      question: "What do multivalve arrangements improve in an engine?",
      options: [
        "Fuel pressure regulation",
        "The amount of air/fuel that can be drawn into the cylinder and the speed with which exhaust gas can be expelled",
        "Battery charging efficiency",
        "Transmission shifting",
      ],
      correct: 1,
      explanation: "Many manufacturers now use multiple valve and complex camshaft drive arrangements to help improve performance. Multivalve arrangements have two or more valves of each type (inlet and exhaust) included in the design to make best use of the space in the combustion chamber. This improves the amount of air/fuel that can be drawn into the cylinder and the speed with which exhaust gas can be expelled."
    },
    {
      question: "In camshaft phasing, what does it mean when the camshaft operation is 'advanced'?",
      options: [
        "The camshaft rotates faster",
        "The camshaft operation is ahead of time (early)",
        "The camshaft is electrically controlled",
        "The camshaft uses synthetic oil"
      ],
      correct: 1,
      explanation: "According to the key terms, 'Advanced' means ahead of time (early), while 'Retarded' means lagging behind (late)."
    },
    {
      question: "What is variable valve lift used for in engine operation?",
      options: [
        "To increase engine displacement",
        "To change the amount that the valve is opened during different engine running conditions, achieving smooth running and enhanced performance",
        "To reduce engine weight",
        "To improve oil circulation"
      ],
      correct: 1,
      explanation: "Variable valve lift: The amount that the valve is opened is changed during different engine running conditions. If valves are only opened a small amount during slow speed operation, this achieves smooth running, fuel economy and low emissions. If the valves are opened a large amount during high speed operation, this achieves enhanced performance."
    },
    {
      question: "What does valve operation speed control achieve at low engine speeds?",
      options: [
        "Increased fuel consumption",
        "Smooth running, fuel economy and lower emissions by keeping the valve open for a short period",
        "Higher oil pressure",
        "Improved cooling system efficiency"
      ],
      correct: 1,
      explanation: "Valve operation speed: The speed of the camshaft is varied during different engine running conditions. If the camshaft is sped up during engine slow speed operation, the valve is only open for a short period of time, which gives smooth running, fuel economy and lower emissions."
    },
    {
      question: "What component in the VVT-I system allows rotational movement between the camshaft and timing chain?",
      options: [
        "A hydraulic pump",
        "A controller mechanism mounted on one end of the camshaft that connects to the timing chain",
        "An electronic solenoid",
        "A belt tensioner"
      ],
      correct: 1,
      explanation: "The VVT-I system is a method used to control the phasing of the inlet camshaft(s). A controller mechanism is mounted on one end of the camshaft. The controller connects the camshaft to the timing chain. The VVT-I controller allows a small amount of rotational movement between the camshaft and the timing chain, which means that the timing and operation of the valves can be varied according to engine speed and load."
    },
    {
      question: "In the VVT-I system, what happens when oil pressure is lost or when the engine is first started?",
      options: [
        "The engine shuts down automatically",
        "The spring-loaded mechanism inside the VVT-I unit returns the camshaft to a standard timing position",
        "The valves remain fully open",
        "The fuel injection stops"
      ],
      correct: 1,
      explanation: "The VVT-I mechanism is held in a standard timing position by spring pressure. Engine oil is then directed to chambers inside the VVT-I unit. This provides a hydraulic pressure, which rotates the camshaft slightly in relation to the timing chain. Depending on which pressure chamber engine oil is directed to, camshaft timing can be advanced or retarded. If oil pressure is lost, or when the engine is first started, the spring-loaded mechanism inside the VVT-I unit returns the camshaft to a standard timing position."
    },
    {
      question: "What component does the VANOS controller use to join the camshaft with the timing chain drive mechanism?",
      options: [
        "A rubber belt",
        "A small intermediate gear with a spiral helix cut into one surface and splines cut into the other",
        "A chain tensioner",
        "A flywheel"
      ],
      correct: 1,
      explanation: "The VANOS controller uses a small intermediate gear with a spiral helix cut into one surface and splines cut into the other, to join the camshaft with the timing chain drive mechanism. The intermediate gear is able to slide along the camshaft on the splines. As it does this, the spiral helix acts against the timing chain drive mechanism, causing the camshaft to rotate slightly."
    },
    {
      question: "In the VANOS system, what moves the intermediate gear to alter valve timing?",
      options: [
        "Electric motor drive",
        "Hydraulic oil pressure from the engine directed to one side or the other of the VANOS controller unit",
        "Belt tension",
        "Centrifugal force"
      ],
      correct: 1,
      explanation: "Hydraulic oil pressure from the engine is directed to one side or the other of the VANOS controller unit, which moves the intermediate gear backwards or forwards along the camshaft to alter the valve timing when required."
    },
    {
      question: "What does the VTEC system use to control how far the inlet valve opens?",
      options: [
        "Electronic solenoids",
        "Different cam profiles machined on the same camshaft, and rocker arms to transfer the movement from the different cam profiles to the inlet valves",
        "Hydraulic pistons",
        "Vacuum pumps"
      ],
      correct: 1,
      explanation: "The VTEC system is a method used to control how far the inlet valve opens. Different cam profiles are machined on the same camshaft, and rocker arms are used to transfer the movement from the different cam profiles to the inlet valves when required."
    },
    {
      question: "In the VTEC system, what does a shallow cam profile achieve at low engine speeds?",
      options: [
        "Maximum power output",
        "Smooth running, fuel economy and lower emissions by only opening the valve a short distance",
        "Increased exhaust flow",
        "Higher oil temperature"
      ],
      correct: 1,
      explanation: "A shallow cam profile will only open the inlet valve a short distance, whereas an aggressive cam profile will open the valve fully. At low engine speed and load, a shallow cam profile is used to provide smooth running, fuel economy and lower emissions. At high engine speed and load, an aggressive cam profile can be used to provide performance."
    },
    {
      question: "How does the VTEC system switch between different cam profiles?",
      options: [
        "Using electronic actuators",
        "Using hydraulic oil pressure to move a locking pin between two rocker arms",
        "Using compressed air",
        "Using manual adjustment"
      ],
      correct: 1,
      explanation: "To switch between the different cam profiles, hydraulic oil pressure is used to move a locking pin between two rocker arms. At slow engine speed, the shallow cam profile operates the low lift rocker arm to open the valve; the high lift rocker arm moves freely against a return spring (idle) with no effect on engine operation."
    },
    {
      question: "In the VTEC system, what is described as happening to engine performance that 'can often be felt by the driver as they accelerate'?",
      options: [
        "Transmission shift points",
        "The change in performance due to the nature and operation of the VTEC system",
        "Fuel pump activation",
        "Cooling fan engagement"
      ],
      correct: 1,
      explanation: "Due to the nature and operation of the VTEC system, the change in performance can often be felt by the driver as they accelerate."
    },
    {
      question: "What does the VVC system control in engine operation?",
      options: [
        "Exhaust gas recirculation",
        "The speed of operation of the inlet camshaft to control how long the inlet valve can be held open",
        "Fuel injection timing",
        "Ignition advance"
      ],
      correct: 1,
      explanation: "The VVC system is a method used to control the speed of operation of the inlet camshaft. If the speed of the camshaft can be varied according to engine performance requirements, the inlet valve can be held open for longer or shorter periods."
    },
    {
      question: "To maintain correct valve timing in the VVC system, what must the inlet camshaft do?",
      options: [
        "Rotate at double speed",
        "Still rotate at half crankshaft speed, meaning the speeding up and slowing down of the inlet camshaft must be completed in the same time that it would normally take to make one rotation",
        "Remain stationary",
        "Rotate in reverse"
      ],
      correct: 1,
      explanation: "In order to keep the valve timing correct, the camshaft must still rotate at half crankshaft speed. This means the speeding up and slowing down of the inlet camshaft must be completed in the same time that it would normally take to make one rotation. Because of this, the variation of speed is controlled so that during half a rotation of the camshaft it is moving fast, and during the other half rotation of the camshaft it is moving slowly."
    },
    {
      question: "How many separate inlet camshafts are used in a four-cylinder VVC engine?",
      options: [
        "One camshaft",
        "Four separate inlet camshafts driven by two timing belts",
        "Two camshafts",
        "Eight camshafts"
      ],
      correct: 1,
      explanation: "Because the operation of the eccentric drive would affect all cylinders at the same time, a method is needed of controlling each set of inlet valves separately. In a four-cylinder engine, four separate inlet camshafts are used. Two timing belts (one at the front of the engine and one at the back of the engine) each drive a pair of separate camshafts."
    },
    {
      question: "In the VVC system, how is the eccentricity between the timing belt and camshaft controlled?",
      options: [
        "By a mechanical linkage",
        "By an eccentric drive pin that can move in a slot to vary the amount of eccentricity, with hydraulic oil pressure directed to the mechanism by an ECU",
        "By changing belt tension",
        "By adjusting valve clearances"
      ],
      correct: 1,
      explanation: "The drive from the timing belt to the camshaft is controlled by an eccentric drive pin. The drive pin is able to move in a slot to vary the amount of eccentricity created between the timing belt and the camshaft. This variation of eccentric movement is able to speed up and slow down the operation of the inlet camshaft depending on engine performance requirements. Each pair of camshafts has one solid camshaft and one hollow camshaft, with the solid camshaft being driven through the middle of the hollow one. An ECU determines engine speed and load and directs hydraulic oil pressure to the eccentric drive pin mechanism."
    },
    {
      question: "What system has removed the need for a throttle butterfly valve to control air entering the engine?",
      options: [
        "VVT-I",
        "Valvetronic",
        "VTEC",
        "VANOS"
      ],
      correct: 1,
      explanation: "An advancement in the use of variable valve control is valvetronic. In this system, the vehicle manufacturer has removed the need for a throttle butterfly valve used to control the amount of air entering the engine. Instead, an electronic system which controls the amount that the inlet valves open is used to regulate the amount of air entering the engine."
    },
    {
      question: "In a Valvetronic system, what drives the eccentric gear mechanism?",
      options: [
        "The crankshaft directly",
        "An electric motor mounted near the inlet camshaft",
        "A vacuum pump",
        "The alternator"
      ],
      correct: 1,
      explanation: "An electric motor mounted near the inlet camshaft drives an eccentric gear mechanism. The eccentric gear mechanism is connected to an intermediate shaft that can be moved towards or away from the inlet camshaft. The intermediate shaft is fitted with a roller which follows the opening face of the camshaft profile. The lower edge of the intermediate shaft operates the rocker mechanism connected to the inlet valves."
    },
    {
      question: "In the Valvetronic system, what determines the valve opening amount at slow engine speeds?",
      options: [
        "The crankshaft position sensor",
        "The motor and eccentric gear move the intermediate shaft away from the camshaft so that only a small amount of movement is transferred to the valve mechanism",
        "The oxygen sensor",
        "The mass airflow sensor"
      ],
      correct: 1,
      explanation: "When the engine is running at slow speeds, the motor and eccentric gear move the intermediate shaft away from the camshaft so that only a small amount of movement is transferred to the rocker and inlet valve mechanism. To increase the engine speed, the driver presses the accelerator pedal and a voltage from the throttle position sensor sends a signal to the ECU, which controls the electric motor."
    },
    {
      question: "What is the main advantage of solenoid-operated valves over traditional camshaft-driven valves?",
      options: [
        "They are less expensive to manufacture",
        "They give engine designers complete control over both timing and lift for any engine operating condition, with no camshaft or valve train to drive, reducing loads on the engine",
        "They require no electrical power",
        "They are easier to service"
      ],
      correct: 1,
      explanation: "Solenoid operated valves: Electronically controlled solenoid motors are used to open the inlet and exhaust valves instead of a camshaft. Using solenoid motors gives engine designers complete control over both timing and lift for any engine operating condition - adaptations can be made to compensate for most driving situations. As this system has no camshaft or valve train to drive, loads placed on the engine are reduced, which leads to improved performance, greater fuel economy and lower emissions."
    }
  ]
};
