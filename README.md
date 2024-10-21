# Product Management Backend

Este es el backend de la aplicación de gestión de productos, desarrollado en Node.js. Proporciona una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Navega a la carpeta del **server**:

   ```bash
   cd server
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Ejecución

1. Inicia el servidor:

   ```bash
   npm run dev
   ```

2. El backend estará corriendo en `http://localhost:5000`.

## Configuración

1. Asegúrate de que el archivo `data/products.json` exista y contenga un array vacío `[]` para comenzar,
por otro lado, el archivo json tiene información para probar con la herramienta postman. 

2. Puedes utilizar herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar las rutas de la API.

   - **GET** `/api/products` - Listar todos los elementos.
   - **GET** `/api/products/:id` - Obtener un elemento por ID.
   - **POST** `/api/products` - Agregar un nuevo elemento.
   - **PUT** `/api/products/:id` - Actualizar un elemento existente.
   - **DELETE** `/api/products/:id` - Eliminar un elemento.
