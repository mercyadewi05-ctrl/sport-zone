
const form = document.getElementById("form-pemesanan");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil data pelanggan
    const nama = document.getElementById("nama").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const lapangan = document.getElementById("lapangan-pilih").value;
    const durasi = document.getElementById("durasi").value;

    // Daftar harga lapangan
    const harga = {
        "Futsal A": 100000,
        "Futsal B": 120000,
        "Badminton": 80000
    };

    // Menghitung total biaya
    const total = harga[lapangan] * Number(durasi);

    // Membuat nomor pesanan
    const nomor = "SZ" + Date.now().toString().slice(-8);

    // Format tanggal
    const tanggalFormat = new Date(
        tanggal + "T00:00:00"
    ).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // Mencegah input HTML dari pelanggan
    function aman(teks) {
        return teks.replace(/[&<>"']/g, function(char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }[char];
        });
    }

    // Menampilkan bukti pemesanan
    document.getElementById("hasil").innerHTML = `
        <div class="bukti-pembayaran">
            <h2>SPORTZONE</h2>
            <h3>BUKTI PEMESANAN</h3>

            <hr>

            <p><b>No. Pesanan:</b> ${nomor}</p>
            <p><b>Nama:</b> ${aman(nama)}</p>
            <p><b>No. WhatsApp:</b> ${aman(whatsapp)}</p>
            <p><b>Tanggal:</b> ${tanggalFormat}</p>
            <p><b>Lapangan:</b> ${lapangan}</p>
            <p><b>Durasi:</b> ${durasi} Jam</p>

            <hr>

            <h3>Total Pembayaran</h3>
            <h2>Rp${total.toLocaleString("id-ID")}</h2>

            <p><b>Status:</b> LUNAS (SIMULASI)</p>
            <p class="catatan">
                Bukti pembayaran ini hanya untuk demonstrasi
                dan bukan bukti transaksi uang sungguhan.
            </p>

            <button type="button" onclick="window.print()">
                Cetak Bukti
            </button>
        </div>
    `;
});