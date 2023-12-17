import { onScrollDown } from '../lib/utils.js'

const News = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col purple-image2  justify-start pb-48  bg-white w-full    ">
        <div className="flex justify-start  items-center m-4 mt-10 ">
          <div className="flex  flex-col p-4 text-gray-300 drop-shadow-2xl items-center   rounded-xl  opacity-quick-search h-auto    w-full">
            <div className="p-10  text-white text-shadow max-w-[970px] text-[45px] font-black  animated-block opacity-animation ">
              NEWS
            </div>
            <div
              onClick={() => onScrollDown(450)}
              className="flex animated-block1 font-semithin text-lg items-center m-2"
            >
              <a
                href="#"
                className="text-gray-900 gradient  py-4 px-9 opacity-90 hover:opacity-100  hover:drop-shadow-md  transition ease-in-out duration-100 rounded-xl   "
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E8594] "></div>
      <div className="h-96 w-full bg-[#808797]"> </div>
    </div>
  )
}

export default News
