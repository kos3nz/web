interface TransformToObject {
  output: this extends { input: infer TInput } ? { key: TInput } : never
}

type Result = (TransformToObject & { input: 'epic' })['output']
