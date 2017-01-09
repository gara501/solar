var BjsApp = BjsApp || {};
BjsApp.init = function() {
  var play = 1;
  var createText = function (scene) {
    var buttonRect = new BABYLON.Rectangle2D(
      { parent: canvas, id: "button", x: 800, y: 420, width: 200, height: 80, fill: "#0040F0FF", 
      roundRadius: 10, 
      children: 
      [
        new BABYLON.Text2D("Stop Animation", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});
    var buttonCamera = new BABYLON.Rectangle2D(
      { parent: canvas, id: "button", x: 800, y: 330, width: 200, height: 80, fill: "#0040F0FF", 
      roundRadius: 10, 
      children: 
      [
        new BABYLON.Text2D("See outside", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bmercury = new BABYLON.Ellipse2D(
      { parent: canvas, id: "mercuryButton", x: 25, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.9, .2, .2, 1)),
      children: 
      [
        new BABYLON.Text2D("Mercury", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]}); 

    var bvenus = new BABYLON.Ellipse2D(
      { parent: canvas, id: "venusButton", x: 130, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.8, .3, .3, 1)),
      children: 
      [
        new BABYLON.Text2D("Venus", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});   
    
    var bearth = new BABYLON.Ellipse2D(
      { parent: canvas, id: "earthButton", x: 235, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.2, .2, .7, 1)),
      children: 
      [
        new BABYLON.Text2D("Earth", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bmars = new BABYLON.Ellipse2D(
      { parent: canvas, id: "marsButton", x: 340, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.8, .2, .2, 1)),
      children: 
      [
        new BABYLON.Text2D("Mars", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bjupiter = new BABYLON.Ellipse2D(
      { parent: canvas, id: "jupiterButton", x: 445, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.5, .5, .5, 1)),
      children: 
      [
        new BABYLON.Text2D("Jupiter", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bsaturn = new BABYLON.Ellipse2D(
      { parent: canvas, id: "saturnButton", x: 550, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.7, .5, .4, 1)),
      children: 
      [
        new BABYLON.Text2D("Saturn", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var buranus = new BABYLON.Ellipse2D(
      { parent: canvas, id: "uranusButton", x: 655, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.2, .5, .9, 1)),
      children: 
      [
        new BABYLON.Text2D("Uranus", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bneptune = new BABYLON.Ellipse2D(
      { parent: canvas, id: "neptuneButton", x: 760, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.2, .5, .8, 1)),
      children: 
      [
        new BABYLON.Text2D("Neptune", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});

    var bsun = new BABYLON.Ellipse2D(
      { parent: canvas, id: "sunButton", x: 865, y: 80, width: 100, height: 100, subdivisions: 32, 
      fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(.9, .0, .0, 1)),
      children: 
      [
        new BABYLON.Text2D("Sun", { fontName: "18pt Arial", marginAlignment: "h: center, v: center" })
      ]});
    
    var canvas = new BABYLON.ScreenSpaceCanvas2D(scene, {
      id: "ScreenCanvas",
      size: new BABYLON.Size(1000, 500),
      backgroundFill: "#4040408F",
      backgroundRoundRadius: 10,
      children: [
        new BABYLON.Text2D('Solar System', {
          id: "name",
          x: 30, y: 450,
          fontName: "20pt Arial",
        }),
        new BABYLON.Text2D('Size: 4.568 billion years', {
          id: "size",
          x: 30, y: 400,
          fontName: "20pt Arial",
        }),
        new BABYLON.Text2D('Distance to Kulper Cliff: 50 AU ', {
          id: "distance",
          x: 30, y: 350,
          fontName: "20pt Arial",
        }),
        new BABYLON.Text2D('Satellites: 470 ', {
          id: "rotation",
          x: 30, y: 300,
          fontName: "20pt Arial",
        }),
        new BABYLON.Text2D('Orbital Speed: 220 km/s ', {
          id: "orbit",
          x: 30, y: 250,
          fontName: "20pt Arial",
        }),
        new BABYLON.Text2D('Orbital Period: 225–250 Myr ', {
          id: "moons",
          x: 30, y: 200,
          fontName: "20pt Arial",
        }),
        bmercury,
        bvenus,
        bearth,
        bmars,
        bjupiter,
        bsaturn,
        bneptune,
        buranus,
        bsun,
        buttonRect,
        buttonCamera
      ]
    });
    // Button click event
    buttonRect.pointerEventObservable.add(function (d, s) {
      if (play === 1) {
        play = 0;
        buttonRect.children[0].text = 'Start Animation';          
      } else {
        play = 1;
        buttonRect.children[0].text = 'Stop Animation';
      }
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    buttonCamera.pointerEventObservable.add(function (d, s) {
        setCameraOnPlanet(sun, 600);
        canvas.children[0].text = 'Name: Solar System';
        canvas.children[1].text = 'Size: 4.568 billion years';
        canvas.children[2].text = 'Distance: Distance to Kulper Cliff: 50 AU';
        canvas.children[3].text = 'Satellites: 470';
        canvas.children[4].text = 'Orbital Speed: 220 km/s';
        canvas.children[5].text = 'Orbital Period: 225–250 Myr';
    }, BABYLON.PrimitivePointerInfo.PointerUp);
    
    // Planets Buttons Events
    bmercury.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetMercury, 1);
      setInfo(mercury);
    }, BABYLON.PrimitivePointerInfo.PointerUp);
    
    bvenus.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetVenus, 2);
      setInfo(venus);
    }, BABYLON.PrimitivePointerInfo.PointerUp);
    
    bearth.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetEarth, 2);
      setInfo(earth);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    bmars.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetMars, 1);
      setInfo(mars);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    bjupiter.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetJupiter, 20);
      setInfo(jupiter);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    bsaturn.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetSaturn, 15);
      setInfo(saturn);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    buranus.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetUranus, 8);
      setInfo(uranus);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    bneptune.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(planetNeptune, 8);
      setInfo(neptune);
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    bsun.pointerEventObservable.add(function (d, s) {
      setCameraOnPlanet(sun, 100);
      canvas.children[0].text = 'Name: ' + sun.info.name;
      canvas.children[1].text = 'Size: ' + sun.info.size;
      canvas.children[2].text = 'Distance: ' + sun.info.distance;
      canvas.children[3].text = 'Mass: ' + sun.info.mass;
      canvas.children[4].text = 'Temperature: ' + sun.info.temperature;
      canvas.children[5].text = 'Age: ' + sun.info.age;
    }, BABYLON.PrimitivePointerInfo.PointerUp);

    function setInfo(planet) {
      canvas.children[0].text = 'Name: ' + planet.info.name;
      canvas.children[1].text = 'Size: ' + planet.info.size;
      canvas.children[2].text = 'Distance: ' + planet.info.distance;
      canvas.children[3].text = 'Rotation: ' + planet.info.rotation;
      canvas.children[4].text = 'Orbit: ' + planet.info.orbit;
      canvas.children[5].text = 'Moons: ' + planet.info.moons;
    }
    
    return canvas;
  };

  var canvas = document.querySelector('canvas');
  
  // Init engine
  var engine = new BABYLON.Engine(canvas, true);

  // Init scene
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0, 0, 0);
  var canvasText = createText(scene, 'Solar System');

  // Camera
  var camera = new BABYLON.ArcRotateCamera("Camera", 0,
  0, 0, BABYLON.Vector3.Zero(), scene);
  camera.setPosition(new BABYLON.Vector3(0, 15, 600));
  camera.attachControl(canvas);
  // camera.upperRadiusLimit = 2000;
  // Set camera on planet
  function setCameraOnPlanet(planet, distance) {
    camera.setTarget(planet);
    camera.radius = distance;
  }
  // light environment
  var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
  light.intensity = 0.5;
  light.groundColor = new BABYLON.Color3(0, 0, 0);
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var sun = new BABYLON.Mesh.CreateSphere('sun', 32, 69.57, scene);
  sun.orbit = {
    radius: 0,
    speed: 0.001,
    angle: 0
  };
  sun.info = {
    name: 'Sun',
    size: '695.700 km',
    distance: '149,600.000 km',
    mass: '1.989e30 kg',
    temperature: '5800 K (surface) 15,600,000 K (core)',
    age: '≈ 4.6 billion years'
  };
  var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);

  var sunLight = new BABYLON.PointLight('sunLight', new BABYLON.Vector3.Zero(), scene);
  sunMaterial.emissiveTexture = new BABYLON.Texture('images/sun.jpg', scene);
  sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  sun.material = sunMaterial;
  sunLight.intensity = 15;

  // Actions
  // sun.actionManager = new BABYLON.ActionManager(scene);
  // var onpickAction = new BABYLON.ExecuteCodeAction(
  // BABYLON.ActionManager.OnPickTrigger,
  // function(evt) {
  //   if (evt.meshUnderPointer) {
  //     // Find the clicked mesh
  //     var meshClicked = evt.meshUnderPointer;
  //     camera.radius = 100;
  //     // Update the ammo label
  //     canvasText.children[0].text = 'Name: ' + sun.info.name;
  //     canvasText.children[1].text = 'Size: ' + sun.info.size;
  //     canvasText.children[2].text = 'Distance: ' + sun.info.distance;
  //     canvasText.children[3].text = 'Mass: ' + sun.info.mass;
  //     canvasText.children[4].text = 'Temperature: ' + sun.info.temperature;
  //     canvasText.children[5].text = 'Age: ' + sun.info.age;
  //   }
  // });
  // sun.actionManager.registerAction(onpickAction);
  
  // Planets Objects
  var planets = [];
  var mercury = {
    name: 'mercury',
    materialName: 'materialMercury',
    info: {
      name: 'Mercury',
      size: '4.880 Km',
      distance: '57.910.000 Km',
      rotation: '58,6 days',
      orbit: '87,97 days',
      moons: '0'
    },
    resolution: 32,
    size: 0.488,
    position: {
      x: 75.7,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/mercury.jpg', 
    speed: 0.009
  };

  var venus = {
    name: 'venus',
    materialName: 'materialVenus',
    info: {
      name: 'Venus',
      size: '12.104 Km',
      distance: '108.200.000 Km',
      rotation: '243 days',
      orbit: '224,7 days',
      moons: '0'
    },
    resolution: 32,
    size: 1.21,
    position: {
      x: 80.8,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/venus.jpg', 
    speed: 0.007
  };

  var earth = {
    name: 'earth',
    materialName: 'materialEarth',
    info: {
      name: 'Earth',
      size: '12.756 Km',
      distance: '149.600.000 Km',
      rotation: '23.93 hours',
      orbit: '365.256 days',
      moons: '1'
    },
    resolution: 32,
    size: 1.27,
    position: {
      x: 84.9,
      y: 0,
      z: 0
    },
    moons: {
      moon: {
        name: 'moon',
        materialName: 'materialMoon',
        resolution: 32,
        size: 0.2,
        position: {
          x: 2,
          y: 0,
          z: 0
        },
        pathMaterial: 'images/moon.jpg', 
        speed: 0.01   
      }
    },
    pathMaterial: 'images/earth.jpg', 
    speed: 0.005
  };

  var mars = {
    name: 'mars',
    materialName: 'materialMars',
    info: {
      name: 'Mars',
      size: '6.794 Km',
      distance: '227.940.000 Km',
      rotation: '24.62 hours',
      orbit: '686.98 days',
      moons: '0'
    },
    resolution: 32,
    size: 0.67,
    position: {
      x: 92.7,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/mars.jpg', 
    speed: 0.003
  };

  var jupiter = {
    name: 'jupiter',
    materialName: 'materialJupiter',
    info: {
      name: 'Jupiter',
      size: '142.984 Km',
      distance: '778.330.000 Km',
      rotation: '9.84 hours',
      orbit: '11.86 years',
      moons: '16'
    },
    resolution: 32,
    size: 14.2,
    position: {
      x: 147.8,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/jupiter.jpg', 
    speed: 0.001
  };

  var saturn = {
    name: 'saturn',
    materialName: 'materialSaturn',
    info: {
      name: 'Saturn',
      size: '108.728 Km',
      distance: '1.429.400.000 Km',
      rotation: '10.23 hours',
      orbit: '29.46 years',
      moons: '18'
    },
    resolution: 32,
    size: 10.8,
    position: {
      x: 212.9,
      y: 0,
      z: 0
    },
    disc: {
      createDisc: function(parentPlanet) {
        var torus = BABYLON.Mesh.CreateTorus("torus", 10.8, 6, 64, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        var discMaterial = new BABYLON.StandardMaterial('discMaterial', scene);
        discMaterial.diffuseTexture = new BABYLON.Texture('images/saturnmap.jpg', scene);
        discMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        torus.position.z = 0;
        torus.scaling.y = 0.1;
        torus.parent = parentPlanet;
        torus.material = discMaterial;
      }
    },
    pathMaterial: 'images/saturn.jpg', 
    speed: 0.0009
  };

  var uranus = {
    name: 'uranus',
    materialName: 'materialUranus',
    info: {
      name: 'Uranus',
      size: '51.118 Km',
      distance: '2.870.990.000 Km',
      rotation: '17.9 hours',
      orbit: '84.01 years',
      moons: '15'
    },
    resolution: 32,
    size: 5.1,
    position: {
      x: 350,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/uranus.jpg', 
    speed: 0.0007
  };

  var neptune = {
    name: 'neptune',
    materialName: 'materialNeptune',
    info: {
      name: 'Neptune',
      size: '49.532 Km',
      distance: '4.504.300.000 Km',
      rotation: '16.11 hours',
      orbit: '164.8 years',
      moons: '8'
    },
    resolution: 32,
    size: 4.9,
    position: {
      x: 520.4,
      y: 0,
      z: 0
    }, 
    pathMaterial: 'images/neptune.jpg', 
    speed: 0.0005
  };

  var planetMercury = createPlanet(mercury);
  var planetVenus = createPlanet(venus);
  var planetEarth = createPlanet(earth);
  var planetMars = createPlanet(mars);
  var planetJupiter = createPlanet(jupiter);
  var planetSaturn = createPlanet(saturn);
  var planetUranus = createPlanet(uranus);
  var planetNeptune = createPlanet(neptune);

  // Planet Creation
  function createPlanet(planet) {
    var internalPlanet = new BABYLON.Mesh.CreateSphere(planet.name, planet.resolution, planet.size, scene);
    internalPlanet.position.x = planet.position.x;
    internalPlanet.position.y = planet.position.y;
    internalPlanet.position.z = planet.position.z;

    var internalPlanetMaterial = new BABYLON.StandardMaterial(planet.materialName, scene);
    internalPlanetMaterial.diffuseTexture = new BABYLON.Texture(planet.pathMaterial, scene);
    internalPlanetMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    internalPlanet.material = internalPlanetMaterial;
    internalPlanet.orbit = {
      radius: internalPlanet.position.x,
      speed: planet.speed,
      angle: 0
    };
    
    // Discs around planets
    if (planet.disc) {
      planet.disc.createDisc(internalPlanet);
    }

    // Planet Moons
    if (planet.moons) {
      for (let prop in planet.moons) {
        var moon = planet.moons[prop];
        var planetMoon = new BABYLON.Mesh.CreateSphere(moon.name, moon.resolution, moon.size, scene);
        planetMoon.parent = internalPlanet;
        planetMoon.position.x = moon.position.x;
        planetMoon.position.y = moon.position.y;
        planetMoon.position.z = moon.position.z;
        var moonMaterial = new BABYLON.StandardMaterial(moon.materialName, scene);
        moonMaterial.diffuseTexture = new BABYLON.Texture(moon.pathMaterial, scene);
        moonMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        planetMoon.material = moonMaterial;
      }
    }
    
    planets.push(internalPlanet);
    return internalPlanet;
  };

  // Random Stars
  for (let counter = 0; counter <= 200; counter++) {
    var star = new BABYLON.Mesh.CreateSphere('star', 16, .2, scene );
    star.position.x = parseInt(Math.random()*29)*20;
    star.position.y = parseInt(Math.random()*29)*20;
    star.position.z = parseInt(Math.random()*29)*20;
  }

  for (let counter = 0; counter <= 200; counter++) {
    var star = new BABYLON.Mesh.CreateSphere('star', 16, .2, scene );
    star.position.x = parseInt(Math.random()*29)*-20;
    star.position.y = parseInt(Math.random()*29)*-20;
    star.position.z = parseInt(Math.random()*29)*-20;
  }    

  // Animations
  scene.beforeRender = function() {
    if (play != 0) {
      for (let counter = 0; counter <= planets.length-1; counter++) {
        planets[counter].position.x = planets[counter].orbit.radius * Math.sin(planets[counter].orbit.angle);
        planets[counter].position.z = planets[counter].orbit.radius * Math.cos(planets[counter].orbit.angle);
        planets[counter].orbit.angle += planets[counter].orbit.speed;
        planets[counter].rotate(BABYLON.Axis.Y, 0.02, BABYLON.Space.LOCAL);
        sun.rotate(BABYLON.Axis.Y, 0.001, BABYLON.Space.LOCAL);
      }
    }
  };

  // Render Scene
  engine.runRenderLoop(function() {
      scene.render();
  });
  
  window.addEventListener('resize', function() {
      engine.resize();
  });

}