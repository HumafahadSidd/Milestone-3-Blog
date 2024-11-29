import React from 'react'

export default function Docs( {
  params,
}:{ 
  params:{
slug:string[];
  };
 }) {
  if(params.slug.length===2){
    return <h1>Viewing doc s for feature(params.slug[0]</h1>
  }
    return ( 
    <div>
      docs page
    </div>
  )
}

