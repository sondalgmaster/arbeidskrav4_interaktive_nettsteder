import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../helpers/client";

export default function Patrykrp() {
  const { slug } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    if (!slug) return;

    client.fetch(
        `*[_type == "medlemer" && slug.current == $slug][0]{
          fulname,
          email,
          degree,
          description,
          profilpicture{
            asset->{
              url
            }
          }
        }`,
        { slug }
      )
      .then((data) => setMember(data));
  }, [slug]);

  if (!member) return <p>Loading...</p>;

  return (
    <>
      <section>
        <h2>{member.fulname}</h2>

        <img
          src={member.profilpicture?.asset?.url}
          alt={member.fulname}
          width="200"
        />

        <p>{member.degree}</p>

        <p>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>{member.description}</p>

      </section>
    </>
  );
}