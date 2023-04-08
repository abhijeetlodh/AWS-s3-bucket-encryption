# AWS-s3-bucket-encryption
S3 Bucket Encryption is a Node.js script that enables server-side encryption for an S3 bucket. It encrypts all objects using AES-256 encryption, adding an extra layer of security to your data.


[![Author](https://img.shields.io/badge/Author-Abhijeet%20Lodh-blue.svg)](https://github.com/abhijeetlodh)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction
S3 Bucket Encryption is a simple and easy-to-use Node.js script that allows users to enable server-side encryption for an S3 bucket. The script encrypts all objects stored in the bucket using AES-256 encryption, providing an added layer of security to your data.

## Installation
To use this script, you'll need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).

Next, clone the repository and install the required dependencies:
git clone https://github.com/<username>/s3-bucket-encryption.git
cd s3-bucket-encryption
npm install

## Usage
To use the script, simply run the following command: node index.js <bucket-name>

Replace `<bucket-name>` with the name of the S3 bucket you want to encrypt. That's it! The script will automatically enable server-side encryption for the specified bucket.

/*for example: node index.js my-encrypted-bucket*/

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
This script was developed by Abhijeet Lodh. You can find more of my work on [GitHub](https://github.com/abhijeetlodh).

