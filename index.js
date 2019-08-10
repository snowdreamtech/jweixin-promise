/**
 * 微信JS-SDK Promise封装
 * 
 * 依赖微信js
 * 微信JS-SDK说明文档
 * https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 * 
 * @link https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 * @link https://github.com/snowdreamtech/jweixin
 * 
 */
const wx = Object.create(window.wx || {});

/**
 * 初始化微信JS SDK
 * @param params
 */
wx.configAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        wx.config(params);
        wx.ready(resolve);
        wx.error(function (res) {
            reject(new Error(res.errMsg));
        });
    });
};

/**
 * 判断当前客户端版本是否支持指定JS接口
 * 
 * @param params
 */
wx.checkJsApiAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.checkJsApi(params);
    });
};

/**
 * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
 * 
 * @param params
 */
wx.updateAppMessageShareDataAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.ready(() => {
            wx.updateAppMessageShareData(params);
        })
    });
};

/**
 * 
 * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
 * 
 * @param params
 */
wx.updateTimelineShareDataAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.ready(() => {
            wx.updateTimelineShareData(params);
        })
    });
};

/**
 * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
 * @param params
 */
wx.onMenuShareTimelineAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onMenuShareTimeline(params);
    });
};

/**
 * 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
 * @param params
 */
wx.onMenuShareAppMessageAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onMenuShareAppMessage(params);
    });
};

/**
 * 获取“分享到QQ”按钮点击状态及自定义分享内容接口（即将废弃）
 * @param params
 */
wx.onMenuShareQQAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onMenuShareQQ(params);
    });
};

/**
 * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
 * @param params
 */
wx.onMenuShareWeiboAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onMenuShareWeibo(params);
    });
};

/**
 * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口（即将废弃）
 * @param params
 */
wx.onMenuShareQZoneAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = function (res) {
            resolve({
                result: 'success'
            });
        };
        params.cancel = function () {
            resolve({
                result: 'cancel'
            });
        };
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onMenuShareQZone(params);
    });
};

/**
 * 拍照或从手机相册中选图接口
 * @param params
 */
wx.chooseImageAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.chooseImage(params);
    });
};

/**
 * 预览图片接口
 * @param params
 */
wx.previewImageAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.previewImage(params);
    });
};

/**
 * 上传图片接口
 * @param params
 */
wx.uploadImageAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.uploadImage(params);
    });
};

/**
 * 下载图片接口
 * @param params
 */
wx.downloadImageAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.downloadImage(params);
    });
};

/**
 * 获取本地图片接口（微信新增API）
 * @param params
 */
wx.getLocalImgDataAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.getLocalImgData(params);
    });
};

/**
 * 开始录音接口
 * @param params
 */
wx.startRecordAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.startRecord(params);
    });
};

/**
 * 停止录音接口
 * @param params
 */
wx.stopRecordAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.stopRecord(params);
    });
};

/**
 * 监听录音自动停止接口
 * @param params
 */
wx.onVoiceRecordEndAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.complete = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onVoiceRecordEnd(params);
    });
};

/**
 * 播放语音接口
 * @param params
 */
wx.playVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.playVoice(params);
    });
};

/**
 * 暂停播放接口
 * @param params
 */
wx.pauseVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.pauseVoice(params);
    });
};

/**
 * 停止播放接口
 * @param params
 */
wx.stopVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.stopVoice(params);
    });
};

/**
 * 监听语音播放完毕接口
 * @param params
 */
wx.onVoicePlayEndAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onVoicePlayEnd(params);
    });
};

/**
 * 上传语音接口
 * @param params
 */
wx.uploadVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.uploadVoice(params);
    });
};

/**
 * 下载语音接口
 * @param params
 */
wx.downloadVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.downloadVoice(params);
    });
};

/**
 * 识别音频并返回识别结果接口
 * @param params
 */
wx.translateVoiceAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.translateVoice(params);
    });
};

/**
 * 获取网络状态接口
 * @param params
 */
wx.getNetworkTypeAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.getNetworkType(params);
    });
};

/**
 * 使用微信内置地图查看位置接口
 * @param params
 */
wx.openLocationAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.openLocation(params);
    });
};

/**
 * 获取地理位置接口
 * @param params
 */
wx.getLocationAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.getLocation(params);
    });
};

/**
 * 开启查找周边ibeacon设备接口
 * @param params
 */
wx.startSearchBeaconsAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.complete = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.startSearchBeacons(params);
    });
};

/**
 * 关闭查找周边ibeacon设备接口
 * @param params
 */
wx.stopSearchBeaconsAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.complete = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.stopSearchBeacons(params);
    });
};

/**
 * 监听周边ibeacon设备接口
 * @param params
 */
wx.onSearchBeaconsAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.complete = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.onSearchBeacons(params);
    });
};

/**
 * 关闭当前网页窗口接口
 * @param params
 */
wx.closeWindowAsync = function () {
    return new Promise(function (resolve, reject) {
        wx.closeWindow();
        resolve();
    });
};

/**
 * 批量隐藏功能按钮接口
 * @param params
 */
wx.hideMenuItemsAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.hideMenuItemsAsync(params);
    });
};

/**
 * 批量显示功能按钮接口
 * @param params
 */
wx.showMenuItemsAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.showMenuItemsAsync(params);
    });
};

/**
 * 隐藏所有非基础按钮接口
 * @param params
 */
wx.hideAllNonBaseMenuItemAsync = function () {
    return new Promise(function (resolve, reject) {
        wx.hideAllNonBaseMenuItem();
        resolve();
    });
};

/**
 * 显示所有功能按钮接口
 * @param params
 */
wx.showAllNonBaseMenuItemAsync = function () {
    return new Promise(function (resolve, reject) {
        wx.showAllNonBaseMenuItem();
        resolve();
    });
};

/**
 * 调起微信扫一扫接口
 * @param params
 */
wx.scanQRCodeAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.scanQRCode(params);
    });
};

/**
 * 跳转微信商品页接口
 * @param params
 */
wx.openProductSpecificViewAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.openProductSpecificView(params);
    });
};

/**
 * 拉取适用卡券列表并获取用户选择信息
 * @param params
 */
wx.chooseCardAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.chooseCard(params);
    });
};

/**
 * 批量添加卡券接口
 * @param params
 */
wx.addCardAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.addCard(params);
    });
};

/**
 * 查看微信卡包中的卡券接口
 * @param params
 */
wx.openCardAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.openCard(params);
    });
};

/**
 * 发起一个微信支付请求
 * @param params
 */
wx.chooseWXPayAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.chooseWXPay(params);
    });
};

/**
 * 共享收货地址接口
 * @param params
 */
wx.openAddressAsync = function (_params) {
    let params = _params || {};
    return new Promise(function (resolve, reject) {
        params.success = resolve;
        params.fail = function (res) {
            reject(new Error(res.errMsg));
        };
        wx.openAddress(params);
    });
};

module.exports = wx;