import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Dark mode atom with localStorage persistence
export const darkModeAtom = atomWithStorage('darkMode', false)

// Last.fm data atom
export const lastfmDataAtom = atom(null)

// Loading states
export const lastfmLoadingAtom = atom(false)
