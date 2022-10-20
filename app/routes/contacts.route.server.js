import { Router } from 'express'

import {
  DisplayContactList,
  DisplayContactsAddPage,
} from '../controllers/contacts.controller.server.js'

const router = Router()

router.get('/contact-list', DisplayContactList)
router.get('/contact-add', DisplayContactsAddPage)

export default router
