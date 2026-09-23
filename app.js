(()=>{var U0=0,Of=1,F0=2;var fc=1,O0=2,Ga=3,dr=0,Fn=1,Hn=2,es=0,zr=1,Vr=2,Bf=3,kf=4,B0=5;var Hr=100,k0=101,z0=102,V0=103,H0=104,G0=200,W0=201,X0=202,$0=203,zf=204,Vf=205,Y0=206,q0=207,K0=208,Z0=209,J0=210,j0=211,Q0=212,t_=213,e_=214,jl=0,Ql=1,th=2,Ua=3,eh=4,nh=5,ih=6,sh=7,Hf=0,n_=1,i_=2,ki=0,Gf=1,Wf=2,Xf=3,$f=4,Yf=5,qf=6,Kf=7;var Zf=300,fr=301,Gr=302,Ch=303,Ih=304,pc=306,$o=1e3,Ji=1001,rh=1002,yn=1003,s_=1004;var mc=1005;var on=1006,Ph=1007;var Mi=1008;var ci=1009,Jf=1010,jf=1011,Wa=1012,Lh=1013,zi=1014,Vi=1015,Hi=1016,Dh=1017,Nh=1018,Xa=1020,Qf=35902,tp=35899,ep=1021,np=1022,bi=1023,ji=1026,pr=1027,ip=1028,Uh=1029,mr=1030,Fh=1031;var Oh=1033,gc=33776,_c=33777,xc=33778,yc=33779,Bh=35840,kh=35841,zh=35842,Vh=35843,Hh=36196,Gh=37492,Wh=37496,Xh=37488,$h=37489,vc=37490,Yh=37491,qh=37808,Kh=37809,Zh=37810,Jh=37811,jh=37812,Qh=37813,tu=37814,eu=37815,nu=37816,iu=37817,su=37818,ru=37819,au=37820,ou=37821,cu=36492,lu=36494,hu=36495,uu=36283,du=36284,Sc=36285,fu=36286;var Yo=2300,ah=2301,Zl=2302,Cf=2303,If=2400,Pf=2401,Lf=2402;var r_=3200;var sp=0,a_=1,Ps="",ze="srgb",qo="srgb-linear",Ko="linear",Se="srgb";var Jl=7680;var o_=519,c_=512,l_=513,h_=514,pu=515,u_=516,d_=517,mu=518,f_=519,rp=35044;var ap="300 es",Oi=2e3,Zo=2001;function eS(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nS(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function p_(){let e=Jo("canvas");return e.style.display="block",e}var l0={},Fa=null;function jo(...e){let t="THREE."+e.shift();Fa?Fa("log",t,...e):console.log(t,...e)}function m_(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function zt(...e){e=m_(e);let t="THREE."+e.shift();if(Fa)Fa("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Vt(...e){e=m_(e);let t="THREE."+e.shift();if(Fa)Fa("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Fr(...e){let t=e.join(" ");t in l0||(l0[t]=!0,zt(...e))}function g_(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var __={[jl]:Ql,[th]:ih,[eh]:sh,[Ua]:nh,[Ql]:jl,[ih]:th,[sh]:eh,[nh]:Ua},Qi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],h0=1234567,Wo=Math.PI/180,Oa=180/Math.PI;function Rs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[e&255]+Pn[e>>8&255]+Pn[e>>16&255]+Pn[e>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function re(e,t,n){return Math.max(t,Math.min(n,e))}function op(e,t){return(e%t+t)%t}function iS(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function sS(e,t,n){return e!==t?(n-e)/(t-e):0}function Xo(e,t,n){return(1-n)*e+n*t}function rS(e,t,n,i){return Xo(e,t,1-Math.exp(-n*i))}function aS(e,t=1){return t-Math.abs(op(e,t*2)-t)}function oS(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function cS(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function lS(e,t){return e+Math.floor(Math.random()*(t-e+1))}function hS(e,t){return e+Math.random()*(t-e)}function uS(e){return e*(.5-Math.random())}function dS(e){e!==void 0&&(h0=e);let t=h0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fS(e){return e*Wo}function pS(e){return e*Oa}function mS(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function gS(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function _S(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function xS(e,t,n,i,s){let r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":e.set(o*h,c*d,c*u,o*l);break;case"YZY":e.set(c*u,o*h,c*d,o*l);break;case"ZXZ":e.set(c*d,c*u,o*h,o*l);break;case"XZX":e.set(o*h,c*g,c*f,o*l);break;case"YXY":e.set(c*f,o*h,c*g,o*l);break;case"ZYZ":e.set(c*g,c*f,o*h,o*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cn={DEG2RAD:Wo,RAD2DEG:Oa,generateUUID:Rs,clamp:re,euclideanModulo:op,mapLinear:iS,inverseLerp:sS,lerp:Xo,damp:rS,pingpong:aS,smoothstep:oS,smootherstep:cS,randInt:lS,randFloat:hS,randFloatSpread:uS,seededRandom:dS,degToRad:fS,radToDeg:pS,isPowerOfTwo:mS,ceilPowerOfTwo:gS,floorPowerOfTwo:_S,setQuaternionFromProperEuler:xS,normalize:be,denormalize:Fi},dp=class dp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dp.prototype.isVector2=!0;var Xt=dp,En=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[n]=o*g+h*d+c*f-l*u,t[n+1]=c*g+h*u+l*d-o*f,t[n+2]=l*g+h*f+o*u-c*d,t[n+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-n;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fp=class fp{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(u0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(u0.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cf.copy(this).projectOnVector(t),this.sub(cf)}reflect(t){return this.sub(cf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;var U=fp,cf=new U,u0=new En,pp=class pp{constructor(t,n,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l)}set(t,n,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],T=s[4],S=s[7],b=s[2],w=s[5],R=s[8];return r[0]=a*v+o*M+c*b,r[3]=a*m+o*T+c*w,r[6]=a*p+o*S+c*R,r[1]=l*v+h*M+d*b,r[4]=l*m+h*T+d*w,r[7]=l*p+h*S+d*R,r[2]=u*v+f*M+g*b,r[5]=u*m+f*T+g*w,r[8]=u*p+f*S+g*R,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return n*a*h-n*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=n*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*l-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*n-s*c)*v,t[5]=(s*r-o*n)*v,t[6]=f*v,t[7]=(i*c-l*n)*v,t[8]=(a*n-i*r)*v,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return Fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lf.makeScale(t,n)),this}rotate(t){return Fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lf.makeRotation(-t)),this}translate(t,n){return Fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};pp.prototype.isMatrix3=!0;var Ht=pp,lf=new Ht,d0=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f0=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yS(){let e={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Na(s.r),s.g=Na(s.g),s.b=Na(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[qo]:{primaries:t,whitePoint:i,transfer:Ko,toXYZ:d0,fromXYZ:f0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:d0,fromXYZ:f0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var se=yS();function Cs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Na(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _a,oh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_a===void 0&&(_a=Jo("canvas")),_a.width=t.width,_a.height=t.height;let s=_a.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=_a}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let n=Jo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vS=0,Ba=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame!="undefined"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hf(s[a].image)):r.push(hf(s[a]))}else r=hf(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function hf(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?oh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var SS=0,uf=new U,vn=class e extends Qi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ji,s=Ji,r=on,a=Mi,o=bi,c=ci,l=e.DEFAULT_ANISOTROPY,h=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Rs(),this.name="",this.source=new Ba(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){zt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Zf;vn.DEFAULT_ANISOTROPY=1;var mp=class mp{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let T=(l+1)/2,S=(f+1)/2,b=(p+1)/2,w=(h+u)/4,R=(d+v)/4,x=(g+m)/4;return T>S&&T>b?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=R/i):S>b?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this.w=re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this.w=re(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mp.prototype.isVector4=!0;var Ge=mp,ch=class extends Qi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new vn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Ba(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends ch{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Qo=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lh=class extends vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rh=class Rh{constructor(t,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m)}set(t,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rh().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/xa.setFromMatrixColumn(t,0).length(),r=1/xa.setFromMatrixColumn(t,1).length(),a=1/xa.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=f+g*l,n[5]=u-v*l,n[9]=-o*c,n[2]=v-u*l,n[6]=g+f*l,n[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;n[0]=u+v*o,n[4]=g*o-f,n[8]=a*l,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=f*o-g,n[6]=v+u*o,n[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;n[0]=u-v*o,n[4]=-a*d,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*h,n[9]=v-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;n[0]=c*h,n[4]=g*l-f,n[8]=u*l+v,n[1]=c*d,n[5]=v*l+u,n[9]=f*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=v-u*d,n[8]=g*d+f,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=f*d+g,n[10]=u-v*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=u*d+v,n[5]=a*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=o*h,n[10]=v*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,bS)}lookAt(t,n,i){let s=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),tr.crossVectors(i,si),tr.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),tr.crossVectors(i,si)),tr.normalize(),Tl.crossVectors(si,tr),s[0]=tr.x,s[4]=Tl.x,s[8]=si.x,s[1]=tr.y,s[5]=Tl.y,s[9]=si.y,s[2]=tr.z,s[6]=Tl.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],T=i[7],S=i[11],b=i[15],w=s[0],R=s[4],x=s[8],E=s[12],C=s[1],L=s[5],F=s[9],G=s[13],N=s[2],H=s[6],$=s[10],Z=s[14],st=s[3],Y=s[7],tt=s[11],it=s[15];return r[0]=a*w+o*C+c*N+l*st,r[4]=a*R+o*L+c*H+l*Y,r[8]=a*x+o*F+c*$+l*tt,r[12]=a*E+o*G+c*Z+l*it,r[1]=h*w+d*C+u*N+f*st,r[5]=h*R+d*L+u*H+f*Y,r[9]=h*x+d*F+u*$+f*tt,r[13]=h*E+d*G+u*Z+f*it,r[2]=g*w+v*C+m*N+p*st,r[6]=g*R+v*L+m*H+p*Y,r[10]=g*x+v*F+m*$+p*tt,r[14]=g*E+v*G+m*Z+p*it,r[3]=M*w+T*C+S*N+b*st,r[7]=M*R+T*L+S*H+b*Y,r[11]=M*x+T*F+S*$+b*tt,r[15]=M*E+T*G+S*Z+b*it,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],M=c*f-l*u,T=o*f-l*d,S=o*u-c*d,b=a*f-l*h,w=a*u-c*h,R=a*d-o*h;return n*(v*M-m*T+p*S)-i*(g*M-m*b+p*w)+s*(g*T-v*b+p*R)-r*(g*S-v*w+m*R)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return n*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=n*o-i*a,T=n*c-s*a,S=n*l-r*a,b=i*c-s*o,w=i*l-r*o,R=s*l-r*c,x=h*v-d*g,E=h*m-u*g,C=h*p-f*g,L=d*m-u*v,F=d*p-f*v,G=u*p-f*m,N=M*G-T*F+S*L+b*C-w*E+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return t[0]=(o*G-c*F+l*L)*H,t[1]=(s*F-i*G-r*L)*H,t[2]=(v*R-m*w+p*b)*H,t[3]=(u*w-d*R-f*b)*H,t[4]=(c*C-a*G-l*E)*H,t[5]=(n*G-s*C+r*E)*H,t[6]=(m*S-g*R-p*T)*H,t[7]=(h*R-u*S+f*T)*H,t[8]=(a*F-o*C+l*x)*H,t[9]=(i*C-n*F-r*x)*H,t[10]=(g*w-v*S+p*M)*H,t[11]=(d*S-h*w-f*M)*H,t[12]=(o*E-a*L-c*x)*H,t[13]=(n*L-i*E+s*x)*H,t[14]=(v*T-g*b-m*M)*H,t[15]=(h*b-d*T+u*M)*H,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,M=c*l,T=c*h,S=c*d,b=i.x,w=i.y,R=i.z;return s[0]=(1-(v+p))*b,s[1]=(f+S)*b,s[2]=(g-T)*b,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(u+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+T)*R,s[9]=(m-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=xa.set(s[0],s[1],s[2]).length(),o=xa.set(s[4],s[5],s[6]).length(),c=xa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Li.copy(this);let l=1/a,h=1/o,d=1/c;return Li.elements[0]*=l,Li.elements[1]*=l,Li.elements[2]*=l,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,n.setFromRotationMatrix(Li),i.x=a,i.y=o,i.z=c,this}makePerspective(t,n,i,s,r,a,o=Oi,c=!1){let l=this.elements,h=2*r/(n-t),d=2*r/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Oi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Zo)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Oi,c=!1){let l=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Oi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Zo)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Rh.prototype.isMatrix4=!0;var Re=Rh,xa=new U,Li=new Re,MS=new U(0,0,0),bS=new U(1,1,1),tr=new U,Tl=new U,si=new U,p0=new Re,m0=new En,Bi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return p0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return m0.setFromEuler(this),this.setFromQuaternion(m0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ES=0,g0=new U,ya=new En,Ms=new Re,Al=new U,Oo=new U,wS=new U,TS=new En,_0=new U(1,0,0),x0=new U(0,1,0),y0=new U(0,0,1),v0={type:"added"},AS={type:"removed"},va={type:"childadded",child:null},df={type:"childremoved",child:null},Nn=class e extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Bi,i=new En,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ht}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ya.setFromAxisAngle(t,n),this.quaternion.multiply(ya),this}rotateOnWorldAxis(t,n){return ya.setFromAxisAngle(t,n),this.quaternion.premultiply(ya),this}rotateX(t){return this.rotateOnAxis(_0,t)}rotateY(t){return this.rotateOnAxis(x0,t)}rotateZ(t){return this.rotateOnAxis(y0,t)}translateOnAxis(t,n){return g0.copy(t).applyQuaternion(this.quaternion),this.position.add(g0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_0,t)}translateY(t){return this.translateOnAxis(x0,t)}translateZ(t){return this.translateOnAxis(y0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Al.copy(t):Al.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Oo,Al,this.up):Ms.lookAt(Al,Oo,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),ya.setFromRotationMatrix(Ms),this.quaternion.premultiply(ya.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v0),va.child=t,this.dispatchEvent(va),va.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(AS),df.child=t,this.dispatchEvent(df),df.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v0),va.child=t,this.dispatchEvent(va),va.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,wS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,TS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(n){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new U(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},RS={type:"move"},za=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=n.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function ff(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=se.workingColorSpace){if(t=op(t,1),n=re(n,0,1),i=re(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=ff(a,r,t+1/3),this.g=ff(a,r,t),this.b=ff(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ze){let i=x_[t.toLowerCase()];return i!==void 0?this.setHex(i,n):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return se.workingToColorSpace(Ln.copy(this),t),Math.round(re(Ln.r*255,0,255))*65536+Math.round(re(Ln.g*255,0,255))*256+Math.round(re(Ln.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.workingToColorSpace(Ln.copy(this),n);let i=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=se.workingColorSpace){return se.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ze){se.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,i=Ln.g,s=Ln.b;return t!==ze?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(er),this.setHSL(er.h+t,er.s+n,er.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(er),t.getHSL(Rl);let i=Xo(er.h,Rl.h,n),s=Xo(er.s,Rl.s,n),r=Xo(er.l,Rl.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new qt;qt.NAMES=x_;var tc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ec=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Di=new U,bs=new U,pf=new U,Es=new U,Sa=new U,Ma=new U,S0=new U,mf=new U,gf=new U,_f=new U,xf=new Ge,yf=new Ge,vf=new Ge,As=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Di.subVectors(t,n),s.cross(Di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Di.subVectors(s,n),bs.subVectors(i,n),pf.subVectors(t,n);let a=Di.dot(Di),o=Di.dot(bs),c=Di.dot(pf),l=bs.dot(bs),h=bs.dot(pf),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(t,n,i,s,r,a,o,c){return this.getBarycoord(t,n,i,s,Es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Es.x),c.addScaledVector(a,Es.y),c.addScaledVector(o,Es.z),c)}static getInterpolatedAttribute(t,n,i,s,r,a){return xf.setScalar(0),yf.setScalar(0),vf.setScalar(0),xf.fromBufferAttribute(t,n),yf.fromBufferAttribute(t,i),vf.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xf,r.x),a.addScaledVector(yf,r.y),a.addScaledVector(vf,r.z),a}static isFrontFacing(t,n,i,s){return Di.subVectors(i,n),bs.subVectors(t,n),Di.cross(bs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Di.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,o;Sa.subVectors(s,i),Ma.subVectors(r,i),mf.subVectors(t,i);let c=Sa.dot(mf),l=Ma.dot(mf);if(c<=0&&l<=0)return n.copy(i);gf.subVectors(t,s);let h=Sa.dot(gf),d=Ma.dot(gf);if(h>=0&&d<=h)return n.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Sa,a);_f.subVectors(t,r);let f=Sa.dot(_f),g=Ma.dot(_f);if(g>=0&&f<=g)return n.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Ma,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return S0.subVectors(r,s),o=(d-h)/(d-h+(f-g)),n.copy(s).addScaledVector(S0,o);let p=1/(m+v+u);return a=v*p,o=u*p,n.copy(i).addScaledVector(Sa,a).addScaledVector(Ma,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rr=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(r,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),Il.subVectors(this.max,Bo),ba.subVectors(t.a,Bo),Ea.subVectors(t.b,Bo),wa.subVectors(t.c,Bo),nr.subVectors(Ea,ba),ir.subVectors(wa,Ea),Lr.subVectors(ba,wa);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Lr.z,Lr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Lr.z,0,-Lr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Lr.y,Lr.x,0];return!Sf(n,ba,Ea,wa,Il)||(n=[1,0,0,0,1,0,0,0,1],!Sf(n,ba,Ea,wa,Il))?!1:(Pl.crossVectors(nr,ir),n=[Pl.x,Pl.y,Pl.z],Sf(n,ba,Ea,wa,Il))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new U,new U,new U,new U,new U,new U,new U,new U],Ni=new U,Cl=new rr,ba=new U,Ea=new U,wa=new U,nr=new U,ir=new U,Lr=new U,Bo=new U,Il=new U,Pl=new U,Dr=new U;function Sf(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Dr.fromArray(e,r);let o=s.x*Math.abs(Dr.x)+s.y*Math.abs(Dr.y)+s.z*Math.abs(Dr.z),c=t.dot(Dr),l=n.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var rn=new U,Ll=new Xt,CS=0,an=class extends Qi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=rp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(t),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=be(n,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=be(n,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=class extends an{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ic=class extends an{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var vi=class extends an{constructor(t,n,i){super(new Float32Array(t),n,i)}},IS=new rr,ko=new U,Mf=new U,Or=class{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):IS.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);let n=ko.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Mf)),this.expandByPoint(ko.copy(t.center).sub(Mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},PS=0,yi=new Re,bf=new Nn,Ta=new U,ri=new rr,zo=new rr,xn=new U,Un=class e extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eS(t)?ic:nc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,i){return yi.makeTranslation(t,n,i),this.applyMatrix4(yi),this}scale(t,n,i){return yi.makeScale(t,n,i),this.applyMatrix4(yi),this}lookAt(t){return bf.lookAt(t),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];zo.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ri.min,zo.min),ri.expandByPoint(xn),xn.addVectors(ri.max,zo.max),ri.expandByPoint(xn)):(ri.expandByPoint(zo.min),ri.expandByPoint(zo.max))}ri.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xn.fromBufferAttribute(o,l),c&&(Ta.fromBufferAttribute(t,l),xn.add(Ta)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new U,c[x]=new U;let l=new U,h=new U,d=new U,u=new Xt,f=new Xt,g=new Xt,v=new U,m=new U;function p(x,E,C){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(v),o[E].add(v),o[C].add(v),c[x].add(m),c[E].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){let C=M[x],L=C.start,F=C.count;for(let G=L,N=L+F;G<N;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let T=new U,S=new U,b=new U,w=new U;function R(x){b.fromBufferAttribute(s,x),w.copy(b);let E=o[x];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(w,E);let L=S.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,E=M.length;x<E;++x){let C=M[x],L=C.start,F=C.count;for(let G=L,N=L+F;G<N;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new an(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);n.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=rp,this.updateRanges=[],this.version=0,this.uuid=Rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},Vn=new U,sc=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Vn.fromBufferAttribute(this,n),Vn.applyMatrix4(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Vn.fromBufferAttribute(this,n),Vn.applyNormalMatrix(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Vn.fromBufferAttribute(this,n),Vn.transformDirection(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=be(n,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=be(n,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new an(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ef=new U,LS=new U,DS=new Ht,Ui=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Ef.subVectors(i,n).cross(LS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Ef),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||DS.getNormalMatrix(t),s=this.coplanarPoint(Ef).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},NS=0,Is=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=zr,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Vf,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jl,this.stencilZFail=Jl,this.stencilZPass=Jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){zt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ar=class extends Is{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Aa,Vo=new U,Ra=new U,Ca=new U,Ia=new Xt,Ho=new Xt,y_=new Re,Dl=new U,Go=new U,Nl=new U,M0=new Xt,wf=new Xt,b0=new Xt,Br=class extends Nn{constructor(t=new ar){if(super(),this.isSprite=!0,this.type="Sprite",Aa===void 0){Aa=new Un;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hh(n,5);Aa.setIndex([0,1,2,0,2,3]),Aa.setAttribute("position",new sc(i,3,0,!1)),Aa.setAttribute("uv",new sc(i,2,3,!1))}this.geometry=Aa,this.material=t,this.center=new Xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ra.setFromMatrixScale(this.matrixWorld),y_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ca.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ra.multiplyScalar(-Ca.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ul(Dl.set(-.5,-.5,0),Ca,a,Ra,s,r),Ul(Go.set(.5,-.5,0),Ca,a,Ra,s,r),Ul(Nl.set(.5,.5,0),Ca,a,Ra,s,r),M0.set(0,0),wf.set(1,0),b0.set(1,1);let o=t.ray.intersectTriangle(Dl,Go,Nl,!1,Vo);if(o===null&&(Ul(Go.set(-.5,.5,0),Ca,a,Ra,s,r),wf.set(0,1),o=t.ray.intersectTriangle(Dl,Nl,Go,!1,Vo),o===null))return;let c=t.ray.origin.distanceTo(Vo);c<t.near||c>t.far||n.push({distance:c,point:Vo.clone(),uv:As.getInterpolation(Vo,Dl,Go,Nl,M0,wf,b0,new Xt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ul(e,t,n,i,s,r){Ia.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Ho.x=r*Ia.x-s*Ia.y,Ho.y=s*Ia.x+r*Ia.y):Ho.copy(Ia),e.copy(t),e.x+=Ho.x,e.y+=Ho.y,e.applyMatrix4(y_)}var Ts=new U,Tf=new U,Fl=new U,Ol=new U,Va=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ts)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ts.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ts.copy(this.origin).addScaledVector(this.direction,n),Ts.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Tf.copy(t).add(n).multiplyScalar(.5),Fl.copy(n).sub(t).normalize(),Ol.copy(this.origin).sub(Tf);let r=t.distanceTo(n)*.5,a=-this.direction.dot(Fl),o=Ol.dot(this.direction),c=-Ol.dot(Fl),l=Ol.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tf).addScaledVector(Fl,u),f}intersectSphere(t,n){if(t.radius<0)return null;Ts.subVectors(t.center,this.origin);let i=Ts.dot(this.direction),s=Ts.dot(Ts)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ts)!==null}intersectTriangle(t,n,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=n.x-a.x,v=n.y-a.y,m=n.z-a.z,p=i.x-a.x,M=i.y-a.y,T=i.z-a.z,S=Math.abs(c),b=Math.abs(l),w=Math.abs(h),R,x,E,C,L,F,G,N,H,$,Z,st;if(S>=b&&S>=w?(E=c,F=d,H=g,st=p,c>=0?(R=l,x=h,C=u,L=f,G=v,N=m,$=M,Z=T):(R=h,x=l,C=f,L=u,G=m,N=v,$=T,Z=M)):b>=w?(E=l,F=u,H=v,st=M,l>=0?(R=h,x=c,C=f,L=d,G=m,N=g,$=T,Z=p):(R=c,x=h,C=d,L=f,G=g,N=m,$=p,Z=T)):(E=h,F=f,H=m,st=T,h>=0?(R=c,x=l,C=d,L=u,G=g,N=v,$=p,Z=M):(R=l,x=c,C=u,L=d,G=v,N=g,$=M,Z=p)),E===0)return null;let Y=R/E,tt=x/E,it=1/E,Bt=C-Y*F,Nt=L-tt*F,Ie=G-Y*H,ce=N-tt*H,_e=$-Y*st,q=Z-tt*st,Q=_e*ce-q*Ie,Mt=Bt*q-Nt*_e,Wt=Ie*Nt-ce*Bt;if(s){if(Q<0||Mt<0||Wt<0)return null}else if((Q<0||Mt<0||Wt<0)&&(Q>0||Mt>0||Wt>0))return null;let vt=Q+Mt+Wt;if(vt===0)return null;let te=it*(Q*F+Mt*H+Wt*st);return(vt>0?te<0:te>0)?null:this.at(te/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},E0=new Re,Nr=new Va,Bl=new Or,w0=new U,kl=new U,zl=new U,Vl=new U,Af=new U,Hl=new U,T0=new U,Gl=new U,Sn=class extends Nn{constructor(t=new Un,n=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Hl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Af.fromBufferAttribute(d,t),a?Hl.addScaledVector(Af,h):Hl.addScaledVector(Af.sub(n),h))}n.add(Hl)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Nr.copy(t.ray).recast(t.near),!(Bl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Bl,w0)===null||Nr.origin.distanceToSquared(w0)>(t.far-t.near)**2))&&(E0.copy(r).invert(),Nr.copy(t.ray).applyMatrix4(E0),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Nr)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=T;S<b;S+=3){let w=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);s=Wl(this,p,t,i,l,h,d,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=Wl(this,a,t,i,l,h,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=T;S<b;S+=3){let w=S,R=S+1,x=S+2;s=Wl(this,p,t,i,l,h,d,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,T=m+1,S=m+2;s=Wl(this,a,t,i,l,h,d,M,T,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function US(e,t,n,i,s,r,a,o){let c;if(t.side===Fn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===dr,o),c===null)return null;Gl.copy(o),Gl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Gl);return l<n.near||l>n.far?null:{distance:l,point:Gl.clone(),object:e}}function Wl(e,t,n,i,s,r,a,o,c,l){e.getVertexPosition(o,kl),e.getVertexPosition(c,zl),e.getVertexPosition(l,Vl);let h=US(e,t,n,i,kl,zl,Vl,T0);if(h){let d=new U;As.getBarycoord(T0,kl,zl,Vl,d),s&&(h.uv=As.getInterpolatedAttribute(s,o,c,l,d,new Xt)),r&&(h.uv1=As.getInterpolatedAttribute(r,o,c,l,d,new Xt)),a&&(h.normal=As.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};As.getNormal(kl,zl,Vl,u.normal),h.face=u,h.barycoord=d}return h}var uh=class extends vn{constructor(t=null,n=1,i=1,s,r,a,o,c,l=yn,h=yn,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=new Or,FS=new Xt(.5,.5),Xl=new U,rc=class{constructor(t=new Ui,n=new Ui,i=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Oi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],T=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,p-g,b-M).normalize(),s[1].setComponents(l+a,f+h,p+g,b+M).normalize(),s[2].setComponents(l+o,f+d,p+v,b+T).normalize(),s[3].setComponents(l-o,f-d,p-v,b-T).normalize(),i)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,f-u,p-m,b-S).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-S).normalize(),n===Oi)s[5].setComponents(l+c,f+u,p+m,b+S).normalize();else if(n===Zo)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);let n=FS.distanceTo(t.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Xl.x=s.normal.x>0?t.max.x:t.min.x,Xl.y=s.normal.y>0?t.max.y:t.min.y,Xl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},A0=new Re,Df=new Va,$l=new Or,Yl=new U,kr=class extends Nn{constructor(t=new Un,n=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),$l.radius+=r,t.ray.intersectsSphere($l)===!1)return;A0.copy(s).invert(),Df.copy(t.ray).applyMatrix4(A0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=l.getX(g);Yl.fromBufferAttribute(d,m),R0(Yl,m,c,s,t,n,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Yl.fromBufferAttribute(d,g),R0(Yl,g,c,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function R0(e,t,n,i,s,r,a){let o=Df.distanceSqToPoint(e);if(o<n){let c=new U;Df.closestPointToPoint(e,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ac=class extends vn{constructor(t=[],n=fr,i,s,r,a,o,c,l,h){super(t,n,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zn=class extends vn{constructor(t,n,i,s,r,a,o,c,l){super(t,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cr=class extends vn{constructor(t,n,i=zi,s,r,a,o=yn,c=yn,l,h=ji,d=1){if(h!==ji&&h!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ba(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},dh=class extends cr{constructor(t,n=zi,i=fr,s,r,a=yn,o=yn,c,l=ji){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oc=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ha=class e extends Un{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,t,a,r,0),g("z","y","x",1,-1,i,n,-t,a,r,1),g("x","z","y",1,1,t,i,n,s,a,2),g("x","z","y",1,-1,t,i,-n,s,a,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vi(l,3)),this.setAttribute("normal",new vi(h,3)),this.setAttribute("uv",new vi(d,2));function g(v,m,p,M,T,S,b,w,R,x,E){let C=S/R,L=b/x,F=S/2,G=b/2,N=w/2,H=R+1,$=x+1,Z=0,st=0,Y=new U;for(let tt=0;tt<$;tt++){let it=tt*L-G;for(let Bt=0;Bt<H;Bt++){let Nt=Bt*C-F;Y[v]=Nt*M,Y[m]=it*T,Y[p]=N,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Bt/R),d.push(1-tt/x),Z+=1}}for(let tt=0;tt<x;tt++)for(let it=0;it<R;it++){let Bt=u+it+H*tt,Nt=u+it+H*(tt+1),Ie=u+(it+1)+H*(tt+1),ce=u+(it+1)+H*tt;c.push(Bt,Nt,ce),c.push(Nt,Ie,ce),st+=6}o.addGroup(f,st,E),f+=st,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ts=class e extends Un{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=n/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let T=0;T<l;T++){let S=T*d-r;g.push(S,-M,0),v.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let T=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),w=M+1+l*p;f.push(T,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(v,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Wr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(C0(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(C0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function On(e){let t={};for(let n=0;n<e.length;n++){let i=Wr(e[n]);for(let s in i)t[s]=i[s]}return t}function C0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function OS(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cp(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var v_={clone:Wr,merge:On},BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=OS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Re().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fh=class extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ph=class extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mh=class extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Rf(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var lr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gh=class extends lr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pf:r=t,o=2*n-i;break;case Lf:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pf:a=t,c=2*i-n;break;case Lf:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*v+.5*g,S=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[l+b]+T*a[c+b]+S*a[d+b];return r}},_h=class extends lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},xh=class extends lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yh=class extends lr{interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-n)/(s-n),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*u+g*2,M=d[p],T=d[p+1],S=t*u+g*2,b=h[S],w=h[S+1],R=VS(i,n,M,b,s);r[g]=S_(R,v,T,w,m)}return r}};function S_(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function zS(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function VS(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=S_(r,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let c=zS(r,t,n,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var oi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(n,this.TimeBufferType),this.values=Pa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Rf(t.settings)&&(i.settings={inTangents:Pa(t.settings.inTangents,Array),outTangents:Pa(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new yh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Yo:n=this.InterpolantFactoryMethodDiscrete;break;case ah:n=this.InterpolantFactoryMethodLinear;break;case Zl:n=this.InterpolantFactoryMethodSmooth;break;case Cf:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return ah;case this.InterpolantFactoryMethodSmooth:return Zl;case this.InterpolantFactoryMethodBezier:return Cf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Rf(this.settings)&&(I0(this.settings.inTangents,t),I0(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Vt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&nS(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let v=n[d+g];if(v!==n[u+g]||v!==n[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)n[c+l]=n[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Rf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function I0(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=ah;var hr=class extends oi{constructor(t,n,i){super(t,n,i)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Yo;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};vh.prototype.ValueTypeName="color";var Sh=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};Sh.prototype.ValueTypeName="number";var Mh=class extends lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(s-n),l=t*o;for(let h=l+o;l!==h;l+=4)En.slerpFlat(r,0,a,l-o,a,l,c);return r}},cc=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};cc.prototype.ValueTypeName="quaternion";cc.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends oi{constructor(t,n,i){super(t,n,i)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Yo;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};bh.prototype.ValueTypeName="vector";var Eh=class{constructor(t,n,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},M_=new Eh,wh=class{constructor(t){this.manager=t!==void 0?t:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ql=new U,Kl=new En,Zi=new U,lc=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ql,Kl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Kl,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ql,Kl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Kl,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sr=new U,P0=new Xt,L0=new Xt,Dn=class extends lc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,n){return this.getViewBounds(t,P0,L0),n.subVectors(L0,P0)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var hc=class extends lc{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var La=-90,Da=1,Th=class extends Nn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(La,Da,t,n);s.layers=this.layers,this.add(s);let r=new Dn(La,Da,t,n);r.layers=this.layers,this.add(r);let a=new Dn(La,Da,t,n);a.layers=this.layers,this.add(a);let o=new Dn(La,Da,t,n);o.layers=this.layers,this.add(o);let c=new Dn(La,Da,t,n);c.layers=this.layers,this.add(c);let l=new Dn(La,Da,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(let l of n)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ah=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lp="\\[\\]\\.:\\/",HS=new RegExp("["+lp+"]","g"),hp="[^"+lp+"]",GS="[^"+lp.replace("\\.","")+"]",WS=/((?:WC+[\/:])*)/.source.replace("WC",hp),XS=/(WCOD+)?/.source.replace("WCOD",GS),$S=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hp),YS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hp),qS=new RegExp("^"+WS+XS+$S+YS+"$"),KS=["material","materials","bones","map"],Nf=class{constructor(t,n,i){let s=i||Fe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Fe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(HS,"")}static parseTrackName(t){let n=qS.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);KS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=n.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Nf;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CC=new Float32Array(1);var D0=new Re,uc=class{constructor(t,n,i=0,s=1/0){this.ray=new Va(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Vt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return D0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(t,n=!0,i=[]){return Uf(t,this,i,n),i.sort(N0),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uf(t[s],this,i,n);return i.sort(N0),i}};function N0(e,t){return e.distance-t.distance}function Uf(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let r=e.children;for(let a=0,o=r.length;a<o;a++)Uf(r[a],t,n,!0)}}var dc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};var gp=class gp{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};gp.prototype.isMatrix2=!0;var Ff=gp;function up(e,t,n,i){let s=ZS(i);switch(n){case ep:return e*t;case ip:return e*t/s.components*s.byteLength;case Uh:return e*t/s.components*s.byteLength;case mr:return e*t*2/s.components*s.byteLength;case Fh:return e*t*2/s.components*s.byteLength;case np:return e*t*3/s.components*s.byteLength;case bi:return e*t*4/s.components*s.byteLength;case Oh:return e*t*4/s.components*s.byteLength;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xc:case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case kh:case Vh:return Math.max(e,16)*Math.max(t,8)/4;case Bh:case zh:return Math.max(e,8)*Math.max(t,8)/2;case Hh:case Gh:case Xh:case $h:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wh:case vc:case Yh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tu:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nu:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case iu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cu:case lu:case hu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case uu:case du:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Sc:case fu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZS(e){switch(e){case ci:case Jf:return{byteLength:1,components:1};case Wa:case jf:case Hi:return{byteLength:2,components:1};case Dh:case Nh:return{byteLength:2,components:4};case zi:case Lh:case Vi:return{byteLength:4,components:1};case Qf:case tp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function W_(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function nM(e){let t=new WeakMap;function n(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=e.createBuffer();e.bindBuffer(c,u),e.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(e.bindBuffer(l,o),d.length===0)e.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];e.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:iM,alphahash_pars_fragment:sM,alphamap_fragment:rM,alphamap_pars_fragment:aM,alphatest_fragment:oM,alphatest_pars_fragment:cM,aomap_fragment:lM,aomap_pars_fragment:hM,batching_pars_vertex:uM,batching_vertex:dM,begin_vertex:fM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:xM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:vM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:bM,color_pars_vertex:EM,color_vertex:wM,common:TM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:RM,displacementmap_pars_vertex:CM,displacementmap_vertex:IM,emissivemap_fragment:PM,emissivemap_pars_fragment:LM,colorspace_fragment:DM,colorspace_pars_fragment:NM,envmap_fragment:UM,envmap_common_pars_fragment:FM,envmap_pars_fragment:OM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:KM,envmap_vertex:kM,fog_vertex:zM,fog_pars_vertex:VM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:YM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:JM,lights_phong_fragment:jM,lights_phong_pars_fragment:QM,lights_physical_fragment:tb,lights_physical_pars_fragment:eb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:sb,lightprobes_pars_fragment:rb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:lb,map_fragment:hb,map_pars_fragment:ub,map_particle_fragment:db,map_particle_pars_fragment:fb,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:_b,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:vb,normal_fragment_begin:Sb,normal_fragment_maps:Mb,normal_pars_fragment:bb,normal_pars_vertex:Eb,normal_vertex:wb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Ib,opaque_fragment:Pb,packing:Lb,premultiplied_alpha_fragment:Db,project_vertex:Nb,dithering_fragment:Ub,dithering_pars_fragment:Fb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:zb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Wb,skinning_vertex:Xb,skinnormal_vertex:$b,specularmap_fragment:Yb,specularmap_pars_fragment:qb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Zb,transmission_fragment:Jb,transmission_pars_fragment:jb,uv_pars_fragment:Qb,uv_pars_vertex:t3,uv_vertex:e3,worldpos_vertex:n3,background_vert:i3,background_frag:s3,backgroundCube_vert:r3,backgroundCube_frag:a3,cube_vert:o3,cube_frag:c3,depth_vert:l3,depth_frag:h3,distance_vert:u3,distance_frag:d3,equirect_vert:f3,equirect_frag:p3,linedashed_vert:m3,linedashed_frag:g3,meshbasic_vert:_3,meshbasic_frag:x3,meshlambert_vert:y3,meshlambert_frag:v3,meshmatcap_vert:S3,meshmatcap_frag:M3,meshnormal_vert:b3,meshnormal_frag:E3,meshphong_vert:w3,meshphong_frag:T3,meshphysical_vert:A3,meshphysical_frag:R3,meshtoon_vert:C3,meshtoon_frag:I3,points_vert:P3,points_frag:L3,shadow_vert:D3,shadow_frag:N3,sprite_vert:U3,sprite_frag:F3},pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},is={basic:{uniforms:On([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:On([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:On([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:On([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:On([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:On([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:On([pt.points,pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:On([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:On([pt.common,pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:On([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:On([pt.sprite,pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:On([pt.common,pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:On([pt.lights,pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};is.physical={uniforms:On([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var gu={r:0,b:0,g:0},O3=new Re,X_=new Ht;X_.set(-1,0,0,0,1,0,0,0,1);function B3(e,t,n,i,s,r){let a=new qt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=t.get(T,S)}return T}function g(M){let T=!1,S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(M,T){let S=f(T);S&&(S.isCubeTexture||S.mapping===pc)?(l===void 0&&(l=new Sn(new Ha(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Wr(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O3.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(X_),l.material.toneMapped=se.getTransfer(S.colorSpace)!==Se,(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Sn(new ts(2,2),new ai({name:"BackgroundMaterial",uniforms:Wr(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=se.getTransfer(S.colorSpace)!==Se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(gu,cp(e)),n.buffers.color.setClear(gu.r,gu.g,gu.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function k3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,F,G,N,H){let $=!1,Z=d(L,N,G,F);r!==Z&&(r=Z,l(r.object)),$=f(L,N,G,H),$&&g(L,N,G,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(L,F,G,N),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return e.createVertexArray()}function l(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,F,G,N){let H=N.wireframe===!0,$=i[F.id];$===void 0&&($={},i[F.id]=$);let Z=L.isInstancedMesh===!0?L.id:0,st=$[Z];st===void 0&&(st={},$[Z]=st);let Y=st[G.id];Y===void 0&&(Y={},st[G.id]=Y);let tt=Y[H];return tt===void 0&&(tt=u(c()),Y[H]=tt),tt}function u(L){let F=[],G=[],N=[];for(let H=0;H<n;H++)F[H]=0,G[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,F,G,N){let H=r.attributes,$=F.attributes,Z=0,st=G.getAttributes();for(let Y in st)if(st[Y].location>=0){let it=H[Y],Bt=$[Y];if(Bt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Bt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Bt=L.instanceColor)),it===void 0||it.attribute!==Bt||Bt&&it.data!==Bt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function g(L,F,G,N){let H={},$=F.attributes,Z=0,st=G.getAttributes();for(let Y in st)if(st[Y].location>=0){let it=$[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let Bt={};Bt.attribute=it,it&&it.data&&(Bt.data=it.data),H[Y]=Bt,Z++}r.attributes=H,r.attributesNum=Z,r.index=N}function v(){let L=r.newAttributes;for(let F=0,G=L.length;F<G;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){let G=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;G[L]=1,N[L]===0&&(e.enableVertexAttribArray(L),N[L]=1),H[L]!==F&&(e.vertexAttribDivisor(L,F),H[L]=F)}function M(){let L=r.newAttributes,F=r.enabledAttributes;for(let G=0,N=F.length;G<N;G++)F[G]!==L[G]&&(e.disableVertexAttribArray(G),F[G]=0)}function T(L,F,G,N,H,$,Z){Z===!0?e.vertexAttribIPointer(L,F,G,H,$):e.vertexAttribPointer(L,F,G,N,H,$)}function S(L,F,G,N){v();let H=N.attributes,$=G.getAttributes(),Z=F.defaultAttributeValues;for(let st in $){let Y=$[st];if(Y.location>=0){let tt=H[st];if(tt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let it=tt.normalized,Bt=tt.itemSize,Nt=t.get(tt);if(Nt===void 0)continue;let Ie=Nt.buffer,ce=Nt.type,_e=Nt.bytesPerElement,q=ce===e.INT||ce===e.UNSIGNED_INT||tt.gpuType===Lh;if(tt.isInterleavedBufferAttribute){let Q=tt.data,Mt=Q.stride,Wt=tt.offset;if(Q.isInstancedInterleavedBuffer){for(let vt=0;vt<Y.locationSize;vt++)p(Y.location+vt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let vt=0;vt<Y.locationSize;vt++)m(Y.location+vt);e.bindBuffer(e.ARRAY_BUFFER,Ie);for(let vt=0;vt<Y.locationSize;vt++)T(Y.location+vt,Bt/Y.locationSize,ce,it,Mt*_e,(Wt+Bt/Y.locationSize*vt)*_e,q)}else{if(tt.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q,tt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Q=0;Q<Y.locationSize;Q++)m(Y.location+Q);e.bindBuffer(e.ARRAY_BUFFER,Ie);for(let Q=0;Q<Y.locationSize;Q++)T(Y.location+Q,Bt/Y.locationSize,ce,it,Bt*_e,Bt/Y.locationSize*Q*_e,q)}}else if(Z!==void 0){let it=Z[st];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(Y.location,it);break;case 3:e.vertexAttrib3fv(Y.location,it);break;case 4:e.vertexAttrib4fv(Y.location,it);break;default:e.vertexAttrib1fv(Y.location,it)}}}}M()}function b(){E();for(let L in i){let F=i[L];for(let G in F){let N=F[G];for(let H in N){let $=N[H];for(let Z in $)h($[Z].object),delete $[Z];delete N[H]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;let F=i[L.id];for(let G in F){let N=F[G];for(let H in N){let $=N[H];for(let Z in $)h($[Z].object),delete $[Z];delete N[H]}}delete i[L.id]}function R(L){for(let F in i){let G=i[F];for(let N in G){let H=G[N];if(H[L.id]===void 0)continue;let $=H[L.id];for(let Z in $)h($[Z].object),delete $[Z];delete H[L.id]}}}function x(L){for(let F in i){let G=i[F],N=L.isInstancedMesh===!0?L.id:0,H=G[N];if(H!==void 0){for(let $ in H){let Z=H[$];for(let st in Z)h(Z[st].object),delete Z[st];delete H[$]}delete G[N],Object.keys(G).length===0&&delete i[F]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function z3(e,t,n){let i;function s(c){i=c}function r(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,h){h!==0&&(e.drawArraysInstanced(i,c,l,h),n.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function V3(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==bi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ci&&R!==Vi&&!x&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:b,samples:w}}function H3(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Ui,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,T=M*4,S=p.clippingState||null;c.value=S,S=h(g,u,T,f);for(let b=0;b!==T;++b)S[b]=n[b];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=f;T!==v;++T,S+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ya=4,G3=6,W3=20,X3=256,Mc=new hc,b_=new qt,_p=null,xp=0,yp=0,vp=!1,$3=new U,Xr=new U,xu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=$3}=r;_p=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_p,xp,yp),this._renderer.xr.enabled=vp,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===fr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_p=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Hi,format:bi,colorSpace:qo,depthBuffer:!1},s=E_(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y3(r)),this._blurMaterial=K3(r,t,n),this._ggxMaterial=q3(r,t,n)}return s}_compileMaterial(t){let n=new Sn(new Un,t);this._renderer.compile(n,Mc)}_sceneToCubeUV(t,n,i,s,r){let c=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(b_),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Ha,new Si({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(b_),p=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;$a(s,S*b,T>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===fr||t.mapping===Gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;$a(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Mc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ya?i-g+Ya:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-n,$a(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Mc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,$a(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Mc)}_blur(t,n,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,n,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ya?s-this._lodMax+Ya:0),u=4*(this._cubeSize-h);$a(n,d,u,3*h,2*h),a.setRenderTarget(n),a.render(c,Mc)}};function Y3(e){let t=[],n=[],i=e,s=e-Ya+1+G3;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,T=p>2?0:-1,S=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(S,f*u*p);for(let b=0;b<u;b++){let w=h[b*2]*2-1,R=h[b*2+1]*2-1;p===0?Xr.set(1,R,w):p===1?Xr.set(-w,1,-R):p===2?Xr.set(-w,R,1):p===3?Xr.set(-1,R,-w):p===4?Xr.set(-w,-1,R):Xr.set(w,R,-1),Xr.toArray(v,(p*u+b)*f)}}let m=new Un;m.setAttribute("position",new an(g,f)),m.setAttribute("outputDirection",new an(v,f)),n.push(new Sn(m,null)),i>Ya&&i--}return{lodMeshes:n,sizeLods:t}}function E_(e,t,n){let i=new Kn(e,t,n);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function q3(e,t,n){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function K3(e,t,n){return new ai({name:"SphericalGaussianBlur",defines:{SAMPLES:W3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function w_(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function T_(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yu=class extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ac(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ha(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:es});r.uniforms.tEquirect.value=n;let a=new Sn(s,r),o=n.minFilter;return n.minFilter===Mi&&(n.minFilter=on),new Th(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}};function Z3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ch||f===Ih)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new yu(g.height);return v.fromEquirectangularTexture(e,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ch||f===Ih,v=f===fr||f===Gr;if(g||v){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new xu(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new xu(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ch?u.mapping=fr:f===Ih&&(u.mapping=Gr),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function J3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Fr("WebGLRenderer: "+i+" extension not supported."),s}}}function j3(e,t,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],e.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let T=0,S=M.length;T<S;T+=3){let b=M[T+0],w=M[T+1],R=M[T+2];u.push(b,w,w,R,R,b)}}else{let M=g.array;v=g.version;for(let T=0,S=M.length/3-1;T<S;T+=3){let b=T+0,w=T+1,R=T+2;u.push(b,w,w,R,R,b)}}let m=new(g.count>=65535?ic:nc)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Q3(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){e.drawElements(i,u,r,d*a),n.update(u,i,1)}function l(d,u,f){f!==0&&(e.drawElementsInstanced(i,u,r,d*a,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function tE(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function eE(e,t,n){let i=new WeakMap,s=new Ge;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let S=o.attributes.position.count*T,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*b*4*d),R=new Qo(w,S,b,d);R.type=Vi,R.needsUpdate=!0;let x=T*4;for(let C=0;C<d;C++){let L=m[C],F=p[C],G=M[C],N=S*b*4*C;for(let H=0;H<L.count;H++){let $=H*x;f===!0&&(s.fromBufferAttribute(L,H),w[N+$+0]=s.x,w[N+$+1]=s.y,w[N+$+2]=s.z,w[N+$+3]=0),g===!0&&(s.fromBufferAttribute(F,H),w[N+$+4]=s.x,w[N+$+5]=s.y,w[N+$+6]=s.z,w[N+$+7]=0),v===!0&&(s.fromBufferAttribute(G,H),w[N+$+8]=s.x,w[N+$+9]=s.y,w[N+$+10]=s.z,w[N+$+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Xt(S,b)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(e,"morphTargetBaseInfluence",g),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function nE(e,t,n,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}var iE={[Gf]:"LINEAR_TONE_MAPPING",[Wf]:"REINHARD_TONE_MAPPING",[Xf]:"CINEON_TONE_MAPPING",[$f]:"ACES_FILMIC_TONE_MAPPING",[qf]:"AGX_TONE_MAPPING",[Kf]:"NEUTRAL_TONE_MAPPING",[Yf]:"CUSTOM_TONE_MAPPING"};function sE(e,t,n,i,s,r){let a=new Kn(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Un;l.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vi([0,2,0,0,2,0],2));let h=new fh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Sn(l,h),u=new hc(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,M=[],T=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let w=0;w<M.length;w++){let R=M[w];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){M=S,T=M.length>0&&M[0].isRenderPass===!0;let b=a.width,w=a.height;M.length>0&&o===null&&(o=new Kn(b,w,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),c=new Kn(b,w,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(b,w)}},this.begin=function(S,b){if(v||S.toneMapping===ki&&M.length===0)return!1;if(p=b,b!==null){let w=b.width,R=b.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return T===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=ki,!0},this.hasRenderPass=function(){return T},this.end=function(S,b){S.toneMapping=m,v=!0;let w=a,R=o;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(S,R,w,b),E.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,h.defines={},se.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let x=iE[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(p),S.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var $_=new vn,bp=new cr(1,1),Y_=new Qo,q_=new lh,K_=new ac,A_=[],R_=[],C_=new Float32Array(16),I_=new Float32Array(9),P_=new Float32Array(4);function Ka(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=A_[s];if(r===void 0&&(r=new Float32Array(s),A_[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function fn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function pn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Mu(e,t){let n=R_[t];n===void 0&&(n=new Int32Array(t),R_[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function rE(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function aE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2fv(this.addr,t),pn(n,t)}}function oE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fn(n,t))return;e.uniform3fv(this.addr,t),pn(n,t)}}function cE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4fv(this.addr,t),pn(n,t)}}function lE(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pn(n,t)}else{if(fn(n,i))return;P_.set(i),e.uniformMatrix2fv(this.addr,!1,P_),pn(n,i)}}function hE(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pn(n,t)}else{if(fn(n,i))return;I_.set(i),e.uniformMatrix3fv(this.addr,!1,I_),pn(n,i)}}function uE(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pn(n,t)}else{if(fn(n,i))return;C_.set(i),e.uniformMatrix4fv(this.addr,!1,C_),pn(n,i)}}function dE(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2iv(this.addr,t),pn(n,t)}}function pE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;e.uniform3iv(this.addr,t),pn(n,t)}}function mE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4iv(this.addr,t),pn(n,t)}}function gE(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _E(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2uiv(this.addr,t),pn(n,t)}}function xE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;e.uniform3uiv(this.addr,t),pn(n,t)}}function yE(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4uiv(this.addr,t),pn(n,t)}}function vE(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(bp.compareFunction=n.isReversedDepthBuffer()?mu:pu,r=bp):r=$_,n.setTexture2D(t||r,s)}function SE(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||q_,s)}function ME(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||K_,s)}function bE(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Y_,s)}function EE(e){switch(e){case 5126:return rE;case 35664:return aE;case 35665:return oE;case 35666:return cE;case 35674:return lE;case 35675:return hE;case 35676:return uE;case 5124:case 35670:return dE;case 35667:case 35671:return fE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return _E;case 36295:return xE;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return bE}}function wE(e,t){e.uniform1fv(this.addr,t)}function TE(e,t){let n=Ka(t,this.size,2);e.uniform2fv(this.addr,n)}function AE(e,t){let n=Ka(t,this.size,3);e.uniform3fv(this.addr,n)}function RE(e,t){let n=Ka(t,this.size,4);e.uniform4fv(this.addr,n)}function CE(e,t){let n=Ka(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function IE(e,t){let n=Ka(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function PE(e,t){let n=Ka(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function LE(e,t){e.uniform1iv(this.addr,t)}function DE(e,t){e.uniform2iv(this.addr,t)}function NE(e,t){e.uniform3iv(this.addr,t)}function UE(e,t){e.uniform4iv(this.addr,t)}function FE(e,t){e.uniform1uiv(this.addr,t)}function OE(e,t){e.uniform2uiv(this.addr,t)}function BE(e,t){e.uniform3uiv(this.addr,t)}function kE(e,t){e.uniform4uiv(this.addr,t)}function zE(e,t,n){let i=this.cache,s=t.length,r=Mu(n,s);fn(i,r)||(e.uniform1iv(this.addr,r),pn(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=bp:a=$_;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function VE(e,t,n){let i=this.cache,s=t.length,r=Mu(n,s);fn(i,r)||(e.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||q_,r[a])}function HE(e,t,n){let i=this.cache,s=t.length,r=Mu(n,s);fn(i,r)||(e.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||K_,r[a])}function GE(e,t,n){let i=this.cache,s=t.length,r=Mu(n,s);fn(i,r)||(e.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Y_,r[a])}function WE(e){switch(e){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return RE;case 35674:return CE;case 35675:return IE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return FE;case 36294:return OE;case 36295:return BE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return GE}}var Ep=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=EE(n.type)}},wp=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WE(n.type)}},Tp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,n[o.id],i)}}},Sp=/(\w+)(\])?(\[|\.)?/g;function L_(e,t){e.seq.push(t),e.map[t.id]=t}function XE(e,t,n){let i=e.name,s=i.length;for(Sp.lastIndex=0;;){let r=Sp.exec(i),a=Sp.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){L_(n,l===void 0?new Ep(o,e,t):new wp(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Tp(o),L_(n,d)),n=d}}}var qa=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(n,a),c=t.getUniformLocation(n,o.name);XE(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function D_(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var $E=37297,YE=0;function qE(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var N_=new Ht;function KE(e){se._getMatrix(N_,se.workingColorSpace,e);let t=`mat3( ${N_.elements.map(n=>n.toFixed(4))} )`;switch(se.getTransfer(e)){case Ko:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function U_(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+qE(e.getShaderSource(t),o)}else return r}function ZE(e,t){let n=KE(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var JE={[Gf]:"Linear",[Wf]:"Reinhard",[Xf]:"Cineon",[$f]:"ACESFilmic",[qf]:"AgX",[Kf]:"Neutral",[Yf]:"Custom"};function jE(e,t){let n=JE[t];return n===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var _u=new U;function QE(){se.getLuminanceCoefficients(_u);let e=_u.x.toFixed(4),t=_u.y.toFixed(4),n=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ec).join(`
`)}function ew(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function nw(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ec(e){return e!==""}function F_(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(e){return e.replace(iw,rw)}var sw=new Map;function rw(e,t){let n=Jt[t];if(n===void 0){let i=sw.get(t);if(i!==void 0)n=Jt[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ap(n)}var aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(e){return e.replace(aw,ow)}function ow(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function k_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var cw={[fc]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function lw(e){return cw[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hw={[fr]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function uw(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":hw[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var dw={[Gr]:"ENVMAP_MODE_REFRACTION"};function fw(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":dw[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pw={[Hf]:"ENVMAP_BLENDING_MULTIPLY",[n_]:"ENVMAP_BLENDING_MIX",[i_]:"ENVMAP_BLENDING_ADD"};function mw(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":pw[e.combine]||"ENVMAP_BLENDING_NONE"}function gw(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function _w(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,c=lw(n),l=uw(n),h=fw(n),d=mw(n),u=gw(n),f=tw(n),g=ew(r),v=s.createProgram(),m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ec).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ec).join(`
`),p.length>0&&(p+=`
`)):(m=[k_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ec).join(`
`),p=[k_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Jt.tonemapping_pars_fragment:"",n.toneMapping!==ki?jE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ZE("linearToOutputTexel",n.outputColorSpace),QE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ec).join(`
`)),a=Ap(a),a=F_(a,n),a=O_(a,n),o=Ap(o),o=F_(o,n),o=O_(o,n),a=B_(a),o=B_(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+m+a,S=M+p+o,b=D_(s,s.VERTEX_SHADER,T),w=D_(s,s.FRAGMENT_SHADER,S);s.attachShader(v,b),s.attachShader(v,w),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(w)||"",H=F.trim(),$=G.trim(),Z=N.trim(),st=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,b,w);else{let tt=U_(s,b,"vertex"),it=U_(s,w,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+tt+`
`+it)}else H!==""?zt("WebGLProgram: Program Info Log:",H):($===""||Z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:st,programLog:H,vertexShader:{log:$,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new qa(s,v),E=nw(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,$E)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YE++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}var xw=0,Rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Cp(t),n.set(t,i)),i}},Cp=class{constructor(t){this.id=xw++,this.code=t,this.usedTimes=0}};function yw(e){return e===mr||e===vc||e===Sc}function vw(e,t,n,i,s,r){let a=new ka,o=new Rp,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,E,C,L,F,G){let N=L.fog,H=F.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||$,Z),Y=st&&st.mapping===pc?st.image.height:null,tt=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Bt=it!==void 0?it.length:0,Nt=0;H.morphAttributes.position!==void 0&&(Nt=1),H.morphAttributes.normal!==void 0&&(Nt=2),H.morphAttributes.color!==void 0&&(Nt=3);let Ie,ce,_e,q;if(tt){let Le=is[tt];Ie=Le.vertexShader,ce=Le.fragmentShader}else{Ie=x.vertexShader,ce=x.fragmentShader;let Le=o.getVertexShaderStage(x),ye=o.getFragmentShaderStage(x);o.update(x,Le,ye),_e=Le.id,q=ye.id}let Q=e.getRenderTarget(),Mt=e.state.buffers.depth.getReversed(),Wt=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,te=!!x.map,dn=!!x.matcap,ee=!!st,pe=!!x.aoMap,Pe=!!x.lightMap,ie=!!x.bumpMap&&x.wireframe===!1,ke=!!x.normalMap,_n=!!x.displacementMap,Yn=!!x.emissiveMap,He=!!x.metalnessMap,nn=!!x.roughnessMap,D=x.anisotropy>0,Cn=x.clearcoat>0,Me=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,V=x.transmission>0,X=D&&!!x.anisotropyMap,at=Cn&&!!x.clearcoatMap,ct=Cn&&!!x.clearcoatNormalMap,K=Cn&&!!x.clearcoatRoughnessMap,j=_&&!!x.iridescenceMap,lt=_&&!!x.iridescenceThicknessMap,Pt=O&&!!x.sheenColorMap,ft=O&&!!x.sheenRoughnessMap,ht=!!x.specularMap,Lt=!!x.specularColorMap,kt=!!x.specularIntensityMap,Yt=V&&!!x.transmissionMap,P=V&&!!x.thicknessMap,ut=!!x.gradientMap,J=!!x.alphaMap,dt=x.alphaTest>0,_t=!!x.alphaHash,nt=!!x.extensions,Ut=ki;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=e.toneMapping);let Ct={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:ce,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&F.instanceColor!==null,instancingMorph:Wt&&F.morphTexture!==null,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:te,matcap:dn,envMap:ee,envMapMode:ee&&st.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:Pe,bumpMap:ie,normalMap:ke,displacementMap:_n,emissiveMap:Yn,normalMapObjectSpace:ke&&x.normalMapType===a_,normalMapTangentSpace:ke&&x.normalMapType===sp,packedNormalMap:ke&&x.normalMapType===sp&&yw(x.normalMap.format),metalnessMap:He,roughnessMap:nn,anisotropy:D,anisotropyMap:X,clearcoat:Cn,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:K,dispersion:Me,retroreflection:A,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:lt,sheen:O,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:ht,specularColorMap:Lt,specularIntensityMap:kt,transmission:V,transmissionMap:Yt,thicknessMap:P,gradientMap:ut,opaque:x.transparent===!1&&x.blending===zr&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:_t,combine:x.combine,mapUv:te&&g(x.map.channel),aoMapUv:pe&&g(x.aoMap.channel),lightMapUv:Pe&&g(x.lightMap.channel),bumpMapUv:ie&&g(x.bumpMap.channel),normalMapUv:ke&&g(x.normalMap.channel),displacementMapUv:_n&&g(x.displacementMap.channel),emissiveMapUv:Yn&&g(x.emissiveMap.channel),metalnessMapUv:He&&g(x.metalnessMap.channel),roughnessMapUv:nn&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:at&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(x.sheenRoughnessMap.channel),specularMapUv:ht&&g(x.specularMap.channel),specularColorMapUv:Lt&&g(x.specularColorMap.channel),specularIntensityMapUv:kt&&g(x.specularIntensityMap.channel),transmissionMapUv:Yt&&g(x.transmissionMap.channel),thicknessMapUv:P&&g(x.thicknessMap.channel),alphaMapUv:J&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ke||D),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(te||J),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ke===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Nt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ut,decodeVideoTexture:te&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===Se,decodeVideoTextureEmissive:Yn&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(E,x),M(E,x),E.push(e.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let E=f[x.type],C;if(E){let L=is[E];C=v_.clone(L.uniforms)}else C=x.uniforms;return C}function S(x,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new _w(e,E,x,s),l.push(C),h.set(E,C)),C}function b(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:R}}function Sw(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,c){e.get(a)[o]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function Mw(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function z_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function V_(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},e[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let T=o(u,f,g,v,m,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):n.push(T)}function l(u,f,g,v,m,p){let M=o(u,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function h(u,f){n.length>1&&n.sort(u||Mw),i.length>1&&i.sort(f||z_),s.length>1&&s.sort(f||z_)}function d(){for(let u=t,f=e.length;u<f;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function bw(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new V_,e.set(i,[a])):s>=r.length?(a=new V_,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ew(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new qt};break;case"SpotLight":n={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function ww(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Tw=0;function Aw(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Rw(e){let t=new Ew,n=ww(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new Re,a=new Re;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,T=0,S=0,b=0,w=0,R=0,x=0,E=0,C=0;l.sort(Aw);for(let F=0,G=l.length;F<G;F++){let N=l[F],H=N.color,$=N.intensity,Z=N.distance,st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===mr?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=H.r*$,d+=H.g*$,u+=H.b*$;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],$);C++}else if(N.isSunLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,it=n.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=st;let Bt=tt.getViewportCount();for(let Nt=0;Nt<Bt;Nt++)i.sunShadowMatrix[v+Nt]=tt.getMatrix(Nt),i.sunShadowCascade[v+Nt]=tt._cascadeData[Nt];v+=Bt,g++}i.sun[f]=Y,f++}else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,it=n.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=N.shadow.matrix,b++}i.directional[m]=Y,m++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar($),Y.distance=Z,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[M]=Y;let tt=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,tt.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[M]=tt.matrix,N.castShadow){let it=n.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=st,R++}M++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(H).multiplyScalar($),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=Y,T++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let tt=N.shadow,it=n.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=st,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=Y,p++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar($),Y.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[S]=Y,S++}}T>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=C,i.version=Tw++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let S=l[M];if(S.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function H_(e){let t=new Rw(e),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(n)}function h(u){t.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Cw(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;return a===void 0?(o=new H_(e),t.set(s,[o])):r>=a.length?(o=new H_(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lw=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Dw=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],G_=new Re,bc=new U,Mp=new U;function Nw(e,t,n){let i=new rc,s=new Xt,r=new Xt,a=new Ge,o=new ph,c=new mh,l={},h=n.maxTextureSize,d={[dr]:Fn,[Fn]:dr,[Hn]:Hn},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Iw,fragmentShader:Pw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Un;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Sn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let p=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===O0&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fc);let E=e.getRenderTarget(),C=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(es),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=w.length;N<H;N++){let $=w[N],Z=$.shadow;if(Z===void 0){zt("WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let st=Z.getFrameExtents();s.multiply(st),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,Z.mapSize.y=r.y));let Y=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Y,Z.map===null||G===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ga){if($.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Kn(s.x,s.y,{format:mr,type:Hi,minFilter:on,magFilter:on,generateMipmaps:!1}),Z.map.texture.name=$.name+".shadowMap",Z.map.depthTexture=new cr(s.x,s.y,Vi),Z.map.depthTexture.name=$.name+".shadowMapDepth",Z.map.depthTexture.format=ji,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=yn,Z.map.depthTexture.magFilter=yn}else $.isPointLight?(Z.map=new yu(s.x),Z.map.depthTexture=new dh(s.x,zi)):(Z.map=new Kn(s.x,s.y),Z.map.depthTexture=new cr(s.x,s.y,zi)),Z.map.depthTexture.name=$.name+".shadowMap",Z.map.depthTexture.format=ji,this.type===fc?(Z.map.depthTexture.compareFunction=Y?mu:pu,Z.map.depthTexture.minFilter=on,Z.map.depthTexture.magFilter=on):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=yn,Z.map.depthTexture.magFilter=yn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let tt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();$.isPointLight!==!0&&Z.updateMatrices($,x);for(let it=0;it<tt;it++){let Bt=Z.getCamera(it);if($.isPointLight){let Nt=Z.camera,Ie=Z.matrix,ce=$.distance||Nt.far;ce!==Nt.far&&(Nt.far=ce,Nt.updateProjectionMatrix()),bc.setFromMatrixPosition($.matrixWorld),Nt.position.copy(bc),Mp.copy(Nt.position),Mp.add(Lw[it]),Nt.up.copy(Dw[it]),Nt.lookAt(Mp),Nt.updateMatrixWorld(),Ie.makeTranslation(-bc.x,-bc.y,-bc.z),G_.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(G_,Nt.coordinateSystem,Nt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,it),e.clear();else{it===0&&(e.setRenderTarget(Z.map),e.clear());let Nt=Z.getViewport(it);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(a)}i=Z.getFrustum(it),S(R,x,Bt,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Ga&&M(Z,x),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(E,C,L)};function M(w,R){let x=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Kn(s.x,s.y,{format:mr,type:Hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,x,f,v,null)}function T(w,R,x,E){let C=null,L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?c:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,G=R.uuid,N=l[F];N===void 0&&(N={},l[F]=N);let H=N[G];H===void 0&&(H=C.clone(),N[G]=H,R.addEventListener("dispose",b)),C=H}if(C.visible=R.visible,C.wireframe=R.wireframe,E===Ga?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=e.properties.get(C);F.light=x}return C}function S(w,R,x,E,C){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Ga)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let G=t.update(w),N=w.material;if(Array.isArray(N)){let H=G.groups;for(let $=0,Z=H.length;$<Z;$++){let st=H[$],Y=N[st.materialIndex];if(Y&&Y.visible){let tt=T(w,Y,E,C);w.onBeforeShadow(e,w,R,x,G,tt,st),e.renderBufferDirect(x,null,G,tt,w,st),w.onAfterShadow(e,w,R,x,G,tt,st)}}}else if(N.visible){let H=T(w,N,E,C);w.onBeforeShadow(e,w,R,x,G,H,null),e.renderBufferDirect(x,null,G,H,w,null),w.onAfterShadow(e,w,R,x,G,H,null)}}let F=w.children;for(let G=0,N=F.length;G<N;G++)S(F[G],R,x,E,C)}function b(w){w.target.removeEventListener("dispose",b);for(let x in l){let E=l[x],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Uw(e,t){function n(){let P=!1,ut=new Ge,J=null,dt=new Ge(0,0,0,0);return{setMask:function(_t){J!==_t&&!P&&(e.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){P=_t},setClear:function(_t,nt,Ut,Ct,Le){Le===!0&&(_t*=Ct,nt*=Ct,Ut*=Ct),ut.set(_t,nt,Ut,Ct),dt.equals(ut)===!1&&(e.clearColor(_t,nt,Ut,Ct),dt.copy(ut))},reset:function(){P=!1,J=null,dt.set(-1,0,0,0)}}}function i(){let P=!1,ut=!1,J=null,dt=null,_t=null;return{setReversed:function(nt){if(ut!==nt){let Ut=t.get("EXT_clip_control");nt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ut=nt;let Ct=_t;_t=null,this.setClear(Ct)}},getReversed:function(){return ut},setTest:function(nt){nt?Q(e.DEPTH_TEST):Mt(e.DEPTH_TEST)},setMask:function(nt){J!==nt&&!P&&(e.depthMask(nt),J=nt)},setFunc:function(nt){if(ut&&(nt=__[nt]),dt!==nt){switch(nt){case jl:e.depthFunc(e.NEVER);break;case Ql:e.depthFunc(e.ALWAYS);break;case th:e.depthFunc(e.LESS);break;case Ua:e.depthFunc(e.LEQUAL);break;case eh:e.depthFunc(e.EQUAL);break;case nh:e.depthFunc(e.GEQUAL);break;case ih:e.depthFunc(e.GREATER);break;case sh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=nt}},setLocked:function(nt){P=nt},setClear:function(nt){_t!==nt&&(_t=nt,ut&&(nt=1-nt),e.clearDepth(nt))},reset:function(){P=!1,J=null,dt=null,_t=null,ut=!1}}}function s(){let P=!1,ut=null,J=null,dt=null,_t=null,nt=null,Ut=null,Ct=null,Le=null;return{setTest:function(ye){P||(ye?Q(e.STENCIL_TEST):Mt(e.STENCIL_TEST))},setMask:function(ye){ut!==ye&&!P&&(e.stencilMask(ye),ut=ye)},setFunc:function(ye,Pi,qi){(J!==ye||dt!==Pi||_t!==qi)&&(e.stencilFunc(ye,Pi,qi),J=ye,dt=Pi,_t=qi)},setOp:function(ye,Pi,qi){(nt!==ye||Ut!==Pi||Ct!==qi)&&(e.stencilOp(ye,Pi,qi),nt=ye,Ut=Pi,Ct=qi)},setLocked:function(ye){P=ye},setClear:function(ye){Le!==ye&&(e.clearStencil(ye),Le=ye)},reset:function(){P=!1,ut=null,J=null,dt=null,_t=null,nt=null,Ut=null,Ct=null,Le=null}}}let r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,T=null,S=null,b=null,w=null,R=null,x=new qt(0,0,0),E=0,C=!1,L=null,F=null,G=null,N=null,H=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,st=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=st>=2);let tt=null,it={},Bt=e.getParameter(e.SCISSOR_BOX),Nt=e.getParameter(e.VIEWPORT),Ie=new Ge().fromArray(Bt),ce=new Ge().fromArray(Nt);function _e(P,ut,J,dt){let _t=new Uint8Array(4),nt=e.createTexture();e.bindTexture(P,nt),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<J;Ut++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,_t):e.texImage2D(ut+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_t);return nt}let q={};q[e.TEXTURE_2D]=_e(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=_e(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=_e(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=_e(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),a.setFunc(Ua),ie(!1),ke(Of),Q(e.CULL_FACE),pe(es);function Q(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function Mt(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function Wt(P,ut){return u[P]!==ut?(e.bindFramebuffer(P,ut),u[P]=ut,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function vt(P,ut){let J=g,dt=!1;if(P){J=f.get(ut),J===void 0&&(J=[],f.set(ut,J));let _t=P.textures;if(J.length!==_t.length||J[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Ut=_t.length;nt<Ut;nt++)J[nt]=e.COLOR_ATTACHMENT0+nt;J.length=_t.length,dt=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,dt=!0);dt&&e.drawBuffers(J)}function te(P){return v!==P?(e.useProgram(P),v=P,!0):!1}let dn={[Hr]:e.FUNC_ADD,[k0]:e.FUNC_SUBTRACT,[z0]:e.FUNC_REVERSE_SUBTRACT};dn[V0]=e.MIN,dn[H0]=e.MAX;let ee={[G0]:e.ZERO,[W0]:e.ONE,[X0]:e.SRC_COLOR,[zf]:e.SRC_ALPHA,[J0]:e.SRC_ALPHA_SATURATE,[K0]:e.DST_COLOR,[Y0]:e.DST_ALPHA,[$0]:e.ONE_MINUS_SRC_COLOR,[Vf]:e.ONE_MINUS_SRC_ALPHA,[Z0]:e.ONE_MINUS_DST_COLOR,[q0]:e.ONE_MINUS_DST_ALPHA,[j0]:e.CONSTANT_COLOR,[Q0]:e.ONE_MINUS_CONSTANT_COLOR,[t_]:e.CONSTANT_ALPHA,[e_]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(P,ut,J,dt,_t,nt,Ut,Ct,Le,ye){if(P===es){m===!0&&(Mt(e.BLEND),m=!1);return}if(m===!1&&(Q(e.BLEND),m=!0),P!==B0){if(P!==p||ye!==C){if((M!==Hr||b!==Hr)&&(e.blendEquation(e.FUNC_ADD),M=Hr,b=Hr),ye)switch(P){case zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vr:e.blendFunc(e.ONE,e.ONE);break;case Bf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case kf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Vt("WebGLState: Invalid blending: ",P);break}else switch(P){case zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Bf:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kf:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",P);break}T=null,S=null,w=null,R=null,x.set(0,0,0),E=0,p=P,C=ye}return}_t=_t||ut,nt=nt||J,Ut=Ut||dt,(ut!==M||_t!==b)&&(e.blendEquationSeparate(dn[ut],dn[_t]),M=ut,b=_t),(J!==T||dt!==S||nt!==w||Ut!==R)&&(e.blendFuncSeparate(ee[J],ee[dt],ee[nt],ee[Ut]),T=J,S=dt,w=nt,R=Ut),(Ct.equals(x)===!1||Le!==E)&&(e.blendColor(Ct.r,Ct.g,Ct.b,Le),x.copy(Ct),E=Le),p=P,C=!1}function Pe(P,ut){P.side===Hn?Mt(e.CULL_FACE):Q(e.CULL_FACE);let J=P.side===Fn;ut&&(J=!J),ie(J),P.blending===zr&&P.transparent===!1?pe(es):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let dt=P.stencilWrite;o.setTest(dt),dt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Yn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):Mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ie(P){L!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),L=P)}function ke(P){P!==U0?(Q(e.CULL_FACE),P!==F&&(P===Of?e.cullFace(e.BACK):P===F0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Mt(e.CULL_FACE),F=P}function _n(P){P!==G&&(Z&&e.lineWidth(P),G=P)}function Yn(P,ut,J){P?(Q(e.POLYGON_OFFSET_FILL),(N!==ut||H!==J)&&(N=ut,H=J,a.getReversed()&&(ut=-ut),e.polygonOffset(ut,J))):Mt(e.POLYGON_OFFSET_FILL)}function He(P){P?Q(e.SCISSOR_TEST):Mt(e.SCISSOR_TEST)}function nn(P){P===void 0&&(P=e.TEXTURE0+$-1),tt!==P&&(e.activeTexture(P),tt=P)}function D(P,ut,J){J===void 0&&(tt===null?J=e.TEXTURE0+$-1:J=tt);let dt=it[J];dt===void 0&&(dt={type:void 0,texture:void 0},it[J]=dt),(dt.type!==P||dt.texture!==ut)&&(tt!==J&&(e.activeTexture(J),tt=J),e.bindTexture(P,ut||q[P]),dt.type=P,dt.texture=ut)}function Cn(){let P=it[tt];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Me(){try{e.compressedTexImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function _(){try{e.texSubImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function O(){try{e.texSubImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function X(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function at(){try{e.texStorage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function ct(){try{e.texStorage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function K(){try{e.texImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function j(){try{e.texImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function lt(P){return d[P]!==void 0?d[P]:e.getParameter(P)}function Pt(P,ut){d[P]!==ut&&(e.pixelStorei(P,ut),d[P]=ut)}function ft(P){Ie.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Ie.copy(P))}function ht(P){ce.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function Lt(P,ut){let J=l.get(ut);J===void 0&&(J=new WeakMap,l.set(ut,J));let dt=J.get(P);dt===void 0&&(dt=e.getUniformBlockIndex(ut,P.name),J.set(P,dt))}function kt(P,ut){let dt=l.get(ut).get(P);c.get(ut)!==dt&&(e.uniformBlockBinding(ut,dt,P.__bindingPointIndex),c.set(ut,dt))}function Yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,it={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,T=null,S=null,b=null,w=null,R=null,x=new qt(0,0,0),E=0,C=!1,L=null,F=null,G=null,N=null,H=null,Ie.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Mt,bindFramebuffer:Wt,drawBuffers:vt,useProgram:te,setBlending:pe,setMaterial:Pe,setFlipSided:ie,setCullFace:ke,setLineWidth:_n,setPolygonOffset:Yn,setScissorTest:He,activeTexture:nn,bindTexture:D,unbindTexture:Cn,compressedTexImage2D:Me,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:Pt,getParameter:lt,updateUBOMapping:Lt,uniformBlockBinding:kt,texStorage2D:at,texStorage3D:ct,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:X,scissor:ft,viewport:ht,reset:Yt}}function Fw(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return g?new OffscreenCanvas(A,_):Jo("canvas")}function m(A,_,O){let V=1,X=Me(A);if((X.width>O||X.height>O)&&(V=O/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let at=Math.floor(V*X.width),ct=Math.floor(V*X.height);u===void 0&&(u=v(at,ct));let K=_?v(at,ct):u;return K.width=at,K.height=ct,K.getContext("2d").drawImage(A,0,0,at,ct),zt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+at+"x"+ct+")."),K}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){e.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(A,_,O,V,X,at=!1){if(A!==null){if(e[A]!==void 0)return e[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===e.RED&&(O===e.FLOAT&&(K=e.R32F),O===e.HALF_FLOAT&&(K=e.R16F),O===e.UNSIGNED_BYTE&&(K=e.R8),O===e.UNSIGNED_SHORT&&ct&&(K=ct.R16_EXT),O===e.SHORT&&ct&&(K=ct.R16_SNORM_EXT)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(K=e.R8UI),O===e.UNSIGNED_SHORT&&(K=e.R16UI),O===e.UNSIGNED_INT&&(K=e.R32UI),O===e.BYTE&&(K=e.R8I),O===e.SHORT&&(K=e.R16I),O===e.INT&&(K=e.R32I)),_===e.RG&&(O===e.FLOAT&&(K=e.RG32F),O===e.HALF_FLOAT&&(K=e.RG16F),O===e.UNSIGNED_BYTE&&(K=e.RG8),O===e.UNSIGNED_SHORT&&ct&&(K=ct.RG16_EXT),O===e.SHORT&&ct&&(K=ct.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(K=e.RG8UI),O===e.UNSIGNED_SHORT&&(K=e.RG16UI),O===e.UNSIGNED_INT&&(K=e.RG32UI),O===e.BYTE&&(K=e.RG8I),O===e.SHORT&&(K=e.RG16I),O===e.INT&&(K=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(K=e.RGB8UI),O===e.UNSIGNED_SHORT&&(K=e.RGB16UI),O===e.UNSIGNED_INT&&(K=e.RGB32UI),O===e.BYTE&&(K=e.RGB8I),O===e.SHORT&&(K=e.RGB16I),O===e.INT&&(K=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),O===e.UNSIGNED_INT&&(K=e.RGBA32UI),O===e.BYTE&&(K=e.RGBA8I),O===e.SHORT&&(K=e.RGBA16I),O===e.INT&&(K=e.RGBA32I)),_===e.RGB&&(O===e.UNSIGNED_SHORT&&ct&&(K=ct.RGB16_EXT),O===e.SHORT&&ct&&(K=ct.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),_===e.RGBA){let j=at?Ko:se.getTransfer(X);O===e.FLOAT&&(K=e.RGBA32F),O===e.HALF_FLOAT&&(K=e.RGBA16F),O===e.UNSIGNED_BYTE&&(K=j===Se?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&ct&&(K=ct.RGBA16_EXT),O===e.SHORT&&ct&&(K=ct.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(A,_){let O;return A?_===null||_===zi||_===Xa?O=e.DEPTH24_STENCIL8:_===Vi?O=e.DEPTH32F_STENCIL8:_===Wa&&(O=e.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===Xa?O=e.DEPTH_COMPONENT24:_===Vi?O=e.DEPTH_COMPONENT32F:_===Wa&&(O=e.DEPTH_COMPONENT16),O}function w(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==yn&&A.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),L(_)}function E(A){let _=i.get(A);if(_.__webglInit===void 0)return;let O=A.source,V=f.get(O);if(V){let X=V[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(A),Object.keys(V).length===0&&f.delete(O)}i.remove(A)}function C(A){let _=i.get(A);e.deleteTexture(_.__webglTexture);let O=A.source,V=f.get(O);delete V[_.__cacheKey],a.memory.textures--}function L(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let X=0;X<_.__webglFramebuffer[V].length;X++)e.deleteFramebuffer(_.__webglFramebuffer[V][X]);else e.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)e.deleteFramebuffer(_.__webglFramebuffer[V]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let V=0,X=O.length;V<X;V++){let at=i.get(O[V]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(O[V])}i.remove(A)}let F=0;function G(){F=0}function N(){return F}function H(A){F=A}function $(){let A=F;return A>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function Z(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function st(A,_){let O=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function Y(A,_){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function tt(A,_){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Mt(O,A,_);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function it(A,_){let O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Wt(O,A,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let Bt={[$o]:e.REPEAT,[Ji]:e.CLAMP_TO_EDGE,[rh]:e.MIRRORED_REPEAT},Nt={[yn]:e.NEAREST,[s_]:e.NEAREST_MIPMAP_NEAREST,[mc]:e.NEAREST_MIPMAP_LINEAR,[on]:e.LINEAR,[Ph]:e.LINEAR_MIPMAP_NEAREST,[Mi]:e.LINEAR_MIPMAP_LINEAR},Ie={[c_]:e.NEVER,[f_]:e.ALWAYS,[l_]:e.LESS,[pu]:e.LEQUAL,[h_]:e.EQUAL,[mu]:e.GEQUAL,[u_]:e.GREATER,[d_]:e.NOTEQUAL};function ce(A,_){if(_.type===Vi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===Ph||_.magFilter===mc||_.magFilter===Mi||_.minFilter===on||_.minFilter===Ph||_.minFilter===mc||_.minFilter===Mi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Bt[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Bt[_.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Bt[_.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Nt[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Nt[_.minFilter]),_.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yn||_.minFilter!==mc&&_.minFilter!==Mi||_.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _e(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let V=_.source,X=f.get(V);X===void 0&&(X={},f.set(V,X));let at=Z(_);if(at!==A.__cacheKey){X[at]===void 0&&(X[at]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[at].usedTimes++;let ct=X[A.__cacheKey];ct!==void 0&&(X[A.__cacheKey].usedTimes--,ct.usedTimes===0&&C(_)),A.__cacheKey=at,A.__webglTexture=X[at].texture}return O}function q(A,_,O){return Math.floor(Math.floor(A/O)/_)}function Q(A,_,O,V){let at=A.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{at.sort((Pt,ft)=>Pt.start-ft.start);let ct=0;for(let Pt=1;Pt<at.length;Pt++){let ft=at[ct],ht=at[Pt],Lt=ft.start+ft.count,kt=q(ht.start,_.width,4),Yt=q(ft.start,_.width,4);ht.start<=Lt+1&&kt===Yt&&q(ht.start+ht.count-1,_.width,4)===kt?ft.count=Math.max(ft.count,ht.start+ht.count-ft.start):(++ct,at[ct]=ht)}at.length=ct+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,ft=at.length;Pt<ft;Pt++){let ht=at[Pt],Lt=Math.floor(ht.start/4),kt=Math.ceil(ht.count/4),Yt=Lt%_.width,P=Math.floor(Lt/_.width),ut=kt,J=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Yt,P,ut,J,O,V,_.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function Mt(A,_,O){let V=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=e.TEXTURE_3D);let X=_e(A,_),at=_.source;n.bindTexture(V,A.__webglTexture,e.TEXTURE0+O);let ct=i.get(at);if(at.version!==ct.__version||X===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let J=se.getPrimaries(se.workingColorSpace),dt=_.colorSpace===Ps?null:se.getPrimaries(_.colorSpace),_t=_.colorSpace===Ps||J===dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=Cn(_,j);let lt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),ft=S(_.internalFormat,lt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);ce(V,_);let ht,Lt=_.mipmaps,kt=_.isVideoTexture!==!0,Yt=ct.__version===void 0||X===!0,P=at.dataReady,ut=w(_,j);if(_.isDepthTexture)ft=b(_.format===pr,_.type),Yt&&(kt?n.texStorage2D(e.TEXTURE_2D,1,ft,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,ft,j.width,j.height,0,lt,Pt,null));else if(_.isDataTexture)if(Lt.length>0){kt&&Yt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,Lt[0].width,Lt[0].height);for(let J=0,dt=Lt.length;J<dt;J++)ht=Lt[J],kt?P&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,Pt,ht.data):n.texImage2D(e.TEXTURE_2D,J,ft,ht.width,ht.height,0,lt,Pt,ht.data);_.generateMipmaps=!1}else kt?(Yt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,j.width,j.height),P&&Q(_,j,lt,Pt)):n.texImage2D(e.TEXTURE_2D,0,ft,j.width,j.height,0,lt,Pt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&Yt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ft,Lt[0].width,Lt[0].height,j.depth);for(let J=0,dt=Lt.length;J<dt;J++)if(ht=Lt[J],_.format!==bi)if(lt!==null)if(kt){if(P)if(_.layerUpdates.size>0){let _t=up(ht.width,ht.height,_.format,_.type);for(let nt of _.layerUpdates){let Ut=ht.data.subarray(nt*_t/ht.data.BYTES_PER_ELEMENT,(nt+1)*_t/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,nt,ht.width,ht.height,1,lt,Ut)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,lt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,ft,ht.width,ht.height,j.depth,0,ht.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,lt,Pt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,ft,ht.width,ht.height,j.depth,0,lt,Pt,ht.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{kt&&Yt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,Lt[0].width,Lt[0].height);for(let J=0,dt=Lt.length;J<dt;J++)ht=Lt[J],_.format!==bi?lt!==null?kt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,J,ft,ht.width,ht.height,0,ht.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?P&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,Pt,ht.data):n.texImage2D(e.TEXTURE_2D,J,ft,ht.width,ht.height,0,lt,Pt,ht.data)}else if(_.isDataArrayTexture)if(kt){if(Yt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ft,j.width,j.height,j.depth),P)if(_.layerUpdates.size>0){let J=up(j.width,j.height,_.format,_.type);for(let dt of _.layerUpdates){let _t=j.data.subarray(dt*J/j.data.BYTES_PER_ELEMENT,(dt+1)*J/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,dt,j.width,j.height,1,lt,Pt,_t)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,lt,Pt,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ft,j.width,j.height,j.depth,0,lt,Pt,j.data);else if(_.isData3DTexture)kt?(Yt&&n.texStorage3D(e.TEXTURE_3D,ut,ft,j.width,j.height,j.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,lt,Pt,j.data)):n.texImage3D(e.TEXTURE_3D,0,ft,j.width,j.height,j.depth,0,lt,Pt,j.data);else if(_.isFramebufferTexture){if(Yt)if(kt)n.texStorage2D(e.TEXTURE_2D,ut,ft,j.width,j.height);else{let J=j.width,dt=j.height;for(let _t=0;_t<ut;_t++)n.texImage2D(e.TEXTURE_2D,_t,ft,J,dt,0,lt,Pt,null),J>>=1,dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),d.add(_),J.onpaint=dt=>{let _t=dt.changedElements;for(let nt of d)_t.includes(nt.image)&&(nt.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,j);else{let _t=e.RGBA,nt=e.RGBA,Ut=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,_t,nt,Ut,j)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(kt&&Yt){let J=Me(Lt[0]);n.texStorage2D(e.TEXTURE_2D,ut,ft,J.width,J.height)}for(let J=0,dt=Lt.length;J<dt;J++)ht=Lt[J],kt?P&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,lt,Pt,ht):n.texImage2D(e.TEXTURE_2D,J,ft,lt,Pt,ht);_.generateMipmaps=!1}else if(kt){if(Yt){let J=Me(j);n.texStorage2D(e.TEXTURE_2D,ut,ft,J.width,J.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,Pt,j)}else n.texImage2D(e.TEXTURE_2D,0,ft,lt,Pt,j);p(_)&&M(V),ct.__version=at.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Wt(A,_,O){if(_.image.length!==6)return;let V=_e(A,_),X=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+O);let at=i.get(X);if(X.version!==at.__version||V===!0){n.activeTexture(e.TEXTURE0+O);let ct=se.getPrimaries(se.workingColorSpace),K=_.colorSpace===Ps?null:se.getPrimaries(_.colorSpace),j=_.colorSpace===Ps||ct===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let nt=0;nt<6;nt++)!lt&&!Pt?ft[nt]=m(_.image[nt],!0,s.maxCubemapSize):ft[nt]=Pt?_.image[nt].image:_.image[nt],ft[nt]=Cn(_,ft[nt]);let ht=ft[0],Lt=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Yt=S(_.internalFormat,Lt,kt,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,ut=at.__version===void 0||V===!0,J=X.dataReady,dt=w(_,ht);ce(e.TEXTURE_CUBE_MAP,_);let _t;if(lt){P&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Yt,ht.width,ht.height);for(let nt=0;nt<6;nt++){_t=ft[nt].mipmaps;for(let Ut=0;Ut<_t.length;Ut++){let Ct=_t[Ut];_.format!==bi?Lt!==null?P?J&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,Yt,Ct.width,Ct.height,0,Ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Ct.width,Ct.height,Lt,kt,Ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,Yt,Ct.width,Ct.height,0,Lt,kt,Ct.data)}}}else{if(_t=_.mipmaps,P&&ut){_t.length>0&&dt++;let nt=Me(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Yt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Pt){P?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft[nt].width,ft[nt].height,Lt,kt,ft[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,ft[nt].width,ft[nt].height,0,Lt,kt,ft[nt].data);for(let Ut=0;Ut<_t.length;Ut++){let Le=_t[Ut].image[nt].image;P?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,Le.width,Le.height,Lt,kt,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,Yt,Le.width,Le.height,0,Lt,kt,Le.data)}}else{P?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,kt,ft[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Lt,kt,ft[nt]);for(let Ut=0;Ut<_t.length;Ut++){let Ct=_t[Ut];P?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,Lt,kt,Ct.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,Yt,Lt,kt,Ct.image[nt])}}}p(_)&&M(e.TEXTURE_CUBE_MAP),at.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function vt(A,_,O,V,X,at){let ct=r.convert(O.format,O.colorSpace),K=r.convert(O.type),j=S(O.internalFormat,ct,K,O.normalized,O.colorSpace),lt=i.get(_),Pt=i.get(O);if(Pt.__renderTarget=_,!lt.__hasExternalTextures){let ft=Math.max(1,_.width>>at),ht=Math.max(1,_.height>>at);X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?n.texImage3D(X,at,j,ft,ht,_.depth,0,ct,K,null):n.texImage2D(X,at,j,ft,ht,0,ct,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),nn(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,X,Pt.__webglTexture,0,He(_)):(X===e.TEXTURE_2D||X>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,X,Pt.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(A,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let V=_.depthTexture,X=V&&V.isDepthTexture?V.type:null,at=b(_.stencilBuffer,X),ct=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;nn(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,He(_),at,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,He(_),at,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,at,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ct,e.RENDERBUFFER,A)}else{let V=_.textures;for(let X=0;X<V.length;X++){let at=V[X],ct=r.convert(at.format,at.colorSpace),K=r.convert(at.type),j=S(at.internalFormat,ct,K,at.normalized,at.colorSpace);nn(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,He(_),j,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,He(_),j,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,j,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function dn(A,_,O){let V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),ce(e.TEXTURE_CUBE_MAP,_.depthTexture);let lt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),ft;_.depthTexture.format===ji?ft=e.DEPTH_COMPONENT24:_.depthTexture.format===pr&&(ft=e.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ft,_.width,_.height,0,lt,Pt,null)}}else st(_.depthTexture,0);let at=X.__webglTexture,ct=He(_),K=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,j=_.depthTexture.format===pr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===ji)nn(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,K,at,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,j,K,at,0);else if(_.depthTexture.format===pr)nn(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,K,at,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,j,K,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(A){let _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)dn(_.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?dn(_.__webglFramebuffer[0],A,0):dn(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=e.createRenderbuffer(),te(_.__webglDepthbuffer[V],A,!1);else{let X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,at)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),te(_.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(A,_,O){let V=i.get(A);_!==void 0&&vt(V.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&ee(A)}function Pe(A){let _=A.texture,O=i.get(A),V=i.get(_);A.addEventListener("dispose",x);let X=A.textures,at=A.isWebGLCubeRenderTarget===!0,ct=X.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=_.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[K][j]=e.createFramebuffer()}else O.__webglFramebuffer[K]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[K]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(ct)for(let K=0,j=X.length;K<j;K++){let lt=i.get(X[K]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),a.memory.textures++)}if(A.samples>0&&nn(A)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){let j=X[K];O.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let lt=r.convert(j.format,j.colorSpace),Pt=r.convert(j.type),ft=S(j.internalFormat,lt,Pt,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),ht=He(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,ht,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,O.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),te(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),ce(e.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)vt(O.__webglFramebuffer[K][j],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else vt(O.__webglFramebuffer[K],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&M(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ct){for(let K=0,j=X.length;K<j;K++){let lt=X[K],Pt=i.get(lt),ft=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,Pt.__webglTexture),ce(ft,lt),vt(O.__webglFramebuffer,A,lt,e.COLOR_ATTACHMENT0+K,ft,0),p(lt)&&M(ft)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,V.__webglTexture),ce(K,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)vt(O.__webglFramebuffer[j],A,_,e.COLOR_ATTACHMENT0,K,j);else vt(O.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,K,0);p(_)&&M(K),n.unbindTexture()}A.depthBuffer&&ee(A)}function ie(A){let _=A.textures;for(let O=0,V=_.length;O<V;O++){let X=_[O];if(p(X)){let at=T(A),ct=i.get(X).__webglTexture;n.bindTexture(at,ct),M(at),n.unbindTexture()}}}let ke=[],_n=[];function Yn(A){if(A.samples>0){if(nn(A)===!1){let _=A.textures,O=A.width,V=A.height,X=e.COLOR_BUFFER_BIT,at=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=i.get(A),K=_.length>1;if(K)for(let lt=0;lt<_.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let Pt=i.get(_[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Pt,0)}e.blitFramebuffer(0,0,O,V,0,0,O,V,X,e.NEAREST),c===!0&&(ke.length=0,_n.length=0,ke.push(e.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ke.push(at),_n.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_n)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let lt=0;lt<_.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let Pt=i.get(_[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,Pt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function He(A){return Math.min(s.maxSamples,A.samples)}function nn(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Cn(A,_){let O=A.colorSpace,V=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==qo&&O!==Ps&&(se.getTransfer(O)===Se?(V!==bi||X!==ci)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",O)),_}function Me(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=pe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Yn,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ow(e,t){function n(i,s=Ps){let r,a=se.getTransfer(s);if(i===ci)return e.UNSIGNED_BYTE;if(i===Dh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Qf)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===tp)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jf)return e.BYTE;if(i===jf)return e.SHORT;if(i===Wa)return e.UNSIGNED_SHORT;if(i===Lh)return e.INT;if(i===zi)return e.UNSIGNED_INT;if(i===Vi)return e.FLOAT;if(i===Hi)return e.HALF_FLOAT;if(i===ep)return e.ALPHA;if(i===np)return e.RGB;if(i===bi)return e.RGBA;if(i===ji)return e.DEPTH_COMPONENT;if(i===pr)return e.DEPTH_STENCIL;if(i===ip)return e.RED;if(i===Uh)return e.RED_INTEGER;if(i===mr)return e.RG;if(i===Fh)return e.RG_INTEGER;if(i===Oh)return e.RGBA_INTEGER;if(i===gc||i===_c||i===xc||i===yc)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_c)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===kh||i===zh||i===Vh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===Gh||i===Wh||i===Xh||i===$h||i===vc||i===Yh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hh||i===Gh)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xh)return r.COMPRESSED_R11_EAC;if(i===$h)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vc)return r.COMPRESSED_RG11_EAC;if(i===Yh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qh||i===Kh||i===Zh||i===Jh||i===jh||i===Qh||i===tu||i===eu||i===nu||i===iu||i===su||i===ru||i===au||i===ou)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qh)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tu)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===su)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===au)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ou)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cu||i===lu||i===hu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cu)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===du||i===Sc||i===fu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===uu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ip=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new oc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ai({vertexShader:Bw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pp=class extends Qi{constructor(t,n){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding!="undefined",m=new Ip,p={},M=n.getContextAttributes(),T=null,S=null,b=[],w=[],R=new Xt,x=null,E=null,C=new Dn;C.viewport=new Ge;let L=new Dn;L.viewport=new Ge;let F=[C,L],G=new Ah,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=b[q];return Q===void 0&&(Q=new za,b[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=b[q];return Q===void 0&&(Q=new za,b[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=b[q];return Q===void 0&&(Q=new za,b[q]=Q),Q.getHandSpace()};function $(q){let Q=w.indexOf(q.inputSource);if(Q===-1)return;let Mt=b[Q];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,l||a),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",st);for(let q=0;q<b.length;q++){let Q=w[q];Q!==null&&(w[q]=null,b[q].disconnect(Q))}N=null,H=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,S=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",st),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Wt=null,vt=null;M.depth&&(vt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=M.stencil?pr:ji,Wt=M.stencil?Xa:zi);let te={colorFormat:n.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(te),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Kn(u.textureWidth,u.textureHeight,{format:bi,type:ci,depthTexture:new cr(u.textureWidth,u.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Kn(f.framebufferWidth,f.framebufferHeight,{format:bi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(q){for(let Q=0;Q<q.removed.length;Q++){let Mt=q.removed[Q],Wt=w.indexOf(Mt);Wt>=0&&(w[Wt]=null,b[Wt].disconnect(Mt))}for(let Q=0;Q<q.added.length;Q++){let Mt=q.added[Q],Wt=w.indexOf(Mt);if(Wt===-1){for(let te=0;te<b.length;te++)if(te>=w.length){w.push(Mt),Wt=te;break}else if(w[te]===null){w[te]=Mt,Wt=te;break}if(Wt===-1)break}let vt=b[Wt];vt&&vt.connect(Mt)}}let Y=new U,tt=new U;function it(q,Q,Mt){Y.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);let Wt=Y.distanceTo(tt),vt=Q.projectionMatrix.elements,te=Mt.projectionMatrix.elements,dn=vt[14]/(vt[10]-1),ee=vt[14]/(vt[10]+1),pe=(vt[9]+1)/vt[5],Pe=(vt[9]-1)/vt[5],ie=(vt[8]-1)/vt[0],ke=(te[8]+1)/te[0],_n=dn*ie,Yn=dn*ke,He=Wt/(-ie+ke),nn=He*-ie;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nn),q.translateZ(He),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let D=dn+He,Cn=ee+He,Me=_n-nn,A=Yn+(Wt-nn),_=pe*ee/Cn*D,O=Pe*ee/Cn*D;q.projectionMatrix.makePerspective(Me,A,_,O,D,Cn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Bt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,Mt=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),G.near=L.near=C.near=Q,G.far=L.far=C.far=Mt,(N!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,H=G.far),G.layers.mask=q.layers.mask|6,C.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let Wt=q.parent,vt=G.cameras;Bt(G,Wt);for(let te=0;te<vt.length;te++)Bt(vt[te],Wt);vt.length===2?it(G,C,L):G.projectionMatrix.copy(C.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),Nt(q,G,Wt)};function Nt(q,Q,Mt){Mt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let Ie=null;function ce(q,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Wt=!1;Mt.length!==G.cameras.length&&(G.cameras.length=0,Wt=!0);for(let ee=0;ee<Mt.length;ee++){let pe=Mt[ee],Pe=null;if(f!==null)Pe=f.getViewport(pe);else{let ke=d.getViewSubImage(u,pe);Pe=ke.viewport,ee===0&&(t.setRenderTargetTextures(S,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(S))}let ie=F[ee];ie===void 0&&(ie=new Dn,ie.layers.enable(ee),ie.viewport=new Ge,F[ee]=ie),ie.matrix.fromArray(pe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(pe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ee===0&&(G.matrix.copy(ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Wt===!0&&G.cameras.push(ie)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let ee=d.getDepthInformation(Mt[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let ee=0;ee<Mt.length;ee++){let pe=Mt[ee].camera;if(pe){let Pe=p[pe];Pe||(Pe=new oc,p[pe]=Pe);let ie=d.getCameraImage(pe);Pe.sourceTexture=ie}}}}for(let Mt=0;Mt<b.length;Mt++){let Wt=w[Mt],vt=b[Mt];Wt!==null&&vt!==void 0&&vt.update(Wt,Q,l||a)}Ie&&Ie(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let _e=new W_;_e.setAnimationLoop(ce),this.setAnimationLoop=function(q){Ie=q},this.dispose=function(){}}},zw=new Re,Z_=new Ht;Z_.set(-1,0,0,0,1,0,0,0,1);function Vw(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cp(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Z_),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hw(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let w=b.program;i.uniformBlockBinding(S,w)}function l(S,b){let w=s[S.id];w===void 0&&(m(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",M));let R=b.program;i.updateUBOMapping(S,R);let x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){let b=d();S.__bindingPointIndex=b;let w=e.createBuffer(),R=S.__size,x=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,R,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],w=S.uniforms,R=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let x=0,E=w.length;x<E;x++){let C=w[x];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)f(C[L],x,L,R);else f(C,x,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(S,b,w,R){if(v(S,b,w,R)===!0){let x=S.__offset,E=S.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){let F=E[L],G=p(F);g(F,S.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,S.__data)}}function g(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function v(S,b,w,R){let x=S.value,E=b+"_"+w;if(R[E]===void 0)return typeof x=="number"||typeof x=="boolean"?R[E]=x:ArrayBuffer.isView(x)?R[E]=x.slice():R[E]=x.clone(),!0;{let C=R[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(S){let b=S.uniforms,w=0,R=16;for(let E=0,C=b.length;E<C;E++){let L=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,G=L.length;F<G;F++){let N=L[F],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,Z=H.length;$<Z;$++){let st=H[$],Y=p(st),tt=w%R,it=tt%Y.boundary,Bt=tt+it;w+=it,Bt!==0&&R-Bt<Y.storage&&(w+=R-Bt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Y.storage}}}let x=w%R;return x>0&&(w+=R-x),S.__size=w,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){let b=S.target;b.removeEventListener("dispose",M);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let S in s)e.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Ww(){return ns===null&&(ns=new uh(Gw,16,16,mr,Hi),ns.name="DFG_LUT",ns.minFilter=on,ns.magFilter=on,ns.wrapS=Ji,ns.wrapT=Ji,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var vu=class{constructor(t={}){let{canvas:n=p_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ci}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Oh,Fh,Uh]),p=new Set([ci,zi,Wa,Xa,Dh,Nh]),M=new Uint32Array(4),T=new Int32Array(4),S=new U,b=null,w=null,R=[],x=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,G=null,N=null,H=null;this._outputColorSpace=ze;let $=0,Z=0,st=null,Y=-1,tt=null,it=new Ge,Bt=new Ge,Nt=null,Ie=new qt(0),ce=0,_e=n.width,q=n.height,Q=1,Mt=null,Wt=null,vt=new Ge(0,0,_e,q),te=new Ge(0,0,_e,q),dn=!1,ee=new rc,pe=!1,Pe=!1,ie=new Re,ke=new U,_n=new Ge,Yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function nn(){return st===null?Q:1}let D=i;function Cn(y,I){return n.getContext(y,I)}let Me,A,_,O,V,X,at,ct,K,j,lt,Pt,ft,ht,Lt,kt,Yt,P,ut,J,dt,_t,nt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Pi,!1),D===null){let I="webgl2";if(D=Cn(I,y),D===null)throw Cn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(y){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Pi,!1),Vt("WebGLRenderer: "+y.message),y}function Ut(){Me=new J3(D),Me.init(),dt=new Ow(D,Me),A=new V3(D,Me,t,dt),_=new Uw(D,Me),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=D.createFramebuffer(),N=D.createFramebuffer(),H=D.createFramebuffer(),O=new tE(D),V=new Sw,X=new Fw(D,Me,_,V,A,dt,O),at=new Z3(C),ct=new nM(D),_t=new k3(D,ct),K=new j3(D,ct,O,_t),j=new nE(D,K,ct,_t,O),P=new eE(D,A,X),Lt=new H3(V),lt=new vw(C,at,Me,A,_t,Lt),Pt=new Vw(C,V),ft=new bw,ht=new Cw(Me),Yt=new B3(C,at,_,j,g,c),kt=new Nw(C,j,A),nt=new Hw(D,O,A,_),ut=new z3(D,Me,O),J=new Q3(D,Me,O),O.programs=lt.programs,C.capabilities=A,C.extensions=Me,C.properties=V,C.renderLists=ft,C.shadowMap=kt,C.state=_,C.info=O}v!==ci&&(E=new sE(v,n.width,n.height,o,s,r));let Ct=new Pp(C,D);this.xr=Ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(_e,q,!1))},this.getSize=function(y){return y.set(_e,q)},this.setSize=function(y,I,W=!0){if(Ct.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=y,q=I,n.width=Math.floor(y*Q),n.height=Math.floor(I*Q),W===!0&&(n.style.width=y+"px",n.style.height=I+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(_e*Q,q*Q).floor()},this.setDrawingBufferSize=function(y,I,W){_e=y,q=I,Q=W,n.width=Math.floor(y*W),n.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===ci){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,I,W,B){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,I,W,B),_.viewport(it.copy(vt).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,I,W,B){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,I,W,B),_.scissor(Bt.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return dn},this.setScissorTest=function(y){_.setScissorTest(dn=y)},this.setOpaqueSort=function(y){Mt=y},this.setTransparentSort=function(y){Wt=y},this.getClearColor=function(y){return y.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let B=0;if(y){let k=!1;if(st!==null){let gt=st.texture.format;k=m.has(gt)}if(k){let gt=st.texture.type,St=p.has(gt),mt=Yt.getClearColor(),Et=Yt.getClearAlpha(),It=mt.r,Zt=mt.g,ne=mt.b;St?(M[0]=It,M[1]=Zt,M[2]=ne,M[3]=Et,D.clearBufferuiv(D.COLOR,0,M)):(T[0]=It,T[1]=Zt,T[2]=ne,T[3]=Et,D.clearBufferiv(D.COLOR,0,T))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Pi,!1),Yt.dispose(),ft.dispose(),ht.dispose(),V.dispose(),at.dispose(),j.dispose(),_t.dispose(),nt.dispose(),lt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",t0),Ct.removeEventListener("sessionend",e0),Pr.stop()};function Le(y){y.preventDefault(),jo("WebGLRenderer: Context Lost."),L=!0}function ye(){jo("WebGLRenderer: Context Restored."),L=!1;let y=O.autoReset,I=kt.enabled,W=kt.autoUpdate,B=kt.needsUpdate,k=kt.type;Ut(),O.autoReset=y,kt.enabled=I,kt.autoUpdate=W,kt.needsUpdate=B,kt.type=k}function Pi(y){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function qi(y){let I=y.target;I.removeEventListener("dispose",qi),q2(I)}function q2(y){K2(y),V.remove(y)}function K2(y){let I=V.get(y).programs;I!==void 0&&(I.forEach(function(W){lt.releaseProgram(W)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,B,k,gt){I===null&&(I=Yn);let St=k.isMesh&&k.matrixWorld.determinantAffine()<0,mt=j2(y,I,W,B,k);_.setMaterial(B,St);let Et=W.index,It=1;if(B.wireframe===!0){if(Et=K.getWireframeAttribute(W),Et===void 0)return;It=2}let Zt=W.drawRange,ne=W.attributes.position,wt=Zt.start*It,ve=(Zt.start+Zt.count)*It;gt!==null&&(wt=Math.max(wt,gt.start*It),ve=Math.min(ve,(gt.start+gt.count)*It)),Et!==null?(wt=Math.max(wt,0),ve=Math.min(ve,Et.count)):ne!=null&&(wt=Math.max(wt,0),ve=Math.min(ve,ne.count));let sn=ve-wt;if(sn<0||sn===1/0)return;_t.setup(k,B,mt,W,Et);let Ue,Ae=ut;if(Et!==null&&(Ue=ct.get(Et),Ae=J,Ae.setIndex(Ue)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*nn()),Ae.setMode(D.LINES)):Ae.setMode(D.TRIANGLES);else if(k.isLine){let In=B.linewidth;In===void 0&&(In=1),_.setLineWidth(In*nn()),k.isLineSegments?Ae.setMode(D.LINES):k.isLineLoop?Ae.setMode(D.LINE_LOOP):Ae.setMode(D.LINE_STRIP)}else k.isPoints?Ae.setMode(D.POINTS):k.isSprite&&Ae.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let In=k._multiDrawStarts,yt=k._multiDrawCounts,zn=k._multiDrawCount,ue=Et?ct.get(Et).bytesPerElement:1,xi=V.get(B).currentProgram.getUniforms();for(let Ki=0;Ki<zn;Ki++)xi.setValue(D,"_gl_DrawID",Ki),Ae.render(In[Ki]/ue,yt[Ki])}else if(k.isInstancedMesh)Ae.renderInstances(wt,sn,k.count);else if(W.isInstancedBufferGeometry){let In=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,In);Ae.renderInstances(wt,sn,yt)}else Ae.render(wt,sn)};function Qg(y,I,W,B){F!==null&&y.isNodeMaterial&&F.setObject(B,y),pe===!0&&Lt.setState(y,W,!1),y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=Fn,y.needsUpdate=!0,wl(y,I,B),y.side=dr,y.needsUpdate=!0,wl(y,I,B),y.side=Hn):wl(y,I,B)}this.compile=function(y,I,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,I,W),w=ht.get(W),w.init(I),x.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Pe=this.localClippingEnabled,pe=Lt.init(this.clippingPlanes,Pe),pe===!0&&Lt.setGlobalState(this.clippingPlanes,I),F!==null&&kt.render(w.state.shadowsArray,W,I);let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let gt=k.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let mt=gt[St];Qg(mt,W,I,k),B.add(mt)}else Qg(gt,W,I,k),B.add(gt)}),w=x.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(y,I,W=null){let B=this.compile(y,I,W);return new Promise(k=>{function gt(){if(B.forEach(function(St){let Et=V.get(St).currentProgram;(Et===void 0||Et.isReady())&&B.delete(St)}),B.size===0){k(y);return}setTimeout(gt,10)}Me.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let af=null;function Z2(y){af&&af(y)}function t0(){Pr.stop()}function e0(){Pr.start()}let Pr=new W_;Pr.setAnimationLoop(Z2),typeof self!="undefined"&&Pr.setContext(self),this.setAnimationLoop=function(y){af=y,Ct.setAnimationLoop(y),y===null?Pr.stop():Pr.start()},Ct.addEventListener("sessionstart",t0),Ct.addEventListener("sessionend",e0),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(y,I);let W=Ct.enabled===!0&&Ct.isPresenting===!0,B=E!==null&&(st===null||W)&&E.begin(C,st);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(I),I=Ct.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,st),w=ht.get(y,x.length),w.init(I),w.state.textureUnits=X.getTextureUnits(),x.push(w),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(ie,Oi,I.reversedDepth),Pe=this.localClippingEnabled,pe=Lt.init(this.clippingPlanes,Pe),b=ft.get(y,R.length),b.init(),R.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&of(St,I,-1/0,C.sortObjects)}of(y,I,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&b.sort(Mt,Wt),He=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,He&&Yt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Lt.beginShadows();let k=w.state.shadowsArray;if(kt.render(k,y,I),pe===!0&&Lt.endShadows(),(B&&E.hasRenderPass())===!1){let St=b.opaque,mt=b.transmissive;if(w.setupLights(),I.isArrayCamera){let Et=I.cameras;if(mt.length>0)for(let It=0,Zt=Et.length;It<Zt;It++){let ne=Et[It];i0(St,mt,y,ne)}He&&Yt.render(y);for(let It=0,Zt=Et.length;It<Zt;It++){let ne=Et[It];n0(b,y,ne,ne.viewport)}}else mt.length>0&&i0(St,mt,y,I),He&&Yt.render(y),n0(b,y,I)}st!==null&&Z===0&&(X.updateMultisampleRenderTarget(st),X.updateRenderTargetMipmap(st)),B&&E.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),_t.resetDefaultState(),Y=-1,tt=null,x.pop(),x.length>0?(w=x[x.length-1],X.setTextureUnits(w.state.textureUnits),pe===!0&&Lt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function of(y,I,W,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ee)){B&&_n.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ie);let St=j.update(y),mt=y.material;mt.visible&&b.push(y,St,mt,W,_n.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ee))){let St=j.update(y),mt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_n.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),_n.copy(St.boundingSphere.center)),_n.applyMatrix4(y.matrixWorld).applyMatrix4(ie)),Array.isArray(mt)){let Et=St.groups;for(let It=0,Zt=Et.length;It<Zt;It++){let ne=Et[It],wt=mt[ne.materialIndex];wt&&wt.visible&&b.push(y,St,wt,W,_n.z,ne,I)}}else mt.visible&&b.push(y,St,mt,W,_n.z,null,I)}}let gt=y.children;for(let St=0,mt=gt.length;St<mt;St++)of(gt[St],I,W,B)}function n0(y,I,W,B){let{opaque:k,transmissive:gt,transparent:St}=y;w.setupLightsView(W),pe===!0&&Lt.setGlobalState(C.clippingPlanes,W),B&&_.viewport(it.copy(B)),k.length>0&&El(k,I,W),gt.length>0&&El(gt,I,W),St.length>0&&El(St,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function i0(y,I,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let wt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Kn(1,1,{generateMipmaps:!0,type:wt?Hi:ci,minFilter:Mi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let gt=w.state.transmissionRenderTarget[B.id],St=B.viewport||it;gt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let mt=C.getRenderTarget(),Et=C.getActiveCubeFace(),It=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(Ie),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),He&&Yt.render(W);let Zt=C.toneMapping;C.toneMapping=ki;let ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),pe===!0&&Lt.setGlobalState(C.clippingPlanes,B),El(y,W,B),X.updateMultisampleRenderTarget(gt),X.updateRenderTargetMipmap(gt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ve=0,sn=I.length;ve<sn;ve++){let Ue=I[ve],{object:Ae,geometry:In,material:yt,group:zn}=Ue;if(yt.side===Hn&&Ae.layers.test(B.layers)){let ue=yt.side;yt.side=Fn,yt.needsUpdate=!0,s0(Ae,W,B,In,yt,zn),yt.side=ue,yt.needsUpdate=!0,wt=!0}}wt===!0&&(X.updateMultisampleRenderTarget(gt),X.updateRenderTargetMipmap(gt))}C.setRenderTarget(mt,Et,It),C.setClearColor(Ie,ce),ne!==void 0&&(B.viewport=ne),C.toneMapping=Zt}function El(y,I,W){let B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,gt=y.length;k<gt;k++){let St=y[k],{object:mt,geometry:Et,group:It}=St,Zt=St.material;Zt.allowOverride===!0&&B!==null&&(Zt=B),mt.layers.test(W.layers)&&s0(mt,I,W,Et,Zt,It)}}function s0(y,I,W,B,k,gt){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(C,I,W,B,k,gt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(C,I,W,B,y,gt),k.transparent===!0&&k.side===Hn&&k.forceSinglePass===!1?(k.side=Fn,k.needsUpdate=!0,C.renderBufferDirect(W,I,B,k,y,gt),k.side=dr,k.needsUpdate=!0,C.renderBufferDirect(W,I,B,k,y,gt),k.side=Hn):C.renderBufferDirect(W,I,B,k,y,gt),y.onAfterRender(C,I,W,B,k,gt)}function wl(y,I,W){I.isScene!==!0&&(I=Yn);let B=V.get(y),k=w.state.lights,gt=w.state.shadowsArray,St=k.state.version,mt=lt.getParameters(y,k.state,gt,I,W,w.state.lightProbeGridArray),Et=lt.getProgramCacheKey(mt),It=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=at.get(y.envMap||B.environment,Zt),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",qi),It=new Map,B.programs=It);let ne=It.get(Et);if(ne!==void 0){if(B.currentProgram===ne&&B.lightsStateVersion===St)return a0(y,mt),ne}else mt.uniforms=lt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,mt),y.onBeforeCompile(mt,C),ne=lt.acquireProgram(mt,Et),It.set(Et,ne),B.uniforms=mt.uniforms;let wt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=Lt.uniform),a0(y,mt),B.needsLights=tS(y),B.lightsStateVersion=St,B.needsLights&&(wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.sunLights.value=k.state.sun,wt.sunLightShadows.value=k.state.sunShadow,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.sunShadowMatrix.value=k.state.sunShadowMatrix,wt.sunShadowCascade.value=k.state.sunShadowCascade,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=ne,B.uniformsList=null,ne}function r0(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=qa.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function a0(y,I){let W=V.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function J2(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,B=y.length;W<B;W++){let k=y[W];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function j2(y,I,W,B,k){I.isScene!==!0&&(I=Yn),X.resetTextureUnits();let gt=I.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,mt=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:se.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,It=at.get(B.envMap||St,Et),Zt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ne=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!W.morphAttributes.position,ve=!!W.morphAttributes.normal,sn=!!W.morphAttributes.color,Ue=ki;B.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ue=C.toneMapping);let Ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,In=Ae!==void 0?Ae.length:0,yt=V.get(B),zn=w.state.lights;if(pe===!0&&(Pe===!0||y!==tt)){let De=y===tt&&B.id===Y;Lt.setState(B,y,De)}let ue=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==zn.state.version||yt.outputColorSpace!==mt||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==It||B.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Lt.numPlanes||yt.numIntersection!==Lt.numIntersection)||yt.vertexAlphas!==Zt||yt.vertexTangents!==ne||yt.morphTargets!==wt||yt.morphNormals!==ve||yt.morphColors!==sn||yt.toneMapping!==Ue||yt.morphTargetsCount!==In||!!yt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,yt.__version=B.version);let xi=yt.currentProgram;ue===!0&&(xi=wl(B,I,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,xi,yt));let Ki=!1,Js=!1,ma=!1,Te=xi.getUniforms(),qe=yt.uniforms;if(_.useProgram(xi.program)&&(Ki=!0,Js=!0,ma=!0),B.id!==Y&&(Y=B.id,Js=!0),yt.needsLights){let De=J2(w.state.lightProbeGridArray,k);yt.lightProbeGrid!==De&&(yt.lightProbeGrid=De,Js=!0)}if(Ki||tt!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Te.setValue(D,"projectionMatrix",y.projectionMatrix),Te.setValue(D,"viewMatrix",y.matrixWorldInverse);let Qs=Te.map.cameraPosition;Qs!==void 0&&Qs.setValue(D,ke.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Te.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),tt!==y&&(tt=y,Js=!0,ma=!0)}if(yt.needsLights&&(zn.state.sunShadowMap.length>0&&Te.setValue(D,"sunShadowMap",zn.state.sunShadowMap,X),zn.state.directionalShadowMap.length>0&&Te.setValue(D,"directionalShadowMap",zn.state.directionalShadowMap,X),zn.state.spotShadowMap.length>0&&Te.setValue(D,"spotShadowMap",zn.state.spotShadowMap,X),zn.state.pointShadowMap.length>0&&Te.setValue(D,"pointShadowMap",zn.state.pointShadowMap,X)),k.isSkinnedMesh){Te.setOptional(D,k,"bindMatrix"),Te.setOptional(D,k,"bindMatrixInverse");let De=k.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Te.setValue(D,"boneTexture",De.boneTexture,X))}k.isBatchedMesh&&(Te.setOptional(D,k,"batchingTexture"),Te.setValue(D,"batchingTexture",k._matricesTexture,X),Te.setOptional(D,k,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",k._indirectTexture,X),Te.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",k._colorsTexture,X));let js=W.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&P.update(k,W,xi),(Js||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,Te.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(qe.envMapIntensity.value=I.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Ww()),Js){if(Te.setValue(D,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&Q2(qe,ma),gt&&B.fog===!0&&Pt.refreshFogUniforms(qe,gt),Pt.refreshMaterialUniforms(qe,B,Q,q,w.state.transmissionRenderTarget[y.id]),yt.needsLights&&yt.lightProbeGrid){let De=yt.lightProbeGrid;qe.probesSH.value=De.texture,qe.probesMin.value.copy(De.boundingBox.min),qe.probesMax.value.copy(De.boundingBox.max),qe.probesResolution.value.copy(De.resolution)}qa.upload(D,r0(yt),qe,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qa.upload(D,r0(yt),qe,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Te.setValue(D,"center",k.center),Te.setValue(D,"modelViewMatrix",k.modelViewMatrix),Te.setValue(D,"normalMatrix",k.normalMatrix),Te.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let De=B.uniformsGroups;for(let Qs=0,ga=De.length;Qs<ga;Qs++){let c0=De[Qs];nt.update(c0,xi),nt.bind(c0,xi)}}return xi}function Q2(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function tS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(y,I,W){let B=V.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=I,V.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let W=V.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){st=y,$=I,Z=W;let B=null,k=!1,gt=!1;if(y){let mt=V.get(y);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,mt.__webglFramebuffer),it.copy(y.viewport),Bt.copy(y.scissor),Nt=y.scissorTest,_.viewport(it),_.scissor(Bt),_.setScissorTest(Nt),Y=-1;return}else if(mt.__webglFramebuffer===void 0)X.setupRenderTarget(y);else if(mt.__hasExternalTextures)X.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Zt=y.depthTexture;if(mt.__boundDepthTexture!==Zt){if(Zt!==null&&V.has(Zt)&&(y.width!==Zt.image.width||y.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(y)}}let Et=y.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(gt=!0);let It=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(It[I])?B=It[I][W]:B=It[I],k=!0):y.samples>0&&X.useMultisampledRTT(y)===!1?B=V.get(y).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[W]:B=It,it.copy(y.viewport),Bt.copy(y.scissor),Nt=y.scissorTest}else it.copy(vt).multiplyScalar(Q).floor(),Bt.copy(te).multiplyScalar(Q).floor(),Nt=dn;if(W!==0&&(B=G),_.bindFramebuffer(D.FRAMEBUFFER,B)&&_.drawBuffers(y,B),_.viewport(it),_.scissor(Bt),_.setScissorTest(Nt),k){let mt=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,W)}else if(gt){let mt=I;for(let Et=0;Et<y.textures.length;Et++){let It=V.get(y.textures[Et]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Et,It.__webglTexture,W,mt)}}else if(y!==null&&W!==0){let mt=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,W)}Y=-1};function o0(y){let I=V.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=A.textureFormatReadable(y.format),I.__typeReadable=A.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,B,k,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){_.bindFramebuffer(D.FRAMEBUFFER,Et);try{let It=y.textures[mt],Zt=It.format,ne=It.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);let wt=o0(It);if(wt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&W>=0&&W<=y.height-k&&D.readPixels(I,W,B,k,dt.convert(Zt),dt.convert(ne),gt)}finally{let It=st!==null?V.get(st).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,B,k,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(I>=0&&I<=y.width-B&&W>=0&&W<=y.height-k){_.bindFramebuffer(D.FRAMEBUFFER,Et);let It=y.textures[mt],Zt=It.format,ne=It.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);let wt=o0(It);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ve),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(I,W,B,k,dt.convert(Zt),dt.convert(ne),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let sn=st!==null?V.get(st).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,sn);let Ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await g_(D,Ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ve),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ve),D.deleteSync(Ue),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){let B=Math.pow(2,-W),k=Math.floor(y.image.width*B),gt=Math.floor(y.image.height*B),St=I!==null?I.x:0,mt=I!==null?I.y:0;X.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,St,mt,k,gt),_.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,B=null,k=0,gt=0){let St,mt,Et,It,Zt,ne,wt,ve,sn,Ue=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(W!==null)St=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Zt=W.min.y,ne=W.isBox3?W.min.z:0;else{let qe=Math.pow(2,-k);St=Math.floor(Ue.width*qe),mt=Math.floor(Ue.height*qe),y.isDataArrayTexture?Et=Ue.depth:y.isData3DTexture?Et=Math.floor(Ue.depth*qe):Et=1,It=0,Zt=0,ne=0}B!==null?(wt=B.x,ve=B.y,sn=B.z):(wt=0,ve=0,sn=0);let Ae=dt.convert(I.format),In=dt.convert(I.type),yt;I.isData3DTexture?(X.setTexture3D(I,0),yt=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(X.setTexture2DArray(I,0),yt=D.TEXTURE_2D_ARRAY):(X.setTexture2D(I,0),yt=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let zn=_.getParameter(D.UNPACK_ROW_LENGTH),ue=_.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=_.getParameter(D.UNPACK_SKIP_PIXELS),Ki=_.getParameter(D.UNPACK_SKIP_ROWS),Js=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ue.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ue.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,It),_.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ne);let ma=y.isDataArrayTexture||y.isData3DTexture,Te=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let qe=V.get(y),js=V.get(I),De=V.get(qe.__renderTarget),Qs=V.get(js.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let ga=0;ga<Et;ga++)ma&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(y).__webglTexture,k,ne+ga),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(I).__webglTexture,gt,sn+ga)),D.blitFramebuffer(It,Zt,St,mt,wt,ve,St,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||V.has(y)){let qe=V.get(y),js=V.get(I);_.bindFramebuffer(D.READ_FRAMEBUFFER,N),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let De=0;De<Et;De++)ma?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,k,ne+De):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,k),Te?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,js.__webglTexture,gt,sn+De):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,js.__webglTexture,gt),k!==0?D.blitFramebuffer(It,Zt,St,mt,wt,ve,St,mt,D.COLOR_BUFFER_BIT,D.NEAREST):Te?D.copyTexSubImage3D(yt,gt,wt,ve,sn+De,It,Zt,St,mt):D.copyTexSubImage2D(yt,gt,wt,ve,It,Zt,St,mt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Te?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(yt,gt,wt,ve,sn,St,mt,Et,Ae,In,Ue.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,gt,wt,ve,sn,St,mt,Et,Ae,Ue.data):D.texSubImage3D(yt,gt,wt,ve,sn,St,mt,Et,Ae,In,Ue):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,gt,wt,ve,St,mt,Ae,In,Ue.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,gt,wt,ve,Ue.width,Ue.height,Ae,Ue.data):D.texSubImage2D(D.TEXTURE_2D,gt,wt,ve,St,mt,Ae,In,Ue);_.pixelStorei(D.UNPACK_ROW_LENGTH,zn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),_.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ki),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Js),gt===0&&I.generateMipmaps&&D.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&X.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?X.setTextureCube(y,0):y.isData3DTexture?X.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?X.setTexture2DArray(y,0):X.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){$=0,Z=0,st=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),n.unpackColorSpace=se._getUnpackColorSpace()}};var ta=typeof self!="undefined"?self:{};function wx(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=ta,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function Be(e,t){e=e.split(".");for(var n,i=ta;e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}function $r(){throw Error("Invalid UTF8")}function J_(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Lp,j_,bu=void 0,$w=typeof TextDecoder!="undefined",Yw=typeof TextEncoder!="undefined";function Tx(e){if(Yw)e=(j_||(j_=new TextEncoder)).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function Ax(e){ta.setTimeout(()=>{throw e},0)}var qw=wx(610401301,!1),Q_=wx(748402147,!0);function t1(){var e=ta.navigator;return e&&(e=e.userAgent)?e:""}var Gp,e1=ta.navigator;function id(e){return id[" "](e),e}Gp=e1&&e1.userAgentData||null,id[" "]=function(){};var Rx={},Cc=null;function Kw(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),d=Cc[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Cx();for(var c=0;;){let l=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&l===-1)break;a(l<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(e,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function Cx(){if(!Cc){Cc={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));Rx[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Cc[r]===void 0&&(Cc[r]=s)}}}}var Zw=typeof Uint8Array!="undefined",Ix=!(!(qw&&Gp&&Gp.brands.length>0)&&(t1().indexOf("Trident")!=-1||t1().indexOf("MSIE")!=-1))&&typeof btoa=="function",n1=/[-_.]/g,Jw={"-":"+",_:"/",".":"="};function jw(e){return Jw[e]||""}function Px(e){if(!Ix)return Kw(e);e=n1.test(e)?e.replace(n1,jw):e,e=atob(e);var t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function mm(e){return Zw&&e!=null&&e instanceof Uint8Array}var eo={};function ea(){return i1||(i1=new os(null,eo))}function gm(e){Lx(eo);var t=e.g;return(t=t==null||mm(t)?t:typeof t=="string"?Px(t):null)==null?t:e.g=t}var i1,os=class{h(){return new Uint8Array(gm(this)||0)}constructor(e,t){if(Lx(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};function Lx(e){if(e!==eo)throw Error("illegal external caller")}function Dx(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}var Eu=void 0;function Fc(e){return Dx(e=Error(e),"warning"),e}function no(e,t){if(e!=null){var n=Eu!=null?Eu:Eu={},i=n[e]||0;i>=t||(n[e]=i+1,Dx(e=Error(),"incident"),Ax(e))}}function ia(){return typeof BigInt=="function"}var fo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ds(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var br,Qw=ds("jas",void 0,!0),s1=ds(void 0,"0di"),wc=ds(void 0,"1oa"),hi=ds(void 0,Symbol()),tT=ds(void 0,"0ub"),eT=ds(void 0,"0ubs"),Wp=ds(void 0,"0ubsb"),nT=ds(void 0,"0actk"),io=ds("m_m","kb",!0),r1=ds(),Nx={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ux=Object.defineProperties,Tt=fo?Qw:"Va",a1=[];function Hc(e,t){fo||Tt in e||Ux(e,Nx),e[Tt]|=t}function un(e,t){fo||Tt in e||Ux(e,Nx),e[Tt]=t}function Gc(e){return Hc(e,34),e}function Oc(e){return Hc(e,8192),e}un(a1,7),br=Object.freeze(a1);var so={};function ei(e,t){return t===void 0?e.h!==na&&!!(2&e.A[Tt]):!!(2&t)&&e.h!==na}var na={};function sd(e,t){if(e!=null){if(typeof e=="string")e=e?new os(e,eo):ea();else if(e.constructor!==os)if(mm(e))e=e.length?new os(new Uint8Array(e),eo):ea();else{if(!t)throw Error();e=void 0}}return e}var Bu=class{constructor(t,n,i){this.g=t,this.h=n,this.j=i}next(){var t=this.g.next();return t.done||(t.value=this.h.call(this.j,t.value)),t}[Symbol.iterator](){return this}},iT=Object.freeze({});function Fx(e,t,n){var i,s=128&t?0:-1,r=e.length;(i=!!r)&&(i=(i=e[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(t=128&t?1:0;t<a;t++)n(t-s,e[t]);if(i){e=e[r-1];for(let o in e)!isNaN(o)&&n(+o,e[o])}}var Ox={};function po(e){return 128&e?Ox:void 0}function rd(e){return e.ib=!0,e}var sT=rd(e=>typeof e=="number"),o1=rd(e=>typeof e=="string"),rT=rd(e=>typeof e=="boolean"),ad=typeof ta.BigInt=="function"&&typeof ta.BigInt(0)=="bigint";function hn(e){var t=e;if(o1(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(sT(t)&&!Number.isSafeInteger(t))throw Error(String(t));return ad?BigInt(e):e=rT(e)?e?"1":"0":o1(e)?e.trim()||"0":String(e)}var Xp=rd(e=>ad?e>=oT&&e<=lT:e[0]==="-"?c1(e,aT):c1(e,cT)),aT=Number.MIN_SAFE_INTEGER.toString(),oT=ad?BigInt(Number.MIN_SAFE_INTEGER):void 0,cT=Number.MAX_SAFE_INTEGER.toString(),lT=ad?BigInt(Number.MAX_SAFE_INTEGER):void 0;function c1(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var ku,hT=typeof Uint8Array.prototype.slice=="function",de=0,Ee=0;function $p(e){var t=e>>>0;de=t,Ee=(e-t)/4294967296>>>0}function sa(e){if(e<0){$p(-e);let[t,n]=ym(de,Ee);de=t>>>0,Ee=n>>>0}else $p(e)}function _m(e){var t=ku||(ku=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ee=0,de=t.getUint32(0,!0)}function Bx(e,t){var n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:ro(e,t)}function uT(e,t){return hn(ia()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):ro(e,t))}function kx(e,t){return ia()?hn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):hn(xm(e,t))}function ro(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else ia()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+l1(n)+l1(e));return n}function l1(e){return e=String(e),"0000000".slice(e.length)+e}function xm(e,t){if(2147483648&t)if(ia())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=ym(e,t);e="-"+ro(n,i)}else e=ro(e,t);return e}function Wc(e){if(e.length<16)sa(Number(e));else if(ia())e=BigInt(e),de=Number(e&BigInt(4294967295))>>>0,Ee=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Ee=de=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Ee*=1e6,(de=1e6*de+r)>=4294967296&&(Ee+=Math.trunc(de/4294967296),Ee>>>=0,de>>>=0)}if(t){let[i,s]=ym(de,Ee);de=i,Ee=s}}}function ym(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Ri(e){return Array.prototype.slice.call(e)}var Zr=typeof BigInt=="function"?BigInt.asIntN:void 0,Yp=typeof BigInt=="function"?BigInt.asUintN:void 0,cs=Number.isSafeInteger,Xc=Number.isFinite,Sr=Math.trunc,dT=hn(0);function zx(e){if(typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Gi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function zu(e){if(typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}var fT=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function mo(e){switch(typeof e){case"bigint":return!0;case"number":return Xc(e);case"string":return fT.test(e);default:return!1}}function Os(e){if(e!=null){if(!Xc(e))throw Fc("enum");e|=0}return e}function ra(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Xc(e)?0|e:void 0}function Vx(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Xc(e)?e>>>0:void 0}function Hx(e,t){if(t!=null||(t=1024),!mo(e))throw Fc("int64");var n=typeof e;switch(t){case 512:switch(n){case"string":return Vu(e);case"bigint":return String(Zr(64,e));default:return $x(e)}case 1024:switch(n){case"string":return Yx(e);case"bigint":return hn(Zr(64,e));default:return qx(e)}case 0:switch(n){case"string":return Vu(e);case"bigint":return hn(Zr(64,e));default:return od(e)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(t,"Unknown format requested type for int64")}}function Gx(e){var t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Wc(e),xm(de,Ee))}function Wx(e){if(e[0]==="-")var t=!1;else t=(t=e.length)<20||t===20&&e<="18446744073709551615";return t?e:(Wc(e),ro(de,Ee))}function od(e){if(e=Sr(e),!cs(e)){sa(e);var t=de,n=Ee;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Bx(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function Xx(e){return(e=Sr(e))>=0&&cs(e)||(sa(e),e=Bx(de,Ee)),e}function $x(e){return e=Sr(e),cs(e)?e=String(e):(sa(e),e=xm(de,Ee)),e}function Vu(e){var t=Sr(Number(e));return cs(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Gx(e))}function Yx(e){var t=Sr(Number(e));return cs(t)?hn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),ia()?hn(Zr(64,BigInt(e))):hn(Gx(e)))}function qx(e){return cs(e)?hn(od(e)):hn($x(e))}function Hu(e){var t=typeof e;return e==null?e:t==="bigint"?hn(Zr(64,e)):mo(e)?t==="string"?Yx(e):qx(e):void 0}function vm(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Zr(64,e));if(mo(e)){if(t==="string")return Vu(e);if(t==="number")return od(e)}}function Kx(e){if(e==null||typeof e=="string"||e instanceof os)return e}function Zx(e){if(typeof e!="string")throw Error();return e}function Fs(e){if(e!=null&&typeof e!="string")throw Error();return e}function An(e){return e==null||typeof e=="string"?e:void 0}function Sm(e,t,n,i){return e!=null&&e[io]===so?e:Array.isArray(e)?((i=(n=0|e[Tt])|32&i|2&i)!==n&&un(e,i),new t(e)):(n?2&i?((e=t[s1])||(Gc((e=new t).A),e=t[s1]=e),t=e):t=new t:t=void 0,t)}function pT(e,t,n){return(e=t?Hx(e,1024):Hu(e))==null?n?dT:void 0:e}function mT(e){return e}var gT={},_T=(function(){try{return id(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Dc=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},xT=_T?(Object.setPrototypeOf(Dc.prototype,Map.prototype),Object.defineProperties(Dc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Dc):class extends Map{constructor(){super()}};function h1(e){return e}function Dp(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var u1,ks=class extends xT{constructor(e,t,n=h1,i=h1){super(),this.M=0|e[Tt],this.N=t,this.ba=n,this.na=this.N?yT:i;for(let s=0;s<e.length;s++){let r=e[s],a=n(r[0],!1,!0),o=r[1];t?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(e){return Oc(Array.from(super.entries(),e))}clear(){Dp(this),super.clear()}delete(e){return Dp(this),super.delete(this.ba(e,!0,!1))}entries(){if(this.N){var e=super.keys();e=new Bu(e,vT,this)}else e=super.entries();return e}values(){if(this.N){var e=super.keys();e=new Bu(e,ks.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.N?super.forEach((n,i,s)=>{e.call(t,s.get(i),i,s)}):super.forEach(e,t)}set(e,t){return Dp(this),(e=this.ba(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.na(t,!0,!0,this.N,!1,this.M))}gb(e){var t=this.ba(e[0],!1,!0);e=e[1],e=this.N?e===void 0?null:e:this.na(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.ba(e,!1,!1))}get(e){e=this.ba(e,!1,!1);var t=super.get(e);if(t!==void 0){var n=this.N;return n?((n=this.na(t,!1,!0,n,this.Fa,this.M))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function yT(e,t,n,i,s,r){return e=Sm(e,i,n,r),s&&(e=bm(e)),e}function vT(e){return[e,this.get(e)]}function d1(){return u1||(u1=new ks(Gc([]),void 0,void 0,void 0,gT))}function cd(e){return hi?e[hi]:void 0}function Gu(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}ks.prototype.toJSON=void 0;var Np,f1,p1,qp=class{},ST={cb:!0};function MT(e,t){t<100||no(eT,1)}function ld(e,t,n,i){var s=i!==void 0;i=!!i;var r,a=hi;!s&&fo&&a&&(r=e[a])&&Gu(r,MT),a=[];var o=e.length;r=4294967295;var c=!1,l=!!(64&t),h=l?128&t?0:-1:void 0;if(!(1&t)){var d=o&&e[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!l||128&t||s||(c=!0,r=(Np!=null?Np:mT)(r-h,h,e,d,void 0)+h)}t=void 0;for(var u=0;u<o;u++){let f=e[u];if(f!=null&&(f=n(f,i))!=null)if(l&&u>=r){let g=u-h;(t!=null?t:t={})[g]=f}else a[u]=f}if(d)for(let f in d){if((o=d[f])==null||(o=n(o,i))==null)continue;let g;u=+f,l&&!Number.isNaN(u)&&(g=u+h)<r?a[g]=o:(t!=null?t:t={})[f]=o}return t&&(c?a.push(t):a[r]=t),s&&hi&&(e=cd(e))&&e instanceof qp&&(a[hi]=(function(f){var g=new qp;return Gu(f,(v,m,p)=>{g[m]=Ri(p)}),g.ka=f.ka,g})(e)),a}function bT(e){return e[0]=Bc(e[0]),e[1]=Bc(e[1]),e}function Bc(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Xp(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[Tt];return e.length===0&&1&t?void 0:ld(e,t,Bc)}if(e!=null&&e[io]===so)return Jx(e);if(e instanceof os){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Ix){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Cx(),n=Rx[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let l=0,h=0;for(;l<t.length-2;l+=3){var r=t[l],a=t[l+1],o=t[l+2],c=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,t.length-l){case 2:o=n[(15&(c=t[l+1]))<<2]||s;case 1:t=t[l],i[h]=n[t>>2]+n[(3&t)<<4|c>>4]+o+s}t=i.join("")}e=e.g=t}return e}return e instanceof ks?e=e.size!==0?e.ea(bT):void 0:void 0}return e}function Jx(e){return ld(e=e.A,0|e[Tt],Bc)}function Jr(e,t){return jx(e,t[0],t[1])}function jx(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[Tt],Q_&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Q_)throw Error("carr");no(nT,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&un(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var a=r-1;let c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(n[r+t]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return un(e,64|s|i),e}function ET(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[Tt];return e.length===0&&1&n?void 0:m1(e,n,t)}if(e!=null&&e[io]===so)return g1(e);if(e instanceof ks){if(2&(t=e.M))return e;if(!e.size)return;if(n=Gc(e.ea()),e.N)for(e=0;e<n.length;e++){let i=n[e],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[io]===so?g1(s):Array.isArray(s)?m1(s,0|s[Tt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof os?e:void 0}function m1(e,t,n){return 2&t||(!n||4096&t||16&t?e=go(e,t,!1,n&&!(16&t)):(Hc(e,34),4&t&&Object.freeze(e))),e}function Mm(e,t,n){return e=new e.constructor(t),n&&(e.h=na),e.m=na,e}function g1(e){var t=e.A,n=0|t[Tt];return ei(e,n)?e:Em(e,t,n)?Mm(e,t):go(t,n)}function go(e,t,n,i){return i!=null||(i=!!(34&t)),e=ld(e,t,ET,i),i=32,n&&(i|=2),un(e,t=16769217&t|i),e}function bm(e){var t=e.A,n=0|t[Tt];return ei(e,n)?Em(e,t,n)?Mm(e,t,!0):new e.constructor(go(t,n,!1)):e}function _o(e){if(e.h!==na)return!1;var t=e.A;return Hc(t=go(t,0|t[Tt]),2048),e.A=t,e.h=void 0,e.m=void 0,!0}function aa(e){if(!_o(e)&&ei(e,0|e.A[Tt]))throw Error()}function Er(e,t){t===void 0&&(t=0|e[Tt]),32&t&&!(4096&t)&&un(e,4096|t)}function Em(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(un(t,2|n),e.h=na,!0)}var Qx=hn(0),gr={};function $e(e,t,n,i){if((t=zs(e.A,t,void 0,i))!==null||n&&e.m!==na)return t}function zs(e,t,n,i){if(t===-1)return null;var s=t+(n?0:-1),r=e.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=e[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[t];var o=!0}else{if(s!==r)return;n=a}}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[s]=i,i}return n}}function $t(e,t,n,i){aa(e);var s=e.A;return Ze(s,0|s[Tt],t,n,i),e}function Ze(e,t,n,i,s){var r=n+(s?0:-1),a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return r<=a?(e[r]=i,t):(i!==void 0&&(n>=(a=(t!=null?t:t=0|e[Tt])>>14&1023||536870912)?i!=null&&(e[a+(s?0:-1)]={[n]:i}):e[r]=i),t)}function ty(e,t,n,i){var s=e.A;return ay(s,0|s[Tt],t,e=sy(e,i)===n?n:-1)!==void 0}function Yr(){return iT===void 0?2:4}function qr(e,t,n,i,s){var r=e.A,a=0|r[Tt];i=ei(e,a)?1:i,s=!!s||i===3,i===2&&_o(e)&&(a=0|(r=e.A)[Tt]);var o=(e=wm(r,t))===br?7:0|e[Tt],c=Tm(o,a),l=!(4&c);if(l){4&c&&(e=Ri(e),o=0,c=yr(c,a),a=Ze(r,a,t,e));let h=0,d=0;for(;h<e.length;h++){let u=n(e[h]);u!=null&&(e[d++]=u)}d<h&&(e.length=d),n=-513&c|4,c=n&=-1025,c&=-4097}return c!==o&&(un(e,c),2&c&&Object.freeze(e)),ey(e,c,r,a,t,i,l,s)}function ey(e,t,n,i,s,r,a,o){var c=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?xr(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&un(e,t),Object.freeze(e)):(r===2&&xr(t)&&(e=Ri(e),c=0,t=yr(t,i),i=Ze(n,i,s,e)),xr(t)||(o||(t|=16),t!==c&&un(e,t))),2&t||!(4096&t||16&t)||Er(n,i),e}function wm(e,t,n){return e=zs(e,t,n),Array.isArray(e)?e:br}function Tm(e,t){return 2&t&&(e|=2),1|e}function xr(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function ny(e){return sd(e,!0)}function iy(e){e=Ri(e);for(let t=0;t<e.length;t++){let n=e[t]=Ri(e[t]);Array.isArray(n[1])&&(n[1]=Gc(n[1]))}return Oc(e)}function $c(e,t,n,i){aa(e),Ze(e=e.A,0|e[Tt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function wr(e,t,n){if(2&t)throw Error();var i=po(t),s=wm(e,n,i),r=s===br?7:0|s[Tt],a=Tm(r,t);return(2&a||xr(a)||16&a)&&(a===r||xr(a)||un(s,a),s=Ri(s),r=0,a=yr(a,t),Ze(e,t,n,s,i)),(a&=-13)!==r&&un(s,a),s}function sy(e,t){return Rm(Am(e=e.A),e,void 0,t)}function Am(e){var n;if(fo)return(n=e[wc])!=null?n:e[wc]=new Map;if(wc in e)return e[wc];var t=new Map;return Object.defineProperty(e,wc,{value:t}),t}function ry(e,t,n,i,s){var r=Am(e),a=Rm(r,e,t,n,s);return a!==i&&(a&&(t=Ze(e,t,a,void 0,s)),r.set(n,i)),t}function Rm(e,t,n,i,s){var r=e.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];zs(t,o,s)!=null&&(r!==0&&(n=Ze(t,n,r,void 0,s)),r=o)}return e.set(i,r),r}function Cm(e,t,n){var i=0|e[Tt],s=po(i),r=zs(e,n,s);if(r!=null&&r[io]===so){if(!ei(r))return _o(r),r.A;var a=r.A}else Array.isArray(r)&&(a=r);if(a){let o=0|a[Tt];2&o&&(a=go(a,o))}return(a=Jr(a,t))!==r&&Ze(e,i,n,a,s),a}function ay(e,t,n,i,s){var r=!1;if((i=zs(e,i,s,a=>{var o=Sm(a,n,!1,t);return r=o!==a&&o!=null,o}))!=null)return r&&!ei(i)&&Er(e,t),i}function ge(e,t,n,i){var s=e.A,r=0|s[Tt];if((t=ay(s,r,t,n,i))==null)return t;if(!ei(e,r=0|s[Tt])){let a=bm(t);a!==t&&(_o(e)&&(r=0|(s=e.A)[Tt]),Er(s,r=Ze(s,r,n,t=a,i)))}return t}function oy(e,t,n,i,s,r,a,o){var c=ei(e,n);r=c?1:r,a=!!a||r===3,c=o&&!c,(r===2||c)&&_o(e)&&(n=0|(t=e.A)[Tt]);var l=(e=wm(t,s))===br?7:0|e[Tt],h=Tm(l,n);if(o=!(4&h)){var d=e,u=n;let f=!!(2&h);f&&(u|=2);let g=!f,v=!0,m=0,p=0;for(;m<d.length;m++){let M=Sm(d[m],i,!1,u);if(M instanceof i){if(!f){let T=ei(M);g&&(g=!T),v&&(v=T)}d[p++]=M}}p<m&&(d.length=p),h|=4,h=v?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(un(e,h),2&h&&Object.freeze(e)),c&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(xr(h)&&(e=Ri(e),h=yr(h,n),n=Ze(t,n,s,e)),i=e,c=h,l=0;l<i.length;l++)(d=i[l])!==(h=bm(d))&&(i[l]=h);c|=8,un(e,h=c=i.length?4096|c:-4097&c)}return ey(e,h,t,n,s,r,o,a)}function Vs(e,t,n){var i=e.A;return oy(e,i,0|i[Tt],t,n,Yr(),!1,!0)}function cy(e){return e==null&&(e=void 0),e}function Ot(e,t,n,i,s){return $t(e,n,i=cy(i),s),i&&!ei(i)&&Er(e.A),e}function ls(e,t,n,i){t:{var s=i=cy(i);aa(e);let r=e.A,a=0|r[Tt];if(s==null){let o=Am(r);if(Rm(o,r,a,n)!==t)break t;o.set(n,0)}else a=ry(r,a,n,t);Ze(r,a,t,s)}return i&&!ei(i)&&Er(e.A),e}function Kp(e,t,n){aa(e);var i=e.A,s=0|i[Tt];if(n==null)return Ze(i,s,t),e;var r=n===br?7:0|n[Tt],a=r,o=xr(r),c=o||Object.isFrozen(n),l=!0,h=!0;for(let u=0;u<n.length;u++){var d=n[u];o||(d=ei(d),l&&(l=!d),h&&(h=d))}return o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(n=Ri(n),a=0,r=yr(r,s)),r!==a&&un(n,r),s=Ze(i,s,t,n),2&r||!(4096&r||16&r)||Er(i,s),e}function yr(e,t){return-273&(2&t?2|e:-3&e)}function kc(e,t,n,i){var s=i;aa(e),e=oy(e,i=e.A,0|i[Tt],n,t,2,!0),s=s!=null?s:new n,e.push(s),t=n=e===br?7:0|e[Tt],(s=ei(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&un(e,n),s||Er(i)}function Ai(e,t,n){return ra($e(e,t,n))}function Ke(e,t){var n;return(n=$e(e,t,void 0,Gi))!=null?n:0}function _1(e,t,n){return ge(e,t,n=sy(e,qm)===n?n:-1,void 0)}function Zp(e,t){$c(e,3,t==null?t:zu(t),!1)}function hs(e,t,n){if(n!=null){if(typeof n!="number"||!Xc(n))throw Fc("int32");n|=0}$t(e,t,n)}function Up(e,t,n){return $t(e,t,n==null?n:Hx(n))}function Pu(e,t,n){return $t(e,t,n==null?n:(function(i){if(!mo(i))throw Fc("uint64");switch(typeof i){case"string":var s=Sr(Number(i));return cs(s)&&s>=0?i=hn(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=ia()?hn(Yp(64,BigInt(i))):hn(Wx(i))),i;case"bigint":return hn(Yp(64,i));default:return cs(i)?i=hn(Xx(i)):((i=Sr(i))>=0&&cs(i)?i=String(i):(sa(i),i=ro(de,Ee)),i=hn(i)),i}})(n))}function Ft(e,t,n){$t(e,t,n==null?n:zx(n))}function ja(e,t,n){$c(e,t,n==null?n:zx(n),0)}function ui(e,t,n){$c(e,t,Fs(n),"")}function Wu(e,t,n){var a;{aa(e);let o=e.A,c=0|o[Tt];if(n==null)Ze(o,c,t);else{var i=e=n===br?7:0|n[Tt],s=xr(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Ri(n),i=0,e=yr(e,c),r=!1),e|=5,e|=(a=4&e?512&e?512:1024&e?1024:0:void 0)!=null?a:1024,s=0;s<n.length;s++){let l=n[s],h=Zx(l);Object.is(l,h)||(r&&(n=Ri(n),i=0,e=yr(e,c),r=!1),n[s]=h)}e!==i&&(r&&(n=Ri(n),e=yr(e,c)),un(n,e)),Ze(o,c,t,n)}}}function hd(e,t,n){aa(e),qr(e,t,An,2,!0).push(Zx(n))}var Za=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function ud(e,t){if(typeof e=="string")return new Za(Px(e),t);if(Array.isArray(e))return new Za(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Za(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Za(e,!1);if(e.constructor===os)return t=gm(e)||new Uint8Array(0),new Za(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Za(e,!1);throw Error()}function Im(e,t){var n=0,i=0,s=0,r=e.h,a=e.g;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(jr(e,a),!(128&o))return t(n>>>0,i>>>0);throw Error()}function Pm(e){for(var t=0,n=e.g,i=n+10,s=e.h;n<i;){let r=s[n++];if(t|=r,!(128&r))return jr(e,n),!!(127&t)}throw Error()}function Hs(e){var t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(s|=(127&(i=t[n++]))<<7,128&i&&(s|=(127&(i=t[n++]))<<14,128&i&&(s|=(127&(i=t[n++]))<<21,128&i&&(s|=(i=t[n++])<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return jr(e,n),s}function us(e){return Hs(e)>>>0}function Xu(e){return Im(e,kx)}function Jp(e){var t=e.h,n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],jr(e,e.g+4),(i|s<<8|r<<16|t<<24)>>>0}function $u(e){var t=Jp(e);e=2*(t>>31)+1;var n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function wT(e){return Hs(e)}function jr(e,t){if(e.g=t,t>e.j)throw Error()}function ly(e,t){if(t<0)throw Error();var n=e.g;if((t=n+t)>e.j)throw Error();return e.g=t,n}function hy(e,t){if(t==0)return ea();var n=ly(e,t);return e.fa&&e.o?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):hT?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?ea():new os(n,eo)}var TT=class{constructor(e,t,n,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(e,t,n,i)}init(e,t,n,{fa:i=!1,ma:s=!1}={}){this.fa=i,this.ma=s,e&&(e=ud(e,this.ma),this.h=e.buffer,this.o=e.g,this.m=t||0,this.j=n!==void 0?this.m+n:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},x1=[],ao=0;function uy(e,t,n,i){if(Yu.length){let s=Yu.pop();return s.v(i),s.g.init(e,t,n,i),s}return new AT(e,t,n,i)}function dy(e){e.g.clear(),e.j=-1,e.h=-1,Yu.length<100&&Yu.push(e)}function fy(e){var t=e.g;if(t.g==t.j)return!1;e.m=e.g.g;var n=us(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.j=t,e.h=n,!0}function Lu(e){try{switch(e.h){case 0:e.h!=0?Lu(e):Pm(e.g);break;case 1:var t=e.g;jr(t,t.g+8);break;case 2:if(e.h!=2)Lu(e);else{var n=us(e.g),i=e.g;jr(i,i.g+n)}break;case 5:var s=e.g;jr(s,s.g+4);break;case 3:py();let r=e.j;try{for(;;){if(!fy(e))throw Error();if(e.h==4){if(e.j!=r)throw Error();break}Lu(e)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{ao>0&&ao--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function py(){if(ao>=100)throw new SyntaxError;ao++}function Yc(e,t,n){var i=e.g.j,s=us(e.g),r=(s=e.g.g+s)-i;if(r<=0&&(e.g.j=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.j=i,t}function Lm(e){var t=us(e.g),n=ly(e=e.g,t);if(e=e.h,$w){var i,s=e;(i=Lp)||(i=Lp=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(o){if(bu===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),bu=!0}catch{bu=!1}}throw!bu&&(Lp=void 0),o}}else{t=(r=n)+t,n=[];let o,c=null;for(;r<t;){var a=e[r++];a<128?n.push(a):a<224?r>=t?$r():(o=e[r++],a<194||(192&o)!=128?(r--,$r()):n.push((31&a)<<6|63&o)):a<240?r>=t-1?$r():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[r++]))!=128?(r--,$r()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=t-2?$r():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,$r()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):$r(),n.length>=8192&&(c=J_(c,n),n.length=0)}r=J_(c,n)}return r}function Dm(e){var t=us(e.g);return hy(e.g,t)}function qc(e,t,n){var i=us(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var AT=class{constructor(e,t,n,i){if(x1.length){let s=x1.pop();s.init(e,t,n,i),e=s}else e=new TT(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:e=!1}={}){this.ra=e}},Yu=[];function RT(e){return new qu(4294967295&e,Math.floor(e/4294967296))}function y1(e){return e?/^\d+$/.test(e)?(Wc(e),new qu(de,Ee)):null:v1||(v1=new qu(0,0))}var v1,qu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};function CT(e){return new Ku(4294967295&e,Math.floor(e/4294967296))}function my(e){return e?/^-?\d+$/.test(e)?(Wc(e),new Ku(de,Ee)):null:S1||(S1=new Ku(0,0))}var S1,M1,b1,E1,Fp,w1,Tc,wu,Ku=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};function gy(e,t,n){return typeof BigInt64Array!="undefined"?(Tc||(Tc=new BigInt64Array(1),wu=new Uint32Array(Tc.buffer),Tc[0]=BigInt(1),w1=wu[0]===1),Tc[0]=e,new t(wu[e=w1?0:1],wu[1-e])):(Fp||(M1=BigInt(Number.MIN_SAFE_INTEGER),b1=BigInt(Number.MAX_SAFE_INTEGER),E1=BigInt(4294967295),Fp=BigInt(32)),e>=M1&&e<=b1?n(Number(e)):(e=BigInt.asUintN(64,e),new t(Number(e&E1),Number(e>>Fp))))}function Bs(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function xo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Kc(e,t){if(t>=0)xo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function IT(e,t){Wc(t),(function(n){var i=Ee>>31;n(de<<1^i,(Ee<<1|de>>>31)^i)})((n,i)=>{Bs(e,n>>>0,i>>>0)})}function zc(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}var PT=class{constructor(){this.g=[]}length(){return this.g.length}end(){var e=this.g;return this.g=[],e}};function oo(e,t){t.length!==0&&(e.j.push(t),e.h+=t.length)}function Wn(e,t,n){xo(e.g,8*t+n)}function Nm(e,t){return Wn(e,t,2),t=e.g.end(),oo(e,t),t.push(e.h),t}function Um(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function _y(e,t,n){if(n!=null)switch(Wn(e,t,0),typeof n){case"number":e=e.g,sa(n),Bs(e,de,Ee);break;case"bigint":n=gy(n,Ku,CT),Bs(e.g,n.h,n.g);break;default:n=my(n),Bs(e.g,n.h,n.g)}}function Zc(e,t,n){Wn(e,t,2),xo(e.g,n.length),oo(e,e.g.end()),oo(e,n)}function Zu(e,t,n,i){n!=null&&(t=Nm(e,t),i(n,e),Um(e,t))}var LT=class{constructor(){this.j=[],this.h=0,this.g=new PT}};function xy(e){typeof e=="string"&&my(e)}function Ci(){var e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Fm=Ci(),yy=Ci(),Om=Ci(),dd=Ci(),Bm=Ci(),fd=Ci(),DT=Ci(),NT=Ci(),pd=Ci(),UT=Ci(),md=Ci(),km=Ci();function fs(e,t,n){var i=e.A;hi&&hi in i&&(i=i[hi])&&delete i[t.g],t.h?t.o(e,t.h,t.g,n,t.j):t.o(e,t.g,n,t.j)}var xt=class{constructor(e,t){this.A=jx(e,t,void 0,2048)}toJSON(){return Jx(this)}o(){var s;var e=vA,t=this.A,n=e.g,i=hi;if(fo&&i&&((s=t[i])==null?void 0:s[n])!=null&&no(tT,3),t=e.g,r1&&hi&&r1===void 0&&(i=(n=this.A)[hi])&&(i=i.ka))try{i(n,t,ST)}catch(r){Ax(r)}return e.h?e.m(this,e.h,e.g,e.j):e.m(this,e.g,e.defaultValue,e.j)}clone(){var e=this.A,t=0|e[Tt];return Em(this,e,t)?Mm(this,e,!0):new this.constructor(go(e,t,!1))}};xt.prototype[io]=so,xt.prototype.toString=function(){return this.A.toString()};var yo=class{constructor(e,t,n){this.g=e,this.h=t,e=Fm,this.j=!!e&&n===e||!1}};function gd(e,t){return new yo(e,t,Fm)}function vy(e,t,n,i,s){Zu(e,n,My(t,i),s)}var Ic,Pc,FT=gd(function(e,t,n,i,s){return e.h===2&&(Yc(e,Cm(t,i,n),s),!0)},vy),OT=gd(function(e,t,n,i,s){return e.h===2&&(Yc(e,Cm(t,i,n),s),!0)},vy),_d=Symbol(),xd=Symbol(),jp=Symbol(),T1=Symbol(),A1=Symbol();function oa(e,t,n,i){var s=i[e];if(s)return s;(s={}).Ea=i,s.ca=(function(d){switch(typeof d){case"boolean":return f1||(f1=[0,void 0,!0]);case"number":return d>0?void 0:d===0?p1||(p1=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ia=r,typeof(r=i[++a])=="function"&&(s.wa=!0,Ic!=null||(Ic=r),Pc!=null||(Pc=i[a+1]),r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let d;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof yo?d=r:(d=FT,a--),d==null?void 0:d.j){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let u=o[c];l?n(s,c,d,l,u):t(s,c,d,u)}}return i[e]=s}function Sy(e){return Array.isArray(e)?e[0]instanceof yo?e:[OT,e]:[e,void 0]}function My(e,t){return e instanceof xt?e.A:Array.isArray(e)?Jr(e,t):void 0}function zm(e,t,n,i){var s=n.g;e[t]=i?(r,a,o)=>s(r,a,o,i):s}function Vm(e,t,n,i,s){var r,a,o=n.g;e[t]=(c,l,h)=>o(c,l,h,a||(a=oa(xd,zm,Vm,i).ca),r||(r=Hm(i)),s)}function Hm(e){var t=e[jp];if(t!=null)return t;var n=oa(xd,zm,Vm,e);return t=n.wa?(i,s)=>Ic(i,s,n):(i,s)=>{var d,u;t:{py();try{for(;fy(s)&&s.h!=4;){let g=s.j,v=n[g];if(v==null){let m=n.ia;if(m){let p=m[g];if(p){let M=kT(p);M!=null&&(v=n[g]=M)}}}if(v==null||!v(s,i,g)){var r=s;let m=r.m;if(Lu(r),r.ra)var a=void 0;else{let p=r.g.g-m;r.g.g=m,a=hy(r.g,p)}r=void 0;var o=i,c=g,l=a;l&&((u=(r=(d=o[hi])!=null?d:o[hi]=new qp)[c])!=null?u:r[c]=[]).push(l)}}let f=cd(i);f&&(f.ka=n.Ea[A1]);var h=!0;break t}catch(f){throw f instanceof RangeError?new SyntaxError:f}finally{ao>0&&ao--}h=void 0}return h},e[jp]=t,e[A1]=BT.bind(e),t}function BT(e,t,n,i){var s=this[xd],r=this[jp],a=Jr(void 0,s.ca),o=cd(e);if(o){var c=!1,l=s.ia;if(l){if(s=(h,d,u)=>{if(u.length!==0)if(l[d])for(let f of u){h=uy(f);try{c=!0,r(a,h)}finally{dy(h)}}else i==null||i(e,d,u)},t==null)Gu(o,s);else if(o!=null){let h=o[t];h&&s(o,t,h)}if(c){let h=0|e[Tt];if(2&h&&2048&h&&!(n!=null&&n.cb))throw Error();let d=po(h),u=(f,g)=>{if(zs(e,f,d)!=null){if((n==null?void 0:n.lb)===1)return;throw Error()}g!=null&&(h=Ze(e,h,f,g,d)),delete o[f]};t==null?Fx(a,0|a[Tt],(f,g)=>{u(f,g)}):u(t,zs(a,t,d))}}}}function kT(e){var t=(e=Sy(e))[0].g;if(e=e[1]){let n=Hm(e),i=oa(xd,zm,Vm,e).ca;return(s,r,a)=>t(s,r,a,i,n)}return t}function yd(e,t,n){e[t]=n.h}function vd(e,t,n,i){var s,r,a=n.h;e[t]=(o,c,l)=>a(o,c,l,r||(r=oa(_d,yd,vd,i).ca),s||(s=by(i)))}function by(e){var t=e[T1];if(!t){let n=oa(_d,yd,vd,e);t=(i,s)=>Ey(i,s,n),e[T1]=t}return t}function Ey(e,t,n){Fx(e,0|e[Tt],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ia)&&(c=c[o])){var l=(c=Sy(c))[0].h;if(c=c[1]){let h=by(c),d=oa(_d,yd,vd,c).ca;c=a.wa?Pc(d,h):(u,f,g)=>l(u,f,g,d,h)}else c=l;return a[o]=c}})(n,i);r?r(t,s,i):i<500||no(Wp,3)}}),(e=cd(e))&&Gu(e,(i,s,r)=>{for(oo(t,t.g.end()),i=0;i<r.length;i++)oo(t,gm(r[i])||new Uint8Array(0))})}var zT=hn(0);function Gs(e,t,n){if(Array.isArray(t)){var i=0|t[Tt];if(4&i)return t;for(var s=0,r=0;s<t.length;s++){let a=e(t[s]);a!=null&&(t[r++]=a)}return r<s&&(t.length=r),e=1|i,n&&(e=-1537&e|4),e!==i&&un(t,e),n&&2&e&&Object.freeze(t),t}}var wy=(e,t)=>{var n=new LT;Ey(e.A,n,oa(_d,yd,vd,t)),oo(n,n.g.end()),e=new Uint8Array(n.h);var i=(t=n.j).length,s=0;for(let r=0;r<i;r++){let a=t[r];e.set(a,s),s+=a.length}return n.j=[e],e};function je(e,t,n){return new yo(e,t,n)}function Ws(e,t,n){return new yo(e,t,n)}function gn(e,t,n){Ze(e,0|e[Tt],t,n,po(0|e[Tt]))}var VT=gd(function(e,t,n,i,s){if(e.h!==2)return!1;if(e=Ri(e=Yc(e,Jr([void 0,void 0],i),s)),s=po(i=0|t[Tt]),2&i)throw Error();var r=zs(t,n,s);if(r instanceof ks)2&r.M?((r=r.ea()).push(e),Ze(t,i,n,r,s)):r.gb(e);else if(Array.isArray(r)){var a=0|r[Tt];8192&a||un(r,a|=8192),2&a&&Ze(t,i,n,r=iy(r),s),r.push(e)}else Ze(t,i,n,Oc([e]),s);return!0},function(e,t,n,i,s){if(t instanceof ks)t.forEach((r,a)=>{Zu(e,n,Jr([a,r],i),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let a=t[r];Array.isArray(a)&&Zu(e,n,Jr(a,i),s)}Oc(t)}});function Ty(e,t,n){(t=Gi(t))!=null&&(Wn(e,n,5),e=e.g,_m(t),zc(e,de))}function Gm(e,t,n){(t=vm(t))!=null&&(xy(t),_y(e,n,t))}function Ay(e,t,n){(t=ra(t))!=null&&t!=null&&(Wn(e,n,0),Kc(e.g,t))}function Ry(e,t,n){(t=t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0)!=null&&(Wn(e,n,0),e.g.g.push(t?1:0))}function Cy(e,t,n){(t=An(t))!=null&&Zc(e,n,Tx(t))}function Iy(e,t,n,i,s){Zu(e,n,My(t,i),s)}function Wm(e,t,n){(t=Kx(t))!=null&&Zc(e,n,ud(t,!0).buffer)}function Py(e,t,n){(t=Vx(t))!=null&&t!=null&&(Wn(e,n,0),xo(e.g,t))}function Ly(e,t,n){(t=ra(t))!=null&&(t=parseInt(t,10),Wn(e,n,0),Kc(e.g,t))}function Dy(e,t,n){return(e.h===5||e.h===2)&&(t=wr(t,0|t[Tt],n),e.h==2?qc(e,$u,t):t.push($u(e.g)),!0)}function Ny(e,t,n){return e.h===0&&(gn(t,n,Xu(e.g)),!0)}function Uy(e,t,n){return(e.h===0||e.h===2)&&(t=wr(t,0|t[Tt],n),e.h==2?qc(e,Hs,t):t.push(Hs(e.g)),!0)}function Fy(e,t,n){return e.h===2&&(gn(t,n,(e=Dm(e))===ea()?void 0:e),!0)}var R1=je(function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=Jp(i);var s=Jp(i);i=2*(s>>31)+1;var r=s>>>20&2047;return e=4294967296*(1048575&s)+e,gn(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Gi(t))!=null&&(Wn(e,n,1),e=e.g,(n=ku||(ku=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),de=n.getUint32(0,!0),Ee=n.getUint32(4,!0),zc(e,de),zc(e,Ee))},UT),Ye=je(function(e,t,n){return e.h===5&&(gn(t,n,$u(e.g)),!0)},Ty,pd),HT=Ws(Dy,function(e,t,n){if((t=Gs(Gi,t,!0))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Wn(i,s,5),i=i.g,_m(r),zc(i,de))}},pd),Xm=Ws(Dy,function(e,t,n){if((t=Gs(Gi,t,!0))!=null&&t.length){Wn(e,n,2),xo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,_m(t[i]),zc(n,de)}},pd),Oy=je(function(e,t,n){return e.h===5&&(gn(t,n,(e=$u(e.g))===0?void 0:e),!0)},Ty,pd),Ac=je(function(e,t,n){return Ny(e,t,n)},Gm,fd),Oe=je(function(e,t,n){return Ny(e,t,n)},Gm,fd),GT=Ws(function(e,t,n){return e.h!==0&&e.h!==2?e=!1:(t=wr(t,0|t[Tt],n),e.h==2?qc(e,Xu,t):t.push(Xu(e.g)),e=!0),e},function(e,t,n){if((t=Gs(vm,t,!1))!=null)for(let i=0;i<t.length;i++)_y(e,n,t[i])},fd),Du=je(function(e,t,n){return e.h!==0?t=!1:(gn(t,n,(e=Xu(e.g))===zT?void 0:e),t=!0),t},Gm,fd),Ju=je(function(e,t,n){return e.h!==0?e=!1:(gn(t,n,Im(e.g,uT)),e=!0),e},function(e,t,n){if(t=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(Yp(64,i));if(mo(i)){if(s==="string")return s=Sr(Number(i)),cs(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Wx(i)),i;if(s==="number")return Xx(i)}})(t),t!=null&&(typeof t=="string"&&y1(t),t!=null))switch(Wn(e,n,0),typeof t){case"number":e=e.g,sa(t),Bs(e,de,Ee);break;case"bigint":n=gy(t,qu,RT),Bs(e.g,n.h,n.g);break;default:n=y1(t),Bs(e.g,n.h,n.g)}},DT),le=je(function(e,t,n){return e.h===0&&(gn(t,n,Hs(e.g)),!0)},Ay,dd),C1=Ws(Uy,function(e,t,n){if((t=Gs(ra,t,!0))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Wn(i,s,0),Kc(i.g,r))}},dd),vo=Ws(Uy,function(e,t,n){if((t=Gs(ra,t,!0))!=null&&t.length){n=Nm(e,n);for(let i=0;i<t.length;i++)Kc(e.g,t[i]);Um(e,n)}},dd),Kr=je(function(e,t,n){return e.h===0&&(gn(t,n,(e=Hs(e.g))===0?void 0:e),!0)},Ay,dd),Kt=je(function(e,t,n){return e.h===0&&(gn(t,n,Pm(e.g)),!0)},Ry,yy),vr=je(function(e,t,n){return e.h===0&&(gn(t,n,(e=Pm(e.g))===!1?void 0:e),!0)},Ry,yy),Tn=Ws(function(e,t,n){return e.h===2&&(e=Lm(e),wr(t,0|t[Tt],n).push(e),!0)},function(e,t,n){if((t=Gs(An,t,!0))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&Zc(i,s,Tx(r))}},Om),Ds=je(function(e,t,n){return e.h===2&&(gn(t,n,(e=Lm(e))===""?void 0:e),!0)},Cy,Om),ot=je(function(e,t,n){return e.h===2&&(gn(t,n,Lm(e)),!0)},Cy,Om),Ne=(function(e,t,n=Fm){return new yo(e,t,n)})(function(e,t,n,i,s){return e.h===2&&(i=Jr(void 0,i),wr(t,0|t[Tt],n).push(i),Yc(e,i,s),!0)},function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)Iy(e,t[r],n,i,s);1&(e=0|t[Tt])||un(t,1|e)}}),oe=gd(function(e,t,n,i,s,r){if(e.h!==2)return!1;var a=0|t[Tt];return ry(t,a,r,n,po(a)),Yc(e,t=Cm(t,i,n),s),!0},Iy),Qa=je(function(e,t,n){return e.h===2&&(gn(t,n,Dm(e)),!0)},Wm,md),By=Ws(function(e,t,n){return e.h===2&&(e=Dm(e),wr(t,0|t[Tt],n).push(e),!0)},function(e,t,n){if((t=Gs(Kx,t,!1))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&Zc(i,s,ud(r,!0).buffer)}},md),ky=je(function(e,t,n){return e.h===0&&(gn(t,n,us(e.g)),!0)},Py,Bm),WT=Ws(function(e,t,n){return(e.h===0||e.h===2)&&(t=wr(t,0|t[Tt],n),e.h==2?qc(e,us,t):t.push(us(e.g)),!0)},function(e,t,n){if((t=Gs(Vx,t,!0))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Wn(i,s,0),xo(i.g,r))}},Bm),XT=je(function(e,t,n){return e.h===0&&(gn(t,n,(e=us(e.g))===0?void 0:e),!0)},Py,Bm),Rt=je(function(e,t,n){return e.h===0&&(gn(t,n,Hs(e.g)),!0)},Ly,km),Nu=je(function(e,t,n){return e.h===0&&(gn(t,n,(e=Hs(e.g))===0?void 0:e),!0)},Ly,km),$T=je(function(e,t,n){return e.h!==0?e=!1:(gn(t,n,(function(i){return Im(i,(s,r)=>{var a=-(1&s);return kx(s=(s>>>1|r<<31)^a,r>>>1^a)})})(e.g)),e=!0),e},function(e,t,n){if((t=vm(t))!=null&&(xy(t),t!=null))switch(Wn(e,n,0),typeof t){case"number":e=e.g,t=(n=t)<0,$p(n=2*Math.abs(n)),n=de;let i=Ee;t&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),Bs(e,de=n,Ee=i);break;case"bigint":e=e.g,t=t<<BigInt(1)^t>>BigInt(63),de=Number(BigInt.asUintN(32,t)),Ee=Number(BigInt.asUintN(32,t>>BigInt(32))),Bs(e,de,Ee);break;default:IT(e.g,t)}},NT),Qp=class{constructor(t,n){var i=fi;this.g=t,this.h=n,this.m=ge,this.o=Ot,this.defaultValue=void 0,this.j=i.jb!=null?Ox:void 0}register(){id(this)}};function ps(e,t){return new Qp(e,t)}function Tr(e,t){return(n,i)=>{t:{let r={ma:!0};i&&Object.assign(r,i),n=uy(n,void 0,void 0,r);try{let a=new e,o=a.A;Hm(t)(o,n);var s=a;break t}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{dy(n)}s=void 0}return s}}function $m(e){return t=>wy(t,e)}function Jc(e){return function(){return wy(this,e)}}var YT=[0,Qa,By,Kt,ot],qT=[0,Ds,[0,Nu,[0,Du,Kr],Nu,-1,[0,Rt],Nu,-1],je(Fy,Wm,md)],Op,I1=class extends xt{constructor(e){super(e)}},P1=[0,Ds,je(Fy,function(e,t,n){if(t!=null){if(t instanceof xt){let i=t.mb;return void(i?(t=i(t),t!=null&&Zc(e,n,ud(t,!0).buffer)):no(Wp,3))}if(Array.isArray(t))return void no(Wp,3)}Wm(e,t,n)},md)],KT=[0,1,[0,12,le,10,Kt],[0,7,[0,le,-1]]],L1=globalThis.trustedTypes,ZT=class{constructor(e){this.g=e}toString(){return this.g+""}};function D1(e){var t;return Op===void 0&&(Op=(function(){var n=null;if(!L1)return n;try{let i=s=>s;n=L1.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=Op)?t.createScriptURL(e):e,new ZT(e)}function Tu(e,...t){if(t.length===0)return D1(e[0]);var n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return D1(n)}var zy=[0,le,Rt,Kt,-1,vo,Rt,-1,Kt,-1],Vy=[0,Rt,-1,Kt],Ym=class extends xt{constructor(e){super(e)}},Hy=[0,Kt,ot,Kt,Rt,-1,Ws(function(e,t,n){return(e.h===0||e.h===2)&&(t=wr(t,0|t[Tt],n),e.h==2?qc(e,wT,t):t.push(Hs(e.g)),!0)},function(e,t,n){if((t=Gs(ra,t,!0))!=null&&t.length){n=Nm(e,n);for(let i=0;i<t.length;i++)Kc(e.g,t[i]);Um(e,n)}},km),ot,-1,[0,Kt,-1],Rt,Kt,-1,Vy],Gy=[0,3,Kt,-1,2,[0,[2],le,oe,[0,ky]],[0,Rt,Kt,Rt,Kt,Rt,4,[0,Kt,ot,-1,Kt]],[0,[3,4],ot,-1,oe,[0,le],oe,[0,Rt,-1]],[0]],Wy=[0,ot,-2],N1=class extends xt{constructor(e){super(e)}},Xy=[0],JT=class extends xt{constructor(e){super(e)}},$y=[0,le,Kt,1,Kt,-4],fi=class extends xt{constructor(e){super(e,2)}},mn={};mn[336783863]=[0,ot,Kt,-1,le,[0,[1,2,3,4,5,6,7,8,9],oe,Xy,oe,Hy,oe,Wy,oe,$y,oe,zy,oe,[0,ot,-2],oe,[0,ot,Rt],oe,Gy,oe,Vy],[0,ot],Kt,[0,[1,3],[2,4],oe,[0,vo],-1,oe,[0,Tn],-1,Ne,[0,ot,-1]],ot];var U1=[0,Du,-1,vr,-3,Du,vo,Ds,Kr,Du,-1,vr,Kr,vr,-2,Ds];function Ve(e,t){hd(e,3,t)}function he(e,t){hd(e,4,t)}var ni=class extends xt{constructor(e){super(e,500)}v(e){return Ot(this,0,7,e)}},Nc=[-1,{}],F1=[0,ot,1,Nc],O1=[0,ot,Tn,Nc];function Ii(e,t){kc(e,1,ni,t)}function We(e,t){hd(e,10,t)}function xe(e,t){hd(e,15,t)}var pi=class extends xt{constructor(e){super(e,500)}v(e){return Ot(this,0,1001,e)}},Yy=[-500,Ne,[-500,Ds,-1,Tn,-3,[-2,mn,Kt],Ne,P1,Kr,-1,F1,O1,Ne,[0,Ds,vr],Ds,U1,Kr,Tn,987,Tn],4,Ne,[-500,ot,-1,[-1,{}],998,ot],Ne,[-500,ot,Tn,-1,[-2,{},Kt],997,Tn,-1],Kr,Ne,[-500,ot,Tn,Nc,998,Tn],Tn,Kr,F1,O1,Ne,[0,Ds,-1,Nc],Tn,-2,U1,Ds,-1,vr,[0,vr,XT],978,Nc,Ne,P1];pi.prototype.g=Jc(Yy);var jT=Tr(pi,Yy),QT=class extends xt{constructor(e){super(e)}},qy=class extends xt{constructor(e){super(e)}g(){return Vs(this,QT,1)}},Ky=[0,Ne,[0,le,Ye,ot,-1]],Sd=Tr(qy,Ky),tA=class extends xt{constructor(e){super(e)}},eA=class extends xt{constructor(e){super(e)}},Bp=class extends xt{constructor(e){super(e)}j(){return ge(this,tA,2)}g(){return Vs(this,eA,5)}},Zy=Tr(class extends xt{constructor(e){super(e)}},[0,Tn,vo,Xm,[0,Rt,[0,le,-3],[0,Ye,-3],[0,le,-1,[0,Ne,[0,le,-2]]],Ne,[0,Ye,-1,ot,Ye]],ot,-1,Oe,Ne,[0,le,Ye],Tn,Oe]),Jy=class extends xt{constructor(e){super(e)}},to=Tr(class extends xt{constructor(e){super(e)}},[0,Ne,[0,Ye,-4]]),jy=class extends xt{constructor(e){super(e)}},jc=Tr(class extends xt{constructor(e){super(e)}},[0,Ne,[0,Ye,-4]]),nA=class extends xt{constructor(e){super(e)}},iA=[0,le,-1,Xm,Rt],Qy=class extends xt{constructor(e){super(e)}};Qy.prototype.g=Jc([0,Ye,-4,Oe]);var sA=class extends xt{constructor(e){super(e)}},rA=Tr(class extends xt{constructor(e){super(e)}},[0,Ne,[0,1,le,ot,Ky],Oe]),B1=class extends xt{constructor(e){super(e)}},aA=class extends xt{constructor(e){super(e)}g(){var e=$e(this,1,void 0,ny);return e==null?ea():e}},oA=class extends xt{constructor(e){super(e)}},qm=[1,2],cA=Tr(class extends xt{constructor(e){super(e)}},[0,Ne,[0,qm,oe,[0,Xm],oe,[0,Qa],le,ot],Oe]),Km=class extends xt{constructor(e){super(e)}},tv=[0,ot,le,Ye,Tn,-1],k1=class extends xt{constructor(e){super(e)}},lA=[0,Kt,-1],ju=class extends xt{constructor(e){super(e)}g(){return ty(this,Ym,2,Qr)}},Qr=[1,2,3,4,5,6],Qu=class extends xt{constructor(e){super(e)}g(){return $e(this,1,void 0,ny)!=null}j(){return An($e(this,2))!=null}},Xe=class extends xt{constructor(e){super(e)}},ev=[0,Qa,ot,[0,le,Oe,-1],[0,Ju,Oe]],Je=[0,ev,Kt,[0,Qr,oe,$y,oe,Hy,oe,zy,oe,Xy,oe,Wy,oe,Gy],Rt],hA=$m(Je),Md=class extends xt{constructor(e){super(e)}},Zm=[0,Je,Ye,-1,le],uA=ps(502141897,Md);mn[502141897]=Zm;var dA=Tr(class extends xt{constructor(e){super(e)}},[0,[0,Rt,-1,HT,WT],iA]),nv=class extends xt{constructor(e){super(e)}},iv=class extends xt{constructor(e){super(e)}},tm=[0,Je,Ye,[0,Je],Kt],fA=ps(508968150,iv);mn[508968150]=[0,Je,Zm,tm,Ye,[0,[0,ev]]],mn[508968149]=tm;var Ja=class extends xt{constructor(e){super(e)}j(){return ge(this,Km,2)}g(){$t(this,2)}},sv=[0,Je,tv];mn[478825465]=sv;var pA=class extends xt{constructor(e){super(e)}},rv=class extends xt{constructor(e){super(e)}},Jm=class extends xt{constructor(e){super(e)}},jm=class extends xt{constructor(e){super(e)}},av=class extends xt{constructor(e){super(e)}},z1=[0,Je,[0,Je],sv,-1],ov=[0,Je,Ye,le],Qm=[0,Je,Ye],cv=[0,Je,ov,Qm,Ye],mA=ps(479097054,av);mn[479097054]=[0,Je,cv,z1],mn[463370452]=z1,mn[464864288]=ov;var gA=ps(462713202,jm);mn[462713202]=cv,mn[474472470]=Qm;var _A=class extends xt{constructor(e){super(e)}},lv=class extends xt{constructor(e){super(e)}},hv=class extends xt{constructor(e){super(e)}},uv=class extends xt{constructor(e){super(e)}},tg=[0,Je,Ye,-1,le],em=[0,Je,Ye,Kt];uv.prototype.g=Jc([0,Je,Qm,[0,Je],Zm,tm,tg,em]);var dv=class extends xt{constructor(e){super(e)}},xA=ps(456383383,dv);mn[456383383]=[0,Je,tv];var fv=class extends xt{constructor(e){super(e)}},yA=ps(476348187,fv);mn[476348187]=[0,Je,lA];var pv=class extends xt{constructor(e){super(e)}},V1=class extends xt{constructor(e){super(e)}},mv=[0,Rt,-1],vA=ps(458105876,class extends xt{constructor(e){super(e)}g(){var e=this.A,t=0|e[Tt],n=ei(this,t);return e=(function(i,s,r,a){var o=V1;!a&&_o(i)&&(r=0|(s=i.A)[Tt]);var c=zs(s,2);if(i=!1,c==null){if(a)return d1();c=[]}else if(c.constructor===ks){if(!(2&c.M)||a)return c;c=c.ea()}else Array.isArray(c)?i=!!(2&c[Tt]):c=[];if(a){if(!c.length)return d1();i||(i=!0,Gc(c))}else i&&(i=!1,Oc(c),c=iy(c));return!i&&32&r&&Hc(c,32),r=Ze(s,r,2,a=new ks(c,o,pT,void 0)),i||Er(s,r),a})(this,e,t,n),!n&&V1&&(e.Fa=!0),e}});mn[458105876]=[0,mv,VT,[!0,Oe,[0,ot,-1,Tn]],[0,vo,Kt,Rt],Kt];var eg=class extends xt{constructor(e){super(e)}},gv=ps(458105758,eg);mn[458105758]=[0,Je,ot,mv];var SA=class extends xt{constructor(e){super(e)}},MA=class extends xt{constructor(e){super(e)}},bA=class extends xt{constructor(e){super(e)}},EA=$m([0,Ne,[0,Nu,Ne,[0,Oy,-1],vr]]),kp=class extends xt{constructor(e){super(e)}},H1=[0,Oy,-1,vr],wA=class extends xt{constructor(e){super(e)}},_v=class extends xt{constructor(e){super(e)}},nm=[1,2];_v.prototype.g=Jc([0,nm,oe,H1,oe,[0,Ne,H1]]);var xv=class extends xt{constructor(e){super(e)}},TA=ps(443442058,xv);mn[443442058]=[0,Je,ot,le,Ye,Tn,-1,Kt,Ye],mn[514774813]=tg;var yv=class extends xt{constructor(e){super(e)}},AA=ps(516587230,yv);function im(e,t){return t=t?t.clone():new Km,e.displayNamesLocale!==void 0?$t(t,1,Fs(e.displayNamesLocale)):e.displayNamesLocale===void 0&&$t(t,1),e.maxResults!==void 0?hs(t,2,e.maxResults):"maxResults"in e&&$t(t,2),e.scoreThreshold!==void 0?Ft(t,3,e.scoreThreshold):"scoreThreshold"in e&&$t(t,3),e.categoryAllowlist!==void 0?Wu(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&$t(t,4),e.categoryDenylist!==void 0?Wu(t,5,e.categoryDenylist):"categoryDenylist"in e&&$t(t,5),t}function vv(e){var t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function ng(e,t=-1,n=""){return{categories:e.map(i=>{var s,r,a,o,c,l,h;return{index:(r=(s=Ai(i,1))!=null?s:0)!=null?r:-1,score:(a=Ke(i,2))!=null?a:0,categoryName:(c=(o=An($e(i,3)))!=null?o:"")!=null?c:"",displayName:(h=(l=An($e(i,4)))!=null?l:"")!=null?h:""}}),headIndex:t,headName:n}}function RA(e){var n;var t={classifications:Vs(e,sA,1).map(i=>{var s,r,a,o;return ng((r=(s=ge(i,qy,4))==null?void 0:s.g())!=null?r:[],(a=Ai(i,2))!=null?a:0,(o=An($e(i,3)))!=null?o:"")})};return(function(i){return i==null?i:typeof i=="bigint"?(Xp(i)?i=Number(i):(i=Zr(64,i),i=Xp(i)?Number(i):String(i)),i):mo(i)?typeof i=="number"?od(i):Vu(i):void 0})($e(e,2,void 0,Hu))!=null&&(t.timestampMs=vv((n=$e(e,2,void 0,Hu))!=null?n:Qx)),t}function Sv(e){var a,o,c,l,h,d,u,f,g,v,m,p,M;var t=qr(e,3,Gi,Yr()),n=qr(e,2,ra,Yr()),i=qr(e,1,An,Yr()),s=qr(e,9,An,Yr()),r={categories:[],keypoints:[]};for(let T=0;T<t.length;T++)r.categories.push({score:t[T],index:(a=n[T])!=null?a:-1,categoryName:(o=i[T])!=null?o:"",displayName:(c=s[T])!=null?c:""});if((t=(l=ge(e,Bp,4))==null?void 0:l.j())&&(r.boundingBox={originX:(h=Ai(t,1,gr))!=null?h:0,originY:(d=Ai(t,2,gr))!=null?d:0,width:(u=Ai(t,3,gr))!=null?u:0,height:(f=Ai(t,4,gr))!=null?f:0,angle:0}),(g=ge(e,Bp,4))==null?void 0:g.g().length)for(let T of ge(e,Bp,4).g())r.keypoints.push({x:(v=$e(T,1,gr,Gi))!=null?v:0,y:(m=$e(T,2,gr,Gi))!=null?m:0,score:(p=$e(T,4,gr,Gi))!=null?p:0,label:(M=An($e(T,3,gr)))!=null?M:""});return r}function bd(e){var n,i,s,r;var t=[];for(let a of Vs(e,jy,1))t.push({x:(n=Ke(a,1))!=null?n:0,y:(i=Ke(a,2))!=null?i:0,z:(s=Ke(a,3))!=null?s:0,visibility:(r=Ke(a,4))!=null?r:0});return t}function Uc(e){var n,i,s,r;var t=[];for(let a of Vs(e,Jy,1))t.push({x:(n=Ke(a,1))!=null?n:0,y:(i=Ke(a,2))!=null?i:0,z:(s=Ke(a,3))!=null?s:0,visibility:(r=Ke(a,4))!=null?r:0});return t}function G1(e){return Array.from(e,t=>t>127?t-256:t)}function W1(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);var n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}mn[516587230]=[0,Je,tg,em,Ye],mn[518928384]=em;var Au,CA=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Mv(e){if(e)return!0;if(Au===void 0)try{await WebAssembly.instantiate(CA),Au=!0}catch{Au=!1}return Au}async function Ru(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await Mv(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Ns=class{};function X1(e){return $t(new sm,1,Os(e))}Ns.forVisionTasks=function(e,t=!1){return Ru("vision",e!=null?e:Tu``,t)},Ns.forTextTasks=function(e,t=!1){return Ru("text",e!=null?e:Tu``,t)},Ns.forGenAiTasks=function(e,t=!1){return Ru("genai",e!=null?e:Tu``,t)},Ns.forAudioTasks=function(e,t=!1){return Ru("audio",e!=null?e:Tu``,t)},Ns.isSimdSupported=function(e=!1){return Mv(e)};var sm=class extends xt{constructor(e){super(e)}},IA=class extends xt{constructor(e){super(e)}},$1=[0,Rt,2,Ju,-2,Oe,Ne,[0,Rt,Oe]],PA=class extends xt{constructor(e){super(e)}},LA=class extends xt{constructor(e){super(e)}};function rm(e,t){return $t(e,1,Os(t))}function am(e,t){return $t(e,2,Os(t))}var om=class extends xt{constructor(e){super(e)}},td=[3,4,5,6,7],DA=class extends xt{constructor(e){super(e)}},bv=class extends xt{constructor(e){super(e)}};bv.prototype.g=Jc([0,[0,Rt,ot,-3,Rt],[0,td,Rt,-1,oe,[0,Rt,ot,Ju],oe,$1,oe,[0,1,$1],oe,[0,Rt],oe,[0,Rt,ot,Ju]]]);var NA=class{constructor(){this.g=typeof AbortController!="undefined"}async send(e,t,n){var i=this.g?new AbortController:void 0,s=i&&e.la>0?setTimeout(()=>{i.abort()},e.la):void 0;try{let r=await fetch(e.url,{method:e.bb,headers:{...e.ab},...e.body&&{body:e.body},...e.withCredentials&&{credentials:"include"},signal:e.la&&i?i.signal:null});r.status===200?t==null||t(await r.text()):n==null||n(r.status)}catch(r){(r==null?void 0:r.name)==="AbortError"?n==null||n(408):n==null||n(400)}finally{clearTimeout(s)}}},UA=class extends xt{constructor(e){super(e,37)}},Y1=[-4,{},KT,Rt,qT],q1=[0,ot,Rt,1,ot,-1,Rt,1,Rt,1,Oe],K1=[0,Rt,ot,-2],Z1=[0,ot,Rt],J1=[0,ot,Rt],j1=[0,Kt,-3],Q1=[0,Rt,ot,-1,Oe,le,-1,ot,-5,Ne,[0,ot,-4],-1,Kt,[0,Kt,-3],Rt],FA=class extends xt{constructor(e){super(e,19)}},OA=$m([-19,{},[0,Rt,1,[0,ot,-6,Oe,le,ot,-1,Oe],1,[0,ot,1,ot,-5],ot,-1,[0,Rt,ot,-8],[0,ot,-3],[0,ot,Rt,ot,-2],[0,ot,-1,Rt,ot,-1,Rt,ot,-1,[0,Ne,[0,ot,-1],Kt,ot,-5],[0,Rt,Kt,le,-2]],Oe,[0,ot,-3,Oe,le,ot,-1],[0,Rt,ot,-1],[0,ot,-9],[0,ot,-6,Rt,ot,1,ot,Kt,Rt,-1,Kt,ot,-2,Rt,ot,Rt,ot,le,-1],1,[0,Rt],1,[0,ot,-4],1,q1,[0,[1,2,3,4,5,6],oe,q1,oe,Z1,oe,J1,oe,[0,Rt],oe,Q1,oe,K1],Z1,J1,Q1,[0,[0,Rt,ot,-1,Oe,le,-1,ot,-4,Ne,[0,ot,-4],-1,1,j1],[0,Rt,ot,-1,Oe,le,-1,ot,-4,j1]],K1,[0,ot,[0,le,-3,Rt],Rt,-2,[0,le,-1],Kt],4,[0,ot,Rt,ot,-1,Oe,Rt,ot,-1,Rt,le,-1]],Rt,Ne,[-37,{},Ac,ot,Ne,[0,ot,-1],Qa,1,Qa,[0,Tn,-1,C1,GT,-1],ot,[0,le,ot,-1],Kt,le,Oe,ot,-1,$T,YT,Ac,Qa,Rt,C1,Oe,-1,[0,Rt,-1],ot,Kt,ot,vo,ot,-1,R1,1,R1,Y1,Kt,[0,Rt,[0,Ye,le,-2],[0,Ye]],[0,Rt,Oe]],Ac,By,ot,-1,Ac,Rt,-1,[0,Kt,-1,Rt,Kt],[0,Oe,-1,ot],[0,Ac,Kt,Oe],Oe,1,ky,1,Y1]),BA=class{constructor(e){this.h=[],this.m=new NA,this.j=e!=null?e:"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(e,t){if(this.error)t==null||t("net-send-failed");else if(this.h.length===0)e==null||e();else{var n=this.h;this.h=[],n=(function(i){var s=new FA;return Kp(s=$t(s,2,Os(1786)),3,i)})(n),n=OA(n),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{e==null||e()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),t==null||t("net-send-failed",i)})}}},ed=class{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}};function cm(e,t){var n=new bv;n=Ot(n,0,1,e.B),n=Ot(n,0,2,t),t=$t(t=new UA,6,sd(n=n.g(),!1)),(e=e.l).error||e.h.push(t)}function tx(e,t){var n={P:t.P-e.j.P,T:t.T-e.j.T,V:t.V-e.j.V,R:t.R-e.j.R,X:t.X-e.j.X,U:t.U,aa:t.aa},i=am(rm(new om,e.C),1);n=Ev(e,n),cm(e,i=ls(i,4,td,n)),e.j=t}function Ev(e,t){var n=new IA;return e=Pu(e=Up(e=$t(n,1,Os(e.D)),7,t.R),5,t.U),e=Pu(e,6,t.aa),t.V>0&&Pu(e,4,t.X/t.V),t.P!==0&&(n=Up(n=X1(3),2,t.P),kc(e,8,sm,n)),t.T!==0&&(t=Up(n=X1(4),2,t.T),kc(e,8,sm,t)),e}var kA=class{constructor(e,t,n){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new ed,this.j=new ed,this.l=new BA(n),this.C=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}})(e),this.D=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(t),e=new DA,typeof window=="undefined"?t=0:(t=navigator.userAgent,t=/Android/i.test(t)?1:/iPhone|iPad|iPod/i.test(t)?2:/Windows/i.test(t)?5:/Macintosh/i.test(t)?4:/Linux/i.test(t)?3:0),e=$t(e,1,Os(t)),e=$t(e,2,Fs("")),e=$t(e,3,Fs("")),e=$t(e,4,Fs("1.0.1")),e=$t(e,5,Fs("")),this.B=$t(e,6,Os(4))}ya(){var e=new LA;e=Pu(e=$t(e,1,Os(this.D)),3,performance.now()-this.u),cm(this,e=ls(am(rm(new om,this.C),0),3,td,e)),this.m=performance.now()}za(e){var t=this.h.get(e);if(t!==void 0&&(this.h.delete(e),e=performance.now()-t,++this.g.V,this.g.X+=e,this.g.U=Math.max(this.g.U,e),this.o=Math.max(this.o,e),performance.now()>this.m+3e4)){for(let[n,i]of this.h.entries())e=n,i<t&&(this.g.R++,this.h.delete(e));t={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),tx(this,t)}}xa(){var e={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};tx(this,e);var t=new PA;t=Ot(t,0,2,e=Ev(this,e)),cm(this,t=ls(e=am(rm(new om,this.C),2),5,td,t))}close(){var e=this.l;typeof e.close=="function"?e.close():e.flush()}};function ig(){var e=navigator;return typeof OffscreenCanvas!="undefined"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function ex(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let n=self.import;n?await n(e.toString()):await import(e.toString())}}}function sg(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Dt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function wv(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=sg(t);return!e.j||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function nx(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function rs(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function _r(e,t,n){var i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}var Tv=class{constructor(e,t){this.j=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:ig()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){var t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){var n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Dt(this,i||"input_audio",r=>{Dt(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,e,t!=null?t:0,n)})})}setAutoResizeCanvas(e){this.j=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ja(e){rs(this,"__graph_config__",t=>{e(t)}),Dt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){var r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Dt(this,i,a=>{this.i._addAudioToInputStream(this.g,t,n,a,s)})}addGpuBufferToStream(e,t,n){Dt(this,t,i=>{var[s,r]=wv(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(e,t,n){Dt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){Dt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){Dt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){Dt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){Dt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){Dt(this,t,i=>{Dt(this,e,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(e,t,n){Dt(this,t,i=>{nx(this,Object.keys(e),s=>{nx(this,Object.values(e),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){Dt(this,n,s=>{Dt(this,t,r=>{var a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(e,t){Dt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(e,t,n){Dt(this,t,i=>{var s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Dt(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(e,t){Dt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){Dt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){Dt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){Dt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){Dt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){Dt(this,t,n=>{Dt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){Dt(this,n,i=>{Dt(this,t,s=>{var r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){Dt(this,t,n=>{var i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Dt(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){rs(this,e,t),Dt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){_r(this,e,t),Dt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){rs(this,e,t),Dt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){_r(this,e,t),Dt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),rs(this,e,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),Dt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function Av(e){return class extends e{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let t=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(t)}}}}function Rv(e){return class extends e{Za(){this.i._registerModelResourcesGraphService()}}}var zA=Av(Rv(Tv)),VA=class extends zA{};async function HA(e,t,n,i){return e=await(async(s,r,a,o,c)=>{if(r&&await ex(r),!self.ModuleFactory||a&&(await ex(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){var o;r=(o=r.runningMode)!=null?o:"";var a=s.g.Sa();s.m=new kA(s.C(),r,a)})(e,i),await e.v(i),e}async function Uu(e,t,n,i){return HA(e,t,n,i)}function zp(e,t){var n=ge(e.baseOptions,Qu,1)||new Qu;typeof t=="string"?($t(n,2,Fs(t)),$t(n,1)):t instanceof Uint8Array&&($t(n,1,sd(t,!1)),$t(n,2)),Ot(e.baseOptions,0,1,n)}function ix(e){try{let t=e.K.length;if(t===1)throw Error(e.K[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.K.map(n=>n.message).join(", "))}finally{e.K=[]}}function bt(e,t){e.I=Math.max(e.I,t)}function Ed(e,t){e.D=new ni,ui(e.D,2,"PassThroughCalculator"),Ve(e.D,"free_memory"),he(e.D,"free_memory_unused_out"),We(t,"free_memory"),Ii(t,e.D)}function co(e,t){Ve(e.D,t),he(e.D,t+"_unused_out")}function wd(e){e.g.addBoolToStream(!0,"free_memory",e.I)}var nd=class{constructor(e){this.g=e,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(e,t=!0){var n,i,s,r,a,o;if(t){let c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=ge(this.baseOptions,Qu,1))!=null&&s.g()||(r=ge(this.baseOptions,Qu,1))!=null&&r.j()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,h){var d=ge(l.baseOptions,ju,3);if(!d){var u=d=new ju,f=new N1;ls(u,4,Qr,f)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new Ym,ls(h,2,Qr,u)):(h=d,u=new N1,ls(h,4,Qr,u))),Ot(l.baseOptions,0,3,d)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),zp(this,"/model.dat"),this.o(),this.L()});if(c.modelAssetBuffer instanceof Uint8Array)zp(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){for(var h=[],d=0;;){let{done:u,value:f}=await l.read();if(u)break;h.push(f),d+=f.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(d),d=0;for(let u of h)l.set(u,d),d+=u.length;return l})(c.modelAssetBuffer).then(l=>{zp(this,l),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var e;if(this.g.ja(t=>{e=jT(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){var n;this.g.attachErrorListener((i,s)=>{this.K.push(Error(s))}),this.g.Za(),this.g.setGraph(e,t),(n=this.m)==null||n.ya(),this.D=void 0,ix(this)}finishProcessing(e){this.g.finishProcessing(),ix(this),this.m&&e!==void 0&&this.m.za(e)}close(){var e,t;this.D=void 0,(e=this.m)==null||e.xa(),(t=this.m)==null||t.close(),this.g.closeGraph()}};function Gn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}nd.prototype.close=nd.prototype.close;var lm=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.j=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}};function sx(e,t,n){var i=e.g;if(n=Gn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function rx(e,t){var n=e.g,i=Gn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=Gn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.F),n.vertexAttribPointer(e.F,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=Gn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.K),n.vertexAttribPointer(e.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new lm(n,i,s,r)}function rg(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Qc(e,t,n,i){return rg(e,t),e.h||(e.m(),e.I()),n?(e.l||(e.l=rx(e,!0)),n=e.l):(e.D||(e.D=rx(e,!1)),n=e.D),t.useProgram(e.h),n.bind(),e.j(),e=i(),n.g.bindVertexArray(null),e}function Mr(e,t,n){return rg(e,t),e=Gn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n!=null?n:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n!=null?n:t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Td(e,t,n){rg(e,t),e.C||(e.C=Gn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.C),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function ag(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var ca=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var e=this.g;if(this.h=Gn(e.createProgram(),"Failed to create WebGL program"),this.da=sx(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Z=sx(this,this.B(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.F=e.getAttribLocation(this.h,"aVertex"),this.K=e.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.da),e.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}},GA=class extends ca{B(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}I(){var e=this.g;e.activeTexture(e.TEXTURE1),this.u=Mr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.o=Mr(this,e,e.NEAREST)}m(){super.m();var e=this.g;this.O=Gn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.Y=Gn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=Gn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var e=this.g;e.uniform1i(this.L,0),e.uniform1i(this.O,1),e.uniform1i(this.Y,2)}close(){this.u&&this.g.deleteTexture(this.u),this.o&&this.g.deleteTexture(this.o),super.close()}},WA=class extends ca{B(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}I(){var e=this.g;e.activeTexture(e.TEXTURE1),this.o=Mr(this,e),e.activeTexture(e.TEXTURE2),this.u=Mr(this,e)}m(){super.m();var e=this.g;this.L=Gn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.O=Gn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.J=Gn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}j(){super.j();var e=this.g;e.uniform1i(this.J,0),e.uniform1i(this.L,1),e.uniform1i(this.O,2)}close(){this.o&&this.g.deleteTexture(this.o),this.u&&this.g.deleteTexture(this.u),super.close()}};function Us(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function hm(e){var t=Us(e,1);if(!t){if(t=Us(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);let i=lo(e);var n=og(e);if(Td(n,i,Cv(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Cv(e){var t=Us(e,2);if(!t){let n=lo(e);t=Pv(e);let i=hm(e),s=Iv(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),um(e)}return t}function lo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Gn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Iv(e){if(e=lo(e),!Cu)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Cu=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Cu=e.R16F}return Cu}function og(e){return e.j||(e.j=new ca),e.j}function Pv(e){var t=lo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var n=Us(e,2);return n||(n=Mr(og(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.o=!0),t.bindTexture(t.TEXTURE_2D,n),n}function um(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Cu,ln=class{constructor(e,t,n,i,s,r,a){this.g=e,this.m=t,this.o=n,this.canvas=i,this.j=s,this.width=r,this.height=a,this.o&&--ax===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Us(this,0)}ua(){return!!Us(this,1)}W(){return!!Us(this,2)}ta(){return(t=Us(e=this,0))||(t=hm(e),t=new Uint8Array(t.map(n=>Math.round(255*n))),e.g.push(t)),t;var e,t}sa(){return hm(this)}S(){return Cv(this)}clone(){var e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=lo(this),s=og(this);i.activeTexture(i.TEXTURE1),n=Mr(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=Iv(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Td(s,i,n),Qc(s,i,!1,()=>{Pv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),um(this)}),ag(s),um(this)}}e.push(n)}return new ln(e,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&lo(this).deleteTexture(Us(this,2)),ax=-1}};ln.prototype.close=ln.prototype.close,ln.prototype.clone=ln.prototype.clone,ln.prototype.getAsWebGLTexture=ln.prototype.S,ln.prototype.getAsFloat32Array=ln.prototype.sa,ln.prototype.getAsUint8Array=ln.prototype.ta,ln.prototype.hasWebGLTexture=ln.prototype.W,ln.prototype.hasFloat32Array=ln.prototype.ua,ln.prototype.hasUint8Array=ln.prototype.Ua;var ax=250,XA={color:"white",lineWidth:4,radius:6};function Vp(e){return{...XA,fillColor:(e=e||{}).color,...e}}function Ls(e,t){return e instanceof Function?e(t):e}function ox(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Rc(e){if(!e.j)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.j}function Vc(e){if(!e.o)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.o}function cx(e,t,n){var i;if(t.W())n(t.S());else{let s=t.ua()?t.sa():t.ta();e.m=(i=e.m)!=null?i:new ca;let r=Vc(e);n((e=new ln([s],t.m,!1,r.canvas,e.m,t.width,t.height)).S()),e.close()}}function lx(e,t,n,i){var s=(function(o){return o.g||(o.g=new GA),o.g})(e),r=Vc(e),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Qc(s,r,!0,()=>{(function(c,l,h,d){var u=c.g;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,l),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,c.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),c.J&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[v,m]of f){f=v;let p=m,M=g.next();if(M.done)return!1;let[T,S]=M.value;if(f!==T||p[0]!==S[0]||p[1]!==S[1]||p[2]!==S[2]||p[3]!==S[3])return!1}return!!g.next().done})(c.J,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.o);else{c.J=d;let f=Array(1024).fill(0);d.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);f[4*v]=g[0],f[4*v+1]=g[1],f[4*v+2]=g[2],f[4*v+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.o),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,t,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function hx(e,t,n,i){var s=Vc(e),r=(function(c){return c.h||(c.h=new WA),c.h})(e),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Qc(r,s,!0,()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.o),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var Jn=class{constructor(e,t){typeof CanvasRenderingContext2D!="undefined"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.j=e,this.o=t):this.o=e}Ma(e,t){if(e){var n=Rc(this);t=Vp(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Ls(t.fillColor,{index:s,from:r}),n.strokeStyle=Ls(t.color,{index:s,from:r}),n.lineWidth=Ls(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Ls(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}La(e,t,n){if(e&&t){var i=Rc(this);n=Vp(n),i.save();var s=i.canvas,r=0;for(let a of t){i.beginPath(),t=e[a.start];let o=e[a.end];t&&o&&(i.strokeStyle=Ls(n.color,{index:r,from:t,to:o}),i.lineWidth=Ls(n.lineWidth,{index:r,from:t,to:o}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(e,t){var n=Rc(this);t=Vp(t),n.save(),n.beginPath(),n.lineWidth=Ls(t.lineWidth,{}),n.strokeStyle=Ls(t.color,{}),n.fillStyle=Ls(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}Ja(e,t,n=[0,0,0,255]){this.j?(function(i,s,r,a){var o=Vc(i);cx(i,s,c=>{lx(i,c,r,a),(c=Rc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,e,n,t):lx(this,e.S(),n,t)}Ka(e,t,n){this.j?(function(i,s,r,a){var o=Vc(i);cx(i,s,c=>{hx(i,c,r,a),(c=Rc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,e,t,n):hx(this,e.S(),t,n)}close(){var e,t,n;(e=this.g)==null||e.close(),this.g=void 0,(t=this.h)==null||t.close(),this.h=void 0,(n=this.m)==null||n.close(),this.m=void 0}};function as(e,t){switch(t){case 0:return e.g.find(n=>n instanceof ImageData);case 1:return e.g.find(n=>typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap);case 2:return e.g.find(n=>typeof WebGLTexture!="undefined"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Lv(e){var t=as(e,0);if(!t){t=ho(e);let n=Ad(e),i=new Uint8Array(e.width*e.height*4);Td(n,t,Fu(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),ag(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Fu(e){var t=as(e,2);if(!t){let n=ho(e);t=Ou(e);let i=as(e,1)||Lv(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Lc(e)}return t}function ho(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Gn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Ad(e){return e.j||(e.j=new ca),e.j}function Ou(e){var t=ho(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var n=as(e,2);return n||(n=Mr(Ad(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Lc(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function ux(e){var t=ho(e);return Qc(Ad(e),t,!0,()=>(function(n,i){var s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();var r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}Jn.prototype.close=Jn.prototype.close,Jn.prototype.drawConfidenceMask=Jn.prototype.Ka,Jn.prototype.drawCategoryMask=Jn.prototype.Ja,Jn.prototype.drawBoundingBox=Jn.prototype.Ia,Jn.prototype.drawConnectors=Jn.prototype.La,Jn.prototype.drawLandmarks=Jn.prototype.Ma,Jn.lerp=function(e,t,n,i,s){return ox(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},Jn.clamp=ox;var wn=class{constructor(e,t,n,i,s,r,a){this.g=e,this.o=t,this.m=n,this.canvas=i,this.j=s,this.width=r,this.height=a,(this.o||this.m)&&--dx===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!as(this,0)}va(){return!!as(this,1)}W(){return!!as(this,2)}Qa(){return Lv(this)}Pa(){var e=as(this,1);return e||(Fu(this),Ou(this),e=ux(this),Lc(this),this.g.push(e),this.o=!0),e}S(){return Fu(this)}clone(){var e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=ho(this),s=Ad(this);i.activeTexture(i.TEXTURE1),n=Mr(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Td(s,i,n),Qc(s,i,!1,()=>{Ou(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Lc(this)}),ag(s),Lc(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Fu(this),Ou(this),n=ux(this),Lc(this)}e.push(n)}return new wn(e,this.va(),this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&as(this,1).close(),this.m&&ho(this).deleteTexture(as(this,2)),dx=-1}};wn.prototype.close=wn.prototype.close,wn.prototype.clone=wn.prototype.clone,wn.prototype.getAsWebGLTexture=wn.prototype.S,wn.prototype.getAsImageBitmap=wn.prototype.Pa,wn.prototype.getAsImageData=wn.prototype.Qa,wn.prototype.hasWebGLTexture=wn.prototype.W,wn.prototype.hasImageBitmap=wn.prototype.va,wn.prototype.hasImageData=wn.prototype.Ta;var dx=250;function Wi(...e){return e.map(([t,n])=>({start:t,end:n}))}var fx,$A=Rv((fx=Av(Tv),class extends fx{get oa(){return this.i}Da(e,t,n){Dt(this,t,i=>{var[s,r]=wv(this,e,i);this.oa._addBoundTextureAsImageToStream(i,s,r,n)})}ga(e,t){rs(this,e,t),Dt(this,e,n=>{this.oa._attachImageListener(n)})}ha(e,t){_r(this,e,t),Dt(this,e,n=>{this.oa._attachImageVectorListener(n)})}})),Xi=class extends $A{};async function fe(e,t,n){var i;return Uu(e,(i=n.canvas)!=null?i:ig()?void 0:document.createElement("canvas"),t,n)}function Dv(e,t,n,i){var a;if(e.m&&i!==void 0)if((a=ge(e.baseOptions,ju,3))!=null&&a.g()){var s=e.m;++s.g.T,s.h.set(i,performance.now())}else++(s=e.m).g.P,s.h.set(i,performance.now());if(e.qa){if(s=new Qy,n==null?void 0:n.regionOfInterest){if(!e.Ca)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ft(s,1,(r.left+r.right)/2),Ft(s,2,(r.top+r.bottom)/2),Ft(s,4,r.right-r.left),Ft(s,3,r.bottom-r.top)}else Ft(s,1,.5),Ft(s,2,.5),Ft(s,4,1),Ft(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ft(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){let[o,c]=sg(t);n=Ke(s,3)*c/o,r=Ke(s,4)*o/c,Ft(s,4,n),Ft(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.qa,i)}e.g.Da(t,e.Ba,i!=null?i:performance.now()),e.finishProcessing(i)}function $i(e,t,n){if(e.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Dv(e,t,n,e.I+1)}function ms(e,t,n,i){if(!e.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Dv(e,t,n,i)}function uo(e,t,n,i){var s=t.data,r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new ln([s],n,!1,e.g.i.canvas,e.da,r,t),i?e.clone():e}var di=class extends nd{constructor(e,t,n,i){super(e),this.g=e,this.Ba=t,this.qa=n,this.Ca=i,this.da=new ca,this.J=!1}j(e,t=!0){if("runningMode"in e){var n=this.J=!!e.runningMode&&e.runningMode!=="IMAGE";$t(this.baseOptions,2,n==null?n:zu(n))}if(e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(e,t)}close(){this.da.close(),super.close()}};di.prototype.close=di.prototype.close;var Ei=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect_in",!1),this.l={detections:[]},Ot(e=this.h=new Md,0,1,t=new Xe),Ft(this.h,2,.5),Ft(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n;return"minDetectionConfidence"in e&&Ft(this.h,2,(t=e.minDetectionConfidence)!=null?t:.5),"minSuppressionThreshold"in e&&Ft(this.h,3,(n=e.minSuppressionThreshold)!=null?n:.3),this.j(e)}G(e,t){return this.l={detections:[]},$i(this,e,t),this.l}H(e,t,n){return this.l={detections:[]},ms(this,e,n,t),this.l}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect_in"),xe(e,"detections");var t=new fi;fs(t,uA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect_in"),he(n,"DETECTIONS:detections"),n.v(t),Ii(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Zy(r),this.l.detections.push(Sv(i));bt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ei.prototype.detectForVideo=Ei.prototype.H,Ei.prototype.detect=Ei.prototype.G,Ei.prototype.setOptions=Ei.prototype.v,Ei.createFromModelPath=async function(e,t){return fe(Ei,e,{baseOptions:{modelAssetPath:t}})},Ei.createFromModelBuffer=function(e,t){return fe(Ei,e,{baseOptions:{modelAssetBuffer:t}})},Ei.createFromOptions=function(e,t){return fe(Ei,e,t)};var cg=Wi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),lg=Wi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),hg=Wi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Nv=Wi([474,475],[475,476],[476,477],[477,474]),ug=Wi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),dg=Wi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Uv=Wi([469,470],[470,471],[471,472],[472,469]),fg=Wi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Fv=[...cg,...lg,...hg,...ug,...dg,...fg],Ov=Wi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function px(e){e.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var me=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ot(e=this.h=new iv,0,1,t=new Xe),this.B=new nv,Ot(this.h,0,3,this.B),this.u=new Md,Ot(this.h,0,2,this.u),hs(this.u,4,1),Ft(this.u,2,.5),Ft(this.B,2,.5),Ft(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n,i,s;return"numFaces"in e&&hs(this.u,4,(t=e.numFaces)!=null?t:1),"minFaceDetectionConfidence"in e&&Ft(this.u,2,(n=e.minFaceDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minFacePresenceConfidence"in e&&Ft(this.B,2,(s=e.minFacePresenceConfidence)!=null?s:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.j(e)}G(e,t){return px(this),$i(this,e,t),this.l}H(e,t,n){return px(this),ms(this,e,n,t),this.l}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect"),xe(e,"face_landmarks");var t=new fi;fs(t,fA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),he(n,"NORM_LANDMARKS:face_landmarks"),n.v(t),Ii(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=jc(r),this.l.faceLandmarks.push(bd(i));bt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{bt(this,i)}),this.outputFaceBlendshapes&&(xe(e,"blendshapes"),he(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{var r;if(this.outputFaceBlendshapes)for(let a of i)i=Sd(a),this.l.faceBlendshapes.push(ng((r=i.g())!=null?r:[]));bt(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{bt(this,i)})),this.outputFacialTransformationMatrixes&&(xe(e,"face_geometry"),he(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{var r,a,o,c,l;if(this.outputFacialTransformationMatrixes)for(let h of i)(i=ge(i=dA(h),nA,2))&&this.l.facialTransformationMatrixes.push({rows:(a=(r=Ai(i,1))!=null?r:0)!=null?a:0,columns:(c=(o=Ai(i,2))!=null?o:0)!=null?c:0,data:(l=qr(i,3,Gi,Yr()).slice())!=null?l:[]});bt(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{bt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};me.prototype.detectForVideo=me.prototype.H,me.prototype.detect=me.prototype.G,me.prototype.setOptions=me.prototype.v,me.createFromModelPath=function(e,t){return fe(me,e,{baseOptions:{modelAssetPath:t}})},me.createFromModelBuffer=function(e,t){return fe(me,e,{baseOptions:{modelAssetBuffer:t}})},me.createFromOptions=function(e,t){return fe(me,e,t)},me.FACE_LANDMARKS_LIPS=cg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",me.FACE_LANDMARKS_LIPS),me.FACE_LANDMARKS_LEFT_EYE=lg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",me.FACE_LANDMARKS_LEFT_EYE),me.FACE_LANDMARKS_LEFT_EYEBROW=hg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",me.FACE_LANDMARKS_LEFT_EYEBROW),me.FACE_LANDMARKS_LEFT_IRIS=Nv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",me.FACE_LANDMARKS_LEFT_IRIS),me.FACE_LANDMARKS_RIGHT_EYE=ug,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",me.FACE_LANDMARKS_RIGHT_EYE),me.FACE_LANDMARKS_RIGHT_EYEBROW=dg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",me.FACE_LANDMARKS_RIGHT_EYEBROW),me.FACE_LANDMARKS_RIGHT_IRIS=Uv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",me.FACE_LANDMARKS_RIGHT_IRIS),me.FACE_LANDMARKS_FACE_OVAL=fg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",me.FACE_LANDMARKS_FACE_OVAL),me.FACE_LANDMARKS_CONTOURS=Fv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",me.FACE_LANDMARKS_CONTOURS),me.FACE_LANDMARKS_TESSELATION=Ov,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",me.FACE_LANDMARKS_TESSELATION);var pg=Wi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function mx(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function gx(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function _x(e,t=!0){var s,r,a,o,c,l;var n=[];for(let h of e){var i=Sd(h);e=[];for(let d of i.g())i=t&&Ai(d,1)!=null?(s=Ai(d,1))!=null?s:0:-1,e.push({score:(r=Ke(d,2))!=null?r:0,index:i,categoryName:(o=(a=An($e(d,3)))!=null?a:"")!=null?o:"",displayName:(l=(c=An($e(d,4)))!=null?c:"")!=null?l:""});n.push(e)}return n}var jn=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ot(e=this.l=new av,0,1,t=new Xe),this.u=new jm,Ot(this.l,0,2,this.u),this.F=new Jm,Ot(this.u,0,3,this.F),this.B=new rv,Ot(this.u,0,2,this.B),this.h=new pA,Ot(this.l,0,3,this.h),Ft(this.B,2,.5),Ft(this.u,4,.5),Ft(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return ge(this.l,Xe,1)}set baseOptions(e){Ot(this.l,0,1,e)}v(e){var s,r,a,o,c,l,h,d;if(hs(this.B,3,(s=e.numHands)!=null?s:1),"minHandDetectionConfidence"in e&&Ft(this.B,2,(r=e.minHandDetectionConfidence)!=null?r:.5),"minTrackingConfidence"in e&&Ft(this.u,4,(a=e.minTrackingConfidence)!=null?a:.5),"minHandPresenceConfidence"in e&&Ft(this.F,2,(o=e.minHandPresenceConfidence)!=null?o:.5),e.cannedGesturesClassifierOptions){var t=new Ja,n=t,i=im(e.cannedGesturesClassifierOptions,(c=ge(this.h,Ja,3))==null?void 0:c.j());Ot(n,0,2,i),Ot(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((l=ge(this.h,Ja,3))==null||l.g());return e.customGesturesClassifierOptions?(Ot(n=t=new Ja,0,2,i=im(e.customGesturesClassifierOptions,(h=ge(this.h,Ja,4))==null?void 0:h.j())),Ot(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((d=ge(this.h,Ja,4))==null||d.g()),this.j(e)}Xa(e,t){return mx(this),$i(this,e,t),gx(this)}Ya(e,t,n){return mx(this),ms(this,e,n,t),gx(this)}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect"),xe(e,"hand_gestures"),xe(e,"hand_landmarks"),xe(e,"world_hand_landmarks"),xe(e,"handedness");var t=new fi;fs(t,mA,this.l);var n=new ni;ui(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),he(n,"HAND_GESTURES:hand_gestures"),he(n,"LANDMARKS:hand_landmarks"),he(n,"WORLD_LANDMARKS:world_hand_landmarks"),he(n,"HANDEDNESS:handedness"),n.v(t),Ii(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{var r,a,o,c;for(let l of i){i=jc(l);let h=[];for(let d of Vs(i,jy,1))h.push({x:(r=Ke(d,1))!=null?r:0,y:(a=Ke(d,2))!=null?a:0,z:(o=Ke(d,3))!=null?o:0,visibility:(c=Ke(d,4))!=null?c:0});this.landmarks.push(h)}bt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{bt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{var r,a,o,c;for(let l of i){i=to(l);let h=[];for(let d of Vs(i,Jy,1))h.push({x:(r=Ke(d,1))!=null?r:0,y:(a=Ke(d,2))!=null?a:0,z:(o=Ke(d,3))!=null?o:0,visibility:(c=Ke(d,4))!=null?c:0});this.worldLandmarks.push(h)}bt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{bt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(..._x(i,!1)),bt(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{bt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(..._x(i)),bt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function xx(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}jn.prototype.recognizeForVideo=jn.prototype.Ya,jn.prototype.recognize=jn.prototype.Xa,jn.prototype.setOptions=jn.prototype.v,jn.createFromModelPath=function(e,t){return fe(jn,e,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(e,t){return fe(jn,e,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(e,t){return fe(jn,e,t)},jn.HAND_CONNECTIONS=pg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",jn.HAND_CONNECTIONS);var Bn=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ot(e=this.h=new jm,0,1,t=new Xe),this.u=new Jm,Ot(this.h,0,3,this.u),this.l=new rv,Ot(this.h,0,2,this.l),hs(this.l,3,1),Ft(this.l,2,.5),Ft(this.u,2,.5),Ft(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n,i,s;return"numHands"in e&&hs(this.l,3,(t=e.numHands)!=null?t:1),"minHandDetectionConfidence"in e&&Ft(this.l,2,(n=e.minHandDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minHandPresenceConfidence"in e&&Ft(this.u,2,(s=e.minHandPresenceConfidence)!=null?s:.5),this.j(e)}G(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],$i(this,e,t),xx(this)}H(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ms(this,e,n,t),xx(this)}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect"),xe(e,"hand_landmarks"),xe(e,"world_hand_landmarks"),xe(e,"handedness");var t=new fi;fs(t,gA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),he(n,"LANDMARKS:hand_landmarks"),he(n,"WORLD_LANDMARKS:world_hand_landmarks"),he(n,"HANDEDNESS:handedness"),n.v(t),Ii(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=jc(r),this.landmarks.push(bd(i));bt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{bt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=to(r),this.worldLandmarks.push(Uc(i));bt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{bt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var c,l,h,d,u,f,g;var r=this.handedness,a=r.push,o=[];for(let v of i){i=Sd(v);let m=[];for(let p of i.g())m.push({score:(c=Ke(p,2))!=null?c:0,index:(h=(l=Ai(p,1))!=null?l:0)!=null?h:-1,categoryName:(u=(d=An($e(p,3)))!=null?d:"")!=null?u:"",displayName:(g=(f=An($e(p,4)))!=null?f:"")!=null?g:""});o.push(m)}a.call(r,...o),bt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Bn.prototype.detectForVideo=Bn.prototype.H,Bn.prototype.detect=Bn.prototype.G,Bn.prototype.setOptions=Bn.prototype.v,Bn.createFromModelPath=function(e,t){return fe(Bn,e,{baseOptions:{modelAssetPath:t}})},Bn.createFromModelBuffer=function(e,t){return fe(Bn,e,{baseOptions:{modelAssetBuffer:t}})},Bn.createFromOptions=function(e,t){return fe(Bn,e,t)},Bn.HAND_CONNECTIONS=pg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Bn.HAND_CONNECTIONS);var Bv=Wi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function yx(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function vx(e){try{if(!e.F)return e.h;e.F(e.h)}finally{wd(e)}}function Iu(e,t){e=jc(e),t.push(bd(e))}var ae=class extends di{constructor(e,t){super(new Xi(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ot(e=this.l=new uv,0,1,t=new Xe),this.Y=new Jm,Ot(this.l,0,2,this.Y),this.Aa=new _A,Ot(this.l,0,3,this.Aa),this.u=new Md,Ot(this.l,0,4,this.u),this.O=new nv,Ot(this.l,0,5,this.O),this.B=new lv,Ot(this.l,0,6,this.B),this.Z=new hv,Ot(this.l,0,7,this.Z),Ft(this.u,2,.5),Ft(this.u,3,.3),Ft(this.O,2,.5),Ft(this.B,2,.5),Ft(this.B,3,.3),Ft(this.Z,2,.5),Ft(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return ge(this.l,Xe,1)}set baseOptions(e){Ot(this.l,0,1,e)}v(e){var t,n,i,s,r,a,o;return"minFaceDetectionConfidence"in e&&Ft(this.u,2,(t=e.minFaceDetectionConfidence)!=null?t:.5),"minFaceSuppressionThreshold"in e&&Ft(this.u,3,(n=e.minFaceSuppressionThreshold)!=null?n:.3),"minFacePresenceConfidence"in e&&Ft(this.O,2,(i=e.minFacePresenceConfidence)!=null?i:.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Ft(this.B,2,(s=e.minPoseDetectionConfidence)!=null?s:.5),"minPoseSuppressionThreshold"in e&&Ft(this.B,3,(r=e.minPoseSuppressionThreshold)!=null?r:.3),"minPosePresenceConfidence"in e&&Ft(this.Z,2,(a=e.minPosePresenceConfidence)!=null?a:.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Ft(this.Y,2,(o=e.minHandLandmarksConfidence)!=null?o:.5),this.j(e)}G(e,t,n){var i=typeof t!="function"?t:{};return this.F=typeof t=="function"?t:n,yx(this),$i(this,e,i),vx(this)}H(e,t,n,i){var s=typeof n!="function"?n:{};return this.F=typeof n=="function"?n:i,yx(this),ms(this,e,s,t),vx(this)}o(){var e=new pi;We(e,"input_frames_image"),xe(e,"pose_landmarks"),xe(e,"pose_world_landmarks"),xe(e,"face_landmarks"),xe(e,"left_hand_landmarks"),xe(e,"left_hand_world_landmarks"),xe(e,"right_hand_landmarks"),xe(e,"right_hand_world_landmarks");var t=new fi,n=new I1;ui(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))$t(s,2,ld(r,0,Bc));else{if(!(typeof r=="string"||r instanceof os||mm(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");$c(s,2,sd(r,!1),ea())}})(n,this.l.g());var i=new ni;ui(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),kc(i,8,I1,n),Ve(i,"IMAGE:input_frames_image"),he(i,"POSE_LANDMARKS:pose_landmarks"),he(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),he(i,"FACE_LANDMARKS:face_landmarks"),he(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),he(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),he(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),he(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(t),Ii(e,i),Ed(this,e),this.g.attachProtoListener("pose_landmarks",(s,r)=>{Iu(s,this.h.poseLandmarks),bt(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{bt(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=to(s),a.push(Uc(s)),bt(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{bt(this,s)}),this.outputPoseSegmentationMasks&&(he(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),co(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[uo(this,s,!0,!this.F)],bt(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],bt(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{Iu(s,this.h.faceLandmarks),bt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{bt(this,s)}),this.outputFaceBlendshapes&&(xe(e,"extra_blendshapes"),he(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o;var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Sd(s),a.push(ng((o=s.g())!=null?o:[]))),bt(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{bt(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{Iu(s,this.h.leftHandLandmarks),bt(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{bt(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=to(s),a.push(Uc(s)),bt(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{bt(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{Iu(s,this.h.rightHandLandmarks),bt(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{bt(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=to(s),a.push(Uc(s)),bt(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{bt(this,s)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ae.prototype.detectForVideo=ae.prototype.H,ae.prototype.detect=ae.prototype.G,ae.prototype.setOptions=ae.prototype.v,ae.createFromModelPath=function(e,t){return fe(ae,e,{baseOptions:{modelAssetPath:t}})},ae.createFromModelBuffer=function(e,t){return fe(ae,e,{baseOptions:{modelAssetBuffer:t}})},ae.createFromOptions=function(e,t){return fe(ae,e,t)},ae.HAND_CONNECTIONS=pg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ae.HAND_CONNECTIONS),ae.POSE_CONNECTIONS=Bv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ae.POSE_CONNECTIONS),ae.FACE_LANDMARKS_LIPS=cg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ae.FACE_LANDMARKS_LIPS),ae.FACE_LANDMARKS_LEFT_EYE=lg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ae.FACE_LANDMARKS_LEFT_EYE),ae.FACE_LANDMARKS_LEFT_EYEBROW=hg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ae.FACE_LANDMARKS_LEFT_EYEBROW),ae.FACE_LANDMARKS_LEFT_IRIS=Nv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ae.FACE_LANDMARKS_LEFT_IRIS),ae.FACE_LANDMARKS_RIGHT_EYE=ug,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ae.FACE_LANDMARKS_RIGHT_EYE),ae.FACE_LANDMARKS_RIGHT_EYEBROW=dg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ae.FACE_LANDMARKS_RIGHT_EYEBROW),ae.FACE_LANDMARKS_RIGHT_IRIS=Uv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ae.FACE_LANDMARKS_RIGHT_IRIS),ae.FACE_LANDMARKS_FACE_OVAL=fg,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ae.FACE_LANDMARKS_FACE_OVAL),ae.FACE_LANDMARKS_CONTOURS=Fv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ae.FACE_LANDMARKS_CONTOURS),ae.FACE_LANDMARKS_TESSELATION=Ov,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ae.FACE_LANDMARKS_TESSELATION);var wi=class extends di{constructor(e,t){super(new Xi(e,t),"input_image","norm_rect",!0),this.l={classifications:[]},Ot(e=this.h=new dv,0,1,t=new Xe)}C(){return"ImageClassifier"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){return Ot(this.h,0,2,im(e,ge(this.h,Km,2))),this.j(e)}Ga(e,t){return this.l={classifications:[]},$i(this,e,t),this.l}Ha(e,t,n){return this.l={classifications:[]},ms(this,e,n,t),this.l}o(){var e=new pi;We(e,"input_image"),We(e,"norm_rect"),xe(e,"classifications");var t=new fi;fs(t,xA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ve(n,"IMAGE:input_image"),Ve(n,"NORM_RECT:norm_rect"),he(n,"CLASSIFICATIONS:classifications"),n.v(t),Ii(e,n),this.g.attachProtoListener("classifications",(i,s)=>{this.l=RA(rA(i)),bt(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wi.prototype.classifyForVideo=wi.prototype.Ha,wi.prototype.classify=wi.prototype.Ga,wi.prototype.setOptions=wi.prototype.v,wi.createFromModelPath=function(e,t){return fe(wi,e,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(e,t){return fe(wi,e,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(e,t){return fe(wi,e,t)};var li=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!0),this.h=new fv,this.embeddings={embeddings:[]},Ot(e=this.h,0,1,t=new Xe)}C(){return"ImageEmbedder"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t=this.h,n=ge(this.h,k1,2);if(n=n?n.clone():new k1,e.l2Normalize!==void 0){var i=e.l2Normalize;$t(n,1,i==null?i:zu(i))}else"l2Normalize"in e&&$t(n,1);return e.quantize!==void 0?$t(n,2,(i=e.quantize)==null?i:zu(i)):"quantize"in e&&$t(n,2),Ot(t,0,2,n),this.j(e)}Na(e,t){return $i(this,e,t),this.embeddings}Oa(e,t,n){return ms(this,e,n,t),this.embeddings}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect"),xe(e,"embeddings_out");var t=new fi;fs(t,yA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),he(n,"EMBEDDINGS:embeddings_out"),n.v(t),Ii(e,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=cA(i),this.embeddings=(function(r){var a;return{embeddings:Vs(r,oA,1).map(o=>{var l,h,d,u,f,g,v;var c={headIndex:(h=(l=Ai(o,3))!=null?l:0)!=null?h:-1,headName:(u=(d=An($e(o,4)))!=null?d:"")!=null?u:""};if(ty(o,B1,1,qm))o=qr(o=_1(o,B1,1),1,Gi,Yr()),c.floatEmbedding=o.slice();else{let m=new Uint8Array(0);c.quantizedEmbedding=(v=(g=(f=_1(o,aA,2))==null?void 0:f.g())==null?void 0:g.h())!=null?v:m}return c}),timestampMs:vv((a=$e(r,2,void 0,Hu))!=null?a:Qx)}})(i),bt(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};li.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=W1(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=W1(G1(e.quantizedEmbedding),G1(t.quantizedEmbedding))}return e},li.prototype.embedForVideo=li.prototype.Oa,li.prototype.embed=li.prototype.Na,li.prototype.setOptions=li.prototype.v,li.createFromModelPath=function(e,t){return fe(li,e,{baseOptions:{modelAssetPath:t}})},li.createFromModelBuffer=function(e,t){return fe(li,e,{baseOptions:{modelAssetBuffer:t}})},li.createFromOptions=function(e,t){return fe(li,e,t)};var dm=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function YA(e){var n,i,s;var t=(function(r){return Vs(r,ni,1)})(e.ja()).filter(r=>{var a;return((a=An($e(r,1)))!=null?a:"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")});if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&((s=(i=(n=ge(t[0],fi,7))==null?void 0:n.o())==null?void 0:i.g())!=null?s:new Map).forEach((r,a)=>{var o;e.u[Number(a)]=(o=An($e(r,1)))!=null?o:""})}function Sx(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Mx(e){try{let t=new dm(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.l)return t;e.l(t)}finally{wd(e)}}dm.prototype.close=dm.prototype.close;var kn=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new eg,this.B=new pv,Ot(this.h,0,3,this.B),Ot(e=this.h,0,1,t=new Xe)}C(){return"ImageSegmenter"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n;return e.displayNamesLocale!==void 0?$t(this.h,2,Fs(e.displayNamesLocale)):"displayNamesLocale"in e&&$t(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.j(e)}L(){YA(this)}segment(e,t,n){var i=typeof t!="function"?t:{};return this.l=typeof t=="function"?t:n,Sx(this),$i(this,e,i),Mx(this)}eb(e,t,n,i){var s=typeof n!="function"?n:{};return this.l=typeof n=="function"?n:i,Sx(this),ms(this,e,s,t),Mx(this)}Ra(){return this.u}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect");var t=new fi;fs(t,gv,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),n.v(t),Ii(e,n),Ed(this,e),this.outputConfidenceMasks&&(xe(e,"confidence_masks"),he(n,"CONFIDENCE_MASKS:confidence_masks"),co(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>uo(this,r,!0,!this.l)),bt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],bt(this,i)})),this.outputCategoryMask&&(xe(e,"category_mask"),he(n,"CATEGORY_MASK:category_mask"),co(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=uo(this,i,!1,!this.l),bt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,bt(this,i)})),xe(e,"quality_scores"),he(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,bt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};kn.prototype.getLabels=kn.prototype.Ra,kn.prototype.segmentForVideo=kn.prototype.eb,kn.prototype.segment=kn.prototype.segment,kn.prototype.setOptions=kn.prototype.v,kn.createFromModelPath=function(e,t){return fe(kn,e,{baseOptions:{modelAssetPath:t}})},kn.createFromModelBuffer=function(e,t){return fe(kn,e,{baseOptions:{modelAssetBuffer:t}})},kn.createFromOptions=function(e,t){return fe(kn,e,t)};var qA={0:0,1:1,2:2,3:3};function Hp(){return ig()?void 0:document.createElement("canvas")}var Qn=class extends nd{constructor(e,t){super(new VA(e,t)),this.u=new ca,this.delegate="CPU",this.h=0,this.baseOptions=new Xe,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(e){var t,n;return this.delegate=(n=(t=e.baseOptions)==null?void 0:t.delegate)!=null?n:"CPU",super.j(e)}fb(e){if(this.h===0)throw Error("Segmenter is not initialized.");var t;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(t=typeof ImageData!="undefined"&&e instanceof ImageData))if(typeof e!="object"||e===null)t=!1;else{t=e.data;var n=e.width,i=e.height;t=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(t instanceof Uint8ClampedArray||t instanceof Uint8Array)}if(t)t=e.width,n=e.height,e=e.data;else{if([t,n]=sg(e),typeof OffscreenCanvas!="undefined")i=new OffscreenCanvas(t,n);else{if(typeof document=="undefined")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=t,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(e,0,0),e=i.getImageData(0,0,t,n).data}if(!e)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:e.length,width:t,height:n});var s=this.i._malloc(e.length);if(this.i.HEAPU8.set(e,s),this.l=s,!this.i._interactive_segmenter_set_image(this.h,s,t,n,i))throw Error("Failed to set image on native engine.")}segment(e){var h,d;if(this.h===0)throw Error("Segmenter is not initialized.");var t=(function(u){u=u.map(({isCompleted:g,brushMode:v,point:m})=>{var M;v=(M=qA[v])!=null?M:0,m=m.map(({x:T,y:S})=>{var b=new SA;return ja(b,1,T),ja(b,2,S),b});var p=new MA;return Zp(p,g),$c(p,1,Os(v),0),Kp(p,2,m),p});var f=new bA;return Kp(f,1,u),EA(f)})(e);e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e);var n=this.i._malloc(12),i=n+4,s=n+8,r=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var c=this.m;++c.g.P,c.h.set(a,performance.now())}if((r=this.i._interactive_segmenter_segment(this.h,e,t.length,n,i,s))===0)throw Error("Segmentation failed.");(h=this.m)==null||h.za(a);let u=this.i.HEAPU32[n/4],f=this.i.HEAPU32[i/4],g=new Float32Array(this.i.HEAPU8.buffer,r,this.i.HEAPU32[s/4]/4);var l=new Float32Array(g);if(o=u*f,(l instanceof Uint8Array||l instanceof Float32Array)&&l.length!==o)throw Error("Unsupported channel count: "+l.length/o);return new ln([l],!0,!1,(d=this.g.i.canvas)!=null?d:void 0,this.u,u,f)}finally{e!==0&&this.i._free(e),n!==0&&this.i._free(n),r!==0&&this.i._free(r)}}o(){var n,i;this.h!==0&&((n=this.m)==null||n.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var e=new ju;if(this.delegate==="GPU"){var t=new Ym;ls(e,2,Qr,t)}else hs(t=new JT,1,4),ls(e,1,Qr,t);if(Ot(this.baseOptions,0,3,e),e=hA(this.baseOptions),t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t),this.h=this.i._interactive_segmenter_create(t,e.length),this.i._free(t),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");(i=this.m)==null||i.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};Qn.prototype.close=Qn.prototype.close,Qn.prototype.segment=Qn.prototype.segment,Qn.prototype.setImage=Qn.prototype.fb,Qn.prototype.setOptions=Qn.prototype.v,Qn.createFromModelPath=function(e,t){return Uu(Qn,Hp(),e,{baseOptions:{modelAssetPath:t}})},Qn.createFromModelBuffer=function(e,t){return Uu(Qn,Hp(),e,{baseOptions:{modelAssetBuffer:t}})},Qn.createFromOptions=function(e,t){var i;var n=(i=t.canvas)!=null?i:Hp();return Uu(Qn,n,e,t)};var fm=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};fm.prototype.close=fm.prototype.close;var ss=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new eg,this.u=new pv,Ot(this.h,0,3,this.u),Ot(e=this.h,0,1,t=new Xe)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n;return"outputCategoryMask"in e&&(this.outputCategoryMask=(t=e.outputCategoryMask)!=null?t:!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=(n=e.outputConfidenceMasks)!=null?n:!0),super.j(e)}segment(e,t,n,i){var s=typeof n!="function"?n:{};if(this.l=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new _v,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new kp;Zp(r,!0),ja(r,1,t.keypoint.x),ja(r,2,t.keypoint.y),ls(i,1,nm,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new wA;for(r of t.scribble)Zp(t=new kp,!0),ja(t,1,r.x),ja(t,2,r.y),kc(o,1,kp,t);ls(i,2,nm,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),$i(this,e,s);t:{try{let o=new fm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break t}this.l(o)}finally{wd(this)}a=void 0}return a}o(){var e=new pi;We(e,"image_in"),We(e,"roi_in"),We(e,"norm_rect_in");var t=new fi;fs(t,gv,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),Ve(n,"IMAGE:image_in"),Ve(n,"ROI:roi_in"),Ve(n,"NORM_RECT:norm_rect_in"),n.v(t),Ii(e,n),Ed(this,e),this.outputConfidenceMasks&&(xe(e,"confidence_masks"),he(n,"CONFIDENCE_MASKS:confidence_masks"),co(this,"confidence_masks"),this.g.ha("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>uo(this,r,!0,!this.l)),bt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],bt(this,i)})),this.outputCategoryMask&&(xe(e,"category_mask"),he(n,"CATEGORY_MASK:category_mask"),co(this,"category_mask"),this.g.ga("category_mask",(i,s)=>{this.categoryMask=uo(this,i,!1,!this.l),bt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,bt(this,i)})),xe(e,"quality_scores"),he(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,bt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ss.prototype.segment=ss.prototype.segment,ss.prototype.setOptions=ss.prototype.v,ss.createFromModelPath=function(e,t){return fe(ss,e,{baseOptions:{modelAssetPath:t}})},ss.createFromModelBuffer=function(e,t){return fe(ss,e,{baseOptions:{modelAssetBuffer:t}})},ss.createFromOptions=function(e,t){return fe(ss,e,t)};var Ti=class extends di{constructor(e,t){super(new Xi(e,t),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ot(e=this.h=new xv,0,1,t=new Xe)}C(){return"ObjectDetector"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){return e.displayNamesLocale!==void 0?$t(this.h,2,Fs(e.displayNamesLocale)):"displayNamesLocale"in e&&$t(this.h,2),e.maxResults!==void 0?hs(this.h,3,e.maxResults):"maxResults"in e&&$t(this.h,3),e.scoreThreshold!==void 0?Ft(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&$t(this.h,4),e.categoryAllowlist!==void 0?Wu(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&$t(this.h,5),e.categoryDenylist!==void 0?Wu(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&$t(this.h,6),this.j(e)}G(e,t){return this.l={detections:[]},$i(this,e,t),this.l}H(e,t,n){return this.l={detections:[]},ms(this,e,n,t),this.l}o(){var e=new pi;We(e,"input_frame_gpu"),We(e,"norm_rect"),xe(e,"detections");var t=new fi;fs(t,TA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ve(n,"IMAGE:input_frame_gpu"),Ve(n,"NORM_RECT:norm_rect"),he(n,"DETECTIONS:detections"),n.v(t),Ii(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Zy(r),this.l.detections.push(Sv(i));bt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{bt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ti.prototype.detectForVideo=Ti.prototype.H,Ti.prototype.detect=Ti.prototype.G,Ti.prototype.setOptions=Ti.prototype.v,Ti.createFromModelPath=async function(e,t){return fe(Ti,e,{baseOptions:{modelAssetPath:t}})},Ti.createFromModelBuffer=function(e,t){return fe(Ti,e,{baseOptions:{modelAssetBuffer:t}})},Ti.createFromOptions=function(e,t){return fe(Ti,e,t)};var pm=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function bx(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Ex(e){try{let t=new pm(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{wd(e)}}pm.prototype.close=pm.prototype.close;var ti=class extends di{constructor(e,t){super(new Xi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ot(e=this.h=new yv,0,1,t=new Xe),this.B=new hv,Ot(this.h,0,3,this.B),this.l=new lv,Ot(this.h,0,2,this.l),hs(this.l,4,1),Ft(this.l,2,.5),Ft(this.B,2,.5),Ft(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return ge(this.h,Xe,1)}set baseOptions(e){Ot(this.h,0,1,e)}v(e){var t,n,i,s,r;return"numPoses"in e&&hs(this.l,4,(t=e.numPoses)!=null?t:1),"minPoseDetectionConfidence"in e&&Ft(this.l,2,(n=e.minPoseDetectionConfidence)!=null?n:.5),"minTrackingConfidence"in e&&Ft(this.h,4,(i=e.minTrackingConfidence)!=null?i:.5),"minPosePresenceConfidence"in e&&Ft(this.B,2,(s=e.minPosePresenceConfidence)!=null?s:.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=(r=e.outputSegmentationMasks)!=null?r:!1),this.j(e)}G(e,t,n){var i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,bx(this),$i(this,e,i),Ex(this)}H(e,t,n,i){var s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,bx(this),ms(this,e,s,t),Ex(this)}o(){var e=new pi;We(e,"image_in"),We(e,"norm_rect"),xe(e,"normalized_landmarks"),xe(e,"world_landmarks"),xe(e,"segmentation_masks");var t=new fi;fs(t,AA,this.h);var n=new ni;ui(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ve(n,"IMAGE:image_in"),Ve(n,"NORM_RECT:norm_rect"),he(n,"NORM_LANDMARKS:normalized_landmarks"),he(n,"WORLD_LANDMARKS:world_landmarks"),n.v(t),Ii(e,n),Ed(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=jc(r),this.landmarks.push(bd(i));bt(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],bt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=to(r),this.worldLandmarks.push(Uc(i));bt(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],bt(this,i)}),this.outputSegmentationMasks&&(he(n,"SEGMENTATION_MASK:segmentation_masks"),co(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>uo(this,r,!0,!this.u)),bt(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],bt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ti.prototype.detectForVideo=ti.prototype.H,ti.prototype.detect=ti.prototype.G,ti.prototype.setOptions=ti.prototype.v,ti.createFromModelPath=function(e,t){return fe(ti,e,{baseOptions:{modelAssetPath:t}})},ti.createFromModelBuffer=function(e,t){return fe(ti,e,{baseOptions:{modelAssetBuffer:t}})},ti.createFromOptions=function(e,t){return fe(ti,e,t)},ti.POSE_CONNECTIONS=Bv,Be("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",ti.POSE_CONNECTIONS);var KA=30,z={tour:!1,focusIndex:-1,fly:null,forceHover:null,cards:[],layoutId:"scatter",theme:"light",stereo:{on:!1,loading:!1,card:null,group:null}},bn={light:{bg:16119287,fogD:.0105,ground:15593201,gShadowOp:.5,labelBg:"rgba(255,255,255,0.94)",labelBorder:"#e0e0e8",labelFg:"#a07a2a"},dark:{bg:658194,fogD:.0118,ground:592400,gShadowOp:.18,labelBg:"rgba(20,20,27,0.92)",labelBorder:"#34343e",labelFg:"#d9a84e"}},gs=null,_s=document.getElementById("scene"),Zs=new vu({canvas:_s,antialias:!0,powerPreference:"high-performance"});Zs.setPixelRatio(Math.min(devicePixelRatio,2));Zs.setSize(innerWidth,innerHeight);var en=new ec;en.background=new qt(bn.light.bg);en.fog=new tc(bn.light.bg,bn.light.fogD);var Sl=bn.light.fogD,Mn=new Dn(58,innerWidth/innerHeight,.1,3200);Mn.rotation.order="YXZ";var h2=-15,Dd=0,nl=0,mg=new U,gg=new U;function ZA(e){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,e,e);let s=new Zn(t);return s.colorSpace=ze,s}var Lg={frame:"none",frameW:1,cardK:1,fadeK:1.6,bgLight:"#f5f5f7",bgDark:"#0a0b12",fogK:1,starK:1,milkyK:1,idleMin:3},At=Object.assign({},Lg);try{let e=localStorage.getItem("pw.cfg");e&&(At=Object.assign(At,JSON.parse(e)))}catch{}function Dg(){try{localStorage.setItem("pw.cfg",JSON.stringify(At))}catch{}}var Io={none:{label:"\u65E0",ext:0,color:0,front:!1},hair:{label:"\u7EC6\u7EBF",ext:.1,color:12171714,front:!1},white:{label:"\u767D\u8FB9",ext:.34,color:16777215,front:!1},film:{label:"\u80F6\u7247",ext:.52,color:1315866,front:!1},mat:{label:"\u7559\u767D",ext:.95,color:16514041,front:!1},custom:{label:"\u81EA\u5B9A\u4E49",ext:.5,color:16777215,front:!0}},Ys=null;function kv(e,t){return"#"+new qt(e).multiplyScalar(t).getHexString()}function JA(){let e=document.createElement("canvas");e.width=160,e.height=12;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,160,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.75,"rgba(220,230,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.beginPath(),t.ellipse(80,6,80,4,0,0,7),t.fill();let i=new Zn(e);return i.colorSpace=ze,i}var Yd=new qn;Yd.visible=!1;en.add(Yd);var Cr=new qn;Cr.visible=!1;en.add(Cr);var Ng=ZA(48),zv=[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[.72,.8,1],[.72,.8,1],[1,.87,.7]];function _g(e,t,n,i,s,r){let a=new Float32Array(e*3),o=new Float32Array(e*3);for(let h=0;h<e;h++){let d=Math.random()*2-1,u=Math.random()*Math.PI*2,f=t+Math.random()*(n-t),g=Math.sqrt(Math.max(0,1-d*d));a[h*3]=Math.cos(u)*g*f,a[h*3+1]=d*f,a[h*3+2]=Math.sin(u)*g*f;let v=r[Math.random()*r.length|0],m=.62+Math.random()*.38;o[h*3]=v[0]*m,o[h*3+1]=v[1]*m,o[h*3+2]=v[2]*m}let c=new Un;c.setAttribute("position",new an(a,3)),c.setAttribute("color",new an(o,3));let l=new kr(c,new or({size:i,map:Ng,transparent:!0,opacity:s,vertexColors:!0,sizeAttenuation:!1,depthWrite:!1,fog:!1}));return l.userData.baseOp=s,l}var rl=null,al=null,ol=null,wo=null,To=null,dl=new qn;dl.rotation.set(.98,0,.42);Cr.add(dl);function jA(e=1){let t=Math.round(9e3*e),n=new Float32Array(t*3),i=new Float32Array(t*3),s=.9,r=l=>{let h=(l-s)%(Math.PI*2);return h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),Math.abs(h)},a=0;for(;a<t;){let l=Math.random()*Math.PI*2,h=Math.min(1,.42+1.15*Math.exp(-Math.pow(r(l),2)/.22))*(.72+.28*Math.sin(l*3+1.3)*Math.sin(l*.9+.5));if(Math.random()>h)continue;let d=(Math.random()+Math.random()+Math.random()-1.5)*66,u=Math.sin(l*2.1)*12+Math.sin(l*.7+2)*6;if(Math.abs(d-u)<10&&Math.random()<.55)continue;let f=640+Math.random()*380;n[a*3]=Math.cos(l)*f,n[a*3+1]=d,n[a*3+2]=Math.sin(l)*f;let g=Math.exp(-Math.pow(r(l),2)/.5),v=.4+Math.random()*.6;i[a*3]=(.8+.2*g)*v,i[a*3+1]=(.85-.08*g)*v,i[a*3+2]=(1-.32*g)*v,a++}let o=new Un;o.setAttribute("position",new an(n,3)),o.setAttribute("color",new an(i,3));let c=new kr(o,new or({size:1.9,map:Ng,transparent:!0,opacity:1,vertexColors:!0,sizeAttenuation:!1,depthWrite:!1,fog:!1,blending:Vr}));return c.name="gSpecks",c.userData.baseOp=1,c}function QA(e=1){let t=Math.round(90*Math.min(2,e)),n=new Float32Array(t*3),i=new Float32Array(t*3),s=.9;for(let o=0;o<t;o++){let c=s+(Math.random()+Math.random()+Math.random()-1.5)*1.7,l=(Math.random()+Math.random()+Math.random()-1.5)*34,h=720+Math.random()*180;n[o*3]=Math.cos(c)*h,n[o*3+1]=l,n[o*3+2]=Math.sin(c)*h;let d=.72+Math.random()*.28,u=.1+Math.random()*.14;i[o*3]=u,i[o*3+1]=u*.9*d,i[o*3+2]=u*.74*d}let r=new Un;r.setAttribute("position",new an(n,3)),r.setAttribute("color",new an(i,3));let a=new kr(r,new or({size:150,map:Ng,transparent:!0,opacity:.16,vertexColors:!0,sizeAttenuation:!1,depthWrite:!1,fog:!1,blending:Vr}));return a.name="gGlow",a.userData.baseOp=.16,a}function Ug(e=1){[rl,al,ol,wo,To].forEach(t=>{t&&(t.parent&&t.parent.remove(t),t.geometry.dispose(),t.material.dispose())}),rl=_g(Math.round(4500*e),620,980,2.2,.95,zv),al=_g(Math.round(2600*e),620,980,1.5,.6,zv),ol=_g(Math.round(260*e),640,960,3.6,1,[[.68,.78,1],[.85,.9,1],[1,.94,.82],[1,.8,.62],[1,.68,.5]]),Cr.add(rl,al,ol),wo=jA(e),dl.add(wo),To=QA(e),dl.add(To)}Ug(1);var Ld=new ar({map:JA(),transparent:!0,opacity:0,fog:!1,depthWrite:!1,blending:Vr}),Mo=new Br(Ld);Mo.scale.set(170,9,1);en.add(Mo);var tl=9,xg=1,yg=new U,vg=new U;function tR(e,t){nl+=(Dd-nl)*Math.min(1,e*2.1);let n=nl,i=1-nl,s=z.focusIndex>=0;if(Yd.visible=!1,Cr.visible=n>.02&&!s,Cr.visible)if(Cr.rotation.y=t*.0052,rl.material.opacity=rl.userData.baseOp*n*(.8+.2*Math.sin(t*1.15)),al.material.opacity=al.userData.baseOp*n*(.72+.28*Math.sin(t*1.8+2.4)),ol.material.opacity=ol.userData.baseOp*n*(.55+.45*Math.sin(t*2.3+1.2)),wo&&(wo.material.opacity=wo.userData.baseOp*n*At.milkyK),To&&(To.material.opacity=To.userData.baseOp*n*At.milkyK),n>.6&&!s)if(tl+=e,tl>=xg){if(Math.random()<e*.16){tl=0,xg=.85+Math.random()*.6;let a=Math.random()*Math.PI*2,o=620+Math.random()*130;yg.set(Math.cos(a)*o,-420+Math.random()*900,Math.sin(a)*o),vg.set(-Math.sin(a),-.18-Math.random()*.3,Math.cos(a)).multiplyScalar(400+Math.random()*260),Mo.position.copy(yg)}}else{let a=tl/xg;Mo.position.copy(yg).addScaledVector(vg,tl),Ld.opacity=Math.sin(Math.PI*a)*.85,mg.copy(Mo.position).project(Mn),gg.copy(Mo.position).addScaledVector(vg,.02).project(Mn),Ld.rotation=Math.atan2(gg.y-mg.y,gg.x-mg.x)}else Ld.opacity=0;let r=Math.max(0,1-n*1.55);qd.opacity=r,Kd.visible=r>.01}var qd=new Si({color:bn.light.ground,transparent:!0,opacity:1}),Kd=new Sn(new ts(4200,4200),qd);Kd.rotation.x=-Math.PI/2;Kd.position.y=h2-.4;en.add(Kd);var mi={db:null,ok:!1,open(){return new Promise((e,t)=>{let n;try{n=indexedDB.open("photo-world",3)}catch(i){return t(i)}n.onupgradeneeded=()=>{let i=n.result;i.objectStoreNames.contains("photos")||i.createObjectStore("photos",{keyPath:"id"}),i.objectStoreNames.contains("depth")||i.createObjectStore("depth",{keyPath:"id"}),i.objectStoreNames.contains("memories")||i.createObjectStore("memories",{keyPath:"id"})},n.onsuccess=()=>{this.db=n.result,this.ok=!0,e()},n.onerror=()=>t(n.error||new Error("idb open failed")),n.onblocked=()=>t(new Error("idb blocked"))})},tx(e,t="photos"){return this.db.transaction(t,e).objectStore(t)},put(e){return new Promise((t,n)=>{if(!this.ok)return n(new Error("idb not ready"));let i=this.tx("readwrite").put(e);i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})},all(){return new Promise((e,t)=>{if(!this.ok)return t(new Error("idb not ready"));let n=this.tx("readonly").getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>t(n.error)})},clear(){return new Promise((e,t)=>{if(!this.ok)return t(new Error("idb not ready"));let n=this.tx("readwrite").clear();n.onsuccess=()=>e(),n.onerror=()=>t(n.error)})},depthGet(e){return new Promise((t,n)=>{if(!this.ok)return n(new Error("idb not ready"));let i=this.tx("readonly","depth").get(e);i.onsuccess=()=>t(i.result||null),i.onerror=()=>n(i.error)})},depthPut(e){return new Promise((t,n)=>{if(!this.ok)return n(new Error("idb not ready"));let i=this.tx("readwrite","depth").put(e);i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})},memAll(){return new Promise((e,t)=>{if(!this.ok)return t(new Error("idb not ready"));let n=this.tx("readonly","memories").getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>t(n.error)})},memPut(e){return new Promise((t,n)=>{if(!this.ok)return n(new Error("idb not ready"));let i=this.tx("readwrite","memories").put(e);i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})},memDel(e){return new Promise((t,n)=>{if(!this.ok)return n(new Error("idb not ready"));let i=this.tx("readwrite","memories").delete(e);i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})}};function eR(e){try{let t=new DataView(e);if(t.byteLength<12||t.getUint16(0)!==65496)return null;let n=2;for(;n+4<t.byteLength&&t.getUint8(n)===255;){let i=t.getUint8(n+1);if(i===216||i===1||i>=208&&i<=215){n+=2;continue}if(i===218)break;let s=t.getUint16(n+2);if(i===225&&s>8&&n+2+s<=t.byteLength&&t.getUint32(n+4)===1165519206&&t.getUint16(n+8)===0){let r=nR(t,n+10);if(r)return r}n+=2+s}}catch{}return null}function nR(e,t){let n=e.getUint16(t)===18761,i=l=>e.getUint16(t+l,n),s=l=>e.getUint32(t+l,n);if(i(2)!==42)return null;let r=s(4),a=(l,h)=>{if(!l||l+2>e.byteLength)return null;let d=i(l);for(let u=0;u<d;u++){let f=l+2+u*12;if(f+12>e.byteLength)return null;if(i(f)!==h)continue;let g=s(f+4),v=(g<=4?f+8:s(f+8))+t,m="";for(let p=0;p<g-1&&v+p<e.byteLength;p++)m+=String.fromCharCode(e.getUint8(v+p));return/^\d{4}:\d{2}:\d{2} \d{2}:\d{2}:\d{2}/.test(m)?m.slice(0,19):null}return null},o=0,c=Math.min(i(r),256);for(let l=0;l<c;l++){let h=r+2+l*12;if(i(h)===34665){o=s(h+8);break}}return a(o,36867)||a(r,36867)||a(r,306)}function iR(e){if(!e)return null;let t=new Date(e.slice(0,10).replace(/:/g,"-")+"T"+e.slice(11)).getTime();return Number.isFinite(t)?t:null}var cl=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},Ar=e=>(cl(e)+cl(e+57.31)+cl(e+113.79)-1.5)/1.5,u2=7.5,d2=19,f2=42,gi=u2,ii=d2,p2=f2,$n="auto",m2=e=>e<=12?1.45:e<=40?1.18:e<=120?1:e<=300?.88:.78;function sR(){let e=$n==="auto"?m2(z.cards.length):$n;return gi=u2*e,ii=d2*e,p2=f2*e,e}var Eg=(()=>{let e=[];for(let i=-15;i<=15;i++)for(let s=-9;s<=11;s++)for(let r=-15;r<=15;r++){let a=Math.sqrt(i*i+s*1.5*(s*1.5)+r*r);if(a>15+.5)continue;let o=(i+40)*131+(s+20)*17+(r+40)*3;e.push({x:i,y:s,z:r,d:a,jx:Ar(o)*.07,jy:Ar(o+1)*.06,jz:Ar(o+2)*.07})}return e.sort((i,s)=>i.d-s.d),e})();function Lo(e,t,n,i=.12){let s=new Nn;return s.position.copy(e),s.up.set(0,1,0),s.lookAt(t.x+Ar(n*5+21)*i*4,t.y+Ar(n*5+22)*i*3,t.z+Ar(n*5+23)*i*4),s.rotateZ(Ar(n*5+24)*i*1.4),s.rotateX(Ar(n*5+25)*i*.9),s.quaternion.clone()}var rR=(e,t)=>Lo(e,{x:e.x*.2,y:e.y*.2,z:34+e.z*.35},t),Do=e=>({W:e.userData.W,H:e.userData.H}),aR=new En;function Fg(e){let t={minX:1e9,maxX:-1e9,minY:1e9,maxY:-1e9,minZ:1e9,maxZ:-1e9};return e.forEach(n=>{let i=n.userData.to;i.x<t.minX&&(t.minX=i.x),i.x>t.maxX&&(t.maxX=i.x),i.y<t.minY&&(t.minY=i.y),i.y>t.maxY&&(t.maxY=i.y),i.z<t.minZ&&(t.minZ=i.z),i.z>t.maxZ&&(t.maxZ=i.z)}),t}function oR(e){e.forEach((n,i)=>{let s=Eg[i];n.userData.to.set((s.x+s.jx)*ii,(s.y+s.jy)*ii,(s.z+s.jz)*ii),n.userData.toQ.copy(rR(n.userData.to,i))});let t=e.reduce((n,i)=>Math.max(n,i.userData.to.length()),0);return{pos:new U(0,2+t*.09,13+t*1.05),yaw:0,pitch:-.02}}function cR(e,t){let n=[],i={items:[],w:0,h:0};return e.forEach(s=>{let{W:r,H:a}=Do(s),o=(i.items.length?gi:0)+r;i.items.length&&i.w+o>t&&(n.push(i),i={items:[],w:0,h:0}),i.items.push(s),i.w+=i.items.length>1?gi+r:r,i.h=Math.max(i.h,a)}),i.items.length&&n.push(i),n}var lR=9;function Og(e,t){let n=cR(e,Math.min(150,40+e.length*.35)),i=Math.max(...n.map(h=>h.w)),s=t?2.2:0,r=n.reduce((h,d)=>h+d.h,0)+(gi+s)*(n.length-1),a=r/2;n.forEach((h,d)=>{let u=Math.floor(d/lR),f=a-h.h/2,g=-h.w/2;h.items.forEach(v=>{let{W:m}=Do(v);g+=m/2;let p=t?Math.sin(g*.22)*.5+Math.sin(d*.9)*.55:0,M=t?Math.cos(g*.15+u)*.6:0;v.userData.to.set(g,f+p,-u*p2+M),v.userData.toQ.copy(aR),g+=m/2+gi}),a-=h.h/2+gi+s});let o=Fg(e),c=(o.minY+o.maxY)/2,l=Math.max(i*.52,r*.45)+12;return{pos:new U(0,c*.85,o.maxZ+l),yaw:0,pitch:-.01}}var hR=e=>Og(e,!1),uR=e=>Og(e,!0),dR=e=>Og(e,!1);function fR(e){let t=e.length,n=e.map(Do),i=Math.max(...n.map(h=>h.W)),s=Math.max(...n.map(h=>h.H)),r=t<=26?1:t<=80?2:t<=180?3:Math.ceil(t/70),a=Math.ceil(t/r),o=Math.max(9,a*(i+gi+.5)/(Math.PI*2)),c=s+gi+.4;e.forEach((h,d)=>{let u=Math.floor(d/a),g=d%a/a*Math.PI*2+u*(Math.PI/a),v=(u-(r-1)/2)*c,m=new U(Math.cos(g)*o,v,Math.sin(g)*o);h.userData.to.copy(m),h.userData.toQ.copy(Lo(m,{x:0,y:v,z:0},d,.05))});let l=(r-1)/2*c;return{pos:new U(0,l*.5,0),yaw:0,pitch:0}}function pR(e){let t=e.length,n=Math.max(...e.map(Do).map(l=>l.W)),i=2,s=Math.ceil(t/i),r=8.5,a=(n+gi+1.2)/r*1.06,o=2.5,c=s*o;return e.forEach((l,h)=>{let d=h%i,u=Math.floor(h/i),f=u*a+d*Math.PI,g=(u+.5-s/2)*o+(d?o*.5:0),v=new U(Math.cos(f)*r,g,Math.sin(f)*r);l.userData.to.copy(v),l.userData.toQ.copy(Lo(v,{x:Math.cos(f)*40,y:g*.9,z:Math.sin(f)*40},h,.05))}),{pos:new U(0,0,r*2.1+c*.42),yaw:0,pitch:-.05}}function mR(e){let t=e.length,n=Math.max(...e.map(Do).map(r=>r.W)),i=Math.max(19,(n+gi+1.1)*Math.sqrt(t)/3.4),s=Math.PI*(3-Math.sqrt(5));return e.forEach((r,a)=>{let c=1-2*(t===1?.5:(a+.5)/t),l=Math.sqrt(Math.max(0,1-c*c)),h=s*a,d=new U(Math.cos(h)*l*i,c*i,Math.sin(h)*l*i);r.userData.to.copy(d),r.userData.toQ.copy(Lo(d,{x:0,y:0,z:0},a,.04))}),{pos:new U(0,0,0),yaw:0,pitch:0}}function gR(e){let t=e.map(Do),n=Math.max(...t.map(c=>c.W)),i=Math.max(...t.map(c=>c.H)),s=n/2+6.5,r=n+gi+.8,a=[-(i/2+.4),i/2+gi+.4];e.forEach((c,l)=>{let h=l%2?1:-1,d=Math.floor(l/2),u=Math.floor(d/2),f=d%2,g=8-u*r-(f?r/2:0),v=new U(h*s,a[f],g);c.userData.to.copy(v),c.userData.toQ.copy(Lo(v,{x:0,y:v.y,z:g},l,.05))});let o=Fg(e);return{pos:new U(0,.6,o.maxZ+9),yaw:0,pitch:0}}function g2(){let e=new Map;z.cards.forEach((s,r)=>{let a=s.userData.item.dateTs,o="unknown",c="\u672A\u6807\u6CE8\u65F6\u95F4";if(a){let l=new Date(a);o=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`,c=`${l.getFullYear()}\u5E74${l.getMonth()+1}\u6708`}e.has(o)||e.set(o,{key:o,label:c,indices:[]}),e.get(o).indices.push(r)});let n=[...e.keys()].sort((s,r)=>s==="unknown"?1:r==="unknown"?-1:s.localeCompare(r)).map(s=>e.get(s)),i=new Map;return n.forEach((s,r)=>s.indices.forEach(a=>i.set(a,r))),{list:n,giOf:i}}function _R(e){let t=e.length,n=g2(),i=n.list.length,s=22+t*.3,r=n.list.map((l,h)=>{let d=i<=1?.5:h/(i-1),u=-Math.PI/2+d*Math.PI*2.15,f=7.5+d*s;return{x:Math.cos(u)*f,y:(d-.5)*4.6,z:Math.sin(u)*f}}),a=r.map(()=>[]);Eg.forEach(l=>{let h=(l.x+l.jx)*ii,d=(l.y+l.jy)*ii,u=(l.z+l.jz)*ii,f=0,g=1/0;r.forEach((v,m)=>{let p=h-v.x,M=d-v.y,T=u-v.z,S=p*p+M*M+T*T;S<g&&(g=S,f=m)}),a[f].push({P:l,d:g})});let o=new Set,c=new Map;return a.forEach((l,h)=>{l.sort((f,g)=>f.d-g.d);let d=n.list[h].indices,u=Math.min(d.length,l.length);for(let f=0;f<u;f++)c.set(d[f],l[f].P),o.add(l[f].P)}),n.list.forEach((l,h)=>{l.indices.forEach(d=>{if(c.has(d))return;let u=r[h],f=null,g=1/0;for(let v of Eg){if(o.has(v))continue;let m=(v.x+v.jx)*ii-u.x,p=(v.y+v.jy)*ii-u.y,M=(v.z+v.jz)*ii-u.z,T=m*m+p*p+M*M;T<g&&(g=T,f=v)}f&&(c.set(d,f),o.add(f))})}),e.forEach((l,h)=>{let d=c.get(h),u=r[n.giOf.get(h)];l.userData.to.set((d.x+d.jx)*ii,(d.y+d.jy)*ii,(d.z+d.jz)*ii),l.userData.toQ.copy(Lo(l.userData.to,{x:u.x*.85,y:u.y,z:u.z*.85+30},h,.1))}),n.list.forEach((l,h)=>{let d=xR(`${l.label} \xB7 ${l.indices.length}\u5F20`);d.position.set(r[h].x,r[h].y+3,r[h].z),fl.add(d)}),{pos:new U(0,3.4,15+s*1.12),yaw:0,pitch:-.03}}var Ks=[{id:"scatter",name:"\u81EA\u7531\u6563\u5E03",tag:"\u6F02\u6D6E\u4E16\u754C",desc:"\u5747\u5300\u6F02\u6D6E \xB7 \u4E92\u4E0D\u63A5\u89E6",place:oR,fogK:1},{id:"flatwall",name:"\u7167\u7247\u5899",tag:"\u65E0\u9650\u753B\u5E03",desc:"\u5355\u9762\u5DE8\u5899 \xB7 \u62D6\u62FD\u5E73\u79FB \xB7 \u96F6\u91CD\u53E0",place:dR,fogK:.55},{id:"grid",name:"\u77E9\u9635\u5C55\u5899",tag:"\u753B\u5ECA\u6A21\u5F0F",desc:"\u591A\u9762\u5C55\u5899 \xB7 \u6574\u9F50\u6709\u7F1D\u9699",place:hR,fogK:.9},{id:"wave",name:"\u6CE2\u6D6A\u5E55\u5899",tag:"\u547C\u5438\u8282\u5F8B",desc:"\u8D77\u4F0F\u5899\u9762 \xB7 \u9519\u843D\u6CE2\u52A8",place:uR,fogK:.9},{id:"ring",name:"\u73AF\u5F62\u5267\u573A",tag:"\u73AF\u7ED5\u6C89\u6D78",desc:"\u7AD9\u4E0A\u5706\u5FC3 \xB7 \u88AB\u7167\u7247\u73AF\u7ED5",place:fR,fogK:.78},{id:"helix",name:"\u87BA\u65CB\u4E4B\u5854",tag:"\u76D8\u65CB\u5411\u4E0A",desc:"\u53CC\u87BA\u65CB \xB7 \u5411\u5929\u7A7A\u751F\u957F",place:pR,fogK:1},{id:"dome",name:"\u7A79\u9876\u661F\u7A7A",tag:"\u5305\u88F9\u7A79\u9876",desc:"\u7403\u5E55\u5185\u58C1 \xB7 \u7F6E\u8EAB\u6B63\u4E2D\u592E",place:mR,fogK:.5},{id:"tunnel",name:"\u65F6\u5149\u96A7\u9053",tag:"\u7EB5\u6DF1\u7A7F\u884C",desc:"\u4E24\u58C1\u4EA4\u9519 \xB7 \u5411\u6DF1\u5904\u5EF6\u4F38",place:gR,fogK:1.7},{id:"time",name:"\u65F6\u95F4\u661F\u5C9B",tag:"\u62CD\u6444\u5E74\u6708",desc:"\u6309\u62CD\u6444\u65F6\u95F4\u805A\u5C9B \xB7 \u65E7\u2192\u65B0",place:_R,fogK:.95}],da=()=>Ks.find(e=>e.id===z.layoutId)||Ks[0],fl=new qn;en.add(fl);function Bg(){fl.children.forEach(e=>{var t;(t=e.material.map)==null||t.dispose(),e.material.dispose()}),fl.clear()}function xR(e){let t=document.createElement("canvas"),n=t.getContext("2d"),i='600 30px Inter, "PingFang SC", "Microsoft YaHei", sans-serif';n.font=i;let s=Math.ceil(n.measureText(e).width);t.width=s+56,t.height=64;let r=18,a=t.width,o=t.height;n.beginPath(),n.moveTo(r,0),n.arcTo(a,0,a,o,r),n.arcTo(a,o,0,o,r),n.arcTo(0,o,0,0,r),n.arcTo(0,0,a,0,r),n.closePath();let c=bn[z.theme];n.fillStyle=c.labelBg,n.fill(),n.strokeStyle=c.labelBorder,n.lineWidth=2,n.stroke(),n.font=i,n.fillStyle=c.labelFg,n.textAlign="center",n.textBaseline="middle",n.fillText(e,a/2,o/2+1);let l=new Zn(t);l.colorSpace=ze;let h=new Br(new ar({map:l,transparent:!0,depthWrite:!1})),d=.0125;return h.scale.set(a*d,o*d,1),h}var Zd=[],Vv=new ts(1,1),yR=(()=>{let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.beginPath(),t.arc(32,32,13,0,7),t.fillStyle="#d9a84e",t.fill(),t.beginPath(),t.arc(32,32,19,0,7),t.strokeStyle="rgba(217,168,78,.4)",t.lineWidth=5,t.stroke();let n=new Zn(e);return n.colorSpace=ze,n})(),vR=(()=>{let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,14,64,64,64);return n.addColorStop(0,"rgba(8,10,16,0.60)"),n.addColorStop(.55,"rgba(8,10,16,0.26)"),n.addColorStop(1,"rgba(8,10,16,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new Zn(e)})(),SR=new ts(1,1);SR.rotateX(-Math.PI/2);var _2=new Si({map:vR,transparent:!0,opacity:bn.light.gShadowOp,depthWrite:!1}),Hv=null;var mN=new Re,gN=new U,_N=new U,xN=new En;function MR(){Hv&&(Hv.count=0)}function bR(e,t){let n=3,i=n*e.aspect;i>4.6&&(i=4.6,n=i/e.aspect),n>3.6&&(n=3.6,i=n*e.aspect);let s=.85+cl(t*1.7+3)*.38,r=s*At.cardK;n*=r,i*=r;let a=new Si({map:e.tex,side:Hn,fog:!0,toneMapped:!1,transparent:!0}),o=new Sn(Vv,a);o.scale.set(i,n,1),o.userData.cardIndex=t,Zd.push(o);let c=new qn;c.add(o);let l=new Si({color:16777215,transparent:!0,opacity:1,fog:!0,toneMapped:!1,side:Hn}),h=new Sn(Vv,l);h.visible=!1,h.renderOrder=0,c.add(h);let d=new Br(new ar({map:yR,transparent:!0,depthWrite:!1,fog:!1}));return d.scale.set(.62,.62,1),d.position.set(i/2+.16,n/2+.16,.05),d.visible=!1,c.add(d),c.userData={index:t,item:e,mesh:o,W:i,H:n,sizeMul:s,frame:h,phase:Math.random()*Math.PI*2,hk:0,hkv:0,to:new U,toQ:new En,badge:d},c}var bo=null;function ER(e){if(bo!==e&&(kg(),e)){bo=e;let t=e.userData.mesh.material;t.depthTest=!1,t.fog=!1,t.needsUpdate=!0,e.userData.mesh.renderOrder=50}}function kg(){if(!bo)return;let e=bo.userData.mesh.material;e.depthTest=!0,e.fog=!0,e.needsUpdate=!0,bo.userData.mesh.renderOrder=0,bo=null}function x2(){let e=Io[At.frame]||Io.none,t=At.frameW||1;z.cards.forEach(n=>{let i=n.userData,s=i.frame;if(!s)return;if(At.frame==="none"||!i.W){s.visible=!1;return}let r=s.material;e.front&&Ys?(r.map=Ys,r.color.set(16777215)):(r.map=null,r.color.set(e.color)),r.depthWrite=!e.front,r.needsUpdate=!0;let a=(e.front?i.W*.13:e.ext)*t,o=(e.front?i.H*.13:e.ext)*t;s.scale.set(i.W+a*2,i.H+o*2,1),s.position.set(0,0,e.front?.03:-.03),s.renderOrder=e.front?2:0,s.visible=!0})}function y2(){z.cards.forEach(e=>{let t=e.userData,n=t.item,i=3,s=i*n.aspect;s>4.6&&(s=4.6,i=s/n.aspect),i>3.6&&(i=3.6,s=i*n.aspect);let r=(t.sizeMul||1)*At.cardK;t.W=s*r,t.H=i*r,t.mesh.scale.set(t.W,t.H,1),t.badge&&t.badge.position.set(t.W/2+.16,t.H/2+.16,.05)}),x2()}function Nd(){$s.light&&($s.light.bg.set(At.bgLight),$s.light.ground.set(kv(At.bgLight,.945)),$s.dark.bg.set(At.bgDark),$s.dark.ground.set(kv(At.bgDark,.92)))}function xs(e={}){Dg(),Nd(),typeof Cg=="function"&&Cg(z.theme),Sl=bn[z.theme].fogD*(da().fogK||1)*At.fogK,e.stars&&Ug(At.starK),y2(),z.cards.length&&No(!0),sf()}function wR(e){try{let t=document.createElement("canvas"),n=1024,i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,r=Math.min(1,n/Math.max(i,s));t.width=Math.max(2,Math.round(i*r)),t.height=Math.max(2,Math.round(s*r)),t.getContext("2d").drawImage(e,0,0,t.width,t.height);let a=t.toDataURL("image/png");a.length<32e5&&localStorage.setItem("pw.frame",a)}catch{}}function TR(){try{let e=localStorage.getItem("pw.frame");if(!e)return;let t=new Image;t.onload=()=>{let n=new vn(t);n.colorSpace=ze,n.needsUpdate=!0,Ys=n,At.frame==="custom"&&x2(),sf()},t.src=e}catch{}}var rt={pos:new U(0,2.4,27),vel:new U,yaw:0,pitch:-.02,roll:0,wantYaw:0,wantPitch:-.02,wantRoll:0},zg=e=>Math.max(-1.45,Math.min(1.45,e)),Gv=e=>Math.atan2(Math.sin(e),Math.cos(e)),Sg=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function Ml(e,t,n,i=1,s=0){z.fly={t:0,dur:i,fromPos:rt.pos.clone(),toPos:e.clone(),fromYaw:rt.wantYaw,toYaw:rt.wantYaw+Gv(t-rt.wantYaw),fromPitch:rt.wantPitch,toPitch:zg(n),fromRoll:rt.wantRoll,toRoll:rt.wantRoll+Gv(s-rt.wantRoll)},rt.vel.set(0,0,0)}var Xn=null;function Jd(){z.fly=null,rt.vel.set(0,0,0),rt.yaw=rt.wantYaw=0,rt.pitch=rt.wantPitch=-.02,rt.roll=rt.wantRoll=0,Xn?(rt.pos.copy(Xn.pos),rt.yaw=rt.wantYaw=Xn.yaw||0,rt.pitch=rt.wantPitch=Xn.pitch!=null?Xn.pitch:-.02,rt.roll=rt.wantRoll=0):rt.pos.set(0,2.4,27)}var wg=!1;function v2(){if(wg)return;wg=!0;let e=document.getElementById("intro");e&&(e.classList.add("done"),setTimeout(()=>e.remove(),950));let t=Xn||{pos:new U(0,2.4,27),yaw:0,pitch:-.02};rt.pos.set(t.pos.x*2.2,Math.max(t.pos.y,2.4)+12,t.pos.z*2.2+34),rt.yaw=rt.wantYaw=t.yaw||0,rt.pitch=rt.wantPitch=-.05,rt.roll=rt.wantRoll=0,Ml(t.pos,t.yaw||0,t.pitch!=null?t.pitch:-.02,2.8)}var et={on:!1,pan:new Xt(0,0),vx:0,vy:0,z:27,zT:27,zSaved:27,zMin:6.5,zMax:60,bounds:{minX:-20,maxX:20,minY:-12,maxY:12},dragging:!1,lastT:0,tiltY:0,tiltP:0,adopt:!1};function Wv(){return et.z*2*Math.tan(Mn.fov*Math.PI/360)/innerHeight}function AR(){if(!z.cards.length)return;let e=Fg(z.cards);et.bounds={minX:e.minX-7,maxX:e.maxX+7,minY:Math.max(h2+4.5,e.minY-5),maxY:e.maxY+5},et.z=et.zT=Xn?Xn.pos.z:27,et.zMax=Math.max(et.zT*1.3,30),et.pan.set(0,0),et.vx=et.vy=0,et.tiltY=et.tiltP=0,et.adopt=!0}function RR(e,t){if(et.adopt&&(et.pan.set(rt.pos.x,rt.pos.y),et.z=cn.clamp(rt.pos.z,et.zMin,et.zMax),et.adopt=!1),!et.dragging&&!t){et.pan.x+=et.vx*e,et.pan.y+=et.vy*e;let i=Math.pow(.14,e);et.vx*=i,et.vy*=i,Math.abs(et.vx)<.02&&(et.vx=0),Math.abs(et.vy)<.02&&(et.vy=0)}et.pan.x=cn.clamp(et.pan.x,et.bounds.minX,et.bounds.maxX),et.pan.y=cn.clamp(et.pan.y,et.bounds.minY,et.bounds.maxY),et.z+=(et.zT-et.z)*Math.min(1,e*6);let n=Math.min(1,e*5);et.tiltY+=(cn.clamp(-et.vx*.0042,-.095,.095)-et.tiltY)*n,et.tiltP+=(cn.clamp(et.vy*.003,-.075,.075)-et.tiltP)*n,rt.pos.set(et.pan.x,et.pan.y,et.z),rt.yaw=rt.wantYaw=et.tiltY,rt.pitch=rt.wantPitch=et.tiltP,rt.roll=rt.wantRoll=0,rt.vel.set(0,0,0)}var Rn={t:9,dur:1,stagger:.5,total:1.5},Ao=130,Ud=240;function No(e){Ss(),sR(),z.focusIndex>=0&&_i(),jt.on&&G2();let t=z.cards.length;if(Bg(),Xn=null,!t)return;let n=da().place(z.cards);Sl=bn[z.theme].fogD*(da().fogK||1)*At.fogK,z.layoutId==="flatwall"?et.on||(et.on=!0,AR()):et.on&&(et.on=!1,et.vx=et.vy=0),Xn=n;{let i=n.pos.length(),s=10;z.cards.forEach(r=>{s=Math.max(s,r.userData.to.length())}),Ao=Math.max(48,i*.62+s*1.05)*At.fadeK,Ud=Math.max(140,Ao*1.9)*(1+(At.fadeK-1)*.7)}z.cards.forEach((i,s)=>{i.userData.from=i.position.clone(),i.userData.fromQ=i.quaternion.clone(),i.userData.dly=cl(s*.77+3.1)*Rn.stagger}),e?Rn.t=0:(Rn.t=Rn.total+1,z.cards.forEach(i=>{i.position.copy(i.userData.to),i.quaternion.copy(i.userData.toQ)})),qg()}var qs=new Map,jd=!1,S2=0,pl=[0,0],il=0,la=new Xt(-2,-2),Fd=new uc,M2=()=>{let e=[...qs.values()];return Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)};function Ro(){z.fly&&(z.fly=null),z.tour&&(z.tour=!1,Wg())}_s.addEventListener("pointerdown",e=>{try{_s.setPointerCapture(e.pointerId)}catch{}qs.set(e.pointerId,{x:e.clientX,y:e.clientY}),jd=!1,S2=performance.now(),pl=[e.clientX,e.clientY],_s.classList.add("dragging"),Ro(),qs.size===2&&(il=M2())});_s.addEventListener("pointermove",e=>{let t=qs.get(e.pointerId);if(t){if(Math.abs(e.clientX-pl[0])+Math.abs(e.clientY-pl[1])>5&&(jd=!0),qs.size===1)if(et.on&&z.focusIndex<0){let n=performance.now(),i=Math.max(8,n-(et.lastT||n-16))/1e3;et.lastT=n;let s=Wv(),r=e.clientX-t.x,a=e.clientY-t.y;et.pan.x-=r*s,et.pan.y+=a*s,et.vx=et.vx*.7+-r*s/i*.3,et.vy=et.vy*.7+a*s/i*.3}else rt.wantYaw-=(e.clientX-t.x)*.0032,rt.wantPitch=zg(rt.wantPitch-(e.clientY-t.y)*.0029);if(t.x=e.clientX,t.y=e.clientY,qs.size===2){let n=M2();il>0&&(et.on&&z.focusIndex<0?et.zT=cn.clamp(et.zT-(n-il)*Wv()*1.9,et.zMin,et.zMax):(Mn.getWorldDirection(Yi),rt.vel.addScaledVector(Yi,(n-il)*.055))),il=n}}la.x=e.clientX/innerWidth*2-1,la.y=-(e.clientY/innerHeight)*2+1,z.focusIndex>=0&&Po()});function b2(e){let t=qs.get(e.pointerId);if(qs.delete(e.pointerId),qs.size||_s.classList.remove("dragging"),t&&!jd&&performance.now()-S2<450&&Math.abs(e.clientX-pl[0])+Math.abs(e.clientY-pl[1])<6){Fd.setFromCamera(new Xt(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),Mn);let n=Fd.intersectObjects(Zd,!1).find(i=>i.object.material.opacity>.3);n&&!(z.stereo.on&&n.object.userData.cardIndex===z.focusIndex)?gl(n.object.userData.cardIndex):z.focusIndex>=0&&(z.stereo.on?Ss():_i())}}_s.addEventListener("pointerup",b2);_s.addEventListener("pointercancel",b2);_s.addEventListener("wheel",e=>{if(e.preventDefault(),Ro(),z.focusIndex>=0){let t=z.cards[z.focusIndex];if(!t)return;let i=t.getWorldPosition(new U).sub(rt.pos),s=i.length(),r=cn.clamp(s+(e.deltaY<0?-.85:.85),1.5,26);rt.pos.addScaledVector(i.normalize(),s-r);return}if(et.on){et.zT=cn.clamp(et.zT+e.deltaY*.022,et.zMin,et.zMax);return}Mn.getWorldDirection(Yi),rt.vel.addScaledVector(Yi,e.deltaY<0?3.4:-3.4)},{passive:!1});var ml=document.getElementById("focusbar");function gl(e){let t=z.cards[e];if(!t)return;Ss(),z.focusIndex=e,z.tour&&(z.tour=!1,Wg()),et.on&&(et.zSaved=et.zT,et.dragging=!1,et.vx=0,et.vy=0);let n=t.userData.to.clone(),i=t.userData.toQ,s=new U(0,0,1).applyQuaternion(i).normalize(),r=new U(0,1,0).applyQuaternion(i),a=Math.max(3.4,t.userData.W*1.5,t.userData.H*1.1),o=n.clone().addScaledVector(s,a);t.position.copy(n),t.quaternion.copy(i);let c=s.clone(),l=r.clone().addScaledVector(c,-r.dot(c)).normalize(),h=new U().crossVectors(l,c).normalize(),d=new Bi().setFromQuaternion(new En().setFromRotationMatrix(new Re().makeBasis(h,l,c)),"YXZ");Ml(o,d.y,d.x,1,d.z);let u=t.userData.item;document.getElementById("fName").textContent=u.name;let f=u.dateTs||!u.sample&&u.date;document.getElementById("fDate").textContent=(f?new Date(f).toLocaleDateString("zh-CN")+" \xB7 ":"")+`${e+1} / ${z.cards.length}`,ml.classList.add("show"),document.body.classList.add("focusing"),Po(),ER(t),Kg(t)}function _i(){Ss(),!(z.focusIndex<0)&&(z.focusIndex=-1,ml.classList.remove("show"),ml.classList.remove("idle"),clearTimeout(Tg),document.body.classList.remove("focusing"),kg(),pa(!1),rt.wantRoll=0,et.on&&(et.pan.set(rt.pos.x,rt.pos.y),et.z=rt.pos.z,et.zT=cn.clamp(et.zSaved,et.zMin,et.zMax),et.vx=et.vy=0))}function Od(e){z.focusIndex<0||gl((z.focusIndex+e+z.cards.length)%z.cards.length)}document.getElementById("fPrev").onclick=()=>Od(-1);document.getElementById("fNext").onclick=()=>Od(1);document.getElementById("fClose").onclick=()=>_i();document.getElementById("fStereo").onclick=()=>Vg();document.getElementById("fTheme").onclick=()=>Uo(z.theme==="dark"?"light":"dark");document.getElementById("stX").onclick=()=>Ss();var Tg=null;function Po(){z.focusIndex<0||(ml.classList.remove("idle"),clearTimeout(Tg),Tg=setTimeout(()=>{z.focusIndex>=0&&!z.stereo.on&&ml.classList.add("idle")},2800))}var CR="https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1",IR="https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite",tn={pipe:null,seg:null,segTried:!1,dev:"",T:null,mpSet:{}},Xv=e=>import(e);function PR(e){try{if(e.status==="progress"&&e.total){let t=Math.min(100,Math.round(e.loaded/e.total*100));ll.textContent=`AI \u6A21\u578B\u4E0B\u8F7D\u4E2D ${t}% \u2014 \u9996\u6B21\u9700\u4E0B\u8F7D\uFF0C\u4E4B\u540E\u79BB\u7EBF\u79D2\u5F00`}else e.status==="initiate"?ll.textContent="AI \u6A21\u578B\u51C6\u5907\u4E2D\u2026\uFF08\u9996\u6B21\u7EA6 27MB\uFF0C\u5B8C\u6210\u540E\u79BB\u7EBF\u53EF\u7528\uFF09":e.status==="ready"&&(ll.textContent="AI \u666F\u6DF1\u5206\u6790\u4E2D\u2026")}catch{}}async function LR(){if(tn.T)return tn.T;try{tn.T=await Xv("models/tf/transformers.min.js"),tn.T.env.backends.onnx.wasm.wasmPaths="models/tf/"}catch{tn.T=await Xv(CR)}return tn.T}async function DR(){if(tn.pipe)return tn.pipe;let e=await LR();e.env.allowLocalModels=!0,e.env.localModelPath="models/",e.env.remoteHost="https://hf-mirror.com/";let n=typeof navigator!="undefined"&&!!navigator.gpu?["webgpu","wasm"]:["wasm"],i;for(let s of n)try{return tn.pipe=await e.pipeline("depth-estimation","onnx-community/depth-anything-v2-small",{device:s,dtype:"q8",progress_callback:PR}),tn.dev=s,tn.pipe}catch(r){i=r}throw i||new Error("depth pipeline init failed")}async function NR(){if(tn.seg)return tn.seg;if(tn.segTried)return null;tn.segTried=!0;for(let e of["models/mp/",Pg]){let t;try{tn.mpSet[e]||(tn.mpSet[e]=await Ns.forVisionTasks(e)),t=tn.mpSet[e]}catch{continue}for(let n of["models/selfie_segmenter.tflite",IR])for(let i of["GPU","CPU"])try{return tn.seg=await kn.createFromOptions(t,{baseOptions:{modelAssetPath:n,delegate:i},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1}),tn.seg}catch{}}return null}function Ir(e){let t=e.userData.item;return t.rec&&t.rec.id||"smp:"+t.name+"|"+t.w+"x"+t.h+"|"+(t.dateTs||0)}async function UR(e){let t=await mi.depthGet(Ir(e)).catch(()=>null);if(t&&t.d)return t;let n=e.userData.item.tex.image;await new Promise(T=>requestAnimationFrame(()=>requestAnimationFrame(T)));let s=await(await DR())(n),r=s.predicted_depth.dims,a=r[r.length-2],o=r[r.length-1],c=s.predicted_depth.data,l=1/0,h=-1/0;for(let T=0;T<c.length;T++)c[T]<l&&(l=c[T]),c[T]>h&&(h=c[T]);let d=h-l||1,u=256,f=256,g=new Uint8Array(u*f);for(let T=0;T<f;T++){let S=Math.min(a-1,T/(f-1)*(a-1))|0;for(let b=0;b<u;b++){let w=Math.min(o-1,b/(u-1)*(o-1))|0;g[T*u+b]=Math.round((c[S*o+w]-l)/d*255)}}let v=null,m=0,p=await NR();if(p)try{let T=p.segment(n),S=T.confidenceMasks||[],b=S.length>1?S[1]:S[0];if(b){let w=b.getAsFloat32Array(),R=b.width,x=b.height;m=128,v=new Uint8Array(m*m);for(let E=0;E<m;E++){let C=Math.min(x-1,E/(m-1)*(x-1))|0;for(let L=0;L<m;L++){let F=Math.min(R-1,L/(m-1)*(R-1))|0;v[E*m+L]=Math.round(w[C*R+F]*255)}}}S.forEach(w=>{try{w.close()}catch{}});try{T.close()}catch{}}catch{v=null,m=0}let M={id:Ir(e),w:u,h:f,d:g,mw:m,mh:v?m:0,m:v};return mi.depthPut(M).catch(()=>{}),M}var FR=72,OR=48;function BR(e,t,n,i,s){let r=new Uint8Array(t*n),a=0;for(let l=0;l<n;l++){let h=Math.min(s-1,l/(n-1)*(s-1))|0;for(let d=0;d<t;d++){let u=Math.min(s-1,d/(t-1)*(s-1))|0;i[h*s+u]>115&&(r[l*t+d]=1,a++)}}for(let l=0;l<2;l++){let h=r.slice();for(let d=0;d<n;d++)for(let u=0;u<t;u++){let f=d*t+u;h[f]||(u>0&&h[f-1]||u<t-1&&h[f+1]||d>0&&h[f-t]||d<n-1&&h[f+t])&&(r[f]=1,a++)}}let o=r.slice(),c=0;for(;a>0&&c++<220;){let l=r.slice();for(let h=0;h<n;h++)for(let d=0;d<t;d++){let u=h*t+d;if(!l[u])continue;let f=0,g=0;d>0&&!l[u-1]&&(f+=e[u-1],g++),d<t-1&&!l[u+1]&&(f+=e[u+1],g++),h>0&&!l[u-t]&&(f+=e[u-t],g++),h<n-1&&!l[u+t]&&(f+=e[u+t],g++),g&&(e[u]=Math.round(f/g),r[u]=0,a--)}}for(let l=0;l<2;l++){let h=e.slice();for(let d=1;d<n-1;d++)for(let u=1;u<t-1;u++){let f=d*t+u;o[f]&&(e[f]=Math.round((h[f-1]+h[f+1]+h[f-t]+h[f+t]+h[f])/5))}}return e}function kR(e,t,n){let i=e.width,s=e.height,r=(E,C)=>{let L=document.createElement("canvas");return L.width=E,L.height=C,L},a=72,o=Math.max(8,Math.round(72*s/i)),c=r(a,o),l=c.getContext("2d");l.drawImage(e,0,0,a,o);let h=l.getImageData(0,0,a,o),d=h.data,u=new Uint8Array(a*o),f=0;for(let E=0;E<o;E++){let C=Math.min(n-1,E/(o-1)*(n-1))|0;for(let L=0;L<a;L++){let F=Math.min(n-1,L/(a-1)*(n-1))|0;t[C*n+F]>100&&(u[E*a+L]=1,f++)}}let g=0;for(;f>0&&g++<300;){let E=u.slice();for(let C=0;C<o;C++)for(let L=0;L<a;L++){let F=C*a+L;if(!E[F])continue;let G=0,N=0,H=0,$=0;L>0&&!E[F-1]&&(G+=d[F*4-4],N+=d[F*4-3],H+=d[F*4-2],$++),L<a-1&&!E[F+1]&&(G+=d[F*4+4],N+=d[F*4+5],H+=d[F*4+6],$++),C>0&&!E[F-a*1]&&(G+=d[F*4-a*4],N+=d[F*4-a*4+1],H+=d[F*4-a*4+2],$++),C<o-1&&!E[F+a*1]&&(G+=d[F*4+a*4],N+=d[F*4+a*4+1],H+=d[F*4+a*4+2],$++),$&&(d[F*4]=G/$,d[F*4+1]=N/$,d[F*4+2]=H/$,d[F*4+3]=255,u[F]=0,f--)}}l.putImageData(h,0,0);let v=r(i,s),m=v.getContext("2d");m.filter="blur("+Math.max(4,Math.round(i*.015))+"px)",m.drawImage(c,0,0,i,s),m.filter="none";let p=r(n,n),M=p.getContext("2d"),T=M.createImageData(n,n);for(let E=0;E<t.length;E++)T.data[E*4]=255,T.data[E*4+1]=255,T.data[E*4+2]=255,T.data[E*4+3]=t[E];M.putImageData(T,0,0);let S=r(i,s),b=S.getContext("2d");b.filter="blur("+Math.max(2,Math.round(i*.012))+"px)",b.drawImage(p,0,0,i,s),b.filter="none",b.globalAlpha=.85,b.drawImage(p,0,0,i,s),b.globalAlpha=1,m.globalCompositeOperation="destination-in",m.drawImage(S,0,0),m.globalCompositeOperation="source-over";let w=r(i,s),R=w.getContext("2d");R.drawImage(e,0,0),R.drawImage(v,0,0);let x=new Zn(w);return x.colorSpace=ze,x.generateMipmaps=!0,x.minFilter=Mi,x.anisotropy=Math.min(4,Zs.capabilities.getMaxAnisotropy()),x}function zR(e,t){let{W:n,H:i}=e.userData,s=n*.115,r=n*.115;t.m&&t.mw&&!t._filled&&(t.d=BR(t.d,t.w,t.h,t.m,t.mw),t.bgTex=kR(e.userData.item.tex.image,t.m,t.mw),t._filled=!0);let a=new ts(n,i,FR,OR),o=a.attributes.position,c=o.count,l=new Float32Array(c);for(let m=0;m<c;m++){let p=o.getX(m)/n+.5,M=o.getY(m)/i+.5,T=Math.min(t.w-1,Math.round(p*(t.w-1))),S=Math.min(t.h-1,Math.round((1-M)*(t.h-1))),b=t.d[S*t.w+T]/255,w=(Math.pow(b,1.12)-.42)*s*2;l[m]=w,o.setZ(m,w)}let h=new qn,d=e.userData.item.tex,u=t.bgTex||d,f=new Si({map:u,side:Hn,fog:!0,toneMapped:!1,depthTest:!1}),g=new Sn(a,f);g.renderOrder=50,h.add(g);let v=null;if(t.m){let m=document.createElement("canvas");m.width=m.height=t.mw;let p=m.getContext("2d"),M=p.createImageData(t.mw,t.mh);for(let E=0;E<t.m.length;E++){let C=t.m[E];M.data[E*4]=C,M.data[E*4+1]=C,M.data[E*4+2]=C,M.data[E*4+3]=255}p.putImageData(M,0,0);let T=document.createElement("canvas");T.width=T.height=t.mw;let S=T.getContext("2d");S.filter="blur(2.5px)",S.drawImage(m,0,0);let b=new Zn(T),w=a.clone(),R=w.attributes.position;for(let E=0;E<c;E++){let C=R.getX(E)/n+.5,L=R.getY(E)/i+.5,F=Math.min(t.mw-1,Math.round(C*(t.mw-1))),G=Math.min(t.mh-1,Math.round((1-L)*(t.mh-1))),N=t.m[G*t.mw+F]/255;R.setZ(E,l[E]+Math.pow(N,1.3)*r)}let x=new Si({map:d,alphaMap:b,transparent:!0,side:Hn,fog:!0,toneMapped:!1,depthWrite:!1,depthTest:!1});v=new Sn(w,x),v.renderOrder=51,h.add(v)}return h.userData={bgMesh:g,personMesh:v},h}var Bd=document.getElementById("stBox"),ll=document.getElementById("stTxt"),Eo=document.getElementById("fStereo");async function Vg(){let e=z.stereo;if(e.on)return Ss();if(!e.loading){if(z.focusIndex<0){we("\u5148\u70B9\u51FB\u4E00\u5F20\u7167\u7247\u98DE\u8FD1\uFF0C\u518D\u6309 V \u5F00\u542F\u7ACB\u4F53\u89C6\u56FE");return}e.loading=!0,Eo&&Eo.classList.add("loading"),Bd.classList.add("show"),ll.textContent="AI \u6A21\u578B\u51C6\u5907\u4E2D\u2026\uFF08\u9996\u6B21\u7EA6 27MB\uFF0C\u5B8C\u6210\u540E\u79BB\u7EBF\u53EF\u7528\uFF09";try{let t=z.cards[z.focusIndex];if(t.userData._stereo||(t.userData._stereo=await UR(t)),z.focusIndex<0||z.cards[z.focusIndex]!==t)return;let n=zR(t,t.userData._stereo);t.add(n),t.userData.mesh.visible=!1,t.userData.frame&&(t.userData.frame.visible=!1),e.on=!0,e.card=t,e.group=n,e.rx=0,e.ry=0,ll.textContent="\u7ACB\u4F53\u89C6\u56FE \xB7 \u79FB\u52A8\u9F20\u6807\u73AF\u89C6 \xB7 \u70B9\u7A7A\u767D\u5904\u6216\u6309 Esc \u9000\u51FA",we("<b>\u7ACB\u4F53\u89C6\u56FE\u5DF2\u5F00\u542F</b><br>AI \u63A8\u6D4B\u4E86\u6BCF\u4E2A\u50CF\u7D20\u7684\u8FDC\u8FD1\uFF0C\u7167\u7247\u5F2F\u6210\u4E86\u66F2\u9762"+(t.userData._stereo.m?"<br>\u68C0\u6D4B\u5230\u4EBA\u7269\uFF0C\u5DF2\u72EC\u7ACB\u5206\u5C42\u6D6E\u51FA \u2014 \u79FB\u52A8\u9F20\u6807\u611F\u53D7\u524D\u540E":"<br>\u8FD9\u5F20\u7167\u7247\u6CA1\u68C0\u6D4B\u5230\u4EBA\u7269\uFF0C\u5F53\u524D\u4E3A\u7EAF\u666F\u6DF1\u6A21\u5F0F"),5200)}catch{Bd.classList.remove("show"),we("<b>\u7ACB\u4F53\u89C6\u56FE\u672A\u80FD\u5F00\u542F</b><br>"+(location.protocol==="file:"?"\u8BF7\u7528\u672C\u5730\u670D\u52A1\uFF08localhost\uFF09\u6253\u5F00\u4EE5\u79BB\u7EBF\u4F7F\u7528\uFF1B\u6216\u8054\u7F51\u540E\u91CD\u8BD5":"AI \u6A21\u578B\u83B7\u53D6\u5931\u8D25\uFF08\u5DF2\u5C1D\u8BD5\u672C\u5730 / \u955C\u50CF / \u5B98\u65B9\u6E90\uFF09\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5"))}finally{e.loading=!1,Eo&&Eo.classList.remove("loading")}}}function Ss(){let e=z.stereo;e.group&&(e.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.alphaMap&&t.material.alphaMap.dispose(),t.material.dispose())}),e.card&&e.card.remove(e.group)),e.card&&(e.card.userData.mesh.visible=!0,e.card.userData.frame&&(e.card.userData.frame.visible=!!At.frame&&At.frame!=="none")),e.on=!1,e.card=null,e.group=null,Bd&&Bd.classList.remove("show"),Eo&&Eo.classList.remove("loading"),z.focusIndex>=0&&Po()}function VR(e){let t=z.stereo;if(!t.on||!t.group)return;let n=la.x<-1.5?0:cn.clamp(la.x,-1,1),i=la.y<-1.5?0:cn.clamp(la.y,-1,1),s=-n*.075,r=i*.055,a=Math.min(1,e*4.2);t.ry+=(s-t.ry)*a,t.rx+=(r-t.rx)*a,t.group.rotation.set(t.rx,t.ry,0)}function HR(){let e=z.stereo;if(!e.on||!e.group)return{on:!1};let t=e.group.userData,n=t.bgMesh.geometry.attributes.position,i=1e9,s=-1e9;for(let a=0;a<n.count;a++){let o=n.getZ(a);o<i&&(i=o),o>s&&(s=o)}let r=0;if(t.personMesh){let a=t.personMesh.geometry.attributes.position;for(let o=0;o<a.count;o++)r=Math.max(r,a.getZ(o))}return{on:!0,zmin:+i.toFixed(3),zmax:+s.toFixed(3),person:!!t.personMesh,pmax:+r.toFixed(3),dev:tn.dev}}var Ce=new Set;addEventListener("keydown",e=>{if(!(e.target&&e.target.tagName==="INPUT")){if(e.code==="Space"&&e.preventDefault(),/^Digit[1-9]$/.test(e.code)){let t=Ks[Number(e.code.slice(5))-1];t&&(zd(t.id),fa());return}if(e.code==="KeyT"){Gg();return}if(e.code==="KeyV"){Vg();return}if(e.code==="KeyG"){U2();return}if(e.code==="KeyM"){Uo(z.theme==="dark"?"light":"dark");return}if(e.code==="KeyP"){Ig(!Rr);return}if(e.code==="KeyH"){nf();return}if(e.code==="Escape"){if(Rr){Ig(!1);return}if(vs.classList.contains("show")){fa();return}if(z.stereo.on){Ss();return}if(Qt.on){Wd();return}_i();return}if(z.focusIndex>=0&&e.code==="ArrowRight"){Po(),Od(1);return}if(z.focusIndex>=0&&e.code==="ArrowLeft"){Po(),Od(-1);return}Ce.add(e.code)}});addEventListener("keyup",e=>Ce.delete(e.code));addEventListener("blur",()=>Ce.clear());var Hg=document.getElementById("btnTour");function Gg(){z.tour=!z.tour,z.tour&&z.focusIndex>=0&&_i(),Wg(),Hg.blur()}function Wg(){Hg.classList.toggle("on",z.tour)}Hg.onclick=Gg;var GR=/\.(jpe?g|png|webp|avif|gif|bmp)$/i,E2=/\.(heic|heif|hif|heics|heifs)$/i,WR=()=>Math.min(Zs.capabilities.maxTextureSize||4096,4096),XR=e=>e<=80?WR():e<=250?2560:e<=600?1920:1600;function kd(e){return new Promise((t,n)=>{let i=new Image;i.onload=()=>t(i),i.onerror=()=>n(new Error("decode")),i.src=e})}function w2(e,t,n){let i=document.createElement("canvas");i.width=t,i.height=n,i.getContext("2d").drawImage(e,0,0,t,n);let s=new Zn(i);return s.colorSpace=ze,s.generateMipmaps=!0,s.minFilter=Mi,s.magFilter=on,s.anisotropy=Zs.capabilities.getMaxAnisotropy(),s.needsUpdate=!0,{tex:s,cv:i}}async function T2(e){try{let t=new Uint8Array(await e.slice(0,16).arrayBuffer()),n=[...t].map(s=>s.toString(16).padStart(2,"0")).join(""),i=String.fromCharCode(...t);if(t[0]===255&&t[1]===216)return"jpeg";if(n.startsWith("89504e47"))return"png";if(i.startsWith("RIFF")&&i.slice(8,12)==="WEBP")return"webp";if(i.startsWith("GIF8"))return"gif";if(i.startsWith("BM"))return"bmp";if(i.slice(4,8)==="ftyp"){let s=i.slice(8,12);return/^(avif|avis)$/.test(s)?"avif":/^(heic|heix|hevc|hevx|heim|heis|hevm|hevs|mif1|msf1)$/.test(s)?"heif":"ftyp-other"}return"unknown"}catch{return"unknown"}}async function $R(e){if(await T2(e)==="heif"||E2.test(e.name)||/hei[cf]/i.test(e.type)){let s="";try{let o=await(await YR())({blob:e,toType:"image/jpeg",quality:1}),c=Array.isArray(o)?o[0]:o;if(!c||!c.size)throw new Error("\u89E3\u7801\u8F93\u51FA\u4E3A\u7A7A");return{img:await createImageBitmap(c),storeBlob:c,via:"libheif",name:e.name.replace(/\.(heic|heif|hif|heics|heifs)$/i,".jpg")}}catch(a){s=String(a&&(a.message||a))}try{return{img:await createImageBitmap(e),storeBlob:e,name:e.name,via:"native"}}catch{}let r=URL.createObjectURL(e);try{return{img:await kd(r),storeBlob:e,name:e.name,via:"img"}}catch{throw new Error("HEIC \u89E3\u7801\u5931\u8D25"+(s?"\uFF08"+s+"\uFF09":"\uFF08\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\uFF09"))}finally{URL.revokeObjectURL(r)}}let i=URL.createObjectURL(e);try{return{img:await kd(i),storeBlob:e,name:e.name,via:"img"}}catch{throw new Error("\u56FE\u7247\u65E0\u6CD5\u89E3\u7801\uFF08\u6587\u4EF6\u635F\u574F\u6216\u975E\u56FE\u7247\u683C\u5F0F\uFF09")}finally{URL.revokeObjectURL(i)}}function A2(e){let t=document.createElement("canvas");t.width=t.height=8;let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(e,0,0,8,8);let i=n.getImageData(0,0,8,8).data,s=[];for(let c=0;c<64;c++)s.push(.299*i[c*4]+.587*i[c*4+1]+.114*i[c*4+2]);let r=s.reduce((c,l)=>c+l,0)/64,a=0,o=0;for(let c=0;c<32;c++)s[c]>r&&(a|=1<<c);for(let c=0;c<32;c++)s[32+c]>r&&(o|=1<<c);return[a>>>0,o>>>0]}function $v(e,t){let n=e[0]^t[0],i=0;for(;n;)n&=n-1,i++;for(n=e[1]^t[1];n;)n&=n-1,i++;return i}function Yv(e,t){let i=o=>{let c=document.createElement("canvas");c.width=c.height=32;let l=c.getContext("2d",{willReadFrequently:!0});l.drawImage(o,0,0,32,32);let h=l.getImageData(0,0,32,32).data,d=new Float32Array(1024);for(let u=0;u<1024;u++)d[u]=.299*h[u*4]+.587*h[u*4+1]+.114*h[u*4+2];return d},s=i(e),r=i(t),a=0;for(let o=0;o<s.length;o++)a+=Math.abs(s[o]-r[o]);return a/s.length<10}var Rd=null;function YR(){return window.heic2any?Promise.resolve(window.heic2any):(Rd||(Rd=new Promise((e,t)=>{let n=document.createElement("script");n.src="models/heic2any.min.js",n.onload=()=>window.heic2any?e(window.heic2any):t(new Error("heic lib invalid")),n.onerror=()=>{Rd=null,t(new Error("heic lib load fail"))},document.head.appendChild(n)})),Rd)}async function qR(e,t){let n=await $R(e),i=n.img,s=n.name,r=n.storeBlob,a=i.naturalWidth||i.width,o=i.naturalHeight||i.height,c=Math.min(1,t/Math.max(a,o));a=Math.max(2,Math.round(a*c)),o=Math.max(2,Math.round(o*c));let{tex:l,cv:h}=w2(i,a,o),d=null;try{d=eR(await e.slice(0,262144).arrayBuffer())}catch{}let u=iR(d),f=r,g=A2(i),v=`n:${e.name}|s:${e.size}|m:${e.lastModified}`;return{tex:l,w:a,h:o,aspect:a/o,name:s,date:e.lastModified,shotAt:d,dateTs:u,size:e.size,ah:g,rec:f?{id:v,name:s,shotAt:d,dateTs:u,blob:f,ah:g}:null}}async function KR(e){var a;let t=await createImageBitmap(e.blob),n=t.width,i=t.height,{tex:s}=w2(t,n,i),r=e.ah||A2(t);return(a=t.close)==null||a.call(t),{tex:s,w:n,h:i,aspect:n/i,name:e.name,date:e.dateTs||0,shotAt:e.shotAt,dateTs:e.dateTs,size:e.blob.size,ah:r}}var qv=[[69,76,92],[84,78,72],[62,82,84],[78,70,84],[92,84,66],[66,70,78]];function ZR(e){let t=[[3,2],[4,3],[2,3],[1,1],[3,2],[16,9]],[n,i]=t[e%t.length],s=420,r=Math.round(s*i/n),a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d"),c=Math.min(s,r),l=qv[e%qv.length],h=[1,.92,1.08,.96,1.04][e%5],d=l.map(g=>Math.max(0,Math.min(255,Math.round(g*h))));o.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,o.fillRect(0,0,s,r);let u=Math.round(c*.07);o.strokeStyle="rgba(255,255,255,0.13)",o.lineWidth=Math.max(1,Math.round(c*.007)),o.strokeRect(u,u,s-u*2,r-u*2),o.fillStyle="#e0a94e",o.font=`600 ${Math.round(c*.21)}px Inter, system-ui, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(e+1).padStart(2,"0"),s/2,r/2-c*.055),o.fillStyle="rgba(255,255,255,0.44)",o.font=`500 ${Math.round(c*.052)}px Inter, system-ui, sans-serif`,o.fillText("\u793A\u4F8B SAMPLE",s/2,r/2+c*.15);let f=new Zn(a);return f.colorSpace=ze,f.needsUpdate=!0,{tex:f,w:s,h:r,aspect:n/i,name:`\u793A\u4F8B ${e+1}`,date:0,sample:!0}}var Ag=Array.from({length:18},(e,t)=>`demo-${String(t+1).padStart(2,"0")}.jpg`),Qd=!1;async function JR(){let e=[];for(let t=0;t<Ag.length;t++)try{let n=await kd("samples/"+Ag[t]),i=n.naturalWidth,s=n.naturalHeight;if(!i||!s)continue;let r=document.createElement("canvas");r.width=i,r.height=s,r.getContext("2d").drawImage(n,0,0,i,s);let a=new Zn(r);a.colorSpace=ze,a.generateMipmaps=!0,a.minFilter=Mi,a.magFilter=on,a.anisotropy=Math.min(4,Zs.capabilities.getMaxAnisotropy()),a.needsUpdate=!0,e.push({tex:a,w:i,h:s,aspect:i/s,name:`\u6F14\u793A ${t+1}`,date:0,sample:!0,demo:!0})}catch{}return e.length>=6?e:null}function R2(){let e=document.getElementById("tip");if(!e)return;let t=e.querySelector(".t span");t&&(t.textContent=Qd?"\u6F14\u793A\u7167\u7247":"\u5360\u4F4D\u5361\u7247"),e.classList.add("show")}async function jR(){let e=()=>z.cards.length>0&&z.cards.every(n=>n.userData.item.sample);if(!e())return;let t=await JR();t&&e()&&(tf(),ef(t),Qd=!0,R2())}function C2(){tf(),ef(Array.from({length:KA},(e,t)=>ZR(t))),Qd=!1,R2(),jR()}function tf(){Ss(),z.focusIndex>=0&&_i(),pa(!1),kg(),Bg(),z.cards.forEach(e=>{var t;en.remove(e),(t=e.userData.mesh.material.map)==null||t.dispose(),e.userData.mesh.material.dispose()}),z.cards=[],Zd.length=0}function ef(e){let t=z.cards.length===0,n=z.cards.length;e.forEach((i,s)=>{let r=bR(i,n+s);en.add(r),z.cards.push(r)}),No(!t),z.cards.forEach((i,s)=>{i.userData.index=s,i.userData.mesh.userData.cardIndex=s}),document.getElementById("count").textContent=z.cards.length,y2(),Zg()}function QR(){Rn.t=Rn.total+1,z.fly&&(rt.pos.copy(z.fly.toPos),rt.yaw=rt.wantYaw=z.fly.toYaw,rt.pitch=rt.wantPitch=z.fly.toPitch,rt.roll=rt.wantRoll=z.fly.toRoll,z.fly=null),z.cards.forEach(e=>{e.position.copy(e.userData.to),e.quaternion.copy(e.userData.toQ)})}var tC=document.getElementById("prog"),eC=document.getElementById("progBar"),nC=document.getElementById("progTxt");function ha(e,t,n){tC.classList.toggle("show",e),t&&(nC.textContent=t),n!=null&&(eC.style.width=Math.round(n*100)+"%")}var hl=!1;async function _l(e){if(hl)return;let t=[...e],n=M=>E2.test(M.name)||/hei[cf]/i.test(M.type),i=t.filter(M=>/^image\//.test(M.type)||GR.test(M.name)||n(M));for(let M of t)i.includes(M)||await T2(M)!=="unknown"&&i.push(M);if(!i.length){we("\u6CA1\u6709\u627E\u5230\u53EF\u7528\u7684\u56FE\u7247\u6587\u4EF6");return}hl=!0,ha(!0,`\u8BFB\u53D6\u4E2D 0 / ${i.length}`,0);let s=XR(i.length),r=new Set,a=[];for(let M of z.cards){let T=M.userData.item;!T||T.sample||(T.rec&&r.add(T.rec.id),T.ah&&T.tex&&T.tex.image&&a.push({ah:T.ah,src:T.tex.image}))}let o=[],c=[],l=0,h=0,d=0,u=0,f=[];for(let M=0;M<i.length;M++){try{let T=await qR(i[M],s);T.dateTs&&u++;let S=!1;if(T.rec&&r.has(T.rec.id)&&(S=!0),!S&&T.ah){for(let b of a)if($v(T.ah,b.ah)<=6&&Yv(T.tex.image,b.src)){S=!0;break}if(!S){for(let b of c)if($v(T.ah,b.ah)<=6&&Yv(T.tex.image,b.src)){S=!0;break}}}S?d++:(o.push(T),T.ah&&T.tex.image&&c.push({ah:T.ah,src:T.tex.image}))}catch(T){l++;let S=String(T&&T.message||T);f.push({name:i[M]&&i[M].name||"\u672A\u547D\u540D",reason:S}),(window.__importErrs=window.__importErrs||[]).push((i[M]&&i[M].name)+" :: "+S),n(i[M])&&h++}ha(!0,`\u8BFB\u53D6\u4E2D ${M+1} / ${i.length}`,(M+1)/i.length)}ha(!0,"\u6784\u5EFA\u4E16\u754C\u2026",1);let g=z.cards.every(M=>M.userData.item.sample);g&&tf(),ef(o),z.focusIndex>=0&&_i(),g&&o.length&&Jd();let v=0;if(mi.ok){for(let M of o)if(M.rec)try{await mi.put(M.rec),v++}catch{}}ha(!1),hl=!1;let m=document.getElementById("tip");m.classList.remove("show"),m.style.visibility="hidden";let p=[`\u5DF2\u653E\u5165 <b>${o.length}</b> \u5F20\u7167\u7247`];if(d&&p.push(`\u5DF2\u8DF3\u8FC7 <b>${d}</b> \u5F20\u91CD\u590D\u7167\u7247`),v&&p.push("\u5DF2\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u4E0B\u6B21\u6253\u5F00\u81EA\u52A8\u6062\u590D"),l){let M=f.slice(0,3).map(T=>T.name).join("\u3001");p.push(`<b>${l}</b> \u5F20\u8BFB\u53D6\u5931\u8D25\uFF1A${M}${l>3?` \u7B49 ${l} \u4E2A\u6587\u4EF6`:""}`),f[0]&&f[0].reason&&p.push(`<span style="opacity:.72">\u539F\u56E0\uFF1A${f[0].reason}</span>`),h&&p.push('<span style="opacity:.72">\u63D0\u793A\uFF1AiPhone \u53EF\u5148\u5728\u300C\u8BBE\u7F6E \u2192 \u76F8\u673A \u2192 \u683C\u5F0F\u300D\u9009\u300C\u517C\u5BB9\u6027\u6700\u4F73\u300D\uFF0C\u5BFC\u51FA JPEG \u540E\u518D\u5BFC\u5165</span>')}we(p.join("<br>"),l?9e3:4600)}var I2=document.getElementById("btnLayout"),yN=document.getElementById("cfgPanel"),Rg=document.getElementById("lpList"),iC=document.getElementById("layoutName"),sC=document.getElementById("layoutNow");function rC(){Rg.innerHTML="",Ks.forEach((e,t)=>{let n=document.createElement("button");n.className="lp-item",n.dataset.id=e.id,n.innerHTML=`<span class="no">${t+1}</span><span class="tx"><span class="n">${e.name} \xB7 ${e.tag}</span><span class="d">${e.desc}</span></span>`,n.onclick=()=>{zd(e.id),typeof fa=="function"&&fa()},Rg.appendChild(n)})}function Xg(){let e=da();iC.textContent=`${e.name} \xB7 ${e.tag}`,sC.textContent=e.name;let t=document.getElementById("cfLayoutNow");t&&(t.textContent=e.name),Rg.querySelectorAll(".lp-item").forEach(n=>n.classList.toggle("on",n.dataset.id===e.id))}function zd(e,t={}){let n=Ks.find(s=>s.id===e);if(!n)return;let i=z.layoutId;z.layoutId=n.id;try{localStorage.setItem("pw.layout",n.id)}catch{}if(Xg(),!!z.cards.length&&(No(!0),Xn&&Ml(Xn.pos,Xn.yaw||0,Xn.pitch!=null?Xn.pitch:-.02,1.3),!t.silent&&n.id==="time"&&i!=="time")){let s=z.cards.filter(r=>r.userData.item.dateTs).length;we(s?`\u5DF2\u6309\u62CD\u6444\u65F6\u95F4\u805A\u6210 <b>${g2().list.length}</b> \u5EA7\u65F6\u95F4\u661F\u5C9B\uFF0C\u4ECE\u65E7\u5230\u65B0\u6392\u5F00<br>\u5C9B\u4E0A\u767D\u8272\u6807\u7B7E\u6807\u6CE8\u4E86\u5E74\u6708\u4E0E\u5F20\u6570\uFF0C\u98DE\u8FD1\u5373\u53EF\u770B\u5230`:"\u8FD9\u6279\u7167\u7247\u6CA1\u6709\u8BFB\u5230\u62CD\u6444\u65F6\u95F4\uFF08PNG / \u622A\u56FE\u901A\u5E38\u6CA1\u6709 EXIF\uFF09<br>\u5DF2\u5168\u90E8\u5F52\u5165\u300C\u672A\u6807\u6CE8\u65F6\u95F4\u300D\u4E00\u7EC4")}}I2.onclick=()=>nf("layout");document.querySelector(".brand-card").onclick=()=>nf("layout");addEventListener("pointerdown",e=>{vs.classList.contains("show")&&(vs.contains(e.target)||I2.contains(e.target)||e.target.closest&&e.target.closest(".brand-card")||e.target.closest&&e.target.closest("#btnCfg")||fa())},!0);rC();Xg();var sl="look";function $g(e){sl=e||"look",document.querySelectorAll("#cfTabs button").forEach(t=>t.classList.toggle("on",t.dataset.tab===sl)),document.querySelectorAll("#cfgPanel .cf-pane").forEach(t=>t.classList.toggle("on",t.dataset.pane===sl)),sl==="data"&&oC()}function aC(e){e&&$g(e),vs.classList.add("show"),sf()}function fa(){vs.classList.remove("show")}function nf(e){vs.classList.contains("show")&&(!e||sl===e)?fa():aC(e)}document.querySelectorAll("#cfTabs button").forEach(e=>{e.onclick=()=>$g(e.dataset.tab)});function oC(){let e=document.getElementById("cfCount");e&&(e.textContent=String(z.cards.length));let t=document.getElementById("cfCfgText");t&&(t.value=JSON.stringify(At,null,2))}var xl=document.getElementById("lpSpreadSeg"),cC=document.getElementById("lpSpreadNow"),P2={"0.85":"\u7D27\u51D1","1.15":"\u6807\u51C6","1.45":"\u8212\u5C55"};function Yg(){return $n==="auto"?m2(z.cards.length):$n}function qg(){if(!xl)return;let e=Yg();cC.textContent=$n==="auto"?`\u81EA\u52A8 ${e.toFixed(2)}\xD7 \xB7 ${z.cards.length} \u5F20`:`${P2[String($n)]||""} ${e.toFixed(2)}\xD7`,xl.querySelectorAll("button").forEach(n=>{let i=n.dataset.v==="auto"?$n==="auto":Math.abs(Number(n.dataset.v)-Number($n))<.01;n.classList.toggle("on",i)});let t=document.getElementById("lpSpreadRng");t&&(t.value=String(Number(e.toFixed(2))))}function L2(e,t={}){$n=e==="auto"?"auto":Number(e);try{localStorage.setItem("pw.spread",String(e))}catch{}if(qg(),z.cards.length&&No(!0),!t.silent){let n=Yg();we(`\u7167\u7247\u95F4\u8DDD\uFF1A<b>${$n==="auto"?"\u81EA\u52A8":P2[String($n)]||""}</b> ${n.toFixed(2)}\xD7`+($n==="auto"?"<br>\u81EA\u52A8\u6863\u6309\u7167\u7247\u6570\u91CF\u81EA\u9002\u5E94 \u2014\u2014 \u5F20\u6570\u5C11\u65F6\u66F4\u8212\u5C55\uFF0C\u5F20\u6570\u591A\u65F6\u81EA\u52A8\u6536\u7D27":""),2800)}}xl&&xl.querySelectorAll("button").forEach(e=>{e.onclick=()=>L2(e.dataset.v)});var Kv=null,Mg=document.getElementById("lpSpreadRng");Mg&&Mg.addEventListener("input",()=>{let e=Number(Mg.value);$n=e;try{localStorage.setItem("pw.spread",String(e))}catch{}let t=document.getElementById("lpSpreadNow");t&&(t.textContent="\u624B\u52A8 "+e.toFixed(2)+"\xD7"),xl.querySelectorAll("button").forEach(n=>n.classList.remove("on")),clearTimeout(Kv),Kv=setTimeout(()=>{z.cards.length&&No(!0)},150)});try{let e=localStorage.getItem("pw.spread");e&&($n=e==="auto"?"auto":Number(e))}catch{}qg();var vs=document.getElementById("cfgPanel"),Zv=document.getElementById("btnCfg"),Jv={light:["#f5f5f7","#faf7f0","#eef1f5","#e7ebf0","#f1eee8","#2a2d38"],dark:["#0a0b12","#05060a","#070d1a","#0d0814","#06110c","#191410"]},D2=[["cfFrameWRng","frameW","cfFrameWNow",e=>e.toFixed(2)+"\xD7"],["cfSizeRng","cardK","cfSizeNow",e=>e.toFixed(2)+"\xD7"],["cfFadeRng","fadeK","cfFadeNow",e=>e.toFixed(2)+"\xD7"],["cfFogRng","fogK","cfFogNow",e=>e.toFixed(2)+"\xD7"],["cfStarRng","starK","cfStarNow",e=>e<=0?"\u5173\u95ED":(16450*e/1e4).toFixed(1)+" \u4E07\u9897"],["cfMilkyRng","milkyK","cfMilkyNow",e=>e<=0?"\u5173\u95ED":e.toFixed(2)+"\xD7"]],lC={cardK:"\u7167\u7247\u5C3A\u5BF8",fadeK:"\u6DE1\u5165\u6DE1\u51FA\u8DDD\u79BB",fogK:"\u96FE\u611F",starK:"\u661F\u7A7A\u5BC6\u5EA6",milkyK:"\u94F6\u6CB3\u4EAE\u5EA6",frameW:"\u76F8\u6846\u5BBD\u5EA6"};function jv(e,t,n){let i=document.getElementById(e);i&&(i.innerHTML="",t.forEach(s=>{let r=document.createElement("button");r.className="cf-dot"+(String(At[n]).toLowerCase()===s.toLowerCase()?" on":""),r.style.background=s,r.title=s,r.onclick=()=>{At[n]=s,xs(),we("\u5E95\u8272\u5DF2\u66F4\u65B0\uFF1A<b>"+s+"</b>",1800)},i.appendChild(r)}))}function sf(){if(!vs)return;D2.forEach(([l,h,d,u])=>{let f=document.getElementById(l);f&&(f.value=String(At[h]));let g=document.getElementById(d);g&&(g.textContent=u(Number(At[h])))});let e=document.getElementById("cfBgLightPick");e&&/^#[0-9a-f]{6}$/i.test(At.bgLight)&&(e.value=At.bgLight);let t=document.getElementById("cfBgDarkPick");t&&/^#[0-9a-f]{6}$/i.test(At.bgDark)&&(t.value=At.bgDark);let n=document.getElementById("cfFrame");n&&n.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l.dataset.v===At.frame));let i=document.getElementById("cfFrameNow");i&&(i.textContent=(Io[At.frame]||Io.none).label+(At.frame==="custom"&&Ys?" \u2713":"")),jv("cfBgLight",Jv.light,"bgLight"),jv("cfBgDark",Jv.dark,"bgDark");let s=document.getElementById("cfBgLightNow");s&&(s.textContent=At.bgLight);let r=document.getElementById("cfBgDarkNow");r&&(r.textContent=At.bgDark);let a=document.getElementById("cfSpaceNow");a&&(a.textContent=z.theme==="dark"?"\u591C\u57DF":"\u767D\u57DF");let o=document.getElementById("cfLayoutNow");o&&(o.textContent=(Ks.find(l=>l.id===z.layoutId)||Ks[0]).name);let c=document.getElementById("cfCount");c&&(c.textContent=String(z.cards.length))}Zv&&vs&&(Zv.onclick=()=>nf());document.getElementById("cfX")&&(document.getElementById("cfX").onclick=()=>vs.classList.remove("show"));var Vd=null;D2.forEach(([e,t,n,i])=>{let s=document.getElementById(e);s&&(s.addEventListener("input",()=>{At[t]=Number(s.value);let r=document.getElementById(n);r&&(r.textContent=i(At[t])),Dg(),clearTimeout(Vd),Vd=setTimeout(()=>xs({stars:t==="starK"}),140)}),s.addEventListener("change",()=>{we(lC[t]+"\uFF1A<b>"+i(Number(At[t]))+"</b>",1600)}))});[["cfBgLightPick","bgLight"],["cfBgDarkPick","bgDark"]].forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.addEventListener("input",()=>{At[t]=n.value,clearTimeout(Vd),Vd=setTimeout(()=>xs(),120)}),n.addEventListener("change",()=>we("\u5E95\u8272\u5DF2\u66F4\u65B0\uFF1A<b>"+At[t]+"</b>",1600)))});(function(){let t=document.getElementById("cfFrame"),n=document.getElementById("cfFrameFile");t&&(t.querySelectorAll("button").forEach(i=>{i.onclick=()=>{let s=i.dataset.v;if(s==="custom"){if(Ys){At.frame="custom",xs(),we("\u5DF2\u5E94\u7528\u4E0A\u6B21\u4E0A\u4F20\u7684\u76F8\u6846",1800);return}n&&n.click();return}At.frame=s,xs(),we("\u76F8\u6846\uFF1A<b>"+(Io[s]||Io.none).label+"</b>",1800)}}),n&&(n.onchange=async i=>{let s=i.target.files&&i.target.files[0];if(s){try{let r=URL.createObjectURL(s),a=await kd(r);URL.revokeObjectURL(r);let o=new vn(a);o.colorSpace=ze,o.needsUpdate=!0,Ys&&Ys.dispose(),Ys=o,wR(a),At.frame="custom",xs(),we("<b>\u81EA\u5B9A\u4E49\u76F8\u6846\u5DF2\u5E94\u7528</b><br>\u7528\u300C\u76F8\u6846\u5BBD\u5EA6\u300D\u5FAE\u8C03\u8D34\u5408\u7A0B\u5EA6\uFF0C\u5E26\u900F\u660E\u4E2D\u5FC3\u7684 PNG \u6700\u81EA\u7136",4200)}catch(r){we("\u76F8\u6846\u56FE\u8BFB\u53D6\u5931\u8D25\uFF1A"+String(r&&r.message||r),3600)}i.target.value=""}}))})();var ul=document.getElementById("cfIdleRng");function rf(){let e=document.getElementById("cfIdleNow");e&&(e.textContent=At.idleMin>=1?At.idleMin+" \u5206\u949F":Math.round(At.idleMin*60)+" \u79D2"),ul&&(ul.value=String(At.idleMin))}ul&&ul.addEventListener("input",()=>{At.idleMin=Number(ul.value),jt.after=Math.max(20,At.idleMin*60),Dg(),rf()});rf();document.getElementById("cfApply")&&(document.getElementById("cfApply").onclick=()=>{let e=document.getElementById("cfCfgText");if(!e||!e.value.trim()){we("\u8BF7\u5148\u7C98\u8D34\u914D\u7F6E JSON",2400);return}try{let t=JSON.parse(e.value);if(!t||typeof t!="object")throw new Error("\u4E0D\u662F\u5BF9\u8C61");At=Object.assign({},Lg,t),xs({stars:!0}),rf(),jt.after=Math.max(20,At.idleMin*60),we("\u914D\u7F6E\u5DF2\u5E94\u7528 \u2713",2400)}catch(t){we("\u914D\u7F6E\u89E3\u6790\u5931\u8D25\uFF1A"+String(t&&t.message||t),3600)}});document.getElementById("cfReset")&&(document.getElementById("cfReset").onclick=()=>{At=Object.assign({},Lg),xs({stars:!0}),rf(),jt.after=Math.max(20,At.idleMin*60),we("\u5DF2\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",2200)});document.getElementById("cfExport")&&(document.getElementById("cfExport").onclick=async()=>{let e=JSON.stringify(At,null,2),t=document.getElementById("cfCfgText");t&&(t.value=e);try{await navigator.clipboard.writeText(e),we("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230\u4E0B\u65B9\u6587\u672C\u6846\u5E76\u590D\u5236\u5230\u526A\u8D34\u677F",3200)}catch{we("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230\u4E0B\u65B9\u6587\u672C\u6846\uFF08\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u81EA\u52A8\u590D\u5236\uFF0C\u624B\u52A8\u9009\u4E2D\u590D\u5236\u5373\u53EF\uFF09",4200)}});sf();document.getElementById("btnClear").onclick=async()=>{let e=z.cards.filter(t=>!t.userData.item.sample).length;if(!e){we("\u5F53\u524D\u53EA\u6709\u793A\u4F8B\u5361\u7247\uFF0C\u6CA1\u6709\u53EF\u6E05\u7A7A\u7684\u7167\u7247");return}if(confirm(`\u786E\u5B9A\u6E05\u7A7A ${e} \u5F20\u7167\u7247\uFF1F
\u672C\u5730\u4FDD\u5B58\u7684\u8BB0\u5F55\u4E5F\u4F1A\u4E00\u5E76\u5220\u9664\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002`)){try{await mi.clear()}catch{}_i(),C2(),Jd(),we("\u5DF2\u6E05\u7A7A\u6240\u6709\u7167\u7247")}};var $s={};Object.keys(bn).forEach(e=>{let t={};["bg","ground"].forEach(n=>{t[n]=new qt(bn[e][n])}),$s[e]=t});Nd();function Cg(e){let t=$s[e],n=bn[e];typeof Nd=="function"&&Nd(),en.background.copy(t.bg),en.fog.color.copy(t.bg),en.fog.density=Sl,qd.color.copy(t.ground),_2.opacity=n.gShadowOp,Dd=e==="dark"?1:0,nl=Dd}var Qv=new qt;function hC(e,t,n){let i=$s[e],s=$s[t],r=bn[e],a=bn[t],o=l=>(Qv.copy(i[l]).lerp(s[l],n),Qv),c=da().fogK||1;en.background.copy(o("bg")),en.fog.color.copy(o("bg")),en.fog.density=(r.fogD+(a.fogD-r.fogD)*n)*c*At.fogK,qd.color.copy(o("ground")),_2.opacity=r.gShadowOp+(a.gShadowOp-r.gShadowOp)*n}function Uo(e,t={}){if(!bn[e]||e===z.theme&&!t.force)return;let n=z.theme||"light";z.theme=e;try{localStorage.setItem("pw.theme",e)}catch{}document.documentElement.dataset.theme=e;let i=document.getElementById("modeChip");i&&(i.textContent=e==="dark"?"\u591C\u57DF \xB7 \u661F\u6CB3":"\u767D\u57DF \xB7 \u4E91\u6D77");let s=document.getElementById("cfSpaceNow");s&&(s.textContent=e==="dark"?"\u591C\u57DF":"\u767D\u57DF");let r=document.getElementById("btnTheme");r&&(r.textContent=e==="dark"?"\u25D0 \u767D\u57DF":"\u25D0 \u591C\u57DF");let a=document.getElementById("fTheme");a&&(a.textContent=e==="dark"?"\u25D0 \u767D\u57DF":"\u25D0 \u591C\u57DF"),Sl=bn[e].fogD*(da().fogK||1),Dd=e==="dark"?1:0,t.instant?(gs=null,Cg(e)):gs={t:0,from:n,to:e},!hl&&z.cards.length&&z.layoutId==="time"&&(Bg(),da().place(z.cards))}var uC=document.getElementById("btnTheme");uC.onclick=()=>Uo(z.theme==="dark"?"light":"dark");var el=document.getElementById("modeChip");el&&(el.style.pointerEvents="auto",el.style.cursor="pointer",el.title="\u70B9\u51FB\u5207\u6362\u767D\u57DF / \u591C\u57DF\uFF08\u5FEB\u6377\u952E M\uFF09",el.onclick=()=>Uo(z.theme==="dark"?"light":"dark"));var t2=document.getElementById("btnCfgQuick");t2&&(t2.onclick=()=>$g("look"));var Rr=!1,Hd=document.getElementById("btnPure");function Ig(e,t){Rr=!!e,document.body.classList.toggle("pure",Rr),Hd&&Hd.classList.toggle("on",Rr),Rr&&(fa(),pa(!1),z.stereo.on&&Ss()),t||we(Rr?"\u7EAF\u51C0\u6A21\u5F0F \xB7 \u6309 <b>P</b> \u6216 <b>Esc</b> \u9000\u51FA":"\u5DF2\u9000\u51FA\u7EAF\u51C0\u6A21\u5F0F",2600)}Hd&&(Hd.onclick=()=>Ig(!Rr));var Xs=document.getElementById("btnGesture"),N2=document.getElementById("gestBox"),Gd=document.getElementById("gestVideo"),Qt={on:!1,loading:!1,lm:null,stream:null,lastVT:-1,prev:null,prevMode:"idle"},Pg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm",dC="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";async function U2(){if(Qt.on)return Wd();if(!Qt.loading){Qt.loading=!0,Xs.classList.add("loading"),Xs.textContent="\u624B\u52BF\u52A0\u8F7D\u4E2D\u2026";try{let e=null;for(let n of["models/mp/",Pg])try{e=await Ns.forVisionTasks(n);break}catch{}e||(e=await Ns.forVisionTasks(Pg));let t;for(let n of["models/hand_landmarker.task",dC])try{Qt.lm=await Bn.createFromOptions(e,{baseOptions:{modelAssetPath:n,delegate:"GPU"},runningMode:"VIDEO",numHands:1});break}catch(i){t=i}if(!Qt.lm)throw t||new Error("hand model init failed");Qt.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1}),Gd.srcObject=Qt.stream,await Gd.play(),Qt.on=!0,Qt.lastVT=-1,Qt.prev=null,Xs.classList.add("on"),Xs.textContent="\u624B\u52BF \xB7 \u5F00\u542F\u4E2D",N2.classList.add("show"),we("<b>\u624B\u52BF\u5DF2\u5F00\u542F</b>\uFF08\u6309 G \u6216 Esc \u53EF\u968F\u65F6\u5173\u95ED\uFF09<br>\u{1F590} \u5F20\u5F00\u624B\u6325\u52A8 = \u73AF\u89C6\u56DB\u5468<br>\u270A \u63E1\u62F3\uFF0C\u624B\u4E0A\u62AC = \u524D\u8FDB / \u4E0B\u538B = \u540E\u9000<br>\u624B\u638C\u4FDD\u6301\u5728\u6444\u50CF\u5934\u753B\u9762\u5185\uFF0C\u52A8\u4F5C\u5E45\u5EA6\u522B\u592A\u5927",7e3)}catch(e){let t=e&&e.name==="NotAllowedError"?"\u6444\u50CF\u5934\u6743\u9650\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u5141\u8BB8\u6444\u50CF\u5934\u540E\u91CD\u8BD5":e&&e.name==="NotFoundError"?"\u6CA1\u6709\u68C0\u6D4B\u5230\u6444\u50CF\u5934":"\u624B\u52BF\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF08\u8BE5\u529F\u80FD\u9700\u8981\u8054\u7F51\uFF09";we("<b>\u624B\u52BF\u63A7\u5236\u672A\u80FD\u5F00\u542F</b><br>"+t),Wd()}Qt.loading=!1,Xs.classList.remove("loading"),Xs.blur()}}function Wd(){if(Qt.on=!1,Qt.stream&&(Qt.stream.getTracks().forEach(e=>e.stop()),Qt.stream=null),Gd.srcObject=null,Qt.lm){try{Qt.lm.close()}catch{}Qt.lm=null}Qt.prev=null,Qt.lastVT=-1,Xs.classList.remove("on"),Xs.textContent="\u624B\u52BF\u63A7\u5236",N2.classList.remove("show")}Xs.onclick=U2;document.getElementById("gestX").onclick=Wd;var ys=new Map,Gt=null,ua={audio:null,video:null},fC=document.getElementById("memPanel"),yl=document.getElementById("memText"),F2=document.getElementById("memMoods"),Xd=document.getElementById("memSaveState"),Cd=document.getElementById("memAudio"),Id=document.getElementById("memVideo"),O2=document.getElementById("fMem"),pC=[["\u5F00\u5FC3","\u{1F60A}"],["\u60F3\u5FF5","\u{1F319}"],["\u5E73\u9759","\u{1F343}"],["\u70ED\u8840","\u{1F525}"],["\u96BE\u8FC7","\u{1F327}"],["\u611F\u52A8","\u2728"]];(function(){pC.forEach(([t,n])=>{let i=document.createElement("b");i.textContent=n+" "+t,i.dataset.v=t,i.onclick=()=>{Gt&&(Gt.mood=Gt.mood===t?"":t,B2(),Fo())},F2.appendChild(i)})})();function B2(){F2.querySelectorAll("b").forEach(e=>e.classList.toggle("on",!!Gt&&e.dataset.v===Gt.mood))}function e2(e){ua[e]&&(URL.revokeObjectURL(ua[e]),ua[e]=null)}function bl(){yl.value=Gt?Gt.text:"",B2(),e2("audio"),e2("video"),Gt&&Gt.audio?(ua.audio=URL.createObjectURL(Gt.audio),Cd.src=ua.audio,Cd.hidden=!1):(Cd.removeAttribute("src"),Cd.hidden=!0),Gt&&Gt.video?(ua.video=URL.createObjectURL(Gt.video),Id.src=ua.video,Id.hidden=!1):(Id.removeAttribute("src"),Id.hidden=!0);let e=!!(Gt&&(Gt.mood||Gt.text||Gt.audio||Gt.video));document.getElementById("memDel").style.display=e?"":"none",mi.ok||(Xd.textContent="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u672C\u5730\u5B58\u50A8"),k2()}function k2(){let e=!!(Gt&&(Gt.mood||Gt.text||Gt.audio||Gt.video));O2.classList.toggle("has",e)}function Kg(e){let t=ys.get(Ir(e));Gt=t?{...t}:{id:Ir(e),mood:"",text:"",audio:null,video:null},bl()}var n2=null;function Fo(){Xd.textContent="\u4FDD\u5B58\u4E2D\u2026",clearTimeout(n2),n2=setTimeout(z2,650)}async function z2(){if(!Gt||!mi.ok)return;let e={id:Gt.id,mood:Gt.mood||"",text:Gt.text||"",audio:Gt.audio||null,video:Gt.video||null,updated:Date.now()},t=!e.mood&&!e.text&&!e.audio&&!e.video;try{t?(await mi.memDel(e.id),ys.delete(e.id)):(await mi.memPut(e),ys.set(e.id,e)),Xd.textContent=t?"\u5DF2\u6E05\u7A7A":"\u5DF2\u4FDD\u5B58 \u2713",Zg(),k2()}catch{Xd.textContent="\u4FDD\u5B58\u5931\u8D25\uFF08\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3\uFF1F\uFF09"}}yl.addEventListener("input",()=>{Gt&&(Gt.text=yl.value,Fo())});yl.addEventListener("keydown",e=>{e.key==="Escape"&&(yl.blur(),pa(!1))});var Qe={on:!1,mr:null,stream:null,chunks:[],t0:0,timer:null},Co=document.getElementById("memRec");async function mC(){if(Qe.on)return V2();if(!navigator.mediaDevices||!window.MediaRecorder){we("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5F55\u97F3");return}try{Qe.stream=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{we("\u9EA6\u514B\u98CE\u6743\u9650\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u5141\u8BB8\u540E\u91CD\u8BD5");return}Qe.chunks=[];let e=MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":"";Qe.mr=new MediaRecorder(Qe.stream,e?{mimeType:e}:void 0),Qe.mr.ondataavailable=t=>{t.data.size&&Qe.chunks.push(t.data)},Qe.mr.onstop=()=>{let t=new Blob(Qe.chunks,{type:Qe.mr.mimeType||"audio/webm"});Gt&&(Gt.audio=t,bl(),Fo()),Qe.stream.getTracks().forEach(n=>n.stop())},Qe.mr.start(),Qe.on=!0,Qe.t0=Date.now(),Co.classList.add("rec"),Qe.timer=setInterval(()=>{let t=Math.round((Date.now()-Qe.t0)/1e3);Co.textContent=`\u25A0 \u505C\u6B62 ${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},250),Co.textContent="\u25A0 \u505C\u6B62 00:00"}function V2(){if(Qe.on){Qe.on=!1,clearInterval(Qe.timer),Co.classList.remove("rec"),Co.textContent="\u25CF \u5F55\u97F3";try{Qe.mr.stop()}catch{}}}Co.onclick=mC;document.getElementById("memAudUp").onclick=()=>document.getElementById("memAudFile").click();document.getElementById("memVidUp").onclick=()=>document.getElementById("memVidFile").click();document.getElementById("memAudFile").onchange=e=>{let t=e.target.files[0];e.target.value="",t&&Gt&&(Gt.audio=t,bl(),Fo())};document.getElementById("memVidFile").onchange=e=>{let t=e.target.files[0];e.target.value="",t&&Gt&&(Gt.video=t,bl(),Fo())};document.getElementById("memDel").onclick=()=>{Gt&&confirm("\u5220\u9664\u8FD9\u6761\u8BB0\u5FC6\uFF1F\uFF08\u5FC3\u60C5\u3001\u6587\u5B57\u3001\u5F55\u97F3\u3001\u97F3\u89C6\u9891\u4E00\u5E76\u6E05\u9664\uFF09")&&(Gt.mood="",Gt.text="",Gt.audio=null,Gt.video=null,bl(),Fo())};document.getElementById("memX").onclick=()=>pa(!1);function pa(e){e&&z.focusIndex<0||(!e&&Qe.on&&V2(),z.memOpen=e,fC.classList.toggle("show",e),e&&z.focusIndex>=0&&Kg(z.cards[z.focusIndex]),e&&Po())}O2.onclick=()=>pa(!z.memOpen);function Zg(){z.cards.forEach(e=>{e.userData.badge&&(e.userData.badge.visible=ys.has(Ir(e)))})}var jt={on:!1,t:0,after:180,dwell:0,memCards:[],quoteCard:null,wakePos:null,wakeYaw:0,wakePitch:0},gC=document.getElementById("idleClock"),_C=document.getElementById("idleDate"),vl=document.getElementById("idleQuote"),xC=document.getElementById("idleQuoteText"),yC=document.getElementById("idleQuoteAudio"),vC=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],SC={\u5F00\u5FC3:"\u90A3\u5929\uFF0C\u662F\u5F00\u5FC3\u7684\u4E00\u5929",\u60F3\u5FF5:"\u90A3\u5929\uFF0C\u5728\u60F3\u4E00\u4E2A\u4EBA",\u5E73\u9759:"\u90A3\u5929\uFF0C\u98CE\u5E73\u6D6A\u9759",\u70ED\u8840:"\u90A3\u5929\uFF0C\u70ED\u8840\u6CB8\u817E",\u96BE\u8FC7:"\u90A3\u5929\uFF0C\u6709\u70B9\u96BE\u8FC7",\u611F\u52A8:"\u90A3\u5929\uFF0C\u88AB\u4EC0\u4E48\u611F\u52A8\u4E86"};function MC(){return wg&&!hl&&!jt.on&&z.focusIndex<0&&!z.stereo.on&&!z.tour&&!Qt.on&&!z.memOpen&&Rn.t>=Rn.total&&!vs.classList.contains("show")&&!document.hidden}function bC(){jt.on=!0,jt.wakePos=rt.pos.clone(),jt.wakeYaw=rt.wantYaw,jt.wakePitch=rt.wantPitch,document.body.classList.add("idling"),vl.classList.remove("show"),jt.memCards=z.cards.filter(e=>ys.has(Ir(e))),H2()}function H2(){let e=z.cards;if(!e.length)return;let t;jt.memCards.length&&Math.random()<.45?t=jt.memCards[Math.random()*jt.memCards.length|0]:t=e[Math.random()*e.length|0],jt.quoteCard=t;let n=t.getWorldPosition(new U),i=new U(0,0,1).applyQuaternion(t.getWorldQuaternion(new En)).normalize(),s=n.clone().addScaledVector(i,Math.max(5,t.userData.W*1.75)),r=n.clone().sub(s).normalize();Ml(s,Math.atan2(-r.x,-r.z),Math.asin(cn.clamp(r.y,-1,1)),6.5+Math.random()*3.5),jt.dwell=3+Math.random()*2.5,vl.classList.remove("show")}var So=new Date;function EC(e){if(!jt.on||(So.setTime(Date.now()),gC.textContent=`${String(So.getHours()).padStart(2,"0")}:${String(So.getMinutes()).padStart(2,"0")}`,_C.textContent=`${So.getMonth()+1}\u6708${So.getDate()}\u65E5 \xB7 \u661F\u671F${vC[So.getDay()]}`,z.fly))return;jt.dwell-=e;let t=jt.quoteCard?ys.get(Ir(jt.quoteCard)):null,n=t&&(t.text||SC[t.mood]);n&&jt.dwell>.6?(xC.textContent=n.length>72?n.slice(0,72)+"\u2026":n,yC.style.display=t.audio?"":"none",vl.classList.add("show")):(vl.classList.remove("show"),jt.dwell<=0&&H2())}function G2(){jt.on&&(jt.on=!1,jt.t=0,document.body.classList.remove("idling"),vl.classList.remove("show"),Ml(jt.wakePos,jt.wakeYaw,jt.wakePitch,1.8))}function wC(){jt.t=0,jt.on&&G2()}["pointerdown","wheel","keydown","pointermove","touchstart"].forEach(e=>addEventListener(e,wC,{passive:!0}));function TC(e){if(!Qt.on||!Qt.lm)return;let t=Gd;if(t.readyState<2||t.currentTime===Qt.lastVT)return;Qt.lastVT=t.currentTime;let n;try{n=Qt.lm.detectForVideo(t,e)}catch{return}let i=n&&n.landmarks;if(!i||!i.length){Qt.prev=null,Qt.prevMode="idle";return}let s=i[0],r=(h,d)=>Math.hypot(s[h].x-s[d].x,s[h].y-s[d].y,(s[h].z-s[d].z)*.6),a=r(0,9)||1e-4,o=r(0,12)/a,c=s[9].x,l=s[9].y;if(o>1.32){if(Qt.prev&&Qt.prevMode==="open"){let h=c-Qt.prev.x,d=l-Qt.prev.y;Math.abs(h)>.0045&&(rt.wantYaw+=h*6.2,Ro()),Math.abs(d)>.0045&&(rt.wantPitch=zg(rt.wantPitch-d*4.6),Ro())}Qt.prev={x:c,y:l},Qt.prevMode="open"}else if(o<.95){let h=cn.clamp((.52-l)*15,-9.5,9.5);Math.abs(h)>1.3&&(Ro(),z.focusIndex>=0&&_i(),Mn.getWorldDirection(Yi),rt.vel.addScaledVector(Yi,h*.055)),Qt.prev=null,Qt.prevMode="fist"}else Qt.prev=null,Qt.prevMode="idle"}var W2=document.getElementById("picker"),Jg=document.getElementById("pickerDir");Jg.setAttribute("webkitdirectory","");W2.onchange=e=>{_l(e.target.files),e.target.value=""};Jg.onchange=e=>{_l(e.target.files),e.target.value=""};var X2=()=>W2.click();document.getElementById("btnAdd").onclick=X2;document.getElementById("tipPick").onclick=X2;document.getElementById("tipDir").onclick=()=>Jg.click();document.getElementById("tipX").onclick=()=>document.getElementById("tip").classList.remove("show");var $d=0,jg=document.getElementById("drop");addEventListener("dragenter",e=>{e.preventDefault(),$d++,jg.classList.add("on")});addEventListener("dragover",e=>e.preventDefault());addEventListener("dragleave",e=>{e.preventDefault(),--$d<=0&&($d=0,jg.classList.remove("on"))});addEventListener("drop",async e=>{var n;e.preventDefault(),$d=0,jg.classList.remove("on");let t=(n=e.dataTransfer)!=null&&n.items?[...e.dataTransfer.items].map(i=>{var s;return(s=i.webkitGetAsEntry)==null?void 0:s.call(i)}).filter(Boolean):[];if(t.length){let i=[];if(await Promise.all(t.map(s=>$2(s,i))),i.length)return _l(i)}_l(e.dataTransfer.files)});function $2(e,t,n=0){return new Promise(i=>{if(n>6)return i();if(e.isFile)return e.file(s=>{t.push(s),i()},()=>i());if(e.isDirectory){let s=e.createReader(),r=[],a=()=>s.readEntries(async o=>{if(!o.length)return await Promise.all(r.map(c=>$2(c,t,n+1))),i();r.push(...o),a()},()=>i());a();return}i()})}var bg=document.getElementById("toast"),i2;function we(e,t=4600){bg.innerHTML=e,bg.classList.add("show"),clearTimeout(i2),i2=setTimeout(()=>bg.classList.remove("show"),t)}var s2=new dc,Yi=new U,r2=new U,a2=new U(0,1,0),o2=new U,c2=new Bi,l2=new En,Pd=-1;function Y2(){let e=Math.min(s2.getDelta(),.05),t=s2.elapsedTime;z.focusIndex>=z.cards.length&&_i(),gs?(gs.t=Math.min(1,gs.t+e/.9),hC(gs.from,gs.to,Sg(gs.t)),gs.t>=1&&(gs=null)):en.fog.density+=(Sl-en.fog.density)*Math.min(1,e*2.5),TC(performance.now()),VR(e),tR(e,t),jt.t+=e,!jt.on&&jt.t>=jt.after&&MC()&&bC(),EC(e);let n=Ce.has("ShiftLeft")||Ce.has("ShiftRight");if(z.fly){let s=z.fly;s.t=Math.min(1,s.t+e/s.dur);let r=Sg(s.t);rt.pos.lerpVectors(s.fromPos,s.toPos,r),rt.yaw=rt.wantYaw=s.fromYaw+(s.toYaw-s.fromYaw)*r,rt.pitch=rt.wantPitch=s.fromPitch+(s.toPitch-s.fromPitch)*r,rt.roll=rt.wantRoll=s.fromRoll+(s.toRoll-s.fromRoll)*r,s.t>=1&&(z.fly=null,et.on&&(et.adopt=!0))}else if(et.on&&z.focusIndex<0&&!z.tour&&!jt.on){let s=0,r=0;(Ce.has("KeyA")||Ce.has("ArrowLeft"))&&(s-=1),(Ce.has("KeyD")||Ce.has("ArrowRight"))&&(s+=1),(Ce.has("KeyW")||Ce.has("ArrowUp"))&&(r+=1),(Ce.has("KeyS")||Ce.has("ArrowDown"))&&(r-=1);let a=!!(s||r);if(a){let o=24*(n?2.3:1)*(et.z/30);et.vx=cn.lerp(et.vx,s*o,1-Math.pow(.0015,e)),et.vy=cn.lerp(et.vy,r*o,1-Math.pow(.0015,e))}RR(e,a)}else{let s=1-Math.pow(3e-5,e);rt.yaw+=(rt.wantYaw-rt.yaw)*s,rt.pitch+=(rt.wantPitch-rt.pitch)*s,rt.roll+=(rt.wantRoll-rt.roll)*s;let r=0,a=0,o=0;(Ce.has("KeyW")||Ce.has("ArrowUp"))&&(a+=1),(Ce.has("KeyS")||Ce.has("ArrowDown"))&&(a-=1),(Ce.has("KeyA")||Ce.has("ArrowLeft"))&&(r-=1),(Ce.has("KeyD")||Ce.has("ArrowRight"))&&(r+=1),(Ce.has("Space")||Ce.has("KeyE"))&&(o+=1),(Ce.has("KeyC")||Ce.has("KeyQ"))&&(o-=1);let l=10.5*(Ce.has("ShiftLeft")||Ce.has("ShiftRight")?3.1:1);r||a||o?(Ro(),z.focusIndex>=0&&_i(),Mn.getWorldDirection(Yi),r2.crossVectors(Yi,a2).normalize(),o2.set(0,0,0).addScaledVector(Yi,a*l).addScaledVector(r2,r*l).addScaledVector(a2,o*l*.8),rt.vel.lerp(o2,1-Math.pow(.001,e))):z.tour?(z.focusIndex>=0&&_i(),rt.wantYaw+=Math.sin(t*.21)*e*.16,rt.wantPitch+=(0-rt.wantPitch)*e*.5,Mn.getWorldDirection(Yi),rt.vel.lerp(Yi.multiplyScalar(4.6),1-Math.pow(.2,e))):rt.vel.multiplyScalar(Math.pow(8e-4,e)),rt.pos.addScaledVector(rt.vel,e),rt.pos.y=cn.clamp(rt.pos.y,-13,80)}Mn.position.copy(rt.pos),Mn.rotation.set(rt.pitch,rt.yaw,rt.roll),Rn.t<Rn.total&&(Rn.t+=e,z.cards.forEach(s=>{let r=cn.clamp((Rn.t-s.userData.dly)/Rn.dur,0,1),a=Sg(r);s.position.lerpVectors(s.userData.from,s.userData.to,a),s.quaternion.copy(s.userData.fromQ).slerp(s.userData.toQ,a)}));let i=-1;if(Rn.t>=Rn.total){Fd.setFromCamera(la,Mn);let s=Fd.intersectObjects(Zd,!1).find(r=>r.object.material.opacity>.3);i=z.forceHover!=null?z.forceHover:s?s.object.userData.cardIndex:-1}i!==Pd&&(Pd=i),_s.classList.toggle("pointing",Pd>=0&&!jd),Rn.t>=Rn.total&&z.cards.forEach((s,r)=>{let a=s.userData,o=r===z.focusIndex,c=o?0:r===Pd?1:0;a.hkv+=(c-a.hk)*120*e,a.hkv*=Math.pow(.002,e),a.hk+=a.hkv*e,Math.abs(a.hkv)<1e-4&&Math.abs(c-a.hk)<1e-4&&(a.hk=c,a.hkv=0),a.hk=cn.clamp(a.hk,-.35,1.6),o?(s.scale.setScalar(1),s.position.y=a.to.y,s.quaternion.copy(a.toQ)):(s.scale.setScalar(1+a.hk*.14),s.position.y=a.to.y+Math.sin(t*.55+a.phase)*.085+a.hk*.24,c2.set(a.hk*.1,a.hk*.055,0),l2.setFromEuler(c2),s.quaternion.copy(a.toQ).multiply(l2))}),fl.visible=z.focusIndex<0,z.cards.forEach((s,r)=>{let a=s.userData.mesh.material,o;if(r===z.focusIndex)o=1;else{let d=s.position.distanceTo(Mn.position),u=d<=Ao?1:d>=Ud?0:1-(d-Ao)/(Ud-Ao);o=u*u*(3-2*u)}let c=a.opacity+(o-a.opacity)*Math.min(1,e*6);a.opacity=c,a.depthWrite=c>.55,s.visible=c>.012;let l=s.userData.badge;l.visible&&(l.material.opacity=c);let h=s.userData.frame;h&&h.visible&&(h.material.opacity=c)}),MR(),Zs.render(en,Mn),requestAnimationFrame(Y2)}addEventListener("resize",()=>{Mn.aspect=innerWidth/innerHeight,Mn.updateProjectionMatrix(),Zs.setSize(innerWidth,innerHeight)});window.PhotoWorld={state:z,scene:en,camera:Mn,cam:rt,renderer:Zs,importFiles:_l,focusCard:gl,exitFocus:_i,toggleTour:Gg,settle:QR,applyLayout:No,layouts:Ks,setLayout:zd,overviewCamera:Jd,applyTheme:Uo,dismissIntro:v2,themes:bn,setTimeMode:e=>zd(e?"time":"scatter"),clearAll:()=>document.getElementById("btnClear").click(),toggleStereo:()=>Vg(),exitStereo:Ss,stereoDebug:HR,sky:{skyLight:Yd,skyDark:Cr,galaxy:dl},DB:mi,wall:et,wallDebug:()=>({on:et.on,panX:+et.pan.x.toFixed(2),panY:+et.pan.y.toFixed(2),vx:+et.vx.toFixed(2),vy:+et.vy.toFixed(2),z:+et.z.toFixed(2),zT:+et.zT.toFixed(2),bounds:et.bounds}),memDebug:{all:()=>[...ys.values()].map(e=>({id:e.id,mood:e.mood,text:e.text,hasAudio:!!e.audio,hasVideo:!!e.video})),get:e=>{let t=ys.get(e);return t?{id:t.id,mood:t.mood,text:t.text,hasAudio:!!t.audio,hasVideo:!!t.video}:null},keyOf:e=>z.cards[e]?Ir(z.cards[e]):null,setMedia:async(e,t,n)=>z.cards[e]?(Kg(z.cards[e]),Gt[t]=n,await z2(),ys.get(Gt.id)||null):null},memOpenFor:e=>{z.focusIndex!==e&&gl(e),setTimeout(()=>pa(!0),400)},idleDebug:()=>({on:jt.on,t:+jt.t.toFixed(1),after:jt.after,memCards:jt.memCards.length}),setIdleAfter:e=>{jt.after=e},setSpread:L2,spreadDebug:()=>({mode:$n,v:+Yg().toFixed(3),gap:+gi.toFixed(2),cell:+ii.toFixed(2)}),CFG:At,applyCfg:xs,setCfg:(e,t)=>{Object.assign(At,e),xs(t||{})},demoDebug:()=>({demoMode:Qd,demoFiles:Ag.length,loaded:z.cards.filter(e=>e.userData.item.demo).length}),cfgDebug:()=>({...At,fadeNear:+Ao.toFixed(1),fadeFar:+Ud.toFixed(1),frameVisible:z.cards.filter(e=>e.userData.frame&&e.userData.frame.visible).length,hasCustomFrame:!!Ys,bg:"#"+en.background.getHexString(),fogD:+en.fog.density.toFixed(5)})};function AC(){let e=decodeURIComponent(location.hash.replace(/^#/,""));e&&/^\d+$/.test(e)&&setTimeout(()=>gl(Number(e)-1),900)}function RC(){let e=document.getElementById("tip");e.classList.remove("show"),e.style.visibility="hidden"}(async function(){try{let t=localStorage.getItem("pw.layout");t&&Ks.some(n=>n.id===t)&&(z.layoutId=t)}catch{}try{let t=localStorage.getItem("pw.theme");t&&bn[t]&&Uo(t,{instant:!0})}catch{}Xg(),jt.after=Math.max(20,At.idleMin*60),At.starK!==1&&Ug(At.starK),TR(),C2(),Y2(),setTimeout(v2,1750),setTimeout(AC,2600);try{await mi.open();let t=await mi.all();if(t.length){ha(!0,"\u6062\u590D\u7167\u7247\u2026",0);let n=[];for(let i=0;i<t.length;i++){try{n.push(await KR(t[i]))}catch{}ha(!0,`\u6062\u590D\u7167\u7247 ${i+1} / ${t.length}`,(i+1)/t.length)}if(ha(!1),n.length){tf(),ef(n),Jd(),RC();let i=n.filter(s=>s.dateTs).length;we(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684 <b>${n.length}</b> \u5F20\u7167\u7247${i?`\uFF08\u5176\u4E2D ${i} \u5F20\u5E26\u62CD\u6444\u65F6\u95F4\uFF0C\u53EF\u5207\u6362 8 \u79CD\u6392\u5E03\u6A21\u677F\uFF09`:""}<br>\u7167\u7247\u5DF2\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u968F\u65F6\u53EF\u70B9\u300C\u6E05\u7A7A\u300D\u91CD\u6765`,6e3)}}}catch{}try{let t=await mi.memAll();t.forEach(n=>ys.set(n.id,n)),t.length&&Zg()}catch{}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
