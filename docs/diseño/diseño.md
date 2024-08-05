---
sidebar_label: 'Diseño'
sidebar_position: 1
---

# Diseño

## Diseño Arquitectónico 

Para el desarrollo del proyecto decidimos utilizar una arquitectura basada en microservicios. Esto facilita la identificación y resolución de problemas, así como la implementación de actualizaciones y mejoras. Cada microservicio puede ser escalado de manera independiente optimizando los recursos y mejorando el rendimiento general del sistema. 

Nuestro sistema cuenta de una webapp y dos microservicios personalizados. La webapp actúa como el punto de entrada principal para los usuarios ofreciendo una interfaz amigable y accesible. Además, funciona como un API gateway redirigiendo las solicitudes a los microservicios correspondientes. El primer microservicio se encarga de todas las operaciones relacionadas con la gestión de usuarios, autenticación, manejo de billeteras y balance de cuentas. Utiliza una base de datos como fuente principal de datos, asegurando la persistencia y la integridad de la información. El segundo microservicio se centra en el análisis exploratorio de datos y consume una API externa para obtener datos actualizados del mercado de criptomonedas en tiempo real.

Con esta arquitectura aseguramos un sistema modular, flexible y escalable que puede evolucionar según las necesidades del proyecto y adaptarse a futuras demandas y cambios tecnológicos.

![alt text](image.png)

## Diseño Detallado

Para el desarrollo de los microservicios decidimos utilizar una arquitectura basada en capas, donde cada una se encarga de una función específica y se comunica con las capas adyacentes a través de interfaces. Cuentan con cuatro capas, tres secuenciales, la capa de presentación, la capa de negocio y la capa de acceso a datos, y una capa transversal, que es la capa de modelo. De esta forma, aplicamos algunos principios de diseño como la abstracción, el encapsulamiento, la alta cohesión y el bajo acoplamiento.

La capa de presentación es responsable de gestionar la interacción con el usuario o los sistemas externos. Incluye controladores y endpoints que reciben y responden a las solicitudes, asegurando una comunicación efectiva con el cliente. Aquí es donde se valida y se transforma la entrada del usuario antes de pasarla a la capa de negocio. 

La capa de negocio contiene la lógica central del microservicio. Aquí se implementan las reglas de negocio y la lógica específica de cada funcionalidad. Esta capa se encarga de procesar los datos recibidos de la capa de presentación y de coordinar las operaciones necesarias para cumplir con los requisitos del negocio.

La responsabilidad principal de la capa de acceso de datos es facilitar la interacción entre el microservicio y la fuente de datos. Además, se encarga de realizar operaciones de lectura, escritura y manipulación de datos.

La capa de modelo es una capa transversal que define las estructuras de datos que se utilizan en todo el sistema. Contiene las definiciones de las entidades, DTOs (Data Transfer Objects) y otros modelos de datos que se comparten entre las diferentes capas. Esta capa promueve la reutilización de los modelos y mantiene la consistencia de los datos a lo largo del microservicio.

![alt text](image-1.png)