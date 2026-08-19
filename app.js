const categories = ["全部", "赛事运营", "学校拓展", "机构合作", "活动运营", "数据资产", "学术支持", "团队管理"];
const categoryTone = { 赛事运营:"red", 学校拓展:"gold", 机构合作:"orange", 活动运营:"blue", 数据资产:"slate", 学术支持:"green", 团队管理:"violet", 内容策划:"blue", 客户服务:"orange", 渠道拓展:"gold", 数据管理:"slate", 培训支持:"green" };

const augustEntries = [
  {date:"8.19-8.21",month:"AUG",title:"上海WWEC第三届国际教育会议",summary:"参与大会现场支持、行业交流与学习，并延续会前嘉宾名单、共享表单及圆桌议题筹备。",categories:["赛事运营","学术支持"],details:["支持8月20日大会现场执行与跨团队协同。","围绕国际语言测评、AI与语言素养参与行业学习。","将大会观察转化为学校端沟通与区域业务认知。"],outcome:"大会现场支持 + 行业学习记录"},
  {date:"8.18",month:"AUG",title:"南山外籍人员子女学校入校培训",summary:"配合完成项目介绍、学术支持说明及AISB/拼词之星系统实操培训。",categories:["学校拓展","学术支持"],details:["协助外教与中方助教完成系统注册和实际操作。","配合总部老师完成项目、课程支持与使用场景说明。"],outcome:"入校培训与系统操作支持"},
  {date:"8.17",month:"AUG",title:"入校培训对齐与机构合作推进",summary:"确认南山学校培训内容与分工，推进韶关美澳二级赛点申请及佛山蓝图合作说明。",categories:["学校拓展","机构合作","学术支持"],details:["与金老师、付老师确认入校培训PPT及现场分工。","向韶关美澳发送正式二级赛点申请邮件。","向佛山蓝图同步最新版合作方案及晋级路径。"]},
  {date:"8.13-8.14",month:"AUG",title:"汉字侦探营执行、试卷内测与大会支持",summary:"完成线上活动主持与会后承接，参与4个组别8套试卷内测，并支持WWEC筹备。",categories:["活动运营","学术支持","赛事运营"],details:["完成题目展示、答案揭晓、赛事介绍与互动环节。","同步回放、字库福利及赛事报名指引。","测试小初、小中、小高、初中4个组别A/B卷。"],outcome:"线上活动闭环 + 8套试卷内测"},
  {date:"8.12",month:"AUG",title:"课程介绍口径、机构授权与活动PPT完善",summary:"进一步明确学校端营地优先的推荐逻辑，持续推进机构合作并完成活动题库与互动设计。",categories:["学术支持","机构合作","活动运营"],details:["形成课程售卖、线上外教与本地师资三类合作口径。","活动题库扩充至小初、小中共50道题目。","优化答案分步揭晓与活动流程。"]},
  {date:"8.11",month:"AUG",title:"学校端学术支持培训与机构晋级机制确认",summary:"学习社团课程和营地课程支持体系，制作机构参赛及晋级流程图。",categories:["学术支持","机构合作","活动运营"],details:["补充学校合作可提供的学术支持信息。","确认赛点授权机构参赛及晋级机制。","面向英文赛事选手开展汉字侦探营定向邀约。"],outcome:"机构参赛及晋级流程图"},
  {date:"8.10",month:"AUG",title:"佛山蓝图项目介绍与WWEC华南院校邀约",summary:"向7校区、5000+在途学生的机构介绍SPBCN合作，并完成华南学校定制邀约。",categories:["机构合作","学校拓展"],details:["介绍赛事体系、参赛组织与赛点授权方案。","制作老参赛校、新参赛校两版邀请函。","完成2家机构与36所学校定向邀约。"]},
  {date:"8.6-8.7",month:"AUG",title:"汉英模拟赛执行与汉字侦探营宣发",summary:"完成模拟赛、回放与报名承接，同时启动下一场体验活动的表单、海报与文案。",categories:["活动运营","数据资产"],details:["组织学生线上模拟答题并熟悉赛制。","制作报名指引海报并开放报名窗口。","完成金数据表单、宣传海报及社群文案。"]},
  {date:"8.5",month:"AUG",title:"汉英线上模拟赛PPT制作与会前准备",summary:"完成赛制介绍、参赛流程及模拟答题内容，优化答案展示和活动衔接。",categories:["活动运营","数据资产"],details:["完成题目筛选、补充和页面升级。","检查活动顺序、会议平台及答题环节。"]},
  {date:"8.4",month:"AUG",title:"韶关美澳教育机构合作洽谈",summary:"完成汉英双拼大会项目介绍，沟通返佣、赛点合作模式及落地安排。",categories:["机构合作"],details:["英文赛事预计按三级赛点模式合作。","汉英双拼需确认参与意向、覆盖学生与初赛组织。"]},
  {date:"8.3",month:"AUG",title:"新赛季方向梳理与团队总结任务",summary:"与Ava总对齐新赛季业务方向，明确华南To B职责、冬令营前置思考及团队总结要求。",categories:["团队管理","机构合作","学校拓展"],details:["围绕三个赛事、两个营地梳理新赛季业务框架。","要求两名专员在8月28日前完成赛季总结与新赛季规划。","持续推进汉英活动邀约和韶关机构沟通。"],outcome:"第11赛季工作总结任务框架"}
];

