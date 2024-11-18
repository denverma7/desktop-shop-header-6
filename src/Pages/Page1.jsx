
import image_1 from '../assets/Images/Rectangle 14.png'
import image_2 from '../assets/Images/Rectangle 13.png'

const Page1 = () => {
  return (
    <div>
      {/* Main Container */}
      <div className='h-screen w-auto flex justify-center items-center mt-20'>
        <div className='grid grid-cols-9 grid-rows-4 gap-4 h-full w-full'>

           <div className="col-span-2 row-span-3 flex justify-center items-center mt-10 ml-10 "> {/* First Grid */}
            <img src={image_1} alt="Rectangle 13.png" />
          </div>

          <div className="col-span-3 row-span-3 flex justify- items-center mx-auto mt-24">{/* Second Grid */}
            <div className='relative z-10'>
              <h3 className='text-[#23a6f0] font-semibold ml-72'>SUMMER 2020</h3>
              <p className='text-7xl font-sans font-bold ml-28 tracking-wider mt-5'>Multicoloured</p>
              <p className='text-7xl font-sans font-bold ml-24 tracking-wider w-full '>Tie-dye Sweater</p>
              <p className='text-lg mt-5 ml-40 flex justify-center text-slate-500 tracking-wider'>We know how large objects will act,</p> <br />
              <div className='ml-20'>
                <button className='rounded-md mx-auto my-2 py-2 px-8 text-[#23a6f0] text-xs font-semibold flex items-center justify-around border-2 border-[#23A6F0]' >SHOP NOW</button>
              </div>
            </div>            
          </div>

          <div className="col-span-4 row-span-3 flex justify-end items-center relative"> {/* Third Grid */}
            <img className='mt-14 h-auto ' src={image_2} alt="Rectangle 14.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1