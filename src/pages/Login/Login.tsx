/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeClosed } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verfiyToken";
import { setUser } from "@/redux/features/auth/authSlice";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<LoginFormInputs>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await login(data).unwrap();
      console.log("✅ LOGIN SUCCESS:", res);

      const user = verifyToken(res.token);
      dispatch(setUser({ user, token: res.token }));

      toast.success("Login successful", { duration: 1500 });
      form.reset();
      navigate("/");
    } catch (error: any) {
      console.error("❌ LOGIN ERROR:", error);
      setErrorMsg(
        error?.data?.message || "Login failed. Please try again."
      );
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F1EA] px-4 py-10">
      <Card className="w-full max-w-lg rounded-2xl shadow-md border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-extrabold text-[#2F5233] text-center uppercase">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-sm text-[#333]">
            Login to your Leaf & Line account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333]">Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="you@example.com" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333]">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#2F5233]"
                        >
                          {showPassword ? <EyeIcon /> : <EyeClosed />}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {errorMsg && (
                <p className="text-center text-red-500 font-medium">{errorMsg}</p>
              )}

              <DialogFooter className="mt-6">
                <Button
                  type="submit"
                  disabled={!form.formState.isValid || isLoading}
                  className="w-full bg-[#2F5233] text-white hover:bg-[#D8A7B1] font-semibold transition"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 text-center">
          <p className="text-sm text-[#333] font-medium">Don't have an account?</p>
          <Link
            to="/register"
            className="text-sm font-semibold text-[#D8A7B1] hover:underline"
          >
            Create one here
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Login;
