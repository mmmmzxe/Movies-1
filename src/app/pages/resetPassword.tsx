"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Password match check
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
      });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/resetPassword",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword, code, confirmPassword }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/login");
        toast.success("Password reset successfully!", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
        });
        // Redirect after successful reset
      } else {
        toast.error(data.message || "Invalid OTP or request failed.", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
        });
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
      });
    }
  };

  return (
    <div className="items-center flex justify-center divide-y divide-gray-200 mt-8 p-8 border-solid border-r border-t border-white rounded-xl text-black">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-5 mt-10 items-center text-center justify-center "
      >
        <div className="w-full items-center lg:flex-row flex-col flex justify-center ">
          <label className=" m-5  w-[15%]">Code</label>
          <input
            className="p-2 border rounded-full m-2"
            type="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code"
          />
        </div>

        <div className="w-full items-center  lg:flex-row flex-col flex justify-center ">
          <label className=" m-5  w-[15%]">Email</label>
          <input
            className="p-2 border rounded-full m-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="w-full items-center  lg:flex-row flex-col flex justify-center ">
          <label className=" m-5  w-[15%]">New Password</label>

          <input
            className="p-2 border rounded-full m-2 "
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="w-full  lg:flex-row flex-col items-center flex justify-center ">
          <label className=" m-7 ">Confirm Password</label>
          <input
            className="p-2 border rounded-full m-2"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirmPassword"
          />
        </div>

        <button type="submit" className="button">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
