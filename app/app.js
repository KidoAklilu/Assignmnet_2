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

//Auth step 1

//Import Mongoose module
import passport from 'passport'
import passportLocal from 'passport-local'
import flash from 'connect-flash'

//Auth step 2 -definr auth strategy
let localStrategy = passportLocal.Strategy

// Auth Step 3 - import the user model
import User from './models/user.js'

import mongoose from 'mongoose'

//configurarion module
import { MongoURI, Secret } from '../config/config.js'

//import router

import indexRouter from './routes/index.route.server.js'
import contactRouter from './routes/contacts.route.server.js'
import authRouter from './routes/auth.route.server.js'

//instance app-server
const app = express(MongoURI)

//DB configuration
mongoose.connect(MongoURI)
const db = mongoose.connection

//Listen for connection success or error
db.on('open', () => console.log('Connected to MongoDB'))
db.on('error', () => console.log('Mongo Connection Error'))

//set up viewENgine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

//Auth step 4
app.use(
  session({
    secret: Secret,
    saveUninitialized: false,
    resave: false,
  })
)

//Auth step 5
app.use(flash())

//auth step 6

app.use(passport.initialize())
app.use(passport.session())

// Auth Step 7 - Implement the Auth Strategy
passport.use(User.createStrategy())

// Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//add routes

app.use('/', indexRouter)
app.use('/', contactRouter)
app.use('/', authRouter)

export default app
