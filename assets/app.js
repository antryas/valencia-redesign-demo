/* Valencia redesign concept v3 "Вітрина" — data, cart, favourites, quick view, vitrine, catalog */
(function () {
  "use strict";
  if (location.search.includes("shot")) document.documentElement.classList.add("shot");

  /* ---------- data: Swarovski / Прикраси / Амулети (official UA texts from valencia.com.ua/uk) ---------- */
  const PRODUCTS = [
    { id: 43175, name: "Vienna", sku: "5757739", price: 2990, isNew: true, coll: "Vienna", plating: "rhodium", size: "3,5 × 1,1 см", weight: "2 г",
      desc: "Амулет Swarovski «Vienna» виготовлений із фірмового цирконію Swarovski з родієвим покриттям, що надає виробу елегантного білого відтінку. Дизайн натхненний образом лебединого пера, що відображає естетику природи та традиції майстерності колекції Vienna. Спеціальна застібка-шарм дозволяє носити амулет як на браслетах, так і на ланцюжках." },
    { id: 43178, name: "Sublima", sku: "5760562", price: 2990, isNew: true, coll: "Sublima", plating: "rhodium", size: "2,5 × 1,4 см", weight: "1,9 г",
      desc: "Амулет Swarovski «Sublima» виконаний у вигляді виразної зірки та прикрашений блискучими цирконами Swarovski. Родієве покриття підкреслює чистоту білого кольору та надає виробу витонченого блиску. Спеціальна застібка-шарм дозволяє легко поєднувати амулет із різними браслетами або ланцюжками." },
    { id: 43106, name: "Червоне серце", sku: "5742994", price: 4290, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,7 см", weight: "6,3 г",
      desc: "Амулет Swarovski «Червоне серце» з колекції Idyllia виготовлений із кристала насиченого червоного відтінку та доповнений витонченим золотим покриттям. Компактний розмір дозволяє носити прикрасу як самостійний акцент або поєднувати її з іншими аксесуарами." },
    { id: 43002, name: "Міньйон Боб", sku: "5753016", price: 4290, isNew: true, coll: "Minions", plating: "gold", size: "2,8 × 1,3 см", weight: "3,7 г",
      desc: "Амулет Swarovski «Міньйон Боб» виготовлений із кристалу з яскравим різнокольоровим оформленням та доповнений золотим покриттям, що надає виробу виразного блиску. Захищено авторськими правами © UCS LLC." },
    { id: 42835, name: "Блакитний ведмедик", sku: "5750253", price: 5290, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,8 × 1,3 см", weight: "6,1 г",
      desc: "Амулет Swarovski «Блакитний ведмедик» із колекції Idyllia виготовлений із кристалів із родієвим покриттям і вирізняється витонченим поєднанням синього паве та рожевого кристала у формі серця. Спеціально розроблена застібка дозволяє носити його як на намистах, так і на браслетах." },
    { id: 42611, name: "Золотистий ведмедик", sku: "5743147", price: 4290, isNew: true, coll: "Idyllia", plating: "gold", size: "2,9 × 1,5 см", weight: "5,7 г",
      desc: "Амулет Swarovski «Золотистий ведмедик» із колекції Idyllia виготовлений із кристалів Zirconia Swarovski та покритий золотом. Центральний елемент — сяючий танцюючий камінь, що гармонійно доповнює образ." },
    { id: 42615, name: "Фіолетовий ведмедик", sku: "5745610", price: 4290, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,9 × 1,5 см", weight: "5,8 г",
      desc: "Амулет Swarovski «Фіолетовий ведмедик» із колекції Idyllia виготовлений із фірмового кристала Zirconia Swarovski з родієвим покриттям. Фіолетові кристали гармонійно поєднуються з сяючим блакитним каменем у центрі." },
    { id: 42612, name: "Сонечко", sku: "5743138", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,3 × 1,4 см", weight: "2 г",
      desc: "Амулет Swarovski «Сонечко» з колекції Idyllia виготовлений із кристалів насиченого червоного кольору з витонченим золотим покриттям. Особливу увагу привертає поєднання червоних і чорних кристалів у горошок та сяючий прозорий кристал у центрі." },
    { id: 42610, name: "Біле перламутрове серце", sku: "5742960", price: 3490, isNew: true, coll: "Idyllia", plating: "rhodium", size: "2,4 × 1,4 см", weight: "2,7 г",
      desc: "Амулет Swarovski «Біле перламутрове серце» з колекції Idyllia виготовлений із цирконію Swarovski та прикрашений родієвим покриттям. Одна сторона прикраси декорована круглим цирконієм, інша — кристалом у формі серця." },
    { id: 42613, name: "Кавунчик", sku: "5743134", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,7 × 1 см", weight: "4,8 г",
      desc: "Амулет Swarovski «Кавунчик» із колекції Idyllia виконаний у вигляді яскравого шматочка кавуна з виразним поєднанням рожевих і зелених відтінків. Для оздоблення використано кристали та смолу, а реалістичні насіння виконані з чорних кристалів Swarovski ReCreated™." },
    { id: 42608, name: "Бджілка", sku: "5743132", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,6 см", weight: "2,8 г",
      desc: "Амулет Swarovski «Бджілка» з колекції Idyllia виконаний у вигляді мініатюрної бджілки з витонченими чорно-жовтими смужками та прозорими крильцями з кристалів Zirconia Swarovski. Золоте покриття надає прикрасі елегантного блиску." },
    { id: 42607, name: "Рожевий ведмедик", sku: "5738357", price: 6290, isNew: true, coll: "Idyllia", plating: "gold", size: "3,1 × 1,6 см", weight: "11,8 г",
      desc: "Амулет Swarovski «Рожевий ведмедик» із колекції Idyllia виготовлений із кристалів із витонченим золотим покриттям. Привертають увагу декоративні деталі — ніс у формі серця та мініатюрні полуниці із золотистими насінинами." },
    { id: 42609, name: "Конюшина", sku: "5743130", price: 3490, isNew: true, coll: "Idyllia", plating: "gold", size: "2,5 × 1,5 см", weight: "3,9 г",
      desc: "Амулет Swarovski «Конюшина» з колекції Idyllia виконаний у витонченій формі чотирилистої конюшини. Кристали чотирьох відтінків зеленого створюють виразний об’ємний ефект, а золоте покриття підкреслює блиск матеріалів." },
    { id: 42291, name: "Серце з ключем", sku: "5742957", price: 2990, isNew: false, coll: "Idyllia", plating: "rhodium", size: "3,7 × 1,1 см", weight: "2,7 г",
      desc: "Амулет Swarovski «Серце з ключем» із колекції Idyllia виготовлений із білого цирконію Swarovski та прикрашений родієвим покриттям. Центральний елемент у вигляді серця та ключа натхненний класичним медальйоном." },
    { id: 42290, name: "Полуниця", sku: "5743136", price: 3490, isNew: false, coll: "Idyllia", plating: "gold", size: "2,6 × 1,1 см", weight: "4 г",
      desc: "Амулет Swarovski «Полуниця» з колекції Idyllia виконаний у яскравому червоному кольорі з використанням кристалів та смоли, а позолочені акценти надають виробу виразності." },
    { id: 42294, name: "Рожеве серце", sku: "5742953", price: 4290, isNew: false, coll: "Idyllia", plating: "gold", size: "2,4 × 1,5 см", weight: "7,1 г",
      desc: "Амулет Swarovski «Рожеве серце» з колекції Idyllia виготовлений із кристалів ніжного рожевого відтінку та прикрашений золотистим покриттям. Серцеподібна форма та прозорі кристали надають прикрасі виразності." },
    { id: 42293, name: "Серце з ключем", sku: "5742959", price: 3490, isNew: false, coll: "Idyllia", plating: "gold", size: "3,7 × 1,1 см", weight: "2,8 г",
      desc: "Амулет Swarovski «Серце з ключем» із колекції Idyllia виконаний у витонченій формі серця, доповненій ключем. Центральний елемент — цирконій Swarovski білого кольору, який гармонійно поєднується з покриттям із жовтого золота." },
    { id: 21845, name: "Remix Collection X", sku: "5440510", price: 995, old: 1990, isNew: false, coll: "Remix Collection", plating: "rose", size: "2 × 1 см", weight: "",
      desc: "Амулет Swarovski з колекції Remix Collection виконаний у формі літери X і прикрашений прозорим кришталевим паве. Покриття з рожевого золота гармонійно поєднується з білим кольором кристалів. Застібка-карабін забезпечує надійну фіксацію на ланцюжках Remix або інших виробах Swarovski." },
    { id: 21850, name: "Remix Collection F", sku: "5437616", price: 995, old: 1990, isNew: false, coll: "Remix Collection", plating: "rose", size: "2 × 0,5 см", weight: "",
      desc: "Амулет Swarovski з колекції Remix Collection виконаний у вигляді підвіски у формі літери F і прикрашений прозорим кришталевим паве. Застібка-карабін забезпечує надійну фіксацію на стрінгу Remix або інших прикрасах Swarovski." }
  ];
  const byId = (id) => PRODUCTS.find((p) => p.id === +id);
  const PLATING = { gold: "Золото", rhodium: "Родій", rose: "Рожеве золото" };
  const fmt = (n) => n.toLocaleString("uk-UA").replace(/\s/g, " ") + " ₴";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const IMG = "img/";
  const VIT = "img/vit/";
  // Ukrainian plural: 1 виріб, 2–4 вироби, 5+ виробів
  const plural = (n, one, few, many) => {
    const a = n % 10, b = n % 100;
    return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many;
  };
  const items = (n) => n + " " + plural(n, "виріб", "вироби", "виробів");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ICON = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.6C1.6 7.3 4 4 7.4 4c2 0 3.6 1.1 4.6 2.7C13 5.1 14.6 4 16.6 4 20 4 22.4 7.3 21.2 10.9 19.5 15.9 12 20.5 12 20.5z"/></svg>',
    plus: '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0v12M0 6h12"/></svg>',
    minus: '<svg viewBox="0 0 12 12" aria-hidden="true" style="width:10px;height:10px;stroke:currentColor;stroke-width:1.3"><path d="M0 6h12"/></svg>',
    plus2: '<svg viewBox="0 0 12 12" aria-hidden="true" style="width:10px;height:10px;stroke:currentColor;stroke-width:1.3"><path d="M6 0v12M0 6h12"/></svg>',
    x: '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11"/></svg>',
    arrow: '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h17M12.5.5 17 5l-4.5 4.5"/></svg>'
  };

  /* ---------- persisted state (per-viewer convenience only) ---------- */
  const store = {
    get(k, d) { try { const v = JSON.parse(localStorage.getItem("vl3:" + k)); return v == null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("vl3:" + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  let cart = store.get("cart", {});
  if (typeof cart !== "object" || Array.isArray(cart)) cart = {};
  Object.keys(cart).forEach((k) => { if (!byId(k) || !(cart[k] > 0)) delete cart[k]; });
  const favs = new Set(store.get("favs", []).filter((id) => byId(id)));
  const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = () => Object.keys(cart).reduce((s, id) => s + byId(id).price * cart[id], 0);

  function syncCounts(bump) {
    const c = cartCount();
    $$("[data-count=cart]").forEach((el) => { el.textContent = c; el.classList.toggle("is-on", c > 0); });
    $$("[data-count=fav]").forEach((el) => { el.textContent = favs.size; el.classList.toggle("is-on", favs.size > 0); });
    $$(".bag").forEach((b) => b.setAttribute("aria-label", "Кошик: " + c));
    if (bump && !reduce) $$(".bag").forEach((el) => { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); });
  }

  let toastTimer;
  function toast(msg) {
    const t = $(".toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2800);
  }
  const DEMO = "У демо відкрито дві сторінки: головна та категорія „Амулети“";

  function addToCart(id) {
    const p = byId(id);
    cart[p.id] = (cart[p.id] || 0) + 1;
    store.set("cart", cart); syncCounts(true); renderPanel();
    toast("«" + p.name + "» додано в кошик");
  }
  function setQty(id, q) {
    if (q <= 0) delete cart[id]; else cart[id] = q;
    store.set("cart", cart); syncCounts(); renderPanel();
  }
  function toggleFav(id) {
    const p = byId(id);
    if (favs.has(p.id)) { favs.delete(p.id); toast("Прибрано з обраного"); }
    else { favs.add(p.id); toast("«" + p.name + "» додано в обране"); }
    store.set("favs", [...favs]); syncCounts(); renderPanel();
    $$('[data-fav="' + p.id + '"]').forEach((b) => {
      b.setAttribute("aria-pressed", favs.has(p.id));
      b.setAttribute("aria-label", (favs.has(p.id) ? "Прибрати з обраного: " : "Додати в обране: ") + p.name);
    });
  }

  /* ---------- product card ---------- */
  function priceHTML(p) {
    return '<div class="price' + (p.old ? " price--sale" : "") + '">' + (p.old ? "<b>" + fmt(p.price) + "</b><s>" + fmt(p.old) + "</s>" : fmt(p.price)) + "</div>";
  }
  function favBtn(p, cls) {
    const on = favs.has(p.id);
    return '<button class="' + cls + '" data-fav="' + p.id + '" aria-pressed="' + on + '" aria-label="' + (on ? "Прибрати з обраного: " : "Додати в обране: ") + esc(p.name) + '">' + ICON.heart + "</button>";
  }
  function card(p, i) {
    const sale = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const tags = (p.isNew ? '<span class="tag">Новинка</span>' : "") + (sale ? '<span class="tag tag--inv">−' + sale + "%</span>" : "");
    const twin = p.id === 42291 || p.id === 42293 ? "<small>" + PLATING[p.plating] + "</small>" : "";
    return (
      '<article class="pc" style="--d:' + (i % 4) + '">' +
        '<a class="pc__media" href="#" data-qv="' + p.id + '" aria-label="Швидкий перегляд: ' + esc(p.name) + '">' +
          (tags ? '<span class="tags">' + tags + "</span>" : "") +
          '<img class="a" src="' + IMG + "cut/" + p.id + '.webp" alt="Амулет Swarovski «' + esc(p.name) + '»" loading="lazy" width="1000" height="1000">' +
          '<img class="b" src="' + IMG + "p/" + p.id + '-2.webp" alt="" loading="lazy" width="1000" height="1000">' +
        "</a>" +
        favBtn(p, "pc__fav") +
        '<div class="pc__addwrap"><button class="pc__add" data-add="' + p.id + '">Додати в кошик</button></div>' +
        '<button class="pc__plus" data-add="' + p.id + '" aria-label="Додати в кошик: ' + esc(p.name) + '">' + ICON.plus + "</button>" +
        '<div class="pc__info">' +
          '<div class="pc__meta label"><span>' + p.coll + '</span><span class="sku">' + p.sku + "</span></div>" +
          '<h3 class="pc__name"><a href="#" data-qv="' + p.id + '">' + esc(p.name) + "</a>" + twin + "</h3>" +
          priceHTML(p) +
        "</div>" +
      "</article>"
    );
  }

  /* ---------- dialogs: focus handling ---------- */
  const FOCUSABLE = 'a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])';
  let openDialog = null, lastFocus = null;
  function trap(e) {
    if (e.key !== "Tab" || !openDialog) return;
    const f = $$(FOCUSABLE, openDialog).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function showDialog(root, box, focusEl) {
    if (openDialog && openDialog !== box) closeAll(true);
    lastFocus = lastFocus || document.activeElement;
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    openDialog = box;
    setTimeout(() => (focusEl || box).focus(), 60);
  }
  function closeAll(keepFocus) {
    $$(".qv.is-open, .panel.is-open, .menu.is-open").forEach((el) => { el.classList.remove("is-open"); el.setAttribute("aria-hidden", "true"); });
    document.body.style.overflow = "";
    openDialog = null;
    if (!keepFocus && lastFocus) { lastFocus.focus(); lastFocus = null; }
  }

  /* ---------- quick view ---------- */
  function openQV(id) {
    const qv = $(".qv");
    if (!qv) return;
    const p = byId(id);
    $(".qv__body", qv).innerHTML =
      '<div class="qv__media is-dark" data-qv-media>' +
        '<div class="qv__view" data-qv-view><img class="cut" src="' + VIT + p.id + '.webp" alt="Амулет Swarovski «' + esc(p.name) + '»"></div>' +
        '<div class="qv__views" role="group" aria-label="Вигляд">' +
          '<button aria-pressed="true" data-view="cut">Вітрина</button>' +
          '<button aria-pressed="false" data-view="1">Виріб</button>' +
          '<button aria-pressed="false" data-view="2">На моделі</button>' +
        "</div>" +
      "</div>" +
      '<div class="qv__info">' +
        '<div class="label">Swarovski · ' + p.coll + "</div>" +
        '<h2 id="qv-title">' + esc(p.name) + "</h2>" +
        '<div class="label" style="color:var(--graphite)">Арт. ' + p.sku + (p.isNew ? " · Новинка" : "") + "</div>" +
        priceHTML(p) +
        "<p>" + esc(p.desc) + "</p>" +
        '<dl class="specs label">' +
          "<dt>Колекція</dt><dd>" + p.coll + "</dd>" +
          "<dt>Покриття</dt><dd>" + PLATING[p.plating] + "</dd>" +
          "<dt>Розмір</dt><dd>" + p.size + "</dd>" +
          (p.weight ? "<dt>Вага</dt><dd>" + p.weight + "</dd>" : "") +
          "<dt>Країна-виробник</dt><dd>Австрія</dd>" +
        "</dl>" +
        '<div class="qv__actions">' +
          '<button class="btn" data-add="' + p.id + '">Додати в кошик · ' + fmt(p.price) + "</button>" +
          favBtn(p, "fav fav--box") +
        "</div>" +
        '<div class="qv__note label">Безкоштовна доставка від 3 500 ₴ · Повернення 14 днів · Оплата частинами</div>' +
      "</div>";
    qv.dataset.pid = p.id;
    showDialog(qv, $(".qv__box", qv), $(".qv__close", qv));
  }
  function setView(btn) {
    const qv = $(".qv"), id = qv.dataset.pid, v = btn.dataset.view, p = byId(id);
    const media = $("[data-qv-media]", qv);
    media.classList.toggle("is-dark", v === "cut");
    $("[data-qv-view]", qv).innerHTML = v === "cut"
      ? '<img class="cut" src="' + VIT + id + '.webp" alt="Амулет Swarovski «' + esc(p.name) + '»">'
      : '<img src="' + IMG + "p/" + id + "-" + v + '.webp" alt="' + (v === "2" ? "Амулет «" + esc(p.name) + "» на моделі" : "Амулет «" + esc(p.name) + "» на білому тлі") + '">';
    $$("[data-view]", qv).forEach((b) => b.setAttribute("aria-pressed", b === btn));
  }

  /* ---------- side panel: cart & favourites ---------- */
  let tab = "cart";
  function openPanel(which) {
    tab = which || "cart";
    renderPanel();
    const panel = $("[data-side]");
    showDialog(panel, $(".panel__box", panel), $('[data-tab="' + tab + '"]', panel));
  }
  function lineHTML(p, mode) {
    const q = cart[p.id] || 0;
    return (
      '<div class="line">' +
        '<a class="line__img" href="#" data-qv="' + p.id + '" aria-label="Швидкий перегляд: ' + esc(p.name) + '"><img src="' + IMG + "p/" + p.id + '-1.webp" alt="" loading="lazy"></a>' +
        "<div>" +
          '<div class="line__top"><div class="label line__meta">' + p.coll + " · " + p.sku + "</div>" +
            (mode === "fav" ? '<button class="line__x" data-fav="' + p.id + '" aria-pressed="true" aria-label="Прибрати з обраного: ' + esc(p.name) + '">' + ICON.x + "</button>" : "") +
          "</div>" +
          '<div class="line__name">' + esc(p.name) + "</div>" +
          '<div class="label line__meta">' + PLATING[p.plating] + ' · <span class="u">' + p.size + "</span></div>" +
          '<div class="line__bot">' +
            (mode === "cart"
              ? '<div class="qty"><button data-qty="' + p.id + '" data-d="-1" aria-label="Менше">' + ICON.minus + "</button><output aria-label=\"Кількість\">" + q + '</output><button data-qty="' + p.id + '" data-d="1" aria-label="Більше">' + ICON.plus2 + "</button></div>"
              : '<button class="line__rm" data-add="' + p.id + '">У кошик</button>') +
            '<div class="price">' + fmt(p.price * (mode === "cart" ? q : 1)) + "</div>" +
          "</div>" +
          (mode === "cart" ? '<button class="line__rm" style="margin-top:10px" data-qty="' + p.id + '" data-d="-999">Видалити</button>' : "") +
        "</div>" +
      "</div>"
    );
  }
  function renderPanel() {
    const panel = $("[data-side]");
    if (!panel) return;
    $$("[data-tab]", panel).forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
    const body = $("[data-panel-body]", panel), foot = $("[data-panel-foot]", panel);
    if (tab === "cart") {
      const ids = Object.keys(cart);
      if (!ids.length) {
        body.innerHTML = '<div class="empty-state"><span class="label" style="color:var(--graphite)">Кошик</span><h3>Поки порожньо</h3><p>Додайте амулет зі сторінки каталогу — він з’явиться тут.</p><a class="btn" href="amulety.html">До амулетів</a></div>';
        foot.hidden = true;
        return;
      }
      body.innerHTML = ids.map((id) => lineHTML(byId(id), "cart")).join("");
      const total = cartTotal(), left = Math.max(0, 3500 - total);
      foot.hidden = false;
      foot.innerHTML =
        '<div class="ship label"><span>' + (left ? "До безкоштовної доставки — ще " + fmt(left) : "Доставка безкоштовна") + '</span><div class="ship__bar"><i style="width:' + Math.min(100, (total / 3500) * 100) + '%"></i></div></div>' +
        '<div class="sum"><span>Разом · ' + items(cartCount()) + "</span><b>" + fmt(total) + "</b></div>" +
        '<button class="btn btn--block" data-checkout>Оформити замовлення</button>' +
        '<div class="panel__note label">Оплата частинами — ПриватБанк і monobank</div>';
    } else {
      foot.hidden = true;
      body.innerHTML = favs.size
        ? [...favs].map((id) => lineHTML(byId(id), "fav")).join("")
        : '<div class="empty-state"><span class="label" style="color:var(--graphite)">Обране</span><h3>Тут поки нічого</h3><p>Натисніть на серце на картці виробу, щоб зберегти його тут.</p><a class="btn btn--line" href="amulety.html">До амулетів</a></div>';
    }
  }

  /* ---------- global delegation ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target;
    const add = t.closest("[data-add]");
    if (add) { e.preventDefault(); addToCart(add.dataset.add); return; }
    const fav = t.closest("[data-fav]");
    if (fav) { e.preventDefault(); toggleFav(fav.dataset.fav); return; }
    const qty = t.closest("[data-qty]");
    if (qty) { const id = qty.dataset.qty; setQty(id, (cart[id] || 0) + +qty.dataset.d); return; }
    const qv = t.closest("[data-qv]");
    if (qv) { e.preventDefault(); if (openDialog && !openDialog.closest(".qv")) closeAll(true); openQV(qv.dataset.qv); return; }
    const view = t.closest("[data-view]");
    if (view) { setView(view); return; }
    if (t.closest("[data-close-qv]") || t.closest("[data-panel-close]") || t.closest("[data-menu-close]")) {
      const link = t.closest("a[href]");
      closeAll(!!link);
      return;
    }
    const po = t.closest("[data-panel-open]");
    if (po) { lastFocus = po; openPanel(po.dataset.panelOpen); return; }
    const tb = t.closest("[data-tab]");
    if (tb) { tab = tb.dataset.tab; renderPanel(); return; }
    if (t.closest("[data-checkout]")) { toast("Оформлення замовлення в демо вимкнено"); return; }
    if (t.closest("[data-menu-open]")) { lastFocus = t.closest("[data-menu-open]"); const m = $(".menu"); showDialog(m, m, $("[data-menu-close]", m)); return; }
    if (t.closest("[data-lang]")) { e.preventDefault(); toast("У демо доступна лише українська версія"); return; }
    const dead = t.closest('a[href="#"]');
    if (dead) { e.preventDefault(); toast(DEMO); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if ($(".fpanel.is-open")) { closePanels(); return; }
      if ($(".filters.is-sheet")) { closeSheet(); return; }
      if (openDialog) closeAll();
    }
    trap(e);
  });

  /* ---------- header state ---------- */
  const hdr = $(".hdr");
  const onScroll = () => hdr && hdr.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const io = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  const observe = (root) => $$(".rv, .hl", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  observe(document);

  /* ---------- home: featured amulets ---------- */
  const featured = $("[data-featured]");
  if (featured) featured.innerHTML = [43178, 42607, 42609, 43106, 42835, 42613, 43175, 43002].map((id, i) => card(byId(id), i)).join("");

  /* ---------- home: vitrine (signature) ---------- */
  const vit = $("[data-vit]");
  if (vit) {
    const ids = [42607, 42613, 42835, 43106, 42609, 43002, 42612, 43175];
    const stage = $("[data-vit-stage]", vit);
    const prog = $(".vit__prog i", vit);
    stage.insertAdjacentHTML("beforeend", ids.map((id, i) => '<img src="' + VIT + id + '.webp" alt="" ' + (i ? 'loading="lazy"' : "") + ' data-i="' + i + '">').join(""));
    const imgs = $$("img", stage);
    // glints: light catching the facets of the amulet on display
    stage.insertAdjacentHTML("beforeend", [0, 1, 2].map((k) => '<span class="glint" style="--gd:' + (k * 1.15).toFixed(2) + 's"></span>').join(""));
    const glints = $$(".glint", stage);
    function placeGlint(g) {
      const im = imgs[cur];
      if (!im || !im.complete || !im.naturalWidth) return;
      const s = stage.getBoundingClientRect(), r = im.getBoundingClientRect();
      // keep to the body of the pendant (the bail sits in the top third)
      const x = r.left - s.left + r.width * (.22 + Math.random() * .56);
      const y = r.top - s.top + r.height * (.38 + Math.random() * .5);
      g.style.left = x + "px"; g.style.top = y + "px";
    }
    glints.forEach((g) => g.addEventListener("animationiteration", () => placeGlint(g)));
    const placeAll = () => glints.forEach(placeGlint);
    imgs.forEach((im) => im.addEventListener("load", () => { if (im === imgs[cur]) placeAll(); }));
    $("[data-vit-n]", vit).textContent = String(ids.length).padStart(2, "0");
    const DUR = 5500;
    const auto = !reduce && !document.documentElement.classList.contains("shot");
    let cur = 0, timer = 0, started = 0, remaining = DUR, hover = false, focus = false;
    const paused = () => hover || focus;
    function schedule(ms) { clearTimeout(timer); timer = setTimeout(() => show(cur + 1), ms); }
    function show(i) {
      cur = (i + ids.length) % ids.length;
      const p = byId(ids[cur]);
      imgs.forEach((im, k) => im.classList.toggle("is-on", k === cur));
      if (imgs[cur].loading === "lazy") imgs[cur].loading = "eager";
      placeAll();
      $("[data-vit-i]", vit).textContent = String(cur + 1).padStart(2, "0");
      $("[data-vit-coll]", vit).textContent = "Swarovski · " + p.coll;
      $("[data-vit-sku]", vit).textContent = "Арт. " + p.sku;
      $("[data-vit-size]", vit).textContent = p.size;
      $("[data-vit-name]", vit).textContent = p.name;
      $("[data-vit-price]", vit).innerHTML = fmt(p.price) + (p.old ? "<s>" + fmt(p.old) + "</s>" : "");
      $("[data-vit-add]", vit).dataset.add = p.id;
      $("[data-vit-add]", vit).setAttribute("aria-label", "Додати в кошик: " + p.name);
      stage.dataset.qv = p.id;
      stage.setAttribute("aria-label", "Швидкий перегляд: " + p.name);
      if (auto) {
        prog.classList.remove("run"); void prog.offsetWidth; prog.style.setProperty("--dur", DUR + "ms"); prog.classList.add("run");
        started = performance.now(); remaining = DUR;
        if (paused()) clearTimeout(timer); else schedule(DUR);
      }
    }
    $("[data-vit-prev]", vit).addEventListener("click", () => show(cur - 1));
    $("[data-vit-next]", vit).addEventListener("click", () => show(cur + 1));
    // pause while the visitor looks at or interacts with the vitrine; resume with the remaining time
    function sync(wasPaused) {
      if (!auto) return;
      const now = performance.now();
      if (paused() && !wasPaused) { clearTimeout(timer); remaining = Math.max(400, remaining - (now - started)); }
      if (!paused() && wasPaused) { started = now; schedule(remaining); }
      vit.classList.toggle("is-paused", paused());
    }
    const on = (ev, fn) => vit.addEventListener(ev, () => { const w = paused(); fn(); sync(w); });
    on("pointerenter", () => (hover = true));
    on("pointerleave", () => (hover = false));
    on("focusin", () => (focus = true));
    on("focusout", () => (focus = false));
    show(0);
  }

  /* ---------- home: category index with image preview ---------- */
  const cats = $("[data-cats]");
  if (cats) {
    const frame = $("[data-cats-frame]");
    const links = $$(".cat", cats);
    frame.innerHTML = links.map((a, i) => '<img src="' + a.dataset.img + '" alt="" ' + (i ? 'loading="lazy"' : "") + ">").join("");
    const fimgs = $$("img", frame);
    const activate = (a) => {
      const i = links.indexOf(a);
      links.forEach((l) => l.classList.toggle("is-on", l === a));
      fimgs.forEach((im, k) => im.classList.toggle("is-on", k === i));
      $("[data-cats-cap]").textContent = $("b", a).textContent;
    };
    links.forEach((a) => { a.addEventListener("pointerenter", () => activate(a)); a.addEventListener("focus", () => activate(a)); });
    activate(links[0]);
  }

  /* ---------- home: occasion chips ---------- */
  $$(".occ .chip").forEach((c) => c.addEventListener("click", () => {
    const on = c.getAttribute("aria-pressed") !== "true";
    $$(".occ .chip").forEach((x) => x.setAttribute("aria-pressed", "false"));
    c.setAttribute("aria-pressed", on);
    if (on) toast("Консультант підбере подарунок: " + c.textContent.toLowerCase());
  }));

  /* ---------- catalog ---------- */
  const grid = $("[data-grid]");
  function closePanels(except) {
    $$(".fpanel.is-open").forEach((p) => { if (p !== except) { p.classList.remove("is-open"); p.previousElementSibling && p.previousElementSibling.setAttribute("aria-expanded", "false"); } });
  }
  function closeSheet() {
    const f = $(".filters");
    if (f) f.classList.remove("is-sheet");
    const tb = $(".toolbar");
    if (tb) tb.classList.remove("is-sheet");
    document.body.style.overflow = "";
  }
  if (grid) {
    const state = { coll: new Set(), plating: new Set(), price: new Set(), isNew: false, sale: false, sort: "rec" };
    const PRICE = { a: [0, 2999, "до 3 000 ₴"], b: [3000, 4499, "3 000–4 500 ₴"], c: [4500, 1e9, "від 4 500 ₴"] };
    const COLLS = ["Idyllia", "Vienna", "Sublima", "Minions", "Remix Collection"];

    const match = (p, skip) =>
      (skip === "coll" || !state.coll.size || state.coll.has(p.coll)) &&
      (skip === "plating" || !state.plating.size || state.plating.has(p.plating)) &&
      (skip === "price" || !state.price.size || [...state.price].some((k) => p.price >= PRICE[k][0] && p.price <= PRICE[k][1])) &&
      (!state.isNew || p.isNew) && (!state.sale || p.old);

    function opt(group, key, label, count, extra) {
      const on = state[group].has(key);
      return '<button class="opt" role="menuitemcheckbox" aria-checked="' + on + '" data-g="' + group + '" data-k="' + key + '"' + (count || on ? "" : " disabled") + ">" +
        '<span class="box" aria-hidden="true"></span><span class="lbl">' + (extra || "") + label + '</span><span class="c">' + count + "</span></button>";
    }
    function renderPanels() {
      const pool = (g) => PRODUCTS.filter((p) => match(p, g));
      $("[data-panel=coll]").innerHTML = '<div class="fpanel__title label">Колекція</div>' + COLLS.map((c) => opt("coll", c, c, pool("coll").filter((p) => p.coll === c).length)).join("");
      $("[data-panel=plating]").innerHTML = '<div class="fpanel__title label">Покриття</div>' + Object.keys(PLATING).map((k) => opt("plating", k, PLATING[k], pool("plating").filter((p) => p.plating === k).length, '<span class="sw sw--' + k + '" aria-hidden="true"></span>')).join("");
      $("[data-panel=price]").innerHTML = '<div class="fpanel__title label">Ціна</div>' + Object.keys(PRICE).map((k) => opt("price", k, PRICE[k][2], pool("price").filter((p) => p.price >= PRICE[k][0] && p.price <= PRICE[k][1]).length)).join("");
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
      if (state.sale) chips.push(["sale", "", "Зі знижкою"]);
      $("[data-active]").innerHTML = chips.length
        ? chips.map((c) => '<button class="chip" data-rm="' + c[0] + "|" + c[1] + '" aria-label="Прибрати фільтр: ' + c[2] + '">' + c[2] + ICON.x + "</button>").join("") + '<button class="reset" data-reset>Скинути все</button>'
        : "";
    }
    function render() {
      let list = PRODUCTS.filter((p) => match(p));
      const s = state.sort;
      if (s === "new") list = list.slice().sort((a, b) => b.isNew - a.isNew || b.id - a.id);
      if (s === "asc") list = list.slice().sort((a, b) => a.price - b.price);
      if (s === "desc") list = list.slice().sort((a, b) => b.price - a.price);
      if (s === "name") list = list.slice().sort((a, b) => a.name.localeCompare(b.name, "uk"));
      const pristine = list.length === PRODUCTS.length && s === "rec";
      const cards = list.map((p, i) => card(p, i));
      if (pristine) {
        cards.splice(6, 0,
          '<a class="editorial" href="#">' +
            '<img src="' + IMG + 'p/43175-2.webp" alt="Модель у браслетах і намисті Swarovski" loading="lazy">' +
            '<div class="editorial__t"><span class="label">Як носити</span><h3>Зберіть свою історію</h3>' +
            "<p>Застібка амулета підходить до браслетів, ланцюжків і намист Swarovski — один шарм або цілий набір.</p></div>" +
          "</a>");
        cards.push(
          '<a class="endtile" href="#">' +
            '<div><span class="label">Основа для амулетів</span><h3>Браслети та ланцюжки Swarovski</h3></div>' +
            '<span class="more"><span>Дивитися</span>' + ICON.arrow + "</span>" +
          "</a>");
      }
      grid.innerHTML = list.length ? cards.join("")
        : '<div class="empty"><span class="label" style="color:var(--graphite)">0 виробів</span><h3>Таких амулетів немає</h3><p>Під обрані фільтри не підійшов жоден виріб.</p><button class="btn" data-reset>Скинути фільтри</button></div>';
      $$("[data-result]").forEach((el) => (el.textContent = items(list.length)));
      $("[data-pager-bar]").style.width = (list.length / PRODUCTS.length) * 100 + "%";
      $("[data-pager-text]").textContent = "Показано " + list.length + " з " + list.length;
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
        const again = $('.opt[data-g="' + o.dataset.g + '"][data-k="' + o.dataset.k + '"]');
        if (again) again.focus();
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
      if (t.closest("[data-sheet-open]")) { $(".filters").classList.add("is-sheet"); $(".toolbar").classList.add("is-sheet"); document.body.style.overflow = "hidden"; setTimeout(() => $("[data-sheet-close]").focus(), 60); return; }
      if (t.closest("[data-sheet-close]")) { closeSheet(); $("[data-sheet-open]").focus(); return; }
      if (!t.closest(".fgroup")) closePanels();
    });
    $("[data-sort]").addEventListener("change", (e) => { state.sort = e.target.value; render(); });

    const cols = String(store.get("cols", "4"));
    grid.style.setProperty("--cols", cols);
    $$("[data-density]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.density === cols));
    render();
  }

  syncCounts();
  renderPanel();
})();
