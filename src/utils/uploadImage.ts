import axios from "axios";

const image_api_key = "4702e2025098c08b81b178bc74cb4784"
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

// Image upload with abort signal support
export const imageUpload = async (
  image: string | Blob,
  options?: { signal?: AbortSignal }
) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(image_hosting_url, formData, {
    signal: options?.signal
  });

  return data;
};