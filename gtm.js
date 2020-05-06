
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"842",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"UA-39297716-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"ga-disable-\"+",["escape",["macro",1],8,16],";if(-1\u003Cdocument.cookie.indexOf(a+\"\\x3dtrue\"))return a+\"\\x3dtrue\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"optout"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"MC_GDPR_COOKIE"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"1",
      "vtp_name":"anonymizeIP"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__c",
      "vtp_value":"36792000"
    },{
      "function":"__cid"
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var containerId=",["escape",["macro",12],8,16],",debugStyling=\"background:#f5f4d1;\",gtm=google_tag_manager[containerId],isDebug=",["escape",["macro",13],8,16],",isEnhancedDebug=false,gaExpiration=",["escape",["macro",11],8,16],",targetCustomDimensonIdxClientId=23,searchQueryParameter=[\"query\",\"ga_query\"],searchQueryCustomDimension=[\"cd5\"],maxQueryLength=150,dla=window[\"dataLayer\"],piiRegex=[{name:\"EMAIL\",regex:\/(?:[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+(?:\\.[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])\/gi,\ngroup:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=)|(name=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"USERNAME\",regex:\/((username=)|(user=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"}];var localStorageCid={objectName:\"ga_client_id\",expires:1E3*Number(gaExpiration)};\nvar removePIIFromPayload=function(hitPayload){var hitParts=hitPayload.split(\"\\x26\"),cleanedPayload=hitPayload,val,isQueryRemoved=false,tmpQueryParameterNam=[],tmpQueryParameterLen={},searchQueryReplaceStr=\"[REDACTED SEARCH QUERY: Length \\x3e\"+maxQueryLength+\"]\";tmpQueryParameterNam=searchQueryParameter.map(function(qParam){var tmpParam=qParam+\"\\x3d\";tmpQueryParameterLen[tmpParam]=tmpParam.length;return tmpParam});var cleanedHitParts=hitParts.map(function(value){var pairs=value.split(\"\\x3d\");if(isDebug\u0026\u0026\nisEnhancedDebug)console.info(\"%c\"+\"remove PII: pairs\",debugStyling,pairs);try{val=decodeURIComponent(decodeURIComponent(decodeURIComponent(pairs[1])))}catch(e){val=decodeURIComponent(pairs[1])}if([\"dl\",\"dp\"].indexOf(pairs[0])!=-1){var uriParts=val.split(\"?\");if(isDebug\u0026\u0026isEnhancedDebug)console.info(\"%c\"+\"remove PII: uriParts\",debugStyling,uriParts);if(uriParts.length\u003E1){var uriParams=uriParts[1].split(\"\\x26\");var cleanedUriParams=uriParams.map(function(p){for(var i=0;i\u003CtmpQueryParameterNam.length;i++){var tmpParamNam=\ntmpQueryParameterNam[i],tmpParamLen=Number(maxQueryLength)+Number(tmpQueryParameterLen[tmpParamNam]);if(p.indexOf(tmpParamNam)===0\u0026\u0026p.length\u003EtmpParamLen){isQueryRemoved=true;return tmpParamNam+searchQueryReplaceStr}}return p});uriParts[1]=cleanedUriParams.join(\"\\x26\");val=uriParts.join(\"?\")}}if(isDebug\u0026\u0026isEnhancedDebug)console.info(\"%c\"+\"remove PII: cleaned Parts\",debugStyling,val);if(searchQueryCustomDimension.indexOf(pairs[0])!=-1\u0026\u0026isQueryRemoved===true)val=searchQueryReplaceStr;piiRegex.forEach(function(pii){val=\nval.replace(pii.regex,pii.group+\"[REDACTED \"+pii.name+\"]\")});pairs[1]=encodeURIComponent(val);return pairs.join(\"\\x3d\")});cleanedPayload=cleanedHitParts.join(\"\\x26\");return cleanedPayload};return function(model){var t1,t2;if(isDebug){t1=window.performance.now();console.info(\"%c\"+\"GA customTask - start\",debugStyling)}try{var currentTrackingId=model.get(\"trackingId\"),currentClientId=model.get(\"clientId\"),keySendHitTask=\"sendHitTask\",keyBuildHitTask=\"buildHitTask\",keyDisplayFeaturesTask=\"displayFeaturesTask\",\nkeyHitPayload=\"hitPayload\",globalNameSendTask=\"_\"+currentTrackingId+\"_\"+keySendHitTask,globalNameBuildTask=\"_\"+currentTrackingId+\"_\"+keyBuildHitTask,globalNameDisplayFeaturesTask=\"_\"+currentTrackingId+\"_\"+keyDisplayFeaturesTask,globalNameExceededRequestSize=\"_\"+currentTrackingId+\"_isRequestSizeExceeded\",originalSendTask,originalBuildTask,originalDisplayFeaturesTask,maxGARequestSize=8192,maxRequestSize=7E3;var originalSendTask=window[globalNameSendTask]=window[globalNameSendTask]||model.get(keySendHitTask);\nvar originalBuildTask=window[globalNameBuildTask]=window[globalNameBuildTask]||model.get(keyBuildHitTask);var originalDisplayFeaturesTask=window[globalNameDisplayFeaturesTask]=window[globalNameDisplayFeaturesTask]||model.get(keyDisplayFeaturesTask);window[globalNameExceededRequestSize]=false;if(isDebug\u0026\u0026isEnhancedDebug){console.info(\"%c\"+\"GA customTask - var names\",debugStyling);var tmpInfo={};tmpInfo[globalNameSendTask]=originalSendTask;tmpInfo[globalNameBuildTask]=originalBuildTask;tmpInfo[globalNameDisplayFeaturesTask]=\noriginalDisplayFeaturesTask;console.table(tmpInfo)}if(typeof localStorageCid===\"object\"\u0026\u0026typeof localStorageCid.objectName===\"string\"\u0026\u0026typeof localStorageCid.expires===\"number\"\u0026\u0026window.Storage){var _lsc_obj=JSON.stringify({\"clientId\":currentClientId,\"expires\":(new Date).getTime()+localStorageCid.expires});window.localStorage.setItem(localStorageCid.objectName,_lsc_obj)}if(undefined!==targetCustomDimensonIdxClientId)model.set(\"dimension\"+targetCustomDimensonIdxClientId,currentClientId);var newSendHitTask=\nfunction(sendModel){var t3,t4;if(isDebug){t3=window.performance.now();if(isEnhancedDebug)console.info(\"%c\"+\"GA sendHitTask: called by analytics.js\",debugStyling)}var buildHitPayload=sendModel.get(keyHitPayload);var cleanedPayload=removePIIFromPayload(buildHitPayload);sendModel.set(keyHitPayload,cleanedPayload,true);if(isDebug\u0026\u0026isEnhancedDebug){var debugInfo={\"original Payload\":buildHitPayload,\"cleaned Payload\":cleanedPayload};console.info(\"GA sendHitTask: Cleaned PayLoad\");console.table(debugInfo)}originalSendTask(sendModel);\nif(isDebug){t4=window.performance.now();if(isEnhancedDebug){console.info(\"%c\"+\"GA sendHitTask: pushed to analytics.js - Runtime ms: \",debugStyling,t4-t3);console.info(\"--------------------------------------\")}}};model.set(keySendHitTask,newSendHitTask)}catch(e){console.error(e);throw e;}if(isDebug){t2=window.performance.now();console.info(\"%c\"+\"GA customTask init - Runtime (ms):\",debugStyling,t2-t1)}}})();"]
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MC_PRIVACY"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f,a){var c=",["escape",["macro",5],8,16],",b=",["escape",["macro",16],8,16],",d=",["escape",["macro",17],8,16],",e=a||\"marketing\",g=[\"1\",\"true\"];a=!1;d=d\u0026\u0026-1!=g.indexOf(d)?!0:!1;0==d?a=!0:\"marketing\"==e.toLowerCase()\u0026\u0026\"marketing\"==b?a=!0:\"marketing\"!=e.toLowerCase()||\"statistical\"!==b\u0026\u0026\"undefined\"!=typeof b?\"statistical\"!=e.toLowerCase()||\"statistical\"!==b\u0026\u0026\"undefined\"!=typeof b?\"statistical\"==e.toLowerCase()\u0026\u0026\"marketing\"==b\u0026\u0026(a=!0):a=!0:a=!1;if(!c\u0026\u0026!0===a)return!1;c=decodeURIComponent(c);f=\"|\"+f+\"|\";\nreturn-1!=c.indexOf(f)?!0:!0===a?!1:!0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],",b=a(\"goa\");a=a(\"gdc\");return!0===b||!0===a?!1:!0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"channel"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",21],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}","value",["macro",21]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],",b=",["escape",["macro",22],8,16],";if(\"APP\"==a\u0026\u0026b\u0026\u00260\u003Cb.length)return b;a=\"ga_client_id\";if(window.localStorage\u0026\u0026(a=window.localStorage.getItem(a)||\"{}\",a=JSON.parse(a),b=(new Date).getTime(),a.clientId\u0026\u0026a.expires\u0026\u0026b\u003C=a.expires))return a.clientId})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"dimension9"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"dimension10"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"dimension11"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"designSize"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"config"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MC_USERTYPE"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_defaultValue":"Not Set",
      "vtp_map":["list",["map","key","G","value","Not LoggedIn"],["map","key","R","value","LoggedIn"]]
    },{
      "function":"__c",
      "vtp_value":"MMGR"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"is_internal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",34],8,16],",a=void 0;try{a=parseInt(b),a=isNaN(a)||0===a?void 0:1}catch(c){}return a})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","referrer","value",["macro",10]],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]],["map","fieldName","clientId","value",["macro",23]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","7","dimension",["macro",20]],["map","index","28","dimension",["macro",30]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","referrer","value",["macro",10]],["map","fieldName","transport","value","beacon"],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","\u0026qt","value","500"],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]],["map","fieldName","clientId","value",["macro",23]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","7","dimension",["macro",20]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"rbtc"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":["macro",43],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){window._gaLoaded=window.ga.loaded}})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.search||\"\",c=[{name:\"EMAIL\",regex:\/(?:[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+(?:\\.[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])\/gi,\ngroup:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=)|(name=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"USERNAME\",regex:\/((username=)|(user=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"}];try{a=decodeURIComponent(decodeURIComponent(a))}catch(b){a=decodeURIComponent(a)}c.forEach(function(b){a=\na.replace(b.regex,b.group+\"[REDACTED \"+b.name+\"]\")});return a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["template",["macro",47],["macro",48]],
      "vtp_name":"virtPath"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"customerType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"langId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_pickupoutletname"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_shipmode"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_shipto"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_deliverymethod"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_paymentmethod"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_pickupoutletid"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"order_number"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"abgroup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"eecLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clubCard"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",65],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.{64}$","value",["macro",65]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",66],8,16],",b=",["escape",["macro",50],8,16],";if(\"undefined\"!==typeof a)return\"R-C\";if(\"undefined\"!==typeof b)return\"R-NC\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",67],
      "vtp_map":["list",["map","key","R-C","value","Registered | Club"],["map","key","R-NC","value","Registered | No-Club"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=\/HPLR\/,c=navigator.userAgent||\"\",a=c.match(b);if(a\u0026\u0026a instanceof Array\u0026\u00260\u003Ca.length)return 1}catch(d){",["escape",["macro",13],8,16],"\u0026\u0026console.warn(d)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer_type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",70],8,16],";if(\"undefined\"!==typeof a\u0026\u0026\"new\"==a.toLowerCase())return\"1\"})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","clientId","value",["macro",23]],["map","fieldName","hitCallback","value",["macro",46]],["map","fieldName","page","value",["macro",49]],["map","fieldName","userId","value",["macro",50]],["map","fieldName","siteSpeedSampleRate","value",["macro",51]],["map","fieldName","\u0026qt","value","500"],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","4","dimension",["macro",52]],["map","index","5","dimension",["macro",53]],["map","index","6","dimension",["macro",54]],["map","index","7","dimension",["macro",20]],["map","index","8","dimension",["macro",55]],["map","index","12","dimension",["macro",50]],["map","index","13","dimension",["macro",25]],["map","index","14","dimension",["macro",26]],["map","index","15","dimension",["macro",27]],["map","index","16","dimension",["macro",56]],["map","index","17","dimension",["macro",57]],["map","index","18","dimension",["macro",58]],["map","index","19","dimension",["macro",59]],["map","index","20","dimension",["macro",60]],["map","index","21","dimension",["macro",61]],["map","index","22","dimension",["macro",62]],["map","index","2","dimension",["macro",63]],["map","index","27","dimension",["macro",64]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","67","dimension",["macro",68]],["map","index","70","dimension",["macro",69]],["map","index","72","dimension",["macro",71]],["map","index","77","dimension",["macro",72]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__c",
      "vtp_value":"Enhanced eCommerce"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",8],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","referrer","value",["macro",10]],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]],["map","fieldName","clientId","value",["macro",23]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","7","dimension",["macro",20]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",76],
      "vtp_map":["list",["map","key","EECaddToCart","value","Add to cart"],["map","key","EECcheckoutOption","value","Selected checkout option"],["map","key","EECproductClick","value","Product click"],["map","key","EECpromotionClick","value","Promotion Click"],["map","key","EECremoveFromCart","value","Remove from cart"],["map","key","EECcheckout","value","Checkout step"],["map","key","EECproductImpression","value","Product impression"],["map","key","EECproductDetailView","value","Product detail view"],["map","key","EECpromotionImpression","value","Promotion impression"],["map","key","EECpurchase","value","Purchase"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=function(a){var c=[{name:\"EMAIL\",regex:\/(?:[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+(?:\\.[a-z0-9!#$%\u0026'*+\\\/?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])\/gi,\ngroup:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=)|(name=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"USERNAME\",regex:\/((username=)|(user=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"}];try{a=decodeURIComponent(decodeURIComponent(a))}catch(b){a=decodeURIComponent(a)}c.forEach(function(b){a=\na.replace(b.regex,b.group+\"[REDACTED \"+b.name+\"]\")});return a};return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.href||\"\",b=",["escape",["macro",78],8,16],",c=\"[REDACTED\";a+=document.referrer;a=b(a);return-1!==a.indexOf(c)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",b=[];a\u0026\u0026(b=a.detail?a.detail.products:a.purchase?a.purchase.products:a.checkout?a.checkout.products:a.impressions?a.impressions:[]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].id);return b.join(\"|\")})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",24],
      "vtp_defaultValue":"other",
      "vtp_map":["list",["map","key","Home","value","home"],["map","key","Search Results","value","searchresults"],["map","key","Productdetail","value","offerdetail"],["map","key","Checkout","value","conversionintent"],["map","key","Thank You Page","value","conversion"],["map","key","Category","value","category"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=0;count=1;for(var a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)\"number\"==typeof ",["escape",["macro",81],8,16],"[a].quantity\u0026\u0026(count=",["escape",["macro",81],8,16],"[a].quantity),b+=",["escape",["macro",81],8,16],"[a].price*count;return Math.round(100*b)\/100})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__c",
      "vtp_value":"20653"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",20],7],"\"==\"DESKTOP\"?\"d\":\"",["escape",["macro",20],7],"\"==\"MOBILE\"?\"m\":\"t\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",c=[];if(a){a=a.checkout\u0026\u0026a.checkout.products?a.checkout.products:a.purchase\u0026\u0026a.purchase.products?a.purchase.products:[];for(var b=0;b\u003Ca.length;++b)c.push({id:a[b].id,price:a[b].price,quantity:a[b].quantity})}return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",80],8,16],",c=[],a=0;a\u003CMath.min(3,b.impressions.length);++a)c.push(b.impressions[a].id);return c})();"]
    },{
      "function":"__r"
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","referrer","value",["macro",10]],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]],["map","fieldName","clientId","value",["macro",23]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","7","dimension",["macro",20]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.videoUrl"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=3,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=2,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=1,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",99],
      "vtp_defaultValue":["macro",99],
      "vtp_map":["list",["map","key","acd","value","dis-ad card"],["map","key","aud","value","soc-audience network"],["map","key","add","value","dis-audio ad"],["map","key","bac","value","dis-backdrop slider ad"],["map","key","btk","value","dis-bild-text-kombination"],["map","key","bib","value","dis-billboard"],["map","key","brp","value","dis-branded player"],["map","key","but","value","own-button"],["map","key","bun","value","soc-button"],["map","key","cad","value","own-canvas ad"],["map","key","car","value","dis-carousel"],["map","key","cab","value","aff-cashback"],["map","key","cht","value","soc-chat"],["map","key","cn","value","ema-club newsletter"],["map","key","com","value","aff-community"],["map","key","con","value","aff-content"],["map","key","coa","value","dis-content ad"],["map","key","cea","value","dis-content engagement ad"],["map","key","cob","value","dis-contentbar premium"],["map","key","coi","value","ema-cooperation inclusion"],["map","key","cou","value","aff-coupon"],["map","key","lm","value","ema-crm lifecycle mail"],["map","key","nl","value","ema-crm newsletter"],["map","key","dea","value","aff-deal"],["map","key","ltf","value","dis-desktop live ticker feed"],["map","key","edg","value","ema-digital giftcard"],["map","key","dnt","value","ign-do not track"],["map","key","dba","value","dis-double bridge ad"],["map","key","dds","value","dis-double dynamic sitebar"],["map","key","dna","value","dis-dynamic ad"],["map","key","dya","value","dis-dynamic product ad"],["map","key","dsb","value","dis-dynamic sitebar"],["map","key","eng","value","soc-fb app engagement"],["map","key","ins","value","soc-fb app installs"],["map","key","can","value","soc-fb canvas ad"],["map","key","cvp","value","soc-fb canvas post"],["map","key","cao","value","soc-fb carousel ad"],["map","key","caa","value","soc-fb carousel app"],["map","key","cap","value","soc-fb carousel post"],["map","key","cav","value","soc-fb carousel video ad"],["map","key","cli","value","soc-fb clicks to website"],["map","key","cla","value","soc-fb collection ad"],["map","key","dyp","value","soc-fb dynamic product ad"],["map","key","fpa","value","dis-fb dynamic product ads"],["map","key","eve","value","soc-fb event responses"],["map","key","led","value","soc-fb lead ad"],["map","key","fbl","value","soc-fb link"],["map","key","lin","value","soc-fb link ad"],["map","key","lip","value","soc-fb link post"],["map","key","loc","value","soc-fb local awareness"],["map","key","foa","value","soc-fb offer ad"],["map","key","off","value","soc-fb offer claims"],["map","key","lik","value","soc-fb page likes"],["map","key","pll","value","soc-fb page local link"],["map","key","pag","value","soc-fb page post engagement"],["map","key","fbp","value","soc-fb photo"],["map","key","pho","value","soc-fb photo ad"],["map","key","php","value","soc-fb photo post"],["map","key","pos","value","soc-fb promoted posts"],["map","key","fss","value","soc-fb shop section"],["map","key","sto","value","soc-fb sponsored stories"],["map","key","fbv","value","soc-fb video"],["map","key","vad","value","soc-fb video ad"],["map","key","vip","value","soc-fb video post"],["map","key","vid","value","soc-fb video views"],["map","key","wc","value","soc-fb website conversions"],["map","key","fir","value","dis-fireplace"],["map","key","fla","value","dis-floor ad"],["map","key","fld","value","dis-flyer ad"],["map","key","fly","value","dis-flyer advertising"],["map","key","hom","value","dis-homepage takeover"],["map","key","bll","value","own-iab billboard"],["map","key","bil","value","dis-iab billboard"],["map","key","biv","value","dis-iab billboard video ad"],["map","key","bu2","value","dis-iab button 2"],["map","key","exp","value","dis-iab expandable\/retractable"],["map","key","fil","value","dis-iab filmstrip"],["map","key","flo","value","dis-iab floating"],["map","key","fub","value","dis-iab full banner"],["map","key","haa","value","own-iab half page"],["map","key","hal","value","dis-iab half page"],["map","key","ibv","value","dis-iab in-banner video"],["map","key","int","value","dis-iab interstitial"],["map","key","lle","value","dis-iab large leaderboard"],["map","key","lre","value","dis-iab large rectangle"],["map","key","imb","value","dis-iab maxiboard"],["map","key","mba","value","dis-iab micro bar"],["map","key","ima","value","dis-iab mobile ad"],["map","key","imo","value","dis-iab mobile banner"],["map","key","pop","value","dis-iab pop ups"],["map","key","por","value","dis-iab portrait"],["map","key","pus","value","dis-iab pushdown"],["map","key","sid","value","dis-iab sidekick"],["map","key","sky","value","dis-iab skyscraper"],["map","key","sli","value","dis-iab slider"],["map","key","sle","value","dis-iab super leaderboard - provisional unit"],["map","key","spb","value","dis-iab super-banner"],["map","key","iua","value","dis-iab uap adbundle"],["map","key","laa","value","own-iab uap leaderbord"],["map","key","lea","value","dis-iab uap leaderbord"],["map","key","iar","value","own-iab uap medium rectangle"],["map","key","mre","value","dis-iab uap medium rectangle"],["map","key","rec","value","dis-iab uap rectangle"],["map","key","wsk","value","dis-iab uap wide skyscraper"],["map","key","xll","value","dis-iab xl leaderboard"],["map","key","xlr","value","dis-iab xl rectangle"],["map","key","ifa","value","dis-in-feed ad"],["map","key","inm","value","dis-in-stream"],["map","key","iba","value","dis-inbox ad"],["map","key","inc","value","aff-incentivised"],["map","key","ire","value","dis-inread"],["map","key","icr","value","soc-instagram carousel"],["map","key","ina","value","soc-instagram carousel ad"],["map","key","ine","value","soc-instagram carousel post"],["map","key","ico","value","soc-instagram collection"],["map","key","iln","value","soc-instagram link"],["map","key","inl","value","soc-instagram link ad"],["map","key","ink","value","soc-instagram link post"],["map","key","igp","value","soc-instagram photo"],["map","key","igs","value","soc-instagram photo shopping"],["map","key","ist","value","soc-instagram stories"],["map","key","ini","value","soc-instagram stories ad"],["map","key","inr","value","soc-instagram stories post"],["map","key","ivd","value","soc-instagram video"],["map","key","inv","value","soc-instagram video ad"],["map","key","ino","value","soc-instagram video post"],["map","key","ita","value","own-internal teaser ad"],["map","key","ier","value","dis-interscroller"],["map","key","lba","value","dis-lightbox ad"],["map","key","lbv","value","dis-lightbox video ad"],["map","key","ili","value","own-link"],["map","key","lnk","value","soc-link"],["map","key","lbl","value","dis-local business listing"],["map","key","lnl","value","ema-local newsletter"],["map","key","lnc","value","ema-local newsletter club"],["map","key","log","value","own-logo"],["map","key","loy","value","aff-loyalty"],["map","key","msy","value","dis-manhattan skyscraper"],["map","key","max","value","dis-maxi ad"],["map","key","miv","value","dis-mid-roll video ad"],["map","key","mb1","value","dis-mobile banner 1:1"],["map","key","mb2","value","dis-mobile banner 2:1"],["map","key","mb4","value","dis-mobile banner 4:1"],["map","key","mb6","value","dis-mobile banner 6:1"],["map","key","mca","value","dis-mobile content ad"],["map","key","3x1","value","own-mobile content ad 2:1"],["map","key","3x7","value","own-mobile content ad 4:1"],["map","key","mfa","value","dis-mobile flyer ad"],["map","key","mbi","value","dis-mobile interstitial"],["map","key","mlb","value","dis-mobile leaderboard"],["map","key","mla","value","dis-mobile liveticker ad"],["map","key","mlt","value","dis-mobile live ticker feed"],["map","key","mmr","value","dis-mobile medium rectangle"],["map","key","mop","value","dis-mobile panorama ad"],["map","key","mpa","value","dis-mobile presenter ad"],["map","key","nat","value","dis-native ad"],["map","key","pai","value","ema-newsletter"],["map","key","org","value","seo-organic"],["map","key","oaf","value","aff-other affiliate"],["map","key","odi","value","dis-other display"],["map","key","oow","value","ema-other email"],["map","key","oig","value","ign-other ignore"],["map","key","ops","value","psm-other psm"],["map","key","ose","value","sea-other search"],["map","key","oso","value","soc-other social"],["map","key","pac","value","ema-paid inclusion"],["map","key","txl","value","seo-places link"],["map","key","pol","value","own-post link"],["map","key","pov","value","dis-post-roll video ad"],["map","key","pev","value","dis-pre-roll video ad"],["map","key","pf","value","psm-product feed"],["map","key","pru","value","dis-promo unit ad"],["map","key","pun","value","ema-push notifications"],["map","key","qrc","value","sto-qr code"],["map","key","qr","value","off-qr code"],["map","key","rea","value","own-rec products"],["map","key","ref","value","ref-referral"],["map","key","ret","value","dis-retargeting"],["map","key","scr","value","dis-scroller mobile"],["map","key","sbg","value","dis-search background apps"],["map","key","seb","value","dis-search board"],["map","key","sea","value","sea-search text ad"],["map","key","sho","value","psm-shopping"],["map","key","sha","value","psm-shopping ads"],["map","key","sit","value","sea-site links"],["map","key","sba","value","dis-sitebar ad"],["map","key","sab","value","dis-sitebar ad \/ billboard"],["map","key","skn","value","dis-skin"],["map","key","syb","value","dis-skybridge"],["map","key","sms","value","ema-sms"],["map","key","aso","value","aff-social"],["map","key","soc","value","soc-social post \/ tweet owned"],["map","key","dia","value","dis-sp displayaudio\/contentad\/textlink"],["map","key","spa","value","dis-sponsor ad"],["map","key","sph","value","dis-sponsored header"],["map","key","sm","value","psm-sponsored mail"],["map","key","sbi","value","dis-sticky billboard"],["map","key","sra","value","dis-sticky reminder ad"],["map","key","sad","value","dis-stream ad"],["map","key","sca","value","dis-stream carousel ad"],["map","key","swa","value","dis-switch ad"],["map","key","sys","value","ign-system link"],["map","key","tak","value","dis-takeover"],["map","key","tes","value","dis-teaser"],["map","key","tea","value","own-teaser ad"],["map","key","tst","value","ema-test medium"],["map","key","tri","value","ema-trigger email"],["map","key","apc","value","soc-tw app card"],["map","key","cov","value","soc-tw conversational ad"],["map","key","fva","value","soc-tw first view ad"],["map","key","lgc","value","soc-tw lead generation card"],["map","key","pra","value","soc-tw promoted account"],["map","key","prt","value","soc-tw promoted trend"],["map","key","ptw","value","soc-tw promoted tweet"],["map","key","acc","value","soc-tw sponsored accounts"],["map","key","tre","value","soc-tw sponsored trends"],["map","key","twe","value","soc-tw sponsored tweets"],["map","key","vca","value","soc-tw video card"],["map","key","wcr","value","soc-tw website card"],["map","key","van","value","off-vanity url"],["map","key","vba","value","dis-video bumper ad"],["map","key","wal","value","dis-wallpaper"],["map","key","wib","value","dis-wideboard"],["map","key","bad","value","soc-yt bumper ads"],["map","key","ytc","value","soc-yt cards"],["map","key","dis","value","soc-yt display ad"],["map","key","yes","value","soc-yt end screens"],["map","key","fip","value","soc-yt first position"],["map","key","mas","value","soc-yt masthead"],["map","key","ymr","value","soc-yt mid-roll video ad"],["map","key","ytn","value","soc-yt non-skippable video ad"],["map","key","ove","value","soc-yt overlay ad"],["map","key","ypo","value","soc-yt post-roll video ad"],["map","key","ype","value","soc-yt pre-roll video ad"],["map","key","ski","value","soc-yt skippable video ad"],["map","key","spo","value","soc-yt sponsored cards"],["map","key","yse","value","soc-yt sponsored end screens"],["map","key","ytr","value","soc-yt trueview ad"],["map","key","yts","value","soc-yt trueview for shopping ad"],["map","key","","value",""]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=0,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",101],
      "vtp_defaultValue":["macro",101],
      "vtp_map":["list",["map","key","433","value","433"],["map","key","20m","value","20min.ch"],["map","key","2de","value","2dehands"],["map","key","4st","value","4 stroke"],["map","key","4w","value","4w"],["map","key","59s","value","59saniye"],["map","key","8tv","value","8tvjerez"],["map","key","atp","value","actionpaper"],["map","key","act","value","actual media"],["map","key","acu","value","acunn"],["map","key","ada","value","adaptive media"],["map","key","ade","value","adello network"],["map","key","avi","value","adevinta"],["map","key","adf","value","adfactor.nl"],["map","key","afm","value","adform"],["map","key","adn","value","adnetwork"],["map","key","adp","value","adpilot"],["map","key","adr","value","adrom"],["map","key","ast","value","adsensitive"],["map","key","ads","value","adsquare"],["map","key","adv","value","adve"],["map","key","avy","value","advizyon"],["map","key","aeg","value","aegis"],["map","key","aeq","value","aequilibria"],["map","key","afh","value","affiliate.hu"],["map","key","aff","value","affilinet"],["map","key","afd","value","affilinet display"],["map","key","afp","value","affilinet psm"],["map","key","afo","value","affocean"],["map","key","aft","value","aftonbladet"],["map","key","aja","value","ajaxshowtime"],["map","key","akd","value","akakce display"],["map","key","aka","value","akakce psm"],["map","key","akt","value","aktionsfinder"],["map","key","ako","value","aktionsfinder display"],["map","key","ala","value","alatest"],["map","key","ale","value","alexa"],["map","key","alf","value","alfemminile"],["map","key","all","value","allabolag"],["map","key","alv","value","alve"],["map","key","ame","value","american express"],["map","key","amk","value","amkspor"],["map","key","amm","value","amm"],["map","key","amn","value","amnet"],["map","key","amp","value","ampliffy"],["map","key","and","value","androidplanet"],["map","key","adw","value","androidworld"],["map","key","ani","value","anibis.ch"],["map","key","ano","value","anormal"],["map","key","ant","value","antevenio"],["map","key","aod","value","aod"],["map","key","aol","value","aol platforms"],["map","key","anx","value","appnexus"],["map","key","app","value","appot"],["map","key","are","value","areklam"],["map","key","arg","value","argep.hu"],["map","key","aro","value","aroma"],["map","key","atr","value","atresmedia"],["map","key","aru","value","arukereso.hu"],["map","key","ard","value","arukereso.hu display"],["map","key","arv","value","arvilag.hu"],["map","key","asd","value","as"],["map","key","ask","value","askmen greece"],["map","key","ath","value","athensvoice.gr"],["map","key","atl","value","athensvoice.gr offline"],["map","key","aud","value","audioemotion"],["map","key","aus","value","austria"],["map","key","avu","value","avui"],["map","key","asm","value","axel springers media impact"],["map","key","axe","value","axel springers media impact-bild.de"],["map","key","chp","value","axel springers media impact-chip.de psm"],["map","key","azm","value","az medien"],["map","key","bad","value","badische zeitung"],["map","key","bai","value","baidu ads"],["map","key","ban","value","banzai"],["map","key","bar","value","barcoo"],["map","key","bas","value","baslattusu"],["map","key","bei","value","beintoo"],["map","key","bes","value","beslist"],["map","key","bep","value","bestprice"],["map","key","bpr","value","bigpara"],["map","key","bik","value","bigspark"],["map","key","big","value","billiger.de"],["map","key","bin","value","bing ads"],["map","key","bpb","value","bing places for business"],["map","key","bis","value","bing shopping ads"],["map","key","bit","value","bitplaces"],["map","key","bfr","value","blackfriday.ch"],["map","key","blf","value","blackfriday.hu"],["map","key","bfd","value","blackfridaydeals.ch"],["map","key","bfs","value","blackfridaysale"],["map","key","bla","value","blastingnews"],["map","key","bli","value","blick.ch"],["map","key","bls","value","blis"],["map","key","blk","value","blocket"],["map","key","blo","value","blogger"],["map","key","blg","value","blogo"],["map","key","bmi","value","blue mango interactive"],["map","key","blu","value","bluemedia"],["map","key","blp","value","blue-portal"],["map","key","bol","value","bolumsonucanavari"],["map","key","bon","value","bonnier news"],["map","key","bsl","value","bs-live"],["map","key","bud","value","budgetgaming"],["map","key","bur","value","burdas forward ad group"],["map","key","cdr","value","cadreon"],["map","key","can","value","canarias7"],["map","key","cay","value","candy"],["map","key","cat","value","cart"],["map","key","cas","value","casa.it"],["map","key","cab","value","cashbackxl"],["map","key","cem","value","cemp"],["map","key","cen","value","central media"],["map","key","chi","value","channel intelligence"],["map","key","cad","value","channel-advisor"],["map","key","cha","value","check24 affiliate"],["map","key","chd","value","check24 display"],["map","key","chc","value","chipcom"],["map","key","cia","value","ciao"],["map","key","cip","value","ciao people"],["map","key","cid","value","cimri display"],["map","key","cim","value","cimri psm"],["map","key","cin","value","ciner"],["map","key","cit","value","citynews"],["map","key","cjp","value","cjp"],["map","key","cle","value","cleverreach"],["map","key","cli","value","clipkit"],["map","key","cdy","value","commedya"],["map","key","com","value","commerce connector"],["map","key","cj","value","commission junction"],["map","key","cmp","value","comparer"],["map","key","cis","value","comparis"],["map","key","coi","value","computeridee"],["map","key","cot","value","computertotaal"],["map","key","con","value","conde nast"],["map","key","cxy","value","connexity"],["map","key","cov","value","converto"],["map","key","coo","value","coolshark"],["map","key","cor","value","correio da manha"],["map","key","cpm","value","cpm medios"],["map","key","cre","value","crep"],["map","key","cri","value","criteo"],["map","key","ct","value","ct network"],["map","key","crm","value","customer relationship management"],["map","key","dai","value","dailymotion"],["map","key","dat","value","dataxu"],["map","key","dsr","value","defacto smart reach"],["map","key","del","value","delivery media"],["map","key","dem","value","demiroren"],["map","key","dep","value","depot"],["map","key","des","value","deskfive"],["map","key","d36","value","dialog 360"],["map","key","ddg","value","diari de girona"],["map","key","dia","value","diari de tarragona"],["map","key","ddm","value","diario de mallorca"],["map","key","ddn","value","diario de navarra"],["map","key","dmo","value","diario montanes"],["map","key","dig","value","digiavantaj"],["map","key","dsy","value","digital sunray"],["map","key","dmc","value","digitalmarcom"],["map","key","dtk","value","digiturk"],["map","key","dij","value","dijaspora"],["map","key","dir","value","direct"],["map","key","dis","value","discovery"],["map","key","dsn","value","disney pictures"],["map","key","dnt","value","do not track"],["map","key","dog","value","dogus"],["map","key","don","value","donanimhaber"],["map","key","dnk","value","donaukurier"],["map","key","doo","value","doodle.de"],["map","key","dax","value","doubleclick ad exchange"],["map","key","dbm","value","doubleclick bid manager"],["map","key","dov","value","doveconviene"],["map","key","dow","value","download adv"],["map","key","dpl","value","dplay"],["map","key","dro","value","drogen.nl"],["map","key","dut","value","dutchcowboys"],["map","key","eba","value","ebay advertising"],["map","key","ecn","value","ebay commerce network"],["map","key","edi","value","edizioni master"],["map","key","ege","value","egedesonsoz"],["map","key","ego","value","ego media"],["map","key","eks","value","eksisozluk"],["map","key","elc","value","el confidencial"],["map","key","dal","value","el diario de almeria"],["map","key","elm","value","el mundo"],["map","key","eln","value","el norte de castilla"],["map","key","elp","value","el pais"],["map","key","ema","value","emarsys"],["map","key","ene","value","energysaving.gr"],["map","key","egy","value","engageya"],["map","key","ens","value","ensonhaber"],["map","key","epe","value","epey display"],["map","key","epp","value","epey psm"],["map","key","esl","value","esl video network"],["map","key","esm","value","esmedya"],["map","key","esv","value","esv digital"],["map","key","eur","value","eurobank"],["map","key","ecl","value","euroclix"],["map","key","evl","value","evleniyorsan affiliate"],["map","key","evd","value","evleniyorsan display"],["map","key","evo","value","evo media"],["map","key","exp","value","expressen"],["map","key","f1m","value","f1maximaal.nl"],["map","key","fbx","value","facebook ad exchange fbx"],["map","key","fbo","value","facebook owned"],["map","key","fba","value","facebook paid"],["map","key","fel","value","factor eleven"],["map","key","ftk","value","fanatik"],["map","key","fas","value","fashionchick"],["map","key","fta","value","fashionista"],["map","key","fil","value","film.nl"],["map","key","fla","value","flashtalking"],["map","key","fm1","value","fm1today.ch"],["map","key","fol","value","folder"],["map","key","fon","value","fonex"],["map","key","for","value","forward ad group"],["map","key","ami","value","forward ad group-chip.de display"],["map","key","fra","value","fragtist"],["map","key","fro","value","froot"],["map","key","fun","value","funke medien nrw"],["map","key","fzs","value","fz.se"],["map","key","ems","value","g+j ems"],["map","key","g+j","value","g+j network"],["map","key","gjm","value","g+j network mobile"],["map","key","gal","value","gameloft"],["map","key","gmr","value","gamer.nl"],["map","key","gwe","value","gameswelt.at"],["map","key","gam","value","gamez.de"],["map","key","gzm","value","gamzeoom"],["map","key","gee","value","geekyapar"],["map","key","gei","value","geizhals"],["map","key","ged","value","geizhals display"],["map","key","gem","value","geizhals mail"],["map","key","gel","value","gelirortaklari"],["map","key","gen","value","genart"],["map","key","geo","value","geomedia"],["map","key","glo","value","globalplaza.hu"],["map","key","gaf","value","globalplaza.hu affiliate"],["map","key","gch","value","goody.ch"],["map","key","gme","value","gmedia"],["map","key","gmx","value","gmx"],["map","key","gol","value","goldbach"],["map","key","grl","value","goodroll"],["map","key","goa","value","google assistant"],["map","key","gop","value","google places"],["map","key","gpr","value","google preferred"],["map","key","gsh","value","google shopping"],["map","key","goo","value","googleplus owned"],["map","key","gpl","value","googleplus paid"],["map","key","gpf","value","gp fans"],["map","key","gpt","value","gp today"],["map","key","gpu","value","gp update"],["map","key","grc","value","groupecerise"],["map","key","gro","value","grover"],["map","key","gru","value","grupo vocento"],["map","key","gsm","value","gsminfo"],["map","key","gun","value","günstiger.de"],["map","key","gün","value","goodroll"],["map","key","gut","value","gutefrage.net"],["map","key","h2o","value","h2online"],["map","key","ham","value","hamburger morgenpost"],["map","key","han","value","handypirat"],["map","key","har","value","hardware.info"],["map","key","hat","value","hatch"],["map","key","hei","value","heise online rotation"],["map","key","heu","value","heute"],["map","key","hi-","value","hi-media network"],["map","key","hic","value","hic mobile"],["map","key","hif","value","hifi.nl"],["map","key","hoo","value","hooikoortsrader"],["map","key","hov","value","hoover"],["map","key","hpu","value","hpu"],["map","key","htt","value","httpool"],["map","key","hul","value","hulpbijhooikoorts"],["map","key","hur","value","hurriyet"],["map","key","hvg","value","hvg"],["map","key","iam","value","iamstudent"],["map","key","ice","value","iceleads"],["map","key","icu","value","iculture"],["map","key","ida","value","ideal"],["map","key","ide","value","idealo"],["map","key","idd","value","idealo display"],["map","key","idb","value","idg business network"],["map","key","idg","value","idg network"],["map","key","ign","value","ign"],["map","key","iko","value","iko"],["map","key","imm","value","immoscout24"],["map","key","inw","value","in.webs"],["map","key","ind","value","indeed"],["map","key","inf","value","infinety"],["map","key","inr","value","inrool"],["map","key","ing","value","insidegamer"],["map","key","isr","value","insider"],["map","key","ism","value","insomnia.gr"],["map","key","ino","value","instagram owned"],["map","key","ins","value","instagram paid"],["map","key","stl","value","install"],["map","key","iac","value","instore audience - consumer electronics"],["map","key","im","value","interactive media"],["map","key","int","value","internetreklam"],["map","key","ip","value","ip deutschland"],["map","key","ipa","value","ipadex"],["map","key","ipe","value","iperarredi"],["map","key","ipt","value","iphone-tricks.de"],["map","key","iph","value","iphoned"],["map","key","ipm","value","ipm"],["map","key","ipp","value","ippies"],["map","key","iq","value","iq media network"],["map","key","ita","value","italia online"],["map","key","jof","value","jofogas.hu"],["map","key","jou","value","journal de noticias"],["map","key","kar","value","karnaval"],["map","key","kau","value","kaufda"],["map","key","ktp","value","kauftipp.ch"],["map","key","kkm","value","kek mama"],["map","key","kel","value","kelkoo"],["map","key","kic","value","kicker"],["map","key","kck","value","kicktipp"],["map","key","kie","value","kieskeurig"],["map","key","kia","value","kieskeurig affiliate"],["map","key","kid","value","kieskeurig display"],["map","key","koc","value","koch-mit.de"],["map","key","kro","value","krone.at"],["map","key","kwa","value","kwanko"],["map","key","lgs","value","la gaceta de salamanca"],["map","key","lne","value","la nueva espana"],["map","key","lav","value","la vanguardia"],["map","key","vda","value","la voz de almeria"],["map","key","lva","value","la voz de asturias"],["map","key","la7","value","la7"],["map","key","lad","value","ladenzeile.de"],["map","key","lao","value","laola1"],["map","key","lap","value","lapcom"],["map","key","las","value","last minute"],["map","key","leg","value","leguide"],["map","key","leo","value","leonardo"],["map","key","lev","value","levelcom"],["map","key","lig","value","ligatus"],["map","key","lhm","value","lighthouse media"],["map","key","ltv","value","ligtv"],["map","key","lio","value","linkedin owned"],["map","key","lin","value","linkedin paid"],["map","key","lws","value","linkwise"],["map","key","lrl","value","liverail"],["map","key","loc","value","locafox"],["map","key","log","value","logcom"],["map","key","loo","value","lootjestrekken"],["map","key","los","value","los40"],["map","key","maw","value","macworld"],["map","key","mho","value","madhouse"],["map","key","mad","value","madvertise"],["map","key","mag","value","magazin"],["map","key","mga","value","magazin offline"],["map","key","mbr","value","mail\u0026brands"],["map","key","mdm","value","mairdumont"],["map","key","mak","value","makro"],["map","key","mko","value","makroo"],["map","key","mks","value","maksimum"],["map","key","mam","value","mamaplaats"],["map","key","mnr","value","manners.nl"],["map","key","man","value","manzoni"],["map","key","mca","value","marca"],["map","key","mpa","value","marketplace by adtech (aol)"],["map","key","mtg","value","marktguru"],["map","key","mkj","value","marktjagd"],["map","key","mar","value","marquard media"],["map","key","mmf","value","media markt folder"],["map","key","mmz","value","media markt magazin"],["map","key","mmm","value","media markt mediazine"],["map","key","mbs","value","mediabrands"],["map","key","m20","value","mediae20"],["map","key","meh","value","mediahuis"],["map","key","mel","value","medialaan"],["map","key","mmg","value","mediamag.net"],["map","key","mmc","value","mediamarkt.com"],["map","key","md","value","mediamarkt.de"],["map","key","mms","value","mediamarktsaturn"],["map","key","mmd","value","mediamond"],["map","key","mds","value","mediascale"],["map","key","msk","value","mediastoke"],["map","key","med","value","mediaworks"],["map","key","mdz","value","mediazine.be"],["map","key","mgm","value","mediengruppe mitteldeutsche zeitung"],["map","key","myt","value","medyanet"],["map","key","mst","value","meinestadt.de"],["map","key","mkc","value","meinkicker"],["map","key","mei","value","meinprospekt"],["map","key","mlo","value","melon"],["map","key","mer","value","merlininkazani"],["map","key","mxl","value","metrixlab"],["map","key","met","value","metro"],["map","key","mic","value","microsoft display"],["map","key","mdy","value","microsoft dynamics"],["map","key","mmn","value","microsoft media network"],["map","key","mid","value","midyo"],["map","key","mil","value","milliyet"],["map","key","mim","value","mim mobext"],["map","key","mlz","value","mlzphoto.hu"],["map","key","mbd","value","mobile.de"],["map","key","mpo","value","mobilepocket"],["map","key","mbl","value","mobilike"],["map","key","mob","value","moboo"],["map","key","mon","value","monster worldwide deutschland"],["map","key","mop","value","mopub"],["map","key","mpl","value","mploys branding hrc"],["map","key","mun","value","mundo deportivo"],["map","key","myx","value","my-xplace"],["map","key","mdc","value","mydealz community"],["map","key","mdp","value","mydealz paid"],["map","key","myn","value","mynet"],["map","key","myp","value","myphone.gr"],["map","key","mys","value","myshopi"],["map","key","n.e","value","n.e.r.o."],["map","key","nfp","value","naftemporiki.gr"],["map","key","nap","value","napi.hu"],["map","key","nav","value","navarra.com"],["map","key","nei","value","neo interactive"],["map","key","neo","value","neolaia.gr"],["map","key","nes","value","nestle"],["map","key","net","value","net media"],["map","key","nac","value","netadclick"],["map","key","ndd","value","netaddiction"],["map","key","nbk","value","netbook"],["map","key","ncm","value","netcom"],["map","key","npm","value","netpoint media"],["map","key","ntp","value","new affiliate"],["map","key","ndi","value","new display"],["map","key","nig","value","new ignore"],["map","key","now","value","new owned"],["map","key","nps","value","new psm"],["map","key","nso","value","new social"],["map","key","nsn","value","newsnet"],["map","key","nex","value","nexage"],["map","key","nee","value","nexeps"],["map","key","nlb","value","nlblackfriday.nl"],["map","key","nok","value","nokta"],["map","key","ndn","value","noticias de navarra"],["map","key","not","value","notifichepush"],["map","key","nul","value","nu.nl"],["map","key","oat","value","oath"],["map","key","oda","value","odatv"],["map","key","oe2","value","oe24"],["map","key","oe4","value","oe24 display"],["map","key","oft","value","ofertia"],["map","key","opo","value","offenbach post"],["map","key","ffr","value","offerista"],["map","key","off","value","offline source"],["map","key","ogu","value","ogury"],["map","key","olc","value","olcsobbat.hu"],["map","key","oms","value","oms"],["map","key","one","value","onedio"],["map","key","onf","value","onefootball"],["map","key","ovr","value","online verlag freiburg"],["map","key","omt","value","onemorething"],["map","key","onv","value","onvista network"],["map","key","opx","value","openx"],["map","key","opm","value","opera mediaworks gmbh"],["map","key","orf","value","orf"],["map","key","org","value","organic search engine"],["map","key","soc","value","organic social network"],["map","key","ori","value","origo nmw group"],["map","key","oud","value","ouders van nu"],["map","key","out","value","outbrain"],["map","key","oyu","value","oyungezer"],["map","key","pac","value","packfriday.be"],["map","key","pak","value","pakfriday.be"],["map","key","pag","value","pagomeno"],["map","key","pan","value","pannon lapok"],["map","key","paa","value","paycentive affiliate"],["map","key","pay","value","payclick"],["map","key","pal","value","paypal"],["map","key","pcm","value","pcmweb"],["map","key","peb","value","pebblemedia"],["map","key","peo","value","peoplegreece.com"],["map","key","per","value","perform"],["map","key","pm","value","performance media"],["map","key","pem","value","permodo network"],["map","key","pep","value","persgroep"],["map","key","pev","value","pervorm"],["map","key","pie","value","piemme"],["map","key","pio","value","pinterest owned"],["map","key","pin","value","pinterest paid"],["map","key","pir","value","piraeusbank.gr"],["map","key","pne","value","pixelnerds"],["map","key","pld","value","player.hu display"],["map","key","plc","value","player.hu price comparison"],["map","key","pli","value","plista"],["map","key","plu","value","plusonline"],["map","key","pol","value","pollennieuws"],["map","key","pos","value","posta"],["map","key","pre","value","preis.de"],["map","key","pro","value","preisroboter"],["map","key","psm","value","preissuchmaschine.de"],["map","key","prv","value","preisvergleich europe"],["map","key","prp","value","prex programmatic"],["map","key","pse","value","price comparison \/ search engine"],["map","key","prr","value","pricerunner"],["map","key","pzd","value","pricerunner display"],["map","key","prm","value","prime"],["map","key","pri","value","print advertising"],["map","key","prs","value","prisa"],["map","key","prj","value","prisjakt"],["map","key","prd","value","prisjakt display"],["map","key","pn","value","private network"],["map","key","pnp","value","private network psm"],["map","key","pft","value","profital"],["map","key","prh","value","prohardver"],["map","key","prb","value","promobutler"],["map","key","poo","value","promopromo"],["map","key","pmq","value","promoqui"],["map","key","psx","value","psx-sense"],["map","key","pco","value","publico.pt"],["map","key","ppm","value","publipress media"],["map","key","pub","value","pubmatic"],["map","key","pul","value","pul2"],["map","key","pus","value","pushpushgo"],["map","key","qas","value","qassa"],["map","key","qst","value","quantcast"],["map","key","qtm","value","quantum"],["map","key","qua","value","quarter media network"],["map","key","rad","value","radio"],["map","key","ral","value","radioluisteren"],["map","key","rai","value","rai"],["map","key","rcs","value","rcs"],["map","key","rds","value","rds advertising"],["map","key","rea","value","reach media"],["map","key","rec","value","reclamefolder"],["map","key","red","value","redblue"],["map","key","rdb","value","redbull"],["map","key","rpm","value","redpineapplemed"],["map","key","rek","value","reklamaction"],["map","key","rkp","value","reklampiri"],["map","key","rks","value","reklamstore"],["map","key","rkv","value","reklamvidi"],["map","key","res","value","reshift"],["map","key","rmg","value","retail media group"],["map","key","rtd","value","retailtoday display"],["map","key","rte","value","retailtoday email"],["map","key","rto","value","retailtoday offline"],["map","key","rin","value","ringier axel springer"],["map","key","rio","value","rioja medios"],["map","key","rm","value","rm regional marketing ug"],["map","key","rmb","value","rmb.be"],["map","key","ros","value","rossel"],["map","key","rrt","value","rtb"],["map","key","rtb","value","rtb house"],["map","key","rti","value","rtime"],["map","key","rud","value","rudi.mediamarkt.de"],["map","key","rus","value","russmedia"],["map","key","s4m","value","s4m"],["map","key","shn","value","sahadan"],["map","key","shb","value","sahibinden"],["map","key","sal","value","salamanca24horas"],["map","key","san","value","sanoma"],["map","key","sap","value","sapo"],["map","key","sd","value","saturn.de"],["map","key","sar","value","saturn.eu"],["map","key","sbs","value","sbs"],["map","key","sst","value","schibsted"],["map","key","sch","value","scholieren.com"],["map","key","sct","value","scout24"],["map","key","see","value","seedtag"],["map","key","71","value","seven-one media"],["map","key","sha","value","shazam media services"],["map","key","shi","value","shiftdelete"],["map","key","spm","value","shop mail"],["map","key","sob","value","shopbuddie"],["map","key","sho","value","shopkick"],["map","key","sil","value","silverpop"],["map","key","sim","value","simpler"],["map","key","siz","value","sizmek"],["map","key","skr","value","skorer"],["map","key","skt","value","skorertv"],["map","key","skz","value","skroutz"],["map","key","skd","value","skroutz display"],["map","key","sky","value","sky"],["map","key","skn","value","skynet"],["map","key","sli","value","slimster"],["map","key","sma","value","smaato"],["map","key","smw","value","smart-wohnen.de"],["map","key","smc","value","smartclip"],["map","key","smh","value","smarthome.saturn.de"],["map","key","sco","value","snapchat owned"],["map","key","scp","value","snapchat paid"],["map","key","sm","value","sociomantic"],["map","key","som","value","som"],["map","key","soz","value","sozcu"],["map","key","shm","value","sparhamster"],["map","key","spa","value","sparks47"],["map","key","spz","value","spaziogames"],["map","key","spe","value","speed"],["map","key","spi","value","spiegel"],["map","key","srt","value","sport"],["map","key","snw","value","sportnetwork"],["map","key","spv","value","sportsverige"],["map","key","srx","value","sporx"],["map","key","spo","value","spotify"],["map","key","stt","value","spotta"],["map","key","slm","value","stailamedia ag"],["map","key","sda","value","standard.at"],["map","key","sta","value","star"],["map","key","sto","value","stocard"],["map","key","stx","value","strike exchange"],["map","key","str","value","stroeer digital"],["map","key","sdm","value","stroeer digital media gmbh"],["map","key","spl","value","stroeer digital media sportal.de"],["map","key","spx","value","stroeer digital media spox.com"],["map","key","sdw","value","stroeer digital media wetransfer.com"],["map","key","stp","value","stroeer primetime gmbh"],["map","key","stu","value","studentenkorting"],["map","key","sty","value","styria"],["map","key","sbt","value","subito"],["map","key","smo","value","sumo"],["map","key","smd","value","sun media"],["map","key","sun","value","sunnysales"],["map","key","ace","value","suppllier acer"],["map","key","sac","value","supplier activision"],["map","key","sae","value","supplier aeg"],["map","key","sam","value","supplier amd"],["map","key","amx","value","supplier american express"],["map","key","sas","value","supplier asus"],["map","key","amv","value","supplier avm"],["map","key","sbg","value","supplier beko grundig"],["map","key","spb","value","supplier belkin"],["map","key","sbq","value","supplier benq"],["map","key","sue","value","supplier blackberry"],["map","key","sbc","value","supplier bosch"],["map","key","sub","value","supplier bose"],["map","key","sbr","value","supplier brita"],["map","key","suc","value","supplier campaigns"],["map","key","sca","value","supplier cartanexi"],["map","key","car","value","supplier cartasi"],["map","key","crs","value","supplier crosscall"],["map","key","sdt","value","supplier deutsche technikberatung"],["map","key","sdv","value","supplier devolo"],["map","key","spd","value","supplier disney pictures"],["map","key","sel","value","supplier electrolux"],["map","key","eni","value","supplier eni"],["map","key","sfa","value","supplier fairphone"],["map","key","sfh","value","supplier fatherio"],["map","key","foo","value","supplier foodsaver"],["map","key","sfo","value","supplier fossil"],["map","key","sfu","value","supplier fujifilm"],["map","key","sug","value","supplier google"],["map","key","shh","value","supplier hihonor"],["map","key","stc","value","supplier hitachi"],["map","key","shp","value","supplier hotpoint"],["map","key","hps","value","supplier hp"],["map","key","sht","value","supplier htc"],["map","key","shu","value","supplier huawei"],["map","key","smt","value","supplier imetec"],["map","key","sid","value","supplier indesit"],["map","key","sin","value","supplier intel"],["map","key","sps","value","supplier intesa sanpaolo"],["map","key","siv","value","supplier inventum"],["map","key","sjb","value","supplier jabra"],["map","key","sjl","value","supplier jbl"],["map","key","sup","value","supplier kärcher"],["map","key","spk","value","supplier kenwood"],["map","key","skp","value","supplier krups"],["map","key","sle","value","supplier lego"],["map","key","sul","value","supplier lenovo"],["map","key","slg","value","supplier lg"],["map","key","slo","value","supplier logitech"],["map","key","sti","value","supplier lottomatica"],["map","key","suz","value","supplier meizu"],["map","key","sms","value","supplier microsoft"],["map","key","sum","value","supplier miele"],["map","key","smx","value","supplier moulinex"],["map","key","sne","value","supplier nest"],["map","key","spn","value","supplier nikon"],["map","key","sni","value","supplier nintendo"],["map","key","sno","value","supplier nokia"],["map","key","snd","value","supplier nordmende"],["map","key","snv","value","supplier nvidia"],["map","key","sor","value","supplier oculus vr"],["map","key","suo","value","supplier olympus"],["map","key","prg","value","supplier p\u0026g"],["map","key","spg","value","supplier peg perego"],["map","key","spp","value","supplier philips"],["map","key","spq","value","supplier qmi stardust"],["map","key","spr","value","supplier razer"],["map","key","srw","value","supplier rowenta"],["map","key","ssa","value","supplier samsung"],["map","key","ssc","value","supplier sencor"],["map","key","sse","value","supplier sennheiser"],["map","key","ssm","value","supplier siemens"],["map","key","ssk","value","supplier sky"],["map","key","sus","value","supplier sony"],["map","key","stf","value","supplier tefal"],["map","key","sts","value","supplier telesystem"],["map","key","spt","value","supplier tivusat"],["map","key","stm","value","supplier tomtom"],["map","key","ste","value","supplier top employer"],["map","key","sut","value","supplier toshiba"],["map","key","stk","value","supplier trekstor"],["map","key","suu","value","supplier universal"],["map","key","sve","value","supplier venta"],["map","key","swb","value","supplier warnerbross"],["map","key","swp","value","supplier whirpool"],["map","key","swk","value","supplier wiko"],["map","key","sxe","value","supplier xerox"],["map","key","sxi","value","supplier xiaomi"],["map","key","svf","value","svenska fotbollsförbundet"],["map","key","swa","value","swarm"],["map","key","swe","value","sweclockers"],["map","key","swi","value","swiss.blackfriday"],["map","key","sys","value","system"],["map","key","t24","value","t24"],["map","key","tab","value","taboola"],["map","key","tag","value","tag adv"],["map","key","tak","value","take2"],["map","key","tal","value","talks media"],["map","key","tat","value","tarife.at"],["map","key","tar","value","tarife.at display"],["map","key","tea","value","teads"],["map","key","tec","value","techtastic"],["map","key","tsy","value","teknoseyir"],["map","key","tny","value","teknoyo"],["map","key","tlk","value","telekurier"],["map","key","tel","value","televisies.nl"],["map","key","eci","value","teradata ecircle"],["map","key","tst","value","test source"],["map","key","tbr","value","testberichte.de"],["map","key","tga","value","tg adv"],["map","key","tha","value","tharuka"],["map","key","thw","value","themenwelten"],["map","key","ttd","value","thetradedesk"],["map","key","thi","value","thinkdigital"],["map","key","tie","value","tiendeo"],["map","key","toc","value","toc"],["map","key","tom","value","tomshardware"],["map","key","top","value","toppreise.ch"],["map","key","tfx","value","trackingfix"],["map","key","tra","value","tradedoubler"],["map","key","tpc","value","tradedoubler price comparison"],["map","key","trt","value","tradetracker"],["map","key","trf","value","traffective"],["map","key","tri","value","triboo"],["map","key","tro","value","trovaprezzi"],["map","key","trv","value","trueview"],["map","key","tun","value","tunnel23"],["map","key","trm","value","turkmedya"],["map","key","trc","value","turkticaret"],["map","key","tru","value","turkuvaz"],["map","key","tur","value","turn on"],["map","key","tvg","value","tvgids24"],["map","key","twe","value","tweakers"],["map","key","tws","value","tweakers affiliate"],["map","key","twd","value","tweakers display"],["map","key","twg","value","twenga"],["map","key","twi","value","twiago"],["map","key","twt","value","twitch"],["map","key","two","value","twitter owned"],["map","key","twa","value","twitter paid"],["map","key","twy","value","twyn"],["map","key","ucu","value","ucuzu"],["map","key","ult","value","ultima hora"],["map","key","uni","value","unidad editorial"],["map","key","uim","value","united internet media"],["map","key","udy","value","upday"],["map","key","uas","value","urban airship"],["map","key","umn","value","urban media network"],["map","key","uzm","value","uzmantv"],["map","key","ve","value","ve interactive"],["map","key","vee","value","veesible"],["map","key","vgk","value","vergelijk"],["map","key","ver","value","verivox"],["map","key","vet","value","vertical techmedia"],["map","key","vtm","value","talks media"],["map","key","ves","value","vesomare.gr"],["map","key","vgn","value","vgn"],["map","key","via","value","viacom"],["map","key","vif","value","viafree"],["map","key","vbr","value","viber"],["map","key","vib","value","vibrant media"],["map","key","vic","value","vice media"],["map","key","vie","value","vice"],["map","key","vir","value","viralize"],["map","key","vis","value","visoon video impact"],["map","key","vit","value","vitringez"],["map","key","voc","value","vocento news - el correo"],["map","key","voe","value","voetbalzone"],["map","key","vlt","value","vol.at"],["map","key","vla","value","vola"],["map","key","vol","value","volantinofacile"],["map","key","vrw","value","vr-world.com"],["map","key","vri","value","vriezer.nl"],["map","key","wal","value","wall of fame"],["map","key","wan","value","want"],["map","key","was","value","wassen.nl"],["map","key","wat","value","watson.ch"],["map","key","waz","value","waze"],["map","key","wad","value","webads"],["map","key","web","value","webcollage"],["map","key","wba","value","webedia"],["map","key","weg","value","webedia gaming"],["map","key","wma","value","webmedia"],["map","key","wps","value","webpush"],["map","key","wrd","value","webradio"],["map","key","wsy","value","websystem"],["map","key","weo","value","weischer online"],["map","key","wer","value","werder.de"],["map","key","wha","value","whatsapp"],["map","key","wid","value","widespace"],["map","key","wik","value","wikia network"],["map","key","wil","value","willhaben"],["map","key","wog","value","wogibtswas"],["map","key","wia","value","wohnen im alter"],["map","key","woi","value","woisio"],["map","key","won","value","wonk"],["map","key","woo","value","woo"],["map","key","xgn","value","xgn"],["map","key","yah","value","yahoo"],["map","key","yan","value","yandex advertising"],["map","key","yel","value","yelp"],["map","key","ykp","value","yemeksepeti"],["map","key","ynk","value","yeniakit"],["map","key","ynb","value","yenibirlik"],["map","key","yen","value","yenisafak"],["map","key","yex","value","yext powerlistings"],["map","key","yir","value","yirmidorthaber.com"],["map","key","yoc","value","yoc"],["map","key","yab","value","youngandboys"],["map","key","yto","value","youtube owned"],["map","key","you","value","youtube paid"],["map","key","yub","value","yuboto"],["map","key","zan","value","zanox"],["map","key","zat","value","zattoo"],["map","key","zsi","value","zanussi.be"],["map","key","zay","value","zaytung"],["map","key","zel","value","ze"],["map","key","zet","value","zeta global"],["map","key","zpf","value","zipfelrausch"],["map","key","zol","value","zoldunio"],["map","key","zoo","value","zoom"],["map","key","","value",""],["map","key","vic","value","vice media"],["map","key","vie","value","vice"],["map","key","vir","value","viralize"],["map","key","vis","value","visoon video impact"],["map","key","vit","value","vitringez"],["map","key","voc","value","vocento news - el correo"],["map","key","voe","value","voetbalzone"],["map","key","vlt","value","vol.at"],["map","key","vla","value","vola"],["map","key","vol","value","volantinofacile"],["map","key","vrw","value","vr-world.com"],["map","key","vri","value","vriezer.nl"],["map","key","wal","value","wall of fame"],["map","key","wan","value","want"],["map","key","was","value","wassen.nl"],["map","key","wat","value","watson.ch"],["map","key","waz","value","waze"],["map","key","wea","value","wearablesmagazine"],["map","key","wad","value","webads"],["map","key","web","value","webcollage"],["map","key","wba","value","webedia"],["map","key","weg","value","webedia gaming"],["map","key","wma","value","webmedia"],["map","key","wps","value","webpush"],["map","key","wrd","value","webradio"],["map","key","wsy","value","websystem"],["map","key","wfc","value","weflycheap"],["map","key","weo","value","weischer online"],["map","key","wer","value","werder.de"],["map","key","wha","value","whatsapp"],["map","key","wid","value","widespace"],["map","key","wik","value","wikia network"],["map","key","wil","value","willhaben"],["map","key","wog","value","wogibtswas"],["map","key","wia","value","wohnen im alter"],["map","key","woi","value","woisio"],["map","key","won","value","wonk"],["map","key","woo","value","woo"],["map","key","xgn","value","xgn"],["map","key","yah","value","yahoo"],["map","key","yan","value","yandex advertising"],["map","key","yel","value","yelp"],["map","key","ykp","value","yemeksepeti"],["map","key","ynk","value","yeniakit"],["map","key","ynb","value","yenibirlik"],["map","key","yen","value","yenisafak"],["map","key","yex","value","yext powerlistings"],["map","key","yir","value","yirmidorthaber.com"],["map","key","yoc","value","yoc"],["map","key","yab","value","youngandboys"],["map","key","yto","value","youtube owned"],["map","key","you","value","youtube paid"],["map","key","yub","value","yuboto"],["map","key","zan","value","zanox"],["map","key","zat","value","zattoo"],["map","key","zsi","value","zanussi.be"],["map","key","zay","value","zaytung"],["map","key","zel","value","ze"],["map","key","zet","value","zeta global"],["map","key","zpf","value","zipfelrausch"],["map","key","zol","value","zoldunio"],["map","key","zoo","value","zoom"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=5,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",44],8,16],",a=4,b=c.split(\"|\");1==b.length\u0026\u0026(b=decodeURIComponent(c).split(\"|\"));c=\/^\\[([\\w\\-]+)\\]$\/;if(c.test(b[a]))if(a=c.exec(b[a])[1],b=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]+)\").exec(location.search)){a=b[1];try{a=decodeURIComponent(a)}catch(d){}}else a=\"not-found-\"+a;else a=b[a];return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",104],
      "vtp_defaultValue":["macro",104],
      "vtp_map":["list",["map","key","b","value","brand"],["map","key","p","value","product"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","clientId","value",["macro",23]],["map","fieldName","hitCallback","value",["macro",46]],["map","fieldName","page","value",["macro",49]],["map","fieldName","userId","value",["macro",50]],["map","fieldName","siteSpeedSampleRate","value",["macro",51]],["map","fieldName","campaignContent","value",["macro",97]],["map","fieldName","campaignKeyword","value",["macro",98]],["map","fieldName","campaignMedium","value",["macro",100]],["map","fieldName","campaignSource","value",["macro",102]],["map","fieldName","campaignName","value",["macro",103]],["map","fieldName","\u0026qt","value","500"],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","4","dimension",["macro",52]],["map","index","5","dimension",["macro",53]],["map","index","6","dimension",["macro",54]],["map","index","7","dimension",["macro",20]],["map","index","8","dimension",["macro",55]],["map","index","12","dimension",["macro",50]],["map","index","13","dimension",["macro",25]],["map","index","14","dimension",["macro",26]],["map","index","15","dimension",["macro",27]],["map","index","16","dimension",["macro",56]],["map","index","17","dimension",["macro",57]],["map","index","18","dimension",["macro",58]],["map","index","19","dimension",["macro",59]],["map","index","20","dimension",["macro",60]],["map","index","21","dimension",["macro",61]],["map","index","22","dimension",["macro",62]],["map","index","2","dimension",["macro",63]],["map","index","27","dimension",["macro",64]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","29","dimension",["macro",105]],["map","index","30","dimension","1"],["map","index","67","dimension",["macro",68]],["map","index","70","dimension",["macro",69]],["map","index","72","dimension",["macro",71]],["map","index","77","dimension",["macro",72]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].brand);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].name);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",108],8,16],",b=",["escape",["macro",78],8,16],";return b(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].price);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].category);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].dimension9);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].dimension10);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b.push(",["escape",["macro",81],8,16],"[a].dimension11);return b.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",70],7],"\"===\"\"?\"EC\":\"",["escape",["macro",70],7],"\"===\"New\"?\"NC\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clubCard"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!=typeof ",["escape",["macro",116],8,16],"?\"Club\":\"NoClub\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[location.protocol,\"\/\/\",location.host,",["escape",["macro",49],8,16],"].join(\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",118],8,16],",b=",["escape",["macro",78],8,16],";return b(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b+=",["escape",["macro",81],8,16],"[a].price*",["escape",["macro",81],8,16],"[a].quantity;return Math.round(100*b)\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],",b=",["escape",["macro",78],8,16],",c=\/[\\r\\n]\/gi,d=150;return!a||null!==a.match(c)||a.length\u003Ed?\"\":b(a)})();"]
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b+=Math.round(",["escape",["macro",81],8,16],"[a].price*",["escape",["macro",81],8,16],"[a].quantity\/(1+(",["escape",["macro",81],8,16],"[a].dimension24||",["escape",["macro",122],8,16],")\/100)*100)\/100;return Math.round(100*b)\/100})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",8],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value",["macro",9]],["map","fieldName","clientId","value",["macro",23]],["map","fieldName","hitCallback","value",["macro",46]],["map","fieldName","page","value",["macro",49]],["map","fieldName","userId","value",["macro",50]],["map","fieldName","siteSpeedSampleRate","value",["macro",51]],["map","fieldName","\u0026qt","value","500"],["map","fieldName","cookieExpires","value",["macro",11]],["map","fieldName","customTask","value",["macro",14]],["map","fieldName","forceSSL","value",["macro",15]],["map","fieldName","allowAdFeatures","value",["macro",19]],["map","fieldName","referrer","value",["macro",10]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",24]],["map","index","2","group",["macro",25]],["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]],["map","index","5","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",29]],["map","index","4","dimension",["macro",52]],["map","index","5","dimension",["macro",53]],["map","index","6","dimension",["macro",54]],["map","index","7","dimension",["macro",20]],["map","index","8","dimension",["macro",55]],["map","index","12","dimension",["macro",50]],["map","index","13","dimension",["macro",25]],["map","index","14","dimension",["macro",26]],["map","index","15","dimension",["macro",27]],["map","index","16","dimension",["macro",56]],["map","index","17","dimension",["macro",57]],["map","index","18","dimension",["macro",58]],["map","index","19","dimension",["macro",59]],["map","index","20","dimension",["macro",60]],["map","index","21","dimension",["macro",61]],["map","index","22","dimension",["macro",62]],["map","index","2","dimension",["macro",63]],["map","index","27","dimension",["macro",64]],["map","index","66","dimension",["macro",32]],["map","index","68","dimension",["macro",33]],["map","index","69","dimension",["macro",24]],["map","index","67","dimension",["macro",68]],["map","index","70","dimension",["macro",69]],["map","index","72","dimension",["macro",71]],["map","index","77","dimension",["macro",72]],["map","index","71","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"provider"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"template"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__j",
      "vtp_name":"localStorage.transactions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",132],8,16],",b=",["escape",["macro",133],8,16],";try{if(\"undefined\"===a)return\"Undefined Value - Transaction ID!\";if(null!=b){var c=b.split(\"|\");return-1\u003Cc.indexOf(a)?\"blockTransaction\":\"newTransaction\"}return\"Undefined Value - Local Storage Variable!\"}catch(d){return console.log(\"Error in JS - Blocking - Transactions Function\"),console.log(d),\"Undefined Value!\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",135],8,16],",b=",["escape",["macro",132],8,16],",c=",["escape",["macro",133],8,16],";try{if(\"undefined\"!==b\u0026\u0026null!=c){var d=c.split(\"|\");return-1\u003Cd.indexOf(b)?void 0:{ecommerce:a}}return{ecommerce:a}}catch(e){return console.log(\"Error in JS - GA ecommerce Function\"),console.log(e),{ecommerce:a}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",132],8,16],",c=",["escape",["macro",133],8,16],";return\"undefined\"===b?function(){}:function(){if(null!=c){var a=c.split(\"|\");-1==a.indexOf(b)\u0026\u0026(a.push(b),localStorage.setItem(\"transactions\",a.join(\"|\")))}else a=[],a.push(b),localStorage.setItem(\"transactions\",a.join(\"|\"))}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"1112091|1141465|1141466|1160680|1165580|1191705|1112085|1160851|1160852|1181200|1181201"
    },{
      "function":"__c",
      "vtp_value":"services|warranty|MONDIAL|UNIVERSAL|POWER SERVICE|shipping|coupon"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",c=[];a\u0026\u0026(a=a.purchase?a.purchase.products:a.checkout?a.checkout.products:a.impressions?a.impressions:[]);for(var b=0;b\u003Ca.length;++b)(new RegExp(\"^(\"+",["escape",["macro",139],8,16],"+\")$\")).test(a[b].id)||(new RegExp(\"^(\"+",["escape",["macro",140],8,16],"+\")$\",\"i\")).test(a[b].category)||c.push(a[b]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",b=[];a\u0026\u0026(b=a.purchase?a.purchase.products:a.checkout?a.checkout.products:a.impressions?a.impressions:[]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",142],8,16],".length;++a)b.push(",["escape",["macro",142],8,16],"[a].id);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=0;a\u003C",["escape",["macro",142],8,16],".length;++a)b+=1*",["escape",["macro",142],8,16],"[a].price;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=0;a\u003C",["escape",["macro",142],8,16],".length;++a)b+=",["escape",["macro",142],8,16],"[a].quantity;return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[",["escape",["macro",147],8,16],".category,",["escape",["macro",147],8,16],".dimension9,",["escape",["macro",147],8,16],".dimension10].join(\"\/\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",142],8,16],".length;++a)b.push([",["escape",["macro",142],8,16],"[a].category,",["escape",["macro",142],8,16],"[a].dimension9,",["escape",["macro",142],8,16],"[a].dimension10].join(\"\/\"));return b})();"]
    },{
      "function":"__j",
      "vtp_name":"localStorage.optOutFB"
    },{
      "function":"__j",
      "vtp_name":"dataLayer"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MC_USER_ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[",["escape",["macro",25],8,16],"];",["escape",["macro",26],8,16],"\u0026\u0026a.push(",["escape",["macro",26],8,16],");",["escape",["macro",27],8,16],"\u0026\u0026a.push(",["escape",["macro",27],8,16],");",["escape",["macro",28],8,16],"\u0026\u0026a.push(",["escape",["macro",28],8,16],");return a.join(\"\\x3e\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",c=[];if(a){a=a.checkout\u0026\u0026a.checkout.products?a.checkout.products:a.purchase\u0026\u0026a.purchase.products?a.purchase.products:[];for(var b=0;b\u003Ca.length;++b)c.push({item:a[b].id,price:1*a[b].price,quantity:a[b].quantity||1})}return c})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__t"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.brand"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",42],
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key","Σύνδεση","value","Sign In"],["map","key","Εγγραφή","value","Register"],["map","key","Συνέχεια","value","Guest Order"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";if(mcs.context\u0026\u0026mcs.context.saleslineOfficial)a+=mcs.context.saleslineOfficial;else{var b=document.domain.split(\".\");a=\"saturn\"==b[0]?a+\"se\":a+\"mm\"}mcs.context\u0026\u0026mcs.context.country?a+=mcs.context.country:(b=document.domain.split(\".\"),a+=b[b.length-1]);mcs.context\u0026\u0026mcs.context.language?a+=mcs.context.language:(b=document.documentElement.lang||navigator.language||\"de\",b=b.split(\"-\"),a+=b[0]);return a.toLowerCase()})();"]
    },{
      "function":"__c",
      "vtp_value":"\/FACT-Finder\/Tracking.ff"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MC_PS_USER_ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.pageInfo.channel"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"MC_PS_USER_ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"MC_PS_SESSION_ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",168],8,16],"+\"-\"+",["escape",["macro",169],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Undefined",
      "vtp_name":"ecommerce.click.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.pageInfo.currentPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.pageInfo.originalPageSize"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.pageInfo.campaigns"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",135],8,16],",b=[];a\u0026\u0026(b=a.purchase?a.purchase.products:a.checkout?a.checkout.products:a.impressions?a.impressions:a.add.products?a.add.products:[]);return b})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",b=[];a\u0026\u0026(b=a.purchase?a.purchase.products:a.checkout?a.checkout.products:a.impressions?a.impressions:a.add.products?a.add.products:[]);return b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__c",
      "vtp_value":"rbmmh"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/-(\\d+)\\.html$\/.exec(location.pathname)[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",182],8,16],".length;++a)b.push(",["escape",["macro",182],8,16],"[a].id);return b.join(\"|\")})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"product-id",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=0;a\u003C",["escape",["macro",81],8,16],".length;++a)b+=",["escape",["macro",81],8,16],"[a].quantity;return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.ean"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",7],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",36],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form - Register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",40],
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":16
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",74],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",82]],["map","key","ecomm_pagetype","value",["macro",83]],["map","key","ecomm_totalvalue","value",["macro",84]],["map","key","dynx_itemid","value",["macro",82]],["map","key","dynx_pagetype","value",["macro",83]],["map","key","dynx_totalvalue","value",["macro",84]]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"975460589",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",85],
      "vtp_enableRdpCheckbox":true,
      "tag_id":25
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",86],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"975460589",
      "vtp_currencyCode":"EUR",
      "vtp_conversionLabel":"NbC5CKPBkgcQ7bGR0QM",
      "vtp_url":["macro",85],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":26
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",87],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",88],
      "vtp_basketArray":["macro",89],
      "tag_id":32
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",87],
      "vtp_productID":["macro",90],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",88],
      "tag_id":33
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",87],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",88],
      "vtp_TransactionID":["macro",62],
      "vtp_TransactionArray":["macro",89],
      "tag_id":34
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",87],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",91],
      "vtp_siteType":["macro",88],
      "tag_id":36
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"media0",
      "vtp_useImageTag":true,
      "vtp_activityTag":"thank0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4647555",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":45
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":"Add to Wishlist",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":"Add to Compare",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Review",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":"Show More Reviews",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",106],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":60
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":67
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nvrrh",
      "tag_id":86
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"nvrrh",
      "vtp_event_parameters":["list",["map","param_table_key_column","value","param_table_value_column",["macro",86]]],
      "tag_id":87
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",107]],["map","key","u4","value",["macro",109]],["map","key","u5","value",["macro",110]],["map","key","u8","value",["macro",111]],["map","key","u9","value",["macro",112]],["map","key","u10","value",["macro",113]],["map","key","u11","value",["macro",114]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]],["map","key","u17","value",["macro",120]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"baske0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":125
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u8","value","Homepage"],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"homep0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":126
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",107]],["map","key","u4","value",["macro",109]],["map","key","u5","value",["macro",110]],["map","key","u8","value",["macro",25]],["map","key","u9","value",["macro",26]],["map","key","u10","value",["macro",27]],["map","key","u11","value",["macro",28]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"produ0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":127
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",107]],["map","key","u4","value",["macro",109]],["map","key","u5","value",["macro",110]],["map","key","u8","value",["macro",25]],["map","key","u9","value",["macro",26]],["map","key","u10","value",["macro",27]],["map","key","u11","value",["macro",28]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"produ00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":128
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",107]],["map","key","u4","value",["macro",109]],["map","key","u5","value",["macro",110]],["map","key","u8","value",["macro",121]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"searc0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":129
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["macro",62]],["map","key","u2","value",["macro",82]],["map","key","u3","value",["macro",107]],["map","key","u4","value",["macro",109]],["map","key","u5","value",["macro",110]],["map","key","u6","value",["macro",120]],["map","key","u7","value",["macro",123]],["map","key","u8","value",["macro",111]],["map","key","u9","value",["macro",112]],["map","key","u10","value",["macro",113]],["map","key","u11","value",["macro",114]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u13","value",["macro",60]],["map","key","u14","value",["macro",59]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_revenue":["macro",124],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",62],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"thank0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"DATA_LAYER",
      "vtp_advertiserId":"6522549",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":131
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",86],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"854576708",
      "vtp_currencyCode":"EUR",
      "vtp_conversionLabel":"a7JiCJOx43AQxJy_lwM",
      "vtp_url":["macro",85],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":257
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout JS Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",125],
      "vtp_eventLabel":["template",["macro",126],":",["macro",127]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":306
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":["macro",74],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":319
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",7],
      "vtp_eventCategory":["macro",4],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":320
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",128],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":322
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PDF Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",38],
      "vtp_eventAction":["macro",40],
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":323
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PushPushGo",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":["macro",130],
      "vtp_eventLabel":["macro",131],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":342
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",74],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",93],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":358
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",136],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",137]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",73],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":359
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":361
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u8","value","CMS"],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"cms-p0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":380
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u8","value",["macro",24]],["map","key","u12","value",["template",["macro",115],"|",["macro",117]]],["map","key","u15","value",["macro",50]],["map","key","u21","value",["macro",119]],["map","key","u22","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"store0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gr-mm0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6522549",
      "vtp_ordinalStandard":["macro",92],
      "vtp_url":["macro",85],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":381
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"59672",
      "tag_id":1160
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1108239_33",
      "tag_id":1164
    },{
      "function":"__cl",
      "tag_id":1165
    },{
      "function":"__cl",
      "tag_id":1166
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1108239_68",
      "tag_id":1167
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1108239_92",
      "tag_id":1168
    },{
      "function":"__cl",
      "tag_id":1169
    },{
      "function":"__cl",
      "tag_id":1170
    },{
      "function":"__jel",
      "tag_id":1171
    },{
      "function":"__cl",
      "tag_id":1172
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1108239_629",
      "tag_id":1173
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1108239_653",
      "tag_id":1174
    },{
      "function":"__cl",
      "tag_id":1175
    },{
      "function":"__cl",
      "tag_id":1176
    },{
      "function":"__cl",
      "tag_id":1177
    },{
      "function":"__cl",
      "tag_id":1178
    },{
      "function":"__cl",
      "tag_id":1179
    },{
      "function":"__cl",
      "tag_id":1180
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(document).ready(function(){a(\"form :input\").blur(function(){0\u003Ca(this).val().length\u0026\u0026!a(this).hasClass(\"completed\")?(dataLayer.push({eventCategory:\"Form - \"+a(this).closest(\"form\").attr(\"id\"),eventAction:\"completed\",eventLabel:a(this).attr(\"name\"),event:\"gaFieldInteraction\"}),a(this).addClass(\"completed\")):a(this).hasClass(\"completed\")||a(this).hasClass(\"skipped\")||(dataLayer.push({eventCategory:\"Form - \"+a(this).closest(\"form\").attr(\"id\"),eventAction:\"skipped\",eventLabel:a(this).attr(\"name\"),\nevent:\"gaFieldInteraction\"}),a(this).addClass(\"skipped\"))})})})(jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar disableStr=\"ga-disable-\"+",["escape",["macro",1],8,16],";function gaOptout(){document.cookie=disableStr+\"\\x3dtrue; expires\\x3dThu, 31 Dec 2099 23:59:59 UTC; path\\x3d\/\";window[disableStr]=!0};\u003C\/script\u003E"],
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{window.jQuery\u0026\u0026function(a){a(\"body\").on(\"mousedown\",\"#filters fieldset div.cf label:has(input[type\\x3dcheckbox])\",function(b){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:a(this).find(\"input[type\\x3dcheckbox]\").is(\":checked\")?\"uncheck\":\"check\",eventLabel:[a(this).closest(\"fieldset\").find(\".headline a\").text(),a.trim(a(this).parent().text()).replace(\/\\s*\\(\\d+\\.?\\d*\\)$\/,\"\")].join(\" \/ \")?[a(this).closest(\"fieldset\").find(\".headline a\").text(),a.trim(a(this).parent().text()).replace(\/\\s*\\(\\d+\\.?\\d*\\)$\/,\n\"\")].join(\" \/ \"):\"no_checkbox\"})});a(\"body\").on(\"mousedown\",\"#filters fieldset div.cf a.ui-slider-handle\",function(){var b=a(this).parent().find(\"a.ui-slider-handle\");dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"grab\",eventLabel:[a(this).closest(\"fieldset\").find(\".headline a\").text(),b.index(this)+1+\"\/\"+b.length].join(\" \/ \")?[a(this).closest(\"fieldset\").find(\".headline a\").text(),b.index(this)+1+\"\/\"+b.length].join(\" \/ \"):\"no_slider\"})});a(\"body\").on(\"mousedown\",\"#filters fieldset div.cf div.ui-slider\",\nfunction(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"click\",eventLabel:[a(this).closest(\"fieldset\").find(\".headline a\").text()].join(\" \/ \")?[a(this).closest(\"fieldset\").find(\".headline a\").text()].join(\" \/ \"):\"no_slider_click\"})});a(\"body\").on(\"mousedown\",\"#filters fieldset div.cf .sm-show a.showmore:visible\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"expand\",eventLabel:a(this).closest(\"fieldset\").find(\".headline a\").text()?a(this).closest(\"fieldset\").find(\".headline a\").text():\n\"no_show_more\"})});a(\"body\").on(\"focus\",\"#filters fieldset div.cf select\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"select\",eventLabel:a(this).closest(\"fieldset\").find(\".headline a\").text()?a(this).closest(\"fieldset\").find(\".headline a\").text():\"no_dropdown\"})});a(\"body\").on(\"focus\",\"#filters fieldset div.cf div.inline-input input\",function(){var b=a(this).parent().parent().find(\"div.inline-input input\");dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"input\",\neventLabel:[a(this).closest(\"fieldset\").find(\".headline a\").text(),b.index(this)+1+\"\/\"+b.length].join(\" \/ \")?[a(this).closest(\"fieldset\").find(\".headline a\").text(),b.index(this)+1+\"\/\"+b.length].join(\" \/ \"):\"no_direct\"})});a(\"body\").on(\"focus\",\"div.facettes-container input[type\\x3dcheckbox]\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:a(this).is(\":checked\")?\"uncheck\":\"check\",eventLabel:[a.trim(a(this).parent().parent().parent().parent().find(\"h3\").text()),a.trim(a(this).parent().find(\"label\").text()).replace(\/\\s*\\(\\d+\\.?\\d*\\)$\/,\n\"\")].join(\" \/ \")?[a.trim(a(this).parent().parent().parent().parent().find(\"h3\").text()),a.trim(a(this).parent().find(\"label\").text()).replace(\/\\s*\\(\\d+\\.?\\d*\\)$\/,\"\")].join(\" \/ \"):\"no_checkbox\"})});a(\"body\").on(\"focus\",\"div.facettes-container select\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"select\",eventLabel:a.trim(a(this).parent().parent().parent().parent().find(\"h3\").text())?a.trim(a(this).parent().parent().parent().parent().find(\"h3\").text()):\"no_dropdown\"})});\na(\"body\").on(\"focus\",\"div.facettes-container div.info-slider-input-container input\",function(){var b=a(this).parent().parent().find(\"input\");dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"input\",eventLabel:[a.trim(a(this).parent().parent().parent().parent().parent().parent().find(\"h3\").text()),b.index(this)+1+\"\/\"+b.length].join(\" \/ \")?[a.trim(a(this).parent().parent().parent().parent().parent().parent().find(\"h3\").text()),b.index(this)+1+\"\/\"+b.length].join(\" \/ \"):\"no_direct\"})});\na(\"div.facettes-container div.noUi-handle\").on(\"touchstart\",function(){var b=a(this).parent().parent().find(\"div.noUi-handle\");dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"grab\",eventLabel:[a.trim(a(this).parent().parent().parent().parent().parent().parent().parent().parent().find(\"h3\").text()),b.index(this)+1+\"\/\"+b.length].join(\" \/ \")?[a.trim(a(this).parent().parent().parent().parent().parent().parent().parent().parent().find(\"h3\").text()),b.index(this)+1+\"\/\"+b.length].join(\" \/ \"):\n\"no_slider\"})});a(\"body\").on(\"touchstart\",\"#wrapper-main section.mrh-facettes a.button.facettes-trigger\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Facet\",eventAction:\"Close\",eventLabel:\"Close button\"})})}(jQuery)}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/gr.linkwi.se\/delivery\/js\/tl.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/gr.linkwi.se\/delivery\/lwc\/lwc.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(){for(var c={},b=0;b\u003C",["escape",["macro",141],8,16],".length;++b){var a=",["escape",["macro",141],8,16],"[b],e=a.quantity,f=Math.round(a.price\/(1+a.dimension24\/100)*100)\/100;a=[a.category,a.dimension9,a.dimension10,a.dimension11];a=\"\\u03a4\\u03b7\\u03bb\\u03b5\\u03bf\\u03c1\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2\"===a[1]||\"SMART TV\"===a[2]||\"8K UHD TV\"===a[2]||\"4K UHD TV\"===a[2]||\"OLED TV\"===a[2]||\"QLED TV\"===a[2]||\"\\u039a\\u03b9\\u03bd\\u03b7\\u03c4\\u03ac\"===a[1]||\"\\u039f\\u03b8\\u03cc\\u03bd\\u03b5\\u03c2\"===a[1]||\"E-Books\"===\na[1]||\"All in One\"===a[2]||\"Desktop\"===a[2]||\"Gaming Desktop\"===a[2]||\"iMac\"===a[2]||\"Mini Pc\"===a[2]||encodeURI(a[2])===encodeURI('Laptop \\u03ad\\u03c9\\u03c2 14\"')||a[2]===encodeURI('Laptop \\u03ad\\u03c9\\u03c2 14\"')||encodeURI(a[2])===encodeURI('Laptop \\u03b1\\u03c0\\u03cc 14\"')||a[2]===encodeURI('Laptop \\u03b1\\u03c0\\u03cc 14\"')||\"2in 1 - Ultrabook\"===a[2]||\"Gaming Laptop\"===a[2]||\"MacBook\"===a[2]||\"Mini Laptop\"===a[2]||\"Android Tablet\"===a[2]||\"iPad\"===a[2]||\"Windows Tablet\"===a[2]||\"Tablet 2 \\u03c3\\u03b5 1\"===\na[2]||\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u039c\\u03bd\\u03ae\\u03bc\\u03b7\\u03c2\"===a[2]||\"Optical drive\"===a[2]||\"\\u0391\\u03c0\\u03bf\\u03b8\\u03ae\\u03ba\\u03b5\\u03c5\\u03c3\\u03b7 \\u0394\\u03b5\\u03b4\\u03bf\\u03bc\\u03ad\\u03bd\\u03c9\\u03bd\"===a[1]||\"\\u0394\\u03af\\u03c3\\u03ba\\u03bf\\u03b9 \\u0395\\u03c3\\u03c9\\u03c4\\u03b5\\u03c1\\u03b9\\u03ba\\u03bf\\u03af\"===a[2]||\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u0393\\u03c1\\u03b1\\u03c6\\u03b9\\u03ba\\u03ce\\u03bd\"===a[2]||\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u0389\\u03c7\\u03bf\\u03c5\"===\na[2]||\"\\u039a\\u03bf\\u03c5\\u03c4\\u03b9\\u03ac \\u0397\/\\u03a5\"===a[2]||\"\\u039c\\u03b7\\u03c4\\u03c1\\u03b9\\u03ba\\u03ad\\u03c2\"===a[2]||\"SSD\"===a[2]||\"\\u03a4\\u03c1\\u03bf\\u03c6\\u03bf\\u03b4\\u03bf\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u0395\\u03c0\\u03b5\\u03be\\u03b5\\u03c1\\u03b3\\u03b1\\u03c3\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u039c\\u03bd\\u03ae\\u03bc\\u03b5\\u03c2 RAM\"===a[2]||\"Access Point- Router- Range Extender- Switch\"===a[2]||\"IP Camera\"===a[2]||\"Modem Router\"===a[2]||\"Powerline\"===a[2]||\"\\u0391\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03b7 \\u039a\\u03ac\\u03c1\\u03c4\\u03b1 \\u0394\\u03b9\\u03ba\\u03c4\\u03cd\\u03bf\\u03c5\"===\na[2]||\"Smart Home\"===a[1]||\"PCI Adaptor\"===a[2]||\"Scanner\"===a[2]||\"\\u0395\\u03ba\\u03c4\\u03c5\\u03c0\\u03c9\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u03a0\\u03bf\\u03bb\\u03c5\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ae\\u03bc\\u03b1\\u03c4\\u03b1\"===a[2]||\"Bluetooth Adapter\"===a[2]||\"Card Reader\"===a[2]||\"Headset\"===a[2]||\"Mousepad\"===a[2]||\"USB Hub\"===a[2]||\"Webcam\"===a[2]||\"Wireless Audio\"===a[2]||\"\\u0397\\u03c7\\u03b5\\u03af\\u03b1\"===a[2]||\"TV- Tuner\"===a[2]||\"Presenter\"===a[2]||\"\\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1 \\u03a1\\u03b5\\u03cd\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===\na[2]||\"\\u03a0\\u03bb\\u03b7\\u03ba\\u03c4\\u03c1\\u03bf\\u03bb\\u03cc\\u03b3\\u03b9\\u03b1 \\x26 \\u03a0\\u03bf\\u03bd\\u03c4\\u03af\\u03ba\\u03b9\\u03b1\"===a[2]||\"\\u0393\\u03c1\\u03b1\\u03c6\\u03af\\u03b4\\u03b5\\u03c2\"===a[2]||\"iPhone\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac Apple\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2 iPhone\"===a[2]||\"\\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 \\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1\\u03c2 iPhone\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 Apple\"===\na[2]||\"\\u03a6\\u03bf\\u03c1\\u03c4\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2 iPhone\"===a[2]||\"Windows Smartphone\"===a[2]||\"Smart Gadgets\"===a[2]||\"\\u03a1\\u03bf\\u03bc\\u03c0\\u03cc\\u03c4\"===a[2]||\"Activity Trackers\"===a[2]||\"Apple\"===a[2]||\"Android\"===a[2]||\"Samsung\"===a[2]||\"Huawei\"===a[2]?\"1\":\"\\u0391\\u03c3\\u03c6\\u03ac\\u03bb\\u03b5\\u03b9\\u03b1 \\u03a3\\u03c0\\u03b9\\u03c4\\u03b9\\u03bf\\u03cd\"===a[1]||\"\\u0391\\u03c0\\u03bf\\u03ba\\u03c9\\u03b4\\u03b9\\u03ba\\u03bf\\u03c0\\u03bf\\u03b9\\u03b7\\u03c4\\u03ad\\u03c2\"===a[1]||\"Media Players\"===\na[1]||\"\\u039a\\u03c5\\u03ac\\u03bb\\u03b9\\u03b1- \\u03a4\\u03b7\\u03bb\\u03b5\\u03c3\\u03ba\\u03cc\\u03c0\\u03b9\\u03b1\"===a[1]||\"\\u03a8\\u03b7\\u03c6\\u03b9\\u03b1\\u03ba\\u03ad\\u03c2 \\u039a\\u03bf\\u03c1\\u03bd\\u03af\\u03b6\\u03b5\\u03c2\"===a[1]||\"\\u0395\\u03bd\\u03b4\\u03bf\\u03b5\\u03c0\\u03b9\\u03ba\\u03bf\\u03b9\\u03bd\\u03c9\\u03bd\\u03af\\u03b1\"===a[2]||\"Smartwatches\"===a[2]||\"\\u03a3\\u03c5\\u03bd\\u03b4\\u03ad\\u03c3\\u03b5\\u03b9\\u03c2 \\u03ba\\u03b9\\u03bd\\u03b7\\u03c4\\u03ae\\u03c2\"===a[2]||\"\\u0391\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03b1 \\u03a4\\u03b7\\u03bb\\u03ad\\u03c6\\u03c9\\u03bd\\u03b1\"===\na[2]||\"\\u0395\\u03bd\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03b1 \\u03a4\\u03b7\\u03bb\\u03ad\\u03c6\\u03c9\\u03bd\\u03b1\"===a[2]||\"\\u03a0\\u03bb\\u03bf\\u03ae\\u03b3\\u03b7\\u03c3\\u03b7\"===a[2]||\"Walkie Talkie\"===a[2]||\"Multiroom Speakers\"===a[2]||\"Docking Stations\"===a[2]||\"Wireless Audio\"===a[2]||\"\\u03a1\\u03b1\\u03b4\\u03b9\\u03cc\\u03c6\\u03c9\\u03bd\\u03b1\"===a[2]||\"Micro Hi-Fi\"===a[2]||\"Hi-Fi CD\/ Network Players\"===a[2]||\"\\u0397\\u03c7\\u03b5\\u03af\\u03b1 Hi-Fi\"===a[2]||\"\\u03a0\\u03b9\\u03ba\\u03ac\\u03c0\"===a[2]||\"\\u0395\\u03bd\\u03b9\\u03c3\\u03c7\\u03c5\\u03c4\\u03ad\\u03c2 Stereo\"===\na[2]||\"AV Receivers\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 \\u0389\\u03c7\\u03bf\\u03c5\"===a[2]||\"\\u0395\\u03c0\\u03b1\\u03b3\\u03b3\\u03b5\\u03bb\\u03bc\\u03b1\\u03c4\\u03b9\\u03ba\\u03cc\\u03c2 \\u0389\\u03c7\\u03bf\\u03c2 - Dj\"===a[2]||\"\\u03a0\\u03b7\\u03b3\\u03ad\\u03c2 Car Hi-Fi\"===a[2]||\"\\u0397\\u03c7\\u03b5\\u03af\\u03b1 - \\u0395\\u03bd\\u03b9\\u03c3\\u03c7\\u03c5\\u03c4\\u03ad\\u03c2 Car Hi-Fi\"===a[2]||\"iPod- MP3- MP4\"===a[2]||\"Projectors\"===a[2]||\"Soundbars\"===a[2]||\"Home Cinema\"===a[2]||\"DVD Players\"===a[2]||\n\"Blu-ray Players\"===a[2]||\"DVD Players \\u03a6\\u03bf\\u03c1\\u03b7\\u03c4\\u03ac\"===a[2]||\"Compact Cameras\"===a[2]||\"DSLR Cameras\"===a[2]||\"\\u03a6\\u03b1\\u03ba\\u03bf\\u03af DSLR\"===a[2]||\"Mirrorless Cameras\"===a[2]||\"\\u03a6\\u03b1\\u03ba\\u03bf\\u03af Mirrorless\"===a[2]||\"\\u038c\\u03c1\\u03b3\\u03b1\\u03bd\\u03b1 \\u0393\\u03c5\\u03bc\\u03bd\\u03b1\\u03c3\\u03c4\\u03b9\\u03ba\\u03ae\\u03c2\"===a[2]||\"\\u0395\\u03c1\\u03b3\\u03b1\\u03bb\\u03b5\\u03af\\u03b1 \\u039a\\u03ae\\u03c0\\u03bf\\u03c5\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac \\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ae\\u03bc\\u03b1\\u03c4\\u03b1\"===\na[2]||\"\\u0395\\u03c1\\u03b3\\u03b1\\u03bb\\u03b5\\u03af\\u03b1\"===a[2]||\"Drones \\x26 \\u03a4\\u03b7\\u03bb\\u03b5\\u03ba\\u03b1\\u03c4\\u03b5\\u03c5\\u03b8\\u03c5\\u03bd\\u03cc\\u03bc\\u03b5\\u03bd\\u03b1\"===a[2]||\"Drones\"===a[2]||\"\\u03a4\\u03b7\\u03bb\\u03b5\\u03ba\\u03b1\\u03c4\\u03b5\\u03c5\\u03b8\\u03c5\\u03bd\\u03cc\\u03bc\\u03b5\\u03bd\\u03b1\"===a[2]||\"\\u0392\\u03b9\\u03bd\\u03c4\\u03b5\\u03bf\\u03ba\\u03ac\\u03bc\\u03b5\\u03c1\\u03b5\\u03c2\"===a[1]||\"Cameras\"===a[2]||\"360\\u00b0 Action Cameras\"===a[2]||\"Car Cameras\"===a[2]||\"\\u0394\\u03b7\\u03bc\\u03bf\\u03c3\\u03b9\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b9\\u03ba\\u03ac\"===\na[2]||\"\\u039a\\u03b1\\u03c4\\u03b1\\u03c3\\u03c4\\u03c1\\u03bf\\u03c6\\u03b5\\u03af\\u03c2 \\u0395\\u03b3\\u03b3\\u03c1\\u03ac\\u03c6\\u03c9\\u03bd\"===a[2]||\"\\u03a0\\u03bb\\u03b1\\u03c3\\u03c4\\u03b9\\u03ba\\u03bf\\u03c0\\u03bf\\u03b9\\u03b7\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u03a6\\u03b1\\u03be\"===a[2]||\"\\u0395\\u03af\\u03b4\\u03b7 \\u0393\\u03c1\\u03b1\\u03c6\\u03ae\\u03c2\"===a[2]||\"\\u0391\\u03c1\\u03b9\\u03b8\\u03bc\\u03bf\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u03a3\\u03c5\\u03c3\\u03c4\\u03ae\\u03bc\\u03b1\\u03c4\\u03b1 POS\"===a[2]?\"2\":\n\"\\u03a5\\u03b3\\u03b9\\u03b5\\u03b9\\u03bd\\u03ae- \\u0394\\u03b9\\u03b1\\u03c4\\u03c1\\u03bf\\u03c6\\u03ae\"===a[2]||\"\\u0391\\u03c0\\u03bf\\u03c4\\u03c1\\u03b9\\u03c7\\u03c9\\u03c4\\u03b9\\u03ba\\u03ad\\u03c2 \\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u03a6\\u03c9\\u03c4\\u03cc\\u03bb\\u03c5\\u03c3\\u03b7\"===a[2]||\"\\u0399\\u03c3\\u03b9\\u03c9\\u03c4\\u03b9\\u03ba\\u03ac- \\u03a8\\u03b1\\u03bb\\u03af\\u03b4\\u03b9\\u03b1 \\u039c\\u03b1\\u03bb\\u03bb\\u03b9\\u03ce\\u03bd\"===a[2]||\"\\u03a0\\u03b9\\u03c3\\u03c4\\u03bf\\u03bb\\u03ac\\u03ba\\u03b9\\u03b1 \\u039c\\u03b1\\u03bb\\u03bb\\u03b9\\u03ce\\u03bd\"===\na[2]||\"\\u03a3\\u03c5\\u03c3\\u03ba\\u03b5\\u03c5\\u03ae \\u03bc\\u03b1\\u03c3\\u03ac\\u03b6 \\u03ba\\u03b1\\u03c4\\u03ac \\u03c4\\u03c9\\u03bd \\u03c1\\u03c5\\u03c4\\u03af\\u03b4\\u03c9\\u03bd\"===a[2]||\"\\u03a5\\u03b3\\u03b5\\u03af\\u03b1\"===a[2]||\"\\u039a\\u03bf\\u03c5\\u03c1\\u03b5\\u03c5\\u03c4\\u03b9\\u03ba\\u03ad\\u03c2 \\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u039e\\u03c5\\u03c1\\u03b9\\u03c3\\u03c4\\u03b9\\u03ba\\u03ad\\u03c2 \\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u039c\\u03b1\\u03c3\\u03ac\\u03b6\"===a[2]||\"\\u03a3\\u03c4\\u03bf\\u03bc\\u03b1\\u03c4\\u03b9\\u03ba\\u03ae \\u03a5\\u03b3\\u03b9\\u03b5\\u03b9\\u03bd\\u03ae\"===\na[2]||\"\\u03a0\\u03b9\\u03b5\\u03c3\\u03cc\\u03bc\\u03b5\\u03c4\\u03c1\\u03b1\"===a[2]||\"\\u0396\\u03c5\\u03b3\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2 \\u03a3\\u03ce\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===a[2]||\"\\u03a6\\u03c1\\u03bf\\u03bd\\u03c4\\u03af\\u03b4\\u03b1 \\u03a3\\u03ce\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03c1\\u03ad\\u03ba\\u03bb\\u03b5\\u03c2 \\u03bc\\u03b1\\u03c3\\u03ac\\u03b6\"===a[2]||\"\\u03a5\\u03b4\\u03c1\\u03bf\\u03bc\\u03b1\\u03c3\\u03ac\\u03b6\"===a[2]||\"\\u039a\\u03b1\\u03c4\\u03ac \\u03c4\\u03b7\\u03c2 \\u03ba\\u03c5\\u03c4\\u03c4\\u03b1\\u03c1\\u03af\\u03c4\\u03b9\\u03b4\\u03b1\\u03c2\"===\na[2]||\"\\u039c\\u03b1\\u03be\\u03b9\\u03bb\\u03ac\\u03c1\\u03b9 \\u03bc\\u03b1\\u03c3\\u03ac\\u03b6\"===a[2]||\"\\u0394\\u03b9\\u03b1\\u03c7\\u03c5\\u03c4\\u03ad\\u03c2 \\u03b1\\u03c1\\u03ce\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03c6\\u03b5\\u03c4\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2- \\u039a\\u03b1\\u03c6\\u03ad\\u03c2\"===a[2]||\"Nespresso\"===a[2]||\"Tassimo\"===a[2]||\"Dolce Gusto\"===a[2]||\"Illy\"===a[2]||\"\\u03a6\\u03af\\u03bb\\u03c4\\u03c1\\u03bf\\u03c5\"===a[2]||\"\\u03a6\\u03c1\\u03b1\\u03c0\\u03b5\\u03b4\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===\na[2]||\"\\u0395\\u03bb\\u03bb\\u03b7\\u03bd\\u03b9\\u03ba\\u03bf\\u03cd\"===a[2]||\"\\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2 Espresso\"===a[2]||\"\\u03a3\\u03ba\\u03b5\\u03cd\\u03b7 \\u03a3\\u03b5\\u03c1\\u03b2\\u03b9\\u03c1\\u03af\\u03c3\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===a[2]||\"\\u03a3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2 \\u03a7\\u03c9\\u03c1\\u03af\\u03c2 \\u03a3\\u03b1\\u03ba\\u03bf\\u03cd\\u03bb\\u03b1\"===a[2]||\"\\u03a3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2 \\u039c\\u03b5 \\u03a3\\u03b1\\u03ba\\u03bf\\u03cd\\u03bb\\u03b1\"===a[2]||\"\\u03a3\\u03ba\\u03bf\\u03c5\\u03c0\\u03ac\\u03ba\\u03b9\\u03b1\"===\na[2]||\"\\u03a3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2 \\u03a1\\u03bf\\u03bc\\u03c0\\u03cc\\u03c4\"===a[2]||\"\\u03a3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2 \\u03a3\\u03c4\\u03ac\\u03c7\\u03c4\\u03b7\\u03c2\"===a[2]||\"\\u03a3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2 \\u03a7\\u03b5\\u03b9\\u03c1\\u03cc\\u03c2\"===a[2]||\"\\u0391\\u03c4\\u03bc\\u03bf\\u03ba\\u03b1\\u03b8\\u03b1\\u03c1\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u03a0\\u03bf\\u03bb\\u03c5\\u03ba\\u03b1\\u03b8\\u03b1\\u03c1\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u0397\\u03bc\\u03b9\\u03b5\\u03c0\\u03b1\\u03b3\\u03b3\\u03b5\\u03bb\\u03bc\\u03b1\\u03c4\\u03b9\\u03ba\\u03ad\\u03c2 \\u03c3\\u03ba\\u03bf\\u03cd\\u03c0\\u03b5\\u03c2\"===\na[2]||\"\\u03a4\\u03c3\\u03b1\\u03b3\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u0392\\u03c1\\u03b1\\u03c3\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u03a4\\u03bf\\u03c3\\u03c4\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u03a6\\u03c1\\u03c5\\u03b3\\u03b1\\u03bd\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u0392\\u03c1\\u03b1\\u03c3\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2 \\u03b1\\u03c5\\u03b3\\u03ce\\u03bd\"===a[2]||\"\\u0392\\u03b1\\u03c6\\u03bb\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2- \\u039a\\u03c1\\u03b5\\u03c0\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u0391\\u03c4\\u03bc\\u03bf\\u03c3\\u03af\\u03b4\\u03b5\\u03c1\\u03b1\"===\na[2]||\"\\u03a3\\u03c5\\u03c3\\u03c4\\u03ae\\u03bc\\u03b1\\u03c4\\u03b1 \\u03a3\\u03b9\\u03b4\\u03b5\\u03c1\\u03ce\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2\"===a[2]||\"\\u0391\\u03c4\\u03bc\\u03bf\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03bf\\u03af\"===a[2]||\"\\u0391\\u03c0\\u03bf\\u03c7\\u03c5\\u03bc\\u03c9\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u0391\\u03c4\\u03bc\\u03bf\\u03bc\\u03ac\\u03b3\\u03b5\\u03b9\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u03a8\\u03b7\\u03c3\\u03c4\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u03a0\\u03bf\\u03bb\\u03c5\\u03bc\\u03ac\\u03b3\\u03b5\\u03b9\\u03c1\\u03b5\\u03c2\"===\na[2]||\"\\u039a\\u03b1\\u03bd\\u03ac\\u03c4\\u03b5\\u03c2 - \\u03a6\\u03af\\u03bb\\u03c4\\u03c1\\u03b1 \\u03bd\\u03b5\\u03c1\\u03bf\\u03cd\"===a[2]||\"\\u03a5\\u03b3\\u03b9\\u03b5\\u03b9\\u03bd\\u03ae \\u0394\\u03b9\\u03b1\\u03c4\\u03c1\\u03bf\\u03c6\\u03ae\"===a[2]||\"\\u039a\\u03bf\\u03c5\\u03b6\\u03b9\\u03bd\\u03bf\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2 \\u039a\\u03b9\\u03bc\\u03ac\"===a[2]||\"\\u039c\\u03af\\u03be\\u03b5\\u03c1\"===a[2]||\"\\u039a\\u03bf\\u03c0\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1- Multi\"===\na[2]||\"\\u03a0\\u03bf\\u03bb\\u03c5\\u03bc\\u03af\\u03be\\u03b5\\u03c1\"===a[2]||\"\\u039c\\u03c0\\u03bb\\u03ad\\u03bd\\u03c4\\u03b5\\u03c1\"===a[2]||\"\\u03a0\\u03bf\\u03bb\\u03c5\\u03ba\\u03cc\\u03c0\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u03a6\\u03c1\\u03b9\\u03c4\\u03ad\\u03b6\\u03b5\\u03c2\"===a[2]||\"\\u03a7\\u03cd\\u03c4\\u03c1\\u03b5\\u03c2 \\u03a4\\u03b1\\u03c7\\u03cd\\u03c4\\u03b7\\u03c4\\u03b1\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03c4\\u03c3\\u03b1\\u03c1\\u03cc\\u03bb\\u03b5\\u03c2\"===a[2]||\"\\u03a4\\u03b7\\u03b3\\u03ac\\u03bd\\u03b9\\u03b1\"===a[2]||\"\\u03a0\\u03c5\\u03c1\\u03ad\\u03be- \\u0393\\u03ac\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2\"===\na[2]||\"\\u03a4\\u03b1\\u03c8\\u03b9\\u03ac- \\u03a6\\u03cc\\u03c1\\u03bc\\u03b5\\u03c2\"===a[2]||\"\\u039c\\u03c0\\u03c1\\u03af\\u03ba\\u03b9\\u03b1\"===a[2]||\"\\u0391\\u03c1\\u03c4\\u03bf\\u03c0\\u03b1\\u03c1\\u03b1\\u03c3\\u03ba\\u03b5\\u03c5\\u03b1\\u03c3\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u0396\\u03c5\\u03b3\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2 \\u039a\\u03bf\\u03c5\\u03b6\\u03af\\u03bd\\u03b1\\u03c2\"===a[2]||\"\\u0395\\u03b9\\u03b4\\u03b9\\u03ba\\u03ad\\u03c2 \\u03a3\\u03c5\\u03c3\\u03ba\\u03b5\\u03c5\\u03ad\\u03c2\"===a[2]||\"\\u039b\\u03b5\\u03bc\\u03bf\\u03bd\\u03bf\\u03c3\\u03c4\\u03af\\u03c6\\u03c4\\u03b5\\u03c2\"===\na[2]||\"\\u039f\\u03c1\\u03b3\\u03ac\\u03bd\\u03c9\\u03c3\\u03b7 \\u03ba\\u03bf\\u03c5\\u03b6\\u03af\\u03bd\\u03b1\\u03c2\"===a[2]||\"\\u03a1\\u03b1\\u03c0\\u03c4\\u03bf\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===a[2]||\"\\u03a8\\u03b7\\u03c3\\u03c4\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2 BBQ \\u0391\\u03b5\\u03c1\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u03a8\\u03b7\\u03c3\\u03c4\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2 BBQ \\u0397\\u03bb\\u03b5\\u03ba\\u03c4\\u03c1\\u03b9\\u03ba\\u03ad\\u03c2\"===a[2]||\"\\u0396\\u03c5\\u03b3\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03c1\\u03cc\\u03c4\\u03c3\\u03b9\\u03b1- \\u039a\\u03b1\\u03b8\\u03af\\u03c3\\u03bc\\u03b1\\u03c4\\u03b1\"===\na[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03cc\\u03bc\\u03b5\\u03c4\\u03c1\\u03b1\"===a[2]||\"\\u0393\\u03b9\\u03b1 \\u03c4\\u03bf \\u03a3\\u03b5\\u03c1\\u03b2\\u03af\\u03c1\\u03b9\\u03c3\\u03bc\\u03b1\"===a[1]||\"\\u03a8\\u03b7\\u03c3\\u03c4\\u03b1\\u03c1\\u03b9\\u03ad\\u03c2 BBQ \\u039a\\u03ac\\u03c1\\u03b2\\u03bf\\u03c5\\u03bd\\u03bf\\u03c5\"===a[2]?\"3\":\"\\u03a8\\u03c5\\u03b3\\u03b5\\u03b9\\u03bf\\u03ba\\u03b1\\u03c4\\u03b1\\u03c8\\u03cd\\u03ba\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03b1 \\u0394\\u03af\\u03c0\\u03bf\\u03c1\\u03c4\\u03b1\"===a[2]||\n\"\\u039a\\u03b1\\u03c4\\u03b1\\u03c8\\u03cd\\u03ba\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u039d\\u03c4\\u03bf\\u03c5\\u03bb\\u03ac\\u03c0\\u03b5\\u03c2\"===a[2]||\"\\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03b1 \\u03a3\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b7\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u03a3\\u03c5\\u03bd\\u03c4\\u03b7\\u03c1\\u03b7\\u03c4\\u03ad\\u03c2 \\u039a\\u03c1\\u03b1\\u03c3\\u03b9\\u03ce\\u03bd\"===a[2]||\"\\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03b1 \\u039c\\u03bf\\u03bd\\u03cc\\u03c0\\u03bf\\u03c1\\u03c4\\u03b1\"===a[2]||\"\\u03a0\\u03b1\\u03b3\\u03bf\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ad\\u03c2\"===\na[2]||\"\\u039c\\u03b9\\u03ba\\u03c1\\u03ac \\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03b1 - Mini Bars\"===a[2]||\"\\u0397\\u03bb\\u03b5\\u03ba\\u03c4\\u03c1\\u03b9\\u03ba\\u03ad\\u03c2 \\u039a\\u03bf\\u03c5\\u03b6\\u03af\\u03bd\\u03b5\\u03c2\"===a[2]||\"\\u039a\\u03bf\\u03c5\\u03b6\\u03af\\u03bd\\u03b5\\u03c2 \\u0391\\u03b5\\u03c1\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u039a\\u03bf\\u03c5\\u03b6\\u03b9\\u03bd\\u03ac\\u03ba\\u03b9\\u03b1- \\u03a6\\u03bf\\u03c5\\u03c1\\u03bd\\u03ac\\u03ba\\u03b9\\u03b1\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u0386\\u03bd\\u03c9 \\u03a6\\u03cc\\u03c1\\u03c4\\u03c9\\u03c3\\u03b7\\u03c2\"===\na[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u0395\\u03bc\\u03c0\\u03c1\\u03cc\\u03c3\\u03b8\\u03b9\\u03b1\\u03c2 \\u03a6\\u03cc\\u03c1\\u03c4\\u03c9\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u03a3\\u03c4\\u03b5\\u03b3\\u03bd\\u03c9\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u03a1\\u03bf\\u03cd\\u03c7\\u03c9\\u03bd\"===a[2]||\"\\u0397\\u03bb\\u03b5\\u03ba\\u03c4\\u03c1\\u03b9\\u03ba\\u03bf\\u03af \\u0398\\u03b5\\u03c1\\u03bc\\u03bf\\u03c3\\u03af\\u03c6\\u03c9\\u03bd\\u03b5\\u03c2\"===a[2]||\"\\u0397\\u03bb\\u03b9\\u03b1\\u03ba\\u03bf\\u03af \\u0398\\u03b5\\u03c1\\u03bc\\u03bf\\u03c3\\u03af\\u03c6\\u03c9\\u03bd\\u03b5\\u03c2\"===\na[2]||\"\\u0395\\u03bd\\u03c4\\u03bf\\u03b9\\u03c7\\u03b9\\u03b6\\u03cc\\u03bc\\u03b5\\u03bd\\u03b1 \\u03c3\\u03b5\\u03c4\"===a[2]||\"\\u0395\\u03c3\\u03c4\\u03af\\u03b5\\u03c2\"===a[2]||\"\\u0395\\u03c3\\u03c4\\u03af\\u03b5\\u03c2 \\u0391\\u03b5\\u03c1\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u039a\\u03b1\\u03c6\\u03b5\\u03c4\\u03b9\\u03ad\\u03c1\\u03b5\\u03c2\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u03a0\\u03b9\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u03a1\\u03bf\\u03cd\\u03c7\\u03c9\\u03bd\"===\na[2]||\"\\u03a6\\u03bf\\u03cd\\u03c1\\u03bd\\u03bf\\u03b9\"===a[2]||\"\\u03a6\\u03bf\\u03cd\\u03c1\\u03bd\\u03bf\\u03b9 \\u0391\\u03b5\\u03c1\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u03a6\\u03bf\\u03cd\\u03c1\\u03bd\\u03bf\\u03b9 \\u039c\\u03b9\\u03ba\\u03c1\\u03bf\\u03ba\\u03c5\\u03bc\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03b1- \\u039a\\u03b1\\u03c4\\u03b1\\u03c8\\u03cd\\u03ba\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u03a0\\u03b9\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1- \\u03a3\\u03c4\\u03b5\\u03b3\\u03bd\\u03c9\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1\"===\na[1]||\"\\u03a6\\u03bf\\u03cd\\u03c1\\u03bd\\u03bf\\u03b9 \\u039c\\u03b9\\u03ba\\u03c1\\u03bf\\u03ba\\u03c5\\u03bc\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u0391\\u03c0\\u03bf\\u03c1\\u03c1\\u03bf\\u03c6\\u03b7\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2\"===a[1]||\"\\u0395\\u03bb\\u03b5\\u03cd\\u03b8\\u03b5\\u03c1\\u03bf\\u03b9\"===a[2]||\"\\u03a0\\u03c4\\u03c5\\u03c3\\u03c3\\u03cc\\u03bc\\u03b5\\u03bd\\u03bf\\u03b9\"===a[2]||\"\\u03a3\\u03c5\\u03c1\\u03cc\\u03bc\\u03b5\\u03bd\\u03bf\\u03b9\"===a[2]||\"\\u03a4\\u03bf\\u03af\\u03c7\\u03bf\\u03c5\"===a[2]||\"\\u039a\\u03b1\\u03bc\\u03b9\\u03bd\\u03ac\\u03b4\\u03b5\\u03c2- \\u03a4\\u03b6\\u03ac\\u03ba\\u03b9\\u03b1\"===\na[2]||\"\\u039d\\u03b7\\u03c3\\u03af\\u03b4\\u03b5\\u03c2\"===a[2]||\"\\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03b9\\u03c3\\u03bc\\u03bf\\u03af \\u03b1\\u03c0\\u03bf\\u03c1\\u03c1\\u03cc\\u03c6\\u03b7\\u03c3\\u03b7\\u03c2\"===a[2]?\"4\":\"Air Condition\"===a[1]||\"\\u0391\\u03bd\\u03b5\\u03bc\\u03b9\\u03c3\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2\"===a[1]||\"\\u0397\\u03bb\\u03b5\\u03ba\\u03c4\\u03c1\\u03b9\\u03ba\\u03ad\\u03c2 \\u039a\\u03bf\\u03c5\\u03b2\\u03ad\\u03c1\\u03c4\\u03b5\\u03c2- \\u039c\\u03b1\\u03be\\u03b9\\u03bb\\u03ac\\u03c1\\u03b9\\u03b1\"===a[1]||\"\\u03a5\\u03b3\\u03c1\\u03b1\\u03bd\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2\"===\na[1]||\"\\u0399\\u03bf\\u03bd\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2\"===a[1]||\"\\u0391\\u03c6\\u03c5\\u03b3\\u03c1\\u03b1\\u03bd\\u03c4\\u03ae\\u03c1\\u03b5\\u03c2\"===a[1]||\"\\u0391\\u03b5\\u03c1\\u03cc\\u03b8\\u03b5\\u03c1\\u03bc\\u03b1\"===a[2]||\"\\u0395\\u03be\\u03c9\\u03c4\\u03b5\\u03c1\\u03b9\\u03ba\\u03bf\\u03cd \\u03a7\\u03ce\\u03c1\\u03bf\\u03c5\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03b1\\u03bd\\u03c4\\u03b9\\u03ba\\u03ac \\u039c\\u03c0\\u03ac\\u03bd\\u03b9\\u03bf\\u03c5\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03b1\\u03bd\\u03c4\\u03b9\\u03ba\\u03ac \\u03a0\\u03ac\\u03bd\\u03b5\\u03bb\"===\na[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03ac\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2 Carbon\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03ac\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2 \\u0391\\u03bb\\u03bf\\u03b3\\u03cc\\u03bd\\u03bf\\u03c5\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03ac\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2 \\u03a0\\u03b5\\u03c4\\u03c1\\u03b5\\u03bb\\u03b1\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03ac\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2 \\u03a7\\u03b1\\u03bb\\u03b1\\u03b6\\u03af\\u03b1\"===a[2]||\"\\u0398\\u03b5\\u03c1\\u03bc\\u03bf\\u03c0\\u03bf\\u03bc\\u03c0\\u03bf\\u03af- Convector\"===\na[2]||\"\\u039a\\u03b1\\u03bb\\u03bf\\u03c1\\u03b9\\u03c6\\u03ad\\u03c1 Mica\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03bf\\u03c1\\u03b9\\u03c6\\u03ad\\u03c1 \\u039b\\u03b1\\u03b4\\u03b9\\u03bf\\u03cd\"===a[2]||\"\\u03a3\\u03cc\\u03bc\\u03c0\\u03b5\\u03c2 \\u03a5\\u03b3\\u03c1\\u03b1\\u03b5\\u03c1\\u03af\\u03bf\\u03c5\"===a[2]?\"5\":\"\\u03a0\\u03b1\\u03ba\\u03ad\\u03c4\\u03b1 \\u03c3\\u03c5\\u03bd\\u03b4\\u03c1\\u03bf\\u03bc\\u03b7\\u03c4\\u03b9\\u03ba\\u03ae\\u03c2 \\u03c4\\u03b7\\u03bb\\u03b5\\u03cc\\u03c1\\u03b1\\u03c3\\u03b7\\u03c2\"===a[1]||\"Software\"===a[1]||\"Gaming \\u03a0\\u03bb\\u03b7\\u03ba\\u03c4\\u03c1\\u03bf\\u03bb\\u03cc\\u03b3\\u03b9\\u03b1\"===\na[2]||\"Gaming \\u03a0\\u03bf\\u03bd\\u03c4\\u03af\\u03ba\\u03b9\\u03b1\"===a[2]||\"\\u03a7\\u03b5\\u03b9\\u03c1\\u03b9\\u03c3\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1 \\u03a0\\u03b1\\u03b9\\u03c7\\u03bd\\u03b9\\u03b4\\u03b9\\u03ce\\u03bd\"===a[2]||\"Games\"===a[1]||\"Xbox 360 Games\"===a[2]||\"Wii\/ Wii U Games\"===a[2]||\"PS4 Games\"===a[2]||\"PC Games\"===a[2]||\"PS3 Games\"===a[2]||\"PS2 Games\"===a[2]||\"Xbox One Games\"===a[2]||\"Switch Games\"===a[2]||\"\\u03a6\\u03b9\\u03b3\\u03bf\\u03cd\\u03c1\\u03b5\\u03c2 \\u03c0\\u03b1\\u03b9\\u03c7\\u03bd\\u03b9\\u03b4\\u03b9\\u03ce\\u03bd\"===\na[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 PS Vita\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2\"===a[2]||\"\\u03a6\\u03bf\\u03c1\\u03b7\\u03c4\\u03ad\\u03c2 \\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2\"===a[2]||\"Games PSP\/ PS Vita\"===a[2]||\"Games 2DS\/ 3DS\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 2DS\/ 3DS\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 PS4\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 Wii\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 Xbox 360\"===\na[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 PS3\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 Xbox One\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 Wii U\/ NES\"===a[2]||\"\\u039a\\u03bf\\u03bd\\u03c3\\u03cc\\u03bb\\u03b5\\u03c2 Nintendo\"===a[2]||\"Gaming Chairs\"===a[2]||\"\\u03a0\\u03c1\\u03bf\\u03c0\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ad\\u03bd\\u03b5\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 PS\"===a[2]||\"\\u03a0\\u03c1\\u03bf\\u03c0\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ad\\u03bd\\u03b5\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 Xbox\"===\na[2]||\"\\u03a0\\u03c1\\u03bf\\u03c0\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ad\\u03bd\\u03b5\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 PC\"===a[2]||\"\\u03a6\\u03b9\\u03b3\\u03bf\\u03cd\\u03c1\\u03b5\\u03c2\"===a[2]||\"Puzzle\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03c7\\u03bd\\u03af\\u03b4\\u03b9\\u03b1\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac \\u03c0\\u03b1\\u03b9\\u03c7\\u03bd\\u03af\\u03b4\\u03b9\\u03b1\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac \\u03bf\\u03c7\\u03ae\\u03bc\\u03b1\\u03c4\\u03b1 \\x26 \\u03c0\\u03bf\\u03b4\\u03ae\\u03bb\\u03b1\\u03c4\\u03b1\"===\na[2]||\"\\u03a0\\u03bf\\u03b4\\u03ae\\u03bb\\u03b1\\u03c4\\u03b1 \\x26 \\u03a0\\u03b1\\u03c4\\u03af\\u03bd\\u03b9\\u03b1\"===a[2]||\"\\u0395\\u03c0\\u03b9\\u03c4\\u03c1\\u03b1\\u03c0\\u03ad\\u03b6\\u03b9\\u03b1\"===a[2]||\"\\u03a4\\u03b7\\u03bb\\u03b5\\u03ba\\u03b1\\u03c4\\u03b5\\u03c5\\u03b8\\u03c5\\u03bd\\u03cc\\u03bc\\u03b5\\u03bd\\u03b1\"===a[2]||\"\\u03a4\\u03b7\\u03bb\\u03b5\\u03bf\\u03c0\\u03c4\\u03b9\\u03ba\\u03ad\\u03c2 \\u03a3\\u03b5\\u03b9\\u03c1\\u03ad\\u03c2\"===a[2]||\"3D Blu-ray \\u03a4\\u03b1\\u03b9\\u03bd\\u03af\\u03b5\\u03c2\"===a[2]||\"Blu-ray \\u03a4\\u03b1\\u03b9\\u03bd\\u03af\\u03b5\\u03c2\"===\na[2]||\"DVD \\u03a4\\u03b1\\u03b9\\u03bd\\u03af\\u03b5\\u03c2\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac\"===a[2]||\"4K Blu-Ray \\u03a4\\u03b1\\u03b9\\u03bd\\u03af\\u03b5\\u03c2\"===a[2]||\"CDs\"===a[2]||\"DVDs\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u0392\\u03b9\\u03bd\\u03cd\\u03bb\\u03b9\\u03b1\"===a[2]||\"\\u03a7\\u03c1\\u03b9\\u03c3\\u03c4\\u03bf\\u03c5\\u03b3\\u03b5\\u03bd\\u03bd\\u03b9\\u03ac\\u03c4\\u03b9\\u03ba\\u03b1\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac \\u0395\\u03b9\\u03ba\\u03bf\\u03bd\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b7\\u03bc\\u03ad\\u03bd\\u03b1\"===\na[2]||\"\\u03a8\\u03c5\\u03c7\\u03bf\\u03bb\\u03bf\\u03b3\\u03af\\u03b1\\u03c2 \\u03ba\\u03b1\\u03b9 \\u03a8\\u03c5\\u03c7\\u03b1\\u03bd\\u03ac\\u03bb\\u03c5\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ae\\u03c2 \\u03a8\\u03c5\\u03c7\\u03bf\\u03bb\\u03bf\\u03b3\\u03af\\u03b1\\u03c2 \\u03ba\\u03b1\\u03b9 \\u039c\\u03b7\\u03c4\\u03c1\\u03cc\\u03c4\\u03b7\\u03c4\\u03b1\\u03c2\"===a[2]||\"Life style- \\u039c\\u03b1\\u03b3\\u03b5\\u03b9\\u03c1\\u03b9\\u03ba\\u03ae\\u03c2- \\u03a5\\u03b3\\u03b5\\u03af\\u03b1\\u03c2\"===a[2]||\"\\u0397\\u03bc\\u03b5\\u03c1\\u03bf\\u03bb\\u03cc\\u03b3\\u03b9\\u03b1\"===\na[2]||\"\\u0395\\u03bb\\u03bb\\u03b7\\u03bd\\u03b9\\u03ba\\u03ae \\u039b\\u03bf\\u03b3\\u03bf\\u03c4\\u03b5\\u03c7\\u03bd\\u03af\\u03b1\"===a[2]||\"\\u039e\\u03ad\\u03bd\\u03b7 \\u039b\\u03bf\\u03b3\\u03bf\\u03c4\\u03b5\\u03c7\\u03bd\\u03af\\u03b1\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac \\u03a0\\u03c1\\u03bf\\u03c3\\u03c7\\u03bf\\u03bb\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u03a0\\u03b1\\u03b9\\u03b4\\u03b9\\u03ba\\u03ac \\u03ba\\u03b1\\u03b9 \\u0395\\u03c6\\u03b7\\u03b2\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u0395\\u03ba\\u03c0\\u03b1\\u03b9\\u03b4\\u03b5\\u03c5\\u03c4\\u03b9\\u03ba\\u03ac- \\u0394\\u03c1\\u03b1\\u03c3\\u03c4\\u03b7\\u03c1\\u03b9\\u03bf\\u03c4\\u03ae\\u03c4\\u03c9\\u03bd\"===\na[2]||\"\\u03a4\\u03b5\\u03c7\\u03bd\\u03bf\\u03bb\\u03bf\\u03b3\\u03af\\u03b1\\u03c2- \\u039f\\u03b9\\u03ba\\u03bf\\u03bd\\u03bf\\u03bc\\u03af\\u03b1\\u03c2- \\u0394\\u03bf\\u03ba\\u03af\\u03bc\\u03b9\\u03b1\"===a[2]||\"STEM\"===a[2]||\"\\u039a\\u03b1\\u03c4\\u03b1\\u03c3\\u03ba\\u03b5\\u03c5\\u03ae\\u03c2\"===a[2]||\"\\u03a3\\u03c7\\u03bf\\u03bb\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u03a7\\u03b5\\u03b9\\u03c1\\u03bf\\u03c4\\u03b5\\u03c7\\u03bd\\u03af\\u03b1\"===a[2]?\"6\":\"\\u03a0\\u03b5\\u03c1\\u03b9\\u03c6\\u03b5\\u03c1\\u03b5\\u03b9\\u03b1\\u03ba\\u03ac\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Smartwatch\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03ba\\u03b9\\u03bd\\u03b7\\u03c4\\u03ce\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03c0\\u03bb\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ce\\u03bd \\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03b7\\u03bc\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"Powerbanks\"===a[1]||\"VR \\u0393\\u03c5\\u03b1\\u03bb\\u03b9\\u03ac\"===a[1]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 iMac\"===a[2]||\"MacBook \\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1\"===a[2]||\"\\u03a4\\u03c3\\u03ac\\u03bd\\u03c4\\u03b5\\u03c2- \\u0398\\u03ae\\u03ba\\u03b5\\u03c2\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Tablet\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Galaxy Tab\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 iPad\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2 Tablet\"===a[2]||\"\\u039c\\u03b5\\u03bb\\u03ac\\u03bd\\u03b9\\u03b1- Toner\"===a[2]||\"\\u03a7\\u03b1\\u03c1\\u03c4\\u03af \\u0395\\u03ba\\u03c4\\u03cd\\u03c0\\u03c9\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 \\u03a5\\u03c0\\u03bf\\u03bb\\u03bf\\u03b3\\u03b9\\u03c3\\u03c4\\u03ce\\u03bd\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Laptop\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u039f\\u03b8\\u03bf\\u03bd\\u03ce\\u03bd\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2 \\u03b3\\u03b9\\u03b1 \\u03c3\\u03ba\\u03bb\\u03b7\\u03c1\\u03bf\\u03cd\\u03c2 \\u03b4\\u03af\\u03c3\\u03ba\\u03bf\\u03c5\\u03c2\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a0\\u03c1\\u03bf\\u03c3\\u03c9\\u03c0\\u03b9\\u03ba\\u03ae\\u03c2 \\u03a6\\u03c1\\u03bf\\u03bd\\u03c4\\u03af\\u03b4\\u03b1\\u03c2\"===a[2]||\"\\u039a\\u03ac\\u03c8\\u03bf\\u03c5\\u03bb\\u03b5\\u03c2 Dolce Gusto\"===\na[2]||\"\\u039a\\u03ac\\u03c8\\u03bf\\u03c5\\u03bb\\u03b5\\u03c2 Illy\"===a[2]||\"\\u039a\\u03ac\\u03c8\\u03bf\\u03c5\\u03bb\\u03b5\\u03c2 Tassimo\"===a[2]||\"\\u039a\\u03ac\\u03c8\\u03bf\\u03c5\\u03bb\\u03b5\\u03c2 EspressoCap\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u039a\\u03b1\\u03c6\\u03ad\"===a[2]||\"EspressoCap\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1- \\u03a3\\u03b1\\u03ba\\u03bf\\u03cd\\u03bb\\u03b5\\u03c2\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1- \\u03a3\\u03b9\\u03b4\\u03b5\\u03c1\\u03ce\\u03c3\\u03c4\\u03c1\\u03b5\\u03c2\"===\na[2]||\"\\u039b\\u03ac\\u03bc\\u03c0\\u03b5\\u03c2\"===a[2]||\"\\u039b\\u03ac\\u03bc\\u03c0\\u03b5\\u03c2 LED\"===a[2]||\"\\u03a6\\u03c9\\u03c4\\u03b9\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u03a6\\u03b1\\u03ba\\u03bf\\u03af\"===a[2]||\"\\u0395\\u03c0\\u03bf\\u03c7\\u03b9\\u03b1\\u03ba\\u03cc\\u03c2 \\u03c6\\u03c9\\u03c4\\u03b9\\u03c3\\u03bc\\u03cc\\u03c2\"===a[2]||\"\\u03a1\\u03bf\\u03bb\\u03cc\\u03b3\\u03b9\\u03b1 - \\u039e\\u03c5\\u03c0\\u03bd\\u03b7\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u039a\\u03bf\\u03c5\\u03b6\\u03b9\\u03bd\\u03bf\\u03bc\\u03b7\\u03c7\\u03b1\\u03bd\\u03ce\\u03bd\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u039c\\u03b1\\u03b3\\u03b5\\u03b9\\u03c1\\u03b9\\u03ba\\u03ae\\u03c2\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac Gaming\"===a[2]||\"Gaming Mousepads\"===a[2]||\"Gaming \\u03a0\\u03bb\\u03b7\\u03ba\\u03c4\\u03c1\\u03bf\\u03bb\\u03cc\\u03b3\\u03b9\\u03b1\"===a[2]||\"Gaming \\u03a0\\u03bf\\u03bd\\u03c4\\u03af\\u03ba\\u03b9\\u03b1\"===a[2]||\"Gaming Controllers\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Xbox 360\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Xbox One\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 PS4\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 PS3\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 PS2\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Wii U\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Switch\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 PS Vita\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 2DS\/ 3DS\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1\"===\na[2]||\"Bluetooth \\u0397\\u03c7\\u03b5\\u03af\\u03b1\"===a[2]||\"\\u0395\\u03bd\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03b1 \\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"Bluetooth \\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u03a6\\u03bf\\u03c1\\u03c4\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2\"===a[2]||\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u039c\\u03bd\\u03ae\\u03bc\\u03b7\\u03c2\"===a[2]||\"\\u03a6\\u03bf\\u03c1\\u03c4\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2 \\u0391\\u03c5\\u03c4\\u03bf\\u03ba\\u03b9\\u03bd\\u03ae\\u03c4\\u03bf\\u03c5\"===\na[2]||\"Car Kit\"===a[2]||\"\\u0392\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2 \\u0391\\u03c5\\u03c4\\u03bf\\u03ba\\u03b9\\u03bd\\u03ae\\u03c4\\u03bf\\u03c5\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 \\u039a\\u03b9\\u03bd\\u03b7\\u03c4\\u03ae\\u03c2\"===a[2]||\"Sim Adaptors\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Universal\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Alcatel\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 HTC\"===\na[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Huawei\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Lenovo\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 LG\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Motorola\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Nokia\"===\na[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Samsung\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Sony\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Meizu\"===a[2]||\"Selfie Sticks\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 ZTE\"===a[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 MLS\"===\na[2]||\"\\u0398\\u03ae\\u03ba\\u03b5\\u03c2- \\u039c\\u03b5\\u03bc\\u03b2\\u03c1\\u03ac\\u03bd\\u03b5\\u03c2 Xiaomi\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a3\\u03c4\\u03b1\\u03b8\\u03b5\\u03c1\\u03ae\\u03c2 \\u03a4\\u03b7\\u03bb\\u03b5\\u03c6\\u03c9\\u03bd\\u03af\\u03b1\\u03c2\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a0\\u03bb\\u03cc\\u03b7\\u03b3\\u03b7\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u0388\\u03c0\\u03b9\\u03c0\\u03bb\\u03b1 \\u03a4\\u03b7\\u03bb\\u03b5\\u03cc\\u03c1\\u03b1\\u03c3\\u03b7\\u03c2\"===a[2]||\n\"\\u0392\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2 \\u03a4\\u03bf\\u03af\\u03c7\\u03bf\\u03c5 \\u03a4\\u03b7\\u03bb\\u03b5\\u03cc\\u03c1\\u03b1\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u0393\\u03c5\\u03b1\\u03bb\\u03b9\\u03ac 3D\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Smart TV\"===a[2]||\"\\u03a4\\u03b7\\u03bb\\u03b5\\u03c7\\u03b5\\u03b9\\u03c1\\u03b9\\u03c3\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1\"===a[2]||\"\\u039a\\u03b5\\u03c1\\u03b1\\u03af\\u03b5\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03b8\\u03b1\\u03c1\\u03b9\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac \\u039f\\u03b8\\u03cc\\u03bd\\u03b7\\u03c2- \\u03a4\\u03b7\\u03bb\\u03b5\\u03cc\\u03c1\\u03b1\\u03c3\\u03b7\\u03c2\"===\na[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 \\u0389\\u03c7\\u03bf\\u03c5- \\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\\u03c2\"===a[2]||\"\\u039a\\u03b1\\u03bb\\u03ce\\u03b4\\u03b9\\u03b1 \\u039a\\u03b5\\u03c1\\u03b1\\u03af\\u03b1\\u03c2\"===a[2]||\"\\u03a4\\u03b1\\u03ba\\u03c4\\u03bf\\u03c0\\u03bf\\u03af\\u03b7\\u03c3\\u03b7 \\u039a\\u03b1\\u03bb\\u03c9\\u03b4\\u03af\\u03c9\\u03bd\"===a[2]||\"\\u0391\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03bf\\u03b9 \\u0391\\u03bd\\u03b1\\u03bc\\u03b5\\u03c4\\u03b1\\u03b4\\u03cc\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u039c\\u03c0\\u03b1\\u03c4\\u03b1\\u03c1\\u03af\\u03b5\\u03c2- \\u03a6\\u03bf\\u03c1\\u03c4\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2\"===\na[2]||\"\\u039c\\u03b9\\u03ba\\u03c1\\u03cc\\u03c6\\u03c9\\u03bd\\u03b1\"===a[2]||\"\\u03a0\\u03bf\\u03bb\\u03cd\\u03c0\\u03c1\\u03b9\\u03b6\\u03b1\"===a[2]||\"\\u03a0\\u03c1\\u03af\\u03b6\\u03b5\\u03c2- \\u03a7\\u03c1\\u03bf\\u03bd\\u03bf\\u03b4\\u03b9\\u03b1\\u03ba\\u03cc\\u03c0\\u03c4\\u03b5\\u03c2\"===a[2]||\"\\u039c\\u03b5\\u03c4\\u03b1\\u03c4\\u03c1\\u03bf\\u03c0\\u03b5\\u03af\\u03c2 \\u03c4\\u03ac\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Hi-Fi\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 iPod- MP3- MP4\"===\na[2]||\"\\u039f\\u03b8\\u03cc\\u03bd\\u03b5\\u03c2 \\u03a0\\u03c1\\u03bf\\u03b2\\u03bf\\u03bb\\u03ae\\u03c2 Projectors\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Projectors\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac Bluetooth\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac Headphones\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac In Ear\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac \\u0391\\u03c3\\u03cd\\u03c1\\u03bc\\u03b1\\u03c4\\u03b1\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a8\\u03c5\\u03b3\\u03b5\\u03af\\u03c9\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u039a\\u03bf\\u03c5\\u03b6\\u03b9\\u03bd\\u03ce\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03b7\\u03c1\\u03af\\u03c9\\u03bd \\u03a1\\u03bf\\u03cd\\u03c7\\u03c9\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a3\\u03c4\\u03b5\\u03b3\\u03bd\\u03c9\\u03c4\\u03b7\\u03c1\\u03af\\u03c9\\u03bd\"===a[2]||\n\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u0395\\u03bd\\u03c4\\u03bf\\u03b9\\u03c7\\u03b9\\u03b6\\u03cc\\u03bc\\u03b5\\u03bd\\u03c9\\u03bd \\u03a3\\u03c5\\u03c3\\u03ba\\u03b5\\u03c5\\u03ce\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a0\\u03bb\\u03c5\\u03bd\\u03c4\\u03b7\\u03c1\\u03af\\u03c9\\u03bd \\u03a0\\u03b9\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a6\\u03bf\\u03cd\\u03c1\\u03bd\\u03c9\\u03bd \\u039c\\u03b9\\u03ba\\u03c1\\u03bf\\u03ba\\u03c5\\u03bc\\u03ac\\u03c4\\u03c9\\u03bd\"===\na[2]||\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u039c\\u03bd\\u03ae\\u03bc\\u03b7\\u03c2\"===a[2]||\"\\u03a6\\u03bb\\u03b1\\u03c2 \\u03a6\\u03c9\\u03c4\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b9\\u03ba\\u03ce\\u03bd \\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ce\\u03bd\"===a[2]||\"\\u0394\\u03b9\\u03ac\\u03c6\\u03bf\\u03c1\\u03b1 \\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1\"===a[2]||\"\\u03a4\\u03c3\\u03ac\\u03bd\\u03c4\\u03b5\\u03c2- \\u0398\\u03ae\\u03ba\\u03b5\\u03c2 \\u03a6\\u03c9\\u03c4\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b9\\u03ba\\u03ce\\u03bd \\u039c\\u03b7\\u03c7\\u03b1\\u03bd\\u03ce\\u03bd\"===\na[2]||\"\\u03a4\\u03c1\\u03af\\u03c0\\u03bf\\u03b4\\u03b1\"===a[2]||\"Energy Drink\"===a[2]||\"\\u0391\\u03ba\\u03bf\\u03c5\\u03c3\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03c0\\u03bf\\u03b4\\u03b7\\u03bb\\u03ac\\u03c4\\u03c9\\u03bd\"===a[2]||\"\\u0395\\u03bd\\u03c4\\u03bf\\u03bc\\u03bf\\u03b1\\u03c0\\u03c9\\u03b8\\u03b7\\u03c4\\u03b9\\u03ba\\u03ac\"===a[2]||\"\\u039c\\u03b5\\u03c4\\u03b5\\u03c9\\u03c1\\u03bf\\u03bb\\u03bf\\u03b3\\u03b9\\u03ba\\u03bf\\u03af \\u03c3\\u03c4\\u03b1\\u03b8\\u03bc\\u03bf\\u03af\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 BBQ\"===\na[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 Action Cameras\"===a[2]||\"\\u0396\\u03b5\\u03bb\\u03b1\\u03c4\\u03af\\u03bd\\u03b5\\u03c2 \\u03a0\\u03bb\\u03b1\\u03c3\\u03c4\\u03b9\\u03ba\\u03bf\\u03c0\\u03bf\\u03af\\u03b7\\u03c3\\u03b7\\u03c2\"===a[2]||\"\\u039a\\u03bf\\u03c0\\u03c4\\u03b9\\u03ba\\u03ac \\u0393\\u03c1\\u03b1\\u03c6\\u03b5\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u03a4\\u03b6\\u03b1\\u03ba\\u03b9\\u03bf\\u03cd\"===a[1]||\"\\u0392\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2 Laptop\"===\na[2]||\"\\u03a6\\u03bf\\u03c1\\u03c4\\u03b9\\u03c3\\u03c4\\u03ad\\u03c2 Laptop\"===a[2]||\"\\u0391\\u03be\\u03b5\\u03c3\\u03bf\\u03c5\\u03ac\\u03c1 \\u0393\\u03c1\\u03b1\\u03c6\\u03b5\\u03af\\u03bf\\u03c5\"===a[2]||\"\\u03a4\\u03c3\\u03ac\\u03bd\\u03c4\\u03b5\\u03c2\"===a[2]?\"7\":\"0\";c[a]=void 0!==c[a]?Number(c[a])+Number((e*f).toFixed(2)):(e*f).toFixed(2)}b=\"\";for(var d in c)c.hasOwnProperty(d)\u0026\u0026(b+=d+\"::\"+c[d]+\"__\");return b.substring(0,b.length-2)}Linkwise.load_action(\"10719\",",["escape",["macro",62],8,16],",g(),\"\",\"pending\")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\n\u003Cstyle\u003E\n\/* Positioning of the div itself *\/\ndiv#chat-right-now {\n                position:fixed;\n                right:10px;\n                bottom:10px;\n                box-shadow:0 0 10px #999;\n                z-index:100;\n}\n\/* Change default lay-out pop-up *\/\n.yui-panel.rn_Dialog {\n                border:1px solid #ddd;\n}\n.yui-skin-sam .yui-panel .hd {\n                width:auto;\n                background:#dbdcde;\n                color:#000 !important;\n                font-weight:normal;\n}\n.yui-skin-sam .yui-panel {\n                border:1px solid #ddd;\n}\n.yui-skin-sam .yui-panel-container {\n                padding:0;\n}\n.yui-skin-sam .yui-panel-container.shadow .underlay {\n                background:none;\n                background-color:none;\n}\n.rn_SyndicatedChatLogoImageDiv {\n                \/*float:none;\n                clear:none;*\/\n                margin-right:5px;\n                width:95px;\n                clear:left;\n                border-bottom:1px dotted #ddd;\n}\n.rn_SyndicatedChatLogoImageDiv img {\n                width:100%;\n}\n.yui-skin-sam .container-close {\n                top:8px;\n}\n[class^=checkout-] .rn_RefuseDiv label.rn_SyndicatedLabel,\n.rn_RefuseDiv .rn_SyndicatedLabel {\n                font-size:12px !important;\n}\n.underlay {\n                background:none;\n}\n\/* Change contents lay-out pop-up *\/\ndiv#chat-right-now * {\n                font-size:14px;\n                color:#444;\n}\ndiv#chat-right-now .rn_SyndicatedChatHeaderLabel {\n                font-size:16px;\n                position:absolute;\n}\ndiv#chat-right-now .rn_SyndicatedChatHeaderLabelDiv {\n                float:left;\n                clear:right;\n                width:175px;\n                height:40px;\n                margin-right:5px;\n                border-bottom:1px dotted #ddd;\n}\ndiv#chat-right-now .rn_SyndicatedChatQuestionLabel {\n                font-size:13px;\n                color:#000;\n}\ndiv#chat-right-now.yui-skin-sam .yui-button {\n                margin-top:5px;\n                margin-bottom:5px;\n                font-size:12px;\n                font-weight:bold;\n}\ndiv#chat-right-now .rn_Dialog .ft .yui-button button {\n                margin-right:0;\n}\n\n.rn_SyndicatedChatLogoImageDiv,\n.rn_SyndicatedChatHeaderLabelDiv {\n                display:none;\n}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/mm-gr-gr.widget.custhelp.com\/euf\/rightnow\/RightNow.Client.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar delay=15;if(0\u003C=",["escape",["macro",24],8,16],".indexOf(\"Category\")||0\u003C=",["escape",["macro",24],8,16],".indexOf(\"Productdetail\"))delay=\"\/el\/category\/_%CE%BF%CE%B9%CE%BA%CE%B9%CE%B1%CE%BA%CE%AD%CF%82-%CF%83%CF%85%CF%83%CE%BA%CE%B5%CF%85%CE%AD%CF%82-634070.html\"==",["escape",["macro",47],8,16],"?60:90;\nRightNow.Client.Controller.addComponent({instance_id:\"spac_0\",div_id:\"chat-right-now\",module:\"ProactiveChat\",type:2,min_agents_avail:1,seconds:delay,label_title:\"\\u039c\\u03c0\\u03bf\\u03c1\\u03bf\\u03cd\\u03bc\\u03b5 \\u03bd\\u03b1 \\u03c3\\u03b5 \\u03b2\\u03bf\\u03b7\\u03b8\\u03ae\\u03c3\\u03bf\\u03c5\\u03bc\\u03b5!\",label_question:\"\\u039f \\u03c0\\u03c1\\u03bf\\u03c3\\u03c9\\u03c0\\u03b9\\u03ba\\u03cc\\u03c2 \\u03c3\\u03cd\\u03bc\\u03b2\\u03bf\\u03c5\\u03bb\\u03bf\\u03c2 \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03ad\\u03c4\\u03bf\\u03b9\\u03bc\\u03bf\\u03c2 \\u03bd\\u03b1 \\u03b1\\u03c0\\u03b1\\u03bd\\u03c4\\u03ae\\u03c3\\u03b5\\u03b9 \\u03c3\\u03b5 \\u03c4\\u03c5\\u03c7\\u03cc\\u03bd \\u03b1\\u03c0\\u03bf\\u03c1\\u03af\\u03b5\\u03c2 \\u03c3\\u03bf\\u03c5. \\u0398\\u03ad\\u03bb\\u03b5\\u03b9\\u03c2 \\u03bd\\u03b1 \\u03be\\u03b5\\u03ba\\u03b9\\u03bd\\u03ae\\u03c3\\u03b5\\u03b9\\u03c2 \\u03c4\\u03b7 \\u03c3\\u03c5\\u03bd\\u03bf\\u03bc\\u03b9\\u03bb\\u03af\\u03b1;\",\navatar_image:\"https:\/\/www.mediamarkt.gr\/static\/images\/chat\/chat-icon.jpg\"},\"https:\/\/mm-gr-gr.widget.custhelp.com\/ci\/ws\/get\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{RightNow.Client.Event.evt_widgetLoaded.subscribe(function(){RightNow.Client.Event.evt_chatOffered.subscribe(function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Live Chat\",eventAction:\"View\",eventLabel:\"\"})});RightNow.Client.Event.evt_chatAccepted.subscribe(function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Live Chat\",eventAction:\"Start\",eventLabel:\"\"})});RightNow.Client.Event.evt_chatRejected.subscribe(function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Live Chat\",\neventAction:\"Reject\",eventLabel:\"\"})})})}catch(a){}})();\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction delete_cookie(a){document.cookie=a+\"\\x3d; Path\\x3d\/; Expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\"}delete_cookie(\"noChat\");\u003C\/script\u003E\n\n\n\u003Cdiv id=\"chat-right-now\"\u003E\u003C\/div\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",143],8,16],",content_type:\"product\",value:",["escape",["macro",144],8,16],",currency:\"EUR\",order_id:",["escape",["macro",62],8,16],",num_items:",["escape",["macro",145],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:",["escape",["macro",146],8,16],",content_category:",["escape",["macro",148],8,16],",content_ids:[",["escape",["macro",90],8,16],"],content_type:\"product\",value:",["escape",["macro",149],8,16],",currency:\"EUR\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\",{content_ids:",["escape",["macro",143],8,16],",value:",["escape",["macro",144],8,16],",currency:\"EUR\",num_items:",["escape",["macro",145],8,16],",content_category:",["escape",["macro",150],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{$(document).delegate(\"#delivery button\",\"click\",function(){var a=[];$(\"#delivery li\").not(\".disabled\").find(\"h4\").each(function(){a.push($(this).text())});dataLayer.push({event:\"gaEvent\",eventCategory:\"Checkout\",eventAction:\"Delivery Options\",eventLabel:a.join(\", \")});var b=$(\"#delivery li.active\").find(\"h4\").text();dataLayer.push({event:\"gaEvent\",eventCategory:\"Checkout\",eventAction:\"Delivery Option\",eventLabel:b})});var b;$(document).delegate(\"#payment input[type\\x3dradio]\",\"change\",\nfunction(){b=$.trim($(this).closest(\"tr\").find(\"span.method-name\").text().replace(\/:.+\\d+\/,\"\").replace(\/\\(.*\\)\/g,\"\"))});$(document).delegate(\"#payment button\",\"click\",function(){var a=[];$(\"#payment input[type\\x3dradio]\").not(\":disabled\").each(function(){a.push($.trim($(this).closest(\"tr\").find(\"span.method-name\").text().replace(\/:.+\\d+\/,\"\").replace(\/\\(.*\\)\/g,\"\")))});a\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Checkout\",eventAction:\"Payment Methods\",eventLabel:a.join(\", \")});b\u0026\u0026dataLayer.push({event:\"gaEvent\",\neventCategory:\"Checkout\",eventAction:\"Payment Method\",eventLabel:b})})}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(h,g,k){function m(){var b=[].slice.call(h.getElementsByTagName(\"iframe\")).concat([].slice.call(h.getElementsByTagName(\"embed\"))),a;for(a=0;a\u003Cb.length;a++){var c=n(b[a]);if(c){c=b[a];var f=g.location,d=h.createElement(\"a\");d.href=c.src;d.hostname=\"www.youtube.com\";d.protocol=f.protocol;var e=\"\/\"===d.pathname.charAt(0)?d.pathname:\"\/\"+d.pathname;if(-1\u003Cd.search.indexOf(\"enablejsapi\")||(d.search=(0\u003Cd.search.length?d.search+\"\\x26\":\"\")+\"enablejsapi\\x3d1\"),!(-1\u003Cd.search.indexOf(\"origin\"))\u0026\u0026-1===\nf.hostname.indexOf(\"localhost\")){var w=f.port?\":\"+f.port:\"\";f=f.protocol+\"%2F%2F\"+f.hostname+w;d.search=d.search+\"\\x26origin\\x3d\"+f}\"application\/x-shockwave-flash\"===c.type\u0026\u0026(f=h.createElement(\"iframe\"),f.height=c.height,f.width=c.width,e=e.replace(\"\/v\/\",\"\/embed\/\"),c.parentNode.parentNode.replaceChild(f,c.parentNode),c=f);c=(d.pathname=e,c.src!==d.href+d.hash\u0026\u0026(c.src=d.href+d.hash),c);p(c)}}\"addEventListener\"in h\u0026\u0026h.addEventListener(\"load\",x,!0)}function n(b){b=b.src||\"\";return-1\u003Cb.indexOf(\"youtube.com\/embed\/\")||\n-1\u003Cb.indexOf(\"youtube.com\/v\/\")?!0:!1}function p(b){var a=YT.get(b.id);a||(a=new YT.Player(b,{}));\"undefined\"==typeof b.pauseFlag\u0026\u0026(b.pauseFlag=!1,a.addEventListener(\"onStateChange\",function(a){y(a,b)}))}function z(b){var a={};if(e.events[\"Watch to End\"]\u0026\u0026(a[\"Watch to End\"]=Math.min(b-3,Math.floor(.99*b))),e.percentageTracking){var c,f=[];if(e.percentageTracking.each\u0026\u0026(f=f.concat(e.percentageTracking.each)),e.percentageTracking.every){var d=parseInt(e.percentageTracking.every,10),g=100\/d;for(c=1;g\u003E\nc;c++)f.push(c*d)}for(c=0;c\u003Cf.length;c++)g=f[c],d=g+\"%\",g=b*g\/100,a[d]=Math.floor(g)}return a}function y(b,a){var c=b.data,f=b.target,d=f.getVideoUrl();d=d.match(\/[?\u0026]v=([^\u0026#]*)\/)[1];var g=f.getPlayerState(),e=Math.floor(f.getDuration()),h=z(e);e={1:\"Play\",2:\"Pause\"};e=e[c];if(a.playTracker=a.playTracker||{},1!==g||a.timer?(clearInterval(a.timer),a.timer=!1):(clearInterval(a.timer),a.timer=setInterval(function(){var b=f,c=h,d=a.videoId,e,g=b.getCurrentTime();b[d]=b[d]||{};for(e in c)c[e]\u003C=g\u0026\u0026!b[d][e]\u0026\u0026\n(b[d][e]=!0,q(d,e))},1E3)),1===c\u0026\u0026(a.playTracker[d]=!0,a.videoId=d,a.pauseFlag=!1),!a.playTracker[a.videoId])return!1;if(2===c){if(a.pauseFlag)return!1;a.pauseFlag=!0}r[e]\u0026\u0026q(a.videoId,e)}function q(b,a){var c=\"https:\/\/www.youtube.com\/watch?v\\x3d\"+b,f=g.GoogleAnalyticsObject;\"undefined\"==typeof g[t]||e.forceSyntax?\"function\"==typeof g[f]\u0026\u0026\"function\"==typeof g[f].getAll\u0026\u00262!==e.forceSyntax?g[f](\"send\",\"event\",\"Videos\",a,c):\"undefined\"!=typeof g._gaq\u0026\u00261!==A\u0026\u0026g._gaq.push([\"_trackEvent\",\"Videos\",a,c]):\ng[t].push({event:\"youTubeTrack\",attributes:{videoUrl:c,videoAction:a}})}function u(b,a,c){b.addEventListener?b.addEventListener(a,c):b.attachEvent?b.attachEvent(\"on\"+a,function(a){a.target=a.target||a.srcElement;c.call(b,a)}):(\"undefined\"==typeof b[\"on\"+a]||null===b[\"on\"+a])\u0026\u0026(b[\"on\"+a]=function(a){a.target=a.target||a.srcElement;c.call(b,a)})}function x(b){b=b.target||b.srcElement;var a=n(b);\"IFRAME\"===b.tagName\u0026\u0026a\u0026\u0026-1\u003Cb.src.indexOf(\"enablejsapi\")\u0026\u0026-1\u003Cb.src.indexOf(\"origin\")\u0026\u0026p(b)}var l,e=k||{},\nA=e.forceSyntax||0,t=e.dataLayerName||\"dataLayer\",r={Play:!0,Pause:!0,\"Watch to End\":!0};k=h.createElement(\"script\");k.src=\"\/\/www.youtube.com\/iframe_api\";var v=h.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(k,v);for(l in e.events)e.events.hasOwnProperty(l)\u0026\u0026(r[l]=e.events[l]);g.onYouTubeIframeAPIReady=function(){var b=g.onYouTubeIframeAPIReady;return function(){b\u0026\u0026b.apply(this,arguments);navigator.userAgent.match(\/MSIE [67]\\.\/gi)||(\"loading\"!==h.readyState?m():h.addEventListener?u(h,\n\"DOMContentLoaded\",m):u(g,\"load\",m))}}()}(document,window,{events:{Play:!0,Pause:!1,\"Watch to End\":!0},percentageTracking:{every:25}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=function(a,b,c){return function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:a,eventLabel:b,eventValue:c})}};$(\"li.section-store-availability a.marketsel-open\").eq(0).click(a(\"Store Availability\"));$(\"li.section-delivery-table a.marketsel-open\").eq(0).click(a(\"Delivery Options\"));$(\"#type-pickup-delivery a.mrh-accordion-trigger\").click(a(\"Store Availability\"));$(\"#type-express-delivery a.mrh-accordion-trigger\").click(a(\"Express Delivery\"));\n$(\"#radioset-shipping #label-delivery-2 a\").click(a(\"Store Availability\"))}catch(d){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"728499303955113\");fbq(\"init\",\"2544396395670553\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ScarabQueue=ScarabQueue||[];(function(a){if(!document.getElementById(a)){var b=document.createElement(\"script\");b.id=a;b.src=\"https:\/\/cdn.scarabresearch.com\/js\/122B9B8E89AFAE59\/scarab-v2.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})(\"scarab-js-api\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var f=[];if(\"Checkout\"==",["escape",["macro",24],8,16],"){var c=$(\"tbody.cart-product-table\").find(\"span.sku\"),d=$(\"tbody.cart-product-table\").find(\"p.cproduct-price-detail\"),e=$(\"tbody.cart-product-table\").find(\"select.item-qty option[selected\\x3dselected]\");if(0\u003Cc.length\u0026\u0026c.length==d.length\u0026\u0026c.length==e.length)for(var a=0;a\u003Cc.length;a++){var b=c[a].textContent.split(\":\")[1].trim(),g=d[a].textContent.replace(\/(:|,)\/,\".\").replace(\"-\",\"00\").replace(\/[^\\d.]+\/,\"\").replace(\/[^\\d.]+\/,\"\"),h=\ne[a].textContent;f.push({item:b,price:1*g?1*g:0,quantity:1*h})}}if(0==f.length\u0026\u0026(c=",["escape",["macro",152],8,16],")){d=[];for(e=0;e\u003Cc.length;++e)if(a=c[e],a.ecommerce)for(a=a.ecommerce.checkout\u0026\u0026a.ecommerce.checkout.products?a.ecommerce.checkout.products:a.ecommerce.remove\u0026\u0026a.ecommerce.remove.products?a.ecommerce.remove.products:a.ecommerce.purchase\u0026\u0026a.ecommerce.purchase.products?a.ecommerce.purchase.products:a.ecommerce.add\u0026\u0026a.ecommerce.add.products?a.ecommerce.add.products:[],b=0;b\u003Ca.length;++b)d[\"a\"+a[b].ean]=\n{item:a[b].id,price:1*a[b].price?1*a[b].price:0,quantity:void 0==a[b].quantity?1:a[b].quantity};for(var k in d)f.push(d[k])}\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"cart\",f]);ScarabQueue.push([\"go\"])},1E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"category\",",["escape",["macro",155],8,16],"]);ScarabQueue.push([\"go\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"purchase\",{orderId:",["escape",["macro",62],8,16],",items:",["escape",["macro",156],8,16],"}]);var products=[],dl=",["escape",["macro",152],8,16],";\nif(dl)for(var i=0;i\u003Cdl.length;++i){var ev=dl[i];if(ev.ecommerce)for(var prod=ev.ecommerce.checkout\u0026\u0026ev.ecommerce.checkout.products?ev.ecommerce.checkout.products:ev.ecommerce.remove\u0026\u0026ev.ecommerce.remove.products?ev.ecommerce.remove.products:ev.ecommerce.purchase\u0026\u0026ev.ecommerce.purchase.products?ev.ecommerce.purchase.products:ev.ecommerce.add\u0026\u0026ev.ecommerce.add.products?ev.ecommerce.add.products:[],j=0;j\u003Cprod.length;++j)products.push({item:prod[j].id,price:1*prod[j].price,quantity:void 0==prod[j].quantity?\n1:prod[j].quantity})}ScarabQueue.push([\"cart\",products]);ScarabQueue.push([\"go\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"view\",",["escape",["macro",90],8,16],"]);ScarabQueue.push([\"go\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"https:\/\/stats.g.doubleclick.net http:\/\/www.googleadservices.com https:\/\/googleads.g.doubleclick.net https:\/\/connect.facebook.net https:\/\/www.facebook.com http:\/\/ocsp.usertrust.com\".split(\" \").forEach(function(b){var a=document.createElement(\"link\");a.rel=\"dns-prefetch preconnect\";a.href=b;document.head.appendChild(a)})}catch(b){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){var a=",["escape",["macro",149],8,16],";a=parseFloat(a);var b=",["escape",["macro",90],8,16],",c=[\"\"];85\u003Ca\u0026\u0026-1==c.indexOf(b)\u0026\u0026$(\".wrapper-price\\x3espan.product-teaser-fee-container\").html('\\u0394\\u03c9\\u03c1\\u03b5\\u03ac\\u03bd \\u03bc\\u03b5\\u03c4\\u03b1\\u03c6\\u03bf\\u03c1\\u03b9\\u03ba\\u03ac \\x3ca href\\x3d\"#\" class\\x3d\"button-info-layer\" data-layer\\x3d\"deliveryinformation\"\\x3e\\x3c\/a\\x3e')});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction CartFreeShipping(){var a=$(\"#header .cart .articles strong:not(.counter)\").text();a=a.replace(\".\",\"\");a=parseInt(a);85\u003C=a\u0026\u0026setTimeout(function(){$(\"#header .basket .content .buttons\").html('\\x3ca href\\x3d\"https:\/\/www.mediamarkt.gr\/webapp\/wcs\/stores\/servlet\/MultiChannelDisplayBasket?storeId\\x3d99452\\x26langId\\x3d-18\" class\\x3d\"button arrow\" rel\\x3d\"nofollow\"\\x3e\\x3cspan\\x3e\\u039a\\u03b1\\u03bb\\u03ac\\u03b8\\u03b9\\x3c\/span\\x3e\\x3c\/a\\x3e\\x3cbr \/\\x3e\\x3cp style\\x3d\"display:block; padding:5%; width:90%; background: #F2F2F2; margin-bottom: -15px; margin-top: 20px;\"\\x3e\\x3cimg src\\x3d\"\/\/www.mediamarkt.gr\/static\/images\/Icon_DvreanParadosiR.png\" style\\x3d\"margin-right: 34px;\"\\x3e\\x3cspan style\\x3d\"position: relative;top: -7px;\"\\x3e\\u0394\\u03c9\\u03c1\\u03b5\\u03ac\\u03bd \\u0391\\u03c0\\u03bf\\u03c3\\u03c4\\u03bf\\u03bb\\u03ae\\x3c\/span\\x3e\\x3c\/p\\x3e')},\n600)}$(document).on(\"mouseenter\",\"#header .cart\",function(){CartFreeShipping()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){$(\".product-list article\").addClass(function(c){return\"product-\"+c});$(\".product-list article\").each(function(c){var a=$(\".product-\"+c+\" .product-teaser-price\").text();a=a.split(\"\\u20ac\");a=a[1];-1!=a.indexOf(\",-\")\u0026\u0026(a=a.replace(\",-\",\"\"));-1!=a.indexOf(\".\")\u0026\u0026(a=a.replace(\".\",\"\"));a=parseFloat(a);85\u003C=a\u0026\u0026$(\".product-\"+c+\" .product-teaser-fee-container\").html('\\u0394\\u03c9\\u03c1\\u03b5\\u03ac\\u03bd \\u03bc\\u03b5\\u03c4\\u03b1\\u03c6\\u03bf\\u03c1\\u03b9\\u03ba\\u03ac \\x3ca href\\x3d\"#\" class\\x3d\"button-info-layer\" data-layer\\x3d\"deliveryinformation\"\\x3e\\x3c\/a\\x3e')});\n$(document).ajaxComplete(function(c,a,d){$(\".product-list article\").addClass(function(a){return\"product-\"+a});$(\".product-list article\").each(function(a){var b=$(\".product-\"+a+\" .product-teaser-price\").text();b=b.split(\"\\u20ac\");b=b[1];-1!=b.indexOf(\",-\")\u0026\u0026(b=b.replace(\",-\",\"\"));-1!=b.indexOf(\".\")\u0026\u0026(b=b.replace(\".\",\"\"));b=parseFloat(b);85\u003C=b\u0026\u0026$(\".product-\"+a+\" .product-teaser-fee-container\").html('\\u0394\\u03c9\\u03c1\\u03b5\\u03ac\\u03bd \\u03bc\\u03b5\\u03c4\\u03b1\\u03c6\\u03bf\\u03c1\\u03b9\\u03ba\\u03ac \\x3ca href\\x3d\"#\" class\\x3d\"button-info-layer\" data-layer\\x3d\"deliveryinformation\"\\x3e\\x3c\/a\\x3e')})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){$.urlParam=function(name){var results=(new RegExp(\"[?\\x26]\"+name+\"\\x3d([^\\x26#]*)\")).exec(window.location.href);if(results==null)return null;else return results[1]||0};var PreSelect=$.urlParam(\"preselect\");if(PreSelect==1){var productId=",["escape",["macro",90],8,16],";var productPrice=",["escape",["macro",149],8,16],";productPrice=parseFloat(productPrice);if(",["escape",["macro",20],8,16],"==\"DESKTOP\")setTimeout(function(){$(\"#product-details .premiumopts.extend-guarantee ul li\").each(function(index,element){if($(this).find(\".opt-name\").text().indexOf(\"\\u0395\\u03c0\\u03ad\\u03ba\\u03c4\\u03b1\\u03c3\\u03b7 \\u03b5\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7\\u03c2 \\u03c3\\u03c4\\u03b1 5 \\u0388\\u03c4\\u03b7\")\u003E\n-1||$(this).find(\".opt-name\").text().indexOf(\"\\u0395\\u03c0\\u03ad\\u03ba\\u03c4\\u03b1\\u03c3\\u03b7 \\u03b5\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7\\u03c2 \\u03c3\\u03c4\\u03b1 5 \\u03ad\\u03c4\\u03b7\")\u003E-1||$(this).find(\".opt-name\").text().indexOf(\"\\u0395\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7 4 \\u03c7\\u03c1\\u03cc\\u03bd\\u03b9\\u03b1\")\u003E-1||$(this).find(\".opt-name\").text().indexOf(\"\\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1 2 \\u03c7\\u03c1\\u03cc\\u03bd\\u03b9\\u03b1\")\u003E-1||$(this).find(\".opt-name\").text().indexOf(\"\\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1 1 \\u03c7\\u03c1\\u03cc\\u03bd\\u03bf\\u03c2\")\u003E\n-1||$(this).find(\".opt-name\").text().indexOf(\"\\u0395\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7 +1 \\u03c7\\u03c1\\u03cc\\u03bd\\u03bf\\u03c2\")\u003E-1||$(this).find(\".opt-name\").text().indexOf(\"\\u0391\\u03c3\\u03c6\\u03ac\\u03bb\\u03b5\\u03b9\\u03b1 \\u03b3\\u03b9\\u03b1 1 \\u03ad\\u03c4\\u03bf\\u03c2\")\u003E-1)$(this).find(\".checkbox\").trigger(\"click\")})},600);else if(",["escape",["macro",20],8,16],"==\"MOBILE\"||",["escape",["macro",20],8,16],"==\"APP\")if(productPrice\u003E=1)$(\".group-service-articles .mrh-accordion-content .grid\").each(function(index,element){if($(this).find(\"label.additional-service\").text().indexOf(\"\\u0395\\u03c0\\u03ad\\u03ba\\u03c4\\u03b1\\u03c3\\u03b7 \\u03b5\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7\\u03c2 \\u03c3\\u03c4\\u03b1 5 \\u0388\\u03c4\\u03b7\")\u003E\n-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u0395\\u03c0\\u03ad\\u03ba\\u03c4\\u03b1\\u03c3\\u03b7 \\u03b5\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7\\u03c2 \\u03c3\\u03c4\\u03b1 5 \\u03ad\\u03c4\\u03b7\")\u003E-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u0395\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7 4 \\u03c7\\u03c1\\u03cc\\u03bd\\u03b9\\u03b1\")\u003E-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1 2 \\u03c7\\u03c1\\u03cc\\u03bd\\u03b9\\u03b1\")\u003E\n-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u03a0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b1\\u03c3\\u03af\\u03b1 1 \\u03c7\\u03c1\\u03cc\\u03bd\\u03bf\\u03c2\")\u003E-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u0395\\u03b3\\u03b3\\u03cd\\u03b7\\u03c3\\u03b7 +1 \\u03c7\\u03c1\\u03cc\\u03bd\\u03bf\\u03c2\")\u003E-1||$(this).find(\"label.additional-service\").text().indexOf(\"\\u0391\\u03c3\\u03c6\\u03ac\\u03bb\\u03b5\\u03b9\\u03b1 \\u03b3\\u03b9\\u03b1 1 \\u03ad\\u03c4\\u03bf\\u03c2\")\u003E-1)$(this).find(\".additional-service-info input\").trigger(\"click\")})}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){var productId=",["escape",["macro",90],8,16],";var productPrice=",["escape",["macro",149],8,16],";productPrice=parseFloat(productPrice);if(",["escape",["macro",20],8,16],"==\"DESKTOP\")setTimeout(function(){if(productPrice\u003E=20)$(\"#product-details .premiumopts.extend-guarantee ul li\").each(function(index,element){if($(this).find(\".opt-name\").text().indexOf(\"Media Markt Care 24\")\u003E-1){$(this).find(\".opt-value\").text(\"\\u20ac 0,00\");$(this).find(\".checkbox\").trigger(\"click\")}})},600);else if(",["escape",["macro",20],8,16],"==\"MOBILE\"||\n",["escape",["macro",20],8,16],"==\"APP\")if(productPrice\u003E=20)$(\".group-service-articles .mrh-accordion-content .grid\").each(function(index,element){if($(this).find(\"label.additional-service\").text().indexOf(\"Media Markt Care 24\")\u003E-1){$(this).find(\".additional-service-price\").text(\"\\u20ac 0,00\");$(this).find(\".additional-service-info input\").trigger(\"click\")}})});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"EECcheckoutOption\",ecommerce:{checkout_option:{actionField:{step:\"2\",option:\"",["escape",["macro",161],7],"\",action:\"checkout_option\"}}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"EECcheckout\",ecommerce:{checkout:{actionField:{step:\"5\",option:\"\",action:\"checkout\"}}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(window.mcs\u0026\u0026mcs.factfinder\u0026\u0026mcs.factfinder.getSessionId\u0026\u0026navigator.sendBeacon){var d={channel:",["escape",["macro",162],8,16],",event:\"cart\"},a=",["escape",["macro",80],8,16],";if(a\u0026\u0026a.add\u0026\u0026a.add.products){var c=",["escape",["macro",163],8,16],"+\"?\"+$.param(d);$.each(a.add.products,function(a,b){c+=\"\\x26\"+$.param({id:b.id,count:b.quantity,price:b.price,sid:mcs.factfinder.getSessionId()})});navigator.sendBeacon(c,null)}}}catch(e){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(window.mcs\u0026\u0026mcs.factfinder\u0026\u0026mcs.factfinder.getSessionId\u0026\u0026navigator.sendBeacon){var d={channel:",["escape",["macro",162],8,16],",event:\"checkout\"},a=",["escape",["macro",80],8,16],";if(a\u0026\u0026a.purchase\u0026\u0026a.purchase.products){var c=",["escape",["macro",163],8,16],"+\"?\"+$.param(d);$.each(a.purchase.products,function(a,b){c+=\"\\x26\"+$.param({id:b.id,count:b.quantity,price:b.price,sid:mcs.factfinder.getSessionId()})});navigator.sendBeacon(c,null)}}}catch(e){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(window.mcs\u0026\u0026mcs.factfinder\u0026\u0026mcs.factfinder.getSessionId\u0026\u0026navigator.sendBeacon){var a={sid:mcs.factfinder.getSessionId(),channel:",["escape",["macro",162],8,16],",event:\"login\",userId:",["escape",["macro",165],8,16],"},b=",["escape",["macro",163],8,16],"+\"?\"+$.param(a);navigator.sendBeacon(b,null)}}catch(c){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C$(\"#product-details a.more.clickable\").length)$(\"body\").on(\"mousedown\",\"#product-details a.more.clickable\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Product Stage - More Technical Details\",eventValue:0})});\nif(0\u003C$(\"#product-details form.extend-guarantee input[type\\x3dcheckbox],#product-sidebar form.extend-guarantee input[type\\x3dcheckbox]\").length)$(\"body\").on(\"mousedown\",\"#product-details form.extend-guarantee input[type\\x3dcheckbox],#product-sidebar form.extend-guarantee input[type\\x3dcheckbox]\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:$(this).is(\":checked\")?\"Uncheck\":\"Check\",eventLabel:\"Warranty Option \"+$(this).parent().parent().parent().find(\"span.opt-name\")[0].innerText,\neventValue:0})});\nif(0\u003C$(\"#wrapper-main \\x3e article \\x3e form \\x3e section \\x3e div.grid \\x3e div:nth-child(2) p.additional-service-info \\x3e label\").length)$(\"body\").on(\"mousedown\",\"#wrapper-main \\x3e article \\x3e form \\x3e section \\x3e div.grid \\x3e div:nth-child(2) p.additional-service-info \\x3e label\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:$(this).parent().find(\"input[type\\x3dradio]\").is(\":checked\")?\"Uncheck\":\"Check\",eventLabel:\"Warranty Option \"+$(this)[0].innerText,\neventValue:0})});if(0\u003C$(\"#product-details div.price-sidebar span.icon-info,#wrapper-main \\x3e article \\x3e form span.product-teaser-fee-container \\x3e a\").length)$(\"body\").on(\"mousedown\",\"#product-details div.price-sidebar span.icon-info,#wrapper-main \\x3e article \\x3e form span.product-teaser-fee-container \\x3e a\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Delivery Costs Info Button\",eventValue:0})});\nif(0\u003C$(\"#product-details div.price-sidebar a.deliverytbl-open\").length)$(\"body\").on(\"mousedown\",\"#product-details div.price-sidebar a.deliverytbl-open\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"All Delivery Options\",eventValue:0})});\nif(0\u003C$(\"#header \\x3e header \\x3e div.site-header__navbar.site-navbar \\x3e div.site-navbar__group.site-navbar__group--right-main \\x3e nav \\x3e a,#rise-header \\x3e div \\x3e nav.site-navigation2.site-navigation2--dropdown.ms-header2__nav \\x3e div.site-navigation2__wrapper \\x3e ul \\x3e li:nth-child(5) \\x3e a,#page-footer \\x3e div:nth-child(1) \\x3e div \\x3e div:nth-child(2) \\x3e div \\x3e ul \\x3e li:nth-child(1) \\x3e a\").length)$(\"body\").on(\"mousedown\",\"#header \\x3e header \\x3e div.site-header__navbar.site-navbar \\x3e div.site-navbar__group.site-navbar__group--right-main \\x3e nav \\x3e a,#rise-header \\x3e div \\x3e nav.site-navigation2.site-navigation2--dropdown.ms-header2__nav \\x3e div.site-navigation2__wrapper.site-navigation2__wrapper--is-open \\x3e ul \\x3e li:nth-child(5) \\x3e a,#page-footer \\x3e div:nth-child(1) \\x3e div \\x3e div:nth-child(2) \\x3e div \\x3e ul \\x3e li:nth-child(1) \\x3e a\",\nfunction(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Teaser Support\",eventValue:0})});\nif(0\u003C$(\"#produktdetail_seite_reco-content_product_detail div.features-wrapper.collapsible-features \\x3e a \\x3e span,#accordion-technical-details \\x3e h3.mrh-accordion-headline,#accordion-technical-details \\x3e div \\x3e a.mrh-accordion-trigger.accordion-overlay\").length)$(\"body\").on(\"mousedown\",\"#produktdetail_seite_reco-content_product_detail div.features-wrapper.collapsible-features.collapsed \\x3e a \\x3e span,#accordion-technical-details:not(.displayed) \\x3e h3.mrh-accordion-headline,#accordion-technical-details:not(.displayed) \\x3e div \\x3e a.mrh-accordion-trigger.accordion-overlay\",function(a){dataLayer.push({event:\"gaEvent\",\neventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Product Details - More Details\",eventValue:0})});$(\"body\").on(\"mousedown\",\"div.bigContent a.aqLink-FAQ_Page\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Help-Teaser - FAQ\",eventValue:0})});\n$(\"body\").on(\"mousedown\",\"div.bigContent a.aqLink-Service\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Product Detail Page\",eventAction:\"Click\",eventLabel:\"Help-Teaser - Service \\x26 Support\",eventValue:0})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":303
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"body\").on(\"mousedown\",\"#basket-flyout \\x3e div.accept \\x3e a.close.guarantee-add-back,div.mrh-layer-wrapper article a.button.button-proceed-shopping\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Pre-Checkout Layer\",eventAction:\"Click\",eventLabel:\"Button Continue Shopping\",eventValue:0})});\n$(\"body\").on(\"mousedown\",\"a#basket-flyout-cart.button.close,div.mrh-layer-wrapper article a.button.button-go-to-basket\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Pre-Checkout Layer\",eventAction:\"Click\",eventLabel:\"Button Go To Basket\",eventValue:0})});\n$(\"body\").on(\"mousedown\",\"#cboxLoadedContent \\x3e div.layer-header \\x3e button.layer-close,#wrapper-main \\x3e div.layer-header \\x3e a.layer-button-close\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Pre-Checkout Layer\",eventAction:\"Click\",eventLabel:\"Button Close Layer\",eventValue:0})});\n$(\"body\").on(\"mousedown\",\"#guarantee-form-in-layer input[type\\x3dcheckbox]\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Pre-Checkout Layer\",eventAction:$(this).is(\":checked\")?\"Uncheck\":\"Check\",eventLabel:\"Garantee: \"+$(this).parent().parent().parent().find(\"span.opt-name\").text(),eventValue:0})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":311
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"virtPath\",virtPath:\"\/el\/layer\/preCheckout\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":312
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"body\").on(\"click\",\"#search-suggestion \\x3e ul \\x3e li \\x3e a\",function(){var a=$(this).parent().parent().parent().find(\"div\").text().trim();dataLayer.push({event:\"gaEvent\",eventCategory:\"Sales advisor\",eventAction:\"Select\",eventLabel:[a,$(this).text().trim()].join(\" \/ \")})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":313
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"go\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":324
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",70,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"true\"==",["escape",["macro",153],8,16],"\u0026\u0026",["escape",["macro",154],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",",["escape",["macro",154],8,16],"]);ScarabQueue.push([\"go\"]);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":325
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cstyle\u003E\n  .optout-link-icon { text-indent: -10000px; display: inline-block; width:21px; height: 21px;}\n  .optout-link-icon-tracked { background-image:url(data:image\/gif;base64,R0lGODlhFQAVAPEAAAAAAP\/\/\/yZFySZFySH5BAEAAAIALAAAAAAVABUAAAI+hI+pyywBo5wB0Sstxuht2n0QEGmfUR6iOrIcmhreGE9hS7oxMFdmduj5SJdbZmMU4XhKoKy5E64a1KoVUAAAOw==) }\n  .optout-link-icon-not-tracked { background-image:url(data:image\/gif;base64,R0lGODdhFQAVAPEAAAAAAP\/\/\/yZFySZFySH5BAEAAAIALAAAAAAVABUAAAI2hI+pyxwPo3xo2ljvzXryjh2SAZGhWZLiCXgftY4o68bpHIh2vqP4C+LhgkBQsXPUNJbMpqEAADs=) }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var r=function(a,c){var b=a.className||\"\";b=b.split(\" \");-1===b.indexOf(c)\u0026\u0026b.push(c);a.className=b.join(\" \")},t=function(a,c){var b=a.className||\"\";b=b.replace(c,\"\").trim();a.className=b},g=location.hostname,h=\"optout\",f=g.match(\/(.*)(\\.(mediamarkt|saturn)\\.[a-z]{2,3}(\\.[a-z]{2})?)\/,\"ig\"),u=f?f[2]:g,l=",["escape",["macro",13],8,16],",v=function(a,c,b,e,d){e=e?\"; path\\x3d\"+e:\"\";d=d?\"; domain\\x3d\"+d:\"\";if(b){var f=new Date;f.setTime(f.getTime()+864E5*b);b=\"; expires\\x3d\"+f.toUTCString()}else b=\n\"\";document.cookie=a+\"\\x3d\"+c+b+e+d},w=function(a){var c=\"; \"+document.cookie;a=c.split(\"; \"+a+\"\\x3d\");return 2===a.length?a.pop().split(\";\").shift():null},m=function(a){if(-1==document.cookie.indexOf(h))v(h,\"|\"+a+\"|\",\"4380\",\"\/\",u);else{var c=w(h),b=c.split(\"|\"),e=b.indexOf(a);-1==e\u0026\u0026(b.shift(),b.pop(),b.push(a),c=\"|\"+b.join(\"|\")+\"|\");v(h,c,\"4380\",\"\/\",u)}},n=function(a,c){var b=w(h)||\"\",e=new RegExp(\"\\\\|\"+c+\"\\\\|\",\"gi\");t(a,\"optout-link-icon-not-tracked\");t(a,\"optout-link-icon-tracked\");var d=\"optout-link-icon-tracked\";\nb.match(e)\u0026\u0026(d=\"optout-link-icon-not-tracked\");r(a,d)};g=function(a){var c=this.getAttribute(\"data-key\"),b=this;if(f\u0026\u0026f[2]){var e=\"www\"+f[2];e=location.protocol+\"\/\/www\"+f[2]+\"\/public\/setOptOutCookie?key\\x3d\"+c+\"\\x26host\\x3d\"+e;var d=new XMLHttpRequest;d.open(\"GET\",e);d.responseType=\"text\";d.withCredentials=!0;d.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE\u0026\u0026200===this.status)try{var a=JSON.parse(this.responseText);\"success\"!=a.status\u0026\u0026(m(c),l\u0026\u0026console.error(\"API was able to set cookie - legacy cookie set via GTM\",\na));n(b,c)}catch(x){l\u0026\u0026console.error(\"XHR Request failed to parse\",x)}else this.readyState===XMLHttpRequest.DONE\u0026\u0026200!==this.status\u0026\u0026(m(c),n(b,c),l\u0026\u0026console.log(\"API is not responding with status 200 - legacy cookie set via GTM\"))};d.send(null)}else m(c),l\u0026\u0026console.log(\"wrong host - legacy cookie set via GTM\");a.preventDefault();a.stopPropagation();return a};var p=document.querySelectorAll(\"a.opt-out-link\"),q;for(q in p)if(p.hasOwnProperty(q)){var k=p[q];r(k,\"optout-link-icon\");n(k,k.getAttribute(\"data-key\"));\nk.addEventListener(\"click\",g);k.addEventListener(\"keyup\",g)}}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":332
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{document.querySelectorAll(\"a.opt-out-link\").forEach(function(a){var b=a.getAttribute(\"data-key\"),c=a.getAttribute(\"data-enabled-class\")||\"\";localStorage[b]\u0026\u0026a.setAttribute(\"class\",(a.getAttribute(\"class\")||\"\")+\" \"+c);a.onclick=function(){localStorage[b]?(localStorage.removeItem(b),a.setAttribute(\"class\",(a.getAttribute(\"class\")||\"\").replace(c,\"\"))):(localStorage[b]=!0,a.setAttribute(\"class\",(a.getAttribute(\"class\")||\"\")+\" \"+c));return!1}})}catch(a){}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":334
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"EECcheckoutOption\",ecommerce:{checkout_option:{actionField:{step:\"2\",option:\"Sign In\",action:\"checkout_option\"}}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":335
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"EECcheckoutOption\",ecommerce:{checkout_option:{actionField:{step:\"2\",option:\"Guest Order\",action:\"checkout_option\"}}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":336
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.createElement(\"script\");s.src=\"https:\/\/cdn.pushpushgo.com\/js\/5b112277868f72000b7bda3a.js\";s.charset=\"UTF-8\";s.setAttribute(\"async\",\"async\");s.setAttribute(\"defer\",\"defer\");var l=document.createElement(\"link\");l.rel=\"manifest\";l.href=\"\/PushPushGo-manifest.json\";document.getElementsByTagName(\"head\")[0].appendChild(s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":341
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(window.mcs\u0026\u0026mcs.factfinder\u0026\u0026mcs.factfinder.getSessionId\u0026\u0026navigator.sendBeacon){var srpTrackingBind=window[\"__srpClickTrackingBindings\"]=[];var data={event:\"click\",channel:",["escape",["macro",162],8,16],",sid:mcs.factfinder.getSessionId(),origPageSize:25};data.query=",["escape",["macro",53],8,16],";var page=\/[\u0026?]page=(\\d+)\/.exec(location.search);data.page=page?page[1]:\"1\";var timestampCache=Object.create(null);var dlvEcommerce=",["escape",["macro",80],8,16],";var ecommerce=JSON.parse(JSON.stringify(dlvEcommerce));\nif(ecommerce\u0026\u0026ecommerce.impressions){data.pageSize=ecommerce.impressions.length;var gtmEvent=",["escape",["macro",76],8,16],";$.each(ecommerce.impressions,function(idx,val){if(val.list!=\"Search result list\"\u0026\u0026val.list!=\"Search list\"||srpTrackingBind.indexOf(val.id)\u003E=0)return false;if(",["escape",["macro",20],8,16],"==\"DESKTOP\")var searchResults=$(\"ul.products-list a[href*\\x3d\"+val.id+\"], .add-to-cart\");else var searchResults=$(\"ul.product-list a[href*\\x3d\"+val.id+\"], .add-to-cart\");searchResults.filter(function(){var that=\n$(this);var isValid=(new RegExp(val.id)).test(that.attr(\"href\"))||that.is(\".add-to-cart\")\u0026\u0026(new RegExp(val.id)).test(that.data(\"gtm-event-ext\"));if(isValid)srpTrackingBind.push(val.id);return isValid}).click(function(evt){if(timestampCache[evt.timeStamp])return;timestampCache[evt.timeStamp]=true;function calculatePosition(element){if(",["escape",["macro",20],8,16],"==\"DESKTOP\"){var listname=\".products-list\";var productwrapper=\".product-wrapper\";var lastHTMLElement=\"footer\"}else{var listname=\".product-list\";\nvar productwrapper=\".product-teaser-container\";var lastHTMLElement=\".wrapper-price\"}var that=$(element),productsList=that.closest(listname);var product=that.closest(productwrapper),products=productsList.find(productwrapper),footer=that.closest(lastHTMLElement),footers=productsList.find(lastHTMLElement);return Math.max(products.index(product),footers.index(footer))}data.id=val.id;data.pos=(data.page-1)*data.pageSize+(calculatePosition(this)+1);data.origPos=(data.page-1)*data.pageSize+(calculatePosition(this)+\n1);data.title=val.name;var mrr=Math.round(1E4\/data.pos);if(data.query){dataLayer.push({event:\"gaSearchClick\",eventCategory:\"Search Quality\",eventAction:\"Clicked Position\",eventLabel:data.query.toLowerCase(),eventValue:data.pos});dataLayer.push({event:\"gaSearchClick\",eventCategory:\"Search Quality\",eventAction:\"MRR\",eventLabel:data.query.toLowerCase(),eventValue:mrr})}navigator.sendBeacon(",["escape",["macro",163],8,16],"+\"?\"+$.param(data),null)})})}}}catch(e){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":350
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(containerId,htmlId){var gtm=google_tag_manager[containerId],isDebug=",["escape",["macro",13],8,16],",timeoutHandler,timeoutDelay=500;try{timeoutHandler=window.setTimeout(function(){window.dataLayer.push({\"event\":\"Change UserConsent\"});gtm.onHtmlSuccess(htmlId)},timeoutDelay)}catch(e){gtm.onHtmlFailure(htmlId)}})(",["escape",["macro",12],8,16],",",["escape",["macro",177],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":404
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(k,f){try{var b,g=\"Bestprice360 Connect\";",["escape",["macro",13],8,16],"\u0026\u0026(b=window.performance.now());var h=google_tag_manager[k];(function(a,b,c,d,e){a.__bp360=c;a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};e=b.createElement(\"script\");e.async=!0;e.src=d;b.body.appendChild(e)})(window,document,\"bp\",\"\/\/360.bestprice.gr\/360.js\");bp(\"connect\",\"BP-22403-HD07iUZC9Q\");h.onHtmlSuccess(f);if(",["escape",["macro",13],8,16],"){var d=window.performance.now();console.info(\"Script \"+g+\" Success - Runtime (ms):\",\nd-b)}}catch(a){h.onHtmlFailure(f),",["escape",["macro",13],8,16],"\u0026\u0026(console.error(a),d=window.performance.now(),console.info(\"Script \"+g+\" Failure - Runtime (ms):\",d-b))}})(",["escape",["macro",12],8,16],",",["escape",["macro",177],8,16],");\u003C\/script\u003E\n\n  \n  \n  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1155
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",99,0]],
      "teardown_tags":["list",["tag",102,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,e){try{var c,d=\"Bestprice360 Orders\";",["escape",["macro",13],8,16],"\u0026\u0026(c=window.performance.now());var f=google_tag_manager[b];b={orderId:",["escape",["macro",62],8,16],",revenue:",["escape",["macro",124],8,16],",shipping:",["escape",["macro",178],8,16],",tax:",["escape",["macro",179],8,16],",currency:\"EUR\",products:",["escape",["macro",180],8,16],"};bp(\"addOrder\",b);if(",["escape",["macro",13],8,16],"){var a=window.performance.now();console.info(\"Script \"+d+\" Data pushed - Runtime (ms):\",a-c);console.table(b)}f.onHtmlSuccess(e);",["escape",["macro",13],8,16],"\u0026\u0026(a=window.performance.now(),\nconsole.info(\"Script \"+d+\" Success - Runtime (ms):\",a-c))}catch(g){f.onHtmlFailure(e),",["escape",["macro",13],8,16],"\u0026\u0026(console.error(g),a=window.performance.now(),console.info(\"Script \"+d+\" Failure - Runtime (ms):\",a-c))}})(",["escape",["macro",12],8,16],",",["escape",["macro",177],8,16],");\u003C\/script\u003E\n\n  \n  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1156
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){var a=",["escape",["macro",149],8,16],",b=[];a=parseFloat(a);var c=",["escape",["macro",90],8,16],";85\u003C=a\u0026\u0026-1==b.indexOf(c)\u0026\u0026$(\"#productIcons ul\").append('\\x3cli style\\x3d\"height: 40px;\"\\x3e\\x3cimg src\\x3d\"\/\/picscdn.redblue.de\/doi\/msh-pixelboxx-317053571\/feecms_x_x_x\" style\\x3d\"width: 40px;position: relative; top: 15px; margin-right: 10px;\"\\x3e\\u0394\\u03c9\\u03c1\\u03b5\\u03ac\\u03bd \\u03bc\\u03b5\\u03c4\\u03b1\\u03c6\\u03bf\\u03c1\\u03b9\\u03ba\\u03ac\\x3c\/li\\x3e');$(\"#product-details .price-sidebar .availability li\").addClass(function(a){return\"available-\"+\na});a=$(\"#product-details .box.infobox.availability .available-0\").text().indexOf(\"\\u03a3\\u03b5 \\u03b1\\u03c0\\u03cc\\u03b8\\u03b5\\u03bc\\u03b1- \\u03a0\\u03b1\\u03c1\\u03ac\\u03b4\\u03bf\\u03c3\\u03b7 \\u03c3\\u03b5 1 \\u03b7\\u03bc\\u03ad\\u03c1\\u03b1\");-1\u003Ca\u0026\u0026$(\"#productIcons ul\").append('\\x3cli style\\x3d\"height: 40px;\"\\x3e\\x3cimg src\\x3d\"\/\/picscdn.redblue.de\/doi\/msh-pixelboxx-1255534156\/feecms_x_x_x\" style\\x3d\"width: 40px;position: relative; top: 15px; margin-right: 10px;\"\\x3e\\x3cfont style\\x3d\"color:green;\"\\x3e\\u03a3\\u03b5 \\u03b1\\u03c0\\u03cc\\u03b8\\u03b5\\u03bc\\u03b1\\x3c\/font\\x3e\\x3c\/li\\x3e')});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,h){try{var c,e=\"Bestprice360 Order All Products\";",["escape",["macro",13],8,16],"\u0026\u0026(c=window.performance.now());var k=google_tag_manager[b];b=",["escape",["macro",180],8,16],"||[];for(var f=[],g=0;g\u003Cb.length;g++){var d=b[g],l={orderId:",["escape",["macro",62],8,16],",productId:d.id,title:d.name,price:d.price,quantity:d.quantity};f.push(l)}bp(\"addProduct\",f);if(",["escape",["macro",13],8,16],"){var a=window.performance.now();console.info(\"Script \"+e+\" Data pushed - Runtime (ms):\",a-c);console.table(f)}k.onHtmlSuccess(h);",["escape",["macro",13],8,16],"\u0026\u0026\n(a=window.performance.now(),console.info(\"Script \"+e+\" Success - Runtime (ms):\",a-c))}catch(m){k.onHtmlFailure(h),",["escape",["macro",13],8,16],"\u0026\u0026(console.error(m),a=window.performance.now(),console.info(\"Script \"+e+\" Failure - Runtime (ms):\",a-c))}})(",["escape",["macro",12],8,16],",",["escape",["macro",177],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1157
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaEvent"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"view"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"Facet"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|goa|"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"|a=1|"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaFieldInteraction"
    },{
      "function":"_ew",
      "arg0":["macro",39],
      "arg1":"mediamarkt.gr"
    },{
      "function":"_ew",
      "arg0":["macro",39],
      "arg1":"redblue.de"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"^http",
      "ignore_case":true
    },{
      "function":"_ew",
      "arg0":["macro",39],
      "arg1":"p2c.xplace.de"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)1108239_33($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Thank you page"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECaddToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECproductDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECproductImpression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECpromotionImpression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECremoveFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Change UserConsent"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"APP"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|gad|"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"|m=1|"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"\/webapp\/wcs\/stores\/servlet\/MultiChannelDisplayBasket"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|cri|"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"Productdetail"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Category"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Search Results"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|gdc|"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"youTubeTrack"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"add-to-wishlist|cproduct-actions-wishlist"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"DESKTOP"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Productdetail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"add-to-compare"
    },{
      "function":"_re",
      "arg0":["macro",96],
      "arg1":"reviews-btn-show-more|user-ratings-link"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"#|\/reviews\/"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)1108239_68($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Maxymiser"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|max|"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|twt|"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Home"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"Productdetail"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"Checkout|Thank you page"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECcheckout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECcheckoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECproductClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECpromotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaSearchClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtPath"
    },{
      "function":"_ew",
      "arg0":["macro",40],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)1108239_653($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",129],
      "arg1":"pushpushgo"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EECpurchase"
    },{
      "function":"_eq",
      "arg0":["macro",134],
      "arg1":"blockTransaction"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|gsa|"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"CMS"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Store"
    },{
      "function":"_re",
      "arg0":["macro",138],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",138],
      "arg1":"webapp\/wcs\/stores\/servlet\/MultiChannelMARegister"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"MultiChannelMARegister|MultiChannelOrderRegistration",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",47],
      "arg1":"\/webapp\/wcs\/stores\/servlet\/MultiChannelMARegister"
    },{
      "function":"_sw",
      "arg0":["macro",47],
      "arg1":"\/webapp\/wcs\/stores\/servlet\/MultiChannelOrderSummary"
    },{
      "function":"_sw",
      "arg0":["macro",47],
      "arg1":"\/webapp\/wcs\/stores\/servlet\/MultiChannelOrderAuthentication"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"^(\/mcs\/productlist\/|\/\\w+\/category\/|\/webapp\/wcs\/stores\/servlet\/MultiChannelSearch|\/\\w+\/search\\.html)"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|lik|"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"Basket|Authentication Column|Checkout summary|Checkout registration"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"MultiChannelOrderAuthentication|MultiChannelOrderConfirm|MultiChannelOrderDelivery|MultiChannelOrderRegistration|MultiChannelOrderSummary|MultiChannelOrderPromotioncodeAdd"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|orc|"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"MOBILE"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|optOutFB|"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"\/el\/shop\/bg.html|\/el\/shop\/yolo.html"
    },{
      "function":"_eq",
      "arg0":["macro",151],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)1108239_92($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|ema|"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Checkout"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"Change quantity"
    },{
      "function":"_cn",
      "arg0":["macro",157],
      "arg1":"mediamarkt.gr"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"MOBILE|APP"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"Category|Search Results"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"1191635"
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"1195395"
    },{
      "function":"_css",
      "arg0":["macro",160],
      "arg1":".checkout-logon-vertical .vertical-content .cobutton"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"Εγγραφή|Συνέχεια"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"Σύνδεση"
    },{
      "function":"_css",
      "arg0":["macro",160],
      "arg1":"section.container .summary-basket-overview a.btn"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"btn btn-primary btn-lg btn-block ng-binding"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"MOBILE"
    },{
      "function":"_css",
      "arg0":["macro",160],
      "arg1":"#basket_overview \u003E div.summary-basket-overview.animate-view-fade.ng-scope \u003E div:nth-child(5) \u003E div \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"|odq|"
    },{
      "function":"_cn",
      "arg0":["macro",164],
      "arg1":"rememberMe=true"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"button  background-type-1 action-button"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"button  background-type-2 guest-login-button"
    },{
      "function":"_css",
      "arg0":["macro",160],
      "arg1":".button.background-type-2 *"
    },{
      "function":"_css",
      "arg0":["macro",160],
      "arg1":".button.background-type-2"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"gdpr-cookie-layer__btn--submit"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",7],["add",1]],
    [["if",10,12,13],["unless",8,9,11],["add",2]],
    [["if",14],["add",3,35,38,57,87,93,40,41,42,44,45,46,47,50,51,52,53,54,55]],
    [["if",18],["add",4,71,83,88]],
    [["if",19],["add",4,63,67,74]],
    [["if",20],["add",4]],
    [["if",21],["add",4]],
    [["if",22],["add",4,71]],
    [["if",23],["add",5,18,59,68,96,99]],
    [["if",24],["add",5,16,35,59,99]],
    [["if",14,15],["add",6,9,11,19,25,26,34,60,62,73,84,100],["block",3,16]],
    [["if",23,29],["add",7,20,71]],
    [["if",23,31],["add",8]],
    [["if",23,32],["add",10,22,61,72,89]],
    [["if",23,33],["add",10,24,89,91]],
    [["if",35],["add",12]],
    [["if",36,37,39],["unless",38],["add",13]],
    [["if",39,40],["unless",38],["add",14]],
    [["if",12,41,42,43],["add",15]],
    [["if",14],["unless",16],["add",16],["block",3,30]],
    [["if",14],["unless",17],["add",16],["block",3,30]],
    [["if",44],["add",17]],
    [["if",23,47],["add",21,90]],
    [["if",23,48],["add",23,61,86]],
    [["if",49,50],["add",27]],
    [["if",51],["add",28,64]],
    [["if",52],["add",28]],
    [["if",53],["add",28]],
    [["if",54],["add",28]],
    [["if",55],["add",29]],
    [["if",56],["add",30]],
    [["if",12,57,58],["add",31]],
    [["if",59,60],["add",32]],
    [["if",61],["add",33]],
    [["if",23,64],["add",36]],
    [["if",23,65],["add",37]],
    [["if",14,66],["add",39,49]],
    [["if",14,67],["add",43]],
    [["if",14,68],["add",48]],
    [["if",14,69],["add",56]],
    [["if",23,70],["add",56,65]],
    [["if",14,71],["add",56]],
    [["if",23,72],["add",58]],
    [["if",23,74],["add",61]],
    [["if",23,75],["add",61]],
    [["if",23,79],["add",66]],
    [["if",81,82],["add",69]],
    [["if",0,84,85],["add",71]],
    [["if",14],["unless",86],["add",75]],
    [["if",19,37],["add",101]],
    [["if",19,87],["add",76]],
    [["if",23,37],["add",77]],
    [["if",23,87,88],["add",78]],
    [["if",19,89],["add",79]],
    [["if",19,90],["add",80]],
    [["if",39,71,91,92],["add",81]],
    [["if",39,71,93],["add",81]],
    [["if",39,94,95,96],["add",82]],
    [["if",25,39,95,97],["add",82]],
    [["if",23,99,100],["add",85]],
    [["if",101],["add",92]],
    [["if",39,71,87,102],["add",94]],
    [["if",39,71,87,103],["add",95]],
    [["if",39,71,87,104],["add",95]],
    [["if",39,71,87,105],["add",95]],
    [["if",20,33],["add",97]],
    [["if",39,106],["add",98]],
    [["if",1,2],["block",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,59,60,61,62,63,64,66,68,69,71,72,73,74,83,84,85,88,90,91,96,97]],
    [["if",0,3,4],["block",0]],
    [["if",2,5],["block",0,1,2,3,4,12,13,14,15,16,17,27,28,29,30,31,32,33,34,35,66,88]],
    [["if",2],["unless",6],["block",0,1,2,3,4,12,13,14,15,16,27,28,29,30,31,32,33,34,66,83,84,85,88,97,99,100]],
    [["if",2,25],["block",5,7,8,9,10,61,62,63,64,68,69]],
    [["if",2,26],["block",5,6,26,35,75]],
    [["if",2,27],["block",5,6,7,8,9,10,11,18,19,20,21,22,23,24,25,26,36,37,59,60,61,62,63,64,68,69,71,72,73,74,90,91,96]],
    [["if",2],["unless",28],["block",5,6,7,8,9,10,11,18,19,20,21,22,23,24,25,26,35,36,37,59,61,62,63,64,66,68,69,70,71,72,73,74,75,90,91,96]],
    [["if",2,30],["block",7,8,9,10]],
    [["if",2,34],["block",11,20,21,22,23,24,25,35,36,37,75]],
    [["if",2,45],["block",17]],
    [["if",2,46],["block",18,19]],
    [["if",2,62],["block",33]],
    [["if",2,63],["block",35]],
    [["if",2,73],["block",59,60]],
    [["if",2,76],["block",61]],
    [["if",2,77],["block",61]],
    [["if",2,78],["block",62,63,64,68,69,75]],
    [["if",2,80],["block",68]],
    [["if",2,83],["block",70,71,72,73,74,90,91]],
    [["if",2,98],["block",83,84,85,97]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto","__hjtc","__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ha;a:{var ia={Pf:!0},ja={};try{ja.__proto__=ia;ha=ja.Pf;break a}catch(a){}ha=!1}ca=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=ca,ma=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},na=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.m={};this.i=!1;this.w={}};sa.prototype.get=function(a){return this.m["dust."+a]};sa.prototype.set=function(a,b){this.i||(a="dust."+a,this.w.hasOwnProperty(a)||(this.m[a]=b))};sa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.w.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},te:function(){c&&a(c,1)},kh:function(f){d=f},Ca:function(f){d&&a(d,f)},Hh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Hg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},ng:a};e.onFnConsume=e.ih;e.consumeFn=e.te;e.onStorageConsume=e.kh;e.consumeStorage=e.Ca;e.setMax=e.Hh;e.getConsumed=e.Hg;e.reset=e.reset;e.consume=e.ng;return e};var xa=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.w=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.w["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ca=function(a){var b=new xa(a.F,a);a.w&&(b.w=a.w);b.M=a.M;b.a=a.a;return b};var Da=function(){},Ea=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Fa=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Fa(a)||
!Fa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==String(a).toLowerCase()?
!1:!!a},Pa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];D(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.F=a;this.M=b};ma($a,sa);$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};$a.prototype.$b=function(){return new h(ta(this))};$a.prototype.a=function(a,b){a.F.te();return this.M.apply(ab(this,a),Array.prototype.slice.call(arguments,1))};
var ab=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ga(d)?bb(e,d):d};c.prototype.w=function(d){return cb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};$a.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var cb=function(a,b){for(var c,d=0;d<b.length&&!(c=bb(a,b[d]),c instanceof qa);d++);return c},bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.w;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var db=function(){sa.call(this)};ma(db,sa);db.prototype.$b=function(){return new h(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof h?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},I=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=I(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=I(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof db){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:va(),w=new xa(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new db;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var pb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new $a(a,function(){return function(g){var k=Ca(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=cb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=bb(a,b);if(c instanceof qa||c instanceof $a||c instanceof h||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=va();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.w=function(a,b){var c=Ca(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new qa("break"),xb=new qa("continue"),yb=function(a,b){return this.a(a)+this.a(b)},zb=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var g=a.get(b);if(g instanceof $a){var k=tb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ca(this.i),c=cb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Hb=function(){return xb},
Ib=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Lb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Mb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=cb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof h||b instanceof $a)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=cb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);ya(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof h||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Wb=function(a,b){return this.a(a)!==this.a(b)},Xb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.w(d);if(e instanceof qa)return e},Yb=function(a,b){return this.a(a)<this.a(b)},Zb=function(a,b){return this.a(a)<=
this.a(b)},$b=function(a,b){return this.a(a)%this.a(b)},ac=function(a,b){return this.a(a)*this.a(b)},bc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof h||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.w(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.w(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Xb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.w(a,b)},zc=function(a){function b(e,f){var g=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(g,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,yb);c(1,zb);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Lb);c(47,Nb);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Wb);c(22,Xb);c(23,Yb);c(24,Zb);c(25,$b);c(26,ac);c(27,
bc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};Gc[7]=function(a){return String(a).replace(Nc,Pc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.bd(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.pg(d,k))}catch(x){b.Le&&b.Le(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=nd(a[n],b,c);jd&&(m=m||r===jd.Jb);d.push(r)}return jd&&m?jd.sg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ga(a[1])&&"macro"===a[1][0]&&jd.Ug(a))return jd.ph(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={ye:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Fd:a("convert_case_to"),Gd:a("convert_false_to"),Hd:a("convert_null_to"),Id:a("convert_true_to"),Jd:a("convert_undefined_to"),ai:a("debug_mode_metadata"),xa:a("function"),rf:a("instance_name"),vf:a("live_only"),xf:a("malware_disabled"),yf:a("metadata"),bi:a("original_vendor_template_id"),Cf:a("once_per_event"),Qd:a("once_per_load"),Yd:a("setup_tags"),$d:a("tag_id"),ae:a("teardown_tags")}}();var sd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ma(sd,Error);function td(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ma(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Fa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Dd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Ed(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Dd(e,b,d,g);Dd(f,b,d,g)}}}};var Jd=function(a){var b=Fd.s,c=this;this.i=new Cd;this.a={};var d={},e=Ed(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});D(a,function(f,g){var k={};D(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Qh=Oa('');Nd.Ag=Oa('');var Od=Md,Pd=Nd.Ag,Qd=Nd.Qh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ea(e)?c.set(d,me(a+"_"+d,e)):(Fa(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){H(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){H(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){H(this.getName(),["message:?string"],arguments);};var ye=function(a,b){H(this.getName(),["min:!number","max:!number"],arguments);return Ia(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.bg.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-WNT9SJ');a.set("version",'842');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof h?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Ee=function(a){return Na(lb(a,this.i))};var Fe=function(a){return Number(lb(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;H(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{Ig:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ih:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){H(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ea(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var E=window,J=document,Me=navigator,Ne=J.currentScript&&J.currentScript.src,Oe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=J.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=na.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&oa.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=J.getElementsByTagName("script")[0]||J.body||J.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||
J.body||J.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){E.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=J.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?J.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(J.querySelectorAll)try{var ff=J.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==J.documentElement&&(ef=!0)}catch(a){}var bf=ef;var Fd={},R=null,vf=Math.random();Fd.s="GTM-WNT9SJ";Fd.Nb="4m0";Fd.Pd="";var wf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},xf="www.googletagmanager.com/gtm.js";
var yf=xf,zf=null,Af=null,Bf=null,Cf="//www.googletagmanager.com/a?id="+Fd.s+"&cv=842",Df={},Ef={},Ff=function(){var a=R.sequence||0;R.sequence=a+1;return a};var Gf={},Hf=function(a,b){Gf[a]=Gf[a]||[];Gf[a][b]=!0},If=function(a){for(var b=[],c=Gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Jf=function(){return"&tc="+fd.filter(function(a){return a}).length},Mf=function(){Kf||(Kf=E.setTimeout(Lf,500))},Lf=function(){Kf&&(E.clearTimeout(Kf),Kf=void 0);void 0===Nf||Of[Nf]&&!Pf&&!Qf||(Rf[Nf]||Sf.Wg()||0>=Tf--?(Hf("GTM",1),Rf[Nf]=!0):(Sf.xh(),Te(Uf()),Of[Nf]=!0,Vf=Wf=Qf=Pf=""))},Uf=function(){var a=Nf;if(void 0===a)return"";var b=If("GTM"),c=If("TAGGING");return[Xf,Of[a]?"":"&es=1",Yf[a],b?"&u="+b:"",c?"&ut="+c:"",Jf(),Pf,Qf,Wf,Vf,"&z=0"].join("")},Zf=function(){return[Cf,"&v=3&t=t",
"&pid="+Ia(),"&rv="+Fd.Nb].join("")},$f="0.005000">Math.random(),Xf=Zf(),ag=function(){Xf=Zf()},Of={},Pf="",Qf="",Vf="",Wf="",Nf=void 0,Yf={},Rf={},Kf=void 0,Sf=function(a,b){var c=0,d=0;return{Wg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},xh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Tf=1E3,bg=function(a,b){if($f&&!Rf[a]&&Nf!==a){Lf();Nf=a;Vf=Pf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Yf[a]="&e="+c+"&eid="+a;Mf()}},cg=function(a,b,c){if($f&&
!Rf[a]&&b){a!==Nf&&(Lf(),Nf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pf=Pf?Pf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;Vf=Vf?Vf+"."+k:"&ti="+k;Mf();2022<=Uf().length&&Lf()}},dg=function(a,b,c){if($f&&!Rf[a]){a!==Nf&&(Lf(),Nf=a);var d=c+b;Qf=
Qf?Qf+"."+d:"&epr="+d;Mf();2022<=Uf().length&&Lf()}};var eg={},fg=new Ja,gg={},hg={},kg={name:"dataLayer",set:function(a,b){I(Ya(a,b),gg);ig()},get:function(a){return jg(a,2)},reset:function(){fg=new Ja;gg={};ig()}},jg=function(a,b){if(2!=b){var c=fg.get(a);if($f){var d=lg(a);c!==d&&Hf("GTM",5)}return c}return lg(a)},lg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:mg(b)},mg=function(a){for(var b=gg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ng=function(a,b){hg.hasOwnProperty(a)||(fg.set(a,b),I(Ya(a,b),gg),ig())},ig=function(a){D(hg,function(b,c){fg.set(b,c);I(Ya(b,void 0),gg);I(Ya(b,c),gg);a&&delete hg[b]})},og=function(a,b,c){eg[a]=eg[a]||{};var d=1!==c?lg(b):fg.get(b);"array"===hb(d)||"object"===hb(d)?eg[a][b]=I(d):eg[a][b]=d},pg=function(a,b){if(eg[a])return eg[a][b]},qg=function(a,b){eg[a]&&delete eg[a][b]};var S={wa:"_ee",di:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};S.He=[S.fa,S.cb,S.Hb];S.Ke=[S.ia,S.Ib,S.eb];var tg=/[A-Z]+/,ug=/\s/,vg=function(a){if(q(a)&&(a=Qa(a),!ug.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},xg=function(a){for(var b={},c=0;c<a.length;++c){var d=vg(a[c]);d&&(b[d.id]=d)}wg(b);var e=[];D(b,function(f,g){e.push(g)});return e};
function wg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yg=function(){var a=!1;return a};var V=function(a,b,c,d){return(2===zg()||d||"http:"!=E.location.protocol?a:b)+c},zg=function(){var a=Re(),b;if(1===a)a:{var c=yf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Ng=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Og={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sg=function(a){var b=jg("gtm.whitelist");b&&Hf("GTM",9);var c=b&&Wa(Pa(b),Og),d=jg("gtm.blacklist");d||(d=jg("tagTypeBlacklist"))&&Hf("GTM",3);
d?Hf("GTM",8):d=[];Rg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Hf("GTM",2);var e=d&&Wa(Pa(d),Pg),f={};return function(g){var k=g&&g[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ef[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Hf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ka(e,l||[]);u&&Hf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ka(e,Qg));return f[k]=v}},Rg=function(){return Ng.test(E.location&&E.location.hostname)};var Tg={pg:function(a,b){b[rd.Fd]&&"string"===typeof a&&(a=1==b[rd.Fd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Hd)&&null===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Jd)&&void 0===a&&(a=b[rd.Jd]);b.hasOwnProperty(rd.Id)&&!0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Gd)&&!1===a&&(a=b[rd.Gd]);return a}};var Ug={active:!0,isWhitelisted:function(){return!0}},Vg=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Wg=function(){};var Xg=!1,Yg=0,Zg=[];function $g(a){if(!Xg){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xg=!0;for(var e=0;e<Zg.length;e++)O(Zg[e])}Zg.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function ah(){if(!Xg&&140>Yg){Yg++;try{J.documentElement.doScroll("left"),$g()}catch(a){E.setTimeout(ah,50)}}}var bh=function(a){Xg?a():Zg.push(a)};var dh={},eh={},fh=function(a,b,c,d){if(!eh[a]||wf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=I(d,e));e.id=c;e.status="timeout";return eh[a].tags.push(e)-1},gh=function(a,b,c,d){if(eh[a]){var e=eh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hh(a){for(var b=dh[a]||[],c=0;c<b.length;c++)b[c]();dh[a]={push:function(d){d(Fd.s,eh[a])}}}
var kh=function(a,b,c){eh[a]={tags:[]};Ea(b)&&ih(a,b);c&&E.setTimeout(function(){return hh(a)},Number(c));return jh(a)},ih=function(a,b){dh[a]=dh[a]||[];dh[a].push(Ta(function(){return O(function(){b(Fd.s,eh[a])})}))};function jh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&hh(a)})},$f:function(){d=!0;b>=c&&hh(a)}}};var lh=function(){function a(d){return!Fa(d)||0>d?0:d}if(!R._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Fa(kg.get("gtm.start"))?kg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Af-b)}}};var ph={},qh=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},rh=!1;
var sh=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||Hf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}lh();return E[b]},th=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vh=function(a){},uh=function(){return E.GoogleAnalyticsObject||"ga"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Jh=function(){return!1},Kh=function(){var a={};return function(b,c,d){}};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var g=nd(e[rd.Yd],c,[]);if(g&&g.length){var k=g[0];f=Lh(k.index,{D:f,C:1===k.ye?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.xf])k();else{var w=od(f,c,[]),x=fh(c.id,String(f[rd.xa]),Number(f[rd.$d]),w[rd.yf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"5");gh(c.id,x,"success",A);g()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"6");gh(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;cg(c.id,f,"1");var B=function(){var A=Ra()-z;cg(c.id,f,"7");gh(c.id,x,"exception",A);y||(y=!0,k())};var z=Ra();try{md(w,c)}catch(A){B(A)}}}var f=fd[a],g=b.D,k=b.C,l=b.terminate;if(c.bd(f))return null;var m=nd(f[rd.ae],c,[]);if(m&&m.length){var n=m[0],r=Lh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.ye?l:r}if(f[rd.Qd]||f[rd.Cf]){var t=f[rd.Qd]?gd:c.Kh,p=g,u=k;if(!t[a]){e=Ta(e);var v=Nh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{D:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.xb[d]){var e=fd[d];var f=b.add();try{var g=Lh(d,{D:f,C:f,terminate:f},a,d);g?c.push({af:d,Ve:pd(e),Xb:g}):(Rh(d,a),f())}catch(l){f()}}b.$f();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Sh(a,b){var c,d=b.Ve,e=a.Ve;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.af,k=b.af;f=g>k?1:g<k?-1:0}return f}
function Rh(a,b){if(!$f)return;var c=function(d){var e=b.bd(fd[d])?"3":"4",f=nd(fd[d][rd.Yd],b,[]);f&&f.length&&c(f[0].index);cg(b.id,fd[d],e);var g=nd(fd[d][rd.ae],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}bg(a,b);var f=kh(a,d,e);og(a,"event",1);og(a,"ecommerce",1);og(a,"gtm");var g={id:a,name:b,bd:Sg(c),xb:[],Kh:[],Le:function(){Hf("GTM",6)}};g.xb=Bd(g);var k=Th(g,f);"gtm.js"!==b&&"gtm.sync"!==b||vh(Fd.s);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=fd[l];if(m&&!wf[String(m[rd.xa])])return!0}return!1};var Wh=[];function Xh(){var a=Oe("google_tag_data",{});a.ics||(a.ics={entries:{},set:Yh,update:Zh,addListener:$h,notifyListeners:ai,active:!1});return a.ics}function Yh(a,b,c,d,e){var f=Xh();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function Zh(a,b){var c=Xh();c.active=!0;if(void 0!=b){var d=bi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(bi(a)!==d)for(var f=0;f<Wh.length;++f){var g=Wh[f];Ga(g.se)&&-1!==g.se.indexOf(a)&&(g.Ue=!0)}}}function $h(a,b){Wh.push({se:a,Dg:b})}function ai(){for(var a=0;a<Wh.length;++a){var b=Wh[a];if(b.Ue){b.Ue=!1;try{b.Dg.call()}catch(c){}}}}
var bi=function(a){var b=Xh().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ci=function(){return Xh().active},di=function(a,b){Xh().addListener(a,b)},ei=function(a,b){if(!1===bi(b)){var c=!1;di([b],function(){!c&&bi(b)&&(a(),c=!0)})}};var fi=[S.o,S.N],gi=function(a){var b=a.region;b&&Hf("GTM",40);for(var c=Ga(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<fi.length;e++){var f=fi[e],g=a[fi[e]],k=c[d];Xh().set(f,g,k,"UA","UA-63")}},hi=function(a){for(var b=0;b<fi.length;b++){var c=fi[b],d=a[fi[b]];Xh().update(c,d)}Xh().notifyListeners()},ii=function(a){var b=bi(a);return void 0!=b?b:!0},ji=function(){for(var a=[],b=0;b<fi.length;b++){var c=bi(fi[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};function li(a,b){}function mi(a,b){return ni()?li(a,b):void 0}function ni(){var a=!1;return a};var oi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.qe=void 0},pi=function(a){var b=new oi;b.eventModel=a;return b},qi=function(a,b){a.targetConfig=b;return a},ri=function(a,b){a.containerConfig=b;return a},si=function(a,b){a.a=b;return a},ti=function(a,b){a.globalConfig=b;return a},ui=function(a,b){a.D=b;return a},vi=function(a,b){a.C=b;return a};
oi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var wi=function(a){function b(e){D(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];D(c,function(e){d.push(e)});return d};function xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var yi={},zi=function(a){return void 0==yi[a]?!1:yi[a]};var Bi=function(a,b,c,d){return Ai(d)?xi(a,String(b||document.cookie),c):[]},Ei=function(a,b,c,d,e){if(Ai(e)){var f=Ci(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Di(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Di(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Fi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Bi(b,f,!1,d).indexOf(c)}
var Ji=function(a,b,c,d){function e(w,x,y){if(null==y)return delete k[x],w;k[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete k[x],w;k[x]=!0;return w+"; "+x}if(!Ai(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Gi(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.eh);g=e(g,"samesite",
c.Bh);c.Fh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Hi(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Ii(u,c.path)&&Fi(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Ii(m,c.path)?!1:Fi(g,a,b,c.Ea)},Ki=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ji(a,b,c)};
function Di(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ci(a,b,c){for(var d=[],e=Bi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Gi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Li=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Mi=/(^|\.)doubleclick\.net$/i,Ii=function(a,b){return Mi.test(document.location.hostname)||"/"===b&&Li.test(a)},Hi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Mi.test(e)||Li.test(e)||a.push("none");
return a},Ai=function(a){if(!zi("gtag_cs_api")||!a||!ci())return!0;var b=bi(a);return null==b?!0:!!b};var Ni=function(){for(var a=Me.userAgent+(J.cookie||"")+(J.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Qi=function(a,b,c,d,e){var f=Oi(b);return Ei(a,f,Pi(c),d,e)},Ri=function(a,b,c,d){var e=""+Oi(c),f=Pi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Oi=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Pi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Si(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Ti(){for(var a=Ui,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Vi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ui,Wi;function Xi(a){Ui=Ui||Vi();Wi=Wi||Ti();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Ui[l],Ui[m],Ui[n],Ui[r])}return b.join("")}
function Yi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Wi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ui=Ui||Vi();Wi=Wi||Ti();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Zi;var cj=function(){var a=$i,b=aj,c=bj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ue(J,"mousedown",d);Ue(J,"keyup",d);Ue(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},dj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bj().decorators.push(f)},ej=function(a,b,c){for(var d=bj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==J.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ua(e,g.callback())}}return e},bj=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var fj=/(.*?)\*(.*?)\*(.*)/,gj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hj=/^(?:www\.|m\.|amp\.)+/,ij=/([^?#]+)(\?[^#]*)?(#.*)?/;function jj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var lj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xi(String(d))))}var e=b.join("*");return["1",kj(e),e].join("*")},kj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Zi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Zi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Zi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},nj=function(){return function(a){var b=Eh(E.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=mj(d)||{};var e=Ch(b,"fragment").match(jj("_gl"));a.fragment=mj(e&&e[3]||"")||{}}},oj=function(){var a=nj(),b=bj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},mj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=fj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===kj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=Yi(t[p+1]);return r}}}}catch(u){}};
function pj(a,b,c,d){function e(n){var r=n,t=jj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=ij.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function qj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ej(b,1,c),e=ej(b,2,c),f=ej(b,3,c);if(Va(d)){var g=lj(d);c?rj("_gl",g,a):sj("_gl",g,a,!1)}if(!c&&Va(e)){var k=lj(e);sj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){sj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){rj(m,n,r);break a}}"string"==typeof r&&pj(m,n,r,void 0)}}
function sj(a,b,c,d){if(c.href){var e=pj(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function rj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pj(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var $i=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qj(e,e.hostname)}}catch(g){}},aj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");qj(a,b)}}catch(c){}},tj=function(a,b,c,d){cj();dj(a,b,"fragment"===c?2:1,!!d,!1)},uj=function(a,b){cj();dj(a,[Bh(E.location,"host",!0)],b,!0,!0)},vj=function(){var a=J.location.hostname,b=gj.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(hj,""),l=e.replace(hj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},wj=function(a,b){return!1===a?!1:a||b||vj()};var xj=/^\w+$/,yj=/^[\w-]+$/,zj=/^~?[\w-]+$/,Aj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bj=function(){if(!zi("gtag_cs_api")||!ci())return!0;var a=bi("ad_storage");return null==a?!0:!!a},Cj=function(a){Bj()?a():ei(a,"ad_storage")};function Dj(a){return a&&"string"==typeof a&&a.match(xj)?a:"_gcl"}
var Fj=function(){var a=Eh(E.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Ej(b,c,d)},Ej=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":zi("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Hj=function(a){var b=Fj();Cj(function(){return Gj(b,a)})};
function Gj(a,b,c){function d(m,n){var r=Ij(m,e);r&&(Ki(r,n,f),g=!0)}b=b||{};var e=Dj(b.prefix);c=c||Ra();var f=Si(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.yi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Kj=function(a,b){var c=oj();Cj(function(){for(var d=Dj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Aj[f]){var g=Ij(f,d),k=c[g];if(k){var l=Math.min(Jj(k),Ra()),m;b:{for(var n=l,r=Bi(g,J.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Jj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Si(b,l,!0);p.Ea="ad_storage";Ki(g,k,p)}}}}Gj(Ej(c.gclid,c.gclsrc),b)})},Ij=function(a,b){var c=Aj[a];if(void 0!==c)return b+c},Jj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Lj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Mj=function(a,b,c,d,e){if(Ga(b)){var f=Dj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Ij(a[l],f);if(m){var n=Bi(m,J.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Cj(function(){tj(g,b,c,d)})}},Nj=function(a){return a.filter(function(b){return zj.test(b)})},Oj=function(a,b){for(var c=Dj(b.prefix),d={},e=0;e<a.length;e++)Aj[a[e]]&&(d[a[e]]=Aj[a[e]]);Cj(function(){D(d,function(f,g){var k=Bi(c+g,J.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Jj(l),
n={};n[f]=[Lj(l)];Gj(n,b,m)}})})};function Pj(a){for(var b=["aw","dc"],c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Qj=function(){function a(d,e,f){f&&(d[e]=f)}var b=Fj();if(Pj(b)){var c={};a(c,"gclid",b.gclid);a(c,"dclid",b.dclid);a(c,"gclsrc",b.gclsrc);uj(function(){return c},3);uj(function(){var d={};return d._up="1",d},1)}},Rj=function(){var a;if(Bj()){for(var b=[],c=J.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ud:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&
(g[b[k].ud]||(g[b[k].ud]=[]),g[b[k].ud].push({timestamp:l[1],Fg:l[2]}))}a=g}else a={};return a};function Sj(){var a=!1;return a}
function Tj(a){function b(l){var m;R.reported_gclid||(R.reported_gclid={});m=R.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;t("gclid",p);t("gclsrc",e);var u="https://www.google.com/pagead/landing?"+r.join("&");$e(u)}}var c=Fj(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),g=Sj();if(f||g){var k=""+Ni();b();}};var Uj;if(3===Fd.Nb.length)Uj="g";else{var Vj="G";Uj=Vj}
var Wj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Uj,OPT:"o"},Xj=function(a){var b=Fd.s.split("-"),c=b[0].toUpperCase(),d=Wj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Fd.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Fd.Nb+e};var hk=["1"],ik={},mk=function(a){var b=jk(a.prefix);ik[b]||kk(b,a.path,a.domain)||(lk(b,Ni(),a),kk(b,a.path,a.domain))};function lk(a,b,c){var d=Ri(b,"1",c.domain,c.path),e=Si(c);e.Ea="ad_storage";Ki(a,d,e)}function kk(a,b,c){var d=Qi(a,b,c,hk,"ad_storage");d&&(ik[a]=d);return d}function jk(a){return(a||"_gcl")+"_au"};var nk=/^\d+\.fls\.doubleclick\.net$/;function ok(a){ii("ad_storage")?a():ei(a,"ad_storage")}function pk(a){var b=Eh(E.location.href),c=Ch(b,"host",!1);if(c&&c.match(nk)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function qk(a,b){if("aw"==a||"dc"==a){var c=pk("gcl"+a);if(c)return c.split(".")}var d=Dj(b);if(ii("ad_storage")&&"_gcl"==d){var e;e=Fj()[a]||[];if(0<e.length)return e}var f=Ij(a,d),g;if(f){var k=[];if(J.cookie){var l=Bi(f,J.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Lj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Nj(k)}else g=k}else g=k}else g=[];return g}
var rk=function(){var a=pk("gac");if(a)return decodeURIComponent(a);var b=Rj(),c=[];D(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Fg);f=Nj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},sk=function(a,b){var c=Fj().dc||[];ok(function(){mk(b);var d=ik[jk(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;$e(l);e=f[g]=!0}}null==a&&(a=
e);if(a&&d){var m=jk(b.prefix),n=ik[m];n&&lk(m,n,b)}})};
var tk=function(a){return!(void 0===a||null===a||0===(a+"").length)},uk=function(a,b){var c;if(2===b.X)return a("ord",Ia(1E11,1E13)),!0;if(3===b.X)return a("ord","1"),a("num",Ia(1E11,1E13)),!0;if(4===b.X)return tk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.X)c="1";else if(6===b.X)c=b.qd;else return!1;tk(c)&&a("qty",c);tk(b.Rb)&&a("cost",b.Rb);tk(b.transactionId)&&a("ord",b.transactionId);return!0},xk=function(a,b,c){function d(t,p,u){g.hasOwnProperty(t)||(p+="",f+=";"+t+"="+(u?p:wk(p)))}var e=
a.Vc,f=a.protocol;f+=a.uc?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";f+=";src="+wk(e)+(";type="+wk(a.Yc))+(";cat="+wk(a.qb));var g=a.vg||{};D(g,function(t,p){f+=";"+wk(t)+"="+wk(p+"")});if(uk(d,a)){tk(a.Ac)&&d("u",a.Ac);tk(a.zc)&&d("tran",a.zc);d("gtm",Xj());!1===a.Xf&&d("npa","1");var k=!0;if(a.Uc&&k){var l=qk("dc",a.Qa);l&&l.length&&d("gcldc",l.join("."));var m=qk("aw",a.Qa);m&&m.length&&d("gclaw",m.join("."));var n=rk();n&&d("gac",n);mk({prefix:a.Qa,wb:a.rg,domain:a.qg,flags:a.hi});var r=ik[jk(a.Qa)];r&&d("auiddc",r)}tk(a.md)&&d("prd",a.md,!0);D(a.wd,function(t,p){d(t,p)});f+=b||"";tk(a.mc)&&d("~oref",a.mc);a.uc?Se(f+"?",a.D):Te(f+"?",a.D,a.C)}else O(a.C)},wk=encodeURIComponent,
yk=function(a,b){xk(a,b)};var nl={},ol=["G","GP"];nl.cf="";var pl=nl.cf.split(",");function ql(){var a=R;return a.gcq=a.gcq||new rl}
var sl=function(a,b,c){ql().register(a,b,c)},tl=function(a,b,c,d){ql().push("event",[b,a],c,d)},ul=function(a,b){ql().push("config",[a],b)},vl={},wl=function(a){return!0},xl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},yl=function(a,b,c,d,e){this.type=a;this.m=b;this.Z=c||"";
this.a=d;this.i=e},rl=function(){this.m={};this.i={};this.a=[]},zl=function(a,b){var c=vg(b);return a.m[c.containerId]=a.m[c.containerId]||new xl},Al=function(a,b,c){if(b){var d=vg(b);if(d&&1===zl(a,b).status&&wl(d.prefix)){zl(a,b).status=2;var e={};$f&&(e.timeoutId=E.setTimeout(function(){Hf("GTM",38);Mf()},3E3));a.push("require",[e],d.containerId);vl[d.containerId]=Ra();if(yg()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=mi(c,g)||k;Qe(l)}}}},Bl=function(a,b,c,d){if(d.Z){var e=zl(a,d.Z),
f=e.m;if(f){var g=I(c),k=I(e.targetConfig[d.Z]),l=I(e.containerConfig),m=I(e.i),n=I(a.i),r=jg("gtm.uniqueEventId"),t=vg(d.Z).prefix,p=vi(ui(ti(si(ri(qi(pi(g),k),l),m),n),function(){dg(r,t,"2");}),function(){dg(r,t,"3");});try{dg(r,t,"1");f(d.Z,b,d.m,p)}catch(u){
dg(r,t,"4");}}}};
rl.prototype.register=function(a,b,c){if(3!==zl(this,a).status){zl(this,a).m=b;zl(this,a).status=3;c&&(zl(this,a).i=c);var d=vg(a),e=vl[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=jg("gtm.uniqueEventId"),l=g,m=Ra()-f;if($f&&!Rf[k]){k!==Nf&&(Lf(),Nf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Wf=Wf?Wf+","+n:"&cl="+n}delete vl[d.containerId]}this.flush()}};
rl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Al(this,c,b[0][S.Ba]||this.i[S.Ba]);this.a.push(new yl(a,e,c,b,d));d||this.flush()};
rl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==zl(this,c.Z).status&&!a)return;$f&&E.clearTimeout(c.a[0].timeoutId);break;case "set":D(c.a[0],function(l,m){I(Ya(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[S.oc];delete d[S.oc];var f=zl(this,c.Z),g=vg(c.Z),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.Z]={});f.a&&e||Bl(this,S.H,d,c);f.a=!0;delete d[S.wa];k?I(d,f.containerConfig):
I(d,f.targetConfig[c.Z]);break;case "event":Bl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Cl=function(a,b){return!0};var Dl=function(a,b){var c;H(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=E,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(lb(arguments[l],this.i));c=kb((0,this.i.M)(f,e,k),this.i);return c};var El=function(a){};var Fl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=E,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return kb(b,this.i)};var Gl=function(a,b){var c=null;H(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ae(this,"access_globals","readwrite",a);Ae(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ea(g))return null;if(g)return kb(g,this.i);var k;g=function(){if(!Ea(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return kb(c,this.i)};var Hl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ea(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,
this.i)};var Il=function(a){var b;return b};var Jl=function(a,b){b=void 0===b?!0:b;var c;return c};var Kl=function(a,b){var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a){var b="";return b};var Nl=function(a){var b="";return b};var Ol=function(a,b){};var Pl={},Ql=function(a,b,c,d){H(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Fa(e)},g=function(){c instanceof $a&&c.Fa(e)};if(!d){Qe(a,f,g);return}var k=d;Pl[k]?(Pl[k].onSuccess.push(f),Pl[k].onFailure.push(g)):(Pl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pl[k].onSuccess,m=0;m<l.length;m++)O(l[m]);l.push=function(n){O(n);
return 0}},g=function(){for(var l=Pl[k].onFailure,m=0;m<l.length;m++)O(l[m]);Pl[k]=null},Qe(a,f,g));};var Rl=function(){return!1},Sl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tl=function(){};var Ul={},Vl={};Ul.getItem=function(a){var b=null;return b};Ul.setItem=function(a,b){};
Ul.removeItem=function(a){};Ul.clear=function(){};var Wl=function(a,b){var c=!1;return c};var Xl=function(a,b,c){};var Yl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zl=function(a,b,c){H(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.i),!0;return!1};var $l=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var am=function(a,b,c){var d=this;};var bm=function(a){var b;return b};function cm(a){}
function dm(a,b){var c;return kb(c,this.i)}function em(){var a="";return a}
function fm(){var a="";return a}
var Dc=function(){var a=new Ke;yg()?(a.add("injectHiddenIframe",Da),a.add("injectScript",Da)):(a.add("injectHiddenIframe",Ol),a.add("injectScript",Ql));var b=Xl;a.add("addEventCallback",cm);a.add("aliasInWindow",Cl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",Dl);a.add("callLater",El);a.add("copyFromDataLayer",
dm);a.add("copyFromWindow",Fl);a.add("createQueue",Hl);a.add("createArgumentsQueue",Gl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",Jl);a.add("getQueryParameters",Kl);a.add("getReferrerQueryParameters",Ll);a.add("getReferrerUrl",Ml);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Nl);a.add("logToConsole",Tl);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Wl);a.add("readCharacterSet",em);a.add("readTitle",fm);a.add("sendPixel",b);a.add("setCookie",Yl);a.add("setInWindow",Zl);a.add("sha256",am);a.add("TestHelper",Le());a.add("getContainerVersion",Be);a.add("toBase64",bm,!("btoa"in E)),a.add("fromBase64",
Il,!("atob"in E));a.add("localStorage",Sl,!Rl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function gm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;hm();bd=function(e,f,g){im(f);var k=new db;D(f,function(p,u){k.set(p,kb(u))});Bc.a.a.w=xd();var l={bg:Ld(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Jh()){var m=Kh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.w=void 0;t instanceof qa&&
"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Xb(d)}}function im(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ea(b)&&(a.gtmOnSuccess=function(){O(b)});Ea(c)&&(a.gtmOnFailure=function(){O(c)})}function hm(){var a=Bc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}
function jm(a){void 0!==a&&D(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ef[e]=Ef[e]||[];Ef[e].push(b)}})};var km=["GP","G"],lm="G".split(/,/);lm.push("GF");lm.push("HA");lm.push("AW");var mm=!1;mm=!0;var nm=null,om={},pm={},qm;function rm(a,b){var c={event:a};b&&(c.eventModel=I(b),b[S.Fc]&&(c.eventCallback=b[S.Fc]),b[S.Ib]&&(c.eventTimeout=b[S.Ib]));return c}
var xm={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=rm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=I(a[1]):3==a.length&&q(a[1])&&(b={},jb(a[2])||Ga(a[2])?b[a[1]]=I(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var ym={policy:!0};var zm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Bm=function(a){var b=Am(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Cm=!1,Dm=[];function Em(){if(!Cm){Cm=!0;for(var a=0;a<Dm.length;a++)O(Dm[a])}}var Fm=function(a){Cm?O(a):Dm.push(a)};var Wm=function(a){if(Vm(a))return a;this.a=a};Wm.prototype.Lg=function(){return this.a};var Vm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Wm.prototype.getUntrustedUpdateValue=Wm.prototype.Lg;var Xm=[],Ym=!1,Zm=function(a){return E["dataLayer"].push(a)},$m=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function an(a){var b=a._clear;D(a,function(f,g){"_clear"!==f&&(b&&ng(f,void 0),ng(f,g))});zf||(zf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ff(),a["gtm.uniqueEventId"]=d,ng("gtm.uniqueEventId",d));Bf=c;var e=bn(a);Bf=null;switch(c){case "gtm.init":Hf("GTM",19),e&&Hf("GTM",20)}return e}
function bn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Fd.s,c):Ug;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function cn(){for(var a=!1;!Ym&&0<Xm.length;){Ym=!0;delete gg.eventModel;ig();var b=Xm.shift();if(null!=b){var c=Vm(b);if(c){var d=b;b=Vm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=jg(g,1);if(Ga(k)||jb(k))k=I(k);hg[g]=k}}try{if(Ea(b))try{b.call(kg)}catch(u){}else if(Ga(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=jg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(La(b)){a:{if(b.length&&q(b[0])){var p=xm[b[0]];if(p&&(!c||!ym[b[0]])){b=p(b);break a}}b=void 0}if(!b){Ym=!1;continue}}a=an(b)||a}}finally{c&&ig(!0)}}Ym=!1}return!a}function dn(){var a=cn();try{zm(E["dataLayer"],Fd.s)}catch(b){}return a}
var fn=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<R.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Wm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Xm.push.apply(Xm,d);if(300<
this.length)for(Hf("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return cn()&&g};Xm.push.apply(Xm,a.slice(0));en()&&O(dn)},en=function(){var a=!0;return a};var gn={};gn.Jb=new String("undefined");
var hn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gn.Jb?b:a[d]);return c.join("")}};hn.prototype.toString=function(){return this.a("undefined")};hn.prototype.valueOf=hn.prototype.toString;gn.Lf=hn;gn.Oc={};gn.sg=function(a){return new hn(a)};var jn={};gn.yh=function(a,b){var c=Ff();jn[c]=[a,b];return c};gn.ue=function(a){var b=a?0:1;return function(c){var d=jn[c];if(d&&"function"===typeof d[b])d[b]();jn[c]=void 0}};gn.Ug=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};gn.ph=function(a){if(a===gn.Jb)return a;var b=Ff();gn.Oc[b]=a;return'google_tag_manager["'+Fd.s+'"].macro('+b+")"};gn.fh=function(a,b,c){a instanceof gn.Lf&&(a=a.a(gn.yh(b,c)),b=Da);return{$c:a,D:b}};var kn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ln=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mn=function(a,b,c){ln(a)[b]=c},nn=function(a,b,c,d){var e=ln(a),f=Sa(e,b,d);e[b]=c(f)},on=function(a,b,c){var d=ln(a);return Sa(d,b,c)};var pn=["input","select","textarea"],qn=["button","hidden","image","reset","submit"],rn=function(a){var b=a.tagName.toLowerCase();return!Ha(pn,function(c){return c===b})||"input"===b&&Ha(qn,function(c){return c===a.type.toLowerCase()})?!1:!0},sn=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):Ze(a,["form"],100)},tn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(rn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var un=!!E.MutationObserver,vn=void 0,wn=function(a){if(!vn){var b=function(){var c=J.body;if(c)if(un)(new MutationObserver(function(){for(var e=0;e<vn.length;e++)O(vn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<vn.length;e++)O(vn[e])}))})}};vn=[];J.body?b():O(b)}vn.push(a)};var Rn=E.clearTimeout,Sn=E.setTimeout,W=function(a,b,c){if(yg()){b&&O(b)}else return Qe(a,b,c)},Tn=function(){return E.location.href},Un=function(a){return Ch(Eh(a),"fragment")},Vn=function(a){return Dh(Eh(a))},Wn=function(a,b){return jg(a,b||2)},Xn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Zm(a)):d=Zm(a);return d},Yn=function(a,b){E[a]=b},X=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Zn=function(a,b,c){return Bi(a,b,void 0===c?!0:!!c)},$n=function(a,b){if(yg()){b&&O(b)}else Se(a,b)},ao=function(a){return!!on(a,"init",!1)},bo=function(a){mn(a,"init",!0)},co=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";W(V("https://","http://",c))},eo=function(a,b){var c=a[b];return c};
var fo=gn.fh;var Co=new Ja;function Do(a,b){function c(g){var k=Eh(g),l=Ch(k,"protocol"),m=Ch(k,"host",!0),n=Ch(k,"port"),r=Ch(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Eo(a){return Fo(a)?1:0}
function Fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Eo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Co.get(p);u||(u=new RegExp(c,t),Co.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Do(b,
c)}return!1};var Go=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ho={},Io=encodeURI,Y=encodeURIComponent,Jo=Te;var Ko=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Lo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ho.Vg=function(){var a=!1;return a};var Zp=function(){var a=E.gaGlobal=E.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var hq=window,iq=document,jq=function(a){var b=hq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===hq["ga-disable-"+a])return!0;try{var c=hq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=xi("AMP_TOKEN",String(iq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return iq.getElementById("__gaOptOutExtension")?!0:!1};
var mq=function(a){D(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[S.ma]||{};D(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var qq=function(a,b,c){tl(b,c,a)},rq=function(a,b,c){tl(b,c,a,!0)},tq=function(a,b){};
function sq(a,b){}var Z={b:{}};
Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"842"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;yk(b,c)}(function(b){Z.__flc=b;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Lo(b.vtp_customVariable||[],"key","value")||{},e={qb:b.vtp_activityTag,Uc:c,Qa:b.vtp_conversionCookiePrefix||void 0,Rb:void 0,X:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Vc:b.vtp_advertiserId,Yc:b.vtp_groupTag,C:b.vtp_gtmOnFailure,D:b.vtp_gtmOnSuccess,
mc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",qd:void 0,uc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,zc:b.vtp_transactionVariable,transactionId:void 0,Ac:b.vtp_userVariable,wd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([Lo(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;lh();W(b,function(){var d=X("google_trackConversion");if(Ea(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Lo(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var g={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:Xj()};a.vtp_rdp&&(g.google_restricted_data_processing=!0);a.vtp_userId&&(g.google_user_id=a.vtp_userId);d(g)||c()}else c()},c)})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(pg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Wn("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=kn(c,"gtm.click");Xn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!ao("cl")){var c=X("document");Ue(c,"click",a,!0);bo("cl")}O(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Zn(a.vtp_name,Wn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;yk(b,c)}(function(b){Z.__fls=b;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(r){r=r||[];for(var t=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],u=0;u<r.length;u++)for(var v=0;v<p.length;v++){var w=p[v],x=r[u][w[1]];void 0!==x&&t.push(w[0]+
(u+1)+":"+Y(x))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(Wn("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&Y(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Lo(b.vtp_customVariable||
[],"key","value")||{},m={qb:b.vtp_activityTag,Uc:k,Qa:b.vtp_conversionCookiePrefix||void 0,Rb:b.vtp_revenue,X:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Vc:b.vtp_advertiserId,Yc:b.vtp_groupTag,C:b.vtp_gtmOnFailure,D:b.vtp_gtmOnSuccess,mc:b.vtp_useImageTag?void 0:b.vtp_url,md:c,protocol:"",qd:b.vtp_quantity,uc:!b.vtp_useImageTag,zc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Ac:b.vtp_userVariable,wd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,X("google_attr").build([Lo(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.t=["google"],function(){(function(a){Z.__t=a;Z.__t.g="t";Z.__t.h=!0;Z.__t.priorityOverride=0})(function(){return(new Date).getTime()})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Wn("gtm.url",1);c=c||Tn();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vn(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;I(Lo(n.vtp_fieldsToSet,"fieldName","value"),f);I(Lo(n.vtp_contentGroup,"index","group"),g);I(Lo(n.vtp_dimension,"index","dimension"),k);I(Lo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=I(n);d=I(d,r)}I(Lo(d.vtp_fieldsToSet,"fieldName","value"),f);I(Lo(d.vtp_contentGroup,
"index","group"),g);I(Lo(d.vtp_dimension,"index","dimension"),k);I(Lo(d.vtp_metric,"index","metric"),l);var t=sh(d.vtp_functionName);if(Ea(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Ff(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(P){var K=[].slice.call(arguments,0);K[0]=p+K[0];t.apply(window,K)},y=function(P,K){return void 0===K?K:P(K)},B=function(P,K){if(K)for(var Aa in K)K.hasOwnProperty(Aa)&&x("set",P+Aa,K[Aa])},z=function(){var P=function(xq,vk,yq){if(!jb(vk))return!1;for(var Gd=Sa(Object(vk),yq,[]),ch=0;Gd&&ch<Gd.length;ch++)x(xq,Gd[ch]);return!!Gd&&0<Gd.length},K;if(d.vtp_useEcommerceDataLayer){var Aa=!1;Aa||(K=Wn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!jb(K))return;K=Object(K);var cc=Sa(f,"currencyCode",K.currencyCode);void 0!==cc&&x("set","&cu",cc);P("ec:addImpression",K,"impressions");if(P("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){x("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ma=
"detail checkout checkout_option click add remove purchase refund".split(" "),mb="refund purchase remove checkout checkout_option add click detail".split(" "),nb=0;nb<Ma.length;nb++){var Ab=K[Ma[nb]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Ma[nb],Ab.actionField);if($f)for(var Ob=0;Ob<mb.length;Ob++){var Tc=K[mb[Ob]];if(Tc){Tc!==Ab&&Hf("GTM",13);break}}break}}},A=function(P,K,Aa){var cc=0;if(P)for(var Ma in P)if(P.hasOwnProperty(Ma)&&
(Aa&&v[Ma]||!Aa&&void 0===v[Ma])){var mb=w[Ma]?Oa(P[Ma]):P[Ma];"anonymizeIp"!=Ma||mb||(mb=void 0);K[Ma]=mb;cc++}return cc},F={name:u};A(f,F,!0);t("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",Xj(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,K){void 0!==d[K]&&x("set",P,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",g);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require",
"linkid","linkid.js");x("set","hitCallback",function(){var P=f&&f.hitCallback;Ea(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};A(L,T,!1);x("send",
T);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var za=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:wa})}L?x("send","pageview",L):x("send","pageview");}if(!a){var Ba=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var ob=V("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);W(ob,
function(){var P=qh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else O(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.g="jel";Z.__jel.h=!0;Z.__jel.priorityOverride=0})(function(a){if(!ao("jel")){var b=X("self"),c=b.onerror;b.onerror=function(d,e,f,g,k){c&&c(d,e,f,g,k);Xn({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};bo("jel")}O(a.vtp_gtmOnSuccess)})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(he(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Fd.s})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){O(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var g={prefix:e,path:c,domain:d};b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||
(b.vtp_enableCrossDomain||vj())&&Kj(a,g));Hj(g);Oj(["aw","dc"],g);sk(f,g);var k=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var l=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),m=b.vtp_urlPosition,n=!!b.vtp_formDecoration;Mj(a,l,m,n,k);}Tj();})}();


Z.b.aev=["google"],function(){function a(p,u){var v=pg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var x=p+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(p,w);if(B&&(y=v(B),n[x]=y,r.push(x),35<r.length)){var z=r.shift();delete n[z]}}return y}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Tn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Ko(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ch(Eh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)rn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=Eh(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Ch(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var G=p.vtp_attribute,L=a(u,"element");F=L&&We(L,G)||v||""}return F;case "MD":var T=p.vtp_mdValue,ea=b(u,"MD",Dn);return T&&ea?Gn(ea,
T)||v:ea||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=I(b),d=c;d[rd.xa]=null;d[rd.rf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){lh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Xj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(w){return function(x,y,B){var z="DATA_LAYER"==w?Wn(B):k[y];z&&(l[x]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var r=function(w,x){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[w]=x},t=function(w){return function(x,y,B,z){var A="DATA_LAYER"==w?Wn(B):k[y];z(A)&&r(x,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";
k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var v=
!0;v&&b.push(l);a||(a=!0,W(p,f(),e(p)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.fsl=[],function(){function a(){var e=X("document"),f=c(),g=HTMLFormElement.prototype.submit;Ue(e,"click",function(k){var l=k.target;if(l&&(l=Ze(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&We(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=J.getElementById(l.form):m=Ze(l,["form"],100);m&&f.store(m,l)}},!1);Ue(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));g.call(l);p&&l.removeChild(p)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ha(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=on("fsl",g?"nv.mwt":"mwt",0),n;n=g?on("fsl","nv.ids",[]):on("fsl","ids",[]);if(!n.length)return!0;var r=kn(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Xn(r,$m(f),m))return!1}else Xn(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};nn("fsl","mwt",m,0);g||nn("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};nn("fsl","ids",n,[]);g||nn("fsl","nv.ids",n,[]);ao("fsl")||(a(),bo("fsl"));O(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Lo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return gn.Jb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){O(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=fo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.$c,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(J.body,Ye(g),k,e)()}else Sn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.b.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Tg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ze(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=on("lcl",k?"nv.mwt":"mwt",0),m;m=k?on("lcl","nv.ids",[]):on("lcl","ids",[]);if(m.length){var n=kn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(eo(g,"rel")||""),t=!!Ha(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Hf("GTM",36);var p=X((eo(g,"target")||"_self").substring(1)),u=!0;if(Xn(n,$m(function(){var v;if(v=u&&p){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Tg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=eo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Xn(n,function(){},l||2E3);return!0}}};Ue(c,"click",e,!1);Ue(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=eo(d,"href"),g=f.indexOf("#"),k=eo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Vn(f),m=Vn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};nn("lcl","mwt",k,0);e||nn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};nn("lcl","ids",l,[]);e||nn("lcl","nv.ids",l,[]);ao("lcl")||(a(),bo("lcl"));O(c.vtp_gtmOnSuccess)})}();


var uq={};uq.macro=function(a){if(gn.Oc.hasOwnProperty(a))return gn.Oc[a]},uq.onHtmlSuccess=gn.ue(!0),uq.onHtmlFailure=gn.ue(!1);uq.dataLayer=kg;uq.callback=function(a){Df.hasOwnProperty(a)&&Ea(Df[a])&&Df[a]();delete Df[a]};function vq(){R[Fd.s]=uq;Ua(Ef,Z.b);jd=jd||gn;kd=Tg}
function wq(){yi.gtm_3pds=!0;R=E.google_tag_manager=E.google_tag_manager||{};if(R[Fd.s]){var a=R.zones;a&&a.unregisterChild(Fd.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(r)}hd=Z;id=Eo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;gm();Kd=new Jd(p);if(void 0!==
u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");Ef[y]=w}jm(v);vq();fn();Xg=!1;Yg=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)$g();else{Ue(J,"DOMContentLoaded",$g);Ue(J,"readystatechange",$g);if(J.createEventObject&&J.documentElement.doScroll){var B=!0;try{B=!E.frameElement}catch(G){}B&&ah()}Ue(E,"load",$g)}Cm=!1;"complete"===J.readyState?Em():Ue(E,"load",Em);a:{if(!$f)break a;E.setInterval(ag,864E5);}
Af=(new Date).getTime();}}
(function(a){
a()})(wq);

})()
