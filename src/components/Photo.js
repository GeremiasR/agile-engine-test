import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import LazyLoad from 'react-lazy-load';
import "./photo.css";
import { BsEnvelope } from "react-icons/bs";
export const Photo = (props) => {
    

    return(
        <LazyLoad >
        <div className="m-1 container">
            <InnerImageZoom className="photo image" src={props.image.full_picture} zoomScale={3}/>
            <div className="overlay">
                Autor: {props.image.author}
                Camera: {props.image.camera}
                Tags: {props.image.tags}
            </div>
            <a href="#" className="float">
                <BsEnvelope className="my-float"/>
            </a>
        </div>
         </LazyLoad>
  )};
  