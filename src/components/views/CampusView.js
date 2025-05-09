/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, editCampus, unenrollStudent} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
           <div style={{ width: '500px', background: 'rgba(255,255,255,0.8)', borderRadius: '12px', padding: '30px', margin: 'auto' }}>
        <h1 style={{ color: '#11153e', fontWeight: 'bold' }}>{campus.name}</h1>

      <img src={campus.imageUrl} height="200" width="200" alt="college campus"      style={{ borderRadius: '8px', marginBottom: '20px' }} />
      <p><strong>Address:</strong> {campus.address}</p>
<p><strong>Description:</strong> {campus.description}</p>

      <Link to={`/editcampus/${campus.id}`}>
      <button style={{
    marginTop: '16px',
    width: '200px',
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: 'rgb(48, 122, 65)',   
    color: 'white',
    border: '2px solid rgb(21, 72, 54)', 
    borderRadius: '8px',
    cursor: 'pointer',
      fontWeight: 'bold'
  }} onClick={() => editCampus(campus)}>Edit Campus </button>
      </Link> 
      <br/><br/>
      <Link to={'/campuses'}>
        <button  onClick={() => deleteCampus(campus.id)}
          style={{
            marginTop: '16px',
            width: '200px',
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#dc3545',   
            color: 'white',
            border: '2px solid #a71d2a',  
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'}}
              >Delete Campus</button>
      </Link> 
      <h3 style={{ marginTop: '30px', color: '#11153e' }}>
          Total Students: {campus.students.length}
        </h3>
        <div style={{ marginTop: '20px' }}>
  {campus.students.map(student => (
    <div key={student.id} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px 20px',
      marginBottom: '10px'
    }}>
      <Link to={`/student/${student.id}`} style={{ textDecoration: 'none', color: '#0645AD', fontWeight: 'bold' }}>
        {student.firstname} {student.lastname}
      </Link>
      <button
        onClick={() => unenrollStudent(student.id, campus.id)}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 12px',
          cursor: 'pointer',
          boxShadow: '2px 2px 0px #888'
        }}
      >
        Unenroll
      </button>
    </div>
  ))}

  <Link to="/newstudent">
    <button style={{
      marginTop: '20px',
      backgroundColor: '#6c757d',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '12px 20px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 0px #888'
    }}>
      Enroll New Student
    </button>
  </Link>
</div>

      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CampusView;