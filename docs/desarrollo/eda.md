---
sidebar_label: 'Análisis exploratorio de datos'
sidebar_position: 2
---

# Análisis exploratorio de datos

Una de las responsabilidades principales que tienen los servicios mencionados en la sección anterior es el desarrollo del análisis exploratorio de datos, que se dividió en varias etapas.

## Planteo y elección de técnica para el EDA

El primer paso en nuestro proceso de EDA fue definir el alcance y los objetivos del análisis. Identificamos las preguntas clave que queríamos responder y las técnicas de EDA que serían más apropiadas para abordar nuestros objetivos, básicamente elegimos qué tipos de gráficos utilizar para mostrar la información obtenida. Decidimos utilizar visualizaciones interactivas con Plotly y llevar a cabo el análisis en Jupyter Notebook para documentar y compartir nuestro trabajo de manera efectiva. 

## Obtener datos

Para la obtención de datos, creamos un servicio especializado que se conecta a la API de Coingecko, una fuente confiable de información sobre el mercado de criptomonedas. Esta API proporciona datos históricos y en tiempo real sobre precios, volumen de operaciones, capitalización de mercado, entre otros datos.

## Transformar y limpiar datos

Los datos obtenidos de la API requerían transformación y limpieza para ser útiles. 

### Limpieza de datos

Primero, llevamos a cabo tareas de limpieza de datos, que incluyeron:

Detección y manejo de datos faltantes: Estos son valores ausentes en el conjunto de datos que pueden provocar errores en la visualización. Identificamos y tratamos estos valores para evitar impactos negativos en el análisis.

Detección y corrección de datos ruidosos: Los datos ruidosos incluyen errores o valores atípicos que pueden distorsionar los resultados. Aplicamos técnicas para corregir o eliminar estos datos.

Eliminación de duplicados: Identificamos y removimos registros duplicados para asegurar la integridad y precisión de los datos.

Estos tres tipos de datos fueron cuidadosamente identificados y tratados para garantizar la calidad de nuestro conjunto de datos.

### Preparación de datos

Luego, procedimos a la preparación de datos, que incluyó:

Transformación de datos: En algunos casos, fue necesario redondear valores, formatear fechas, normalizar datos y realizar otras transformaciones para adecuar los datos al formato requerido.

Integración de datos: Integración de datos estructurados (organizados en tablas) y datos no estructurados (como imágenes o enlaces) para consolidar toda la información relevante en un formato coherente.

Reducción de datos: Identificamos las características más relevantes de los datos y descartamos las que no eran necesarias, con el fin de reducir el volumen de datos y facilitar su manejo.

## Generar tablas

Luego de limpiar y transformar los datos recopilados creamos tablas y conjuntos de datos estructurados para tenerlos de manera organizada. Estas tablas se utilizaron como base para el análisis y la visualización.

## Definir casos de uso

Identificamos y definimos los casos de uso específicos que queríamos abordar con nuestro análisis. Esto incluyó la comparación de patrones de precios, capitalización de mercado y volumen de diferentes criptomonedas a lo largo del tiempo.

## Desarrollar modelo

El análisis exploratorio nos proporcionó información valiosa que utilizamos para desarrollar los gráficos que nos propusimos en la definición de alcance. Entre estos gráficos se encuentran gráficos de barra, gráficos de torta, gráficos de líneas, gráficos burbuja, mapas de calor, entre otros.

## Testing del modelo

Realizamos pruebas del modelo utilizando datos históricos, observando si se había logrado la correcta eliminación de valores atípicos. Asimismo, verificamos la inserción efectiva de valores nulos y si los formatos de fecha y hora se habían normalizado adecuadamente.

## Corrección del modelo

A medida que identificamos errores durante las pruebas, implementamos mejoras basadas en los resultados obtenidos. Fue un proceso continuo hasta lograr el resultado esperado.

## Implementar el modelo

Una vez que el modelo fue satisfactorio, lo implementamos en nuestro sistema. Donde también realizamos las pruebas pertinentes para que todo funcione acorde a lo establecido.
