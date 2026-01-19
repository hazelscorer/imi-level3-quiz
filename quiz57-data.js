const quizData = {
  quizNumber: 57,
  title: "Final Drive, Differentials & CV Joints",
  pageNumbers: "285-289",
  questions: [
    {
      question: "What happens as a universal joint turns through an angle?",
      options: [
        "It maintains constant speed",
        "It speeds up and slows down",
        "It stops rotating",
        "It reverses direction"
      ],
      correctAnswer: 1,
      explanation: "As a universal joint turns through an angle, it speeds up and slows down. Universal joints need to be synchronised because they speed up and slow down as they travel through 90 degrees of revolution. The wave form shown in Figure 5.40 represents the speeding up and slowing down."
    },
    {
      question: "What is synthesis in the context of universal joints?",
      options: [
        "When one universal joint operates alone",
        "When the two universal joints work together like this it is known as synthesis",
        "When the universal joints are removed",
        "When the universal joints are replaced"
      ],
      correctAnswer: 1,
      explanation: "When the two universal joints work together like this, canceling each other out, it is known as synthesis. This synchronization is essential for smooth operation of the propeller shaft."
    },
    {
      question: "What is the purpose of a sliding joint in the propeller shaft?",
      options: [
        "To increase torque",
        "As the rear suspension moves up and down, this movement tries to stretch or compress the prop shaft; because of this, a sliding joint is included to allow the prop shaft to get longer and shorter",
        "To reduce noise",
        "To improve fuel economy"
      ],
      correctAnswer: 1,
      explanation: "As the rear suspension moves up and down, this movement tries to stretch or compress the prop shaft. Because of this, a sliding joint is included to allow the prop shaft to get longer and shorter. This allows for the distance variation caused by suspension movement."
    },
    {
      question: "Where can drive shafts be found on a vehicle?",
      options: [
        "Only on the front axle",
        "On both front and rear axles, depending on the drive layout type",
        "Only on the rear axle",
        "Only on four-wheel drive vehicles"
      ],
      correctAnswer: 1,
      explanation: "Drive shafts can be found on both front and rear axles, depending on the drive layout type. Two shafts are placed across the width of the car and connect to the hub of the driving wheels. As with a prop shaft, these shafts must be able to cope with suspension movement and, in the case of front-wheel drive, steering movement as well."
    },
    {
      question: "What is a hub in the context of drive shafts?",
      options: [
        "The center of the steering wheel",
        "An assembly at the outer end of the suspension that carries the wheel, tyre and brake components",
        "A type of gearbox",
        "A suspension spring"
      ],
      correctAnswer: 1,
      explanation: "Hub – an assembly at the outer end of the suspension that carries the wheel, tyre and brake components. Drive shafts connect to the hub of the driving wheels to transmit power."
    },
    {
      question: "Why would a universal joint be unsuitable for front-wheel drive shafts?",
      options: [
        "It's too expensive",
        "In a front-wheel drive layout, steering and suspension movement cause large angular movements; a universal joint would be unsuitable for use with front-wheel drive shafts, as the speeding up and slowing down of the UJ would cause transmission vibrations",
        "It's too heavy",
        "It's too small"
      ],
      correctAnswer: 1,
      explanation: "In a front-wheel drive layout, steering and suspension movement cause large angular movements. A universal joint would be unsuitable for use with front-wheel drive shafts, as the speeding up and slowing down of the UJ would cause transmission vibrations. Instead, a special type of coupling called a constant velocity (CV) joint is used."
    },
    {
      question: "What is a constant velocity (CV) joint?",
      options: [
        "A joint that changes speed constantly",
        "The joint at the end of the drive shaft on a front-wheel drive vehicle that is able to transmit drive with no variation in speed",
        "A type of universal joint",
        "A hydraulic coupling"
      ],
      correctAnswer: 1,
      explanation: "Constant velocity (CV) joint – the joint at the end of the drive shaft on a front-wheel drive vehicle that is able to transmit drive with no variation in speed. Different designs and styles of CV joint exist, but their job remains the same – to transmit drive at a constant speed regardless of steering or suspension movement and angle."
    },
    {
      question: "What is the most common type of CV joint and who designed it?",
      options: [
        "The Smith joint designed by John Smith",
        "The Birfield joint, which is based on a design patented in 1935 by the Ford engineer Alfred Hans Rzeppa",
        "The Thompson joint designed by William Thompson",
        "The Johnson joint designed by Robert Johnson"
      ],
      correctAnswer: 1,
      explanation: "The most common CV joint is the Birfield joint, which is based on a design patented in 1935 by the Ford engineer Alfred Hans Rzeppa. It transmits drive through a series of ball bearings housed in a cage. Because ball bearings are spheres, it doesn't matter at what angle or at which point the drive is transmitted through these balls – speed (velocity) is kept constant."
    },
    {
      question: "Why are CV joints prone to wear and what is needed to prevent this?",
      options: [
        "They are made of weak materials",
        "CV joints are prone to wear because of the forces they undergo; they must be kept well lubricated with greases; a rubber boot is used to keep the grease in and water and dirt out",
        "They rotate too fast",
        "They are too small"
      ],
      correctAnswer: 1,
      explanation: "CV joints are prone to wear because of the forces they undergo. They must be kept well lubricated with greases; a rubber boot is used to keep the grease in and water and dirt out. These rubber boots are often called 'drive shaft gaiters' or 'CV gaiters'."
    },
    {
      question: "How can you assess wear in CV joints?",
      options: [
        "By measuring the oil level",
        "You can often assess wear in CV joints by driving the car in a tight circle; if you can hear a clicking or knocking noise from the area of the CV joint, it may need to be replaced",
        "By checking the tire pressure",
        "By testing the battery voltage"
      ],
      correctAnswer: 1,
      explanation: "You can often assess wear in CV joints by driving the car in a tight circle. If you can hear a clicking or knocking noise from the area of the CV joint, it may need to be replaced. This test puts maximum stress on the CV joint and reveals wear."
    },
    {
      question: "What is the final drive unit?",
      options: [
        "The first stage in the transmission",
        "Having completed its journey through the gearbox, the torque is now transmitted to the final drive unit; this represents the last stage in the transmission of power from the engine to the road wheels",
        "The clutch assembly",
        "The steering system"
      ],
      correctAnswer: 1,
      explanation: "Having completed its journey through the gearbox, the torque is now transmitted to the final drive unit. This represents the last stage in the transmission of power from the engine to the road wheels."
    },
    {
      question: "What does a final drive unit usually consist of?",
      options: [
        "A single gear and a chain",
        "Two gears called the crown wheel and pinion; this provides a fixed final gear ratio to increase torque",
        "Three gears and a belt",
        "A clutch and flywheel"
      ],
      correctAnswer: 1,
      explanation: "A final drive unit usually consists of two gears called the crown wheel and pinion. This provides a fixed final gear ratio to increase torque. With a rear-wheel drive, it will also turn the rotation from the prop shaft through right angles to drive the wheels."
    },
    {
      question: "What is a transaxle?",
      options: [
        "A type of suspension",
        "If the final drive and gearbox are incorporated into a single unit, this is often called a transaxle",
        "A type of tire",
        "A steering component"
      ],
      correctAnswer: 1,
      explanation: "If the final drive and gearbox are incorporated into a single unit, this is often called a transaxle. This is common in front-wheel drive vehicles where the transmission and final drive are combined."
    },
    {
      question: "What does the differential unit do?",
      options: [
        "Increases engine power",
        "The final drive also includes a differential unit, which allows one wheel to travel faster than the other when turning a corner",
        "Reduces fuel consumption",
        "Controls the steering"
      ],
      correctAnswer: 1,
      explanation: "The final drive also includes a differential unit, which allows one wheel to travel faster than the other when turning a corner. This is essential for smooth cornering without tire scrubbing."
    },
    {
      question: "What is a typical figure for the final gear ratio?",
      options: [
        "1:1",
        "Approximately 4:1",
        "10:1",
        "20:1"
      ],
      correctAnswer: 1,
      explanation: "As with the gears in a gearbox, the final drive reduction depends on the number of teeth on the crown wheel and pinion. A typical figure for final gear ratio is approximately 4:1. It is calculated by using the formula: Ratio = Driven ÷ Driver."
    },
    {
      question: "How do you calculate the vehicle's true overall gear ratio?",
      options: [
        "Use only the gearbox ratio",
        "Once you have worked out the final gear ratio, you need to multiply this figure by the total gearbox ratio to represent the vehicle's true overall gear ratio",
        "Use only the final drive ratio",
        "Add the gearbox and final drive ratios together"
      ],
      correctAnswer: 1,
      explanation: "Once you have worked out the final gear ratio, you need to multiply this figure by the total gearbox ratio to represent the vehicle's true overall gear ratio. This gives the complete reduction from engine to wheels."
    },
    {
      question: "What type of gears are used if the crown wheel and pinion are on a front wheel drive?",
      options: [
        "Bevel gears",
        "Normally standard helical gears",
        "Spur gears",
        "Worm gears"
      ],
      correctAnswer: 1,
      explanation: "If the crown wheel and pinion are used on a front wheel drive, they are normally standard helical gears. However, rear-wheel drive uses a different configuration."
    },
    {
      question: "What is a bevel gear?",
      options: [
        "A straight-cut gear",
        "Gears that mesh at an angle",
        "A gear with no teeth",
        "A gear that only rotates in one direction"
      ],
      correctAnswer: 1,
      explanation: "Bevel – gears that mesh at an angle. If the crown wheel and pinion are used on a rear-wheel drive, a special type of gearing called a bevel gear is used. Most rear-wheel drive axles combine this bevel gear with a spiral hypoid design."
    },
    {
      question: "What is a hypoid gear design and what is its advantage?",
      options: [
        "A gear that is perfectly straight",
        "Describes the pinion mounted in an offset position against the crown wheel in a final drive unit (usually set below the centre line); the gear teeth are curved in such a way that the pinion can be positioned below the centre line of the crown wheel",
        "A gear that increases speed",
        "A gear that reduces torque"
      ],
      correctAnswer: 1,
      explanation: "Hypoid – describes the pinion mounted in an offset position against the crown wheel in a final drive unit (usually set below the centre line). In a hypoid design, the gear teeth are curved in such a way that the pinion can be positioned below the centre line of the crown wheel. This means that the prop shaft can be set lower down. Because of this, the transmission tunnel in the floor that houses the prop shaft can be made lower or may not be used at all. The resulting flatter floor area inside the car creates more space for passengers, lowers the centre of gravity of the vehicle and makes it more stable on the road."
    },
    {
      question: "When a car is travelling along a straight stretch of road, what happens to the driven wheels?",
      options: [
        "They rotate at different speeds",
        "Both of the driven wheels cover the same amount of ground at the same speed",
        "Only one wheel rotates",
        "The wheels stop rotating"
      ],
      correctAnswer: 1,
      explanation: "When a car is travelling along a straight stretch of road, both of the driven wheels cover the same amount of ground at the same speed. However, when the car takes a bend, the situation changes and a differential is needed."
    },
    {
      question: "What problem occurs when a car takes a bend if both wheels rotate at the same speed?",
      options: [
        "The engine stalls",
        "When the car takes a bend, the inner driven wheel doesn't have to travel as far as the outer one, so it needs to travel more slowly; if both wheels rotated at the same speed when trying to turn the corner, the inner wheel would be forced into a skid",
        "The steering locks up",
        "The brakes engage"
      ],
      correctAnswer: 1,
      explanation: "When the car takes a bend, the inner driven wheel doesn't have to travel as far as the outer one, so it needs to travel more slowly. If both wheels rotated at the same speed when trying to turn the corner, the inner wheel would be forced into a skid."
    },
    {
      question: "What does a differential unit allow?",
      options: [
        "Both wheels to lock together",
        "On a bend, drive must be transmitted at varying speeds, and this is done by using a differential unit housed inside the final drive casing",
        "The engine to produce more power",
        "The transmission to shift gears"
      ],
      correctAnswer: 1,
      explanation: "On a bend, drive must be transmitted at varying speeds, and this is done by using a differential unit housed inside the final drive casing. When needed, some of the driving force from the inner wheel is transferred to the outer wheel. This speeds up the outer wheel and slows down the inner wheel."
    },
    {
      question: "What components does a differential unit use according to the text?",
      options: [
        "Spur gears only",
        "A differential unit allows this because of its internal gearing system; turning effort taken from the crown wheel is transmitted to the differential casing, where a metal drive pin is fixed; as the differential casing turns, the drive pin moves end over end; on the drive pin are mounted two small gears, often called 'planet gears', which are in constant mesh with two side gears, often called 'sun gears'",
        "Chains and sprockets",
        "Belts and pulleys"
      ],
      correctAnswer: 1,
      explanation: "A differential unit allows this because of its internal gearing system. The turning effort taken from the crown wheel is transmitted to the differential casing, where a metal drive pin is fixed. As the differential casing turns, the drive pin moves end over end. On the drive pin are mounted two small gears, often called 'planet gears', which are in constant mesh with two side gears, often called 'sun gears' (see Figures 5.44 and 5.45)."
    },
    {
      question: "What happens when a car is travelling in a straight ahead direction with a differential?",
      options: [
        "The planet gears rotate freely",
        "When the car is travelling in a straight ahead direction, the drive pin turns end over end; this locks the planet gears directly to the side gears, driving them all at the same speed",
        "Only one wheel drives",
        "The differential locks solid"
      ],
      correctAnswer: 1,
      explanation: "When the car is travelling in a straight ahead direction, the drive pin turns end over end. This locks the planet gears directly to the side gears, driving them all at the same speed, as shown in Figure 5.46. This ensures both wheels rotate at the same speed when going straight."
    },
    {
      question: "What happens when turning a corner with a differential?",
      options: [
        "Both wheels maintain the same speed",
        "As the vehicle turns a corner, the extra load tries to slow down one wheel and reduces the speed at one sun gear; the drive pin still turns end over end, providing torque or turning effort to the sun gears, but the planet gears now rotate on the pin, allowing more drive to be transmitted to one wheel than the other",
        "The differential disengages",
        "The engine stops"
      ],
      correctAnswer: 1,
      explanation: "As the vehicle turns a corner, the extra load tries to slow down one wheel and reduces the speed at one sun gear. The drive pin still turns end over end, providing torque or turning effort to the sun gears, but the planet gears now rotate on the pin, allowing more drive to be transmitted to one wheel than the other. This allows one wheel to travel faster than the other while continuing to transmit drive with the same torque."
    }
  ]
};
