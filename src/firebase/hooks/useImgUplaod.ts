import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { auth } from "../auth";
import { storage } from "../storage";

export const useImgUplaod = () => {
  const [file, setFile] = useState<File | null>(null); // Specify the type of file
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]); // Access the first file in the FileList
    }
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
      if (file) {
        await uploadBytes(storageRef, file);
        console.log("File uploaded successfully!");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading file:", error);
    }
  };

  return { handleFileChange, handleUpload, isLoading };
};