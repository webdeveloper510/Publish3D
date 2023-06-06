import React , {useEffect} from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import sceneView from "../../assets/GLTF/Sub01.glb"
import {GLTFLoader} from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader";
import Env4K from "../../assets/HDRI/modern_buildings_4k.hdr"
import {FirstPersonControls} from "../../../node_modules/three/examples/jsm/controls/FirstPersonControls"
import MirrorImage from "../../../src/assets/images/clouds2.jpg"
// import img0 from "../../../src/assets/Pictures/0.jpeg"
import img1 from "../../assets/Pictures/1.jpeg"
import img2 from "../../assets/Pictures/2.jpeg"
import img3 from "../../assets/Pictures/3.jpeg"
import img4 from "../../assets/Pictures/4.jpeg"
import img5 from "../../assets/Pictures/5.jpeg"
import img6 from "../../assets/Pictures/6.jpeg"
import img7 from "../../assets/Pictures/7.jpeg"
import img8 from "../../assets/Pictures/8.jpeg"
import img9 from "../../assets/Pictures/9.jpeg"
import  img10 from "../../assets/Pictures/10.jpeg"
import  img11 from "../../assets/Pictures/11.jpeg"
import  img12 from "../../assets/Pictures/12.jpeg"
import  img13 from "../../assets/Pictures/13.jpeg"
import  img14 from "../../assets/Pictures/14.jpeg"
import  img15 from "../../assets/Pictures/15.jpeg"
import  img16 from "../../assets/Pictures/16.jpeg"
import InformationButton from "../../assets/Pictures/info.png"
import { RGBELoader } from "../../../node_modules/three/examples/jsm/loaders/RGBELoader"
import { FlyControls } from "../../../node_modules/three/examples/jsm/controls/FlyControls"
import { PointerLockControls } from "three-stdlib";

