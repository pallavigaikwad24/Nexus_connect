import { countryCode } from "@/global.types";
import { getCountry } from "@/utils/server-utils/operations";
import { notFound } from "next/navigation";

export default async function Dropdown() {
  const countryCode = await getCountry();
  if (countryCode.length == 0) {
    return notFound();
  }

  return (
    <>
      <select
        name="countryCode"
        className=" border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-700"
      >
        {countryCode.length > 0 &&
          countryCode.map((item: countryCode) => (
            <option key={item.id} value={item.countryCode}>
              {item.countryCode}
            </option>
          ))}
      </select>
    </>
  );
}
