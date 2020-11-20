### Backend Test: Desafío Envíame

El siguiente desafío busca conocer más como abordas y solucionas diferentes problemas. El desafío consta de 4 etapas, las cuales evaluaremos de manera independiente.

**Asegurate de dejar tu trabajo en un repositorio de github y al finalizar tu tarea nos compartes el repositorio donde deben incluirse todas las instrucciones para que podamos ejecutar tu trabajo de manera local**

En caso de preguntas dirigete a: *tech-test@enviame.io*, usando el asunto [Backend-Test]

#### Ejercicio 1: Docker

Configura un ambiente en docker que permita ejecutar un entorno web con el stack a tu elección. 
El contenedor de la base de datos debe ser diferente al que contenga tu aplicación, ej: Contenedor 1: Nginx, Contenedor 2: Mysql (composición de servicios docker)

#### Ejercicio 2: API REST + CRUD

Dentro del ambiente dockerizado desarrolla una API Rest, con el stack de tu preferencia, que implemente un CRUD de una entidad tipo 'empresa'. Preocupate de incluir: 
* Un endpoint que permita listar todos los registros.
* Crea una función que genere al menos 10 registros con datos Random (puedes usar alguna librería que genere datos faker) a partir de la estructura de respuesta que obtuviste en el punto anterior. Permite que esta función sea accesible mediante un endpoint de tu API.

#### Ejercicio 3: Análisis + Desarrollo 

Crea un script en el lenguaje de tu elección y encuentra la cadena de texto que es igual al revés en el siguiente texto:

`afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood`

#### Ejercicio 4: Consumo API Envíame para la creación de un envío
Desarrolla una función o script que consuma la API Envíame para la creación de un Envío y almacene la respuesta en algún medio de almacenamiento permanente.
Documentación (Postman) del endpoint a usar: [Colección Postman](https://drive.google.com/file/d/17svdMNqTu2ZQ4XOm4jVVKQ8uEccFdHDc/view=)


#### Ejercicio 5: Análisis + Desarrollo Aplicado a Negocio
Desarrolla una función o procedimiento que estime el tiempo de entrega de la entrega de una compra online (en días), en función de la distancia que existe entre una dirección de origen y destino.

Suponga que los envíos siempre se despachan desde el mismo origen.

Para la determinación de la distancia entre el origen y destino genere números aleatorios entre 0 km y 2.000 km
Asuma que el tiempo de despacho está determinado por una suseción numérica, donde cada N término se relaciona con un incremento en un rango de distancia entre la dirección de origen y de destino como se muesta a continuación.

* Rango 1. Menos de 100 km, se entregan el mismo día (Día cero) 
* Rango 2. Menos de 200 km, se entregan al día siguiente (Día uno)
* Rango 3. Menos de 300 km, se entregan al día siguiente (Día uno)
* Rango 4. Menos de 400 km, se entregan al día subsiguiente (Día dos)
* Rango 5. Menos de 500 km, se entregan al tercer día (Día tres)
...
* Rango n. Menos de n km, Los días de entrega se calculan como la suma de los días de entrega de los rangos n–1 y n-2

La ayuda: 
El cálculo de del término n se puede deducir de una serie matemática descrita como sigue:
f(0) = 0;
f(1) = 1;
fn = f(n-1) + f(n-2)
