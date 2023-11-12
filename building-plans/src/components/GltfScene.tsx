import { onMount } from 'solid-js'
import { loadGltf } from '../utils'
import styles from './GltfScene.module.scss'

export interface GltfSceneProps {
  path: string
}

export function GltfScene({ path }: GltfSceneProps) {
  let canvas: HTMLCanvasElement

  onMount(() => {
    loadGltf(canvas, path)
  })

  return <canvas class={styles.canvas} ref={canvas!}></canvas>
}

export default GltfScene
