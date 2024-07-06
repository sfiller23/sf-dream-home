import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { auth } from "../auth";
import { storage } from "../storage";

export const useImgUplaod = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setIsLoading(true);

    try {
      // Authenticate with your API key (replace with your actual API key)
      await signInWithEmailAndPassword(
        auth,
        "your-api-key-email",
        "your-api-key-password"
      );

      // Get a reference to the storage bucket
      const storageRef = ref(storage, "images/my-image.jpg");

      // Upload the file
      await uploadBytes(storageRef, file);

      setIsLoading(false);
      console.log("File uploaded successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading file:", error);
    }
  };

  return { handleFileChange, handleUpload, isLoading };
};
