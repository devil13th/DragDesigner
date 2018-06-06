import div from './components/div.js'
import button from './components/button.js'
import inputText from './components/inputText.js'
import table from './components/table.js'
import span from './components/span.js'
import tab from './components/tab.js'
const componentMap = new Map();
componentMap.set(div.id,div);
componentMap.set(button.id,button);
componentMap.set(inputText.id,inputText);
componentMap.set(table.id,table);
componentMap.set(span.id,span);
componentMap.set(tab.id,tab);

export default componentMap;