/*************************************
项目名称：扇贝考研
更新日期：2025-09-16
脚本作者：@Sheepfj
TG频道：https://t.me/sheep_007xiaoyang
GitHub：https://github.com/SheepFJ/QuantumultX
使用声明：⚠️仅供参考，🈲转载与售卖！
脚本说明：解锁历年英语真题区域，其他地方用不到没看


============ Quantumult X ============

[rewrite_local]
^https:\/\/apiv3\.shanbay\.com\/(?:postgraduate\/partner\/ldsentence|postgraduate\/partner\/user_info|postgraduate\/vip\/user-benefit|abc\/applets\/user_applets|benefit-center\/user-package) url script-response-body https://raw.githubusercontent.com/SheepFJ/QuantumultX/refs/heads/main/QuantumultX/APP/shanbei/shanbei.js
^https:\/\/apiv3\.shanbay\.com\/postgraduate\/lds_course\/task url script-response-body https://raw.githubusercontent.com/SheepFJ/QuantumultX/refs/heads/main/QuantumultX/APP/shanbei/shanbei.js
[mitm]
hostname = apiv3.shanbay.com

*************************************/
const _0x152443=_0x1eea;(function(_0x1ed2a1,_0x181870){const _0x59bf14=_0x1eea,_0x1d90b4=_0x1ed2a1();while(!![]){try{const _0x3df747=parseInt(_0x59bf14(0x1fe))/0x1+-parseInt(_0x59bf14(0x1f4))/0x2*(-parseInt(_0x59bf14(0x20d))/0x3)+-parseInt(_0x59bf14(0x1ff))/0x4+-parseInt(_0x59bf14(0x1fb))/0x5+-parseInt(_0x59bf14(0x1f5))/0x6+-parseInt(_0x59bf14(0x20b))/0x7+parseInt(_0x59bf14(0x1f8))/0x8;if(_0x3df747===_0x181870)break;else _0x1d90b4['push'](_0x1d90b4['shift']());}catch(_0x2cec56){_0x1d90b4['push'](_0x1d90b4['shift']());}}}(_0x1c45,0xcd395));const isLoon=typeof $persistentStore!=='undefined',isQuanX=typeof $prefs!=='undefined',isSurge=!isLoon&&!isQuanX,storage={'get':_0x5f2014=>{const _0x2868fa=_0x1eea;let _0x105161=null;if(isLoon||isSurge)_0x105161=$persistentStore['read'](_0x5f2014);if(isQuanX)_0x105161=$prefs[_0x2868fa(0x201)](_0x5f2014);if(_0x105161===undefined||_0x105161===null)return null;try{return JSON[_0x2868fa(0x205)](_0x105161);}catch(_0x20f8c4){return _0x105161;}},'set':(_0xe439ca,_0x1bd255)=>{const _0x165226=_0x1eea;let _0x50a0ac;typeof _0x1bd255===_0x165226(0x207)&&_0x1bd255!==null?_0x50a0ac=JSON[_0x165226(0x20a)](_0x1bd255):_0x50a0ac=_0x1bd255;if(isLoon||isSurge)return $persistentStore[_0x165226(0x1fd)](_0x50a0ac,_0xe439ca);if(isQuanX)return $prefs[_0x165226(0x1fc)](_0x50a0ac,_0xe439ca);}},notify=(_0x3c0ffb,_0x4a47ab,_0x21ee80)=>{if(isLoon||isSurge)$notification['post'](_0x3c0ffb,_0x4a47ab,_0x21ee80);else isQuanX&&$notify(_0x3c0ffb,_0x4a47ab,_0x21ee80);};let body=JSON['parse']($response[_0x152443(0x1f7)]),notifyFlag=storage[_0x152443(0x208)](_0x152443(0x1fa));!notifyFlag&&(notify('关注作者GitHub获取更多',_0x152443(0x209),_0x152443(0x1f6)),storage[_0x152443(0x20c)](_0x152443(0x1fa),'1'));function modifyObject(_0x2eb6c6){const _0x410539=_0x152443;for(let _0x17ec87 in _0x2eb6c6){_0x2eb6c6[_0x410539(0x202)](_0x17ec87)&&(typeof _0x2eb6c6[_0x17ec87]===_0x410539(0x207)&&_0x2eb6c6[_0x17ec87]!==null?modifyObject(_0x2eb6c6[_0x17ec87]):(_0x17ec87===_0x410539(0x20e)&&(_0x2eb6c6[_0x17ec87]=_0x410539(0x1f9)),_0x17ec87===_0x410539(0x206)&&(_0x2eb6c6[_0x17ec87]=_0x410539(0x1f9)),_0x17ec87===_0x410539(0x203)&&(_0x2eb6c6[_0x17ec87]=_0x410539(0x1f9)),_0x17ec87==='status'&&(_0x2eb6c6[_0x17ec87]=0x1),_0x17ec87===_0x410539(0x200)&&(_0x2eb6c6[_0x17ec87]=!![]),_0x17ec87===_0x410539(0x204)&&(_0x2eb6c6[_0x17ec87]=!![])));}}function _0x1eea(_0x28ed56,_0x3606fa){const _0x1c459e=_0x1c45();return _0x1eea=function(_0x1eeaa8,_0x4b1d23){_0x1eeaa8=_0x1eeaa8-0x1f4;let _0x51286f=_0x1c459e[_0x1eeaa8];return _0x51286f;},_0x1eea(_0x28ed56,_0x3606fa);}modifyObject(body),$done({'body':JSON['stringify'](body)});function _0x1c45(){const _0x5431f1=['body','28108384kRQADU','2099-09-09','shanbei_data_notify','4096750fyeLqd','setValueForKey','write','1414542aAFcTw','2732724idiCYQ','free','valueForKey','hasOwnProperty','due_date','has_permission','parse','expired_date','object','get','或者提供您需要尝试解锁的软件','stringify','10211789PUBDRv','set','3YvhHYh','expire_date','1035836UKtaCY','9864318clWsDa','https://github.com/SheepFJ/QuantumultX'];_0x1c45=function(){return _0x5431f1;};return _0x1c45();}
