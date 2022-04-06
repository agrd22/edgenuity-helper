// ==UserScript==
// @name         Edgenuity vocab helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automates some mind numbing processes for edgenuity. Currently copies vocab text to clipboard when you click the button with the name of the word. Does not yet autofill.
// @author       anonAuthor22
// @match        https://*.learn.edgenuity.com/ContentViewers/Vocab/Activity
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edgenuity.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    let words = $('#words').children();
    if (!words.length) return;
	if (words.toArray().every(el=>el.className.includes("complete"))) return;
    for (let i = 0; i < words.length; i++) { // For loop bc each method runs async :(
		let el = words[i];
		el.click(); // Click button
		$('.word-textbox').val($(el).text()); // Enter text
		$('.word-textbox')[0].dispatchEvent(new Event('keyup')); // Send keyup event to enable audio button (keyup method not working)
		$('.playbutton.vocab-play').each((n,el)=>el.click()); // Fetch all audio buttons, play them (should get blocked by browser if autoplay disabled)
		await new Promise(r=>setTimeout(r,8000)); // Wait for built in timer to finish
    };
})();
