import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

import './Product.css';
const Product = () => {
    return (
        <div >
            <div style={{ display: 'grid', placeContent: 'center', marginTop: '10px' }}>
                <Chip variant='outlined' color='warning' label="News & Blogs" />
                <h2>Leatest News Feeds</h2>

            </div>
            <Grid justify="center" container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card className="" sx={{ minWidth: 345, mx: 3, boxShadow: 3 }}>




                        <CardContent >

                            <CardMedia
                                component="img"

                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />


                            <Typography gutterBottom >
                                <h4><span style={{ color: '#ff5a3c' }}> $34000</span> /Month</h4>
                                <h4 className='tc '>New Appartment View</h4>
                                <p style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi harum rerum voluptatum libero tenetur id autem commodi temporibus assumenda quia.</p>
                                <hr style={{ color: 'gray' }} />

                                <div> <span><i class="fas fa-bed"></i> 3 rooms</span>  <span style={{ marginLeft: '5px' }}><i class="fas fa-bath"></i> 2 baths</span> <span style={{ marginLeft: '5px' }}><i class="far fa-square"></i> 34500 squre</span></div>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px" }}> <Button color="success" variant="contained">Buy Now</Button></div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="" sx={{ minWidth: 345, mx: 3, boxShadow: 3 }}>




                        <CardContent >

                            <CardMedia
                                component="img"

                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />


                            <Typography gutterBottom >
                                <h4><span style={{ color: '#ff5a3c' }}> $34000</span> /Month</h4>
                                <h4 className='tc '>New Appartment View</h4>
                                <p style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi harum rerum voluptatum libero tenetur id autem commodi temporibus assumenda quia.</p>
                                <hr style={{ color: 'gray' }} />

                                <div> <span><i class="fas fa-bed"></i> 3 rooms</span>  <span style={{ marginLeft: '5px' }}><i class="fas fa-bath"></i> 2 baths</span> <span style={{ marginLeft: '5px' }}><i class="far fa-square"></i> 34500 squre</span></div>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px" }}> <Button color="success" variant="contained">Buy Now</Button></div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="" sx={{ minWidth: 345, mx: 3, boxShadow: 3 }}>




                        <CardContent >

                            <CardMedia
                                component="img"

                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />


                            <Typography gutterBottom >
                                <h4><span style={{ color: '#ff5a3c' }}> $34000</span> /Month</h4>
                                <h4 className='tc '>New Appartment View</h4>
                                <p style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi harum rerum voluptatum libero tenetur id autem commodi temporibus assumenda quia.</p>
                                <hr style={{ color: 'gray' }} />

                                <div> <span><i class="fas fa-bed"></i> 3 rooms</span>  <span style={{ marginLeft: '5px' }}><i class="fas fa-bath"></i> 2 baths</span> <span style={{ marginLeft: '5px' }}><i class="far fa-square"></i> 34500 squre</span></div>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px" }}> <Button color="success" variant="contained">Buy Now</Button></div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="" sx={{ minWidth: 345, mx: 3, boxShadow: 3, }}>




                        <CardContent >

                            <CardMedia
                                component="img"

                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />


                            <Typography gutterBottom >
                                <h4><span style={{ color: '#ff5a3c' }}> $34000</span> /Month</h4>
                                <h4 className='tc '>New Appartment View</h4>
                                <p style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi harum rerum voluptatum libero tenetur id autem commodi temporibus assumenda quia.</p>
                                <hr style={{ color: 'gray' }} />

                                <div> <span><i class="fas fa-bed"></i> 3 rooms</span>  <span style={{ marginLeft: '5px' }}><i class="fas fa-bath"></i> 2 baths</span> <span style={{ marginLeft: '5px' }}><i class="far fa-square"></i> 34500 squre</span></div>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px" }}> <Button color="success" variant="contained">Buy Now</Button></div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>


        </div >
    );
};

export default Product;