import {
  StackNavigator,
} from 'react-navigation'
import Typepography from '../screen/demo/Typography'
import Main from '../screen/demo/Main'
import Component from '../screen/demo/Components'

const Router = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main'
    }
  },
  Typepography: {
    screen: Typepography,
    navigationOptions: {
      title: 'Typepography'
    }
  },
  Component: {
    screen: Component,
    navigationOptions: {
      title: 'Component'
    }
  },
  
})
export default Router
