# Iniciar el proyecto

## 1. Iniciar el servidor

1. Ir a la carpeta del servidor:
    ```bash
    cd server/
    ```

2. Instalar las dependencias necesarias:
    ```bash
    npm install
    ```

3. Levantar la base de datos MongoDB con Docker Compose:
    ```bash
    docker compose up -d
    ```

4. Iniciar el servidor en modo de desarrollo:
    ```bash
    npm run start:dev
    ```

En [http://localhost:3000/api](http://localhost:3000/api) está la documentación de Swagger.
En [http://localhost:3000/api-json](http://localhost:3000/api-json) está la especificación OpenAPI en formato JSON.

## 2. Iniciar el cliente

1. Ir a la carpeta del cliente:
    ```bash
    cd client/
    ```

2. Instalar las dependencias necesarias:
    ```bash
    npm install
    ```

3. Generar los enpoints en el cliente a partir de la especificación OpenAPI:
    ```bash
    npm run api:generate
    ```

    Esto ejecuta el comando `openapi-generator-cli`, que genera automáticamente los endpoints del backend en la carpeta `src/common/api/generated`.
    Este comando utiliza la ruta [http://localhost:3000/api-json](http://localhost:3000/api-json) para obtener la especificación OpenAPI,
    por lo que es necesario que el **servidor esté en funcionamiento** antes de ejecutarlo.

5. Iniciar el cliente en modo de desarrollo:
    ```bash
    npm run start
    ```

El cliente estará disponible en [http://localhost:5173](http://localhost:5173), donde se podrá interactuar con la aplicación web.
