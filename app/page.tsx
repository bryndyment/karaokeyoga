'use client'

import cuda from '@/app/cuda.png'
import Image from 'next/image'
import { FC } from 'react'

// components

const HomePage: FC = () => <Image alt="cuda" priority src={cuda} />

export default HomePage
