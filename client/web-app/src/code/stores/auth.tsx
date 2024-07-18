import { create } from 'zustand'
import { client } from '../settings'

type State = {
  accessToken: string | null
  username: string | null
}

type Actions = {
  login: (username: string, accessToken: string) => void
  logout: () => void
}

export const useLoginStore = create<State & Actions>((set) => ({
  accessToken: null,
  username: null,
  login: (username, accessToken) =>
    set(() => {
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      return { accessToken, username }
    }),
  logout: () => set({ accessToken: null, username: null }),
}))
