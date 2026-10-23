/* ==========================================================================
   CDM LibHub — Promotional Website JavaScript
   Aligned with CDM OneServe interactions, tabs, scroll reveals, and OPAC catalog
   ========================================================================== */

// Embedded 48 Curated Core Books (Guaranteed offline / instant availability)
const FALLBACK_CURATED_BOOKS = [
  {
    "id": "ICS-101",
    "isbn": "978-0-13-110362-7",
    "title": "Introduction to Computing and Information Technology",
    "author": "P.K. Sinha & Preeti Sinha",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.S56 2022",
    "shelfLocation": "Stack ICS-1",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Foundational textbook covering hardware architecture, operating system fundamentals, digital logic, networking, and ethical implications in information technology.",
    "abstract": "Foundational textbook covering hardware architecture, operating system fundamentals, digital logic, networking, and ethical implications in information technology."
  },
  {
    "id": "ICS-102",
    "isbn": "978-1-337-10208-7",
    "title": "Computer Programming Fundamentals in C++",
    "author": "D.S. Malik",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.73.C153 M35 2021",
    "shelfLocation": "Stack ICS-1",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Comprehensive guide to structured and object-oriented programming in C++, covering variables, control structures, functions, pointers, and memory management.",
    "abstract": "Comprehensive guide to structured and object-oriented programming in C++, covering variables, control structures, functions, pointers, and memory management."
  },
  {
    "id": "ICS-103",
    "isbn": "978-0-13-257627-7",
    "title": "Data Structures and Algorithm Analysis in Java",
    "author": "Mark Allen Weiss",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "QA",
    "callNo": "QA 76.9.D35 W45 2022",
    "shelfLocation": "Stack ICS-1",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=560&fit=crop&auto=format",
    "synopsis": "In-depth treatment of data structures including lists, stacks, queues, trees, hashing, heaps, graphs, sorting, and asymptotic complexity analysis.",
    "abstract": "In-depth treatment of data structures including lists, stacks, queues, trees, hashing, heaps, graphs, sorting, and asymptotic complexity analysis."
  },
  {
    "id": "ICS-104",
    "isbn": "978-0-07-338309-5",
    "title": "Discrete Mathematics and Its Applications",
    "author": "Kenneth H. Rosen",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "QA",
    "callNo": "QA 39.3.R67 2021",
    "shelfLocation": "Stack ICS-1",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Foundational mathematics for computing covering propositional logic, set theory, graph theory, combinatorics, proof techniques, and boolean algebra.",
    "abstract": "Foundational mathematics for computing covering propositional logic, set theory, graph theory, combinatorics, proof techniques, and boolean algebra."
  },
  {
    "id": "ICS-201",
    "isbn": "978-0-07-802215-9",
    "title": "Database System Concepts (8th Edition)",
    "author": "Abraham Silberschatz & Henry F. Korth",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.9.D3 S55 2023",
    "shelfLocation": "Stack ICS-2",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Comprehensive relational database management covering SQL, relational algebra, schema normalization (1NF-BCNF), indexing, transactions, and ACID properties.",
    "abstract": "Comprehensive relational database management covering SQL, relational algebra, schema normalization (1NF-BCNF), indexing, transactions, and ACID properties."
  },
  {
    "id": "ICS-202",
    "isbn": "978-0-13-198926-9",
    "title": "Digital Logic and Computer Design",
    "author": "M. Morris Mano",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "TK",
    "callNo": "TK 7888.4.M36 2020",
    "shelfLocation": "Stack ICS-2",
    "totalCopies": 3,
    "availableCopies": 2,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Covers combinational circuits, Karnaugh maps, flip-flops, sequential circuit design, registers, counters, and arithmetic logic units for computer engineering.",
    "abstract": "Covers combinational circuits, Karnaugh maps, flip-flops, sequential circuit design, registers, counters, and arithmetic logic units for computer engineering."
  },
  {
    "id": "ICS-203",
    "isbn": "978-0-13-359162-0",
    "title": "Modern Operating Systems (5th Edition)",
    "author": "Andrew S. Tanenbaum & Herbert Bos",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "QA",
    "callNo": "QA 76.76.O63 T36 2023",
    "shelfLocation": "Stack ICS-2",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Examines process management, CPU scheduling algorithms, memory virtualization, paging, file system implementation, deadlock avoidance, and concurrency.",
    "abstract": "Examines process management, CPU scheduling algorithms, memory virtualization, paging, file system implementation, deadlock avoidance, and concurrency."
  },
  {
    "id": "ICS-204",
    "isbn": "978-0-13-359414-0",
    "title": "Computer Networks: A Top-Down Approach",
    "author": "James F. Kurose & Keith W. Ross",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "TK",
    "callNo": "TK 5105.5.K87 2022",
    "shelfLocation": "Stack ICS-2",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Covers TCP/IP protocol suite from application layer down to link and physical layers, subnetting, routing protocols (OSPF, BGP), and network security fundamentals.",
    "abstract": "Covers TCP/IP protocol suite from application layer down to link and physical layers, subnetting, routing protocols (OSPF, BGP), and network security fundamentals."
  },
  {
    "id": "ICS-301",
    "isbn": "978-0-07-802212-8",
    "title": "Software Engineering: A Practitioner's Approach",
    "author": "Roger S. Pressman & Bruce R. Maxim",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.758.P75 2020",
    "shelfLocation": "Stack ICS-3",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Covers agile workflows, Scrum, requirements engineering, architectural design, UML modeling, software testing, QA assurance, and software maintenance.",
    "abstract": "Covers agile workflows, Scrum, requirements engineering, architectural design, UML modeling, software testing, QA assurance, and software maintenance."
  },
  {
    "id": "ICS-302",
    "isbn": "978-1-491-91866-1",
    "title": "Web Systems and Technologies: Full Stack Modern Web",
    "author": "Robin Nixon",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.625.N59 2022",
    "shelfLocation": "Stack ICS-3",
    "totalCopies": 6,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Modern full-stack web engineering with React, Node.js, Express, REST APIs, responsive CSS frameworks, client-server security, and state management.",
    "abstract": "Modern full-stack web engineering with React, Node.js, Express, REST APIs, responsive CSS frameworks, client-server security, and state management."
  },
  {
    "id": "ICS-303",
    "isbn": "978-0-13-477280-6",
    "title": "Information Assurance and Cybersecurity Principles",
    "author": "William Stallings",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "QA",
    "callNo": "QA 76.9.A25 S73 2022",
    "shelfLocation": "Stack ICS-3",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Explores cryptographic algorithms, RSA, hashing, firewalls, intrusion detection systems, penetration testing, vulnerability assessment, and risk management.",
    "abstract": "Explores cryptographic algorithms, RSA, hashing, firewalls, intrusion detection systems, penetration testing, vulnerability assessment, and risk management."
  },
  {
    "id": "ICS-304",
    "isbn": "978-9-811-80123-5",
    "title": "Mobile Application Development with Flutter & React Native",
    "author": "Greg Lim",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "QA",
    "callNo": "QA 76.774.A53 L56 2023",
    "shelfLocation": "Stack ICS-3",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Cross-platform mobile engineering for iOS and Android, focusing on component lifecycle, UI state, device hardware APIs, camera access, and offline sync.",
    "abstract": "Cross-platform mobile engineering for iOS and Android, focusing on component lifecycle, UI state, device hardware APIs, camera access, and offline sync."
  },
  {
    "id": "ICS-401",
    "isbn": "978-0-13-302344-2",
    "title": "Systems Analysis and Design (10th Edition)",
    "author": "Kenneth E. Kendall & Julie E. Kendall",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "QA",
    "callNo": "QA 76.9.S88 K45 2021",
    "shelfLocation": "Stack ICS-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Methodologies for system feasibility studies, process modeling (DFD), object-oriented analysis, UI/UX prototyping, database integration, and deployment.",
    "abstract": "Methodologies for system feasibility studies, process modeling (DFD), object-oriented analysis, UI/UX prototyping, database integration, and deployment."
  },
  {
    "id": "ICS-402",
    "isbn": "978-0-07-025742-9",
    "title": "Microprocessor and Microcontroller Interfacing (CpE)",
    "author": "Douglas V. Hall",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "TK",
    "callNo": "TK 7895.M5 H35 2020",
    "shelfLocation": "Stack ICS-4",
    "totalCopies": 3,
    "availableCopies": 2,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Embedded systems design, assembly language, memory interfacing, interrupt handling, I/O ports, ADC/DAC conversion, and IoT microcontrollers (ESP32/Arduino).",
    "abstract": "Embedded systems design, assembly language, memory interfacing, interrupt handling, I/O ports, ADC/DAC conversion, and IoT microcontrollers (ESP32/Arduino)."
  },
  {
    "id": "ICS-403",
    "isbn": "978-1-119-45678-1",
    "title": "IT Capstone Project Guide and Technical Writing",
    "author": "Randy L. Conn",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "T",
    "callNo": "T 11.C66 2023",
    "shelfLocation": "Stack ICS-4",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Definitive handbook for preparing IMRaD capstone manuscripts, defense presentations, software documentation, ISO 25010 testing, and project defense panels.",
    "abstract": "Definitive handbook for preparing IMRaD capstone manuscripts, defense presentations, software documentation, ISO 25010 testing, and project defense panels."
  },
  {
    "id": "ICS-404",
    "isbn": "978-0-13-461099-3",
    "title": "Artificial Intelligence and Machine Learning for Engineers",
    "author": "Stuart Russell & Peter Norvig",
    "category": "ICS",
    "institute": "ICS",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "Q",
    "callNo": "Q 335.R87 2022",
    "shelfLocation": "Stack ICS-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Explores neural networks, supervised/unsupervised machine learning, computer vision, natural language processing, and ethical AI deployment for graduating engineers.",
    "abstract": "Explores neural networks, supervised/unsupervised machine learning, computer vision, natural language processing, and ethical AI deployment for graduating engineers."
  },
  {
    "id": "ITE-101",
    "isbn": "978-971-0428-89-2",
    "title": "The Child and Adolescent Learners and Learning Principles",
    "author": "Brenda B. Corpuz & Maria Rita D. Lucas",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 1060.C67 2021",
    "shelfLocation": "Stack ITE-1",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Examines physical, cognitive, socio-emotional developmental theories of Piaget, Vygotsky, Erikson, and Kohlberg applied to classroom learning principles.",
    "abstract": "Examines physical, cognitive, socio-emotional developmental theories of Piaget, Vygotsky, Erikson, and Kohlberg applied to classroom learning principles."
  },
  {
    "id": "ITE-102",
    "isbn": "978-971-98-0867-1",
    "title": "Understanding the Self: Philippine Context",
    "author": "D.J. Brawner & R.L. Arce",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "BF",
    "callNo": "BF 697.B73 2022",
    "shelfLocation": "Stack ITE-1",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=560&fit=crop&auto=format",
    "synopsis": "CHED General Education reference exploring identity development from philosophical, sociological, anthropological, and psychological perspectives.",
    "abstract": "CHED General Education reference exploring identity development from philosophical, sociological, anthropological, and psychological perspectives."
  },
  {
    "id": "ITE-103",
    "isbn": "978-971-0428-92-2",
    "title": "Facilitating Learner-Centered Teaching",
    "author": "Maria Rita D. Lucas & Brenda B. Corpuz",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "LB",
    "callNo": "LB 1025.3.L83 2022",
    "shelfLocation": "Stack ITE-1",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Focuses on constructivist pedagogical theories, metacognitive strategies, motivational factors, and individual differences in diverse Philippine classrooms.",
    "abstract": "Focuses on constructivist pedagogical theories, metacognitive strategies, motivational factors, and individual differences in diverse Philippine classrooms."
  },
  {
    "id": "ITE-104",
    "isbn": "978-971-98-0850-3",
    "title": "Purposive Communication in the 21st Century",
    "author": "Chase & Shamo",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "P",
    "callNo": "P 90.C43 2021",
    "shelfLocation": "Stack ITE-1",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Equips students with multimodal communication skills, academic writing, intercultural presentations, and persuasive discourse across digital platforms.",
    "abstract": "Equips students with multimodal communication skills, academic writing, intercultural presentations, and persuasive discourse across digital platforms."
  },
  {
    "id": "ITE-201",
    "isbn": "978-971-0428-95-3",
    "title": "Technology for Teaching and Learning 1 (TTL 1)",
    "author": "Purita P. Bilbao & Dehlia M. Lucido",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 1028.3.B55 2022",
    "shelfLocation": "Stack ITE-2",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Explores ICT integration models (TPACK, SAMR), educational multimedia creation, virtual learning environments, and assistive technologies in teaching.",
    "abstract": "Explores ICT integration models (TPACK, SAMR), educational multimedia creation, virtual learning environments, and assistive technologies in teaching."
  },
  {
    "id": "ITE-202",
    "isbn": "978-971-0428-97-7",
    "title": "Foundation of Special and Inclusive Education",
    "author": "Yolanda S. Quijano & Mirla R. Olores",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "LC",
    "callNo": "LC 1200.Q55 2021",
    "shelfLocation": "Stack ITE-2",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Guidelines for identifying diverse learners with disabilities, giftedness, and talents, designing IEPs, universal design for learning (UDL), and inclusive practices.",
    "abstract": "Guidelines for identifying diverse learners with disabilities, giftedness, and talents, designing IEPs, universal design for learning (UDL), and inclusive practices."
  },
  {
    "id": "ITE-203",
    "isbn": "978-971-0428-99-1",
    "title": "Building and Enhancing New Literacies Across Curriculum",
    "author": "Brenda B. Corpuz & Purita P. Bilbao",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "LC",
    "callNo": "LC 149.C67 2023",
    "shelfLocation": "Stack ITE-2",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Covers 21st-century literacies: globalization and multicultural literacy, social literacy, financial literacy, media and cyber literacy, eco-literacy, and arts literacy.",
    "abstract": "Covers 21st-century literacies: globalization and multicultural literacy, social literacy, financial literacy, media and cyber literacy, eco-literacy, and arts literacy."
  },
  {
    "id": "ITE-204",
    "isbn": "978-0-13-261394-1",
    "title": "Teaching Science in Elementary and Secondary Grades",
    "author": "Joseph Abruscato & Donald DeRosa",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "Q",
    "callNo": "Q 181.A27 2020",
    "shelfLocation": "Stack ITE-2",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Inquiry-based science instruction, hands-on lab experiments, STEM curriculum integration, and assessment of scientific thinking in basic education.",
    "abstract": "Inquiry-based science instruction, hands-on lab experiments, STEM curriculum integration, and assessment of scientific thinking in basic education."
  },
  {
    "id": "ITE-301",
    "isbn": "978-971-0428-85-4",
    "title": "Assessment in Learning 1: Traditional Assessment & Rubrics",
    "author": "Rosita L. Navarro & Rosita G. Santos",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 3051.N38 2022",
    "shelfLocation": "Stack ITE-3",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Design and evaluation of cognitive tests, Table of Specifications (TOS), item analysis (difficulty and discrimination index), validity, and reliability testing.",
    "abstract": "Design and evaluation of cognitive tests, Table of Specifications (TOS), item analysis (difficulty and discrimination index), validity, and reliability testing."
  },
  {
    "id": "ITE-302",
    "isbn": "978-971-0428-87-8",
    "title": "The Teacher and the School Curriculum",
    "author": "Purita P. Bilbao & Filomena T. Dayagbil",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 1570.B55 2022",
    "shelfLocation": "Stack ITE-3",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Comprehensive analysis of curriculum development processes, MATATAG Curriculum standards, curriculum mapping, implementation models, and reform.",
    "abstract": "Comprehensive analysis of curriculum development processes, MATATAG Curriculum standards, curriculum mapping, implementation models, and reform."
  },
  {
    "id": "ITE-303",
    "isbn": "978-971-0428-86-1",
    "title": "Assessment in Learning 2: Authentic & Performance-Based",
    "author": "Rosita G. Santos & Brenda B. Corpuz",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "LB",
    "callNo": "LB 3051.S26 2023",
    "shelfLocation": "Stack ITE-3",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Formulation of authentic assessments, holistic and analytic rubrics, student portfolio assessment, affective domain rating scales, and DepEd grading systems.",
    "abstract": "Formulation of authentic assessments, holistic and analytic rubrics, student portfolio assessment, affective domain rating scales, and DepEd grading systems."
  },
  {
    "id": "ITE-304",
    "isbn": "978-971-0428-91-5",
    "title": "Curriculum and Instruction in Technology & Livelihood Education",
    "author": "T.G. Arcos & E.M. Reyes",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "TT",
    "callNo": "TT 165.A73 2021",
    "shelfLocation": "Stack ITE-3",
    "totalCopies": 3,
    "availableCopies": 2,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Pedagogical methodologies for teaching Home Economics, Industrial Arts, Agri-Fishery, and ICT/TVL track competencies aligned with TESDA training regulations.",
    "abstract": "Pedagogical methodologies for teaching Home Economics, Industrial Arts, Agri-Fishery, and ICT/TVL track competencies aligned with TESDA training regulations."
  },
  {
    "id": "ITE-401",
    "isbn": "978-971-0428-90-8",
    "title": "The Teaching Profession: Code of Ethics & Standards",
    "author": "Purita P. Bilbao & Brenda B. Corpuz",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 1775.B55 2022",
    "shelfLocation": "Stack ITE-4",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Philippine Professional Standards for Teachers (PPST), Code of Ethics for Professional Teachers, Magna Carta for Public School Teachers (RA 4670), and LET competencies.",
    "abstract": "Philippine Professional Standards for Teachers (PPST), Code of Ethics for Professional Teachers, Magna Carta for Public School Teachers (RA 4670), and LET competencies."
  },
  {
    "id": "ITE-402",
    "isbn": "978-971-0428-88-5",
    "title": "Field Study and Experiential Learning Handbook",
    "author": "Maria Rita D. Lucas & Milagros L. Borabo",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "LB",
    "callNo": "LB 2157.L83 2022",
    "shelfLocation": "Stack ITE-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Structured field study guide for classroom observation, school environment analysis, lesson plan design, instructional material evaluation, and pre-service portfolio.",
    "abstract": "Structured field study guide for classroom observation, school environment analysis, lesson plan design, instructional material evaluation, and pre-service portfolio."
  },
  {
    "id": "ITE-403",
    "isbn": "978-0-13-452272-2",
    "title": "Action Research in Education: Methods and Protocols",
    "author": "Geoffrey E. Mills",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "LB",
    "callNo": "LB 1028.24.M55 2020",
    "shelfLocation": "Stack ITE-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Step-by-step guidance on classroom-based action research, problem identification, intervention design, data gathering, statistical interpretation, and thesis writing.",
    "abstract": "Step-by-step guidance on classroom-based action research, problem identification, intervention design, data gathering, statistical interpretation, and thesis writing."
  },
  {
    "id": "ITE-404",
    "isbn": "978-971-0428-93-9",
    "title": "Practice Teaching: The Capstone Experience in Education",
    "author": "Filomena T. Dayagbil & Brenda B. Corpuz",
    "category": "ITE",
    "institute": "ITE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "LB",
    "callNo": "LB 2157.D39 2023",
    "shelfLocation": "Stack ITE-4",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Preparation for actual classroom internship, demo teaching rubrics, classroom management techniques, professional mentoring, and terminal portfolio assessment.",
    "abstract": "Preparation for actual classroom internship, demo teaching rubrics, classroom management techniques, professional mentoring, and terminal portfolio assessment."
  },
  {
    "id": "IBE-101",
    "isbn": "978-971-0489-01-5",
    "title": "Financial Accounting and Reporting: Fundamentals",
    "author": "Zeus Vernon B. Millan",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "HF",
    "callNo": "HF 5635.M55 2022",
    "shelfLocation": "Stack IBE-1",
    "totalCopies": 6,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Introduction to Philippine Financial Reporting Standards (PFRS), accounting cycle, journalizing, financial statements, balance sheet, and trial balance.",
    "abstract": "Introduction to Philippine Financial Reporting Standards (PFRS), accounting cycle, journalizing, financial statements, balance sheet, and trial balance."
  },
  {
    "id": "IBE-102",
    "isbn": "978-0-13-452760-4",
    "title": "Principles of Management and Organization",
    "author": "Stephen P. Robbins & Mary Coulter",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "1st Sem",
    "ddc": "HD",
    "callNo": "HD 31.R564 2021",
    "shelfLocation": "Stack IBE-1",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Foundations of business management covering planning, organizing, leading, controlling (POLC), organizational structures, motivation, and corporate leadership.",
    "abstract": "Foundations of business management covering planning, organizing, leading, controlling (POLC), organizational structures, motivation, and corporate leadership."
  },
  {
    "id": "IBE-103",
    "isbn": "978-981-4526-89-0",
    "title": "Principles of Marketing (Philippine Edition)",
    "author": "Philip Kotler, Gary Armstrong & Josiah Go",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "HF",
    "callNo": "HF 5415.K68 2022",
    "shelfLocation": "Stack IBE-1",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Marketing principles in the local Philippine consumer landscape: 4Ps marketing mix, STP (segmentation, targeting, positioning), digital marketing, and branding.",
    "abstract": "Marketing principles in the local Philippine consumer landscape: 4Ps marketing mix, STP (segmentation, targeting, positioning), digital marketing, and branding."
  },
  {
    "id": "IBE-104",
    "isbn": "978-0-19-533610-8",
    "title": "Microeconomics: Theory and Applications",
    "author": "Dominick Salvatore",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "1st Year",
    "year_level": "1st Year",
    "semester": "2nd Sem",
    "ddc": "HB",
    "callNo": "HB 172.S25 2020",
    "shelfLocation": "Stack IBE-1",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2020,
    "coverUrl": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Covers consumer demand theory, price elasticity, production functions, cost curves, market structures (perfect competition, monopoly, oligopoly), and equilibrium.",
    "abstract": "Covers consumer demand theory, price elasticity, production functions, cost curves, market structures (perfect competition, monopoly, oligopoly), and equilibrium."
  },
  {
    "id": "IBE-201",
    "isbn": "978-1-259-57818-2",
    "title": "Human Resource Management in the Philippine Setting",
    "author": "Raymond A. Noe & John R. Hollenbeck",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "HF",
    "callNo": "HF 5549.N63 2022",
    "shelfLocation": "Stack IBE-2",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=560&fit=crop&auto=format",
    "synopsis": "HR strategy, talent recruitment, employee training, performance management, DOLE labor compliance, compensation benefits, and industrial relations.",
    "abstract": "HR strategy, talent recruitment, employee training, performance management, DOLE labor compliance, compensation benefits, and industrial relations."
  },
  {
    "id": "IBE-202",
    "isbn": "978-971-691-881-6",
    "title": "The Law on Obligations and Contracts",
    "author": "Hector S. De Leon & Hector M. De Leon Jr.",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "1st Sem",
    "ddc": "KPM",
    "callNo": "KPM 810.D45 2021",
    "shelfLocation": "Stack IBE-2",
    "totalCopies": 6,
    "availableCopies": 4,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Standard Philippine commercial law textbook on Civil Code provisions governing civil obligations, contractual validity, breach, damages, and remedies.",
    "abstract": "Standard Philippine commercial law textbook on Civil Code provisions governing civil obligations, contractual validity, breach, damages, and remedies."
  },
  {
    "id": "IBE-203",
    "isbn": "978-971-0489-12-1",
    "title": "Cost Accounting and Control (Philippine Edition)",
    "author": "Conrado T. Valix & Christian Aris M. Valix",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "HF",
    "callNo": "HF 5686.C8 V35 2023",
    "shelfLocation": "Stack IBE-2",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Job order costing, process costing, activity-based costing (ABC), cost-volume-profit (CVP) analysis, budgeting, and standard cost variance analysis.",
    "abstract": "Job order costing, process costing, activity-based costing (ABC), cost-volume-profit (CVP) analysis, budgeting, and standard cost variance analysis."
  },
  {
    "id": "IBE-204",
    "isbn": "978-971-0489-23-7",
    "title": "Opportunity Seeking, Screening and Seizing: Entrepreneurial Strategy",
    "author": "Dr. Eduardo A. Morato Jr.",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "2nd Year",
    "year_level": "2nd Year",
    "semester": "2nd Sem",
    "ddc": "HB",
    "callNo": "HB 615.M67 2021",
    "shelfLocation": "Stack IBE-2",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Frameworks for market opportunity identification, consumer pain-point analysis, competitive positioning, value proposition design, and business validation.",
    "abstract": "Frameworks for market opportunity identification, consumer pain-point analysis, competitive positioning, value proposition design, and business validation."
  },
  {
    "id": "IBE-301",
    "isbn": "978-0-13-441760-8",
    "title": "Financial Management: Principles and Applications",
    "author": "Sheridan Titman & Arthur J. Keown",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "HG",
    "callNo": "HG 4026.T58 2022",
    "shelfLocation": "Stack IBE-3",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Corporate valuation, time value of money, capital budgeting (NPV/IRR), risk and return, cost of capital (WACC), dividend policies, and working capital.",
    "abstract": "Corporate valuation, time value of money, capital budgeting (NPV/IRR), risk and return, cost of capital (WACC), dividend policies, and working capital."
  },
  {
    "id": "IBE-302",
    "isbn": "978-971-0489-34-3",
    "title": "Business Plan Preparation and Feasibility Studies",
    "author": "Dr. Nick L. Sanyal & Rebecca M. Cruz",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "1st Sem",
    "ddc": "HD",
    "callNo": "HD 69.B7 S26 2022",
    "shelfLocation": "Stack IBE-3",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Complete guide to writing bankable business plans, market feasibility, technical operational studies, organizational modeling, and financial projection statements.",
    "abstract": "Complete guide to writing bankable business plans, market feasibility, technical operational studies, organizational modeling, and financial projection statements."
  },
  {
    "id": "IBE-303",
    "isbn": "978-1-259-66610-0",
    "title": "Operations and Supply Chain Management (16th Edition)",
    "author": "F. Robert Jacobs & Richard B. Chase",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "TS",
    "callNo": "TS 155.J33 2021",
    "shelfLocation": "Stack IBE-3",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Supply chain strategy, Lean systems, Six Sigma quality control, inventory optimization (EOQ/JIT), facility layouts, logistics, and sustainable operations.",
    "abstract": "Supply chain strategy, Lean systems, Six Sigma quality control, inventory optimization (EOQ/JIT), facility layouts, logistics, and sustainable operations."
  },
  {
    "id": "IBE-304",
    "isbn": "978-971-0489-45-9",
    "title": "Social Entrepreneurship and Community Development",
    "author": "Lisa D. Dacanay",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "3rd Year",
    "year_level": "3rd Year",
    "semester": "2nd Sem",
    "ddc": "HN",
    "callNo": "HN 713.5.D33 2022",
    "shelfLocation": "Stack IBE-3",
    "totalCopies": 4,
    "availableCopies": 2,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Examines hybrid social enterprise models, triple bottom line (people, planet, profit), fair trade, community-based micro-enterprises, and poverty alleviation.",
    "abstract": "Examines hybrid social enterprise models, triple bottom line (people, planet, profit), fair trade, community-based micro-enterprises, and poverty alleviation."
  },
  {
    "id": "IBE-401",
    "isbn": "978-0-13-416784-8",
    "title": "Strategic Management: Concepts and Cases",
    "author": "Fred R. David & Forest R. David",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "HD",
    "callNo": "HD 30.28.D38 2021",
    "shelfLocation": "Stack IBE-4",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2021,
    "coverUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Senior strategic planning reference: SWOT matrices, Porter's Five Forces, BCG matrix, corporate diversification, global competitiveness, and ethics.",
    "abstract": "Senior strategic planning reference: SWOT matrices, Porter's Five Forces, BCG matrix, corporate diversification, global competitiveness, and ethics."
  },
  {
    "id": "IBE-402",
    "isbn": "978-0-13-254415-3",
    "title": "Pricing Strategies and Financial Modeling for Startups",
    "author": "Thomas T. Nagle & Georg Müller",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "1st Sem",
    "ddc": "HF",
    "callNo": "HF 5416.5.N34 2022",
    "shelfLocation": "Stack IBE-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2022,
    "coverUrl": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Value-based pricing, unit economics, SaaS/E-commerce revenue models, customer acquisition cost (CAC), lifetime value (LTV), and venture capitalization.",
    "abstract": "Value-based pricing, unit economics, SaaS/E-commerce revenue models, customer acquisition cost (CAC), lifetime value (LTV), and venture capitalization."
  },
  {
    "id": "IBE-403",
    "isbn": "978-0-13-523167-8",
    "title": "Business Analytics, Big Data and Decision Modeling",
    "author": "James R. Evans",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "HD",
    "callNo": "HD 30.215.E93 2023",
    "shelfLocation": "Stack IBE-4",
    "totalCopies": 4,
    "availableCopies": 3,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Executive decision modeling, descriptive, predictive, and prescriptive analytics, spreadsheet data modeling, Monte Carlo simulation, and business intelligence.",
    "abstract": "Executive decision modeling, descriptive, predictive, and prescriptive analytics, spreadsheet data modeling, Monte Carlo simulation, and business intelligence."
  },
  {
    "id": "IBE-404",
    "isbn": "978-971-0489-67-1",
    "title": "Franchising, E-Commerce and Enterprise Incubation",
    "author": "Robert W. Price & Manuel V. Sison",
    "category": "IBE",
    "institute": "IBE",
    "yearLevel": "4th Year",
    "year_level": "4th Year",
    "semester": "2nd Sem",
    "ddc": "HF",
    "callNo": "HF 5429.23.P75 2023",
    "shelfLocation": "Stack IBE-4",
    "totalCopies": 5,
    "availableCopies": 4,
    "publishYear": 2023,
    "coverUrl": "https://images.unsplash.com/photo-1556742049-0a67c57750c9?w=400&h=560&fit=crop&auto=format",
    "synopsis": "Commercial scale-up strategies: franchise package development, cross-border e-commerce, DTI/SEC compliance, angel investments, and enterprise incubation.",
    "abstract": "Commercial scale-up strategies: franchise package development, cross-border e-commerce, DTI/SEC compliance, angel investments, and enterprise incubation."
  }
];

