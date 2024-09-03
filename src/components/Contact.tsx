import { useState } from "react";
import { Button } from '@mantine/core';
import { IconArrowRight,IconTopologyStar3 } from '@tabler/icons-react';
import FloatingInput from "./floatinginput";

const Contact=()=>{
    const form={
        name:"",
        email:"",
        phone:"",
        message:""
    }
    const [formData, setFormData] = useState(form);
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
     
    }
    return <div className='px-16 mx-20 my-10 font-mono' id="Contact">
    <h1 className='text-4xl mb-5 font-bold text-center text-white '><span className='text-primaryColor'>04. &nbsp;</span>Contact</h1>
<div  data-aos="flip-right" data-aos-duration="800" data-aos-easing="ease-in-sine"    className=" w-[70%] !shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl " >

    <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">Let's Connect<IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" /></div>
    <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange}/>
    <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange}/>
    <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange}/>
    <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange}/>
    <Button fullWidth     rightSection={<IconArrowRight size={20} />} variant="filled" size="lg" radius="lg" className="!text-bgColor !font-bold text-2xl ">Send</Button>;

</div>
    </div>
    }
    export default Contact;

