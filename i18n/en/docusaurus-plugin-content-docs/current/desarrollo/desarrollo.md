---
sidebar_label: 'Development'
sidebar_position: 2
---

# Development

## Tools Used

### Version Control

To work as a team in an organized, synchronized, and transparent manner, we decided to use **Git**, a powerful and flexible version control system that manages the history of changes in source code, and **GitHub**, a platform that leverages Git capabilities to promote collaboration, code review, and project management.

### Development Environment or IDE

For the development environment or IDE, we opted for **Visual Studio Code**. It is free and open-source, cross-platform, lightweight, and fast. Additionally, it is highly customizable with a wide range of extensions available, includes an integrated terminal, and has solid integration with version control systems like Git.

### Database

For database development, we chose the relational database management system known as Microsoft **SQL Server**.

### Front End

For front-end development, we used **HTML**, **CSS**, and **JavaScript**. There is abundant documentation and resources available, along with a large developer community and constant updates and improvements.

We utilized **JQuery**, a JavaScript library designed to simplify and speed up DOM manipulation and interaction with HTML, CSS, and events on web pages.

Another library used was **Ajax**, which allows code to be executed on the client side, i.e., in the user's browser, while maintaining asynchronous communication with the server in the background. This enables making changes to web pages without reloading them, improving interactivity, speed, and usability in applications.

### Back End

We chose **Python** as the primary programming language. It is versatile and powerful, providing all the necessary tools for developing an efficient and high-performance web application. One of the main advantages of using Python for this project is its robust ecosystem of libraries for both data science and web development, which we will specify below.

As a web framework, we used **Flask**, which is lightweight and flexible. The combination of Flask, **Blueprints**, and **Requests** allows us to develop a powerful and efficient web application. Flask provides the structure and foundation for building our application, while Blueprints help maintain organized and modular code. HTTP requests with Requests enable us to access updated data and provide our users with a real-time and enriched experience with relevant cryptocurrency information.

### Documentation

To facilitate understanding, improve code readability, and maintainability, we decided to document the code using **Docstring**, a text string used for documentation in various programming languages, in our case Python. Its primary function is to provide information about the purpose and behavior of each component of the code.

### Data Science

For data science applications, we used two very powerful Python libraries: **Plotly** and **Pandas**. These tools allow us to take our visualizations and data analysis to the next level.

With Plotly, we can create line charts, bar charts, scatter plots, pie charts, among others. Its interactivity features enable us to add zoom and selection tools to the charts, providing a more immersive experience for our users.

Thanks to Pandas, we can handle and manipulate our data efficiently. This library allows us to load, clean, transform, and analyze datasets in a simple and effective manner. We can perform operations such as filtering data, grouping it, and calculating relevant statistics with ease.

### Security

We decided to use **JSON Web Tokens** (JWT) as it is especially suitable for use in web applications and RESTful APIs that aim to be stateless and scalable. Additionally, JWT is ideal for handling user authentication and authorization in web applications.

In microservices-based architectures, JWT can be used for secure and authenticated communication between different services. By generating and signing tokens, services can verify the identity of incoming requests and grant or deny access based on the data contained in the token.
