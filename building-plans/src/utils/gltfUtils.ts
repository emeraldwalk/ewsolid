import('@babylonjs/core/Debug/debugLayer')
import('@babylonjs/inspector')
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
} from '@babylonjs/core'
import '@babylonjs/loaders'

const BASE_URL = import.meta.env.BASE_URL

export function loadGltf(canvasEl: HTMLCanvasElement, gltfPath: string) {
  // initialize babylon scene and engine
  const engine = new Engine(canvasEl, true)
  const scene = new Scene(engine)

  SceneLoader.Append(
    `${BASE_URL}scenes/`,
    gltfPath,
    scene,
    undefined,
    undefined,
    undefined,
    '.glb',
  )

  const camera: ArcRotateCamera = new ArcRotateCamera(
    'Camera',
    Math.PI * -0.35,
    Math.PI * 0.45,
    4.5,
    Vector3.Zero(),
    scene,
  )
  camera.attachControl(canvasEl, true)

  const light1: HemisphericLight = new HemisphericLight(
    'light1',
    new Vector3(1, 1, 0),
    scene,
  )

  // const sphere: Mesh = MeshBuilder.CreateSphere(
  //   'sphere',
  //   { diameter: 1 },
  //   scene,
  // )

  window.addEventListener('resize', function () {
    engine.resize()
  })

  // hide/show the Inspector
  window.addEventListener('keydown', (ev) => {
    // Shift+Ctrl+Alt+I
    if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide()
      } else {
        scene.debugLayer.show()
      }
    }
  })

  // run the main render loop
  engine.runRenderLoop(() => {
    scene.render()
  })
}
