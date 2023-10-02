import{_ as r,r as h,o as d,c,a as t,b as e,d as n,w as f,e as a}from"./app-a9d9c1d5.js";const o={},s=a('<h1 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h1><p>在激活页面，你可以安装许可证、安装产品密钥，配置 KMS 等，进行 Office 的激活。</p><p>购买有正版授权的用户可直接打开 Office 应用程序并登录微软账号即可激活 Office.</p><h2 id="许可证说明" tabindex="-1"><a class="header-anchor" href="#许可证说明" aria-hidden="true">#</a> 许可证说明</h2><h3 id="零售-retail-许可证" tabindex="-1"><a class="header-anchor" href="#零售-retail-许可证" aria-hidden="true">#</a> 零售（Retail）许可证</h3><p>零售许可证只能使用产品密钥激活，对于 Microsoft 365（Office 365）系列产品，只能通过登录拥有正版许可证的微软账户激活。</p><p>目前大多数的零售许可都与微软账户绑定，因此零售版产品通常不使用 Office Tool Plus 进行激活。</p><h3 id="批量-volume-许可证" tabindex="-1"><a class="header-anchor" href="#批量-volume-许可证" aria-hidden="true">#</a> 批量（Volume）许可证</h3><p>批量许可证可以使用 MAK 激活，也能使用 KMS 激活。</p><ul><li>MAK 指的是批量激活密钥（Multiple Activation Key），该密钥有激活次数上限，可以多次使用并激活 Office.</li><li>KMS 激活指的是使用密钥管理服务（Key Management Service）进行激活，KMS 激活需要使用 GVLK，并设置 KMS 主机。</li></ul><p>在激活信息不丢失的情况下，使用 MAK 激活为永久激活。</p><p>KMS 续期策略由 KMS 主机决定。通常情况下，一次激活的有效期是 180 天，每隔 7 天续期一次。</p><h2 id="许可证管理" tabindex="-1"><a class="header-anchor" href="#许可证管理" aria-hidden="true">#</a> 许可证管理</h2><h3 id="安装许可证" tabindex="-1"><a class="header-anchor" href="#安装许可证" aria-hidden="true">#</a> 安装许可证</h3><p>你可以从列表中找到你需要的许可证并安装，按住 Ctrl 可以同时选择多个许可证。Office Tool Plus 为零售许可证内置了默认密钥，为批量许可证内置了 GVLK 密钥。</p><p>安装许可证时，原有的许可证不会被覆盖也不会被清除，因此许可证可以共存。</p><h3 id="安装其他许可证" tabindex="-1"><a class="header-anchor" href="#安装其他许可证" aria-hidden="true">#</a> 安装其他许可证</h3><p>如果你需要，你可以安装其他许可证，通常情况下，Office 许可证储存在 <code>C:\\Program Files\\Microsoft Office\\root\\Licenses16</code>，你可以复制给其他计算机使用。使用该功能不会安装 Office 产品密钥，需要自行安装密钥。</p><h3 id="卸载所有许可证" tabindex="-1"><a class="header-anchor" href="#卸载所有许可证" aria-hidden="true">#</a> 卸载所有许可证</h3><p>此功能会删除系统上安装了的所有的 Office 许可证，不会清除密钥。</p><h2 id="密钥管理" tabindex="-1"><a class="header-anchor" href="#密钥管理" aria-hidden="true">#</a> 密钥管理</h2><h3 id="安装密钥" tabindex="-1"><a class="header-anchor" href="#安装密钥" aria-hidden="true">#</a> 安装密钥</h3>',22),l=a('<h3 id="卸载所有未激活的密钥" tabindex="-1"><a class="header-anchor" href="#卸载所有未激活的密钥" aria-hidden="true">#</a> 卸载所有未激活的密钥</h3><p>此功能会检索当前所有的 Office 许可证，并自动卸载未激活的产品密钥。进行此操作可能会丢失你的 Office 产品密钥，请小心执行。</p><h3 id="安装确认-id-cid" tabindex="-1"><a class="header-anchor" href="#安装确认-id-cid" aria-hidden="true">#</a> 安装确认 ID (CID)</h3><p>此功能允许你输入并安装一个确认 ID，用于电话激活。</p><h2 id="kms-管理" tabindex="-1"><a class="header-anchor" href="#kms-管理" aria-hidden="true">#</a> KMS 管理</h2><p>KMS 主机可以是一个域名，也可以是一个 IP 地址，例如：kms.example.com 或者 192.168.123.1</p><p>KMS 主机的默认端口是 1688，如果需要，可以手动输入指定为其他端口。</p><h2 id="许可证列表" tabindex="-1"><a class="header-anchor" href="#许可证列表" aria-hidden="true">#</a> 许可证列表</h2><p>您可以从这里检索当前设备上已安装的 Office 许可证的信息，支持 vNext 许可证和传统的 Office 许可证。</p><div class="custom-container tip"><p class="custom-container-title">什么是 vNext 许可证？</p><p>vNext 许可证是 Microsoft 订阅用户的专属许可证，通常是 Microsoft 365 个人/家庭版订阅或 Microsoft 365 企业版订阅许可证。这些许可证与微软账户绑定，具有一定的时间限制，通常情况下需要在两个月内联网验证可用性，否则 Office 可能会弹出订阅过期的提示。</p></div><h3 id="vnext-许可证" tabindex="-1"><a class="header-anchor" href="#vnext-许可证" aria-hidden="true">#</a> vNext 许可证</h3><p>Office Tool Plus 支持查看 vNext 许可证的状态、期限、使用者等信息。您也可以在这里删除不想要/不需要的 vNext 许可证。在删除之前，建议先从 Office 应用程序内退出相应微软账户的登录。</p><h3 id="office-传统许可证" tabindex="-1"><a class="header-anchor" href="#office-传统许可证" aria-hidden="true">#</a> Office 传统许可证</h3><p>Office Tool Plus 支持查看许可证的基础信息，可以针对单个许可证卸载产品密钥，也可以获取安装 ID 以用于电话激活。</p>',14);function p(u,x){const i=h("RouterLink");return d(),c("div",null,[s,t("p",null,[e("输入一个完整的 Office 产品密钥即可进行安装。如果你在安装产品密钥时显示错误代码 "),n(i,{to:"/zh-cn/faq/activation.html#_0xc004f069"},{default:f(()=>[e("0xC004F069")]),_:1}),e("，请确保你已经安装该密钥对应的 Office 许可证。")]),l])}const m=r(o,[["render",p],["__file","index.html.vue"]]);export{m as default};
