const FETCHURL = "/api/sheets/new";
const $sheetForm = document.getElementById("new-sheet-form");
const userId = $sheetForm.dataset.userid;
const $noteInput = document.getElementById("note-input");
const $fileInput = document.getElementById("file-input");

const submitSheet = async (data, file) => {
  console.log(file);
  try {
    const formData = new FormData();
    for (const name in data) {
      formData.append(name, data[name]);
    }
    if (file) {
      formData.append("upload", file);
    }
    const response = await fetch(FETCHURL, {
      method: "POST",
      body: formData,
    });
    if (response.ok) console.log("successfully uploaded sheet");
    window.location.href = "../sheets";
  } catch (error) {
    console.error(error);
  }
};

$sheetForm.addEventListener("submit", (event) => {
  const file = document.getElementById("file-input").files[0];
  event.preventDefault();
  if (!userId) {
    return;
  }
  const sheetDetails = {
    note: $noteInput.value,
    user_id: userId,
  };
  console.log(sheetDetails);
  submitSheet(sheetDetails, file);
});
