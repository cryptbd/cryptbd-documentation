---
sidebar_label: 'Security'
sidebar_position: 5
---
# Security

In our system, data security and user privacy are fundamental aspects. To achieve this, we have implemented a series of security measures including user authentication and resource authorization.

User authentication is the essential first step in protecting our system. When registering, users provide passwords that are securely stored in our database.

To protect these passwords, we apply a robust hashing algorithm, specifically SHA-256. We use the `hashlib` library for this purpose. Additionally, we implement the concept of SALT, which is a unique and random value added to the password before hashing. The idea behind SALT is to add an extra layer of security to the system.

User passwords are stored as irreversible hashes rather than plain text, ensuring that even in the event of a security breach, passwords remain inaccessible.

Once a user successfully authenticates, a JWT (JSON Web Token) is generated containing the necessary authentication data. This token acts as a secure credential that the client includes in subsequent requests. The use of JWT eliminates the need to send credentials with every request, reducing the security risks associated with password transmission.

To ensure controlled access to resources, we implement security measures at the endpoint level. This strategy allows us to specify which resources and actions are accessible to each authenticated user. This is achieved through the integration of libraries such as Flask-JWT-Extended, which provide an additional layer of security to the system.
