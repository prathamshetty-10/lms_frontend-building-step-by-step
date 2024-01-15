import { useNavigate } from "react-router-dom";

function CourseCard({ data }){
    const navigate=useNavigate();//on clicking the card it takes to other page
    return(
        <div onClick={()=>navigate("/course/description")} className="text-white w-[20rem] h-[400px] shadow-lg shadow-gray-800 rounded-lg cursor-pointer group overflow-hidden bg-zinc-700 hover:scale-105 mt-10" >
            <div className="overflow-hidden " >
                <img className="h-48 w-full rounded-tl-lg rounded-tr-lg transition-all ease-in-out duration-300" src={data?.thumbnail?.secure_url} alt="course thumbnail" />
                <div className="p-3 space-y-1 text-white">
                    <h2 className="text-xl font-bold  text-yellow-500 line-clamp-2" >{data?.title}</h2>
                    <p className="line-clamp-2"> {data?.description}</p>
                    <p className="font-semibold"> 
                    <span className="text-yellow-500 font-bold">Category:</span>
                    {data?.category}</p>
                    <p className="font-semibold"> 
                    <span className="text-yellow-500 font-bold"> Total Lectures:</span>
                    {data?.numbersOfLectures}</p>
                    <p className="font-semibold"> 
                    <span className="text-yellow-500 font-bold">created by:</span>
                    {data?.createdBy}</p>

                
                </div>


            </div>  
                  
        </div>
    )

}
export default CourseCard;