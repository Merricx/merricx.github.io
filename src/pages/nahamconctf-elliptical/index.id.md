---
title: "[NahamConCTF 2021] - Elliptical"
date: 2021-03-15 03:00
spoiler: Write-up Elliptical - NahamConCTF 2021
cta: 'crypto'
---


![](./challs.png)

# Challenge

Disediakan website dimana user dapat *sign in* dengan username apa saja, kecuali dengan username `admin`.

![](./4.png)

Setelah *sign in*, website akan menampilkan tampilan static sederhana dengan teks dibawah yang menyatakan bahwa hanya username `admin` yang dapat melihat flag.

![](./1.png)

Dari situ dapat disimpulkan bahwa pada challenge ini, kita diharuskan mengubah username kita menjadi `admin` dengan memanfaatkan *some crypto magic*.

Lalu, apa yang menjadi indikator yang digunakan oleh website sehingga dia mengetahui siapa yang sedang mengakses website tersebut?

# JWT

Tentu saja mekanisme paling umum yang digunakan untuk menyimpan informasi mengenai user yang sedang mengakses sebuah website adalah **cookie**. Website pada challenge ini menggunakan *cookie* dalam bentuk **JSON Web Token** (JWT) untuk menyimpan informasi mengenai user yang sedang mengakses website tersebut.

![](./3.png)

JSON Web Token pada dasarnya terdiri atas 3 bagian, yaitu **header**, **payload**, dan **signature**.

![](./jwt.io.png)

Bagian **header** terdiri dari informasi algoritma yang digunakan sebagai pembentuk bagian **signature**.

Bagian **payload** terdiri dari informasi utama yang disimpan sebagai penanda user tersebut.

Lalu, bagian **signature** adalah hasil Hash dari **header** dan **payload** yang telah diencode menggunakan *Base64* menggunakan algoritma yang didefinisikan oleh **alg** pada bagian **header**.

Bagian **signature** inilah yang digunakan sebagai verifikasi apakah data pada **header** ataupun **payload** telah dilakukan modifikasi atau tidak. Jika data pada **header** atau **payload** dimodifikasi, maka hasil **signature**-nya pasti tidak akan sama, sehingga token akan dianggap tidak valid.


Setiap bagian akan diencode menggunakan *Base64Url* dan dipisahkan dengan tanda titik (**.**).

Pada challenge ini, algoritma Hash yang digunakan adalah **ES256** atau **ECDSA-SHA256** dan pada bagian **payload** hanya berisi data username saja

# Vulnerability Analysis

Jika diperhatikan pada web ini, terdapat sedikit keanehan pada **signature** yang dihasilkan ketika kita mencoba *sign in* berulang kali menggunakan username yang berbeda.

```
Username: admin1
wN0kGlDUj5n8x6GGptROB2PskEeOHe-ONvXE6VDWevsS2fyKPc817Sox60QP-jgXhlM0kVkjKFhk-VUgMSOYjg


Username: some random username
wN0kGlDUj5n8x6GGptROB2PskEeOHe-ONvXE6VDWevuVkYXwniERimgSFQ2cea0-BUwYCLQ60reeuAIyROAxkw


Username: hehehe
wN0kGlDUj5n8x6GGptROB2PskEeOHe-ONvXE6VDWevsfeMT3XhGF_QCc2Ed1V1V9-F5VPrPSakhNGecWfgQQbw
```

Yupp, terdapat pengulangan hasil *signature* yang cukup besar. Algoritma hash yang aman seharusnya ketika terdapat perbedaan meskipun 1 byte inputnya, akan menghasilkan hasil hash yang benar-benar berbeda. Namun disini, hasil *signature* pada 64 byte pertama tidak pernah berubah meskipun inputnya berbeda.

Selain itu, jika kita mengulang proses *sign in* dengan username yang sama berulang-ulang, hasil *signature* pada JWT kita juga tidak berubah sama sekali.

Algoritma pada ES256 atau ECDSA adalah algoritma asimetrik dimana pesan yang sama pun seharusnya menghasilkan signature yang berbeda karena sifat *random* didalamnya.

Hmmm, berarti disini ada sesuatu yang seharusnya *random* namun menjadi tidak *random* :/

# ECDSA

Sekilas akan kita bahas bagaimana algoritma ECDSA melakukan *sign* pada sebuah pesan.

ECDSA (*Elliptic-Curve Digital Signature Algorithm*) adalah varian dari algoritma DSA (Algoritma tanda tangan digital) yang menggunakan *Elliptic-Curve* sebagai kalkulasi penandatangan pesannya.

Pada *Elliptic-Curve*, didefinisikan beberapa parameter-parameter sebelum melakukan penghitungan. Berikut adalah parameter yang digunakan spesifik pada ES256 (*Elliptic-Curve* menggunakan kurva NIST P-256)

```
G = (0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296, 0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5)
n = 115792089210356248762697446949407573529996955224135760342422259061068512044369
d = random(1, n-1)
Q = d * G
```

