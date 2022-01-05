import { Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import quote from '../../../src/Img/iconmonstr-quote-left-thin.svg';
import './NewsBlog.css'
const NewsBlog = () => {

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
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Container>
                <div style={{ display: 'grid', placeContent: 'center', marginTop: '10px' }}>
                    <Chip variant='outlined' color='warning' label="News & Blogs" />
                    <h2>Leatest News Feeds</h2>

                </div>

                <Slider {...settings}>
                    <div>

                        <Card className="" sx={{ minWidth: 275, mx: 3, }}>
                            <CardContent >

                                <CardMedia
                                    component="img"

                                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />


                                <Typography gutterBottom >
                                    <h6 style={{ display: 'inline', marginRight: '50px', textAlign: 'center' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-user"></i> <span className='tc'>by: Admin</span></h6> <h6 style={{ display: 'inline', marginRight: '50px' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-tags"></i>  <span className='tc'>Decorate</span></h6>
                                    <h4 className='tc'>10 Briliant way to decorate Your Home</h4>
                                    <hr />
                                    <div><h5 style={{ display: 'inline', marginRight: '60px' }}>  <i style={{ color: '#ff5a3c' }} class="far fa-calendar-alt"></i> June 24,2021</h5> <h5 style={{ display: 'inline', color: '#ff5a3c' }}>Read More</h5></div>


                                </Typography>

                            </CardContent>

                        </Card>



                    </div>
                    <div>

                        <Card className="" sx={{ minWidth: 275, mx: 3, }}>
                            <CardContent >

                                <CardMedia
                                    component="img"

                                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />


                                <Typography gutterBottom >
                                    <h6 style={{ display: 'inline', marginRight: '50px', textAlign: 'center' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-user"></i> <span className='tc'>by: Admin</span></h6> <h6 style={{ display: 'inline', marginRight: '50px' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-tags"></i>  <span className='tc'>Decorate</span></h6>
                                    <h4 className='tc'>10 Briliant way to decorate Your Home</h4>
                                    <hr />
                                    <div><h5 style={{ display: 'inline', marginRight: '60px' }}>  <i style={{ color: '#ff5a3c' }} class="far fa-calendar-alt"></i> June 24,2021</h5> <h5 style={{ display: 'inline', color: '#ff5a3c' }}>Read More</h5></div>


                                </Typography>

                            </CardContent>

                        </Card>



                    </div>
                    <div>

                        <Card className="" sx={{ minWidth: 275, mx: 3, }}>
                            <CardContent >

                                <CardMedia
                                    component="img"

                                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />


                                <Typography gutterBottom >
                                    <h6 style={{ display: 'inline', marginRight: '50px', textAlign: 'center' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-user"></i> <span className='tc'>by: Admin</span></h6> <h6 style={{ display: 'inline', marginRight: '50px' }}> <i style={{ color: '#ff5a3c' }} class="fas fa-tags"></i>  <span className='tc'>Decorate</span></h6>
                                    <h4 className='tc '>10 Briliant way to decorate Your Home</h4>
                                    <hr style={{ color: 'gray' }} />
                                    <div><h5 style={{ display: 'inline', marginRight: '60px' }}>  <i style={{ color: '#ff5a3c' }} class="far fa-calendar-alt"></i> June 24,2021</h5> <h5 style={{ display: 'inline', color: '#ff5a3c' }}>Read More</h5></div>


                                </Typography>

                            </CardContent>

                        </Card>



                    </div>









                </Slider>
            </Container>
        </div>
    );
};

export default NewsBlog;