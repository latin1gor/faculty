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
const Student = () => {
  const [professors, setProfessors] = useState([])
  const [schedule, setSchedule] = useState([])
  const professorsColectionRef = collection(db, 'professors')
  const scheduleRef = collection(db, 'schedule')
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(professorsColectionRef)
      setProfessors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(scheduleRef)
      setSchedule(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchData()
  }, [])
  return (
    <div className="bg-black">
      <div className="flex flex-col purple-image2  justify-start pb-48  bg-white w-full    ">
        <div className="flex justify-start  items-center m-4 mt-10 ">
          <div className="flex  flex-col p-4 text-gray-300 drop-shadow-2xl items-center   rounded-xl  opacity-quick-search h-auto    w-full">
            <div className="p-10  text-white text-shadow max-w-[970px] text-[45px] font-black  animated-block opacity-animation ">
              Info you need for student
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
        {professors.length > 0 ? (
          <div className={'flex flex-col items-center justify-around'}>
            {' '}
            <div>
              <h1 className={'font-black text-3xl my-5 '}>Exams schedule</h1>
              <table className={'p-4  bg-fuchsia-600 text-white rounded-2xl'}>
                <thead>
                  <tr>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>
                      Group name
                    </td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>
                      Discipline name
                    </td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Date</td>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item) => (
                    <tr key={item.id}>
                      <td className={'mx-5 px-6 py-2'}>{item.group}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.discipline}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={'mt-20'}>
              <h1 className={'font-black text-3xl my-5 '}>Professor List</h1>
              <table className={'p-4  bg-fuchsia-600 text-white rounded-2xl'}>
                <thead>
                  <tr>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Name</td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Surname</td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Age</td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Cathedra</td>
                    <td className={'mx-5 px-6 py-3 font-semibold'}>Email</td>
                  </tr>
                </thead>
                <tbody>
                  {professors.map((item) => (
                    <tr key={item.id}>
                      <td className={'mx-5 px-6 py-2'}>{item.name}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.surname}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.age}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.cathedra}</td>
                      <td className={'mx-5 px-6 py-2'}>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
            {' '}
            <img src={LoaderGif} className={'h-14'} />{' '}
          </>
        )}
      </div>
    </div>
  )
}

export default Student
