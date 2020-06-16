![](/screenshots/logo.flux.png)

# Flux.js
![](https://img.shields.io/github/package-json/v/pronix575/flux) ![](https://img.shields.io/npm/dt/@pronix/flux.svg)
### A simple library for creating reactive applications using streams 
## Getting started
### installation:
```
$ yarn add @pronix/flux
```
### using:
```typescript
// TypeScript + es6 modules

import Flux from '@pronix/flux'

interface Person {
    name: string,
    age: number,
    sex: 'male' | 'female' | 'other'
}

const stream = new Flux<Person[]>([])

stream
    .subscribe(
        (data) => console.log(
            data
                .map(p => p.name)
                .join('\n')
        ),
        (data) => {}
        // ...
    )
    .dispatch(
        (data) => {
            data.push({
                name: 'pronix',
                age: 25,
                sex: 'male'
            })
            return data
        }
        // ...
    )
```
```javascript
// JavaScipt + require

const Flux = require('@pronix/flux').default

const stream = new Flux([])

stream
    .subscribe(
        (data) => console.log(
            data
                .map(p => p.name)
                .join('\n')
        ),
        (data) => {}
        // ...
    )
    .dispatch(
        (data) => {
            data.push({
                name: 'pronix',
                age: 25,
                sex: 'male'
            })
            return data
        }
        // ...
    )
```
