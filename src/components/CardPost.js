import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardPost = (props) => {
    return (
        <Card style={{width: 350,height: 250, margin: 30}} className="animate__animated animate__pulse">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography style={{marginTop: 10}}>
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardPost;