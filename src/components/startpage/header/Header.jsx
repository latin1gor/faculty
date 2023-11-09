const Header = () => {
  return (
    <>
      <div className="bg-black">
        <div className=" flex flex-col purple-image leading-[73px] justify-start pb-48  w-full    ">
          <div className=" flex justify-start opacity-quick-search rounded-xl items-center p-24 pb-[800px]  ">
            <div className="flex  flex-col p-4   text-gray-300 drop-shadow-2xl items-center   rounded-xl    opacity-rd h-auto    w-full">
              <div className="text-center p-10   text-gray-200 text-[70px] font-black max-w-[1100px] text-shadow  animated-block opacity-animation ">
                Create the future now, join Faculty of Electronics.
              </div>
              <h1 className="animated-block1 text-white text-lg text-shadow m-5 opacity-animation">
                Best place for
                <span className="text-pink-600 fira font-bold "> progress </span>
                and turning
                <span className="text-pink-600 fira  font-bold"> innovations </span>
                into reality
              </h1>
              <div className="flex animated-block1  font-semithin text-lg items-center m-2">
                <a
                  href="#"
                  className="text-white gradient  py-4 px-9 opacity-90 hover:opacity-100  hover:drop-shadow-md hover:text-white  transition ease-in-out duration-100 rounded-xl   "
                >
                  Get started
                </a>
                <div className="flex  opacity-quick-search mx-3 cursor-pointer items-center  py-4 px-9 opacity-90 hover:drop-shadow-md hover:text-white  hover:bg-gray-600 hover:opacity-100 transition ease-in-out duration-100 rounded-xl ">
                  <span className="material-symbols-outlined mr-2">search</span>
                  <div>
                    <button className="">Quick search...</button>
                    <span className="ml-6 font-semithin opacity-70 ">
                      Ctrl K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
