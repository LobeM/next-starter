import { ChangeEventHandler, FocusEventHandler } from "react";

import { Control, Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface FormGeneratorProps {
  type?: "text" | "email" | "password" | "number";
  inputType:
    | "select"
    | "input"
    | "textarea"
    | "radio"
    | "checkbox"
    | "file"
    | "image"
    | "date"
    | "otp";
  options?: { label: string; value: string; id: string }[];
  name: string;
  label?: string;
  lines?: number;
  labelRightContent?: React.ReactNode;
  placeholder?: string;
  control: Control<any>;
  disabled?: boolean;
  description?: string;
  className?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export default function FormGenerator({
  type,
  inputType,
  options,
  name,
  label,
  lines,
  labelRightContent,
  placeholder,
  control,
  disabled,
  description,
  className,
  autoComplete,
  onChange,
  onBlur,
  onFocus,
}: FormGeneratorProps) {
  switch (inputType) {
    case "input":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {!labelRightContent ? (
                <FieldLabel htmlFor={name}>{label}</FieldLabel>
              ) : (
                <div className="flex items-center gap-2">
                  <FieldLabel htmlFor={name}>{label}</FieldLabel>
                  {labelRightContent}
                </div>
              )}
              <Input
                {...field}
                id={name}
                type={type}
                aria-invalid={fieldState.invalid}
                placeholder={placeholder}
                autoComplete={autoComplete}
                disabled={disabled}
                className={className}
                onChange={(event) => {
                  field.onChange(event);
                  onChange?.(event);
                }}
                onBlur={(event) => {
                  field.onBlur();
                  onBlur?.(event);
                }}
                onFocus={onFocus}
              />
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "textarea":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
              <Textarea
                {...field}
                id={name}
                rows={lines}
                aria-invalid={fieldState.invalid}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
                onBlur={field.onBlur}
              />
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "select":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
              <Combobox
                value={field.value ?? ""}
                onValueChange={field.onChange}
                disabled={disabled}
              >
                <ComboboxInput
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  aria-invalid={fieldState.invalid}
                  showClear
                />
                <ComboboxContent>
                  <ComboboxEmpty>No options found.</ComboboxEmpty>
                  <ComboboxList>
                    {(options ?? []).map((option) => (
                      <ComboboxItem key={option.id} value={option.value}>
                        {option.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "radio":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel>{label}</FieldLabel>}
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                disabled={disabled}
                className={className}
              >
                {(options ?? []).map((option) => (
                  <label key={option.id} htmlFor={option.id} className="flex items-center gap-2">
                    <RadioGroupItem
                      id={option.id}
                      value={option.value}
                      aria-invalid={fieldState.invalid}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </RadioGroup>
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "checkbox":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => {
            const values = Array.isArray(field.value) ? field.value : [];
            const hasOptions = (options?.length ?? 0) > 0;

            return (
              <Field data-invalid={fieldState.invalid}>
                {label && <FieldLabel>{label}</FieldLabel>}
                {hasOptions ? (
                  <div className="flex flex-col gap-2">
                    {(options ?? []).map((option) => {
                      const checked = values.includes(option.value);
                      return (
                        <label
                          key={option.id}
                          htmlFor={option.id}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={option.id}
                            checked={checked}
                            onCheckedChange={(nextChecked) => {
                              const nextValues = nextChecked
                                ? [...values, option.value]
                                : values.filter((value: string) => value !== option.value);
                              field.onChange(nextValues);
                            }}
                            disabled={disabled}
                            aria-invalid={fieldState.invalid}
                          />
                          <span>{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                ) : (
                  <label htmlFor={name} className="flex items-center gap-2">
                    <Checkbox
                      id={name}
                      checked={Boolean(field.value)}
                      onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                      disabled={disabled}
                      aria-invalid={fieldState.invalid}
                    />
                    <span>{label ?? placeholder}</span>
                  </label>
                )}
                <FieldDescription>{description}</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />
      );
    case "file":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
              <Input
                id={name}
                name={field.name}
                ref={field.ref}
                type="file"
                aria-invalid={fieldState.invalid}
                disabled={disabled}
                className={className}
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  field.onChange(file);
                  onChange?.(event);
                }}
                onBlur={(event) => {
                  field.onBlur();
                  onBlur?.(event);
                }}
                onFocus={onFocus}
              />
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "image":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
              <Input
                id={name}
                name={field.name}
                ref={field.ref}
                type="file"
                accept="image/*"
                aria-invalid={fieldState.invalid}
                disabled={disabled}
                className={className}
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  field.onChange(file);
                  onChange?.(event);
                }}
                onBlur={(event) => {
                  field.onBlur();
                  onBlur?.(event);
                }}
                onFocus={onFocus}
              />
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    case "date":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => {
            const selectedDate =
              typeof field.value === "string" || field.value instanceof Date
                ? new Date(field.value)
                : undefined;
            const hasValidDate = selectedDate && !Number.isNaN(selectedDate.getTime());

            return (
              <Field data-invalid={fieldState.invalid}>
                {label && <FieldLabel>{label}</FieldLabel>}
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" className={className} />}>
                    {hasValidDate
                      ? selectedDate.toLocaleDateString()
                      : (placeholder ?? "Pick a date")}
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={hasValidDate ? selectedDate : undefined}
                      onSelect={(date) => field.onChange(date ?? null)}
                    />
                  </PopoverContent>
                </Popover>
                <FieldDescription>{description}</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />
      );
    case "otp":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
              <InputOTP
                id={name}
                maxLength={lines ?? 6}
                value={field.value ?? ""}
                disabled={disabled}
                onChange={field.onChange}
                onBlur={field.onBlur}
                aria-invalid={fieldState.invalid}
              >
                <InputOTPGroup>
                  {Array.from({ length: lines ?? 6 }).map((_, index) => (
                    <InputOTPSlot key={`${name}-${index}`} index={index} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>{description}</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      );
    default:
      return null;
  }
}
