describe('Petstore User API Testleri - Senanur Tekinay', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  const username = 'senanur_tekinay';

  it('POST - Yeni kullanıcı oluşturulur', () => {
    cy.request('POST', `${baseUrl}/user`, {
      id: 1,
      username: username,
      firstName: 'Senanur',
      lastName: 'Tekinay',
      email: 'senanur@example.com',
      password: '123456',
      phone: '5555555555',
      userStatus: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('1');
    });
  });

  it('GET - Kullanıcı giriş yapar', () => {
    cy.request('GET', `${baseUrl}/user/login?username=${username}&password=123456`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.include('logged in user session');
      });
  });

  it('GET - Kullanıcı bilgisi alınır', () => {
    cy.request('GET', `${baseUrl}/user/${username}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq(username);
      });
  });

  it('PUT - Kullanıcı bilgisi güncellenir', () => {
    cy.request('PUT', `${baseUrl}/user/${username}`, {
      id: 1,
      username: username,
      firstName: 'Senanur',
      lastName: 'Tekinay',
      email: 'senanur@update.com',
      password: '654321',
      phone: '4444444444',
      userStatus: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET - Kullanıcı çıkış yapar', () => {
    cy.request('GET', `${baseUrl}/user/logout`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('ok');
      });
  });

  it('DELETE - Kullanıcı silinir', () => {
    cy.request('DELETE', `${baseUrl}/user/${username}`)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});
