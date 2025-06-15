export {}

declare const self: ServiceWorkerGlobalScope

interface ServiceWorkerEventMap {
  install: ExtendableEvent
  activate: ExtendableEvent
  fetch: FetchEvent
  message: ExtendableMessageEvent
  push: PushEvent
  notificationclick: NotificationEvent
}

interface ServiceWorkerGlobalScope {
  addEventListener<K extends keyof ServiceWorkerEventMap>(
    type: K,
    listener: (event: ServiceWorkerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void
}
