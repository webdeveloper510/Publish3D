import React , {useEffect, useState} from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import sceneView from "../../assets/GLTF/Sub01.glb"
import {GLTFLoader} from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "../../../node_modules/three/examples/jsm/controls/PointerLockControls";
import MirrorImage from "../../../src/assets/images/clouds2.jpg"
import { useParams } from "react-router-dom";


// Images ARTGALLERY-1

import img1 from "../../assets/Pictures/1.jpeg"
import img2 from "../../assets/Pictures/2.jpeg"
import img3 from "../../assets/Pictures/3.jpeg"
import img4 from "../../assets/Pictures/4.jpeg"
import img5 from "../../assets/Pictures/5.jpeg"
import img6 from "../../assets/Pictures/6.jpeg"
import img7 from "../../assets/Pictures/7.jpeg"
import img8 from "../../assets/Pictures/8.jpeg"
import img9 from "../../assets/Pictures/9.jpeg"
import img10 from "../../assets/Pictures/10.jpeg"
import img11 from "../../assets/Pictures/11.jpeg"
import img12 from "../../assets/Pictures/12.jpeg"
import img13 from "../../assets/Pictures/13.jpeg"
import img14 from "../../assets/Pictures/14.jpeg"
import img15 from "../../assets/Pictures/15.jpeg"
import img16 from "../../assets/Pictures/16.jpeg"


// Images ARTGALLERY-2

import wallTexture from '../../assets/images/textureWalls.jpg'
import wallTexture2 from '../../assets/images/walltexture2.jpg'
import wallTexture3 from '../../assets/images/walltexture3.jpg'
import wallTexture4 from '../../assets/images/walltexture4.jpg'
import wallTexture5 from '../../assets/images/walltexture5.jpg'
import wallTexture6 from '../../assets/images/walltexture6.jpeg'
import wallTexture7 from '../../assets/images/walltexture7.jpg'
import wallTexture8 from '../../assets/images/walltexture8.jpg'
import wallTexture9 from '../../assets/images/walltexture9.jpg'
import wallpaper222 from '../../assets/images/wallpaper222.jpg'


// Images ARTGALLERY-3

import gallery1 from "../../assets/images/gallery1.jpeg"
import gallery2 from "../../assets/images/gallery2.jpeg"
import gallery3 from "../../assets/images/gallery3.jpeg"
import gallery4 from "../../assets/images/gallery4.jpeg"
import gallery5 from "../../assets/images/gallery5.jpeg"
import gallery6 from "../../assets/images/gallery6.jpeg"
import gallery7 from "../../assets/images/gallery7.jpeg"
import gallery8 from "../../assets/images/gallery8.jpeg"


// Images ARTGALLERY-3

import bike1 from "../../assets/images/bike1.jpeg"
import bike2 from "../../assets/images/bike2.jpeg"
import bike3 from "../../assets/images/bike3.jpeg"
import bike4 from "../../assets/images/bike4.jpeg"
import bike5 from "../../assets/images/bike5.jpeg"
import bike6 from "../../assets/images/bike6.jpeg"
import bike7 from "../../assets/images/bike7.jpeg"
import bike8 from "../../assets/images/bike8.jpeg"

import floorwall from "../../assets/images/dark.png"
import floorwall3 from "../../assets/images/FloorTest3.jpg"
import InformationButton from "../../assets/Pictures/info.png"
import { RGBELoader } from "../../../node_modules/three/examples/jsm/loaders/RGBELoader"
// import { PointerLockControls } from "three-stdlib";

