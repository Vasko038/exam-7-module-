import { createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../types";

const initialState: { data: IJob[] } = {
  data: [
    {
      id: "1",
      companyId: "2",
      title: "Backend Dev",
      desc: "dd dsgdd sddgs g",
      location: "wall Street",
      salary: "3000",
      phone: "+998998560542",
      email: "vasko@gmail.com",
      telegram: "husan",
      instagram: "husan_mirobidov",
    },
    {
      id: "2",
      companyId: "2",
      title: "Adminstrator",
      desc: " gsdgs dgs gsdg",
      location: "wall Street",
      salary: "3000",
      phone: "+998998560542",
      email: "vasko@gmail.com",
      telegram: "husan",
      instagram: "husan_mirobidov",
    },
    {
      id: "3",
      companyId: "2",
      title: "Fullstack dev",
      desc: " sdg sdgsd gsd",
      location: "wall Street",
      salary: "3000",
      phone: "+998998560542",
      email: "vasko@gmail.com",
      telegram: "husan",
      instagram: "husan_mirobidov",
    },
    {
      id: "4",
      companyId: "2",
      title: "Frontend dev",
      desc: " sdg sd gsdg sdg",
      location: "wall Street",
      salary: "3000",
      phone: "+998998560542",
      email: "vasko@gmail.com",
      telegram: "husan",
      instagram: "husan_mirobidov",
    },
  ],
};

const page2Slice = createSlice({
  name: "page2",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    addItem: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});
export const { deleteItem, updateItem, addItem } = page2Slice.actions;
export default page2Slice.reducer;
