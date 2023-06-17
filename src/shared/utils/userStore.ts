import create from 'zustand';

interface User {
  userName: string
  setUserName: (newName: string) => void;
}

export const userStore = create<User>((set) => ({
  userName: "",
  setUserName: (newName: string) => set({ userName: newName }),
}));
