import React, { ReactNode } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number";
  regex?: string;
  label?: string;
  required?: boolean;
}
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
  label?: string;
}

export interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  options?: [];
  label?: string;
  required?: boolean;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: [];
  label?: string;
  required?: boolean;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options?: [];
  label?: string;
  required?: boolean;
}

export interface OptionsProps {
  value: string;
  label: string;
}
