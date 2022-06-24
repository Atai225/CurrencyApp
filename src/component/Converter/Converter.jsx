import React, { useState, useEffect } from "react";
import "./Converter.css";
import { Box } from "@mui/material";
import { CgArrowsHAlt } from "react-icons/cg";
import ConverterItem from "../ConverterItem/ConverterItem";

function Converter({rates}) {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0)

  // useEffect(() => {
  //   if(!!rates){
  //     handleAmount1(1)
  //   }
  // }, [rates])
  

  const format = (num) => {
    return num.toFixed(3)
  }
  const handleChangeCurrency1 = (currency1) => {
    if(amount1 !== 1){
      setAmount1(0)
      setAmount2(0)
      setCurrency1(currency1)

    }else{
      setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
      setCurrency1(currency1)

    }
  }
  const handleChangeCurrency2 = (currency2) => {
    if(amount1 !== 1){
      setAmount1(0)
      setAmount2(0)
      setCurrency2(currency2)
    }else {
      setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
      setCurrency2(currency2)
    }
  }
  
  const handleAmount1 = (amount1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setAmount1(amount1)
  }
  const handleAmount2 = (amount2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setAmount2(amount2)
  }

  const reverse = () => {
    setAmount1(amount2)
    setAmount2(amount1)
    setCurrency1(currency2)
    setCurrency2(currency1)
  };

  return (
    <div className="converter">
      <h1 className="converter__title">Converter</h1>

      <Box
        component="div"
        sx={{
          display: "flex",
          maxWidth: "800px",
          margin: "0 auto",
          justifyContent: "space-between",
          marginTop: "5rem",
          alignItems: "center",
        }}
      >
        <ConverterItem
          currency={Object.keys(rates)}
          amountValue={amount1}
          currencyValue={currency1}
          changeHandler={handleChangeCurrency1}
          handleAmount={handleAmount1}
        />
        
        <Box component="div">
          <Box
            onClick={reverse}
            component="div"
            sx={{
              background: "blue",
              borderRadius: "50%",
              padding: "8px 10px 7px 10px",
            }}
          >
            <CgArrowsHAlt style={{ fontSize: "25px", color: "white" }} />
          </Box>
        </Box>
        <ConverterItem
          currency={Object.keys(rates)}
          amountValue={amount2}
          currencyValue={currency2}
          changeHandler={handleChangeCurrency2}
          handleAmount={handleAmount2}
        />
      </Box>

      <Box component='div' sx={{display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "3rem"}}>
            <h3 style={{color: 'gray'}}>Как использовать?</h3>
            <p style={{ margin: "0", padding: "0", color: "gray"}}>#Сначала выберите валюты</p>
            <p style={{ margin: "0", padding: "0", color: "gray"}}>#Затем числовое значение</p>
      </Box>
    </div>
  );
}

export default Converter;
