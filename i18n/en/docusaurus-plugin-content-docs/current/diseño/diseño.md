---
sidebar_label: 'Design'
sidebar_position: 1
---

# Design

## Architectural Design

For the development of the project, we decided to use a microservices-based architecture. This approach facilitates problem identification and resolution, as well as the implementation of updates and improvements. Each microservice can be scaled independently, optimizing resources and improving the overall system performance.

Our system consists of a web app and two custom microservices. The web app serves as the main entry point for users, offering a user-friendly and accessible interface. Additionally, it functions as an API gateway, redirecting requests to the corresponding microservices. The first microservice handles all operations related to user management, authentication, wallet management, and account balance. It uses a database as the primary data source, ensuring data persistence and integrity. The second microservice focuses on exploratory data analysis and consumes an external API to obtain real-time cryptocurrency market data.

With this architecture, we ensure a modular, flexible, and scalable system that can evolve according to project needs and adapt to future demands and technological changes.

![alt text](image.png)

## Detailed Design

For the development of the microservices, we decided to use a layered architecture, where each layer is responsible for a specific function and communicates with adjacent layers through interfaces. The architecture comprises four layers: three sequential layers (presentation layer, business layer, and data access layer) and one transversal layer (model layer). This approach applies design principles such as abstraction, encapsulation, high cohesion, and low coupling.

The presentation layer is responsible for managing interactions with users or external systems. It includes controllers and endpoints that receive and respond to requests, ensuring effective communication with the client. This layer validates and transforms user input before passing it to the business layer.

The business layer contains the core logic of the microservice. It implements business rules and the specific logic for each functionality. This layer processes data received from the presentation layer and coordinates the necessary operations to meet business requirements.

The primary responsibility of the data access layer is to facilitate interaction between the microservice and the data source. It performs data reading, writing, and manipulation operations.

The model layer is a transversal layer that defines data structures used throughout the system. It includes definitions of entities, DTOs (Data Transfer Objects), and other data models shared among different layers. This layer promotes model reuse and maintains data consistency across the microservice.

![alt text](image-1.png)