let allBooks = [...FALLBACK_CURATED_BOOKS];
let activeInstitute = 'ALL';
let onlyAvailable = false;
let searchQuery = '';

/* ==========================================================================
   1. NAVIGATION & SCROLL TELEMETRY
   ========================================================================== */
const header = document.getElementById('header');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section[id], main > section[id]');

// Sticky Header & Back to Top visibility on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Header state
  if (scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Back to Top button state
  if (scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  // Active navigation link tracking
  let currentSectionId = '';
  sections.forEach((sec) => {
    const secTop = sec.offsetTop - 120;
    const secHeight = sec.offsetHeight;
    if (scrollY >= secTop && scrollY < secTop + secHeight) {
      currentSectionId = sec.getAttribute('id');
    }
  });

  if (currentSectionId) {
    document.querySelectorAll('.nav-links a').forEach((a) => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + currentSectionId) {
        a.classList.add('active');
      }
    });
  }
});

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Back to top click handler
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   2. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
}

/* ==========================================================================
   3. SERVICES TAB SWITCHER (LibHub Mobile vs Desktop App)
   ========================================================================== */
const MOBILE_SERVICES = [
  {
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    title: 'Book Catalog & OPAC',
    desc: 'Instantly search across ICS, ITE, and IBE curricula. Filter by year level, view Dewey Decimal and LC call numbers, and check real-time shelf copies.',
    badge: 'Students & Faculty',
    type: 'student'
  },
  {
    icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/>',
    title: 'Barcode & QR Scanner',
    desc: 'Use your phone camera to scan physical book barcodes or shelf labels, immediately pulling up catalog records, availability, and course reading links.',
    badge: 'Mobile Feature',
    type: 'student'
  },
  {
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    title: 'Counter Reservations',
    desc: 'Stage textbook reservations before visiting the library. Enjoy a guaranteed 48-hour counter pickup window before the book returns to general circulation.',
    badge: '48-Hr Hold',
    type: 'student'
  },
  {
    icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/>',
    title: 'Active Loans & Renewals',
    desc: 'Monitor real-time due date countdowns, request 1-tap loan renewals, and report lost items transparently without accumulating monetary cash debt.',
    badge: 'Loan Tracker',
    type: 'student'
  },
  {
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="3" height="3"/><rect x="14" y="7" width="3" height="3"/><rect x="7" y="14" width="3" height="3"/>',
    title: 'Digital Accession Pass',
    desc: 'Show your dynamic ISO/IEC 18004 2D QR pass at the entrance kiosk for rapid gate attendance and instant checkout validation at the counter.',
    badge: 'Gate & Borrow Pass',
    type: 'student'
  },
  {
    icon: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    title: 'In-App Loan Notifications',
    desc: 'Receive automated reminder notices for upcoming due dates, reservation arrival alerts, and clearance status updates without paper notices.',
    badge: 'Auto Alerts',
    type: 'student'
  },
  {
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    title: 'Sample Chapter Previews',
    desc: 'Preview textbook tables of contents, introduction chapters, and syllabus references directly inside the mobile app before picking up the physical copy.',
    badge: 'Academic Fair-Use',
    type: 'student'
  }
];

