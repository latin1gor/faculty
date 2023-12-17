import { Star } from "lucide-react";

const Quote = () => {
    return (
        <div className="bg-black h-[1000px] flex flex-col items-center text-center p-5 text-white pt-40">
            <img src=".././img/furgala.jpg" alt="" srcSet="" className="h-64 w-64 rounded-full mb-10" />
            <div className="flex flex-col items-center p-10 gradient2 rounded-[44px] bg-[#8e1b53e2] h-64 w-[900px] shadow-xl">
              <div className="flex items-center pb-1">
                 <Star  className="pb-0.5 mr-1"/>
                <h1 className="text-xl">Yuriu Furgala</h1>
              </div>
                <h2 className="text-sm">Dekan</h2>
                <p className="text-lg mt-4"> 3-month courses are enough they say... That is why now employers cannot find a suitable programmer for 1 vacancy out of a thousand applicants.</p>
            </div>
        </div>
    );
};

export default Quote;