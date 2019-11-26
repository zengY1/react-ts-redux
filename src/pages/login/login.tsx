import * as React from 'react'
import { Button, Form, Input, message } from 'antd'
import { connect } from 'react-redux';
import { getLogin } from './action';
import { bindActionCreators } from "redux";
import './login.less'
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
class Login extends React.Component<IProps>{
  handleLogin = () => {
    const { getFieldsValue } = this.props.form
    const data = getFieldsValue()
    if (data.userName == '') {
      message.error('手机号不能为空')
      return
    } else if (data.password == '') {
      message.error('密码不能为空')
      return
    } else {
      this.props.getLogin({
        'password': data.password,
        'username': data.userName
      })
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='form'>
        <div className='logo'>
          <h2>管理系统模板</h2>
        </div>
        <Form>
          <FormItem label="手机号:" {...formItemLayout}>
            {getFieldDecorator("userName", {
              rules: [
                {
                  len: 11,
                  message: "请输入11位的手机号!"
                },
                {
                  pattern: "^[0-9]*$",
                  message: "手机号只能为数字!"
                }
              ]
            })(
              <Input
                placeholder="请输入手机号"
                allowClear
                maxLength={11}
              />
            )}
          </FormItem>
          <FormItem label="密码" {...formItemLayout}>
            {getFieldDecorator("password", {
              rules: [
                {
                  min: 6,
                  max: 20,
                  message: "请输入6-20位的密码!"
                }
              ]
            })(
              <Input
                type="password"
                placeholder="请输入密码"
                minLength={6}
                maxLength={20}
                allowClear
              />
            )}
          </FormItem>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              onClick={this.handleLogin}
              style={{ width: "200px" }}
            >
              登陆
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
let mapStateToProps = (state: any) => {
  return {
    loginStore: state.loginStore
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    getLogin: getLogin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))