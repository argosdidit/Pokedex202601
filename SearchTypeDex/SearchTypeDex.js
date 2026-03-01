const PokeSearch = (() => {
  'use strict';
  let
  func,
  flag,
  active,
  areaPageTitle,
  htmlPageTitle,
  areaSidebar,
  htmlSidebar;

  let selectedTypes = [];

  const conf ={
    fieldPageTitle: `field-page-title`,
    area_sidebar: `area-sidebar`,
    search_field: `search-field`,
  };
  func = {
    init: function(){
      flag = true;
      areaSidebar = document.querySelector(`[${conf.area_sidebar}]`);
      return this;
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
    makeSidebarArea: function () {
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
            func.renderAbilityList();
          });
      }
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
        //fetch('http://127.0.0.1:3001/api/poke/region')
        fetch('/api/poke/region')
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
          opt.value = r.regionid;
          opt.textContent = `${r.regionid}: ${r.chiho}`;
          ddlRegion.appendChild(opt);
        });
      }
      return this;
    },
    initGenList: function(){
      if(flag){
        //fetch('http://127.0.0.1:3001/api/poke/generation')
        fetch('/api/poke/generation')
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
          opt.value = g.generationid;
          opt.textContent = `${g.generationid}: ${g.sedai}`;
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

        //fetch('http://127.0.0.1:3001/api/search/type', {
        fetch('/api/search/type', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name, types, selectedOption, region, generation})
        })
        .then(res => res.json())
        .then(data => func.renderSearchResult(data));
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
          <td width="5%" rowspan="2"><img src="../${p.path_normal_front}" class="middle-each-image"></td>
          <td width="5%" rowspan="2">${p.no}</td>
          <td width="15%">${p.namae}</td>
          <td width="30%" colspan="3">${p.sugata ? p.sugata : ""}</td>
          <td width="15%">${p.tamago_group1}${p.tamago_group2 ? "・" + p.tamago_group2 : ""}</td>
          <td width="10%">${p.chiho}</td>
          <td width="5%">${p.hp}</td>
          <td width="5%">${p.attack}</td>
          <td width="5%">${p.defense}</td>
          <td width="5%"><a href="../NewPokedex/NewPokedex.html?poke_autonum=${p.autonum}">リンク</a></td>
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
    func.searchTypePoke();
  });

  active = () => {
    func
      .init()
      .makeFieldPageTitle()
      .makeSidebarArea()
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initTypeTable()
      .initRegionList()
      .initGenList()
      .searchTypePoke();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});