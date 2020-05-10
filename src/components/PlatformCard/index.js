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
          <Typography variant="h5" component="h2">{props.franquia}</Typography>
          <Typography color="textSecondary">{props.valor}</Typography>
          <CardActions></CardActions>
  <Button variant={props.ativo ? "contained" : "disabled"} size="small" onClick={props.onClick}>{props.ativo ? "Contratar" : "Plano indisponível"}</Button>
        </CardContent>
      </Card>
  );
}