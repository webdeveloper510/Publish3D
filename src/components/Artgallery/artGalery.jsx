import React from "react";
import "../../App.css"
import ArtWork from "components/ModelGallery/artgallery"

const Gallery =()=>{
    return(
        <div className="main" >
            <div className="gallery">
                <div className="container">
                <div id="blocker">
			<div id="instructions">
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