import './App.css';
import { Routes, Route } from 'react-router-dom';
import Currency from './component/Currency/Currency';
import Converter from './component/Converter/Converter';
import Layout from './component/Layout/Layout'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from './store/reducers/currency.reducer';

function App() {
  const dispatch = useDispatch();
  const currencies =  useSelector(store => store.currency.currencies)
  const [loading, setLoading ] =  useState(false)
  const [rates, setRates] = useState([]);


  useEffect(() => {
    dispatch(getCurrencies()).then(() => setLoading(true))
  }, [dispatch])

  useEffect(() => {
		fetch("https://www.cbr-xml-daily.ru/latest.js")
		  .then((res) => res.json())
		  .then((data) => {
			setRates(data.rates);
		  });
	  }, []);

  return (
    <div className="App">
      {loading && <Layout>
        <Routes>
          <Route path='/' element={<Currency currency={currencies} rates={rates}/>}/>
          <Route path='/converter' element={<Converter rates={rates}/>}/>
        </Routes>
      </Layout>}
    </div>
  );
}

export default App;
