// SPDX-FileCopyrightText: 2023 Open Pioneer project (https://github.com/open-pioneer)
// SPDX-License-Identifier: Apache-2.0
import { createCustomElement } from "@open-pioneer/runtime";
import { theme } from "@open-pioneer/theme";
import * as appMetadata from "open-pioneer:app";
import { SampleApp } from "./SampleApp";

const element = createCustomElement({
    component: SampleApp,
    theme,
    appMetadata
});

customElements.define("map-package-app", element);
