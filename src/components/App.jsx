import React from 'react'
import { ThemeContext,themes } from './ThemeContext';
import Toggle from './Toggle/Toggle';
import Contacts from './Contact/Contacts';

export const App = () => {
  return (
    <>
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Toggle onChange={() => {   if (theme === themes.light) setTheme(themes.dark)
                                    if (theme === themes.dark) setTheme(themes.light)
                          }}
                value={theme === themes.dark}
        />
      )}
    </ThemeContext.Consumer>
    </>
  );
};