const DESKTOP_SERVICES = [
  {
    icon: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/>',
    title: 'Circulation Dashboard',
    desc: 'Real-time telemetry showing live daily attendance foot traffic, active loans, overdue items, reservation pickup queues, and collection health.',
    badge: 'Librarian Desk',
    type: 'admin'
  },
  {
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    title: 'Catalog & Accession Records',
    desc: 'Add, update, and manage book metadata with full Library of Congress Call Numbers, Dewey Decimal classifications, accession barcoding, and shelf coordinates.',
    badge: 'Admin Cataloging',
    type: 'admin'
  },
  {
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>',
    title: 'Borrow & Counter Checkout',
    desc: 'Rapid counter lending using barcode or QR scanners. Enforces 3 books / 3 days for students and 10 books / 30 days for faculty with 1-click execution.',
    badge: 'Rapid Checkout',
    type: 'admin'
  },
  {
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    title: 'Returns & Condition Inspection',
    desc: 'Process book check-ins with condition inspection (Good, Damaged, Lost). Implements official CDM zero cash-fine policy and physical duplicate replacement verifications.',
    badge: 'Check-In Desk',
    type: 'admin'
  },
  {
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    title: 'Reservation Fulfillment',
    desc: 'Review incoming mobile reservation queues, stage physical books behind the counter, dispatch ready alerts, and auto-expire unclaimed 48-hour holds.',
    badge: 'Pickup Staging',
    type: 'admin'
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    title: 'Patron Accounts & Clearance',
    desc: 'Manage student and faculty borrower profiles, track borrowing histories across academic institutes, and manage temporary circulation holds.',
    badge: 'Patron Management',
    type: 'admin'
  },
  {
    icon: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    title: 'Staff & Role Administration',
    desc: 'Role-based access control protecting administrative features. Differentiates privileges between Head Librarians and Circulation Desk Assistants.',
    badge: 'Security & Auth',
    type: 'admin'
  },
  {
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    title: 'Audit & Reports Export',
    desc: 'Export comprehensive CSV and PDF circulation transaction logs, inventory audits, and institutional clearance rosters for college administrative accreditation.',
    badge: 'Data Reporting',
    type: 'admin'
  }
];

