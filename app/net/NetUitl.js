'use strict';
import React, {
    Component,
} from 'react-native';
import Util from '../util/Util';
import Global from '../util/Global';

class NetUitl extends React.Component {

    //post请求
    static postJson(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }


    //get请求
    static get(url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

    log(obj) {
        var description = "";
        for (var i in obj) {
            var property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    }

}

module.exports = NetUitl;
