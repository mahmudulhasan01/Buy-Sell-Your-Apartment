import React from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormatQuote } from '@material-ui/icons';
import './ttslider.css';
import quote from '../../../src/Img/iconmonstr-quote-left-thin.svg'
import { Chip, Container, Grid } from '@mui/material';
const TtSlider = () => {

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div >
            <div style={{ display: 'grid', placeContent: 'center', marginTop: '10px' }}>
                <Chip variant='outlined' color='warning' label="Our Testimonial" />
                <h2>Customers Feedback</h2>

            </div>

            <Slider {...settings}>
                <div>
                    <div sx={{ mx: 'auto' }}>

                    </div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 3, }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>



                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card className="hb" sx={{ minWidth: 275, mx: 2 }}>
                        <CardContent >
                            <Typography gutterBottom >

                                <blockquote>
                                    <span className='quote'><img style={{ display: 'inline', marginTop: '10px' }} src={quote} alt="" srcset="" /></span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ex optio quasi nihil eveniet a?

                                    <Grid container spacing={2}

                                    >
                                        <Grid item xs={6} md={6}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                                <img style={{ width: "60px", height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'flex-start' }} src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="" />  <span><h5 style={{ display: 'inline' }}>Jacab Willium</h5></span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={6}>

                                        </Grid>

                                    </Grid>
                                </blockquote>

                            </Typography>

                        </CardContent>

                    </Card>
                </div>
            </Slider>

        </div>
    );
};

export default TtSlider;