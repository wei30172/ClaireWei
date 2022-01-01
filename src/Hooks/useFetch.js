import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;

    fetch(url, {signal})
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        if (signal.aborted) {
          console.log('Request has been aborted')
          return
        }
        setIsPending(false)
        setError(err.message)
      })
    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error }
}

export default useFetch