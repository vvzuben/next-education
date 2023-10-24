import { create } from 'zustand'

import type { MenuItem } from '@components/header/PrimaryNavigation'

export type NavigationStore = {
  activeMenuItem?: MenuItem 
  menuItems?: MenuItem[] 
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setActiveMenuItem: (menuItem: MenuItem | undefined) => void;
  setMenuItems: (menuItems: MenuItem[]) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeMenuItem: undefined,
  mobileMenuOpen: false,
  menuItems: undefined,
  setActiveMenuItem: (menuItem: MenuItem | undefined) => set(() => ({ activeMenuItem: menuItem })),
  setMenuItems: (menuItems: MenuItem[]) => set(() => ({ menuItems: menuItems })),
  toggleMobileMenu: () => set((state: NavigationStore) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}))
