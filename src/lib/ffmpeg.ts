import { exec } from "child_process";
import fs from "fs";
import fsp from "fs/promises";
import Path from "path";

export default async function getFileStructure(
  absolutePath: string,
  relativePath: string,
  placeholderScale: string,
  imageScale: string,
  imageQuality: number
): Promise<any[]> {
  const compressedDir = `${absolutePath}/compressed`;
  const placeholderFilesDir = compressedDir + "/placeholders";
  const imagesFilesDir = compressedDir + "/images";

  return checkDirectoryExists(compressedDir)
    .then(async (dirExists) => {
      if (!dirExists) {
        return fsp.mkdir(compressedDir).then(async () => {
          return Promise.all([
            checkDirectoryExists(placeholderFilesDir).then(
              (placeholderDirExists) => {
                if (!placeholderDirExists) {
                  return fsp.mkdir(placeholderFilesDir);
                }
              }
            ),
            checkDirectoryExists(imagesFilesDir).then((imagesDirExists) => {
              if (!imagesDirExists) {
                return fsp.mkdir(imagesFilesDir);
              }
            }),
          ]);
        });
      }
      return true;
    })
    .then(() => fsp.readdir(absolutePath, { withFileTypes: true }))
    .then((files) =>
      files.filter((file) => file.isFile()).map((file) => file.name)
    )
    .then((files) =>
      Promise.all(
        files.map((file) => {
          const pathToFile = `${absolutePath}/${file}`;
          const placeholderFileName = `${
            Path.parse(pathToFile).name
          }-ffmpeg-small.webp`;
          const imageFileName = `${Path.parse(pathToFile).name}.webp`;

          const placeholderFilePath = `${placeholderFilesDir}/${placeholderFileName}`;
          const imageFilePath = `${imagesFilesDir}/${imageFileName}`;
          return checkFileExists(placeholderFilePath).then(
            async (placeholderExists) => {
              if (!placeholderExists) {
                await convertToWebP(
                  pathToFile,
                  placeholderFilePath,
                  placeholderScale,
                  10
                );
              }
              return checkFileExists(imageFilePath).then(
                async (imageExists) => {
                  if (!imageExists) {
                    await convertToWebP(
                      pathToFile,
                      imageFilePath,
                      imageScale,
                      imageQuality
                    );
                  }
                  return {
                    image: `${relativePath}/compressed/images/${imageFileName}`,
                    smallImage: `${relativePath}/compressed/placeholders/${placeholderFileName}`,
                  };
                }
              );
            }
          );
        })
      )
    );
}

function convertToWebP(
  inputFile: string,
  outputFile: string,
  scale: string,
  quality: number
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const command = `ffmpeg -i ${inputFile} -vf "scale=${scale}:force_original_aspect_ratio=decrease" -c:v libwebp -quality ${quality} ${outputFile}`;
    exec(command, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}

function checkFileExists(file: string): Promise<boolean> {
  return fsp
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

function checkDirectoryExists(directory: string): Promise<boolean> {
  return fsp
    .access(directory, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
