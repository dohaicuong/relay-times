import { MantineProvider, MantineThemeOverride, Tuple, DefaultMantineColor } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

type ExtendedCustomColors = 
  | DefaultMantineColor
  | 'accent'
  | 'complementary'
  | 'success'
  | 'note'
  | 'warning'
  | 'danger'
  | 'vivid'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    accent: ['#EAF8FB', '#C4EBF3', '#9DDEEB', '#77D2E4', '#51C5DC', '#2BB8D4', '#2293AA', '#1A6F7F', '#114A55', '#09252A'],
    complementary: ['#FAFFE5', '#F1FFB8', '#E8FF8A', '#DFFF5C', '#D6FF2E', '#CCFF00', '#A4CC00', '#7B9900', '#526600', '#293300'],
    success: ["#E5FFF8", "#B8FFEB", "#8AFFDD", "#5CFFD0", "#2EFFC3", "#00FFB6", "#00CC92", "#00996D", "#006649", "#003324"],
    note: ['#EEF3F7', '#CEDCE8', '#AFC6DA', '#90AFCB', '#7099BC', '#5182AE', '#41688B', '#314E68', '#203446', '#101A23'],
    warning: ['#FCF3E8', '#F8DDBF', '#F3C896', '#EEB26C', '#EA9D43', '#E5871A', '#B76C15', '#8A510F', '#5C360A', '#2E1B05'],
    danger: ['#FFEDE6', '#FECDB9', '#FDAD8C', '#FC8D5F', '#FB6D31', '#FB4D04', '#C93E03', '#962E03', '#641F02', '#320F01'],
    vivid: ['#FAFFE5', '#F1FFB8', '#E8FF8A', '#DFFF5C', '#D6FF2E', '#CCFF00', '#A4CC00', '#7B9900', '#526600', '#293300'],
  },
  primaryColor: 'accent'
}

export type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider position='top-right'>
        {children}
      </NotificationsProvider>
    </MantineProvider>
  )
}
