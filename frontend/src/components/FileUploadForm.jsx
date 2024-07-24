import { useState } from 'react';
import DropzoneComponent from './DropzoneComponent';
import '../styles/FileUploadForm.css';

const FileUploadForm = () => {
  const [fileContent, setFileContent] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.message);
        setError(null);
        setFileContent(result.file.content);
        setSummary(result.file.summary);
      } else {
        setSuccessMessage(null);
        setError(result.error || "File upload failed.");
        setFileContent(null);
        setSummary(null);
      }
    } catch (error) {
      setSuccessMessage(null);
      setError("File upload failed due to an unexpected error.");
      setFileContent(null);
      setSummary(null);
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container">
      <DropzoneComponent onDrop={onDrop} />
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {fileContent && (
        <div className="file-content">
          <h3>File Content:</h3>
          <p>{fileContent}</p>
        </div>
      )}

      {summary && (
        <div className="summary-content">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
