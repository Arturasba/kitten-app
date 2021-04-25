import { CHANGECOUNT } from "./actions";

// Dummy names array
import kittenNames from "../data/kiitenNames";

// Get kitten list
let kittensList = [];
let i = 0;

while (i < 100) {
  let randomNumber = Math.round(Math.random() * 100);
  kittensList.push({
    name: kittenNames[randomNumber],
    key: Math.random(),
    image: "http://placekitten.com/g/" + (i + 101),
  });
  i++;
}

const initialState = {
  fullKittenList: kittensList,
  kittens: kittensList.slice(0, 29),
  kittenCount: 30,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGECOUNT:
      return {
        ...state,
        kittenCount: action.number,
        kittens: state.fullKittenList.slice(0, action.number),
      };
  }
  return state;
};
