/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { images } from '../../constants';
import BookingForm from '../BookingForm/BookingForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductCards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://buggyrides.vercel.app/api/buggy/all')
            .then((res) => {
                setData(res.data.data.docs);
                console.log("Data:", res.data.data.docs);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {/* <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.buggyfile} alt={`Image ${index}`} />
                    </div>
                ))}
            </div> */}
            <Card sx={{ maxWidth: 310, borderRadius: '10px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="220"
                        image={images.DuneAbout}
                        alt="green iguana"
                    />
                    <CardContent sx={{ textAlign: 'center', height: '30vh' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            1 Seat Buggy (30 min)
                            599 AED
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Polaris RZR - 1000cc Model.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Single-seat Dune Buggy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rental in Dubai.
                        </Typography>
                        <button type="button" className="custom__button">
                            <BookingForm />
                        </button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
