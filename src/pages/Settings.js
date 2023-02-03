import React, { useState } from "react";

import AddUser from '../components/settingsPages/User';
import AddAirline from '../components/settingsPages/Airline';
import AddCompany from '../components/settingsPages/Company';
import ChangePassword from '../components/settingsPages/PasswordChange';

import Layout from "../components/Layout";

const SettingsPage = () => {
  const [step, setStep] = useState(1);


    return (
      <Layout showStat={false}>
        <section className="mx-8 mt-12 p-8 bg-white text-black shadow-lg h-[665px] w-[72vw] top-6 ml-[280px] m-10">

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
                  <span className="cursor-pointer hover:border-b-2 hover:border-black hover:opacity-50" onClick={() => setStep(1)}>Back</span>
                  <AddUser />
                </div>
              )}
              {step === 3 && (
                <div>
                  <span className="cursor-pointer hover:border-b-2 hover:border-black hover:opacity-50" onClick={() => setStep(1)}>Back</span>
                  <AddCompany />
                </div>
              )}
              {step === 4 && (
                <div>
                  <span className="cursor-pointer hover:border-b-2 hover:border-black hover:opacity-50" onClick={() => setStep(1)}>Back</span>
                  <AddAirline />
                </div>
              )}
              {step === 5 && (
                <div>
                  <span className="cursor-pointer hover:border-b-2 hover:border-black hover:opacity-50" onClick={() => setStep(1)}>Back</span>
                  <ChangePassword />
                </div>
              )}
          </section>
      </Layout>
    );
  };
export default SettingsPage;
