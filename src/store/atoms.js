import { atomWithStorage } from 'jotai/utils'

// Dark mode atom with localStorage persistence
export const darkModeAtom = atomWithStorage('darkMode', false)
