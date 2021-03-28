import { theme } from '../Theme/theme'

export const curtainVariants = {
  exiting: {
    y: '-100vh',
    transition: { type: 'tween', duration: theme.duration.raw.pageTransition, ease: [0.66, 0, 0.34, 1] }
  },
  exited: { y: '-100vh', transition: { type: 'tween', duration: 0 } },
  entering: {
    y: '-200vh',
    transition: { type: 'tween', duration: theme.duration.raw.pageTransition, ease: [0.66, 0, 0.34, 1] }
  },
  entered: { y: '0vh', transition: { type: 'tween', duration: 0 } }
}
