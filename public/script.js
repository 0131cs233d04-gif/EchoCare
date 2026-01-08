
    function showSubpanel(panelType){
        const Audiologist = document.getElementById("Audiologist-panel");
        const Pathologist = document.getElementById("Pathologist-panel");
        const Therapist = document.getElementById("Therapist-sub-panel");

        if(Audiologist) Audiologist.style.display = "none";
        if(Pathologist) Pathologist.style.display = "none";
        if(Therapist) Therapist.style.display = "none";

        const showThis = document.getElementById(panelType + "-panel");
        if (showThis) showThis.style.display = "block";
    }

    /* ====== OPEN MAIN PANELS ====== */
/* ====== OPEN MAIN PANELS ====== */
function showMainpanel(panelID) {
  closepanel();
  const panel = document.getElementById(panelID + "-panel");
  if (panel) panel.style.display = "block";
}

/* ====== OPEN SUB PANELS ====== */
function showSubpanel(panelID) {
  closepanel();
  const panel = document.getElementById(panelID);
  if (panel) panel.style.display = "block";
}

/* ====== CLOSE ALL PANELS ====== */
function closepanel() {
  document.querySelectorAll(".hidden-panel").forEach(p => {
    p.style.display = "none";
  });
}

/* ====== CLICK OUTSIDE TO CLOSE ====== */
document.addEventListener("click", function (e) {
  const isPanel = e.target.closest(".hidden-panel");
  const isButton =
    e.target.closest(".btn") ||
    e.target.closest(".btn1") ||
    e.target.closest(".btn2") ||
    e.target.closest(".close-btn") ||
    e.target.closest(".cancel-btn");

  if (!isPanel && !isButton) {
    closepanel();
  }
});























