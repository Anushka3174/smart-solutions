import React, {Component} from 'react';
import {Button, Card, Checkbox, Form, Icon, Input, Layout, Menu, Breadcrumb} from 'antd';

const FormItem = Form.Item;
const { Header } = Layout;
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.history.push({
                    pathname:"/companies",
                    state: {userDetail: values}
                })

            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div >
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                </Menu>
            </Header>


                <Card className="login-div" style={{width: 300}}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('fullName', {
                                rules: [{required: true, message: 'Please input your Full Name!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Fullname"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('phoneNumber', {
                                rules: [{required: true, message: 'Please input your phoneNumber!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="phoneNumber"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;