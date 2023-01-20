# PI-Videogames-BACKEND
### Individual Proyect - Henry Videogames  
<div align="center">
<img src="https://www.thenextrex.com/wp-content/uploads/2017/07/779fee53c6af41c1879f16077433f7f8.jpg" align="center" style="width: 100%" />
</div>  
  

### Éste es el proyecto individual que hice para el Bootcamp de Henry.  
  

## Objetivos del proyecto  
  

- Construir una App utlizando React, Redux, Node y Sequelize.
  
  

- Afirmar y conectar los conceptos aprendidos en la carrera.
  
  

- Aprender mejores prácticas.
  
  

- Aprender y practicar el workflow de GIT.
  
  

## Enunciado  
  

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa rawg y a partir de ella poder, entre otras cosas:

Buscar videjuegos
Filtrarlos / Ordenarlos
Agregar nuevos videojuegos

IMPORTANTE: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando ?key={YOUR_API_KEY} al final de cada endpoint. Agregar la clave en el archivo .env para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

IMPORTANTE: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

Únicos Endpoints/Flags que pueden utilizar
GET https://api.rawg.io/api/games
GET https://api.rawg.io/api/games?search={game}
GET https://api.rawg.io/api/genres
GET https://api.rawg.io/api/games/{id}

Requerimientos mínimos
A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

IMPORTANTE: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)  
  

## Tecnologías necesarias  
  

- React  
  

-  Redux  
  

- Express  
  

- Sequelize - Postgres  
  

## Base de Datos  
  

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):  
  

- Videojuego con las siguientes propiedades:  
  

     - ID: * No puede ser un ID de un videojuego ya existente en la - API rawg
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  -Rating
  -Plataformas *  
  

- Genero con las siguientes propiedades:  
  

  - ID
  - Nombre  
  

La relación entre ambas entidades debe ser de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos. Un ejemplo sería el juego Counter Strike pertenece a los géneros Shooter y Action al mismo tiempo. Pero a su vez existen otros videojuegos considerados como Shooter o como Action.

IMPORTANTE: Pensar como modelar los IDs de los videojuegos en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en algun videojuego, este puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API el videojuego Age of Empires II: Age of Kings tiene id = 1 y en nuestra base de datos creamos un nuevo videojuego Age of Henry con id = 1, ver la forma de diferenciarlos cuando querramos acceder al detalle del mismo.  
  

## Back End   
  

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

IMPORTANTE: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

*  GET /videogames:
Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal
 * GET /videogames?name="...":
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado
 * GET /videogame/{idVideogame}:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados
* POST /videogames:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros.
 * GET /genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí  
  

## Levantar el proyecto  
  

    npm start  
