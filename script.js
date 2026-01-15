document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let totalFirstFive = 0;

  for (let i = 1; i <= 5; i++) {
    totalFirstFive += parseInt(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }

  let q6 = parseInt(
    document.querySelector(`input[name="q6"]:checked`).value
  );

  // 🔴 核心判斷邏輯（如非必要不要改）
  if (totalFirstFive >= 15 && q6 >= 2) {
    window.location.href = "result-clinic.html";
  } else {
    window.location.href = "result-counsel.html";
  }
});
