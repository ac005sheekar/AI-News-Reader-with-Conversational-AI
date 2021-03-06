import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
//import classNames from 'classnames';
import useStyles from './styles.js';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={urlToImage||'https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg'} />
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}
export default NewsCard;