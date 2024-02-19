import React, { useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import blocksStyles from '@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url';
import '../index.css';

LR.registerBlocks(LR);

const UploadcareComponent = ({ onUploadFinish }) => {
  const ctxProviderRef = useRef(null);


  useEffect(() => {
    const handleUploadFinish = (e) => {
      console.log("event", e);
      console.log('CDN URL:', e.detail.fileInfo.cdnUrl);

      if (onUploadFinish) {
        console.log("hiih")
        onUploadFinish(e.detail.fileInfo.cdnUrl); // if there is a cdnURL which is the image one, we want to send it in the prop
      }
    };
  
    const currentCtxProviderRef = ctxProviderRef.current;
    currentCtxProviderRef.addEventListener('file-upload-success', handleUploadFinish);
  
    // Cleanup function to remove the event listener
    return () => {
      currentCtxProviderRef.removeEventListener('file-upload-success', handleUploadFinish);
    };
    
  }, [onUploadFinish]); 
  

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

export default UploadcareComponent;
