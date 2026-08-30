import { Link } from "react-router";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-header">My FCC React Practices</h1>

            <h2 className="home-sub-header">Select a practice:</h2>

            <ol>
                <li><Link to="/navbar">Build a Reusable Mega Navbar</Link></li>
                <li><Link to="/footer">Build a Reusable Footer</Link></li>
                <li><Link to="/profileCard">Build a Reusable Profile Card Component</Link></li>
                <li><Link to="/moodBoard">Build a Mood Board</Link></li>
                <li><Link to="/toggleText">Toggle Text App</Link></li>
                <li><Link to="/colorPicker">Build a Color Picker App</Link></li>
                <li><Link to="/fruitSearch">Build a Fruit Search App</Link></li>
                <li><Link to="/otpGenerator">Build an One-Time Password Generator</Link></li>
            </ol>
        </div>
    );
};

export default Home;