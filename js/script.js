// Question 1
// changeWord function => Fungsi mengganti/mengubah kata

const ChangeWord = (selectedText, changedText, text) => {
  const findText = new RegExp(selectedText, "gi");
  const newText = text.replace(findText, changedText);

  const result = newText === text ? "The word is not found" : newText;

  return result;
};

const firstSentences =
  "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";
const secondSentences =
  "Negeri Wakanda adalah negeri dengan sumber daya yang sangat melimpah";

console.log("Question 1");
console.log(ChangeWord("Brimo", "Semeru", firstSentences));
console.log(ChangeWord("Wakanda", "Indonesia", secondSentences));

// Question 2
// checkTypeNumber function => Fungsi identifikasi kategori angka (Ganjil-Genap)

const checkTypeNumber = (givenNumber) => {
  if (givenNumber == null) {
    return "Error: Bro where is the parameter?";
  }

  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type!";
  }

  return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
};

console.log("\nQuestion 2");
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

// Question 3
// getAngkaTerbesarKedua function => Fungsi untuk mendapatkan angka terbesar kedua dari sebuah array

const getAngkaTerbesarKedua = (dataNumbers) => {
  if (dataNumbers === undefined || dataNumbers === null) {
    return "Error: Bro where is the parameter?";
  } else if (!Array.isArray(dataNumbers)) {
    return "Error: Data must be an array!";
  } else if (dataNumbers.length < 2) {
    return "Error: Array must have at least two numbers!";
  } else {
    const sortedNumbers = dataNumbers.slice().sort((a, b) => b - a);
    return sortedNumbers[1];
  }
};

const dataArray = [9, 4, 7, 7, 4, 3, 2, 2, 8];
const dataArrayFalse = [8];

console.log("\nQuestion 3");
console.log(getAngkaTerbesarKedua(dataArray));
console.log(getAngkaTerbesarKedua(dataArrayFalse));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

// Question 4
// getTotalPenjualan function => Fungsi untuk membantu Pak Aldi untuk menghitung total seluruh sepatu yang terjual

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualanPakAldi) => {
  if (!Array.isArray(dataPenjualanPakAldi)) {
    return "Error: Data must be an array of object!";
  } else {
    let total = 0;
    for (const product of dataPenjualanPakAldi) {
      if (typeof product.totalTerjual === "number") {
        total += product.totalTerjual;
      } else {
        return "Error: Invalid sales data!";
      }
    }
    return total;
  }
};

console.log("\nQuestion 4");
console.log(getTotalPenjualan(dataPenjualanPakAldi));

// Question 5
// getInfoPenjualan => Fungsi untuk mendapatkan informasi berupa Total Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku Terlaris dan Persentase Keuntungan

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK003141",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const dataPenjualanError = [
  {
    idProduct: "ERRORBOOK",
    namaProduk: "Error Book",
    penulis: "Tester",
    hargaBeli: "Invalid",
    hargaJual: "Invalid",
    totalTerjual: "Invalid",
    sisaStok: "Invalid",
  },
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const getInfoPenjualan = (dataPenjualanIbuDaneila) => {
  if (!Array.isArray(dataPenjualanIbuDaneila)) {
    return "Error: Data must be an array of objects!";
  } else {
    let totalKeuntungan = 0;
    let totalModal = 0;
    let produkBukuTerlaris = "";
    let penulisTerlaris = "";
    let persentaseKeuntungan = 0;

    for (const product of dataPenjualanIbuDaneila) {
      if (
        typeof product.hargaBeli === "number" &&
        typeof product.hargaJual === "number" &&
        typeof product.totalTerjual === "number"
      ) {
        totalModal += product.hargaBeli * product.totalTerjual;
        totalKeuntungan +=
          (product.hargaJual - product.hargaBeli) * product.totalTerjual;

        if (
          !produkBukuTerlaris ||
          product.totalTerjual >
            dataPenjualanIbuDaneila.find(
              (p) => p.idProduct === produkBukuTerlaris
            ).totalTerjual
        ) {
          produkBukuTerlaris = product.idProduct;
        }

        if (
          !penulisTerlaris ||
          product.totalTerjual >
            dataPenjualanIbuDaneila.find((p) => p.idProduct === penulisTerlaris)
              .totalTerjual
        ) {
          penulisTerlaris = product.idProduct;
        }
      } else {
        return "Error: Invalid data!";
      }
    }

    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

    return {
      totalKeuntungan: formatCurrency(totalKeuntungan),
      totalModal: formatCurrency(totalModal),
      produkBukuTerlaris:
        dataPenjualanIbuDaneila.find((p) => p.idProduct === produkBukuTerlaris)
          ?.namaProduk || "",
      penulisTerlaris:
        dataPenjualanIbuDaneila.find((p) => p.idProduct === penulisTerlaris)
          ?.penulis || "",
      persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%",
    };
  }
};

console.log("\nQuestion 5");
console.log(getInfoPenjualan("Error test!"));
console.log(getInfoPenjualan(dataPenjualanError));
console.log(getInfoPenjualan(dataPenjualanNovel));
