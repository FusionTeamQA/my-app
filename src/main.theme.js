import light from './themes.dark.css';
import dark from './themes.light.css';

export const getTRheme = (isDark) => {
    return isDark ? dark : light;
}