const normalizeCategories = entry => ({...entry,categories:(entry.categories||[]).map(c=>({渠道拓展:"学校拓展",内容策划:"活动运营",客户服务:"活动运营",数据管理:"数据资产",培训支持:"学术支持"}[c]||c))});
const keywordRules = [
  ["世界杯",/世界杯|营地|班级群|分班|宿舍/],
  ["汉英双拼",/汉英|CEBSB|汉字侦探|字库/],
  ["学校拓展",/学校|院校|进校|访校|校长/],
  ["机构合作",/机构|赛点|授权|返佣|合作模式/],
  ["客户邀约",/邀约|触达|私信|邀请函|报名|宣发/],
  ["活动策划",/活动|模拟赛|PPT|主持|回放/],
  ["数据治理",/ERP|数据|名单|客户池|资源底盘|表格|核查/],
  ["学术支持",/学术|课程|试卷|题库|AISB|拼词之星|外教/],
  ["标准化",/SOP|流程图|方案|话术|指引|机制/],
  ["赛事运营",/赛事|初赛|复赛|国赛|晋级|选手/],
  ["团队管理",/团队|分工|岗位|权责|总结|招聘/],
  ["行业学习",/学习|培训|大会|会议|行业/]
];
const deriveKeywords = entry => {
  const source=[entry.title,entry.summary,...(entry.details||[]),entry.outcome||""].join(" ");
  const matched=keywordRules.filter(([,pattern])=>pattern.test(source)).map(([label])=>label);
  return (matched.length?matched:entry.categories).slice(0,3);
};
const dateIndex = entry => {const parts=entry.date.match(/\d+/g)||[99,99];return Number(parts[0])*100+Number(parts[1]||1)};
const entries = [...augustEntries,...(window.WORK_ENTRIES||[]).map(normalizeCategories)].map(entry=>({...entry,keywords:deriveKeywords(entry)})).sort((a,b)=>dateIndex(a)-dateIndex(b));
let activeCategory="全部", activeKeyword="", query="";
const expanded=new Set(["5.25","6.25-6.26","7.11-7.19","8.18","8.19-8.21"]);
const $=selector=>document.querySelector(selector);
const escapeHtml=value=>String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");

