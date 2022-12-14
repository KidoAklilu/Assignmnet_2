import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    contactNumber: String,
  },
  {
    timestamps: true,
    collection: 'phonebook',
  }
)
export default mongoose.model('Contacts', ContactSchema)
