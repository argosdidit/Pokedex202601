const MoveProject = (() => {
  'use strict';

  let
  //ページのターゲットNo
  selectedType,
  moveTargetAUTONUM,
  
  //データ関連
  //moveNO,
  //moveAUTONUM,

  //Jap
  //moveWAZA,
  //moveSETSUMEI,
  //moveTAIPU,
  //moveBUNRUI,
  //moveSEDAI,

  //ENG
  //moveMove,
  //moveEXPLANATION,
  //moveTYPE,
  //moveCATEGORY,
  //moveGENERATION,

  //共通
  //movePP,
  //movePOWER,
  //moveACCURACY,

  //HTML関連(位置判定)
  areaPageTitle,
  areaTypeList,
  areaMoveList,

  //HTML関連(挿入)
  htmlPageTitle,
  htmlTypeList,
  htmlMoveList,

  //js上で必要となり得る要素
  func,
  flag,
  active,
  areaSidebar,
  htmlSidebar;

  //配列方としてmoveList
  let moveList = [];
  
  //imageNormal = 'NORMAL';
  //imageShiny = 'SHINY';

  const conf ={
    fieldPageTitle: `field-page-title`,
    area_sidebar: `area-sidebar`,
    fieldTypesList: `field-types-list`,
    fieldMovesList: `field-moves-list`,
  };
  func = {
    init: function(){
      flag = true;
      areaSidebar = document.querySelector(`[${conf.area_sidebar}]`);
      active = true;
      moveTargetAUTONUM = 1;

      //URLに番号があれば(検索画面から呼び出された場合)
      const params = new URLSearchParams(window.location.search);
      const getAUTONUM = params.get("move_autonum");

      if(getAUTONUM !== null)
        moveTargetAUTONUM = Number(getAUTONUM);

      return this;
    },
    makeFieldPageTitle: function(){
      if(flag){
        areaPageTitle = document.querySelector(`[${conf.fieldPageTitle}]`);
        htmlPageTitle =
        `<h1>～ Movedex ～</h1>`;

        areaPageTitle.insertAdjacentHTML('beforeend', htmlPageTitle);

      }
      return this;
    },
    makeSidebarArea: function () {
      htmlSidebar = `
        <nav class="sidebar" id="sidebar">
          <button class="sidebar-close-btn" id="sidebar-close">☰</button>
          <ul>
            <li data-menu="1"><a href="SearchTypeDex.html">タイプ</a></li>
            <li data-menu="2"><a href="SearchAbilityDex.html">特性</a></li>
            <li data-menu="3"><a href="SearchGenderDex.html">性別</a></li>
            <li data-menu="4"><a href="SearchEggGroupDex.html">タマゴグループ</a></li>
            <li data-menu="5"><a href="SearchValueDex.html">種族値</a></li>
            <li data-menu="6"><a href="SearchFormDex.html">姿違い</a></li>
          </ul>
        </nav>
      `;
      areaSidebar.insertAdjacentHTML('beforeend', htmlSidebar);
      return this;
    },
    /* サイドバー開閉 */
    bindMenuButton: function () {
      const btn = document.getElementById("menu-btn");
      const sidebar = document.getElementById("sidebar");
      const main = document.getElementById("main-content");

      btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        main.classList.toggle("shift");
      });

      return this;
    },

    /* サイドバー内の閉じるボタン */
    bindSidebarCloseButton: function () {
      const closeBtn = document.getElementById("sidebar-close");
      const sidebar = document.getElementById("sidebar");
      const main = document.getElementById("main-content");

      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
        main.classList.remove("shift");
      });

      return this;
    },
    /* メニュークリックで閉じる */
    bindSidebarEvents: function () {
      const items = document.querySelectorAll('.sidebar li');
      const dynamic = document.getElementById('dynamic-content');
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('main-content');

      items.forEach(item => {
        item.addEventListener('click', () => {
          const num = item.dataset.menu;
          dynamic.innerHTML = `<p>Menu ${num} が選択されました。</p>`;
          sidebar.classList.remove("active");
          main.classList.remove("shift");
        });
      });

      return this;
    },
    initFieldType(){
      if(flag){
        areaTypeList = document.querySelector(`[${conf.fieldTypesList}]`);

        areaTypeList.innerHTML = '';
      }
      return this;
    },
    makeFieldTypeInfo: function(){
      if(flag){
        
        areaTypeList = document.querySelector(`[${conf.fieldTypesList}]`);

        htmlTypeList =
        `
        <br><br>
        <div class="tableType">
        <button class="type" value="01"><img width="50px" hight="50px" src="type/01.png"></button>
        <button class="type" value="02"><img width="50px" hight="50px" src="type/02.png"></button>
        <button class="type" value="03"><img width="50px" hight="50px" src="type/03.png"></button>
        <button class="type" value="04"><img width="50px" hight="50px" src="type/04.png"></button>
        <button class="type" value="05"><img width="50px" hight="50px" src="type/05.png"></button>
        <button class="type" value="06"><img width="50px" hight="50px" src="type/06.png"></button>
        <button class="type" value="07"><img width="50px" hight="50px" src="type/07.png"></button>
        <button class="type" value="08"><img width="50px" hight="50px" src="type/08.png"></button>
        <button class="type" value="09"><img width="50px" hight="50px" src="type/09.png"></button>
        <br>
        <button class="type" value="10"><img width="50px" hight="50px" src="type/10.png"></button>
        <button class="type" value="11"><img width="50px" hight="50px" src="type/11.png"></button>
        <button class="type" value="12"><img width="50px" hight="50px" src="type/12.png"></button>
        <button class="type" value="13"><img width="50px" hight="50px" src="type/13.png"></button>
        <button class="type" value="14"><img width="50px" hight="50px" src="type/14.png"></button>
        <button class="type" value="15"><img width="50px" hight="50px" src="type/15.png"></button>
        <button class="type" value="16"><img width="50px" hight="50px" src="type/16.png"></button>
        <button class="type" value="17"><img width="50px" hight="50px" src="type/17.png"></button>
        <button class="type" value="18"><img width="50px" hight="50px" src="type/18.png"></button>
        </div>
        <br><br>
        `;
        areaTypeList.insertAdjacentHTML("beforeend", htmlTypeList);
      }
      let buttons = document.querySelectorAll('.type');
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            let valueType = button.value;
            this.getMoveData(valueType);
          });
        });
      return this;
    },
    //getMoveData: async function
    getMoveData: async function(valueType){
      if(flag){

        if(valueType === undefined)
        {
          selectedType = 1;
        }
        else
        {
          selectedType = valueType;
        }

        //if(getAUTONUM !== undefined)
          //moveTargetAUTONUM = getAUTONUM
        
        try
        {
          //const res = await fetch(`http://127.0.0.1:3001/api/move?typeid=${selectedType}`);
          const res = await fetch(`/api/move?typeid=${selectedType}`);
          moveList = await res.json();
          
          //画像の判断
          func
            .initFieldMove()
            .makeFieldMoveInfo()
          }
        catch (error){
          console.error('Error fetching data:', error);
        }
        func.updateURL();
      }
      return this;
    },
    updateURL: async function(){
      if(flag){
        
        let newURL = `NewMovedex.html?type=${selectedType}`;
        //window.location.href = newURL;
        history.replaceState(null, "", newURL);
      }
      return this;
    },
    initFieldMove(){
      if(flag){
        areaMoveList = document.querySelector(`[${conf.fieldMovesList}]`);

        areaMoveList.innerHTML = '';
      }
      return this;
    },
    makeFieldMoveInfo: async function(){
      if(flag){
        let ImageTypePath;
        let ImagePokeList;
        
        areaMoveList = document.querySelector(`[${conf.fieldMovesList}]`);
        areaMoveList.innerHTML = "";

        
        for (const move of moveList) {
          ImageTypePath = func.judgeTypeImage(move.type);
          // ★ Promise を await する
          ImagePokeList = await func.getImagePokeList(move.autonum);
          
          htmlMoveList =
          `
          <table border="1" class="tableMove" value="${move.autonum}">
          <colgroup>
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          <col span="1" style="width: 10%">
          </colgroup>
          <tr>
          <td colspan="2">No: ${move.autonum}</td>
          <td colspan="2">タイプ: ${move.taipu}<br><img width=30px height=30px src="${ImageTypePath}"></td>
          <td colspan="6">わざ名: ${move.waza}</td>
          </tr>
          <tr>
          <td colspan="2">PP: ${move.pp}</td>
          <td colspan="2">威力: ${move.power}</td>
          <td colspan="2">命中率: ${move.accuracy}</td>
          <td colspan="2">分類: ${move.bunrui}</td>
          <td colspan="2">世代: ${move.sedai}</td>
          </tr>
          <tr>
          <td colspan="10">説明: ${move.setsumei}</td>
          </tr>
          <tr>
          <td colspan="10"> <覚えるポケモン> </td>
          </tr>
          <tr>
          <td colspan="10">${ImagePokeList}</td>
          </tr>
          </table>
          <br><br>
          `;
          areaMoveList.insertAdjacentHTML("beforeend", htmlMoveList);
        }
      }
      return this;
    },
    judgeTypeImage: function(getTYPE){
      if(flag){
        let targetTYPE = getTYPE;
        let targetTypePath = null;

        switch(targetTYPE){
          case 'NORMAL':
            targetTypePath = 'type/01.png';
            break;
          case 'FIRE':
            targetTypePath = 'type/02.png';
            break;
          case 'WATER':
            targetTypePath = 'type/03.png';
            break;
          case 'GRASS':
            targetTypePath = 'type/04.png';
            break;
          case 'ELECTRIC':
            targetTypePath = 'type/05.png';
            break;
          case 'ICE':
            targetTypePath = 'type/06.png';
            break;
          case 'FIGHT':
            targetTypePath = 'type/07.png';
            break;
          case 'POISON':
            targetTypePath = 'type/08.png';
            break;
          case 'GROUND':
            targetTypePath = 'type/09.png';
            break;
          case 'FLYING':
            targetTypePath = 'type/10.png';
            break;
          case 'PSYCHIC':
            targetTypePath = 'type/11.png';
            break;
          case 'BUG':
            targetTypePath = 'type/12.png';
            break;
          case 'ROCK':
            targetTypePath = 'type/13.png';
            break;
          case 'GHOST':
            targetTypePath = 'type/14.png';
            break;
          case 'DRAGON':
            targetTypePath = 'type/15.png';
            break;
          case 'DARK':
            targetTypePath = 'type/16.png';
            break;
          case 'STEEL':
            targetTypePath = 'type/17.png';
            break;
          case 'FAIRY':
            targetTypePath = 'type/18.png';
            break;
          case 'None':
            targetTypePath = null;
            break;
          default:
            break;
          
        }
        return targetTypePath;
      }
      return this;
    },
    getImagePokeList: async function(moveAutonum){
      try {
        //const res = await fetch(`http://localhost:3001/api/relation/move?move_autonum=${moveAutonum}`);
        const res = await fetch(`/api/relation/move?move_autonum=${moveAutonum}`);
        if (!res.ok)
          return "";

        const relationList = await res.json();

        if (!Array.isArray(relationList))
          return "";
        
        const htmlList = [];
        for (const rel of relationList) {
          //const pokeRes = await fetch(`http://localhost:3001/api/poke/each/image?poke_autonum=${rel.POKE_AUTONUM}`);
          const pokeRes = await fetch(`/api/poke/each/image?poke_autonum=${rel.poke_autonum}`);
          if (!pokeRes.ok) continue;
          const pokeData = await pokeRes.json();
          const html =
          `
          <button class=imagePoke>
          <a href="NewPokedex.html?AUTONUM=${pokeData.autonum}">
          <img width="70px" height="70px" src="${pokeData.path_normal_front}">
          </a>
          </button>
          `;
          htmlList.push(html);
        }
        return htmlList.join("");
      }
      catch (error) {
        console.error("画像リスト取得失敗", error);
        return "";
      }
    }
  };
  active = async () => {
    func
      .init()
      .makeFieldPageTitle()
      .makeSidebarArea()
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initFieldType()
      .makeFieldTypeInfo();
      await func.getMoveData();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  MoveProject();
});