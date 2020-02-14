import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavtigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavtigation);
