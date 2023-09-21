import React,{useEffect,useState,useRef} from 'react'
import { Card,Stack,Grid,Typography,Paper ,Box,Skeleton} from '@mui/material'
import Sortable from 'sortablejs';

import img from '../image/images-1.jpeg'
import img1 from '../image/fitness.jpeg'
import img2 from '../image/fright.jpeg'
import img3 from '../image/image-10.jpg'
import img4 from '../image/food.jpeg'
import img5 from '../image/fr.jpeg'
import img6 from '../image/images-4.jpeg'
import img7 from '../image/image-9.jpeg'
import img8 from '../image/image-8.jpeg'
import img9 from '../image/image-7.jpeg'
import img10 from '../image/image-6.jpeg'
import img11 from '../image/image-5.jpg'
import img12 from '../image/image-3.jpg'
import img13 from '../image/image-20.jpeg'
import img14 from '../image/image-2.jpeg'
import img15 from '../image/image-16.jpeg'
import img16 from '../image/image-19.jpeg'
import img17 from '../image/image-18.jpeg'
import img18 from '../image/image-17.jpeg'
import img19 from '../image/image-16.jpeg'
import img20 from '../image/image-15.jpeg'
import img21 from '../image/image-14.jpeg'
import img22 from '../image/image-13.webp'
import img23 from '../image/image-12.jpeg'
import img24 from '../image/image-11.jpeg'
import img25 from '../image/image-10.jpg'

import AppBar from './appbar'
import Image from 'next/image'
import { Search } from './appbar'
const images = [
    {
      id: 1,
      img: img,
      tag: 'People',
    },
    {
      id: 2,
      img: img2,
      tag: 'Fear',
    },
    {
        id: 3,
        img: img3,
        tag: 'Vegetables',
      },
      {
        id: 4,
        img: img4,
        tag: 'Food',
      },
      {
        id: 5,
        img: img5,
        tag: 'Burger',
      },
      {
        id: 6,
        img: img16,
        tag: 'Bedroom',
      },
      {
        id: 7,
        img: img7,
        tag: 'Rice',
      },
      {
        id: 8,
        img: img8,
        tag: 'Fries',
      },  {
        id: 9,
        img: img9,
        tag: 'Food',
      },  {
        id: 10,
        img: img10,
        tag: 'Sunset',
      },  {
        id: 11,
        img: img11,
        tag: 'Landscape',
      },
      {
        id: 12,
        img: img12,
        tag: 'Sunset',
      }, {
        id: 13,
        img: img13,
        tag: 'Work Space',
      }, {
        id: 14,
        img: img14,
        tag: 'Interior Design',
      }, {
        id: 15,
        img: img15,
        tag: 'Family',
      },
      {
        id: 16,
        img: img17,
        tag: 'Family',
      },
      {
        id: 17,
        img: img18,
        tag: 'Heart braek',
      },
      {
        id: 18,
        img: img1,
        tag: 'Yoga',
      },
      {
        id: 19,
        img: img19,
        tag: 'Family',
      },
      {
        id: 20,
        img: img20,
        tag: 'Heart',
      },
      {
        id: 21,
        img: img21,
        tag: 'Art',
      },
      
      {
        id: 22,
        img: img22,
        tag: 'Art',
      },
      
      {
        id: 23,
        img: img23,
        tag: 'Art',
      },
      
      {
        id: 24,
        img: img24,
        tag: 'Art',
      },
      
  
  ];
export default function ImageGallery({ searchQuery }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageData, setImageData] = useState(images); 
  const [draggedImage, setDraggedImage] = useState(null);
  const gridContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 2000);
  }, []);
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setImageData(images);
    } else {
      const filtered = images.filter((image) =>
        image.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setImageData(filtered);
    }
  }, [searchQuery]);



  const handleDragStart = (e, image) => {
    setDraggedImage(image);
    console.log(`Drag started for image with ID ${image.id}`);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetImage) => {
    e.preventDefault();

    if (!draggedImage || draggedImage.id === targetImage.id) {
      return;
    }

    const updatedImages = imageData.map((img) => {
      if (img.id === draggedImage.id) {
        return targetImage;
      } else if (img.id === targetImage.id) {
        return draggedImage;
      }
      return img;
    });

    setImageData(updatedImages);
    setDraggedImage(null);
    console.log(`Dropped image with ID ${draggedImage.id} onto image with ID ${targetImage.id}`);
  };

  const handleTouchStart = (e, image) => {
    e.preventDefault();
    setDraggedImage(image);
    console.log(`Touch started for image with ID ${image.id}`);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e, targetImage) => {
    e.preventDefault();

    if (!draggedImage || draggedImage.id === targetImage.id) {
      return;
    }

    const updatedImages = imageData.map((img) => {
      if (img.id === draggedImage.id) {
        return targetImage;
      } else if (img.id === targetImage.id) {
        return draggedImage;
      }
      return img;
    });

    setImageData(updatedImages);
    setDraggedImage(null);
    console.log(`Dropped image with ID ${draggedImage.id} onto image with ID ${targetImage.id}`);
  };

  useEffect(() => {
    const gridContainer = gridContainerRef.current;
 
      new Sortable(gridContainer, {
        animation: 150,
        onEnd: (e) => {
       
          const { oldIndex, newIndex } = e;
         
        },
      });
 
  
  }, []);
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
<Grid container spacing={2} rowSpacing={5} columnSpacing={5} ref={gridContainerRef} sx={{padding:'32px',marginTop:"10px"}} >
      {imageData.map((image) => (
        <Grid
          item
          key={image.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}

        >
          <div
          style={{cursor:'pointer '}}
          draggable
         
            onTouchStart={(e) => handleTouchStart(e, image)}
            onTouchMove={handleTouchMove}
            onTouchEnd={(e) => handleTouchEnd(e, image)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, image)}
            onDragStart={(e) => handleDragStart(e, image)}
          >
          <Card
          sx={{
              background: '#FFFFF',
              border: '1.2px solid #DADDDB',
              borderRadius: '8px',
              px: '3px',
              position: 'relative',
              transform: draggedImage === image ? 'scale(1.05)' : 'scale(1)', 
              transition: 'transform 0.2s ease-in-out'
            }}
          >
            {imagesLoaded ? (
              <Box height="200px" position="relative" sx={{ objectFit: 'cover', margin: '5px' }}>
                <Image src={image.img} layout="fill" objectFit="cover" alt="project_card" />
              </Box>
            ) : (
              <Skeleton variant="rectangular" width={500} height={200} />
            )}
            <Typography variant="h6" sx={{textAlign:"center"}}>{image.tag}</Typography>
          </Card>
        </div>
      </Grid>
    ))}
  </Grid>
      </div>
  )
}