			
// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 53068
// WR destination: www
// WR version: 15.4
// Recording ratio: 0.09001836
// Generated on: 3/2/2016 12:44:25 AM (UTC 3/2/2016 6:44:25 AM)


if (typeof(ClickTaleHooks) == 'undefined') {
    ClickTaleHooks = {
        Hooks : ['PreLoad', 'AfterPreLoad', 'PreRecording', 'AfterPreRecording', 'AdditionalCustomCode', 'AfterAdditionalCustomCode'],
        RunHook : function (hookName) {
			if (typeof window["ClickTale" + hookName + "Hook"] === "function") window["ClickTale" + hookName + "Hook"]();
            var s = 'ClickTaleSettings'; if (!ClickTaleHooks.IsValidHookName(hookName) || !(s in window) || !('PDCHooks' in window[s]) || !(hookName in window[s].PDCHooks)) return;
            var c = window[s].PDCHooks[hookName]; if (c instanceof Array) for (var i=0;i<c.length;i++) if (typeof(c[i]) == "function") c[i](); 
            if (typeof(c) == "function") c();
        },
		IsValidHookName : function (hookName) {
			if(Array.prototype.indexOf) { return ClickTaleHooks.Hooks.indexOf(hookName) >= 0; }
			for(var i = 0; i < ClickTaleHooks.Hooks.length; i++) { if(ClickTaleHooks.Hooks[i] === hookName) { return true; } } return false;
		}
    }
}    
	

function ClickTaleCDNHTTPSRewrite(u)
{
	try
	{
		var scripts = document.getElementsByTagName('script');
		if(scripts.length)
		{
			var script = scripts[ scripts.length - 1 ], s='https://clicktalecdn.sslcs.cdngc.net/';
			if(script.src && script.src.substr(0,s.length)==s )
				return u.replace('https://cdnssl.clicktale.net/',s);
		}
	}
	catch(e)
	{
	}
	return u;
} 

var ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	

var pccScriptElement = ClickTaleCreateDOMElement('script');
pccScriptElement.type = "text/javascript";
pccScriptElement.src = (document.location.protocol=='https:'?
ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/pcc/28cfa3ee-6caa-4cf2-ba10-7bb15c229189.js?DeploymentConfigName=Release_20012016&Version=3'):
'http://cdn.clicktale.net/www/pcc/28cfa3ee-6caa-4cf2-ba10-7bb15c229189.js?DeploymentConfigName=Release_20012016&Version=3');
document.body.appendChild(pccScriptElement);
	
var ClickTalePrevOnReady;
if(typeof ClickTaleOnReady == 'function')
{
	ClickTalePrevOnReady=ClickTaleOnReady;
	ClickTaleOnReady=undefined;
}

if (typeof window.ClickTaleScriptSource == 'undefined')
{
	window.ClickTaleScriptSource=(document.location.protocol=='https:'
		?ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/')
		:'http://cdn.clicktale.net/www/');
}

ClickTaleHooks.RunHook('PreLoad');
// Start of user-defined pre WR code (PreLoad)b
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleIncludedOnDOMReady = true;
window.bEnableChangeMonitor = false;
window.UseTransport = true;

window.ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.IE && v.v <= 8 || v.Sa  && v.v < 6) {
        return false;
    }
    else {
        if (!(v.m || v.t == v.IE && v.v <= 10)) {
			window.bEnableChangeMonitor = true;
			EnableTransport();
        }
        return f(v);
    }
}

function EnableTransport() {

	if (window.bEnableChangeMonitor){
		window.ClickTaleSettings.XHRWrapper = {
			Enable: false
		};
	
        var script = document.createElement("SCRIPT");
        script.src = (document.location.protocol === "https:" ? "https://cdnssl." : "http://cdn.")+"clicktale.net/www/ChangeMonitor-latest.js";
        document.body.appendChild(script);

        window.ClickTaleSettings.ChangeMonitor = {
            Enable: true,
			LiveExclude : true,
			AddressingMode: "id",
            OnReadyHandler: function (changeMonitor) {
                changeMonitor.observe();
			 },
            OnBeforeReadyHandler: function (settings) {
                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
                return settings;
            },
			Filters: {
					MaxBufferSize: 900000,
					MaxElementCount: 6000
			},
			PII: {
				Text: [
					{
						selector: "div.details",
						transform: function (el) {
						return "********";
						}
					}
				],                  
				//Attributes: [{
				//		selector: "input[type=text],input[type=email],input[type=tel]",
				//		transform: function (el) {
				//		var attrs = {};
				//		for (var i = 0; i < el.attributes.length; i++) {
				//			var prop = el.attributes.item(i);
				//			attrs[prop.name] = prop.value;
				//		}
				//		attrs.value = "***";                           
				//		attrs.placeholder = "***";
				//		attrs.title = "***";
				//		return attrs;
				//		}
				//}]
			}
		}
	}
}


window.ClickTaleSettings.Compression = {
	Method: function () {
		return "deflate";
	}
};

