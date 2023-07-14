import '../styles/global.css'
import React from 'react'
import { PropagateLoader } from 'react-spinners'

function Loading() {
   return (
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'absolute',
         left: '50%',
         top: '50%',
      }}>
         <PropagateLoader />
      </div>
   )
}

export default Loading
