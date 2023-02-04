import React, { useState } from 'react'

const User = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  return (
    <section>
      <div>

      <div>
        <h1 className="pt-8 text-[16px] font-bold pl-4 leading-6">Add a new user</h1>
        <div>
          <form>
            <div className="mx-[5%]">
              <div className="flex gap-4 pt-8">

                <div className="flex flex-col">
                <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1"> First Name</label>
                <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} required  className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2 " />
                </div>

                <div className="flex flex-col">
                <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1"> Last Name</label>
                <input type="text" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2 " />
                </div>
              </div>

                <div className="flex gap-6 pt-8">

                  <div className="flex flex-col">
                  <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1"> User role</label>
                  <select name="Role" id="role" value={userRole} onChange={(e)=>{setUserRole(e.target.value)}} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2 ">
                    <option value="">Please select user role</option>
                    <option value="">HMO</option>
                    <option value="">Admin</option>
                    <option value="">Super Admin</option>
                    <option value="">Call center agent</option>
                    <option value="">Finance</option>
                  </select>
                  </div>

                  <div className="flex flex-col">
                  <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1"> Phone number</label>
                  <input type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phoneNumber} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2 " />
                  </div>
                </div>

                  <div className="flex gap-4 pt-8">

                    <div className="flex flex-col">
                    <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1"> Official email Address</label>
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2 " />
                    </div>

                    <div className="flex flex-col ml-2">
                    <label for="name" className="text-[12px] md:text-[16px] leading-6 pb-1 "> Default Password</label>
                    <input type="text" onChange={(e)=>{setPassword(e.target.value)}} value={password} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[40vw] md:w-[327px] h-1/2 md:h-[38px] px-6 py-2" />
                    </div>
                  </div>


                    <div className="flex gap-6 pt-20">
                      <button className="text-white bg-[#0B1C2E] hover:text-[#0B1C2E] hover:bg-white hover:border-[#0B1C2E] border-2 rounded-lg border-[#979699] w-[42vw] md:w-[85%] h-1/2 md:h-[55px] px-6 py-2 ">
                        Submit
                      </button>

                      <button className="hover:text-white text-[#0B1C2E] bg-white hover:bg-[#0B1C2E] border-2 rounded-lg border-[#0B1C2E] w-[40vw] md:w-[85%] h-1/2 md:h-[55px] px-6 py-2 ">
                        Cancel
                      </button>
                    </div>

            </div>
          </form>
        </div>
      </div>

      </div>
    </section>
  )
}

export default User;
