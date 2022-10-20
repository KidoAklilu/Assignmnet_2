import contactModel from '../models/contact.js'

export function DisplayContactList(req, res, next) {
  contactModel.find(function (err, contactsCollection) {
    if (err) {
      console.error(err)
      res.end(err)
    }

    res.render('index', {
      title: 'Contact List',
      page: 'Phonebook/list',
      contacts: contactsCollection,
    })
  })
}
