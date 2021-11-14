import { useRef, useEffect } from 'react'

function useDocumentTitle(title: string, prevailOnUnmount = false): void {
  const defaultTitle = useRef(typeof window === 'object' ? document.title : '')

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    [prevailOnUnmount],
  )
}

export default useDocumentTitle
