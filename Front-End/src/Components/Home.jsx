import Bike from '../Assets/bike.webp';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate(`../login`);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="container max-w-md text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 leading-tight">Looking for a Service!</h1>
          <h3 className="text-3xl lg:text-5xl text-red-600 font-semibold mb-6 leading-tight">We are Here</h3>
          <button
            className="bg-blue-800 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg"
            onClick={navigateLogin}
          >
            Login Now
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
        <img src={Bike} alt="bike" className="w-full h-auto lg:max-h-full lg:mr-10" />
      </div>
    </div>
  );
}

export default Home;
