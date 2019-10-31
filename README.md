<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

![](https://github.com/fastify/fastify/workflows/ci/badge.svg)
![](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg)
![](https://github.com/fastify/fastify/workflows/website/badge.svg)
[![Build Status](https://dev.azure.com/fastify/fastify/_apis/build/status/fastify.fastify)](https://dev.azure.com/fastify/fastify/_build/latest?definitionId=1)
[![Known Vulnerabilities](https://snyk.io/test/github/fastify/fastify/badge.svg)](https://snyk.io/test/github/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md)

</div>

<br />

An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users.
How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests as possible, without sacrificing security validations and handy development?

Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

### Install

Install with npm:
```
npm i fastify --save
```
Install with yarn:
```
yarn add fastify
```

### Quick start with Fastify CLI

Good tools make API development quicker and easier to maintain than doing everything manually.

The [Fastify CLI](https://github.com/fastify/fastify-cli) is a command line interface tool that can create new projects, manage plugins, and perform a variety of development tasks testing and running the application.

The goal in this guide is to build and run a simple Fastify project, using the [Fastify CLI](https://github.com/fastify/fastify-cli), while adhering to the Style Guide recommendations that benefit every Fastify project.

### Fastify v1.x

Code for Fastify's **v1.x** is in [Branch 1.x](https://github.com/fastify/fastify/tree/1.x), so all Fastify 1.x related changes should be based on **`branch 1.x`**.

> ## Note
> `.listen` binds to the local host, `localhost`, interface by default (`127.0.0.1` or `::1`, depending on the operating system configuration). If you are running Fastify in a container (Docker, [GCP](https://cloud.google.com/), etc.), you may need to bind to `0.0.0.0`. Be careful when deciding to listen on all interfaces; it comes with inherent [security risks](https://web.archive.org/web/20170711105010/https://snyk.io/blog/mongodb-hack-and-secure-defaults/).
> See [the documentation](https://github.com/fastify/fastify/blob/master/docs/Server.md#listen) for more information.

## Ecosystem
- [Core](https://github.com/fastify/fastify/blob/master/docs/Ecosystem.md#core) - Core plugins maintained by the _Fastify_ [team](#team).
- [Community](https://github.com/fastify/fastify/blob/master/docs/Ecosystem.md#community) - Community supported plugins.
- [Live Examples](https://github.com/fastify/example) - Multirepo with a broad set of real working examples.

## License

Licensed under [MIT](./LICENSE).

For your convenience, here is a list of all the licenses of our production dependencies:
- MIT
- ISC
- BSD-3-Clause
- BSD-2-Clause
