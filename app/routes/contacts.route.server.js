import { Router } from 'express'

import {
  DisplayContactEditPage,
  DisplayContactList,
  DisplayContactsAddPage,
  ProcessContactEditPage,
  ProcessContactDelete,
  ProcessContactsAddPage,
} from '../controllers/contacts.controller.server.js'
import { AuthGuard } from '../utils/index.js'

const router = Router()

router.get('/contact-list', DisplayContactList)
router.get('/contact-add', AuthGuard, DisplayContactsAddPage)
router.post('/contact-add', AuthGuard, ProcessContactsAddPage)
router.post('/contact-edit/:id', AuthGuard, ProcessContactEditPage)
router.get('/contact-edit/:id', AuthGuard, DisplayContactEditPage)
router.get('/contact-delete/:id', AuthGuard, ProcessContactDelete)

export default router
