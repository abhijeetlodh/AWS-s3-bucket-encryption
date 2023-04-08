const AWS = require('aws-sdk');

// Set the region to your AWS region
AWS.config.update({region: 'your-region'});

// Set your AWS credentials
AWS.config.update({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key'
});

// Create an S3 client object
const s3 = new AWS.S3();

// Set the name of the bucket you want to enable encryption for
const bucketName = 'your-bucket-name';

// Set the encryption configuration for the bucket
const encryption = { 
  ServerSideEncryptionConfiguration: {
    Rules: [
      {
        ApplyServerSideEncryptionByDefault: {
          SSEAlgorithm: 'AES256'
        }
      }
    ]
  }
};

// Enable server-side encryption for the bucket
s3.putBucketEncryption({ Bucket: bucketName, ServerSideEncryptionConfiguration: encryption }, (err, data) => {
  if (err) {
    console.log(`Error enabling encryption for S3 bucket: ${err}`);
  } else {
    console.log(`Server-side encryption has been enabled for S3 bucket: ${bucketName}`);
  }
});
