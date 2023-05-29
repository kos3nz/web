/** @jsxImportSource react */

import cx from 'clsx'

const cards = [
  {
    rotate: '10deg',
    translate: '-90px -190px',
    day: 'Sat',
    date: '22',
    pos: 'top',
  },
  {
    rotate: '-6deg',
    translate: '50px -165px',
    day: 'Tue',
    date: '25',
    pos: 'top',
  },
  {
    rotate: '6deg',
    translate: '-175px -50px',
    day: 'Thu',
    date: '27',
    pos: 'middle',
  },
  {
    rotate: '-6deg',
    translate: '105px 10px',
    day: 'Sun',
    date: '23',
    pos: 'middle',
  },
  {
    rotate: '-10deg',
    translate: '-110px 135px',
    day: 'Fri',
    date: '28',
    pos: 'bottom',
  },
  {
    rotate: '8deg',
    translate: '55px 120px',
    day: 'Mon',
    date: '5',
    pos: 'bottom',
  },
]

export default function MiniCards() {
  return (
    <>
      {cards.map(({ rotate, translate, day, date, pos }) => (
        <div
          key={date}
          className={cx(
            'date-card',
            'absolute left-1/2 top-1/2 origin-bottom rounded-lg bg-white px-[25px] py-1.5 text-center font-medium text-gray-700 shadow-sm',
            pos,
          )}
          style={{
            rotate,
            translate,
          }}
        >
          <span className="block text-[10px] leading-3">{day}</span>
          <span className="block text-sm">{date}</span>
        </div>
      ))}
    </>
  )
}
