import { useRef } from 'react'

const useScroll = (blank) => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - blank) 
  const ref = useRef(null)
  const handleScrollTop = () => scrollToRef(ref)

  return { ref,  handleScrollTop }
}
 
export default useScroll;