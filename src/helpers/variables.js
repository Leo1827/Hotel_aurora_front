export const routeStoragePath =
    import.meta.env.VITE_NODE_ENVIRONMENT === 'dev'
        ? import.meta.env.VITE_STORAGE_URL_DEV
        : import.meta.env.VITE_STORAGE_URL_PROD
