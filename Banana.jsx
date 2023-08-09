/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 banana.glb --transform 
Files: banana.glb [252.01KB] > banana-transformed.glb [37.39KB] (85%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/banana-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.banana.geometry} material={materials.Banana_High} />
    </group>
  )
}

useGLTF.preload('/banana-transformed.glb')