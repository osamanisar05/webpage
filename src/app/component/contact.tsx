import Image from "next/image";

export default function Contact() {
  return (
    <div className="p-4 mx-auto max-w-5xl bg-white font-[sans-serif]">
      <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-4">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-600 mb-8">
        For more information about our product & services, please feel free to drop us an email. 
        Our staff will always be there to help you out. Do not hesitate!
      </p>

      
      <div className="flex flex-col md:flex-row items-center">

        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <Image
            src="/adress.png"
            alt="Contact Us"
            className="rounded-lg shadow-lg max-h-[400px] object-cover"
          />
        </div>


        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center md:text-left">
            Contact us
          </h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
