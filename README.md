# Index

1. [Caesar's Cipher](https://github.com/maryplank/SAP003-cipher#caesars-cipher) 

2. [How it works](https://github.com/maryplank/SAP003-cipher#how-it-works)

3. [Usage](https://github.com/maryplank/SAP003-cipher#usage)

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

## Usage

1. Access the program
https://maryplank.github.io/SAP003-cipher/

2. Type your text
On the top text-box, type the text you want to cipher or decipher. You can go nuts and write as many lines as you want, there is no limit.

3. Insert secret key
On the middle box, type a numeric key to encode or decode. It may be a negative number to really mess with whoever tries to decode your note. It must be an integer (you can try to type a decimal number, it just wont work).

4. Choose an operation
You can, then, cipher or decipher the text you entered. 
*For the curious ones:* cipher will add the key value to the alphabet letters, ignoring non-alphabetical characters. Decipher will decrease the key value from the letters. Inputting a negative key will work the other way around.

5. See your secret code!
See your secret or not-so-secret-anymore message show up at the bottom text-box. Copy it to send an encrypted message or just read the decrypted message.

Hope you guys like it :)