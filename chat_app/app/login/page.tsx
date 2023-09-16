"use client";
import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};
type Providers = Record<string, Provider>;

function Login() {
  const router = useRouter();
  const [providers, setProviders] = useState<Providers | null>(null);
  const { data: session } = useSession();

  useEffect(function () {
    if (session?.user) {
      router.push("/");
    }
  });
  useEffect(function () {
    const setUpProvider = async function () {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProvider();
  }, []);

  console.log(session);
  return (
    <div className="bg-gradient-to-r from-cyan-300/70 via-stone-100 to-amber-200/70 h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold font-sans">Welcome to Chat App</h1>
      <img src="logo.png" height="232px" width="232px" />
      {providers &&
        Object.values(providers).map((provider: Provider) => (
          <Button
            variant="outlined"
            key={provider.name}
            onClick={() => signIn(provider.id)}
          >
            Sign In With Google
          </Button>
        ))}
    </div>
  );
}

export default Login;
