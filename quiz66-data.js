const quizData = {
  quizNumber: 66,
  title: "Service Agreements & Repair Information",
  pageNumbers: "329-333",
  questions: [
    {
      question: "What is a customer service agreement?",
      options: [
        "A warranty document",
        "A contract between the organisation and the customer that agrees the level of service to be provided and what work will be undertaken",
        "A price list",
        "An insurance policy"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines a customer service agreement as a contract between the organisation and the customer that agrees the level of service to be provided and what work will be undertaken."
    },
    {
      question: "Is a customer service agreement always formal?",
      options: [
        "Yes, it must always be written",
        "No, it is often known as the customer service agreement and, no matter whether it is formal or informal, it will usually be legally binding",
        "Only for large repairs",
        "Only if requested by the customer"
      ],
      correctAnswer: 1,
      explanation: "This is often known as the customer service agreement and, no matter whether it is formal or informal, it will usually be legally binding."
    },
    {
      question: "What affects the timescales and costs involved in repair work?",
      options: [
        "Only the technician's experience",
        "Availability of equipment, availability of technicians, and workshop loading systems",
        "Only the customer's budget",
        "Only the type of vehicle"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.8, factors affecting timescales and costs include: Availability of equipment (specialist equipment may need to be borrowed or hired), Availability of technicians (staffing levels and specialist skills affect repair timing), and Workshop loading systems (booking systems to manage technician, equipment, and space utilization)."
    },
    {
      question: "What should you do no matter what job the customer books their car into your garage for?",
      options: [
        "Start work immediately",
        "They will want to know roughly how much it will cost to repair",
        "Charge them a diagnostic fee",
        "Refer them to a manager"
      ],
      correctAnswer: 1,
      explanation: "The textbook states: No matter what job the customer books their car into your garage for, they will want to know roughly how much it will cost to repair."
    },
    {
      question: "Where can set repair times and costs be accessed for scheduled maintenance?",
      options: [
        "Only from experience",
        "There are often set repair times and costs for scheduled maintenance, but other types of maintenance and repair will need to be estimated using manuals or computer-based equipment",
        "Only from manufacturers",
        "They must be calculated each time"
      ],
      correctAnswer: 1,
      explanation: "There are often set repair times and costs for scheduled maintenance, but other types of maintenance and repair will need to be estimated. Manufacturers supply given times for the inspection, replacement and repair of most vehicle components, which you can access using manuals or computer-based equipment."
    },
    {
      question: "What is shown to in Figure 6.14 in the textbook?",
      options: [
        "A price list",
        "Vehicle repair times accessed through a computer-based system",
        "A service schedule",
        "A parts catalogue"
      ],
      correctAnswer: 1,
      explanation: "Figure 6.14 shows Vehicle repair times accessed through a computer-based system, displaying repair times in decimal format (e.g., 0.1 of an hour equalling six minutes)."
    },
    {
      question: "According to Table 6.9, what information sources are needed for technical data and diagnostics?",
      options: [
        "Only manufacturer manuals",
        "Vehicle identification numbers (VIN), technical data manuals, workshop manuals, wiring diagrams, safety recall sheets, technical help lines, advice from master technicians/colleagues, parts suppliers/catalogues, diagnostic trouble codes, and oscilloscope wave forms",
        "Only online resources",
        "Only experience"
      ],
      correctAnswer: 1,
      explanation: "Table 6.9 lists comprehensive information sources including: VIN, technical data manuals, workshop manuals, wiring diagrams, safety recall sheets, technical help lines, advice from colleagues, parts suppliers/catalogues, diagnostic trouble codes, and oscilloscope wave forms."
    },
    {
      question: "Where can servicing to manufacturer requirements/standards information be found?",
      options: [
        "Only in workshop manuals",
        "Manufacturer's literature and manufacturer's technical help line",
        "Only online",
        "Only from dealerships"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.9, servicing to manufacturer requirements/standards information can be found in: Manufacturer's literature and Manufacturer's technical help line."
    },
    {
      question: "Where can repair/operating procedures information be accessed?",
      options: [
        "Only from experienced technicians",
        "Vehicle handbook, workshop manuals, and manufacturer's technical help line",
        "Only manufacturer websites",
        "Only through training courses"
      ],
      correctAnswer: 1,
      explanation: "Table 6.9 indicates that repair/operating procedures can be found in: Vehicle handbook, Workshop manuals, and Manufacturer's technical help line."
    },
    {
      question: "What does VOSA stand for and what does it oversee?",
      options: [
        "Vehicle Operations and Standards Agency - oversees vehicle sales",
        "The Vehicle and Operator Services Agency - oversees the MOT scheme for quality and standards",
        "Vehicle Owners Service Association - oversees warranties",
        "Vehicle and Operations Safety Agency - oversees recalls"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.9, VOSA stands for the Vehicle and Operator Services Agency, which provides a range of licensing, testing and enforcement services with the aim of improving the roadworthiness standards of vehicles. VOSA oversees the MOT scheme for quality and standards."
    },
    {
      question: "Where can quality controls (interim and final) information be found?",
      options: [
        "Only in company handbooks",
        "Company policy and standards, service or maintenance schedules, compliance with BSI Kitemark standards, and involvement with Automotive Technician Accreditation (ATA)",
        "Only from management",
        "Only through external audits"
      ],
      correctAnswer: 1,
      explanation: "Table 6.9 lists quality control information sources as: Company policy and standards, Service or maintenance schedules, Compliance with BSI Kitemark standards, and Involvement with Automotive Technician Accreditation (ATA)."
    },
    {
      question: "Where can requirements for cleanliness of vehicle on return to customer be found?",
      options: [
        "There are no specific requirements",
        "Company policy and standards, and post-work inspection sheets",
        "Only in service agreements",
        "Only from customer requests"
      ],
      correctAnswer: 1,
      explanation: "According to Table 6.9, requirements for cleanliness of vehicle on return to customer can be found in: Company policy and standards, and Post-work inspection sheets."
    },
    {
      question: "Where can handover procedures information be accessed?",
      options: [
        "Only through training",
        "Company policy and standards, and service history and handbook",
        "Only from management instructions",
        "Only through experience"
      ],
      correctAnswer: 1,
      explanation: "Table 6.9 indicates handover procedures can be found in: Company policy and standards, and Service history and handbook."
    },
    {
      question: "What is good practice before carrying out any service?",
      options: [
        "Start work immediately",
        "To perform pre-checks before you carry out any service, usually including a visual inspection of the vehicle's exterior and interior for any damage or cosmetic faults",
        "Only check the engine",
        "Skip the inspection if the customer is waiting"
      ],
      correctAnswer: 1,
      explanation: "It is good practice to perform pre-checks before you carry out any service. These checks usually include a visual inspection of the vehicle's exterior and interior for any damage or cosmetic faults."
    },
    {
      question: "Why do many garages use pre-check sheets?",
      options: [
        "For legal compliance only",
        "To identify and record any damage, so you can get the customer to sign the check sheet and confirm the condition of the vehicle prior to the repair",
        "To calculate repair costs",
        "To schedule appointments"
      ],
      correctAnswer: 1,
      explanation: "Many garages use pre-check sheets to identify and record any damage. By completing this inspection before you begin work, you can get the customer to sign the check sheet and confirm the condition of the vehicle prior to the repair."
    },
    {
      question: "What does completing a pre-check sheet help avoid?",
      options: [
        "Extra work",
        "Any potential conflict after the repair if the customer claims they didn't know about any existing damage",
        "Customer complaints about pricing",
        "Scheduling conflicts"
      ],
      correctAnswer: 1,
      explanation: "This will help to avoid any potential conflict after the repair if the customer claims they didn't know about any existing damage. Ideally, the customer should be present while the check is completed, so that any queries can be cleared up immediately."
    },
    {
      question: "According to Figure 6.15, what should you do after collecting keys from service reception?",
      options: [
        "Start the repair work",
        "Determine if you are inside the vehicle or not - different checks apply",
        "Fill out the invoice",
        "Contact the customer"
      ],
      correctAnswer: 1,
      explanation: "Figure 6.15 shows that after collecting keys from service reception, you should determine 'Are you inside the vehicle?' - if yes, check seats, trim and dashboard; if no, check security and condition of bumpers, light lenses, door mirrors, body panels, and alloy wheels/wheel trims."
    },
    {
      question: "What should you do to meet customer expectations according to the textbook?",
      options: [
        "Only complete the minimum required work",
        "Carry out all service and repairs to a high standard, and return the vehicle in a clean and acceptable condition following any work done",
        "Focus only on speed of service",
        "Charge the lowest possible price"
      ],
      correctAnswer: 1,
      explanation: "To meet the customer's expectations, you should carry out all service and repairs so that they conform to a high standard. You also need to return the vehicle in a clean and acceptable condition following any work done."
    },
    {
      question: "What should you complete by referring to the original pre-work check sheet?",
      options: [
        "The invoice",
        "A post-work check sheet",
        "The warranty paperwork",
        "The service schedule"
      ],
      correctAnswer: 1,
      explanation: "You will need to complete a post-work check sheet by referring to the original pre-work check sheet and the road test checklist. This will make sure that you haven't missed anything and that you send the vehicle back to the customer in a roadworthy condition."
    },
    {
      question: "What legislation states that traders must not falsely describe something that is on sale?",
      options: [
        "Consumer Protection Act 1987",
        "Trade Descriptions Act 1968",
        "Sale of Goods Act 1979",
        "Data Protection Act 1998"
      ],
      correctAnswer: 1,
      explanation: "The Trade Descriptions Act 1968 states that traders must not falsely describe something that is on sale (it is a criminal offence to do so) and must not make false claims about services or facilities."
    },
    {
      question: "What does the Trade Descriptions Act apply to?",
      options: [
        "Only written advertisements",
        "Any description a garage might make, such as an advertisement in the service reception or a verbal description given by a member of staff",
        "Only verbal descriptions",
        "Only manufacturer descriptions"
      ],
      correctAnswer: 1,
      explanation: "This law applies to any description a garage might make, such as an advertisement in your service reception or a verbal description given by one of the members of staff."
    },
    {
      question: "How long does a customer have to take legal action under the Trade Descriptions Act?",
      options: [
        "One year",
        "Three years",
        "Six months",
        "Five years"
      ],
      correctAnswer: 1,
      explanation: "A customer has three years in which to take any legal action under this Act."
    },
    {
      question: "What does the Consumer Protection Act 1987 state about goods for sale?",
      options: [
        "Goods must be the cheapest available",
        "Only safe goods should be put on sale",
        "All goods must be new",
        "Goods must come with warranties"
      ],
      correctAnswer: 1,
      explanation: "The Consumer Protection Act 1987 states that only safe goods should be put on sale."
    },
    {
      question: "Under the Consumer Protection Act, what must be stated if goods are being sold at a sale price?",
      options: [
        "Only the sale price",
        "Both the previous price and the sale price must be stated, and the goods must have been on sale at the previous price for at least 28 consecutive days in the last six months",
        "Only the percentage discount",
        "The manufacturer's suggested price"
      ],
      correctAnswer: 1,
      explanation: "Under the 28th rule, when displaying goods that are being sold at a sale price, both the previous price and the sale price of the goods must be stated. The goods must have been on sale at the previous price for at least 28 consecutive days in the last six months at the same branch."
    },
    {
      question: "What are the key terms in the Sale of Goods Act 1979?",
      options: [
        "Cheap, fast, and convenient",
        "Merchantable, as described, and fit for purpose",
        "New, warrantied, and guaranteed",
        "Affordable, available, and attractive"
      ],
      correctAnswer: 1,
      explanation: "The Sale of Goods Act 1979 lays down several conditions that all goods sold by a trader must meet. The goods must be: merchantable (of satisfactory quality), as described, and fit for purpose."
    }
  ]
};
