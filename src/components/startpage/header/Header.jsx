import { onScrollDown } from '../../../lib/utils.js'

const Header = () => {
  return (
    <>
      <div className="bg-black">
        <div className=" flex flex-col purple-image leading-[73px] justify-start pb-48  w-full    ">
          <div className=" flex justify-start opacity-quick-search rounded-xl items-center p-24 pb-[800px]  ">
            <div className="flex  flex-col p-4   text-gray-300 drop-shadow-2xl items-center   rounded-xl    opacity-rd h-auto    w-full">
              <div className="text-center p-10   text-gray-200 text-[65px] font-black max-w-[1100px] text-shadow  animated-block opacity-animation ">
                Create the future now, join Faculty of Electronics.
              </div>
              <h1 className="animated-block1 text-white text-lg text-shadow m-5 opacity-animation">
                Best place for
                <span className="text-pink-600 fira font-bold ">
                  {' '}
                  progress{' '}
                </span>
                and turning
                <span className="text-pink-600 fira  font-bold">
                  {' '}
                  innovations{' '}
                </span>
                into reality
              </h1>
              <div className="flex animated-block1  font-semithin text-lg items-center m-2">
                <a
                  onClick={() => onScrollDown(750)}
                  href="#"
                  className="text-white gradient  py-4 px-16 opacity-90 hover:opacity-100  hover:drop-shadow-md hover:text-white  transition ease-in-out duration-100 rounded-xl"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
