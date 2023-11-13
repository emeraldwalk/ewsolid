import { onMount } from 'solid-js'
import { loadGltf } from '../utils'
import styles from './GltfScene.module.scss'
import { useParams } from 'solid-start'

export function GltfScene() {
  let canvas: HTMLCanvasElement

  const params = useParams<{ id: string }>()

  onMount(() => {
    loadGltf(canvas, `${params.id}.glb`)
  })

  return <canvas class={styles.canvas} ref={canvas!}></canvas>
}

export default GltfScene
