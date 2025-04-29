import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  formContainer: {  
    width: '500px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: '12px',
    padding: '30px',
    margin: 'auto',
  },
  formTitle: {
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    color: '#002145',
  },
}));

const EditCampusView = (props) => {
  const { campus, campusName, campusImageUrl, campusAddress, campusDescription, handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: 'white', fontWeight: 'bold', marginBottom: '30px' }}>
        Edit Campus
      </h1>

      <div className={classes.formContainer}>
        <Typography className={classes.formTitle}>
          {campus}
        </Typography>

        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="name"
              value={campusName}
              placeholder="Campus Name"
              required
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', borderRadius: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="imageUrl"
              value={campusImageUrl}
              placeholder="Image URL"
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', borderRadius: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="address"
              value={campusAddress}
              placeholder="Address"
              required
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', borderRadius: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <textarea
              name="description"
              value={campusDescription}
              placeholder="Description"
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', borderRadius: '8px', height: '100px' }}
            />
          </div>

          <Button type="submit" variant="contained" style={{
            backgroundColor: '#0072CE',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '10px 20px',
            marginTop: '20px'
          }}>
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditCampusView;
