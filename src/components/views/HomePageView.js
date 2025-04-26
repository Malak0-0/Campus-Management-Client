/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import './HomePageView.css';
import { Link } from 'react-router-dom';
import campusIcon from '../../assets/images/campus.png';
import studentIcon from '../../assets/images/student.png';



const HomePageView = () => {
  // Render Home page view
  return (
    <div className="home-container">
    <div className="overlay">
      <h1>Campus Management System</h1>
      <div className="cards-container">
        <Link to="/campuses" className="home-card">
        <img src={campusIcon} alt="Campus Icon" className="card-icon" />

          <h2>View Campuses</h2>
        </Link>
        <Link to="/students" className="home-card">
        <img src={studentIcon} alt="Student Icon" className="card-icon" />

          <h2>View Students</h2>
        </Link>
      </div>
    </div>

    </div>
  );    
}

export default HomePageView;