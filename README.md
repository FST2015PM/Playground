# Playground
Repositorio para pruebas y experimentación con los frameworks y bibliotecas de visualización de datos.

## Estructura del repositorio
Existe una carpeta para experimentar con [gráficas](https://github.com/FST2015PM/Playground/tree/master/charts), [tablas](https://github.com/FST2015PM/Playground/tree/master/datatables) y [mapas](https://github.com/FST2015PM/Playground/tree/master/maps) respectivamente. Cada carpeta tiene una estructura similar a la siguiente:

````bash
├── index.html  //Boilerplate de una página con bootstrap
├── css  //Directorio para agregar hojas de estilo
└── js //Directorio para agregar código javascript o bibliotecas necesarias
````

## Preparación del ambiente

### Instalar nodejs
Para instalar nodejs puede consultar la [página oficial](https://nodejs.org/en/) o [este wiki](https://github.com/haxdai/AEB1011Exercises/wiki/Node-JS).

### Instalar módulos para desarrollo
Deberá instalar bower a través de línea de comandos con la siguiente instrucción:

````sh
npm install -g bower
````

Puede instalar un servidor de http ligero a través de línea de comandos con la siguiente instrucción:

````sh
npm install -g http-server
````

### Clonar el repositorio
Usando el cliente de línea de comandos de git:
````sh
git clone https://github.com/FST2015PM/Playground.git
````

### Instalar dependencias de desarrollo
Deberá escribir las siguientes instrucciones:

````sh
npm install
bower install
````

También se puede clonar el repositorio utilizando [github desktop](https://desktop.github.com/).

## Flujo de trabajo
El flujo de trabajo después de preparar el ambiente y clonar el repositorio es algo como:

* Iniciar el servidor web
````sh
http-server -p 9000
````
* Abrir el navegador e ir a localhost:9000/index.html
* Hacer las modificaciones a los archivos
* Enviar los cambios al repositorio

## Herramientas para desarrollo
Editores de código:

* [Atom](https://atom.io/) (recomendado)
* [Brackets](http://brackets.io/)
* [Netbeans IDE](https://netbeans.org/)
