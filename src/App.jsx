import React, { useState } from "react";
import "./App.css";
function App() {
    const [message, setMessage] = useState(null);
    const [passed_message, setPassed_message] = useState(
        " two-way binding done"
    );
    function click_handle() {
        setPassed_message(message);
        setMessage("");
    }
    return (
        <>
            <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
                <div className="w-1/2 h-2/4 flex justify-evenly items-center rounded-2xl bg-white flex-col">
                    <h1 className="text-3xl">
                        A Messge You Would Like To Pass
                    </h1>
                    <input
                        className="text-3xl text-center border-solid border-2 outline-none"
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <button
                        onClick={click_handle}
                        className="bg-blue-500 text-white px-5 py-2 rounded-2xl"
                    >
                        submit
                    </button>
                    <h2 className="text-2xl">Last Message Delivered</h2>
                    <h2 className="text-2xl text-red-400">{passed_message}</h2>
                </div>
            </div>
        </>
    );
}

export default App;