Dimana

```
G = Elliptic curve base point
n = integer order of G
d = private key
Q = public key
```

Dimisalkan untuk melakukan tanda tangan pada pesan `m` dilakukan:

- Hitung `e`, dimana `e = SHA256(m)`.
- Hitung nilai `z` dimana `z = int(e, 16)`.
- Pilih nilai `k` yang diambil secara **random** pada interval `[1, n-1]`.
- Hitung kurva `(x1, x2) = k * G`
- Hitung `r = x1 % n`. Jika `r = 0`, ulangi pemilihan nilai `k`.
- Hitung `s = (inverse_mod(k, n) * (z + (r * d) % n)) % n`. Jika `s = 0`, ulangi pemilihan nilai `k`.
- Hasil signature yang valid adalah `(r, s)`.

# Not so random k

Seperti yang telah kita analisa sebelumnya, bahwa ada kemungkinan sifat *random* pada proses ECDSA di challenge ini yang tidak *random*. 

Dari proses penghitungan *signing* diatas, hanya nilai `k` yang dipilih secara *random*, sehingga dapat disimpulkan bahwa pada website ini terdapat celah ECDSA *Nonce Reuse* dimana nilai `k` bersifat *static* dan digunakan berulang kali pada proses sign yang berbeda.

Lalu, kenapa bisa nilai `k` yang tidak *random* dapat menyebabkan celah yang cukup *catastrophic*?

Misal diberikan dua signature `(r, s1)` dan `(r, s2)` yang dihasilkan dari *signing* pesan `m1` dan `m2` menggunakan nilai `k` yang sama, attacker dapat menghitung nilai `z1` dan `z2`.

Dikarenakan `s1 - s2 = inverse_mod(k, (z1 - z2))`, attacker dapat mencari nilai `k` dengan menghitung:

```
k = (z1 - z2) / (s1 - s2)
```

Lalu, attacker dapat mendapatkan nilai `d` dengan:

```
d = (s1 * k - z1) / r
```

Pada challenge ini, jika kita pecah struktur JWT pada bagian signature kedalam masing-masing 64 byte menghasilkan dua nilai `(r, s)` seperti yang telah dijelaskan, dimana hanya nilai `s` saja yang berubah ketika melakukan sign dengan `m` yang berbeda.
Karena nilai `k` tidak berubah, maka nilai `r` juga tidak akan berubah, yang menyatakan bahwa analisis kita sebelumnya valid.

# Proof of Concept

Implementasi python untuk mendapatkan private key dan generate JWT dengan user `admin`:

```python
from Crypto.Util.number import *
import requests, base64, hashlib
from fastecdsa import ecdsa
from fastecdsa.curve import P256

def auth(user):
    session = requests.Session()
    response = session.post(url='http://challenge.nahamcon.com:30200/signin', data={'username':user})

    token = session.cookies.get_dict()['token']
    hashed = token.split('.')[0] + '.' + token.split('.')[1]
    signature = token.split('.')[-1]

    raw_signature = base64.b64decode(signature.replace('-', '+').replace('_','/')  + "==").hex()

    return hashed.encode(), int(raw_signature[:64], 16), int(raw_signature[64:], 16)

def modinv(a, modulus):
    return pow(a, modulus - 2, modulus)

def divmod(a, b, modulus):
    return (a * modinv(b, modulus)) % modulus

m1, r, s1 = auth('admim')
m2, r, s2 = auth('admio')

order = P256.q
z1 = int(hashlib.sha256(m1).hexdigest(), 16)
z2 = int(hashlib.sha256(m2).hexdigest(), 16)

k = divmod(z1 - z2, s1 - s2, order)
d = divmod(k * s1 - z1, r, order)
print("[+] Private key:", d)

new_token = b'eyJhbGciOiAiRVMyNTYiLCAidHlwIjogIkpXVCJ9.' + base64.b64encode(b'{"username":"admin"}')
r, s = ecdsa.sign(new_token, d)
print("[+] Forged signature:", (r, s))
new_token += b"." + base64.b64encode(long_to_bytes(r) + long_to_bytes(s)).replace(b'+',b'-').replace(b'/',b'_').replace(b'=',b'')

print("[+] JWT:", new_token.decode())
```

Jalankan dan didapatkan JWT yang valid

```bash
~$ python solve_elliptic.py
[+] Private key: 76360441104529975103479885636071599682318869381694694853301440181334888705951
[+] Forged signature: (66378196147239170843827166360250592759597163597715304772573917957470106804741, 106147551365476994967159598162752611693743616349309630180573719192813726918650)
[+] JWT: eyJhbGciOiAiRVMyNTYiLCAidHlwIjogIkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0=.ksC6RjVxDXfXips96dGXrpC0DoB87qpDSrBrBgn14gXqrWKQDWejXdEUJmwIoIVIcIrt8IuDGIRzZbPzbIjn-g
```

Masukkan JWT tersebut sebagai cookie pada web challenge dan didapatkan flag :D

![](./flag.png)