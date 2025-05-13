import { create } from 'zustand';

type UiStoreProps = {
  // 화면 너비 감지
  windowWidth: number;
  setWindowWidth: (width: number) => void;
};

const useUiStore = create<UiStoreProps>(set => ({
  // 화면 너비 감지
  windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0, // 서버 환경에서는 0으로 초기화
  setWindowWidth: (width: number) => set({ windowWidth: width }),
}));

export default useUiStore;
