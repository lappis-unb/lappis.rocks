AOS.init({
    duration: 1200
});

(function(w, d, s, u) {
w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
j.async = true; j.src = 'https://unionchat.lappis.rocks/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944';
h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://unionchat.lappis.rocks/livechat');
