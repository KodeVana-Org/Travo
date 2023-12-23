import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-gray-400">404</h1>
      <h2 className="text-4xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you&lsquo;re looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-[#FCC603] hover:bg-[#029D9D] text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  </div>
  );

  export default NotFound