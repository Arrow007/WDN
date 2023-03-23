const matter = require('gray-matter');
const path = require('path');
const lunr = require('lunr');
const fs = require('fs')

const folderPath = './src/pages/course-issues';
const files = fs.readdirSync(folderPath);



var index = lunr(function () {
    this.ref('title');
    this.field('description');
    this.field('content');

    var lunrIndex = this;



    files.forEach(function (file) {
        const filePath = path.join(folderPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const document = {
            title: data.title,
            description: data.description,
            content: content.replace(/\r?\n|\r/g, ''),
        };
        lunrIndex.add(document);
    });

});



