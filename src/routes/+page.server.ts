import getFileStructure from "$lib/ffmpeg.js";

export const load = async () => {
  const relativePath = "/images/swiper";
  const data = await getFileStructure(
    process.cwd() + "/static" + relativePath,
    relativePath,
    "20:-1",
    "1200:-1",
    100
  );
  return {
    images: data,
  };
};
