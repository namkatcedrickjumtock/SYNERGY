import React, { useState } from "react";
import DropDown from "./DropDown1";
import DropDown2 from "./DropDown2";
import DropDown3 from "./DropDown3";
import MyModal from "./alert";
import History from "./History";

function FormComponent() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
       <div className="hero w-full text-center">
                <div>
                    <h1 className="text-4xl mt-10 font-bold text-slate-800">
                        Mick Barbar Shop
                    </h1>
                    <h2 className="py-4 text-xl text-slate-600">
                        Book a barber with a click and get the best haircut
                        anywhere.
                    </h2>
                    <div>
                        {/* <button className="py-2 px-4 rounded-md shadow text-white bg-blue-800 font-semibold">
                            Book us now
                        </button> */}
                    </div>
                </div>
            </div>
      <div className="flex flex-col mt-5 py-5  gap-4 max-w-4xl">
        <input
          type="text"
          placeholder="Name"
          className="outline-none border rounded-md py-2 px-4 min-w-0"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="outline-none border rounded-md py-2 px-4 min-w-0"
        />
        <input
          type="text"
          placeholder="Location"
          className="outline-none border rounded-md py-2 px-4 min-w-0"
        />
        <div className="flex flex-row gap-2 [&>*]:flex-1">
          <div>
            <h1 className="font-semibold">Day</h1>
            <DropDown3 />
          </div>
          <div className="relative">
          <h1 className="font-semibold">Hour</h1>
            <DropDown2 />
          </div>
        </div>
      </div>
      <div className="py-8 flex justify-center items-center">
        <button
          className="py-2 px-4 rounded-md shadow text-white

         bg-blue-800"
          onClick={() => {
            setAlert(true);
          }}
        >
          Make Appointment
        </button>
      </div>
      {alert && <MyModal setAlert={setAlert} />}
      {/* <History/> */}
    </div>
  );
}

export default FormComponent;
