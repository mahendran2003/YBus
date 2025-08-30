import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Bus1 from "../../../assets/bus1.png"
import Bus2 from "../../../assets/bus6.png"
import Bus3 from "../../../assets/bus9.png"
import 'bootstrap/dist/css/bootstrap.min.css';
 // Import Bootstrap JS


const Category = () => {
    return (
        // <div>
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch] '>
        <div className="row">
  <div className="col-12 flex items-center justify-between">
    <h1 className="text-2xl font-medium mb-6 text-color-info">
      Category
    </h1>
    <Link to={"/bus"} classN    ame="text-violet-600">
      View All
    </Link>
  </div>
</div>


            <div className="row d-flex " style={{justifyContent : 'space-between'}}>

            <div className="col-md-3">
                <Link to={"/bus"} className="bg-neutral block rounded-xl px-4 py-5 relative group ease-in-out duration-300 ">
                    <img src={Bus1} alt="bus.img"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration 300">
                        <h2 className="text-2xl font-bold text-center text-neutral dark:text-neutral-50">
                            Private Bus
                        </h2>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">

                <Link to={"/bus2"} className="bg-neutral block rounded-xl px-4 py-5 relative group ease-in-out duration-300 ">
                    <img src={Bus2} alt="bus.img" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration 300">
                        <h2 className="text-2xl font-bold text-center text-neutral dark:text-neutral-50">
                            Tourist Bus
                        </h2>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">

                <Link to={"/bus3"} className="bg-neutral block rounded-xl px-4 py-5 relative group ease-in-out duration-300 ">
                    <img src={Bus3} alt="bus.img" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration 300">
                        <h2 className="text-2xl font-bold text-center text-neutral dark:text-neutral-50">
                            Government Bus
                        </h2>
                    </div>
                </Link>
            </div>
            
            </div>
        </div>
    )
}

export default Category;
