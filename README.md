![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)

![](/screenshots/logo.png)
# Flux.js
## A simple library for creating reactive applications using streams 

### Using:
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

const Flux = require('@pronix/flux')

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
