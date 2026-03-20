const PokeSearch = (() => {
  'use strict';
  let
  func,
  flag,
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
  areaSectionTitle2,
  htmlSectionTitle1,
  htmlSectionTitle2,
  
  jap_or_eng,
  bright_or_dark,
  normal_or_shiny,
  ascending_or_descending;

  let selectedAbilities = new Set();
  let abilityMaster = [];

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
    fieldSectionTitle2: `field-section-title2`,
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
        areaSectionTitle2 = document.querySelector(`[${conf.fieldSectionTitle2}]`);
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
        htmlSectionTitle1 = `<h4 class="section-title">特性一覧</h4>`;
        htmlSectionTitle2 = `<h4 class="section-title">選択中の特性</h4>`;
        htmlComboboxRegion = `<option value="">地方を選択してください</option>`;
        htmlComboboxGeneration = `<option value="">世代を選択してください</option>`;
        htmlSearchButton = `<button id="BtnSearch" type="button">検索</button>`;

        areaSearchLabel.insertAdjacentHTML('beforeend', htmlSearchLabel);
        areaLeftName.insertAdjacentHTML('beforeend', htmlLeftName);
        areaSectionTitle1.insertAdjacentHTML('beforeend', htmlSectionTitle1);
        areaSectionTitle2.insertAdjacentHTML('beforeend', htmlSectionTitle2);
        areaComboboxRegion.insertAdjacentHTML('beforeend', htmlComboboxRegion);
        areaComboboxGeneration.insertAdjacentHTML('beforeend', htmlComboboxGeneration);
        areaSearchButton.insertAdjacentHTML('beforeend', htmlSearchButton);

        //検索ロジック※そう間違えたら通らない
        document.getElementById("BtnSearch").addEventListener("click", () => {
          func.searchAbilityPoke();
        });
      }
      return this;
    },
    makeEngInitField: function(){
      if(flag){

        htmlSearchLabel = `<h3 class="search-label">Search Field</h3>`;
        htmlLeftName = `<div class="left">Name:</div>`;
        htmlSectionTitle1 = `<h4 class="section-title">Ability Area</h4>`;
        htmlSectionTitle2 = `<h4 class="section-title">Selected Abilities</h4>`;
        htmlComboboxRegion = `<option value="">Select Region</option>`;
        htmlComboboxGeneration = `<option value="">Select Generation</option>`;
        htmlSearchButton = `<button id="BtnSearch" type="button">Search</button>`;

        areaSearchLabel.insertAdjacentHTML('beforeend', htmlSearchLabel);
        areaLeftName.insertAdjacentHTML('beforeend', htmlLeftName);
        areaSectionTitle1.insertAdjacentHTML('beforeend', htmlSectionTitle1);
        areaSectionTitle2.insertAdjacentHTML('beforeend', htmlSectionTitle2);
        areaComboboxRegion.insertAdjacentHTML('beforeend', htmlComboboxRegion);
        areaComboboxGeneration.insertAdjacentHTML('beforeend', htmlComboboxGeneration);
        areaSearchButton.insertAdjacentHTML('beforeend', htmlSearchButton);

        //検索ロジック※そう間違えたら通らない
        document.getElementById("BtnSearch").addEventListener("click", () => {
          func.searchAbilityPoke();
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
        <a id="decisionButton" href="../SearchAbilityDex/SearchAbilityDex.html">
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
        let newURL = `../SearchAbilityDex/SearchAbilityDex.html`;
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
    makeFieldPageTitle: function(){
      if(flag){
        areaPageTitle = document.querySelector(`[${conf.fieldPageTitle}]`);
        htmlPageTitle =
        `<h1>～ SearchAbilityDex ～</h1>`;

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
    initAbilityTable: function(){
      if(flag){
        //fetch('http://127.0.0.1:3001/api/poke/ability')
        fetch('/api/poke/ability')
          .then(res => res.json())
          .then(list => {
            abilityMaster = list;
            switch(jap_or_eng)
            {
              case 'JAP':
                func.renderJapAbilityList();
                break;
              case 'ENG':
                func.renderEngAbilityList();
                break;
              default:
                func.renderJapAbilityList();
                break;
            }
          });
      }
      return this;
    },
    renderJapAbilityList: function () {
      if (flag){
        const list = document.getElementById('AbilityList');
        
        list.innerHTML = '';
        
        abilityMaster.forEach(a => {
          const btn = document.createElement('button');
          btn.className = 'ability-button';
          btn.textContent = a.tokusei;
          btn.dataset.key = a.abilityid;
          
          if (selectedAbilities.has(a.ability))
          {
            btn.classList.add('selected');
          }
          
          btn.addEventListener('click', () => {
            func.toggleJapAbility(a);
          });
          
          list.appendChild(btn);
        });
      }
      return this;
    },
    renderEngAbilityList: function () {
      if (flag){
        const list = document.getElementById('AbilityList');
        
        list.innerHTML = '';
        
        abilityMaster.forEach(a => {
          const btn = document.createElement('button');
          btn.className = 'ability-button';
          btn.textContent = a.ability;
          btn.dataset.key = a.abilityid;
          
          if (selectedAbilities.has(a.ability))
          {
            btn.classList.add('selected');
          }
          
          btn.addEventListener('click', () => {
            func.toggleEngAbility(a);
          });
          
          list.appendChild(btn);
        });
      }
      return this;
    },
    toggleJapAbility: function(ability){
      if(flag){
        const key = ability.abilityid;
        
        if (selectedAbilities.has(key))
        {
          selectedAbilities.delete(key);
        }
        else
        {
          selectedAbilities.add(key);
        }
        
        func.renderJapAbilityList();
        func.renderJapSelectedAbilityList();
      }
      return this;
    },
    toggleEngAbility: function(ability){
      if(flag){
        const key = ability.abilityid;
        
        if (selectedAbilities.has(key))
        {
          selectedAbilities.delete(key);
        }
        else
        {
          selectedAbilities.add(key);
        }
        
        func.renderEngAbilityList();
        func.renderEngSelectedAbilityList();
      }
      return this;
    },
    renderJapSelectedAbilityList: function () {
      if (!flag) return this;

      const area = document.getElementById('SelectedAbilityList');
      area.innerHTML = '';

      selectedAbilities.forEach(key => {
        const ability = abilityMaster.find(a => a.abilityid === key);
        if (!ability) return;

        const tag = document.createElement('div');
        tag.className = 'selected-ability-tag';
        tag.innerHTML = `
          ${ability.tokusei}
          <span>×</span>
        `;

        tag.querySelector('span').addEventListener('click', () => {
          selectedAbilities.delete(key);
          func.renderAbilityList();
          func.renderSelectedAbilityList();
        });

        area.appendChild(tag);
      });

      return this;
    },
    renderEngSelectedAbilityList: function () {
      if (!flag) return this;

      const area = document.getElementById('SelectedAbilityList');
      area.innerHTML = '';

      selectedAbilities.forEach(key => {
        const ability = abilityMaster.find(a => a.abilityid === key);
        if (!ability) return;

        const tag = document.createElement('div');
        tag.className = 'selected-ability-tag';
        tag.innerHTML = `
          ${ability.ability}
          <span>×</span>
        `;

        tag.querySelector('span').addEventListener('click', () => {
          selectedAbilities.delete(key);
          func.renderAbilityList();
          func.renderSelectedAbilityList();
        });

        area.appendChild(tag);
      });

      return this;
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
    searchAbilityPoke: function(){
      if(flag){
        const name = document.getElementById("TxtSearchName").value;
        const abilities = [...selectedAbilities];
        const region = document.getElementById("DdlSearchRegion").value;
        const generation = document.getElementById("DdlSearchGen").value;

        switch(jap_or_eng)
        {
          case 'JAP':
            //fetch('http://127.0.0.1:3001/api/search/ability', {
            fetch('/api/search/ability', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, abilities, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderJapSearchResult(data));
            break;
          case 'ENG':
            //fetch('http://127.0.0.1:3001/api/search/ability', {
            fetch('/api/search/ability', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, abilities, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderEngSearchResult(data));
            break;
          default:
            //fetch('http://127.0.0.1:3001/api/search/ability', {
            fetch('/api/search/ability', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, abilities, region, generation})
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
            list.sort((a, b) => a.autonum - b.autonum);
            break;

          case 'DESCENDING':
            list.sort((a, b) => b.autonum - a.autonum);
            break;

          default:
            list.sort((a, b) => a.autonum - b.autonum);
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
          <td width="5%"><a href="../NewPokedex/NewPokedex.html?poke_AUTONUM=${p.autonum}"
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
            list.sort((a, b) => a.autonum - b.autonum);
            break;

          case 'DESCENDING':
            list.sort((a, b) => b.autonum - a.autonum);
            break;

          default:
            list.sort((a, b) => a.autonum - b.autonum);
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
            htmlPageStyle = `<link rel="stylesheet" href="SearchAbilityDexBright.css">`;
            favicon.href = "SearchAbilityDexBright.png";
            break;
          case 'DARK':
            htmlPageStyle = `<link rel="stylesheet" href="SearchAbilityDexDark.css">`;
            favicon.href = "SearchAbilityDexDark.png";
            break;
          default:
            htmlPageStyle = `<link rel="stylesheet" href="SearchAbilityDexBright.css">`;
            favicon.href = "SearchAbilityDexBright.png";
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
      .initAbilityTable()
      .initRegionList()
      .initGenList()
      .searchAbilityPoke()
      .judgeStyles();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});
