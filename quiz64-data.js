const quizData = {
  quizNumber: 64,
  title: "Customer Expectations & Complaints",
  pageNumbers: "319-323",
  questions: [
    {
      question: "What is patronising?",
      options: [
        "Providing excellent customer service",
        "Treating someone as if you are superior",
        "Being polite and courteous",
        "Offering helpful advice"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines patronising as treating someone as if you are superior."
    },
    {
      question: "What are customer expectations?",
      options: [
        "What the customer thinks they should have and how they think they should be treated",
        "Only the services they want to purchase",
        "Legal requirements for service",
        "The minimum service level required by law"
      ],
      correctAnswer: 0,
      explanation: "Customer expectations are what the customer thinks they should have and how they think they should be treated when asking for or receiving customer service."
    },
    {
      question: "What is the result of poor customer service often caused by?",
      options: [
        "Lack of equipment",
        "High prices",
        "Employees' attitudes and behaviour",
        "Location of the garage"
      ],
      correctAnswer: 2,
      explanation: "Poor customer service is often the result of employees' attitudes and behaviour. Staff who are helpful, willing to take responsibility and have the right level of knowledge will provide the correct level of customer service."
    },
    {
      question: "What factors influence customer expectations according to the textbook?",
      options: [
        "Only price",
        "Advertising and marketing, word of mouth, past experiences, reputation of the organisation, and previous experiences with other garages",
        "Only the garage's location",
        "Only manufacturer standards"
      ],
      correctAnswer: 1,
      explanation: "Customer expectations are based on factors including: advertising and marketing, word of mouth from friends or family, past experiences with your organisation's products or services, reputation of the organisation and its staff, and previous experiences with other garages."
    },
    {
      question: "According to Figure 6.7, which is NOT listed as a typical customer expectation?",
      options: [
        "Friendliness of staff",
        "Speed of service",
        "Lowest possible price",
        "Staff helpfulness"
      ],
      correctAnswer: 2,
      explanation: "Figure 6.7 shows typical customer expectations including: quality of service or product, ease of doing business, delivery times, price/cost, speed of service, staff product or service knowledge, staff appearance and behaviour, staff helpfulness, and friendliness of staff. 'Lowest possible price' is not listed - only 'price/cost'."
    },
    {
      question: "According to Table 6.5, how can you fulfil the expectation of 'Friendliness of staff'?",
      options: [
        "By offering discounts",
        "By greeting customers, ensuring staff are trained, answering phone promptly, and having good staff morale",
        "By providing faster service",
        "By having the newest equipment"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 states that friendliness of staff can be fulfilled by: greeting customers and ensuring all staff are trained in approved methods, answering phone promptly and courteously, and having good staff morale so employees are happy and working well together."
    },
    {
      question: "What is the key advice about promises regarding delivery times?",
      options: [
        "Always promise the fastest possible time",
        "Don't make promises unless you will keep them - reliability is key to any good relationship",
        "Promise whatever the customer wants to hear",
        "Never give specific times"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 states: Don't make promises unless you will keep them. Reliability is one of the keys to any good relationship, and good customer service is no exception."
    },
    {
      question: "How should you handle 'Ease of doing business' according to Table 6.5?",
      options: [
        "By having extended hours only",
        "By listening to customers, not using sales pitches, and letting customers talk",
        "By offering the lowest prices",
        "By having multiple locations"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 advises: Listen to your customers - is there anything more frustrating than telling someone what you want and discovering the person hasn't been paying attention? Don't use sales pitches or product babble, let your customer talk and show you are listening."
    },
    {
      question: "According to Table 6.5, how should you deal with complaints?",
      options: [
        "Avoid them at all costs",
        "Listen attentively and give the complaint your attention - you may be able to please this one person and reap the benefits of good customer service",
        "Refer all complaints to management",
        "Tell the customer they can't please everyone"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 states: Listen attentively to the complaint. No one likes hearing complaints and many people develop a reflex response saying 'You can't please all the people all the time'. Maybe not, but if you give the complaint your attention you may be able to please this one person this one time - and your business will then reap the benefits of good customer service."
    },
    {
      question: "What advice is given about staff helpfulness in Table 6.5?",
      options: [
        "Only help if there's immediate profit",
        "Be helpful even if there's no immediate profit - occasionally give something away for free",
        "Charge for all services provided",
        "Only help regular customers"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 advises: Be helpful, even if there's no immediate profit in it. Occasionally it's good to give something away for free (especially if its second hand). Garages have often helped a customer out by fitting a small item that gets them back on the road - and charged them nothing!"
    },
    {
      question: "How should staff product or service knowledge be maintained?",
      options: [
        "By experience only",
        "Staff should be trained to be helpful, courteous, and knowledgeable, and every member should have enough information to make customer-pleasing decisions",
        "By reading manuals in spare time",
        "Only senior staff need product knowledge"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 states staff should be trained to be always helpful, courteous, and knowledgeable, and most importantly, every member of staff should have enough information and power to make those small customer-pleasing decisions."
    },
    {
      question: "What is the advice about staff behaviour in Table 6.5?",
      options: [
        "Focus only on technical skills",
        "Take the extra step - if someone walks in asking for help, don't just say it's round the front, lead them to it",
        "Do the minimum required",
        "Only help during designated hours"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 advises: Take the extra step - for example, if someone walks into your workshop and asks you to help them find the reception or their car, don't just say 'It's round the front'. Lead the customer to it. Customers will notice when you make an extra effort."
    },
    {
      question: "According to Table 6.5, what can you throw in to exceed quality expectations?",
      options: [
        "Free repairs",
        "Something extra like a coupon for future discount, additional information, or a genuine smile",
        "Extended warranties on all work",
        "Free parts"
      ],
      correctAnswer: 1,
      explanation: "Table 6.5 states: Throw in something extra - whether it's a coupon for a future discount, additional information on how to get the most from their car, or a genuine smile, people love to get more than they anticipated."
    },
    {
      question: "What is goodwill?",
      options: [
        "A legal requirement",
        "The positive reputation of a business that is not linked to income or money",
        "A type of warranty",
        "A discount program"
      ],
      correctAnswer: 1,
      explanation: "The textbook defines goodwill as the positive reputation of a business that is not linked to income or money."
    },
    {
      question: "Why do many organisations actively encourage people to contact them with complaints and comments?",
      options: [
        "It's a legal requirement",
        "Because a complaint is a form of feedback that tells an organisation about specific problems that need attention",
        "To appear customer-friendly",
        "To collect customer data"
      ],
      correctAnswer: 1,
      explanation: "The textbook states that many organisations actively encourage people to contact them with complaints because a complaint is a form of feedback; it tells an organisation about specific problems that need attention."
    },
    {
      question: "What could a complaint be about according to the textbook?",
      options: [
        "Only faulty products",
        "A member of staff, a faulty product or poor communication - literally anything which has caused the customer to feel dissatisfied",
        "Only staff members",
        "Only pricing issues"
      ],
      correctAnswer: 1,
      explanation: "A complaint could be about a member of staff, a faulty product or poor communication - literally anything which has caused the customer to feel dissatisfied."
    },
    {
      question: "What typically does a complaints procedure include?",
      options: [
        "Only how to reject complaints",
        "Answers to questions like how the process works, who will reply and when, what if no reply is received, what if the reply is unsatisfactory, and whether they can complain to an independent body",
        "Only contact information",
        "Legal disclaimers"
      ],
      correctAnswer: 1,
      explanation: "Typically the complaints procedure will include answers to frequently asked questions such as: How does the complaints process work? Who will reply and when? What if I have not had a reply? What if I don't like the reply and what happens next? Can I complain to an independent body?"
    },
    {
      question: "What should you do if a complaint is handled badly?",
      options: [
        "Ignore it",
        "It will quickly escalate into something much worse, so make sure you know how to record details appropriately",
        "Blame the customer",
        "Wait for it to resolve itself"
      ],
      correctAnswer: 1,
      explanation: "The textbook warns that if a complaint is handled badly, a difficult situation will quickly escalate into something much worse. Make sure you know how to record details of any complaint made so that it can be followed up appropriately."
    },
    {
      question: "According to Figure 6.9, what is the first question you should ask yourself when dealing with a customer complaint?",
      options: [
        "What compensation can I offer?",
        "Are you personally authorised to deal with the complaint?",
        "How much will this cost the company?",
        "Who can I blame for this?"
      ],
      correctAnswer: 1,
      explanation: "Figure 6.9 shows the first question in the flow chart is: Are you personally authorised to deal with the complaint?"
    },
    {
      question: "If you're not authorised to deal with a complaint, what should you do according to Figure 6.9?",
      options: [
        "Ignore the complaint",
        "If not, who do need to refer to?",
        "Tell the customer to leave",
        "Handle it anyway"
      ],
      correctAnswer: 1,
      explanation: "According to the flow chart in Figure 6.9, if you're not personally authorised to deal with the complaint, the next question is: If not, who do need to refer to?"
    },
    {
      question: "What types of feedback can organisations receive according to the textbook?",
      options: [
        "Only complaints",
        "Complaints, thank you letters, feedback from colleagues, feedback from line managers or supervisors",
        "Only positive feedback",
        "Only written feedback"
      ],
      correctAnswer: 1,
      explanation: "Feedback can be given without prompting (like thank you letters or letters of complaint), or as a result of a request from the organisation. You may also receive feedback from colleagues who have observed your work or from a line manager or supervisor."
    },
    {
      question: "What factors determine how organisations obtain feedback?",
      options: [
        "Only cost",
        "The size of the organisation, sophistication of systems, available funds, whether the organisation wants to listen, and willingness to implement changes",
        "Only legal requirements",
        "Only customer demand"
      ],
      correctAnswer: 1,
      explanation: "Every organisation will have its own way of obtaining feedback, depending on: the size of the organisation, how sophisticated the organisation's systems and procedures are, whether funds are available to undertake research, whether the organisation wants to listen to customers, and the organisation's willingness and ability to implement any changes as a result of feedback."
    },
    {
      question: "Why is there a huge silent majority who don't give feedback?",
      options: [
        "They don't care about service",
        "While many are comfortable making complaints, there is a huge silent majority who don't give feedback",
        "They're always satisfied",
        "They don't know how"
      ],
      correctAnswer: 1,
      explanation: "The textbook states that while many people are comfortable making a complaint or mentioning when they would like something to be done differently, there is a huge silent majority who do not give any feedback."
    },
    {
      question: "What risk does an organisation run if it doesn't actively seek feedback?",
      options: [
        "No risk at all",
        "It runs the risk of making assumptions on behalf of its customers - customers might simply be walking away and finding what they want elsewhere",
        "Only financial risks",
        "Legal risks"
      ],
      correctAnswer: 1,
      explanation: "If your organisation does not actively seek feedback, it runs the risk of making assumptions on behalf of its customers. The organisation might believe its products and services are exactly what the customers want, but this might not be the case at all. Instead of giving feedback, customers might simply be walking away and finding what they want elsewhere."
    },
    {
      question: "What is stated about building a good reputation?",
      options: [
        "It's easy and quick",
        "It takes a long time to build a good reputation and a very short time to lose it",
        "It doesn't matter for small businesses",
        "It only depends on advertising"
      ],
      correctAnswer: 1,
      explanation: "The textbook emphasizes: Remember: it takes a long time to build a good reputation and a very short time to lose it."
    }
  ]
};
