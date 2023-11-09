import * as lucideIcons from 'lucide-react';
import { items } from './items'
const WhyChooseUs = () => {
  return (
    <div className="bg-black flex purple-best flex-col p-28 py-40 text-white w-full">
      <h1 className="font-black text-5xl text-center text-shadow">What you reach?</h1>
      <ul className="flex justify-evenly text-2xl">
        {items &&
          items.map(item => {
            const IconComponent = lucideIcons[item.icon]
            return (
              <div key={item.id}  className="flex flex-col cursor-pointer items-center py-10 pt-10 m-6 mt-20 rounded-[47px] border-4 border-gray-900 transition ease-in-out duration-200 hover:border-pink-700 w-96 h-96 bg-gray-900">
                <div className="mb-2">
                  {IconComponent && <IconComponent size={100} color="#8E1B52" />}
                </div>
                <li className="font-bold text-center text-2xl px-3">
                  {item.title}
                </li>
                <div className="font-semithin text-center text-[16px] pt-8 p-5 text-gray-200">
                  {item.text}
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default WhyChooseUs;
