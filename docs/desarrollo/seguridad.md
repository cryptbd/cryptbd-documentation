---
sidebar_label: 'Seguridad'
sidebar_position: 5
---

# Seguridad

En nuestro sistema, la seguridad de los datos y la privacidad de los usuarios son aspectos fundamentales. Para lograr esto, implementamos una serie de medidas de seguridad que incluyen la autenticación de usuarios y la autorización de recursos.

La autenticación de usuarios es el primer paso esencial en la protección de nuestro sistema. Al registrarse, los usuarios proporcionan contraseñas que se almacenan de manera segura en nuestra base de datos. 

Para proteger estas contraseñas, aplicamos un sólido algoritmo de hash, en particular, el hash SHA-256. Para ello utilizamos la biblioteca hashlib. Además, se aplicó el concepto de SALT, se trata de un valor único y aleatorio que se agrega a la contraseña antes de calcular su hash. La idea detrás del salt es agregar un grado más de seguridad al sistema. 

Las contraseñas de los usuarios se almacenan como hashes irreversibles en lugar de texto sin formato, lo que garantiza que incluso en caso de una violación de seguridad, las contraseñas permanezcan inaccesibles.

Una vez que un usuario se autentica con éxito, se genera un JWT (JSON Web Token) que contiene los datos de autenticación necesarios. Este token actúa como una credencial segura que el cliente incluye en sus solicitudes subsiguientes. El uso de JWT elimina la necesidad de enviar credenciales en cada solicitud, lo que reduce los riesgos de seguridad asociados a la transmisión de contraseñas.

Para garantizar un acceso controlado a los recursos, aplicamos medidas de seguridad a nivel de endpoints. Con esta estrategia, podemos especificar qué recursos y acciones son accesibles para cada usuario autenticado. Esto se logra mediante la integración de bibliotecas como Flask-JWT-Extended, que brindan una capa adicional de seguridad al sistema.
