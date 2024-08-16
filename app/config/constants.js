"use strict";

var env = 'uat';
var config = {}

if(env === 'local') {
    config = {
        baseImg: '',
        baseDir: './uploads/',
        baseUrl: ''
    }
}else if(env === 'uat'){
    config = {
        baseImg: '',
        baseDir: './uploads/',
        baseUrl: ''
    }
} 

module.exports = config;
