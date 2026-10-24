// Navigation et interactions — ChatWave (projet académique)

let activeChatId = "awa";
let callInterval = null;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("screen-" + id);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const navBtn = document.querySelector(`.nav-btn[data-screen="${id}"]`);
  if (navBtn) navBtn.classList.add("active");

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(`.tab[data-goto="${id}"]`).forEach(t => t.classList.add("active"));

  if (id === "voice-call" || id === "video-call") startCallTimer(id);
  else stopCallTimer();
}

function startCallTimer(id) {
  stopCallTimer();
  let seconds = 0;
  const el = document.getElementById(id === "voice-call" ? "call-timer" : "video-timer");
  callInterval = setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    if (el) el.textContent = `${m}:${s}`;
  }, 1000);
}

function stopCallTimer() {
  if (callInterval) clearInterval(callInterval);
  callInterval = null;
}

function openChat(contactId) {
  activeChatId = contactId;
  const c = CONTACTS.find(c => c.id === contactId);
  if (c) {
    document.getElementById("chat-name").textContent = c.name;
    document.getElementById("chat-avatar").textContent = c.initial;
  }
  renderChatMessages();
  showScreen("chat");
}

function renderChatMessages() {
  const box = document.getElementById("chat-messages");
  box.innerHTML = "";
  (CHAT_MESSAGES[activeChatId] || []).forEach(m => {
    box.insertAdjacentHTML("beforeend", bubbleHTML(m));
  });
  box.scrollTop = box.scrollHeight;
}

function bubbleHTML(m) {
  return `<div class="bubble ${m.from}">${m.sender ? `<span class="sender">${m.sender}</span>` : ""}${escapeHTML(m.text)}<span class="time">${m.time}</span></div>`;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderLists() {
  // Liste des discussions
  const chatsList = document.getElementById("chats-list");
  chatsList.innerHTML = CONTACTS.map(c => `
    <div class="list-item" data-open-chat="${c.id}">
      <div class="avatar-sm">${c.initial}</div>
      <div class="row-main">
        <div class="row-top"><strong>${c.name}</strong><span>${c.time}</span></div>
        <div class="row-bottom"><span class="snippet">${c.lastMsg}</span>${c.unread ? `<span class="badge">${c.unread}</span>` : ""}</div>
      </div>
    </div>`).join("");

  // Liste des contacts (nouvelle discussion)
  const contactsList = document.getElementById("contacts-list");
  contactsList.innerHTML = CONTACTS.map(c => `
    <div class="list-item" data-open-chat="${c.id}">
      <div class="avatar-sm">${c.initial}</div>
      <div class="row-main"><strong>${c.name}</strong><br><small class="muted">Salut, j'utilise ChatWave !</small></div>
    </div>`).join("");

  // Statuts
  const statusList = document.getElementById("status-list");
  statusList.innerHTML = STATUSES.map(s => `
    <div class="status-row" data-goto="status-viewer">
      <div class="status-ring"><span class="avatar-sm">${s.name[0]}</span></div>
      <div><strong>${s.name}</strong><br><small class="muted">${s.time}</small></div>
    </div>`).join("");

  // Appels
  const callsList = document.getElementById("calls-list");
  callsList.innerHTML = CALLS.map(c => `
    <div class="list-item" data-goto="${c.screen}">
      <div class="avatar-sm">${c.name[0]}</div>
      <div class="row-main">
        <div class="row-top"><strong style="${c.missed ? "color:#d9534f" : ""}">${c.name}</strong></div>
        <div class="row-bottom"><span class="call-type ${c.missed ? "missed" : ""}">${c.icon} ${c.type}</span><span>${c.time}</span></div>
      </div>
      <span class="call-icon">${c.screen === "video-call" ? "📹" : "📞"}</span>
    </div>`).join("");
}

function init() {
  renderLists();
  renderChatMessages();

  // Navigation via la barre latérale
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => showScreen(btn.dataset.screen));
  });

  // Navigation via les éléments cliquables dans le téléphone (data-goto)
  document.addEventListener("click", (e) => {
    const gotoEl = e.target.closest("[data-goto]");
    if (gotoEl) showScreen(gotoEl.dataset.goto);

    const chatEl = e.target.closest("[data-open-chat]");
    if (chatEl) openChat(chatEl.dataset.openChat);
  });

  // Envoi de message dans la conversation
  const sendBtn = document.getElementById("chat-send");
  const input = document.getElementById("chat-input");
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    CHAT_MESSAGES[activeChatId] = CHAT_MESSAGES[activeChatId] || [];
    CHAT_MESSAGES[activeChatId].push({ from: "out", text, time });
    renderChatMessages();
    input.value = "";
  }
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(); });

  // Avancement automatique entre les cases du code OTP
  document.querySelectorAll(".otp-box").forEach((box, i, boxes) => {
    box.addEventListener("input", () => {
      if (box.value && boxes[i + 1]) boxes[i + 1].focus();
    });
  });

  // Démarrage sur l'écran splash, puis bascule automatique vers "Bienvenue"
  showScreen("splash");
  setTimeout(() => showScreen("welcome"), 1800);
}

document.addEventListener("DOMContentLoaded", init);
