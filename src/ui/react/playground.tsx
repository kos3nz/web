type Props = {
  children: React.ReactNode
  description?: string
}

export function Playground({ children, description }: Props) {
  return (
    <div className="bg-slate-800 bg-[image:radial-gradient(circle_at_1px_1px,_#475569_1px,_transparent_0)] bg-[size:20px_20px] bg-[position:10px_16px] p-4">
      <div className="flex items-center justify-center">
        <span className="text-white">component here</span>
      </div>
    </div>
  )
}
