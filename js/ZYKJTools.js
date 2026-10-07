(w=>{class e{constructor(e){this.options=e||{log:!0},this.version="v0.0.1",this.createtime=new Date("03/21/2020 20:14:00"),this.bannerlist=["https://gcore.jsdelivr.net/gh/zykjofficial/zykjimg@master/bangumi/png/bangumi5.png"],this.log=!!this.options.log,this.log&&this.logInfo(),this.F12Info()}F12Info(){w.onkeydown=function(e){"undefined"!=typeof btf&&btf.snackbarShow&&123===e.keyCode&&btf.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)}}logInfo(e,t){var n;w.__myLogExecuted||(n=((new Date).setTime((new Date).getTime()+250)-this.createtime)/1e3/60/60/24,n=["欢迎使用ZYKJTools！","做一个普普通通的人.",`

███████ ██    ██ ██   ██      ██ ████████  ██████   ██████  ██      ███████     
   ███   ██  ██  ██  ██       ██    ██    ██    ██ ██    ██ ██      ██          
  ███     ████   █████        ██    ██    ██    ██ ██    ██ ██      ███████     
 ███       ██    ██  ██  ██   ██    ██    ██    ██ ██    ██ ██           ██     
███████    ██    ██   ██  █████     ██     ██████   ██████  ███████ ███████     
                                                                                                                                                                                                                                                                                
        `,"已上线",Math.floor(n),"天","©2021 By zykj "+this.version],console.log(`
%c${n[0]} %c ${n[1]} %c ${n[2]} %c${n[3]}%c ${n[4]}%c ${n[5]}

%c ${n[6]}
`,"color:#425AEF","","color:#425AEF","color:#425AEF","","color:#425AEF",""),w.__myLogExecuted=!0)}funnyTitle(e,t,n,i){var o,a=document.title;document.addEventListener("visibilitychange",function(){document.hidden?(document.querySelector('[rel="icon"]').setAttribute("href",n||"https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/funny.ico"),document.title=e||"(っ °Д °;)っ 访问的页面不存在了",clearTimeout(o)):(document.querySelector('[rel="icon"]').setAttribute("href",i||"https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/favicon.ico"),document.title=t||"( •̀ ω •́ )✧ 又好啦 ~ "+a,o=setTimeout(function(){document.title=a},2e3))})}setFullBackground(e){var t=document.getElementsByClassName("full_page")[0],n=document.getElementsByClassName("not-index-bg")[0],i=document.getElementsByClassName("post-bg")[0],o=document.getElementById("web_bg"),a=document.getElementById("footer");e=e||"https://api.mtyqx.cn/tapi/random.php",t&&a?(t.style.cssText="background-image: url("+e+");background-size:cover;background-position:center;",a.style.background="transparent",o.style.cssText="background-image: url("+e+");background-size:cover;background-position:center;"):i?o.style.cssText="background-image: url("+e+");background-size:cover;background-position:center;":(t=n.style.backgroundImage,n.style.background="transparent",a.style.background="transparent",o.style.cssText="background-image: "+t+";background-size:cover;background-position:center;")}setBg(e,t){var n=document.getElementsByClassName("full_page")[0],i=document.getElementById("footer");n&&i&&(n.style.backgroundImage="url("+e+")",t)&&(i.style.backgroundImage="url("+e+")")}randomNum(e,t){return Math.floor(Math.random()*(t-e+1))+e}randomBanner(e,t,n,i,o=!0){let a="";a=4===arguments.length?e+this.randomNum(n,i)+t:(o=!!e,this.bannerlist[this.randomNum(0,this.bannerlist.length-1)]),this.setBg(a,o)}runningTime(e,i,t,n=2){var o,a,s=document.querySelector(".footer-other");s&&(o=document.createElement("div"),a=e,o.setAttribute("id",t),setInterval(()=>{var e=Math.round(new Date(a).getTime()/1e3);let t=Math.round(((new Date).getTime()+288e5)/1e3)-e;e=new Array(0,0,0,0,0);let n="";31536e3<=t&&(e[0]=parseInt(t/31536e3),t%=31536e3),86400<=t&&(e[1]=parseInt(t/86400),t%=86400),3600<=t&&(e[2]=parseInt(t/3600),t%=3600),60<=t&&(e[3]=parseInt(t/60),t%=60),0<t&&(e[4]=t),0<e[0]&&(n=e[0]+" 年 ");e=i+" "+n+e[1]+" 天 "+e[2]+" 时 "+e[3]+" 分 "+e[4]+" 秒";o.innerHTML=e},1e3),s.insertBefore(o,s.children[n]))}rightMenu(e){if(!w.__ZYKJRightMenuInited){w.__ZYKJRightMenuInited=!0;let h={rightSide:"rightside",rightMenu:"rightMenu",menuText:"menu-text",menuLink:"menu-link",menuBlog:"menu-blog",switchDarkMode:"switchdarkmode",switchTranslateMode:"switchtranslatemode",switchReadMode:"switchreadmode",randomPost:"randompost",scrollToTop:"scrollToTop",darkModeBtn:"darkmode",translateLink:"translateLink",readModeBtn:"readmode",exitReadMode:"exit-readmode",rightSideShow:"rightside-show",fancybox:"with-fancybox",copyLinkLabel:"copyLinkLabel"},m={offsetX:10},p=Boolean(e),y="",f="",M={};var e=document.getElementById(h.rightSide);if(e){e.insertAdjacentHTML("afterend",`
   				<div id="${h.rightMenu}">
      				<div class="rightMenu-group rightMenu-small">
        				<a class="rightMenu-item" data-action="back" title="后退">
							<i class="fa-solid fa-arrow-left"></i>
        				</a>
       					<a class="rightMenu-item" data-action="refresh" title="刷新">
          					<i class="fa-solid fa-arrow-rotate-right"></i>
       					</a>
 						<a class="rightMenu-item" data-action="forward" title="前进">
 						    <i class="fa-solid fa-arrow-right"></i>
 						</a>
 						<a class="rightMenu-item" data-action="home" title="回到首页">
						    <i class="fa-solid fa-house"></i>
						</a>
					</div>
					<div id="${h.menuText}" class="rightMenu-group rightMenu-line hide">
						<a class="rightMenu-item" data-action="copySelect">
							<i class="fa-solid fa-copy"></i><span>复制</span>
        				</a>
      				</div>
			    	<div id="${h.menuLink}" class="rightMenu-group rightMenu-line hide">
			       	 	<a class="rightMenu-item" data-action="openLinkNewTab">
			       	   		<i class="fa-fw fa fa-link"></i><span>新标签页打开</span>
			      	 	</a>
			      	  	 <a class="rightMenu-item" data-action="copyLinkUrl">
         					 <i class="fa-solid fa-copy"></i><span id="${h.copyLinkLabel}">复制链接地址</span>
       			         </a>
			   		</div>
			        <div class="rightMenu-group rightMenu-line">
			          <a class="rightMenu-item" id="${h.switchDarkMode}" data-action="switchDarkMode" style="display: none;">
			            <i class="fa-solid fa-circle-half-stroke"></i><span>深色模式</span>
			          </a>
			          <a class="rightMenu-item hide" id="${h.switchTranslateMode}" data-action="switchTranslateMode" style="display: none;">
			            <i class="fa-solid fa-earth-asia"></i><span>繁体模式</span>
			          </a>
			          <a class="rightMenu-item" id="${h.switchReadMode}" data-action="switchReadMode" style="display: none;">
			            <i class="fa-solid fa-book"></i><span>阅读模式</span>
			          </a>
			          <a class="rightMenu-item" id="${h.randomPost}" href="/random_post/">
			            <i class="fa-fw fas fa-random"></i><span>随便逛逛</span>
			          </a>
			          <a class="rightMenu-item" id="${h.scrollToTop}" data-action="scrollToTop" style="display: none;">
			            <i class="fas fa-arrow-up"></i><span>回到顶部</span>
			          </a>
			        </div>
			        <div id="${h.menuBlog}" class="rightMenu-group rightMenu-line" style="display: none;">
			          <a class="rightMenu-item" href="/categories/">
			            <i class="fa-fw fa fa-folder-open"></i><span>博客分类</span>
			          </a>
			          <a class="rightMenu-item" href="/tags/">
			            <i class="fa-solid fa-tags"></i><span>博客标签</span>
			          </a>
			        </div>
			    </div>
  			`),e.insertAdjacentHTML("afterend",`
			<style>
			#rightMenu {
				display: none;
				position: fixed;
				width: 160px;
				height: fit-content;
				top: 10%;
				left: 10%;
				background-color: var(--card-bg);
				box-shadow: var(--card-box-shadow);
				border-radius: 8px;
				z-index: 100;
				transition: opacity 0.2s, box-shadow 0.2s;
				user-select: none;
				z-index: 99999; 
			}
			#rightMenu .rightMenu-group {
				padding: 7px 6px;
			}
			#rightMenu .rightMenu-group:not(:nth-last-child(1)) {
				border-bottom: 1px dashed #4259ef23;
			}
			#rightMenu .rightMenu-group.rightMenu-small {
				display: flex;
				justify-content: space-between;
			}
			#rightMenu .rightMenu-group .rightMenu-item {
				height: 30px;
				line-height: 30px;
				border-radius: 8px;
				transition: opacity 0.2s, box-shadow 0.2s;
				color: var(--font-color);
				cursor: pointer;
			}
			#rightMenu .rightMenu-group.rightMenu-line .rightMenu-item {
				display: flex;
				height: 40px;
				line-height: 40px;
				padding: 0 4px;
			}
			#rightMenu .rightMenu-group .rightMenu-item:hover {
				background-color: var(--text-bg-hover);
			}
			#rightMenu .rightMenu-group .rightMenu-item i {
				display: inline-block;
				text-align: center;
				line-height: 30px;
				width: 30px;
				height: 30px;
				padding: 0 5px;
			}
			#rightMenu .rightMenu-group .rightMenu-item span {
				line-height: 30px;
			}
			#rightMenu .rightMenu-group.rightMenu-line .rightMenu-item * {
				height: 40px;
				line-height: 40px;
			}
			.rightMenu-group.hide {
				display: none;
			}
			</style>
 			 `);let s=document.getElementById(h.rightMenu),i=document.getElementById(h.menuText),o=document.getElementById(h.menuLink),a=document.getElementById(h.menuBlog),r=document.getElementById(h.switchDarkMode),l=document.getElementById(h.switchTranslateMode),d=document.getElementById(h.switchReadMode),c=document.getElementById(h.randomPost),u=document.getElementById(h.scrollToTop),g=document.getElementById(h.copyLinkLabel),t=(M.showRightMenu=function(e,t=0,n=0){s.style.top=t+"px",s.style.left=n+"px",s.style.display=e?"block":"none"},M.switchDarkMode=function(){document.getElementById(h.darkModeBtn)?.click()},M.switchTranslateMode=function(){document.getElementById(h.translateLink)?.click()},M.copySelect=function(){var e=GLOBAL_CONFIG?.Snackbar?GLOBAL_CONFIG.copy.success:"复制已选中文字";n(f,e),M.showRightMenu(!1)},M.openLinkNewTab=function(){y&&(w.open(y,"_blank","noopener noreferrer"),M.showRightMenu(!1))},M.copyLinkUrl=function(){var e;y&&(e="复制图片地址"===g.innerText?"图片地址已复制":"链接地址已复制",n(y,e),M.showRightMenu(!1))},M.switchReadMode=function(){var e=document.querySelector("."+h.exitReadMode),t=document.getElementById(h.readModeBtn),n=d.querySelector("span");e?(e.click(),n.innerText="阅读模式",k("退出阅读模式")):(t?.click(),k("进入阅读模式"))},M.scrollToTop=function(){"undefined"!=typeof btf&&btf.scrollToDest&&btf.scrollToDest(0,500)},{back:()=>w.history.back(),forward:()=>w.history.forward(),refresh:()=>w.location.reload(),home:()=>w.location.href=w.location.origin});function n(e,t){e&&(navigator.clipboard&&w.isSecureContext?navigator.clipboard.writeText(e).then(()=>{k(t)}).catch(()=>{b(e,t)}):b(e,t))}function b(e,t){var n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",n.style.left="-9999px",document.body.appendChild(n),n.select();try{document.execCommand("copy"),k(t)}catch(e){k("复制失败:")}document.body.removeChild(n)}function k(e){"undefined"!=typeof btf&&btf.snackbarShow&&btf.snackbarShow(e)}s.addEventListener("click",function(e){var e=e.target.closest(".rightMenu-item");e&&((e=e.dataset.action)&&t[e]?(t[e](),M.showRightMenu(!1)):e&&M[e]&&M[e]())}),/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)||(w.addEventListener("contextmenu",function(e){var t,n;0<document.getElementsByClassName(h.fancybox).length||"INPUT"===(n=e.target).tagName||"TEXTAREA"===n.tagName||n.isContentEditable||(e.preventDefault(),f=document.getSelection().toString().trim(),i.classList.add("hide"),o.classList.add("hide"),y="",document.getElementById(h.darkModeBtn)?(r.style.display="block",t="light"===document.documentElement.getAttribute("data-theme"),r.querySelector("span").innerText=t?"深色模式":"浅色模式"):r.style.display="none",(t=document.getElementById(h.translateLink))?(l.style.display="block",t="繁"===t.innerText,l.querySelector("span").innerText=t?"繁体模式":"簡體模式"):l.style.display="none",(t=document.getElementById(h.readModeBtn))?(d.style.display="block",t=document.querySelector("."+h.exitReadMode),d.querySelector("span").innerText=t?"退出阅读模式":"阅读模式"):d.style.display="none",c.style.display=p?"block":"none",a.style.display=p?"block":"none",t=0<document.getElementsByClassName(h.rightSideShow).length,u.style.display=t?"block":"none",i.classList.add("hide"),o.classList.add("hide"),(t=0<document.getSelection().toString().length)&&(i.classList.remove("hide"),c.style.display="none",a.style.display="none"),{top:n,left:e}=((t=n.closest("a"))&&t.href&&!t.href.startsWith("javascript:")?("IMG"===n.tagName&&t.querySelector("img")?(y=t.querySelector("img").src,g.innerText="复制图片地址"):(y=t.href,g.innerText="复制链接地址"),o.classList.remove("hide"),f&&i.classList.remove("hide"),c.style.display="none",a.style.display="none"):(e=>{if(e)try{var t=new URL(e.trim());return"http:"===t.protocol||"https:"===t.protocol}catch(e){}})(f)?(y=f,g.innerText="复制链接地址",o.classList.remove("hide"),c.style.display="none",a.style.display="none"):f&&(i.classList.remove("hide"),c.style.display="none",a.style.display="none"),s.style.display="block",s.style.left="0px",s.style.top="0px",((e,t)=>{var n=s.clientWidth,i=s.clientHeight;let o=e+m.offsetX,a=t;return o+n>w.innerWidth&&(o=e-n-m.offsetX),{top:a=a+i>w.innerHeight?w.innerHeight-i:a,left:o}})(e.clientX,e.clientY)),M.showRightMenu(!0,n,e))}),w.addEventListener("click",e=()=>M.showRightMenu(!1)),w.addEventListener("scroll",e),w.addEventListener("blur",e),w.rmf=M)}}}}w.ZYKJTools=e})(window);