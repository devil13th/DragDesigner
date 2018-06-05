import div from './components/div.js'
import button from './components/button.js'

const componentMap = new Map();
componentMap.set(div.id,div);
componentMap.set(button.id,button);

export default componentMap;