const ArtWork = ()=>{
    useEffect(()=>{
        const Gallery =()=>{
          
const ImageArray = [ img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,]
const objects=[]
let cameraPersp, cameraOrtho, currentCamera ,buttonGroup ,iconMesh
let scene, renderer , model ,Flycontrols , firstPerson

init();


class Clock {

	constructor( autoStart = true ) {

		this.autoStart = autoStart;

		this.startTime = 0;
		this.oldTime = 0;
		this.elapsedTime = 0;

		this.running = false;

	}

	start() {

		this.startTime = now();

		this.oldTime = this.startTime;
		this.elapsedTime = 0;
		this.running = true;

	}

	stop() {

		this.getElapsedTime();
		this.running = false;
		this.autoStart = false;

	}

	getElapsedTime() {

		this.getDelta();
		return this.elapsedTime;

	}

	getDelta() {

		let diff = 0;

		if ( this.autoStart && ! this.running ) {

			this.start();
			return 0;

		}

		if ( this.running ) {

			const newTime = now();

			diff = ( newTime - this.oldTime ) / 1000;
			this.oldTime = newTime;

			this.elapsedTime += diff;

		}

		return diff;

	}

}
const clock = new Clock();
render();
function now() {

	return ( typeof performance === 'undefined' ? Date : performance ).now(); // see #10732

}



function init() {

    let orbit 

          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize( window.innerWidth, window.innerHeight );
          renderer.setPixelRatio( window.devicePixelRatio );
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 0.6;
          renderer.outputEncoding = THREE.sRGBEncoding;
          renderer.alpha = true;
          document.body.appendChild( renderer.domElement );


          const aspect = window.innerWidth / window.innerHeight;

          cameraPersp = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
          cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
          currentCamera = cameraPersp;

          firstPerson =  new FirstPersonControls( cameraOrtho , renderer.domElement);



          currentCamera.position.set(  0.2, 0.2, 1.2 );

            // 2. Initiate FlyControls with various params
            // Flycontrols = new FlyControls( cameraPersp, renderer.domElement );
            // Flycontrols.movementSpeed = 100;
            // Flycontrols.rollSpeed = Math.PI / 24;
            // Flycontrols.autoForward = false;
            // Flycontrols.dragToLook = true;
          // currentCamera.lookAt( 200,0 ,0 );

          scene = new THREE.Scene();




          orbit = new OrbitControls( currentCamera, renderer.domElement );
          orbit.update();
          orbit.addEventListener( 'change', render );
          
          let ambientLight = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 1);
          scene.add(ambientLight);

          let directionalLightBack = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.55);
          directionalLightBack.position.set(30, 100, 100);
          scene.add(directionalLightBack);

          let directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.2);
          directionalLightFront.position.set(-30, 100, -100);
          scene.add(directionalLightFront);

          new RGBELoader()
          .load(Env4K , function(texture){
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.background = texture;
            scene.enviroment = texture;
            texture.offset.x = 0.5;
            texture.offset.y = 0.5;
            
          })

      const gltfLoader = new GLTFLoader();
        gltfLoader.load(sceneView, function (object) {
            const sceneObject = object.scene;
            scene.add(sceneObject);
            objects.push(sceneObject)
            


            const boundingBox = new THREE.Box3().setFromObject(sceneObject);

            orbit.addEventListener('change', () => {
                if (!boundingBox.containsPoint(cameraPersp.position)) {
                  cameraPersp.position.clamp(boundingBox.min, boundingBox.max);
                }
            });

            scene.add(cameraPersp); 

            sceneObject.traverse((child) => {
         if(child.name=='Metal_pipes'){
          child.position.z = -4.6
         }
                if (child.name === "Lights_1") {
                  const width = 100000;
                  const height = 10000;
                  const intensity = 1;
                  const light = new THREE.RectAreaLight(0xffffff, intensity,  width, height);
                  // child.add(light);
                  const material = child.material;
                      const texture = new THREE.TextureLoader()
                          texture.load(MirrorImage , function (image) {
                          material.map = image;
                      })
                        material.transparent = true;
                        material.opacity = 0.2;
                        material.roughness = 0.2;
                        material.side = THREE.DoubleSide;
                        material.metalness = 0.5;
                        material.depthWrite = true;
                }


            
         
                if (child.name === "Frames") {
                 
	                    child.visible = false;
                }

                if (child.name === "Wood") {
                 
                  child.position.z = -4.6
             
            }
                
                if (child.name === "Art_Galary") {
                    const light2 = new THREE.PointLight(0xffffff, 0.6, 10);
                    child.add(light2);

                    const SpotLight2 = new THREE.SpotLight(0xffffff, 0.43333333);
                    child.add(SpotLight2);
                    
                    SpotLight2.position.set(0, 0.5, 1.500);

                    child.position.z = -4.5


                }     


                if (child.name === "Floor") {
                  //child.scale.x=2
                  child.scale.z=0.05
                      const DLight2 = new THREE.DirectionalLight(0xffffff, 1);
                      child.add(DLight2);
                      DLight2.position.set(-5.20, -5.50, -3.60);

                      const DLight3 = new THREE.DirectionalLight(0xffffff, 1);
                      child.add(DLight3);
                      DLight3.position.set(-1.10, -15.60, -7.60);


                      const material = child.children[0].material;
                      material.side = THREE.DoubleSide;
                }
          });

  }, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  }, function (error) {
    console.log('An error happened', error);
  });

}


// Add a double-click event listener to the renderer
renderer.domElement.addEventListener('dblclick', onDoubleClick);

function onDoubleClick(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, cameraPersp);
  const intersects = raycaster.intersectObjects(scene.children, true);
  
  if (intersects.length > 0) {
    const target = intersects[0].point;
    console.log(target)
    cameraPersp.position.copy(target);
    cameraPersp.lookAt(target);
    
  }
}




// ADDING NEW FRAMES TO THIS SCENE ---> 21 FRAMES

let frame  , frameFeatures
// left Side big Images frames
frame = new THREE.BoxGeometry(0,1,0.8);
frameFeatures = new THREE.MeshStandardMaterial()


const frame1 = new THREE.Mesh(frame , frameFeatures)
console.log(frame1)
scene.add(frame1)
frame1.position.set(-1.760, 0.336, 7.6)

const frame2 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame2)
frame2.position.set(-1.760,0.336,6.5)


const frame3 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame3)
frame3.position.set(-1.760,0.336,5.4)



const frame4 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame4)
frame4.position.set(-1.76,0.336,4.3)



const frame5 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame5)
frame5.position.set(-1.76,0.336,3.2)




const frame6 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame6)
frame6.position.set(-1.76,0.336,2.1)


const frame7 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame7)
frame7.position.set(-1.760, 0.336,1.1)




const frame8 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame8)
frame8.position.set(-1.760,0.336,0)


const frame9 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame9)
frame9.position.set(-1.760,0.336,-1.1)



const frame10 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame10)
frame10.position.set(-1.75,0.336,-2.2)



const frame11 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame11)
frame11.position.set(-1.756,0.336,-3.3)




const frame12 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame12)
frame12.position.set(-1.76,0.336,-4.4)

