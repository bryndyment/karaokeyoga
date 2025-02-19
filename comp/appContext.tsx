'use client'

import { useContextGuard } from '@hoologic/use-context-guard'
import { createContext, FC, ReactNode, useMemo } from 'react'

// types

type _AppContext = {} // eslint-disable-line @typescript-eslint/no-empty-object-type

type _AppContextProps = { children: ReactNode }

// context

const APP_CONTEXT = createContext<_AppContext | null>(null)

// hooks

export const useAppContext = () => useContextGuard(APP_CONTEXT)

// components

export const AppContext: FC<_AppContextProps> = ({ children }) => {
  const context = useMemo(() => ({}), [])

  return <APP_CONTEXT.Provider value={context}>{children}</APP_CONTEXT.Provider>
}
