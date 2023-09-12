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
      {
      
      <div>
      <form
        id='message-form'
        onClick={() => {
          setPreview("");
          handleSubmit();
        }}
      >
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="4"
              onChange={handleChange}
            onKeyDown={handleKeyDown}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              value={message}
              required
              onSubmit={(event) => handleSubmit(event)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={() => {
              setPreview("");
              handleSubmit();
            }} >
              Post comment
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
    
                onClick={() => {
                  setPreview("");
                  handleSubmit();
                }}
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
          
            </div>
          </div>
        </div>
      </form>

      {/* <div className="message-form">
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
        </div> */}
      {/* </div> */}

      {/* Additional content (e.g., guidelines) */}
      
    </div>

      
    
      
      /* <div className="message-form">
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
        </div> */}
      
    </div>
  );
};

export default MessageFormUI;
