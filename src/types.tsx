import React, { ReactNode } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number";
  regex?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
}
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
  label?: string;
  error?: boolean;
}

export interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options?: [];
  label?: string;
  required?: boolean;
  error?: boolean;
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
  error?: boolean;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options?: [];
  label?: string;
  required?: boolean;
  error?: boolean;
}

export interface OptionsProps {
  value: string;
  label: string;
}

export const textFieldProps = (item: any, key: any) => {
  return {
    key: key,
    label: item.label,
    id: item.id,
    name: item.name,
    type: item.text,
    value: item.defaultValue,
    placeholder: item.placeholder,
    maxLength: item.maxlength,
    size: item.size,
    disabled: item.disabled,
    readOnly: item.readonly,
    required: item.required,
    autoFocus: item.autofocus,
    autoComplete: item.autocomplete,
    pattern: item.validationPattern,
    minLength: item.minlength,
    spellCheck: item.spellcheck,
    tabIndex: item.tabindex,
    title: item.tooltipText,
    style: item.style,
    className: item.customClass,
    onInput: item.handleInputFunction,
    onBlur: item.handleBlurFunction,
    onFocus: item.handleFocusFunction,
  };
};

export const buttonProps = (item: any, key: any) => {
  return {
    key: key,
    defaultValue: item.defaultValue,
    disabled: item.disabled,
    onClick: item.onClick,
    onDoubleClick: item.onDoubleClick,
    type: item.type,
    className: item.className,
    style: item.style,
    id: item.id,
    name: item.name,
    value: item.value,
    ariaLabel: item.ariaLabel,
    ariaLabelledby: item.ariaLabelledBy,
    autoFocus: item.autofocus,
    form: item.form,
    tabIndex: item.tabIndex,
    title: item.title,
    onMouseOver: item.onMouseOver,
    onMouseOut: item.onMouseOut,
    onMouseDown: item.onMouseDown,
    onMouseUp: item.onMouseUp,
    onKeyDown: item.onKeyDown,
    onKeyUp: item.onKeyUp,
    onFocus: item.onFocus,
    onBlur: item.onBlur,
    children: item.children,
  };
};
