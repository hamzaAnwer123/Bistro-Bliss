
import HeroInformation from '../components/HeroInformation'

const Contact = () => {
  return (
    <>
      <div className='py-20 px-10 md:px-20 relative bg-[#F9F9F7]'>
      <div className='pb-32 bg-[#F9F9F7]'>
        <HeroInformation title={"Contact Us"} />
        </div>
        <div className='w-full absolute top-[150%] md:top-[130%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col space-y-16'>
          <form action="#" className='w-full md:w-[40rem] bg-white shadow-2xl p-12 space-y-4 rounded-md'>
            <div className='flex  justify-between flex-wrap w-full'>
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="name">Name</label>
                <input className='border-2  border-[#E8EBE1] rounded-full py-3 px-4' type="text" id='name' placeholder='Enter your name' />
              </div>
              <div className='flex flex-col space-y-2 w-full md:w-[48%]'>
                <label htmlFor="email">Email</label>
                <input className='border-2  border-[#E8EBE1] rounded-full py-3 px-4' type="email" id='email' placeholder='Enter email address' />
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="subject">Subject</label>
              <input className='border-2 border-[#E8EBE1] rounded-full py-3 px-4' type="email" id='subject' placeholder='Write a subject' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="message">Message</label>
              <textarea className='border-2 border-[#E8EBE1] rounded-2xl py-3 px-4' id="message" rows="7" placeholder='Write your message'></textarea>
            </div>
            <button className="py-3 w-full bg-[#AD343E] text-white cursor-pointer rounded-full font-medium">Send</button>
          </form>
          <div className='grid grid-cols-2 md:grid-cols-3 md:w-[40rem] px-8 w-full'>
            <div className='space-y-3'>
              <h5 className='font-semibold'>Call Us:</h5>
              <ul className='text-[#AA2C36] font-semibold'>
                <li>+1-234-567-8900</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='font-semibold'>Hours:</h5>
              <ul className='text-[#9C9E99]'>
                <li>Mon-Fir: 11am - 8pm </li>
                <li>sat-sun: 9am - 10pm </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='font-semibold'>Our Location:</h5>
              <ul className='text-[#9C9E99]'>
                <li>123 Bright Street Nowhere Land , LA 12345 United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[120vh] md:h-[90vh] bg-white'></div>
    </>
  )
}

export default Contact
