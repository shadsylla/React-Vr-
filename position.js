import ... Model,  from 'react-vr'; 


// We export six images for the skybox;
//We need to remove the absolute paths to the images so our .obj file can find them. 
//Since we are going to place both files in the same directory, the .mtl file should look

import { StrictMode } from "react";

  

// This is a model of an physical object and and .mtl file 
// this is written after I import model from react vr

<Model 
source={{ obj: assets("nameofobject.obj"), mtl: assets("Nameoffile.mtl")}};
lit={true}
/> 
// the lit atribuite
// specifies the object in "mesh" will 
//work with lights from "Phong Sahding"

// lightning in React Vr 
//React VR has four types of light:
// AmbientLight that represents an omni-directional, fixed-intensity and fixed-color light source that affects all objects in the scene equally.
// DirectionalLight that represents a light source which illuminates all objects equally from a given direction.
// PointLight that represents a light originates from a single point, and spreads outward in all directions.
// SpotLight that represents a light originates from a single point, and spreads outward in a cone.


