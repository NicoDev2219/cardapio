// ====== Data & util ======
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const produtos = [
  // Entradas
  { id: 1, nome: "Carpaccio de Wagyu", preco: 320.00, categoria: "entradas", desc: "Finas lâminas de Wagyu, redução de balsâmico e lascas de parmesão.", img: "https://images.pexels.com/photos/8963412/pexels-photo-8963412.jpeg?_gl=1*mcqlv*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTQ4NDkkajYwJGwwJGgw" },
  { id: 2, nome: "Foie Gras com Figos", preco: 420.00, categoria: "entradas", desc: "Foie gras levemente grelhado, compota de figo e brioche.", img: "https://images.pexels.com/photos/33365412/pexels-photo-33365412.jpeg?_gl=1*i2h5l1*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTUwMTkkajI0JGwwJGgw" },

  // Pratos Principais
  { id: 3, nome: "Lagosta Thermidor", preco: 780.00, categoria: "principais", desc: "Lagosta grelhada com creme de mostarda e ervas.", img: "https://images.pexels.com/photos/20150645/pexels-photo-20150645.jpeg?_gl=1*1ogvyep*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTUxNTYkajU0JGwwJGgw" },
  { id: 4, nome: "Filé Mignon ao Trufado", preco: 690.00, categoria: "principais", desc: "Medalhão de filé, molho de trufas negras e purê de batata-doce.", img: "https://images.pexels.com/photos/18303028/pexels-photo-18303028.jpeg?_gl=1*vqhngu*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTUyOTMkajU5JGwwJGgw" },

  // Vinhos
  { id: 5, nome: "Château Margaux 2015", preco: 12500.00, categoria: "vinhos", desc: "Safra 2015 — Bordeaux, França. Corpo, elegância e guarda.", img: "https://images.pexels.com/photos/1484/alcohol-drink-glass-drinking.jpg?_gl=1*7edktb*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTU0NjgkajIwJGwwJGgw" },
  { id: 6, nome: "Dom Pérignon Vintage 2008", preco: 7200.00, categoria: "vinhos", desc: "Champagne Vintage de elevada finesse.", img: "https://images.pexels.com/photos/12099317/pexels-photo-12099317.jpeg?_gl=1*1nngcwp*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTU2NTUkajQzJGwwJGgw" },

  // Whiskies
  { id: 7, nome: "Macallan 25 anos", preco: 42000.00, categoria: "whiskies", desc: "Single malt premium — muito raro.", img: "https://images.pexels.com/photos/15916905/pexels-photo-15916905.jpeg?_gl=1*1y9iz8*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTU4MzckajEwJGwwJGgw" },
  { id: 8, nome: "Johnnie Walker Blue Label", preco: 2800.00, categoria: "whiskies", desc: "Blend escocês sofisticado.", img: "https://images.pexels.com/photos/15153450/pexels-photo-15153450.jpeg?_gl=1*1stjoi3*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTU5MjgkajE3JGwwJGgw" },

  // Bebidas Premium
  { id: 9, nome: "Coquetel de Champanhe e Ouro", preco: 1250.00, categoria: "bebidas", desc: "Champanhe, licor delicado e flocos de ouro comestível.", img: "https://images.pexels.com/photos/10477131/pexels-photo-10477131.jpeg?_gl=1*k47xxc*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTYwNDAkajE2JGwwJGgws" },
  { id: 10, nome: "Água Mineral Nórdica", preco: 95.00, categoria: "bebidas", desc: "Garrafa premium importada.", img: "https://images.pexels.com/photos/10415537/pexels-photo-10415537.jpeg?_gl=1*14x4oxz*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTYxNDckajMwJGwwJGgw" },

  // Sobremesas
  { id: 11, nome: "Soufflé de Chocolate Belga", preco: 150.00, categoria: "sobremesas", desc: "Textura leve e intenso chocolate.", img: "https://images.pexels.com/photos/33320422/pexels-photo-33320422.jpeg?_gl=1*1wdv4bd*_ga*MTM1OTE1MTIxNi4xNzU0OTE0NjA2*_ga_8JE65Q40S6*czE3NTQ5MTQ2MDUkbzEkZzEkdDE3NTQ5MTYyNTYkajMxJGwwJGgw" },
  { id: 12, nome: "Tarte Tatin de Maçãs Francesas", preco: 160.00, categoria: "sobremesas", desc: "Maçãs caramelizadas e massa folhada.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a" }
];

