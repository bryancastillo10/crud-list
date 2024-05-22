import { ChangeEvent, useState } from "react";

const InitialValues = {
    firstName: "",
    lastName: "",
    email:"",
}

const FillUpForm = () => {
    const [forms, setForms] = useState(InitialValues);
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setForms({...forms,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, email } = forms;
        const data = {firstName, lastName, email};
        const url = "http://127.0.0.1/5000/create_contact"
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, requestOptions)
        if (response.status !== 201 && response.status !== 200) {
            const message = await response.json()
            alert(message.message)
        } else {
            alert("Contact successfully created");
        }
    }

    return (
        <div className="mt-10 border-2 border-solid border-black p-5 rounded-xl">
            <h1 className="font-bold text-center">Contact Form</h1>
      <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" className="bg-blue-200 rounded-xl p-1 indent-1"
                  onChange={handleChange}
              />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="bg-blue-200 rounded-xl p-1 indent-1"
                  onChange={handleChange}
              />
                <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className="bg-blue-200 rounded-xl p-1 indent-1"
                  onChange={handleChange}
              />
                </div>
                <div className="flex justify-center max-w-[200px] mx-auto mt-4">
                    <button type="submit" className="text-white
                    bg-blue-700 rounded-2xl p-2 hover:bg-blue-500"
                    >Create Contact</button>
                    </div>
        </form>
    </div>
  )
}

export default FillUpForm;
