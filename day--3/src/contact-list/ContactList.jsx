import React, { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";

import "./styles.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setContacts(data.results);
      });
  }, []);

  return (
    <div className="contact-list">
        <h2>CONTACT LIST</h2>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </div>
  );
};

export default ContactList;
