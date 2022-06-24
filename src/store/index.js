import { configureStore } from "@reduxjs/toolkit";
import currencySlice from './reducers/currency.reducer'

export const store = configureStore({
	reducer: {
		currency: currencySlice,
	}
})