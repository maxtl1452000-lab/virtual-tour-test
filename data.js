var APP_DATA = {
  "scenes": [
    {
      "id": "0-gamrig_19k_hbg",
      "name": "gamrig_19k_hbg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7448830323783007,
          "pitch": 0.3598006548266248,
          "rotation": 14.137166941154074,
          "target": "1-forest_slope_16k_hbg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-forest_slope_16k_hbg",
      "name": "forest_slope_16k_hbg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.10223573030824085,
        "pitch": 0.05356090940022362,
        "fov": 1.4320430490326637
      },
      "linkHotspots": [
        {
          "yaw": -0.31924566532346077,
          "pitch": 0.26787652483443125,
          "rotation": 4.71238898038469,
          "target": "0-gamrig_19k_hbg"
        },
        {
          "yaw": 1.2500956686968472,
          "pitch": 0.1718620802101256,
          "rotation": 1.5707963267948966,
          "target": "2-wide_street_01_16k_hbg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23735426960938355,
          "pitch": 0.18906769654322986,
          "title": "Test A",
          "text": "Info A"
        }
      ]
    },
    {
      "id": "2-wide_street_01_16k_hbg",
      "name": "wide_street_01_16k_hbg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.8581533404341304,
        "pitch": -0.14838060754120974,
        "fov": 1.4320430490326637
      },
      "linkHotspots": [
        {
          "yaw": -0.8324023459438443,
          "pitch": 0.06208688351183511,
          "rotation": 4.71238898038469,
          "target": "0-gamrig_19k_hbg"
        },
        {
          "yaw": 2.3141210633358638,
          "pitch": 0.022149807594594506,
          "rotation": 1.5707963267948966,
          "target": "1-forest_slope_16k_hbg"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
