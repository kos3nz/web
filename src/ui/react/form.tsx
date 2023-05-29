/** @jsxImportSource react */

import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from '@nanostores/react'
import cx from 'clsx'
import {
  FieldErrors,
  RegisterOptions,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from 'react-hook-form'
import { contactInfo, increaseStep, step } from 'store/contact-store.ts'
import type { ComponentPropsWithAs } from 'types/helpers.ts'
import type { ContactSchema } from 'types/validation.types.ts'
import { contactSchema } from 'utils/form-validation.ts'
import { RightChevronIcon } from 'ui/react/icons.tsx'

export default function Form() {
  const $step = useStore(step)
  const $contactInfo = useStore(contactInfo)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: $contactInfo || undefined,
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<ContactSchema> = (data, e) => {
    e?.preventDefault()

    contactInfo.set(data)
    increaseStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-hidden={$step !== 1}
      className="w-full"
    >
      <div className="space-y-8 md:space-y-10">
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

        <button
          type="submit"
          className="btn mx-auto flex items-center gap-x-1 border-0 bg-cyan-400 text-slate-900 hover:bg-cyan-300 focus-visible:outline-cyan-500/75"
        >
          Continue
          <RightChevronIcon />
        </button>
      </div>
    </form>
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

function FormInput<T extends 'input' | 'textarea' = 'input'>({
  name,
  label,
  register,
  options,
  errors,
  as,
  required,
  ...rest
}: ComponentPropsWithAs<T, CommonProps>) {
  const Component = as || 'input'

  return (
    <div className="form-control w-full">
      <div className="flex items-center gap-x-2">
        <label
          htmlFor={name}
          className="border border-transparent text-xs font-semibold text-slate-300"
        >
          {label}
        </label>
        {required && (
          <span className="rounded-full border border-emerald-400/50 px-2 text-xs capitalize text-emerald-400">
            必須
          </span>
        )}
      </div>
      <Component
        {...rest}
        id={name}
        className={cx(
          'mt-2 w-full bg-slate-700/50 text-[15px] focus-visible:outline-cyan-500/75',
          Component === 'input'
            ? 'input h-[2.75rem]'
            : 'textarea py-3 leading-6',
        )}
        aria-invalid={errors?.[name] ? 'true' : 'false'}
        {...register(name, { ...options })}
      />
      {errors?.[name] && (
        <p
          role="alert"
          className="mt-2 flex items-center gap-x-1 text-xs text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
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
