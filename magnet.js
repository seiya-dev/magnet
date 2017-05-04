// onload
function bindReady(handler){var called=false;function ready(){if(called)return;called=true;handler();}
function tryScroll(){if(called)return;if(!document.body)return;try{document.documentElement.doScroll('left');ready();}
catch(e){setTimeout(tryScroll,0);}}if(document.addEventListener){document.addEventListener('DOMContentLoaded',function(){ready();},false);}
else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){tryScroll();}
document.attachEvent('onreadystatechange',function(){if(document.readyState==='complete'){ready();}});}
if(window.addEventListener)window.addEventListener('load',ready,false);else if(window.attachEvent)
window.attachEvent('onload',ready);else window.onload=ready;}var readyList=[];function onReady(handler)
{if(!readyList.length){bindReady(function(){for(var i=0;i<readyList.length;i++){readyList[i]();}});}readyList.push(handler);}

onReady(function(){
	var thash = getUri('hash')[0] && checkHash(getUri('hash')[1]) ? getUri('hash')[1] : false;
	if(thash){
		document.getElementById('hash').value = thash;
		update();
	}
});

function encUri(text){
	return encodeURIComponent(text);
}

function getUri(name) {
	var uriEl = (RegExp(name + '=' + '(.+?)(&|$)', 'i').exec(location.search));
	return uriEl ? [true, decodeURIComponent(uriEl[1].split('&')[0])] : [false, ''];
}

function sel_all(el){
	el.focus();
	el.select();
}

function update(){
	try{
		var hash_data = document.getElementById('hash').value;
		if(checkHash(hash_data)){
			var data  = 'magnet:';
				data += '?xt=urn:btih:' + encUri(document.getElementById('hash').value);
				data += '&tr=' + encUri('udp://tracker.coppersurfer.tk:6969/announce');
				data += '&tr=' + encUri('udp://tracker.internetwarriors.net:1337/announce');
				data += '&tr=' + encUri('udp://tracker.leechers-paradise.org:6969/announce');
				data += '&tr=' + encUri('http://tracker.internetwarriors.net:1337/announce');
				data += '&tr=' + encUri('udp://tracker.opentrackr.org:1337/announce');
				data += '&tr=' + encUri('http://tracker.opentrackr.org:1337/announce');
				data += '&tr=' + encUri('udp://tracker.zer0day.to:1337/announce');
				data += '&tr=' + encUri('udp://tracker.pirateparty.gr:6969/announce');
				data += '&tr=' + encUri('http://explodie.org:6969/announce');
				data += '&tr=' + encUri('http://p4p.arenabg.com:1337/announce');
				data += '&tr=' + encUri('http://mgtracker.org:6969/announce');
			document.getElementById('link').href = data;
			document.getElementById('link_text').value = data;
		}
		var uri  = location.protocol + '//' + location.hostname + location.pathname;
			uri += checkHash(hash_data) ? '?hash='+hash_data : '';
	}
	catch(e){
		alert('exception: ' + e);
	}
}

function checkHash(hash){
	return hash.length == 32 && hash.match(/^[2-7A-Za-z]+$/) || hash.length == 40 && hash.match(/^[0-9A-Fa-f]+$/) ? hash : false;
}
