import express  from "express";
import corse from 'cors'
import {PORT} from './config.js'
import routesProv from './controllers/proveedores.controller.js'
import routesMat from './controllers/materiales.controller.js'
import routesCom from './controllers/compras.controller.js'
import routesDetCom from './controllers/compras_detalle.controller.js'

const app = express()

app.use(express.json())
app.use(corse())
app.use(routesProv)
app.use(routesMat)
app.use(routesCom)
app.use(routesDetCom)
app.listen(PORT)
console.log(`server is listening in port ${PORT}`)