import div from './components/div.js'
import button from './components/button.js'
import inputText from './components/inputText.js'
import table from './components/table.js'
import span from './components/span.js'
import tab from './components/tab.js'
import search from './components/search.js'
import alert from './components/alert.js'
import layout from './components/layout.js'
import nav from './components/nav.js'
import inline from './components/inline.js'
import panel from './components/panel.js'
import hr from './components/hr.js'
import list from './components/list.js'

const componentMap = new Map();

componentMap.set(div.id,div);
componentMap.set(button.id,button);
componentMap.set(inputText.id,inputText);
componentMap.set(table.id,table);
componentMap.set(span.id,span);
componentMap.set(tab.id,tab);
componentMap.set(search.id,search);
componentMap.set(alert.id,alert);
componentMap.set(layout.id,layout);
componentMap.set(nav.id,nav);
componentMap.set(inline.id,inline);
componentMap.set(panel.id,panel);
componentMap.set(hr.id,hr);
componentMap.set(list.id,list);

export default componentMap;