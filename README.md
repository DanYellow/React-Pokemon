# React-Pokemon
A Wonderful Pokedex but this time with ReactJS

Inspired by : https://facebook.github.io/react/docs/thinking-in-react.html

# How to start

- In your terminal : npm i
- In your terminal : bower i
- In your terminal : run node server.js
- In your terminal : run gulp watch
- Go to localhost:9000
- Enjoy this wonderful project with Tseho mode !



Redux :

Action : Say something happened
Reducer : Say what's to do when something happen
Container


Module build failed: SyntaxError: Unexpected token (20:2)

  18 | 
  19 | render(
> 20 |   <div></div>,
     |   ^
  21 |   document.getElementById('root')
  22 | )


  http://fr.slideshare.net/nikgraf/react-redux-introduction


https://github.com/davezuko/react-redux-starter-kit/blob/master/src/components/Counter/Counter.js
https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/containers/CounterContainer.js
https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js 


en fait, si je prends une analogie avec MVC, le component, c'est la vue/template
le container, c'est le controller qui transmet des datas et des methodes a la vue
et le module, c'est juste un service comme un autre (AÂ part que laÂ , il est en redux)
les components sont rÃ©utilisables, si tu regardes ligne 23 du component, tu peux voir qu'il definit les proprietes dont il a besoin
et le container va faire creer un bridge pour ces props, tu peux les retrouver dans le container, lignes 16, 17 et 21 
