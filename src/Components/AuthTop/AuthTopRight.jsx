import SignUp from "../SignUp/SignUp"
import "./AuthTopRight.css"
import React, { useState } from 'react';
import { VerifySelection } from "../VerifySelection/VerifySelection";


const AuthTopRight = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="AuthTopRight">
      <SignUp setOpen={setOpen} />
      <VerifySelection open={open} setOpen={setOpen} />
    </div>
  )
}

export default AuthTopRight