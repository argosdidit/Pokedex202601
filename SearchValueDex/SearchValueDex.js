const PokeSearch = (() => {
  'use strict';
  let
  func,
  flag,
  minHP,
  maxHP,
  minATTACK,
  maxATTACK,
  minDEFENSE,
  maxDEFENSE,
  minSP_ATK,
  maxSP_ATK,
  minSP_DEF,
  maxSP_DEF,
  minSPEED,
  maxSPEED,
  minSUM,
  maxSUM,
  area_HP,
  html_HP,
  area_ATTACK,
  html_ATTACK,
  area_DEFENSE,
  html_DEFENSE,
  area_SP_ATK,
  html_SP_ATK,
  area_SP_DEF,
  html_SP_DEF,
  area_SPEED,
  html_SPEED,
  area_SUM,
  html_SUM,
  active,
  areaPageStyle,
  areaPageTitle,
  areaSettingCommands,
  areaDecisionButton,
  areaSidebar,
  areaSearchLabel,
  areaLeftName,
  areaComboboxRegion,
  areaComboboxGeneration,
  areaSearchButton,
  areaResultTemplate,
  htmlPageStyle,
  htmlPageTitle,
  htmlSettingCommands,
  htmlDecisionButton,
  htmlSidebar,
  htmlSearchLabel,
  htmlLeftName,
  htmlComboboxRegion,
  htmlComboboxGeneration,
  htmlSearchButton,
  htmlResultTemplate,

  areaSectionTitle1,
  htmlSectionTitle1,
  
  jap_or_eng,
  bright_or_dark,
  normal_or_shiny,
  ascending_or_descending;

  let selectedValues = [];

  const conf ={
    fieldPageStyle: `field-page-style`,
    fieldPageTitle: `field-page-title`,
    fieldSettingCommands: `field-setting-commands`,
    fieldDecisionButton: `field-decision-button`,
    area_sidebar: `area-sidebar`,
    fieldSearchLabel: `field-search-label`,
    fieldLeftName: `field-left-name`,
    fieldComboboxRegion: `field-combobox-region`,
    fieldComboboxGeneration: `field-combobox-generation`,
    fieldSearchButton: `field-search-button`,
    fieldResultTemplate: `field-result-template`,

    fieldSectionTitle1: `field-section-title1`,

    area_HP: `area-HP`,
    area_ATTACK: `area-ATTACK`,
    area_DEFENSE: `area-DEFENSE`,
    area_SP_ATK: `area-SP_ATK`,
    area_SP_DEF: `area-SP_DEF`,
    area_SPEED: `area-SPEED`,
    area_SUM: `area-SUM`,
  };
  func = {
    init: function(){
      flag = true;
      areaSidebar = document.querySelector(`[${conf.area_sidebar}]`);

      jap_or_eng = localStorage.getItem("selectedLanguage") || 'JAP';
      bright_or_dark = localStorage.getItem("selectedWindow") || 'BRIGHT';
      normal_or_shiny = localStorage.getItem("selectedImage") || 'NORMAL';
      ascending_or_descending = localStorage.getItem("selectedOrder") || 'ASCENDING';

      return this;
    },
    makeInitField: function(){
      if(flag){
        areaSearchLabel = document.querySelector(`[${conf.fieldSearchLabel}]`);
        areaLeftName = document.querySelector(`[${conf.fieldLeftName}]`);
        areaSectionTitle1 = document.querySelector(`[${conf.fieldSectionTitle1}]`);
        areaComboboxRegion = document.querySelector(`[${conf.fieldComboboxRegion}]`);
        areaComboboxGeneration = document.querySelector(`[${conf.fieldComboboxGeneration}]`);
        areaSearchButton = document.querySelector(`[${conf.fieldSearchButton}]`);
      }
      return this;
    },
    makeJapInitField: function(){
      if(flag){

        htmlSearchLabel = `<h3 class="search-label">検索フィールド</h3>`;
        htmlLeftName = `<div class="left">名前:</div>`;
        htmlSectionTitle1 = `<h4 class="section-title">種族値</h4>`;
        htmlComboboxRegion = `<option value="">地方を選択してください</option>`;
        htmlComboboxGeneration = `<option value="">世代を選択してください</option>`;
        htmlSearchButton = `<button id="BtnSearch" type="button">検索</button>`;

        areaSearchLabel.insertAdjacentHTML('beforeend', htmlSearchLabel);
        areaLeftName.insertAdjacentHTML('beforeend', htmlLeftName);
        areaSectionTitle1.insertAdjacentHTML('beforeend', htmlSectionTitle1);
        areaComboboxRegion.insertAdjacentHTML('beforeend', htmlComboboxRegion);
        areaComboboxGeneration.insertAdjacentHTML('beforeend', htmlComboboxGeneration);
        areaSearchButton.insertAdjacentHTML('beforeend', htmlSearchButton);

        //検索ロジック※そう間違えたら通らない
        document.getElementById("BtnSearch").addEventListener("click", () => {
          func.searchValuePoke();
        });
      }
      return this;
    },
    makeEngInitField: function(){
      if(flag){

        htmlSearchLabel = `<h3 class="search-label">Search Field</h3>`;
        htmlLeftName = `<div class="left">Name:</div>`;
        htmlSectionTitle1 = `<h4 class="section-title">HABCDS And SUM</h4>`;
        htmlComboboxRegion = `<option value="">Select Region</option>`;
        htmlComboboxGeneration = `<option value="">Select Generation</option>`;
        htmlSearchButton = `<button id="BtnSearch" type="button">Search</button>`;

        areaSearchLabel.insertAdjacentHTML('beforeend', htmlSearchLabel);
        areaLeftName.insertAdjacentHTML('beforeend', htmlLeftName);
        areaSectionTitle1.insertAdjacentHTML('beforeend', htmlSectionTitle1);
        areaComboboxRegion.insertAdjacentHTML('beforeend', htmlComboboxRegion);
        areaComboboxGeneration.insertAdjacentHTML('beforeend', htmlComboboxGeneration);
        areaSearchButton.insertAdjacentHTML('beforeend', htmlSearchButton);

        //検索ロジック※そう間違えたら通らない
        document.getElementById("BtnSearch").addEventListener("click", () => {
          func.searchValuePoke();
        });
      }
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
        <a id="decisionButton" href="../SearchValueDex/SearchValueDex.html">
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
    updateURL: async function(){
      if(flag){
        let newURL = `../SearchValueDex/SearchValueDex.html`;
        //window.location.href = newURL;
        history.replaceState(null, "", newURL);
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
    initValueTable: function(){
      if(flag){
        //fetch('http://127.0.0.1:3001/api/poke/min_max_value')
        fetch('/api/poke/min_max_value')
          .then(res => res.json())
          .then(values => func.renderValueTable(values));
      }
      return this;
    },
    makeFieldPageTitle: function(){
      if(flag){
        areaPageTitle = document.querySelector(`[${conf.fieldPageTitle}]`);
        htmlPageTitle =
        `<h1>～ SearchValueDex ～</h1>`;

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
    renderValueTable: function(values){
      if(flag){
        minHP = values[0].minhp;
        maxHP = values[0].maxhp;
        func.makeAreaHP();
        func.activateSliderHP();

        minATTACK = values[0].minattack;
        maxATTACK = values[0].maxattack;
        func.makeAreaATTACK();
        func.activateSliderATTACK();

        minDEFENSE = values[0].mindefense;
        maxDEFENSE = values[0].maxdefense;
        func.makeAreaDEFENSE();
        func.activateSliderDEFENSE();

        minSP_ATK = values[0].minsp_atk;
        maxSP_ATK = values[0].maxsp_atk;
        func.makeAreaSP_ATK();
        func.activateSliderSP_ATK();

        minSP_DEF = values[0].minsp_def;
        maxSP_DEF = values[0].maxsp_def;
        func.makeAreaSP_DEF();
        func.activateSliderSP_DEF();

        minSPEED = values[0].minspeed;
        maxSPEED = values[0].maxspeed;
        func.makeAreaSPEED();
        func.activateSliderSPEED();

        minSUM = values[0].minsum;
        maxSUM = values[0].maxsum;
        func.makeAreaSUM();
        func.activateSliderSUM();
      }
      return this;
    },
    makeAreaHP: function(){
      if(flag){
        html_HP =
        `
        <div class="slider-row" data-type="HP">
        <span class="value-label">HP</span>
        <input class="minInput" type="number" min="${minHP}" max="${maxHP}" value="${minHP}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minHP}" max="${maxHP}" value="${minHP}">
        <input class="maxRange" type="range" min="${minHP}" max="${maxHP}" value="${maxHP}">
        </div>
        <input class="maxInput" type="number" min="${minHP}" max="${maxHP}" value="${maxHP}">
        </div>
        `;

        area_HP = document.querySelector(`[${conf.area_HP}]`);
        area_HP.insertAdjacentHTML('beforeend', html_HP);
      }
      return this;
    },
    makeAreaATTACK: function(){
      if(flag){

        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '攻撃';
            break;
          case 'ENG':
            lblName = 'Attack';
            break;
          default:
            lblName = '攻撃';
            break;
        }

        html_ATTACK =
        `
        <div class="slider-row" data-type="ATTACK">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minATTACK}" max="${maxATTACK}" value="${minATTACK}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minATTACK}" max="${maxATTACK}" value="${minATTACK}">
        <input class="maxRange" type="range" min="${minATTACK}" max="${maxATTACK}" value="${maxATTACK}">
        </div>
        <input class="maxInput" type="number" min="${minATTACK}" max="${maxATTACK}" value="${maxATTACK}">
        </div>
        `;

        area_ATTACK = document.querySelector(`[${conf.area_ATTACK}]`);
        area_ATTACK.insertAdjacentHTML('beforeend', html_ATTACK);
      }
      return this;
    },
    makeAreaDEFENSE: function(){
      if(flag){

        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '防御';
            break;
          case 'ENG':
            lblName = 'Defense';
            break;
          default:
            lblName = '防御';
            break;
        }

        html_DEFENSE =
        `
        <div class="slider-row" data-type="DEFENSE">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minDEFENSE}" max="${maxDEFENSE}" value="${minDEFENSE}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minDEFENSE}" max="${maxDEFENSE}" value="${minDEFENSE}">
        <input class="maxRange" type="range" min="${minDEFENSE}" max="${maxDEFENSE}" value="${maxDEFENSE}">
        </div>
        <input class="maxInput" type="number" min="${minDEFENSE}" max="${maxDEFENSE}" value="${maxDEFENSE}">
        </div>
        `;

        area_DEFENSE = document.querySelector(`[${conf.area_DEFENSE}]`);
        area_DEFENSE.insertAdjacentHTML('beforeend', html_DEFENSE);
      }
      return this;
    },
    makeAreaSP_ATK: function(){
      if(flag){

        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '特攻';
            break;
          case 'ENG':
            lblName = 'SP_ATK';
            break;
          default:
            lblName = '特攻';
            break;
        }

        html_SP_ATK =
        `
        <div class="slider-row" data-type="SP_ATK">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minSP_ATK}" max="${maxSP_ATK}" value="${minSP_ATK}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minSP_ATK}" max="${maxSP_ATK}" value="${minSP_ATK}">
        <input class="maxRange" type="range" min="${minSP_ATK}" max="${maxSP_ATK}" value="${maxSP_ATK}">
        </div>
        <input class="maxInput" type="number" min="${minSP_ATK}" max="${maxSP_ATK}" value="${maxSP_ATK}">
        </div>
        `;

        area_SP_ATK = document.querySelector(`[${conf.area_SP_ATK}]`);
        area_SP_ATK.insertAdjacentHTML('beforeend', html_SP_ATK);
      }
      return this;
    },
    makeAreaSP_DEF: function(){
      if(flag){
        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '特防';
            break;
          case 'ENG':
            lblName = 'SP_DEF';
            break;
          default:
            lblName = '特防';
            break;
        }

        html_SP_DEF =
        `
        <div class="slider-row" data-type="SP_DEF">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minSP_DEF}" max="${maxSP_DEF}" value="${minSP_DEF}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minSP_DEF}" max="${maxSP_DEF}" value="${minSP_DEF}">
        <input class="maxRange" type="range" min="${minSP_DEF}" max="${maxSP_DEF}" value="${maxSP_DEF}">
        </div>
        <input class="maxInput" type="number" min="${minSP_DEF}" max="${maxSP_DEF}" value="${maxSP_DEF}">
        </div>
        `;

        area_SP_DEF = document.querySelector(`[${conf.area_SP_DEF}]`);
        area_SP_DEF.insertAdjacentHTML('beforeend', html_SP_DEF);
      }
      return this;
    },
    makeAreaSPEED: function(){
      if(flag){

        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '素早さ';
            break;
          case 'ENG':
            lblName = 'Speed';
            break;
          default:
            lblName = '素早さ';
            break;
        }

        html_SPEED =
        `
        <div class="slider-row" data-type="SPEED">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minSPEED}" max="${maxSPEED}" value="${minSPEED}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minSPEED}" max="${maxSPEED}" value="${minSPEED}">
        <input class="maxRange" type="range" min="${minSPEED}" max="${maxSPEED}" value="${maxSPEED}">
        </div>
        <input class="maxInput" type="number" min="${minSPEED}" max="${maxSPEED}" value="${maxSPEED}">
        </div>
        `;

        area_SPEED = document.querySelector(`[${conf.area_SPEED}]`);
        area_SPEED.insertAdjacentHTML('beforeend', html_SPEED);
      }
      return this;
    },
    makeAreaSUM: function(){
      if(flag){

        let lblName;
        switch(jap_or_eng)
        {
          case 'JAP':
            lblName = '種族値';
            break;
          case 'ENG':
            lblName = 'Values';
            break;
          default:
            lblName = '種族値';
            break;
        }

        html_SUM =
        `
        <div class="slider-row" data-type="SUM">
        <span class="value-label">${lblName}</span>
        <input class="minInput" type="number" min="${minSUM}" max="${maxSUM}" value="${minSUM}">
        <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <input class="minRange" type="range" min="${minSUM}" max="${maxSUM}" value="${minSUM}">
        <input class="maxRange" type="range" min="${minSUM}" max="${maxSUM}" value="${maxSUM}">
        </div>
        <input class="maxInput" type="number" min="${minSUM}" max="${maxSUM}" value="${maxSUM}">
        </div>
        `;

        area_SUM = document.querySelector(`[${conf.area_SUM}]`);
        area_SUM.insertAdjacentHTML('beforeend', html_SUM);
      }
      return this;
    },
    activateSliderHP: function(){
      if(flag){
        const row = document.querySelector('[data-type="HP"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderATTACK: function(){
      if(flag){
        const row = document.querySelector('[data-type="ATTACK"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderDEFENSE: function(){
      if(flag){
        const row = document.querySelector('[data-type="DEFENSE"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderSP_ATK: function(){
      if(flag){
        const row = document.querySelector('[data-type="SP_ATK"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderSP_DEF: function(){
      if(flag){
        const row = document.querySelector('[data-type="SP_DEF"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderSPEED: function(){
      if(flag){
        const row = document.querySelector('[data-type="SPEED"]');
        func.SliderLogic(row);
      }
      return this;
    },
    activateSliderSUM: function(){
      if(flag){
        const row = document.querySelector('[data-type="SUM"]');
        func.SliderLogic(row);
      }
      return this;
    },
    SliderLogic: function(row){
      const minRange = row.querySelector(".minRange");
      const maxRange = row.querySelector(".maxRange");
      const rangeBar = row.querySelector(".range");
      const minInput = row.querySelector(".minInput");
      const maxInput = row.querySelector(".maxInput");
      
      function updateBar(minVal, maxVal){
        const min = parseInt(minRange.min, 10);
        const max = parseInt(minRange.max, 10);
        const left = ((minVal - min) / (max - min)) * 100;
        const right = ((maxVal - min) / (max - min)) * 100;
        rangeBar.style.left = left + '%';
        rangeBar.style.width = (right - left) + '%';
      }
      
      function updateInputs(minVal, maxVal){
        minInput.value = String(minVal).padStart(3, '0');
        maxInput.value = String(maxVal).padStart(3, '0');
      }
      
      function sync(changed){
        let minVal = parseInt(minRange.value, 10);
        let maxVal = parseInt(maxRange.value, 10);
        
        if(minVal >= maxVal){
          if(changed === "min"){
            minVal = maxVal - 1;
            minRange.value = minVal;
          } else {
            maxVal = minVal + 1;
            maxRange.value = maxVal;
          }
        }
        
        minVal = parseInt(minRange.value, 10);
        maxVal = parseInt(maxRange.value, 10);
        
        updateBar(minVal, maxVal);
        updateInputs(minVal, maxVal);
      }
      
      minRange.addEventListener("input", () => sync("min"));
      maxRange.addEventListener("input", () => sync("max"));

      minInput.addEventListener("input", () => {
        let v = parseInt(minInput.value, 10);
        if(isNaN(v)) v = 1;
        v = Math.max(1, Math.min(v, parseInt(maxRange.value) - 1));
        minRange.value = v;
        sync("min");
      });
      
      maxInput.addEventListener("input", () => {
        let v = parseInt(maxInput.value, 10);
        if(isNaN(v)) v = 100;
        v = Math.min(100, Math.max(v, parseInt(minRange.value) + 1));
        maxRange.value = v;
        sync("max");
      });
      
      sync("min");
    },
    initRegionList: function(){
      if(flag){
        switch(jap_or_eng)
        {
          case 'JAP':
            //fetch('http://127.0.0.1:3001/api/poke/region')
            fetch('/api/poke/region')
            .then(res => res.json())
            .then(regions => func.renderJapRegionList(regions));
            break;
          case 'ENG':
            //fetch('http://127.0.0.1:3001/api/poke/region')
            fetch('/api/poke/region')
            .then(res => res.json())
            .then(regions => func.renderEngRegionList(regions));
            break;
          default:
            //fetch('http://127.0.0.1:3001/api/poke/region')
            fetch('/api/poke/region')
            .then(res => res.json())
            .then(regions => func.renderJapRegionList(regions));
            break;
        }
      }
      return this;
    },
    renderJapRegionList(regions){
      if(flag){
        const ddlRegion = document.getElementById("DdlSearchRegion");

        regions.forEach(r => {
          const opt = document.createElement("option");
          opt.value = r.regionid;
          opt.textContent = `${r.regionid}: ${r.chiho}`;
          ddlRegion.appendChild(opt);
        });
      }
      return this;
    },
    renderEngRegionList(regions){
      if(flag){
        const ddlRegion = document.getElementById("DdlSearchRegion");

        regions.forEach(r => {
          const opt = document.createElement("option");
          opt.value = r.regionid;
          opt.textContent = `${r.regionid}: ${r.region}`;
          ddlRegion.appendChild(opt);
        });
      }
      return this;
    },
    initGenList: function(){
      if(flag){
        switch(jap_or_eng)
        {
          case 'JAP':
            //fetch('http://127.0.0.1:3001/api/poke/generation')
            fetch('/api/poke/generation')
            .then(res => res.json())
            .then(gens => func.renderJapGenList(gens));
            break;
          case 'ENG':
            //fetch('http://127.0.0.1:3001/api/poke/generation')
            fetch('/api/poke/generation')
            .then(res => res.json())
            .then(gens => func.renderEngGenList(gens));
            break;
          default:
            //fetch('http://127.0.0.1:3001/api/poke/generation')
            fetch('/api/poke/generation')
            .then(res => res.json())
            .then(gens => func.renderJapGenList(gens));
            break;
        }
      }
      return this;
    },
    renderJapGenList: function(gens){
      if(flag){
        const ddlGen = document.getElementById("DdlSearchGen");

        gens.forEach(g => {
          const opt = document.createElement("option");
          opt.value = g.generationid;
          opt.textContent = `${g.generationid}: ${g.sedai}`;
          ddlGen.appendChild(opt);
        });
      }
      return this;
    },
    renderEngGenList: function(gens){
      if(flag){
        const ddlGen = document.getElementById("DdlSearchGen");

        gens.forEach(g => {
          const opt = document.createElement("option");
          opt.value = g.generationid;
          opt.textContent = `${g.generationid}: ${g.generation}`;
          ddlGen.appendChild(opt);
        });
      }
      return this;
    },
    searchValuePoke: function(){
      if(flag){
        const name = document.getElementById("TxtSearchName").value;
        const region = document.getElementById("DdlSearchRegion").value;
        const generation = document.getElementById("DdlSearchGen").value;

        // 1.スライダー行を取る
        const rowHP = document.querySelector('.slider-row[data-type="HP"]');
        const rowATTACK = document.querySelector('.slider-row[data-type="ATTACK"]');
        const rowDEFENSE = document.querySelector('.slider-row[data-type="DEFENSE"]');
        const rowSP_ATK = document.querySelector('.slider-row[data-type="SP_ATK"]');
        const rowSP_DEF = document.querySelector('.slider-row[data-type="SP_DEF"]');
        const rowSPEED = document.querySelector('.slider-row[data-type="SPEED"]');
        const rowSUM = document.querySelector('.slider-row[data-type="SUM"]');

        let
        getMinHP,
        getMaxHP,
        getMinATTACK,
        getMaxATTACK,
        getMinDEFENSE,
        getMaxDEFENSE,
        getMinSP_ATK,
        getMaxSP_ATK,
        getMinSP_DEF,
        getMaxSP_DEF,
        getMinSPEED,
        getMaxSPEED,
        getMinSUM,
        getMaxSUM;

        // 2. その中の minRange, maxRange の値を数値として取得

        if(rowHP != null)
        {
          getMinHP = parseInt(rowHP.querySelector('.minRange').value, 10);
          getMaxHP = parseInt(rowHP.querySelector('.maxRange').value, 10);
        }

        if(rowATTACK != null)
        {
          getMinATTACK = parseInt(rowATTACK.querySelector('.minRange').value, 10);
          getMaxATTACK = parseInt(rowATTACK.querySelector('.maxRange').value, 10);
        }

        if(rowDEFENSE != null)
        {
          getMinDEFENSE = parseInt(rowDEFENSE.querySelector('.minRange').value, 10);
          getMaxDEFENSE = parseInt(rowDEFENSE.querySelector('.maxRange').value, 10);
        }

        if(rowSP_ATK != null)
        {
          getMinSP_ATK = parseInt(rowSP_ATK.querySelector('.minRange').value, 10);
          getMaxSP_ATK = parseInt(rowSP_ATK.querySelector('.maxRange').value, 10);
        }

        if(rowSP_DEF != null)
        {
          getMinSP_DEF = parseInt(rowSP_DEF.querySelector('.minRange').value, 10);
          getMaxSP_DEF = parseInt(rowSP_DEF.querySelector('.maxRange').value, 10);
        }

        if(rowSPEED != null)
        {
          getMinSPEED = parseInt(rowSPEED.querySelector('.minRange').value, 10);
          getMaxSPEED = parseInt(rowSPEED.querySelector('.maxRange').value, 10);
        }

        if(rowSUM != null)
        {
          getMinSUM = parseInt(rowSUM.querySelector('.minRange').value, 10);
          getMaxSUM = parseInt(rowSUM.querySelector('.maxRange').value, 10);
        }

        //NULL判断
        if((getMinHP === undefined && getMaxHP === undefined)||
        (getMinHP === minHP && getMaxHP === maxHP))
        {
          getMinHP = null;
          getMaxHP = null;
        }

        if((getMinATTACK === undefined && getMaxATTACK === undefined)||
        (getMinATTACK === minATTACK && getMaxATTACK === maxATTACK))
        {
          getMinATTACK = null;
          getMaxATTACK = null;
        }
        
        if((getMinDEFENSE === undefined && getMaxDEFENSE === undefined)||
        (getMinDEFENSE === minDEFENSE && getMaxDEFENSE === maxDEFENSE))
        {
          getMinDEFENSE = null;
          getMaxDEFENSE = null;
        }
        
        if((getMinSP_ATK === undefined && getMaxSP_ATK === undefined)||
        (getMinSP_ATK === minSP_ATK && getMaxSP_ATK === maxSP_ATK))
        {
          getMinSP_ATK = null;
          getMaxSP_ATK = null
        }

        if((getMinSP_DEF === undefined && getMaxSP_DEF === undefined)||
        (getMinSP_DEF === minSP_DEF && getMaxSP_DEF === maxSP_DEF))
        {
          getMinSP_DEF = null;
          getMaxSP_DEF = null
        }
        
        if((getMinSPEED === undefined && getMaxSPEED === undefined)||
        (getMinSPEED === minSPEED && getMaxSPEED === maxSPEED))
        {
          getMinSPEED = null;
          getMaxSPEED = null;
        }

        if((getMinSUM === undefined && getMaxSUM === undefined)||
        (getMinSUM === minSUM && getMaxSUM === maxSUM))
        {
          getMinSUM = null;
          getMaxSUM = null;
        }

        selectedValues = [];
        selectedValues.push(getMinHP, getMaxHP,
                            getMinATTACK, getMaxATTACK,
                            getMinDEFENSE, getMaxDEFENSE,
                            getMinSP_ATK, getMaxSP_ATK,
                            getMinSP_DEF, getMaxSP_DEF,
                            getMinSPEED, getMaxSPEED,
                            getMinSUM, getMaxSUM);

        let values = selectedValues;

        switch(jap_or_eng)
        {
          case 'JAP':
            //fetch('http://127.0.0.1:3001/api/search/value', {
            fetch('/api/search/value', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, values, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderJapSearchResult(data));
            break;
          case 'ENG':
            //fetch('http://127.0.0.1:3001/api/search/value', {
            fetch('/api/search/value', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, values, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderEngSearchResult(data));
            break;
          default:
            //fetch('http://127.0.0.1:3001/api/search/value', {
            fetch('/api/search/value', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, values, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderJapSearchResult(data));
            break;
        }
      }
      return this;
    },
    renderJapResultTemplate: function(){
      if(flag){
        areaResultTemplate = document.querySelector(`[${conf.fieldResultTemplate}]`);
        htmlResultTemplate =
        `
        <div class="middle">
        <table class="poke-table">
        <thead>
        <tr>
        <th width="5%" rowspan="2">画像</th>
        <th width="5%" rowspan="2">番号</th>
        <th width="15%">名前</th>
        <th width="30%" colspan="3">フォルム</th>
        <th width="15%">タマゴグループ</th>
        <th width="10%">地方</th>
        <th width="5%">HP</th>
        <th width="5%">攻撃</th>
        <th width="5%">防御</th>
        <th width="5%">リンク</th>
        </tr>
        <tr>
        <th width="15%">タイプ</th>
        <th width="10%">特性1</th>
        <th width="10%">特性2</th>
        <th width="10%">隠れ特性</th>
        <th>性別</th>
        <th>世代</th>
        <th width="5%">特攻</th>
        <th width="5%">特防</th>
        <th width="5%">素早さ</th>
        <th width="5%">種族値</th>
        </tr>
        </thead>
        <tbody id="SearchResultBody">
        </tbody>
        </table>
        <p id="LblNoResult" class="no-result" style="display:none;">
        見つかりませんでした。他の条件で検索してください。
        </p>
        </div>
        `;

        areaResultTemplate.insertAdjacentHTML('beforeend', htmlResultTemplate);
      }
      return this;
    },
    renderJapSearchResult: function(list){
      if(flag){
        const body = document.getElementById("SearchResultBody");
        body.innerHTML = "";
        
        // ★ ここ重要
        if (!Array.isArray(list))
        {
          console.error("検索結果が配列ではありません:", list);
          document.getElementById("LblNoResult").style.display = "block";
          return this;
        }
        
        if(list.length === 0)
        {
          document.getElementById("LblNoResult").style.display = "block";
          return this;
        }
        
        document.getElementById("LblNoResult").style.display = "none";

        switch(ascending_or_descending)
        {
          case 'ASCENDING':
            list.sort((a, b) => a.AUTONUM - b.AUTONUM);
            break;

          case 'DESCENDING':
            list.sort((a, b) => b.AUTONUM - a.AUTONUM);
            break;

          default:
            list.sort((a, b) => a.AUTONUM - b.AUTONUM);
            break;
        }
        
        list.forEach(p => {

          let displayImage;

          switch(normal_or_shiny)
          {
            case 'NORMAL':
              displayImage = "../" + p.path_normal_front;
              break;
            case 'SHINY':
              displayImage = "../" + p.path_shiny_front;
              break;
            default:
              displayImage = "../" + p.path_normal_front;
              break;
          }
          const tr1 = document.createElement("tr");
          tr1.innerHTML =
          `
          <td width="5%" rowspan="2"><img src="${displayImage}" class="middle-each-image"></td>
          <td width="5%" rowspan="2">${p.no}</td>
          <td width="15%">${p.namae}</td>
          <td width="30%" colspan="3">${p.sugata ? p.sugata : ""}</td>
          <td width="15%">${p.tamago_group1}${p.tamago_group2 ? "・" + p.tamago_group2 : ""}</td>
          <td width="10%">${p.chiho}</td>
          <td width="5%">${p.hp}</td>
          <td width="5%">${p.attack}</td>
          <td width="5%">${p.defense}</td>
          <td width="5%"><a href="../NewPokedex/NewPokedex.html?poke_AUTONUM=${p.AUTONUM}"
                            data-lang="${jap_or_eng}"
                            data-window="${bright_or_dark}"
                            >リンク</a></td>
          `;
          const tr2 = document.createElement("tr");
          tr2.innerHTML =
          `
          <td width="15%">${p.taipu1}${p.taipu2 ? "・" + p.taipu2 : ""}</td>
          <td width="10%">${p.tokusei1}</td>
          <td width="10%">${p.tokusei2 ? p.tokusei2 : ""}</td>
          <td width="10%">${p.yume_tokusei ? p.yume_tokusei : ""}</td>
          <td>${p.gender}</td>
          <td>${p.sedai}</td>
          <td width="5%">${p.sp_atk}</td>
          <td width="5%">${p.sp_def}</td>
          <td width="5%">${p.speed}</td>
          <td width="5%">${p.sum}</td>
          `;
          body.appendChild(tr1);
          body.appendChild(tr2);
        });
      }
      return this;
    },
    renderEngResultTemplate: function(){
      if(flag){
        areaResultTemplate = document.querySelector(`[${conf.fieldResultTemplate}]`);
        htmlResultTemplate =
        `
        <div class="middle">
        <table class="poke-table">
        <thead>
        <tr>
        <th width="5%" rowspan="2">Image</th>
        <th width="5%" rowspan="2">No</th>
        <th width="15%">Name</th>
        <th width="30%" colspan="3">Form</th>
        <th width="15%">Egg Group</th>
        <th width="10%">Region</th>
        <th width="5%">HP</th>
        <th width="5%">Attack</th>
        <th width="5%">Defense</th>
        <th width="5%">Link</th>
        </tr>
        <tr>
        <th width="15%">Type</th>
        <th width="10%">Ability1</th>
        <th width="10%">Ability2</th>
        <th width="10%">Hidden Ability</th>
        <th>Gender</th>
        <th>Generation</th>
        <th width="5%">Sp.Atk</th>
        <th width="5%">Sp.Def</th>
        <th width="5%">Speed</th>
        <th width="5%">Total Value</th>
        </tr>
        </thead>
        <tbody id="SearchResultBody">
        </tbody>
        </table>
        <p id="LblNoResult" class="no-result" style="display:none;">
        Sorry, Not Found...
        </p>
        </div>
        `;

        areaResultTemplate.insertAdjacentHTML('beforeend', htmlResultTemplate);
      }
      return this;
    },
    renderEngSearchResult: function(list){
      if(flag){
        const body = document.getElementById("SearchResultBody");
        body.innerHTML = "";
        
        // ★ ここ重要
        if (!Array.isArray(list))
        {
          console.error("検索結果が配列ではありません:", list);
          document.getElementById("LblNoResult").style.display = "block";
          return this;
        }
        
        if(list.length === 0)
        {
          document.getElementById("LblNoResult").style.display = "block";
          return this;
        }
        
        document.getElementById("LblNoResult").style.display = "none";

        switch(ascending_or_descending)
        {
          case 'ASCENDING':
            list.sort((a, b) => a.AUTONUM - b.AUTONUM);
            break;

          case 'DESCENDING':
            list.sort((a, b) => b.AUTONUM - a.AUTONUM);
            break;

          default:
            list.sort((a, b) => a.AUTONUM - b.AUTONUM);
            break;
        }
        
        list.forEach(p => {

          let displayImage;

          switch(normal_or_shiny)
          {
            case 'NORMAL':
              displayImage = "../" + p.path_normal_front;
              break;
            case 'SHINY':
              displayImage = "../" + p.path_shiny_front;
              break;
            default:
              displayImage = "../" + p.path_normal_front;
              break;
          }
          const tr1 = document.createElement("tr");
          tr1.innerHTML =
          `
          <td width="5%" rowspan="2"><img src="${displayImage}" class="middle-each-image"></td>
          <td width="5%" rowspan="2">${p.no}</td>
          <td width="15%">${p.name}</td>
          <td width="30%" colspan="3">${p.form ? p.form : ""}</td>
          <td width="15%">${p.egg_group1}${p.egg_group2 ? "・" + p.egg_group2 : ""}</td>
          <td width="10%">${p.region}</td>
          <td width="5%">${p.hp}</td>
          <td width="5%">${p.attack}</td>
          <td width="5%">${p.defense}</td>
          <td width="5%"><a href="../NewPokedex/NewPokedex.html?poke_AUTONUM=${p.autonum}"
                            data-lang="${jap_or_eng}"
                            data-window="${bright_or_dark}"
                            >Link</a></td>
          `;
          const tr2 = document.createElement("tr");
          tr2.innerHTML =
          `
          <td width="15%">${p.type1}${p.type2 ? "・" + p.type2 : ""}</td>
          <td width="10%">${p.ability1}</td>
          <td width="10%">${p.ability2 ? p.ability2 : ""}</td>
          <td width="10%">${p.hidden_ability ? p.hidden_ability : ""}</td>
          <td>${p.gender}</td>
          <td>${p.generation}</td>
          <td width="5%">${p.sp_atk}</td>
          <td width="5%">${p.sp_def}</td>
          <td width="5%">${p.speed}</td>
          <td width="5%">${p.sum}</td>
          `;
          body.appendChild(tr1);
          body.appendChild(tr2);
        });
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
            htmlPageStyle = `<link rel="stylesheet" href="SearchValueDexBright.css">`;
            favicon.href = "SearchValueDexBright.png";
            break;
          case 'DARK':
            htmlPageStyle = `<link rel="stylesheet" href="SearchValueDexDark.css">`;
            favicon.href = "SearchValueDexDark.png";
            break;
          default:
            htmlPageStyle = `<link rel="stylesheet" href="SearchValueDexBright.css">`;
            favicon.href = "SearchValueDexBright.png";
            break;
        }
        areaPageStyle.insertAdjacentHTML('beforeend', htmlPageStyle);
      }
      return this;
    }
  };

  active = () => {
    func
      .init()
      .makeInitField();
    switch(jap_or_eng)
    {
      case 'JAP':
        func.makeJapInitField();
        break;
      case 'ENG':
        func.makeEngInitField();
        break;
      default:
        func.makeJapInitField();
        break;
    }
    func
      .makeFieldPageTitle()
      .makeSettingCommands()
      .makeDecisionButton();
    switch(jap_or_eng)
    {
      case 'JAP':
        func.renderJapResultTemplate();
        func.makeJapSidebarArea();
        break;
      case 'ENG':
        func.renderEngResultTemplate();
        func.makeEngSidebarArea();
        break;
      default:
        func.renderJapResultTemplate();
        func.makeJapSidebarArea();
        break;
    }
    func
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initValueTable()
      .initRegionList()
      .initGenList()
      .searchValuePoke()
      .judgeStyles();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});