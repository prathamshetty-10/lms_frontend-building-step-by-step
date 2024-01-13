import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import {Link} from "react-router-dom"
import Footer from "../components/footer";
function HomeLayout({children}){
    //this function is to change the width of the side menu bar
    function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width="auto";
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width=0;
        
    }
    return(
        <>
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                {/*here the ui shown in page is specified */}
                    <label htmlFor="my-drawer" className="cursor-pointer relative ">
                       <FiMenu size={"32px"} className="font-bold text-white m-4"
                       onClick={changeWidth}/> 
                    
                    </label>
                </div>
                <div className="drawer-side w-0">
                {/*these are the contents within the side bar */}
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content ">
                    <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}/>
                        </button>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">All Courses</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>

                
                </ul>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
        
        
        
        </>
    )

}
export default HomeLayout;