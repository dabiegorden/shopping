import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

import ProfileImage from "../public/assets/gordey.jpg";

import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Image from 'next/image';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ShoppyNew</Link>
      </p>

      <div className={styles.Nav}>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}

      <div>
        {session ? (
          <div className={styles.Profile}>
              <Image src={ProfileImage} width={27} height={27} alt="profile pic" className={styles.profileImage}/>
              {/* {session.user.name} */}
              <div className={styles.Info}>
              <button onClick={() => signOut()} className={styles.LogOut}>Log Out</button>
              </div>
          </div>
        ) : (
          <button
            onClick={() => {
              router.push("api/auth/signin");
            }} className={styles.Login}>
            Log In
          </button>
        )}
      </div>
      </div>
      
    </div>
  )
}

export default Navbar;