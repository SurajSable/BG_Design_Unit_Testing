import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    'https://static.wixstatic.com/media/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg/v1/fill/w_474,h_677,al_c,q_80,usm_0.66_1.00_0.01/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg',
    'https://static.wixstatic.com/media/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg/v1/fill/w_474,h_500,al_c,q_80,usm_0.66_1.00_0.01/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg',
    'https://static.wixstatic.com/media/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg/v1/fill/w_474,h_500,al_c,q_80,usm_0.66_1.00_0.01/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg',
    'https://static.wixstatic.com/media/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg',
    'https://static.wixstatic.com/media/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg/v1/fill/w_474,h_842,al_c,q_85,usm_0.66_1.00_0.01/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg',
    'https://static.wixstatic.com/media/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg/v1/fill/w_474,h_632,al_c,q_80,usm_0.66_1.00_0.01/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg',
    'https://static.wixstatic.com/media/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg',
    'https://static.wixstatic.com/media/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg',
    'https://static.wixstatic.com/media/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg',
    // Add other image URLs here
  ];

  const handleOpen = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
    setOpen(true);
  };
  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1));
    setSelectedImage(images[(selectedImageIndex + 1)]);
  };
  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(selectedImageIndex - 1 + images.length) % images.length]);
  };
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className='bg-white mb-3'>
      <div className='container gallery'>

        <h4 className='ms-3 mt-3' style={{ color: "rgb( 137,21,25)" }}><b>3D Printed Gig</b></h4>

        <div className='box' >
          <div className='dream' >
            <img
            data-testid="img1"
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg/v1/fill/w_474,h_677,al_c,q_80,usm_0.66_1.00_0.01/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg', 0)}
              src='https://static.wixstatic.com/media/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg/v1/fill/w_474,h_677,al_c,q_80,usm_0.66_1.00_0.01/161409_8a3f6f52f450443782f643ff0214fe9b~mv2.jpg'
              alt='Description of the first image'
            />
          </div>

          <div className='dream'>
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg/v1/fill/w_474,h_500,al_c,q_80,usm_0.66_1.00_0.01/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg', 1)}
              src='https://static.wixstatic.com/media/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg/v1/fill/w_474,h_500,al_c,q_80,usm_0.66_1.00_0.01/161409_1ea106bca9974e5bb39c47693e56123b~mv2.jpg'
              alt='Description of the second image'
            />
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_930c0b2fcfd44d2a953ee941bd2ea24a~mv2.jpg/v1/fill/w_474,h_632,al_c,q_80,usm_0.66_1.00_0.01/161409_930c0b2fcfd44d2a953ee941bd2ea24a~mv2.jpg'
                , 2)}
              src='https://static.wixstatic.com/media/161409_930c0b2fcfd44d2a953ee941bd2ea24a~mv2.jpg/v1/fill/w_474,h_632,al_c,q_80,usm_0.66_1.00_0.01/161409_930c0b2fcfd44d2a953ee941bd2ea24a~mv2.jpg'
              alt='Description of the third image'
            />
          </div>

          <div className='dream'>
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg'
                , 3)}
              src='https://static.wixstatic.com/media/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_2cfb826d97444ddaad2223530aa96fcc~mv2.jpg'
              alt='Description of the fourth image'
            />
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg/v1/fill/w_474,h_842,al_c,q_85,usm_0.66_1.00_0.01/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg'
                , 4)}
              src='https://static.wixstatic.com/media/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg/v1/fill/w_474,h_842,al_c,q_85,usm_0.66_1.00_0.01/161409_70f2c2d0a78548e8a5bf5bdb98199ef7~mv2.jpg'
              alt='Description of the fifth image'
            />
          </div>
        </div>
     <h4 className='ms-3 mt-3' style={{ color: "rgb( 137,21,25)" }}><b>Conveyors: </b></h4>
        <div className='box'>
          <div className='dream'>
            <img onClick={() => handleOpen('https://static.wixstatic.com/media/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg/v1/fill/w_474,h_632,al_c,q_80,usm_0.66_1.00_0.01/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg'
              , 5)}
              src='https://static.wixstatic.com/media/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg/v1/fill/w_474,h_632,al_c,q_80,usm_0.66_1.00_0.01/161409_f4eec8bfe4f74c8a9cdc3b41037ddfbe~mv2.jpg'
              alt='Description of the first image'
            />
          </div>

          <div className='dream'>
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg'
                , 6)}
              src='https://static.wixstatic.com/media/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_12919f4b4b2c49c79fcfd3ca7fd3a0c2~mv2.jpg'
              alt='Description of the second image'
            />
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_e5b2793696e540b69a81c2b6eec15b32~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_e5b2793696e540b69a81c2b6eec15b32~mv2.jpg'
                , 7)}
              src='https://static.wixstatic.com/media/161409_e5b2793696e540b69a81c2b6eec15b32~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_e5b2793696e540b69a81c2b6eec15b32~mv2.jpg'
              alt='Description of the third image'
            />
          </div>

          <div className='dream'>
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg', 8)}
              src='https://static.wixstatic.com/media/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_196dac027874433d83ac8c8ffc48aeab~mv2.jpg'
              alt='Description of the fourth image'
            />
            <img
              onClick={() => handleOpen('https://static.wixstatic.com/media/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg', 9)}
              src='https://static.wixstatic.com/media/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg/v1/fill/w_474,h_356,al_c,q_80,usm_0.66_1.00_0.01/161409_aefd3e9ab6cd49c0bdaac2331dc1ae2b~mv2.jpg'
              alt='Description of the fifth image'
            />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="mt-4 bg-black bg-gradient bg-opacity-75"
          sx={{
            width: "100%",
            height: '93%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            padding: "2%",
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className='d-flex justify-content-end'>
            <IconButton data-testid="hclose" onClick={handleClose} >
              <CloseIcon className='text-white' />
            </IconButton>
          </div>
          <div className=' d-flex justify-content-between' style={{ marginTop: '10px' }}>
<IconButton data-testid="hprev" className='' onClick={handlePrev} disabled={selectedImageIndex === 0}>
              <ArrowBackIosIcon className='text-white' />
            </IconButton>

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              />
            )}
            <IconButton data-testid="hnext"  onClick={handleNext} disabled={selectedImageIndex === images.length - 1}>
              <ArrowForwardIosIcon className='text-white' />
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
export default Gallery