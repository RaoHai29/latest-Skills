import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Card/Card.css';
import { useSharedState } from '../Shared/Shared'; // Import the context hook

function AdminPanel() {
  const { images, addImage } = useSharedState(); // Access the shared state

  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile || !title) {
      alert('Please select an image and provide a title.');
      return;
    }

    // Generate a unique ID (you can use a library like uuid for this)
    const id = Math.random().toString(36).substr(2, 9);

    // Create a new image object
    const newImage = {
      id,
      title,
      imageUrl: URL.createObjectURL(selectedFile), // Use this for preview
    };

    // Add the new image to the shared state using the context function
    addImage(newImage);

    // Clear the input fields
    setTitle('');
    setSelectedFile(null);
  };

  return (
    <div style={{ paddingTop: '60px', width: '100%', height: '80vh' }}>
     <div style={{textAlign:'center'}}>
     <h1>Admin Panel</h1>

<div>
  <label htmlFor="image">Select an image:</label>
  <input
    type="file"
    id="image"
    accept="image/*"
    onChange={handleFileChange}
  />
</div>
<div>
  <label htmlFor="title">Title:</label>
  <input
    type="text"
    id="title"
    value={title}
    onChange={handleTitleChange}
  />
</div>
<div style={{ marginBottom: '30px' }}>
  <button onClick={handleUpload}>Upload Image</button>
</div>
     </div>
      <div className="Cards">
        {images.map((image) => (
          <Card
            sx={{
              maxWidth: '320px',
              border: '0.5px solid white ',
              borderTop: '5px solid blue',
              marginBottom: '30px',
              marginRight: '100px',
            }}
            key={image.id}
            id="card-size"
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              style={{
                width: '310px',
                height: '190px',
                borderRadius: '0px',
                borderEndStartRadius: '0',
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                sx={{
                  fontSize: '18px',
                  textAlign: 'center',
                  fontWeight: 550,
                  marginTop: '5px',
                }}
              >
                {image.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: '18px',
                  padding: '8px 15px',
                  fontWeight: '550',
                  background: '#0077FF',
                  marginLeft: '90px',
                  marginTop: '-10px',
                }}
              >
                Contact me
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
