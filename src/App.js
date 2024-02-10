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
              
     



<div class="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-600 to-slate-900 z-[-9] ">
  <div class=" customshadow mx-auto justify-center relative w-full max-w-lg min-h-[22vw] group rounded-xl p-10 sm:p-6 cursor-pointer
    bg-no-repeat hover:scale-105 transition-all duration-200
    bg-[url(./images/bg.jpg)]  
  ">
   
    <div class="absolute inset-0 bg-[url(./images/instant-settlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instant-settlement-bghover.svg)] rounded-xl z-[-1]"></div>
    <div class="absolute inset-0 bottom-4 bg-[url(./images/instantsettlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instantsettlement-hoverbg.svg)] rounded-xl z-[-1] "></div>
    <div class="flex flex-col lg:flex-row items-center h-full gap-5 overflow-y-none">
   
      <div class="flex items-center lg:mt-6 justify-center lg:justify-start ">
        <img 
          src={profilePic} 
          alt="Profile" 
          class="mr-4 min-w-[100px] w-[200px] h-[200px] rounded-full border-4 border-white shadow-lg"
        />
      </div>

      
      <div class="flex flex-col gap-5 special mt-auto">
        <div class="flex flex-col lg:flex-row lg:gap-5">
          <p class="font-bold bounce text-center lg:text-left">First Name: {firstName}</p>
          <p class="font-bold bounce text-center lg:text-left">Last Name: {lastName}</p>
        </div>
        <p class="font-bold bounce text-center lg:text-left">Gender: {gender}</p>
        <p class="font-bold bounce text-center lg:text-left">Phone: {phone}</p>
      </div>
    </div>
  </div>
</div>


/*<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-neutral-600 to-slate-900">
  <div class="mx-auto px-4 py-6 md:p-8 lg:p-10 relative w-full max-w-lg rounded-xl bg-cover bg-center bg-[url(./images/bg.jpg)] overflow-hidden">
    <!-- SVG Background -->
    <div class="absolute inset-0 bg-[url(./images/instant-settlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instant-settlement-bghover.svg)] rounded-xl z-[-1]"></div>
    <div class="absolute inset-0 bottom-4 bg-[url(./images/instantsettlement-bg.svg)] bg-no-repeat group-hover:bg-[url(./images/instantsettlement-hoverbg.svg)] rounded-xl z-[-1] "></div>
    <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-5 overflow-y-auto">
      <!-- Profile Picture -->
      <div class="flex items-center justify-center lg:justify-start">
        <img 
          src={profilePic} 
          alt="Profile" 
          class="mr-4 min-w-[100px] w-[200px] h-[200px] rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <!-- Content -->
      <div class="flex flex-col gap-5 flex-1">
        <div class="flex flex-col lg:flex-row lg:gap-5">
          <p class="font-bold text-lg text-center lg:text-left">First Name: {firstName}</p>
          <p class="font-bold text-lg text-center lg:text-left">Last Name: {lastName}</p>
        </div>
        <p class="font-bold text-lg text-center lg:text-left">Gender: {gender}</p>
        <p class="font-bold text-lg text-center lg:text-left">Phone: {phone}</p>
      </div>
    </div>
  </div>
</div> */


      )}
    </div>
  );
}

export default App;
