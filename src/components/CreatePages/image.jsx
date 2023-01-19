import {React, useState } from "react";
import "./image.css";
import {readAsArrayBuffer} from "file-reader"

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload({file, onFileChange}) {
    const [image, setImage] = useState("");
  // State to store uploaded file

  // Handles file upload event and updates state
  function handleUpload(event) {
    setImage(event.target.files[0]);
    onFileChange(ImageToBuffer(event.target.files[0]));

    // Add code here to upload file to server
    // ...
  }

  
console.log(image);
  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {file && <ImageThumb image={image} />}
    </div>
  );
}




async function ImageToBuffer(file){
        const bitmap = await readAsArrayBuffer(file);
        return bitmap;
      }


/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img className="uploadedpic" src={URL.createObjectURL(image)} alt={image.name}/>;
};


export default FileUpload;