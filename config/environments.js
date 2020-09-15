require('dotenv').config();

const environments = {
	production: {
      mysql: {
        username : process.env.dbusername,
        password : process.env.dbpassword,
        database : process.env.database,
        host : process.env.dbhost,
        port : process.env.port
      },
      resturl:{
        coverletter : process.env.coverletter,
        mailserver : process.env.mailserver
      }
    }
}


const nodeEnv = process.env.node_env || 'production';

module.exports = environments[nodeEnv];
