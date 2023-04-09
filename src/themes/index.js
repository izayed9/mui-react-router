import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import ComponentsOverrides from '../theme/overrides';
import typography from './typography';


export default function ThemeProvider() {
    const themeOptions = useMemo(() => ({
        typography
    }), [])

    const theme = createTheme(themeOptions)
    theme.components = ComponentsOverrides
}

