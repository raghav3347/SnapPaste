import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem
    ("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste', 
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", 
        state.pastes);
        toast("Paste Created Successfully")
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes)); // ✅ Ensure local storage update
        toast.success("Paste Updated");
      }
    },   
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter((p) => p._id !== pasteId);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      // Optionally, you can show a toast here:
      toast.success("Paste Deleted")
      // toast.success("Paste Deleted Successfully");
    },    
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;