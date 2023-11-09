import { ArrowRight, Check, X, User, DollarSign, BookOpen, CheckIcon } from 'lucide-react'
const ComparisonTable = () => {


  return (
    <div className="bg-[#111827] h-[1100px]  text-center p-5  text-white pt-40 ">
      <h1 className="text-4xl font-semithin text-shadow py-6 mb-16">
        Why Lviv National Universtity?
      </h1>	

      <table className="m-auto w-[1400px] text-xl  rounded-lg overflow-hidden shadow-lg">
      
      <tbody>
      <tr className='flex justify-between'>
          <td className="p-6 w-80"></td>
          <td className="p-6 ">Polytechnic</td>
          <td className="p-6 pl-2 w-64 flex font-black text-[#d73986]">LNU</td>
        </tr>
      <tr className="bg-gray-800 flex justify-between">
          <td className="p-4 w-80 ">Sport life</td>
          <td className="p-4 "><Check className="h-6 w-6 text-green-500" /></td>
          <td className="p-4 w-64 flex "><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
        
        <tr className='flex justify-between'>
          <td className="p-4 w-80">Career abilities </td>
          <td className="p-4 "><Check className="h-6 w-6 text-green-500" /></td>
          <td className="p-4 w-64"><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
        <tr className="bg-gray-800 flex justify-between">
          <td className="p-4 w-80 ">Huge proffessors support</td>
          <td className="p-4 "><X className="h-6 w-6  text-red-500" /></td>
          <td className="p-4 w-64 "><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
        <tr className='flex justify-between'>
          <td className="p-4 w-80">Discovering projects</td>
          <td className="p-4 "><X className="h-6 w-6  text-red-500" /></td>
          <td className="p-4 w-64"><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
        <tr className="bg-gray-800 flex justify-between">
          <td className="p-4 w-80 ">New learning programs</td>
          <td className="p-4 "><X className="h-6 w-6  text-red-500" /></td>
          <td className="p-4 w-64 "><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
        <tr className='flex justify-between'>
          <td className="p-4 w-80">Dual learning (NEW) </td>
          <td className="p-4 "><X className="h-6 w-6  text-red-500" /></td>
          <td className="p-4 w-64"><Check className="h-6 w-6 text-green-500" /></td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default ComparisonTable
