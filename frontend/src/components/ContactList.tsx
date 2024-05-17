interface ContactListProps {
    firstName: string;
    lastName: string;
    email:string;
}

const ContactList = ({contact}) => {
  return (
    <div>
          {contacts.map((t,id) => (
              <ul>
                  <li key={id}>{t.firstName}</li>
          </ul>
      ))}
    </div>
  )
}

export default ContactList;
