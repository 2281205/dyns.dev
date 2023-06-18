// src/components/Root/index.js
import React from 'react'
import { ThemeContext, themes } from '../../contexts/ThemeContext'
import Toggle from '../Toggle'

const Root = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <Toggle
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark)
          if (theme === themes.dark) setTheme(themes.light)
        }}
        value={theme === themes.dark}
      > </Toggle>
    )}
  </ThemeContext.Consumer>
)

export default Root