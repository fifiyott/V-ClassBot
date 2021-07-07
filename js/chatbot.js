//To minimise the height of chatbox
$(document).ready(function() {
    window.addEventListener('dfMessengerLoaded', function (event) {
    $r1 = document.querySelector("df-messenger");
    $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
    $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input"); //for other mods
    var sheet = new CSSStyleSheet;
    // manage box height from here
    sheet.replaceSync( `div.chat-wrapper[opened="true"] { height: 440px }`);
    $r2.shadowRoot.adoptedStyleSheets = [ sheet ];
    });
});