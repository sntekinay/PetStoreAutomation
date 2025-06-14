# 🧪 PetStore API Test Otomasyonu

Bu proje, [Swagger PetStore](https://petstore.swagger.io/) API'si üzerinde hem **fonksiyonel API testleri** hem de **yük testleri** gerçekleştirmek amacıyla oluşturulmuştur.  
Projede kullanılan araçlar:  
- ✅ Cypress (API Test Otomasyonu için)  
- ✅ Postman (Manuel test ve koleksiyon)  
- ✅ Locust (Yük Testi için)  
- ✅ Mochawesome (Cypress raporlama)

---

## 📁 Proje Yapısı

```
PetStoreAutomation/
├── cypress/                
│   └── e2e/
│       └── user_api_test.cy.js
├── postman/                
│   └── PetStore.postman_collection.json
├── locust/                 
│   └── locustfile.py
├── mochawesome-report/     # ✅ Cypress test raporu (HTML)
│   └── mochawesome.html
├── screenshots/            # Locust GUI ekran görüntüsü
│   └── locust_gui_result.png
├── README.md               
└── package.json            
```

---

## ✅ Cypress API Testleri

`cypress/e2e/user_api_test.cy.js` dosyasında aşağıdaki endpointler test edilmiştir:

- `POST /user` – Yeni kullanıcı oluşturma  
- `GET /user/login` – Giriş  
- `GET /user/{username}` – Kullanıcı bilgisi  
- `PUT /user/{username}` – Bilgi güncelleme  
- `GET /user/logout` – Çıkış  
- `DELETE /user/{username}` – Silme  

### 🧪 Çalıştırmak için:

```bash
npx cypress run
```

---

## 📊 Cypress Raporu – Mochawesome

Cypress testleri sonrası detaylı bir HTML raporu otomatik olarak oluşur:

📄 **mochawesome.html:**  
`mochawesome-report/mochawesome.html`

> Bu rapor tarayıcıda açıldığında her testin sonucu, hatalar, süre ve detayları görsel olarak sunar.

---

## 📤 Postman

`postman/PetStore.postman_collection.json` dosyasıyla API'ler manuel olarak da test edilebilir.

---

## 📈 Locust Yük Testi

`locust/locustfile.py` dosyası üzerinden PetStore kullanıcı işlemleri yük altında test edilmiştir.

### GUI Modda Çalıştırmak için:

```bash
locust
```

Açılan tarayıcıdan:  
👉 http://localhost:8089

### 📸 Ekran Görüntüsü:

- `screenshots/locust_gui_result.png` içinde GUI rapor ekranının görüntüsü yer almaktadır.

---

## 📌 Ek Bilgiler

- Tüm testlerde kullanılan kullanıcı adı: `senanur_tekinay`
- `node_modules/` klasörü `.gitignore` ile dahil edilmemiştir.
- Projeyi çalıştırmak için önce bağımlılıkları yükleyin:

```bash
npm install
```

---

## 👤 Geliştirici

**Senanur Tekinay**  
GitHub: [@sntekinay](https://github.com/sntekinay)

## 🔧 Kurulum

Aşağıdaki adımlarla projeyi kendi bilgisayarınızda çalıştırabilirsiniz.

---

### ✅ Node.js Gereksinimleri (Cypress ve Raporlama için)

1. `Node.js` yüklü değilse [https://nodejs.org](https://nodejs.org) üzerinden kurun.
2. Proje dizinine terminal ile gidin ve aşağıdaki komutları çalıştırın:

```bash
npm install --save-dev cypress
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

> Eğer Allure kullanacaksanız:
```bash
npm install --save-dev @shelex/cypress-allure-plugin
npm install -g allure-commandline --save-dev
```

---

### 🐍 Python Gereksinimleri (Locust için)

1. Python kurulu değilse [https://python.org](https://python.org) adresinden kurun.
2. Terminal veya komut istemine şu komutu yazın:

```bash
pip install locust
```

---

### 📦 Postman

- Postman ile manuel test yapmak için sadece [Postman Desktop App](https://www.postman.com/downloads/) yüklenmelidir.
- Ardından `postman/PetStore.postman_collection.json` dosyasını içe aktarabilirsiniz.

---

### 📌 Notlar

- Cypress testleri için çalıştırma komutu:

```bash
npx cypress run
```

- Locust yük testi için GUI modda çalıştırma:

```bash
locust
```

- Cypress HTML raporu:
  - `mochawesome-report/mochawesome.html` dosyasını tarayıcıda açabilirsiniz.
- Locust GUI ekran görüntüsü veya `locust_report.html` dosyası `locust/` klasöründedir.