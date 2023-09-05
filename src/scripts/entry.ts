import 'overlayscrollbars/overlayscrollbars.css'
import Lenis from '@studio-freight/lenis'
import { OverlayScrollbars } from 'overlayscrollbars'

console.log('entry')

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const osInstance = OverlayScrollbars(document.body, {
  scrollbars: { theme: 'os-theme-light', autoHide: 'scroll' },
})
