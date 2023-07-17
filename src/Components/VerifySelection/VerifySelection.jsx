import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';


export function VerifySelection({ open, setOpen }) {
    // const [open, setOpen] = seState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Pop-up
        </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="custom-dialog-title"
                fullWidth
                maxWidth={false}
                PaperProps={{
                  style: {
                    width: '400px', // Set custom width in pixels
                    height: '300px', // Set custom height in pixels
                    position: 'relative', // Required for absolute positioning of the icon
                  },
                }}
            >
                 <CloseIcon
                    style={{
                        position: 'absolute',
                        top: '-20px', // Move the icon above the dialog box
                        right: 'calc(50% - 12px)', // Center the icon horizontally
                        cursor: 'pointer', // Add cursor pointer for interaction
                        fontSize:"30px",
                      }}
                      onClick={handleClose}
                />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    {/* You can add more action buttons here if needed */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
