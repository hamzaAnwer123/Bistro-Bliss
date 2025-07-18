import { IoChevronDown } from 'react-icons/io5'
import HeroInformation from '../components/HeroInformation'

const BookTable = () => {
  return (
    <>
      <div className='py-20 px-10 md:px-20 relative'>
        <div className='pb-32'>
          <HeroInformation title={"Book A Table"} />
        </div>
        <div className='absolute top-[120%] md:top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col space-y-16'>
          <form action="#" className='w-full md:w-[40rem] bg-white shadow-2xl p-12 space-y-4 rounded-md'>
            <div className='flex  justify-between flex-wrap w-full'>
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="Date">Date</label>
                <input className='border-2  border-[#E8EBE1] rounded-full py-3 px-4' type="date" id='Date' />
              </div>
             
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="time" className="text-gray-700 font-medium">Time</label>
                <div className="relative">
                  <select
                    name="time"
                    id="time"
                    className='border-2 border-[#E8EBE1] rounded-full py-3 pl-4 pr-10 w-full appearance-none bg-white text-gray-700 '
                  >
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                  </select>
                  <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <IoChevronDown />
                  </span>
                </div>
              </div>

            </div>
            <div className='flex  justify-between flex-wrap w-full'>
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="name">Name</label>
                <input className='border-2  border-[#E8EBE1] rounded-full py-3 px-4' type="text" id='name' placeholder='Enter your name' />
              </div>
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="phone">Phone</label>
                <input className='border-2  border-[#E8EBE1] rounded-full py-3 px-4' type="tel" id='phone' placeholder='Enter your name' />
              </div>
            </div>

            <div className='flex flex-col space-y-2 w-full '>
              <label htmlFor="time">Time</label>
              <div className='relative '>

                <select name="time" id="time" className='border-2 appearance-none border-[#E8EBE1] rounded-full py-3 px-4 w-full'>
                  <option value="1-Person">1 Person</option>
                  <option value="2-Person">2 Person</option>
                  <option value="3-Person">3 Person</option>
                  <option value="4-Person">4 Person</option>
                  <option value="8-Person">8 Person</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <IoChevronDown />
                </span>
              </div>
            </div>

            <button className="py-3 w-full bg-[#AD343E] text-white cursor-pointer rounded-full font-medium">Book A Table</button>
          </form>

        </div>
      </div>
      <img className='w-full h-[70vh]' src="images/Map.png" alt="" />

    </>
  )
}

export default BookTable
