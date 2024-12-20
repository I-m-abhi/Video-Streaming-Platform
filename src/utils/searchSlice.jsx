import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    cacheResult: {},
    videos: [],
    searchQuery: '',
    showSuggestions: false,
  },
  reducers: {
    cacheResults: (state, action)=> {
      state.cacheResult = Object.assign(state.cacheResult, action.payload);
    },
    videoResult: (state, action)=> {
      state.videos = action.payload;
    },
    searchQueryResult: (state, action)=> {
      state.searchQuery = action.payload;
    },
    updateShowSuggestion: (state, action)=> {
      state.showSuggestions = action.payload;
    },
  }
});

export const {cacheResults, videoResult, searchQueryResult, updateShowSuggestion} = searchSlice.actions;

export default searchSlice.reducer;