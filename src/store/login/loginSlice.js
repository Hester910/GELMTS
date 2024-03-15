import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  user: {}, isLogado: false, isAdmin: false, actualData: [{}]
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    handleUpdateLogin(state) {
      state.isLogado = !state.isLogado
      state.user = {nome: 'Pedro'}
    },
    handleCurrentLogin(state, actions){
        state.user = actions.payload
    },
    handleActualData(state, actions){
      state.actualData.push(actions.payload)
    }
  },
});

export default userSlice;
export const userActions = userSlice.actions;