// left Side Big frames Closed

// Left Side Images upper Stairs

const frameLeftStairs = new THREE.BoxGeometry(0,0.5,0.6);
const frameFeaturesLeftStairs = new THREE.MeshStandardMaterial()

const frame13 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame13)
frame13.position.set(-1.76,0.336,-6.1)

const frame14 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame14)
frame14.position.set(-1.76,0.336,-7)

const frame15 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame15)
frame15.position.set(-1.76,0.336,-7.9)

const frame16 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame16)
frame16.position.set(-1.76,0.336,-8.8)


const frame17 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame17)
frame17.position.set(-1.76,0.336,-9.7)


const frame18 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame18)
frame18.position.set(-1.76,0.336,-10.6)


const frame19 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame19)
frame19.position.set(-1.76,0.336,-11.5)

const frame20 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame20)
frame20.position.set(-1.76,0.336,-12.4)


const frame21 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame21)
frame21.position.set(-1.76,0.336,-13.3)

const frame22 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame22)
frame22.position.set(-1.76,0.336,-14.2)

const frame23 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame23)
frame23.position.set(-1.76,0.336,-15.1)

const frame24 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame24)
frame24.position.set(-1.76,0.336,-16)


const frame25 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame25)
frame25.position.set(-1.76,0.336,-16.9)


const frame26 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame26)
frame26.position.set(-1.76,0.336,-17.8)


const frame27 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame27)
frame27.position.set(-1.76,0.336,-18.6)

const frame28 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame28)
frame28.position.set(-1.76,0.336,-19.5)



const frame29 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame29)
frame29.position.set(-1.76,0.336,-19.4)

const frame30 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame30)
frame30.position.set(-1.76,0.336,-20.3)

const frame31 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame31)
frame31.position.set(-1.76,0.336,-21.2)

const frame32 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame32)
frame32.position.set(-1.76,0.336,-22.1)


const frame33 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame33)
frame33.position.set(-1.76,0.336,-23)


const frame34 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame34)
frame34.position.set(-1.76,0.336,-23.9)


const frame35 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame35)
frame35.position.set(-1.76,0.336,-24.8)

const frame36 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame36)
frame36.position.set(-1.76,0.336,-25.7)

const frame37 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame37)
frame37.position.set(-1.76,0.336,-26.6)


const frame38 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame38)
frame38.position.set(-1.76,0.336,-27.5)

const frame39 = new THREE.Mesh(frameLeftStairs , frameFeaturesLeftStairs)
scene.add(frame39)
frame39.position.set(-1.76,0.336,-28.4)

// Left Side Images upper Stairs close

// Back Side Images upper Stairs

const frameBackSide = new THREE.BoxGeometry(0,0.8,1);
const frameFeaturesBackSide = new THREE.MeshStandardMaterial()

const frame40 = new THREE.Mesh(frameBackSide , frameFeaturesBackSide)
scene.add(frame40)
frame40.position.set(-1,0.443,-29.8)
frame40.rotation.y=Math.PI/2

const frame41 = new THREE.Mesh(frameBackSide , frameFeaturesBackSide)
scene.add(frame41)
frame41.position.set(1,0.443,-29.8)
frame41.rotation.y=Math.PI/2

// Back Side Images upper Stairs close


let Rframe  , RframeFeatures
// left Side big Images frames
Rframe = new THREE.BoxGeometry(0,1,0.8);
RframeFeatures = new THREE.MeshStandardMaterial()


const frame42 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame42)
frame42.position.set(1.760, 0.336, 7.6)
frame42.rotation.y=Math.PI




const frame43 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame43)
frame43.position.set(1.760,0.336,6.5)
frame43.rotation.y=Math.PI



const frame44 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame44)
frame44.position.set(1.760,0.336,5.4)
frame44.rotation.y=Math.PI




const frame45 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame45)
frame45.position.set(1.760,0.336,4.3)
frame45.rotation.y=Math.PI




const frame46 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame46)
frame46.position.set(1.760,0.336,3.2)
frame46.rotation.y=Math.PI





const frame47 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame47)
frame47.position.set(1.760,0.336,2.1)
frame47.rotation.y=Math.PI



const frame48 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame48)
frame48.position.set(1.760, 0.336,1.1)
frame48.rotation.y=Math.PI





const frame49 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame49)
frame49.position.set(1.760,0.336,0)
frame49.rotation.y=Math.PI



