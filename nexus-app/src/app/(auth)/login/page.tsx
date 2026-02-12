import NexusLogin from "@/components/_pages/LoginComponent";
import Dropdown from "@/components/Dropdown";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nexus-login",
  description: "Login with nexus chat application",
};

export default async function Login() {
  return (
    <>
      <NexusLogin
        dropdown={
          <Suspense fallback={<p>Loading...</p>}>
            <Dropdown />
          </Suspense>
        }
      />
    </>
  );
}
