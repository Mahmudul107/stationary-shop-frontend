import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EyeClosed, EyeIcon } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { DialogFooter } from "@/components/ui/dialog";

// Replace this with your actual login logic
// import { loginUser } from "@/redux/features/auth/authApi";

interface LoginDialogProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginDialogProps>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginDialogProps> = async (data) => {
    setIsLoading(true);
    try {
      // Simulating API response — replace with real login
      const mockResponse = {
        success: true,
        message: "Logged in successfully!",
      };

      if (!mockResponse.success) {
        form.setError("password", {
          type: "manual",
          message: mockResponse.message || "Login failed. Try again.",
        });
        return;
      }

      toast.success(mockResponse.message, {
        duration: 1500,
        description: "Welcome back!",
      });

      form.reset();
      navigate("/");

    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center bg-[#F5F1EA] px-5 py-8">
      <Card className="w-full max-w-md rounded-2xl shadow-md border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-[#2F5233] uppercase">
            Login
          </CardTitle>
          <CardDescription className="text-sm text-[#333]">
            Access your Leaf & Line account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333]">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@example.com"
                        className="font-medium"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Password */}
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
                          type={showPass ? "text" : "password"}
                          placeholder="••••••••"
                          className="font-medium"
                        />
                        <div
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-[#2F5233]"
                        >
                          {showPass ? <EyeIcon /> : <EyeClosed />}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Submit */}
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
          <p className="text-sm text-[#333] font-medium">
            Don&apos;t have an account?
          </p>
          <Link
            to="/register"
            className="text-sm font-semibold text-[#D8A7B1] hover:underline"
          >
            Register
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Login;
