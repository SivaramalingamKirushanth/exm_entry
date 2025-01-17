"use client";

import { usePathname, useSearchParams } from "next/navigation";
import StudentDetails from "./StudentDetails";

const users = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const sub_id = searchParams.get("sub_id");
  const batch_id = searchParams.get("batch_id");
  const sub_name = searchParams.get("sub_name");
  const sub_code = searchParams.get("sub_code");

  return (
    <div className="flex justify-end md:justify-center">
      <div className="md:w-[70%] ">
        <StudentDetails
          sub_id={sub_id}
          sub_name={sub_name}
          batch_id={batch_id}
          pathname={pathname}
          sub_code={sub_code}
        />
      </div>
    </div>
  );
};

export default users;