function renderServices(services) {
  const container = document.getElementById('serviceGridContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="service-grid">
      ${services.map((svc, idx) => `
        <article class="service-card" data-reveal data-delay="${(idx % 4) + 1}">
          <span class="service-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${svc.icon}
            </svg>
          </span>
          <h3>${svc.title}</h3>
          <p>${svc.desc}</p>
          <span class="service-badge ${svc.type}">${svc.badge}</span>
        </article>
      `).join('')}
    </div>
  `;

  initScrollReveals();
}

window.switchServiceTab = function(tab) {
  const btnMobile = document.getElementById('svcTabMobile');
  const btnDesktop = document.getElementById('svcTabDesktop');

  if (tab === 'mobile') {
    btnMobile.classList.add('active');
    btnMobile.setAttribute('aria-selected', 'true');
    btnDesktop.classList.remove('active');
    btnDesktop.setAttribute('aria-selected', 'false');
    renderServices(MOBILE_SERVICES);
  } else {
    btnDesktop.classList.add('active');
    btnDesktop.setAttribute('aria-selected', 'true');
    btnMobile.classList.remove('active');
    btnMobile.setAttribute('aria-selected', 'false');
    renderServices(DESKTOP_SERVICES);
  }
};

/* ==========================================================================
   4. HOW IT WORKS TAB SWITCHER
   ========================================================================== */
const HOW_STUDENT_STEPS = [
  {
    num: 1,
    title: 'Install LibHub',
    desc: 'Open the official LibHub link on your phone and tap "Add to Home Screen" to install the app.'
  },
  {
    num: 2,
    title: 'Sign In',
    desc: 'Use your existing CDM student or faculty account to access your personalized library portal.'
  },
  {
    num: 3,
    title: 'Search & Reserve',
    desc: 'Browse 48 core curricular volumes, check shelf availability, and reserve books for 48-hr counter pickup.'
  },
  {
    num: 4,
    title: 'Show Your QR Pass',
    desc: 'Present your dynamic 2D QR pass at the entrance kiosk and circulation counter for instant checkout.'
  }
];

const HOW_STAFF_STEPS = [
  {
    num: 1,
    title: 'Launch Desktop Terminal',
    desc: 'Open the circulation desk portal on any authorized library computer using a desktop browser.'
  },
  {
    num: 2,
    title: 'Sign In with Staff Account',
    desc: 'Authenticate using your authorized Head Librarian or Circulation Desk Assistant credentials.'
  },
  {
    num: 3,
    title: 'Manage Circulation & Stacks',
    desc: 'Scan patron QR passes, process checkouts, fulfill reservations, and inspect returned volumes.'
  }
];

function renderHowSteps(steps, isStaff = false) {
  const container = document.getElementById('howStepsContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="steps ${isStaff ? 'steps-3' : ''} revealed">
      <div class="steps-connector" aria-hidden="true">
        <span class="steps-connector-fill" style="width: 100%;"></span>
      </div>
      ${steps.map((st, idx) => `
        <article class="step" data-reveal data-delay="${idx + 1}">
          <span class="step-num">${st.num}</span>
          <div class="step-body">
            <h3>${st.title}</h3>
            <p>${st.desc}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  initScrollReveals();
}

window.switchHowTab = function(role) {
  const btnStudent = document.getElementById('howTabStudent');
  const btnStaff = document.getElementById('howTabStaff');

  if (role === 'student') {
    btnStudent.classList.add('active');
    btnStaff.classList.remove('active');
    renderHowSteps(HOW_STUDENT_STEPS, false);
  } else {
    btnStaff.classList.add('active');
    btnStudent.classList.remove('active');
    renderHowSteps(HOW_STAFF_STEPS, true);
  }
};

/* ==========================================================================
   5. INSTALLATION GUIDE TABS
   ========================================================================== */
window.switchInstallTab = function(platform) {
  const tabs = ['android', 'ios', 'desktop'];

  tabs.forEach((p) => {
    const btn = document.getElementById('tab-' + p);
    const panel = document.getElementById('panel-' + p);
    if (btn && panel) {
      if (p === platform) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        panel.classList.add('active');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        panel.classList.remove('active');
      }
    }
  });
};

