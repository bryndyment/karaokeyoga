'use client'

import { createTheme } from '@mui/material'

// constants

export const THEME = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
})

export const PALETTE = THEME.palette
