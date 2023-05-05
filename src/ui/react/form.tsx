/** @jsxImportSource react */

import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from 'react-hook-form'

type ValidationInputs = {
  name: string
  companyName: string
  email: string
  message: string
}

type InputProps = {
  name: keyof ValidationInputs
  label?: string
  register: UseFormRegister<ValidationInputs>
  options?: RegisterOptions
  placeholder?: string
  errors?: FieldErrors<ValidationInputs>
  errorMessage?: string
}

const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)

export default function ValidatedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationInputs>()

  const onSubmit: SubmitHandler<ValidationInputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8">
        <FormInput
          name="name"
          register={register}
          options={{ maxLength: 30, required: true }}
          placeholder="Name / お名前"
          errors={errors}
          errorMessage="お名前を入力してください(30文字以内)"
        />
        <FormInput
          name="companyName"
          register={register}
          options={{ maxLength: 50, required: true }}
          placeholder="Company Name / 会社名"
          errors={errors}
          errorMessage="会社名を入力してください(30文字以内)"
        />
        <FormInput
          name="email"
          register={register}
          options={{ pattern: emailRegex, required: true }}
          placeholder="Email / メールアドレス"
          errors={errors}
          errorMessage="有効なメールアドレスを入力してください"
        />

        <textarea
          {...register('message')}
          className="textarea w-full bg-slate-800 focus-visible:outline-indigo-500"
          rows={10}
          placeholder="Message / お問い合わせ内容"
        />

        <button
          type="submit"
          className="btn mx-auto block bg-indigo-600 hover:bg-indigo-600/60 focus-visible:outline-indigo-500"
        >
          Confirm / 確認する
        </button>
      </div>
    </form>
  )
}

function FormInput({
  name,
  // label,
  register,
  options,
  placeholder,
  errors,
  errorMessage,
}: InputProps) {
  return (
    <div className="form-control space-y-2">
      {/* <label className='pointer-events-none'>{label}</label> */}
      <input
        {...register(name, { ...options })}
        className="input w-full bg-slate-800 focus-visible:outline-indigo-500"
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
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  )
}
