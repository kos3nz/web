import type { z } from "zod"

import type { contactSchema } from "@/utils/form-validation"

export type ContactSchema = z.infer<typeof contactSchema>
