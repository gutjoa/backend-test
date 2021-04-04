# Ejercicio 2

## Instalación

### Requisitos

* Docker


Ejecutar el siguiente comando para iniciar el contenedor de mysql y phpadmint

```sh
docker-compose up -d
```


### Uso

Para visualizar la base de datos ingresar a la siguiente URL

```sh
http://localhost:8081/

Credenciales:
user: root
password: secret
```


Para generar datos de prueba usar el siguiente comando

```sh
docker-compose exec node node fakerData
```


###  API

#### Listar (method = GET)

```sh
http://localhost:3000/api/business


Devolvera un array con los datos con la siquiente estructura:

    {
        "success": ,
        "msg": ,
        "data": []
    }

```

#### Crear (method = POST)

```sh
http://localhost:3000/api/business


Se debera enviar un array con la siguiente estructura:

    {
        "name": ,
        "address": ,
        "phone": ,
        "comune": ,
        "region": 
    }

luego de realizar la actualización devolvera la siguiente estructura:

    {
        "success": ,
        "msg": ,
    }

```


#### Editar (method = GET)

```sh
# La variable id es el identificador de la empresa
http://localhost:3000/api/business/{id}/edit


Devolvera un array con los datos con la siquiente estructura:

    {
        "success": ,
        "msg": ,
        "data": [
            {
                "id": ,
                "name": ,
                "address": ,
                "phone": ,
                "comune": ,
                "region": ,
                "createdAt": ,
                "updatedAt": 
            }
        ]
    }

luego de realizar la actualización devolvera la siguiente estructura:

    {
        "success": ,
        "msg": ,
    }

```

#### Actualizar (method = PUT)

```sh
# La variable id es el identificador de la empresa
http://localhost:3000/api/business/{id}/update


Se debera enviar un array con la siguiente estructura:

    {
        "name": ,
        "address": ,
        "phone": ,
        "comune": ,
        "region": 
    }

luego de realizar la actualización devolvera la siguiente estructura:

    {
        "success": ,
        "msg": ,
    }

```

#### Delete (method = DELETE)

```sh
# La variable id es el identificador de la empresa
http://localhost:3000/api/business/{id}


Devolvera un array con los datos con la siquiente estructura:

    {
        "success": ,
        "msg": ,
    }

```


## Autor

* Jorge Guitierrez [@gutjoa](https://github.com/gutjoa)