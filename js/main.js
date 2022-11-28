const hamburger_btn = document.getElementById("menu");
hamburger_btn.addEventListener("click", function () {
  hamburger_btn.classList.toggle("open");
  const nav = document.getElementById("drawer-nav");
  nav.classList.toggle("in")
});

function ScrollTop(elem) {
  const Top_btn = document.getElementById(elem);
  Top_btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
ScrollTop("button");

const opn_btn = document.getElementById("openBtn");
const cls_btn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
opn_btn.addEventListener("click", function () {
  modal.style.display = "block";
});
cls_btn.addEventListener("click", function () {
  modal.style.display = "none";
});
// モーダルの背景をクリックするとモーダルを非表示にする
// closest は、親要素を検知する
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});

// 関数を使用したやり方
// function test(op) {
//   const hamburger_btn = document.getElementById(op);
//   hamburger_btn.addEventListener("click", function () {
//     hamburger_btn.classList.toggle("open");
//     const nav = document.getElementById("drawer-nav");
//     nav.classList.toggle("in");
//   });
// }
// test("menu");