const frame50 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame50)
frame50.position.set(1.760,0.336,-1.1)
frame50.rotation.y=Math.PI




const frame51 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame51)
frame51.position.set(1.760,0.336,-2.2)
frame51.rotation.y=Math.PI




const frame52 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame52)
frame52.position.set(1.760,0.336,-3.3)
frame52.rotation.y=Math.PI





const frame53 = new THREE.Mesh(frame , frameFeatures)
scene.add(frame53)
frame53.position.set(1.76,0.336,-4.4)
frame53.rotation.y=Math.PI


// Right Side Big frames Closed

// Right Side Images upper Stairs

const frameRightStairs = new THREE.BoxGeometry(0,0.5,0.6);
const frameFeaturesRightStairs = new THREE.MeshStandardMaterial()

const frame54 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame54)
frame54.position.set(1.76,0.336,-6.1)
frame54.rotation.y=Math.PI


const frame55 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame55)
frame55.position.set(1.76,0.336,-7)
frame55.rotation.y=Math.PI


const frame56 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame56)
frame56.position.set(1.76,0.336,-7.9)
frame56.rotation.y=Math.PI


const frame57 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame57)
frame57.position.set(1.76,0.336,-8.8)
frame57.rotation.y=Math.PI



const frame58 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame58)
frame58.position.set(1.76,0.336,-9.7)
frame58.rotation.y=Math.PI



const frame59 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame59)
frame59.position.set(1.76,0.336,-10.6)
frame59.rotation.y=Math.PI



const frame60 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame60)
frame60.position.set(1.76,0.336,-11.5)
frame60.rotation.y=Math.PI


const frame61 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame61)
frame61.position.set(1.76,0.336,-12.4)
frame61.rotation.y=Math.PI



const frame62 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame62)
frame62.position.set(1.76,0.336,-13.3)
frame62.rotation.y=Math.PI


const frame63 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame63)
frame63.position.set(1.76,0.336,-14.2)
frame63.rotation.y=Math.PI


const frame64 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame64)
frame64.position.set(1.76,0.336,-15.1)
frame64.rotation.y=Math.PI


const frame65 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame65)
frame65.position.set(1.76,0.336,-16)
frame65.rotation.y=Math.PI



const frame66 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame66)
frame66.position.set(1.76,0.336,-16.9)
frame66.rotation.y=Math.PI



const frame67 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame67)
frame67.position.set(1.76,0.336,-17.8)
frame67.rotation.y=Math.PI



const frame68 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame68)
frame68.position.set(1.76,0.336,-18.6)
frame68.rotation.y=Math.PI


const frame69 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame69)
frame69.position.set(1.76,0.336,-19.5)
frame69.rotation.y=Math.PI




const frame70 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame70)
frame70.position.set(1.76,0.336,-19.4)
frame70.rotation.y=Math.PI


const frame71 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame71)
frame71.position.set(1.76,0.336,-20.3)
frame71.rotation.y=Math.PI


const frame72 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame72)
frame72.position.set(1.76,0.336,-21.2)
frame72.rotation.y=Math.PI


const frame73 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame73)
frame73.position.set(1.76,0.336,-22.1)
frame73.rotation.y=Math.PI



const frame74 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame74)
frame74.position.set(1.76,0.336,-23)
frame74.rotation.y=Math.PI



const frame75 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame75)
frame75.position.set(1.76,0.336,-23.9)
frame75.rotation.y=Math.PI



const frame76 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame76)
frame76.position.set(1.76,0.336,-24.8)
frame76.rotation.y=Math.PI


const frame77 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame77)
frame77.position.set(1.76,0.336,-25.7)
frame77.rotation.y=Math.PI


const frame78 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame78)
frame78.position.set(1.76,0.336,-26.6)
frame78.rotation.y=Math.PI



const frame79 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame79)
frame79.position.set(1.76,0.336,-27.5)
frame79.rotation.y=Math.PI


const frame80 = new THREE.Mesh(frameRightStairs , frameFeaturesRightStairs)
scene.add(frame80)
frame80.position.set(1.76,0.336,-28.4)
frame80.rotation.y=Math.PI


