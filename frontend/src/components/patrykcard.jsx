import { useEffect, useState } from "react";
import client from "../helpers/client";

export default function PatrykCard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "medlemer"]{
        fulname,
        email,
        degree,
        profilpicture{
          asset->{
            url
          }
        }
      }`)
      .then(setMembers);
  }, []);

  return (
    <>
      {members.map((member, index) => (
        <article key={index} className="patryk-card">
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
        </article>
      ))}
    </>
  );
}
