import { Router } from 'express'

import {
  DisplayContactEditPage,
  DisplayContactList,
  DisplayContactsAddPage,
  ProcessContactEditPage,
  ProcessContactDelete,
  ProcessContactsAddPage,
} from '../controllers/contacts.controller.server.js'

const router = Router()

router.get('/contact-list', DisplayContactList)
router.get('/contact-add', DisplayContactsAddPage)
router.post('/contact-add', ProcessContactsAddPage)
router.post('/contact-edit/:id', ProcessContactEditPage)
router.get('/contact-edit/:id', DisplayContactEditPage)
router.get('/contact-delete/:id', ProcessContactDelete)

export default router
