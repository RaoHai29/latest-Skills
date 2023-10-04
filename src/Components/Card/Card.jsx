import React from 'react';
import { useSharedState } from '../Shared/Shared'; // Import the context hook
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Cards = () => {
  const { images } = useSharedState(); // Access the shared state

  return (
    <>
      <div className="Cards">
        {images.map((image) => (
          <Card
            sx={{
              maxWidth: '320px',
              border: '0.5px solid white',
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
    </>
  );
};

export default Cards;
