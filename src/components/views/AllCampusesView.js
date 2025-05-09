/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {

    return (
      <div style={{ textAlign: 'center', color: 'white',    fontWeight: 'bold', padding: '40px' }}>
        <p>There are no campuses.</p>
        <Link to={`newcampus`}>
<button
  style={{
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  }}
>
  Add New Campus
</button>        </Link>
      </div>
      );
      }

  // If there is at least one campus, render All Campuses view 
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
<h1 style={{
        fontWeight: 'bold',
        color: 'white',
        borderBottom: '2px solid white',
        marginBottom: '40px',
      }}>
        All Campuses</h1>
      <div style={{  marginTop: '40px', display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px'}}>

      {props.allCampuses.slice().sort((a, b) => a.id - b.id).map((campus) => (
        <div key={campus.id} style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '12px',
          padding: '30px',
          width: '70%',
          
        }}>
          <Link to={`/campus/${campus.id}`} style={{
              color: '#002145'
            }}>
            <h2>{campus.name}</h2>
          </Link>
      
    <img
      src={campus.imageUrl && campus.imageUrl.trim() !== "" 
            ? campus.imageUrl 
            : "/images/campus.png"}
      alt={`${campus.name} campus`}
      style={{
        width: '100%',
        maxWidth: '150px',
        height: 'auto',
        borderRadius: '8px',
        margin: '20px 0'
      }}
    />

          <h4>Campus ID: {campus.id}</h4>


          <p>{campus.address}</p>
          <p>{campus.description}</p>
          </div>
      ))}

        </div>


      <Link to={`/newcampus`}>
      <button style={{
          marginTop: '40px',
          padding: '12px 24px',
          fontSize: '20px',
          backgroundColor: '#28a745', 
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}>Add New Campus</button>
      </Link>

    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;