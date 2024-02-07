import React from "react";
import purpleBg from "../components/bg/pinkBlue.png";
import blueBg from "../components/bg/bluebg.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import bcp10 from "../components/players/bcp10.glb"
import { useGLTF } from "@react-three/drei";
import card from "../components/images/Card1.png"

function Meta() {
  const { nodes, materials } = useGLTF(bcp10);
  return (
    <div className="first-section max-w-[1880px] mx-auto ">
      <div>
        <img
          className="w-[40rem] absolute pinkBlueBg  right-[0] top-96"
          src={blueBg}
          alt="bg1"
        />
      </div>
      <div>
        <img
          className="w-[60rem] pinkBlueBg absolute right-0"
          src={purpleBg}
          alt="bg1"
        />
      </div>
      <div className="">
        <div className="relative top-24">
          <div className="flex justify-around max-sm:flex max-sm:flex-col max-sm:justify-normal max-sm:gap-24 max-sm:p-4">
            <div className="card-side">
              <img className="relative z-10 mx-auto" src={card} alt="card sample" />
              {/* <Canvas style={{height:"400px", width:"300px",position:"relative", zIndex:1}} camera={{ fov: 64,getViewBounds:50 ,position: [-2, 2, 0] }}>
                  <ambientLight intensity={5} />
                  <OrbitControls enableZoom={true} />
                  <group >
                    <group
                      position={[-0.025, 1.092, 0.375]}
                      rotation={[1.482, 0, 0]}
                      scale={[0.559, 2, 1]}
                    >
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_1.geometry}
                        material={materials.Front}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_2.geometry}
                        material={materials.Back}
                      />
                    </group>
                  </group>
      
                </Canvas> */}

              <div className="">
                <img
                  className="absolute top-60 w-[55rem] left-[-70px]"
                  src={purpleBg}
                  alt=""
                />
              </div>
              {/* <h1 className="font-superLagend max-sm:text-center card-title text-2xl ">
                Cheetah Baby
              </h1> */}
              
            </div>

            <div className="text-side">
              <h1 className="text-2 max-sm:p-4 gap-4 font-superLagend flex-col items-center text-4xl max-sm:text-xl">
                <span>The Metaverse's </span>
                <span>Game-Changer</span>
              </h1>
              <p className="w-[50rem] max-sm:w-full mt-6 max-sm:mt-4 max-sm:text-xl max-sm:p-4 leading-relaxed max-sm:leading-loose text-2xl font-quantico">
                Welcome to SuperWeaves, the first application built by DWØPE.
                This super app will revolutionize the way you engage with Web3.
                Our platform combines trading, betting, and social gaming in one
                seamless experience. Unveil a world where your digital actions
                have real-world results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meta;
