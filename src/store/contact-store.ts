import { atom, map } from 'nanostores'
import type { ContactSchema } from 'types/validation.types.ts'

export const contactInfo = map<ContactSchema>({
  name: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  message: '',
})

export const emptyInfo = () => {
  contactInfo.set({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
}

export const step = atom(1)

export const increaseStep = () => {
  step.set(step.get() + 1)
}

export const decreaseStep = () => {
  step.set(step.get() - 1)
}
