# Flux.js
## A simple library for creating reactive applications using streams 

### Using:
```typescript
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
