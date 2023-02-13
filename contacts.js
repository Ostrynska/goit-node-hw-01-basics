const fs = require('fs/promises');

// const contactsPath = async (filePath, action = 'read', data = '') =>
// {
//   switch (action) {
//     case 'read':
//       const contact = await fs.readFile(filePath, 'utf-8')
//       console.log(contact);
//       break;
//     case 'add':
//       const result = await fs.appendFile(filePath, data)
//       console.log(result);
//       break;
//     default:
//       break;
//   }
// }

const contactsPath = require('./db/contacts')

const listContacts = async() => {
  await fs.readFile('.db/')
}

const getContactById(contactId) {

}

const removeContact(contactId) {

}

const addContact(name, email, phone) {

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}