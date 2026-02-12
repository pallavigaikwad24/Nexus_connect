"use server";

import { Args } from "@/global.types";
import { generateToken } from "@/utils/server-utils/authCheck";
import { setCookies } from "@/utils/server-utils/cookie";
import {
  createNewUser,
  findUser,
  findUserContact,
  updateUserContact,
} from "@/utils/server-utils/operations";
import fs from "fs";
import path from "path";

export async function profileUpload(args: Args) {
  const file = args.file;
  let filename = "";
  if (file && file.name) {
    const byte = await file.arrayBuffer(); // Convert to ArrayBuffer (binary data)
    const buffer = Buffer.from(byte); // Convert to Node.js Buffer

    const uploadDir = path.join(process.cwd(), "public/profile");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);
  }

  const mobile = args.mobile;
  const countryCode = args.countryCode;
  const where = { mobile, countryCode };
  let user = await findUser(where);

  const data = {
    ...where,
    profilePicture: file ? `${filename}` : "",
    name: args.firstName,
    lastName: args.lastName,
  };

  if (!user) {
    user = await createNewUser(data);

    const isUserContactExists = await findUserContact(
      `${countryCode}-${mobile}`,
    );

    if (isUserContactExists) {
      await updateUserContact(`${countryCode}-${mobile}`, user.id);
    }
  }
  await setCookies(
    "user",
    JSON.stringify({
      id: user?.id,
      countryCode: user.countryCode,
      mobile: user.mobile,
      name: user.name,
    }),
  );
  await setCookies("token", generateToken(user.id));
  return;
}
