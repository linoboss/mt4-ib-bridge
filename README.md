# MT4-IB BRIDGE

Provee una API REST que facilita la transferencia de informacion desde el MetaTrader 4 hacia los clientes de Interactive Brokers.

## Instalacion

Descargar y ejecutar:

    npm install

## Rutas

### get '/'

Sencilla interfaz para simular la transmision de datos.

### post '/'

Transmite una operacion al servidor. JSON:

    {
        price: float,
        date: str
    }

### get '/operations'

Retorna todas las operacions marcadas como NO vistas

### post '/operations'

Marca como vistas las ids enviadas al servidor. JSON:

    {
        ids: "['id0', ... , 'idN']"
    }

### get 'operations/all'

Devuelve todas las operaciones almacenadas en la base de datos.

## STACK

* **Template engine**: pug
* **Backend**: Express
* **Database**: MongoDB
* **Estructura**: dizque MVC



