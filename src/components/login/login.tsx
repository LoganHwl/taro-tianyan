import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { LoginProps, LoginState } from './login.interface'
import './login.scss'

class Login extends Component<LoginProps,LoginState > {
  constructor(props: LoginProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:LoginProps = {}

  render() {
    return (
      <View className='fx-login-wrap'>

      </View>
    )
  }
}

export default Login
