# Boilerplate de next.js

![Badge](https://img.shields.io/github/license/PedroHenry-Santos/boilerplate-next?style=flat&label=LICENSE&color=FFC300&labelColor=000000)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/PedroHenry-Santos/boilerplate-next?style=flat&labelColor=000000&color=FFC300)
![GitHub last commit](https://img.shields.io/github/last-commit/PedroHenry-Santos/boilerplate-next?color=FFC300&style=flat&labelColor=000000)
![GitHub repo size](https://img.shields.io/github/repo-size/PedroHenry-Santos/boilerplate-next?color=FFC300&labelColor=000000)


[![Badge](https://img.shields.io/badge/NextJS-blue?style=flat&logo=next.js&color=000&labelColor=000000)](https://nextjs.org/)
[![Badge](https://img.shields.io/badge/REACT-blue?style=flat&color=5ED8F6&labelColor=000000&logo=react)](https://pt-br.reactjs.org/)
[![Badge](https://img.shields.io/badge/Typescript-blue?style=flat&logo=typescript&color=3178C7&labelColor=000000)](https://www.typescriptlang.org/)
[![Badge](https://img.shields.io/badge/Storybook-blue?style=flat&logo=Storybook&color=F64686&labelColor=000000)](https://www.typescriptlang.org/)
[![Badge](https://img.shields.io/badge/Jest-blue?style=flat&logo=jest&color=38C213&labelColor=000000)](https://jestjs.io/pt-BR/)
[![Badge](https://img.shields.io/badge/styled--components-blue?style=flat&logo=styled-components&color=343434&labelColor=000000)](https://styled-components.com/)
[![Badge](https://img.shields.io/badge/Babel-blue?style=flat&logo=babel&color=F5DA55&labelColor=000000)](https://babeljs.io/)
[![Badge](https://img.shields.io/badge/ESLint-blue?style=flat&logo=eslint&color=6D59CE&labelColor=000000)](https://eslint.org/)
[![Badge](https://img.shields.io/badge/Prettier-blue?style=flat&logo=prettier&color=BF85BF&labelColor=000000)](https://prettier.io/)
[![semantic-release](https://img.shields.io/badge/semantic--release-blue?logo=semanticrelease&labelColor=000000&color=fff)](https://github.com/semantic-release/semantic-release)
[![lint staged](https://img.shields.io/badge/lint--staged-brightgreen.svg?labelColor=000000&color=EA4B4B&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflBw0WIwUcf3hwAAABkUlEQVQ4y7WRsS9DYRTFz319T9JoRIJamhi6SbAhFQuLQWqijWCwiojEqAlJY5EYhREDkgpbY+Jv6GY0mEXSDlX5foYXeUhREnf77jnn3nO+K/134fr6oFiETOZvAzg9xQ0N4fb2YHX1F0Iz2N6G5eWod3gI6fQPlhMJyOXg8hKy2Y/Y8DCsrLzv+RE4OCjb2BD1uri+lubmzGs0IjwIZKmUeH5usrW7G87Pob29eZyZGTg7g62tkDc6+okwPw9TU83/oVDAbW6C2ZsTuLp6e3shtV6XOjoiYWcn5POiVJIqFfOKRTOQpDDWw4MI+T7O96V0WlpYCF14nlSridtbKZcze3n5GLetTRofly0twf6+cLu7uOnp1k7b1YW7uMCNjEA2i9vZEZyctCR2AwNQLkN/fzTw+NgPLX8nTKWk9XVZEIjZWfOq1Qj1PIO1NSkel46ORBDIenqk3l4pkxFjY7L7e+ngQLq7i4TxuLS4KGq18DRMTkoTE1IsJj0+imRSlkh8bevpSVYum93ctBL/23oF18jX8BuQvz0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMTNUMjI6MzU6MDUrMDA6MDBTJQXMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTEzVDIyOjM1OjA1KzAwOjAwIni9cAAAAABJRU5ErkJggg==)](https://github.com/okonet/lint-staged)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?labelColor=000000&color=E6E6E6)](http://commitizen.github.io/cz-cli/)
[![Badge](https://img.shields.io/badge/commitlint-conventional--changelog-blue?style=flat&color=F6627C&labelColor=000000)](https://commitlint.js.org/#/)
[![husky](https://img.shields.io/badge/husky-dog.svg?labelColor=000000&color=42B983&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflBw0WIA/Xh8KtAAABhklEQVQ4y42TsUtCURTG73uIKA4NIrq4GDxpcHER2iTQQRQErcD2oj9ByDkcXiAN5SBugovgplP9BQ6uQUlDQyAKCRF6fw03eV5T69vud8859zvfOVeIFYBpwu0t8v0drq4cvlJRXK0GhiG2AVkosAqZSMDhocaRz6/mmFoFI5vVz7mcEGucyOVWTy5dQiAgNIHB4G+ZOqcXMF5f9ejRSAhzTeVotNb32RmMx9BoINNpp9f5HGlZEI3CfO74kkpBswmTCZRKAh4fnUvbhstLxZ2cOFM4PVXcxQXc3DiPPDwI6HadAh8f4PFsnRJer4pZotMRcHysjykSUcFHR9BqQa+HrFbB74f9fX3MxeKPD/W6Yp6fkS6X8mWx0IMHA+TeHry8KOL+fs1My1KvxOPw+ckmyHYb/H6kZW3ZRLcbhkN2QZ6fb19lymX+xHQKodCGZJ9Pd3iXCtve8BfCYWH4fOI/MA4ONigwTbi7g9kM3t7g+hoZi0EkApkMst+Hry/k0xMkk8u8b0y18Wulft5IAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTEzVDIyOjMyOjE0KzAwOjAw2yQVnwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0xM1QyMjozMjoxNCswMDowMKp5rSMAAAAASUVORK5CYII=)](https://typicode.github.io/husky/#/)

<div align="center">
  <img alt="podcastr" title="podcastr" src=".github/img.png" width="500px" />
</div>


# :page_with_curl: Índice

* [Sobre o projeto](#interrobang-sobre-o-projeto)
  - [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Executando a aplicação](#rocket-executando-a-aplicação)
* [Para contribuir](#mailbox-para-contribuir)
* [Histórico de atualizações](#clock10-histórico-de-atualizações)

# :interrobang: Sobre o projeto

Criação de um boilerplate para facilitar a criação e configuração de um novo projeto Next com as ferramentas mais utilizadas.

## 🧑‍💻 Tecnologias utilizadas

- [Next](https://nextjs.org/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Styled-components](https://styled-components.com/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Commitizen](hhttp://commitizen.github.io/cz-cli/)
- [Commitlint](https://commitlint.js.org/#/)
- [Husk](https://typicode.github.io/husky/#/)
- [Next PWA](https://github.com/shadowwalker/next-pwa#readme)
- [Plop JS](https://plopjs.com/)


# :rocket: Executando a aplicação

Primeiramente clone o repositório para sua maquina ou faça o 'download' em formato ZIP e descompacte. Para realizar a clonagem do repositório utilize o comando:

    git clone git@github.com:PedroHenry-Santos/boilerplate-next-styled-typescript.git

Após basta instalar as dependência utilizando o gerenciador de pacote de sua preferência. Conforme abaixo:

    yarn install

E utilizar o comando:

    yarn dev

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

# :mailbox: Para contribuir

Caso queira ajudar a implementar novas funcionalidade nessa aplicação, poderá seguir o **roteiro de funcionalidades** a seguir. Ou também poderá propor sua própria funcionalidade.

Para isso basta seguir o [roteiro](https://github.com/PedroHenry-Santos/boilerplate-next/blob/main/CONTRIBUTING.md) em CONTRIBUTING.
## :clock10: Histórico de atualizações

Para saber sobre as [versões](https://github.com/PedroHenry-Santos/boilerplate-next/releases) deste código consulte o CHANGELOG detalhado.

# :lock: Licença

[MIT License](https://github.com/PedroHenry-Santos/boilerplate-next/blob/main/LICENCE.md) ® [Pedro Santos](https://github.com/PedroHenry-Santos)
