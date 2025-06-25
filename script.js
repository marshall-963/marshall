const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const introText = document.querySelector(".intro-text");
const wrapper = document.querySelector(".wrapper");
const bgMusic = new Audio("https://www.bensound.com/bensound-music/bensound-love.mp3"); // 👈 ضع رابط صالح
bgMusic.loop = true;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

yesBtn.addEventListener("click", () => {
  // إخفاء العناوين والأزرار
  if (introText) introText.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // تشغيل الموسيقى
  bgMusic.play();

  // عند تحميل الصورة الجديدة → اعرض الجملة والاحتفال
  gif.onload = () => {
    question.innerHTML = "🎂🎉 Happy Birthday to you!🎉🎂";
    question.classList.add("fade-in");

    const celebration = document.createElement("div");
    celebration.innerHTML = "💖✨💫🌟🎀💗✨💖";
    celebration.style.fontSize = "2rem";
    celebration.style.textAlign = "center";
    celebration.style.marginTop = "15px";
    celebration.classList.add("fade-in");
    wrapper.appendChild(celebration);
  };

  gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb21wbHZnbDNwcXl2amU3eXhtazJoN2Q2amV5OWFmZGYzaHpyd2ppbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TqV8LqhtM1MrxA1ih9/giphy.gif";
  gif.classList.add("bounce");

  // إطلاق القلوب المتساقطة
  setInterval(createHeart, 300);
});

noBtn.addEventListener("mouseover", () => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.floor(Math.random() * maxX) + "px";
  noBtn.style.top = Math.floor(Math.random() * maxY) + "px";
});
