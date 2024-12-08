
import Image from "next/image"
export default function Footer(){
    return(
        <footer className="bg-gray 600 py-12 px-8 font-sans tracking-wide">
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
        <h2 className="lg:col-span-2 text-xl font-semibold text-gray-300"></h2>
        
        <div className="bg-transparent border border-gray-800 flex px-1 py-1 rounded-full">
          <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-300" />
          <button type='button'
          
            className="bg-gray-600 hover:bg-gray-700 transition-all text-gray-200 text-sm rounded-full px-5 py-2.5">Subscribe</button>
        </div>
      </div>

      <hr className="my-12 border-gray-800" />

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
        <div className="lg:col-span-3 max-lg:col-span-full">
          <a href='javascript:void(0)'><Image src="/frame.png" alt="logo" className='w-48' /></a>
          <p className="text-gray-600 text-sm lg:max-w-sm mt-6">400 University Drive Suite 200 Coral Gables,
          FL 33134 USA.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Links</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">Home
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">shop
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">About
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Help</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">Payment Options</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">Returns</a></li>
            <li><a href="javascript:void(0)" className="text-gray-600 hover:text-gray-200 text-sm">Privacy Policy</a></li>
            
          </ul>
    

        </div>
      </div>

      <p className='text-sm text-gray-300 mt-8'>© ReadymadeUI. All rights reserved.</p>
    </footer>
    )
}