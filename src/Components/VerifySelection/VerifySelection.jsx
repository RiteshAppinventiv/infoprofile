import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Cancel from "./../../Assets/assets/icons/Cancel.svg"
import email_ver from "./../../Assets/assets/web_app/email_ver.svg"
import "./VerifySelection.css"

export function VerifySelection({ open, setOpen }) {
    const [isDisabled, setIsDisabled] = useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="custom-dialog-title"
                fullWidth
                maxWidth={false}
                PaperProps={{
                    style: {
                        width: '700px',
                        height: '500px',
                        position: 'relative',
                        overflow: 'visible',
                        borderRadius: "20px"
                    },
                }}
            >
                <div
                    className="cancel_icon-div"
                    style={{
                        position: 'absolute',
                        top: "-20px",
                        right: "calc(50% - 25px)",
                        cursor: 'pointer',
                    }}
                    onClick={handleClose}
                >
                    <img
                        className="cancel_white_icon"
                        src={Cancel}
                        alt=""
                        style={{
                            background: "white",
                            height: '40px',
                            borderRadius: '50%',
                            border: '5px solid rgba(0, 0, 0, 0.55)',
                            zIndex: '1301',
                        }}
                    />
                </div>
                <div className='selection_main'>
                    <div>
                        <img src={email_ver} alt="" />
                    </div>
                    <div>
                        <p className='selection_p'>Verify your Email or Mobile Number in order to successfully register yourself.</p>
                        <div className={isDisabled ? 'disabled-div' : ''}>
                            <div className="input-div signup-text-2" >
                                Verify Mail
                            </div>
                        </div>
                        <p className='blue login-ul'>Verify Mobile Number</p>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
