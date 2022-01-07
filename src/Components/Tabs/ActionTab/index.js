import React, { useState } from 'react';
import { Container, ContentContainer, Hr, Number, TabsContainer, TabTitle } from '../styled';
import closeIcon from '../../../Assets/images/closeIcon.png';
import { CloseIcon, ModalContainer } from './styled';
import SelectAction from './selectAction';
import TakeAction from './takeAction';
import Loading from '../../Loading/index';
import AlertMessage from '../../Alert/index';

const options = [
	{
		title: 'Mark As Revolved',
		text: 'Mark this event as resolved and enter the details of the resolution.',
	},
	{
		title: 'Change Asset',
		text: 'Change the asset with another one.',
	},
];

const ActionTab = ({ closeCallback, data, setData, index }) => {
	const tabs = ['SELECT ACTION', 'TAKE ACTION'];
	const [pageIndex, setPageIndex] = useState(0);
	const [action, setAction] = useState(-1);
	const [success, setSuccess] = useState(null);
	const [detail, setDetail] = useState('');
	
	const updateData = () => {
		let temp = [...data];
		temp[index].details[4].value = options[action].title;
		temp[index].details.push({ title: 'Details', value: detail });
		setData(temp);
	};

	const callBack = (val, state) => {
		state && setSuccess(state);
		setPageIndex(val);
		if (val === 3 && success) updateData();
	};

	const components = [
		<SelectAction callback={callBack} action={action} setAction={setAction} options={options} />,
		<TakeAction callback={callBack} option={options[action]} detail={detail} setDetail={setDetail} />,
		<Loading callback={callBack} isSuccess={true} />,
		<AlertMessage isSuccess={success} />,
	];

	return (
		<ModalContainer small={pageIndex > 1}>
			{pageIndex < 2 ? (
				<>
					<Container>
						<TabsContainer className='action'>
							{tabs.map((tab, index) => {
								return (
									<TabTitle key={index} className={pageIndex === index && 'selected'} forAction={true}>
										<Number>{index + 1}</Number>
										{tab}
									</TabTitle>
								);
							})}
							<Hr />
						</TabsContainer>
						<ContentContainer>{components[pageIndex]}</ContentContainer>
					</Container>
				</>
			) : (
				components[pageIndex]
			)}
			<CloseIcon src={closeIcon} onClick={closeCallback} />
		</ModalContainer>
	);
};

export default ActionTab;
