import { greeting } from "./greeting.js";
import "./styles.css";
import odinImage from "./odin.png";
import _ from 'lodash';
import Note from './note.xml';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

console.log(Note);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());
console.log(greeting);