import React, { useRef } from 'react'
import styles from './Hero.module.css';
import insta from '../../assets/insta.png';
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Hero = () => {


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1i6rnfg", 
      'template_300w92l', form.current, 'J6Ui8ogF49ygC-Cw0')
      .then((result) => {
        toast.error("Server Error, Please try after some time.")
      }, (error) => {
        toast.error(error);
      });
      e.target.reset();
  };

  return (
    <>
    <section className={styles["hero-container"]}>
    <img className={styles["insta"]} src={insta} alt="insta" />

    <div className={styles["form"]}>
    <form ref={form}  onSubmit={sendEmail}>
      <input type="text" 
      name='user_name'
      placeholder='Phone number, email or username'
      required
       />
       <input type="password"
       name="password"
       placeholder='Password'
       required
        />

        <button className={styles["btn"]}>Login</button>

        <p className={styles["font"]}>Forgot your login details? <Link>Get help loggin in</Link></p>
        <p className={styles["line"]}>OR</p>
    </form>
    </div>

    <div className={styles["last"]}>
    <BsFacebook color='#00a8ff'/> <Link>Log in with Facebook</Link>
    </div>

    </section>
    </>
  )
}

export default Hero