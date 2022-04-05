// ==UserScript==
// @name         Edgenuity helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automates some mind numbing processes for edgenuity. Currently copies vocab text to clipboard when you click the button with the name of the word. Does not yet autofill.
// @author       agrd22
// @match        https://*.learn.edgenuity.com/ContentViewers/Vocab/Activity
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edgenuity.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    /* Vocab */
    
    // Fetch words list from inside iframe
    let words = document.getElementById('words');
    if (!words) return;
    words = words.children; // Fetch all child elements (words)
    for (let i = 0; i < words.length; i++) {
        words[i].onclick = function () {
            navigator.clipboard.writeText(words[i].innerText); // Set event listener
        }
    }
})();
