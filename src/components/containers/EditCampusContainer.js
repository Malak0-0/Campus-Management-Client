import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      imageUrl: "", 
      address: "",
      description: "",
      redirect: false, 
      redirectId: null
    };
  }

  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);

    // updating local state with the fetched campus
    const { campus } = this.props;
    this.setState({
      name: campus.name || "",
      imageUrl: campus.imageUrl || "",
      address: campus.address || "",
      description: campus.description || "",
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();  

    const updatedCampus = {
      id: this.props.campus.id,
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      address: this.state.address,
      description: this.state.description,
    };

    await this.props.editCampus(updatedCampus);

    this.setState({
      name: "", 
      imageUrl: "", 
      address: "", 
      description: "",
      redirect: true, 
      redirectId: updatedCampus.id
    });
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {// redirects to updated campus
      return (<Redirect to={`/campus/${this.state.redirectId}`} />)
    }

    return (
      <div>
        <Header />
        <EditCampusView 
          campus={this.props.campus.name}
          campusName={this.state.name}
          campusImageUrl={this.state.imageUrl}
          campusAddress={this.state.address}
          campusDescription={this.state.description}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// connect to Redux
const mapState = (state) => ({
  campus: state.campus,
});
//connects action dispatchers to props
const mapDispatch = (dispatch) => ({

  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),// dispatch thunk to fetch a specific campus by ID from backen
  editCampus: (campus) => dispatch(editCampusThunk(campus)),// dispatch thunk edit&update a campus in backend
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
