import { useState, useEffect } from 'react'
import CVData from '../assets/data/CV';

const useData = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    setData(CVData)
  }, [])

  return { data }
}

export default useData