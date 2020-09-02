import en from 'ui/language/en.json'
import fr from 'ui/language/fr.json'

const locales = [{ path: 'fr', file: fr }, { path: '', file: en }]

export const formatMessage = id => {
  if (typeof window !== 'undefined') {
    const locale = locales.find(({ path }) => window.location.pathname.split('/')[1].includes(path))
    return locale.file[id]
  }
  return en[id]
}

export const changeLocale = lang => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    const splitPath = pathname.split('/')
    const newLang = lang !== '/en' ? lang : ""
    const newPath = splitPath[1].length === 2 ? `${newLang}${pathname.substring(3)}` : `${newLang}${pathname}`
    return newPath
  }
  return null
}
