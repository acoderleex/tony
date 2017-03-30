package com.tonyreact;

import com.facebook.react.LazyReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.inject.Provider;

/**
 * 章鱼彩票
 * Created by Tony on 30/03/2017.
 */

public class ExtraPackage extends LazyReactPackage {
    @Override
    public List<ModuleSpec> getNativeModules(final ReactApplicationContext reactContext) {
        return Arrays.asList(new ModuleSpec(HttpClientAndroid.class, new Provider<NativeModule>() {
            @Override
            public NativeModule get() {
                return new HttpClientAndroid(reactContext);
            }
        }));
    }

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return LazyReactPackage.getReactModuleInfoProviderViaReflection(this);
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }
}
