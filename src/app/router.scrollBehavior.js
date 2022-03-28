export default function (to, from, savedPosition) {
  if (to.hash) {
    const anchor = document.querySelector(to.hash)

    if (anchor) {
      const anchorPos = anchor.getBoundingClientRect().top
      const anchorWithTopMargin = anchorPos - 100

      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({
          top: anchorWithTopMargin,
          behavior: 'smooth',
        })
      } else {
        return window.scrollTo(0, anchorWithTopMargin)
      }
    }
  }

  return { x: 0, y: 0 }
}
