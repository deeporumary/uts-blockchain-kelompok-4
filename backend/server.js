// Memasukkan library yang dibutuhkan
const express = require('express');
const { ethers } = require('ethers');
const app = express();
const port = 3000;

app.use(express.json());

// 1. KONFIGURASI BLOCKCHAIN (Middleware Setup)
const provider = new ethers.providers.JsonRpcProvider("URL_SEPOLIA_RPC");
const contractAddress = "ALAMAT_KONTRAK_B_ATTEND";
const contractABI = [ /* ABI Smart Contract yang sudah di-compile */ ];

// 2. LOGIKA KONEKSI KONTRAK
async function getContractInstance() {
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
}

// ==========================================
// 3. ENDPOINT API (Bridge Logic)
// ==========================================

/**
 * ENDPOINT 1: POST /api/absen*/
app.post('/api/absen', async (req, res) => {
    const { fullName, nim } = req.body;
    
    try {
        const bAttendContract = await getContractInstance();
        
        // [LOGIKA]: Memanggil fungsi 'submitKehadiran' di Smart Contract
        // const tx = await bAttendContract.submitKehadiran(fullName, nim);
        // await tx.wait();
        
        res.status(200).json({ message: "Data kehadiran berhasil dikirim ke Blockchain!" });
    } catch (error) {
        res.status(500).json({ error: "Gagal memproses transaksi ke jaringan." });
    }
});

/**
 * ENDPOINT 2: GET /api/riwayat*/
app.get('/api/riwayat', async (req, res) => {
    try {
        const bAttendContract = await getContractInstance();
        
        // [LOGIKA]: Memanggil fungsi 'getSemuaRiwayat' dari Smart Contract
        // const data = await bAttendContract.getSemuaRiwayat();
        
        res.status(200).json({ data: "Array data kehadiran dari Sepolia" });
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data dari blockchain." });
    }
});

// 4. MENJALANKAN SERVER
app.listen(port, () => {
    console.log(`Backend B-Attend berjalan di http://localhost:${port}`);
});
