import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

export default function PlatformCard(props) {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Franquia
        </Typography>
        <Typography color="textSecondary">
          Valor 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contratar</Button>
      </CardActions>
    </Card>
  );
}