let RenderRer = true;
const ArtWork = ()=>{
  const {SelectedGallery} = useParams()
  console.log('-----------------------:------------------------:----------->' , SelectedGallery)
  const [loadedModel , ModelLoaded] =useState(false);
    useEffect(()=>{
        const Gallery =()=>{
        

        
        const ImageArray = [ img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,]
        const ImageArray2 = [wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8 ,wallTexture9,wallTexture , wallTexture2,wallTexture3 , wallTexture4, wallTexture5 ,wallTexture6 ,wallTexture7 ,wallTexture8]
        const ImageArray3 = [gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8]
        const ImageArray4 = [bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8]
        const objects=[]
        let cameraPersp, cameraOrtho, currentCamera 
        let scene, renderer , buttonGroup , iconMesh , orbit

        init();
        render();
        function init() {

// -------------------------------Starting A Scene With Render Function -------------------------------------------------------------->
          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize( window.innerWidth, window.innerHeight );
          renderer.setPixelRatio( window.devicePixelRatio );
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 0.6;
          renderer.alpha = true;
          document.body.appendChild( renderer.domElement );
          const aspect = window.innerWidth / window.innerHeight;

          // -------------------------------Creating Scene -------------------------------------------------------------------------------------->



          scene = new THREE.Scene();


// -------------------------------Creating A CameraPersp and cameraOrtho -------------------------------------------------------------->

          cameraPersp = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
          cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
          currentCamera = cameraPersp;        
          currentCamera.position.set(  0.2, 0.2, 1.2 );
          // scene.add(cameraPersp)





         


// -------------------------------Creating Orbit Controls to The Scene  --------------------------------------------------------------->

          orbit = new OrbitControls( currentCamera, renderer.domElement );
          orbit.update();
          orbit.addEventListener( 'change', render );
          

// -------------------------------Adding Lights to the scene for  Object  -------------------------------------------------------------->

          let ambientLight = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 1);
          scene.add(ambientLight);

          let directionalLightBack = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.55);
          directionalLightBack.position.set(30, 100, 100);
          scene.add(directionalLightBack);

          let directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.2);
          directionalLightFront.position.set(-30, 100, -100);
          scene.add(directionalLightFront);


// ----------------------------- Addiing The 3D-Model TO the Scene GLTFLoader-------------------------------------------------------------->

      const gltfLoader = new GLTFLoader();

        gltfLoader.load(sceneView, function (object) {
            const sceneObject = object.scene;
            scene.add(sceneObject);
            objects.push(sceneObject)

            // Adding Bounding to the BOX -------------------------------------------------------------------------------------------------->
            const boundingBox = new THREE.Box3().setFromObject(sceneObject);

            orbit.addEventListener('change', () => {
                if (!boundingBox.containsPoint(cameraPersp.position)) {
                  cameraPersp.position.clamp(boundingBox.min, boundingBox.max);
                }
            });
            scene.add(cameraPersp); 

            // Managing the Childs in the scene --------------------------------------------------------------------------------------------->

            sceneObject.traverse((child) => {
              console.log(child.name)
              if(child.name=='Metal_pipes'){
                child.position.z = -4.6
              }


              // Lights_1 --------------------------------------------------> 
                if (child.name === "Lights_1") {
                  const width = 100000;
                  const height = 10000;
                  const intensity = 1;
                  const light = new THREE.RectAreaLight(0xffffff, intensity,  width, height);
                  child.add(light);
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


              // Frames --------------------------------------------------> 

                  if (child.name === "Frames") {
                    child.visible = false;
                  }


              // Wood  --------------------------------------------------> 

                  if (child.name === "Wood") {
                    child.position.z = -4.6
                   }

                   
              // Art Gallery --------------------------------------------------> 

                  if (child.name === "Art_Galary") {
                    const light2 = new THREE.PointLight(0xffffff, 0.6, 10);
                    child.add(light2);
                    const SpotLight2 = new THREE.SpotLight(0xffffff, 0.43333333);
                    child.add(SpotLight2)  
                    SpotLight2.position.set(0, 0.5, 1.500);
                    child.position.z = -4.5
                  }     

              // Floor   --------------------------------------------------> 

                  if (child.name === "Floor") {

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
              ModelLoaded(true);
            }, function (xhr) {
              console.log((xhr.loaded / xhr.total * 100) + '% loaded');
              
            }, function (error) {
              console.log('An error happened', error);
            });

          }



          const wallGeometry = new THREE.BoxGeometry(0, 3, 28);
          const wallMaterial = new THREE.MeshStandardMaterial();
          const wall = new THREE.Mesh(wallGeometry, wallMaterial);
          scene.add(wall);
          wall.position.set(-1.77, 0,0);
          wall.needsUpdate = true;          
              const textureLoader2 = new THREE.TextureLoader();
              textureLoader2.load(wallpaper222, function onLoad(texture) {
                var material = [
                  new THREE.MeshBasicMaterial({ map: texture, transparent: false }),
                  new THREE.MeshBasicMaterial({ transparent: false }),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial(),
                ];
                wall.material = material;
                texture.needsUpdate = false;
                material.map = texture;
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set( 2, 1);
              });

              const wallGeometry2 = new THREE.BoxGeometry(0, 3, 28);
              const wallMaterial2 = new THREE.MeshStandardMaterial();
              const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial2);
              scene.add(wall2);
              wall2.position.set(1.77, 0,0);
              wall2.needsUpdate = true;          
                  const textureLoader3 = new THREE.TextureLoader();
                  textureLoader3.load(wallpaper222, function onLoad(texture) {
                    var material = [
                      new THREE.MeshBasicMaterial({ transparent: false }),
                      new THREE.MeshBasicMaterial({ map: texture, transparent: false }),
                      new THREE.MeshBasicMaterial(),
                      new THREE.MeshBasicMaterial(),
                      new THREE.MeshBasicMaterial(),
                      new THREE.MeshBasicMaterial(),
                    ];
                    wall2.material = material;
                    texture.needsUpdate = false;
                    material.map = texture;
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set( 2, 1);
                  });  

              const FloorGeometry = new THREE.BoxGeometry(5,0,15)
              const Floormaterial = new THREE.MeshStandardMaterial()
              const floorMesh = new THREE.Mesh(FloorGeometry , Floormaterial)
              scene.add(floorMesh)
              floorMesh.position.set(0,-1,1.5)
              floorMesh.needsUpdate = true;
              const textureLoader4 = new THREE.TextureLoader();
              textureLoader4.load(floorwall3, function onLoad(texture) {
                var material = [
                  new THREE.MeshBasicMaterial({ transparent: false }),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial({ map: texture, transparent: false }),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial(),
                  new THREE.MeshBasicMaterial(),
                ];
                floorMesh.material = material;
                texture.needsUpdate = false;
                material.map = texture;
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set( 2, 4);
              });  
// Add a double-click event listener to the renderer
// renderer.domElement.addEventListener('dblclick', onDoubleClick);

// function onDoubleClick(event) {
//   const mouse = new THREE.Vector2();
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   const raycaster = new THREE.Raycaster();
//   raycaster.setFromCamera(mouse, cameraPersp);
//   const intersects = raycaster.intersectObjects(scene.children, true);
  
//   if (intersects.length > 0) {
//     const target = intersects[0].point;
//     console.log(target)
//     cameraPersp.position.copy(target);
//     cameraPersp.lookAt(target);
    
//   }
// }




// ADDING NEW FRAMES TO THIS SCENE ----------------------------------------------------------------------------> *) FRAMES
let ArrayWorks ;
if (SelectedGallery === "artGallery-1"){
  ArrayWorks = ImageArray
}
if (SelectedGallery === "artGallery-2"){
  ArrayWorks = ImageArray2
}
if (SelectedGallery === "artGallery-3"){
  ArrayWorks = ImageArray3
}
if (SelectedGallery === "artGallery-4"){
  ArrayWorks = ImageArray4
}

let position_z2  = 7.6;
let position_z  = 7.6;
let position_x  = -1;
var geome2 = new THREE.BoxGeometry(0.01,0.8,0.7);
var mater2 = new THREE.MeshBasicMaterial({transparent : false , color : 0x3d3d3d});
var geome = new THREE.BoxGeometry(0.01, 1, 0.9);
var mater = new THREE.MeshPhongMaterial({color: 0xffffff,
    shininess:80,
    metal : true,
    wrapAround:true,
    metalness: 0,
    roughness: 1,
    thickness : 0,
    clearcoat: 1,
    transparent: true,
    emissive : 0xffe87c,
    emissiveIntensity : 0,
    lightMapIntensity : 1,
    transmission: .95,
    opacity: 0.4,
    reflectivity: 1
});
const textureLoader = new THREE.TextureLoader();
for (let i=1;i<81;i++){
    console.log("Images " , ArrayWorks[i])
    const texture = textureLoader.load(ArrayWorks[i]);
    const material2 = new THREE.MeshBasicMaterial({ map: texture });

    if(i<40){
    var geometry = new THREE.BoxGeometry(0.03, 1, 0.9) 
    var material = new THREE.MeshBasicMaterial({
        transparent : false,
        color: 0xffffff,
        metalness: 1,    
        roughness: 0,
        opacity : 1
    })
    var cube= new THREE.Mesh(geometry , material)
    scene.add(cube);
    cube.position.set(-1.760,0.336,position_z);
    material.needsUpdate= true
    // adding for the image part 
    var ImageMesh = new THREE.Mesh(geome2 , mater2);
    cube.add(ImageMesh);
    ImageMesh.needsUpdate= true
    ImageMesh.position.set(0.03,0, 0);


    ImageMesh.material = material2;
    // adding second frame  (mirror frame)...
    var mesh = new THREE.Mesh(geome , mater);
    cube.add(mesh);
    mater.needsUpdate = true
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(0.04,0, 0);
    position_z=position_z-1.1
  }
  if (i==40 || i==41){
    var geometry = new THREE.BoxGeometry(0.03, 1, 0.9) 
    var material = new THREE.MeshBasicMaterial({
        transparent : false,
        color: 0xffffff,
        metalness: 1,    
        roughness: 0,
        opacity : 1
    })
    var cube= new THREE.Mesh(geometry , material)
    scene.add(cube);
    cube.position.set(position_x,0.443,-29.8);
    material.needsUpdate= true
    cube.rotation.y=Math.PI/2
    // adding for the image part 
    var ImageMesh = new THREE.Mesh(geome2 , mater2);
    cube.add(ImageMesh);
    ImageMesh.needsUpdate= true
    ImageMesh.position.set(0.03,0, 0);

    ImageMesh.material = material2;
    // adding second frame  (mirror frame)...
    var mesh = new THREE.Mesh(geome , mater);
    cube.add(mesh);
    mater.needsUpdate = true
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(0.04,0, 0);
    position_x=position_x+2
  }
    if (i>41){
      var geometry = new THREE.BoxGeometry(0.03, 1, 0.9) 
      var material = new THREE.MeshBasicMaterial({
          transparent : false,
          color: 0xffffff,
          metalness: 1,    
          roughness: 0,
          opacity : 1
      })
      var cube= new THREE.Mesh(geometry , material)
      scene.add(cube);
      cube.position.set(1.760,0.336,position_z2);
      material.needsUpdate= true
      cube.rotation.y=Math.PI
        // adding for the image part 
      var ImageMesh = new THREE.Mesh(geome2 , mater2);
      cube.add(ImageMesh);
      ImageMesh.needsUpdate= true
      ImageMesh.position.set(0.03,0, 0);


      ImageMesh.material = material2;
      // adding second frame  (mirror frame)...
      var mesh = new THREE.Mesh(geome , mater);
      cube.add(mesh);
      mater.needsUpdate = true
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(0.04,0, 0);
      position_z2=position_z2-1.1
    }
}




// ADding Images for The Frames ------------------------------------------------------------------------------------------------------------------------>

// const textureLoader = new THREE.TextureLoader();
// if (SelectedGallery === 'artGallery-1'){

//   for (let i = 0; i < FramesArray.length; i++) {
//     const frame = FramesArray[i];
//     const image = ImageArray[i];
//     const imageName = image; 

//     const texture = textureLoader.load(image);
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     frame.material = material;


//     const raycaster = new THREE.Raycaster();
//     // renderer.domElement.addEventListener("mousemove",onmousemove);
//     // function onmousemove(event){
//     //   const mouse = new THREE.Vector2();
//     //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     //   raycaster.setFromCamera(mouse , cameraPersp);

//     //   const intersects = raycaster.intersectObject(frame, true);
//     //   for (let i = 0; i < intersects.length; i++) {
//     //   // Create the button and information icon
//     //     buttonGroup = new THREE.Group();
//     //     frame.add(buttonGroup);
//     //     const IconTexture = textureLoader.load(InformationButton)
//     //     const iconGeometry = new THREE.CircleGeometry(0.1, 32);
//     //     const iconMaterial = new THREE.MeshStandardMaterial({map:IconTexture});
//     //     iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
      
//     //     console.log("Heer")
//     //     buttonGroup.add(iconMesh);
//     //     buttonGroup.position.set(0.01, 0, 0.3);
//     //     buttonGroup.rotation.y=Math.PI/2
//     //   }
//     // }
//   }
// }
// if (SelectedGallery === 'artGallery-2'){

//   for (let i = 0; i < FramesArray.length; i++) {
//     const frame = FramesArray[i];
//     const image = ImageArray2[i];
//     const imageName = image; 

//     const texture = textureLoader.load(image);
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     frame.material = material;


//     const raycaster = new THREE.Raycaster();
//     // renderer.domElement.addEventListener("mousemove",onmousemove);
//     // function onmousemove(event){
//     //   const mouse = new THREE.Vector2();
//     //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     //   raycaster.setFromCamera(mouse , cameraPersp);

//     //   const intersects = raycaster.intersectObject(frame, true);
//     //   for (let i = 0; i < intersects.length; i++) {
//     //   // Create the button and information icon
//     //     buttonGroup = new THREE.Group();
//     //     frame.add(buttonGroup);
//     //     const IconTexture = textureLoader.load(InformationButton)
//     //     const iconGeometry = new THREE.CircleGeometry(0.1, 32);
//     //     const iconMaterial = new THREE.MeshStandardMaterial({map:IconTexture});
//     //     iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
      
//     //     console.log("Heer")
//     //     buttonGroup.add(iconMesh);
//     //     buttonGroup.position.set(0.01, 0, 0.3);
//     //     buttonGroup.rotation.y=Math.PI/2
//     //   }
//     // }
//   }
// }
// if (SelectedGallery === 'artGallery-3'){

//   for (let i = 0; i < FramesArray.length; i++) {
//     const frame = FramesArray[i];
//     const image = ImageArray3[i];
//     const imageName = image; 

//     const texture = textureLoader.load(image);
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     frame.material = material;


//     const raycaster = new THREE.Raycaster();
//     // renderer.domElement.addEventListener("mousemove",onmousemove);
//     // function onmousemove(event){
//     //   const mouse = new THREE.Vector2();
//     //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     //   raycaster.setFromCamera(mouse , cameraPersp);

//     //   const intersects = raycaster.intersectObject(frame, true);
//     //   for (let i = 0; i < intersects.length; i++) {
//     //   // Create the button and information icon
//     //     buttonGroup = new THREE.Group();
//     //     frame.add(buttonGroup);
//     //     const IconTexture = textureLoader.load(InformationButton)
//     //     const iconGeometry = new THREE.CircleGeometry(0.1, 32);
//     //     const iconMaterial = new THREE.MeshStandardMaterial({map:IconTexture});
//     //     iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
      
//     //     console.log("Heer")
//     //     buttonGroup.add(iconMesh);
//     //     buttonGroup.position.set(0.01, 0, 0.3);
//     //     buttonGroup.rotation.y=Math.PI/2
//     //   }
//     // }
//   }
// }
// if (SelectedGallery === 'artGallery-4'){

//   for (let i = 0; i < FramesArray.length; i++) {
//     const frame = FramesArray[i];
//     const image = ImageArray4[i];
//     const imageName = image; 

//     const texture = textureLoader.load(image);
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     frame.material = material;


//     const raycaster = new THREE.Raycaster();
//     // renderer.domElement.addEventListener("mousemove",onmousemove);
//     // function onmousemove(event){
//     //   const mouse = new THREE.Vector2();
//     //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     //   raycaster.setFromCamera(mouse , cameraPersp);

//     //   const intersects = raycaster.intersectObject(frame, true);
//     //   for (let i = 0; i < intersects.length; i++) {
//     //   // Create the button and information icon
//     //     buttonGroup = new THREE.Group();
//     //     frame.add(buttonGroup);
//     //     const IconTexture = textureLoader.load(InformationButton)
//     //     const iconGeometry = new THREE.CircleGeometry(0.1, 32);
//     //     const iconMaterial = new THREE.MeshStandardMaterial({map:IconTexture});
//     //     iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
      
//     //     console.log("Heer")
//     //     buttonGroup.add(iconMesh);
//     //     buttonGroup.position.set(0.01, 0, 0.3);
//     //     buttonGroup.rotation.y=Math.PI/2
//     //   }
//     // }
//   }
// }

// // POINTER CONTROLS ---------------------------------------------------------------------------------->
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();

const controlsPointer = new PointerLockControls(cameraPersp , renderer.domElement)
const blocker = document.getElementById("blocker");
const instructions = document.getElementById("instructions");

instructions.addEventListener("click" , function(){
  controlsPointer.lock();
  console.log(controlsPointer.lock());
  // updatePointerControls()
})
controlsPointer.addEventListener("lock" , function(){
  blocker.style.display = 'none';
  instructions.style.display = 'none';
})
controlsPointer.addEventListener("unlock" , function(){
  blocker.style.display = 'block';
  instructions.style.display = '';
})
scene.add(controlsPointer.getObject())

const onKeyDown = function(event){
  switch(event.code){
    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;
  }
}
const onKeyUp = function(event){
  switch(event.code){
    case 'ArrowUp':
    case 'KeyW':
      console.log('ArrowUp', event.code)
      moveForward = false;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;
  }
}
document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );
const time = performance.now();
const raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
console.log(controlsPointer.isLocked === true)
function updatePointerControls (){
if (controlsPointer.isLocked === false){
  console.log("HERE UPDATED ")
  raycaster.ray.origin.copy( controlsPointer.getObject().position );
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

  controlsPointer.moveRight( - velocity.x * delta );
  controlsPointer.moveForward( - velocity.z * delta );

  controlsPointer.getObject().position.y += ( velocity.y * delta ); // new behavior

  if ( controlsPointer.getObject().position.y < 10 ) {

    velocity.y = 0;
    controlsPointer.getObject().position.y = 10;

    canJump = true;

  }

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

    if(loadedModel){
      render();
    }
    function render() {
        requestAnimationFrame(render) 
        // updatePointerControls()
        renderer.render(scene, currentCamera);
      }
      
  }
Gallery()
}, [RenderRer]);

return null;
};

export default ArtWork;