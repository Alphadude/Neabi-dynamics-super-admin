import React, { useState } from "react";

import AddUser from '../components/settingsPages/User';
import AddAirline from '../components/settingsPages/Airline';
import AddCompany from '../components/settingsPages/Company';
import ChangePassword from '../components/settingsPages/PasswordChange';

const SettingsPage = () => {
  const [step, setStep] = useState(1);


const handlePrevStep = () => {
  setStep(step - 1);
};

return (
  <section className="mx-8 mt-8 p-8 bg-white text-black shadow-lg h-[665px] top-6">

    {step === 1 && (
        <div>
        <h1 className="pt-8 text-[16px] font-bold pl-4 leading-6">Settings</h1>
        <div className="mt-12 flex flex-col text-[14px] leading-4">

        <span className="cursor-pointer" onClick={() => setStep(2)}>Add new User</span>
        <p className="border-b-2 my-6"></p>
        <span className="cursor-pointer" onClick={() => setStep(3)}>Add new company</span>
        <p className="border-b-2 my-6"></p>
        <span className="cursor-pointer" onClick={() => setStep(4)}>Add new Airline</span>
        <p className="border-b-2 my-6"></p>
        <span className="cursor-pointer" onClick={() => setStep(5)}>Change Password</span>
        <p className="border-b-2 my-6"></p>
        </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <span onClick={handlePrevStep}>Back</span>
          <AddUser />
        </div>
      )}
      {step === 3 && (
        <div>
          <span onClick={handlePrevStep}>Back</span>
          <AddCompany />
        </div>
      )}
      {step === 4 && (
        <div>
          <span onClick={handlePrevStep}>Back</span>
          <AddAirline />
        </div>
      )}
      {step === 5 && (
        <div>
          <span onClick={handlePrevStep}>Back</span>
          <ChangePassword />
        </div>
      )}
  </section>
);
};
export default SettingsPage;
