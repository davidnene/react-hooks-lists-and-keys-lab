import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkNav = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>
  })

  return <nav>{linkNav}</nav>;
}

export default NavBar;
