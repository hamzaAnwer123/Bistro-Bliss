
const AboutInformation = () => {
    return (
        <>
            <div className="py-20 px-10 md:px-20 bg-[#F9F9F7] flex flex-wrap justify-evenly gap-7 items-center">
                <div className="w-[28rem] space-y-5">
                    <h3 className="heading text-4xl">A little information for our valuable guest</h3>
                    <p className="text-[#66695D]">At place, we believe that dining is not just food, but also about he overall experience. Our staff, renowned for their warmth and dedication strives to make every visit an unforgettable event.</p>
                    <div className="grid-cols-2 grid gap-3 md:gap-5 pt-4">
                        <div className="border-2 border-[#ECEEE6] bg-white justify-center items-center flex py-12 flex-col space-y-3 rounded-md">
                            <h5 className="heading text-4xl">3</h5>
                            <p className="text-[#66695D]">Location</p>
                        </div>
                        <div className="border-2 border-[#ECEEE6] bg-white justify-center items-center flex py-12 flex-col space-y-3 rounded-md">
                            <h5 className="heading text-4xl">1995</h5>
                            <p className="text-[#66695D]">Founded</p>
                        </div>
                        <div className="border-2 border-[#ECEEE6] bg-white justify-center items-center flex py-12 flex-col space-y-3 rounded-md">
                            <h5 className="heading text-4xl">65+</h5>
                            <p className="text-[#66695D]">Staff Members</p>
                        </div>
                        <div className="border-2 border-[#ECEEE6] bg-white justify-center items-center flex py-12 flex-col space-y-3 rounded-md">
                            <h5 className="heading text-4xl">100%</h5>
                            <p className="text-[#66695D] text-center">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
                <img src="images/Mask group (11).png" alt="" />
            </div>
        </>
    )
}

export default AboutInformation
