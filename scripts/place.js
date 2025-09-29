document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  document.getElementById("lastModified").textContent = document.lastModified;

  const tempEl = document.getElementById("temp");
  const windEl = document.getElementById("wind");
  const windchillEl = document.getElementById("windchill");

  function calculateWindChill(T, V) {
    return Math.round((13.12 + 0.6215*T - 11.37*Math.pow(V,0.16) + 0.3965*T*Math.pow(V,0.16)) * 10) / 10;
  }

  const T = parseFloat(tempEl.textContent);
  const V = parseFloat(windEl.textContent);

  if (!isNaN(T) && !isNaN(V) && T <= 10 && V > 4.8) {
    windchillEl.textContent = calculateWindChill(T, V).toFixed(1);
  } else {
    windchillEl.textContent = "--";
  }
});
