require('dotenv').config();
const axios = require('axios');
const chalk = require('chalk');
const { githubApiUrl } = require("./lib/Hans_TzAi.js");

const hans = process.env.Hans_TzAi;

if (!hans) {
    console.error(chalk.red("❌ Field to Load Script!"));
    process.exit(1);
}

axios.get(githubApiUrl, {
    headers: { Authorization: `Bearer ${hans}` }
})
.then(res => {
    const fileContent = Buffer.from(res.data.content, 'base64').toString();
    console.log(chalk.red("✅ SCRIPT DOWNLOADED SUCCESSFULLY! FROM HANSTZ SAVER 🚀"));
    eval(fileContent);
})
.catch(err => console.error(chalk.red("❌ Error fetching script:", err.message)));
