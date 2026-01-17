const quizData = [
    {
        question: "What is the advantage of a daisy chain network layout?",
        options: [
            "It's the cheapest",
            "When data is sent, it travels in both directions at once, which gives much greater reliability. If one wire is damaged or broken within the loop, the information can still arrive at the appropriate ECU as it comes from the other direction. This also improves malfunction diagnosis",
            "It uses the least wiring",
            "It's the fastest"
        ],
        correct: 1,
        explanation: "When a daisy chain layout is used, the data sent travels in both directions at once, which gives much greater reliability. If one wire is damaged or broken within the loop, the information can still arrive at the appropriate ECU as it comes from the other direction. In addition to better data reliability, this system also improves malfunction diagnosis."
    },
    {
        question: "What is a data packet made up of?",
        options: [
            "Only the data itself",
            "A header, the priority, data length, address for the receiver ECU, data type, data, an error detection code, end of message, and finally a request for a response from the receiving ECU",
            "Just voltage readings",
            "Only error codes"
        ],
        correct: 1,
        explanation: "When an ECU receives a signal from a vehicle sensor, it processes this and places the information on the network bus as a data packet. The data packet is usually made up of the following: A header: the equivalent of 'hello, I am transmitting a message'. The priority: how important this message is. Data length: this is so the receiver knows it has not lost or 'misheard' any of the information. Address for the receiver ECU: the final destination for the message. Data type: what type of information is contained, e.g. speed, temperature, etc. Data: the actual sensor information itself. An error detection code: this says 'has all the information been received?' and is known as a cyclic redundancy check (CRC). End of message: 'goodbye'. Finally, a request for a response from the receiving ECU (the equivalent of 'thank you, I got your message')."
    },
    {
        question: "What is corruption in the context of CAN bus data?",
        options: [
            "Physical damage to wires",
            "A breakdown of integrity or communication",
            "Battery failure",
            "Sensor malfunction"
        ],
        correct: 1,
        explanation: "Corruption is a breakdown of integrity or communication."
    },
    {
        question: "What is potential difference in CAN bus communication?",
        options: [
            "The power output",
            "The difference between two voltage values",
            "The signal frequency",
            "The data speed"
        ],
        correct: 1,
        explanation: "Potential difference is the difference between two voltage values."
    },
    {
        question: "How does a CAN bus system reduce data corruption?",
        options: [
            "Uses thicker wires",
            "Uses two communication wires instead of one, twisted over each other in a spiral. The same data is sent on both communication wires as an on and off voltage signal. One signal acts as a positive switch and one as a negative switch. These provide a mirror image on each network wire, known as CAN high and CAN low. The potential difference between the voltages on the two lines produces a digital signal",
            "Uses higher voltage",
            "Uses multiple batteries"
        ],
        correct: 1,
        explanation: "To help reduce the possibility of data corruption caused by misinterpretation or external electromagnetic interference, a CAN bus system uses two communication wires instead of one, twisted over each other in a spiral. The same data is sent on both communication wires as an on and off voltage signal. One signal acts as a positive switch and one as a negative switch. These provide a mirror image on each network wire, which are known as CAN high and CAN low. The potential difference between the voltages on the two lines produces a digital signal that can be processed into information."
    },
    {
        question: "What is the low speed CAN bus used for?",
        options: [
            "Powertrain control",
            "Instrumentation, body control and comfort, etc. It operates at a rate of 33,000 bits of information per second (33 kbps)",
            "Safety systems",
            "High definition video"
        ],
        correct: 1,
        explanation: "Low speed: used for instrumentation, body control and comfort, etc. It operates at a rate of 33,000 bits of information per second (33 kbps)."
    },
    {
        question: "What is the high speed CAN bus used for?",
        options: [
            "Body control only",
            "Powertrain control and safety critical information, etc. It operates at a rate of 500,000 bits of information per second (500 kbps)",
            "Entertainment systems",
            "Air conditioning"
        ],
        correct: 1,
        explanation: "High speed: used for powertrain control and safety critical information, etc. It operates at a rate of 500,000 bits of information per second (500 kbps)."
    },
    {
        question: "What is the very high speed CAN bus used for?",
        options: [
            "Basic lighting",
            "High volumes of data transmission in infotainment systems (such as streaming video and music, etc). It will operate at a rate of 25,000,000 bits of information per second (25 Mbps)",
            "Starter motor control",
            "Wiper systems"
        ],
        correct: 1,
        explanation: "Very high speed: used for high volumes of data transmission in infotainment systems (such as streaming video and music, etc). It will operate at a rate of 25,000,000 bits of information per second (25 Mbps)."
    },
    {
        question: "Why is the CAN bus system more reliable than a standard wiring system?",
        options: [
            "It uses more fuses",
            "Due to the fact that a single open bus wire would not stop communication. Two open bus wires can stop communication, but as more ECUs are used for control, only part of the system may fail",
            "It has backup batteries",
            "It uses heavier gauge wire"
        ],
        correct: 1,
        explanation: "The CAN bus system is more reliable than a standard wiring system due to the fact that a single open bus wire would not stop communication. Two open bus wires can stop communication, but as more ECUs are used for control, only part of the system may fail."
    },
    {
        question: "What happens to network communication if a short circuit occurs on the CAN bus wire?",
        options: [
            "Nothing changes",
            "A short to either positive or earth will disrupt the communication on the bus wire, as an on and off signal can no longer be transmitted. If viewed on an oscilloscope screen, this would be a flat line at either 0V or 5V",
            "Speed increases",
            "Voltage doubles"
        ],
        correct: 1,
        explanation: "Short circuits can have a catastrophic effect on network communication. A short to either positive or earth will disrupt the communication on the bus wire, as an on and off signal can no longer be transmitted. If viewed on an oscilloscope screen, this would be a flat line at either 0V or 5V."
    },
    {
        question: "What are bus-cut relays used for?",
        options: [
            "To increase voltage",
            "A type of circuit breaker that isolates part of the network, allowing the rest of the system to continue communicating, to avoid total failure of the system",
            "To reduce current",
            "To store data"
        ],
        correct: 1,
        explanation: "To avoid total failure of the system, bus-cut relays can be used. These are a type of circuit breaker that isolates part of the network, allowing the rest of the system to continue communicating."
    },
    {
        question: "When diagnosing multiplex and networked systems, what should you do if communication is lost?",
        options: [
            "Replace all ECUs",
            "Numerous items will not work and several fault codes may be generated. Having connected a scan tool and retrieved the diagnostic trouble codes, you should look for the code that is the root cause",
            "Replace the battery",
            "Ignore minor faults"
        ],
        correct: 1,
        explanation: "If a critical network failure occurs, such as short to positive or earth, the vehicle may suffer a complete communication loss. With a networked system, if communication is lost within a certain area, numerous items will not work and several fault codes may be generated. Having connected a scan tool and retrieved the diagnostic trouble codes, you should look for the code that is the root cause."
    },
    {
        question: "What is a wiring loom?",
        options: [
            "A single wire",
            "A number of electrical wires bundled together to assist with their routing around the car",
            "A connector type",
            "A fuse box"
        ],
        correct: 1,
        explanation: "Wiring loom is a number of electrical wires bundled together to assist with their routing around the car."
    },
    {
        question: "What does disseminate mean?",
        options: [
            "To connect",
            "Spread out or disperse widely",
            "To test",
            "To repair"
        ],
        correct: 1,
        explanation: "Disseminate means to spread out or disperse widely."
    },
    {
        question: "What are the four main electrical faults?",
        options: [
            "Battery, alternator, starter, lights",
            "Open circuit, short circuit, high resistance, parasitic drain",
            "Voltage, current, resistance, power",
            "Fuse, relay, switch, connector"
        ],
        correct: 1,
        explanation: "There are four main electrical faults: open circuit, short circuit, high resistance, parasitic drain."
    },
    {
        question: "What is an open circuit?",
        options: [
            "A circuit with full power",
            "Electricity cannot flow. This is usually because there is a physical break in the system",
            "A circuit with low resistance",
            "A working circuit"
        ],
        correct: 1,
        explanation: "In an open circuit, electricity cannot flow. This is usually because there is a physical break in the system."
    },
    {
        question: "How do you diagnose an open circuit?",
        options: [
            "Use an ammeter",
            "If the circuit is working correctly, voltage will exist up to the consumer (in this case the bulb), which will use up the electrical energy. If you connect a voltmeter to the bulb feed and there is no voltage, the open circuit must be somewhere before this point in the system. If a normal 12 volts is recorded, the fault must lie after this point. This test is sometimes known as a volt drop test",
            "Check the fuses only",
            "Replace all components"
        ],
        correct: 1,
        explanation: "An example of a symptom caused by an open circuit is a light on the car not working. To diagnose this fault, you can use a voltmeter. If the circuit is working correctly, voltage will exist up to the consumer (in this case the bulb), which will use up the electrical energy. If you connect a voltmeter to the bulb feed and there is no voltage, the open circuit must be somewhere before this point in the system. Return to the battery – if a normal 12 volts is recorded, the fault must lie after this point in the system. Slowly move the voltmeter along the circuit, taking readings at various points (for example, see Figure 4.29). The point where the voltage disappears somewhere before the consumer is the location of the open circuit. This test is sometimes known as a volt drop test."
    },
    {
        question: "What causes high resistance in a circuit?",
        options: [
            "Too much voltage",
            "Electricity slows down. This is usually because of a partial restriction in the system",
            "Too much current",
            "Battery overcharge"
        ],
        correct: 1,
        explanation: "In a high resistance circuit, the electricity slows down. This is usually because of a partial restriction in the system."
    },
    {
        question: "What is an example symptom of high resistance?",
        options: [
            "Light is too bright",
            "A dim light on the car",
            "Circuit breaker trips",
            "Battery explodes"
        ],
        correct: 1,
        explanation: "An example of a symptom caused by high resistance is a dim light on the car."
    },
    {
        question: "In a short circuit, why does electricity not make it all the way to the end?",
        options: [
            "Battery is dead",
            "Electricity is lazy, and will always take the path of least resistance. (Why travel the full length of the circuit when a shortcut can be taken?)",
            "Voltage is too low",
            "Resistance is too high"
        ],
        correct: 1,
        explanation: "Electricity is lazy, and will always take the path of least resistance. (Why travel the full length of the circuit when a shortcut can be taken?) In a short circuit, the electricity does not make it all the way to the end."
    },
    {
        question: "What is a dead short?",
        options: [
            "A battery that has failed",
            "An electrical short circuit that goes straight to earth without passing through a consumer",
            "An open circuit",
            "High resistance"
        ],
        correct: 1,
        explanation: "Dead short is an electrical short circuit that goes straight to earth without passing through a consumer."
    },
    {
        question: "How do you diagnose a short circuit with a dead short?",
        options: [
            "Use a voltmeter only",
            "If a dead short exists, remove the blown fuse completely and replace it with a test lamp (as shown in Figure 4.31). The bulb on the test lamp will light up. Because the test lamp bulb is consuming electrical energy, the circuit should not overheat and burn out. Starting at the far end of the circuit, you should systematically disconnect or move components and wiring until the test lamp goes out. This will help you find the position of the short circuit",
            "Replace the battery",
            "Check connections visually only"
        ],
        correct: 1,
        explanation: "An example of a symptom caused by a short circuit is wiring or a fuse that has burnt out. To diagnose this fault, you can use a test lamp. If a dead short exists, remove the blown fuse completely and replace it with a test lamp (as shown in Figure 4.31). The bulb on the test lamp will light up. Because the test lamp bulb is consuming electrical energy, the circuit should not overheat and burn out. Starting at the far end of the circuit, you should systematically disconnect or move components and wiring until the test lamp goes out. This will help you find the position of the short circuit."
    },
    {
        question: "What is parasitic drain?",
        options: [
            "Normal battery discharge",
            "Similar to a short circuit: electricity will continue to flow even when the system is switched off",
            "Alternator output",
            "Starter current draw"
        ],
        correct: 1,
        explanation: "A parasitic drain is similar to a short circuit: electricity will continue to flow even when the system is switched off."
    },
    {
        question: "How do you diagnose parasitic drain?",
        options: [
            "Use a voltmeter only",
            "Insert the ammeter into the circuit (connected in series) to measure if any current is flowing when everything is switched off. If any current (measured in amps) is shown, there is a parasitic drain. To isolate the parasitic drain, disconnect the suspected circuits (isolate/unplug components) until flow stops and amps draw falls to zero. You can then replace the faulty component",
            "Replace the battery first",
            "Check tire pressure"
        ],
        correct: 1,
        explanation: "An example of a symptom caused by a parasitic drain is a battery that goes flat if left for a period. To diagnose this fault, you can use an ammeter. Insert the ammeter into the circuit (connected in series) to measure if any current is flowing when everything is switched off. If any current (measured in amps) is shown, there is a parasitic drain. To isolate the parasitic drain, disconnect the suspected circuits (isolate/unplug components) until flow stops and amps draw falls to zero. You can then replace the faulty component."
    },
    {
        question: "What voltage is the electrical system on most modern cars?",
        options: [
            "6 volts",
            "12 volts",
            "24 volts",
            "48 volts"
        ],
        correct: 1,
        explanation: "The electrical systems found on most modern cars are supplied from a 12-volt battery which stores the electrical energy in chemical form."
    }
];
