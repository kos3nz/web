import { z } from 'zod'

export const phoneRegex = new RegExp(
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s-]\d{3,4}[\s-]\d{4}$/,
)

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'お名前を入力してください' })
    .max(30, { message: '30文字以内で入力してください' }),
  companyName: z.string().max(30, { message: '30文字以内で入力してください' }),
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: '入力されたメールアドレスに間違いがあります' }),
  phoneNumber: z
    .string()
    .regex(phoneRegex, { message: '電話番号に間違いがあります' })
    .optional()
    .or(z.literal('')),
  message: z.string(),
})
