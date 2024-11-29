import React from 'react'
import Link from 'next/link'
export default function Products() {
  return (
    <div>
      <Link href="/Product1">Product1</Link>
      <Link href="/Product2">Product2</Link>
      <Link href="/Product3">Product3</Link>
    </div>
  )
}
