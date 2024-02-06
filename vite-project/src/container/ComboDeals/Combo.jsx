
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'; import './Combo.css';
import BookingForm from '../../components/BookingForm/BookingForm';

const Combo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://buggyrides.vercel.app/api/buggy/all')
            .then((res) => {
                setData(res.data.data.docs);
                console.log("Databuggy:", res.data.data.docs);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <h1 className="headtext__cormorant">Combo Deals</h1>
            </div>
            <div className="app__specialMenu-menu">
                {data.filter((item) => item.category === "Combo Deals")
                    .map((item, index) => (
                        <Card sx={{ maxWidth: 310, borderRadius: '10px', height: '100%' }} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={item.buggyfile}
                                />
                                <CardContent sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.time}</Typography>
                                    <Typography>{item.price} AED</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <button type="button" className="custom__button">
                                        <BookingForm buggyId={item._id} buggyTitle={item.title} buggyPrice={item.price} buggyDesc={item.description} />
                                    </button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

export default Combo;
