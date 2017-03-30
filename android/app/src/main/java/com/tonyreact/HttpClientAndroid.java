package com.tonyreact;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * 章鱼彩票
 * Created by Tony on 30/03/2017.
 */

public class HttpClientAndroid extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactContext;

    public HttpClientAndroid(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "HttpClientAndroid";
    }

    @ReactMethod
    public void show(String eventName) {
        WritableMap params = Arguments.createMap();
        params.putInt("key", 11111111);
        endEvent(reactContext, eventName, params);
    }

    private void endEvent(ReactApplicationContext reactContext, String eventName, WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
