"use client";

import React from "react";
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation";

const ChangeLocale = () => {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = (event: any) => {
    const newLocale = event.target.value;
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  return (
    <select
      onChange={handleLocaleChange}
      value={params.locale}
      className="bg-base-red"
    >
      <option value="en">English</option>
      <option value="de">German</option>
    </select>
  );
};

export default ChangeLocale;
