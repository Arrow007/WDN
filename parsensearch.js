const matter = require('gray-matter');
const path = require('path');
const lunr = require('lunr');
const fs = require('fs')

const folderPath = './src/pages/common-issues';
const files = fs.readdirSync(folderPath);

const simplifiedData = []

const index = lunr(function () {
    this.ref('title');
    this.field('title');
    this.field('description');
    this.field('content');

    files.forEach(function (file) {
        const filePath = path.join(folderPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const document = {
            title: data.title,
            description: data.description,
            content: content.replace(/\r?\n|\r/g, ''),
        };
        
        const fileName = file.slice(0,-3)
        simplifiedData.push({
            title: data.title,
            slug: fileName,
            description: data.description
        })
        this.add(document);
    }, this);
});
const indexFileName = 'searchIndex'
fs.writeFileSync(`./public/${indexFileName}.json`, JSON.stringify(index))

const simplifiedDataFileName = 'simplifiedData'
fs.writeFileSync(`./public/${simplifiedDataFileName}.json`, JSON.stringify(simplifiedData))