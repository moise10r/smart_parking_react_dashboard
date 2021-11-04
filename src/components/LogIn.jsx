import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import axios from 'axios';

const Login = (props) => {
	const [state, setstate] = useState({
		allInput: {
			email: '',
			password: '',
		},
		errorMessage: '',
	});

	const handelChange = ({ currentTarget: input }) => {
		const allInput = { ...state.allInput };
		allInput[input.name] = input.value;
		setstate({ allInput });
	};
	const handelSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'https://smart-parking-management.herokuapp.com/api/login/',
				state.allInput
			);
			const user = response.data;
			localStorage.setItem('currentUser', JSON.stringify(user));
			props.history.push(`/home`);
		} catch (ex) {
			setstate({ errorMessage: 'Your Email or Passor is incorrect' });
		}
	};
	const { email, password } = state.allInput;
	const { errorMessage } = state;
	console.log(errorMessage);
	return (
		<div className='register'>
			<h1>LOGIN</h1>
			<form onSubmit={handelSubmit}>
				<label htmlFor='driver'>
					<p>Email</p>
					<div className='input-content'>
						<input
							id='email'
							name='email'
							value={email}
							type='email'
							placeholder='Enter your Email'
							onChange={handelChange}
							required
						/>
					</div>
				</label>
				<label htmlFor='email'>
					<p>Password</p>
					<div className='input-content'>
						<input
							id='password'
							name='password'
							type='text'
							value={password}
							placeholder='Enter your password'
							onChange={handelChange}
						/>
					</div>
				</label>
				<div className='go-to'>
					<button className='btne'>
						<RiArrowRightSLine />
					</button>
				</div>
			</form>
			{errorMessage && (
				<p style={{ marginTop: '20px', color: 'red' }}>{errorMessage}</p>
			)}
		</div>
	);
};

export default Login;
