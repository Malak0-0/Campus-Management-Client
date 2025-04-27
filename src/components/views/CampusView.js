/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, editCampus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} height="200" width="200" alt="college campus"/>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <Link to={`/editcampus/${campus.id}`}>
      <button style={{
    marginTop: '20px',
    width: '300px',
    padding: '12px 24px',
    fontSize: '20px',
    backgroundColor: 'rgb(48, 122, 65)',   
    color: 'white',
    border: '2px solid rgb(21, 72, 54)', 
    borderRadius: '8px',
    cursor: 'pointer',
  }} onClick={() => editCampus(campus)}>Edit Campus Information</button>
      </Link> 
      <br/><br/>
      <Link to={'/campuses'}>
        <button  onClick={() => deleteCampus(campus.id)}
          style={{
            marginTop: '20px',
            width: '300px',
            padding: '12px 24px',
            fontSize: '20px',
            backgroundColor: '#dc3545',   
            color: 'white',
            border: '2px solid #a71d2a',  
            borderRadius: '8px',
            cursor: 'pointer',}}
              >Delete Campus</button>
      </Link> 
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
    </div>
  );
};

export default CampusView;