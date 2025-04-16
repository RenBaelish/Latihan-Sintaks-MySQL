const questions = [
    {
      text: "Perintah untuk masuk ke MySQL lewat Command Prompt adalah?",
      options: [
        { value: "a", text: "mysql -user root" },
        { value: "b", text: "connect mysql root" },
        { value: "c", text: "xampp/mysql/bin/mysql.exe -u root" },
        { value: "d", text: "login mysql" },
      ],
      correctAnswer: "c",
      explanation:
        "Untuk masuk ke MySQL melalui Command Prompt, kita menggunakan perintah 'mysql -u root' atau jika menggunakan XAMPP, kita perlu menjalankan executable MySQL dari direktori XAMPP dengan perintah 'xampp/mysql/bin/mysql.exe -u root'. Parameter -u menentukan username yang digunakan untuk login.",
    },
    {
      text: "Untuk melihat semua database yang ada, perintah yang digunakan adalah?",
      options: [
        { value: "a", text: "SHOW DATABASE;" },
        { value: "b", text: "LIST DATABASES;" },
        { value: "c", text: "DISPLAY DATABASES;" },
        { value: "d", text: "SHOW DATABASES;" },
      ],
      correctAnswer: "d",
      explanation:
        "Perintah 'SHOW DATABASES;' digunakan untuk menampilkan daftar semua database yang tersedia di server MySQL. Perhatikan bahwa kata 'DATABASES' menggunakan bentuk jamak (dengan 's' di akhir) dan diakhiri dengan titik koma.",
    },
    {
      text: "Perintah untuk membuat database baru adalah?",
      options: [
        { value: "a", text: "CREATE DATABASE nama;" },
        { value: "b", text: "MAKE DATABASE nama;" },
        { value: "c", text: "INIT DATABASE nama;" },
        { value: "d", text: "CREATE NEW nama;" },
      ],
      correctAnswer: "a",
      explanation:
        "Untuk membuat database baru di MySQL, kita menggunakan perintah 'CREATE DATABASE nama;' dimana 'nama' adalah nama database yang ingin dibuat. Perintah ini akan membuat database kosong yang siap digunakan.",
    },
    {
      text: "Jika ingin menggunakan database yang telah dibuat, perintah yang digunakan adalah?",
      options: [
        { value: "a", text: "OPEN nama_database;" },
        { value: "b", text: "SELECT nama_database;" },
        { value: "c", text: "USE nama_database;" },
        { value: "d", text: "LOAD nama_database;" },
      ],
      correctAnswer: "c",
      explanation:
        "Perintah 'USE nama_database;' digunakan untuk beralih ke database tertentu dan menggunakannya sebagai database aktif. Setelah menjalankan perintah ini, semua operasi selanjutnya akan dilakukan pada database tersebut kecuali ditentukan lain.",
    },
    {
      text: "Perintah untuk menghapus database secara permanen adalah?",
      options: [
        { value: "a", text: "REMOVE DATABASE nama;" },
        { value: "b", text: "DELETE DATABASE nama;" },
        { value: "c", text: "ERASE DATABASE nama;" },
        { value: "d", text: "DROP DATABASE nama;" },
      ],
      correctAnswer: "d",
      explanation:
        "Perintah 'DROP DATABASE nama;' digunakan untuk menghapus database secara permanen beserta semua tabel dan data di dalamnya. Hati-hati saat menggunakan perintah ini karena tidak dapat dibatalkan dan semua data akan hilang.",
    },
    {
      text: "Untuk membuat tabel bernama 'satuan' dengan field satuanId dan satuanNama, perintah yang benar adalah?",
      options: [
        { value: "a", text: "CREATE TABLE satuan (satuanId INT, satuanNama TEXT);" },
        {
          value: "b",
          text: "CREATE TABLE satuan (satuanId INT NOT NULL AUTO_INCREMENT, satuanNama VARCHAR(30) NOT NULL, PRIMARY KEY(satuanId));",
        },
        { value: "c", text: "CREATE TABLE satuan (satuanId PRIMARY, satuanNama);" },
        { value: "d", text: "TABLE CREATE satuan (...);" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah yang benar adalah 'CREATE TABLE satuan (satuanId INT NOT NULL AUTO_INCREMENT, satuanNama VARCHAR(30) NOT NULL, PRIMARY KEY(satuanId));'. Perintah ini membuat tabel dengan kolom satuanId sebagai primary key yang auto-increment dan satuanNama sebagai VARCHAR dengan panjang maksimal 30 karakter yang tidak boleh kosong.",
    },
    {
      text: "Untuk melihat daftar tabel di dalam database, perintah yang digunakan adalah?",
      options: [
        { value: "a", text: "SHOW ALL;" },
        { value: "b", text: "SHOW TABLES;" },
        { value: "c", text: "LIST TABLE;" },
        { value: "d", text: "DESCRIBE TABLES;" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah 'SHOW TABLES;' digunakan untuk menampilkan daftar semua tabel yang ada dalam database yang sedang aktif. Perintah ini sangat berguna untuk melihat struktur database secara keseluruhan.",
    },
    {
      text: "Untuk melihat struktur tabel 'satuan', digunakan perintah?",
      options: [
        { value: "a", text: "STRUCTURE satuan;" },
        { value: "b", text: "DESCRIBE satuan;" },
        { value: "c", text: "SHOW satuan;" },
        { value: "d", text: "PRINT TABLE satuan;" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah 'DESCRIBE satuan;' atau singkatnya 'DESC satuan;' digunakan untuk melihat struktur tabel, termasuk nama kolom, tipe data, apakah kolom dapat bernilai NULL, key constraints, dan nilai default. Perintah ini sangat berguna untuk memahami struktur tabel.",
    },
    {
      text: "Untuk menambahkan kolom 'keterangan' ke tabel satuan, digunakan perintah?",
      options: [
        { value: "a", text: "ALTER TABLE satuan ADD keterangan VARCHAR(25);" },
        { value: "b", text: "ADD COLUMN keterangan TO satuan;" },
        { value: "c", text: "TABLE satuan ALTER keterangan VARCHAR(25);" },
        { value: "d", text: "MODIFY satuan ADD keterangan;" },
      ],
      correctAnswer: "a",
      explanation:
        "Perintah 'ALTER TABLE satuan ADD keterangan VARCHAR(25);' digunakan untuk menambahkan kolom baru bernama 'keterangan' dengan tipe data VARCHAR(25) ke tabel 'satuan'. Perintah ALTER TABLE digunakan untuk memodifikasi struktur tabel yang sudah ada.",
    },
    {
      text: "Untuk mengganti nama kolom 'keterangan' menjadi 'ket' dan tetap dengan tipe varchar(20)?",
      options: [
        { value: "a", text: "ALTER TABLE satuan RENAME keterangan TO ket;" },
        { value: "b", text: "ALTER TABLE satuan CHANGE COLUMN keterangan ket VARCHAR(20);" },
        { value: "c", text: "MODIFY COLUMN keterangan AS ket;" },
        { value: "d", text: "RENAME satuan keterangan ket;" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah 'ALTER TABLE satuan CHANGE COLUMN keterangan ket VARCHAR(20);' digunakan untuk mengganti nama kolom 'keterangan' menjadi 'ket' sekaligus menentukan tipe datanya. Perhatikan bahwa kita harus menentukan ulang tipe data kolom tersebut meskipun tidak berubah.",
    },
    {
      text: "Query untuk menampilkan semua data dari tabel satuan?",
      options: [
        { value: "a", text: "SELECT ALL FROM satuan;" },
        { value: "b", text: "SHOW * FROM satuan;" },
        { value: "c", text: "SELECT * FROM satuan;" },
        { value: "d", text: "GET ALL satuan;" },
      ],
      correctAnswer: "c",
      explanation:
        "Perintah 'SELECT * FROM satuan;' digunakan untuk menampilkan semua kolom dan semua baris data dari tabel 'satuan'. Tanda asterisk (*) adalah wildcard yang berarti 'semua kolom'.",
    },
    {
      text: "Perintah SQL yang digunakan untuk mengambil data unik (tidak duplikat) dari suatu kolom adalah?",
      options: [
        { value: "a", text: "SELECT ONLY nama FROM pelanggan;" },
        { value: "b", text: "SELECT DISTINCT nama FROM pelanggan;" },
        { value: "c", text: "SELECT UNIQUE nama FROM pelanggan;" },
        { value: "d", text: "SELECT DIFFERENT nama FROM pelanggan;" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah 'SELECT DISTINCT nama FROM pelanggan;' digunakan untuk mengambil nilai unik dari kolom 'nama' dalam tabel 'pelanggan'. Ini menghilangkan duplikasi sehingga setiap nilai hanya muncul sekali dalam hasil query.",
    },
    {
      text: "Fungsi dari klausa WHERE dalam perintah SQL adalah?",
      options: [
        { value: "a", text: "Mengurutkan data berdasarkan kolom tertentu" },
        { value: "b", text: "Menyaring data berdasarkan kondisi tertentu" },
        { value: "c", text: "Menggabungkan dua tabel" },
        { value: "d", text: "Menghapus kolom tertentu" },
      ],
      correctAnswer: "b",
      explanation:
        "Klausa WHERE dalam SQL digunakan untuk menyaring (filter) data berdasarkan kondisi tertentu. Ini memungkinkan kita untuk mengambil hanya baris-baris yang memenuhi kriteria yang ditentukan, seperti 'WHERE harga > 1000' atau 'WHERE nama = 'John'.",
    },
    {
      text: "Apa hasil dari query berikut?",
      code: "SELECT COUNT(*) FROM produk;",
      options: [
        { value: "a", text: "Menampilkan semua data dalam tabel produk" },
        { value: "b", text: "Menghitung jumlah kolom dalam tabel produk" },
        { value: "c", text: "Menghitung jumlah baris (record) dalam tabel produk" },
        { value: "d", text: "Menampilkan data unik dalam tabel produk" },
      ],
      correctAnswer: "c",
      explanation:
        "Query 'SELECT COUNT(*) FROM produk;' menghitung jumlah total baris (record) dalam tabel 'produk'. Fungsi COUNT(*) adalah fungsi agregat yang menghitung jumlah baris yang dikembalikan oleh query.",
    },
    {
      text: "Bagaimana cara mengurutkan data berdasarkan kolom 'harga' secara menurun (dari yang terbesar)?",
      options: [
        { value: "a", text: "SELECT * FROM produk SORT BY harga DESC;" },
        { value: "b", text: "SELECT * FROM produk ORDER harga DESC;" },
        { value: "c", text: "SELECT * FROM produk ORDER BY harga DESC;" },
        { value: "d", text: "SELECT * FROM produk ARRANGE BY harga DESC;" },
      ],
      correctAnswer: "c",
      explanation:
        "Perintah 'SELECT * FROM produk ORDER BY harga DESC;' digunakan untuk menampilkan semua data dari tabel 'produk' yang diurutkan berdasarkan kolom 'harga' secara menurun (descending). Kata kunci ORDER BY digunakan untuk pengurutan dan DESC menentukan urutan menurun.",
    },
    {
      text: "Untuk membatasi jumlah baris yang ditampilkan menjadi 5 baris pertama, perintah yang digunakan adalah?",
      options: [
        { value: "a", text: "SELECT * FROM produk LIMIT 5;" },
        { value: "b", text: "SELECT TOP 5 * FROM produk;" },
        { value: "c", text: "SELECT FIRST 5 * FROM produk;" },
        { value: "d", text: "SELECT * FROM produk ROWS 5;" },
      ],
      correctAnswer: "a",
      explanation:
        "Perintah 'SELECT * FROM produk LIMIT 5;' digunakan untuk membatasi hasil query hanya menampilkan 5 baris pertama dari tabel 'produk'. Klausa LIMIT adalah cara standar di MySQL untuk membatasi jumlah baris yang dikembalikan oleh query.",
    },
    {
      text: "Apa fungsi dari operator LIKE dalam SQL?",
      options: [
        { value: "a", text: "Untuk menggabungkan dua tabel" },
        { value: "b", text: "Untuk melakukan operasi matematika" },
        { value: "c", text: "Untuk mencari pola dalam string" },
        { value: "d", text: "Untuk mengurutkan data" },
      ],
      correctAnswer: "c",
      explanation:
        "Operator LIKE dalam SQL digunakan untuk mencari pola tertentu dalam kolom string. Ini sering digunakan dengan wildcard seperti % (mewakili nol atau lebih karakter) dan _ (mewakili tepat satu karakter). Contoh: 'WHERE nama LIKE 'A%'' akan mencari semua nama yang dimulai dengan huruf A.",
    },
    {
      text: "Bagaimana cara menggabungkan dua tabel 'produk' dan 'kategori' berdasarkan kolom 'kategori_id'?",
      options: [
        { value: "a", text: "SELECT * FROM produk, kategori WHERE produk.kategori_id = kategori.id;" },
        { value: "b", text: "SELECT * FROM produk JOIN kategori ON produk.kategori_id = kategori.id;" },
        { value: "c", text: "SELECT * FROM produk COMBINE kategori WHERE produk.kategori_id = kategori.id;" },
        { value: "d", text: "SELECT * FROM produk MERGE kategori ON produk.kategori_id = kategori.id;" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah 'SELECT * FROM produk JOIN kategori ON produk.kategori_id = kategori.id;' digunakan untuk menggabungkan (join) dua tabel berdasarkan kolom yang berhubungan. Ini adalah contoh INNER JOIN yang hanya menampilkan baris yang memiliki kecocokan di kedua tabel.",
    },
    {
      text: "Apa fungsi dari perintah INSERT dalam SQL?",
      options: [
        { value: "a", text: "Mengubah data yang sudah ada" },
        { value: "b", text: "Menambahkan data baru ke dalam tabel" },
        { value: "c", text: "Menghapus data dari tabel" },
        { value: "d", text: "Membuat tabel baru" },
      ],
      correctAnswer: "b",
      explanation:
        "Perintah INSERT digunakan untuk menambahkan data baru (record/baris) ke dalam tabel. Contoh: 'INSERT INTO produk (nama, harga) VALUES ('Laptop', 5000000);' akan menambahkan produk baru dengan nama 'Laptop' dan harga 5000000 ke dalam tabel produk.",
    },
    {
      text: "Bagaimana cara mengubah data yang sudah ada dalam tabel?",
      options: [
        { value: "a", text: "MODIFY produk SET harga = 2000000 WHERE id = 1;" },
        { value: "b", text: "CHANGE produk SET harga = 2000000 WHERE id = 1;" },
        { value: "c", text: "UPDATE produk SET harga = 2000000 WHERE id = 1;" },
        { value: "d", text: "ALTER produk SET harga = 2000000 WHERE id = 1;" },
      ],
      correctAnswer: "c",
      explanation:
        "Perintah 'UPDATE produk SET harga = 2000000 WHERE id = 1;' digunakan untuk mengubah data yang sudah ada dalam tabel. Dalam contoh ini, harga produk dengan id 1 diubah menjadi 2000000. Klausa WHERE sangat penting untuk membatasi baris mana yang akan diubah.",
    },
  ];
