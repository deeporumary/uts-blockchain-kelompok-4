// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract BAttend {

    address public admin;

    struct DataKehadiran {
        address walletAddress;
        string fullName;
        string nim;
        uint256 timestamp;
    }

    DataKehadiran[] public riwayatKehadiran;
    mapping(address => bool) public statusKehadiran;

    event KehadiranTercatat(address indexed walletAddress, string fullName, string nim, uint256 timestamp);

    // ==========================================
    // ACCESS CONTROL
    // ==========================================
    constructor() {
        admin = msg.sender;
    }

    modifier hanyaAdmin() {
        require(msg.sender == admin, "Hanya Admin yang diizinkan!");
        _;
    }

    // ==========================================
    // FUNGSI INTI
    // ==========================================

    // 1. Fungsi Pencatatan (Write)
    function submitKehadiran(string memory _fullName, string memory _nim) public {
    }

    // 2. Fungsi Verifikasi (Read)
    function cekStatusHadir(address _wallet) public view returns (bool) {
    }

    // 3. Fungsi Verifikasi (Read)
    function getSemuaRiwayat() public view returns (DataKehadiran[] memory) {
    }

    // 4. Fungsi Tambahan Khusus Admin menggunakan Modifier
    function resetAbsensi() public hanyaAdmin {
    }
}
