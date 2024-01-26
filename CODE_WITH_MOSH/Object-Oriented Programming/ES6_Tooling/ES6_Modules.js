// We're importing Circle class from Modules.js
// Step1: use the export keyword on the module
// Step2: Import module into work dir using import
// Insert<script type ="module"></script> in html so that the browser understands

import {Circle} from'./Modules.js';

const c = new Circle(10);

c.draw()