import { Config } from "jest";
const config: Config = {
    preset: "ts-jest",
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    }
};
export default config;