import { PackageRepr } from "../service-layer/PackageRepr";
import {
    createConstructorFactory,
    createFunctionFactory,
    ServiceRepr
} from "../service-layer/ServiceRepr";
import { ApiServiceImpl } from "./ApiServiceImpl";
import { ApplicationContextImpl, ApplicationContextProperties } from "./ApplicationContextImpl";

export const RUNTIME_PACKAGE_NAME = "@open-pioneer/runtime";

export type BuiltinPackageProperties = ApplicationContextProperties;

/**
 * Creates the builtin package containing the builtin services.
 *
 * The runtime package should not use services in the `build.config.mjs`
 * for a clean bootstrapping procedure (it will be instantiated without
 * generated application metadata in tests).
 *
 * This function is called as part of the service layer startup.
 * The package produced here is always part of the application.
 */
export function createBuiltinPackage(properties: BuiltinPackageProperties): PackageRepr {
    const apiService = new ServiceRepr({
        name: "ApiServiceImpl",
        packageName: RUNTIME_PACKAGE_NAME,
        factory: createConstructorFactory(ApiServiceImpl),
        interfaces: [
            {
                interfaceName: "runtime.ApiService",
                qualifier: "builtin"
            }
        ],
        dependencies: [
            {
                referenceName: "providers",
                interfaceName: "runtime.ApiExtension",
                all: true
            }
        ]
    });
    const appContext = new ServiceRepr({
        name: "ApplicationServiceImpl",
        packageName: RUNTIME_PACKAGE_NAME,
        factory: createFunctionFactory(
            (options) => new ApplicationContextImpl(options, properties)
        ),
        interfaces: [
            {
                interfaceName: "runtime.ApplicationContext",
                qualifier: "builtin"
            }
        ]
    });

    return new PackageRepr({
        name: RUNTIME_PACKAGE_NAME,
        services: [apiService, appContext]
    });
}