!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";!function(){var e=wp.i18n.__,t=wp.editor.InnerBlocks,n=wp.components.TextControl;(0,wp.blocks.registerBlockType)("lenspress/param-case",{title:e("Parameter Case"),icon:"randomize",category:"layout",keywords:[e("if"),e("elseif"),e("else"),e("switch"),e("case"),e("parameter"),e("url"),e("get"),e("post"),e("cookie"),e("replace"),e("content")],attributes:{paramName:{type:"string"},enableUrl:{type:"boolean"},enablePost:{type:"boolean"},enableCookie:{type:"boolean"}},edit:function(r){var a=r.attributes,o=r.setAttributes;return[wp.element.createElement(InspectorControls,null,wp.element.createElement(PanelBody,{title:e("Content Settings")},wp.element.createElement(n,{label:e("Parameter Name"),value:a.paramName,onChange:function(e){o({paramName:e})}}),wp.element.createElement(CheckboxControl,{label:e("Enable GET Parameters"),help:e("Enable checking for the parameter in the URL itself"),checked:a.urlEnabled,onChange:function(e){o({urlEnabled:e})}}),wp.element.createElement(CheckboxControl,{label:e("Enable POST Parameters"),help:e("Enable checking for the parameter in the data sent via a POST request"),checked:a.postEnabled,onChange:function(e){o({postEnabled:e})}}),wp.element.createElement(CheckboxControl,{label:e("Enable COOKIE Parameters"),help:e("Enable checking for the parameter in the browser's cookies"),checked:a.cookieEnabled,onChange:function(e){o({cookieEnabled:e})}}))),wp.element.createElement("div",{className:r.className},e("Switch between any number of versions of a content block depending on a parameter."),wp.element.createElement(t,null))]},save:function(e){var n=e.attributes;e.setAttributes;return["[lenspress-param-case",'param="'+n.paramName.replace('"','"')+'"','match="'+n.match.replace('"','"')+'"','negate="'+(n.negate?"1":"0")+'" ','url="'+(n.urlEnabled?"1":"0")+'"','post="'+(n.postEnabled?"1":"0")+'"','cookie="'+(n.cookieEnabled?"1":"0")+'"]',wp.element.createElement(t.Content,null),"[/lenspress-param-case]"]}})}()}]);
//# sourceMappingURL=ParameterCase.final.js.map