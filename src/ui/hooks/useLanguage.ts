import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useLanguage = () => {
  const dispatch = useDispatch()
  const { language } = useSelector(s => s.ui)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navLanguage = window.navigator.userLanguage || window.navigator.language
      if (!language) {
        if (navLanguage.substr(0, 2) === 'fr') {
          dispatch({ type: 'LANGUAGE', language: 'fr' })
        } else {
          dispatch({ type: 'LANGUAGE', language: 'en' })
        }
      }
    }
  }, [])
}

export default useLanguage
