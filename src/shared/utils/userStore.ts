import create from 'zustand';

interface User {
  userName: string | null
  setUserName: (newName: string) => void;
}

export const userStore = create<User>((set) => ({
  userName: null,
  setUserName: (newName: string) => set({ userName: newName }),
}));
