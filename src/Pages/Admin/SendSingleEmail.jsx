import React, { useState } from "react";
import { FormArea, FormRow } from "../../components";
import { useUserContext } from "../../context/user_context";

const SendSingleEmail = () => {
  const { sendSingleEmail } = useUserContext();

  const [emailObj, setEmailObj] = useState({
    reciver: "",
    subject: "",
    text: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendSingleEmail(emailObj)
  };

  const handleChange = (e) => {
    setEmailObj((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full p-5">
      <div className="w-full bg-white text-center p-4 capitalize drop-shadow-md">
        <h2 className="text-2xl font-bold">Send E-mail for single users</h2>
      </div>
      <form className="w-full mt-4 p-5" onSubmit={handleSubmit}>
        <FormRow
          type="text"
          label="Reciver E-mail"
          placeholder="Enter the reciver email."
          value={emailObj.reciver}
          name="reciver"
          onChange={handleChange}
        />
        <FormRow
          type="text"
          label="Subject"
          placeholder="Enter the email subject."
          value={emailObj.subject}
          name="subject"
          onChange={handleChange}
        />
        <FormRow
          type="text"
          label="Email Title"
          placeholder="Enter the email title."
          value={emailObj.title}
          name="title"
          onChange={handleChange}
        />
        <FormArea
          type="text"
          label="Email Concept"
          placeholder="Enter the email title."
          value={emailObj.text}
          name="text"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-100 text-blue-600 py-3 px-5 rounded hover:bg-blue-600 text hover:text-blue-100 delay-150 ease-in"
        >
          Send E-mail
        </button>
      </form>
    </div>
  );
};

export default SendSingleEmail;
