"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";

const users = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-end md:justify-center">
      <div className="md:w-[70%] flex gap-6 flex-wrap">
        <Link
          href={`${pathname}/applied science`}
          className="w-[30%] hover:shadow-md rounded-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Applied Science</CardTitle>
              <CardDescription>no of Departments</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link
          href={`${pathname}/applied science`}
          className="w-[30%] hover:shadow-md rounded-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Bussiness Studies</CardTitle>
              <CardDescription>no of Departments</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link
          href={`${pathname}/applied science`}
          className="w-[30%] hover:shadow-md rounded-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
              <CardDescription>no of Departments</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default users;