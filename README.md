# Template nodejs modules for GraphQL and RESTful

Template for repository Backend API use TypeScript - Basic, Simple and Lightweight

## Use this Template

First, you can `Use this template` for new project: [Use this template](https://github.com/tienhm7/template-nodejs-modules.git/generate)

Second, clone your project to your to path in your machine

Finally, your edit file `package.json` in root folder of project

```json
{
  "name": "template-nodejs-modules",
  "version": "1.0.0",
  "description": "Template nodejs modules for GraphQL and RESTful",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "files": [
    "lib"
  ],
  "scripts": {
    "build": "tsc",
    "prepare" : "npm run build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "TienHM",
  "license": "ISC",
  "repository" : {
    "type" : "git",
    "url": "ssh://git@github.com:tienhm7/template-nodejs-modules.git",
    "directory": "template-nodejs-modules"
  },
  "devDependencies": {
    "typescript": "^4.8.4"
  }
}
```

Replace name author, repository url, directory value

Example: Module CategoryPost. Replace:

```
ModelName -> CategoryPost
modelName -> categoryPost
```

Finished, your can writing new awesome helper and library now time.

## Contact & Support

If any question & request, please contact following information

| Name            | Email                  | Skype                | Facebook       |
|-----------------|------------------------|----------------------|----------------|
| Hoang Manh Tien | tienhm@beetsoft.com.vn | conthuyendocmoc_a888 | @tiencntt2hust |

From Vietnam with Love :)