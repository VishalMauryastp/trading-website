import { NextResponse } from "next/server";

import { pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

import path from "path";
import fs from "fs";

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const file = formData.getAll("files")[0];
    const filePath = `./public/assets/${file.name}`;
    await pump(file.stream(), fs.createWriteStream(filePath));
    return NextResponse.json({ status: "success", data: file.size });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function GET() {
  const dirRelativeToPublicFolder = "assets";
  const publicDir = path.join(
    process.cwd(),
    "public",
    dirRelativeToPublicFolder
  );

  try {
    const filenames = fs.readdirSync(publicDir);
    const files = filenames.map((name) =>
      path.join("/", dirRelativeToPublicFolder, name)
    );

    return NextResponse.json({ files });
  } catch (error) {
    console.error("Error reading directory:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
