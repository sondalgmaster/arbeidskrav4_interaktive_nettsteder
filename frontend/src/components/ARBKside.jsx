import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../helpers/client";

export default function ArbkSide() {
  const { slug } = useParams();
  const [arbk, setArbk] = useState(null);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "projects" && slug.current == $slug][0]{
          title,
          description
        }`,
        { slug }
      )
      .then((data) => setArbk(data));
  }, [slug]);

  if (!arbk) return <p>Loading...</p>;
 console.log(arbk)  
  return (
    <article>
      <h1>{arbk.title}</h1>
      <p>{arbk.description}</p>
    </article>
  );
}