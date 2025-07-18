
const CustomerReviews = () => {
  return (
    <>
      <div className=" py-20 px-10 md:px-20 ">
        <h3 className="heading text-4xl text-center">What Our Customers Say</h3>
        <div className="flex justify-center flex-wrap gap-8 pt-20">
          <div className="bg-[#F9F9F7] w-80 p-7 space-y-3 rounded-xl">
            <p className="text-[#AA2D37] font-bold">"The best  restaurant"</p>
            <p className="text-[#575A4D]">Last night, we dined at place and were simply blown away. From the moment we stepped in, we enveloped in an inviting atmosphere and greeted with warm smiles.</p>
            <hr />
            <div className="flex gap-5 items-center">
              <img className="w-16" src="images/Ellipse.png" alt="Ellipse " />
              <div>
                <p>Sophire Robson</p>
                <p className="text-[#636659]">Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F7] w-80 p-7 space-y-3 rounded-xl">
            <p className="text-[#AA2D37] font-bold">"Simply delicious"</p>
            <p className="text-[#575A4D]">place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
            <hr />
            <div className="flex gap-5 items-center">
              <img className="w-16" src="images/Image (1).png" alt="user " />
              <div>
                <p>Matt Cannon</p>
                <p className="text-[#636659]">San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F7] w-80 p-7 space-y-3 rounded-xl">
            <p className="text-[#AA2D37] font-bold">"One of a kind restaurant"</p>
            <p className="text-[#575A4D]">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
            <hr />
            <div className="flex gap-5 items-center">
              <img className="w-16" src="images/Image (2).png" alt="user " />
              <div>
                <p>Andy Smith</p>
                <p className="text-[#636659]">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerReviews
