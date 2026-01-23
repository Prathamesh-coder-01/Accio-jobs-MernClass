import { useState } from 'react';
import './App.css';

import InputField from './Components/inputFile';
import TextAreaField from './Components/textArea';
 import Button from './Components/Button';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };
  
  return (
    <> 
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        
        <InputField
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <TextAreaField
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />

        <Button text="Submit" />
      </form>
    </div>

    </>
  );
}

export default App;
