const dotenv = require('dotenv').config();
module.exports = {
    PORT: process.env.PORT || 8080,
    mongoRemote:{
        protocol: 'mongodb',
        host: process.env.MONGO_HOST,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        database: process.env.MONGO_DATABASE,
        params: ''
    },
    firebaseConfig:{
        "type": "service_account",
        "project_id": "crud-test-44235",
        "private_key_id": "f09004b6d7d8ef6c11c2e628c00b9660e756a478",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDembsAU/tr8ssB\n6Me651Y+BOz5bpG7L6UHR81Hg8jYyO7LtrUPbqK2SWqUTXMsYXMedmZNubxYZtjK\nwHL2UlGhruns0p1WfdDnmvaoIStO094EJcQdAKNKbwmT+4fYwHMuDZNgcJtwwLjI\nbFOTGAGOQWSM8VSckmylP5zchPrcWcUCZpxGI1ZDQCuihYnWUZ6O1ISiK7IfiKjY\nkFX/GCU6gg8RoKOcu1u6mioTJQyUY56THGQl7m3UIReYem/RrfE/6JmRJ9Hl57mI\nzrik111rJgeD0nHRT1RkcvneUNb4RQ7EisOwU3e24FHvbrOlf0TSLh0KzFp9AJN5\nV9HBb8mNAgMBAAECggEAK1OYxlOSWEyFnvWECqkEbEXhKhuPWfPIF0auegD4ktlp\nQVVqoHpUSU644+y/QiAlnARHnVFNi5dZEv2qYq9bHDFDbsj/vtn2U14iLE9ocoti\nZ0RCi7KYFeDO6HLI2jN7N7eEu/yvBJ8+WCRdj//YLawkuhou8dq+MtvS2Ek52rFx\nbWbu3JdgIINNfxL1BCd/vmhbFrXfGQm2LK/upbekMJ3meY3ROSFgTlrjxN3op4oA\njCiyqDoAKdQtPtWKI58aK6lIZnDLT0Z0rvX1wChvRjufC1Vx/iA3SKvs+TLyNL/z\nVjzUxK4Y2quvypKji5x+0yG9pTDWfqzi+I74/qBlsQKBgQDvh6eaxFR/a5QgfXov\nRL6FhDN+Y6WU4hWi3ukIkIJHWfGWux3xnARw33kEGfjRYV1yUiZIbxP4tSytyRpQ\njfsAIasho0t3KEmfCyU9yNeR3tU2z9whKoREafdYnmGbnQjVmVj+nLA1mf8Vv2Fd\nuGLxmN8cEOyVi5Y2J6jd+bc7qwKBgQDt6BMhOcFrMdVYZxoz+UfhnOPIsPpl1NVg\njwE5khoK/LMByAPNuBfIGhT76eL9Mn04aY5V0MTvi4+vgmpMMhf5K6g79/OZb1Ao\nB3FaThuU/LljoQHZIRblF+E56XqaVDU80Ugv0DqMMS3E2jA2ksykeHl0RhYfV/C2\nox/ejiKXpwKBgA3xgKEywpR0R7godb9gqhKNoo298TqcepPzk+8qslrC8pxKojCZ\nW2zSpXHGrURK/ayU+aOHy8rTiRlItp5v1WepjhO0NMVn8/ktJerV0S6toQ3Cxdas\naeytmndvKNFtL8F3XsXbiypjn4S9kkZpYGEd/AbfOVZvPLxETME3MyJnAoGBALD3\nxvMaMUR5x0eBOj6bGds7hz1MWJbTIP44oiKfCXxOySF0FVA7toUE0cMqEc1idz81\nVcmECFpgKDvX+RZA1RBmZzhkkvH5mViNYMZZ/65t58GyjNtk/9DeWI1pneea6Bcb\nXmUiscqC8pbR7rdJr6xQaZgSYnZiRg61fQliFV1VAoGANNIsIwjjAY4M2EqiRDql\nlnrRf/92tirzE7VtgPgHnQuRXHj9yvg0YOjREMz0D585KLC+Dvhx7ric+lE+nfLv\nC53qR964l3NIiU3px8sujkOsN3zT4mYISgkX1GpvwOt9y/862cKQNouR548izr6O\n7gOyv3J6pjz+WUsfceF6rX4=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-gs7t0@crud-test-44235.iam.gserviceaccount.com",
        "client_id": "111195931377308290076",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gs7t0%40crud-test-44235.iam.gserviceaccount.com"
      }
      
}