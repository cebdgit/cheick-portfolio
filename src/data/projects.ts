export type Project = {
    id: number;
    category: string;
    title: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    features: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: 1,
        category: "AWS / CLOUD ARCHITECTURE",
        title: "AWS 3-Tier Architecture",
        shortDescription:
            "Architecture Cloud hautement disponible pour une application web.",
        description:
            "Conception d'une architecture trois tiers sur AWS séparant la couche présentation, la logique applicative et la base de données. Le projet met l'accent sur la sécurité, la disponibilité et la séparation des responsabilités.",
        technologies: [
            "AWS",
            "VPC",
            "EC2",
            "RDS",
            "Security Groups",
            "Subnets",
            "ALB",
        ],
        features: [
            "Architecture trois tiers",
            "Réseau VPC personnalisé",
            "Sous-réseaux publics et privés",
            "Sécurisation avec Security Groups",
            "Base de données RDS",
            "Haute disponibilité",
        ],
        github: "",
        demo: "",
        featured: true,
    },

    {
        id: 2,
        category: "AWS / DATABASE MIGRATION",
        title: "Café App → Amazon RDS",
        shortDescription:
            "Migration d'une base de données locale vers Amazon RDS MariaDB.",
        description:
            "Migration d'une base de données utilisée par une application Café depuis une base locale vers Amazon RDS MariaDB. Le projet comprend la configuration réseau, la sécurité, la migration des données et l'optimisation des ressources.",
        technologies: [
            "AWS RDS",
            "MariaDB",
            "EC2",
            "VPC",
            "AWS CLI",
            "Security Groups",
        ],
        features: [
            "Création d'une instance RDS",
            "Configuration réseau privée",
            "Database Subnet Group",
            "Migration de données",
            "Sécurisation des accès",
            "Optimisation des coûts",
        ],
        github: "",
        demo: "",
        featured: true,
    },

    {
        id: 3,
        category: "SERVERLESS / AWS",
        title: "Serverless File Processing",
        shortDescription:
            "Traitement automatisé de fichiers avec S3, Lambda et SNS.",
        description:
            "Mise en place d'une architecture serverless permettant de traiter automatiquement les fichiers déposés dans Amazon S3. Une fonction Lambda analyse le contenu et utilise Amazon SNS pour envoyer une notification.",
        technologies: [
            "Amazon S3",
            "AWS Lambda",
            "Amazon SNS",
            "Python",
            "AWS IAM",
        ],
        features: [
            "Stockage objet avec S3",
            "Déclenchement automatique",
            "Traitement avec Lambda",
            "Comptage des mots",
            "Notification SNS",
            "Permissions IAM",
        ],
        github: "",
        demo: "",
        featured: true,
    },

    {
        id: 4,
        category: "INFRASTRUCTURE AS CODE",
        title: "AWS Infrastructure with CloudFormation",
        shortDescription:
            "Provisionnement automatisé d'une infrastructure AWS.",
        description:
            "Création d'une infrastructure AWS à l'aide d'un template CloudFormation afin d'automatiser le provisionnement des ressources et de rendre l'infrastructure reproductible.",
        technologies: [
            "AWS CloudFormation",
            "VPC",
            "EC2",
            "Security Groups",
            "IAM",
            "YAML",
        ],
        features: [
            "Infrastructure as Code",
            "Création automatique du VPC",
            "Internet Gateway",
            "Security Groups",
            "Subnet",
            "Instance EC2",
        ],
        github: "",
        demo: "",
        featured: true,
    },

    {
        id: 5,
        category: "BACKEND / API",
        title: "Django REST API",
        shortDescription:
            "API REST développée avec Django REST Framework.",
        description:
            "Développement d'une API REST permettant de gérer des ressources applicatives avec Django REST Framework. Le projet met en pratique la conception d'API, la sérialisation des données et l'organisation d'un backend maintenable.",
        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "REST API",
            "SQL",
        ],
        features: [
            "API REST",
            "Serializers",
            "Views",
            "Gestion des ressources",
            "Architecture backend",
            "Tests API",
        ],
        github: "",
        demo: "",
        featured: true,
    },

    {
        id: 6,
        category: "FULL-STACK / CLOUD",
        title: "Urban Panne Reporting",
        shortDescription:
            "Application de signalement des pannes urbaines.",
        description:
            "Projet de plateforme permettant aux utilisateurs de signaler des pannes urbaines à partir d'une photo, d'une description et de leur localisation. Le projet constitue une opportunité de combiner développement Full-Stack, géolocalisation et architecture Cloud.",
        technologies: [
            "React",
            "Next.js",
            "Django",
            "REST API",
            "PostgreSQL",
            "AWS",
        ],
        features: [
            "Signalement avec photo",
            "Description de la panne",
            "Géolocalisation",
            "Visualisation sur carte",
            "API backend",
            "Déploiement Cloud",
        ],
        github: "",
        demo: "",
        featured: true,
    },
];