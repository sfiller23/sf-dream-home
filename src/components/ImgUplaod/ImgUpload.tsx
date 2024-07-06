import { useImgUplaod } from "../../firebase/hooks/useImgUplaod";

const ImgUpload = () => {
  const { handleFileChange, handleUpload, isLoading } = useImgUplaod();

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ImgUpload;
