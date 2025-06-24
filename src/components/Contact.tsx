import { useState } from "react";
import { Button } from '@mantine/core';
import { IconArrowRight, IconTopologyStar3 } from '@tabler/icons-react';
import FloatingInput from "./floatinginput";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formData, setFormData] = useState(form);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData(form); // reset
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 font-mono" id="Contact">
      <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-center text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Contact
      </h1>

      <div
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-6 border border-primaryColor p-6 sm:p-8 rounded-3xl shadow-[0_0_10px_0_#64FFDA50]"
      >
        <div className="text-2xl sm:text-3xl flex gap-2 items-center text-white font-semibold">
          Let's Connect
          <IconTopologyStar3 className="w-7 h-7 sm:w-9 sm:h-9 text-primaryColor" />
        </div>

        <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} />
        <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} />
        <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} />
        <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} />

        <Button
          fullWidth
          rightSection={<IconArrowRight size={20} />}
          variant="filled"
          size="lg"
          radius="lg"
          className="!text-bgColor !font-bold text-xl sm:text-2xl hover:scale-105 transition-transform duration-300"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
