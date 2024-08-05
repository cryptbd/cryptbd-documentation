---
sidebar_label: 'Desarrollo'
sidebar_position: 2
---

# Desarrollo

## Herramientas utilizadas

### Control de versiones

Para lograr trabajar en equipo de manera organizada, sincronizada y transparente se decidió utilizar **Git**, que es un sistema de control de versiones potente y flexible que permite gestionar el historial de cambios en el código fuente, y **GitHub**, que es una plataforma que aprovecha las capacidades de Git para fomentar la colaboración, la revisión del código y la administración de proyectos de desarrollo.

### Entorno de desarrollo o IDE

Como entorno de desarrollo o IDE, se optó por la utilización de **Visual Studio Code**, que es gratuito y de código abierto, es multiplataforma, liviano y rápido. Además, es altamente personalizable, se pueden descargar y añadir una amplia cantidad de extensiones, contiene una terminal integrada y una sólida integración con sistemas de control de versiones como Git. 

### Base de datos

Para el desarrollo de la base de datos se optó por el sistema de gestión de base de datos relacionales conocido como Microsoft **SQL Server**. 

### Front End

Para el desarrollo Front End utilizamos **HTML**, **CSS** y **JavaScript**. Existe una abundante documentación y recursos, y hay una gran comunidad de desarrolladores, sumado a actualizaciones y mejoras constantes. 

Se ha hecho uso de **JQuery**, una biblioteca de JavaScript diseñada para simplificar y agilizar la manipulación del DOM y la interacción con HTML, CSS y eventos en páginas web. 

Otra de las bibliotecas que se utilizó fue **Ajax**, ya que permite ejecutar código en el cliente, es decir, en el navegador de los usuarios mientras se mantiene la comunicación asíncrona con el servidor en segundo plano. De esta forma es posible realizar cambios sobre las páginas sin necesidad de recargarlas, mejorando la interactividad, velocidad y usabilidad en las aplicaciones.

### Back End

Hemos elegido **Python** como lenguaje de programación principal. Es un lenguaje versátil y poderoso que nos proporciona todas las herramientas necesarias para desarrollar una aplicación web eficiente y de alto rendimiento. Una de las principales ventajas de usar Python para este proyecto es que cuenta con un ecosistema robusto de bibliotecas, tanto para ciencia de datos como para desarrollo web, que vamos a especificar a continuación.

Como framework web, utilizamos **Flask**, que es ligero y flexible. La combinación de Flask, **Blueprints** y **Requests** permite desarrollar una aplicación web potente y eficiente. Flask nos proporciona la estructura y la base para construir nuestra aplicación, mientras que los Blueprints nos ayudan a mantener el código organizado y modularizado. Las solicitudes HTTP con Requests nos permiten acceder a datos actualizados y brindar a nuestros usuarios una experiencia en tiempo real y enriquecida con información relevante sobre criptomonedas.

### Documentación

Para facilitar la comprensión, mejorar la legibilidad y mantenibilidad del código se ha decidido documentar el mismo. Se ha optado por **Docstring**, una cadena de texto que se utiliza para documentación en distintos lenguajes de programación, en nuestro caso Python. Su función principal es proporcionar información sobre el propósito y el comportamiento de cada componente del código.

### Ciencia de datos

Para la aplicación de ciencia de datos, utilizamos dos bibliotecas de Python muy poderosas: **Plotly** y **Pandas**. Estas herramientas nos permiten llevar nuestras visualizaciones y análisis de datos al siguiente nivel. 

Con Plotly, podemos crear gráficos de líneas, barras, dispersión, diagramas de sectores, entre otros. Su capacidad de interactividad nos permite, por ejemplo, agregar zoom y herramientas de selección a los gráficos, lo que brinda una experiencia más inmersiva a nuestros usuarios. 

Gracias a Pandas, podemos manejar y manipular nuestros datos de manera eficiente. Esta biblioteca nos permite cargar, limpiar, transformar y analizar conjuntos de datos de una manera sencilla y eficaz. Podemos realizar operaciones como filtrar datos, agruparlos y calcular estadísticas relevantes con facilidad.


### Seguridad

Se decidió trabajar con **JSON Web Tokens** (JWT), ya que es especialmente adecuado su uso en aplicaciones web y APIs RESTful que buscan ser stateless y escalables. Además, JWT es ideal para manejar la autenticación y autorización de usuarios en aplicaciones web. 

En arquitecturas basadas en microservicios, JWT puede ser utilizado para la comunicación segura y autenticada entre diferentes servicios. Al generar y firmar tokens, los servicios pueden verificar la identidad de las solicitudes entrantes y permitir o denegar el acceso según los datos contenidos en el token.

