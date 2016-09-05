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

Action : Says something happened
Reducer : Says what's to do when something happen
Container : Binds datas for component (container is a controller in MVC)
Component : Binds datas for component (component is a view in MVC)


connect(mapStateToProps, mapDispatchToProps) : give state to the function au lieu


# Links
- http://fr.slideshare.net/nikgraf/react-redux-introduction
- https://facebook.github.io/react/docs/more-about-refs.html
- https://www.reddit.com/r/reactjs/comments/4npzq5/confused_redux_or_mobx/d46k2bl
- http://blog.krawaller.se/posts/a-react-redux-example-app/
- https://speakerdeck.com/vjeux/react-css-in-js
- http://postcss.parts


https://github.com/davezuko/react-redux-starter-kit/blob/master/src/components/Counter/Counter.js
https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/containers/CounterContainer.js
https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js 


http://redux.js.org/docs/advanced/ExampleRedditAPI.html

en fait, si je prends une analogie avec MVC, le component, c'est la vue/template
le container, c'est le controller qui transmet des datas et des methodes a la vue
et le module, c'est juste un service comme un autre (AÂ part que laÂ , il est en redux)
les components sont rÃ©utilisables, si tu regardes ligne 23 du component, tu peux voir qu'il definit les proprietes dont il a besoin
et le container va faire creer un bridge pour ces props, tu peux les retrouver dans le container, lignes 16, 17 et 21 





