(()=>{for(let e of document.querySelectorAll("img[lazyload]"))Fluid.utils.waitElementVisible(e,function(){e.removeAttribute("srcset"),e.removeAttribute("lazyload")},CONFIG.lazyload.offset_factor)})(window);