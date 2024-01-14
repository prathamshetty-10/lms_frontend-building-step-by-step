import HomeLayout from "../layouts/HomeLayout";
import AboutMainImage from "../assets/images/AboutMainImage.png"
import AbdulKalam from "../assets/images/AbdulKalam.png"
import Modi from "../assets/images/Modi.png"
import SteveJobs from "../assets/images/SteveJobs.png"
import MotherTeresa from "../assets/images/MotherTeresa.png"
import BillGates from "../assets/images/BillGates.png"
function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white ">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education
                            to the world. We are providing the platform for the aspiring teachers and 
                            students to share their skills creativity and knowledge to each other
                        </p>
                    
                    </section>
                    <div className="w-1/2 px-8 my-5">
                        <img id="test1" style={{filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"}}
                        className="drop-shadow-2xl" src={AboutMainImage} height={500} width={500}/>
                    </div>
                
                
                </div>
                <div className="m-300"></div>
                <div className="carousel w-1/2 my-16 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%] w-full">
                            <img src={Modi} className="w-60 rounded-md border-2 border-gray-200" />
                            <p className="text-xl text-gray-200 ">Come to ayodya do the ram pooja shri ram will bless u with all his love and power</p>
                            <h3 className="text-2xl font-semibold">Narendra Modi</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={BillGates} className="w-60 border-2 border-gray-200 rounded-md" />
                            <p className="text-xl text-gray-200 ">i Made microsoft i am rich and i am very rich and i am super rich and also genenrous</p>
                            <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={MotherTeresa} className="w-60 border-2 border-gray-200 rounded-md" />
                            <p className="text-xl text-gray-200 ">i support peace and love children i wear white everyday and i am very kind</p>
                            <h3 className="text-2xl font-semibold">Mother Teresa</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={AbdulKalam} className="w-60 border-2 border-gray-200 rounded-md" />
                            <p className="text-xl text-gray-200 ">I am kalam from poor backgroud i am muslim rocket scientist loved bvy all</p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={SteveJobs} className="w-60 border-2 border-gray-200 rounded-md" />
                            <p className="text-xl text-gray-200 ">i have a job that is to sell expensive phones make everyone poor</p>
                            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>
        
        
        
        </HomeLayout>
    
    );

};
export default AboutUs;