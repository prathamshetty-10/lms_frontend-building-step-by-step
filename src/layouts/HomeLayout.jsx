import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
function HomeLayout({children}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    //checking if user is logged in property getting from current state
    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn);
    //for displaying the options according to role property from current role
    const role=useSelector((state)=>state?.auth?.role);


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
    function handleLogout(e){
        e.preventDefault();
        //const res=await dispatch(logout());
        
        navigate("/")//navigate to home page

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
                    <li className="w-fit absolute right-2 z-50 ">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}/>
                        </button>
                    </li>
                    <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                        <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn && role=="ADMIN" && (
                        <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                        </li>

                    )}
                    <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                        <Link to="/courses">All Courses</Link>
                    </li>
                    <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                        <Link to="/about">About us</Link>
                    </li>
                    {!isLoggedIn &&(
                        
                        <div className="w-full flex items-center justify-center">
                            <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full m-1 bg-blue-500 hover:bg-blue-200 hover:text-blue-600">
                                <Link to="/login">Login</Link>
                            </button>
                            <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full m-1  bg-blue-500 hover:bg-blue-200 hover:text-blue-600">
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>
                        
                    )
                    }
                    {isLoggedIn &&(
                        
                        <div className="w-full ">
                            <li className="border border-black rounded-md font-semibold hover:bg-blue-300 m-1">
                                <Link to="/user/profile">user Profile</Link>
                            </li>
                            <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full m-1  bg-blue-500 hover:bg-blue-200 hover:text-blue-600">
                                <Link onClick={handleLogout}>logout</Link>
                            </button>
                        </div>
                        
                    )
                    }

                
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