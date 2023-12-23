
export default function contact() {
  const handleSendMessage = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        We&lsquo;d love to hear from you! If you have any questions, suggestions, or if you&lsquo;d like to inquire about our
        upcoming tours, feel free to reach out to us.
      </p>
      <div className="my-10 flex gap-20 text-left justify-center">
        <div className="">
          <p className="text-xl font-semibold mb-2">Send us a Message</p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-96 p-2 border-2 text-[#029D9D] focus:text-black border-[#029D9D] rounded-md outline-none"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-96 p-2 border-2 text-[#029D9D] focus:text-black border-[#029D9D] rounded-md outline-none"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-96 p-2 border-2 text-[#029D9D] focus:text-black border-[#029D9D] rounded-md outline-none resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-2 font-bold hover:text-[#029D9D] text-white hover:bg-white bg-[#029D9D] border-2 border-[#029D9D] rounded-md transition-all duration-200"
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-semibold mb-2">Contact Information</p>
          <p className="text-lg mb-2">Email: info@travo.com</p>
          <p className="text-lg mb-2">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}
