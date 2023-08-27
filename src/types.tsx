import React, { ReactNode } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number";
  regex?: string;
}
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  disabled?: boolean;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}
