const inputs = [];
const masterInput = document.querySelector(".multipleInput");
const emptyMessage = document.querySelector(".emptyMessage");

document.addEventListener("DOMContentLoaded", async function () {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "Loading...";

    const gathering = document.querySelector(".gathering");
    const aiList = [];
    await obtainAiList(aiList);

    aiList.forEach((ai, index) => createContainer(ai, index, gathering));

    if (gathering.children.length === 0) {
        emptyMessage.textContent = "No models introduced yet";
    } else {
        emptyMessage.style.display = "none";
    }
});

async function obtainAiList(aiList) {
    /// TODO: Fetch USER A.I. list
    //  This is a place-holder for the back-end
    aiList.push(
        { name: "Claude", avatar: "../A.I.s/claude/image.svg", url: "https://claude.ai/new", apiKey: "123abc" }
    );

    aiList.push(
        { name: "Openai", avatar: "../A.I.s/openai/image.svg", url: "https://chatgpt.com/", apiKey: "456def" }
    );

    aiList.push(
        { name: "Deepseek", avatar: "../A.I.s/deepseek/image.svg", url: "https://chat.deepseek.com/", apiKey: "456def" }
    );
}

function createContainer(ai, index, gathering) {
    // 1. Container div
    const container = document.createElement("div");
    container.classList.add("container");

    // 2. Mage image
    const img = document.createElement("img");
    img.src = `../Images/mage.svg`;
    img.alt = ai.name;
    img.classList.add("mage");
    container.appendChild(img);

    // 3. Dot
    const dot = document.createElement("img");
    dot.classList.add("dot");
    dot.src = ai.avatar;
    dot.addEventListener("click", () => handleExit(index, ai.url));
    container.appendChild(dot);

    // 4. Input
    const input = document.createElement("textarea");
    input.classList.add("input");
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const request = {
                string: input.value.trim(),
                timestamp: new Date().toISOString(),
                name: ai.name,
                apiKey: ai.apiKey,
                url: ai.url
            };
            sendRequest(request);
            input.value = "";
        }
    });
    input.placeholder = "Type here to command this specific instance."
    container.appendChild(input);
    inputs.push(input);

    // 5. Feedback
    const feedback = document.createElement("p");
    feedback.classList.add("feedback");
    feedback.textContent = "";
    container.appendChild(feedback);

    // 6. Settings button
    const settings = document.createElement("span");
    settings.classList.add("settings");
    settings.addEventListener("click", () => handleSettings(index));
    container.appendChild(settings);

    // 7. Door button
    const door = document.createElement("span");
    door.classList.add("door");
    door.addEventListener("click", () => handleExit(index, ai.url));
    container.appendChild(door);

    // 8. Append to gathering
    gathering.appendChild(container);
}


function handleSettings(index) {
    // TODO : Implement settings pop-up
}

function sendRequest(request) {
    // TODO : Implement send request method
    console.log(request);
}

function handleExit(index, url) {
    window.open(url);
}

masterInput.addEventListener("input", function () {
    inputs.forEach(input => {
        input.value = masterInput.value;
    })
})

masterInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        inputs.forEach(input => {
            const enterEvent = new KeyboardEvent("keydown", { key: "Enter", bubbles: true });
            input.dispatchEvent(enterEvent);
        });

        masterInput.value = "";
    }
});
