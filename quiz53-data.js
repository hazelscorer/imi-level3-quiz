const quizData = {
  quizNumber: 53,
  title: "Manual Gearboxes: Construction, Gears & Ratios",
  pageNumbers: "265-269",
  questions: [
    {
      question: "According to Table 5.4, what is an advantage of torque converters?",
      options: [
        "They are very cheap to replace",
        "Multiplication of engine turning effort, which is not accomplished using other forms of clutch",
        "They never require maintenance",
        "They are very small and lightweight"
      ],
      correctAnswer: 1,
      explanation: "According to Table 5.4, an advantage of torque converters is multiplication of engine turning effort, which is not accomplished using other forms of clutch. This allows the engine to deliver more torque to the wheels during acceleration without increasing engine size."
    },
    {
      question: "What is another advantage of torque converters listed in Table 5.4?",
      options: [
        "They improve fuel economy",
        "Comfort and convenience, as no driver interaction is required to operate the smooth take-up of drive",
        "They are easier to repair",
        "They reduce vehicle weight"
      ],
      correctAnswer: 1,
      explanation: "Comfort and convenience, as no driver interaction is required to operate the smooth take-up of drive. This automatic operation makes driving easier, especially in stop-and-go traffic, without the need for manual clutch operation."
    },
    {
      question: "According to Table 5.4, what is a third advantage of torque converters?",
      options: [
        "They are maintenance-free",
        "Normally very long lasting as little wear takes place in the main torque converter components",
        "They are cheaper than manual clutches",
        "They improve acceleration"
      ],
      correctAnswer: 1,
      explanation: "Normally very long lasting as little wear takes place in the main torque converter components. Because the torque converter uses hydraulic fluid rather than friction surfaces, there is minimal physical wear compared to traditional clutch systems."
    },
    {
      question: "What is a disadvantage of torque converters according to Table 5.4?",
      options: [
        "They are too small",
        "Drag and slip created inside a torque converter reduce overall performance, making it inefficient",
        "They are too noisy",
        "They overheat easily"
      ],
      correctAnswer: 1,
      explanation: "Drag and slip created inside a torque converter reduce overall performance, making it inefficient. The fluid coupling inherently has some power loss due to slip between the impeller and turbine, which reduces fuel economy compared to a direct mechanical connection."
    },
    {
      question: "According to Table 5.4, what safety concern is associated with torque converters?",
      options: [
        "They can explode",
        "Creep created by the torque converter when the vehicle is placed in gear can allow the car to move unexpectedly and cause an accident",
        "They can leak toxic fluids",
        "They can overheat the engine"
      ],
      correctAnswer: 1,
      explanation: "Creep created by the torque converter when the vehicle is placed in gear can allow the car to move unexpectedly and cause an accident. This is why automatic vehicles must always be in Park or Neutral when stationary with the engine running, and why wheel chocks should be used during service."
    },
    {
      question: "What is the cost-related disadvantage of torque converters mentioned in Table 5.4?",
      options: [
        "They require frequent oil changes",
        "If the torque converter goes wrong, it can be a very expensive component to replace",
        "They use expensive fuel",
        "They require special tools"
      ],
      correctAnswer: 1,
      explanation: "If the torque converter goes wrong, it can be a very expensive component to replace. The torque converter is a complex, precision-engineered component, and failure often requires complete replacement rather than repair."
    },
    {
      question: "Why didn't early fluid flywheels contain a stator?",
      options: [
        "Stators hadn't been invented yet",
        "As a result, the drag created when pulling away made them very inefficient",
        "They were too expensive",
        "They were too heavy"
      ],
      correctAnswer: 1,
      explanation: "Early fluid flywheels did not contain a stator to help redirect fluid flow inside. As a result, the drag created when pulling away made them very inefficient. The addition of the stator in modern torque converters significantly improved efficiency by redirecting fluid flow."
    },
    {
      question: "What is momentum in the context of gearboxes?",
      options: [
        "The weight of the vehicle",
        "Movement created by the speed and weight of the vehicle",
        "The engine power output",
        "The gear ratio"
      ],
      correctAnswer: 1,
      explanation: "Momentum – movement created by the speed and weight of the vehicle. This momentum helps maintain the vehicle's motion, especially at higher speeds where less torque is needed to overcome resistance."
    },
    {
      question: "What is overdrive in a gearbox?",
      options: [
        "When the engine is running too fast",
        "When the output speed of a gearbox is higher than the input speed",
        "When the vehicle is accelerating rapidly",
        "When too much torque is applied"
      ],
      correctAnswer: 1,
      explanation: "Overdrive – when the output speed of a gearbox is higher than the input speed. This allows the engine to run at lower RPMs while maintaining vehicle speed, improving fuel economy and reducing engine wear."
    },
    {
      question: "How does a diesel engine produce torque compared to a petrol engine?",
      options: [
        "Diesel produces torque higher in its rev range",
        "Diesel produces torque low down in its rev range; the crankshaft is turning more slowly when the greatest amount of torque is created",
        "Both produce torque at the same point",
        "Diesel doesn't produce torque"
      ],
      correctAnswer: 1,
      explanation: "A diesel engine produces torque low down in its rev range. This means that the crankshaft is turning more slowly when the greatest amount of torque is created. As a result, the gearbox has to be designed so that this torque can be transmitted to the road with sufficient speed for general use."
    },
    {
      question: "How does a petrol engine produce torque compared to a diesel engine?",
      options: [
        "Petrol produces torque low down in its rev range",
        "A petrol engine produces torque higher in its rev range; the crankshaft is turning fast when the greatest amount of torque is created",
        "Petrol engines don't produce significant torque",
        "Both produce torque identically"
      ],
      correctAnswer: 1,
      explanation: "A petrol engine produces torque higher in its rev range. This means that the crankshaft is turning fast when the greatest amount of torque is created. As a result, so that it is suitable for general use, the gearbox has to be designed so that speed is reduced and torque is multiplied and transmitted to the road under different load conditions."
    },
    {
      question: "Why don't series hybrid cars need a gearbox?",
      options: [
        "They use belt drives",
        "The internal combustion engine acts as a generator to charge batteries, which operate the electric motors to drive the wheels; there is no direct connection between the engine and wheels",
        "They only use one gear",
        "They use chain drives"
      ],
      correctAnswer: 1,
      explanation: "A series hybrid car doesn't need a gearbox. The internal combustion engine acts as a generator to charge batteries, which operate the electric motors to drive the wheels. As there is no direct connection between the engine and wheels, the engine doesn't need to have the torque multiplied (as this is supplied directly by the electric drive motors)."
    },
    {
      question: "What does a transmission casing contain in a manual gearbox?",
      options: [
        "Only the clutch",
        "Gears of varying sizes mounted between the engine and final drive unit",
        "Only the differential",
        "Only the driveshafts"
      ],
      correctAnswer: 1,
      explanation: "A transmission casing mounted between the engine and final drive unit contains gears of varying sizes. When engaged with each other, these gears multiply torque through the principle of leverage."
    },
    {
      question: "What happens when a small drive gear is connected to a large driven gear?",
      options: [
        "Torque is reduced and speed is increased",
        "Torque is multiplied and speed is reduced",
        "Both torque and speed increase",
        "Both torque and speed decrease"
      ],
      correctAnswer: 1,
      explanation: "When a small drive gear is connected to a large driven gear, torque is multiplied and speed is reduced. This is the principle used in lower gears to provide more pulling power at lower speeds."
    },
    {
      question: "What happens when a large drive gear is connected to a small driven gear?",
      options: [
        "Torque is multiplied and speed is reduced",
        "Torque is reduced and speed is increased (overdrive)",
        "Both torque and speed increase",
        "Nothing changes"
      ],
      correctAnswer: 1,
      explanation: "When a large drive gear is connected to a small driven gear, torque is reduced and speed is increased (overdrive). This is used in higher gears to allow the vehicle to travel at higher speeds while the engine runs at lower RPMs."
    },
    {
      question: "What is the constant mesh principle in gearboxes?",
      options: [
        "Only one gear is always engaged",
        "All of the gear teeth of all of the gears are always in contact with each other, whether a gear ratio is selected or not",
        "Gears slide in and out of mesh",
        "Only two gears are ever in contact"
      ],
      correctAnswer: 1,
      explanation: "Most gearboxes operate on a principle known as constant mesh. This means that all of the gear teeth of all of the gears are always in contact with each other, whether a gear ratio is selected or not. This design reduces wear and allows for smoother gear changes."
    },
    {
      question: "What are the two main types of gears used in a standard manual transmission system?",
      options: [
        "Bevel gears and worm gears",
        "Spur gears and helical gears",
        "Planetary gears and ring gears",
        "Rack and pinion gears"
      ],
      correctAnswer: 1,
      explanation: "Two main types of gear are used in a standard manual transmission system: spur gears and helical gears. Each type has its own advantages and is used in different applications within the gearbox."
    },
    {
      question: "What is a characteristic of spur gears?",
      options: [
        "Teeth are cut on an angle",
        "A spur gear has straight-cut teeth; these are direct-acting and create low amounts of drag",
        "They are very quiet",
        "They have curved teeth"
      ],
      correctAnswer: 1,
      explanation: "A spur gear has straight-cut teeth, as shown in Figure 5.13. These are direct-acting and create low amounts of drag, which helps improve overall performance, but they can be noisy. A spur-cut gear can slide in and out of mesh with another spur-cut gear, making them ideal for use as a reverse gear idler."
    },
    {
      question: "What are helical gears and what is their main advantage?",
      options: [
        "Gears with straight teeth that are very loud",
        "A helical gear has teeth which are cut on an angle; they have a large surface area, making them strong, less prone to wear and quiet in operation",
        "Gears that only work in reverse",
        "Gears that are very inefficient"
      ],
      correctAnswer: 1,
      explanation: "A helical gear has teeth which are cut on an angle, as shown in Figure 5.14. The word 'helical' comes from the word 'helix', which is a form of spiral (think of the spiral of a coil spring). Helical-cut gear teeth have a large surface area, which makes them strong, less prone to wear and quiet in operation. Most light vehicle transmission systems use this design as the main type of gearing for transmission of drive."
    },
    {
      question: "Why must helical-cut gears be used in a constant mesh type gearbox?",
      options: [
        "They are cheaper",
        "Because of the design and shape of helical-cut gears, they cannot be slid in and out of mesh like spur gears",
        "They are lighter",
        "They are stronger"
      ],
      correctAnswer: 1,
      explanation: "Because of the design and shape of helical-cut gears, they cannot be slid in and out of mesh like spur gears. This means that they must be used in a constant mesh type gearbox, where the gears remain in contact at all times and selection is achieved through other mechanisms."
    },
    {
      question: "What is a gear ratio and what does it indicate?",
      options: [
        "The size of the gears",
        "An indication of how much torque is multiplied inside the gearbox; a comparison between the number of teeth on the driving gear and the number of teeth on the driven gear",
        "The speed of the vehicle",
        "The weight of the transmission"
      ],
      correctAnswer: 1,
      explanation: "Gear ratios give an indication of how much torque is multiplied inside the gearbox. The gear ratio is a comparison between the number of teeth on the driving gear and the number of teeth on the driven gear (input and output)."
    },
    {
      question: "What is the formula to calculate a gear ratio?",
      options: [
        "Ratio = Driver ÷ Driven",
        "Ratio = Driven ÷ Driver",
        "Ratio = Driver × Driven",
        "Ratio = Driver + Driven"
      ],
      correctAnswer: 1,
      explanation: "To calculate a gear ratio, use this equation: Ratio = Driven ÷ Driver. You need to divide the number of teeth on the output (driven) gear by the number of teeth on the input (driver) gear."
    },
    {
      question: "If the input gear has 16 teeth and the output gear has 32 teeth, what is the gear ratio?",
      options: [
        "1:1",
        "2:1",
        "1:2",
        "3:1"
      ],
      correctAnswer: 1,
      explanation: "If the input gear has 16 teeth and the output gear has 32 teeth, the input gear will need to turn two complete revolutions to make the output gear turn one complete revolution. This gives a gear ratio of 2:1. This 2:1 gear ratio means that speed is reduced by half. For example, an input turning at 200 rpm will give an output of 100 rpm."
    },
    {
      question: "What is a Newton metre?",
      options: [
        "A unit of speed",
        "The unit of measurement for torque (turning effort)",
        "A unit of distance",
        "A unit of weight"
      ],
      correctAnswer: 1,
      explanation: "Newton metre – the unit of measurement for torque (turning effort). A 2:1 gear ratio doubles the output torque. For example, an input torque of 200 Newton metres will give an output torque of 400 Newton metres."
    },
    {
      question: "How do you calculate the overall gear ratio of a compound gear set?",
      options: [
        "Add all the ratios together",
        "Calculate the ratio of each set of gears individually and then multiply them together to get the overall gear ratio",
        "Subtract the ratios from each other",
        "Divide all the ratios"
      ],
      correctAnswer: 1,
      explanation: "In practice, a gearbox uses a combination of gears to achieve torque multiplication. When drive is sent through a number of gears, this is known as a compound gear set. To calculate the overall gear ratio of a compound set, calculate the ratio of each set of gears individually and then multiply them together to get the overall gear ratio. The equation is: Ratio = (Driven ÷ Driver) × (Driven ÷ Driver)."
    }
  ]
};
