'use client'
 
import { usePathname } from 'next/navigation'
 
export function LocaleSwitcher() {
  const pathname = usePathname()
  function switchLocale(locale) {
    // e.g. '/en/about' or '/fr/contact'
     console.log(locale)
     console.log(pathname)
    const newPath = `/${locale}${pathname}`
    window.history.replaceState({title:'skaib'}, 'afaaf', newPath)
    console.log(window.history.title)
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}