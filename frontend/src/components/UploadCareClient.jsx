import React from 'react';
import * as LR from '@uploadcare/blocks';
import '../index.css'; 

const UploadcareComponent = () => {
    LR.registerBlocks(LR);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="8bc71d5f25fde2ddd403"
        max-local-file-size-bytes="10000000"
        multiple="false"
        img-only="true"
        source-list="local, url, camera, dropbox, instagram"
      ></lr-config>
      <lr-file-uploader-regular
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.32.0/web/lr-file-uploader-regular.min.css"
        ctx-name="my-uploader"
        class="my-config"
      ></lr-file-uploader-regular>
    </div>
  );
};

// need to put component in userprofilecard component to showcase file image uploader 

export default UploadcareComponent;
