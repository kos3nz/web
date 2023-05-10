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
import RightChevronIcon from './icons/chevron-right-icon.tsx'
import type { ContactSchema } from 'types/validation.types.ts'
import { contactSchema } from 'utils/form-validation.ts'

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
      <div className="space-y-5">
        <div className="flex flex-col gap-x-4 gap-y-5 md:flex-row">
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

        <button
          type="submit"
          className="btn mx-auto flex items-center gap-x-1 border-0 bg-cyan-400 text-slate-900 hover:bg-cyan-300 focus-visible:outline-cyan-500/75"
        >
          Continue
          <RightChevronIcon className="h-4 w-4" />
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

type InputProps<T extends 'input' | 'textarea'> = {
  [K in T]: Omit<JSX.IntrinsicElements[T], keyof CommonProps> &
    CommonProps & { as?: T }
}[T]

function FormInput<T extends 'input' | 'textarea' = 'input'>({
  name,
  label,
  register,
  options,
  errors,
  as,
  required,
  ...rest
}: InputProps<T>) {
  const Component = as || 'input'

  return (
    <div className="form-control w-full">
      <div className="flex items-center gap-x-2">
        <label htmlFor={name} className="text-sm font-semibold text-slate-300">
          {label}
        </label>
        {required && (
          <span className="rounded-full border border-emerald-400/50 px-2 py-px text-xs capitalize text-emerald-400">
            必須
          </span>
        )}
      </div>
      <Component
        {...rest}
        id={name}
        className={cx(
          'mt-2.5 w-full bg-slate-700/50 focus-visible:outline-cyan-500/75',
          Component === 'input' ? 'input' : 'textarea',
        )}
        aria-invalid={errors?.[name] ? 'true' : 'false'}
        {...register(name, { ...options })}
      />
      {errors?.[name] && (
        <p role="alert" className="mt-2 flex items-center gap-x-1 text-red-400">
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
