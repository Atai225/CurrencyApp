import React, { useState, useEffect } from 'react'
import './Currency.css';
import debounce from 'lodash.debounce';
import CurrencyList from '../CurrencyList/CurrencyList.jsx';
import {Box, TextField} from '@mui/material';
import {reverseValues, resetValues, setItem} from '../../store/reducers/currency.reducer';
import { useDispatch } from 'react-redux';


function Currency({currency, rates}) {
	const [input, setInput] = useState('');
	const [currencyValues, setCurrencyValues] = useState([])
	const dispatch = useDispatch()
	

	const changeHandler = (e) => {
		setInput(e.target.value);
	}
	
	const reverseCurrency = (index, currency1) => {
		if(!currency[index].clicked){
			const a = +(rates[currency1])
			const b = 1
			const sum = a/b;
			console.log(sum);
			dispatch(reverseValues({index, sum}))
		}else{
			dispatch(resetValues(index))
		}
	}

	const filteredList = currency.filter((item) => {
		 if(item.Name.includes(input)){
			 return item.Name.includes(input)
		 }else if(item.CharCode.includes(input.toUpperCase())){
			 return item.CharCode.includes(input.toUpperCase())
		 }
	});

	const debouncedOnChange = debounce((e) => changeHandler(e), 1000)

	return (
		<div className='currency'>
			<Box component='div' className='form'>
				<TextField fullWidth onChange={debouncedOnChange} type="text" placeholder='Искать' />
			</Box>
			{filteredList && <CurrencyList currency={filteredList} clickHandler={reverseCurrency}/>}
		</div>
	)
}

export default Currency