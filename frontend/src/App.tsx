import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";

interface ContactList {
  firstName: string;
  lastName: string;
  email: string;
}

const App = () => {
  const [contacts, setContacts] = useState<ContactList[]>([])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
  }

  useEffect(() => {
    fetchContacts()
  },[])

  return (
    <div className="bg-green-500 text-center text-white w-full h-20">
      Test Render
      <ContactList contact={contacts} />
   </div>
 )
  
}

export default App
