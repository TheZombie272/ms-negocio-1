/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
import './routes/administradores'
import './routes/usuarios'
import './routes/departamentos'
import './routes/servicios'
import './routes/municipios'
import './routes/centrosdistribucion'
import './routes/direccion'
import './routes/hoteles'
import './routes/restaurantes'
import './routes/rutas'

import './routes/categorias'
import './routes/categoriasproductos'
import './routes/empresas'
import './routes/lotes'
import './routes/personasnaturales'
import './routes/productos'
import './routes/rutasdirecciones'
import './routes/vehiculosmunicipio'




