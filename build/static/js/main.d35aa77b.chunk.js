(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),s=a(4),o=a(3),l=a(0),i=a.n(l),c=a(6),u=a.n(c),p=(a(12),a(13),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleUserGuess=function(){e.props.userGuess(e.props.letter,e.props.index),e.setState({disables:!0})},e.state={disabled:!1},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"hangmanButtonDiv",align:"center"},i.a.createElement("button",{className:"hangmanButton",onClick:this.handleUserGuess,disabled:this.state.disabled},this.props.letter))}}]),a}(i.a.Component)),m=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).handlePlayerWon=function(){r.state.letters.includes("_ ")||r.props.playerWon()},r.userGuess=function(e,t){if(r.props.word.includes(e)){var a=0;r.setState({letters:r.state.letters.map((function(t){var n=r.props.word[a]===e?r.props.word[a]:"_ "===r.state.letters[a]?"_ ":r.state.letters[a];return a++,n}))}),setTimeout(r.handlePlayerWon,300)}else r.props.wrongAnswer();var n=-1;r.setState({buttons:r.state.buttons.map((function(e){return++n===t?null:e}))})};for(var s=[],o=0;o<26;o++){var l=i.a.createElement("td",null,i.a.createElement(p,{key:"a _"+o,letter:String.fromCharCode(97+o),userGuess:r.userGuess,index:o}));s.push(l)}return r.state={letters:r.props.word.split("").map((function(e){return"_ "})),buttons:s},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"hangmanWordH1"},this.state.letters," "),i.a.createElement("table",null,i.a.createElement("tr",null,this.state.buttons)))}}]),a}(i.a.Component),d=(a(14),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).restartGame=function(){window.location.reload(!1)},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{align:"center"},i.a.createElement("table",null,i.a.createElement("th",{align:"center"},i.a.createElement("h1",null,this.props.gameState)),i.a.createElement("tbody",null,i.a.createElement("button",{onClick:this.restartGame}," Play Again! ")),i.a.createElement("tfoot",null)))}}]),a}(i.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).setPlayerWon=function(){r.setState({playerWon:!0})},r.playerWrongGuess=function(){r.state.lives>1?r.setState({lives:r.state.lives-1}):r.setState({playerLost:!0})},r.state={lives:6,playerWon:!1,playerLost:!1,index:Math.floor(24*Math.random())},r}return Object(r.a)(a,[{key:"render",value:function(){var e=["pokemon","squirtle","rattata","torchic","mudkip","treeko","sudoowudoo","ditto","fire","water","psychic","ghost","grass","bug","dragon","ice","dark","fairy","normal","fighting","ground","rock","steel","flying"][this.state.index],t=i.a.createElement(m,{key:"hangmanWord",word:e,playerWon:this.setPlayerWon,wrongAnswer:this.playerWrongGuess}),a=i.a.createElement(d,{gameState:"You won!!!!"}),n=i.a.createElement(d,{gameState:"You Lost :("});return i.a.createElement("div",null,this.state.playerLost||this.state.playerWon?this.state.playerWon?a:n:t)}}]),a}(i.a.Component),f=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{align:"center",style:{marginTop:50}},i.a.createElement(h,{key:"hangmanHolder"}))}}]),a}(i.a.Component);u.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d35aa77b.chunk.js.map