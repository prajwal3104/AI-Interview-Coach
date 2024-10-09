// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return <SignUp />
// }

"use client";
import React from "react";
import { Input } from "../../../components/ui/input"; // Adjusted path
import { cn } from "../../../lib/utils"; // Adjusted path
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" required />
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
