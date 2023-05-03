import { sleep } from 'utils/helpers'

export class AstroCode extends HTMLElement {
  constructor() {
    super()

    const titles = this.dataset.titles?.split(',')
    const codeBlocks = this.querySelectorAll('[data-code-visible]')
    const tabs = this.querySelectorAll('.tab')

    const bar = this.querySelector('#bar') as HTMLSpanElement
    const initialBarStyle = {
      width: tabs[0].getBoundingClientRect().width,
    }
    bar.style.width = `${initialBarStyle.width}px`

    tabs?.forEach((tab, i) => {
      // Do nothing when only one codeblock is provided
      if (!titles || titles.length <= 1) return

      const title = titles[i]

      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          if (t.textContent?.trim() === title) {
            t.classList.add('active')
          } else {
            t.classList.remove('active')
          }
        })

        codeBlocks.forEach((codeBlock) => {
          if (codeBlock.getAttribute('data-title') === title) {
            codeBlock.setAttribute('data-code-visible', 'show')
          } else {
            codeBlock.setAttribute('data-code-visible', 'hidden')
          }
        })

        const x = (tab as HTMLButtonElement).offsetLeft
        const width = tab.getBoundingClientRect().width

        bar.style.transform = `translateX(${x}px) scaleX(${
          width / initialBarStyle.width
        })`
      })
    })

    codeBlocks.forEach((codeBlock) => {
      const content = codeBlock.querySelector('pre')?.textContent?.trim()
      const copyBtn = codeBlock.querySelector('.copy-btn')
      const message = copyBtn?.querySelector('span')
      let timeoutId: number | undefined

      copyBtn?.addEventListener('click', () => {
        if (timeoutId) clearTimeout(timeoutId)

        message?.classList.remove('invisible')
        message?.classList.add('visible')
        message?.classList.add('copied')

        navigator.clipboard.writeText(content || '')

        timeoutId = setTimeout(async () => {
          message?.classList.remove('copied')

          await sleep(300)

          message?.classList.remove('visible')
          message?.classList.add('invisible')
        }, 1500)
      })
    })
  }
}

customElements.define('astro-code', AstroCode)
