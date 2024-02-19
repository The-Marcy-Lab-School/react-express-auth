import { useState, useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import blocksStyles from '@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url';

import '../index.css';

LR.registerBlocks(LR);

const UploadcareComponent = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const handleUpload = (e) => {
      console.log('File upload success event:', e.detail);
      // Add logic to handle the uploaded files or update state, if needed
    };

    ctxProviderRef.current.addEventListener('file-upload-success', handleUpload);

    // Cleanup the event listener on component unmount
    return () => {
      ctxProviderRef.current.removeEventListener('file-upload-success', handleUpload);
    };
  }, []);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="8bc71d5f25fde2ddd403"
        maxLocalFileSizeBytes={10000000}
        multiple={false}
        imgOnly={true}
        sourceList="local, url, camera, dropbox, instagram"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={blocksStyles}
        class="my-config"
      />

      <lr-upload-ctx-provider ref={ctxProviderRef} ctx-name="my-uploader" />
    </div>
  );
};

// need to put component in userprofilecard component to showcase file image uploader

export default UploadcareComponent;