// localStorage keys
const LS_CART = 'etoile_cart_v1';
const LS_ORDERS = 'etoile_orders_v1';

// ====== App state ======
let cart = JSON.parse(localStorage.getItem(LS_CART)) || [];

// ====== Helpers ======
function qs(sel){ return document.querySelector(sel) }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)) }
function saveCart(){ localStorage.setItem(LS_CART, JSON.stringify(cart)); updateCartUI(); }
function showToast(text, ms = 2200){ const t = qs('#toast'); t.textContent = text; t.classList.remove('hidden'); setTimeout(()=> t.classList.add('hidden'), ms) }

// ====== Render produtos ======
function renderProdutos(list = produtos){
  const root = qs('#produtos');
  root.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="media" src="${p.img}" alt="${p.nome}">
      <div class="body">
        <h3>${p.nome}</h3>
        <p class="desc">${p.desc}</p>
        <div class="actions">
          <div class="price">${formatter.format(p.preco)}</div>
          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
            <button class="btn outline" data-id="${p.id}" data-action="view">Ver</button>
            <button class="btn primary" data-id="${p.id}" data-action="add">Adicionar</button>
          </div>
        </div>
      </div>
    `;
    root.appendChild(card);
  });
}

// ====== Cart functions ======
function updateCartUI(){
  const countEl = qs('#cart-count');
  const itemsEl = qs('#cart-items');
  const totalEl = qs('#cart-total');
  const totalItemsEl = qs('#cart-total-items');

  // Items list
  itemsEl.innerHTML = '';
  if(cart.length === 0){
    itemsEl.innerHTML = '<p class="muted">Seu carrinho está vazio.</p>';
  } else {
    cart.forEach(entry => {
      const prod = produtos.find(p => p.id === entry.id);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nome}">
        <div class="meta">
          <div><strong>${prod.nome}</strong></div>
          <div class="muted">${formatter.format(prod.preco)}</div>
          <div class="qty">
            <button data-id="${entry.id}" data-action="dec">−</button>
            <div>${entry.qty}</div>
            <button data-id="${entry.id}" data-action="inc">+</button>
            <button style="margin-left:8px" data-id="${entry.id}" data-action="remove" title="Remover">🗑</button>
          </div>
        </div>
        <div style="min-width:72px;text-align:right">${formatter.format(prod.preco * entry.qty)}</div>
      `;
      itemsEl.appendChild(div);
    });
  }

  // totals
  const total = cart.reduce((s, it) => {
    const prod = produtos.find(p => p.id === it.id);
    return s + prod.preco * it.qty;
  }, 0);
  countEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
  totalEl.textContent = formatter.format(total);
  totalItemsEl.textContent = cart.length;

  // persist
  localStorage.setItem(LS_CART, JSON.stringify(cart));
}

// add to cart (id, qty)
function addToCart(id, qty = 1){
  const found = cart.find(i => i.id === id);
  if(found) found.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  showToast('Item adicionado ao carrinho');
}

// remove from cart completely
function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

// change qty
function changeQty(id, delta){
  const found = cart.find(i => i.id === id);
  if(!found) return;
  found.qty += delta;
  if(found.qty <= 0) removeFromCart(id);
  saveCart();
}

// clear cart
function clearCart(){
  cart = [];
  saveCart();
  showToast('Carrinho limpo');
}

