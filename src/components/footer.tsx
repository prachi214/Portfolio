import {Info} from "../user"

const Footer=()=>{

    return(
<div className=' mx-36 mt-10 mb-8 font-mono flex flex-col gap-2 items-center' id="Footer">
<div className="text-3xl text-primaryColor font-semibold text-center">{Info.name}</div>
<div className="text-textColor text-xl">Copyright &copy; {new Date().getFullYear()} {Info.name} | All Rights reserved</div>

</div>
    )

}
export default Footer;