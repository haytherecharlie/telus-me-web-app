import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DIMENSIONS } from 'services/redux/actions'
import theme from 'ui/assets/theme'

const useDimensions = () => {
  const dispatch = useDispatch()
  const breakPoint = theme.LARGE_VIEW

  useEffect(() => {
    let previous = 'mobile'
    const getSize = () => {
      if (window.innerWidth > breakPoint && previous !== 'desktop') {
        previous = 'desktop'
        return dispatch({ type: DIMENSIONS, value: 'desktop' })
      }
      if (window.innerWidth < breakPoint && previous !== 'mobile') {
        previous = 'mobile'
        return dispatch({ type: DIMENSIONS, value: 'mobile' })
      }
    }

    if (typeof window !== 'undefined') {
      getSize()
      window.addEventListener('resize', getSize)
      return () => window.removeEventListener('resize', getSize)
    }
  }, [dispatch, breakPoint])
}

export default useDimensions
