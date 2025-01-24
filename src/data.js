const projects = [
    {
      id: 1,
      image: "./images/RaveOn.png",
      title: "Développement et maintenance d'un site web",
      shortDescription: "J'ai conçu et géré le site web de Raveon, un DJ techno, en optimisant l'expérience utilisateur et en répondant à ses besoins avec la méthodologie Agile.",
      description: "J’ai conçu et maintenu le site web de Raveon, DJ et compositeur de musique techno rave, pour mettre en avant ses morceaux, ses événements et son parcours musical. Ce projet, mené avec une méthodologie Agile, m’a permis de développer mes compétences en conception web responsive et en gestion collaborative.",
      skills: [
        { logo: "../images/Logos/Logo_HTML.png", name: "HTML" },
        { logo: "../images/Logos/Logo_CSS.png", name: "CSS" },
        { logo: "../images/Logos/Logo_JS.png", name: "JS" }
      ],
      date: "Août 2024 -> Actuel"
    },
    {
      id: 2,
      image: "./images/UE5.png",
      title: "Création d'expériences sur Unreal Engine",
      shortDescription: "Je crée des jeux via le programme « Soutenir un créateur » d'Epic Games depuis 2018, apprenant design et outils comme Unreal Engine, Blueprint et Verse.",
      description: "Depuis 2018, je participe au programme « Soutenir un créateur » d’Epic Games, où je conçois, seul ou en équipes, des jeux sur Fortnite joués par des milliers de personnes. Mon travail allie design inventivité et logique de gameplay, avec une attention particulière aux détails pour captiver les utilisateurs. J’utilise des outils spécifiques comme Unreal Engine, Blueprint et Verse pour adapter mes créations aux attentes du public.",
      skills: [
        { logo: "../images/Logos/Logo_UE.png", name: "Unreal Engine" },
        { logo: "../images/Logos/Logo_Verse.png", name: "Verse" },
      ],
      date: "2018 -> Actuel"
    },
    {
      id: 3,
      image: "./images/Robocup2.png",
      title: "Application Robocup Manager",
      shortDescription: "J'ai participé au développement d'une application Web en méthodologie Agile, jouant les rôles de développeur Front et Scrum Master.",
      description: "L'application web « Robocup Manager » permet de créer, gérer et participer à des compétitions de football de robots. Au cours de ce projet en équipe d'une durée de deux semaines, j'ai pris le rôle de Scrum Master et de développeur Front-end. L'intégralité de mes compétences en web a été solicitée, et j'ai pu comprendre l'objectif et l'importance d'une méthodologie Agile.",
      skills: [
        { logo: "../images/Logos/Logo_HTML.png", name: "HTML" },
        { logo: "../images/Logos/Logo_CSS.png", name: "CSS" },
        { logo: "../images/Logos/Logo_JS.png", name: "JavaScript" },
        { logo: "../images/Logos/Logo_PHP.png", name: "PHP" },
        { logo: "../images/Logos/Logo_Symfony.png", name: "Symfony" },
      ],
      date: "Janvier 2025"
    },
    {
        id: 4,
        image: "./images/Eco.png",
        title: "Application EcoBreath",
        shortDescription: "J’ai collaboré à une application de suivi des émissions de CO2, en développant l’interface graphique et les connecteurs Python pour une base de données.",
        description: "Dans le cadre d’un projet de fin de première année d'IUT, notre équipe de cinq développeurs a créé une application permettant de visualiser différentes statistiques. J’ai principalement travaillé sur l’interface graphique et les connecteurs Python pour interagir avec la base de données. Ce projet, réalisé en deux semaines, a mobilisé nos compétences en C#, Python et SQL pour concevoir une application standalone complète.",
        skills: [
          { logo: "../images/Logos/Logo_CSharp.png", name: "C#" },
          { logo: "../images/Logos/Logo_SQL.png", name: "SQL" },
          { logo: "../images/Logos/Logo_Python.png", name: "Python" }
        ],
        date: "Juin 2024"
    },
    {
        id: 5,
        image: "./images/Graphes.png",
        title: "Visualisation de graphes",
        shortDescription: "J’ai implémenté les algorithmes de création de graphes et d'Edge Bundling pour une application de visualisation de graphes.",
        description: "Le projet avait pour objectif de développer une application de visualisation de graphes. Mon rôle consistait à implémenter les algorithmes permettant de créer des graphes et d’appliquer l’Edge Bundling, une technique de regroupement des arêtes en faisceaux pour améliorer la lisibilité. Cela m’a permis d’explorer des concepts avancés de visualisation de données et d’optimisation graphique.",
        skills: [
            { logo: "../images/Logos/Logo_Java.png", name: "Java" }
        ],
        date: "Mars 2024"
        },
    {
        id: 6,
        image: "./images/Pixel.png",
        title: "Pixel IUT War",
        shortDescription: "J’ai développé la partie client de « Pixel IUT War », un projet collaboratif utilisant JavaScript et les API REST pour gérer une fresque centralisée.",
        description: "Dans le cadre du projet « Pixel IUT War » de l’IUT de Gradignan, inspiré de la « Pixel War » de Reddit, j’ai travaillé sur l'interface client en JavaScript. Mon rôle consistait à concevoir une interface permettant aux utilisateurs de participer à une fresque collaborative hébergée sur un serveur centralisé. Ce projet, réalisé sur deux mois, m’a permis de me familiariser avec les API REST et le développement d’interfaces interactives.",
        skills: [
            { logo: "../images/Logos/Logo_HTML.png", name: "HTML" },
            { logo: "../images/Logos/Logo_CSS.png", name: "CSS" },
            { logo: "../images/Logos/Logo_JS.png", name: "JS" }
        ],
        date: "Mars 2024"
    },
    {
      id: 7,
      image: "./images/Towa.png",
      title: "Jeu de plateau",
      shortDescription: "Le projet “Towa” est un jeu de plateau multijoueur développé en Java, qui m'a été une porte d’entrée vers la programmation et les intelligences artificielles.",
      description: "Le projet “Towa” est un jeu de plateau multijoueur développé en Java. Bien que simple en apparence, il m’a permis de découvrir en profondeur la programmation et d'explorer les concepts d’intelligence artificielle. Cette expérience a été cruciale pour développer mes compétences en développement et en algorithmie.",
      skills: [
          { logo: "../images/Logos/Logo_Java.png", name: "Java" }
      ],
      date: "Décembre 2023"
    },
  ];
  

  const skillsData = [
    {
        name: "Java",
        logo: "./images/Logos/Logo_Java.png",
        category: "Langages"
    },
    {
        name: "C#",
        logo: "./images/Logos/Logo_CSharp.png",
        category: "Langages"
    },
    {
        name: "C",
        logo: "./images/Logos/Logo_C.png",
        category: "Langages"
    },
    {
        name: "Python",
        logo: "./images/Logos/Logo_Python.png",
        category: "Langages"
    },
    {
        name: "PHP",
        logo: "./images/Logos/Logo_PHP.png",
        category: "Langages"
    },
    {
        name: "Verse",
        logo: "./images/Logos/Logo_Verse.png",
        category: "Langages"
    },
    {
        name: "HTML",
        logo: "./images/Logos/Logo_HTML.png",
        category: "Web"
    },
    {
        name: "CSS",
        logo: "./images/Logos/Logo_CSS.png",
        category: "Web"
    },
    {
        name: "Tailwind",
        logo: "./images/Logos/Logo_Tailwind.png",
        category: "Web"
    },
    {
        name: "JavaScript",
        logo: "./images/Logos/Logo_JS.png",
        category: "Web"
    },
    {
        name: "React",
        logo: "./images/Logos/Logo_React.png",
        category: "Web"
    },
    {
        name: "TypeScript",
        logo: "./images/Logos/Logo_TS.png",
        category: "Web"
    },
    {
        name: "Symfony",
        logo: "./images/Logos/Logo_Symfony.png",
        category: "Web"
    },
    {
        name: "Twig",
        logo: "./images/Logos/Logo_Twig.png",
        category: "Web"
    },
    {
        name: "SQL",
        logo: "./images/Logos/Logo_SQL.png",
        category: "Data"
    },
    {
        name: "Git",
        logo: "./images/Logos/Logo_Git.png",
        category: "DevOps"
    },
    {
        name: "GitLab",
        logo: "./images/Logos/Logo_GitLab.png",
        category: "DevOps"
    },
    {
        name: "Bash",
        logo: "./images/Logos/Logo_Shell.png",
        category: "Others"
    },
    {
        name: "Unreal Engine",
        logo: "./images/Logos/Logo_UE.png",
        category: "Others"
    },
    {
        name: "UML",
        logo: "./images/Logos/Logo_UML.png",
        category: "Others"
    },
    {
        name: "Notion",
        logo: "./images/Logos/Logo_Notion.png",
        category: "Others"
    },
    {
        name: "Canva",
        logo: "./images/Logos/Logo_Canva.png",
        category: "Others"
    }
];