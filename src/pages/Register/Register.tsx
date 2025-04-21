import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

interface UserRegistration {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register] = useRegisterUserMutation();
  const navigate = useNavigate();

  const registrationForm = useForm<UserRegistration>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F1EA] px-4 py-10">
      <Card className="w-full max-w-lg rounded-2xl shadow-md border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-extrabold text-[#2F5233] text-center uppercase">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-sm text-[#333]">
            Join Leaf & Line to access exclusive stationery items!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...registrationForm}>
            <form className="space-y-5">
              {/* Name field */}
              <FormField
                control={registrationForm.control}
                name="name"
                rules={{ required: "Please enter your name" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333]">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Drop your name here"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={registrationForm.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
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
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={registrationForm.control}
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

              {/* Submit Button */}
              <DialogFooter className="mt-6">
                <Button
                  type="submit"
                  disabled={!registrationForm.formState.isValid}
                  className="w-full bg-[#2F5233] text-white hover:bg-[#D8A7B1] font-semibold transition"
                >
                  Sign Up
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 text-center">
          <p className="text-sm text-[#333] font-medium">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="text-sm font-semibold text-[#D8A7B1] hover:underline"
          >
            Go to Login
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Register;
