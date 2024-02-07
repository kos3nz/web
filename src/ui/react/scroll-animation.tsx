/** @jsxImportSource react */

import cx from "clsx"
import { useEffect, useRef } from "react"
// zustand-store.ts
import { create } from "zustand"

import { useIntersectionObserver } from "@/hooks/react/use-intersection-observer"

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    Card: Todo,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    Card: Colors,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    Card: Availability,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    Card: Music,
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    Card: SchedulingLinks,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    Card: Team,
  },
]

type FeatureStore = {
  inViewFeature: string | null
  setInViewFeature: (feature: string | null) => void
}

const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature) => set({ inViewFeature: feature }),
}))

export default function ScrollAnimation() {
  return (
    <div>
      <div className="flex h-[400px] items-center justify-center text-3xl font-bold">
        Scroll down <span className="ml-4 text-xl">↓</span>
      </div>

      <div className="relative flex aspect-[5/4] items-start gap-x-24 px-8 sm:aspect-[4/3] md:aspect-[2/1]">
        <div className="w-1/2 py-[250px]">
          <ul className="list-none">
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky top-0 flex h-full w-1/2 items-center justify-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-800">
            {features.map((feature) => (
              <feature.Card key={feature.id} id={feature.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[400px] items-center justify-center text-3xl font-bold">
        Scroll up <span className="ml-4 text-xl">↑</span>
      </div>
    </div>
  )
}

type FeatureTitleProps = {
  id: string
  children: React.ReactNode
}

function FeatureTitle({ id, children }: FeatureTitleProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [ref, isInView] = useIntersectionObserver<HTMLParagraphElement>({
    root: rootRef.current,
    rootMargin: "-50% 0px -50% 0px",
  })
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature)

  useEffect(() => {
    rootRef.current = document.querySelector("#scroll-animation")
  }, [])

  useEffect(() => {
    if (isInView) setInViewFeature(id)
    if (!isInView && inViewFeature === id) setInViewFeature(null)
  }, [isInView, id, setInViewFeature, inViewFeature])

  return (
    <p
      ref={ref}
      className={cx(
        "py-16 text-4xl transition-colors duration-300",
        isInView ? "text-gray-200" : "text-gray-500",
      )}
    >
      {children}
    </p>
  )
}

type FeatureCardProps = {
  gradient?: string
  children: React.ReactNode
} & CardProps

function FeatureCard({ id, gradient, children }: FeatureCardProps) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)

  return (
    <div
      className={cx(
        "absolute inset-0 bg-gradient-to-br transition-opacity duration-300",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  )
}

type CardProps = {
  id: string
}

function Todo({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  )
}
function Colors({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  )
}
function Availability({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  )
}
function Music({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  )
}
function SchedulingLinks({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  )
}
function Team({ id }: CardProps) {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  )
}
