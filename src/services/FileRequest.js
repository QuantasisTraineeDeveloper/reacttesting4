import axios from "axios";
import { ApiRequests } from "./ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";
import { getFileName } from "../utils/helper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fileUpload = async (file, setContentURL, setContentFile, azureFolder, fileType) => {
  try {
      const response = await ApiRequests.generateUploadURL({fileName: file.name, azureFolder: azureFolder, fileType: fileType});
    if (response.status === 200) {

      const url = response.data.url;
      const fileResponse = await axios.put(url, file, {
        headers: { "Content-Type": file.type, "x-ms-blob-type": "BlockBlob" }
      });
      if (fileResponse.status === 201) {
        successMsg("File uploaded!");
        if(fileType != "allType"){
          setContentFile(getFileName(response.data.displayURL));
          setContentURL(response.data.displayURL);
        }

      }
    }
  } catch (error) {
    console.log(error);
    errorMsg(error?.response?.data?.status);
  }
};

export { fileUpload };

export const getFileURLFromAzure = 
  async ({fileName, fileType},  setContentURL) => {
  try {
      const response = await ApiRequests.generateDownloadURL({fileName, fileType});
      
    if (response.status === 200) {
      if(setContentURL != null)
        setContentURL(response.data.url);
        
        return response;
    }
  } catch (error) {
    console.log(error);
  }
};

