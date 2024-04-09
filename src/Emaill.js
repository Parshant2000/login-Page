import React from 'react';

import './App.css';

function Emaill() {
	return (
		<>
			<body>
				<div class="form">
					<h1>Welcome to KOIVA</h1>
					<input type="email" id="email" placeholder="Enter Email..." />
					<div class="otpverify">
						<input type="text" id="otp_inp" placeholder="Enter the OTP sent to your Email..." />
						<button class="btn" id="otp-btn">Verify</button>
					</div>
					<button class="btn" onclick="sendOTP()">Send OTP</button>
					<p> OR</p>
                    <div classname="image">
                    <img src="https://imgs.search.brave.com/RfcdPZzPHzJ3_RL1OKWB4cpHLlEZCe-r-xrjSf506nM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzA4LzU0LzM3/LzM2MF9GXzMwODU0/Mzc4N19EbVBvMUlF/THRLWTloRzhFOEds/VzhLSEVzUkM3SmlE/Ti5qcGc" alt="" width="80px" height="80px"/>
					</div>


				</div>
			</body>



		</>

	);
}

export default Emaill;
