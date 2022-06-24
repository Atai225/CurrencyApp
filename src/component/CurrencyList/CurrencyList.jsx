import React, { useState, useEffect } from 'react';
import './CurrencyList.css';
import {Card,CardActionArea,CardContent,Typography, Box } from '@mui/material';
import { CgArrowsHAlt, CgArrowUp, CgArrowDown } from "react-icons/cg";
 
function CurrencyList({ currency, clickHandler }) {
	
	


	return (
		<div className='list'>
			<h1 className='list__title'>Валюты</h1>
			{currency.length > 0 ? currency.map((item, index) => {
				return <Card key={index} onClick={() => clickHandler(index, item.CharCode)} variant='outlined' sx={{ marginBottom: '1rem', borderRadius: '5px', minWidth: '450px'}}>
				  <CardActionArea>
				  	<CardContent>
				  		<Typography sx={{ fontSize: 14 }} className='currency-name' color="text.secondary" gutterBottom>
							{item.Name}
						  </Typography>
						  <Box component='div' sx={{display: "flex", justifyContent: "space-between"}}>
						  	<Box component='div' sx={{display: "flex", minWidth: '50%'}}>
							  	<Typography variant="h5" component="div" sx={{marginRight: '10px'}} >
									<span>{item.Nominal}</span><span>{item.CharCode}</span>
								  </Typography>
								  <Typography variant="h5" component="div" sx={{marginRight: '10px'}}>
								  	<CgArrowsHAlt/>
								  </Typography>
								  <Typography variant="h5" component="div" sx={{marginRight: '10px'}}>
									<span>{item.value}</span><span>{item.baseCurr}</span>
								  </Typography>
							  </Box>
							  	<Box component='div'>
							  		{item.Value > item.Previous ? <Typography variant="h5" component="div">
										<span>{item.diff}</span><span><CgArrowUp style={{color: "green"}}/></span>
									</Typography> : <Typography variant="h5" component="div">
										<span>{item.diff}</span><span><CgArrowDown style={{color: "red"}}/></span>
									</Typography>}
							  	</Box>
						  </Box>
				  	</CardContent>
				  </CardActionArea>
			  </Card>
			}) : <h3 style={{textAlign: 'center', color: "red", marginTop: '6rem'}}>Нет такой валюты</h3>
			}
		</div>
	)
}

export default CurrencyList