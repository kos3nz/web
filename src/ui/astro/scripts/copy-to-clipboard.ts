import { sleep } from 'utils/helpers'

export class AstroCopyBtn extends HTMLElement {
  constructor() {
    super()

    const text = this.dataset.text || ''
    const copyBtn = this.querySelector('button')
    const message = this.querySelector('span')
    let timeoutId: number | undefined

    copyBtn?.addEventListener('click', () => {
      if (timeoutId) clearTimeout(timeoutId)

      message?.classList.remove('invisible')
      message?.classList.add('visible')
      message?.classList.add('copied')

      navigator.clipboard.writeText(text)

      timeoutId = setTimeout(async () => {
        message?.classList.remove('copied')

        await sleep(300)

        message?.classList.remove('visible')
        message?.classList.add('invisible')
      }, 1500)
    })
  }
}

customElements.define('astro-copy-btn', AstroCopyBtn)
