// Tab switcher
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// Authenticator logic
document.addEventListener("DOMContentLoaded", () => {
    showSection("home");

    const form = document.getElementById("authForm");
    const resultBox = document.getElementById("resultBox");
    const infoBox = document.getElementById("drugInfoBox");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const drug = document.getElementById("drugInput").value;

            document.getElementById("resultName").textContent = drug;
            document.getElementById("resultBatch").textContent = "BATCH-789XY";
            document.getElementById("resultManufacturer").textContent = "MedPharma Labs";
            document.getElementById("resultExpiry").textContent = "12-Dec-2026";
            document.getElementById("resultRemarks").textContent = "Packaging verified. No tampering detected.";

            const authStatus = document.getElementById("authStatus");
            authStatus.textContent = "✔️ Authentic";
            authStatus.classList.remove("fake");

            resultBox.classList.remove("hidden");
            infoBox.classList.remove("hidden");
        });
    }
});

// Inventory logic
function submitStoreDetails() {
    const location = document.getElementById('location').value.trim();
    const storeName = document.getElementById('storeName').value.trim();

    if (location && storeName) {
        document.getElementById('storeForm').classList.add('hidden');
        document.getElementById('inventorySection').classList.remove('hidden');
    } else {
        alert("Please fill in both Location and Store Name.");
    }
}
