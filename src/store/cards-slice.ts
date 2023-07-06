import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { cardsData, CardsDataType, RatingType } from '../mock-data/cardsData.ts';

const initialState: CardsDataType = cardsData;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<{ id: string; ratingValue: RatingType }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) state[index].rating = action.payload.ratingValue;
    },
    applyKeywordSearch: (state, action: PayloadAction<{ keyword: string }>) => {
      if (action.payload.keyword.length === 0) return initialState;
      state = state.filter((card) =>
        card.title.toLocaleLowerCase().includes(action.payload.keyword.toLocaleLowerCase()),
      );
      return state;
    },
    updateDescription: (state, action: PayloadAction<{ id: string; description: string }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      state[index].description = action.payload.description;
    },
  },
});

export const { setRating, applyKeywordSearch, updateDescription } = cardsSlice.actions;

export default cardsSlice.reducer;
