import cx from 'clsx'
import {
  MotionValue,
  animate,
  motion,
  motionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'src/hooks/use-window-size'

export default function Demo() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scroll = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 40,
    restDelta: 0.0001,
  })

  const childElementHeight = 1 / 3

  const [clip2, setClip2] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useMotionValueEvent(scroll, 'change', (latest) => {
    if (currentIndex === 1 && latest > childElementHeight * 0.55) {
      setCurrentIndex(2)
    } else if (currentIndex === 2 && latest < childElementHeight * 0.45) {
      setCurrentIndex(1)
    } else if (
      currentIndex === 2 &&
      latest > childElementHeight + childElementHeight * 0.55
    ) {
      setCurrentIndex(3)
    } else if (
      currentIndex === 3 &&
      latest < childElementHeight + childElementHeight * 0.45
    ) {
      setCurrentIndex(2)
    }
  })

  const clipPath = useMotionValue('inset(0 0 0 0)')

  useMotionValueEvent(scroll, 'change', (latest) => {
    // setClip(latest * 100 * 3)
    setClip2(latest * 100 * 3 - 100)

    animate(clipPath, `inset(0 0 ${latest * 100 * 3}% 0)`, { duration: 0 })
  })

  const { height } = useWindowSize()
  const y = useTransform(scroll, [0, 1], [0, -height * 3])

  const image = useTransform(scroll, [0 + 0.1, 1 / 3 - 0.1], ['0%', '-5%'])
  const image2 = useTransform(scroll, [1 / 3 + 0.1, 2 / 3 - 0.1], ['0%', '-5%'])

  return (
    <div
      ref={ref}
      className={cx('relative flex h-[300vh] transition-colors duration-1000', {
        'bg-indigo-200': currentIndex === 1,
        'bg-sky-200': currentIndex === 2,
        'bg-teal-200': currentIndex === 3,
      })}
    >
      {/* Left */}
      <motion.div className="fixed top-0 w-1/2" style={{ y }}>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </motion.div>

      {/* Right */}
      <section className="sticky top-0 ml-auto flex h-screen w-1/2 items-center">
        <div className="relative ml-12 h-72 w-72 overflow-hidden rounded-3xl">
          {/* <Image scroll={scroll} /> */}
          <motion.div
            className="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-400 to-indigo-300"
            style={{
              clipPath,
            }}
          >
            <motion.img
              src="/images/scroll-demo-1.webp"
              alt="demo"
              className="h-1/2 w-11/12 rounded-2xl object-cover shadow-2xl shadow-indigo-950"
              style={{ y: image }}
            />
          </motion.div>
          <div
            className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-gradient-to-tr from-sky-400 to-sky-300"
            style={{ clipPath: `inset(0px 0px ${clip2}% 0px)` }}
          >
            <motion.img
              src="/images/scroll-demo-2.webp"
              alt="demo"
              className="h-1/2 w-11/12 rounded-2xl object-cover shadow-2xl shadow-sky-950"
              style={{ y: image2 }}
            />
          </div>
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gradient-to-tr from-teal-400 to-teal-300">
            <motion.img
              src="/images/scroll-demo-3.webp"
              alt="demo"
              className="h-1/2 w-11/12 rounded-2xl object-cover shadow-2xl shadow-teal-950"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function Image({
  index,
  scroll,
  length,
  className,
}: {
  index: number
  scroll: MotionValue<number>
  length: number
  className: string
}) {
  const clipPath = motionValue('inset(0 0 0 0)')
  const y = useTransform(
    scroll,
    [index / length + 0.1, (index + 1) / length - 0.1],
    ['0%', '-5%'],
  )

  useMotionValueEvent(scroll, 'change', (latest) => {
    animate(clipPath, `inset(0 0 ${latest * 100 * 3 - index * 100}% 0)`, {
      duration: 0,
    })
  })

  return (
    <motion.div
      className={cx(
        'absolute left-0 top-0 flex h-full w-full items-center justify-center',
        className,
      )}
      style={{
        clipPath: index === length - 1 ? clipPath : '',
        zIndex: index,
      }}
    >
      <motion.img
        src={`/images/scroll-demo-${index}.webp`}
        alt="demo"
        className="h-1/2 w-11/12 rounded-2xl object-cover shadow-2xl shadow-indigo-950"
        style={{ y: index === length - 1 ? y : 0 }}
      />
    </motion.div>
  )
}

function Text({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen items-center">
      <h4 className="ml-auto mr-12 text-3xl font-bold text-slate-800">
        {children}
      </h4>
    </section>
  )
}
