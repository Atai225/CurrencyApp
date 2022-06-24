import React from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	Box,
	MenuItem,
	Select,
	FormControl,
	TextField
  } from "@mui/material";

function ConverterItem({currencyValue, changeHandler, currency, handleAmount, amountValue}) {
  return (
	<Card variant="outlined" sx={{ borderRadius: "5px", maxWidth: "40%", height: "100px", display: 'flex', alignItems: 'center' }}>
	<CardActionArea>
	  <CardContent>
		<Box style={{display: 'flex'}}>
		  <FormControl sx={{minWidth: "50%"}}>
			  <Select
			  variant="standard"
			  value={currencyValue}
			  onChange={(e) => changeHandler(e.target.value)}
			  sx={{marginRight: "1rem", textAlign: 'center'}}
			  >
				{currency && currency.map((item, index) => {
				  return (
					<MenuItem value={item} key={index}>{item}</MenuItem>
				  )
				})}
			  </Select>
			</FormControl>
			<input style={{fontSize: "25px",maxWidth: "45%", border: 'none', borderBottom: '1px solid black', outline: "none" }} type='number'  id="standard-basic" onChange={(e) => handleAmount(e.target.value)} value = {amountValue} />
		</Box>
	  </CardContent>
	</CardActionArea>
  </Card>
  )
}

export default ConverterItem