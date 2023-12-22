import grid from "gridfs-stream";
import mongoose from "mongoose";

// for uploading the file to mongodb

const url = "http://localhost:8000";  
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({ message: "File not found for upload" });
    }

    const imageUrl = `${url}/file/${req.file.filename}`;
    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.log("Error uploading:", error.message);
    return res.status(500).json({ message: "Error while uploading the image" });
  }
};

// for getting the file from mongodb server which is in form of chunks
let gfs, gridFsBucket;
const con = mongoose.connection;
con.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(con.db, {
    bucketName: "fs",
  });
  gfs = grid(con.db, mongoose.mongo);
  gfs.collection("fs");
});
export const downloadfile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
