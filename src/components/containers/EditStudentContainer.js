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
    };
  }

  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);
    await this.props.fetchAllCampuses(); 
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
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

      const { firstname, lastname, email } = this.state;
  const errors = {};

  if (!firstname.trim()) errors.firstname = "First name is required.";
  if (!lastname.trim()) errors.lastname = "Last name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  if (Object.keys(errors).length > 0) {
    this.setState({ errors });
      return;
    }
    const updatedStudent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };
   // update student in database
    await this.props.editStudent(this.props.match.params.id, updatedStudent);
//  redirects in order to show the updated student
    this.setState({ redirect: true });
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
