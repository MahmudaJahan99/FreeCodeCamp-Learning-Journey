import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home.jsx";
import { Navbar } from "./practices/ReusableNavbar/ReusableNavbar.jsx";
import {Footer} from "./practices/ReusableFooter/ReusableFooter.jsx";
import { ProfileCard } from "./practices/ProfileCard/ProfileCard.jsx";
import MoodBoard from "./practices/MoodBoard/MoodBoard.jsx";
import { ToggleApp } from "./practices/ToggleText/ToggleText.jsx";
import { ColorPicker } from "./practices/ColorPicker/ColorPicker.jsx";
import { FruitsSearch } from "./practices/FruitSearch/FruitSearch.jsx";
import { OTPGenerator } from "./practices/OTPGenerator/OTPGenerator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/profileCard",
    element: <ProfileCard />,
  },
  {
    path: "/moodBoard",
    element: <MoodBoard />,
  },
  {
    path: "/toggleText",
    element: <ToggleApp />,
  },
  {
    path: "/colorPicker",
    element: <ColorPicker />,
  },
  {
    path: "/fruitSearch",
    element: <FruitsSearch />,
  },
  {
    path: "/otpGenerator",
    element: <OTPGenerator />,
  },
]);

export default router;