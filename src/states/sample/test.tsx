import {useReducer} from "react";

const SAMPLE_ACTION1 = "SAMPLE_ACTION1";
const SAMPLE_ACTION2 = "SAMPLE_ACTION2";
const SAMPLE_ACTION3 = "SAMPLE_ACTION3";
const SAMPLE_ACTION4 = "SAMPLE_ACTION4";

interface SampleData {
  data1: SampleData1;
  data2: SampleData2;
}

interface SampleData1 {
  text: string;
}
interface SampleData2 {
  value: string;
}

enum SampleActionType {
  SAMPLE_ACTION1,
  SAMPLE_ACTION2,
  SAMPLE_ACTION3,
  SAMPLE_ACTION4,
}

interface SampleAction {
  type: SampleActionType;
  data: SampleData1 | SampleData2;
}

const initialState = {
  data1: {text: ""},
  data2: {value: ""},
};

const reducer = (state: SampleData = initialState, action: SampleAction) => {
  switch (action.type) {
    case SampleActionType.SAMPLE_ACTION1:
      return {...state};
    case SampleActionType.SAMPLE_ACTION2:
      return {...state};
    case SampleActionType.SAMPLE_ACTION3:
      return {...state};
    case SampleActionType.SAMPLE_ACTION4:
      return {...state};
    default:
      return state;
  }
};

export const sampleAction1 = () => ({
  type: SAMPLE_ACTION1,
});
export const sampleAction2 = () => ({
  type: SAMPLE_ACTION2,
});
export const sampleAction3 = () => ({
  type: SAMPLE_ACTION3,
});
export const sampleAction4 = () => ({
  type: SAMPLE_ACTION4,
});

export default reducer;
