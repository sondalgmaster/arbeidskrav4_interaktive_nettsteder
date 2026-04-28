import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import client from "../helpers/client";
export default function Arbkrv() {
    const [ARBK, setARBK] = useState([])

    useEffect(() => {
        async function fetchAllARBK() {
          const alleARBK = await client.fetch(`*[_type == "projects"] | order(title asc){title, description, slug}`)
          setARBK(alleARBK)
        }
    
        fetchAllARBK()
      }, [])

    console.log(ARBK)

    return(
      
                <ul> 
                    {ARBK.map((c, index) => (
                        <li key={index}>
                            <article>
                                <h3><Link to={"/project/" + c.slug.current}>{c.title}</Link></h3>
                                <p>{c.description}</p>
                            </article>
                        </li>
                    ))}
                </ul>

    )
  }
