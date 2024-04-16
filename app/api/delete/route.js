// import { NextResponse } from "next/server";

// export async function POST() {
//   const dirRelativeToPublicFolder = "assets";
//   const publicDir = path.join(
//     process.cwd(),
//     "public",
//     dirRelativeToPublicFolder
//   );

//   try {
//     const filenames = fs.readdirSync(publicDir);

//     filenames.forEach((filename) => {
//       const filePath = path.join(publicDir, filename);
//       fs.unlinkSync(filePath); // Delete the file
//     });

//     NextResponse.json({ message: "Files deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting files:", error);
//     NextResponse.json({ error: "Internal Server Error" });
//   }
// }
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req, res) {
  const dirRelativeToPublicFolder = "assets";
  const publicDir = path.join(
    process.cwd(),
    "public",
    dirRelativeToPublicFolder
  );

  try {
    const reqbody = await req.json();
    const { fileName } = reqbody;
    console.log(fileName);

    const filePath = path.join(publicDir, fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // Delete the file
      return NextResponse.json({ message: `${fileName} deleted successfully` });
    } else {
      return NextResponse.json(
        { error: `${fileName} not found` },
        { status: 404 }
      );
    }
    // return NextResponse.json({ message: "seccess" });
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
