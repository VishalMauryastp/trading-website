import { NextResponse } from "next/server";

export async function POST() {
  const dirRelativeToPublicFolder = "assets";
  const publicDir = path.join(
    process.cwd(),
    "public",
    dirRelativeToPublicFolder
  );

  try {
    const filenames = fs.readdirSync(publicDir);

    filenames.forEach((filename) => {
      const filePath = path.join(publicDir, filename);
      fs.unlinkSync(filePath); // Delete the file
    });

    NextResponse.json({ message: "Files deleted successfully" });
  } catch (error) {
    console.error("Error deleting files:", error);
    NextResponse.json({ error: "Internal Server Error" });
  }
}
