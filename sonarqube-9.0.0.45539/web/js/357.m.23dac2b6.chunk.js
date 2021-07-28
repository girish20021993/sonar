(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1875:function(e,t,a){"use strict";a.r(t),a.d(t,"PullRequestOverview",(function(){return L}));var n=a(458),s=a.n(n),i=a(699),l=a.n(i),r=a(311),c=a(2),o=a(325),m=a(323),d=a.n(m),v=a(322),p=a(31),u=a(408),h=a(545),b=a(328),f=a(359),g=a(512),E=a(327),w=a(623),y=a(1146),N=a(1147),O=a(1145),j=a(1167),_=(a(1144),a(657)),k=a(320);var x=c.memo((function({className:e,measures:t,type:a}){const n=Object(_.i)(a),s=Object(f.findMeasure)(t,n);return s&&void 0!==s.value?c.createElement("div",{className:r(e,"display-flex-center")},c.createElement("span",{className:"huge"},Object(k.formatMeasure)(s.value,"PERCENT")),c.createElement("span",{className:"label flex-1 spacer-left text-right"},Object(p.translate)("component_measures.facet_category.overall_category.estimated"))):null})),B=a(316),D=a(317),q=a(379),C=a.n(q),M=a(350),R=a(321);var S=c.memo((function({component:e,level:t}){const a="OK"===t,n=void 0===e.qualityGate?Object(R.B)():Object(R.A)(e.qualityGate.key);return c.createElement("div",{className:r("overview-quality-gate-badge-large small",{failed:!a,success:a})},c.createElement("div",{className:"display-flex-center"},c.createElement("span",null,Object(p.translate)("overview.on_new_code_long")),c.createElement(d.a,{className:"little-spacer-left",overlay:c.createElement(B.FormattedMessage,{defaultMessage:Object(p.translate)("overview.quality_gate.conditions_on_new_code"),id:"overview.quality_gate.conditions_on_new_code",values:{link:c.createElement(D.c,{to:n},Object(p.translate)("overview.quality_gate"))}})},c.createElement(C.a,{fill:M.colors.transparentWhite,size:12}))),void 0!==t&&c.createElement("h3",{className:"huge-spacer-top huge"},Object(p.translate)("metric.level",t)))}));class L extends c.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,measures:[]},this.conditionsHaveChanged=e=>{var t,a;const n=null!==(t=e.conditions)&&void 0!==t?t:[],s=null!==(a=this.props.conditions)&&void 0!==a?a:[],i=l()(n.filter(e=>"ERROR"===e.level),s.filter(e=>"ERROR"===e.level),e=>e.metric);return void 0===e.conditions&&void 0!==this.props.conditions||i.length>0},this.fetchBranchStatusData=()=>{const{branchLike:e,component:{key:t}}=this.props;this.props.fetchBranchStatus(e,t)},this.fetchBranchData=()=>{const{branchLike:e,component:{key:t},conditions:a}=this.props;this.setState({loading:!0});const n=void 0!==a?s()([..._.d,...a.filter(e=>"OK"!==e.level).map(e=>e.metric)]):_.d;Object(h.f)(t,n,Object(b.d)(e)).then(({component:e,metrics:t})=>{this.mounted&&e.measures&&this.setState({loading:!1,measures:Object(f.enhanceMeasuresWithMetrics)(e.measures||[],t)})},()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0,void 0===this.props.conditions?this.fetchBranchStatusData():this.fetchBranchData()}componentDidUpdate(e){this.conditionsHaveChanged(e)&&this.fetchBranchData()}componentWillUnmount(){this.mounted=!1}render(){const{branchLike:e,component:t,conditions:a,ignoredConditions:n,status:s}=this.props,{loading:i,measures:l}=this.state;if(i)return c.createElement("div",{className:"page page-limited"},c.createElement("i",{className:"spinner"}));if(void 0===a)return null;const o=a.filter(e=>"ERROR"===e.level).map(e=>Object(f.enhanceConditionWithMeasure)(e,l)).filter(u.isDefined);return c.createElement("div",{className:"page page-limited"},c.createElement("div",{className:r("pr-overview",{"has-conditions":o.length>0})},n&&c.createElement(v.Alert,{className:"big-spacer-bottom",display:"inline",variant:"info"},c.createElement("span",{className:"text-middle"},Object(p.translate)("overview.quality_gate.ignored_conditions")),c.createElement(d.a,{className:"spacer-left",overlay:Object(p.translate)("overview.quality_gate.ignored_conditions.tooltip")})),c.createElement("div",{className:"display-flex-row"},c.createElement("div",{className:"big-spacer-right"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small display-inline-flex-center"},Object(p.translate)("overview.quality_gate"),c.createElement(d.a,{className:"little-spacer-left",overlay:c.createElement("div",{className:"big-padded-top big-padded-bottom"},Object(p.translate)("overview.quality_gate.help"))})),c.createElement(S,{component:t,level:s})),o.length>0&&c.createElement("div",{className:"pr-overview-failed-conditions big-spacer-right"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(p.translate)("overview.failed_conditions")),c.createElement(j.b,{branchLike:e,collapsible:!0,component:t,failedConditions:o})),c.createElement("div",{className:"flex-1"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(p.translate)("overview.measures")),c.createElement("div",{className:"overview-panel-content"},[w.b.Bug,w.b.Vulnerability,w.b.SecurityHotspot,w.b.CodeSmell].map(a=>c.createElement("div",{className:"overview-measures-row display-flex-row",key:a},c.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},c.createElement(y.a,{branchLike:e,component:t,measures:l,type:a,useDiffMetric:!0})),c.createElement("div",{className:"overview-panel-big-padded overview-measures-aside display-flex-center"},c.createElement(N.a,{branchLike:e,component:t,measures:l,type:a,useDiffMetric:!0})))),[_.c.Coverage,_.c.Duplication].map(a=>c.createElement("div",{className:"overview-measures-row display-flex-row",key:a},c.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},c.createElement(O.a,{branchLike:e,component:t,measures:l,type:a,useDiffMetric:!0})),c.createElement(x,{className:"overview-panel-big-padded overview-measures-aside text-right overview-measures-emphasis",measures:l,type:a}))))))))}}const W={fetchBranchStatus:g.c};t.default=Object(o.b)((e,{branchLike:t,component:a})=>{const{conditions:n,ignoredConditions:s,status:i}=Object(E.getBranchStatusByBranchLike)(e,a.key,t);return{conditions:n,ignoredConditions:s,status:i}},W)(L)},699:function(e,t,a){var n=a(353),s=a(416),i=a(329),l=a(371),r=a(347),c=a(670),o=l((function(e,t){var a=c(t);return r(a)&&(a=void 0),r(e)?n(e,s(t,1,r,!0),i(a,2)):[]}));e.exports=o}}]);
//# sourceMappingURL=357.m.23dac2b6.chunk.js.map