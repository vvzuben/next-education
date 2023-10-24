import { create } from 'zustand'

export type ModalStore = {
  isOpen: boolean
  content?: JSX.Element
  setContent: (content: JSX.Element) => void
  setIsOpen: (isOpen: boolean) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
  setContent: (content) => set(() => ({ isOpen: true, content })),
}))
