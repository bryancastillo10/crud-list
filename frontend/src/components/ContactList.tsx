interface Contact{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface ContactListProps {
  contacts:Contact[]
}

const ContactList = ({contacts}:ContactListProps) => {
  return (
    <div>
      <h2>The Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>User Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((con) => (
            <tr key={con.id}>
              <td>{con.firstName}</td>
              <td>{con.lastName}</td>
              <td>{con.email}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList;
