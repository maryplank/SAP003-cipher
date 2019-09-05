# Index

1. [Caesar's Cipher](https://github.com/maryplank/SAP003-cipher#caesars-cipher) 

2.  [How it works](https://github.com/maryplank/SAP003-cipher#how-it-works)

3. [About the aplication](https://github.com/maryplank/SAP003-cipher#about-the-application)

4. [Usage](https://github.com/maryplank/SAP003-cipher#usage)

# Caesar's Cipher

Are you familiar with Caesar's cipher?
It's a simple encriptacion method where you shift each letter of the text with an according numerical key. 

For example, the word "LOVE", when encrypted using Caesar's cipher with a *key of 4 (this will be our little secret, ok?)* will become "PSZI".

# How it works
Let's count the letters of the alphabet **starting at 0.**
So: A = 0, B = 1, C = 2... and so on, until Z = 25.
On the example above, we have the following letters:

|Letter | Value |
|-------|-------|
|L      |11     |
|O      |14     |
|V      |21     |
|E      |4      |

If we add our *super-secret key of 4*, our code will be encrypted like this:

|Letter| Value|  Plus key | Result | New letter |
|------|------|-----------|--------|------------|
|L     |11    |+ 4        |15      |P           |
|O     |14    |+ 4        |18      |S           |
|V     |21    |+ 4        |25      |Z           |
|E     |4     |+ 4        |8       |I           |

Caesar's cipher is the perfect way to exchange those secret notes at school! You can still decrypt it easily by your own (if you know the secret key) and protect it from the teacher or other students that has nothing to do with your business.
Communicate secretly with your friends!

If you want a program that will encrypt and decrypt your notes automatically for you, this is your program! Just type the text you want to encrypt, or the text you received and want to decrypt, and we will do all the work for you.

# About the application

This is a web application that can be accessed through a link, just like any website. It was developed fully in JavaScript, meaning that all the logic works client-side, and none of the information inputed is stored anywhere. It also uses HTML and CSS to provide a better user experience, including for mobile screens.

The encriptation logic and functions can be found in the cipher.js file.

It will encrypt uppercase letters, keeping them uppercased and the same goes for lowercase letters. Numbers, punctuation (commas, periods, exclamation points and question marks) and special characters (like letters with accents and other signals) will remain as they are typed, they will be not encrypted.

Example:

**¡Este es un texto de ejemplo! ¿Cómo será encriptado?**

Using a key of 4, this text will be encrypted as:

**¡Iwxi iw yr xibxs hi iniqtps! ¿Góqs wivá irgvmtxehs?**

As you can see, the letters with accents and puctuation were not encrypted, so you should have that in mind when typing your message.

Also, the program allows for **negative key input**. If you'd like to, let's say, encrypt the same message above with an **-1 key**, it will **subtract** 1 from the letters values. Let's see an example:

**¡Este es un texto de ejemplo! ¿Cómo será encriptado?**

Using a key of -1, this text will be encrypted as:

**¡Drsd dr tm sdwsn cd didlokn! ¿Bóln rdqá dmbqhoszcn?**

And finally, in this application, the alphabet has 25 letters (because we started at 0, remember?) so inserting a key of 26 will go around the alphabet back to the letters you typed. That means that it will not be encrypted.


## Usage

**1. Access the program** <br>
https://maryplank.github.io/SAP003-cipher/

**2. Type your text** <br>
On the top text-box, type the text you want to cipher or decipher. You can go nuts and write as many lines as you want, there is no limit.

**3. Insert secret key** <br>
On the middle box, type a numeric key to encode or decode. It may be a negative number to really mess with whoever tries to decode your note. It must be an integer (you can try to type a decimal number, it just won't work).

**4. Choose an operation** <br>
You can, then, cipher or decipher the text you entered. 
*For the curious ones:* 'Cipher it!' button will **add** the key value to the alphabet letters, ignoring non-alphabetical characters. 'Decipher it!' button will **subtract** the key value from the letters. Inputting a negative key will work the other way around.

**5. See your secret code!** <br>
See your secret or not-so-secret-anymore message show up at the bottom text-box. Copy it to send an encrypted message or just read the decrypted message.

Hope you guys like it :)
