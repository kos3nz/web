/** @jsxImportSource react */

import cx from "clsx"

export default function FullScreen({
  show,
  animateBack,
}: {
  show: boolean
  animateBack: () => Promise<void>
}) {
  return (
    <>
      <div
        className={cx(
          "full-screen",
          "absolute inset-0 flex scale-95 justify-center opacity-0",
        )}
      >
        <div className="hidden w-[690px] lg:block">
          <div className="mt-5 grid grid-cols-3 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-2">
              <div className="flex h-full flex-col justify-end space-y-4 rounded-xl bg-white px-4 pb-4 shadow-xl">
                <span className="block size-12 rounded-full bg-gradient-to-tr from-indigo-300 to-sky-300" />
                <div>
                  <span className="block text-[10px] uppercase text-green-500">
                    Event
                  </span>
                  <span className="block text-lg font-medium text-gray-700">
                    Meet with June
                  </span>
                  <span className="block text-xs text-gray-400">
                    Created by June McGee
                  </span>
                </div>
              </div>
            </div>
            <div className="col-start-3">
              <div className="rounded-xl bg-white p-4 shadow-xl">
                <span className="block text-[10px] uppercase text-purple-500">Where</span>
                <span className="block text-lg font-medium text-gray-700">
                  Google Meet
                </span>
                <span className="block text-xs text-gray-400">
                  Visible on confirmed event
                </span>
              </div>
            </div>
            <div className="col-start-3 row-start-2">
              <div className="rounded-xl bg-white p-4 shadow-xl">
                <span className="block text-[10px] uppercase text-yellow-500">When</span>
                <span className="block text-lg font-medium text-gray-700">---</span>
                <span className="block text-xs text-gray-400">No slot selected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={cx(
          "absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-xl bg-black px-4 py-1 font-medium transition duration-500 md:block",
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        onClick={animateBack}
      >
        Go back
      </button>
    </>
  )
}
