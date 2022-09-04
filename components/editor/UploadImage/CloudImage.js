export const CloudImage = async (form_data) => {
  try {
    const imgUpload = await fetch(
      `https://api.cloudinary.com/v1_1/dotjd52ri/image/upload`,
      {
        method: 'POST',
        body: form_data,
      }
    );
    const data = await imgUpload.json();

    if (data) {
      return data.secure_url;
    }
  } catch (err) {
    console.log(err);
  }
};
