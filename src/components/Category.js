import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const[category,setCategory]=useState([])
  useEffect(()=>{
    axios.get("http://dummyjson.com/product/categories")
    .then((res)=>{
      console.log(res,111)
      setCategory(res.data)
    })
    .catch((err)=>{
      console.log(err,222)
    })
  },[])
  return (
    <div style={{ marginTop: 10 }}>
      <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            padding: 3,
            width: 128,
            height: 128,
          },
        }}
      >
        {category.map((item)=>{
        return(
          <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{
              height: "100%",
              padding: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={`/products/${item.slug}`}>
              <Typography>{item.name}</Typography>
            </Link>
          </Paper>
        </Grid>
        )
        })}
        
      </Grid>
    </div>
  );
}
