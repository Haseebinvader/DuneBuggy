/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BookingForm({ buggyId, buggyTitle, buggyPrice, buggyDesc }) {
    const [open, setOpen] = React.useState(false);
    console.log("buggyidd", buggyId,);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formJson = {};
        formData.forEach((value, key) => {
            formJson[key] = value;
        });

        const orderno = Math.random().toString(36).substr(2, 10);

        formJson['orderno'] = orderno;

        formJson['buggy'] = buggyId; // Include the buggy ID in the form data


        try {
            const response = await fetch('https://buggyrides.vercel.app/api/order/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formJson),
            });

            if (response.ok) {
                console.log('Order placed successfully');
                handleClose();
            } else {
                console.error('Failed to place order');
            }
        } catch (error) {
            console.error('Error while sending the request:', error);
        }
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} style={{ color: '#000' }}>
                Book Now
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Book Now</DialogTitle>
                <div style={{ padding: '24px' }}>
                    <p>{buggyTitle}</p>
                    <p>{buggyPrice}</p>
                    <p>{buggyDesc}</p>
                </div>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below to book.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="note"
                            name="note"
                            label="Note"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
