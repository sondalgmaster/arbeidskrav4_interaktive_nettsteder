import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import client from "../helpers/client";
import Nav from "./nav";

export default function Header() {
  const { slug } = useParams();
  const location = useLocation();
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    if (!slug) {
      setTitle("Home");
      return;
    }

    if (location.pathname.startsWith("/project/")) {
      client
        .fetch(`*[_type == "projects" && slug.current == $slug][0]{title}`, { slug })
        .then((data) => {setTitle(data?.title || "Unknown project");});
    } else {
      client
        .fetch(`*[_type == "medlemer" && slug.current == $slug][0]{fulname}`, { slug })
        .then((data) => {setTitle(data?.fulname || "Unknown member");});
    }
  }, [slug, location.pathname]);

  return (
    <header>
        <h1>Grupe UIN26_18</h1>
        <Nav />
        <h2>{title}</h2>
     
    </header>
  );
}
