import type { contactSchema } from "@/utils/form-validation"
import type { z } from "zod"

export type ContactSchema = z.infer<typeof contactSchema>
