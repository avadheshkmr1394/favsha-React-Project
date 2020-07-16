
const getBaseUrl = () => {
    var _baseUrl = '/';
    var _isProdution = document.location.host.indexOf('.assetinfinity.com') !== -1;
    if (_isProdution) {
        _baseUrl = '/' + window.location.href.split('/')[3] + '/';
    }
    return _baseUrl;
};

const getAppBaseUrl = () => {
    var _baseUrl = '/';
    var _isProdution = document.location.host.indexOf('.assetinfinity.com') !== -1;
    if (_isProdution) {
        _baseUrl = '/' + window.location.href.split('/')[3] + '/';
    } else {
        _baseUrl = window.location.protocol + '//' + window.location.host
    }
    return _baseUrl;
};

const getApiUrl = () => {
    return `${window.location.protocol}//${window.location.host}/api/`;
}


const AppConfig = {
    appMode: ['app'].includes(window.location.host.replace('.assetinfinity.com', '')) ? 'prod' : 'dev',
    env: function (config) {
        debugger
        if (this.appMode == 'prod') {
            return this.prod[config]
        }
        else {
            return this.prod[config]
        }
    },
    textAutoSaveDelay: 4000, // in milisecond;
    modifiedOnDateFormat: 'LLP',
    baseUrl: getBaseUrl(),
    appBaseUrl: getAppBaseUrl(),
    reduxLogger: false,
    axiosLogger: false,
    dev: {
        deviceType: 'desktop',//desktop,mobile,IOS
        url: 'https://api.favsha.com/',
        userId: '123',
        connectionId: ''
    },
    prod: {
        deviceType: 'desktop',//desktop,mobile,IOS
        url: 'https://api.favsha.com/',
        userId: '',
        connectionId: ''
    }
}

export default AppConfig;