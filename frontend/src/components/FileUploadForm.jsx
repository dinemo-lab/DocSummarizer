import { useState } from 'react';
import DropzoneComponent from './DropzoneComponent';
import '../styles/FileUploadForm.css';
import Loader  from './loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const FileUploadForm = () => {
  const [fileContent, setFileContent] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false); 

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
        setSummary(null); 
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

  const handleSummarize = async () => {
    if (fileContent) {
      setLoading(true); // Show loader
      try {
        const response = await fetch('http://localhost:5000/summarize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: fileContent }),
        });

        const result = await response.json();
        if (response.ok) {
          setSummary(result.summary);
          setError(null);
        } else {
          setSummary(null);
          setError(result.error || "Summarization failed.");
        }
      } catch (error) {
        setSummary(null);
        setError("Summarization failed due to an unexpected error.");
        console.error("Error summarizing content:", error);
      } finally {
        setLoading(false); 
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
  };

  return (
    <div className="container">
      <DropzoneComponent onDrop={onDrop} />
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {fileContent && (
        <div className="file-content">
          <h3>File Content:</h3>
          <p>
            <span className="copy-icon" onClick={() => copyToClipboard(fileContent)}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
            {fileContent}
          </p>
        </div>
      )}
      {fileContent && !summary && (
        <button onClick={handleSummarize} className="summarize-button">
          Summarize
        </button>
      )}
      {loading && <Loader />}
      {summary && (
        <div className="summary-content">
          <h3>Summary:</h3>
          <p>
            <span className="copy-icon" onClick={() => copyToClipboard(summary)}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
            {summary}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
