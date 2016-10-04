import aframe from 'aframe';
import extras from 'aframe-extras';
import keyboardControls from 'aframe-keyboard-controls';
import clickDragComponent from '../src/index';

extras.physics.registerAll(aframe);
aframe.registerComponent('keyboard-controls', keyboardControls);
clickDragComponent(aframe);
