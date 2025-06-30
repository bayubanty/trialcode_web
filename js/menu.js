<script>
  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.classList.toggle("show");
  }

  window.onclick = function(event) {
    const isDropdown = event.target.closest('.dropdown');
    const isButton = event.target.matches('.dropbtn') || event.target.closest('.dropbtn');

    if (!isDropdown && !isButton) {
      document.getElementById("dropdown-content")?.classList.remove("show");
    }
  };
</script>

