if("serviceWorker"in navigator){navigator.serviceWorker.register("/sw.js").then(serviceWorker=>{console.log("Service Worker registered: ",serviceWorker)}).catch(error=>{console.error("Error registering the Service Worker: ",error)})}const nav=document.querySelector('#nav2');const navTop=nav.offsetTop;function stickyNavigation(){if(window.scrollY>=navTop+1){document.body.style.paddingTop=nav.offsetHeight+'px';document.body.classList.add('fixed-nav')}else{document.body.style.paddingTop=0;document.body.classList.remove('fixed-nav')}}window.addEventListener('scroll',stickyNavigation);function openNav(){document.getElementById("nav3").style.display="block";document.getElementById("html").style.overflowY="hidden";const elements=["skiptocontent","title-div","main","manuscript-div","journal-div","credits-div","credits1-div","credits2-div","footer-div"];for(const element of elements){if(document.getElementById(element)!==null){document.getElementById(element).style.display="none"}}}function closeNav(){document.getElementById("nav3").style.display="none";document.getElementById("html").style.overflowY="unset";const elements=["skiptocontent","title-div","main","manuscript-div","journal-div","credits-div","credits1-div","credits2-div","footer-div"];for(const element of elements){if(document.getElementById(element)!==null){document.getElementById(element).style.display="block"}}}const menu=document.getElementById('nav1');menu.addEventListener('keydown',handleKeydown);menu.addEventListener('focusin',handleFocusIn);const lastMenuItem=Array.from(menu.querySelectorAll('[role="menuitem"]')).pop();const topLevelItems=Array.from(menu.querySelectorAll('[aria-haspopup]'));function handleFocusIn(event){if(event.target.attributes['aria-haspopup']){Array.from(menu.querySelectorAll('[aria-haspopup]')).filter(x=>x!==event.target).forEach(x=>{x.checked=false})}}function handleKeydown(event){const keyCode=Object.freeze({'TAB':9,'RETURN':13,'ESC':27,'SPACE':32,'PAGEUP':33,'PAGEDOWN':34,'END':35,'HOME':36,'LEFT':37,'UP':38,'RIGHT':39,'DOWN':40});const target=event.target;const char=event.keyCode;let currentItem=null;switch(char){case keyCode.DOWN:event.preventDefault();if(target.attributes['aria-haspopup']&&target.attributes['aria-haspopup'].value==="true"){if(target.checked){const firstMenuElement=target.parentElement.querySelector('[role="menuitem"]');firstMenuElement.focus()}else{target.checked=true }}else if(target.attributes['role']&&target.attributes['role'].value==="menuitem"){const menuItems=Array.from(target.closest('ul').querySelectorAll('[role="menuitem"]'));const nextMenuItem=getNextElement(menuItems,target);nextMenuItem.focus()}break;case keyCode.UP:event.preventDefault();if(target.attributes['aria-haspopup']&&target.attributes['aria-haspopup'].value==="true"&&target.checked){target.checked=false}else if(target.attributes['role']&&target.attributes['role'].value==="menuitem"){const menuItems=Array.from(target.closest('ul').querySelectorAll('[role="menuitem"]'));const prevMenuItem=getPreviousElement(menuItems,target);if(prevMenuItem===target){const topLevelItem=target.closest('.dropdown').querySelector('input');topLevelItem.checked=false;topLevelItem.focus()}else{prevMenuItem.focus()}}break;case keyCode.LEFT:event.preventDefault();if(target.attributes['aria-haspopup']){currentItem=target}else if(target.attributes['role']&&target.attributes['role'].value==="menuitem"){currentItem=target.closest('.dropdown').querySelector('input')}else{break}const prevTopLevelItem=getPreviousElement(topLevelItems,currentItem);if(prevTopLevelItem.attributes['aria-haspopup']&&prevTopLevelItem.attributes['aria-haspopup'].value==="true"){prevTopLevelItem.checked=currentItem.checked}else{prevTopLevelItem.checked=false}prevTopLevelItem.focus();break;case keyCode.RIGHT:event.preventDefault();if(target.attributes['aria-haspopup']){currentItem=target}else if(target.attributes['role']&&target.attributes['role'].value==="menuitem"){currentItem=target.closest('.dropdown').querySelector('input')}else{break}const nextTopLevelItem=getNextElement(topLevelItems,currentItem);if(nextTopLevelItem.attributes['aria-haspopup']&&nextTopLevelItem.attributes['aria-haspopup'].value==="true"){nextTopLevelItem.checked=currentItem.checked}else{nextTopLevelItem.checked=false}nextTopLevelItem.focus();break;case keyCode.RETURN:if(target.attributes['aria-haspopup']&&target.attributes['aria-haspopup'].value==="true"){target.checked=!target.checked}break;case keyCode.TAB:if(event.target===lastMenuItem){const lastDropdown=Array.from(menu.querySelectorAll('[aria-haspopup]')).pop();lastDropdown.checked=false}break;case keyCode.ESC:let parentPopup;if(target.attributes['aria-haspopup']){parentPopup=target}else if(target.attributes['role']&&target.attributes['role'].value==="menuitem"){parentPopup=target.closest('.dropdown').querySelector('input')}parentPopup.checked=false;parentPopup.focus();break}}function getNextElement(items,currentItem){const currentIndex=items.findIndex(x=>x==currentItem);return items[Math.min(currentIndex+1,items.length-1)]}function getPreviousElement(items,currentItem){const currentIndex=items.findIndex(x=>x==currentItem);return items[Math.max(currentIndex-1,0)]}AddRelNoopener();function AddRelNoopener(){var links=document.querySelectorAll("a");for(var i=0;i<links.length;i+=1){links[i].setAttribute("rel","noopener")}}RandomiseHref();function RandomiseHref(){var links=document.querySelectorAll("a:not([href^='http']):not([href*='#']):not([href^='mailto']):not([onclick]):not([class='trans-return']):not([class='art-return'])");for(var i=0;i<links.length;i+=1){var randomString=Math.floor(Math.random()*1000000);links[i].href=links[i].href+"?="+randomString}}

// Taken from https://stackoverflow.com/a/28840664
// (function()
// {
//     if( window.localStorage )
//     {
//     if( !localStorage.getItem('firstLoad') )
//     {
//         localStorage['firstLoad'] = true;
//         window.location.reload();
//     }  
//     else
//         localStorage.removeItem('firstLoad');
//     }
// })();


// Taken from https://medium.com/@mertkadirgrsoy/how-to-refresh-a-page-only-once-with-javascript-cdbaf079fc73
function reloadPage() {
// The last "domLoading" Time //
var currentDocumentTimestamp =
new Date(performance.timing.domLoading).getTime();
// Current Time //
var now = Date.now();
// Ten Seconds //
var tenSec = 60 * 1000;
// Plus Ten Seconds //
var plusTenSec = currentDocumentTimestamp + tenSec;
if (now > plusTenSec) {
location.reload();
} else {}
}
reloadPage();