document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("assessmentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 阻止表單真的送出

    let total = 0;

    // 前五題加總
    for (let i = 1; i <= 5; i++) {
      const val = document.querySelector(`input[name="q${i}"]:checked`);
      if (!val) {
        alert("請完成所有題目後再提交");
        return;
      }
      total += parseInt(val.value, 10);
    }

    // 第六題
    const q6 = document.querySelector(`input[name="q6"]:checked`);
    if (!q6) {
      alert("請完成所有題目後再提交");
      return;
    }
    const q6Val = parseInt(q6.value, 10);

    // 判斷跳頁條件
    if (total >= 15 || q6Val >= 2) {
      window.location.href = "result-clinic.html";
    } else {
      window.location.href = "result-counsel.html";
    }
  });
});
