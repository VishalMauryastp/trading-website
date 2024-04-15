"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    var formdata = new FormData();
    formdata.append("files", selectedFile);

    var requestOptions = { method: "POST", body: formdata };

    const response = await fetch("/api/upload", requestOptions);
    const result = await response.text();
    if (result.status == "success") {
      setSelectedFile(null);
    }
    console.log(result);
  };

  const getPublicAssets = async () => {
    try {
      const response = await fetch("/api/upload", { method: "GET" });

      console.log(response);

      return data;
    } catch (error) {
      console.log("Error fetching public assets:", error.message);
      return null;
    }
  };

  getPublicAssets();

  return (
    <div className="  w-[90%] mx-auto  py-20">
      <div className=" flex items-center w-full  md:max-w-[400px] mx-auto border-2 border-blue-600 rounded-2xl py-5 px-4">
        <input
          className="w-fit mx-auto"
          type="file"
          accept=".jpg,.png,.pdf"
          onChange={handleFileChange}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded flex-shrink-0"
          type="submit"
          onClick={handleSubmit}
        >
          Upload File
        </button>
      </div>
      <div>
        <h1>Uploaded Files</h1>
      </div>
    </div>
  );
};

export default Page;
