// import React, { useState } from "react";
// import Dropzone from "dropzone";
// // import {
// //     PaperAirplaneIcon,
// //     PaperClipIcon,
// //     XMarkIcon,
// //   } from "@heroicons/react/outline";
  
// const MessageFormUI = ({
//   setAttachment,
//   message,
//   handleChange,
//   handleSubmit,
//   appendText,
//   handleKeyDown,
// }) => {
//   const [preview, setPreview] = useState("");

//   return (
//     <div className="message-form-container">
//       {preview && (
//         <div className="message-form-preview">
//           <img
//             alt="message-form-preview"
//             className="message-form-preview-image"
//             src={preview}
//             onLoad={() => URL.revokeObjectURL(preview)}
//           />
//       <button
//   className="message-form-icon-x"
//   onClick={() => {
//     console.log("here")
//     setPreview("");
//     setAttachment("");
//   }}
// >
//   X
// </button>

//         </div>
//       )}
//       <div className="message-form">
//         <div className="message-form-input-container">
//           <input
//             className="message-form-input"
//             type="text"
//             value={message}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Send a message..."
//           />
//           {appendText && (
//             <input
//               className="message-form-assist"
//               type="text"
//               disabled="disabled"
//               value={`${message} ${appendText}`}
//             />
//           )}
//         </div>
//         <div className="message-form-icons">
//           <Dropzone
//             acceptedFiles=".jpg,.jpeg,.png"
//             multiple={false}
//             noClick={true}
//             onDrop={(acceptedFiles) => {
//               setAttachment(acceptedFiles[0]);
//               setPreview(URL.createObjectURL(acceptedFiles[0]));
//             }}
//           >
//             {({ getRootProps, getInputProps, open }) => (
//               <div {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 {/* <PaperClipIcon
//                   className="message-form-icon-clip"
//                   onClick={open}
//                 /> */}
//               </div>
//             )}
//           </Dropzone>

//           {/* <hr className="vertical-line" />
//           <PaperAirplaneIcon
//             className="message-form-icon-airplane"
//             onClick={() => {
//               setPreview("");
//               handleSubmit();
//             }}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessageFormUI;


import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MessageFormUI = ({
  setAttachment,
  message,
  handleChange,
  handleSubmit,
  appendText,
  handleKeyDown,
}) => {
  const [preview, setPreview] = useState("");

  // Create a callback function to handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    setAttachment(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, [setAttachment, setPreview]);

  // Initialize the Dropzone instance
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".jpg,.jpeg,.png", // Define accepted file types
    multiple: false, // Allow only one file to be selected
    noClick: true, // Disable click-to-upload (use your custom button)
  });

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <button
            className="message-form-icon-x"
            onClick={() => {
              console.log("here");
              setPreview("");
              setAttachment("");
            }}
          >
            X
          </button>
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Send a message..."
          />
          {appendText && (
            <input
              className="message-form-assist"
              type="text"
              disabled="disabled"
              value={`${message} ${appendText}`}
            />
          )}
        </div>
        <div className="message-form-icons">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button
              className="message-form-icon-clip"
              onClick={() => {
                // Trigger the file picker dialog
                document.querySelector("input[type='file']").click();
              }}
            >
              Your Custom Clip Button
            </button>
          </div>
          <button
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              handleSubmit();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageFormUI;
