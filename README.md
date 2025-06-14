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