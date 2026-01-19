const quizData = {
  quizNumber: 65,
  title: "Feedback Methods & Company Standards",
  pageNumbers: "324-328",
  questions: [
    {
      question: "What are some ways organisations can obtain customer feedback?",
      options: [
        "Only through complaints",
        "Questionnaires, direct mailings, telephone surveys, and comments/suggestion boxes",
        "Only face-to-face meetings",
        "Only online reviews"
      ],
      correctAnswer: 1,
      explanation: "The textbook lists several ways to obtain customer feedback including: questionnaires, direct mailings, telephone surveys, and comments/suggestion boxes."
    },
    {
      question: "What should the case study involving Mrs Kimble's windscreen wiper blade complaint demonstrate?",
      options: [
        "How to avoid customers",
        "Listening to the complaint, apologising, establishing facts, offering replacement, and following up",
        "How to refuse refunds",
        "How to blame suppliers"
      ],
      correctAnswer: 1,
      explanation: "The case study shows: Listen to customer's complaint and apologise, establish the facts, go with customer to check the component, decide that replacement is within your authority, offer to replace and make customer aware of full refund entitlement, replace and test, record details on complaint form, return faulty blade to supplier, and follow up with feedback."
    },
    {
      question: "What is a third party?",
      options: [
        "A customer",
        "Someone who is not one of the people directly involved in a transaction or agreement",
        "A supplier",
        "A manager"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines a third party as someone who is not one of the people directly involved in a transaction or agreement."
    },
    {
      question: "What are the three main categories of service standards?",
      options: [
        "Local, regional, and national",
        "National, Manufacturer, and Organisational",
        "Internal, external, and customer",
        "Basic, intermediate, and advanced"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.6, the three main categories of service standards are: National standards, Manufacturer standards, and Organisational standards."
    },
    {
      question: "What is the Kitemark for Garage Services scheme?",
      options: [
        "A manufacturer warranty program",
        "A voluntary third party scheme that ensures standards of PAS 80 are met and maintained, providing a quality framework for garages",
        "A government inspection program",
        "A pricing standard"
      ],
      correctAnswer: 1,
      explanation: "The Kitemark for Garage Services scheme is a voluntary third party scheme that ensures that the standards of PAS 80 are met and maintained. The PAS 80 specification has been developed by the British Standards Institution (BSI) in conjunction with respected members of the automotive industry."
    },
    {
      question: "What does PAS 80 cover according to the textbook?",
      options: [
        "Only pricing standards",
        "Customer service, customer satisfaction, customer facilities, staff competencies, and technical inspection",
        "Only technical specifications",
        "Only safety requirements"
      ],
      correctAnswer: 1,
      explanation: "The Kitemark for Garage Services scheme covers the critical elements in delivering a quality service, including: customer service, customer satisfaction, customer facilities, staff competencies, and technical inspection."
    },
    {
      question: "What do manufacturer standards ensure?",
      options: [
        "Only warranty compliance",
        "That work and products are of a quality expected by the original equipment manufacturer, and a certain level of service and corporate image is maintained",
        "Lowest possible prices",
        "Fastest possible service"
      ],
      correctAnswer: 1,
      explanation: "If you work for a dealership, many manufacturers place requirements and stipulations on the garage to ensure that a certain level of service and corporate image is maintained. For independent garages, manufacturers require approved repair principles and parts of the same quality as those of the OEM."
    },
    {
      question: "What might organisational standards include?",
      options: [
        "Only technical specifications",
        "A dress code and corporate image, customer care standards, and the level of training or qualification required to carry out certain repairs",
        "Only pricing policies",
        "Only opening hours"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.6, organisational standards are set by individual garages to show the level of service expected from their staff. They could include: a dress code and corporate image, customer care standards, and the level of training or qualification required to carry out certain repairs."
    },
    {
      question: "According to Table 6.7, what does 'Servicing' include?",
      options: [
        "Only oil changes",
        "Inspection and general maintenance designed to ensure a customer's car is kept operating within legal requirements and with optimum performance and reliability",
        "Only brake checks",
        "Only tyre rotation"
      ],
      correctAnswer: 1,
      explanation: "Table 6.7 defines servicing as: Servicing includes inspection and general maintenance designed to ensure that a customer's car is kept operating within legal requirements and with optimum performance and reliability."
    },
    {
      question: "What does 'Repair' work normally include?",
      options: [
        "Only preventive maintenance",
        "The rectification of mechanical faults, whether in the form of a breakdown or as a result of wear and tear",
        "Only warranty work",
        "Only cosmetic fixes"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.7, repair work normally includes the rectification of mechanical faults, whether in the form of a breakdown or as a result of wear and tear."
    },
    {
      question: "When is warranty work normally conducted?",
      options: [
        "At any time during vehicle ownership",
        "When a component has prematurely failed within a manufacturer's guarantee period",
        "Only during the first year",
        "Only for new vehicles"
      ],
      correctAnswer: 1,
      explanation: "Table 6.7 states that warranty work is normally conducted when a component has prematurely failed within a manufacturer's guarantee period. The cost of repair for both parts and labour is normally covered by the vehicle manufacturer, as long as the car has been maintained in accordance with the manufacturer's instructions."
    },
    {
      question: "What is MOT testing?",
      options: [
        "A comprehensive vehicle service",
        "An annual inspection of a vehicle to ensure that testable items meet a minimum required legal standard",
        "A manufacturer warranty check",
        "An optional safety check"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.7, MOT testing is an annual inspection of a vehicle to ensure that testable items meet a minimum required legal standard. These standards are developed and regulated by the Vehicle and Operator Services Agency (VOSA)."
    },
    {
      question: "Should the MOT test be considered a certificate of roadworthiness?",
      options: [
        "Yes, it guarantees the vehicle is roadworthy",
        "No, the MOT test is a visual inspection of safety critical items, and should not be considered a certificate of roadworthiness",
        "Only for vehicles under 3 years old",
        "Yes, for 12 months"
      ],
      correctAnswer: 1,
      explanation: "The textbook explicitly states: The MOT test is a visual inspection of safety critical items, and should not be considered a certificate of roadworthiness."
    },
    {
      question: "What might 'Fitment of accessories/enhancements' include?",
      options: [
        "Only manufacturer-approved parts",
        "In-car entertainment, body styling, telecommunication devices, and interior trim",
        "Only safety equipment",
        "Only performance upgrades"
      ],
      correctAnswer: 1,
      explanation: "Table 6.7 states that many garages will undertake the fitment of additional vehicle equipment and enhancements on behalf of a customer. Examples could include: in-car entertainment, body styling, telecommunication devices, and interior trim."
    },
    {
      question: "What is diagnostic service for advanced vehicle systems?",
      options: [
        "Basic visual inspection only",
        "A service that normally requires a large amount of investment on behalf of the garage in equipment and knowledge, becoming a necessity for many garages",
        "Only for electric vehicles",
        "A free service offered by all garages"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.7, many garages are now offering a diagnostic service for advanced vehicle systems. This normally requires a large amount of investment on behalf of the garage in the way of equipment and knowledge. This specialist area is becoming a necessity for many garages in order to conduct normal maintenance and repair."
    },
    {
      question: "What are the two main types of work that could be done when a customer books in their vehicle?",
      options: [
        "Cheap and expensive",
        "Proactive and Reactive",
        "Simple and complex",
        "Quick and slow"
      ],
      correctAnswer: 1,
      explanation: "The textbook identifies two main types of work: Proactive work (taking action before something has happened) and Reactive work (taking action as a result of a problem)."
    },
    {
      question: "What does proactive work generally involve?",
      options: [
        "Emergency repairs",
        "Scheduled maintenance, including servicing and annual MOT testing",
        "Breakdown repairs",
        "Accident repairs"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines proactive as 'taking action before something has happened,' and states that proactive work generally involves scheduled maintenance, including servicing and annual MOT testing."
    },
    {
      question: "What is reactive maintenance usually the result of?",
      options: [
        "Scheduled servicing",
        "A breakdown or mechanical failure",
        "Routine inspection",
        "Preventive maintenance"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines reactive as 'taking action as a result of a problem,' and states that reactive maintenance is usually the result of a breakdown or mechanical failure."
    },
    {
      question: "In the Skills for Work scenario about a failed MOT, what should you explain to the customer?",
      options: [
        "That they must buy a new car",
        "This situation - that as the car is not roadworthy, the vehicle cannot be driven legally on a public road",
        "That MOT failures are common and not serious",
        "That they should drive carefully home"
      ],
      correctAnswer: 1,
      explanation: "The textbook states you need to explain this situation to your customer - that as the car is not roadworthy, the vehicle cannot be driven legally on a public road."
    },
    {
      question: "What is important when agreeing work with a customer?",
      options: [
        "Getting the work done as fast as possible",
        "That the type and scope of work is agreed in advance, and the customer understands the costs involved",
        "Charging the highest possible price",
        "Starting work immediately"
      ],
      correctAnswer: 1,
      explanation: "The textbook emphasizes that it is very important that the type and scope of work to be conducted on the customer's car is agreed in advance, and that the customer understands the costs involved."
    },
    {
      question: "What must happen before any further action is taken after agreeing work?",
      options: [
        "Payment must be received",
        "Any changes to the work agreed must be authorised by the customer",
        "The work must be completed",
        "A warranty must be issued"
      ],
      correctAnswer: 1,
      explanation: "When entering into a service contract, any changes to the work agreed must be authorised by the customer before any further action is taken."
    },
    {
      question: "What are extra maintenance procedures that are normally charged as extra costs?",
      options: [
        "Labour charges",
        "Extra procedures such as timing belt replacement, brake fluid change, gearbox oil change, and airbag replacement",
        "Diagnostic fees",
        "MOT test fees"
      ],
      correctAnswer: 1,
      explanation: "The textbook states that extra maintenance procedures that occur within a particular service due to time and mileage, such as timing belt replacement, brake fluid change, gearbox oil change, airbag replacement, etc., are normally charged as extra costs."
    },
    {
      question: "Why can it be more difficult to predict costs and timescales for reactive maintenance?",
      options: [
        "Customers are less willing to pay",
        "Because of the nature of breakdowns and mechanical failures, many tasks will require some form of diagnosis before an estimate can be given",
        "Parts are more expensive",
        "Staff are less experienced"
      ],
      correctAnswer: 1,
      explanation: "It can be more difficult to predict costs and timescales for reactive maintenance and repairs. Because of the nature of breakdowns and mechanical failures, many tasks will require some form of diagnosis before an estimate can be given."
    },
    {
      question: "What do some garages operate regarding diagnostic work?",
      options: [
        "Free diagnostics for all customers",
        "A policy of conducting some investigation work for a set price so an estimate can be created",
        "No diagnostic services",
        "Diagnostics only for regular customers"
      ],
      correctAnswer: 1,
      explanation: "If diagnosis is involved, many garages operate a policy of conducting some investigation work for a set price so that an estimate can be created to give the customer an idea of the costs and time involved."
    },
    {
      question: "What is the difference between an estimate and a quote?",
      options: [
        "There is no difference",
        "A quotation is normally a fixed price (legally binding), while an estimate is normally an approximate price that may be subject to change",
        "An estimate is always higher",
        "A quote is just a rough guess"
      ],
      correctAnswer: 1,
      explanation: "When pricing a job for a customer, make sure you are clear whether you are giving the cost of repairs as a quotation or an estimate. A quotation is normally a fixed price, which can be legally binding. An estimate is normally an approximate price that may be subject to change if the situation develops further during the repair process."
    }
  ]
};
