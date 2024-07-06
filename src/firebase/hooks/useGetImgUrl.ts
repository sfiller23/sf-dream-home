import { getDownloadURL, ref } from "firebase/storage";
import { useMemo, useState } from "react";
import { storage } from "../storage";

export const useGetImgUrl = (city?: string): string => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useMemo(() => {
    if (!city || city === "" || city === "All") return;
    const fileRef = ref(storage, `city_images/${city}.png`);

    const fetchImageUrl = async () => {
      try {
        const url = await getDownloadURL(fileRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error getting download URL:", error);
      }
    };

    fetchImageUrl();
  }, [city]);

  return imageUrl;
};