/* ==========================================================================
   6. FROM OUR SHELVES SHOWCASE ENGINE
   ========================================================================== */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function fetchBooks() {
  const apiUrl = (window.CDM_LIBHUB_CONFIG && window.CDM_LIBHUB_CONFIG.API_BOOKS_URL) || 'http://localhost:5002/api/books';
  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        allBooks = data;
      }
    }
  } catch (err) {
    console.log('Live backend unavailable, using curated curricular books dataset.');
  }

  renderShelvesShowcase();
}

function getShowcaseBooks(category) {
  if (!Array.isArray(allBooks) || allBooks.length === 0) {
    return [];
  }

  const catUpper = (category || 'ALL').toUpperCase();

  if (catUpper === 'ICS') {
    return allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('ICS')).slice(0, 8);
  }
  if (catUpper === 'ITE') {
    return allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('ITE')).slice(0, 8);
  }
  if (catUpper === 'IBE') {
    return allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('IBE')).slice(0, 8);
  }

  // 'ALL' category: stable selection of up to 8 books across all curricula
  const ics = allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('ICS'));
  const ite = allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('ITE'));
  const ibe = allBooks.filter((b) => (b.institute || b.category || '').toUpperCase().includes('IBE'));

  if (ics.length > 0 && ite.length > 0 && ibe.length > 0) {
    return [
      ...ics.slice(0, 3),
      ...ite.slice(0, 3),
      ...ibe.slice(0, 2)
    ];
  }

  return allBooks.slice(0, 8);
}

