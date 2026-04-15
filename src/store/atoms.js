import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Dark mode atom with localStorage persistence
export const darkModeAtom = atomWithStorage('darkMode', false)

// Spotify data atom
export const spotifyDataAtom = atom(null)

// Loading states
export const spotifyLoadingAtom = atom(false)
