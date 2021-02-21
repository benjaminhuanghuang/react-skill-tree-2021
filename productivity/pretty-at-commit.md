# Pretty code and commit message at commit

From [React17+React Hook+TS4 最佳实践 仿 Jira 企业级项目 (2021)](https://coding.imooc.com/class/482.html?mc_marking=bb86c9071ed9b7cf12612a2a85203372&mc_channel=hk)

- prettier
```
  npm i -D prettier

  echo {} > .prettierric.json
  touch .prettierignore
```

- husky
hook when commit
```
  # Install husky, lint-staged
  # create config in package.json
  npx mrm lint-staged    
```

- eslint
```
  npm i -D eslint-config-prettier
```
add prettier to eslint extends config

- commitlint
Check the commit message 
```
  npm i -D @commitlint/{config-conventional,cli}
```
add commitlint to husky config