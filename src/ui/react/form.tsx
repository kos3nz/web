/** @jsxImportSource react */

import { zodResolver } from '@hookform/resolvers/zod'
import {
  FieldErrors,
  RegisterOptions,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'お名前を入力してください' })
    .max(30, { message: '30文字以内で入力してください' }),
  companyName: z
    .string()
    .min(1, { message: '会社名を入力してください' })
    .max(30, { message: '30文字以内で入力してください' }),
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: '有効なメールアドレスを記入してください' }),
  message: z.string(),
})

type Schema = z.infer<typeof schema>

export default function ValidatedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8">
        <FormInput
          name="name"
          register={register}
          placeholder="Name / お名前"
          errors={errors}
        />
        <FormInput
          name="companyName"
          register={register}
          placeholder="Company Name / 会社名"
          errors={errors}
        />
        <FormInput
          name="email"
          register={register}
          placeholder="Email / メールアドレス"
          errors={errors}
        />

        <textarea
          {...register('message')}
          className="textarea w-full bg-slate-800 text-base focus-visible:outline-slate-200"
          rows={10}
          placeholder="Message / お問い合わせ内容"
        />

        <button
          type="submit"
          className="btn mx-auto block bg-indigo-600 hover:bg-indigo-600/60 focus-visible:outline-slate-200"
        >
          Confirm / 確認する
        </button>
      </div>
    </form>
  )
}

type InputProps = {
  name: keyof Schema
  label?: string
  register: UseFormRegister<Schema>
  options?: RegisterOptions
  placeholder?: string
  errors?: FieldErrors<Schema>
}

function FormInput({
  name,
  // label,
  register,
  options,
  placeholder,
  errors,
}: InputProps) {
  return (
    <div className="form-control space-y-2">
      {/* <label className='pointer-events-none'>{label}</label> */}
      <input
        {...register(name, { ...options })}
        className="input w-full bg-slate-800 focus-visible:outline-slate-200"
        placeholder={placeholder}
        aria-invalid={errors?.[name] ? 'true' : 'false'}
      />
      {errors?.[name] && (
        <p role="alert" className="flex items-center gap-x-1 text-red-400">
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
