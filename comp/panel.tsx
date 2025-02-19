import { Routes } from '@/util/enum'
import { useRefCallback } from '@hoologic/use-ref-callback'
import { Box, Button, Link, Paper, Slide } from '@mui/material'
import { pink } from '@mui/material/colors'
import RouterLink from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

// components

export const Panel: FC = () => {
  const [element, ref] = useRefCallback<HTMLDivElement>()!
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleMouseMove = ({ clientX }: MouseEvent) => setShow(show => clientX < (show ? element!.offsetWidth : 10))

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [element])

  return (
    <Slide direction="right" in={show} mountOnEnter unmountOnExit>
      <Paper elevation={10} sx={{ borderRadius: 0, height: '100%', left: 0, position: 'fixed', top: 0 }}>
        <Box ref={ref} sx={{ bgcolor: pink[50], display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'center', p: 2 }}>
          <Link component={RouterLink} href={Routes.HOME}>
            <Button disabled={pathname === Routes.HOME} fullWidth size="small" variant="contained">
              Home
            </Button>
          </Link>

          <Link component={RouterLink} href={Routes.FACEBOOK}>
            <Button
              disabled={pathname === Routes.FACEBOOK}
              fullWidth
              size="small"
              sx={{ '&:hover': { bgcolor: '#365899' }, bgcolor: '#4267b2' }}
              variant="contained"
            >
              Facebook
            </Button>
          </Link>

          <Link component={RouterLink} href={Routes.INSTAGRAM}>
            <Button
              disabled={pathname === Routes.INSTAGRAM}
              fullWidth
              size="small"
              sx={{ '&:hover': { bgcolor: '#6f2c94' }, bgcolor: '#8134af' }}
              variant="contained"
            >
              Instagram
            </Button>
          </Link>
        </Box>
      </Paper>
    </Slide>
  )
}
