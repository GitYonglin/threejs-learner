import { Camera, Mesh, PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Vector3, AxesHelper, GridHelper, BufferAttribute, MeshStandardMaterial, AmbientLight } from "three";

export class TEngine {
  private dom: HTMLElement;

  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(dom: HTMLElement) {
    console.log("TEngine");
    this.dom = dom;
    this.renderer = new WebGLRenderer();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000);

    this.camera.position.set(20,20,20);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.camera.up = new Vector3(0, 1, 0);
    // this.camera.position.z = 5;

    const box:Mesh = new Mesh(
      new BoxGeometry( 10, 10, 10 ),
      // new MeshBasicMaterial({ color: "red" })
      new MeshStandardMaterial({ color: 'rgb(255, 255, 0)'})
    );


    this.scene.add(
      box,
      new AmbientLight('rgb(255, 255, 255)', 1),
      new AxesHelper(500),
      new GridHelper(500, 20, 0x0000ff, 0x808080),
    );

    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    dom.appendChild(this.renderer.domElement);


    const animate= ()=> {

      box.position.x += -0.01;
      box.rotation.y += 0.001;
      this.camera.position.x -= 0.01;

      this.renderer.render( this.scene, this.camera );
      requestAnimationFrame(animate);
    }
    animate();
  }
}

export class TEngine2 {

  private dom: HTMLElement
  private renderer: WebGLRenderer

  private scene: Scene
  private camera: PerspectiveCamera

  constructor (dom: HTMLElement) {
    this.dom = dom
    this.renderer = new WebGLRenderer()
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)

    this.camera.position.set(20, 20 ,20)
    this.camera.lookAt(new Vector3(0, 0, 0))
    this.camera.up = new Vector3(0, 1, 0)

    dom.appendChild(this.renderer.domElement)
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

    const box: Mesh = new Mesh(
      new BoxGeometry(10, 10, 10),
      new MeshStandardMaterial({ color: 'rgb(255, 0, 0)'})
    )

    const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1)

    const axesHelper: AxesHelper = new AxesHelper(500)
    const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)')

    this.scene.add(box)
    this.scene.add(ambientLight)
    this.scene.add(axesHelper)
    this.scene.add(gridHelper)
    // this.renderer.setClearColor('rgb(255, 255, 255)')
    // this.renderer.clearColor()



    const renderFun = () => {
      box.position.x += -0.01
      box.rotation.y += 0.001
      this.camera.position.x += -0.01
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(renderFun)
    }

    renderFun()
  }
}
