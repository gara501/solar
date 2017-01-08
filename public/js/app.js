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
		0, 550, BABYLON.Vector3.Zero(),  scene);
    camera.attachControl(canvas);
    camera.upperRadiusLimit = 600;

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
    var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);

    var sunLight = new BABYLON.PointLight('sunLight', new BABYLON.Vector3.Zero(), scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture('images/sun.jpg', scene);
    sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    sun.material = sunMaterial;
    sunLight.intensity = 15;
    

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
      size: 0.488,
      position: {
        x: 75.7,
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
          speed: 0.006   
        }
      },
      pathMaterial: 'images/earth.jpg', 
      speed: 0.006
    };

    var mars = {
      name: 'mars',
      materialName: 'materialMars',
      resolution: 32,
      size: 0.67,
      position: {
        x: 92.7,
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
      size: 14.2,
      position: {
        x: 147.8,
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
      speed: 0.003
    };

    var uranus = {
      name: 'uranus',
      materialName: 'materialUranus',
      resolution: 32,
      size: 5.1,
      position: {
        x: 350,
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
      size: 4.9,
      position: {
        x: 520.4,
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

    var planetMercury = createPlanet(mercury);
    var planetVenus = createPlanet(venus);
    var planetEarth = createPlanet(earth);
    var planetMars = createPlanet(mars);
    var planetJupiter = createPlanet(jupiter);
    var planetSaturn = createPlanet(saturn);
    var planetUranus = createPlanet(uranus);
    var planetNeptune = createPlanet(neptune);
    
  
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
      for (let counter = 0; counter <= planets.length-1; counter++) {
        planets[counter].position.x = planets[counter].orbit.radius * Math.sin(planets[counter].orbit.angle);
        planets[counter].position.z = planets[counter].orbit.radius * Math.cos(planets[counter].orbit.angle);
        planets[counter].orbit.angle += planets[counter].orbit.speed;
        planets[counter].rotate(BABYLON.Axis.Y, 0.02, BABYLON.Space.LOCAL);
        sun.rotate(BABYLON.Axis.Y, 0.001, BABYLON.Space.LOCAL);
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