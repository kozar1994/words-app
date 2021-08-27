import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

type CountListProps = {
    id: string;
    title: string;
    count: number;
}

const CountList: React.FC<CountListProps> = ({id, title, count}) => (
    <Card variant="outlined">
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
            Words in the list: <strong>{count}</strong>
        </Typography>
        <Typography variant="h4" component="h4">
            {title}
        </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/list/${id}`}>
            <Button variant="contained" color="primary" size="small">Learn More</Button>
        </Link>
        </CardActions>
    </Card>
)

export default CountList;