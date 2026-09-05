import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home.jsx";
import { Navbar } from "./practices/ReusableNavbar/ReusableNavbar.jsx";
import { Footer } from "./practices/ReusableFooter/ReusableFooter.jsx";
import { ProfileCard } from "./practices/ProfileCard/ProfileCard.jsx";
import MoodBoard from "./practices/MoodBoard/MoodBoard.jsx";
import { ToggleApp } from "./practices/ToggleText/ToggleText.jsx";
import { ColorPicker } from "./practices/ColorPicker/ColorPicker.jsx";
import { FruitsSearch } from "./practices/FruitSearch/FruitSearch.jsx";
import { OTPGenerator } from "./practices/OTPGenerator/OTPGenerator.jsx";
import { SuperheroForm } from "./practices/SuperheroApplicationForm/SuperheroApplicationForm.jsx";
import EventRSVP from "./practices/EventRSVP/EventRSVP.jsx";
import ShoppingList from "./practices/ShoppingList/ShoppingList.jsx";
import CurrencyConverter from "./practices/CurrencyConverter/CurrencyConverter.jsx";
import TicTacToe from "./practices/TicTacToe/TicTacToe.jsx";

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
  {
    path: "/applicationForm",
    element: <SuperheroForm />,
  },
  {
    path: "/eventRSVP",
    element: <EventRSVP />,
  },
  {
    path: "/shoppingList",
    element: <ShoppingList />,
  },
  {
    path: "/currencyConverter",
    element: <CurrencyConverter />,
  },
  {
    path: "/ticTacToe",
    element: <TicTacToe />,
  },
]);

export default router;