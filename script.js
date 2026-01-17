document.getElementById("assessmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const scores = {
    q1: Number(document.querySelector('input[name="q1"]:checked').value),
    q2: Number(document.querySelector('input[name="q2"]:checked').value),
    q3: Number(document.querySelector('input[name="q3"]:checked').value),
    q4: Number(document.querySelector('input[name="q4"]:checked').value),
    q5: Number(document.querySelector('input[name="q5"]:checked').value),
    q6: Number(document.querySelector('input[name="q6"]:checked').value),
  };

  const firstFiveTotal =
    scores.q1 + scores.q2 + scores.q3 + scores.q4 + scores.q5;

  // 把 6 題分數全部帶到網址
  const params = new URLSearchParams(scores).toString();

  // ✅ 分流規則
  if (firstFiveTotal >= 15 || scores.q6 >= 2) {
    window.location.href = `result-clinic.html?${params}`;
  } else {
    window.location.href = `result-counsel.html?${params}`;
  }
});
