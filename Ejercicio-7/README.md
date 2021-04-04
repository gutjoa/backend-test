# Ejercicio 7

## Instalación

### Requisitos

* Docker
* node: 14



Ejecutar el siguiente comando para iniciar el contenedor de mysql y phpadmint

```sh
docker-compose up -d
```

Restaurar la base de datos

```sh
cat db.sql | docker exec -i ejercicio7-db /usr/bin/mysql -u root --password=secret ejercicio7
```


### Uso

Comando para ejecutar el ejercicio

```sh
node index
```

Para visualizar la base de datos ingresar a la siguiente URL

```sh
http://localhost:8081/

Credenciales:
user: root
password: secret
```

## Autor

* Jorge Guitierrez [@gutjoa](https://github.com/gutjoa)