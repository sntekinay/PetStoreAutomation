# 🧪 PetStore API Test Otomasyonu

Bu proje, [Swagger PetStore](https://petstore.swagger.io/)  üzerinde API otomasyon testleri ve yük testleri gerçekleştirilmiştir..

## 🚀 Kullanılan Araçlar

- ✅ **Cypress** – API Test Otomasyonu
- ✅ **Postman** – Test koleksiyonu
- ✅ **Locust** – Yük Testi (Load Test)
- ✅ **Mochawesome** – Cypress raporlama aracı

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
│   ├── locustfile.py
│   └── locust_gui_result.png
├── mochawesome-report/
│   └── mochawesome.html
├── README.md
└── package.json
```

---

## 📬 Postman Testleri

- Postman [Desktop App](https://www.postman.com/downloads/) indirilmeli.
- `postman/PetStore.postman_collection.json` dosyası içe aktarılmalıdır.
- Bu koleksiyon, CRUD işlemleri içeren manuel testleri kapsar.

---

## ✅ Cypress API Testleri

Aşağıdaki endpoint’ler `cypress/e2e/user_api_test.cy.js` dosyasında test edilmiştir:

- `POST /user` – Yeni kullanıcı oluşturma  
- `GET /user/login` – Giriş  
- `GET /user/{username}` – Kullanıcı bilgisi alma  
- `PUT /user/{username}` – Bilgi güncelleme  
- `GET /user/logout` – Çıkış  
- `DELETE /user/{username}` – Silme  

### 🔧 Cypress Çalıştırma

```bash
npx cypress run
```

---

## 📊 Cypress Raporu – Mochawesome

Cypress çalıştırıldığında HTML raporu otomatik oluşur:

- Rapor yolu: `mochawesome-report/mochawesome.html`

📸 Cypress Web Arayüzü:

![Ekran Alıntısı1](https://github.com/user-attachments/assets/7eab3746-37bc-4085-87eb-29f585a6ab5d)

![Ekran Alıntısı2](https://github.com/user-attachments/assets/ae6537c5-c35a-49de-bbb7-bf9d140a3119)

---

## 📈 Locust Yük Testi

`locust/locustfile.py` dosyası kullanılarak API’lerin eş zamanlı kullanıcı yükü altında nasıl davrandığı test edilmiştir.

### 🔧 Locust GUI Modda Çalıştırma

```bash
locust -f locustfile.py
```

Tarayıcıdan:
```
http://localhost:8089
```

📸 Ekran Görüntüsü:
![locustreport](https://github.com/user-attachments/assets/16ce6b6a-68fb-4831-a2e0-ab19f15a8e8d)

---

## ⚙️ Kurulum

### Node.js Gereksinimleri (Cypress ve Raporlama için)

```bash
npm install --save-dev cypress
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### Python Gereksinimleri (Locust için)

```bash
pip install locust
```

---