const metricEvidence={
  "resource-base":{kicker:"DATA FOUNDATION",title:"507所华南学校资源底盘",copy:"以ERP及历史参赛数据为基础，完成学校名称核验、学校性质与课程体系补全，并按区域、参赛历史及合作方向分层。",evidence:["507所不重复学校记录。","形成可筛选、可排序、可持续补充的华南学校资源底盘。","用于支持新赛季学校分层经营和拓展优先级判断。"]},
  tracking:{kicker:"SCHOOL PIPELINE",title:"35个学校 / 学部进入新赛季追踪",copy:"以桌面《华南个人赛》26-27赛季英文进校参赛追踪日报为准，覆盖深圳23个、广州12个学校或学部。",evidence:["用于新赛季实际学校推进，不等同于507所资源底盘。","结合老师联系方式、参赛状态和下一步动作持续更新。"]},
  "new-schools":{kicker:"NEW PARTICIPATION",title:"4所新参赛校 + 1个新参赛部",copy:"新赛季已识别并推进的新增参赛对象，是学校拓展指标的直接证据。",evidence:["深圳荟同学校","SWIS深外国际部","广州暨大港澳子弟学校","佛山市中黄星瑜港澳子弟学校","中山宏科未来初中部"]},
  institutions:{kicker:"INSTITUTION PIPELINE",title:"2家重点机构方案化推进",copy:"围绕机构体量、学生结构、授权等级、晋级路径和运营支持，将项目介绍转化为可落地的合作方案。",evidence:["韶关美澳教育：项目介绍、二级赛点申请及协议推进。","佛山蓝图教育：项目介绍、授权方案与晋级路径说明。","沉淀机构合作赛点授权方案及参赛晋级流程图。"]},
  recruitment:{kicker:"WORLD CUP RECRUITMENT",title:"3名世界杯选手独立招生",copy:"围绕历史高潜选手建立分层招生清单，以近三年国赛选手和本赛季华南城市复选晋级名单扩充潜客池，通过跟进表持续记录联络状态、意向标签与沟通进度，推进逐一触达和报名承接，最终于6月30日完成3名新招生。",evidence:["6月5日：筛选近三年国赛选手及本赛季复赛晋级客户，扩充世界杯潜客池。","6月9日：使用华南城市复选晋级名单补充潜客，持续更新联络情况及意向标签。","跟进动作：名单分层、表格建档、逐一沟通、意向标注与重点家庭持续承接。","6月30日：完成3名世界杯选手新招生，并衔接后续班级与营地运营。"]},
  "class-support":{kicker:"CAMP DELIVERY",title:"28名世界杯A班学生支持",copy:"世界杯期间承担A班班级管理与中方学术支持，协同外教课堂并保障学生管理、课程执行及信息同步。",evidence:["营前完成班级群、名单与分班信息准备。","营地期间为A班外教上课提供中方学术支持。","整理决赛晋级名单并支持后续信息核查。"]},
  activities:{kicker:"ACTIVATION DESIGN",title:"4场自主策划与执行活动",copy:"完成1场视频号英语学习分享直播和3场汉英暑期线上活动。直播承担内容传播、世界杯项目介绍与客户承接；汉英活动则分别面向已报名、晋级待转化与零经验体验人群，形成分层运营。",evidence:["6月20日：朱峻亨父子英语学习分享视频号直播，负责主持、嘉宾衔接、流程把控、互动引导及项目承接。","7月30日：面向已报名客户开展汉英备赛服务。","8月6日：面向晋级待转化客户开展复赛直通模拟活动。","8月13日：面向零经验客户开展汉字侦探营低门槛体验。"]},
  wwec:{kicker:"WWEC OUTREACH",title:"36所华南院校定向邀约",copy:"结合现有学校资源及直接老师联系方式，为WWEC第三届国际教育会议开展华南区域定向触达。",evidence:["制作老参赛校、新参赛校两版定制邀请函。","新参赛校版本同步融入SPBCN第12赛季合作邀请。","记录异地参会、时间冲突等反馈，为后续区域活动安排提供参考。"]},
  questions:{kicker:"CONTENT ASSET",title:"50道小初组与小中组活动题目",copy:"围绕不同年龄段和活动目的沉淀互动题库，用于模拟赛、题型体验和活动现场讲解。",evidence:["小初组题目","小中组题目","答案分步揭晓与动画呈现"]},
  papers:{kicker:"ACADEMIC QA",title:"8套新赛季初赛试卷内测",copy:"参与小初、小中、小高及初中4个组别的A、B两套试卷测试，从难度、组别适配度与题目表述等维度提出体验反馈。",evidence:["4个参赛组别。","每组A、B两套试卷，共8套。","覆盖难度、适配度与题目表述检查。"]},
  assets:{kicker:"REUSABLE OUTPUT",title:"20+份可复用业务资产",copy:"产出覆盖数据表、分析报告、PPT、SOP、海报、流程图、邀约话术及项目方案。",evidence:["世界杯班级管理SOP","华南学校资源底盘","机构赛点授权方案","汉英暑期三周活动计划","机构参赛与晋级流程图"]},
  academic:{kicker:"ACADEMIC SUPPORT",title:"2类学校端学术支持体系",copy:"完成社团课程支持与营地课程支持两类内容学习，逐步形成面向学校介绍课程及支持体系的专业口径。",evidence:["社团课程支持：以ITSO团体赛培训课件为主要内容。","营地课程支持：自然拼读、词汇图谱、魔力构词及词源语系等。","参与世界杯A班学术支持及南山学校AISB入校培训。"]}
};

