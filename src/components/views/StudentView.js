/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from 'react-router-dom';
//import defaultStudentImage from '../../assets/images/students.png';


const StudentView = (props) => {
  const { student,deleteStudent } = props;

  // Render a single Student view 
  // added email, gpa and img
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
    <div style={{ width: '400px', background: 'rgba(255,255,255,0.8)', borderRadius: '12px', padding: '30px', margin: 'auto' }}>

    <img
  src={
    student.imageUrl && student.imageUrl.trim() !== ""
      ? student.imageUrl
      : "/images/student.png"
  }
  alt={`${student.firstname}'s profile`}
  width={200}
  style={{ borderRadius: '8px', marginBottom: '20px' }}
/>

    <h1 style={{ color: '#11153e', fontWeight: 'bold' }}>{student.firstname} {student.lastname}</h1>

    {[
  ['Email', student.email],
  ['Campus', student.campus ? <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link> : 'Not currently enrolled in a college'],
  ['GPA', student.gpa ?? 'Not available']
].map(([label, value]) => (
  <div key={label} style={{ marginBottom: '10px', textAlign: 'center' }}>
    <span style={{ fontWeight: 'bold', color: '#11153e' }}>{label}:</span> {value}
  </div>
))}
<br>
</br>
      <Link to={`/student/edit/${student.id}`}>
        <button style={{ backgroundColor: '#28a745', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '14px 24px', border: 'none',    width: '140px'  }}>Edit</button>


      </Link>
      <br />

<button
  onClick={() => deleteStudent(student.id)}
  style={{
    backgroundColor: '#dc3545',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '14px 24px',
    border: 'none',
    marginTop: '10px',
    width: '140px' 
  }}
>
  Delete
</button>

          </div>
          </div>
            );

};

export default StudentView;