function renderShelvesShowcase() {
  const grid = document.getElementById('bookGrid');
  if (!grid) return;

  const books = getShowcaseBooks(activeInstitute);

  if (books.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 16px; color: #65716B;">
        <p>No books currently available in this category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = books.map((book, index) => {
    const titleEscaped = escapeHtml(book.title || 'Curricular Title');
    const authorEscaped = escapeHtml(book.author || 'Colegio de Montalban');
    const hasCover = Boolean(book.coverUrl && typeof book.coverUrl === 'string' && book.coverUrl.trim() !== '');

    const coverHtml = hasCover
      ? `
        <img
          src="${escapeHtml(book.coverUrl)}"
          alt="Cover of ${titleEscaped}"
          class="shelves-cover-img"
          loading="lazy"
          width="240"
          height="360"
          onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
        />
        <div class="shelves-cover-fallback" style="display: none;" aria-label="Cover placeholder for ${titleEscaped}">
          <div class="shelves-fallback-inner">
            <span class="shelves-fallback-tag">CDM Library</span>
            <span class="shelves-fallback-title">${titleEscaped}</span>
            <span class="shelves-fallback-author">${authorEscaped}</span>
          </div>
        </div>
      `
      : `
        <div class="shelves-cover-fallback" aria-label="Cover placeholder for ${titleEscaped}">
          <div class="shelves-fallback-inner">
            <span class="shelves-fallback-tag">CDM Library</span>
            <span class="shelves-fallback-title">${titleEscaped}</span>
            <span class="shelves-fallback-author">${authorEscaped}</span>
          </div>
        </div>
      `;

    return `
      <article class="shelves-item" style="--item-delay: ${index};" data-index="${index}">
        <div class="shelves-cover-wrap">
          ${coverHtml}
        </div>
        <h3 class="shelves-book-title">${titleEscaped}</h3>
        <p class="shelves-book-author">${authorEscaped}</p>
      </article>
    `;
  }).join('');
}

window.selectShelvesCategory = function(cat) {
  activeInstitute = cat;

  const tabs = document.querySelectorAll('.shelves-tab');
  tabs.forEach((tab) => {
    const isSelected = tab.getAttribute('data-category') === cat;
    tab.classList.toggle('active', isSelected);
    tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isSelected) {
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  renderShelvesShowcase();
};

function initShelvesNav() {
  const tabs = Array.from(document.querySelectorAll('.shelves-tab'));
  if (tabs.length === 0) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-category') || 'ALL';
      window.selectShelvesCategory(cat);
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        tabs[targetIndex].focus();
        const cat = tabs[targetIndex].getAttribute('data-category') || 'ALL';
        window.selectShelvesCategory(cat);
      }
    });
  });
}

