# aframe-click-drag-component

A Click & Drag component for [A-Frame](https://aframe.io).

Entities with the `click-drag` component can be click and dragged around the 3D
scene. Even works whle the camera is moving!

_Note: entities are not positioned correctly when the camera is rotated._

### Installation

#### Browser

Use directly from the unpkg CDN:

```html
<head>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-click-drag-component"></script>
  <script>
    registerAframeClickDragComponent(window.AFRAME);
  </script>
</head>

<body>
  <a-scene>
    <a-sphere click-drag position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-camera look-controls-enabled="false"></a-camera>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-click-drag-component
```

Then register and use.

```javascript
import aframe from 'aframe';
import registerClickDrag from 'aframe-click-drag-component';
registerClickDrag(aframe);
```
