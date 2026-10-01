/* Valencia redesign concept — shared behaviour + catalog */
(function () {
  "use strict";

  /* ---------- data (real assortment: Swarovski / Украшения / Амулеты) ---------- */
  const PRODUCTS = [
    { id: 43175, name: "Vienna", sku: "5757739", price: 2990, isNew: true, coll: "Vienna", plating: "rhodium", size: "—", weight: "2 г",
      desc: "Перо лебедя из циркония Swarovski с родиевым покрытием. Застёжка-шарм подходит и к браслетам, и к цепочкам." },
    { id: 43178, name: "Sublima", sku: "5760562", price: 2990, isNew: true, coll: "Sublima", plating: "rhodium", size: "2,5 × 1,4 см", weight: "1,9 г",
      desc: "Выразительная звезда из сверкающих цирконов Swarovski. Родиевое покрытие подчёркивает чистый белый блеск." },
    { id: 43106, name: "Красное сердце", sku: "5742994", price: 4290, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,7 см", weight: "6,3 г",
      desc: "Кристалл насыщенного красного оттенка в золотом покрытии — самостоятельный акцент или часть набора." },
    { id: 43002, name: "Миньон Боб", sku: "5753016", price: 4290, isNew: true, coll: "Minions", plating: "gold", size: "2,8 × 1,3 см", weight: "3,7 г",
      desc: "Разноцветный кристальный Боб из коллекции Minions в золотом покрытии. © UCS LLC." },
    { id: 42835, name: "Голубой мишка", sku: "5750253", price: 5290, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,8 × 1,3 см", weight: "6,1 г",
      desc: "Синее паве и розовое кристальное сердце на родиевом покрытии." },
    { id: 42611, name: "Золотистый мишка", sku: "5743147", price: 4290, isNew: true, coll: "Idyllia", plating: "gold", size: "2,9 × 1,5 см", weight: "—",
      desc: "Цирконы Swarovski в золотом покрытии и «танцующий» камень в центре." },
    { id: 42615, name: "Фиолетовый мишка", sku: "5745610", price: 4290, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,9 × 1,5 см", weight: "5,8 г",
      desc: "Фиолетовые кристаллы и сияющий голубой камень в центре, родиевое покрытие." },
    { id: 42612, name: "Божья коровка", sku: "5743138", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,3 × 1,4 см", weight: "2 г",
      desc: "Красные и чёрные кристаллы в горошек с прозрачным кристаллом в центре." },
    { id: 42610, name: "Белое перламутровое сердце", sku: "5742960", price: 3490, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,4 × 1,4 см", weight: "2,7 г",
      desc: "С одной стороны — круглый цирконий, с другой — кристалл в форме сердца." },
    { id: 42613, name: "Арбузик", sku: "5743134", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,7 × 1 см", weight: "4,8 г",
      desc: "Ломтик арбуза: кристаллы, смола и семечки из чёрных кристаллов Swarovski ReCreated™." },
    { id: 42608, name: "Пчёлка", sku: "5743132", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,6 см", weight: "—",
      desc: "Чёрно-жёлтые полоски и прозрачные крылья из Zirconia Swarovski." },
    { id: 42607, name: "Розовый мишка", sku: "5738357", price: 6290, isNew: true, coll: "Idyllia", plating: "gold", size: "3,1 × 1,6 см", weight: "—",
      desc: "Нос-сердечко и миниатюрные клубники с золотистыми семечками." },
    { id: 42609, name: "Клевер", sku: "5743130", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,5 см", weight: "3,9 г",
      desc: "Четырёхлистник из кристаллов четырёх оттенков зелёного." },
    { id: 42291, name: "Сердце с ключом", sku: "5742957", price: 2990, isNew: false, coll: "Idyllia", plating: "rhodium", size: "3,7 × 1,1 см", weight: "2,7 г",
      desc: "Сердце и ключ по мотивам классического медальона, белый цирконий Swarovski." },
    { id: 42290, name: "Клубника", sku: "5743136", price: 3490, isNew: false, coll: "Idyllia", plating: "gold", size: "2,6 × 1,1 см", weight: "—",
      desc: "Ярко-красная ягода из кристаллов и смолы с акцентами позолоты." },
    { id: 42294, name: "Розовое сердце", sku: "5742953", price: 4290, isNew: false, coll: "Idyllia", plating: "gold", size: "2,4 × 1,5 см", weight: "7,1 г",
      desc: "Нежно-розовые кристаллы и золотистое покрытие." },
    { id: 42293, name: "Сердце с ключом", sku: "5742959", price: 3490, isNew: false, coll: "Idyllia", plating: "gold", size: "3,7 × 1,1 см", weight: "2,8 г",
      desc: "Белый цирконий Swarovski в покрытии из жёлтого золота." },
    { id: 21845, name: "Remix Collection X", sku: "5440510", price: 995, old: 1990, isNew: false, coll: "Remix", plating: "rose", size: "2 × 1 см", weight: "—",
      desc: "Буква X в прозрачном кристальном паве, покрытие из розового золота." },
    { id: 21850, name: "Remix Collection F", sku: "5437616", price: 995, old: 1990, isNew: false, coll: "Remix", plating: "rose", size: "2 × 0,5 см", weight: "—",
      desc: "Буква F в кристальном паве на карабине для стренда Remix." }
  ];
  const PLATING = { gold: "Золото", rhodium: "Родий", rose: "Розовое золото" };
  const fmt = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ") + " ₴";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- persisted state (per-viewer convenience only) ---------- */
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem("vl:" + k)) ?? d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("vl:" + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  let cart = store.get("cart", 0);
  let favs = new Set(store.get("favs", []));

  function syncCounts() {
    $$("[data-count=cart]").forEach((el) => { el.textContent = cart; el.classList.toggle("is-on", cart > 0); });
    $$("[data-count=fav]").forEach((el) => { el.textContent = favs.size; el.classList.toggle("is-on", favs.size > 0); });
  }

  let toastTimer;
  function toast(msg) {
    const t = $(".toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2600);
  }

  function addToCart(p) {
    cart += 1; store.set("cart", cart); syncCounts();
    toast("«" + p.name + "» добавлен в корзину");
  }
  function toggleFav(id, btn) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (favs.has(id)) { favs.delete(id); toast("Убрано из избранного"); }
    else { favs.add(id); toast("«" + p.name + "» в избранном"); }
    store.set("favs", [...favs]); syncCounts();
    $$('[data-fav="' + id + '"]').forEach((b) => b.setAttribute("aria-pressed", favs.has(id)));
  }

  /* ---------- card ---------- */
  const ICON_HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.6C1.6 7.3 4 4 7.4 4c2 0 3.6 1.1 4.6 2.7C13 5.1 14.6 4 16.6 4 20 4 22.4 7.3 21.2 10.9 19.5 15.9 12 20.5 12 20.5z"/></svg>';
  function card(p, i) {
    const sale = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const badge = sale ? '<span class="badge badge--sale">−' + sale + "%</span>" : p.isNew ? '<span class="badge">Новинка</span>' : "";
    return (
      '<article class="card" style="--i:' + (i || 0) + '">' +
        '<a class="card__media" href="#" data-qv="' + p.id + '" aria-label="Быстрый просмотр: Амулет ' + p.name + '">' +
          badge +
          '<img class="main" src="img/p/' + p.id + '-1.webp" alt="Амулет Swarovski «' + p.name + '»" loading="lazy" width="1000" height="1000">' +
          '<img class="alt" src="img/p/' + p.id + '-2.webp" alt="" loading="lazy" width="1000" height="1000">' +
          '<span class="prism" aria-hidden="true"></span>' +
        "</a>" +
        '<button class="fav" data-fav="' + p.id + '" aria-pressed="' + favs.has(p.id) + '" aria-label="В избранное">' + ICON_HEART + "</button>" +
        '<button class="card__quick" data-add="' + p.id + '">В корзину</button>' +
        '<div class="card__body">' +
          '<div class="card__meta"><span>' + p.coll + '</span><span class="sku">' + p.sku + "</span></div>" +
          '<h3 class="card__name"><a href="#" data-qv="' + p.id + '">' + p.name + "</a></h3>" +
          '<div class="price' + (sale ? " price--sale" : "") + '">' + fmt(p.price) + (p.old ? "<s>" + fmt(p.old) + "</s>" : "") + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ---------- quick view ---------- */
  let lastFocus = null;
  function openQV(id) {
    const qv = $(".qv");
    if (!qv) return;
    const p = PRODUCTS.find((x) => x.id === id);
    const sale = !!p.old;
    lastFocus = document.activeElement;
    $(".qv__body", qv).innerHTML =
      '<div class="qv__gallery">' +
        '<div class="qv__main"><img src="img/p/' + p.id + '-1.webp" alt="Амулет Swarovski «' + p.name + '»"></div>' +
        '<div class="qv__thumbs">' +
          [1, 2].map((n) => '<button aria-pressed="' + (n === 1) + '" data-img="img/p/' + p.id + "-" + n + '.webp" aria-label="Фото ' + n + '"><img src="img/p/' + p.id + "-" + n + '.webp" alt=""></button>').join("") +
        "</div>" +
      "</div>" +
      '<div class="qv__info">' +
        '<div class="eyebrow">Swarovski · ' + p.coll + "</div>" +
        '<h2 id="qv-title">' + p.name + "</h2>" +
        '<div class="qv__sku">Артикул ' + p.sku + "</div>" +
        '<div class="price' + (sale ? " price--sale" : "") + '">' + fmt(p.price) + (p.old ? "<s>" + fmt(p.old) + "</s>" : "") + "</div>" +
        "<p>" + p.desc + "</p>" +
        '<dl class="specs">' +
          "<dt>Покрытие</dt><dd>" + PLATING[p.plating] + "</dd>" +
          (p.size !== "—" ? "<dt>Размер</dt><dd>" + p.size + "</dd>" : "") +
          (p.weight !== "—" ? "<dt>Вес</dt><dd>" + p.weight + "</dd>" : "") +
          "<dt>Производство</dt><dd>Австрия</dd>" +
        "</dl>" +
        '<div class="qv__actions">' +
          '<button class="btn btn--solid" data-add="' + p.id + '">Добавить в корзину</button>' +
          '<button class="fav" data-fav="' + p.id + '" aria-pressed="' + favs.has(p.id) + '" aria-label="В избранное">' + ICON_HEART + "</button>" +
        "</div>" +
        '<div class="qv__note">Бесплатная доставка от 3 500 ₴ · Возврат 14 дней · Оплата частями ПриватБанк и monobank</div>' +
      "</div>";
    qv.classList.add("is-open");
    qv.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".qv__close", qv).focus();
  }
  function closeQV() {
    const qv = $(".qv");
    if (!qv || !qv.classList.contains("is-open")) return;
    qv.classList.remove("is-open");
    qv.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- global delegation ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target;
    const add = t.closest("[data-add]");
    if (add) { e.preventDefault(); addToCart(PRODUCTS.find((p) => p.id === +add.dataset.add)); return; }
    const fav = t.closest("[data-fav]");
    if (fav) { e.preventDefault(); toggleFav(+fav.dataset.fav); return; }
    const qv = t.closest("[data-qv]");
    if (qv) { e.preventDefault(); openQV(+qv.dataset.qv); return; }
    const thumb = t.closest(".qv__thumbs button");
    if (thumb) {
      $(".qv__main img").src = thumb.dataset.img;
      $$(".qv__thumbs button").forEach((b) => b.setAttribute("aria-pressed", b === thumb));
      return;
    }
    if (t.closest("[data-close-qv]")) { closeQV(); return; }
    if (t.closest("[data-menu-open]")) { $(".drawer").classList.add("is-open"); return; }
    if (t.closest("[data-menu-close]")) { $(".drawer").classList.remove("is-open"); return; }
    const dead = t.closest('a[href="#"]');
    if (dead) { e.preventDefault(); toast("В демо открыты две страницы: главная и «Амулеты»"); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeQV(); $(".drawer")?.classList.remove("is-open"); closePanels(); }
  });

  /* ---------- header stuck state ---------- */
  const header = $(".header");
  const onScroll = () => header && header.classList.toggle("is-stuck", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  $$(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));

  /* ---------- hero prism follows the pointer ---------- */
  const heroImg = $(".hero__img");
  if (heroImg && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const prism = $(".prism", heroImg);
    heroImg.addEventListener("pointermove", (e) => {
      const r = heroImg.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width; // 0..1
      prism.style.animation = "none";
      prism.style.setProperty("--px", (x * 70 - 35).toFixed(1) + "%");
    });
  }

  /* ---------- home: rail ---------- */
  const rail = $("[data-rail]");
  if (rail) rail.innerHTML = [43175, 43106, 42609, 42608, 42835, 43178].map((id, i) => card(PRODUCTS.find((p) => p.id === id), i)).join("");

  /* ---------- home: occasion chips ---------- */
  $$(".occasions .chip").forEach((c) => c.addEventListener("click", () => {
    const on = c.getAttribute("aria-pressed") !== "true";
    $$(".occasions .chip").forEach((x) => x.setAttribute("aria-pressed", "false"));
    c.setAttribute("aria-pressed", on);
  }));

  /* ---------- catalog ---------- */
  const grid = $("[data-grid]");
  function closePanels(except) {
    $$(".fpanel.is-open").forEach((p) => { if (p !== except) { p.classList.remove("is-open"); p.previousElementSibling?.setAttribute("aria-expanded", "false"); } });
  }
  if (grid) {
    const state = { coll: new Set(), plating: new Set(), price: new Set(), isNew: false, sale: false, sort: "rec" };
    const PRICE = { a: [0, 2999, "до 3 000 ₴"], b: [3000, 4499, "3 000 — 4 500 ₴"], c: [4500, 1e9, "от 4 500 ₴"] };
    const COLLS = ["Idyllia", "Vienna", "Sublima", "Minions", "Remix"];

    const match = (p, skip) =>
      (skip === "coll" || !state.coll.size || state.coll.has(p.coll)) &&
      (skip === "plating" || !state.plating.size || state.plating.has(p.plating)) &&
      (skip === "price" || !state.price.size || [...state.price].some((k) => p.price >= PRICE[k][0] && p.price <= PRICE[k][1])) &&
      (!state.isNew || p.isNew) && (!state.sale || p.old);

    function opt(group, key, label, count, extra) {
      const on = state[group].has(key);
      return '<button class="opt" role="menuitemcheckbox" aria-checked="' + on + '" data-g="' + group + '" data-k="' + key + '"' + (count || on ? "" : " disabled") + '>' +
        '<span class="lbl"><span class="box"></span>' + (extra || "") + label + '</span><span class="c">' + count + "</span></button>";
    }
    function renderPanels() {
      const pool = (g) => PRODUCTS.filter((p) => match(p, g));
      $("[data-panel=coll]").innerHTML = '<div class="fpanel__title">Коллекция</div>' + COLLS.map((c) => opt("coll", c, c, pool("coll").filter((p) => p.coll === c).length)).join("");
      $("[data-panel=plating]").innerHTML = '<div class="fpanel__title">Покрытие</div>' + Object.keys(PLATING).map((k) => opt("plating", k, PLATING[k], pool("plating").filter((p) => p.plating === k).length, '<span class="sw sw--' + k + '"></span>')).join("");
      $("[data-panel=price]").innerHTML = '<div class="fpanel__title">Цена</div>' + Object.keys(PRICE).map((k) => opt("price", k, PRICE[k][2], pool("price").filter((p) => p.price >= PRICE[k][0] && p.price <= PRICE[k][1]).length)).join("");
      ["coll", "plating", "price"].forEach((g) => {
        const n = $('[data-fbtn="' + g + '"] .n');
        n.textContent = state[g].size; n.hidden = !state[g].size;
      });
      $("[data-toggle=isNew]").setAttribute("aria-checked", state.isNew);
      $("[data-toggle=sale]").setAttribute("aria-checked", state.sale);
    }
    function renderActive() {
      const chips = [];
      state.coll.forEach((k) => chips.push(["coll", k, k]));
      state.plating.forEach((k) => chips.push(["plating", k, PLATING[k]]));
      state.price.forEach((k) => chips.push(["price", k, PRICE[k][2]]));
      if (state.isNew) chips.push(["isNew", "", "Новинки"]);
      if (state.sale) chips.push(["sale", "", "Со скидкой"]);
      const x = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 1l8 8M9 1L1 9"/></svg>';
      $("[data-active]").innerHTML = chips.length
        ? chips.map((c) => '<button class="chip" data-rm="' + c[0] + "|" + c[1] + '" aria-label="Убрать фильтр ' + c[2] + '">' + c[2] + x + "</button>").join("") + '<button class="reset" data-reset>Сбросить всё</button>'
        : "";
    }
    function render() {
      let list = PRODUCTS.filter((p) => match(p));
      const s = state.sort;
      if (s === "new") list = list.slice().sort((a, b) => b.isNew - a.isNew || b.id - a.id);
      if (s === "asc") list = list.slice().sort((a, b) => a.price - b.price);
      if (s === "desc") list = list.slice().sort((a, b) => b.price - a.price);
      if (s === "name") list = list.slice().sort((a, b) => a.name.localeCompare(b.name, "ru"));
      const pristine = list.length === PRODUCTS.length && s === "rec";
      let html = list.map((p, i) => card(p, i)).join("");
      if (pristine) {
        const cards = list.map((p, i) => card(p, i));
        cards.splice(6, 0,
          '<a class="editorial" href="#" style="--i:6">' +
            '<img src="img/p/43175-2.webp" alt="Модель в браслетах и колье Swarovski" loading="lazy">' +
            '<div class="editorial__text"><div class="eyebrow">Как носить</div><h3>Соберите свою историю</h3>' +
            "<p>Застёжка амулета подходит к браслетам, цепочкам и колье Swarovski — один шарм или целый набор.</p></div>" +
          "</a>");
        cards.push(
          '<a class="endtile" href="#" style="--i:20">' +
            '<div><div class="eyebrow">Основа для амулетов</div><h3>Браслеты и цепочки Swarovski</h3></div>' +
            '<span class="link-arrow">Смотреть <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor"><path d="M0 5h13M9 1l4 4-4 4"/></svg></span>' +
          "</a>");
        html = cards.join("");
      }
      if (!list.length) {
        html = '<div class="empty"><h3>Таких амулетов нет</h3><p>Под выбранные фильтры не подошло ни одно изделие.</p><button class="btn btn--ghost" data-reset>Сбросить фильтры</button></div>';
      }
      grid.innerHTML = html;
      const word = (n) => (n % 10 === 1 && n % 100 !== 11 ? "изделие" : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? "изделия" : "изделий");
      $$("[data-result]").forEach((el) => (el.textContent = list.length + " " + word(list.length)));
      $("[data-pager-bar]").style.width = (list.length / PRODUCTS.length) * 100 + "%";
      $("[data-pager-text]").textContent = "Показано " + list.length + " из " + list.length;
      renderPanels();
      renderActive();
    }

    document.addEventListener("click", (e) => {
      const t = e.target;
      const fb = t.closest("[data-fbtn]");
      if (fb) {
        const panel = fb.nextElementSibling;
        const open = !panel.classList.contains("is-open");
        closePanels(panel);
        panel.classList.toggle("is-open", open);
        fb.setAttribute("aria-expanded", open);
        return;
      }
      const o = t.closest(".opt");
      if (o && !o.disabled) {
        const set = state[o.dataset.g];
        set.has(o.dataset.k) ? set.delete(o.dataset.k) : set.add(o.dataset.k);
        render();
        return;
      }
      const tg = t.closest("[data-toggle]");
      if (tg) { state[tg.dataset.toggle] = !state[tg.dataset.toggle]; render(); return; }
      const rm = t.closest("[data-rm]");
      if (rm) {
        const [g, k] = rm.dataset.rm.split("|");
        if (g === "isNew" || g === "sale") state[g] = false; else state[g].delete(k);
        render(); return;
      }
      if (t.closest("[data-reset]")) {
        state.coll.clear(); state.plating.clear(); state.price.clear(); state.isNew = state.sale = false;
        render(); return;
      }
      const dn = t.closest("[data-density]");
      if (dn) {
        grid.style.setProperty("--cols", dn.dataset.density);
        $$("[data-density]").forEach((b) => b.setAttribute("aria-pressed", b === dn));
        store.set("cols", dn.dataset.density);
        return;
      }
      if (t.closest("[data-sheet-open]")) { $(".filters").classList.add("is-sheet"); document.body.style.overflow = "hidden"; return; }
      if (t.closest("[data-sheet-close]")) { $(".filters").classList.remove("is-sheet"); document.body.style.overflow = ""; return; }
      if (!t.closest(".fgroup")) closePanels();
    });
    $("[data-sort]").addEventListener("change", (e) => { state.sort = e.target.value; render(); });

    const cols = store.get("cols", "4");
    grid.style.setProperty("--cols", cols);
    $$("[data-density]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.density === cols));
    render();
  }

  syncCounts();
})();
