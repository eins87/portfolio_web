'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

function Btn_return() {
  const router = useRouter()
  return (
    <Button variant={'secondary'} onClick={() => (router.push('/'))}>Home</Button>
  )
}

export default Btn_return