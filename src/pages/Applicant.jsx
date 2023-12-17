import {
  items,
  studentItems,
} from '../components/startpage/why-choose-us/items.js'
import * as lucideIcons from 'lucide-react'
import LoaderGif from '../../img/loader.gif'
import { onScrollDown } from '../lib/utils.js'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase-config.js'
import ComparisonTable from '../components/startpage/comparison-table/ComparisonTable.jsx'
const Applicant = () => {
  const [specialties, setSpecialties] = useState([])
  const spec = collection(db, 'specialties')
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(spec)
      setSpecialties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchData()
  }, [])
  return (
    <div className="bg-black">
      <div className="flex flex-col bg-image3 justify-start pb-48  bg-white w-full    ">
        <div className="flex justify-start  items-center m-4 mt-10 ">
          <div className="flex  flex-col p-4 text-gray-300 drop-shadow-2xl items-center   rounded-xl  opacity-quick-search h-auto    w-full">
            <div className="p-10  text-white text-shadow max-w-[970px] text-[45px] font-black  animated-block opacity-animation ">
              All information for applicant
            </div>
            <div
              onClick={() => onScrollDown(780)}
              className="flex animated-block1 font-semithin text-lg items-center m-2"
            >
              <div className="text-gray-900 cursor-pointer gradient text-white  py-4 px-9 opacity-90 hover:opacity-100  hover:drop-shadow-md  transition ease-in-out duration-100 rounded-xl   ">
                Discover
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full bg-black text-white flex flex-col items-center justify-center py-40">
        {specialties.length > 0 ? (
          <>
            {' '}
            <h1 className={'font-black text-3xl my-5 '}>Specialities list</h1>
            <table className={'p-4  bg-fuchsia-600 text-white rounded-2xl'}>
              <thead>
                <tr>
                  <td className={'mx-5 px-6 py-3 font-semibold'}>
                    Specialty Name
                  </td>
                  <td className={'mx-5 px-6 py-3 font-semibold'}>
                    Specialty Number
                  </td>
                </tr>
              </thead>
              <tbody>
                {specialties.map((item) => (
                  <tr key={item.id}>
                    <td className={'mx-5 px-6 py-2'}>{item.name}</td>
                    <td className={'mx-5 px-6 py-2'}>{item.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            {' '}
            <img src={LoaderGif} className={'h-14'} />{' '}
          </>
        )}
      </div>
      <ComparisonTable />
    </div>
  )
}

export default Applicant
