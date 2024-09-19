export type Theme = 'default' | 'pretty'

export const useTheme = defineStore('theme', () => {
    const currentTheme = ref<Theme>('default')
    const setTheme = (theme: Theme) => {
        currentTheme.value = theme
        if (localStorage) {
            localStorage.setItem('theme', theme)
        }
    }
    const cssClass = computed(() => {
        switch (currentTheme.value) {
            case 'default':
                return 'theme--default'
            case 'pretty':
                return 'theme--pretty'
            default:
                return 'theme--default'
        }
    })

    const fromLocalStorage = () => {
        if (localStorage) {
            currentTheme.value = localStorage.getItem('theme') as Theme || 'default'
        }
    }

    const list = ref<{identifier: Theme, title: string}[]>([
        {identifier: 'default', title: 'Default'},
        {identifier: 'pretty', title: 'Pretty'}
    ])


    return {
        currentTheme,
        setTheme,
        cssClass,
        fromLocalStorage,
        list
    }
})