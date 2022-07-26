import React from "react"
import { Helmet } from 'react-helmet'

export default function Layout(props) {
  return (
    <main>
        <Helmet title={` ${props.title ? `${props.title} |` : ''} Site title`} defer={false} />
        <div>
            {props.children}
        </div>
    </main>
  )
  
}