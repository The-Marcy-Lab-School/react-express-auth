import { useState } from 'react';
import CloudinaryContext from './CloudinaryContext';
import { Cloudinary } from "@cloudinary/url-gen";

export default function CloudinaryContextProvider({ children }) {
  const [cloudName] = useState("dkjbfmvhi");
  const [uploadPreset] = useState("lqt6vz82");
  const cld = new Cloudinary({ cloud: { cloudName } });

  const context = { cloudName, uploadPreset, cld };

  return (
    <CloudinaryContext.Provider value={context}>
      {children}
    </CloudinaryContext.Provider>
  );
}
