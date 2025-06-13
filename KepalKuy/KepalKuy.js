document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("komentarInput");
  const tombol = document.getElementById("tambahKomentarBtn");
  const daftar = document.getElementById("daftarKomentar");

  tombol.addEventListener("click", function () {
    const teks = input.value.trim();
    
    if (teks === "") {
      alert("Komentar tidak boleh kosong!");
      return;
    }

    // Buat elemen komentar (paragraf)
    const elemenKomentar = document.createElement("p");
    elemenKomentar.textContent = teks;
    elemenKomentar.classList.add("komentar-item"); // opsional, jika ingin styling tambahan

    // Buat tombol hapus
    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";
    hapusBtn.classList.add("komentar-hapus");

    // Tambahkan event klik pada tombol hapus
    hapusBtn.addEventListener("click", function () {
      elemenKomentar.remove();
    });

    // Gabungkan tombol hapus ke dalam komentar
    elemenKomentar.appendChild(hapusBtn);

    // Tambahkan komentar ke daftar
    daftar.appendChild(elemenKomentar);

    // Kosongkan input setelah komentar dikirim
    input.value = "";
  });
});
