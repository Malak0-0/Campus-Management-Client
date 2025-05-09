/*==================================================
EditStudentContainer.js

This Container component is responsible for editing student data.
================================================== */
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: "",
      campusId: "",
      redirect: false,
      errors: {}
    };
  }

  componentDidMount() {
    const { fetchStudent, fetchAllCampuses, match } = this.props;
    
    Promise.all([
      fetchStudent(match.params.id),
      fetchAllCampuses()
    ]).then(() => {
      const { student } = this.props;
      if (student) {
        this.setState({
          firstname: student.firstname || "",
          lastname: student.lastname || "",
          email: student.email || "",
          imageUrl: student.imageUrl || "",
          gpa: student.gpa ?? "",
          campusId: student.campusId ?? "",
        });
      }
    });
  }
handleSubmit = async (event) => {
  event.preventDefault();

  const { firstname, lastname, email } = this.state;
  const errors = {};

  if (!firstname.trim()) errors.firstname = "First name is required.";
  if (!lastname.trim()) errors.lastname = "Last name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  
  if (Object.keys(errors).length > 0) {
    this.setState({ errors });
    return;
  }

  const updatedStudent = {
    firstname: this.state.firstname.trim(),
    lastname: this.state.lastname.trim(),
    email: this.state.email.trim(),
    imageUrl: this.state.imageUrl.trim(),
    gpa: this.state.gpa ? Number(this.state.gpa) : null,
    campusId: this.state.campusId ? Number(this.state.campusId) : null,
  };

  try {
    await this.props.editStudent(this.props.match.params.id, updatedStudent);
    this.setState({ redirect: true });
  } catch (error) {
    console.error("Failed to update student:", error);
    this.setState({ 
      errors: { 
        submit: "Failed to update student. Please try again." 
      } 
    });
  }
};
handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: name === "campusId" ? Number(value) : value, 
  });
};
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.props.match.params.id}`} />;
    }
// Display edit form
    return (
      <div>
        <Header />
        <EditStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          student={this.state}
          allCampuses={this.props.allCampuses} 
          errors={this.state.errors}

        />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
  allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),

});

export default connect(mapState, mapDispatch)(EditStudentContainer);
