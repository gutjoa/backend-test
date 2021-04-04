# Ejercicio 4

## Instalación

### Requisitos

* Docker


Ejecutar el siguiente comando para iniciar el contenedor de mysql y phpadmint

```sh
docker-compose up -d
```

### Uso

Utilizar en postman estructura del archivo [Backend-test.postman_collection.json](./Backend-test.postman_collection.json) 


Ejecutar la siguiente URL 

```sh
http://localhost:3000/api/shipping
```

Para revisar los valores insertados, realizarlo en la siguiente URL:

```sh
http://localhost:8081/

Credenciales:
user: root
password: secret
```

## Autor

* Jorge Guitierrez [@gutjoa](https://github.com/gutjoa)