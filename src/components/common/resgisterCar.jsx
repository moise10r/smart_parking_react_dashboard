import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaCar } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { MdContactPhone } from 'react-icons/md';
import axios from 'axios';

const NewCar = (props) => {

	const [state, setstate] = useState({
		allInput: {
			name: '',
			cardId: '',
			carMark: '',
			plateNumber: '',
			phoneNumber: '',
		},
		post:{},
		errorMessage: '',
	});
	useEffect(() => {
		async function fetchData(){
			const id = props.match.params.id;
			const allInput = { ...state.allInput };
			const{data: cars }= await axios.get('https://smart-parking-management.herokuapp.com/api/customers');
			if (id !== 'new') {
				const car = cars.filter((car) => car._id === id);
				allInput._id = null;
				setstate({ allInput: car[0] });
			} else {
				setstate({ allInput });
			}
		}
		fetchData()
	}, []);
	

	const handelChange = ({ currentTarget: input }) => {
		const allInput = { ...state.allInput };
		allInput[input.name] = input.value;
		setstate({ allInput });
	};
	const handelSubmit = async (e) => {
		e.preventDefault();
		const id = props.match.params.id;
		if (id === 'new') {
				const { data: post } = await axios.post(
					' https://smart-parking-management.herokuapp.com/api/customer',
					state.allInput
				);
				setstate({post})
				props.history.push(`/home`)
		} else {
			const { data: post } = await axios.put(
				` https://smart-parking-management.herokuapp.com/api/customer/${id}`,
				state.allInput
				);
			setstate({post})

			props.history.push('/home')
		}

	};
		const { name, cardId, carMark, plateNumber, phoneNumber } = state.allInput;
		const {errorMessage} = state;
		return (
			<div className='register'>
				{errorMessage && <h1>{errorMessage}</h1>}
				<h1>REGISTER A CAR</h1>
				<form onSubmit={handelSubmit}>
					<label htmlFor='driver'>
						<p>Driver's name</p>
						<div className='input-content'>
							<input
								id='driver'
								name='name'
								value={name}
								type='text'
								placeholder="Driver's name"
								onChange={handelChange}
								required
							/>
							<span>
								<FaRegUser />
							</span>
						</div>
					</label>
					<label htmlFor='email'>
						<p>Enter Card ID</p>
						<div className='input-content'>
							<input
								id='email'
								name='cardId'
								type='text'
								value={cardId}
								placeholder='Enter card ID'
								onChange={handelChange}
							/>
							<span>
								<AiOutlineMail />
							</span>
						</div>
					</label>
					<label htmlFor='type'>
						<p>Type of Car</p>
						<div className='input-content'>
							<input
								id='type'
								name='carMark'
								type='text'
								value={carMark}
								placeholder="your car's type please"
								onChange={handelChange}
							/>
							<span>
								<FaCar />
							</span>
						</div>
					</label>
					<label htmlFor='plaque'>
						<p>Car's plaque</p>
						<div className='input-content'>
							<input
								id='plaque'
								type='text'
								name='plateNumber'
								value={plateNumber}
								onChange={handelChange}
								placeholder="Enter Car'plaque"
							/>
							<span>
								<FaCar />
							</span>
						</div>
					</label>
					<label htmlFor='number'>
						<p>Number</p>
						<div className='input-content'>
							<input
								id='number'
								name='phoneNumber'
								value={phoneNumber}
								onChange={handelChange}
								type='text'
								placeholder='+250...'
							/>
							<span>
								<MdContactPhone />
							</span>
						</div>
					</label>
					<div className='go-to'>
						<button className='btne'>
							<RiArrowRightSLine />
						</button>
						<Link to='/home' className='btne'>
							<RiArrowLeftSLine />
						</Link>
					</div>
				</form>
			</div>
		);
}

export default NewCar;
