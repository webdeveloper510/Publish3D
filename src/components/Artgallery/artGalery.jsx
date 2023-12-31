import React, {useEffect, useState} from "react";
import "../../App.css"
import ArtWork from "components/ModelGallery/artgallery"

const Gallery =()=>{
    const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);
    return(
        <div className="main">
            {showLoader ? (
            <>
            <div className='d-flex loader-container flex-column'><div className='loader'><span></span></div> <p className='text-white'>Processing...</p></div>
            
            </>
    ) : (
        ""
    )}
    <div className="gallery">
      <div className="container">
            <div id="blocker">
              <div id="instructions" >
                <p style={{fontSize:"36px"}}>
                  Click to play
                </p>
                <p>
                  Move: WASD<br/>
                  Jump: SPACE<br/>
                  Look: MOUSE
                </p>
              </div>
            </div>
            <div className="gallery 3dModel Art">
              <ArtWork />
            </div>
        <div id="container"></div>
        <div id="popup" style={{display: "none"}}> 
        {/* <div id="popup-pointer">
          </div> */}
          </div>
        <div id="custom-pointer"></div>
        {/* <div id="custom-cursor" class="custom-cursor"></div> */}
        {/* <button class="fa fa-info-circle" id="info-but" style={{fontSize:"25px",color:"blue", borderRadius: "50%", outline: "none", border: "none"}}></button> */}
        <template id="frame-template">
          <div className="frame">
            <div id="image-name"></div>
            <button id="info-button">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </template>
      </div>
    </div>
        
    </div>
    )
}
export default Gallery ;