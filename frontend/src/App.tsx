import { useState, useEffect } from "react";
import { ContactList,FillUpForm } from "./components";

interface ContactList {
  id: number;
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
    <div className="flex flex-col justify-center items-center">
      <h1>Dashboard</h1>
      <ContactList contacts={contacts} />
        <FillUpForm />
   </div>
 )
  
}

export default App