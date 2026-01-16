const quizData = [
    {
        question: "What is used to raise the pressure of refrigerant gas in an air-conditioning system?",
        options: [
            "An evaporator",
            "An engine-driven pump called a compressor",
            "A condenser",
            "A receiver dryer"
        ],
        correct: 1,
        explanation: "Air-conditioning uses an engine-driven pump called a compressor to raise the pressure of a refrigerant gas in a sealed system."
    },
    {
        question: "What is the most common refrigerant gas currently used in air-conditioning systems?",
        options: [
            "R12",
            "R744",
            "Tetrafluoroethane, known as R134a",
            "Carbon dioxide"
        ],
        correct: 2,
        explanation: "The most common gas currently used is Tetrafluoroethane, known as R134a. Other refrigerant gases include dichlorodifluoromethane (R12, now obsolete) and carbon dioxide (R744)."
    },
    {
        question: "What is the condenser in an air-conditioning system?",
        options: [
            "The evaporator inside the car",
            "A radiator normally mounted just in front of the cooling system radiator where high pressure gas is cooled and condensed into a liquid",
            "The compressor",
            "The expansion valve"
        ],
        correct: 1,
        explanation: "The gas passes through a radiator, called a condenser, which is normally mounted just in front of the cooling system radiator. The high pressure gas is then cooled and condensed into a liquid."
    },
    {
        question: "What happens when the refrigerant is released through a temperature-controlled expansion valve (TXV)?",
        options: [
            "It remains as a liquid",
            "As the pressure falls, the liquid refrigerant changes state in another small radiator inside the car called an evaporator",
            "It becomes a solid",
            "It heats up"
        ],
        correct: 1,
        explanation: "When the driver operates controls to lower the cabin temperature, the refrigerant is released through a temperature-controlled expansion valve (TXV). As the pressure falls, the liquid refrigerant changes state in another small radiator inside the car, called an evaporator."
    },
    {
        question: "What happens in the evaporator during the refrigeration cycle?",
        options: [
            "Heat is added to the air",
            "As the temperature in the evaporator falls, and as the cabin air is circulated through it, heat is removed, helping cool the air inside the car",
            "Moisture is added",
            "Pressure increases"
        ],
        correct: 1,
        explanation: "The temperature in the evaporator falls, and as the cabin air is circulated through it, heat is removed. This helps cool the air inside the car. The refrigerant is then returned to the compressor, where the whole process starts once again."
    },
    {
        question: "What is a fixed orifice tube in an air-conditioning system?",
        options: [
            "A type of compressor",
            "An alternative type of air-conditioning that uses a fixed orifice tube; as the orifice tube is of a fixed size, system pressure must be controlled according to evaporator temperature by 'cycling' the compressor clutch on and off",
            "A type of condenser",
            "A temperature sensor"
        ],
        correct: 1,
        explanation: "An alternative type of air-conditioning uses a system known as a fixed orifice tube. As the orifice tube is of a fixed size, system pressure must be controlled according to evaporator temperature. This is done by 'cycling' (turning) the compressor clutch on and off."
    },
    {
        question: "What is the function of a suction accumulator in a fixed orifice system?",
        options: [
            "To compress the refrigerant",
            "A storage area for refrigerant used in a fixed orifice tube type air-conditioning system; it is mounted after the evaporator and holds a quantity of refrigerant ready to be returned to the compressor for use",
            "To cool the refrigerant",
            "To expand the refrigerant"
        ],
        correct: 1,
        explanation: "A storage area for refrigerant used in a fixed orifice tube type air-conditioning system. It is mounted after the evaporator and holds a quantity of refrigerant ready to be returned to the compressor for use. It also contains a silicone desiccant, which is designed to remove any water moisture from the system."
    },
    {
        question: "What controls compressor pump operation in an air-conditioning system?",
        options: [
            "Manual switch only",
            "Pump operation is usually controlled by an electromagnetic clutch attached to the drive pulley of the compressor. This means that the system pressure can be controlled within limits by engaging and disengaging the compressor as required",
            "Hydraulic pressure",
            "Temperature only"
        ],
        correct: 1,
        explanation: "An engine-driven pump, used to raise the pressure of the refrigerant gas used in an air-conditioning system. Pump operation is usually controlled by an electromagnetic clutch attached to the drive pulley of the compressor. This means that the system pressure can be controlled within limits by engaging and disengaging the compressor as required."
    },
    {
        question: "What is a receiver dryer in an air-conditioning system?",
        options: [
            "A type of compressor",
            "A storage area for the high pressure liquid refrigerant in an expansion valve type air-conditioning system; it also contains a silicone desiccant to remove any water moisture from the system",
            "A cooling fan",
            "An expansion device"
        ],
        correct: 1,
        explanation: "A storage area for the high pressure liquid refrigerant in an expansion valve type air-conditioning system. It also contains a silicone desiccant, which is designed to remove any water moisture from the system."
    },
    {
        question: "What is the purpose of the high pressure switch in an air-conditioning system?",
        options: [
            "To increase refrigerant flow",
            "A pressure switch that acts in conjunction with the compressor clutch to turn off the pump if system pressures rise too high; it is sometimes able to operate the condenser fan as well because high pressures may be an indication that the system is running too hot",
            "To cool the evaporator",
            "To measure temperature"
        ],
        correct: 1,
        explanation: "A pressure switch that acts in conjunction with the compressor clutch to turn off the pump if system pressures rise too high. It is sometimes able to operate the condenser fan as well because high pressures may be an indication that the system is running too hot."
    },
    {
        question: "What does the low pressure switch prevent?",
        options: [
            "Excessive cooling",
            "It prevents the compressor being overworked if a leak occurs, reducing the amount of refrigerant in the air-conditioning system; it will also cut the compressor clutch out if a blockage appears in the system, leading to a vacuum on the low pressure side",
            "High temperatures",
            "Excessive fan speed"
        ],
        correct: 1,
        explanation: "A pressure switch that acts in conjunction with the compressor clutch to turn off the pump if system pressures fall too low. This prevents the compressor being overworked if a leak occurs, reducing the amount of refrigerant in the air-conditioning system. It will also cut the compressor clutch out if a blockage appears in the system, leading to a vacuum on the low pressure side of the air-conditioning circuit."
    },
    {
        question: "What does the thermal expansion valve (TXV) control?",
        options: [
            "Compressor speed",
            "A temperature-controlled spray nozzle, designed to release specific quantities of refrigerant into the evaporator; a thermocouple connected to the evaporator regulates the expansion valve, opening it wider when evaporator temperature rises, and closing it when evaporator temperature falls",
            "Fan speed",
            "Condenser pressure"
        ],
        correct: 1,
        explanation: "A temperature-controlled spray nozzle, designed to release specific quantities of refrigerant into the evaporator. A thermocouple connected to the evaporator regulates the expansion valve, opening it wider when evaporator temperature rises, and closing it when evaporator temperature falls."
    },
    {
        question: "What is a thermistor in an air-conditioning system?",
        options: [
            "A pressure sensor",
            "A temperature sensitive resistor (NTC or PTC) mounted on the evaporator; it can be connected to the compressor to engage and disengage the clutch when a certain temperature has been reached",
            "A flow meter",
            "A humidity sensor"
        ],
        correct: 1,
        explanation: "A temperature sensitive resistor (NTC or PTC) mounted on the evaporator. It can be connected to the compressor to engage and disengage the clutch when a certain temperature has been reached."
    },
    {
        question: "What is the function of flaps and servo motors in a climate control system?",
        options: [
            "To compress refrigerant",
            "Flaps that are used to direct the incoming air through the heater matrix or air-conditioning evaporator; they can also be used to direct air towards the windscreen, face or floor. If the system incorporates climate control, the operation of these flaps may be automatically controlled using small motors called servos",
            "To measure temperature",
            "To cool the condenser"
        ],
        correct: 1,
        explanation: "Flaps that are used to direct the incoming air through the heater matrix or air-conditioning evaporator. They can also be used to direct air towards the windscreen, face or floor. If the system incorporates climate control, the operation of these flaps may be automatically controlled using small motors called servos."
    },
    {
        question: "What is the main difference between air-conditioning and climate control?",
        options: [
            "The type of refrigerant used",
            "How they are controlled; with a standard air-conditioning system, the controls must be manually set by the driver. With a climate control system, the driver sets the required temperature and sometimes ventilation speed, and a series of sensors monitor the passenger compartment environment, with an ECU automatically making adjustments",
            "The compressor size",
            "The condenser location"
        ],
        correct: 1,
        explanation: "Air-conditioning and climate control use many of the same components and operate on the same refrigeration cycle. The main difference between the two systems is how they are controlled. With a standard air-conditioning system, the controls must be manually set by the driver to choose the amount of heating, cooling or ventilation. With a climate control system, the driver sets the required temperature and sometimes ventilation speed, and a series of sensors monitor the passenger compartment environment. As the car is driven along the road and conditions change, it is down to the driver to make adjustments to try to maintain a comfortable environment within the passenger compartment. With a climate control system, an ECU automatically makes adjustments to maintain a comfortable environment."
    },
    {
        question: "What sensors are used to monitor and adjust climate control?",
        options: [
            "Only temperature sensors",
            "Ambient air temperature sensors, passenger compartment temperature sensors, air quality sensors, solar radiation sensors, vehicle speed sensors, and condenser and evaporator temperature sensors",
            "Only pressure sensors",
            "Only humidity sensors"
        ],
        correct: 1,
        explanation: "Sensors used to monitor and adjust the climate control include: ambient air temperature sensors, passenger compartment temperature sensors, air quality sensors, solar radiation sensors, vehicle speed sensors, and condenser and evaporator temperature sensors."
    },
    {
        question: "What should you do if a fault occurs in an air-conditioning or climate control system?",
        options: [
            "Ignore it",
            "Connect a scan tool to the data link connector and check for diagnostic trouble codes because of the complexity of many modern air-conditioning or climate control systems, many manufacturers are including a self-diagnosis feature to assist with repairs",
            "Replace all components",
            "Turn off the system permanently"
        ],
        correct: 1,
        explanation: "Because of the complexity of many modern air-conditioning or climate control systems, many manufacturers are including a self-diagnosis feature to assist with repairs. If the fault occurs in an air-conditioning or climate control system, you should connect a scan tool to the data link connector and check for diagnostic trouble codes."
    },
    {
        question: "What are common faults associated with air-conditioning or climate control systems?",
        options: [
            "Only electrical faults",
            "Refrigerant quantity too low, refrigerant quantity too high, ventilation fan not working correctly, compressor clutch not actuating, water contamination of the refrigeration system (freezes during refrigeration cycle and blocks system), and climate control sensor failure",
            "Only mechanical faults",
            "Only refrigerant leaks"
        ],
        correct: 1,
        explanation: "Common faults associated with air-conditioning or climate control systems include: refrigerant quantity too low, refrigerant quantity too high, ventilation fan not working correctly, compressor clutch not actuating, water contamination of the refrigeration system (this will freeze during the refrigeration cycle and block the system), and climate control sensor failure."
    },
    {
        question: "What could cause leaks in an air-conditioning system?",
        options: [
            "High temperature only",
            "Damage to condenser radiator caused by front end collision",
            "Normal operation",
            "Clean refrigerant"
        ],
        correct: 1,
        explanation: "Leaks in an air-conditioning system can be caused by damage to condenser radiator caused by front end collision."
    },
    {
        question: "What could cause abnormal noise in an air-conditioning system?",
        options: [
            "Normal operation",
            "Compressor drive belt worn and slipping",
            "Clean refrigerant",
            "Low ambient temperature"
        ],
        correct: 1,
        explanation: "Abnormal noise in an air-conditioning system can be caused by compressor drive belt worn and slipping."
    },
    {
        question: "What could cause ineffective operation of an air-conditioning system?",
        options: [
            "Too much refrigerant",
            "Ventilation flaps not moving due to failed climate control servo motors",
            "Excessive cooling",
            "Too low pressure"
        ],
        correct: 1,
        explanation: "Ineffective operation can be caused by ventilation flaps not moving due to failed climate control servo motors."
    },
    {
        question: "What could cause failure to operate in an air-conditioning system?",
        options: [
            "High refrigerant quantity",
            "Compressor clutch not engaging due to low pressure/quantity of system refrigerant gas",
            "Working sensors",
            "Clean condenser"
        ],
        correct: 1,
        explanation: "Failure to operate can be caused by compressor clutch not engaging due to low pressure/quantity of system refrigerant gas."
    },
    {
        question: "What could cause inadequate operation of an air-conditioning system?",
        options: [
            "Clean evaporator",
            "Fan speed un-adjustable due to burnt-out rheostat controller, or evaporator core frozen due to faulty temperature thermistor measurement",
            "Working thermocouple",
            "Low pressure"
        ],
        correct: 1,
        explanation: "Inadequate operation can be caused by fan speed un-adjustable due to burnt-out rheostat controller, or evaporator core frozen due to faulty temperature thermistor measurement."
    },
    {
        question: "What should be recorded before you start diagnostic work?",
        options: [
            "Only the customer's name",
            "Customer/vehicle details on the job card, a note of the customer's repair request and any issues/symptoms, and any service or repair history",
            "Only the vehicle model",
            "Only the date"
        ],
        correct: 1,
        explanation: "Before you start, you should record customer/vehicle details on the job card, make a note of the customer's repair request and any issues/symptoms, and locate any service or repair history."
    },
    {
        question: "What should you do during diagnosis and repair work?",
        options: [
            "Only replace parts",
            "Carry out diagnosis checks and record the results on the job card or as a printout from specialist equipment, list the parts required to conduct a repair, note down any other non-critical faults found during your diagnosis, and inform your supervisor of the required repair procedures so that they can contact the customer and gain authorisation for the work to be conducted",
            "Only check one component",
            "Work without recording"
        ],
        correct: 1,
        explanation: "During diagnosis and repair, you should: carry out diagnosis checks and record the results on the job card or as a printout from specialist equipment, list the parts required to conduct a repair, note down any other non-critical faults found during your diagnosis, and inform your supervisor of the required repair procedures so that they can contact the customer and gain authorisation for the work to be conducted."
    }
];
