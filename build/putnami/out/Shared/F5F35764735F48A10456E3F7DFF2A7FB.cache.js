Shared.onScriptDownloaded(["var $wnd = $wnd || window.parent;var __gwtModuleFunction = $wnd.Shared;var $sendStats = __gwtModuleFunction.__sendStats;$sendStats('moduleStartup', 'moduleEvalStart');var $gwt_version = \"2.7.0\";var $strongName = 'F5F35764735F48A10456E3F7DFF2A7FB';var $gwt = {};var $doc = $wnd.document;var $moduleName, $moduleBase;function __gwtStartLoadingFragment(frag) {var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';return __gwtModuleFunction.__startLoadingFragment(fragFile);}function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}function __gwt_isKnownPropertyValue(propName, propValue) {return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);}function __gwt_getMetaProperty(name) {return __gwtModuleFunction.__gwt_getMetaProperty(name);}var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;function k(){}\nfunction V(){}\nfunction bc(){}\nfunction bb(){}\nfunction Zb(){}\nfunction fb(){db()}\nfunction oc(){return K}\nfunction Qc(a,b){return a===b}\nfunction qc(a){return a.tM===bc}\nfunction gb(a,b){return Ec(a,b)}\nfunction $(a,b){Z();Y.o(a,b)}\nfunction s(){s=Zb;r=new k}\nfunction S(){S=Zb;R=new V}\nfunction Uc(){Uc=Zb;Rc={};Tc={}}\nfunction Q(){D!=0&&(D=0);H=-1}\nfunction mc(){kc==null&&(kc=[])}\nfunction Oc(){$(this,this.e)}\nfunction uc(a){this.e=a;$(this,this.e)}\nfunction zc(a){yc(a);return a.j}\nfunction Xb(a){var b=Wb;return ac(b[a])}\nfunction sb(a){return rb(a)&&qc(a)}\nfunction ob(a){return !rb(a)&&qc(a)}\nfunction rb(a){return Array.isArray(a)}\nfunction ub(a){return a==null?null:a}\nfunction w(a){return a==null?null:a.name}\nfunction v(a){return a==null?null:a.message}\nfunction pb(a,b){return a!=null&&lb(a,b)}\nfunction qb(a){return a!=null&&!tb(a)&&!qc(a)}\nfunction N(a){return a.$H||(a.$H=++F)}\nfunction Pc(b,a){return b.charCodeAt(a)}\nfunction P(a){$wnd.clearTimeout(a)}\nfunction rc(){$wnd.setTimeout(Yc(tc));sc()}\nfunction O(a){$wnd.setTimeout(function(){throw a},0)}\nfunction yc(a){if(a.j!=null){return}Ic(a)}\nfunction dc(a,b,c){return {l:a,m:b,h:c}}\nfunction I(a,b,c){return a.apply(b,c);var d}\nfunction tb(a){return typeof a==='string'}\nfunction $b(a){return a instanceof Array?a[0]:null}\nfunction m(a){return tb(a)?Qb:ob(a)?a.cZ:sb(a)?a.cZ:wb}\nfunction lb(a,b){return tb(a)&&!!kb[b]||a.cM&&!!a.cM[b]}\nfunction W(a,b){!a&&(a=[]);a[a.length]=b;return a}\nfunction mb(a,b){if(a!=null&&!lb(a,b)){throw new Oc}return a}\nfunction tc(){var a;a=wc();if(!Qc(ed,a)){throw new vc(a)}}\nfunction nb(a){if(a!=null&&!(!tb(a)&&!qc(a))){throw new Oc}return a}\nfunction Gc(a){if(a.u()){return null}var b=a.i;var c=Wb[b];return c}\nfunction ac(a){function b(){}\n;b.prototype=a||{};return new b}\nfunction Xc(){if(Sc==256){Rc=Tc;Tc={};Sc=0}++Sc}\nfunction db(){db=Zb;Error.stackTraceLimit=64}\nfunction u(a){s();this.e=null;this.a='';this.b=a;this.a=''}\nfunction M(a){a&&U((S(),R));--D;if(a){if(H!=-1){P(H);H=-1}}}\nfunction L(a,b,c){var d;d=J();try{return I(a,b,c)}finally{M(d)}}\nfunction Ec(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.p(b))}\nfunction Cc(a,b,c){var d,e;d=(e=new Ac,e.f=a,e.d=b,e);Mc(c,d);return d}\nfunction hb(a,b,c,d,e,f){var g;g=jb(e,d);ib(gb(a,f),b,c,e,g);return g}\nfunction K(b){return function(){return L(b,this,arguments);var a}}\nfunction C(){if(Date.now){return Date.now()}return (new Date).getTime()}\nfunction Tb(b,c){if(b&&typeof b==Zc){try{b.__gwt$exception=c}catch(a){}}}\nfunction pc(a,b){typeof window===Zc&&typeof window['$gwt']===Zc&&(window['$gwt'][a]=b)}\nfunction cc(a){var b,c,d;b=a&cd;c=a>>22&cd;d=a<0?1048575:0;return dc(b,c,d)}\nfunction jc(){jc=Zb;gc=dc(cd,cd,524287);hc=dc(0,0,524288);fc(1);fc(2);ic=fc(0)}\nfunction T(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=X(b,c)}while(a.a);a.a=c}}\nfunction U(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=X(b,c)}while(a.b);a.b=c}}\nfunction Mc(a,b){var c;if(!a){return}b.i=a;var d=Gc(b);if(!d){Wb[a]=[b];return}d.cZ=b}\nfunction Vb(a){var b;if(pb(a,4)){return a}b=a&&a.__gwt$exception;if(!b){b=new u(a);$(b,a);Tb(a,b)}return b}\nfunction Ub(a){var b;if(pb(a,8)){b=mb(a,8);if(ub(b.b)!==ub((s(),r))){return ub(b.b)===ub(r)?null:b.b}}return a}\nfunction ab(a){var b=/function(?:\\s+([\\w$]+))?\\s*\\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}\nfunction lc(){mc();var a=kc;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}\nfunction Z(){Z=Zb;var a,b;b=!(!!Error.stackTraceLimit||'stack' in new Error);a=new fb;Y=b?new bb:a}\nfunction ib(a,b,c,d,e){e.cZ=a;e.cM=b;e.tM=bc;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}\nfunction Wc(a){Uc();var b=':'+a;var c=Tc[b];if(c!=null){return c}c=Rc[b];c==null&&(c=Vc(a));Xc();return Tc[b]=c}\nfunction Ac(){++xc;this.j=null;this.g=null;this.f=null;this.d=null;this.b=null;this.i=null;this.a=null}\nfunction vc(a){uc.call(this,''+(fd+a+').\\n'+gd),pb(fd+a+').\\n'+gd,4)?mb(fd+a+').\\n'+gd,4):null)}\nfunction _b(){!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}\nfunction J(){var a;if(D!=0){a=C();if(a-G>2000){G=a;H=$wnd.setTimeout(Q,10)}}if(D++==0){T((S(),R));return true}return false}\nfunction fc(a){var b,c;if(a>-129&&a<128){b=a+128;ec==null&&(ec=hb(Gb,{3:1},73,256,0,1));c=ec[b];!c&&(c=ec[b]=cc(a));return c}return cc(a)}\nfunction Lc(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}\nfunction nc(b,c,d,e){mc();var f=kc;$moduleName=c;$moduleBase=d;Sb=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}\nif(b){try{Yc(g)()}catch(a){b(c,a)}}else{Yc(g)()}}\nfunction jb(a,b){var c=new Array(b);var d;switch(a){case 6:d={l:0,m:0,h:0};break;case 7:d=0;break;case 8:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}\nfunction t(a){var b;if(a.c==null){b=ub(a.b)===ub(r)?null:a.b;a.d=b==null?'null':qb(b)?w(nb(b)):tb(b)?'String':zc(m(b));a.a=a.a+': '+(qb(b)?v(nb(b)):b+'');a.c='('+a.d+') '+a.a}}\nfunction X(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].v()&&(c=W(c,g)):g[0].v()}catch(a){a=Vb(a);if(pb(a,4)){d=a;O(pb(d,8)?mb(d,8).n():d)}else throw Ub(a)}}return c}\nfunction Vc(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=~~b;c+=4}while(c<d){b=b*31+Pc(a,c++)}b=~~b;return b}\nfunction Yb(a,b,c){var d=Wb;var e=Xb;var f=$b;var g=d[a];var h=f(g);if(g&&!h){_=g}else{_=d[a]=!b?{}:e(b);_.cM=c;_.constructor=_;!b&&(_.tM=bc)}for(var i=3;i<arguments.length;++i){arguments[i].prototype=_}h&&(_.cZ=h)}\nfunction Ic(a){if(a.t()){var b=a.c;b.u()?(a.j='['+b.i):!b.t()?(a.j='[L'+b.r()+';'):(a.j='['+b.r());a.b=b.q()+'[]';a.g=b.s()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.j=Lc('.',[c,Lc('$',d)]);a.b=Lc('.',[c,Lc('.',d)]);a.g=d[d.length-1]}\nfunction wc(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf('webkit')!=-1}())return ed;if(function(){return a.indexOf('msie')!=-1&&b>=10&&b<11}())return 'ie10';if(function(){return a.indexOf('msie')!=-1&&b>=9&&b<11}())return 'ie9';if(function(){return a.indexOf('msie')!=-1&&b>=8&&b<11}())return 'ie8';if(function(){return a.indexOf('gecko')!=-1||b>=11}())return 'gecko1_8';return 'unknown'}\nfunction sc(){var a,b,c;b=$doc.compatMode;a=ib(gb(Qb,1),{3:1},2,4,[dd]);for(c=0;c<a.length;c++){if(Qc(a[c],b)){return}}a.length==1&&Qc(dd,a[0])&&Qc('BackCompat',b)?\"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\\\"document.compatMode\\\" value=\\\"\"+b+'\"/&gt;':\"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' \"+b+\"').<br>Modify your application's host HTML page doctype, or update your custom \"+\"'document.compatMode' configuration property settings.\"}\nvar Zc='object',$c='java.lang',_c='com.google.gwt.core.client',ad={3:1,4:1},bd='com.google.gwt.core.client.impl',cd=4194303,dd='CSS1Compat',ed='safari',fd='Possible problem with your *.gwt.xml module file.\\nThe compile time user.agent value (safari) does not match the runtime user.agent value (',gd='Expect more errors.',hd='com.google.gwt.lang';var _,kc,Wb={},Sb=-1;Yb(1,null,{},k);_.gC=function l(){return this.cZ};_.hC=function n(){return N(this)};_.tS=function o(){return zc(m(this))+'@'+((tb(this)?Wc(this):ob(this)?this.hC():sb(this)?N(this):N(this))>>>0).toString(16)};_.toString=function(){return this.tS()};kb={3:1,70:1,71:1,2:1};_b();Yb(20,1,{},Ac);_.p=function Bc(a){var b;b=new Ac;b.e=4;a>1?(b.c=Ec(this,a-1)):(b.c=this);return b};_.q=function Dc(){yc(this);return this.b};_.r=function Fc(){return zc(this)};_.s=function Hc(){yc(this);return this.g};_.t=function Jc(){return (this.e&4)!=0};_.u=function Kc(){return (this.e&1)!=0};_.tS=function Nc(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(yc(this),this.j)};_.e=0;var xc=1;var Ob=Cc($c,'Object',1),wb=Cc(_c,'JavaScriptObject$',0),Lb=Cc($c,'Class',20);Yb(4,1,ad);_.k=function p(){return this.e};_.tS=function q(){var a,b;a=zc(this.cZ);b=this.k();return b!=null?a+': '+b:a};var Rb=Cc($c,'Throwable',4);Yb(14,4,ad);var Nb=Cc($c,'Exception',14);Yb(7,14,ad);var Pb=Cc($c,'RuntimeException',7);Yb(29,7,ad);var yb=Cc(bd,'JavaScriptExceptionBase',29);Yb(8,29,{8:1,3:1,4:1},u);_.k=function A(){t(this);return this.c};_.n=function B(){return ub(this.b)===ub(r)?null:this.b};var r;var vb=Cc(_c,'JavaScriptException',8);Yb(52,1,{});var xb=Cc(_c,'Scheduler',52);var D=0,F=0,G=0,H=-1;Yb(48,52,{},V);var R;var zb=Cc(bd,'SchedulerImpl',48);var Y;Yb(63,1,{});var Db=Cc(bd,'StackTraceCreator/Collector',63);Yb(30,63,{},bb);_.o=function cb(a,b){var c={},j;a.fnStack=[];var d=arguments.callee.caller;while(d){var e=(Z(),d.name||(d.name=ab(d.toString())));a.fnStack.push(e);var f=':'+e;var g=c[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(c[f]=[])).push(d);d=d.caller}};var Ab=Cc(bd,'StackTraceCreator/CollectorLegacy',30);Yb(64,63,{});_.o=function eb(c,d){function e(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}\nvar f;typeof d=='string'?(f=e(new Error(d))):d instanceof Object&&'stack' in d?(f=d):(f=e(new Error));c.__gwt$backingJsError=f};var Cb=Cc(bd,'StackTraceCreator/CollectorModern',64);Yb(31,64,{},fb);var Bb=Cc(bd,'StackTraceCreator/CollectorModernNoSourceMap',31);var kb;var ec;var gc,hc,ic;Yb(15,4,ad);var Mb=Cc($c,'Error',15);Yb(5,15,ad);var Jb=Cc($c,'AssertionError',5);Yb(28,5,ad,vc);var Ib=Cc('com.google.gwt.useragent.client','UserAgentAsserter/UserAgentAssertionError',28);Yb(9,7,ad,Oc);var Kb=Cc($c,'ClassCastException',9);var Qb=Cc($c,'String',2);var Rc,Sc=0,Tc;var Eb=Cc(hd,'CollapsedPropertyHolder',54),Fb=Cc(hd,'JavaClassHierarchySetupUtil',56),Gb=Cc(hd,'LongLibBase/LongEmul',null),Hb=Cc(hd,'ModuleUtils',59);var Yc=oc();var gwtOnLoad=gwtOnLoad=nc;lc(rc);pc('permProps',[[['locale','default'],['user.agent',ed]]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);\n//# sourceURL=Shared-0.js\n"]);
