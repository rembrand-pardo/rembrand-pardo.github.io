/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

const translations = {
  en: {
    contact: "Contact",
    about: "About",
    qualifications: "Qualifications",
    service: "Services",
    intro: "Welcome to my intro video!",
    cookieMessage: "This website uses cookies and other tracking technologies to enhance your browsing experience and optimize the services provided.",
    acceptButton: "Accept",
    rejectButton: "Reject",
    resume: "Resume",

    //HomePage translation
    helloWorld: "Hello, World!",
    iAm: "I am",
    introText: "I am dedicated to helping teams, organizations, and businesses",
    changingWords: [
      "excel.",
      "thrive.",
      "work together.",
      "innovate.",
      "unite.",
      "transform.",
      "lead.",
      "optimize.",
      "evolve.",
      "achieve.",
      "streamline.",
      "succeed.",
      "develop strategies.",
      "empower.",
      "deliver.",
      "focus.",
      "change.",
      "improve.",
    ],
    learnMore: "Learn More",


    //Qualifications translations
    quoteText: "The future belongs to those who learn more skills and combine them in creative ways",
    quoteAuthor: "- Robert Greene",

    introductionText1: (
      "In today’s fast-paced world, technology has revolutionized how we learn, making skills acquisition, knowledge, and education more accessible than ever before. " +
      "I firmly believe that mastery is not an innate talent or gift, but the result of consistent, focused effort and relentless practice. The more time and energy one dedicates to honing a skill, the closer they move toward true expertise. " +
      "With discipline, dedication, and unwavering commitment, anyone can achieve mastery in their chosen field."
    ),
    
    introductionText2: (
      "This philosophy has been the foundation of my educational and professional journey. In addition to earning an <span class='highlight'>Associate’s degree in Business Management</span> and a <span class='highlight'>Bachelor’s degree in Computer Science with an emphasis on software development and management</span>, " +
      "I have also pursued a <span class='highlight'>minor in Mathematics</span>. Yet, my commitment to lifelong learning extends far beyond formal education. " +
      "I have continuously sought opportunities to expand my knowledge and skills by earning several certificates, recognized and endorsed by leading institutions such as the Project Management Institute (PMI), " +
      "the HR Certification Institute (HRCI), Continuing Professional Education (CPE), the Corporate Finance Institute (CFI), Atlassian, and many others. " +
      "These certifications required hundreds of hours of rigorous learning, hands-on practice, and professional development, deepening my expertise in areas closely aligned with my education: " +
      "management (project, product, program, team, and organizational leadership), business (administration, HR, recruitment, and office management), and technology (quality assurance, IT, web development, and software development)."
    ),

    qualificationsH2: "Education and Certificates",


    // card institutions translations
    card1Title: "Brigham Young University",
    card1Description: (
      <>
        <p className="expandable-card-p">
          Brigham Young University (BYU) is considered one of the top universities in the nation, with many rankings placing it among the best in the country:
        </p>
        <ul>
          <li>Wall Street Journal: Ranked BYU number 20 in the 2024 Best Colleges in America rankings, and number 1 for colleges most recommended by students and recent alums.</li>
          <li>Forbes: Ranked BYU number 1 for best financially healthy schools.</li>
          <li>Princeton: Ranked BYU number 1 for best college library.</li>
          <li>U.S. News: Ranked BYU number 3 for undergraduate accounting program, number 5 for master of accounting program, and number 21 for best value school.</li>
          <li>Milken Institute: Ranked BYU number 4 for best university for technology transfer.</li>
          <li>U.S. State Department: Ranked BYU number 3 for producer of U.S. Fulbright Scholars.</li>
        </ul>
      </>
    ),
    card1ButtonText: "BYU",
    card1ButtonLink: "https://www.byu.edu/",

    card2Title: "Salt Lake Community College",
    card2Description: (
      <>
        <p className="expandable-card-p">
          Salt Lake Community College (SLCC) is considered one of the best community colleges in Utah and the nation, and has been recognized for a number of achievements: 
        </p>
        <ul>
          <li>Rankings: SLCC was ranked sixth in the nation for associate degree production by Community College Week. Niche ranked SLCC third in Utah's best community colleges for 2025.</li>
          <li>Awards: SLCC has won NASPA awards, and a leader at the college was named one of USA Today's Women of the Year.</li>
          <li>Athletic teams: SLCC's athletic teams have achieved great success, including multiple teams being ranked number one in the NJCAA polls in 2022.</li>
        </ul>
      </>
    ),
    card2ButtonText: "SLCC",
    card2ButtonLink: "https://www.slcc.edu/",

    //About translations
    about_heading: "Where Passion Meets Purpose",

    aboutMeText1: (
      "I am driven by the synergy of people, business, and technology—three essential pillars that inspire my purpose and pursuit of impactful solutions. " +
      "My journey is fueled by relentless curiosity, a commitment to excellence, and a dedication to empowering others " + 
      "through innovative strategies and meaningful collaboration. Fluent in English, Spanish, and Catalan, I bring a global perspective to every challenge and project."
    ),

    aboutMeText2: (
      "Beyond my professional pursuits, I’m an avid learner and a lover of sports, music, movies, and acting. " +
      "These passions keep me grounded while inspiring the creativity and focus I bring to my work. Dive deeper into " + 
      "this page to uncover the passions, values, and aspirations that define me and guide my mission to create impactful solutions."
    ),

    myPassions: "My Passions",

    pardoFamilyTitle: "The Pardo Family's Coat of Arms",
    pardoFamilyDescription: (
      <>
        <div className="custom-description">
          <p>
          A legacy of balance and continuous growth, the Pardo family motto—'We seek the perfect balance and constant improvement of body, 
          mind, and spirit'—is more than a guiding principle; it is a philosophy I apply to everything I do. 
          This timeless wisdom inspires my approach to business, technology, and leadership, driving me to deliver meaningful results and impactful solutions. 
          </p>
          <p>
          In every project I undertake, I strive to align vision with execution and innovation with practicality. By embracing a mindset of constant improvement, 
          I approach challenges with focus, creativity, and determination, always seeking the most effective path forward. 
          </p>
          <p>
          This commitment to balance and growth motivates me to empower teams, refine strategies, and create systems that drive success. 
          It’s this dedication to excellence and continuous progress that shapes how I approach every opportunity to deliver value.
          </p>
        </div>
      </>
    ),
    pardoFamilyMottoBadge: "Motto",
    calculatedRisksTitle: "Calculated Risks, Boundless Adventures",
    calculatedRisksDescription: (
      <>
        <div className="custom-description">
          <p>
          Adventure and extreme sports are more than just passions—they are a reminder of the value in embracing calculated risks. 
          From bungee jumping to skydiving, I push myself to take on challenges that require careful planning and mental fortitude. 
          Despite the fear that comes with these experiences, I’ve learned to face it head-on, trusting in preparation and perseverance to guide me through. 
          </p>
          <p>
          This mindset mirrors how I approach every project and leadership opportunity. I believe in taking thoughtful, measured risks to drive innovation and achieve results. 
          It's about moving forward with confidence, knowing that calculated risks—when approached strategically—can lead to great rewards.
          </p>
        </div>
      </>
    ),
    calculatedRisksBadge: "Embracing Fear, Pursuing Excellence",
    steppingIntoRolesTitle: "Stepping Into New Roles",
    steppingIntoRolesDescription:(
      <>
        <div className="custom-description">
          <p>
          Getting out of my comfort zone has led me to discover a passion I never expected—<a href="https://www.imdb.com/name/nm11523185/" target="_blank" rel="noopener noreferrer">acting</a>. The challenges of stepping onto a stage, embracing new characters, 
          and diving into diverse scripts have given me a deeper understanding of the power of expression, creativity, and storytelling. 
          </p>
          <p>
          I’ve had the privilege of being part of various projects, from smaller productions to larger, more complex ones, each offering unique experiences and lessons. 
          These opportunities have not only enhanced my personal growth but also shaped my professional mindset. They’ve taught me the importance of adaptability, 
          collaboration, and commitment—qualities I bring to every aspect of my work. 
          </p>
          <p>
          Acting reminds me that sometimes, the best opportunities for growth come when we take risks and venture beyond the familiar.
          </p>
        </div>
      </> 
    ),
    steppingIntoRolesBadge: "Beyond Comfort, Into Passion",
    endlessLearningTitle: "Endless Learning, Timeless Wisdom",
    endlessLearningDescription:(
      <>
        <div className="custom-description">
          <p>
          Beyond formal education, I believe in the power of continuous learning, and books have been a key source of inspiration and growth. 
          There are several works I consider invaluable in shaping my approach to leadership, business, and personal development. 
          These books have provided me with profound insights into human behavior, strategy, and effective communication, all of which I apply daily in my work. 
          </p>
          <p>
          They have taught me the importance of adapting to change, building strong relationships, and making informed decisions in both personal and professional settings. 
          This commitment to self-education, combined with my academic background, enables me to offer innovative, well-rounded solutions to the challenges faced by those I work with. 
          </p>
          <p>
          Each page turned is a new lesson learned, and I carry these lessons with me as I strive to create lasting impact in every endeavor.
          </p>
        </div>
      </>
    ),
    endlessLearningBadge: "Learning from Every Page",

    aboutEndPage: (
      <>
        <p>
        Discover how I can help you or your organization achieve meaningful results. Explore my <a href="/qualifications" rel="noopener noreferrer">qualifications</a> and <a href="/service" rel="noopener noreferrer">services</a>, or <a href="/contact" target="_blank" rel="noopener noreferrer">contact</a> me directly to connect and learn more.
        </p>
      </>
    ),

    //404 page
    notFound: "Page Not Found",
    notFoundMobile: "404\nPage Not Found",
    notFoundMessage: "The page you are looking for does not exist.",
    notFoundLink: "Let's go back!",

    //Footer
    allRightsReserved: "All rights reserved.",

    //Contact translations
    letsconnect: "Let's Connect",
    contactInqueries: "Have any questions or are you interested in learning more?",
    contactIamHere: "I'm here to help—whether you want to collaborate, explore services, or just reach out, feel free to get in touch.",
    sendAnotherMessage: "Send another message",
    contactSendButton: "Send",
    contactOtherChannels: "You can also connect through these channels:",
    contactNamePlaceholder: "First Name",
    contactLastNamePlaceholder: "Last Name",
    contactEmailPlaceholder: "Email",
    contactMessagePlaceholder: "Your Message",
    contactSuccessMessage: "Thank you for your message. I will be in touch as soon as possible.",
    contactErrorMessage: "Failed to send the message, please try again.",
    contactRequiredName: "First Name is required",
    contactRequiredLastName: "Last Name is required",
    contactRequiredEmail: "Valid Emial is required",
    contactRequiredMessage: "Message is required",


    //Resume translations
    placeholders1: "Business analytics",
    placeholders2: "Project management",
    placeholders3: "Supervisor",
    placeholders4: "Office manager",
    placeholders5: "Product management",
    placeholders6: "Office adminstration",
    placeholders7: "Agile",
    placeholders8: "PMP",

    resumeGrammarCheckService: "Grammar check service is currently unavailable. Please try again later.",

    resumeCardTitleBusiness: "This is a title for the business card",
    resumeCardContentBusiness: "This card contains info about business and what my business resume contains",
    resumeCardTitleHR: "This is a title for the hr card",
    resumeCardContentHR: "This card contains info about hr and what my hr resume contains",
    resumeCardTitleManagement: "This is a title for the management card",
    resumeCardContentManagement: "This card contains info about management and what my management resume contains",
    resumeCardTitlePR: "This is a title for the public relations card",
    resumeCardContentPR: "This card contains info about PR and what my PR resume contains",
    resumeCardTitleSDET: "This is a title for the sdet card",
    resumeCardContentSDET: "This card contains info about sdet and what my sdet resume contains",

    resumeCardTitleGeneral: "Card for",
    resumeCardContentGeneral: "The content is related to",

    resumeCardTitleGeneric: "Generic Card",
    resumeCardContentGeneric: "Here is a general description since nothing matched your search.",

    resumeCardSearchHeading: "Knowledge & Expertise at Your Service",
    resumeCardSearchYes: "Yes",
    resumeCardSearchNo: "No",

    resumeCheckingGrammar: "Checking grammar...",
    resumeLanguageTool: "Powered by LanguageTool",
    resumeDidYouMean: "Did you mean:",
    resumeRejectSuggestionMessage: "Please find the closest matching result below, or feel free to search again.",
    resumeViewResumeCardButton: "View Resume",

    resumeSubheading2: "Discover my strong educational foundation, strategic problem-solving abilities, and leadership capabilities across multiple industries",
    resumeTopTextSearchBar: "Search skills or keywords to view my most relevant tailored resume",
  
    resumeTabBusiness: "Business",
    resumeTabHRRecruiter: "HR Recruiter",
    resumeTabManager: "Manager",
    resumeTabAnalyst: "Analyst",
    resumeTabSDET: "SDET",

    resumeCardTitle1: "Gene Sequence",
    resumeCardDescription1: "Developed two versions of a dynamic programming algorithm to determine the minimal cost of aligning gene sequences and extract an optimal alignment.",
  
    resumeCardTitle2: "Traveling Salesman",
    resumeCardDescription2: "Implemented a branch-and-bound algorithm to efficiently solve the Traveling Salesman Problem (TSP).",
  
    resumeCardTitle3: "Proxy Design",
    resumeCardDescription3: "Designed and implemented the proxy design pattern, which acts as an intermediary to control access to an original object.",
  
    resumeCardTitle4: "Dijkstra's Algorithm",
    resumeCardDescription4: "Implemented Dijkstra’s algorithm to compute the shortest paths or minimal cost between nodes in a graph, applicable to road networks and routing.",
  
    resumeCardTitle5: "Convex Hull",
    resumeCardDescription5: "Developed a divide-and-conquer algorithm that recursively decomposes a problem into subproblems until reaching a solvable state.",
  
    resumeCardTitle6: "Email Sender",
    resumeCardDescription6: "Built an AWS Lambda function for sending emails via AWS Simple Email Service (SES), utilizing IAM roles for security permissions.",
  
    resumeCardTitle7: "Factory Design",
    resumeCardDescription7: "Implemented the Factory design pattern, allowing the creation of objects dynamically through a centralized factory method.",
  
    resumeCardTitle8: "Social Networking App",
    resumeCardDescription8: "Developed a social networking app enabling users to follow each other, post updates, and interact. Built using Java, AWS Lambda, DynamoDB, and Android.",
  
    resumeCardTitle9: "Family Map",
    resumeCardDescription9: "Designed an app providing a geographical visualization of family history, utilizing Object-Oriented Design, UI Programming, and external API integration.",
  
    resumeCardTitle10: "Fermat and Miller-Rabin",
    resumeCardDescription10: "Implemented modular arithmetic and randomized algorithms for primality testing, including the Fermat and Miller-Rabin tests.",
  
    resumeCardTitle11: "User Authentication System",
    resumeCardDescription11: "Developed a web application for user authentication with usernames and passwords, built using Vue.js, Node.js, Express, and MongoDB.",
  
    

    //Service translations
    serviceMainHeading: (
      <>
        Empowering Success: <br /> Unleashing Potential, Building Leaders, Streamlining Technology, and Inspiring Change.
      </>
    ),
    serviceSubheading: "I am dedicated to unlocking the full potential of your business, empowering your teams, " + 
    "streamlining your operations, and inspiring your audiences. " +
    "My comprehensive services are designed to transform challenges into opportunities, " +
    "fostering growth and success in every endeavor.",

    serviceCenterText: "Achieving business success requires the right strategies, strong leadership, and effective management. " + 
    "My services are designed to help businesses and professionals excel by providing expert guidance in business strategy, " +
    "leadership development, and management solutions across various industries, including technology. " +
    "Whether you need support in optimizing operations, strengthening leadership, or driving business initiatives, " +
    "I offer tailored solutions to meet your unique needs. Explore the categories below to see how I can help you achieve your goals.",

    serviceManagementBeamTitle: "COMPREHENSIVE TECHNOLOGY MANAGEMENT SERVICES",
    serviceManagementBeamDescription: "Enhance your operations with customized technology management solutions. " +
    "With a wealth of experience in software development, programming, software quality control, " +
    "and data management, I provide comprehensive project, program, and product management services. " +
    "My expertise extends to IT management, software development leadership, data analytics, and engineering management. " +
    "I am dedicated to helping organizations effectively manage technology, software, and operational projects of all sizes.",
    serviceManagementBeamBadge:  "Management",

    serviceBusinessBeamTitle: "TRANSFORM YOUR BUSINESS WITH STRATEGIC CONSULTING",
    serviceBusinessBeamDescription: "Elevate your business performance with comprehensive consulting services designed to drive success. " +
    "With a wealth of knowledge in business development, business strategy, HR and recruitment, " +
    "administrative operations, supervisory roles, and executive-level management consulting, " +
    "I aim to provide valuable insights and strategies to enhance your business operations and team dynamics.",
    serviceBusinessBeamBadge:  "Business",

    serviceLeadershipBeamTitle: "UNLOCK LEADERSHIP POTENTIAL AND BUILD STRONGER TEAMS",
    serviceLeadershipBeamDescription: "Empower your team with my leadership development and team building services. " +
    "I provide strategies for leadership, team unity, workgroup alignment, and employee engagement. " +
    "My customized leadership programs and collaboration initiatives aim to nurture strong leaders and cohesive teams.",
    serviceLeadershipBeamBadge: "Leadership Training",

    serviceSpeakingBeamTitle: "INSPIRE AND ENGAGE THROUGH POWERFUL SPEAKING",
    serviceSpeakingBeamDescription: "Inspire your audience with dynamic speaking engagements. I offer keynote, motivational, and event speaking services, " +
    "each tailored to align with your unique needs or event themes. My goal is to captivate and empower your audience, leaving a lasting impact.",
    serviceSpeakingBeamBadge: "Public Speaking",

    serviceTrioEndHeadingMobile: "Optimizing Business, Leveraging Technology, Empowering People",

    serviceTrioEndText: (
      <>
        My services and strategies focus on three core pillars that drive success in today’s evolving industries—business, technology, and people.
        Strong business management ensures efficiency and growth, technology enhances decision-making and innovation, and people are the foundation 
        of every thriving organization. By aligning these key elements, I help businesses navigate challenges, strengthen leadership,
        and optimize operations. Let’s work together to build a stronger future for your business. <a href="/contact" rel="noopener noreferrer" className="serviceTrioContactLink">Contact</a> me today to explore how we can collaborate.
      </>
    ),

    serviceTabBusinessTitle: "Business",
    serviceTabBusinessValue: "Business product",
    serviceTabBusinessContent: "Business Tab",

    serviceTabTechnology: "Technology",
    serviceTabTechnologyValue: "Technology product",
    serviceTabTechnologyContent: "Technology Tab",

    serviceTabLeadership: "Leadership",
    serviceTabLeadershipValue: "Leadership product",
    serviceTabLeadershipContent: "Leadership Tab",

    serviceTabSpeaking: "Speaking",
    serviceTabSpeakingValue: "Speaking product",
    serviceTabSpeakingContent: "Speaking Tab",

    serviceHeroLeadershipCard: "Team Building Leadership",
    serviceHeroManagementCard: "Management Services",
    serviceHeroBusinessCard: "Business Cunsulting Services",
    serviceHeroSpeakingCard2: "Public Speaking Services 2",
    serviceHeroSpeakingCard3: "Public Speaking Services 3",
    serviceHeroManagementCard2: "Management Services 2",
    serviceHeroLeadershipCard2:  "Team Building",
    serviceHeroManagementCard3: "Management Services 3",
    serviceHeroBusinessCard2: "Business Cunsulting Services 2",
    serviceHeroSpeakingCard4: "Public Speaking Services 4",

  },
  es: {
    contact: "Contáctame",
    about: "Sobre mí",
    qualifications: "Cualificaciones",
    service: "Servicios",
    intro: "¡Bienvenido a mi video de introducción!",
    cookieMessage: "Esta web utiliza cookies y otras tecnologías de seguimiento para mejorar su experiencia de navegación y optimizar los servicios proporcionados.",
    acceptButton: "Aceptar",
    rejectButton: "Rechazar",
    resume: "CV",

    helloWorld: "¡Hola, Mundo!",
    iAm: "Soy",
    introText: "Me dedico a ayudar a equipos, organizaciones y negocios",
    changingWords: [
      "sobresalir.",
      "prosperar.",
      "trabajar juntos.",
      "innovar.",
      "unir.",
      "transformar.",
      "liderar.",
      "optimizar.",
      "evolucionar.",
      "lograr.",
      "racionalizar.",
      "tener éxito.",
      "desarrollar estrategias.",
      "empoderar.",
      "entregar.",
      "enfocar.",
      "cambiar.",
      "mejorar.",
    ],
    learnMore: "Descrubre más",

    //translation for body of qualifications
    quoteText: "El futuro pertenece a aquellos que aprenden más habilidades y las combinan de manera creativa",
    quoteAuthor: "- Robert Greene",

    introductionText1: (
      "En el mundo acelerado de hoy, la tecnología ha revolucionado cómo aprendemos, haciendo que la adquisición de habilidades, el conocimiento y la educación sean más accesibles que nunca. " +
      "Creo firmemente que la maestría no es un talento o un don innato, sino el resultado de un esfuerzo constante y enfocado y una práctica implacable. Cuanto más tiempo y energía se dedica a perfeccionar una habilidad, más cerca se está de la verdadera experiencia. " +
      "Con disciplina, dedicación y un compromiso inquebrantable, cualquiera puede lograr la maestría en su campo elegido."
    ),

    introductionText2: (
      "Esta filosofía ha sido la base de mi trayectoria educativa y profesional. Además de obtener un título de Asociado en Gestión Empresarial y un título de Licenciatura en Informática con énfasis en desarrollo y gestión de software, " +
      "también he seguido un menor en Matemáticas. Sin embargo, mi compromiso con el aprendizaje continuo va mucho más allá de la educación formal. " +
      "He buscado continuamente oportunidades para ampliar mis conocimientos y habilidades obteniendo varios certificados, reconocidos y respaldados por instituciones líderes como el Project Management Institute (PMI), " +
      "el HR Certification Institute (HRCI), la Educación Profesional Continua (CPE), el Corporate Finance Institute (CFI), Atlassian y muchos otros. " +
      "Estas certificaciones involucraron cientos de horas de aprendizaje riguroso, práctica práctica y desarrollo profesional, lo que me permitió profundizar en mi experiencia en áreas estrechamente alineadas con mi educación y pasiones: " +
      "gestión (proyecto, producto, programa, liderazgo de equipo y organizacional), negocios (administración, recursos humanos, reclutamiento y gestión de oficinas), y tecnología (aseguramiento de calidad, TI, desarrollo web y desarrollo de software)."
    ),

    qualificationsH2: "Educación y Certificados",


    //Card translations
    card1Title: "Universidad Brigham Young",
    card1Description: (
      <>
        <p className="expandable-card-p">
          La Universidad Brigham Young (BYU) es considerada una de las mejores universidades del país, con muchos rankings que la colocan entre las mejores:
        </p>
        <ul>
          <li>Wall Street Journal: Clasificó a BYU en el número 20 en los rankings de las mejores universidades en América en 2024, y número 1 para las universidades más recomendadas por estudiantes y exalumnos recientes.</li>
          <li>Forbes: Clasificó a BYU en el número 1 como las mejores escuelas financieramente saludables.</li>
          <li>Princeton: Clasificó a BYU en el número 1 por la mejor biblioteca universitaria.</li>
          <li>U.S. News: Clasificó a BYU en el número 3 para el programa de contabilidad de pregrado, número 5 para el programa de maestría en contabilidad, y número 21 para la mejor escuela en relación calidad-precio.</li>
          <li>Milken Institute: Clasificó a BYU en el número 4 como la mejor universidad para la transferencia de tecnología.</li>
          <li>Departamento de Estado de EE. UU.: Clasificó a BYU en el número 3 como productor de becarios Fulbright de EE. UU.</li>
        </ul>
      </>
    ),
    card1ButtonText: "BYU",
    card1ButtonLink: "https://www.byu.edu/",

    card2Title: "Salt Lake Community College",
    card2Description: (
      <>
        <p className="expandable-card-p">
          El Salt Lake Community College (SLCC) es considerado uno de los mejores colegios comunitarios en Utah y en el país, y ha sido reconocido por una serie de logros:
        </p>
        <ul>
          <li>Clasificaciones: SLCC fue clasificado sexto en el país por producción de títulos asociados por Community College Week. Niche clasificó a SLCC en tercer lugar en las mejores universidades comunitarias de Utah para 2025.</li>
          <li>Premios: SLCC ha ganado premios NASPA, y un líder en el colegio fue nombrado una de las Mujeres del Año de USA Today.</li>
          <li>Equipos atléticos: Los equipos atléticos de SLCC han logrado un gran éxito, incluidos múltiples equipos que fueron clasificados en el número uno en las encuestas NJCAA en 2022.</li>
        </ul>
      </>
    ),
    card2ButtonText: "SLCC",
    card2ButtonLink: "https://www.slcc.edu/",

    //About Page transaltions
    about_heading: "Donde la Pasión se Encuentra con el Propósito",

    aboutMeText1: (
      "Estoy impulsado por la sinergia entre las personas, los negocios y la tecnología, tres pilares esenciales que inspiran mi propósito y mi búsqueda de soluciones impactantes. " +
      "Mi camino está alimentado por una curiosidad incansable, un compromiso con la excelencia y una dedicación a empoderar a otros " +
      "a través de estrategias innovadoras y una colaboración significativa. Con fluidez en inglés, español y catalán, aporto una perspectiva " +
      " global a cada desafío y proyecto."
    ),

    aboutMeText2: (
      "Más allá de mis actividades profesionales, soy un aprendiz apasionado y amante de los deportes, la música, el cine y la actuación. " +
      "Estas pasiones me mantienen con los pies en la tierra mientras inspiran la creatividad y el enfoque que aporto a mi trabajo. Profundiza " + 
      "en esta página para descubrir las pasiones, valores y aspiraciones que me definen y guían mi misión de crear soluciones impactantes."
    ),

    myPassions: "Mis Pasiones",

    pardoFamilyTitle: "El Escudo de la Familia Pardo",
    pardoFamilyDescription: (
      <>
        <div className="custom-description">
          <p>
          Un legado de equilibrio y crecimiento continuo, el lema de la familia Pardo—'Buscamos el equilibrio perfecto y la mejora constante del cuerpo, 
          la mente y el espíritu'—es más que un principio guía; es una filosofía que aplico en todo lo que hago. 
          Esta sabiduría atemporal inspira mi enfoque en los negocios, la tecnología y el liderazgo, impulsándome a ofrecer resultados significativos y soluciones impactantes. 
          </p>
          <p>
          En cada proyecto que emprendo, me esfuerzo por alinear la visión con la ejecución y la innovación con la practicidad. Al adoptar una mentalidad de mejora constante, 
          enfrento los desafíos con enfoque, creatividad y determinación, siempre buscando el camino más efectivo hacia adelante. 
          </p>
          <p>
          Este compromiso con el equilibrio y el crecimiento me motiva a empoderar equipos, refinar estrategias y crear sistemas que impulsen el éxito. 
          Es esta dedicación a la excelencia y el progreso continuo lo que da forma a mi enfoque en cada oportunidad para entregar valor.
          </p>
        </div>
      </>
    ),
    pardoFamilyMottoBadge: "Lema",
    calculatedRisksTitle: "Riesgos Calculados, Aventuras Sin Límites",
    calculatedRisksDescription: (
      <>
        <div className="custom-description">
          <p>
          La aventura y los deportes extremos son más que pasiones; son un recordatorio del valor de abrazar los riesgos calculados. 
          Desde el puenting hasta el paracaidismo, me esfuerzo por asumir desafíos que requieren planificación cuidadosa y fortaleza mental. 
          A pesar del miedo que conllevan estas experiencias, he aprendido a enfrentarlo de frente, confiando en la preparación y la perseverancia para guiarme a través de ellos. 
          </p>
          <p>
          Esta mentalidad refleja cómo enfrento cada proyecto y oportunidad de liderazgo. Creo en asumir riesgos pensados y medidos para impulsar la innovación y lograr resultados. 
          Se trata de avanzar con confianza, sabiendo que los riesgos calculados—cuando se abordan de manera estratégica—pueden llevar a grandes recompensas.
          </p>
        </div>
      </>
    ),
    calculatedRisksBadge: "Superando el Miedo, Buscando la Excelencia",
    steppingIntoRolesTitle: "Adentrándome en Nuevos Roles",
    steppingIntoRolesDescription:(
      <>
        <div className="custom-description">
          <p>
          Salir de mi zona de confort me ha llevado a descubrir una pasión que nunca esperé: <a href="https://www.imdb.com/name/nm11523185/" target="_blank" rel="noopener noreferrer">la actuación</a>. Los desafíos de subir a un escenario, abrazar nuevos personajes, 
          y sumergirme en diversos guiones me han dado una comprensión más profunda del poder de la expresión, la creatividad y la narración. 
          </p>
          <p>
          He tenido el privilegio de participar en varios proyectos, desde producciones más pequeñas hasta otras más grandes y complejas, cada una ofreciendo experiencias y lecciones únicas. 
          Estas oportunidades no solo han potenciado mi crecimiento personal, sino que también han moldeado mi mentalidad profesional. Me han enseñado la importancia de la adaptabilidad, 
          la colaboración y el compromiso—cualidades que aporto a todos los aspectos de mi trabajo. 
          </p>
          <p>
          La actuación me recuerda que, a veces, las mejores oportunidades de crecimiento surgen cuando tomamos riesgos y nos aventuramos más allá de lo familiar.
          </p>
        </div>
      </> 
    ),
    steppingIntoRolesBadge: "Más Allá de la Comodidad, Hacia la Pasión",
    endlessLearningTitle: "Aprendizaje Continuo, Sabiduría Atemporal",
    endlessLearningDescription:(
      <>
        <div className="custom-description">
          <p>
          Más allá de la educación formal, creo en el poder del aprendizaje continuo, y los libros han sido una fuente clave de inspiración y crecimiento. 
          Hay varias obras que considero invaluable en la formación de mi enfoque sobre liderazgo, negocios y desarrollo personal. 
          Estos libros me han proporcionado profundas ideas sobre el comportamiento humano, la estrategia y la comunicación efectiva, todas las cuales aplico diariamente en mi trabajo. 
          </p>
          <p>
          Me han enseñado la importancia de adaptarse al cambio, construir relaciones sólidas y tomar decisiones informadas en los ámbitos personal y profesional. 
          Este compromiso con la autoeducación, combinado con mi formación académica, me permite ofrecer soluciones innovadoras y bien fundamentadas a los desafíos con los que me enfrento. 
          </p>
          <p>
          Cada página vuelta es una nueva lección aprendida, y llevo esas lecciones conmigo mientras me esfuerzo por crear un impacto duradero en cada empresa.
          </p>
        </div>
      </>
    ),
    endlessLearningBadge: "Aprendiendo de Cada Página",

    aboutEndPage: (
      <>
        <p>
          Descubre cómo puedo ayudarte a ti o a tu organización a lograr resultados impactantes. No dudes en explorar mis <a href="/service" target="_blank" rel="noopener noreferrer">servicios</a> o <a href="/contact" target="_blank" rel="noopener noreferrer">contactarme</a> directamente para conectar y saber más.
        </p>
      </>
    ),


    //404 page
    notFound: "Página No Encontrada",
    notFoundMobile: "404\nPágina no encontrada",
    notFoundMessage: "La página que estás buscando no existe.",
    notFoundLink: "¡Volvamos atrás!",

    //Footer
    allRightsReserved: "Todos los derechos reservados.",

    //Contact
    letsconnect: "Conectemos",
    contactInqueries: "¿Tienes alguna pregunta o estás interesado en saber más?",
    contactIamHere: "Estoy aquí para ayudar: ya sea que desees colaborar, explorar servicios o simplemente ponerte en contacto, no dudes en hacerlo.",
    sendAnotherMessage: "Enviar otro mensaje",
    contactSendButton: "Enviar",
    contactOtherChannels: "También puedes conectarte a través de estos canales:",
    contactNamePlaceholder: "Nombre",
    contactLastNamePlaceholder: "Apellidos",
    contactEmailPlaceholder: "Correo electrónico",
    contactMessagePlaceholder: "Tu mensaje",
    contactSuccessMessage: "Gracias por tu mensaje. Estaré en contacto lo antes posible.",
    contactErrorMessage: "Error al enviar el mensaje, por favor intenta de nuevo.",
    contactRequiredName: "El nombre es obligatorio.",
    contactRequiredLastName: "Los apellidos son obligatorios.",
    contactRequiredEmail: "Se requiere un correo electrónico válido.",
    contactRequiredMessage: "El mensaje es obligatorio.",


    //Resume
    placeholders1: "Análisis de negocios", 
    placeholders2: "Gestión de proyectos",
    placeholders3: "Supervisor",
    placeholders4: "Gerente de oficina",
    placeholders5: "Gestión de productos",
    placeholders6: "Administración de oficina",
    placeholders7: "Ágil",
    placeholders8: "Profesional en Gestión de Proyectos",

    resumeGrammarCheckService: "El servicio de corrección gramatical no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
    
    resumeCardTitleBusiness: "Este es un título para la tarjeta de negocios",
    resumeCardContentBusiness: "Esta tarjeta contiene información sobre negocios y lo que contiene mi currículum de negocios",
    resumeCardTitleHR: "Este es un título para la tarjeta de recursos humanos",
    resumeCardContentHR: "Esta tarjeta contiene información sobre recursos humanos y lo que contiene mi currículum de recursos humanos",
    resumeCardTitleManagement: "Este es un título para la tarjeta de gestión",
    resumeCardContentManagement: "Esta tarjeta contiene información sobre gestión y lo que contiene mi currículum de gestión",
    resumeCardTitlePR: "Este es un título para la tarjeta de relaciones públicas",
    resumeCardContentPR: "Esta tarjeta contiene información sobre relaciones públicas y lo que contiene mi currículum de relaciones públicas",
    resumeCardTitleSDET: "Este es un título para la tarjeta de sdet",
    resumeCardContentSDET: "Esta tarjeta contiene información sobre sdet y lo que contiene mi currículum de sdet",

    resumeCardTitleGeneral: "Tarjeta para",
    resumeCardContentGeneral: "El contenido está relacionado con",

    resumeCardTitleGeneric: "Tarjeta genérica",
    resumeCardContentGeneric: "Aquí hay una descripción general ya que nada coincidió con tu búsqueda.",
    
    resumeCardSearchHeading: "Conocimiento y experiencia a su servicio",
    resumeCardSearchYes: "Sí",
    resumeCardSearchNo: "No",

    resumeCheckingGrammar: "Comprobando gramática...",
    resumeLanguageTool: "Con tecnología de LanguageTool",
    resumeDidYouMean: "¿Quisiste decir:",
    resumeRejectSuggestionMessage: "Por favor, encuentra el resultado más cercano a continuación, o si lo prefieres, busca de nuevo.",
    resumeViewResumeCardButton: "Ver currículum",

    resumeSubheading2: "Descubre mi sólida formación académica, mi capacidad estratégica para resolver problemas y mis habilidades de liderazgo en múltiples sectores",
    resumeTopTextSearchBar: "Busca habilidades o palabras clave para ver el currículum más relevante",

    resumeTabBusiness: "Negocios",
    resumeTabHRRecruiter: "Reclutador",
    resumeTabManager: "Gerente",
    resumeTabAnalyst: "Analista",
    resumeTabSDET: "Ingeniero",

    resumeCardTitle1: "Secuencia Genética",
    resumeCardDescription1: "Desarrolladas dos versiones de un algoritmo de programación dinámica para determinar el coste mínimo de alineación de secuencias genéticas y extraer una alineación óptima.",
  
    resumeCardTitle2: "Viajante de Comercio",
    resumeCardDescription2: "Implementado un algoritmo de ramificación y acotación para resolver de manera eficiente el Problema del Viajante de Comercio (TSP).",
  
    resumeCardTitle3: "Diseño Proxy",
    resumeCardDescription3: "Diseñado e implementado el patrón de diseño proxy, que actúa como intermediario para controlar el acceso a un objeto original.",
  
    resumeCardTitle4: "Algoritmo de Dijkstra",
    resumeCardDescription4: "Implementado el algoritmo de Dijkstra para calcular las rutas más cortas o de menor coste entre nodos en un grafo, aplicable a redes viales y de enrutamiento.",
  
    resumeCardTitle5: "Envolvente Convexa",
    resumeCardDescription5: "Desarrollado un algoritmo de divide y vencerás que descompone un problema en subproblemas hasta alcanzar un estado resoluble.",
  
    resumeCardTitle6: "Envío de Emails",
    resumeCardDescription6: "Creada una función AWS Lambda para el envío de correos electrónicos mediante AWS Simple Email Service (SES), utilizando roles IAM para permisos de seguridad.",
  
    resumeCardTitle7: "Diseño de Fábrica",
    resumeCardDescription7: "Implementado el patrón de diseño Factory, que permite la creación dinámica de objetos a través de un método centralizado de fábrica.",
  
    resumeCardTitle8: "Aplicación de Redes Sociales",
    resumeCardDescription8: "Desarrollada una aplicación de redes sociales que permite seguir usuarios, publicar actualizaciones e interactuar. Construida con Java, AWS Lambda, DynamoDB y Android.",
  
    resumeCardTitle9: "Mapa Familiar",
    resumeCardDescription9: "Diseñada una aplicación que proporciona una visualización geográfica del historial familiar, utilizando Diseño Orientado a Objetos, Programación UI e integración de API externas.",
  
    resumeCardTitle10: "Fermat y Miller-Rabin",
    resumeCardDescription10: "Implementados algoritmos de aritmética modular y algoritmos aleatorios para pruebas de primalidad, incluyendo los tests de Fermat y Miller-Rabin.",
  
    resumeCardTitle11: "Sistema de Autenticación de Usuarios",
    resumeCardDescription11: "Desarrollada una aplicación web para la autenticación de usuarios con nombres de usuario y contraseñas, utilizando Vue.js, Node.js, Express y MongoDB.",
  

    //Service translations
    serviceMainHeading: (
      <>
        Empoderando el éxito: <br /> Desatando el potencial, formando líderes, optimizando la tecnología e inspirando el cambio.
      </>
    ),
    serviceSubheading: "Estoy comprometido a desbloquear todo el potencial de tu negocio, empoderar a tus equipos, " +
    "optimizar tus operaciones e inspirar a tu audiencia. Mis servicios integrales están diseñados para convertir desafíos en oportunidades, " +
    "impulsando el crecimiento y el éxito en cada proyecto.",

    serviceCenterText: "Lograr el éxito empresarial requiere las estrategias adecuadas, un liderazgo sólido y una gestión eficaz. " +
    "Mis servicios están diseñados para ayudar a empresas y profesionales a sobresalir, ofreciendo asesoramiento experto en estrategia empresarial, " + 
    "desarrollo de liderazgo y soluciones de gestión en diversas industrias, incluida la tecnología. Ya sea que necesites apoyo para optimizar operaciones, " +
    "fortalecer el liderazgo o impulsar iniciativas empresariales, ofrezco soluciones personalizadas para adaptarme a tus necesidades. " +
    "Explora las categorías a continuación para descubrir cómo puedo ayudarte a alcanzar tus objetivos.",
  
    serviceManagementBeamTitle: "SERVICIOS INTEGRALES DE GESTIÓN TECNOLÓGICA",
    serviceManagementBeamDescription: "Mejora tus operaciones con soluciones personalizadas de gestión tecnológica. " +
    "Con una amplia experiencia en desarrollo de software, programación, control de calidad de software " +
    "y gestión de datos, ofrezco servicios integrales de gestión de proyectos, programas y productos. " +
    "Mi experiencia abarca la gestión de TI, el liderazgo en desarrollo de software, el análisis de datos y la gestión de ingeniería. " +
    "Estoy comprometido a ayudar a las organizaciones a gestionar de manera eficaz la tecnología, el software y proyectos operativos de cualquier escala.",
    serviceManagementBeamBadge: "Gestión",

    serviceBusinessBeamTitle: "TRANSFORMA TU NEGOCIO CON CONSULTORÍA ESTRATÉGICA",
    serviceBusinessBeamDescription: "Mejora el rendimiento de tu empresa con servicios de consultoría diseñados para impulsar el éxito. " +
    "Con una gran experiencia en desarrollo empresarial, estrategia de negocio, recursos humanos y selección de personal, " +
    "operaciones administrativas, supervisión y consultoría de gestión a nivel ejecutivo, " +
    "mi objetivo es proporcionar conocimientos y estrategias valiosas para optimizar las operaciones de tu empresa y la dinámica de tu equipo.",
    serviceBusinessBeamBadge: "Negocios",

    serviceLeadershipBeamTitle: "LIBERA EL POTENCIAL DE LIDERAZGO Y CONSTRUYE EQUIPOS MÁS FUERTES",
    serviceLeadershipBeamDescription: "Potencia a tu equipo con mis servicios de desarrollo de liderazgo y construcción de equipos. " +
    "Proporciono estrategias para el liderazgo, la cohesión del equipo, la alineación de grupos de trabajo y el compromiso de los empleados. " +
    "Mis programas personalizados de liderazgo y mis iniciativas de colaboración tienen como objetivo formar líderes sólidos y equipos cohesionados.",
    serviceLeadershipBeamBadge: "Formación en Liderazgo",

    serviceSpeakingBeamTitle: "INSPIRA Y CONECTA A TRAVÉS DE DISCURSOS IMPACTANTES",
    serviceSpeakingBeamDescription: "Inspira a tu audiencia con presentaciones dinámicas. Ofrezco servicios de conferencias magistrales, discursos motivacionales y charlas para eventos, " +
    "cada uno adaptado a tus necesidades específicas o al tema de tu evento. Mi objetivo es cautivar y empoderar a tu audiencia, dejando una impresión duradera.",
    serviceSpeakingBeamBadge: "Oratoria",

    serviceTrioEndHeadingMobile: "Optimizando negocios, aprovechando la tecnología, potenciando a las personas",

    serviceTrioEndText: "Mis servicios y estrategias se centran en tres pilares fundamentales que impulsan el éxito en las industrias en constante evolución: negocio, tecnología y personas. " +
    "Una gestión empresarial sólida garantiza eficiencia y crecimiento, la tecnología potencia la toma de decisiones y la innovación, y las personas son la base de toda organización próspera. " +
    "Al alinear estos elementos clave, ayudo a las empresas a superar desafíos, fortalecer el liderazgo y optimizar sus operaciones. " +
    "Trabajemos juntos para construir un futuro más sólido para tu negocio. Contáctame hoy para explorar cómo podemos colaborar.",

    serviceTabBusinessTitle: "Negocios",
    serviceTabBusinessValue: "Producto de negocios",
    serviceTabBusinessContent: "Pestaña de Negocios",

    serviceTabTechnology: "Tecnología",
    serviceTabTechnologyValue: "Producto de tecnología",
    serviceTabTechnologyContent: "Pestaña de Tecnología",

    serviceTabLeadership: "Liderazgo",
    serviceTabLeadershipValue: "Producto de liderazgo",
    serviceTabLeadershipContent: "Pestaña de Liderazgo",

    serviceTabSpeaking: "Oratoria",
    serviceTabSpeakingValue: "Producto de oratoria",
    serviceTabSpeakingContent: "Pestaña de Oratoria",

    serviceHeroLeadershipCard: "Liderazgo y Creación de Equipos",
    serviceHeroManagementCard: "Servicios de Gestión",
    serviceHeroBusinessCard: "Servicios de Consultoría Empresarial",
    serviceHeroSpeakingCard2: "Servicios de Oratoria Pública 2",
    serviceHeroSpeakingCard3: "Servicios de Oratoria Pública 3",
    serviceHeroManagementCard2: "Servicios de Gestión 2",
    serviceHeroLeadershipCard2: "Creación de Equipos",
    serviceHeroManagementCard3: "Servicios de Gestión 3",
    serviceHeroBusinessCard2: "Servicios de Consultoría Empresarial 2",
    serviceHeroSpeakingCard4: "Servicios de Oratoria Pública 4",

  },
  ca: {
    contact: "Contacta'm",
    about: "Sobre mi",
    qualifications: "Qualificacions",
    service: "Serveis",
    intro: "Benvingut al meu vídeo introductori!",
    cookieMessage: "Aquest web utilitza cookies i altres tecnologies de seguiment per millorar la teva experiència de navegació i optimitzar els serveis proporcionats.",
    acceptButton: "Acceptar",
    rejectButton: "Rebutjar",
    resume: "CV",

    helloWorld: "Hola, Món!",
    iAm: "Sóc",
    introText: "Em dedico a ajudar equips, organitzacions i negocis",
    changingWords: [
      "excel·lir.",
      "prosperar.",
      "treballar junts.",
      "innovar.",
      "unir.",
      "transformar.",
      "liderar.",
      "optimitzar.",
      "evolucionar.",
      "aconseguir.",
      "racionalitzar.",
      "tenir èxit.",
      "desenvolupar estratègies.",
      "apoderar.",
      "lliurar.",
      "enfocar.",
      "canviar.",
      "millorar.",
    ],
    learnMore: "Descobreix més",


    //Translation for body of qualifications
    quoteText: "El futur pertany a aquells que aprenen més habilitats i les combinen de manera creativa",
    quoteAuthor: "- Robert Greene",

    introductionText1: (
      "En el món accelerat d'avui, la tecnologia ha revolucionat com aprenem, fent que l'adquisició d'habilitats, el coneixement i l'educació siguin més accessibles que mai. " +
      "Crec fermament que la mestria no és un talent o un do innat, sinó el resultat d'un esforç constant i enfocat i d'una pràctica implacable. Com més temps i energia es dedica a perfeccionar una habilitat, més a prop es troba de la veritable experiència. " +
      "Amb disciplina, dedicació i un compromís inquebrantable, qualsevol pot aconseguir la mestria en el seu camp escollit."
    ),

    introductionText2: (
      "Aquesta filosofia ha estat la base del meu recorregut educatiu i professional. A més d'obtenir un títol d'Associat en Gestió Empresarial i un títol de Grau en Informàtica amb èmfasi en desenvolupament de programari i gestió, " +
      "també he perseguit un menor en Matemàtiques. Tanmateix, el meu compromís amb l'aprenentatge continu va molt més enllà de l'educació formal. " +
      "He buscat contínuament oportunitats per ampliar els meus coneixements i habilitats obtinguent diversos certificats, reconeguts i avalats per institucions líders com el Project Management Institute (PMI), " +
      "l'HR Certification Institute (HRCI), l'Educació Professional Continua (CPE), el Corporate Finance Institute (CFI), Atlassian i molts altres. " +
      "Aquestes certificacions van implicar centenars d'hores d'aprenentatge rigorós, pràctica pràctica i desenvolupament professional, permetent-me aprofundir en la meva experiència en àrees estretament alineades amb la meva educació i passions: " +
      "gestió (projecte, programa, lideratge d'equip i organitzacional), negocis (administració, recursos humans, reclutament i gestió d'oficines) i tecnologia (assegurament de qualitat, TI, desenvolupament web i desenvolupament de programari)."
    ),

    qualificationsH2: "Educació i Certificats",


    // Card translations
    card1Title: "Universitat Brigham Young",
    card1Description: (
      <>
        <p className="expandable-card-p">
          La Universitat Brigham Young (BYU) és considerada una de les millors universitats del país, amb molts rànquings que la situen entre les millors:
        </p>
        <ul>
          <li>Wall Street Journal: Va classificar BYU en el número 20 en els rànquings de les millors universitats d'Amèrica el 2024, i número 1 per a les universitats més recomanades per estudiants i exalumnes recents.</li>
          <li>Forbes: Va classificar BYU en el número 1 com les millors escoles financera saludable.</li>
          <li>Princeton: Va classificar BYU en el número 1 per la millor biblioteca universitària.</li>
          <li>U.S. News: Va classificar BYU en el número 3 per al programa de comptabilitat de grau, número 5 per al programa de màster en comptabilitat, i número 21 per la millor escola en relació qualitat-preu.</li>
          <li>Milken Institute: Va classificar BYU en el número 4 com la millor universitat per la transferència de tecnologia.</li>
          <li>Departament d'Estat dels Estats Units: Va classificar BYU en el número 3 com a productor de becaris Fulbright dels Estats Units.</li>
        </ul>
      </>
    ),
    card1ButtonText: "BYU",
    card1ButtonLink: "https://www.byu.edu/",

    card2Title: "Salt Lake Community College",
    card2Description: (
      <>
        <p className="expandable-card-p">
          El Salt Lake Community College (SLCC) és considerat un dels millors col·legis comunitaris d'Utah i del país, i ha estat reconegut per una sèrie d'assoliments:
        </p>
        <ul>
          <li>Classificacions: SLCC va ser classificat sisè al país per producció de títols associats per Community College Week. Niche va classificar SLCC en tercer lloc en les millors universitats comunitàries d'Utah per al 2025.</li>
          <li>Premis: SLCC ha guanyat premis NASPA, i un líder en el col·legi va ser nomenat una de les Dones de l'Any de USA Today.</li>
          <li>Equips atlètics: Els equips atlètics de SLCC han aconseguit un gran èxit, incloent múltiples equips que van ser classificats en el número u en les enquestes NJCAA el 2022.</li>
        </ul>
      </>
    ),
    card2ButtonText: "SLCC",
    card2ButtonLink: "https://www.slcc.edu/",

    //About Page transaltions
    about_heading: "On la Passió Es Troba amb el Propòsit",

    aboutMeText1: (
      "Em mou la sinergia entre les persones, els negocis i la tecnologia, tres pilars essencials que inspiren el meu propòsit i la meva recerca de solucions impactants. " +
      "El meu camí està impulsat per una curiositat inesgotable, un compromís amb l’excel·lència i una dedicació a apoderar " +
      "els altres a través d’estratègies innovadores i una col·laboració significativa. " +
      "Amb fluïdesa en anglès, espanyol i català, aporto una perspectiva global a cada repte i projecte."
    ),

    aboutMeText2: (
      "Més enllà de les meves activitats professionals, sóc un apassionat de l’aprenentatge i un amant dels esports, la música, el cinema i la interpretació. " +
      "Aquestes passions em mantenen arrelat mentre inspiren la creativitat i l’atenció que aporto a la meva feina. Explora aquesta pàgina per descobrir les passions, " +
      "els valors i les aspiracions que em defineixen i guien la meva missió de crear solucions impactants."
    ),

    myPassions: "Les Meves Passions",

    pardoFamilyTitle: "L'Escut de la Família Pardo",
    pardoFamilyDescription: (
      <>
        <div className="custom-description">
          <p>
          Un llegat d'equilibri i creixement continu, el lema de la família Pardo—'Busquem l'equilibri perfecte i la millora constant del cos, 
          de la ment i de l'esperit'—és més que un principi guait; és una filosofia que aplico a tot el que faig. 
          Aquesta saviesa atemporal inspira el meu enfocament en els negocis, la tecnologia i el lideratge, impulsant-me a oferir resultats significatius i solucions impactants. 
          </p>
          <p>
          En cada projecte que emprenc, em faig l'esforç d'alinear la visió amb l'execució i la innovació amb la practicitat. En adoptar una mentalitat de millora constant, 
          afronto els reptes amb enfocament, creativitat i determinació, sempre buscant el camí més efectiu cap endavant. 
          </p>
          <p>
          Aquest compromís amb l'equilibri i el creixement em motiva a apoderar equips, refinar estratègies i crear sistemes que impulsin l'èxit. 
          És aquesta dedicació a l'excel·lència i el progrés continu el que dóna forma al meu enfocament en cada oportunitat per lliurar valor.
          </p>
        </div>
      </>
    ),
    pardoFamilyMottoBadge: "Lema",
    calculatedRisksTitle: "Riscos Calculats, Aventures Sense Límits",
    calculatedRisksDescription: (
      <>
        <div className="custom-description">
          <p>
          L'aventura i els esports extrems són més que passions; són un recordatori del valor d'abraçar els riscos calculats. 
          Des del salt en corda fins al paracaigudisme, m'esforço a afrontar reptes que requereixen planificació acurada i fortalesa mental. 
          Malgrat la por que comporten aquestes experiències, he après a afrontar-la directament, confiant en la preparació i la perseverança per guiar-me a través d'elles. 
          </p>
          <p>
          Aquesta mentalitat reflecteix com afront cada projecte i oportunitat de lideratge. Crec en assumir riscos pensats i mesurats per impulsar la innovació i aconseguir resultats. 
          Es tracta d'avançar amb confiança, sabent que els riscos calculats—quan es poden abordar estratègicament—poden portar a grans recompenses.
          </p>
        </div>
      </>
    ),
    calculatedRisksBadge: "Superant la Por, Cercant l'Excel·lència",
    steppingIntoRolesTitle: "Endinsant-se en Nous Rols",
    steppingIntoRolesDescription:(
      <>
        <div className="custom-description">
          <p>
          Sortir de la meva zona de confort m'ha portat a descobrir una passió que mai hauria esperat: <a href="https://www.imdb.com/name/nm11523185/" target="_blank" rel="noopener noreferrer">l'actuació</a>. Els reptes de pujar a un escenari, abraçar nous personatges, 
          i submergir-me en diversos guions m'han donat una comprensió més profunda del poder de l'expressió, la creativitat i la narració. 
          </p>
          <p>
          He tingut el privilegi de participar en diversos projectes, des de produccions més petites fins a altres més grans i complexes, cada una oferint experiències i lliçons úniques. 
          Aquestes oportunitats no només han potenciat el meu creixement personal, sinó que també han modelat la meva mentalitat professional. M'han ensenyat la importància de l'adaptabilitat, 
          la col·laboració i el compromís—qualitats que aporto a tots els aspectes del meu treball. 
          </p>
          <p>
          L'actuació em recorda que, de vegades, les millors oportunitats de creixement sorgeixen quan assumim riscos i ens aventurem més enllà del familiar.
          </p>
        </div>
      </> 
    ),
    steppingIntoRolesBadge: "Més Enllà de la Comoditat, Cap a la Passió",
    endlessLearningTitle: "Aprenentatge Continu, Saviesa Atemporal",
    endlessLearningDescription:(
      <>
        <div className="custom-description">
          <p>
          Més enllà de l'educació formal, crec en el poder de l'aprenentatge continu, i els llibres han estat una font clau d'inspiració i creixement. 
          Hi ha diverses obres que considero invaluables en la formació del meu enfocament sobre lideratge, negocis i desenvolupament personal. 
          Aquests llibres m'han proporcionat profundes idees sobre el comportament humà, l'estratègia i la comunicació efectiva, totes les quals aplico diàriament en el meu treball. 
          </p>
          <p>
          M'han ensenyat la importància d'adaptar-se al canvi, construir relacions sòlides i prendre decisions informades tant en l'àmbit personal com professional. 
          Aquest compromís amb l'autoeducació, combinat amb la meva formació acadèmica, em permet oferir solucions innovadores i ben fonamentades als reptes amb els quals em trobo. 
          </p>
          <p>
          Cada pàgina passada és una nova lliçó apresa, i porto aquestes lliçons amb mi mentre em faig l'esforç de crear un impacte durador en cada projecte.
          </p>
        </div>
      </>
    ),
    endlessLearningBadge: "Aprenent de Cada Pàgina",

    aboutEndPage: (
      <>
        <p>
          Descobreix com puc ajudar-te a tu o a la teva organització a aconseguir resultats impactants. No dubtis a explorar els meus <a href="/service" target="_blank" rel="noopener noreferrer">serveis</a> o a <a href="/contact" target="_blank" rel="noopener noreferrer">contactar-me</a> directament per connectar i saber-ne més.
        </p>
      </>
    ),


    //404 page
    notFound: "Pàgina No Trobada",
    notFoundMobile: "404\nPàgina no trobada",
    notFoundMessage: "La pàgina que estàs buscant no existeix.",
    notFoundLink: "Tornem enrere!",

    //Footer
    allRightsReserved: "Tous droits réservés.",

    //Contact
    letsconnect: "Connectem",
    contactInqueries: "Tens alguna pregunta o estàs interessat en saber-ne més?",
    contactIamHere: "Sóc aquí per ajudar-te: ja sigui que vulguis col·laborar, explorar serveis o simplement posar-te en contacte, no dubtis a fer-ho.",
    sendAnotherMessage: "Envia un altre missatge",
    contactSendButton: "Enviar",
    contactOtherChannels: "També pots connectar-te a través d'aquests canals:",
    contactNamePlaceholder: "Nom",
    contactLastNamePlaceholder: "Cognoms",
    contactEmailPlaceholder: "Correu electrònic",
    contactMessagePlaceholder: "El teu missatge",
    contactSuccessMessage: "Gràcies pel teu missatge. Estaré en contacte tan aviat com sigui possible.",
    contactErrorMessage: "No s'ha pogut enviar el missatge, si us plau, torna-ho a intentar.",
    contactRequiredName: "El nom és obligatori.",
    contactRequiredLastName: "Els cognoms són obligatoris.",
    contactRequiredEmail: "Es requereix un correu electrònic vàlid.",
    contactRequiredMessage: "El missatge és obligatori.",



    //Resume
    placeholders1: "Anàlisi de negocis", 
    placeholders2: "Gestió de projectes",
    placeholders3: "Supervisor",
    placeholders4: "Gerent d'oficina",
    placeholders5: "Gestió de productes",
    placeholders6: "Administració d'oficina",
    placeholders7: "Àgil",
    placeholders8: "Professional en Gestió de Projectes",

    
    resumeGrammarCheckService: "El servei de correcció gramatical no està disponible actualment. Si us plau, torni-ho a provar més tard.",

    resumeCardTitleBusiness: "Aquest és un títol per a la targeta de negocis",
    resumeCardContentBusiness: "Aquesta targeta conté informació sobre negocis i el que conté el meu currículum de negocis",
    resumeCardTitleHR: "Aquest és un títol per a la targeta de recursos humans",
    resumeCardContentHR: "Aquesta targeta conté informació sobre recursos humans i el que conté el meu currículum de recursos humans",
    resumeCardTitleManagement: "Aquest és un títol per a la targeta de gestió",
    resumeCardContentManagement: "Aquesta targeta conté informació sobre gestió i el que conté el meu currículum de gestió",
    resumeCardTitlePR: "Aquest és un títol per a la targeta de relacions públiques",
    resumeCardContentPR: "Aquesta targeta conté informació sobre relacions públiques i el que conté el meu currículum de relacions públiques",
    resumeCardTitleSDET: "Aquest és un títol per a la targeta de sdet",
    resumeCardContentSDET: "Aquesta targeta conté informació sobre sdet i el que conté el meu currículum de sdet",

    resumeCardTitleGeneral: "Targeta per a",
    resumeCardContentGeneral: "El contingut està relacionat amb",

    resumeCardTitleGeneric: "Targeta genèrica",
    resumeCardContentGeneric: "Aquí hi ha una descripció general perquè no ha coincidit res amb la teva cerca.",
    
    resumeCardSearchHeading: "Coneixement i experiència al seu servei",
    resumeCardSearchYes: "Sí",
    resumeCardSearchNo: "No",    

    resumeCheckingGrammar: "Comprovant la gramàtica...",
    resumeLanguageTool: "Amb la tecnologia de LanguageTool",
    resumeDidYouMean: "Volies dir:",
    resumeRejectSuggestionMessage: "Troba el resultat més proper a continuació, o si ho prefereixes, busca de nou.",
    resumeViewResumeCardButton: "Veure currículum",

    resumeSubheading2: "Descobreix la meva sòlida formació acadèmica, la meva capacitat estratègica per resoldre problemes i les meves habilitats de lideratge en diversos sectors",
    resumeTopTextSearchBar: "Cerca habilitats o paraules clau per veure el currículum més rellevant",

    resumeTabBusiness: "Negocis",
    resumeTabHRRecruiter: "Reclutador",
    resumeTabManager: "Gerent",
    resumeTabAnalyst: "Analista",
    resumeTabSDET: "Enginyer",

    resumeCardTitle1: "Seqüència Genètica",
    resumeCardDescription1: "Desenvolupades dues versions d'un algorisme de programació dinàmica per determinar el cost mínim d'alineació de seqüències genètiques i extreure una alineació òptima.",
  
    resumeCardTitle2: "Problema del Viatjant",
    resumeCardDescription2: "Implementat un algorisme de ramificació i acotació per resoldre de manera eficient el Problema del Viatjant de Comerç (TSP).",
  
    resumeCardTitle3: "Disseny Proxy",
    resumeCardDescription3: "Dissenyat i implementat el patró de disseny proxy, que actua com a intermediari per controlar l'accés a un objecte original.",
  
    resumeCardTitle4: "Algorisme de Dijkstra",
    resumeCardDescription4: "Implementat l'algorisme de Dijkstra per calcular els camins més curts o de menor cost entre nodes en un graf, aplicable a xarxes de carreteres i enrutament.",
  
    resumeCardTitle5: "Envolupant Convexa",
    resumeCardDescription5: "Desenvolupat un algorisme de divideix i venceràs que descompon un problema en subproblemes fins a arribar a un estat resoluble.",
  
    resumeCardTitle6: "Enviament de Correu",
    resumeCardDescription6: "Creada una funció AWS Lambda per a l'enviament de correus electrònics mitjançant AWS Simple Email Service (SES), utilitzant rols IAM per a permisos de seguretat.",
  
    resumeCardTitle7: "Disseny de Fàbrica",
    resumeCardDescription7: "Implementat el patró de disseny Factory, que permet la creació dinàmica d'objectes a través d'un mètode centralitzat de fàbrica.",
  
    resumeCardTitle8: "Aplicació de Xarxa Social",
    resumeCardDescription8: "Desenvolupada una aplicació de xarxes socials que permet seguir usuaris, publicar actualitzacions i interactuar. Construïda amb Java, AWS Lambda, DynamoDB i Android.",
  
    resumeCardTitle9: "Mapa Familiar",
    resumeCardDescription9: "Dissenyada una aplicació que ofereix una visualització geogràfica de la història familiar, utilitzant Disseny Orientat a Objectes, Programació UI i integració d'API externes.",
  
    resumeCardTitle10: "Fermat i Miller-Rabin",
    resumeCardDescription10: "Implementats algorismes d'aritmètica modular i algorismes aleatoris per a proves de primalitat, incloent-hi els tests de Fermat i Miller-Rabin.",
  
    resumeCardTitle11: "Sistema d'Autenticació d'Usuaris",
    resumeCardDescription11: "Desenvolupada una aplicació web per a l'autenticació d'usuaris amb noms d'usuari i contrasenyes, utilitzant Vue.js, Node.js, Express i MongoDB.",
  
    
    
    //Service translations
    serviceMainHeading: (
      <>
        Empoderant l’èxit: <br /> Alliberant el potencial, formant líders, optimitzant la tecnologia i inspirant el canvi.
      </>
    ),
    serviceSubheading: "Estic compromès a desbloquejar tot el potencial del teu negoci, empoderar els teus equips, " +
    "optimitzar les teves operacions i inspirar la teva audiència. Els meus serveis integrals estan dissenyats per convertir els reptes en oportunitats, " +
    "impulsant el creixement i l’èxit en cada projecte.",

    serviceCenterText: "Assolir l’èxit empresarial requereix les estratègies adequades, un lideratge sòlid i una gestió eficient. Els meus serveis estan pensats per ajudar empreses i professionals a destacar, " +
    "oferint assessorament expert en estratègia empresarial, desenvolupament de lideratge i solucions de gestió en diferents sectors, incloent-hi la tecnologia. " +
    "Tant si necessites suport per optimitzar operacions, enfortir el lideratge o impulsar iniciatives empresarials, ofereixo solucions a mida per adaptar-me a les teves necessitats. " +
    "Explora les categories següents per descobrir com puc ajudar-te a assolir els teus objectius.",

    serviceManagementBeamTitle: "SERVEIS INTEGRALS DE GESTIÓ TECNOLÒGICA",
    serviceManagementBeamDescription: "Millora les teves operacions amb solucions personalitzades de gestió tecnològica. " +
    "Amb una àmplia experiència en desenvolupament de programari, programació, control de qualitat de programari " +
    "i gestió de dades, ofereixo serveis integrals de gestió de projectes, programes i productes. " +
    "La meva experiència abasta la gestió de TI, el lideratge en desenvolupament de programari, l’anàlisi de dades i la gestió d’enginyeria. " +
    "Estic compromès a ajudar les organitzacions a gestionar de manera eficient la tecnologia, el programari i els projectes operatius de qualsevol escala.",
    serviceManagementBeamBadge: "Gestió",

    serviceBusinessBeamTitle: "TRANSFORMA EL TEU NEGOCI AMB CONSULTORIA ESTRATÈGICA",
    serviceBusinessBeamDescription: "Millora el rendiment del teu negoci amb serveis de consultoria dissenyats per impulsar l’èxit. " +
    "Amb un gran coneixement en desenvolupament empresarial, estratègia de negoci, recursos humans i selecció de personal, " +
    "operacions administratives, supervisió i consultoria de gestió a nivell executiu, " +
    "el meu objectiu és proporcionar coneixements i estratègies valuoses per optimitzar les operacions del teu negoci i la dinàmica del teu equip.",
    serviceBusinessBeamBadge: "Negocis",

    serviceLeadershipBeamTitle: "ALLIBERA EL POTENCIAL DE LIDERATGE I CONSTRUEIX EQUIPS MÉS FORTS",
    serviceLeadershipBeamDescription: "Empodera el teu equip amb els meus serveis de desenvolupament de lideratge i creació d’equips. " +
    "Proporciono estratègies per al lideratge, la cohesió de l’equip, l’alineació dels grups de treball i el compromís dels empleats. " +
    "Els meus programes personalitzats de lideratge i iniciatives de col·laboració tenen com a objectiu formar líders sòlids i equips cohesionats.",
    serviceLeadershipBeamBadge: "Formació en Lideratge",

    serviceSpeakingBeamTitle: "INSPIRA I CONNECTA MITJANÇANT DISCURSOS IMPACTANTS",
    serviceSpeakingBeamDescription: "Inspira la teva audiència amb presentacions dinàmiques. Ofereixo serveis de conferències magistrals, discursos motivacionals i xerrades per a esdeveniments, " +
    "cadascun adaptat a les teves necessitats específiques o al tema del teu esdeveniment. El meu objectiu és captivar i empoderar la teva audiència, deixant una empremta duradora.",
    serviceSpeakingBeamBadge: "Oratòria",

    serviceTrioEndHeadingMobile: "Optimitzant negocis, aprofitant la tecnologia, potenciant les persones",

    serviceTrioEndText: "Els meus serveis i estratègies es basen en tres pilars essencials que impulsen l’èxit en les indústries en constant evolució: negoci, tecnologia i persones. " +
    "Una bona gestió empresarial garanteix eficiència i creixement, la tecnologia afavoreix la presa de decisions i la innovació, i les persones són el fonament de tota organització pròspera. " +
    "Alineant aquests elements clau, ajudo les empreses a superar reptes, enfortir el lideratge i optimitzar les operacions. " +
    "Treballem junts per construir un futur més sòlid per al teu negoci. Contacta’m avui per explorar com podem col·laborar.",
  

    serviceTabBusinessTitle: "Negocis",
    serviceTabBusinessValue: "Producte de negocis",
    serviceTabBusinessContent: "Pestanya de Negocis",

    serviceTabTechnology: "Tecnologia",
    serviceTabTechnologyValue: "Producte de tecnologia",
    serviceTabTechnologyContent: "Pestanya de Tecnologia",

    serviceTabLeadership: "Lideratge",
    serviceTabLeadershipValue: "Producte de lideratge",
    serviceTabLeadershipContent: "Pestanya de Lideratge",

    serviceTabSpeaking: "Oratòria",
    serviceTabSpeakingValue: "Producte d’oratòria",
    serviceTabSpeakingContent: "Pestanya d’Oratòria",

    serviceHeroLeadershipCard: "Lideratge i Creació d’Equips",
    serviceHeroManagementCard: "Serveis de Gestió",
    serviceHeroBusinessCard: "Serveis de Consultoria Empresarial",
    serviceHeroSpeakingCard2: "Serveis d’Oratòria Pública 2",
    serviceHeroSpeakingCard3: "Serveis d’Oratòria Pública 3",
    serviceHeroManagementCard2: "Serveis de Gestió 2",
    serviceHeroLeadershipCard2: "Creació d’Equips",
    serviceHeroManagementCard3: "Serveis de Gestió 3",
    serviceHeroBusinessCard2: "Serveis de Consultoria Empresarial 2",
    serviceHeroSpeakingCard4: "Serveis d’Oratòria Pública 4",
  }
};
  
export default translations;
  