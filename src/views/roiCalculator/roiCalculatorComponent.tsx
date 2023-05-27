import { useState } from 'react';
import './roiCalculator.css';
import { AiOutlineDown } from 'react-icons/ai';
import cakeIcon from '../../assets/images/cake-icon.png';
import closeIcon from '../../assets/images/close.png';

const RoiCalculatorComponent = () => {
	const [showDetails, setShowDetails] = useState<boolean>(false);
	return (
		<div className='container'>
			<div className='calculator'>
				<div className='box'>
					<div className='calculator_title'>
						<p className='title'>ROI Calcultor</p>
						<img src={closeIcon} alt='close' width='20px' height='20px' />
					</div>
					<div className='input_lable'>
						<span>
							<div>
								<img src={cakeIcon} alt='cake' width='20px' height='20px' />
								<p>Cake</p>
							</div>
							<div className='usd_input'>
								<input type='checkbox' />
								<span className='slider' />
								<p>USD</p>
							</div>
						</span>
					</div>
					<div className='input'>
						<input type='text' value='2.10000 CAKE' />
					</div>
					<div className='balance'>
						<div className='select_balance'>
							<p className='current_balance'>USE BALANCE</p>
							<p className='use_balance'>$1000</p>
							<p className='use_balance'>$100</p>
						</div>
						<div className='fixed_balance'>~$20.82</div>
					</div>
					<div className='timeframe'>
						<div className='timeframe_title'>
							<p>Timeframe</p>
						</div>
						<div className='timeframe_detail'>
							<p>1 Day</p>
							<p>7 Days</p>
							<p>30 Days</p>
							<p>1 Year</p>
							<p>5 Years</p>
						</div>
					</div>
					<div className={'apy_header'}>
						<p>Enable Accelerated APY</p>
						<div>
							<input type='checkbox' />
							<div className='apy_slider' />
						</div>
					</div>
					<div className='tier'>
						<h3>Select Tier</h3>
						<div className='tier_details'>
							<p>Tier 1</p>
							<p>Tier 3</p>
							<p>Tier 2</p>
							<p>Tier 4</p>
							<p>Tier 5</p>
						</div>
					</div>
					<div className='roi_box'>
						<p>ROI at Current Rates</p>
						<div className='input'>
							<input type='text' value='100.0 USD' />
						</div>
						<p style={{ fontSize: '12px' }}>~ 3CAKE + 10 DON</p>
					</div>
					<div className='action'>
						<button className='btn_one'>Apply</button>
						<button className='btn_two'>Cancle</button>
					</div>
					{!showDetails ? (
						<div className='details' onClick={() => setShowDetails(true)}>
							<p>Show Details</p>
							<AiOutlineDown />
						</div>
					) : (
						<div className='details' onClick={() => setShowDetails(false)}>
							<p>Hide Details</p>
							<AiOutlineDown />
						</div>
					)}
					{showDetails && (
						<div className={'details_data'}>
							<div className='details_title'>
								<p>APY</p>
								<p
									style={{
										fontSize: '24px',
										color: '#FAC200',
										fontWeight: '800',
									}}>
									63.34%
								</p>
							</div>
							<div className='details_body'>
								<ul>
									<li>Calculated based on current rates</li>
									<li>
										All fugures are estimates provided for your convenience
										only, <br /> and by no means represent guaranted returns.
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RoiCalculatorComponent;
