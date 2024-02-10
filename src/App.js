import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner";







function App() {
  const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  
  async function fetchData(){
      setLoading(true);
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        const { results } = data;
        const userData = results[0];
        setFirstName(userData?.name?.first);
        setLastName(userData?.name?.last);
        setProfilePic(userData?.picture?.large);
        setGender(userData?.gender);
        setPhone(userData?.phone);
        setLoading(false);
      } catch(error) {
        console.log("Error in fetching data:", error);
        setLoading(false);
      }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
         <Spinner />
      ) : (
              
     

//   <div className="flex items-center justify-center h-screen ">
//   <div className="mx-auto  relative w-[42%] min-h-[22vw] group rounded-xl p-10 cursor-pointer
//     bg-no-repeat hover:scale-105 transition-all duration-200
//     bg-[url(./images/bg.jpg)]  max-h-[500px]
//   ">
//     {/* SVG Background */}
//     <div className="absolute inset-0 bg-[url(./images/instant-settlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instant-settlement-bghover.svg)] rounded-xl z-[-1]"></div>
//     <div className="absolute inset-0 bottom-4 bg-[url(./images/instantsettlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instantsettlement-hoverbg.svg)] rounded-xl z-[-1] "></div>
//     <div className="flex flex-col lg:flex-row items-center h-full gap-5 ">
//       {/* Profile Picture */}
//       <div className="h-full flex items-center justify-center ">
//         <img 
//           src={profilePic} 
//           alt="Profile" 
//           className="mr-4 min-w-[100px] w-[200px] h-[200px] rounded-full border-4 border-white shadow-lg"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-5  special">
//   <div className="flex flex-col lg:flex-row lg:gap-5">
//     <p className="font-bold bounce ">First Name: {firstName}</p>
//     <p className="font-bold bounce">Last Name: {lastName}</p>
//   </div>
//   <p className="font-bold bounce ">Gender: {gender}</p>
//   <p className="font-bold bounce">Phone: {phone}</p>
// </div>


//     </div>
//   </div>
// </div>

<div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-600 to-slate-900 z-[-9] ">
  <div className=" manas mx-auto  relative w-[42%] min-h-[22vw] group rounded-xl p-10 cursor-pointer
    bg-no-repeat hover:scale-105 transition-all duration-200
    bg-[url(./images/bg.jpg)]  
  ">
    {/* SVG Background */}
    <div className="absolute inset-0 bg-[url(./images/instant-settlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instant-settlement-bghover.svg)] rounded-xl z-[-1]"></div>
    <div className="absolute inset-0 bottom-4 bg-[url(./images/instantsettlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instantsettlement-hoverbg.svg)] rounded-xl z-[-1] "></div>
    <div className="flex flex-col lg:flex-row items-center h-full gap-5 overflow-y-none">
      {/* Profile Picture */}
      <div className="h-full flex items-center justify-center ">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="mr-4 min-w-[100px] w-[200px] h-[200px] rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5   special">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <p className="font-bold bounce text-center lg:text-left">First Name: {firstName}</p>
          <p className="font-bold bounce text-center lg:text-left">Last Name: {lastName}</p>
        </div>
        <p className="font-bold bounce text-center lg:text-left">Gender: {gender}</p>
        <p className="font-bold bounce text-center lg:text-left">Phone: {phone}</p>
      </div>
    </div>
  </div>
</div>


      )}
    </div>
  );
}

export default App;
