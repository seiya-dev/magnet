document.addEventListener("DOMContentLoaded", function(){
	var thash = new URLSearchParams(location.search).get('hash');
	if(thash){
		document.getElementById('hash').value = thash;
		var urlr = update();
		if(urlr){
			window.location.href = urlr;
			// window.location.replace(urlr);
		}
	}
});

function encUri(text){
	return encodeURIComponent(text);
}

function sel_all(el){
	el.focus();
	el.select();
}

function update(){
	try{
		var hash_data = document.getElementById('hash').value;
		var uri  = location.protocol + '//' + location.hostname + location.pathname;
		if(checkHash(hash_data)){
			var data  = 'magnet:';
				data += '?xt=urn:btih:' + encUri(document.getElementById('hash').value);
				// --
				data += '&tr=' + encUri('http://nyaa.tracker.wf:7777/announce');
				data += '&tr=' + encUri('udp://tracker.coppersurfer.tk:6969/announce');
				data += '&tr=' + encUri('udp://tracker.opentrackr.org:1337/announce');
				data += '&tr=' + encUri('udp://9.rarbg.to:2710/announce');
				data += '&tr=' + encUri('udp://9.rarbg.me:2710/announce');
				data += '&tr=' + encUri('udp://tracker.leechers-paradise.org:6969/announce');
				data += '&tr=' + encUri('udp://tracker.internetwarriors.net:1337/announce');
				data += '&tr=' + encUri('udp://tracker.cyberia.is:6969/announce');
				data += '&tr=' + encUri('udp://exodus.desync.com:6969/announce');
				data += '&tr=' + encUri('udp://tracker3.itzmx.com:6961/announce');
				data += '&tr=' + encUri('udp://tracker.torrent.eu.org:451/announce');
				data += '&tr=' + encUri('udp://tracker.tiny-vps.com:6969/announce');
				data += '&tr=' + encUri('udp://retracker.lanta-net.ru:2710/announce');
				data += '&tr=' + encUri('http://open.acgnxtracker.com:80/announce');
				data += '&tr=' + encUri('wss://tracker.openwebtorrent.com');
				// --
				data += '&tr=' + encUri('http://tracker.internetwarriors.net:1337/announce');
				data += '&tr=' + encUri('http://tracker.opentrackr.org:1337/announce');
				data += '&tr=' + encUri('udp://tracker.zer0day.to:1337/announce');
				data += '&tr=' + encUri('udp://tracker.pirateparty.gr:6969/announce');
				data += '&tr=' + encUri('http://explodie.org:6969/announce');
				data += '&tr=' + encUri('http://p4p.arenabg.com:1337/announce');
				data += '&tr=' + encUri('http://mgtracker.org:6969/announce');
			document.getElementById('link').href = data;
			document.getElementById('link_text').value = data;
			uri += '?hash='+hash_data;
			return data;
		}
		return false;
	}
	catch(e){
		alert('exception: ' + e);
		return false;
	}
}

function checkHash(hash){
	return hash.length == 32 && hash.match(/^[2-7A-Za-z]+$/) || hash.length == 40 && hash.match(/^[0-9A-Fa-f]+$/) ? hash : false;
}
