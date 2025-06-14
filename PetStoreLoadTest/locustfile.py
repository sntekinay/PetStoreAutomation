from locust import HttpUser, task, between

class PetstoreUser(HttpUser):
    wait_time = between(1, 3)
    username = "senanur_tekinay"

    @task
    def post_user(self):
        self.client.post("/v2/user", json={
            "id": 1,
            "username": self.username,
            "firstName": "Senanur",
            "lastName": "Tekinay",
            "email": "senanur@example.com",
            "password": "123456",
            "phone": "5555555555",
            "userStatus": 1
        })

    @task
    def get_login(self):
        self.client.get(f"/v2/user/login?username={self.username}&password=123456")

    @task
    def get_user(self):
        self.client.get(f"/v2/user/{self.username}")

    @task
    def put_user(self):
        self.client.put(f"/v2/user/{self.username}", json={
            "id": 1,
            "username": self.username,
            "firstName": "Senanur",
            "lastName": "Tekinay",
            "email": "senanur@update.com",
            "password": "654321",
            "phone": "4444444444",
            "userStatus": 1
        })

    @task
    def get_logout(self):
        self.client.get("/v2/user/logout")

    @task
    def delete_user(self):
        self.client.delete(f"/v2/user/{self.username}")
