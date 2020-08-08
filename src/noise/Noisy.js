import React, { Suspense, useState, useEffect } from 'react';
import { Color } from 'three';
import { Canvas } from 'react-three-fiber';
import Effects from './Effects/Effect';



export default function App({color}) {
    
    // useEffect(() => {
    //     if (currentLocation === "/") setColor("#d1d5d6");
    //     if (currentLocation === "/bustedfingerz") setColor("#8b0000");
    //     console.log(color)
    // }, [setColor, currentLocation])
    return (


        <Canvas
            camera={{ fov: 80, far: 1000, position: [0, 0, 100] }}
            onCreated={({ gl }) => {
                gl.setClearColor(new Color(color));
            }}
        >
            {
                <Suspense fallback={null}>
                    <Effects />
                </Suspense>
            }

        </Canvas>

    );

}
