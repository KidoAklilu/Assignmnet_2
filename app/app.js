//  Kidist AKlilu, 301220223, Oct/4/2022

// import express and third partymodules
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import session from 'express-session'

//ES modules fic for __dirname
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

//configurarion module
import { Secret } from '../config/config.js'

//import router

import indexRouter from './routes/index.route.server.js'

//instance app-server
const app = express()

//set up viewENgine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))
app.use(
  session({
    secret: Secret,
    saveUninitialized: false,
    resave: false,
  })
)

//add routes

app.use('/', indexRouter)

export default app
