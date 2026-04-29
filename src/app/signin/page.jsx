"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { FaGoogle } from "react-icons/fa";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignInPage = () => {
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log(data, error.message);
    if (error) {
      alert(`"ERROR", ${error.message}`);
    }
  };
  return (
    <Form
      className="flex w-96 mx-auto py-7 bg-gray-300 p-5 mt-5 rounded-2xl flex-col gap-4"
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your Email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={"w-full"} type="submit">
          <Check />
          Login
        </Button>
        <Button className={"w-full"} type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <p className="text-center">or</p>
      <Button
        variant="secondary"
        className={"w-full"}
        onClick={handleGoogleSignIn}
      >
        <FaGoogle />
        Sign In With Google
      </Button>
    </Form>
  );
};

export default SignInPage;
