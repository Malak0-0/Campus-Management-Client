/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '550px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '12px',
    padding: '30px',
    margin: 'auto',
  }, 
  formTitle:{
    fontWeight: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '20px',
    color: '#11153e',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '10px 20px',
    marginTop: '10px',
  },
}));

const NewStudentView = (props) => {
  const {handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
 <h1 style={{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '30px',
        borderBottom: '2px solid white',
        paddingBottom: '10px'
      }}>
        Add a New Student
      </h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Add a Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>First Name:</label>
  <input
    type="text"
    name="firstname"
    onChange={handleChange}
    style={{ flex: 1, padding: '10px', borderRadius: '8px' }}
  />
</div>         
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
    <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>Last Name:</label>
    <input type="text" name="lastname" onChange={handleChange} style={{ flex: 1, padding: '10px', borderRadius: '8px' }} />
  </div>
      {/* includedd email the imageUr and gpa  */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
    <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>Email:</label>
    <input type="email" name="email" onChange={handleChange} required style={{ flex: 1, padding: '10px', borderRadius: '8px' }} />
  </div>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
    <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>Image URL:</label>
    <input type="url" name="imageUrl" onChange={handleChange} style={{ flex: 1, padding: '10px', borderRadius: '8px' }} />
  </div>
            

   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
  <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>GPA:</label>
  <input
    type="number"
    name="gpa"
    min="0"
    max="4"
    step="0.1"
    onChange={handleChange}
    style={{ flex: 1, padding: '10px', borderRadius: '8px' }}
  />
</div>

      {/* add dropdown menu to render campuses   */}
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
  <label style={{ color: '#11153e', fontWeight: 'bold', width: '120px', textAlign: 'right', marginRight: '10px' }}>
    Campus:
  </label>
  <select
    name="campusId"
    onChange={handleChange}
    style={{ flex: 1, padding: '10px', borderRadius: '8px' }}
    defaultValue=""
  >
    <option value="">Select a campus</option>
  {props.allCampuses?.map(campus => (
    <option key={campus.id} value={campus.id}>
      {campus.name}
    </option>
    ))}
  </select>
</div>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default NewStudentView;