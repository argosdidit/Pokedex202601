const PokeProject = (() => {
  'use strict';
  let
  //ページのターゲットNo
  pokeTargetAUTONUM,

  //最小/最大のNo取得
  pokeMinAUTONUM,
  pokeMaxAUTONUM,

  //データ関連
  pokeNO,
  pokeAUTONUM,

  //Jap
  pokeNAMAE,
  pokeSUGATA,
  pokeBUNRUI,
  pokeTAIPU1,
  pokeTAIPU2,
  pokeUnionTAIPU,
  pokeTOKUSEI1,
  pokeTOKUSEI2,
  pokeYUMETOKUSEI,
  pokeTAMAGO_GROUP1,
  pokeTAMAGO_GROUP2,
  pokeCHIHO,
  pokeSEDAI,

  //Eng
  pokeNAME,
  pokeFORM,
  pokeCLASSIFICATION,
  pokeTYPE1,
  pokeTYPE2,
  pokeUnionTYPE,
  pokeABILITY1,
  pokeABILITY2,
  pokeHIDDENABILITY,
  pokeEGG_GROUP1,
  pokeEGG_GROUP2,
  pokeREGION,
  pokeGENERATION,

  //共通
  pokeGENDER,
  pokeHP,
  pokeATTACK,
  pokeDEFENSE,
  pokeSP_ATK,
  pokeSP_DEF,
  pokeSPEED,
  pokeSUM,
  //pokePathNormal,
  //pokePathShiny,
  pokeDisplayImage,

  //HTML関連(位置判定)
  areaPageTitle,
  areaPokeImage,
  areaPokeTitle,
  areaPokeType,
  areaPokeInfo,
  areaControlButtons,
  areaDisplayPokeList,

  //HTML関連(挿入)
  htmlPageTitle,
  htmlPokeImage,
  htmlPokeTitle,
  htmlPokeType,
  htmlPokeInfo,
  htmlControlButtons,

  //js上で必要となり得る要素
  func,
  flag,

  //画像の切り替え
  whichImage,
  imageNormal,
  imageShiny,

  active,
  areaSidebar,
  htmlSidebar;

  imageNormal = 'NORMAL'
  imageShiny = 'SHINY'

  const conf ={
    fieldPageTitle: `field-page-title`,
    area_sidebar: `area-sidebar`,
    fieldPokeImage: `field-selected-poke-image`,
    fieldPokeTitle: `field-selected-poke-title`,
    fieldPokeType: `field-selected-poke-type`,
    fieldPokeInfo: `field-selected-poke-info`,
    fieldControlButtons: `field-control-buttons`,
    fieldDisplayPokeList: `field-display-poke-list`,
    fieldSearchButton: `field-search-button`,
  };
  func = {
    init: function(){
      flag = true;
      areaSidebar = document.querySelector(`[${conf.area_sidebar}]`);
      active = true;
      pokeTargetAUTONUM = 1;
      whichImage = imageNormal;

      //URLに番号があれば(検索画面から呼び出された場合)
      const params = new URLSearchParams(window.location.search);
      const getAUTONUM = params.get("AUTONUM");

      if(getAUTONUM !== null)
        pokeTargetAUTONUM = Number(getAUTONUM);

      return this;
    },
    makeFieldPageTitle: function(){
      if(flag){
        areaPageTitle = document.querySelector(`[${conf.fieldPageTitle}]`);
        htmlPageTitle =
        `<h1>～ Pokédex ～</h1>`;

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
    makeFieldControlButtons(){
      if(flag){
        areaControlButtons = document.querySelector(`[${conf.fieldControlButtons}]`);
        htmlControlButtons =
        `
        <br>
        <button id="BtnPrevPoke">⇐</button>
        <button id="BtnSwitchImage">通常/色違い</button>
        <button id="BtnNextPoke">⇒</button>
        `;
        areaControlButtons.insertAdjacentHTML('beforeend', htmlControlButtons);

        //current-1の個体にリンク
        let BtnPrevPoke = document.getElementById('BtnPrevPoke');
        if(BtnPrevPoke)
          BtnPrevPoke.addEventListener('click', func.prevPoke);

        //current+1の個体にリンク
        let BtnNextPoke = document.getElementById('BtnNextPoke');
        if(BtnNextPoke)
          BtnNextPoke.addEventListener('click', func.nextPoke);

        //画像を通常⇔色違いに反転
        let BtnSwitchImage = document.getElementById('BtnSwitchImage');
        if(BtnSwitchImage)
          BtnSwitchImage.addEventListener('click', func.switchImage);
      }
      return this;
    },
    getMinAUTONUM: async function(){
      if(flag){
        try{
          const res = await fetch("http://127.0.0.1:3001/api/poke/minNo");
          const data = await res.json();
          pokeMinAUTONUM = Number(data.min);
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }

      }
      return this;
    },
    getMaxAUTONUM: async function(){
      if(flag){
        try{
          const res = await fetch("http://127.0.0.1:3001/api/poke/maxNo");
          const data = await res.json();
          pokeMaxAUTONUM = Number(data.max);
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      return this;
    },
    //getPokeData: async function
    getPokeData: async function(getAUTONUM){
      if(flag){
        if(getAUTONUM !== undefined)
          pokeTargetAUTONUM = getAUTONUM
        
        try
        {
          const res = await fetch(`http://127.0.0.1:3001/api/poke?AUTONUM=${pokeTargetAUTONUM}`);
          const data = await res.json();
          pokeAUTONUM = data.AUTONUM;
          pokeNO = data.NO;
          pokeGENDER = data.GENDER;

          //JAP
          pokeNAMAE = data.NAMAE;
          pokeSUGATA = data.SUGATA;
          pokeBUNRUI = data.BUNRUI;
          pokeTAIPU1 = data.TAIPU1;
          pokeTAIPU2 = data.TAIPU2;
          pokeTOKUSEI1 = data.TOKUSEI1;
          pokeTOKUSEI2 = data.TOKUSEI2;
          pokeYUMETOKUSEI = data.YUME_TOKUSEI;
          pokeTAMAGO_GROUP1 = data.TAMAGO_GROUP1;
          pokeTAMAGO_GROUP2 = data.TAMAGO_GROUP2;

          //ENG
          pokeNAME = data.NAME;
          pokeFORM = data.FORM;
          pokeCLASSIFICATION = data.CLASSIFICATION;
          pokeTYPE1 = data.TYPE1;
          pokeTYPE2 = data.TYPE2;
          pokeABILITY1 = data.ABILIY1;
          pokeABILITY2 = data.ABILITY2;
          pokeHIDDENABILITY = data.HIDDEN_ABILITY;
          pokeEGG_GROUP1 = data.EGG_GROUP1;
          pokeEGG_GROUP2 = data.EGG_GROUP2;
          pokeREGION = data.REGION;
          pokeGENERATION = data.GENERATION;

          pokeHP = data.HP;
          pokeATTACK = data.ATTACK;
          pokeDEFENSE = data.DEFENSE;
          pokeSP_ATK = data.SP_ATK;
          pokeSP_DEF = data.SP_DEF;
          pokeSPEED = data.SPEED;
          pokeSUM = data.SUM;
          pokeCHIHO = data.CHIHO;
          pokeSEDAI = data.SEDAI;
          
          if(whichImage === imageNormal)
          {
            pokeDisplayImage = data.PATH_NORMAL_FRONT;
          }
          else if(whichImage === imageShiny)
          {
            pokeDisplayImage = data.PATH_SHINY_FRONT;
          }
          else
          {
            pokeDisplayImage = data.PATH_NORMAL_FRONT;
          }
          
          //タイプの調整
          if(pokeTAIPU2 === null)
          {
            pokeUnionTAIPU = pokeTAIPU1;
          }
          else
          {
            pokeUnionTAIPU = pokeTAIPU1 + "/" + pokeTAIPU2;
          }
          
          //画像の判断
          func
            .initFieldPokeData()
            .makeFieldPokeImage()
            .makeFieldPokeInfo()
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
        let newURL = `NewPokedex.html?AUTONUM=${pokeAUTONUM}`;
        //window.location.href = newURL;
        history.replaceState(null, "", newURL);
      }
      return this;
    },
    initFieldPokeData(){
      if(flag){
        areaPokeImage = document.querySelector(`[${conf.fieldPokeImage}]`);
        areaPokeTitle = document.querySelector(`[${conf.fieldPokeTitle}]`);
        areaPokeType = document.querySelector(`[${conf.fieldPokeType}]`);
        areaPokeInfo = document.querySelector(`[${conf.fieldPokeInfo}]`);

        areaPokeImage.innerHTML = '';
        areaPokeTitle.innerHTML = '';
        areaPokeType.innerHTML = '';
        areaPokeInfo.innerHTML = '';

      }
      return this;
    },
    makeFieldPokeImage(){
      if(flag){
        areaPokeImage = document.querySelector(`[${conf.fieldPokeImage}]`);
        htmlPokeImage =
        `<img id="pokeImage" src="${pokeDisplayImage}" tag="${pokeAUTONUM}">`;

        areaPokeImage.insertAdjacentHTML('beforeend', htmlPokeImage);
      }
      return this;
    },
    makeFieldPokeInfo(){
      if(flag){
        
        //SUGATA, TAIPU2, TOKUSEI2, YUMETOKUSEI, TAMAGOGROUP2判定
        if(pokeSUGATA === null)
          pokeSUGATA = "なし";

        if(pokeTAIPU2 === null)
        {
          pokeTAIPU2 = "なし";
          pokeTYPE2 = "None";
        }
        
        if(pokeTOKUSEI2 === null)
          pokeTOKUSEI2 = "なし";

        if(pokeYUMETOKUSEI === null)
          pokeYUMETOKUSEI = "なし";

        if(pokeTAMAGO_GROUP2 === null)
          pokeTAMAGO_GROUP2 = "なし";

        //タイプ画像判定
        let ImagePathType1;
        ImagePathType1 = func.judgeTypeImage(pokeTYPE1);

        let ImagePathType2;
        ImagePathType2 = func.judgeTypeImage(pokeTYPE2);


        areaPokeInfo = document.querySelector(`[${conf.fieldPokeInfo}]`);
        htmlPokeInfo =
        `
        <table border="1">
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
        <td>No: ${pokeNO}</td>
        <td colspan="2">分類: ${pokeBUNRUI}</td>
        <td colspan="2">名前: ${pokeNAMAE}</td>
        <td colspan="5">フォルム: ${pokeSUGATA}</td>
        </tr>
        <tr>
        <td colspan="2">タイプ1: ${pokeTAIPU1} <img src="${ImagePathType1}" heigth="15%" width="15%"></td>
        ${
        ImagePathType2 ?
        `<td colspan="2">タイプ2: ${pokeTAIPU2} <img src="${ImagePathType2}" heigth="15%" width="15%"></td>`
        :
        `<td colspan="2">タイプ2: ${pokeTAIPU2}`
        }
        <td colspan="2">特性1: ${pokeTOKUSEI1}</td>
        <td colspan="2">特性2: ${pokeTOKUSEI2}</td>
        <td colspan="2">隠れ特性(夢):<br>${pokeYUMETOKUSEI}</td>
        </tr>
        <tr>
        <td colspan="2">性別: ${pokeGENDER}</td>
        <td colspan="2">タマゴグループ1: ${pokeTAMAGO_GROUP1}</td>
        <td colspan="2">タマゴグループ2: ${pokeTAMAGO_GROUP2}</td>
        <td colspan="2">地方: ${pokeCHIHO}</td>
        <td colspan="2">世代: ${pokeSEDAI}</td>
        </tr>
        <tr>
        <td>HP<br>${pokeHP}</td>
        <td>攻撃<br>${pokeATTACK}</td>
        <td>防御<br>${pokeDEFENSE}</td>
        <td>特攻<br>${pokeSP_ATK}</td>
        <td>特攻<br>${pokeSP_DEF}</td>
        <td>スピード<br>${pokeSPEED}</td>
        <td colspan="4">合計<br>${pokeSUM}</td>
        </tr>
        </table>
        `;

        areaPokeInfo.insertAdjacentHTML('beforeend', htmlPokeInfo);
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
    //ボタンの挙動メソッド
    prevPoke(){
      if(flag){

        //現在のNoを取得
        let elementAUTONUM = document.getElementById('pokeImage');
        let currentAUTONUM = Number(elementAUTONUM.getAttribute('tag'));
        let prevTargetAUTONUM = currentAUTONUM - 1;
        localStorage.setItem('pokeMaxNo', pokeMaxAUTONUM);

        if(prevTargetAUTONUM >= pokeMinAUTONUM)
        {
          //現No-1した個体を参照
          func.getPokeData(prevTargetAUTONUM);
        }
        else
        {
          //最大Noの個体を参照
          func.getPokeData(pokeMaxAUTONUM);
        }
      }
      return this;
    },
    nextPoke(){
      if(flag){
        let elementAUTONUM = document.getElementById('pokeImage');
        let currentAUTONUM = Number(elementAUTONUM.getAttribute('tag'));
        let nextTargetAUTONUM = currentAUTONUM + 1;
        localStorage.setItem('pokeMinNo', pokeMinAUTONUM);

        if(nextTargetAUTONUM <= pokeMaxAUTONUM)
        {
          //現No+1した個体を参照
          func.getPokeData(nextTargetAUTONUM);
        }
        else
        {
          //最小Noの個体を参照
          func.getPokeData(pokeMinAUTONUM);
        }

      }
      return this;
    },
    switchImage(){
      if(flag){

        if(whichImage === imageNormal)
        {
          whichImage = imageShiny;
        }
        else if(whichImage === imageShiny)
        {
          whichImage = imageNormal;
        }
        else
        {
          whichImage = imageNormal;
        }
        
        let elementAUTONUM = document.getElementById('pokeImage');
        let currentAUTONUM = Number(elementAUTONUM.getAttribute('tag'));
        //currentNo = Number(document.getElementById('pokeNo').getAttribute('tag'));でも同様の結果取得可能
        func.getPokeData(currentAUTONUM);
        func.makeFieldDisplayPokeList();

      }
      return this;
    },
    makeFieldDisplayPokeList: async function(){
      if(flag){
        try{
          const response = await fetch('http://127.0.0.1:3001/api/pokelist');
          const data = await response.json();

          areaDisplayPokeList = document.querySelector(`[${conf.fieldDisplayPokeList}]`);
          areaDisplayPokeList.innerHTML = '';

          data.forEach(pokemon => {
            const img = document.createElement('img');
            if(whichImage === imageNormal)
            {
              img.src = pokemon.PATH_NORMAL_FRONT;
            }
            else if(whichImage === imageShiny)
            {
              img.src = pokemon.PATH_SHINY_FRONT;
            }
            else
            {
              img.src = pokemon.PATH_NORMAL_FRONT;
            }
            img.alt = `Pokemon ${pokemon.AUTONUM}`;
            img.dataset.AUTONUM = pokemon.AUTONUM;
            img.classList.add('poke-image');

            img.addEventListener('click', () => {
              func.getPokeData(pokemon.AUTONUM);
            });

            areaDisplayPokeList.appendChild(img);
          })

        }
        catch (error) {
          console.error('ポケモンリストの獲得に失敗しました。', error);
        }
      }
      return this;
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
      .makeFieldControlButtons();

      await func.getMinAUTONUM();
      await func.getMaxAUTONUM();
      console.log(pokeMinAUTONUM, pokeMaxAUTONUM);
      await func.getPokeData();
      await func.makeFieldDisplayPokeList();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeProject();
});