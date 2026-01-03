
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

    function showMainpanel(panelID){
        closepanel();
        const panel = document.getElementById(panelID + "-panel");
        if(panel) panel.style.display = "block";
    }

    function closepanel(){
        const panel = [
            "Specialist-panel",
            "Therapist-panel",
            "Therapist-sub-panel",
            "Audiologist-panel",
            "Pathologist-panel"
        ];
        panel.forEach(id => {
            const e1 = document.getElementById(id);
            if(e1) e1.style.display = "none";
        });
    }

    document.addEventListener("click", function(e){
        const isPanel = e.target.closest(".hidden-panel");
        const isButton = e.target.closest(".btn") || e.target.closest(".btn1");

        if (!isPanel && !isButton){
            closepanel();
        }
    });










