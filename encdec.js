const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();


encrypt_password = (e) => {

    let cipher = crypto.createCipheriv('aes-256-cbc',process.env.KEY,process.env.IV);
    let encrypted_text = cipher.update(e,'utf-8','hex');
    encrypted_text += cipher.final('hex');

    return encrypted_text;

}


decrypt_password = e => {

    let decipher = crypto.createDecipheriv('aes-256-cbc',process.env.KEY,process.env.IV)
    let decrypted_text = decipher.update(e,'hex','utf-8');
    decrypted_text += decipher.final('utf-8');

    return decrypted_text;
}

module.exports = {
    encrypt_password,
    decrypt_password
}

