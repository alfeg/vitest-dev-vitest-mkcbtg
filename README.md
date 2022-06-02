# vitest-dev-vitest-mkcbtg

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitest-dev-vitest-mkcbtg)

This repro is show failing tests using setInterval in setup method


# Sometime Vitest will fail with and error

On my machine this may happen only after 5-10 times of execution of `npx vitest`

```
node:internal/event_target:912
  process.nextTick(() => { throw err; });
                           ^
ReferenceError [Error]: window is not defined
    at Timeout._onTimeout (C:/src/exp/vitest-dev-vitest-mkcbtg/Hello.vue:13:19)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
Emitted 'error' event on Tinypool instance at:
    at EventEmitterReferencingAsyncResource.runInAsyncScope (node:async_hooks:202:9)
    at Tinypool.emit (file:///C:/src/exp/vitest-dev-vitest-mkcbtg/node_modules/tinypool/dist/esm/index.js:59:31)
    at Worker.<anonymous> (file:///C:/src/exp/vitest-dev-vitest-mkcbtg/node_modules/tinypool/dist/esm/index.js:543:30)
    at Worker.emit (node:events:527:28)
    at Worker.[kOnErrorMessage] (node:internal/worker:289:10)
    at Worker.[kOnMessage] (node:internal/worker:300:37)
    at MessagePort.<anonymous> (node:internal/worker:201:57)
    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:643:20)
    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)
```

