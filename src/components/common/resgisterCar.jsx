import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaCar } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { MdContactPhone } from 'react-icons/md';
import axios from 'axios';

class NewCar extends Component {

	state = {
		allInput: {
			name: '',
			cardId: '',
			carMark: '',
			plateNumber: '',
			phoneNumber: '',
		},
		post:{},
		errorMessage: '',
	};
	async componentDidMount() {
			const id = this.props.match.params.id;
			const allInput = { ...this.state.allInput };
			const{data: cars }= await axios.get('https://smart-parking-management.herokuapp.com/api/customers');
			if (id !== 'new') {
				const car = cars.filter((car) => car._id === id);
				allInput._id = null;
				this.setState({ allInput: car[0] });
			} else {
				this.setState({ allInput });
			}	
	}
	

	handelChange = ({ currentTarget: input }) => {
		const allInput = { ...this.state.allInput };
		allInput[input.name] = input.value;
		this.setState({ allInput });
	};
	handelSubmit = async (e) => {
		e.preventDefault();
		const id = this.props.match.params.id;
		if (id === 'new') {
				const { data: post } = await axios.post(
					' https://smart-parking-management.herokuapp.com/api/customer',
					this.state.allInput
				);
				this.setState({post})
				this.props.history.push(`/home`)
		} else {
			console.log(this.state.allInput);
			delete this.state.allInput._id
			delete this.state.allInput.__v
			console.log(this.state.allInput);
			const { data: post } = await axios.put(
				` https://smart-parking-management.herokuapp.com/api/customer/${id}`,
				this.state.allInput
				);
			this.setState({post})

			this.props.history.push('/home')
		}

	};
	render() {

		const { name, cardId, carMark, plateNumber, phoneNumber } = this.state.allInput;
		const {errorMessage} = this.state;
		return (
			<div className='register'>
				{errorMessage && <h1>{errorMessage}</h1>}
				<h1>REGISTER A CAR</h1>
				<form onSubmit={this.handelSubmit}>
					<label htmlFor='driver'>
						<p>Driver's name</p>
						<div className='input-content'>
							<input
								id='driver'
								name='name'
								value={name}
								type='text'
								placeholder="Driver's name"
								onChange={this.handelChange}
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
								onChange={this.handelChange}
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
								onChange={this.handelChange}
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
								onChange={this.handelChange}
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
								onChange={this.handelChange}
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
	}

export default NewCar;
