import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {

  const categories = [
    { id: 1, name: "English (United States)" },
    { id: 2, name: "Spanish" },
    { id: 3, name: "French" },
    { id: 4, name: "Chinese" },
  ];


  return (
    <>
      <div className={styles["nav-container"]}>
      <select 
    required
    name="category"
    >
      <option value="" disabled>
      </option>
      {categories.map((cat) => {
        return (
          <option className={styles["options-nav"]} key={cat.id} value={cat.name}>
          {cat.name}
          </option>
        )
      })}
    </select>
      </div>
    </>
  )
}

export default Navbar;