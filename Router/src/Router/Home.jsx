
import './home.css';
import React from 'react';
export default function Home() {
  return (
    <div className="homepage-container">
      <h2 className="homepage-heading">
        Welcome to <span className="highlight">FashionHub</span> 👗🧥<br /><br />
        Here you can find various fashion products and details about them.<br /><br />
        Use the <strong>Navbar</strong> above to navigate through the site.<br /><br />
        Click on the <strong>About</strong> or <strong>Contact</strong> link to explore more.<br /><br />
        You can also click on a product in the About page to see its <strong>details</strong>.
      </h2>
    </div>
  )
}