// ====== UI Interactions ======
document.addEventListener('click', (e)=>{
  const act = e.target.dataset.action;
  const id = e.target.dataset.id ? Number(e.target.dataset.id) : null;

  // product actions (add / view)
  if(act === 'add' && id){ addToCart(id,1) }
  if(act === 'view' && id){ openProductModal(id) }

  // cart item controls
  if(act === 'inc' && id){ changeQty(id, +1) }
  if(act === 'dec' && id){ changeQty(id, -1) }
  if(act === 'remove' && id){ removeFromCart(id) }

  // cart open/close
  if(e.target.id === 'cart-toggle'){ qs('#cart').classList.add('open'); }
  if(e.target.id === 'close-cart'){ qs('#cart').classList.remove('open'); }
});

// search
qs('#search').addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  const filtered = produtos.filter(p => (p.nome + ' ' + p.desc).toLowerCase().includes(q));
  renderProdutos(filtered);
});

// filters
qsa('.filter').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    qsa('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    if(cat === 'all') renderProdutos();
    else renderProdutos(produtos.filter(p=>p.categoria === cat));
  });
});

// cart toggle from header
qs('#cart-toggle').addEventListener('click', ()=> qs('#cart').classList.toggle('open'));
qs('#close-cart').addEventListener('click', ()=> qs('#cart').classList.remove('open'));

// clear cart button
qs('#clear-cart').addEventListener('click', ()=> {
  if(confirm('Limpar todo o carrinho?')) clearCart();
});

// Checkout flow
qs('#checkout-btn').addEventListener('click', ()=>{
  if(cart.length === 0){ showToast('Carrinho vazio'); return; }
  // fill summary
  const total = cart.reduce((s, it) => s + (produtos.find(p => p.id === it.id).preco * it.qty), 0);
  qs('#summary-items').textContent = cart.reduce((s,i)=>s+i.qty,0);
  qs('#summary-total').textContent = formatter.format(total);
  qs('#checkout-modal').classList.remove('hidden');
});

// checkout modal close/cancel
qs('#checkout-close').addEventListener('click', ()=> qs('#checkout-modal').classList.add('hidden'));
qs('#checkout-cancel').addEventListener('click', ()=> qs('#checkout-modal').classList.add('hidden'));

// submit checkout (simulate saving order)
qs('#checkout-form').addEventListener('submit', (ev)=>{
  ev.preventDefault();
  if(cart.length === 0) { showToast('Carrinho vazio'); return; }
  const name = qs('#cust-name').value.trim() || 'Cliente';
  const note = qs('#cust-note').value.trim() || '';
  const items = cart.map(it => {
    const p = produtos.find(x => x.id === it.id);
    return { id: p.id, nome: p.nome, preco: p.preco, qty: it.qty };
  });
  const total = items.reduce((s,i)=>s + i.preco * i.qty, 0);
  const order = { id: 'ORD' + Date.now(), name, note, items, total, createdAt: new Date().toISOString() };

  // save orders in LS (simulated backend)
  const orders = JSON.parse(localStorage.getItem(LS_ORDERS) || '[]');
  orders.unshift(order);
  localStorage.setItem(LS_ORDERS, JSON.stringify(orders));

  // clear cart and close
  clearCart();
  qs('#checkout-modal').classList.add('hidden');
  qs('#cart').classList.remove('open');
  showToast('Pedido confirmado — simulação concluída');
});

// product modal open
function openProductModal(id){
  const p = produtos.find(x => x.id === id);
  qs('#modal-img').src = p.img;
  qs('#modal-title').textContent = p.nome;
  qs('#modal-desc').textContent = p.desc;
  qs('#modal-price').textContent = formatter.format(p.preco);
  qs('#modal-qty').value = 1;
  qs('#modal').classList.remove('hidden');

  // attach add handler (one-time)
  const addBtn = qs('#modal-add');
  function oneClick(){
    const q = Math.max(1, Number(qs('#modal-qty').value));
    addToCart(p.id, q);
    qs('#modal').classList.add('hidden');
    addBtn.removeEventListener('click', oneClick);
  }
  addBtn.addEventListener('click', oneClick);
}

// close product modal
qs('#modal-close').addEventListener('click', ()=> qs('#modal').classList.add('hidden'));
qs('#modal').addEventListener('click', (e)=> { if(e.target === qs('#modal')) qs('#modal').classList.add('hidden') });

// initial render
renderProdutos();
updateCartUI();
