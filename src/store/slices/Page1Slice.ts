import { createSlice } from "@reduxjs/toolkit";
import { ICompany } from "../../types";

const initialState: { data: ICompany[] } = {
  data: [
    {
      id: "1",
      title: "Apple",
      desc: "the best product manufacturing company",
      image:
        "https://avatars.mds.yandex.net/i?id=25f7dc26c9561526ac3d52a09600eb43b364c3b9-5228667-images-thumbs&n=13",
      webSite: "https://www.apple.com/",
    },
    {
      id: "2",
      title: "Amazon",
      desc: "the best product manufacturing company",
      image:
        "https://avatars.mds.yandex.net/i?id=30afc44b1ab895e053e3e2464c5a1e427eb2f648-7753086-images-thumbs&n=13",
      webSite: "https://www.amazon.com/?ysclid=m10a2jdlkf239456524",
    },
    {
      id: "3",
      title: "Netflix",
      desc: "the best product manufacturing company",
      image:
        "https://avatars.mds.yandex.net/i?id=a18dfad6a50440acfd90ab686bc879c6b501019b-12644240-images-thumbs&n=13",
      webSite: "https://www.amazon.com/?ysclid=m10a2jdlkf239456524",
    },
    {
      id: "4",
      title: "Youtube",
      desc: "the best product manufacturing company",
      image:
        "https://avatars.mds.yandex.net/i?id=522d23a056cc0f12bd2a6d721f9790d0d272b2c6-5516191-images-thumbs&n=13",
      webSite: "https://www.youtube.com",
    },
  ],
};

const page1Slice = createSlice({
  name: "page1",
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
export const { deleteItem, updateItem, addItem } = page1Slice.actions;
export default page1Slice.reducer;
