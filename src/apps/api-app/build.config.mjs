import { defineBuildConfig } from "@open-pioneer/build-support";

export default defineBuildConfig({
    services: {
        TextApiExtension: {
            provides: "runtime.ApiExtension",
            references: {
                textService: "api-app.TextService"
            }
        },
        TextService: {
            provides: "api-app.TextService"
        }
    },
    ui: {
        references: ["api-app.TextService", "application-events.EventService"]
    }
});