var APP_DATA = {
  "scenes": [
    {
      "id": "0-planta-baja",
      "name": "Planta baja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 707.5,
      "initialViewParameters": {
        "yaw": -0.0067128048153630715,
        "pitch": 0.0018552672739016174,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.1121049194581829,
          "pitch": 0.053153916383344324,
          "rotation": 0,
          "target": "1-primer-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2771198293629027,
          "pitch": 0.19889823683380925,
          "title": "Ficha tecnica",
          "text": "<div>Consulta los materiales y especificaciones haciendo &lt;a href=\"https://julianvaju14.wixsite.com/capsule-home/blank-2-1\" target=\"_blank\"&gt;clic aquí para ver la ficha técnica&lt;/a&gt;.</div><div><br></div>"
        },
        {
          "yaw": 0.5228475849896626,
          "pitch": 0.17095904460282796,
          "title": "Bienvenid@ a Capsule Home",
          "text": "Te presentamos un hábitat modular concebido para responder a las condiciones de climas extremos como el del desierto del Sahara.<div>Una propuesta que integra eficiencia energética y soluciones constructivas adapatadas al entorno.</div>"
        }
      ]
    },
    {
      "id": "1-primer-nivel",
      "name": "Primer nivel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 707.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.015489228770814378,
          "pitch": 0.05850650836948823,
          "rotation": 3.141592653589793,
          "target": "0-planta-baja"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9172144761316012,
          "pitch": 0.03778708664075481,
          "title": "Espacios interiores",
          "text": "Este sector se plantea como un espacio de pausa y recuperación, destinado al descanso dentro de un entorno exigente. También se incorpora un espacio destinado al desarrollo de actividades de investigación, observación y trabajo."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
