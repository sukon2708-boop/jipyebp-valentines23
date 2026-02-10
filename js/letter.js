const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");

let opening = false;
let letterOpened = false;

const MESSAGE = `
Happy Valentine day na kub baiplu  ปีนี้เป็นปีแรกที่พวกเราทั้งคู่ได้มาอยู่ด้วยกันในเทศกาลแบบนี้ เค้ารู้สึกดีใจมากๆที่คนที่อยู่ข้างๆเค้าเป็นเธอและเค้ารู้สึกโชคดีที่เค้าได้มาเจอเธอได้มาเป็นส่วนหนึ่งของกันและกันแบบนี้ วาเลนไทน์ปีนี้อยากบอกเธอว่าเค้าขอบคุณนะ ขอบคุณจริงๆการมีเธออยู่ในทุกๆวันทำให้เค้ามีความสุขมากๆมีความสุขมากจริงๆเธอทั้งสวยทั้งเก่งเค้าสัญญานะว่าจะดูแลเธอดีๆและเต็มที่ที่สุด จะทำให้เธอรู้สึกว่าการเลือกเค้าเลือกไม่ผิดเลย หวังว่าปีหน้าและทุกๆปีหลังจากนี้จะมีเธออยู่ข้างกันนะ เค้ารักเธอนะใบพลู
`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // ถ้าเปิดแล้ว → คลิกเพื่ออ่านจดหมาย
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  // ซ่อนคำแนะนำ
  hintText.style.display = "none";

  // ปรับปุ่ม
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  // letter2
  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  // ไป letter3
  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;

    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย
readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});