window.ClickTaleSettings.Transport = {
	Legacy: false,
	MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
	OnBeforeRewrite: function (rewriteApi) {
		rewriteApi.add({
			pattern: new RegExp('(<input[^>]*value=")([^"]+)("[^>]*type="text">)', 'gim'),
			replace: "$1-----$3"
		});
		rewriteApi.add({
			pattern: new RegExp('(<input[^>]*type="text"[^>]*value=")([^"]+)("[^>]*>)', 'gim'),
			replace: "$1-----$3"
		});
		rewriteApi.add({
					pattern : /(<div class=\"mini-shipment[\S\s]*?\"details\">)(([\s\S]*?<div>[\s\S]*?<\/div>[\s\S]*?){1,10})/gim,
                    replace : "$1<div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br>"
         });
		  rewriteApi.add({
					pattern : /(<div class=\"mini-billing-address[\S\s]*?\"details\">)(([\s\S]*?<div>[\s\S]*?<\/div>[\s\S]*?){1,10})/gim,
                    replace : "$1<div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br>"
         });
		  rewriteApi.add({
					pattern : /(<div class=\"\mini-payment-instrument[\S\s]*?\"details\">)(([\s\S]*?<div>[\s\S]*?<\/div>[\s\S]*?){1,10})/gim,
                    replace : "$1<div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br><div>***** ******</div><br>"
         });
		 if(document.location.href.indexOf("COSummary-Submit") > -1){
			   rewriteApi.add({
						pattern : /(<td class=\"order-information\")([\s\S]*?)(<\/td>)/gim,
						replace: "$1-----$3"
			 });
			  rewriteApi.add({
						pattern : /(<td class=\"order-billing\")([\s\S]*?)(<\/td>)/gim,
						replace: "$1-----$3"
			 });
			  rewriteApi.add({
						pattern : /(<td class=\"order-payment-instruments\")([\s\S]*?)(<\/td>)/gim,
						replace: "$1-----$3"
			 });
			  rewriteApi.add({
						pattern : /(<div class=\"summarybox\")([\s\S]*?)(<\/td>)/gim,
						replace: "$1-----$3"
			 });
		 }
		rewriteApi.add({
			pattern : new RegExp('</head>', 'gim'),
			replace : "<script src=\'http:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/1\.11\.1\/jquery\.min\.js\'><\/script><\/head>"
		});
		
	}
}
// End of user-defined pre WR code
ClickTaleHooks.RunHook('AfterPreLoad');

var ClickTaleOnReady = function()
{
	var PID=53068, 
		Ratio=0.09001836, 
		PartitionPrefix="www";
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return; //in preview
	};
		
	ClickTaleHooks.RunHook('PreRecording');
	// Start of user-defined header code (PreInitialize)
	if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}


if (typeof ClickTaleUploadPage === 'function' && window.UseTransport) {
	function delayUpload() {

		setTimeout(function () {
			if (window['jQuery']) {

				window.ClickTaleIncludedOnWindowLoad = true;
				window.ClickTaleIncludedOnDOMReady = true;
				ClickTaleUploadPage();
				window.ClickTaleSSL = 1;
				ClickTale(PID, Ratio, PartitionPrefix);
				if ((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString())) {
					ClickTalePrevOnReady();
				}
				return;
			}

		}, 2000);
	}

	if (document.location.href.indexOf('teva') > -1) {

		if (typeof delayUpload == 'function') {
			delayUpload();
			return;
		}
	} else {
		ClickTaleUploadPage();
	}

}
	// End of user-defined header code (PreInitialize)
    ClickTaleHooks.RunHook('AfterPreRecording');
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTale(PID, Ratio, PartitionPrefix);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	ClickTaleHooks.RunHook('AdditionalCustomCode');
	// Start of user-defined footer code
	
	// End of user-defined footer code
	ClickTaleHooks.RunHook('AfterAdditionalCustomCode');
};

 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	var externalScript = ClickTaleCreateDOMElement("script");
	var src = document.location.protocol=='https:'?
	  'https://cdnssl.clicktale.net/www/tc/WRf4.js':
	  'http://cdn.clicktale.net/www/tc/WRf4.js';
	externalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);
	externalScript.type = 'text/javascript';
	document.body.appendChild(externalScript);
})();




!function(){function t(){window.addEventListener&&addEventListener("message",e,!1)}function e(t){var e,n=new RegExp("(clicktale.com|ct.test)($|:)"),i=new RegExp("ct.test"),c=!1,l=t.origin;try{e=JSON.parse(t.data)}catch(d){return}n.test(t.origin)!==!1&&(i.test(t.origin)===!0&&(c=!0),"CTload_ve"===e["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&o(l,c))}function n(t){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",t):document.createElement(t)}function o(t,e){var o=n("script");o.setAttribute("type","text/javascript"),o.setAttribute("id","ctVisualEditorClientModule");var i;i=e?document.location.protocol+"//ct.test/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+t.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",o.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(o)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&window.self!==window.top&&t()}catch(l){}}();

