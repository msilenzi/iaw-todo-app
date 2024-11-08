# Iniciar el proyecto

**Algunos enlaces útiles:**

- [nestjs-swagger-auth0](https://github.com/PascalKrijnberg/nestjs-swagger-auth0/tree/master)
  - Repo con un proyecto configurado para trabajar con NestJS, Swagger y Auth0.
- [Developing a Secure API with NestJS. Auth0](https://auth0.com/blog/developing-a-secure-api-with-nestjs-getting-started/)
  - Tutorial oficial de Auth0 para trabajar con NestJS.

## 1. Configurar Auth0

1. [Crear una nueva API](./.assets/Auth0%20setup/1.%20Create%20API.png)
2. [Crear una nueva aplicación tipo SPA](./.assets/Auth0%20setup/2.%20Create%20App.png)
3. Configurar las rutas de la aplicación (_Application URIs_):
   - **Allowed Callback URLs:** `http://localhost:5173, http://localhost:3000/api/oauth2-redirect.html`
   - **Allowed Logout URLs** `http://localhost:5173, http://localhost:3000/api`
   - **Allowed Web Origins** `http://localhost:5173, http://localhost:3000/api`

Imágenes con la configuración completa para [App](./.assets/Auth0%20setup/Todo%20APP%20settings.png) y [API (_no se modifica_)](./.assets/Auth0%20setup/Todo%20API%20settings.png)

## 1. Iniciar el servidor

1. Ir a la carpeta del servidor:

   ```bash
   cd server/
   ```

2. Crear el archivo `.env` y completar con los siguientes campos:

   - `PORT` es puerto donde se va a ejecutar el servidor.
   - `AUTH0_ISSUER_URL` tiene la forma `https://<AUTH0-TENANT-NAME>.us.auth0.com/` donde `<AUTH0-TENANT-NAME>` es el identificador del tenant donde está la API ([se puede ver en la esquina superior izquierda](./.assets/Auth0%20setup/Tenant%20Name.png))
   - `AUTH0_AUDIENCE` es el identificador (_identifier_) de la API de Auth0 (se puede ver desde los _settings_ de la API)
   - `AUTH0_CLIENT_ID` es el identificador de la aplicación (se puede ver desde los _settings_ de la app)
   - `DB_URI` URI a mongo DB, si se usa la imagen de docker usar `mongodb://localhost:27017/todo-api`. También puede ser una URI a MongoDB Atlas.

3. Instalar las dependencias necesarias:

   ```bash
   npm install
   ```

4. Levantar la base de datos MongoDB con Docker Compose:

   ```bash
   docker compose up -d
   ```

5. Iniciar el servidor en modo de desarrollo:
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

2. Crear el archivo `.env` y completar con los siguientes campos:

   - `VITE_AUTH0_DOMAIN` tiene la forma `<AUTH0-TENANT-NAME>.us.auth0.com`
   - `VITE_AUTH0_CLIENT_ID` mismo valor que `AUTH0_CLIENT_ID`
   - `VITE_AUTH0_AUDIENCE` mismo valor que `AUTH0_AUDIENCE`
   - `VITE_API_BASE_URL` URL base del backend.

3. Instalar las dependencias necesarias:

   ```bash
   npm install
   ```

4. Generar los enpoints en el cliente a partir de la especificación OpenAPI:

   ```bash
   npm run api:generate
   ```

   Esto ejecuta el comando `openapi-generator-cli`, que genera automáticamente los endpoints del backend en la carpeta `src/common/api/generated`.
   Este comando utiliza la ruta [http://localhost:3000/api-json](http://localhost:3000/api-json) para obtener la especificación OpenAPI,
   por lo que es necesario que el **servidor esté en funcionamiento** antes de ejecutarlo.

5. Iniciar el cliente en modo de desarrollo:
   ```bash
   npm run dev
   ```

El cliente estará disponible en [http://localhost:5173](http://localhost:5173), donde se podrá interactuar con la aplicación web.
