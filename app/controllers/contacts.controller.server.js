// Kidist AKlilu, 301220223, Oct/23/2022,

import contactModel from '../models/contact.js'

import { UserDisplayName } from '../utils/index.js'

export function DisplayContactList(req, res, next) {
  contactModel
    .find(function (err, contactsCollection) {
      if (err) {
        console.error(err)
        res.end(err)
      }

      res.render('index', {
        title: 'Contact List',
        page: 'Phonebook/list',
        contacts: contactsCollection,
        displayName: UserDisplayName(req),
      })
    })
    .sort({ name: 1 })
}
export function DisplayContactsAddPage(req, res, next) {
  res.render('index', {
    title: 'Add Contact',
    page: 'Phonebook/edit',
    contact: {},
    displayName: UserDisplayName(req),
  })
}

export function ProcessContactsAddPage(req, res, next) {
  let newContact = contactModel({
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
  })

  contactModel.create(newContact, (err, contactsCollection) => {
    if (err) {
      console.error(err)
      res.end(err)
    }
    res.redirect('/contact-list')
  })
}

export function DisplayContactEditPage(req, res, next) {
  let id = req.params.id

  contactModel.findById(id, (err, contactsCollection) => {
    if (err) {
      console.error(err)
      res.end(err)
    }

    res.render('index', {
      title: 'Edit Contact',
      page: 'Phonebook/edit',
      contact: contactsCollection,
      displayName: UserDisplayName(req),
    })
  })
}

export function ProcessContactEditPage(req, res, next) {
  let id = req.params.id

  let newContact = contactModel({
    _id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
  })

  contactModel.updateOne({ _id: id }, newContact, (err, contactsCollection) => {
    if (err) {
      console.error(err)
      res.end(err)
    }

    res.redirect('/contact-list')
  })
}

export function ProcessContactDelete(req, res, next) {
  let id = req.params.id

  contactModel.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err)
      res.end(err)
    }

    res.redirect('/contact-list')
  })
}
