import { create } from 'zustand';

type UiStoreProps = {
  // 화면 너비 감지
  windowWidth: number;
  setWindowWidth: (width: number) => void;
};

const useUiStore = create<UiStoreProps>(set => ({
  // 화면 너비 감지
  windowWidth: window.innerWidth,
  setWindowWidth: (width: number) => set({ windowWidth: width }),
}));

export default useUiStore;
