// ImageUploader.jsx
import React, { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const [image, setImage] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Send the base64-encoded image data to the parent component
    onUpload(image);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
