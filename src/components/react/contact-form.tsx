/** @jsxImportSource react */

import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStore } from "@nanostores/react"
import {
  FieldErrors,
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form"

import { $contactInfo, $step, increaseStep } from "@/stores/contact.store"
import type { ComponentPropsWithAs } from "@/types/helpers.ts"
import type { ContactSchema } from "@/types/validation.types.ts"
import { contactSchema } from "@/utils/form-validation.ts"
import { cn } from "@/utils/helpers"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function ContactForm() {
  const step = useStore($step)
  const contactInfo = useStore($contactInfo)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ContactSchema>({
    defaultValues: contactInfo || undefined,
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<ContactSchema> = (data, e) => {
    e?.preventDefault()

    $contactInfo.set(data)
    increaseStep()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} aria-hidden={step !== 1} className="w-full">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-5">
            <div className="flex flex-col gap-x-4 gap-y-5 md:flex-row md:items-start">
              <FormInput
                label="お名前"
                name="name"
                register={register}
                placeholder="例: 山田太郎"
                errors={errors}
                required
              />
              <FormInput
                label="会社名"
                name="companyName"
                register={register}
                placeholder="例: 株式会社〇〇"
                errors={errors}
              />
            </div>
            <FormInput
              label="メールアドレス"
              name="email"
              register={register}
              placeholder="例: example@email.com"
              errors={errors}
              required
            />
            <FormInput
              label="電話番号"
              name="phoneNumber"
              register={register}
              placeholder="例: 090-1234-5678"
              errors={errors}
            />
            <FormInput
              as="textarea"
              label="お問い合わせ内容"
              name="message"
              register={register}
              placeholder="お問い合わせ内容を入力してください"
              rows={8}
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="w-full md:w-fit">
              Continue
              <Icons.chevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </form>

      {process.env.NODE_ENV === "development" && (
        <DevTool control={control} placement="bottom-right" />
      )}
    </>
  )
}

type CommonProps = {
  name: keyof ContactSchema
  label: string
  register: UseFormRegister<ContactSchema>
  options?: RegisterOptions
  errors?: FieldErrors<ContactSchema>
  required?: boolean
}

function FormInput<T extends "input" | "textarea" = "input">({
  name,
  label,
  register,
  options,
  errors,
  as,
  required,
  ...rest
}: ComponentPropsWithAs<T, CommonProps>) {
  const Component = as || "input"

  return (
    <div className="form-control w-full">
      <div className="flex items-center gap-x-2">
        <label
          htmlFor={name}
          className="relative border border-transparent text-xs font-semibold"
        >
          {label}
          {required && (
            <span className="absolute -right-2 top-0 text-destructive">*</span>
          )}
        </label>
      </div>
      <Component
        {...rest}
        id={name}
        className={cn(
          "mt-2 w-full rounded-md border bg-muted/30 text-[15px] ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          Component === "input" ? "input h-[2.75rem] px-3" : "textarea p-3 leading-6",
        )}
        aria-invalid={errors?.[name] ? "true" : "false"}
        {...register(name, { ...options })}
      />
      {errors?.[name] && (
        <p
          role="alert"
          className="mt-2 flex items-center gap-x-1 text-xs text-destructive"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <span>{errors[name]?.message}</span>
        </p>
      )}
    </div>
  )
}
