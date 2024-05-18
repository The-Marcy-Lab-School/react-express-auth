import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export default function CloudinaryImage({ img }) {
  // Use this sample image or upload your own via the Media Explorer

  return (<AdvancedImage
    cldImg={img}
    style={{ maxWidth: "100%" }}
    plugins={[responsive(), placeholder()]}
  />);
};
