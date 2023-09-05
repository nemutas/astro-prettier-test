import 'overlayscrollbars/overlayscrollbars.css'
import Lenis from '@studio-freight/lenis'
import { OverlayScrollbars, ClickScrollPlugin } from 'overlayscrollbars'

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// ---
OverlayScrollbars.plugin(ClickScrollPlugin)

const osInstance = OverlayScrollbars(document.body, {
  scrollbars: { theme: 'os-theme-light', autoHide: 'scroll', clickScroll: true },
})
