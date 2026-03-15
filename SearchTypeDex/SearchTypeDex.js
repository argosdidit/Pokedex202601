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
  htmlPageStyle,
  htmlPageTitle,
  htmlSettingCommands,
  htmlDecisionButton,
  areaSidebar,
  htmlSidebar,
  
  jap_or_eng,
  bright_or_dark,
  normal_or_shiny;

  let selectedTypes = [];

  const conf ={
    fieldPageStyle: `field-page-style`,
    fieldPageTitle: `field-page-title`,
    fieldSettingCommands: `field-setting-commands`,
    fieldDecisionButton: `field-decision-button`,
    area_sidebar: `area-sidebar`,
    search_field: `search-field`,
  };
  func = {
    init: function(){
      flag = true;
      areaSidebar = document.querySelector(`[${conf.area_sidebar}]`);

      jap_or_eng = localStorage.getItem("selectedLanguage") || 'JAP';
      bright_or_dark = localStorage.getItem("selectedWindow") || 'BRIGHT';
      normal_or_shiny = localStorage.getItem("selectedImage") || 'NORMAL';

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
        </div>
        `;

        areaSettingCommands.insertAdjacentHTML('beforeend', htmlSettingCommands);

        const selectedBtnLanguage = document.getElementById('BtnLanguage');
        const selectedBtnWindow = document.getElementById('BtnWindow');
        const selectedBtnImage = document.getElementById('BtnImage');

        // ★ localStorage から読んだ状態をチェックに反映
        selectedBtnLanguage.checked = (jap_or_eng === 'ENG');
        selectedBtnWindow.checked   = (bright_or_dark === 'DARK');
        selectedBtnImage.checked    = (normal_or_shiny === 'SHINY');
        
        // ★ ラベルも一度現在状態で更新
        func.updateLabels();
        selectedBtnLanguage.addEventListener('click', func.updateLabels);
        selectedBtnWindow.addEventListener('click', func.updateLabels);
        selectedBtnImage.addEventListener('click', func.updateLabels);
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
        <a id="decisionButton" href="../SearchTypeDex/SearchTypeDex.html">
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
        let newURL = `../SearchTypeDex/SearchTypeDex.html`;
        history.replaceState(null, "", newURL);
      }
      return this;
    },
    updateLabels: function() {
      const btnLanguage = document.getElementById('BtnLanguage');
      const btnWindow = document.getElementById('BtnWindow');
      const btnImage = document.getElementById('BtnImage');
      
      const lblLanguage = btnLanguage.nextElementSibling;
      const lblWindow = btnWindow.nextElementSibling;
      const lblImage = btnImage.nextElementSibling;
      
      // まず状態を更新
      jap_or_eng = btnLanguage.checked ? 'ENG' : 'JAP';
      bright_or_dark = btnWindow.checked ? 'DARK' : 'BRIGHT';
      normal_or_shiny = btnImage.checked ? 'SHINY' : 'NORMAL';

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

      localStorage.setItem('selectedLanguage', jap_or_eng);
      localStorage.setItem('selectedWindow', bright_or_dark);
      localStorage.setItem('selectedImage', normal_or_shiny);
    },
    makeFieldPageTitle: function(){
      if(flag){
        areaPageTitle = document.querySelector(`[${conf.fieldPageTitle}]`);
        htmlPageTitle =
        `<h1>～ SearchTypeDex ～</h1>`;

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
    initTypeTable: function(){
      if(flag){
        //fetch('http://127.0.0.1:3001/api/poke/type')
        fetch('/api/poke/type')
          .then(res => res.json())
          .then(types => func.renderTypeTable(types).renderSelectOption());
      }
      return this;
    },
    renderTypeTable: function(types){
      if(flag){
        const areaTypes = document.getElementById('TblSearchType');
        areaTypes.innerHTML = "";

        let row;
        types.forEach((t, i) => {
          if(i % 6 === 0){
            row = document.createElement("div");
            row.classList.add("type-row");
            areaTypes.appendChild(row);
          }
          const img = document.createElement("img");
          img.src= "../" + t.pathtype;
          img.dataset.typeid = t.typeid;
          img.classList.add("type-icon");
          img.addEventListener("click", () => func.toggleTypeSelection(img));
          row.appendChild(img);
        });
      }
      return this;
    },
    renderSelectOption: function(){
      if(flag){
        const areaTypes = document.getElementById('TblSearchType');
        let htmlSelectOption =
        `
        <br>
        <div class="type_option">
        <input type="radio" id="combination" name="type_selection" value="combination"><label for="combination">組み合わせ</label>
        <input type="radio" id="single" name="type_selection" value="single"><label for="single">単タイプ</label>
        <input type="radio" id="type1" name="type_selection" value="type1"><label for="type1">第1タイプ</label>
        <input type="radio" id="type2" name="type_selection" value="type2"><label for="type2">第2タイプ</label>
        </div>
        `;
        areaTypes.insertAdjacentHTML("beforeend", htmlSelectOption);
        document.getElementById('combination').checked = true;
      }
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
    //組み合わせ, 単体タイプ, 第1タイプ, 第2タイプ
    searchTypePoke: function(){
      if(flag){
        const name = document.getElementById("TxtSearchName").value;
        const types = selectedTypes;
        const region = document.getElementById("DdlSearchRegion").value;
        const generation = document.getElementById("DdlSearchGen").value;
        const selectedOption = document.querySelector('input[name="type_selection"]:checked')?.value;

        switch(jap_or_eng)
        {
          case 'JAP':
            //fetch('http://127.0.0.1:3001/api/search/type', {
            fetch('/api/search/type', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, types, selectedOption, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderJapSearchResult(data));
            break;
          case 'ENG':
            //fetch('http://127.0.0.1:3001/api/search/type', {
            fetch('/api/search/type', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, types, selectedOption, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderEngSearchResult(data));
            break;
          default:
            //fetch('http://127.0.0.1:3001/api/search/type', {
            fetch('/api/search/type', {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({name, types, selectedOption, region, generation})
            })
            .then(res => res.json())
            .then(data => func.renderJapSearchResult(data));
            break;
        }
      }
      return this;
    },
    toggleTypeSelection: function(img){
      if(flag){
        const typeId = Number(img.dataset.typeid);

        if(selectedTypes.includes(typeId))
        {
          selectedTypes = selectedTypes.filter(x => x !== typeId);
          img.classList.remove("selected");
        }
        else
        {
          selectedTypes.push(typeId);
          img.classList.add("selected");
        }
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
        
        switch(bright_or_dark)
        {
          case 'BRIGHT':
            htmlPageStyle =
            `
            <link rel="stylesheet" href="SearchTypeDexBright.css">
            <link rel="icon" href="SearchTypeDexBright.png">
            `;
            break;
          case 'DARK':
            htmlPageStyle =
            `
            <link rel="stylesheet" href="SearchTypeDexDark.css">
            <link rel="icon" href="SearchTypeDexDark.png">
            `;
            break;
          default:
            htmlPageStyle =
            `
            <link rel="stylesheet" href="SearchTypeDexBright.css">
            <link rel="icon" href="SearchTypeDexBright.png">
            `;
            break;
        }
        areaPageStyle.insertAdjacentHTML('beforeend', htmlPageStyle);
      }
      return this;
    }
  };

  //検索ロジック※そう間違えたら通らない
  document.getElementById("BtnSearch").addEventListener("click", () => {
    func.searchTypePoke();
  });

  active = () => {
    func
      .init()
      .makeFieldPageTitle()
      .makeSettingCommands()
      .makeDecisionButton();
    switch(jap_or_eng)
    {
      case 'JAP':
        func.makeJapSidebarArea();
        break;
      case 'ENG':
        func.makeEngSidebarArea();
        break;
      default:
        func.makeJapSidebarArea();
        break;
    }
    func
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initTypeTable()
      .initRegionList()
      .initGenList()
      .searchTypePoke()
      .judgeStyles();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});
