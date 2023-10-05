const Start = () => {
  return (
    <>
      {/* <div className="h-96 w-full bg-[#808797]"> </div> */}

      <div className="bg-black">
        <div className="flex flex-col parallax-container  justify-center pb-48  bg-white w-full    ">
          <div className="flex justify-start  items-center m-4 mt-10 ">
            <div className="flex  flex-col p-4 text-gray-300 drop-shadow-2xl items-center  rounded-xl    opacity-rd h-auto    w-full">
              <div
                id="content1"
                className="text-center p-10 parallax-content text-black text-[50px] font-black game-font animated-block opacity-animation "
              >
                programming is love{' '}
              </div>
              <div className="flex animated-block1 parallax-content font-medium text-lg items-center m-2">
                
                <a
                  
                  href="#"
                  className="text-gray-900 gradient  py-3 px-6 opacity-90 hover:opacity-100  hover:drop-shadow-md  transition ease-in-out duration-100 rounded-xl   "
                >
                  Discover
                </a>
                <div  className="flex  opacity-quick-search mx-3 cursor-pointer items-center  py-3 px-6 opacity-90 hover:drop-shadow-md hover:bg-gray-700 hover:opacity-100 transition ease-in-out duration-100 rounded-xl ">
                  <span className="material-symbols-outlined mr-2">search</span>
                  <div >

                  <button className=""  >
                    Quick search... 
                  </button>
                  <span className="ml-6 font-semithin opacity-70 ">Ctrl K</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#7E8594] "></div>
        <div className="bg-image2 w-full opacity-70 bg-cover bg-center h-screen">
          {' '}
        </div>
      </div>
    </>
  )
}

export default Start
