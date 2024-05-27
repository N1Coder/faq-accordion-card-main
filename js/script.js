const accordionItems = document.querySelectorAll("details")
const accordionTitles = document.querySelectorAll("summary")

const closeAllItem = () => {
  for (const accordionItem of accordionItems) {
    accordionItem.removeAttribute("open")
  }
}

for (const accordionItem of accordionItems) {
  const summary = accordionItem.children[0]
  const toggleAccordion = () => {
    if (accordionItem.hasAttribute("open")) {
      accordionItem.toggleAttribute("open")
    } else {
      closeAllItem()
      accordionItem.toggleAttribute("open")
    }
  }

  summary.addEventListener("click", toggleAccordion)

  accordionItem.addEventListener("click", toggleAccordion)
}
