import type { Metadata } from 'next'
import { Client } from '@/comp/client'
import { Box } from '@mui/material'
import { pink } from '@mui/material/colors'
import { FC, ReactNode } from 'react'

// types

type _LayoutProps = { children: ReactNode }

// metadata

export const metadata: Metadata = {
  title: 'karaoke + yoga'
}

// layout

const Layout: FC<_LayoutProps> = ({ children }) => (
  <Box component="html" lang="en-US" sx={{ height: '100%' }}>
    <Box component="body" sx={{ alignItems: 'center', background: pink[100], display: 'flex', height: '100%', justifyContent: 'center', m: 0 }}>
      <Client>{children}</Client>
    </Box>
  </Box>
)

export default Layout
