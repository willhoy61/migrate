import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;
export default class Map extends Component {
 static defaultProps = {
   center: { lat: 30.266826, lng: -97.7505190 },
   zoom: 11
 }
render() {
   return (
     <div className='google-map'>
       <GoogleMapReact
         defaultCenter={ this.props.center }
         defaultZoom={ this.props.zoom }>
         <AnyReactComponent
           lat={ 30.266826 }
           lng={ -97.750519 }
           text={ 'Migrate' }
         />
       </GoogleMapReact>
     </div>
   )
 }
}