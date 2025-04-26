import React from "react";
import Button from '@material-ui/core/Button';

const NewCampusView = ({ handleChange, handleSubmit }) => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '2px solid white',
        marginBottom: '30px'
      }}>
        Add a New Campus
      </h1>

      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: '12px',
        padding: '30px',
        width: '400px',
        margin: 'auto'
      }}>
        {["name", "imageUrl", "address"].map((field, idx) => (
          <div key={idx} style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name={field}
              placeholder={field === "imageUrl" ? "Image URL (optional)" : capitalize(field)}
              onChange={handleChange}
              required={field !== "imageUrl"}
              style={{ width: '90%', padding: '10px', borderRadius: '8px' }}
            />
          </div>
        ))}

        <div style={{ marginBottom: '15px' }}>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            style={{ width: '90%', padding: '10px', borderRadius: '8px', height: '100px' }}
          />
        </div>

        <Button type="submit" variant="contained" style={{
          backgroundColor: '#28a745',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px'
        }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default NewCampusView;
