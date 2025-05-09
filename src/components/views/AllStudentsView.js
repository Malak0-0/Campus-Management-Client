/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div style={{ textAlign: 'center', color: 'white',    fontWeight: 'bold', padding: '40px' }}>
        <p>There are no students.</p>
      <Link to={`newstudent`}>
      <button
  style={{
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Add New Student
</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', padding: '40px' }}>
    <h1>All Students</h1>
      <hr/>

      <div style={cardsContainerStyle}>     
      {students.map((student) => {
          const name = `${student.firstname} ${student.lastname}`;
          const campusName = student.campus ? student.campus.name : "Not currently enrolled in a college";

          return (
            <div key={student.id} style={cardStyle}>
              <Link to={`/student/${student.id}`} style={nameLinkStyle}>
              <h2>{name}</h2>
              </Link>
              <img
                src={
                  student.imageUrl && student.imageUrl.trim() !== ""
                    ? student.imageUrl
                    : "/images/student.png"
                }
                alt="student"
                style={imageStyle}
              />
                  <p style={{ fontSize: '0.8rem', color: '#000' }}>
                  <strong>Campus:</strong> {campusName}</p>

            </div>
          );
        }
      )}

      </div>
      <br/><br/>
      <Link to={`/newstudent`}>
      <button
  style={{
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Add New Student
</button>
      </Link>
      <br/><br/>
    </div>
  );
};

const cardsContainerStyle = {
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  gap: '16px',
};
const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '8px',
  width: '400px',
  minHeight: '80px',
  maxeight: '70px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const imageStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: '50%',
  margin: '10px auto',
};
const nameLinkStyle = {
  color: '#002145',
  textDecoration: 'underline',
  cursor: 'pointer',
};

export default AllStudentsView;