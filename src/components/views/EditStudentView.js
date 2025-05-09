/*==================================================
EditStudentView.js
================================================== */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    padding: '40px',
  },
  formCard: {
    width: '450px',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '12px',
    padding: '30px',
    margin: 'auto',
  },
  formTitle: {
    fontWeight: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '20px',
    color: '#11153e',
    marginBottom: '20px',
  },
  label: {
    color: '#11153e',
    fontWeight: 'bold',
    width: '120px',
    textAlign: 'right',
    marginRight: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
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

const EditStudentView = ({ handleChange, handleSubmit, student, allCampuses, errors = {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formCard}>
        <Typography className={classes.formTitle}>Edit Student Info</Typography>
        <form onSubmit={handleSubmit}>
          {[
            ['First Name', 'firstname', 'text'],
            ['Last Name', 'lastname', 'text'],
            ['Email', 'email', 'email'],
            ['Image URL', 'imageUrl', 'text'],
            ['GPA', 'gpa', 'number']
          ].map(([label, name, type]) => (
            <div key={name} style={{ marginBottom: '15px' }}>
            <div className={classes.row}>
              <label className={classes.label}>{label}:</label>
              <input
                className={classes.input}
                type={type}
                name={name}
                value={student[name] ?? ''}
                onChange={handleChange}
                {...(name === 'gpa' && { min: 0, max: 4, step: 0.1 })}
              />
            </div>
            {errors[name] && (
      <p style={{ color: 'red', fontSize: '0.75rem', marginLeft: '130px', textAlign: 'left' }}>
        {errors[name]}
      </p>
    )}
  </div>
))}

          {/* dropdown menufor campuses */}
          <div className={classes.row}>
            <label className={classes.label}>Campus:</label>
            <select
              name="campusId"
              value={student.campusId ?? ''}
              onChange={handleChange}
              className={classes.input}
            >
              <option value="">Select a campus</option>
              {allCampuses?.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </div>

          <Button className={classes.button} type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