const filterList=$("#filter-list"), keywordCloud=$("#keyword-cloud"), keywordSummary=$("#keyword-summary"), timelineList=$("#timeline-list"), resultCount=$("#result-count"), searchInput=$("#search-input"), filterTabs=$(".filter-tabs");
function renderFilters(){filterList.innerHTML=categories.map(c=>{const count=c==="全部"?entries.length:entries.filter(e=>e.categories.includes(c)).length;return `<button type="button" data-category="${c}" class="${activeCategory===c?"active":""}"><span>${c}</span><em>${count}</em></button>`}).join("")}
function renderKeywords(){const stats=keywordRules.map(([word])=>({word,count:entries.filter(e=>e.keywords.includes(word)).length})).filter(item=>item.count).sort((a,b)=>b.count-a.count);keywordSummary.textContent=`${entries.length}个工作节点 · ${stats.length}类高频标签 · 数字代表含该标签的日报数量`;keywordCloud.innerHTML=stats.map(({word,count})=>`<button type="button" data-keyword="${word}" class="${activeKeyword===word?"active":""}"><span>#${word}</span><em>${count}</em></button>`).join("")}
function filteredEntries(){const q=query.trim().toLowerCase();return entries.filter(e=>(activeCategory==="全部"||e.categories.includes(activeCategory))&&(!activeKeyword||e.keywords.includes(activeKeyword))&&(!q||[e.date,e.title,e.summary,...e.keywords,...(e.details||[]),e.outcome||""].join(" ").toLowerCase().includes(q)))}
function entryMarkup(e){const open=expanded.has(e.date);const tags=[...new Set(e.categories)].map(c=>`<span class="tag ${categoryTone[c]||"slate"}">${escapeHtml(c)}</span>`).join("");const keywords=e.keywords.map(word=>`<span>#${escapeHtml(word)}</span>`).join("");return `<article class="timeline-entry"><div class="month-stamp">${e.month}</div><div class="date-cell"><span>2026</span><strong>${escapeHtml(e.date)}</strong></div><div class="entry-body"><div class="entry-tags">${tags}</div><h3>${escapeHtml(e.title)}</h3><div class="entry-keywords"><b>日报关键词</b>${keywords}</div><p>${escapeHtml(e.summary)}</p><div class="entry-details ${open?"open":""}"><div><ul>${(e.details||[]).map(d=>`<li>${escapeHtml(d)}</li>`).join("")}</ul>${e.outcome?`<div class="outcome"><span>OUTPUT</span><b>${escapeHtml(e.outcome)}</b></div>`:""}</div></div>${(e.details||[]).length?`<button class="expand-button" type="button" data-date="${escapeHtml(e.date)}" aria-expanded="${open}">${open?"收起":"查看证据"}<span>${open?"−":"+"}</span></button>`:""}</div></article>`}
function renderTimeline(){const list=filteredEntries();resultCount.innerHTML=`按时间正序 · 当前显示 <b>${list.length}</b> / ${entries.length} 个工作节点`;timelineList.innerHTML=list.length?list.map(entryMarkup).join(""):`<div class="empty-state"><b>没有匹配记录</b><p>尝试更换关键词或选择“全部”。</p><button id="clear-filter">清除筛选</button></div>`}
function showFilterView(view){document.querySelectorAll("[data-filter-view]").forEach(button=>button.setAttribute("aria-selected",String(button.dataset.filterView===view)));$("#filter-panel-keywords").hidden=view!=="keywords";$("#filter-panel-categories").hidden=view!=="categories"}
filterTabs.addEventListener("click",e=>{const button=e.target.closest("button[data-filter-view]");if(button)showFilterView(button.dataset.filterView)});
filterList.addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;activeCategory=b.dataset.category;renderFilters();renderTimeline()});
keywordCloud.addEventListener("click",e=>{const b=e.target.closest("button[data-keyword]");if(!b)return;activeKeyword=activeKeyword===b.dataset.keyword?"":b.dataset.keyword;renderKeywords();renderTimeline()});
searchInput.addEventListener("input",e=>{query=e.target.value;renderTimeline()});
timelineList.addEventListener("click",e=>{const b=e.target.closest("button[data-date]");if(b){expanded.has(b.dataset.date)?expanded.delete(b.dataset.date):expanded.add(b.dataset.date);renderTimeline()}if(e.target.closest("#clear-filter")){activeCategory="全部";activeKeyword="";query="";searchInput.value="";renderFilters();renderKeywords();renderTimeline()}});

const dialog=$("#metric-dialog");
document.querySelectorAll("[data-metric]").forEach(button=>button.addEventListener("click",()=>{const d=metricEvidence[button.dataset.metric];$("#dialog-kicker").textContent=d.kicker;$("#dialog-title").textContent=d.title;$("#dialog-copy").textContent=d.copy;$("#dialog-evidence").innerHTML=d.evidence.map(x=>`<span>${escapeHtml(x)}</span>`).join("");dialog.showModal()}));
$(".dialog-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

const observer=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add("visible");observer.unobserve(item.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
renderFilters();renderKeywords();renderTimeline();
