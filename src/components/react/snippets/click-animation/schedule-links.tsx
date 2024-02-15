/** @jsxImportSource react */

import cx from "clsx"
import { motion } from "framer-motion"

export default function ScheduleLinks({ show }: { show: boolean }) {
  return (
    <motion.div
      className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl"
      initial={{
        width: "70%",
        height: "60%",
        top: "50%",
      }}
      animate={{
        width: show ? "150%" : "70%",
        height: show ? "72%" : "60%",
        top: show ? "74%" : "50%",
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
      }}
    >
      <div className="flex h-full flex-col gap-y-4 px-4 pb-2 pt-4">
        {/* Title */}
        <div>
          <span className="block text-[10px] font-medium uppercase text-purple-300">
            select a slot
          </span>
          <h5 className="font-medium leading-5 text-gray-900">January 25, 2022</h5>
        </div>

        {/* Date */}
        <div className="flex items-center rounded-xl bg-gray-100">
          <button
            type="button"
            className="h-full px-2.5 text-[8px] text-gray-700 transition-colors hover:text-gray-400"
          >
            ◀
          </button>
          <ul className="flex flex-1 gap-x-2.5 overflow-hidden py-1">
            {[
              "Mon 24",
              "Tue 25",
              "Wed 26",
              "Thu 27",
              "Fri 28",
              "Sat 29",
              "Sun 30",
              "Mon 31",
            ].map((item, i) => {
              const [day, date] = item.split(" ")
              return (
                <li
                  key={date}
                  className={cx(
                    "px-[25px] py-2 text-center font-medium",
                    i >= 1 && i < 5 ? "text-gray-700" : "text-gray-300",
                    i === 1 && "rounded-lg bg-white shadow-sm",
                  )}
                >
                  <span className="block text-[10px] leading-3">{day}</span>
                  <span className="block text-sm">{date}</span>
                </li>
              )
            })}
          </ul>
          <button
            type="button"
            className="h-full px-2.5 text-[8px] text-gray-700 transition-colors hover:text-gray-400"
          >
            ▶
          </button>
        </div>

        {/* Schedule */}
        <div className="relative flex flex-1 gap-4 overflow-hidden">
          <div className="mt-1">
            <span
              className={cx(
                "block pb-7 text-[10px] text-gray-300 transition-all duration-700",
                show ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              09:00
            </span>
            {["10:00", "11:00", "12:00", "13:00", "14:00"].map((time) => (
              <span
                key={time}
                className={cx(
                  "block pb-7 text-[10px] text-gray-300 transition-transform duration-500 ease-in-out last-of-type:pb-0",
                  show ? "translate-y-0" : "-translate-y-full",
                )}
              >
                {time}
              </span>
            ))}
          </div>
          <ul className="flex-1 space-y-1.5 py-3.5">
            {["10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"].map((schedule, i) => (
              <li
                key={i}
                className={cx(
                  "flex items-center gap-x-2 rounded-lg bg-gray-100 p-3 transition-all duration-500",
                  show
                    ? "translate-y-[calc(100%+0.375rem)] last-of-type:visible last-of-type:opacity-100"
                    : "translate-y-0 last-of-type:invisible last-of-type:opacity-0",
                )}
              >
                <input
                  type="checkbox"
                  className="border-1.5 checkbox checkbox-success size-3.5 rounded-full border-gray-300"
                />
                <p className="text-xs font-medium text-gray-700">{schedule}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
