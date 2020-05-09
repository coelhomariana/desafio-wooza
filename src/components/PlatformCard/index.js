import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function PlatformCard() {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Titulo
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contratar</Button>
      </CardActions>
    </Card>
  );
}