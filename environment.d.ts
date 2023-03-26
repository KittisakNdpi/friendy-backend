declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            HOST_NAME: string;
            PORT?: number;
        }
    }
};

export { };