import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Filme(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={props.imagem}
                alt={props.titulo}
            />
            
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4 }>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>{props.duracao}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Grid item xs={6}>
            <button onClick={props.escluir}>x</button>
        </Grid>
        <Grid item xs={6}>
            <Link href={"editarfilme/" + props.id} >Editar</Link>
        </Grid> 
    </Card>
  )
}

export default Filme