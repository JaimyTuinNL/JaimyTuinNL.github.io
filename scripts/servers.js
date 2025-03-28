// Server utility
document.addEventListener("DOMContentLoaded", () => {
    const serverList = document.getElementById("serverList");
    const socials = document.getElementById("socials");

    const serverDetails = {
        "GingerProductions.jpeg": {
            title: "Ginger Productions",
            description: "De Discord server met vrijwel alle projecten, hier vind je sneak peeks, codeondersteuning, vroege feature tests en meer!",
            serverURL: "https://discord.gg/XeqteUmBen"
        },
        "SpudServerIcon.png": {
            title: "Spud Support",
            description: "Een server speciaal voor mijn Discord-bots, deze server bevat informatie, support, bètaversies en meer!",
            serverURL: "https://discord.gg/D8ZcY8SJdy"
        }
    };

    serverList.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            const imageName = event.target.src.split("/").pop();
            const details = serverDetails[imageName];

            if (details) {
                let infoBox = document.getElementById("serverInfo");
                if (!infoBox) return console.log("No infoBox found")

                infoBox.innerHTML = `<h3>${details.title}</h3><p>${details.description}</p><a href="${details.serverURL}">Join Now</a>`; // <span class="external material-symbols-outlined">open_in_new</span>
            }
        }
    });

    document.addEventListener("click", (event) => {
        if (!socials.contains(event.target)) {
            const infoBox = document.getElementById("serverInfo");
            if (infoBox) {
                infoBox.innerHTML = "";
            }
        }
    });
});