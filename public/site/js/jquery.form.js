!function(a){"use strict";function c(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(this).ajaxSubmit(c))}function d(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function e(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var b={};b.fileapi=void 0!==a("<input type='file'/>").get(0).files,b.formdata=void 0!==window.FormData,a.fn.ajaxSubmit=function(c){function y(b){var f,g,c=a.param(b).split("&"),d=c.length,e={};for(f=0;f<d;f++)g=c[f].split("="),e[decodeURIComponent(g[0])]=decodeURIComponent(g[1]);return e}function z(b){for(var e=new FormData,f=0;f<b.length;f++)e.append(b[f].name,b[f].value);if(c.extraData){var g=y(c.extraData);for(var h in g)g.hasOwnProperty(h)&&e.append(h,g[h])}c.data=null;var i=a.extend(!0,{},a.ajaxSettings,c,{contentType:!1,processData:!1,cache:!1,type:d||"POST"});c.uploadProgress&&(i.xhr=function(){var a=jQuery.ajaxSettings.xhr();return a.upload&&(a.upload.onprogress=function(a){var b=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(b=Math.ceil(d/e*100)),c.uploadProgress(a,d,e,b)}),a}),i.data=null;var j=i.beforeSend;return i.beforeSend=function(a,b){b.data=e,j&&j.call(this,a,b)},a.ajax(i)}function A(b){function y(a){var b=a.contentWindow?a.contentWindow.document:a.contentDocument?a.contentDocument:a.document;return b}function B(){function g(){try{var a=y(o).readyState;e("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(g,50)}catch(b){e("Server abort: ",b," (",b.name,")"),G(x),t&&clearTimeout(t),t=void 0}}var b=h.attr("target"),c=h.attr("action");f.setAttribute("target",m),d||f.setAttribute("method","POST"),c!=j.url&&f.setAttribute("action",j.url),j.skipEncodingOverride||d&&!/post/i.test(d)||h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),j.timeout&&(t=setTimeout(function(){s=!0,G(w)},j.timeout));var i=[];try{if(j.extraData)for(var k in j.extraData)j.extraData.hasOwnProperty(k)&&i.push(a.isPlainObject(j.extraData[k])&&j.extraData[k].hasOwnProperty("name")&&j.extraData[k].hasOwnProperty("value")?a('<input type="hidden" name="'+j.extraData[k].name+'">').attr("value",j.extraData[k].value).appendTo(f)[0]:a('<input type="hidden" name="'+k+'">').attr("value",j.extraData[k]).appendTo(f)[0]);j.iframeTarget||(n.appendTo("body"),o.attachEvent?o.attachEvent("onload",G):o.addEventListener("load",G,!1)),setTimeout(g,15),f.submit()}finally{f.setAttribute("action",c),b?f.setAttribute("target",b):h.removeAttr("target"),a(i).remove()}}function G(b){if(!p.aborted&&!F){try{D=y(o)}catch(c){e("cannot access response document: ",c),b=x}if(b===w&&p)return p.abort("timeout"),void v.reject(p,"timeout");if(b==x&&p)return p.abort("server abort"),void v.reject(p,"error","server abort");if(D&&D.location.href!=j.iframeSrc||s){o.detachEvent?o.detachEvent("onload",G):o.removeEventListener("load",G,!1);var f,d="success";try{if(s)throw"timeout";var g="xml"==j.dataType||D.XMLDocument||a.isXMLDoc(D);if(e("isXml="+g),!g&&window.opera&&(null===D.body||!D.body.innerHTML)&&--E)return e("requeing onLoad callback, DOM not available"),void setTimeout(G,250);var h=D.body?D.body:D.documentElement;p.responseText=h?h.innerHTML:null,p.responseXML=D.XMLDocument?D.XMLDocument:D,g&&(j.dataType="xml"),p.getResponseHeader=function(a){var b={"content-type":j.dataType};return b[a]},h&&(p.status=Number(h.getAttribute("status"))||p.status,p.statusText=h.getAttribute("statusText")||p.statusText);var i=(j.dataType||"").toLowerCase(),k=/(json|script|text)/.test(i);if(k||j.textarea){var m=D.getElementsByTagName("textarea")[0];if(m)p.responseText=m.value,p.status=Number(m.getAttribute("status"))||p.status,p.statusText=m.getAttribute("statusText")||p.statusText;else if(k){var q=D.getElementsByTagName("pre")[0],r=D.getElementsByTagName("body")[0];q?p.responseText=q.textContent?q.textContent:q.innerText:r&&(p.responseText=r.textContent?r.textContent:r.innerText)}}else"xml"==i&&!p.responseXML&&p.responseText&&(p.responseXML=H(p.responseText));try{C=J(p,i,j)}catch(b){d="parsererror",p.error=f=b||d}}catch(b){e("error caught: ",b),d="error",p.error=f=b||d}p.aborted&&(e("upload aborted"),d=null),p.status&&(d=p.status>=200&&p.status<300||304===p.status?"success":"error"),"success"===d?(j.success&&j.success.call(j.context,C,"success",p),v.resolve(p.responseText,"success",p),l&&a.event.trigger("ajaxSuccess",[p,j])):d&&(void 0===f&&(f=p.statusText),j.error&&j.error.call(j.context,p,d,f),v.reject(p,"error",f),l&&a.event.trigger("ajaxError",[p,j,f])),l&&a.event.trigger("ajaxComplete",[p,j]),l&&!--a.active&&a.event.trigger("ajaxStop"),j.complete&&j.complete.call(j.context,p,d),F=!0,j.timeout&&clearTimeout(t),setTimeout(function(){j.iframeTarget||n.remove(),p.responseXML=null},100)}}}var g,i,j,l,m,n,o,p,q,r,s,t,f=h[0],u=!!a.fn.prop,v=a.Deferred();if(a("[name=submit],[id=submit]",f).length)return alert('Error: Form elements must not have name or id of "submit".'),v.reject(),v;if(b)for(i=0;i<k.length;i++)g=a(k[i]),u?g.prop("disabled",!1):g.removeAttr("disabled");if(j=a.extend(!0,{},a.ajaxSettings,c),j.context=j.context||j,m="jqFormIO"+(new Date).getTime(),j.iframeTarget?(n=a(j.iframeTarget),r=n.attr("name"),r?m=r:n.attr("name",m)):(n=a('<iframe name="'+m+'" src="'+j.iframeSrc+'" />'),n.css({position:"absolute",top:"-1000px",left:"-1000px"})),o=n[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";if(e("aborting upload... "+c),this.aborted=1,o.contentWindow.document.execCommand)try{o.contentWindow.document.execCommand("Stop")}catch(d){}n.attr("src",j.iframeSrc),p.error=c,j.error&&j.error.call(j.context,p,c,b),l&&a.event.trigger("ajaxError",[p,j,c]),j.complete&&j.complete.call(j.context,p,c)}},l=j.global,l&&0===a.active++&&a.event.trigger("ajaxStart"),l&&a.event.trigger("ajaxSend",[p,j]),j.beforeSend&&j.beforeSend.call(j.context,p,j)===!1)return j.global&&a.active--,v.reject(),v;if(p.aborted)return v.reject(),v;q=f.clk,q&&(r=q.name,r&&!q.disabled&&(j.extraData=j.extraData||{},j.extraData[r]=q.value,"image"==q.type&&(j.extraData[r+".x"]=f.clk_x,j.extraData[r+".y"]=f.clk_y)));var w=1,x=2,z=a("meta[name=csrf-token]").attr("content"),A=a("meta[name=csrf-param]").attr("content");A&&z&&(j.extraData=j.extraData||{},j.extraData[A]=z),j.forceSync?B():setTimeout(B,10);var C,D,F,E=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"===typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return v}if(!this.length)return e("ajaxSubmit: skipping submit process - no element selected"),this;var d,f,g,h=this;"function"==typeof c&&(c={success:c}),d=this.attr("method"),f=this.attr("action"),g="string"===typeof f?a.trim(f):"",g=g||window.location.href||"",g&&(g=(g.match(/^([^#]+)/)||[])[1]),c=a.extend(!0,{url:g,success:a.ajaxSettings.success,type:d||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},c);var i={};if(this.trigger("form-pre-serialize",[this,c,i]),i.veto)return e("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(c.beforeSerialize&&c.beforeSerialize(this,c)===!1)return e("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var j=c.traditional;void 0===j&&(j=a.ajaxSettings.traditional);var l,k=[],m=this.formToArray(c.semantic,k);if(c.data&&(c.extraData=c.data,l=a.param(c.data,j)),c.beforeSubmit&&c.beforeSubmit(m,this,c)===!1)return e("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[m,this,c,i]),i.veto)return e("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var n=a.param(m,j);l&&(n=n?n+"&"+l:l),"GET"==c.type.toUpperCase()?(c.url+=(c.url.indexOf("?")>=0?"&":"?")+n,c.data=null):c.data=n;var o=[];if(c.resetForm&&o.push(function(){h.resetForm()}),c.clearForm&&o.push(function(){h.clearForm(c.includeHidden)}),!c.dataType&&c.target){var p=c.success||function(){};o.push(function(b){var d=c.replaceTarget?"replaceWith":"html";a(c.target)[d](b).each(p,arguments)})}else c.success&&o.push(c.success);c.success=function(a,b,d){for(var e=c.context||this,f=0,g=o.length;f<g;f++)o[f].apply(e,[a,b,d||h,h])};var q=a('input[type=file]:enabled[value!=""]',this),r=q.length>0,s="multipart/form-data",t=h.attr("enctype")==s||h.attr("encoding")==s,u=b.fileapi&&b.formdata;e("fileAPI :"+u);var w,v=(r||t)&&!u;c.iframe!==!1&&(c.iframe||v)?c.closeKeepAlive?a.get(c.closeKeepAlive,function(){w=A(m)}):w=A(m):w=(r||t)&&u?z(m):a.ajax(c),h.removeData("jqxhr").data("jqxhr",w);for(var x=0;x<k.length;x++)k[x]=null;return this.trigger("form-submit-notify",[this,c]),this},a.fn.ajaxForm=function(b){if(b=b||{},b.delegation=b.delegation&&a.isFunction(a.fn.on),!b.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(e("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(b)}),this):(e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return b.delegation?(a(document).off("submit.form-plugin",this.selector,c).off("click.form-plugin",this.selector,d).on("submit.form-plugin",this.selector,b,c).on("click.form-plugin",this.selector,b,d),this):this.ajaxFormUnbind().bind("submit.form-plugin",b,c).bind("click.form-plugin",b,d)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(c,d){var e=[];if(0===this.length)return e;var f=this[0],g=c?f.getElementsByTagName("*"):f.elements;if(!g)return e;var h,i,j,k,l,m,n;for(h=0,m=g.length;h<m;h++)if(l=g[h],j=l.name)if(c&&f.clk&&"image"==l.type)l.disabled||f.clk!=l||(e.push({name:j,value:a(l).val(),type:l.type}),e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}));else if(k=a.fieldValue(l,!0),k&&k.constructor==Array)for(d&&d.push(l),i=0,n=k.length;i<n;i++)e.push({name:j,value:k[i]});else if(b.fileapi&&"file"==l.type&&!l.disabled){d&&d.push(l);var o=l.files;if(o.length)for(i=0;i<o.length;i++)e.push({name:j,value:o[i],type:l.type});else e.push({name:j,value:"",type:l.type})}else null!==k&&"undefined"!=typeof k&&(d&&d.push(l),e.push({name:j,value:k,type:l.type,required:l.required}));if(!c&&f.clk){var p=a(f.clk),q=p[0];j=q.name,j&&!q.disabled&&"image"==q.type&&(e.push({name:j,value:p.val()}),e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}))}return e},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;f<g;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(g<0)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;l<k;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}(jQuery);/* Developed Saed Z. Sinwar */