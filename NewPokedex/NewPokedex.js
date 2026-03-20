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
  pokeNormalPath,
  pokeShinyPath,
  pokeBrightTypePath,
  pokeDarkTypePath,
  pokeDisplayTypePath,
  pokeDisplayImage,

  //HTML関連(位置判定)
  areaPageStyle,
  areaPageTitle,
  areaSettingCommands,
  areaDecisionButton,
  areaPokeImage,
  areaPokeTitle,
  areaPokeType,
  areaPokeInfo,
  areaControlButtons,
  areaDisplayPokeList,

  //HTML関連(挿入)
  htmlPageStyle,
  htmlPageTitle,
  htmlSettingCommands,
  htmlDecisionButton,
  htmlPokeImage,
  htmlPokeInfo,
  htmlControlButtons,

  //js上で必要となり得る要素
  func,
  flag,

  active,
  areaSidebar,
  htmlSidebar,
  
  jap_or_eng,
  bright_or_dark,
  normal_or_shiny,
  ascending_or_descending;

  const conf ={
    fieldPageStyle: `field-page-style`,
    fieldPageTitle: `field-page-title`,
    fieldSettingCommands: `field-setting-commands`,
    fieldDecisionButton: `field-decision-button`,
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
      if(localStorage.getItem("poke_autonum") !== null)
        pokeTargetAUTONUM = Number(localStorage.getItem("poke_autonum"));

      //URLに番号があれば(検索画面から呼び出された場合)
      const params = new URLSearchParams(window.location.search);
      const getAUTONUM = params.get("poke_autonum");

      if(getAUTONUM !== null)
        pokeTargetAUTONUM = Number(getAUTONUM);

      jap_or_eng = localStorage.getItem("selectedLanguage") || 'JAP';
      bright_or_dark = localStorage.getItem("selectedWindow") || 'BRIGHT';
      normal_or_shiny = localStorage.getItem("selectedImage") || 'NORMAL';
      ascending_or_descending = localStorage.getItem("selectedOrder") || 'ASCENDING';

      return this;
    },
    makeSettingCommands: function(){
      if(flag){
        areaSettingCommands = document.querySelector(`[${conf.fieldSettingCommands}]`);
        htmlSettingCommands =
        `
        <div class="setting-buttons">
        <div class="toggle-button">
        <input type="checkbox" id="BtnLanguage" class="toggle-input">
        <label for="BtnLanguage" class="toggle-label" id="LblLanguage">日本語</label>
        </div>
        <div class="toggle-button">
        <input type="checkbox" id="BtnWindow" class="toggle-input">
        <label for="BtnWindow" class="toggle-label" id="LblWindow">ブライト</label>
        </div>
        <div class="toggle-button">
        <input type="checkbox" id="BtnImage" class="toggle-input">
        <label for="BtnImage" class="toggle-label" id="LblImage">通常</label>
        </div>
        <div class="toggle-button">
        <input type="checkbox" id="BtnOrder" class="toggle-input">
        <label for="BtnOrder" class="toggle-label" id="LblOrder">1 => 9</label>
        </div>
        </div>
        `;

        areaSettingCommands.insertAdjacentHTML('beforeend', htmlSettingCommands);

        const selectedBtnLanguage = document.getElementById('BtnLanguage');
        const selectedBtnWindow = document.getElementById('BtnWindow');
        const selectedBtnImage = document.getElementById('BtnImage');
        const selectedBtnOrder = document.getElementById('BtnOrder');

        // ★ localStorage から読んだ状態をチェックに反映
        selectedBtnLanguage.checked = (jap_or_eng === 'ENG');
        selectedBtnWindow.checked   = (bright_or_dark === 'DARK');
        selectedBtnImage.checked    = (normal_or_shiny === 'SHINY');
        selectedBtnOrder.checked    = (ascending_or_descending === 'DESCENDING');
        
        // ★ ラベルも一度現在状態で更新
        func.updateLabels();
        selectedBtnLanguage.addEventListener('click', func.updateLabels);
        selectedBtnWindow.addEventListener('click', func.updateLabels);
        selectedBtnImage.addEventListener('click', func.updateLabels);
        selectedBtnOrder.addEventListener('click', func.updateLabels);
      }
      return this;
    },
    makeDecisionButton: function(){
      if(flag){
        areaDecisionButton = document.querySelector(`[${conf.fieldDecisionButton}]`);
        htmlDecisionButton =
        `
        <div class="reload-button">
        <button id="BtnReload">
        <a id="decisionButton" href="NewPokedex.html">
        <img src="../image/roll.jpeg" height="30px" width="30px">
        </a>
        </button>
        </div>
        `;
        areaDecisionButton.insertAdjacentHTML('beforeend', htmlDecisionButton);

        const btnReload = document.getElementById('decisionButton');
        btnReload.addEventListener('click', func.updateURL);
      }
      return this;
    },
    updateLabels: function() {
      const btnLanguage = document.getElementById('BtnLanguage');
      const btnWindow = document.getElementById('BtnWindow');
      const btnImage = document.getElementById('BtnImage');
      const btnOrder = document.getElementById('BtnOrder');
      
      const lblLanguage = btnLanguage.nextElementSibling;
      const lblWindow = btnWindow.nextElementSibling;
      const lblImage = btnImage.nextElementSibling;
      const lblOrder = btnOrder.nextElementSibling;
      
      // まず状態を更新
      jap_or_eng = btnLanguage.checked ? 'ENG' : 'JAP';
      bright_or_dark = btnWindow.checked ? 'DARK' : 'BRIGHT';
      normal_or_shiny = btnImage.checked ? 'SHINY' : 'NORMAL';
      ascending_or_descending = btnOrder.checked ? 'DESCENDING' : 'ASCENDING';

      // 言語
      lblLanguage.textContent = (jap_or_eng === 'JAP') ? '日本語' : 'English';
      
      // ウィンドウ(明るさ)
      if (jap_or_eng === 'JAP') {
        lblWindow.textContent = (bright_or_dark === 'BRIGHT') ? 'ブライト' : 'ダーク';
      } else {
        lblWindow.textContent = (bright_or_dark === 'BRIGHT') ? 'Bright' : 'Dark';
      }
      
      // 画像(通常/色違い)
      if (jap_or_eng === 'JAP') {
        lblImage.textContent = (normal_or_shiny === 'NORMAL') ? '通常' : '色違い';
      } else {
        lblImage.textContent = (normal_or_shiny === 'NORMAL') ? 'Normal' : 'Shiny';
      }

      // 順番(昇順/順序)
      if (jap_or_eng === 'JAP') {
        lblOrder.textContent = (ascending_or_descending === 'ASCENDING') ? '1 => 9' : '9 => 1';
      } else {
        lblOrder.textContent = (ascending_or_descending === 'ASCENDING') ? '1 => 9' : '9 => 1';
      }

      localStorage.setItem('selectedLanguage', jap_or_eng);
      localStorage.setItem('selectedWindow', bright_or_dark);
      localStorage.setItem('selectedImage', normal_or_shiny);
      localStorage.setItem('selectedOrder', ascending_or_descending);
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
    makeJapSidebarArea: function () {
      htmlSidebar = `
        <nav class="sidebar" id="sidebar">
          <button class="sidebar-close-btn" id="sidebar-close">☰</button>
          <ul>
            <li data-menu="1"><a href="../SearchTypeDex/SearchTypeDex.html">タイプ</a></li>
            <li data-menu="2"><a href="../SearchAbilityDex/SearchAbilityDex.html">特性</a></li>
            <li data-menu="3"><a href="../SearchGenderDex/SearchGenderDex.html">性別</a></li>
            <li data-menu="4"><a href="../SearchEggGroupDex/SearchEggGroupDex.html">タマゴグループ</a></li>
            <li data-menu="5"><a href="../SearchValueDex/SearchValueDex.html">種族値</a></li>
            <li data-menu="6"><a href="../SearchFormDex/SearchFormDex.html">姿違い</a></li>
          </ul>
        </nav>
      `;
      areaSidebar.insertAdjacentHTML('beforeend', htmlSidebar);
      return this;
    },
    makeEngSidebarArea: function () {
      htmlSidebar = `
        <nav class="sidebar" id="sidebar">
          <button class="sidebar-close-btn" id="sidebar-close">☰</button>
          <ul>
            <li data-menu="1"><a href="../SearchTypeDex/SearchTypeDex.html">Search Type</a></li>
            <li data-menu="2"><a href="../SearchAbilityDex/SearchAbilityDex.html">Search Ability</a></li>
            <li data-menu="3"><a href="../SearchGenderDex/SearchGenderDex.html">Search Gender</a></li>
            <li data-menu="4"><a href="../SearchEggGroupDex/SearchEggGroupDex.html">Search Egg Group</a></li>
            <li data-menu="5"><a href="../SearchValueDex/SearchValueDex.html">Search Value</a></li>
            <li data-menu="6"><a href="../SearchFormDex/SearchFormDex.html">Search Form</a></li>
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
    makeFieldJapControlButtons(){
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
    makeFieldEngControlButtons(){
      if(flag){
        areaControlButtons = document.querySelector(`[${conf.fieldControlButtons}]`);
        htmlControlButtons =
        `
        <br>
        <button id="BtnPrevPoke">⇐</button>
        <button id="BtnSwitchImage">Normal / Shiny</button>
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
    judgeStyles: function(){
      if(flag){
        areaPageStyle = document.querySelector(`[${conf.fieldPageStyle}]`);
        const favicon = document.querySelector('#dynamic-favicon');

        switch(bright_or_dark)
        {
          case 'BRIGHT':
            htmlPageStyle = `<link rel="stylesheet" href="NewPokedexBright.css">`;
            favicon.href = "NewPokedexBright.png";
            break;
          case 'DARK':
            htmlPageStyle = `<link rel="stylesheet" href="NewPokedexDark.css">`;
            favicon.href = "NewPokedexDark.png";
            break;
          default:
            htmlPageStyle = `<link rel="stylesheet" href="NewPokedexBright.css">`;
            favicon.href = "NewPokedexBright.png";
            break;
        }
        areaPageStyle.insertAdjacentHTML('beforeend', htmlPageStyle);
      }
      return this;
    },
    getMinAUTONUM: async function(){
      if(flag){
        try{
          //const res = await fetch("http://127.0.0.1:3001/api/poke/minNo");
          const res = await fetch("/api/poke/minNo");
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
          //const res = await fetch("http://127.0.0.1:3001/api/poke/maxNo");
          const res = await fetch("/api/poke/maxNo");
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
          //const res = await fetch(`http://127.0.0.1:3001/api/poke?autonum=${pokeTargetAUTONUM}`);
          const res = await fetch(`/api/poke?autonum=${pokeTargetAUTONUM}`);
          const data = await res.json();
          pokeAUTONUM = data.autonum;
          pokeNO = data.no;
          pokeGENDER = data.gender;

          //JAP
          pokeNAMAE = data.namae;
          pokeSUGATA = data.sugata;
          pokeBUNRUI = data.bunrui;
          pokeTAIPU1 = data.taipu1;
          pokeTAIPU2 = data.taipu2;
          pokeTOKUSEI1 = data.tokusei1;
          pokeTOKUSEI2 = data.tokusei2;
          pokeYUMETOKUSEI = data.yume_tokusei;
          pokeTAMAGO_GROUP1 = data.tamago_group1;
          pokeTAMAGO_GROUP2 = data.tamago_group2;
          pokeCHIHO = data.chiho;
          pokeSEDAI = data.sedai;

          //ENG
          pokeNAME = data.name;
          pokeFORM = data.form;
          pokeCLASSIFICATION = data.classification;
          pokeTYPE1 = data.type1;
          pokeTYPE2 = data.type2;
          pokeABILITY1 = data.ability1;
          pokeABILITY2 = data.ability2;
          pokeHIDDENABILITY = data.hidden_ability;
          pokeEGG_GROUP1 = data.egg_group1;
          pokeEGG_GROUP2 = data.egg_group2;
          pokeREGION = data.region;
          pokeGENERATION = data.generation;

          pokeHP = data.hp;
          pokeATTACK = data.attack;
          pokeDEFENSE = data.defense;
          pokeSP_ATK = data.sp_atk;
          pokeSP_DEF = data.sp_def;
          pokeSPEED = data.speed;
          pokeSUM = data.sum;
          pokeNormalPath = "../" + data.path_normal_front;
          pokeShinyPath = "../" + data.path_shiny_front;
          pokeBrightTypePath = "../" + data.path_typechart_bright;
          pokeDarkTypePath = "../" + data.path_typechart_dark;
          
          if(normal_or_shiny === 'NORMAL')
          {
            pokeDisplayImage = pokeNormalPath;
          }
          else if(normal_or_shiny === 'SHINY')
          {
            pokeDisplayImage = pokeShinyPath;
          }
          else
          {
            pokeDisplayImage = pokeNormalPath;
          }

          if(bright_or_dark === 'BRIGHT')
          {
            pokeDisplayTypePath = pokeBrightTypePath;
          }
          else if(bright_or_dark === 'DARK')
          {
            pokeDisplayTypePath = pokeDarkTypePath;
          }
          else
          {
            pokeDisplayTypePath = pokeBrightTypePath;
          }

          func
            .initFieldPokeData()
            .makeFieldPokeImage();
            switch(jap_or_eng)
            {
              case 'JAP':
                func.makeFieldJapPokeInfo();
                break;
              case 'ENG':
                func.makeFieldEngPokeInfo();
                break;
              default:
                func.makeFieldJapPokeInfo();
                break;
            }
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
        let newURL = `../NewPokedex/NewPokedex.html?poke_autonum=${pokeAUTONUM}`;
        localStorage.setItem('poke_autonum', pokeTargetAUTONUM);
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
        `<img id="pokeImage" src="${pokeDisplayImage}" dataAutonum="${pokeAUTONUM}" data-image="${normal_or_shiny}">`;

        areaPokeImage.insertAdjacentHTML('beforeend', htmlPokeImage);
      }
      return this;
    },
    makeFieldJapPokeInfo(){
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
        <h3>< ステータス ></h3>
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
        <td colspan="2">タイプ1: ${pokeTAIPU1}<br><img src="${ImagePathType1}" heigth="15%" width="15%"></td>
        ${
        ImagePathType2 ?
        `<td colspan="2">タイプ2: ${pokeTAIPU2}<br><img src="${ImagePathType2}" heigth="15%" width="15%"></td>`
        :
        `<td colspan="2">タイプ2: ${pokeTAIPU2}`
        }
        <td colspan="2">特性1:<br>${pokeTOKUSEI1}</td>
        <td colspan="2">特性2:<br>${pokeTOKUSEI2}</td>
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
        <iframe src="../${pokeDisplayTypePath}"></iframe>
        `;

        areaPokeInfo.insertAdjacentHTML('beforeend', htmlPokeInfo);
      }
      return this;
    },
    makeFieldEngPokeInfo(){
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
        <h3>< Status ></h3>
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
        <td colspan="2">Classification:<br>${pokeCLASSIFICATION}</td>
        <td colspan="2">Name: ${pokeNAME}</td>
        <td colspan="5">Form: ${pokeFORM}</td>
        </tr>
        <tr>
        <td colspan="2">Type1: ${pokeTYPE1}<br><img src="${ImagePathType1}" heigth="15%" width="15%"></td>
        ${
        ImagePathType2 ?
        `<td colspan="2">Type2: ${pokeTYPE2}<br><img src="${ImagePathType2}" heigth="15%" width="15%"></td>`
        :
        `<td colspan="2">Type2: ${pokeTYPE2}`
        }
        <td colspan="2">Ability1:<br>${pokeABILITY1}</td>
        <td colspan="2">Ability2:<br>${pokeABILITY2}</td>
        <td colspan="2">Hidden Ability:<br>${pokeHIDDENABILITY}</td>
        </tr>
        <tr>
        <td colspan="2">Gender: ${pokeGENDER}</td>
        <td colspan="2">Egg Group1:<br>${pokeEGG_GROUP1}</td>
        <td colspan="2">Egg Group2:<br>${pokeEGG_GROUP2}</td>
        <td colspan="2">Region: ${pokeREGION}</td>
        <td colspan="2">Generation: ${pokeGENERATION}</td>
        </tr>
        <tr>
        <td>HP<br>${pokeHP}</td>
        <td>Attack<br>${pokeATTACK}</td>
        <td>Defense<br>${pokeDEFENSE}</td>
        <td>SP.Atk<br>${pokeSP_ATK}</td>
        <td>SP.Def<br>${pokeSP_DEF}</td>
        <td>Speed<br>${pokeSPEED}</td>
        <td colspan="4">Sum<br>${pokeSUM}</td>
        </tr>
        </table>
        <iframe src="${pokeDisplayTypePath}"></iframe>
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
            targetTypePath = '../type/01.png';
            break;
          case 'FIRE':
            targetTypePath = '../type/02.png';
            break;
          case 'WATER':
            targetTypePath = '../type/03.png';
            break;
          case 'GRASS':
            targetTypePath = '../type/04.png';
            break;
          case 'ELECTRIC':
            targetTypePath = '../type/05.png';
            break;
          case 'ICE':
            targetTypePath = '../type/06.png';
            break;
          case 'FIGHT':
            targetTypePath = '../type/07.png';
            break;
          case 'POISON':
            targetTypePath = '../type/08.png';
            break;
          case 'GROUND':
            targetTypePath = '../type/09.png';
            break;
          case 'FLYING':
            targetTypePath = '../type/10.png';
            break;
          case 'PSYCHIC':
            targetTypePath = '../type/11.png';
            break;
          case 'BUG':
            targetTypePath = '../type/12.png';
            break;
          case 'ROCK':
            targetTypePath = '../type/13.png';
            break;
          case 'GHOST':
            targetTypePath = '../type/14.png';
            break;
          case 'DRAGON':
            targetTypePath = '../type/15.png';
            break;
          case 'DARK':
            targetTypePath = '../type/16.png';
            break;
          case 'STEEL':
            targetTypePath = '../type/17.png';
            break;
          case 'FAIRY':
            targetTypePath = '../type/18.png';
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
        let currentAUTONUM = Number(elementAUTONUM.getAttribute('dataAutonum'));
        let prevTargetAUTONUM = currentAUTONUM - 1;
        localStorage.setItem('pokeMaxNo', pokeMaxAUTONUM);

        if(prevTargetAUTONUM >= pokeMinAUTONUM)
        {
          //現No-1した個体を参照
          func.getPokeData(prevTargetAUTONUM);
          func.makeFieldDisplayPokeList();
          func.judgeStyles();
        }
        else
        {
          //最大Noの個体を参照
          func.getPokeData(pokeMaxAUTONUM);
          func.makeFieldDisplayPokeList();
          func.judgeStyles();
        }
      }
      return this;
    },
    nextPoke(){
      if(flag){
        let elementAUTONUM = document.getElementById('pokeImage');
        let currentAUTONUM = Number(elementAUTONUM.getAttribute('dataAutonum'));
        let nextTargetAUTONUM = currentAUTONUM + 1;
        localStorage.setItem('pokeMinNo', pokeMinAUTONUM);

        if(nextTargetAUTONUM <= pokeMaxAUTONUM)
        {
          //現No+1した個体を参照
          func.getPokeData(nextTargetAUTONUM);
          func.makeFieldDisplayPokeList();
          func.judgeStyles();
        }
        else
        {
          //最小Noの個体を参照
          func.getPokeData(pokeMinAUTONUM);
          func.makeFieldDisplayPokeList();
          func.judgeStyles();
        }

      }
      return this;
    },
    switchImage(){
      if(flag){
        
        let img = document.getElementById("pokeImage");
        let nowImage = img.dataset.image;

        if(nowImage === 'NORMAL')
        {
          img.src = pokeShinyPath;
          img.dataset.image = 'SHINY';
        }
        else if(nowImage === 'SHINY')
        {
          img.src = pokeNormalPath;
          img.dataset.image = 'NORMAL';
        }
        else
        {
          img.src = pokeShinyPath;
          img.dataset.image = 'SHINY';
        }
      }
      return this;
    },
    makeFieldDisplayPokeList: async function(){
      if(flag){
        try{
          //const response = await fetch('http://127.0.0.1:3001/api/pokelist');
          const response = await fetch('/api/pokelist');
          const data = await response.json();

          switch(ascending_or_descending)
          {
            case 'ASCENDING':
              data.sort((a, b) => a.autonum - b.autonum);
              break;

            case 'DESCENDING':
              data.sort((a, b) => b.autonum - a.autonum);
              break;

            default:
              data.sort((a, b) => a.autonum - b.autonum);
              break;
          }

          areaDisplayPokeList = document.querySelector(`[${conf.fieldDisplayPokeList}]`);
          areaDisplayPokeList.innerHTML = '';

          data.forEach(pokemon => {
            const img = document.createElement('img');
            if(normal_or_shiny === 'NORMAL')
            {
              img.src = "../" + pokemon.path_normal_front;
            }
            else if(normal_or_shiny === 'SHINY')
            {
              img.src = "../" + pokemon.path_shiny_front;
            }
            else
            {
              img.src = "../" + pokemon.path_normal_front;
            }
            img.alt = `Pokemon ${pokemon.autonum}`;
            img.dataset.autonum = pokemon.autonum;
            img.classList.add('poke-image');

            img.addEventListener('click', () => {
              func.getPokeData(pokemon.autonum);
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
      .makeSettingCommands()
      .makeDecisionButton();
    switch(jap_or_eng)
    {
      case 'JAP':
        func
          .makeJapSidebarArea()
          .makeFieldJapControlButtons()
        break;
      case 'ENG':
        func
          .makeEngSidebarArea()
          .makeFieldEngControlButtons()
        break;
      default:
        func
          .makeJapSidebarArea()
          .makeFieldJapControlButtons()
        break;
    }
    func
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .judgeStyles();
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
