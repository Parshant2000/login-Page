import React from 'react';

function Mome() {

    return (
        <>

            <div class="form">
                <h1>Welcome to KOIVA</h1>
                <input type="email number" id="number" placeholder="......" />
                <div class="otpverify">
                    <input type="text" id="otp_inp" placeholder="Enter the OTP sent to your Email..." />
                    <button class="btn" id="otp-btn">Verify</button>
                </div>
                <button class="btn" onclick="enterOTP()">Enter OTP</button>





            </div>



        </>
    )




}
export default Mome;