function initShelvesMotion() {
  const section = document.getElementById('catalog');
  if (!section) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    // Keep content visible without animation
    return;
  }

  section.classList.add('shelves-anim-ready');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('shelves-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  });

  observer.observe(section);
}

function initShelvesFooterLink() {
  const link = document.getElementById('linkExploreFullCollection');
  if (link && window.CDM_LIBHUB_CONFIG && window.CDM_LIBHUB_CONFIG.MOBILE_APP_URL) {
    link.href = window.CDM_LIBHUB_CONFIG.MOBILE_APP_URL;
  }
}

// Backward-compatibility aliases
window.filterCatalogInstitute = window.selectShelvesCategory;
window.renderCatalog = renderShelvesShowcase;


/* ==========================================================================
   7. QUICK-VIEW MODAL FOR BOOK DETAILS
   ========================================================================== */
window.openBookModal = function(bookIdOrIsbn) {
  const modal = document.getElementById('bookModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const book = allBooks.find((b) => (b.id === bookIdOrIsbn || b.isbn === bookIdOrIsbn));
  if (!book) return;

  const copies = Number(book.availableCopies ?? book.available_copies ?? 0);
  const total = Number(book.totalCopies ?? book.total_copies ?? 5);
  const isAvail = copies > 0;
  const institute = book.institute || book.category || 'General';
  const yearLevel = book.yearLevel || book.year_level || 'Curricular';
  const semester = book.semester || 'Prescribed';
  const callNo = book.callNo || book.call_no || 'QA 76.S56';
  const shelf = book.shelfLocation || book.shelf_location || 'Stack 01-A';
  const abstract = book.abstract || book.synopsis || 'Official prescribed core curriculum reference at Colegio de Montalban.';

  content.innerHTML = `
    <div class="modal-badges">
      <span class="book-badge-institute">${institute}</span>
      <span class="filter-pill" style="padding: 3px 10px; font-size: 0.75rem; cursor: default;">${yearLevel} &bull; ${semester}</span>
      <span class="book-stock-badge ${isAvail ? 'available' : 'out'}">${isAvail ? `${copies} Copies Available` : 'All Borrowed'}</span>
    </div>

    <div>
      <h3 class="modal-book-title">${book.title}</h3>
      <p class="modal-book-author">by ${book.author}</p>
    </div>

    <div class="modal-info-grid">
      <div class="modal-info-item">
        <span>LC Call Number</span>
        <strong>${callNo}</strong>
      </div>
      <div class="modal-info-item">
        <span>Shelf Location</span>
        <strong>${shelf}</strong>
      </div>
      <div class="modal-info-item">
        <span>ISBN</span>
        <strong>${book.isbn || 'N/A'}</strong>
      </div>
      <div class="modal-info-item">
        <span>Inventory Status</span>
        <strong>${copies} of ${total} available</strong>
      </div>
    </div>

    <div>
      <span style="font-size: 0.72rem; font-weight: 700; color: var(--gray-soft); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Course Synopsis</span>
      <p class="modal-abstract">${abstract}</p>
    </div>

    <div class="modal-actions">
      <a href="${(window.CDM_LIBHUB_CONFIG && window.CDM_LIBHUB_CONFIG.MOBILE_APP_URL) || 'http://localhost:5173/mobile'}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
        Reserve in LibHub Mobile &rarr;
      </a>
      <button class="btn btn-outline btn-sm" onclick="closeBookModal()">Close</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeBookModal = function(event) {
  if (event && event.target && event.target.id !== 'bookModal' && !event.target.classList.contains('modal-close')) {
    return;
  }
  const modal = document.getElementById('bookModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookModal();
  }
});

/* ==========================================================================
   8. FAQ ACCORDION ENGINE
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close other items
        faqItems.forEach((other) => {
          if (other !== item) {
            const otherBtn = other.querySelector('.faq-question');
            const otherAns = other.querySelector('.faq-answer');
            if (otherBtn && otherAns) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAns.style.maxHeight = null;
            }
          }
        });

        // Toggle current item
        if (isExpanded) {
          question.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });
}

/* ==========================================================================
   9. INITIALIZATION ENTRY POINT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  renderServices(MOBILE_SERVICES);
  renderHowSteps(HOW_STUDENT_STEPS, false);
  initFaqAccordion();
  initShelvesNav();
  initShelvesMotion();
  initShelvesFooterLink();
  renderShelvesShowcase();
  fetchBooks();
});

