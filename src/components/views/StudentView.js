/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  // added email, gpa and img
  return (
    <div>

      <img src={student.imageUrl} alt={`${student.firstname}'s profile`} width={200} />
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>Email: {student.email}</h3>
      <h3>Campus: {student.campus ? (
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        ) : "Student not enrolled in any campus yet"}
      </h3>
      <h3>GPA: {student.gpa ? (
          student.gpa
        ) : "GPA not found"}
          </h3>
          <Link to={`/student/edit/${student.id}`}>
        <button>Edit</button>
      </Link>
          </div>
  );

};

export default StudentView;