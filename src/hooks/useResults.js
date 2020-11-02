
import {useState,useEffect} from 'react'
import yelp from '../api/yelp'

export default()=>{
    const [results, setresults] = useState([])
  const [errmsg, seterrmsg] = useState(null)

  useEffect(()=>{
    fetchResult('pasta');
  },[])

  const fetchResult = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term:searchTerm,
          location: "san jose",
        },
      })
      setresults(res.data.businesses)
    } catch (err) {
      console.log(err)
      seterrmsg("something went wrong!")
    }
  }

  return[fetchResult,errmsg,results];
}