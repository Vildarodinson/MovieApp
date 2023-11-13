'use client'

import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import router, { useRouter } from "next/router";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("Login");

  const toggleAuth = useCallback(() => {
    setAuth((currentVariant) =>
      currentVariant === "Login" ? "Register" : "Login"
    );
  }, []);

  const Login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      Login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, Login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav>
          <Image
            width={250}
            height={250}
            alt="logo"
            src="/logos/movieslogo.png"
          />
        </nav>
        <div className="flex justify-center flex-col">
          <div className="bg-black bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="mb-8 text-white text-2xl font-semibold items-center justify-center flex">
              {auth === "Login" ? "Login" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {auth === "Register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="text"
                label="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={auth === "Login" ? Login : register}
              className="bg-red-600 w-full rounded-md text-white p-3 mt-10"
            >
              {auth === "Login" ? "Login" : " Signup"}
            </button>

            <p className="text-gray-400 text-center mt-2 flex justify-center gap-x-2">
              {auth === "Login"
                ? "Dont have an account?"
                : "Already have an account?"}
              <span onClick={toggleAuth} className="text-blue-400">
                {auth === "Login" ? "Signup" : "Login"}
              </span>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