const FramesArray=[frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17,frame18,frame19,frame20,frame21,frame22,frame23,frame24,frame25,frame26,frame27,frame28,frame29,frame30,frame31,frame32,frame33,frame34,frame35,frame36,frame37,frame38,frame39,frame40,frame41,frame42,frame43,frame44,frame45,frame46,frame47,frame48,frame49,frame50,frame51,frame52,frame53,frame54,frame55,frame56,frame57,frame58,frame59,frame60,frame61,frame62,frame63,frame64,frame65,frame66,frame67,frame68,frame69,frame70,frame71,frame72,frame73,frame74,frame75,frame76,frame77,frame78,frame79,frame80]

const textureLoader = new THREE.TextureLoader();


for (let i = 0; i < FramesArray.length; i++) {
  const frame = FramesArray[i];
  const image = ImageArray[i];
  const imageName = image; 

  const texture = textureLoader.load(image);
  const material = new THREE.MeshBasicMaterial({ map: texture });

  frame.material = material;


  // buttonGroup.visible = false;
  const raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener("mousemove",onmousemove);
function onmousemove(event){
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse , cameraPersp);

  const intersects = raycaster.intersectObject(frame, true);
  for (let i = 0; i < intersects.length; i++) {
  // Create the button and information icon
    // buttonGroup = new THREE.Group();
    // frame.add(buttonGroup);
    // const IconTexture = textureLoader.load(InformationButton)
    // const iconGeometry = new THREE.CircleGeometry(0.1, 32);
    // const iconMaterial = new THREE.MeshStandardMaterial({map:IconTexture});
    // iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
  
    // console.log("Heer")
    // buttonGroup.add(iconMesh);
    // buttonGroup.position.set(0.01, 0, 0.3);
    // buttonGroup.rotation.y=Math.PI/2
  }
}
}



// POINTER CONTROLS --------------------------------
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

const velocity = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();

const PointerControls = new PointerLockControls( cameraPersp,renderer.domElement );

const blocker = document.getElementById( 'blocker' );
const instructions = document.getElementById( 'instructions' );

instructions.addEventListener( 'click', function () {

  PointerControls.lock();

} );

PointerControls.addEventListener( 'lock', function () {

  instructions.style.display = 'none';
  blocker.style.display = 'none';

} );

PointerControls.addEventListener( 'unlock', function () {

  blocker.style.display = 'block';
  instructions.style.display = '';

} );

scene.add( PointerControls.getObject() );

const onKeyDown = function ( event ) {

  switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;
      break;

    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;

    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;

    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;

    case 'Space':
      if ( canJump === true ) velocity.y += 350;
      canJump = false;
      break;

  }

};

const onKeyUp = function ( event ) {

  switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;

    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;

    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;

    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;

  }

};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );
const raycaster= new THREE.Raycaster();
let prevTime = performance.now();
const direction = new THREE.Vector3();
const time = performance.now();
if ( PointerControls.isLocked === true ) {

  raycaster.ray.origin.copy( PointerControls.getObject().position );
  raycaster.ray.origin.y -= 10;

  const intersections = raycaster.intersectObjects( objects, false );

  const onObject = intersections.length > 0;

  const delta = ( time - prevTime ) / 1000;

  velocity.x -= velocity.x * 10.0 * delta;
  velocity.z -= velocity.z * 10.0 * delta;

  velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

  direction.z = Number( moveForward ) - Number( moveBackward );
  direction.x = Number( moveRight ) - Number( moveLeft );
  direction.normalize(); // this ensures consistent movements in all directions

  if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
  if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

  if ( onObject === true ) {

    velocity.y = Math.max( 0, velocity.y );
    canJump = true;

  }

  PointerControls.moveRight( - velocity.x * delta );
  PointerControls.moveForward( - velocity.z * delta );

  PointerControls.getObject().position.y += ( velocity.y * delta ); // new behavior

  if ( PointerControls.getObject().position.y < 10 ) {

    velocity.y = 0;
    PointerControls.getObject().position.y = 10;

    canJump = true;

  }

}


    function onWindowResize() {

        const aspect = window.innerWidth / window.innerHeight;
    
        cameraPersp.aspect = aspect;
        cameraPersp.updateProjectionMatrix();
    
        cameraOrtho.left = cameraOrtho.bottom * aspect;
        cameraOrtho.right = cameraOrtho.top * aspect;
        cameraOrtho.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
        render();
    
    }


    function render() {
      const delta = clock.getDelta();
      firstPerson.update(delta)
      // setupKeyControls()
      renderer.render(scene, currentCamera);
      // Flycontrols.update(0.01);
    }
    
}
    setTimeout(Gallery , 1000)

        },);
        const render = () => {
          // Return your JSX code here or null
          return null;
        };
        
        return render(); // Call the render function
        
}

export default ArtWork;