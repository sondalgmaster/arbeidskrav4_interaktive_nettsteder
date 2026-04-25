import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from '../helpers/client'

  export default function Nav(){
    const [medlemer, setMedlemer] = useState([])

    useEffect(() => {
        async function fetchAllMedlemer() {
          const allMedlemer = await client.fetch("*[_type == 'medlemer']{fulname, slug}")
          setMedlemer(allMedlemer)
        }
    
        fetchAllMedlemer()
      }, [])

    console.log(medlemer)

    return(
      
                <nav> 
                   <Link to="/">Home</Link>
                    {medlemer.map((c, index) => (<Link key={index} to={"/member/" + c.slug.current}> {c.fulname}</Link>))}
                    
                </nav>

    )
  }
