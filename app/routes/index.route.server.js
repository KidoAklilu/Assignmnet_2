// index route
import { Router } from 'express'

import {
  displayAboutPage,
  displayContactPage,
  displayHomepage,
  displayProjectPage,
  displayServicesPage,
} from '../controllers/index.controller.server.js'

const router = Router()

router.get('/', displayHomepage)
router.get('/home', displayHomepage)
router.get('/about', displayAboutPage)
router.get('/contact', displayContactPage)
router.get('/services', displayServicesPage)
router.get('/projects', displayProjectPage)

export default router
