//
//  HttpClientiOS.m
//  TonyReact
//
//  Created by Tony Lee on 30/03/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "HttpClientiOS.h"
#import <React/RCTLog.h>

@implementation HttpClientiOS
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addTestEvent:(NSString *)name callBack:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"Pretending to create an event %@ at", name);
}

@end
