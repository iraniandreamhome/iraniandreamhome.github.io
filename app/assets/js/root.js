$(document).ready(function () {
  $(".loading").hide();
  $(".bg-loading").hide();
  $(".loading-text").hide();
});

function more_social() {
  Swal.fire({
    title: "خطا",
    text: "این گزینه فعلا فعال نیست !",
    icon: "error",
    confirmButtonText: "باشه",
    confirmButtonColor: "#00c3ff",
    showCloseButton: true
  });
}
