import { FormEvent, ChangeEventHandler, useState } from "react";
import axios from "axios";

const fileToDataString = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = (error) => reject(error);
    reader.onload = () => resolve(reader.result as string);
  });
};

function TestImage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Allow null
  const [previewImgUrl, setPreviewImgUrl] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const taskId = 3; // Replace with the desired task ID or pass it as a prop

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const file = event.target.files?.[0]; // Use optional chaining
    setSelectedImage(file || null); // Set to null if no file
    if (!file) {
      setPreviewImgUrl(""); // Clear the preview if no file selected
      return;
    }
    try {
      const imgUrl = await fileToDataString(file);
      setPreviewImgUrl(imgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) return; // Prevent upload if no image is selected

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await axios.post(
        `https://localhost:7233/api/Gantt`,
        { selectedImage, taskId },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (100 * progressEvent.loaded) / (progressEvent.total || 1)
            ); // Handle total possibly being undefined
            setProgress(progress);
          },
        }
      );

      setProgress(0); // Reset progress after upload
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      {progress > 0 && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
      {previewImgUrl && (
        <div className="image_wrapper">
          <img src={previewImgUrl} alt="preview" />
        </div>
      )}
      <form onSubmit={handleImageUpload}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button disabled={!selectedImage} type="submit">
          Upload image
        </button>
      </form>
    </div>
  );
}

export default TestImage;
