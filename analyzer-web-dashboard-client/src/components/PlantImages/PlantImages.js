import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';

const PlantImages = ({ imagesData }) => {
  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(imagesData.length > 0 ? imagesData[0] : null);

  // Handler to change the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
            {selectedImage && (
            <>
                <img
                src={`data:image/png;base64,${selectedImage.image_data}`}
                alt="Plant"
                style={{ width: '100%', maxHeight: '500px', objectFit: 'contain', border:'10px solid black' }}
                />
                {/* <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <strong>{new Date(selectedImage.timestamp).toLocaleString()}</strong>
                </div> */}
            </>
            )}
        </div>
        <div style={{ flex: 1 }}>
            <Table bordered hover>
            <thead>
                <tr>
                <th colSpan={2} className='bg-dark text-white'>Images Details</th>
                </tr>
            </thead>
            <tbody>
                {imagesData.map((item) => {
                    const formattedDate = new Date(item.timestamp).toLocaleString(); // Convert timestamp to a localized string
                    const dateOnly = formattedDate.split(',')[0]; // Split the string by ',' and take the second part (time only)

                    return (
                    <tr key={item._id} onClick={() => handleImageClick(item)} style={{ cursor: 'pointer' }}>
                        <td>
                        <img
                            src={`data:image/png;base64,${item.image_data}`}
                            alt="Plant"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        </td>
                        <td>
                            {dateOnly.trim()}
                        </td>
                        {/* <td>
                            {item.filename}
                        </td> */}
                    </tr>
                    );
                })}
            </tbody>
            </Table>
        </div>
    </div>
  );
};

export default PlantImages;
