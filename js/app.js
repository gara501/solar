var BjsApp = BjsApp || {};
BjsApp.init = function() {
    var canvas = document.querySelector('canvas');
    
    // Init engine
    var engine = new BABYLON.Engine(canvas, true);

    // Init scene
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    
    // Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0,
		0, 40, BABYLON.Vector3.Zero(),  scene);
    camera.attachControl(canvas);
    camera.upperRadiusLimit = 50;

    // light environment
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
    light.intensity = 0.5;
    light.groundColor = new BABYLON.Color3(0, 0, 0);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    var sun = new BABYLON.Mesh.CreateSphere('sun', 32, 8, scene);
    sun.orbit = {
        radius: 0,
        speed: 0.001,
        angle: 0
      };
    var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);

    var sunLight = new BABYLON.PointLight('sunLight', new BABYLON.Vector3.Zero(), scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture('images/sun.jpg', scene);
    sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    sun.material = sunMaterial;
    sunLight.intensity = 10;
    

    // var mercury = new BABYLON.Mesh.CreateSphere('mercury', 32, .5, scene);
    // mercury.position.x = 7;
    // var mercuryMaterial = new BABYLON.StandardMaterial('mercuryMaterial', scene);
    // mercuryMaterial.diffuseTexture = new BABYLON.Texture('images/mercury.jpg', scene);
    // mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // mercury.material = mercuryMaterial;
    // mercury.orbit = {
    //   radius: mercury.position.x,
    //   speed: 0.01,
    //   angle: 0
    // };

    // var venus = new BABYLON.Mesh.CreateSphere('venus', 32, 1, scene);
    // venus.position.x = 9;
    // var venusMaterial = new BABYLON.StandardMaterial('venusMaterial', scene);
    // venusMaterial.diffuseTexture = new BABYLON.Texture('images/venus.jpg', scene);
    // venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // venus.material = venusMaterial;
    // venus.orbit = {
    //   radius: venus.position.x,
    //   speed: 0.01,
    //   angle: 0
    // };
    
    var planets = [];
    var mercury = {
      name: 'mercury',
      materialName: 'materialMercury',
      resolution: 32,
      size: 0.5,
      position: {
        x: 8,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/mercury.jpg', 
      speed: 0.008
    };

    var venus = {
      name: 'venus',
      materialName: 'materialVenus',
      resolution: 32,
      size: 1,
      position: {
        x: 10,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/venus.jpg', 
      speed: 0.007
    };

    var earth = {
      name: 'earth',
      materialName: 'materialEarth',
      resolution: 32,
      size: 1.5,
      position: {
        x: 12,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/earth.jpg', 
      speed: 0.006
    };

    var mars = {
      name: 'mars',
      materialName: 'materialMars',
      resolution: 32,
      size: 1.2,
      position: {
        x: 14,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/mars.jpg', 
      speed: 0.005
    };

    var jupiter = {
      name: 'jupiter',
      materialName: 'materialJupiter',
      resolution: 32,
      size: 4.5,
      position: {
        x: 18,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/jupiter.jpg', 
      speed: 0.004
    };

    var saturn = {
      name: 'saturn',
      materialName: 'materialSaturn',
      resolution: 32,
      size: 3,
      position: {
        x: 22,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/saturn.jpg', 
      speed: 0.003
    };

    var uranus = {
      name: 'uranus',
      materialName: 'materialUranus',
      resolution: 32,
      size: 1.2,
      position: {
        x: 26,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/uranus.jpg', 
      speed: 0.002
    };

    var neptune = {
      name: 'neptune',
      materialName: 'materialNeptune',
      resolution: 32,
      size: 1.1,
      position: {
        x: 30,
        y: 0,
        z: 0
      }, 
      pathMaterial: 'images/neptune.jpg', 
      speed: 0.001
    };

    var createPlanet = function(planet) {
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
      
      planets.push(internalPlanet);
      return internalPlanet;
    };

    var planetMercury = createPlanet(mercury);
    var planetVenus = createPlanet(venus);
    var planetEarth = createPlanet(earth);
    var planetMars = createPlanet(mars);
    var planetJupiter = createPlanet(jupiter);
    var planetSaturn = createPlanet(saturn);
    var planetUranus = createPlanet(uranus);
    var planetNeptune = createPlanet(neptune);
    console.log(planets);
    // Stars
  

    for (let counter = 300; counter >= 0; counter--) {
      var star = new BABYLON.Mesh.CreateSphere('star', 16, .2, scene );
      star.position.x = Math.floor((Math.random() * 200) + 1)
      star.position.y = Math.floor((Math.random() * 200) + 1)
      star.position.z = Math.floor((Math.random() * 200) + 1)
    }

    for (let counter = 300; counter >= 0; counter--) {
      var star = new BABYLON.Mesh.CreateSphere('star', 16, .1, scene );
      star.position.x = Math.floor((Math.random() * -200) + 1)
      star.position.y = Math.floor((Math.random() * -200) + 1)
      star.position.z = Math.floor((Math.random() * -200) + 1)
    }

    // Skybox
    // var skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene);
    // var skyboxMaterial = new BABYLON.StandardMaterial('skyboxmat', scene);
    // skyboxMaterial.backFaceCulling = false;
    
    // SkyboxCamera
    // skybox.infiniteDistance = true;
    // skybox.material = skyboxMaterial;

    // skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);

    // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('images/sky', scene);
    // skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    // Animations
    scene.beforeRender = function() {
      for (let counter = 0; counter <= planets.length-1; counter++) {
        planets[counter].position.x = planets[counter].orbit.radius * Math.sin(planets[counter].orbit.angle);
        planets[counter].position.z = planets[counter].orbit.radius * Math.cos(planets[counter].orbit.angle);
        planets[counter].orbit.angle += planets[counter].orbit.speed;
        planets[counter].rotation.z += Math.PI/4 * planets[counter].orbit.speed;
        sun.rotation.z += Math.PI/4 * sun.orbit.speed;
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