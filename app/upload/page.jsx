"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { VscFilePdf } from "react-icons/vsc";

const Page = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [allFiles, setAllFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    var formdata = new FormData();
    formdata.append("files", selectedFile);

    var requestOptions = { method: "POST", body: formdata };

    const response = await fetch("/api/upload", requestOptions);
    const result = await response.text();
    // if (result.status == "success") {
    //   getPublicAssets();
    // }
    getPublicAssets();
    console.log(result);
  };

  const getPublicAssets = async () => {
    try {
      const response = await axios.get("/api/upload");
      return setAllFiles(response?.data?.files);
    } catch (error) {
      console.log("Error fetching public assets:", error.message);
      return null;
    }
  };

  const deleteFile = async (fileName) => {
    await axios({
      method: "post",
      url: "/api/delete",
      data: { fileName: fileName },
    })
      .then((res) => {
        if (res?.data?.error) {
          return console.error(res?.data?.error);
        }
        getPublicAssets();

        return console.log(res?.data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPublicAssets();
  }, []);

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
      <div className="py-20">
        <h1 className="text-3xl text-center font-bold  ">Uploaded Files</h1>

        <div className="mt-16 overflow-x-auto">
          <FileListView deleteFile={deleteFile} files={allFiles} />
        </div>
      </div>
    </div>
  );
};

export default Page;

const getFileType = (filePath) => {
  return filePath.split(".").pop();
};

const FileView = ({ deleteFile, fileName, filePath }) => {
  const fileType = getFileType(filePath);

  // const deleteFile = async (fileName) => {
  //   await axios({
  //     method: "post",
  //     url: "/api/delete",
  //     data: { fileName: fileName },
  //   })
  //     .then((res) => {
  //       if (res?.data?.error) {
  //         return console.error(res?.data?.error);
  //       }
  //       getPublicAssets();

  //       return console.log(res?.data?.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <tr className=" border">
      <td className="p-4">
        {fileType === "pdf" ? (
          <div>
            {/* <embed
              className=""
              src={filePath}
              type="application/pdf"
              width="50"
              height="50"
            /> */}
            <VscFilePdf className="text-5xl" />
            {/* <p>{filePath} </p> */}
          </div>
        ) : (
          <img
            className=""
            src={filePath}
            alt="file"
            style={{ width: "50px", height: "auto" }}
          />
        )}
      </td>
      <td className="px-4 border">{filePath.replace(/^\\assets\\/, "")}</td>
      <td className="px-4 border">
        <a
          target="_blank"
          href={`http://localhost:3000/${filePath}`}
          className=""
        >
          Preview
        </a>
      </td>
      <td className="px-4 border">
        <button
          onClick={() => {
            deleteFile(filePath.replace(/^\\assets\\/, ""));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const FileListView = ({ deleteFile, files }) => {
  return (
    <>
      {files.length > 0 && (
        <table className="table-fixed mx-auto">
          <thead>
            <tr className="border">
              <th className="border px-4 py-4 bg-blue-400">Files</th>
              <th className="border px-4 py-4 bg-blue-400">Files Name</th>
              <th className="border px-4 py-4 bg-blue-400">Preview</th>
              <th className="border px-4 py-4 bg-blue-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {files.map((filePath, index) => (
              <FileView
                key={index}
                fileName={`File ${index + 1}`}
                deleteFile={deleteFile}
                filePath={filePath}
              />
            ))}
          </tbody>
        </table>
      )}
      {files.length == 0 && (
        <h1 className="text-center text-2xl font-semibold">
          {" "}
          Files Not Found /Error fetching
        </h1>
      )}
    </>
  );
};
