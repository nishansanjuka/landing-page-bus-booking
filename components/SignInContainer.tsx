import React, { Fragment, useEffect, useState } from 'react'
import Loading from './Loading';
import SignIn from './SignIn';
import Register from './Register';
import Footer from './Footer';

export default function SignInContainer() {

    const [Load, setLoad] = useState(true);

    useEffect(() => {
        const backgroundImage = new Image();
        backgroundImage.src = "/assets/bus.jpg"

        backgroundImage.onload = () => {
        setTimeout(() => {
            setLoad(false);
        }, 2000);
        }

    }, [])
  return (
    <div>
        {Load ? <Loading/> : (
        <Fragment>
          <SignIn/>
          <Register/>
          <Footer/>
        </Fragment>
      )}
    </div>
  )
}
