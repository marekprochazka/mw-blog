import { DEFAULT_THEME } from '~/config/constants';

export type Theme = 'default' | 'pretty' | 'cats';

export const useTheme = defineStore('theme', () => {
  const currentTheme = ref<Theme>(DEFAULT_THEME);
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
    if (localStorage) {
      localStorage.setItem('theme', theme);
    }
  };
  const cssClass = computed(() => {
    switch (currentTheme.value) {
      case 'default':
        return 'theme--default';
      case 'pretty':
        return 'theme--pretty';
      case 'cats':
        return 'theme--cats';
      default:
        return 'theme--default';
    }
  });

  const fromLocalStorage = () => {
    if (localStorage) {
      currentTheme.value =
        (localStorage.getItem('theme') as Theme) || DEFAULT_THEME;
    }
  };

  const list = ref<{ identifier: Theme; title: string }[]>([
    { identifier: 'default', title: 'Default' },
    { identifier: 'pretty', title: 'Pretty' },
    { identifier: 'cats', title: 'Cats' },
  ]);

  return {
    currentTheme,
    setTheme,
    cssClass,
    fromLocalStorage,
    list,
  };
});
