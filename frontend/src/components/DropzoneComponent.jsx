
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import '../styles/DropzoneComponent.css';

const DropzoneComponent = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag & drop a file here, or click to select one</p>
      )}
    </div>
  );
};

DropzoneComponent.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default DropzoneComponent;
