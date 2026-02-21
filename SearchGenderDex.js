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

  let selectedGenders = [];

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
        `<h1>～ SearchGenderDex ～</h1>`;

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
    initGenderTable: function(){
      if(flag){
        fetch('http://127.0.0.1:3001/api/poke/gender')
          .then(res => res.json())
          .then(genders => func.renderGenderTable(genders));
      }
      return this;
    },
    renderGenderTable: function(genders){
      if(flag){
        const area = document.getElementById("TblSearchGender");
        area.innerHTML = "";
        
        genders.forEach(g => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.classList.add("gender-btn");
          btn.textContent = g.GENDER;
          btn.dataset.genderid = g.GENDERID;
          
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.genderid);
            
            if (selectedGenders.includes(id))
            {
              selectedGenders = selectedGenders.filter(x => x !== id);
              btn.classList.remove("selected");
            }
            else
            {
              selectedGenders.push(id);
              btn.classList.add("selected");
            }
          });
          area.appendChild(btn);
        });
      }
      return this;
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
    searchGenderPoke: function(){
      if(flag){
        const name = document.getElementById("TxtSearchName").value;
        const genders = selectedGenders;
        const region = document.getElementById("DdlSearchRegion").value;
        const generation = document.getElementById("DdlSearchGen").value;

        fetch('http://127.0.0.1:3001/api/search/gender', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name, genders, region, generation})
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
          <td width="5%" rowspan="2"><img src="${p.PATH_NORMAL_FRONT}" class="middle-each-image"></td>
          <td width="5%" rowspan="2">${p.NO}</td>
          <td width="15%">${p.NAMAE}</td>
          <td width="30%" colspan="3">${p.SUGATA ? p.SUGATA : ""}</td>
          <td width="15%">${p.TAMAGO_GROUP1}${p.TAMAGO_GROUP2 ? "・" + p.TAMAGO_GROUP2 : ""}</td>
          <td width="10%">${p.CHIHO}</td>
          <td width="5%">${p.HP}</td>
          <td width="5%">${p.ATTACK}</td>
          <td width="5%">${p.DEFENSE}</td>
          <td width="5%"><a href="NewPokedex.html?AUTONUM=${p.AUTONUM}">リンク</a></td>
          `;
          const tr2 = document.createElement("tr");
          tr2.innerHTML =
          `
          <td width="15%">${p.TAIPU1}${p.TAIPU2 ? "・" + p.TAIPU2 : ""}</td>
          <td width="10%">${p.TOKUSEI1}</td>
          <td width="10%">${p.TOKUSEI2 ? p.TOKUSEI2 : ""}</td>
          <td width="10%">${p.YUME_TOKUSEI ? p.YUME_TOKUSEI : ""}</td>
          <td>${p.GENDER}</td>
          <td>${p.SEDAI}</td>
          <td width="5%">${p.SP_ATK}</td>
          <td width="5%">${p.SP_DEF}</td>
          <td width="5%">${p.SPEED}</td>
          <td width="5%">${p.SUM}</td>
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
    func.searchGenderPoke();
  });

  active = () => {
    func
      .init()
      .makeFieldPageTitle()
      .makeSidebarArea()
      .bindMenuButton()
      .bindSidebarCloseButton()
      .bindSidebarEvents()
      .initGenderTable()
      .initRegionList()
      .initGenList()
      .searchGenderPoke();
    return;
  }
  return (active);
})();

window.addEventListener('load', function(){
  PokeSearch();
});