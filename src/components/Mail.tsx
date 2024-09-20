const Mail = () => {
    return (
      <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-40 rotate-90">
        <div data-aos="fade-down-left" data-aos-duration="800">
          <a
            href="mailto:prachipatel5441@gmail.com"
            className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
          >
            prachipatel5441@gmail.com
          </a>
        </div>
        <hr className="border w-40 rounded-full  bg-textColor border-textColor" />
      </div>
    );
  };
  
  export default Mail;