const resumeData = {
    experience: [
        {
            company: "Accenture",
            location: "Bengaluru, India",
            title: "Backend Developer",
            period: "Sep 2024 – Present",
            details: [
                "<strong>Walt Disney - E-commerce Platform:</strong>",
                " Built and optimized backend search functionality, reducing latency by 40% and increasing throughput by 25%.",
                "Integrated Microsoft Graph API to enable real-time email notifications with 95% delivery success and 0% retry failures.",
                "Architected a Kafka-based order-processing system using Saga orchestration and EhCache to ensure distributed consistency across services.",
                "<strong>Mercedes-Benz R&D India (MBRDI) - Service Activation Module:</strong>",
                "Refactored vehicle configuration module logic, improving processing efficiency by 35%.",
                "Integrated SonarQube into CI/CD pipelines, reducing code quality issues by 40% during QA/UAT.",
                "Collaborated with distributed teams to deliver modular and testable microservices using Agile best practices."
            ]
        },
        {
            company: "OpenText",
            location: "Bengaluru, India",
            title: "Cloud Application Consultant",
            period: "Nov 2021 – Jul 2024",
            details: [
                "<strong>DMHC Healthcare Portal:</strong>",
                "Developed and enhanced backend services for a compliance and reporting platform, focusing on performance optimization and HIPAA-compliant communication.",
                "<strong>IA Insurance Claims Platform:</strong>",
                "Delivered a robust microservice architecture for policy and claims management, designing REST APIs for document submission, claim approvals, and third-party integration.",
                "<strong>NZTA Transport Ticketing & Analytics:</strong>",
                "Created backend services for a public transport ticketing system, integrating Kafka-based event flows and caching mechanisms (EhCache/Redis) to handle high-volume, real-time analytics.",
                "Contributed to CI/CD pipeline automation with Jenkins, SonarQube, and Helm, deploying on Kubernetes clusters.",
                "Designed RBAC (Role-Based Access Control) systems for multi-tenant authentication workflows."
            ]
        },
        {
            company: "Test Yantra",
            location: "Bengaluru, India",
            title: "Software Engineer Intern",
            period: "Oct 2020 – Oct 2021",
            details: [
                "<strong>APNL Insurance Client:</strong>",
                "Delivered a scalable microservice-based backend system for policy and claims management.",
                "Designed and developed REST APIs for document submission, claims processing, and third-party integrations.",
                "Built event-driven microservices using Java, Spring Boot, Kafka, and Redis to handle high-throughput policy events.",
                "Implemented caching using EhCache and Redis to optimize response times for frequent queries.",
                "Automated CI/CD pipelines with Jenkins, SonarQube, and Helm on GCP Kubernetes clusters."
            ]
        }
    ],
    projects: [
        {
            name: "Order-Management-System",
            date: "Dec 2024",
            description: "Built a cloud-native, event-driven order management platform following microservices architecture for order, user, inventory, and notification services. Implemented Saga orchestration using Kafka to maintain distributed consistency and rollback across asynchronous workflows. Used EhCache for transaction-level state caching, reducing average API latency by 40%.",
            techStack: ["Java", "Spring Boot", "Kafka", "GCP Pub/Sub", "Saga Orchestration", "PostgreSQL", "EhCache", "Docker", "Kubernetes", "Helm"]
        }
    ],
    skills: {
        languages: ["Java", "SQL"],
        frameworks: ["Spring Boot", "Spring Kafka", "Spring Security", "Spring Framework", "Spring Data JPA", "JDBC"],
        tools: ["Docker", "Kubernetes", "Jenkins", "Git", "Postman", "Swagger", "SonarQube", "Jira", "IntelliJ IDEA"],
        platforms: ["GCP", "AWS", "Azure", "Linux"],
        databases: ["PostgreSQL", "MySQL", "Apache Kafka", "ActiveMQ", "Redis", "EhCache"],
        cloud: ["Microservices", "CI/CD", "SOLID", "Low-Level Design", "Asynchronous Programming", "OAuth2", "JWT"]
    }
};

export const navLinks = [
    { href: '#overview', text: 'Overview' },
    { href: '#experience', text: 'Experience' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
];

export default resumeData;