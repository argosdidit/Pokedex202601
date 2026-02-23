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
  areaPageTitle,
  htmlPageTitle,
  areaSidebar,
  htmlSidebar;

  let selectedValues = [];

  const conf ={
    fieldPageTitle: `field-page-title`,
    area_sidebar: `area-sidebar`,
    search_field: `search-field`,
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
      return this;
    },
    initValueTable: function(){
      if(flag){
        fetch('http://127.0.0.1:3001/api/poke/min_max_value')
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
        html_ATTACK =
        `
        <div class="slider-row" data-type="ATTACK">
        <span class="value-label">攻撃</span>
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
        html_DEFENSE =
        `
        <div class="slider-row" data-type="DEFENSE">
        <span class="value-label">防御</span>
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
        html_SP_ATK =
        `
        <div class="slider-row" data-type="SP_ATK">
        <span class="value-label">特攻</span>
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
        html_SP_DEF =
        `
        <div class="slider-row" data-type="SP_DEF">
        <span class="value-label">特防</span>
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
        html_SPEED =
        `
        <div class="slider-row" data-type="SPEED">
        <span class="value-label">素早さ</span>
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
        html_SUM =
        `
        <div class="slider-row" data-type="SUM">
        <span class="value-label">種族値</span>
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
        fetch('http://127.0.0.1:3001/api/poke/region')
          .then(res => res.json())
          .then(regions => func.renderRegionList(regions));
      }
      return this;
    },
    renderRegionList(regions){
      if(flag){
        const ddlRegion = document.getElementById("DdlSearchRegion");

        regions.forEach(r => {
          const opt = document.createElement("option");
          opt.value = r.REGIONID;
          opt.textContent = `${r.REGIONID}: ${r.CHIHO}`;
          ddlRegion.appendChild(opt);
        });
      }
      return this;
    },
    initGenList: function(){
      if(flag){
        fetch('http://127.0.0.1:3001/api/poke/generation')
          .then(res => res.json())
          .then(gens => func.renderGenList(gens));
      }
      return this;
    },
    renderGenList: function(gens){
      if(flag){
        const ddlGen = document.getElementById("DdlSearchGen");

        gens.forEach(g => {
          const opt = document.createElement("option");
          opt.value = g.GENERATIONID;
          opt.textContent = `${g.GENERATIONID}: ${g.SEDAI}`;
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

        fetch('http://127.0.0.1:3001/api/search/value', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name, values, region, generation})
        })
        .then(res => res.json())
        .then(data => func.renderSearchResult(data));
      }
      return this;
    },
    renderSearchResult: function(list){
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
          const tr1 = document.createElement("tr");
          tr1.innerHTML =
          `
          <td width="5%" rowspan="2"><img src="${p.path_normal_front}" class="middle-each-image"></td>
          <td width="5%" rowspan="2">${p.no}</td>
          <td width="15%">${p.namae}</td>
          <td width="30%" colspan="3">${p.sugata ? p.sugata : ""}</td>
          <td width="15%">${p.tamago_group1}${p.tamago_group2 ? "・" + p.tamago_group2 : ""}</td>
          <td width="10%">${p.chiho}</td>
          <td width="5%">${p.hp}</td>
          <td width="5%">${p.attack}</td>
          <td width="5%">${p.defense}</td>
          <td width="5%"><a href="NewPokedex.html?AUTONUM=${p.autonum}">リンク</a></td>
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
    }
  };

  //検索ロジック※そう間違えたら通らない
  document.getElementById("BtnSearch").addEventListener("click", () => {
    func.searchValuePoke();
  });

  active = () => {
    func
      .init()
      .makeFieldPageTitle()
      .makeSidebarArea()
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initValueTable()
      .initRegionList()
      .initGenList()
      .searchValuePoke();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});