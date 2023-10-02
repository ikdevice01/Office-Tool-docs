import{_ as o,r as d,o as c,c as i,a as e,b as t,d as a,w as n,e as s}from"./app-a9d9c1d5.js";const r={},u=s(`<h1 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h1><p>这些命令可以在命令行和命令框中使用，命令不区分大小写。如果命令参数中含有空格，请使用 &quot;&quot; (英文双引号) 将其包括起来。</p><p>deploy <em>[options]</em></p><p>使用部署命令时，你需要指定为 deploy，然后再写参数，例如以下是一条简单的部署命令：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">deploy</span> <span class="token parameter attr-name">/addProduct</span> O365ProPlusRetail</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),p=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"命令"),e("th",{style:{"text-align":"left"}},"说明"),e("th",{style:{"text-align":"left"}})])],-1),m=e("td",{style:{"text-align":"left"}},[t("/addProduct "),e("em",null,"values[]")],-1),f=e("td",{style:{"text-align":"left"}},"添加产品",-1),h={style:{"text-align":"left"}},g=e("strong",null,"其中 productID 为必需参数",-1),_=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/removeProduct "),e("em",null,"values[]")]),e("td",{style:{"text-align":"left"}},"卸载产品"),e("td",{style:{"text-align":"left"}},"values: productID_language，使用方法同 /addProduct")],-1),x=e("tr",null,[e("td",{style:{"text-align":"left"}},"/removeAll"),e("td",{style:{"text-align":"left"}},"卸载全部产品"),e("td",{style:{"text-align":"left"}})],-1),y=e("td",{style:{"text-align":"left"}},[t("/channel "),e("em",null,"value")],-1),v=e("td",{style:{"text-align":"left"}},"设置通道",-1),k={style:{"text-align":"left"}},b=e("em",null,"value",-1),P=e("em",null,"Current",-1),X=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/clientEdition "),e("em",null,"value")]),e("td",{style:{"text-align":"left"}},"设置体系结构"),e("td",{style:{"text-align":"left"}},[e("em",null,"value"),t(": 32 或 64，默认值为 32。")])],-1),O=e("tr",null,[e("td",{style:{"text-align":"left"}},"/migrateArch"),e("td",{style:{"text-align":"left"}},"迁移体系结构"),e("td",{style:{"text-align":"left"}})],-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/version "),e("em",null,"value")]),e("td",{style:{"text-align":"left"}},"设置 Office 版本号"),e("td",{style:{"text-align":"left"}},[e("em",null,"value"),t(": Office 版本号。")])],-1),E=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/sourcePath "),e("em",null,"value")]),e("td",{style:{"text-align":"left"}},"设置源路径属性"),e("td",{style:{"text-align":"left"}},[e("em",null,"value"),t(": 路径，支持本地、SMB 路径。")])],-1),B=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/display "),e("em",null,"value")]),e("td",{style:{"text-align":"left"}},"设置是否显示 Office 安装界面"),e("td",{style:{"text-align":"left"}},[e("em",null,"value"),t(": true 显示，false 隐藏，默认值为 "),e("em",null,"true")])],-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},"/acceptEULA"),e("td",{style:{"text-align":"left"}},"代表用户接受许可条款"),e("td",{style:{"text-align":"left"}})],-1),N=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("/module "),e("em",null,"value")]),e("td",{style:{"text-align":"left"}},"设置安装模块"),e("td",{style:{"text-align":"left"}},[e("em",null,"value"),t(": 0: Office 部署工具，1: Office Tool Plus。默认值为 0")])],-1),w=e("tr",null,[e("td",{style:{"text-align":"left"}},"/downloadFirst"),e("td",{style:{"text-align":"left"}},"设置下载后安装"),e("td",{style:{"text-align":"left"}})],-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},"/createShortcuts"),e("td",{style:{"text-align":"left"}},"创建桌面快捷方式"),e("td",{style:{"text-align":"left"}})],-1),D=s(`<h2 id="部署-office-示例" tabindex="-1"><a class="header-anchor" href="#部署-office-示例" aria-hidden="true">#</a> 部署 Office 示例</h2><p>在计算机上部署简体中文版的 Office 2021 专业增强版 - 批量版，排除 Access, Outlook, OneNote:</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">deploy</span> <span class="token parameter attr-name">/addProduct</span> ProPlus2021Volume_zh-cn_Access,Outlook,OneNote <span class="token parameter attr-name">/channel</span> PerpetualVL2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用本地源部署 Office，你需要设置 <code>/sourcePath</code> 和 <code>/version</code> 参数。如果你需要安装 64 位的 Office，你还需要设置 <code>/clientEdition</code>。</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">deploy</span> <span class="token parameter attr-name">/addProduct</span> O365ProPlusRetail_en-us_Access,Outlook,OneNote <span class="token parameter attr-name">/clientEdition</span> <span class="token number">64</span> <span class="token parameter attr-name">/sourcePath</span> <span class="token string">&quot;D:\\Test\\Office Tool&quot;</span> <span class="token parameter attr-name">/version</span> <span class="token number">16</span>.<span class="token number">0</span>.xxxxx.xxxxx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你需要为批量产品设置 MAK，你可以使用以下命令：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">deploy</span> <span class="token parameter attr-name">/addProduct</span> ProPlus2021Volume_zh-cn_Access,Outlook,OneNote_XXXXX-XXXXX-XXXXX-XXXXX-XXXXX <span class="token parameter attr-name">/channel</span> PerpetualVL2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你需要忽略某个参数，可以将其置空。例如不设置语言（不建议这样做）：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">deploy</span> <span class="token parameter attr-name">/addProduct</span> ProPlus2021Volume__Access,Outlook,OneNote <span class="token parameter attr-name">/channel</span> PerpetualVL2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定多个应用程序或语言时，你需要使用「英文逗号」将其隔开，例如 Access,Lync 或 zh-cn,en-us。</p><p>如果需要添加多个产品，请指定多个 addProduct 参数。</p><p>如果需要添加语言包或者校对工具，请使用 <strong>LanguagePack</strong> 或 <strong>ProofingTools</strong> 作为产品 ID.</p>`,12);function I(T,q){const l=d("RouterLink");return c(),i("div",null,[u,e("table",null,[p,e("tbody",null,[e("tr",null,[m,f,e("td",h,[t("values: productID_language_excludeApps_MAK，"),g,t("。使用方法见"),a(l,{to:"/commands/deploy.html#%E9%83%A8%E7%BD%B2-office-%E7%A4%BA%E4%BE%8B"},{default:n(()=>[t("部署示例")]),_:1}),t("。")])]),_,x,e("tr",null,[y,v,e("td",k,[b,t(": 通道 ID，默认值为 "),P,t("，"),a(l,{to:"/zh-cn/deploy/settings/basic.html#%E6%9B%B4%E6%96%B0%E9%80%9A%E9%81%93"},{default:n(()=>[t("更多信息")]),_:1})])]),X,O,A,E,B,V,N,w,L])]),D])}const R=o(r,[["render",I],["__file","deploy.html.vue"]]);export{R as default};
