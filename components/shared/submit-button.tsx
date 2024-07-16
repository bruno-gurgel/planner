"use client";

import { useFormStatus } from "react-dom";

import { Button, ButtonProps } from "../ui/button";

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" {...props}>
      {children}
    </Button>
  );
}
