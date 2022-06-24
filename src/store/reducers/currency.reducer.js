import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencies = createAsyncThunk(
	'currencies/get',
	async (_, {rejectWithValue}) => {
		try {
			const res = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`);
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
)



const currencySlice = createSlice({
	name: 'currency',
	initialState: {
		currencies: null,
		loading: "",
		curr: null,
	},
	extraReducers: {
		[getCurrencies.pending]: (state) => {
			state.loading = 'loading';
		},
		[getCurrencies.fulfilled]: (state, action) => {
			state.loading = 'completed';
			const array = Object.values(action.payload.Valute);
			const item = array.map(res => {
				const sum = res.Value - res.Previous;
				const val = res.Value/res.Nominal;
				if(res.Nominal === 1){
					return {
						...res,
						value: +(val.toFixed(4)),
						baseCurr: "RUB",
						Name: res.Name.toLowerCase(),
						diff: +(sum.toFixed(4)),
					}
				}else{
					return {
						...res,
						Nominal: 1,
						value: +(val.toFixed(4)),
						baseCurr: "RUB",
						Name: res.Name.toLowerCase(),
						diff: +(sum.toFixed(4)),
					}
				}
				
			});
			state.currencies = [...item];
			state.curr = [...item];
		},
		[getCurrencies.pending]: (state) => {
			state.loading = 'rejected';
		},
		
	}, 
	reducers: {
		reverseValues: (state, action) => {
			const item = state.currencies[action.payload.index]
			item.value = action.payload.sum
			let charCode = item.CharCode
			item.CharCode = item.baseCurr
			item.baseCurr = charCode;
			const dif = item.diff - item.value;
			const res = item.diff - dif;
			item.diff = +(res.toFixed(4))
			item.clicked = true;
		}, 

		resetValues: (state, action) => {
			state.currencies[action.payload].value = state.curr[action.payload].value;
			state.currencies[action.payload].diff = state.curr[action.payload].diff;
			state.currencies[action.payload].baseCurr = state.curr[action.payload].baseCurr;
			state.currencies[action.payload].Nominal = state.curr[action.payload].Nominal;
			state.currencies[action.payload].CharCode = state.curr[action.payload].CharCode;
			state.currencies[action.payload].clicked = false;
		}
	}
})

export default currencySlice.reducer;
export const {reverseValues, resetValues, setItem} = currencySlice.actions;