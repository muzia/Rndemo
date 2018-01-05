import React, {Component} from 'react';
import {
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View,
    Alert,
} from 'react-native';
export default class UselessTextInputMultiline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    checkPhone(phone) {
        return phone.length > 6;
    }

    checkPWD(pwd) {
        return pwd.length > 4;
    }
    login(){
        let phone = this.state.phone;
        let pwd = this.state.pwd;
        alert(phone);
        if (this.state.username === '' || this.state.password === '') {
            Alert.alert('账号或密码不能为空');
            return;
        }
        if(!this.checkPhone(phone)){
            alert("请输入正确的手机号码");
            return;
        }
        if(!this.checkPWD(pwd)){
            alert("密码为大于6位数字");
            return;
        }
       /* let url = Global.LOGIN;
        let map = new Map()
        map.set('username',phone);
        map.set('password',pwd);
        map.set('orgid','0010000');
        let sx = JsonUitl.mapToJson(Util.tokenAndKo(map));
        NetUitl.postFrom(url,sx,function (set){
            switch (set.retCode) {
                case "0000":
                    alert("登录成功");
                    break;
                case "0001":
                    alert("登录失败");
                    break;
                default:
            }
        });*/
    }
    clickLoginBtn() {
        // 判断密码是否为空
        if (this.state.username === '' || this.state.password === '') {
            Alert.alert('账号或密码不能为空');
            return;
        }
    }

    render() {
        return (
            <View style={{
                borderBottomColor: '#000000',
                marginTop: 35,
                marginLeft: 20
            }}
            >
                <Text style={styles.font}>锦绣租赁</Text>
                <Text>绣花机租赁产融服务平台</Text>
                <TextInput
                    ref="phone"
                    editable={true}
                    multiline={true}
                    numberOfLines={1}
                    underlineColorAndroid={'black'}
                    secureTextEntry={false}
                    returnKeyType={'previous'}
                    keyboardType={'numeric'}
                    inlineImageLeft='ic_phone'
                    // inlineImagePadding={10}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                    placeholder="手机号"
                />
                <TextInput
                    ref="pwd"
                    editable={true}
                    multiline={true}
                    underlineColorAndroid={'black'}
                    password={true}
                    numberOfLines={1}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder="密码"
                />
                <View style={styles.style_longin}>
                    <TouchableOpacity
                        onPress={() => this.clickLoginBtn()}
                    >
                        <Text style={{color: '#ffffff', fontSize: 26}}>登录</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        marginTop: 35,
        marginLeft: 20,
    },
    font: {
        color: '#333333',
        fontSize: 40,
        fontWeight: 'bold',
    },
    style_longin: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#940000',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

