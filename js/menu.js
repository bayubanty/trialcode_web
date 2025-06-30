<script>
  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(drop => drop.classList.remove('show'));
    }
  };
</script>
