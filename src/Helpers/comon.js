import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHight } = Dimensions.get("window");

export const wp = (percentage) => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};

export const hp = (percentage) => {
  const height = deviceHight;
  return (percentage * height) / 100;
};
