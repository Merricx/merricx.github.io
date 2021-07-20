---
title: "How I Got Free Movie Tickets by Abusing QR-Code"
date: 2019-01-09 19:00
spoiler: How I got free movie tickets through partially censored QR code
cta: 'qr-code'
---


A few days ago, when I browsing Instagram, I found something that quite catch my eyes.

I've found a post from **@soloinfo** account that posted about movie ticket giveaway of **How to Train your Dragon 3** for 2 people. The giveaway was quite simple and same as the commonly giveaway, where user comment and tag other user, then the winner will be determined by randomly selecting those comments.

Here's the image of the post.

![Instagram Post](./instagram-post.png)

# How to ~~Train your Dragon~~ Pwn Someone Tickets

Because the QR code on that image is quite suspicious, I quickly tried to import the image into [QRazyBox](https://merricx.github.io/qrazybox/) and edited some closed parts with manual reconstruction.

![Reconstructing QR code](./reconstructing-qr.png)

Then, looked at the specification of the QR code.

![QR Specification](./qr-specification.png)

Surprisingly, the QR code using **Error Correction Level High**, where as long as there's around **40%** of undamaged part, we can still recover the QR code with *Reed-Solomon*. 

As a measurement, damaged QR code like the following image can be still fully read when using Error Correction Level H.

![Broken QR code](./broken-qr.png)

If such QR code like the above image can still be recovered, especially with the QR code from the post that we talked about where the damaged part is only around 40%.

Let's quickly use *Reed-Solomon Decoder* feature to recover the message.

![Reed-Solomon Decoding](./reed-solomon-decoding.png)

Voila! We finally got the value **#6285647329322;83664**, where **6285647329322** is the phone number of the person who ordered the ticket and **83664** is the ticket booking code. Quickly insert that number into M-Tix machine and we got two free tickets :).

# Moral of Story

So, what message can we take from this story?

### As a User

Please, stop sharing any QR code that contain sensitive data to the Internet like the social media, even if you already censored it.

Nowadays, almost all tickets, receipts, or ther transaction proof use QR code as a medium to validating these transactions because apart from being simple, QR code also have advantages in fast data reading and quite flexible to store any kind of data.

![One Does not Simply](./2qiddz.jpg)

### As a Developer

As a developer who developing system that involve QR code, we should carefully select *Error Correction Level*

QR code with Error Correction Level H on the digital medium like the online ticket is not suitable in my opinion, because Level H intended to QR code that will be distributed in the environment that has the potential to damage the QR code itself (for example QR code that pyshically printed in the public place).

We should better use Level L or Level M to digital QR code and Level Q to physically printed QR code instead.

---

Anyway, I've contacted admin from **@soloinfo** about this and because I didn't intend to claim the ticket, the giveaway is still running normally.