export class AstroCode extends HTMLElement {
  constructor() {
    super()

    const titles = this.dataset.titles?.split(",")
    const tabs = this.querySelectorAll(".tab")
    const codeBlocks = this.querySelectorAll("[data-code-visible]")

    const bar = this.querySelector("#bar") as HTMLSpanElement
    const initialBarStyle = {
      width: tabs[0].getBoundingClientRect().width,
    }
    bar.style.width = `${initialBarStyle.width}px`

    tabs?.forEach((tab, i) => {
      // Do nothing when only one codeblock is provided
      if (!titles || titles.length <= 1) return

      const title = titles[i]

      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          if (t.textContent?.trim() === title) {
            t.classList.add("active")
          } else {
            t.classList.remove("active")
          }
        })

        codeBlocks.forEach((codeBlock) => {
          if (codeBlock.getAttribute("data-title") === title) {
            codeBlock.setAttribute("data-code-visible", "show")
          } else {
            codeBlock.setAttribute("data-code-visible", "hidden")
          }
        })

        const x = (tab as HTMLButtonElement).offsetLeft
        const width = tab.getBoundingClientRect().width

        bar.style.transform = `translateX(${x}px) scaleX(${
          width / initialBarStyle.width
        })`
      })
    })
  }
}

customElements.define("astro-code", AstroCode)
