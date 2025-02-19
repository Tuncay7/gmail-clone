export function showModal(modal, willOpen) {
  modal.style.display = willOpen ? "grid" : "none";
}

function trimString(str, max) {
    // metin maxdan kısaysa olduğu gibi gönderiyoruz
    if (str.length < max) return str;
    // metnin harf uzunluğu max dan uzunsa
    // maxa kadar olan kısmı kes ve sonrasında ... koy
    // yeni metni return ile fonksiyonun çalıştığı yere gönder
    return str.slice(0, max) + "...";
  }

export function renderMails(outlet, data) {
  if (!data) return;
  outlet.innertHTML = data.map(
    (mail) => `
        <div class="mail" id="mail" data-id=${mail.id}>
            <div class="left">
              <input type="checkbox" />
              <span class="bi bi-star${mail.stared ? "-fill" : ""}"></span>
              <span>${mail.receiver}</span>
            </div>
            <div class="right">
              <p class="message-title">${trimString(mail.title, 20)}</p>
              <p class="message-description">
              ${trimString(mail.message, 40)}
              </p>
              <p class="message-date">${mail.date}</p>
              <div class="delete">
                <i class="bi bi-trash"></i>
              </div>
            </div>
          </div>`
  ).join(" ");
  
}
