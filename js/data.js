// Données de démonstration (fictives) pour le projet académique ChatWave

const CONTACTS = [
  { id: "awa", name: "Awa Ngono", initial: "A", lastMsg: "On se voit demain pour la répétition ?", time: "09:41", unread: 2 },
  { id: "jean", name: "Jean Mballa", initial: "J", lastMsg: "J'ai corrigé le dernier slide 👍", time: "08:15", unread: 0 },
  { id: "marc", name: "Marc Fotso", initial: "M", lastMsg: "Tu as le lien du dépôt GitHub ?", time: "Hier", unread: 0 },
  { id: "lea", name: "Léa Biya", initial: "L", lastMsg: "D'accord, à plus tard !", time: "Hier", unread: 0 },
  { id: "samir", name: "Samir Alami", initial: "S", lastMsg: "Super travail sur le backend", time: "Lundi", unread: 1 },
  { id: "chloe", name: "Chloé Nkoa", initial: "C", lastMsg: "📷 Photo", time: "Lundi", unread: 0 },
];

const CHAT_MESSAGES = {
  awa: [
    { from: "in", text: "Salut ! Tu as avancé sur la présentation ?", time: "09:32" },
    { from: "out", text: "Oui, j'ai fini les 15 écrans 🎉", time: "09:35" },
    { from: "in", text: "Trop bien ! On se voit demain pour la répétition ?", time: "09:41" },
  ],
  jean: [
    { from: "in", text: "J'ai corrigé le dernier slide 👍", time: "08:15" },
    { from: "out", text: "Merci, je regarde ça ce soir", time: "08:20" },
  ],
  marc: [
    { from: "out", text: "Salut Marc, tu as le lien du dépôt ?", time: "Hier" },
    { from: "in", text: "Tu as le lien du dépôt GitHub ?", time: "Hier" },
  ],
  lea: [
    { from: "in", text: "D'accord, à plus tard !", time: "Hier" },
  ],
  samir: [
    { from: "in", text: "Super travail sur le backend", time: "Lundi" },
  ],
  chloe: [
    { from: "in", text: "📷 Photo", time: "Lundi" },
  ],
};

const GROUP_MESSAGES = [
  { from: "in", sender: "Jean Mballa", text: "On se retrouve à 14h pour finaliser le projet ?", time: "10:02" },
  { from: "in", sender: "Marc Fotso", text: "Ça me va 👍", time: "10:05" },
  { from: "out", text: "Parfait, je ramène les maquettes", time: "10:06" },
];

const STATUSES = [
  { id: "jean", name: "Jean Mballa", time: "il y a 1 h" },
  { id: "marc", name: "Marc Fotso", time: "il y a 3 h" },
  { id: "lea", name: "Léa Biya", time: "il y a 5 h" },
];

const CALLS = [
  { name: "Awa Ngono", type: "Entrant", icon: "↙️", time: "09:41", missed: false, screen: "voice-call" },
  { name: "Jean Mballa", type: "Vidéo, Sortant", icon: "↗️", time: "Hier", missed: false, screen: "video-call" },
  { name: "Marc Fotso", type: "Manqué", icon: "↙️", time: "Hier", missed: true, screen: "voice-call" },
  { name: "Samir Alami", type: "Sortant", icon: "↗️", time: "Lundi", missed: false, screen: "voice-call" },
];
